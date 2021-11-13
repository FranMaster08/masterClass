const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('User', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    apellido: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    dni: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "dni_UNIQUE"
    },
    email: {
      type: DataTypes.STRING(45),
      allowNull: false,
      unique: "email_UNIQUE"
    },
    pass: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    Roles_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Roles',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'User',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "dni_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dni" },
        ]
      },
      {
        name: "email_UNIQUE",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "fk_User_Roles_idx",
        using: "BTREE",
        fields: [
          { name: "Roles_id" },
        ]
      },
    ]
  });
};
