import User from "../../entities/User";
import UserRepository from '../../repositories/userRepository';
import NotifierRepository from "../../repositories/notifierRespository";
import AuthRepository from '../../repositories/authRepository';
import CoachRepository from '../../repositories/coachRepository';
import Coach from "../../../db/models/coach.model";


class SaveCoach {

  constructor(

    private readonly coachRepository: CoachRepository,


    private readonly notifierRepository: NotifierRepository
  ) {

    this.notifierRepository = notifierRepository
    this.coachRepository= coachRepository
  }



  async handle(coach: Coach) {
    //Crear usuario
    const coachDb = await this.coachRepository.create(coach)

    //Notificar por correo al usuario creado
    if (coachDb.user) {

      this.notifierRepository.notifyUser(coachDb.user)
    }

    //Return del usuario creado
    return { coach: coachDb }
  }
}

export default SaveCoach
