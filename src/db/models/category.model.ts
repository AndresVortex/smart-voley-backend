import { Model, InferAttributes, InferCreationAttributes, CreationOptional, HasManyGetAssociationsMixin, Association, ModelStatic, Sequelize, ModelAttributes, DataTypes } from 'sequelize';
import ICategory from '../../core/entities/Category';
import User from './user.model';

export const CATEGORY_TABLE = 'category'


class Category extends Model<InferAttributes<Category>, InferCreationAttributes<Category>>{

  declare id: CreationOptional<ICategory['id']>
  declare name: ICategory['name']
  declare ageMax: ICategory['ageMax']
  declare desc:CreationOptional<ICategory['desc']>


// timestamps!
  declare readonly createdAt: CreationOptional<Date>
  declare readonly updatedAt:  CreationOptional<Date>


  declare getUsers: HasManyGetAssociationsMixin<User>;
  declare static associations: {
    users: Association<Category, User>
  }

   //methods
   static associate( user: ModelStatic<User>) {
    //models associate
    this.hasMany(user, { as: 'users', foreignKey: 'user_id'  })
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category',
      timestamps: true
    }
  }
}


export const categorySchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,

  },
  ageMax: {
    type: DataTypes.INTEGER,
    allowNull: false,

  },
  desc: {
    type: DataTypes.STRING,
    allowNull: true,

  },
  createdAt: {
    type: DataTypes.DATE,
    field: 'created_at',

  },
  updatedAt: {
    type: DataTypes.DATE,
    field: 'updated_at'
  }
}



export default Category
