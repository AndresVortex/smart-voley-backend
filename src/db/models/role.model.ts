import {Model, DataType, Sequelize, DataTypes, ModelStatic} from 'sequelize'
import IRole, {ICreateRole} from '../../core/entities/Role';
import User from './user.model';

export const ROLE_TABLE = 'roles'

export default class Role extends Model<IRole, ICreateRole>{
  public id!: IRole['id']
  public name!: IRole['name']
  public description!: IRole['description']

   // timestamps!
  public createdAt!: IRole['createdAt']
  public updatedAt!: IRole['updatedAt']


  //methods
  static associate(model: ModelStatic<User>) {
    //models associate
    this.hasMany(model, {as: 'users', foreignKey: 'roleId'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ROLE_TABLE,
      modelName: 'Role',
      timestamps: true
    }
  }


}

export const roleSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },

}
