import { Model, InferAttributes, InferCreationAttributes, CreationOptional, ForeignKey, ModelStatic, Sequelize, DataTypes } from 'sequelize';
import IStatisticsAthlete from '../../core/entities/StatisticsAthlete';
import Athletes from './athletes.model';


export const STATISTICS_ATHLETE_TABLE = 'statistics_athlete'

class StatisticsAthlete extends Model<InferAttributes<StatisticsAthlete>, InferCreationAttributes<StatisticsAthlete> >{

  declare id: CreationOptional<IStatisticsAthlete['id']>
  declare athleteId: ForeignKey<IStatisticsAthlete['athleteId']>
  declare rangeId: ForeignKey<IStatisticsAthlete['rangeId']>
  declare statisticsTypeId: ForeignKey<IStatisticsAthlete['statisticsTypeId']>
  declare action_type: ForeignKey<number>

  // timestamps!
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;



   //methods
   static associate( athletes: ModelStatic<Athletes>) {
    //models associate
    this.belongsTo(athletes, { as: 'athletes', foreignKey: 'athlete_id'  })
  }
  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: STATISTICS_ATHLETE_TABLE,
      modelName: 'StatisticsAthlete',
      timestamps: true
    }
  }
}


export const statisticsAthleteSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
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



export default StatisticsAthlete
