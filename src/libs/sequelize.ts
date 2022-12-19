import { Sequelize } from "sequelize-typescript";

import { config } from '../config'
import setupModels  from '../db/models'



const { dbName, dbHost, dbPassword, dbPort, dbUser } = config
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);


const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging: false,
  // models: ['..\db\models\*.model.ts'],
  // modelMatch: (filename, member) => {
  //   console.log(filename, member)
  //   return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  // },
});
// const sequelize = new Sequelize(dbName, dbUser, 'vortex22', {
//   host: dbHost,
//   port: dbPort
//   dialect: 'postgres',
//   logging: false,
// });
setupModels(sequelize)
console.log(sequelize.models)
// console.log({sequelize})

export default sequelize;
