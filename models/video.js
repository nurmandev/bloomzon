const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const User = require("./user");

const Video = sequelize.define(
  "Video",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    num_ratings: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    age_rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uhd: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    xray: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    hdr: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: "id",
      },
    },
  },
  {
    timestamps: false,
  }
);

User.hasMany(Video, { foreignKey: "userId" });
Video.belongsTo(User, { foreignKey: "userId" });

module.exports = Video;
