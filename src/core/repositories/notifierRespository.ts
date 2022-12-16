import User from '../../db/models/user.model';

export default interface NotifierRepository {
  notifyUser(user: User): Promise<void>
}
