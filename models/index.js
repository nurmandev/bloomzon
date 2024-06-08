const sequelize = require("../config/database");
const Video = require("./video");
const Episode = require("./episode");
const Review = require("./review");
const Subtitle = require("./subtitle");
const User = require("./user");

// Define associations
User.hasMany(Video, { foreignKey: "userId" });
Video.belongsTo(User, { foreignKey: "userId" });

Video.hasMany(Episode, { foreignKey: "videoId" });
Episode.belongsTo(Video, { foreignKey: "videoId" });

Video.hasMany(Review, { foreignKey: "videoId" });
Review.belongsTo(Video, { foreignKey: "videoId" });

Video.hasMany(Subtitle, { foreignKey: "videoId" });
Subtitle.belongsTo(Video, { foreignKey: "videoId" });

const syncDatabase = async () => {
  try {
    await sequelize.sync({ alter: true }); // Use { force: true } to drop and recreate tables
    console.log("Database synced!");
    await sequelize.authenticate();
  } catch (error) {
    console.error("Failed to sync database:", error);
  }
};

module.exports = {
  Video,
  Episode,
  Review,
  Subtitle,
  User,
  syncDatabase,
};
