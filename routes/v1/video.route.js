const express = require("express");

const videoController = require("../../controllers/video.controller");
const { upload } = require("../../middlewares/uploader");

const router = express.Router();

router
  .route("/")
  .post(videoController.createVideo)
  .get(videoController.getVideos);

router
  .route("/:videoId")
  .get(videoController.getVideo)
  .patch(videoController.updateVideo)
  .delete(videoController.deleteVideo);

router.post("/upload", upload.single("file"), videoController.uploadVideo);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Video
 *   description: Video management and retrieval
 */

/**
 * @swagger
 * /videos:
 *  post:
 *    summary: Create a video
 *    description: Only admins can create other videos
 *    tags: [Video]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            required:
 *             - name
 *             - file
 *            properties:
 *              name:
 *                type: string
 *              file:
 *                type:string
 *            example:
 *               name: fake name
 *               file: /videos/test.mp4
 *    responses:
 *       "201":
 *         description: Created
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Video'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *
 *
 *  get:
 *     summary: Get all videos
 *     description: Only admins can retrieve all videos.
 *     tags: [Video]
 *     parameters:
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         description: Video name
 *       - in: query
 *         name: role
 *         schema:
 *           type: string
 *         description: Video role
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: sort by query in the form of field:desc/asc (ex. name:asc)
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
 *           default: 1
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
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 */

/**
 * @swagger
 * /videos/{id}:
 *   get:
 *     summary: Get a video
 *     description: Logged in videos can fetch only their own video information. Only admins can fetch other videos.
 *     tags: [Video]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Video id
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Video'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   patch:
 *     summary: Update a video
 *     description: Logged in videos can only update their own information. Only admins can update other videos.
 *     tags: [Video]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Video id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               file:
 *                 type: string
 *                 description: must be unique
 *             example:
 *               name: fake name
 *               file: /videos/test.mp4
 *     responses:
 *       "200":
 *         description: OK
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Video'
 *       "400":
 *         $ref: '#/components/responses/DuplicateEmail'
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 *
 *   delete:
 *     summary: Delete a video
 *     description: Logged in videos can delete only themselves. Only admins can delete other videos.
 *     tags: [Video]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Video id
 *     responses:
 *       "200":
 *         description: No content
 *       "401":
 *         $ref: '#/components/responses/Unauthorized'
 *       "403":
 *         $ref: '#/components/responses/Forbidden'
 *       "404":
 *         $ref: '#/components/responses/NotFound'
 */

/**
 * @swagger
 * /videos/upload:
 *  post:
 *    summary: Upload a video
 *    description: Only admins can upload videos
 *    tags: [Video]
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              file:
 *                type: string
 *                format: binary
 *            example:
 *               name: fake name
 *               file: /videos/test.mp4
 *
 *    responses:
 *       "201":
 *         description: Created
 *         content:
 *            multipart/form-data:
 */
