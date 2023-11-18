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
        TipoDeAlerta: {
            type: DataTypes.STRING(2),
            allowNull: false,
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        data: {
            type: DataTypes.DATE,
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