import User from '../../db/models/user.model';
import Coach from '../../db/models/coach.model';

export default interface NotifierRepository {
  notifyUser(user: User, coach: Coach): Promise<void>
}
