import ClubRepository from '../core/repositories/clubRepository';
import Club from '../db/models/club.model';
import ClubModel from '../db/models/club.model';




export default class ClubDataSource implements ClubRepository {
  async create(club: Club): Promise<Club> {

    const clubDb = await ClubModel.create(club)

    return clubDb

  }
  findOne(id: number ): Promise<Club> {
    throw new Error('Method not implemented.');
  }
  update(id: number , changes: Partial<Club>): Promise<Club> {
    throw new Error('Method not implemented.');
  }

}
