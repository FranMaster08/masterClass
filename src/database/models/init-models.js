var DataTypes = require("sequelize").DataTypes;
var _Roles = require("./Roles");
var _User = require("./User");

function initModels(sequelize) {
  var Roles = _Roles(sequelize, DataTypes);
  var User = _User(sequelize, DataTypes);

  User.belongsTo(Roles, { as: "Role", foreignKey: "Roles_id"});
  Roles.hasMany(User, { as: "users", foreignKey: "Roles_id"});

  return {
    Roles,
    User,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
