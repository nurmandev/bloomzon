const { Video, Episode, Review } = require("../models");
const httpStatus = require("http-status");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

// Video Controller
const createVideo = async (req, res) => {
  try {
    const video = await Video.create(req.body);
    res.status(httpStatus.CREATED).json(video);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to create video" });
  }
};

const getVideos = async (req, res) => {
  try {
    const videos = await Video.findAll();
    res.status(httpStatus.OK).json(videos);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to get videos" });
  }
};

const getVideo = async (req, res) => {
  try {
    const video = await Video.findByPk(req.params.videoId, {
      include: [Episode, Review],
    });
    if (video) {
      res.status(httpStatus.OK).json(video);
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "Video not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to get video" });
  }
};

const updateVideo = async (req, res) => {
  try {
    const video = await Video.findByPk(req.params.videoId);
    if (video) {
      await video.update(req.body);
      res.status(httpStatus.OK).json(video);
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "Video not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to update video" });
  }
};

const deleteVideo = async (req, res) => {
  try {
    const video = await Video.findByPk(req.params.videoId);
    if (video) {
      await video.destroy();
      res.status(httpStatus.NO_CONTENT).json();
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "Video not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to delete video" });
  }
};

const uploadVideo = async (req, res) => {
  try {
    // Upload video to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path, {
      resource_type: "video",
    });

    // Delete the file from the server
    fs.unlinkSync(req.file.path);

    // Return only the streaming URL
    res.status(201).json({ streaming_url: result.secure_url });
  } catch (error) {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).json({ error: error.message });
  }
};

module.exports = {
  createVideo,
  getVideos,
  getVideo,
  updateVideo,
  deleteVideo,
  uploadVideo,
};
