const httpStatus = require("http-status");

const { videoService } = require("../services");

const createVideo = async (req, res) => {
  const video = await videoService.createVideo(req.body);
  res.status(httpStatus.CREATED).send(video);
};

const getVideos = async (req, res) => {
  const videos = await videoService.getVideos();
  res.status(httpStatus.OK).send(videos);
};

const getVideo = async (req, res) => {
  const video = await videoService.getVideoById(req.params.videoId);
  res.status(httpStatus.OK).send(video);
};

const updateVideo = async (req, res) => {
  const video = await videoService.updateVideoById(
    req.params.videoId,
    req.body
  );
  res.status(httpStatus.OK).send(video);
};

const deleteVideo = async (req, res) => {
  videoService.deleteVideoById(req.params.videoId);
  req.status(httpStatus.NO_CONTENT).send();
};

const uploadVideo = async (req, res) => {
  return res.json({ message: req.file.location });
};

module.exports = {
  createVideo,
  getVideos,
  getVideo,
  updateVideo,
  deleteVideo,
  uploadVideo,
};
