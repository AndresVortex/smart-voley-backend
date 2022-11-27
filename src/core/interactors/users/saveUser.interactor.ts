import User from "../../entities/User";
import UserRepository from '../../repositories/userRepository';
import NotifierRepository from "../../repositories/notifierRespository";
import AuthRepository from '../../repositories/authRepository';

const saveUser = (
  userRepository: UserRepository,
  authRepository: AuthRepository,
  notifierRepository: NotifierRepository
  ) => async (user: User): Promise<{user: User, token?: string }> => {


  //Crear usuario
  const newUser = await userRepository.create(user)

  //Notificar por correo al usuario creado
  notifierRepository.notifyUser(newUser)

  //Return del usuario creado
  return {user: newUser}

}

export default saveUser
