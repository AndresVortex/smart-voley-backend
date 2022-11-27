import AuthRepository from "../../repositories/authRepository";
import IUser from '../../entities/User';
import UserRepository from '../../repositories/userRepository';
import { Payload } from '../../repositories/authRepository';




export default class Auth {

  constructor(
    private readonly authRepository: AuthRepository,
    private readonly userRepository: UserRepository
    ){
    this.authRepository= authRepository
    this.userRepository = userRepository
  }

  generateToken(payload: Payload):string {
    const token = this.authRepository.signToken(payload)
    return token
  }
  async changeStatus(id:IUser['id'], status: IUser['status'] ): Promise<IUser> {
    const  userActive = await this.userRepository.update(id, {status})
    return userActive

  }
  async changeLogin(id:IUser['id'], login: IUser['login'] ): Promise<IUser> {
    const  userLogin = await this.userRepository.update(id, {login})
    return userLogin

  }
  async recovery(email: IUser['email']):Promise<void>{

    return this.authRepository.sendRecovery(email)
  }
  async changePassword(token: string, newPassword: string):Promise<void>{
    return this.authRepository.changePassword(token, newPassword)
  }
}
