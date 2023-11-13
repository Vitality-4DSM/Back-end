import { Sequelize } from "sequelize";

const db = new Sequelize('api', 'root', 'admin', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true
});

export default db;