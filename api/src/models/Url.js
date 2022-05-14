const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("url", {
    id: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
