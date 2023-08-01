const { Model} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Characters extends Model {
    static associate(models) {
        this.hasMany(models.specials);
        this.hasMany(models.special_Damage);
    }
  }
  Characters.init(
    {
      rarity: DataTypes.STRING,
      variation: DataTypes.STRING,
      name: DataTypes.STRING,
      class1: DataTypes.STRING,
      class2: DataTypes.STRING,
      max_atk: DataTypes.INTEGER,
      max_hp: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "characters",
      underscored: true, // Using underscores in column names of table, ie. max_atk and so on
    }
  );
  return Characters;
};
