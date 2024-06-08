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
