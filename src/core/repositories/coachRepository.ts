import Coach from '../../db/models/coach.model';
import User from '../../db/models/user.model';



export default interface CoachRepository {

    create(coach: Coach,): Promise<Coach>;
    findOne(id: Coach['id']): Promise<Coach>;
    findAll(): Promise<Coach[]>;
    update(id: Coach['id'], coach: Coach): Promise<Coach>;

}
