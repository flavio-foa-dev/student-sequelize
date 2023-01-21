'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Class extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Class.hasMany(models.Matricula, {foreignKey: 'class_id'})

      Class.belongsTo(models.Users, {foreignKey: 'docent_id'})
      Class.belongsTo(models.Levels, {foreignKey: 'level_id'})

    }
  }
  Class.init({
    date_start: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Class',
  });
  return Class;
};