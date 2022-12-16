import Boom  from '@hapi/boom';
import CoachRepository from '../core/repositories/coachRepository';
import Coach from '../db/models/coach.model';
import CoachModel from '../db/models/coach.model';
import User from '../db/models/user.model';




export default class CoachDataSource implements CoachRepository {
  async create(coach: Coach): Promise<Coach> {

    const coachDb = await CoachModel.create(coach, {
      include: ['user'],
    })
    return coachDb
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
