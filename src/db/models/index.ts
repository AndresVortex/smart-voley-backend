import { Sequelize } from 'sequelize';
import User, { userSchema } from './user.model';
import Coach, { coachSchema } from './coach.model';




export default function setupModels(sequelize: Sequelize){
  User.init(userSchema, User.config(sequelize))
  Coach.init(coachSchema, Coach.config(sequelize))

  //associates
  User.associate(Coach)
  Coach.associate(User)
}

