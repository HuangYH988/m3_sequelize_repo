"use strict";
/*Run command `$ npx sequelize db:migrate` (for migration)
  `$ npx sequelize db:seed:all `(for seeder files) 
  after creating migration and seeder files
  Run command `$ npx sequelize db:migrate:undo:all ` to clear migration data
*/

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("characters", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rarity: { type: Sequelize.STRING, allowNull: false },
      variation: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      class1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      class2: {
        type: Sequelize.STRING,
        defaultValue: null,
        allowNull: true,
      },
      max_atk: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      max_hp: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
    await queryInterface.createTable("equipments", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      rarity:{type: Sequelize.STRING,
        allowNull: false,},
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      effects: {
        type: Sequelize.STRING(500),
        allowNull: false,
      },
      specific_character: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      specific_effect: {
        type: Sequelize.STRING(500),
        allowNull: true,
        defaultValue: null,
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    });
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("characters");
    await queryInterface.dropTable("equipments");
  },
};
