import Club from '../../db/models/club.model';
import IClub from '../entities/Club';


export default interface ClubRepository {
  create(club: Club): Promise<Club>
  findOne(id: IClub['id']): Promise<Club>
  update(id: IClub['id'], changes: Partial<Club>): Promise<Club>
}
