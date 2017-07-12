module.exports = function (sequelize, DataTypes) {
  var Interview = sequelize.define('Interview', {
    link: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status: DataTypes.ENUM('created', 'opened', 'submitted'),
    submission: DataTypes.STRING,
    score: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function (models) {
        Interview.belongsTo(models.Applicant);
        Interview.belongsToMany(models.Question, {through: 'InterviewQuestions'});
      }
    }
  });

  return Interview;
};
