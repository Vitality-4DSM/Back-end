import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config"; 

export class Station extends Model { }
Station.init(
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
      type: DataTypes.DECIMAL(9, 6), 
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DECIMAL(8,6), 
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
