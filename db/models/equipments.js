const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Equipments extends Model {}
  Equipments.init(
    {
      rarity: DataTypes.STRING,
      type: DataTypes.STRING,
      name: DataTypes.STRING,
      effects: DataTypes.STRING(500),
      specific_character: DataTypes.STRING,
      specific_effect: DataTypes.STRING(500),
    },
    {
      sequelize,
      modelName: "equipments",
      underscored: true,
    }
  );
  return Equipments;
};
