const express = require("express");
const {
  videoController,
  episodeController,
  reviewController,
} = require("../../controllers");
const validateVideo = require("../../middlewares/validators/videoValidator");
const validateEpisode = require("../../middlewares/validators/episodeValidator");
const validateReview = require("../../middlewares/validators/reviewValidator");
const { uploadMiddleware } = require("../../middlewares/uploadMiddleware");

const router = express.Router();

// Video Routes
router
  .route("/")
  .post(validateVideo, videoController.createVideo)
  .get(videoController.getVideos);

router.post("/upload", uploadMiddleware, videoController.uploadVideo);

router
  .route("/:videoId")
  .get(videoController.getVideo)
  .patch(validateVideo, videoController.updateVideo)
  .delete(videoController.deleteVideo);

// Episode Routes
router
  .route("/:videoId/episodes")
  .post(validateEpisode, episodeController.createEpisode)
  .get(episodeController.getEpisodes);

router
  .route("/:videoId/episodes/:episodeId")
  .get(episodeController.getEpisode)
  .patch(validateEpisode, episodeController.updateEpisode)
  .delete(episodeController.deleteEpisode);

// Review Routes
router
  .route("/:videoId/reviews")
  .post(validateReview, reviewController.createReview)
  .get(reviewController.getReviews);

router
  .route("/:videoId/reviews/:reviewId")
  .get(reviewController.getReview)
  .patch(validateReview, reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Videos
 *   description: Video management and retrieval
 */

/**
 * @swagger
 * /videos:
 *  post:
 *    summary: Create a video
 *    description: Only admins can create videos
 *    tags: [Videos]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *             - title
 *             - userId
 *            properties:
 *              title:
 *                type: string
 *              description:
 *                type: string
 *              rating:
 *                type: number
 *              num_ratings:
 *                type: integer
 *              age_rating:
 *                type: string
 *              uhd:
 *                type: boolean
 *              xray:
 *                type: boolean
 *              hdr:
 *                type: boolean
 *              userId:
 *                type: integer
 *            example:
 *               title: Sample Video
 *               description: A sample video description
 *               rating: 4.5
 *               num_ratings: 100
 *               age_rating: PG-13
 *               uhd: true
 *               xray: false
 *               hdr: true
 *               userId: 1
 *    responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Video'
 *       "400":
 *         description: Bad Request
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *
 *  get:
 *     summary: Get all videos
 *     description: Retrieve all videos
 *     tags: [Videos]
 *     parameters:
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *         description: Video title
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort by query in the form of field:desc/asc (e.g., title:asc)
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 10
 *         description: Maximum number of videos
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           minimum: 1
 *         default: 1
 *         description: Page number
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 results:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Video'
 *                 page:
 *                   type: integer
 *                   example: 1
 *                 limit:
 *                   type: integer
 *                   example: 10
 *                 totalPages:
 *                   type: integer
 *                   example: 1
 *                 totalResults:
 *                   type: integer
 *                   example: 1
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 */

/**
 * @swagger
 * /videos/{id}:
 *   get:
 *     summary: Get a video
 *     description: Retrieve a single video by ID
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Video'
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not Found
 *
 *   patch:
 *     summary: Update a video
 *     description: Update a video by ID
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               rating:
 *                 type: number
 *               num_ratings:
 *                 type: integer
 *               age_rating:
 *                 type: string
 *               uhd:
 *                 type: boolean
 *               xray:
 *                 type: boolean
 *               hdr:
 *                 type: boolean
 *             example:
 *               title: Updated Title
 *               description: Updated description
 *               rating: 4.7
 *               num_ratings: 120
 *               age_rating: R
 *               uhd: false
 *               xray: true
 *               hdr: false
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Video'
 *       "400":
 *         description: Bad Request
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not Found
 *
 *   delete:
 *     summary: Delete a video
 *     description: Delete a video by ID
 *     tags: [Videos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not Found
 */

/**
 * @swagger
 * tags:
 *   name: Episodes
 *   description: Episode management and retrieval
 */

/**
 * @swagger
 * /videos/{videoId}/episodes:
 *  post:
 *    summary: Create an episode
 *    description: Create an episode for a video
 *    tags: [Episodes]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *             - title
 *             - episode_number
 *             - season_number
 *             - video_url
 *             - videoId
 *            properties:
 *              title:
 *                type: string
 *              description:
 *                type: string
 *              episode_number:
 *                type: integer
 *              season_number:
 *                type: integer
 *              video_url:
 *                type: string
 *              videoId:
 *                type: integer
 *            example:
 *               title: Episode 1
 *               description: A sample episode
 *               episode_number: 1
 *               season_number: 1
 *               video_url: http://example.com/video.mp4
 *               videoId: 1
 *    responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Episode'
 *       "400":
 *         description: Bad Request
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *
 *  get:
 *     summary: Get all episodes
 *     description: Retrieve all episodes for a video
 *     tags: [Episodes]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Episode'
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 */

/**
 * @swagger
 * /videos/{videoId}/episodes/{episodeId}:
 *   get:
 *     summary: Get an episode
 *     description: Retrieve an episode by ID
 *     tags: [Episodes]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *       - in: path
 *         name: episodeId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Episode ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Episode'
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not Found
 *
 *   patch:
 *     summary: Update an episode
 *     description: Update an episode by ID
 *     tags: [Episodes]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *       - in: path
 *         name: episodeId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Episode ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               episode_number:
 *                 type: integer
 *               season_number:
 *                 type: integer
 *               video_url:
 *                 type: string
 *             example:
 *               title: Updated Episode Title
 *               description: Updated episode description
 *               episode_number: 2
 *               season_number: 1
 *               video_url: http://example.com/updated_video.mp4
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Episode'
 *       "400":
 *         description: Bad Request
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not Found
 *
 *   delete:
 *     summary: Delete an episode
 *     description: Delete an episode by ID
 *     tags: [Episodes]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *       - in: path
 *         name: episodeId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Episode ID
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not Found
 */

/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management and retrieval
 */

/**
 * @swagger
 * /videos/{videoId}/reviews:
 *  post:
 *    summary: Create a review
 *    description: Create a review for a video
 *    tags: [Reviews]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *             - rating
 *             - videoId
 *            properties:
 *              rating:
 *                type: integer
 *              review_text:
 *                type: string
 *              videoId:
 *                type: integer
 *            example:
 *               rating: 5
 *               review_text: Excellent video!
 *               videoId: 1
 *    responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Review'
 *       "400":
 *         description: Bad Request
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *
 *  get:
 *     summary: Get all reviews
 *     description: Retrieve all reviews for a video
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 */

/**
 * @swagger
 * /videos/{videoId}/reviews/{reviewId}:
 *   get:
 *     summary: Get a review
 *     description: Retrieve a review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Review ID
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Review'
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not Found
 *
 *   patch:
 *     summary: Update a review
 *     description: Update a review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Review ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               rating:
 *                 type: integer
 *               review_text:
 *                 type: string
 *             example:
 *               rating: 4
 *               review_text: Good video.
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Review'
 *       "400":
 *         description: Bad Request
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not Found
 *
 *   delete:
 *     summary: Delete a review
 *     description: Delete a review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: videoId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Video ID
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: integer
 *         description: Review ID
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         description: Unauthorized
 *       "403":
 *         description: Forbidden
 *       "404":
 *         description: Not Found
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     VideoUploadResponse:
 *       type: object
 *       properties:
 *         streaming_url:
 *           type: string
 *
 * paths:
 *   /videos/upload:
 *     post:
 *       summary: Upload a video
 *       tags: [Videos]
 *       requestBody:
 *         required: true
 *         content:
 *           multipart/form-data:
 *             schema:
 *               type: object
 *               properties:
 *                 file:
 *                   type: string
 *                   format: binary
 *                   description: Video file to upload
 *       responses:
 *         '201':
 *           description: Video uploaded successfully
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/VideoUploadResponse'
 *         '400':
 *           description: Bad request
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   errors:
 *                     type: array
 *                     items:
 *                       type: string
 *         '500':
 *           description: Internal server error
 */
