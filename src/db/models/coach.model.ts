import {Model, Sequelize, DataTypes, ModelStatic, InferAttributes, InferCreationAttributes, CreationOptional, Association, ForeignKey, NonAttribute, HasOneGetAssociationMixin, BelongsToGetAssociationMixin} from 'sequelize'
import ICoach from '../../core/entities/Coach'

import User from './user.model';

export const COACH_TABLET = 'coach'





export class Coach extends Model<InferAttributes<Coach, {omit: 'user'} >, InferCreationAttributes<Coach, {omit: 'user'}>> {

  declare id: ICoach['id']
  declare name: ICoach['name']
  declare lastName: CreationOptional<ICoach['lastName']>
  declare dateBirth: CreationOptional<ICoach['dateBirth']>

  declare userId: ForeignKey<User['id']>

  declare user?: NonAttribute<User>


  // timestamps!
  declare readonly createdAt: CreationOptional<Date>
  declare readonly updatedAt:  CreationOptional<Date>

  declare getUser: BelongsToGetAssociationMixin<User>;
  declare static associations: {
    user: Association<Coach, User>
  }

  //methods
  static associate( user: ModelStatic<User>) {
    //models associate
    this.belongsTo(user, { as: 'user', foreignKey: 'user_id'  })
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: COACH_TABLET,
      modelName: 'Coach',
      timestamps: true
    }
  }


}

export const coachSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: true,
    field: 'last_name'
  },
  dateBirth: {
    type: DataTypes.DATE,
    allowNull: true,
    field: 'date_birth'
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


export default Coach
