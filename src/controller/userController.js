const { userModel } = require("../model");
const userController = {
  login: async (req, res, next) => {
    try {
      const { password, email } = req.body;
      const response = await userModel.login(email, password);
      res.redirect("/principal");
    } catch (error) {
      next(error);
    }
  },
  getAllUsers: async (req, res, next) => {
    try {
      const response = await userModel.getAllUsers();
      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  },
  createUser: async (req, res, next) => {
    try {
      const { nombre, pass, email, apellido, dni } = req.body;
      const response = await userModel.createUser({
        nombre,
        pass,
        email,
        apellido,
        dni,
        Roles_id : 1
      });
      res.redirect("/login");
    } catch (error) {
      next(error);
    }
  },
};

module.exports = userController;
