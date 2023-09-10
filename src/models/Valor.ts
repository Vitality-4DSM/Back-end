import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
import { Parameter } from "./Parameter";

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

Valor.belongsTo(Parameter, { foreignKey: 'id_parametro' });