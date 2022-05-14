const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("url", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
