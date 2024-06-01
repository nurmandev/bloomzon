const httpStatus = require("http-status");

const { userService } = require("../services");

const createUser = async (req, res) => {
  const user = await userService.createUser(req.body);
  res.status(httpStatus.CREATED).send(user);
};

const getUsers = async (req, res) => {
  const users = await userService.getUsers();
  res.status(httpStatus.OK).send(users);
};

const getUser = async (req, res) => {
  const user = await userService.getUserById(req.params.userId);
  res.status(httpStatus.OK).send(user);
};

const updateUser = async (req, res) => {
  const user = await userService.updateUserById(req.params.userId, req.body);
  res.status(httpStatus.OK).send(user);
};

const deleteUser = async (req, res) => {
  userService.deleteUserById(req.params.userId);
  req.status(httpStatus.NO_CONTENT).send();
};

module.exports = { createUser, getUsers, getUser, updateUser, deleteUser };
