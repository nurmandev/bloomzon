const { Video, User, sequelize } = require("../models");

/**
 * Create a video
 * @param {Object} videoBody
 * @returns {Promis<Video>}
 */
const createVideo = async (videoBody) => {
  console.log(videoBody);
  return await Video.create(videoBody);
};

/**
 * Get all videos
 * @returns {Promise<QueryResult>}
 */
const getVideos = async () => {
  return await Video.findAll({
    attributes: ["name", "file"],
    include: { model: User, attributes: ["name", "email"] },
  });
};

/**
 * Get video by id
 * @param {ObjectId} id
 * @returns {Promise<Video>}
 */
const getVideoById = async (id) => {
  return Video.findByPk(id);
};

/**
 * Update video by id
 * @param {ObjectId} videoId
 * @param {Object} updateBody
 * @returns {Promise<Video>}
 */
const updateVideoById = async (videoId, updateBody) => {
  const video = Video.update(updateBody, {
    where: { id: videoId },
  });

  return video;
};

/**
 * Delete video by id
 * @param {ObjectId} videoId
 * @returns {Promise<Video>}
 */
const deleteVideoById = async (videoId) => {
  Video.destroy({
    where: { id: videoId },
  });
};

module.exports = {
  createVideo,
  getVideos,
  getVideoById,
  updateVideoById,
  deleteVideoById,
};
