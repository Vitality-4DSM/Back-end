import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";
 
export class Usuario extends Model { }
Usuario.init(
    {
        id_usuario: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            // onDelete: "CASCADE"
        },
        nome: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        cargo: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        senha: {
            type: DataTypes.STRING(100),
            allowNull: false,
        },
        cadastro: {
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