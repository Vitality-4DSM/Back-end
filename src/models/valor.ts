import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";
import { Parametro } from "./parametro";

export class Valor extends Model { }
Valor.init({
    id_valor: {
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
    unixtime: {
        type: DataTypes.BIGINT,
        allowNull: false,
    },
},
    {
        timestamps: false,
        sequelize: db,
        modelName: "valor",
        tableName: "valor",
    }
);

Valor.belongsTo(Parametro, { foreignKey: 'id_parametro' });