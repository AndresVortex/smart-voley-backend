import { InferAttributes, InferCreationAttributes, Model, CreationOptional, NonAttribute, BelongsToGetAssociationMixin, Association, ModelStatic, Sequelize, DataTypes, ForeignKey } from 'sequelize';
import IClub from '../../core/entities/Club';
import Coach from './coach.model';

export const CLUB_TABLE = 'club'

class Club extends Model<InferAttributes<Club>, InferCreationAttributes<Club>>{
  declare id: CreationOptional<IClub['id']>
  declare name: IClub['name']
  declare coachId: ForeignKey<IClub['coachId']>


  declare coach?: NonAttribute<Coach>

  // timestamps!
  declare readonly createdAt: CreationOptional<Date>
  declare readonly updatedAt:  CreationOptional<Date>

  declare getCoach: BelongsToGetAssociationMixin<Coach>;

  declare static associations: {
    coach: Association<Club, Coach>

  }
  //methods
  static associate( coach: ModelStatic<Coach>, ) {
    //models associate
    this.belongsTo(coach, { as: 'coach', foreignKey: 'coach_id'  })

  }

  static config(sequelize: Sequelize) {
    return {
      sequelize,
      tableName: CLUB_TABLE,
      modelName: 'Club',
      timestamps: true
    }
  }
}


export const clubSchema = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
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

export default Club
