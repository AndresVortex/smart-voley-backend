import bcrypt from 'bcrypt'

import UserRepository from '../core/repositories/userRepository';
import sequelize from '../libs/sequelize'
import UserModel from '../db/models/user.model'
import User from '../db/models/user.model'


import Boom from '@hapi/boom';

const { models } = sequelize

export default class UserDataSource implements UserRepository {

  public async create(user: User): Promise<User> {


    const hash = await bcrypt.hash(user.password, 10)
    const userHash = {
      ...user,
      password: hash
    }
    // const newUser = await sequelize.models.User.create(userHash)
    const newUser = await UserModel.create(userHash)
    return newUser

  }
  async getByEmail(email: string): Promise<User> {
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
  async getById(id: number): Promise<User> {

    const user = await UserModel.findByPk(id)

    if (!user) {
      throw Boom.badRequest()
    }
    return user
  }

  async update(id: number, changes: User): Promise<User> {
    await this.getById(id)

    const userUpdate = await UserModel.update(changes, {
      where: {
        id
      },
      returning: true
    })

    return userUpdate[1][0]
  }
  async find(): Promise<User[]> {
    const user = await UserModel.findAll({
      include: ['role']
    })

    return user

  }
}
