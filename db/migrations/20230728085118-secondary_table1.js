"use strict";

const { INTEGER } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable("specials", {
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
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      
      effect: {
        type: Sequelize.STRING,
        allowNull: true,
        defaultValue: null,
      },
      is_grapple:{
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      min_multiplier: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      max_multiplier: {
        type: Sequelize.FLOAT,
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
    await queryInterface.createTable("passive", {
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

      passive: {
        type: Sequelize.STRING(1000),
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
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable("specials");
    await queryInterface.dropTable("passive");
  },
};
