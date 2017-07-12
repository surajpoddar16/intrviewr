module.exports = function (sequelize, DataTypes) {
  var Option = sequelize.define('Option', {
    value: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    classMethods: {
      associate: function (models) {
        Option.belongsTo(models.Question);
        Option.belongsTo(models.Question, {as: 'CorrectOption'});
      }
    }
  });

  return Option;
};
