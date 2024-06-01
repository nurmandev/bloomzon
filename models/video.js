"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Video extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Video.belongsTo(models.User);
    }
  }
  Video.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      file: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      tableName: "videos",
      modelName: "Video",
    }
  );
  return Video;
};
