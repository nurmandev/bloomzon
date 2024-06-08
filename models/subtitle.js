const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Video = require("./video");

const Subtitle = sequelize.define(
  "Subtitle",
  {
    language: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    videoId: {
      type: DataTypes.INTEGER,
      references: {
        model: Video,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

Video.hasMany(Subtitle, { foreignKey: "videoId" });
Subtitle.belongsTo(Video, { foreignKey: "videoId" });

module.exports = Subtitle;
