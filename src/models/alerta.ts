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
        NomeDaEstação: {
            type: DataTypes.STRING(60),
            allowNull: false,
        },
        TipoDeAlerta: {
            type: DataTypes.STRING(2),
            allowNull: false,
        },
        valor: {
            type: DataTypes.FLOAT,
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