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
        valor: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        sinal: {
            type: DataTypes.STRING(3),
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


Alert.belongsTo(Parameter,{ foreignKey: 'id_parametro'})