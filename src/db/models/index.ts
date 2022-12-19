import { Sequelize } from 'sequelize';
import User, { userSchema } from './user.model';
import Coach, { coachSchema } from './coach.model';
import Category from './category.model';
import { categorySchema } from './category.model';
import Club from './club.model';
import { clubSchema } from './club.model';
import Athletes from './athletes.model';
import { athletesSchema } from './athletes.model';
import Range from './range.model';
import { rangeSchema } from './range.model';
import StatisticsType, { statisticsTypeSchema } from './statisticsType.model';
import ActionType from './actionType.model';
import { actionTypeSchema } from './actionType.model';
import StatisticsAthlete from './statisticsAthlete.model';
import { statisticsAthleteSchema } from './statisticsAthlete.model';




export default function setupModels(sequelize: Sequelize){
  User.init(userSchema, User.config(sequelize))
  Coach.init(coachSchema, Coach.config(sequelize))
  Category.init(categorySchema, Category.config(sequelize))
  Club.init(clubSchema, Club.config(sequelize))
  Athletes.init(athletesSchema, Athletes.config(sequelize))
  Range.init(rangeSchema, Range.config(sequelize))
  StatisticsType.init(statisticsTypeSchema, StatisticsType.config(sequelize))
  ActionType.init(actionTypeSchema, ActionType.config(sequelize))
  StatisticsAthlete.init(statisticsAthleteSchema, StatisticsAthlete.config(sequelize))
  //associates
  User.associate(Coach)
  Coach.associate(User)
  Category.associate(User)
  Club.associate(Coach)
  Athletes.associate(User, Category, Club)
}

