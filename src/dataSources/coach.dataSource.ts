import Boom  from '@hapi/boom';
import CoachRepository from '../core/repositories/coachRepository';
import Coach from '../db/models/coach.model';
import CoachModel from '../db/models/coach.model';
import User from '../db/models/user.model';
import sequelize from '../libs/sequelize';
import bcrypt from 'bcrypt';




export default class CoachDataSource implements CoachRepository {
  async create(coach: Coach): Promise<Coach> {

    try {


      const result = await sequelize.transaction( async(t) => {

        if (coach.user) {
          const hash = await bcrypt.hash(coach.user.password, 10)

          const coachHash = {
            ...coach,
            user: {
              ...coach.user,
              password: hash
            }
          }
          const coachDb = await CoachModel.create(coachHash, {
            include: ['user'],
            transaction: t
          })

          return coachDb
        }

      })

      if (!result) {
        throw Boom.badImplementation('Creación fallida')
      }

      return result
    } catch (error: any) {

      throw new Error(error);
    }
  }
  async findOne(id: number): Promise<Coach> {
    const coachDb = await CoachModel.findByPk(id)
    if(!coachDb){
        throw Boom.badRequest('No existe el coach')
    }
    return coachDb
  }
  async findAll(): Promise<Coach[]> {
    const coaches = await CoachModel.findAll()

    return coaches
  }
  async update(id: number, coach: Coach): Promise<Coach> {
    const coachDb = await this.findOne(id)

    const coachUpdate = await coachDb.update(coach)

    return coachUpdate
  }

}
