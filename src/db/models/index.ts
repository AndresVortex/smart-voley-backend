import { Sequelize } from 'sequelize';
import { USER_TABLET, User, userSchema } from './user.model';
import Role, { roleSchema,  } from './role.model';




export default function setupModels(sequelize: Sequelize){
  User.init(userSchema, User.config(sequelize))
  Role.init(roleSchema, Role.config(sequelize))


  //associates
  Role.associate(User)
  User.associate(Role)
}

