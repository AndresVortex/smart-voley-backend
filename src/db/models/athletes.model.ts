import {Model, Sequelize, DataTypes, ModelStatic, InferAttributes, InferCreationAttributes, CreationOptional, Association, ForeignKey, NonAttribute, HasOneGetAssociationMixin, BelongsToGetAssociationMixin} from 'sequelize'
// import ICoach from '../../core/entities/Athletes'

import User from './user.model';
import IAthletes from '../../core/entities/Athletes';
import Category from './category.model';
import Club from './club.model';

export const ATHLETES_TABLET = 'athletes'





export class Athletes extends Model<InferAttributes<Athletes, {omit: 'user'} >, InferCreationAttributes<Athletes, {omit: 'user'}>> {

  declare id: CreationOptional<IAthletes['id']>
  declare name: IAthletes['name']
  declare lastName: CreationOptional<IAthletes['lastName']>
  declare dateBirth: CreationOptional<IAthletes['dateBirth']>
  declare height: IAthletes['height']
  declare weight: IAthletes['weight']
  declare categoryId: ForeignKey<IAthletes['categoryId']>
  declare clubId: ForeignKey<IAthletes['clubId']>
  declare userId: ForeignKey<IAthletes['userId']>

  declare user?: NonAttribute<User>


  // timestamps!
  declare readonly createdAt: CreationOptional<Date>
  declare readonly updatedAt:  CreationOptional<Date>

  declare getUser: BelongsToGetAssociationMixin<User>;
  declare static associations: {
    user: Association<Athletes, User>
    category: Association<Athletes, Category>
    club: Association<Athletes>
  }

  //methods
  static associate( user: ModelStatic<User>, category: ModelStatic<Category>, club: ModelStatic<Club>) {
    //models associate
    this.belongsTo(user, { as: 'user', foreignKey: 'user_id'  })
    this.belongsTo(category, { as: 'category', foreignKey: 'category_id' })
    this.belongsTo(club, { as: 'club', foreignKey: 'club_id' })

  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ATHLETES_TABLET,
      modelName: 'Athletes',
      timestamps: true
    }
  }


}

export const athletesSchema = {
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
  height: {
    type: DataTypes.INTEGER,
    allowNull:true,

  },
  weight: {
    type: DataTypes.INTEGER,
    allowNull:true,
  },
  // userId: {
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


export default Athletes
