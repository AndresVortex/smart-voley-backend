import bcrypt from 'bcrypt'
import  { UpdateUser } from '../core/entities/User';
import UserRepository from '../core/repositories/userRepository';
// import sequelize from '../libs/sequelize'
import UserModel from '../db/models/user.model'
import { CreateUser } from '../core/entities/User';
import Boom from '@hapi/boom';
import IUser from '../core/entities/User';


export default class UserDataSource implements UserRepository {

  public async create(user: CreateUser): Promise<IUser> {


    const hash = await bcrypt.hash(user.password, 10)
    const userHash = {
      ...user,
      password: hash
    }
    const newUser = await UserModel.create(userHash)
    return newUser

  }
  async getByEmail(email: string): Promise<IUser> {
    const user = await UserModel.findOne({
      where: {
        email
      }
    })
    if (!user) {
      throw Boom.badRequest()
    }
    return user
  }
  async getById(id: number): Promise<IUser> {

    const user = await UserModel.findByPk(id)

    if (!user) {
      throw Boom.badRequest()
    }
    return user
  }

  async update(id: number, changes: UpdateUser): Promise<IUser> {
    await this.getById(id)

    const userUpdate = await UserModel.update(changes, {
      where: {
        id
      },
      returning: true
    })

    return userUpdate[1][0]
  }
  async find(): Promise<IUser[]> {
    const user = await UserModel.findAll({
      include: ['role']
    })

    return user

  }
}
