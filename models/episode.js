const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Video = require("./video");

const Episode = sequelize.define(
  "Episode",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    episode_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    season_number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    video_url: {
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

Video.hasMany(Episode, { foreignKey: "videoId" });
Episode.belongsTo(Video, { foreignKey: "videoId" });

module.exports = Episode;
