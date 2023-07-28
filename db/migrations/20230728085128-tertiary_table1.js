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
          model: "character",
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
      // character_atk: {
      //   type: Sequelize.INTEGER,

      //   references: {
      //     model: "character",
      //     key: "max_atk",
      //   },
      // },
      // min_multi: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "specials",
      //     key: "min_multiplier",
      //   },
      // },
      // max_multi: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "specials",
      //     key: "max_multiplier",
      //   },
      // },

      min_damage: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      max_damage: {
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
      // equip1_eff: {
      //   type: Sequelize.INTEGER,

      //   references: {
      //     model: "equipments",
      //     key: "effects",
      //   },
      // },
      // equip2_eff: {
      //   type: Sequelize.INTEGER,
      //   references: {
      //     model: "equipments",
      //     key: "effects",
      //   },
      // },
      combo_eff: {
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
