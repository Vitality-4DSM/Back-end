import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";

export class TipoParametro extends Model { }
TipoParametro.init(
    {
        id_tipo_parametro: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            onDelete: "CASCADE",
        },
        nome: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        unidade: {
            type: DataTypes.STRING(10),
            allowNull: false,
        },
        descricao: {
            type: DataTypes.STRING(300),
        },
        json: {
            type: DataTypes.JSON,
            allowNull: false
        },
        fator: {
            type: DataTypes.FLOAT,
        },
        offset: {
            type: DataTypes.INTEGER,
        },
        cadastro: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    }, {
    timestamps: false,
    sequelize: db,
    modelName: "tipo_parametro",
    tableName: "tipo_parametro",
}
);