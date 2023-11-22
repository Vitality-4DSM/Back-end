import { Sequelize } from 'sequelize';

<<<<<<< Updated upstream
// const db = new Sequelize('api', 'root', 'root', {
//     host: 'localhost',
//     dialect: 'mysql',
//     logging: true
// });
=======
const db = new Sequelize('api', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});
>>>>>>> Stashed changes

const db = new Sequelize('postgresql://Jonatas-Dallo:Y7QiL3dgwPeJ@ep-rapid-union-63652562.us-east-2.aws.neon.tech/vitality-gaia?sslmode=require');

export default db;
