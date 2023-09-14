import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config";
import { TypeParameter } from "./TypeParameter";
import { Station } from "./Station";

export class Parameter extends Model { }
Parameter.init({
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


Parameter.belongsTo(Station, { foreignKey: 'id_estacao' });
Parameter.belongsTo(TypeParameter, { foreignKey: 'id_tipo_parametro' });