const { Episode } = require("../models");
const httpStatus = require("http-status");

// Episode Controller
const createEpisode = async (req, res) => {
  try {
    const episode = await Episode.create(req.body);
    res.status(httpStatus.CREATED).json(episode);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to create episode" });
  }
};

const getEpisodes = async (req, res) => {
  try {
    const episodes = await Episode.findAll({
      where: { videoId: req.params.videoId },
    });
    res.status(httpStatus.OK).json(episodes);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to get episodes" });
  }
};

const getEpisode = async (req, res) => {
  try {
    const episode = await Episode.findByPk(req.params.episodeId);
    if (episode) {
      res.status(httpStatus.OK).json(episode);
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "Episode not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to get episode" });
  }
};

const updateEpisode = async (req, res) => {
  try {
    const episode = await Episode.findByPk(req.params.episodeId);
    if (episode) {
      await episode.update(req.body);
      res.status(httpStatus.OK).json(episode);
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "Episode not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to update episode" });
  }
};

const deleteEpisode = async (req, res) => {
  try {
    const episode = await Episode.findByPk(req.params.episodeId);
    if (episode) {
      await episode.destroy();
      res.status(httpStatus.NO_CONTENT).json();
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "Episode not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to delete episode" });
  }
};

module.exports = {
  createEpisode,
  getEpisodes,
  getEpisode,
  updateEpisode,
  deleteEpisode,
};
