const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Video = require("./video");

const Review = sequelize.define(
  "Review",
  {
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    review_text: {
      type: DataTypes.TEXT,
      allowNull: true,
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

Video.hasMany(Review, { foreignKey: "videoId" });
Review.belongsTo(Video, { foreignKey: "videoId" });

module.exports = Review;
