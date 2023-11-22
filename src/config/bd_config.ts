import { Sequelize } from 'sequelize';

const db = new Sequelize('api', 'root', 'fatec', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

// const db = new Sequelize('postgresql://Jonatas-Dallo:Y7QiL3dgwPeJ@ep-rapid-union-63652562.us-east-2.aws.neon.tech/vitality-gaia?sslmode=require');

export default db;