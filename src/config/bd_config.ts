import { Sequelize } from 'sequelize';

const db = new Sequelize('postgresql://Jonatas-Dallo:Y7QiL3dgwPeJ@ep-rapid-union-63652562.us-east-2.aws.neon.tech/vitality-gaia?sslmode=require');


// const db = new Sequelize('api', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: true
// });

export default db;