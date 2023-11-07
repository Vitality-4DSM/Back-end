import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";
import { Parametro } from "./parametro";

export class Alerta extends Model { }
Alerta.init(
    {
        id_alerta: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            // onDelete: "CASCADE",
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


Alerta.belongsTo(Parametro, { foreignKey: {name:'fk_parametro', allowNull: false}, onDelete: "CASCADE" })