import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";
import { Alerta } from "./alerta";
import { Valor } from "./valor";

export class HistoricoAlerta extends Model { }
HistoricoAlerta.init({
    id_historico: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        // onDelete: "CASCADE",
    },
    data: {
        type: DataTypes.DATE,
        allowNull: true,
    },
},
    {
        timestamps: false,
        sequelize: db,
        modelName: "historico_alerta",
        tableName: "historico_alerta",
    }
);


HistoricoAlerta.belongsTo(Alerta, { foreignKey:{name:'fk_alerta', allowNull: false}, onDelete: "CASCADE" })
HistoricoAlerta.belongsTo(Valor, { foreignKey: {name:'fk_valor', allowNull: false} , onDelete: "CASCADE"}) 