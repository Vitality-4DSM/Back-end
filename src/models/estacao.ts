import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";

export class Estacao extends Model { }
Estacao.init(
  {
    id_estacao: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      onDelete: "CASCADE",
    },
    identificador: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },
    latitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    longitude: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    instalacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: db,
    modelName: "estacao",
    tableName: "estacao",
  }
);
