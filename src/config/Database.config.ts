import { Sequelize } from "sequelize";

const db = new Sequelize('api', 'root', 'root',{
    host: 'localhost',
    dialect:'mysql',
    logging: true
});

export default db;