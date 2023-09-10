import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config"; // Asegúrate de que esto esté correctamente configurado

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