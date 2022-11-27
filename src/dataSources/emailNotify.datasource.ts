import User from '../core/entities/User';
import NotifierRepository from '../core/repositories/notifierRespository';
import nodemailer, {SendMailOptions} from 'nodemailer'
import { config } from '../config/index';

interface IMailOptions {
  from: string,

}
export default class EmailNotifier implements NotifierRepository {
  async notifyUser(user: User): Promise<void> {
    const mailOptions: SendMailOptions = {
      from: "Nombre del proyecto/empresa",
      to: user.email,
      subject: 'Asunto',
      text: `El usuario ${user.name} ${user.lastName} fue registrado con éxito`
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
