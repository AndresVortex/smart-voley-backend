import { Model, ModelStatic, Sequelize, DataTypes } from 'sequelize';
import StatisticsAthlete from './statisticsAthlete.model';
import IActionType from '../../core/entities/ActionType';
import { ICreateActionType } from '../../core/entities/ActionType';


export const ACTION_TYPE_TABLE = 'action_type'

class ActionType extends Model<IActionType, ICreateActionType> {
  declare id: IActionType['id']
  declare name: IActionType['name']
  declare desc?: IActionType['desc']
  declare createdAt: IActionType['createdAt']
  declare updatedAt: IActionType['updatedAt']



   //methods
   static associate( statisticsAthlete: ModelStatic<StatisticsAthlete>) {
    //models associate
    this.hasMany(statisticsAthlete, { as: 'statisticsAthlete', foreignKey: 'action_type'  })
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: ACTION_TYPE_TABLE,
      modelName: 'ActionType',
      timestamps: true
    }
  }
}



export const actionTypeSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  desc: {
    type: DataTypes.STRING,
    allowNull: false,
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


export default ActionType
