const db = require("../database/models");

const userModel = {
  getAllUsers: async () => {
    return await db.User.findAll();
  },
  createUser: async (user) => {
    const response = await db.User.create(user)
    return user;
  },
  updateUser: async (id, user) => {
    return user;
  },
  deleteUser: async (id) => {
    return id;
  },
  findUser: async (id) => {
    const user = 1;
    return user;
  },
  login: async (email, password) => {
    const token = 12345;
    return token;
  },
};

module.exports = userModel;
