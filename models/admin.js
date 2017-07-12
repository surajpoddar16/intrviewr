module.exports = function(sequelize, DataTypes) {
  var Admin = sequelize.define('Admin', {
  }, {
    classMethods: {
      associate: function (models) {
        Admin.belongsTo(models.Person);
      }
    }
  });
  return Admin;
};
