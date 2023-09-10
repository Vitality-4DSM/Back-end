import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
import { Parameter } from "./Parameter";

export class Alert extends Model { }
Alert.init(
    {
    id_alerta: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        onDelete: "CASCADE",
    },
    parametro_verificar: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    qual_estacao: {
        type: DataTypes.STRING(30),
        allowNull: false,
    },
},
    {
        timestamps: false,
        sequelize: db, 
        modelName: "alerta",
        tableName: "alerta",
    }
);