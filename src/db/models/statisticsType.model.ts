import { Model, ModelStatic, Sequelize, DataTypes } from 'sequelize';
import IStatisticsType from '../../core/entities/StatisticsType';
import { ICreateStatisticsType } from '../../core/entities/StatisticsType';
import StatisticsAthlete from './statisticsAthlete.model';


export const STATISTICS_TYPE_TABLE = 'statistics_type'

class StatisticsType extends Model<IStatisticsType, ICreateStatisticsType> {
  declare id: IStatisticsType['id']
  declare name: IStatisticsType['name']
  declare desc?: IStatisticsType['desc']
  declare createdAt: IStatisticsType['createdAt']
  declare updatedAt: IStatisticsType['updatedAt']



   //methods
   static associate( statisticsAthlete: ModelStatic<StatisticsAthlete>) {
    //models associate
    this.hasMany(statisticsAthlete, { as: 'statisticsAthlete', foreignKey: 'statistics_athlete'  })
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: STATISTICS_TYPE_TABLE,
      modelName: 'StatisticsType',
      timestamps: true
    }
  }
}



export const statisticsTypeSchema = {
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


export default StatisticsType
