import UserRepository from '../../repositories/userRepository';
import IUser from '../../entities/User';



export default class  ListUsers {
  constructor(
    private readonly userRepository: UserRepository
  ){
    this.userRepository = userRepository
  }

  async handle (): Promise<IUser[]> {
    const users = await this.userRepository.find()
    return users
  }
}

