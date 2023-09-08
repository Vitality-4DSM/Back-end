import { DataTypes, Model } from "sequelize";
import db from "../config/Database.config"; // Asegúrate de que esto esté correctamente configurado

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
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    latitude: {
      type: DataTypes.DOUBLE, // Cambia a DataTypes.DOUBLE
      allowNull: false,
    },
    longitude: {
      type: DataTypes.DOUBLE, // Cambia a DataTypes.DOUBLE
      allowNull: false,
    },
    instalacao: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    sequelize: db, // Asegúrate de que db esté configurado correctamente
    modelName: "estacao",
    tableName: "estacao",
  }
);
