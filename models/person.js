module.exports = function (sequelize, DataTypes) {
  var Person = sequelize.define('Person', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });

  return Person;
};
