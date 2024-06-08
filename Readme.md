# Bloomzon API Documentation

This document outlines the endpoints available for user management and retrieval in the Users API.

## Create a User

### POST /users

- **Description**: Create a new user.
- **Request Body**: JSON object with user details (e.g., name, email, password).
- **Success Response**:
  - **Code**: 201 CREATED
  - **Content**: Created user object
- **Error Responses**:
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to create user"
      }
      ```

## Get All Users

### GET /users

- **Description**: Retrieve a list of all users.
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Array of user objects
- **Error Responses**:
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to get users"
      }
      ```

## Get a User

### GET /users/{userId}

- **Description**: Retrieve a user by their ID.
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: User object
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "User not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to get user"
      }
      ```

## Update a User

### PATCH /users/{userId}

- **Description**: Update a user's information.
- **Request Body**: JSON object with fields to update (e.g., name, email, password).
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Updated user object
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "User not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to update user"
      }
      ```

## Delete a User

### DELETE /users/{userId}

- **Description**: Delete a user by their ID.
- **Success Response**:
  - **Code**: 204 NO CONTENT
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "User not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to delete user"
      }
      ```

<!-- VIDEO SECTION -->

# Videos API Documentation

This document outlines the endpoints available for video management and retrieval in the Videos API.

## Create a Video

### POST /videos

- **Description**: Create a new video.
- **Request Body**: JSON object with video details (e.g., title, description, rating).
- **Success Response**:
  - **Code**: 201 CREATED
  - **Content**: Created video object
- **Error Responses**:
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to create video"
      }
      ```

## Get All Videos

### GET /videos

- **Description**: Retrieve a list of all videos.
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Array of video objects
- **Error Responses**:
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to get videos"
      }
      ```

## Get a Video

### GET /videos/{id}

- **Description**: Retrieve a video by its ID.
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Video object
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "Video not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to get video"
      }
      ```

## Update a Video

### PATCH /videos/{id}

- **Description**: Update a video's information.
- **Request Body**: JSON object with fields to update (e.g., title, description, rating).
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Updated video object
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "Video not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to update video"
      }
      ```

## Delete a Video

### DELETE /videos/{id}

- **Description**: Delete a video by its ID.
- **Success Response**:
  - **Code**: 204 NO CONTENT
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "Video not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to delete video"
      }
      ```

## Upload a Video

### POST /videos/upload

- **Description**: Upload a video file.
- **Request Body**: Form-data with a field named "video" containing the video file.
- **Success Response**:
  - **Code**: 201 CREATED
  - **Content**: JSON object with the streaming URL of the uploaded video
- **Error Responses**:

  - **Code**: 500 INTERNAL SERVER ERROR

    - **Content**:

      ```json
      {
        "error": "Failed to upload video"
      }
      ```

      <!-- EPISODE -->

# Episodes API Documentation

This document outlines the endpoints available for episode management and retrieval in the Episodes API.

## Endpoints

### Create an Episode

**POST** `/videos/{videoId}/episodes`

- **Description**: Create a new episode.
- **Request Body**: JSON object with episode details (e.g., title, description, episode_number, season_number, video_url, videoId).
- **Success Response**:
  - **Code**: 201 CREATED
  - **Content**: Created episode object
- **Error Responses**:
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to create episode"
      }
      ```

### Get All Episodes for a Video

**GET** `/videos/{videoId}/episodes`

- **Description**: Retrieve a list of all episodes for a specific video.
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Array of episode objects
- **Error Responses**:
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to get episodes"
      }
      ```

### Get an Episode

**GET** `/videos/{videoId}/episodes/{episodeId}`

- **Description**: Retrieve an episode by its ID.
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Episode object
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "Episode not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to get episode"
      }
      ```

### Update an Episode

**PATCH** `/videos/{videoId}/episodes/{episodeId}`

- **Description**: Update an episode's information.
- **Request Body**: JSON object with fields to update (e.g., title, description, episode_number, season_number, video_url).
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Updated episode object
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "Episode not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to update episode"
      }
      ```

### Delete an Episode

**DELETE** `/videos/{videoId}/episodes/{episodeId}`

- **Description**: Delete an episode by its ID.
- **Success Response**:
  - **Code**: 204 NO CONTENT
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "Episode not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to delete episode"
      }
      ```

<!-- REVIEW -->

# Reviews API Documentation

This document provides an overview of the endpoints available for review management and retrieval in the Reviews API.

## Endpoints

### Create a Review

**POST** `/videos/{videoId}/reviews`

- **Description**: Create a new review.
- **Request Body**: JSON object with review details (e.g., rating, review_text, videoId).
- **Success Response**:
  - **Code**: 201 CREATED
  - **Content**: Created review object
- **Error Responses**:
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to create review"
      }
      ```

### Get All Reviews for a Video

**GET** `/videos/{videoId}/reviews`

- **Description**: Retrieve a list of all reviews for a specific video.
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Array of review objects
- **Error Responses**:
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to get reviews"
      }
      ```

### Get a Review

**GET** `/videos/{videoId}/reviews/{reviewId}`

- **Description**: Retrieve a review by its ID.
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Review object
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "Review not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to get review"
      }
      ```

### Update a Review

**PATCH** `/videos/{videoId}/reviews/{reviewId}`

- **Description**: Update a review's information.
- **Request Body**: JSON object with fields to update (e.g., rating, review_text).
- **Success Response**:
  - **Code**: 200 OK
  - **Content**: Updated review object
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "Review not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to update review"
      }
      ```

### Delete a Review

**DELETE** `/videos/{videoId}/reviews/{reviewId}`

- **Description**: Delete a review by its ID.
- **Success Response**:
  - **Code**: 204 NO CONTENT
- **Error Responses**:
  - **Code**: 404 NOT FOUND
    - **Content**:
      ```json
      {
        "error": "Review not found"
      }
      ```
  - **Code**: 500 INTERNAL SERVER ERROR
    - **Content**:
      ```json
      {
        "error": "Failed to delete review"
      }
      ```
