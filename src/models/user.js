'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.hasmany(models.Class, {foreignKey: 'docent_id'})
      User.hasMany(models.Matriculas, {foreignKey: 'estudante_id'})
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    active: DataTypes.BOOLEAN,
    role: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    paranoid: true,
    modelName: 'User',
  });
  return User;
};