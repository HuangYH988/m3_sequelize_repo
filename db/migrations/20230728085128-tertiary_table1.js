"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("special_damage", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      character_id: {
        type: Sequelize.INTEGER,

        references: {
          model: "characters",
          key: "id",
        },
      },
      special_id: {
        type: Sequelize.INTEGER,

        references: {
          model: "specials",
          key: "id",
        },
      },
      

      min_damage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:100,
      },
      max_damage: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue:200,
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
    await queryInterface.createTable("combined_effect", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      equip1_id: {
        type: Sequelize.INTEGER,

        references: {
          model: "equipments",
          key: "id",
        },
      },
      equip2_id: {
        type: Sequelize.INTEGER,

        references: {
          model: "equipments",
          key: "id",
        },
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
    await queryInterface.dropTable("special_damage");
    await queryInterface.dropTable("combined_effect");
  },
};
