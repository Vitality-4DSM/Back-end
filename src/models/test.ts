import { DataTypes, Model } from "sequelize";
import db from "../config/bd_config";

export class Test extends Model { }
Test.init(
    {
        id_test: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
            // onDelete: "CASCADE"
        },
        string: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        boolean: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true,
        }
    },
    {
        timestamps: false,
        sequelize: db,
        modelName: "test",
        tableName: "test",
    }
);