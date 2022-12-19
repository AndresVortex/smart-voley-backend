import { Model, DataType, Sequelize, DataTypes, ModelStatic, NonAttribute } from 'sequelize';
import User from './coach.model';
import IRange from '../../core/entities/Range';
import { ICreateRange } from '../../core/entities/Range';
import StatisticsAthlete from './statisticsAthlete.model';

export const RANGE_TABLE = 'range'

 class Range extends Model<IRange, ICreateRange>{
  declare id: IRange['id']
  declare point: IRange['point']
  declare desc: IRange['desc']

  declare statisticsAthlete: NonAttribute<StatisticsAthlete>
   // timestamps!
  declare createdAt: IRange['createdAt']
  declare updatedAt: IRange['updatedAt']


  //methods
  static associate(statisticsAthlete: ModelStatic<StatisticsAthlete>) {
    //models associate
    this.hasMany(statisticsAthlete, {as: 'statisticsAthlete', foreignKey: 'statistics_athlete_id'})
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: RANGE_TABLE,
      modelName: 'Range',
      timestamps: true
    }
  }


}

export const rangeSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  point: {
    type: DataTypes.SMALLINT,
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

export default Range
