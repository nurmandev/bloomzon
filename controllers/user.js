const { User } = require("../models");
const httpStatus = require("http-status");

// Create a new user
const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = await User.create({name, email, password });
    res.status(httpStatus.CREATED).json(user);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to create user" });
  }
};

// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(httpStatus.OK).json(users);
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to get users" });
  }
};

// Get a user by ID
const getUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      res.status(httpStatus.OK).json(user);
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "User not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to get user" });
  }
};

// Update a user
const updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      user.username = username || user.username;
      user.email = email || user.email;
      user.password = password || user.password;
      await user.save();
      res.status(httpStatus.OK).json(user);
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "User not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to update user" });
  }
};

// Delete a user
const deleteUser = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (user) {
      await user.destroy();
      res.status(httpStatus.NO_CONTENT).json();
    } else {
      res.status(httpStatus.NOT_FOUND).json({ error: "User not found" });
    }
  } catch (error) {
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ error: "Failed to delete user" });
  }
};

module.exports = {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
};
