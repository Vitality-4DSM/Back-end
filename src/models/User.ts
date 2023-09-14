import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config"; 

export class User extends Model { }
User.init(
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            onDelete: "CASCADE"
        },
        perfil: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        criado: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: "usuario",
        tableName: "usuario",
    }
);