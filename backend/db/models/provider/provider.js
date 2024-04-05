import { DataTypes, Model } from "sequelize";
import { sequelize } from "../../connection.js";
// import bcrypt from "bcrypt";

// Some values are set to allowNull: true for testing purposes. Change them to false later.

// import Register from "./registerEvents.js";
// import Bookmark from "./bookmarkEvents.js";

class Provider extends Model {}

Provider.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      // allowNull: false,
      allowNull: true,
    },
    company: {
      type: DataTypes.STRING,
      // allowNull: false,
      allowNull: true,
    },
    linkedin: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    twitter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "providers",
    tableName: "providers",
  }
);

export default Provider;
