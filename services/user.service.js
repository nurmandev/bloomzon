const { User, sequelize } = require("../models");

/**
 * Create a user
 * @param {Object} userBody
 * @returns {Promis<User>}
 */
const createUser = async (userBody) => {
  console.log(userBody);
  return await User.create(userBody);
};

/**
 * Get all users
 * @returns {Promise<QueryResult>}
 */
const getUsers = async () => {
  return User.findAll({
    attributes: ["name", "email"],
  });
};

/**
 * Get user by id
 * @param {ObjectId} id
 * @returns {Promise<User>}
 */
const getUserById = async (id) => {
  return User.findByPk(id);
};

/**
 * Update user by id
 * @param {ObjectId} userId
 * @param {Object} updateBody
 * @returns {Promise<User>}
 */
const updateUserById = async (userId, updateBody) => {
  const user = User.update(updateBody, {
    where: { id: userId },
  });

  return user;
};

/**
 * Delete user by id
 * @param {ObjectId} userId
 * @returns {Promise<User>}
 */
const deleteUserById = async (userId) => {
  User.destroy({
    where: { id: userId },
  });
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
};
