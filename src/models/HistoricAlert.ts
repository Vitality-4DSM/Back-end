import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";

export class HistoricAlert extends Model { }
HistoricAlert.init({
    id_historico: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        onDelete: "CASCADE",
    },

    data_ocorrencia: {
        type: DataTypes.DATE,
        allowNull: false,
    },
},
    {
        timestamps: false,
        sequelize: db, 
        modelName: "historico_alerta",
        tableName: "historico_alerta",
    }
);