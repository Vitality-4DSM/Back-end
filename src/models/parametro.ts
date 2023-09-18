import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";
import { TipoParametro } from "./tipo_parametro";
import { Estacao } from "./estacao";

export class Parametro extends Model { }
Parametro.init({
    id_parametro: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        onDelete: "CASCADE",
    },
},
    {
        timestamps: false,
        sequelize: db,
        modelName: "parametro",
        tableName: "parametro",
    }
);


Parametro.belongsTo(Estacao, { foreignKey: 'id_estacao' });
Parametro.belongsTo(TipoParametro, { foreignKey: 'id_tipo_parametro' });