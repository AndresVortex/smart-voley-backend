// import User from '../core/entities/User';

import NotifierRepository from '../core/repositories/notifierRespository';
import nodemailer, {SendMailOptions} from 'nodemailer'
import { config } from '../config/index';
import User from '../db/models/user.model';
import Coach from '../db/models/coach.model';

interface IMailOptions {
  from: string,

}
export default class EmailNotifier implements NotifierRepository {
  async notifyUser(user: User,  coach: Coach): Promise<void> {
    const mailOptions: SendMailOptions = {
      from: "Nombre del proyecto/empresa",
      to: user.email,
      subject: 'Asunto',
      text: `El usuario ${coach.name} ${coach.lastName} fue registrado con éxito`
    }
    await this.sendMail(mailOptions)
  }
  async sendMail(infoMail: SendMailOptions):Promise<void> {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      secure: true,
      port: 465,
      auth: {
        user: config.emailUser,
        pass: config.emailPass
      }
    })

    await transporter.sendMail(infoMail)

  }

}
