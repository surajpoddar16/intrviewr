module.exports = function (sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    points: DataTypes.FLOAT(2)
  }, {
    classMethods: {
      associate: function (models) {
        Question.belongsToMany(models.Interview, {through: 'InterviewQuestions'});
      }
    }
  });

  return Question;
};
