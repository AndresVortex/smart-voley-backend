import { Model, DataType, Sequelize, DataTypes, ModelStatic, InferAttributes, InferCreationAttributes, CreationOptional, NonAttribute, HasOneGetAssociationMixin, Association } from 'sequelize';
import IUser from '../../core/entities/User'

import Coach from './coach.model';

export const USER_TABLET = 'users'





export class User extends Model<InferAttributes<User, {omit: 'coach'}>, InferCreationAttributes<User, {omit: 'coach'}>> {

  declare id: IUser['id']
  declare email: IUser['email']
  declare password: IUser['password']
  declare status: CreationOptional<IUser['status']>
  declare login: CreationOptional<IUser['login']>
  declare recoveryToken: CreationOptional<IUser['recoveryToken']>


  declare coach?: NonAttribute<Coach>
  // timestamps!
  declare readonly createdAt: CreationOptional<Date>
  declare readonly updatedAt: CreationOptional<Date>


  // declare readonly updatedAt: IUser['updatedAt']
  // declare readonly deletedAt!: Date // activar paranoid

  declare getCoach: HasOneGetAssociationMixin<Coach>;

  declare static associations: {
    coach: Association<User, Coach>
  }
  //methods
  static associate(coach: ModelStatic<Coach>) {
    //models associate
    this.hasOne(coach, { as: 'coach', foreignKey: 'user_id'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: USER_TABLET,
      modelName: 'User',
      timestamps: true
    }
  }

}

export const userSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  login: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  recoveryToken: {
    allowNull: true,
    field: 'recovery_token',
    type: DataTypes.STRING,
  },
  // roleId: {
  //   field: 'role_id',
  //   type: DataTypes.INTEGER,
  //   allowNull: false,
  //   references: {
  //     model: ROLE_TABLE,
  //     key: 'id'
  //   },
  //   onUpdate: 'CASCADE',
  //   onDelete: 'SET NULL'

  // },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',

  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}


export default User
