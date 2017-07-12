module.exports = function(sequelize, DataTypes) {
  var Applicant = sequelize.define('Applicant', {
  }, {
    classMethods: {
      associate: function (models) {
        Applicant.belongsTo(models.Person);
      }
    }
  });
  return Applicant;
};
