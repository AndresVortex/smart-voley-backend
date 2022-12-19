import Club from '../../../db/models/club.model';
import ClubRepository from '../../repositories/clubRepository';




export default class CreateClub {

  constructor(
    private readonly clubRepository:ClubRepository
  ){
    this.clubRepository = clubRepository
  }



  async handle(club: Club){

    const clubDb = await this.clubRepository.create(club)

    return clubDb
  }
}
