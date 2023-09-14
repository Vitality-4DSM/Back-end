import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
import { Alert } from "./Alert";
import { Valor } from "./Valor";

export class HistoricAlert extends Model { }
HistoricAlert.init({
    id_historico: {
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
        modelName: "historico_alerta",
        tableName: "historico_alerta",
    }
);


HistoricAlert.belongsTo(Alert, { foreignKey: 'id_alerta' })
HistoricAlert.belongsTo(Valor, { foreignKey: 'id_valor' }) 