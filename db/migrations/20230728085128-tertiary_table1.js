'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('characters',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      variation:{
        type: Sequelize.STRING,
        allowNull:false
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      class1:{
        type: Sequelize.STRING,
        allowNull:false
      },
      class2:{
        type: Sequelize.STRING,
        allowNull:true
      },
      max_atk:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      max_hp:{
        type: Sequelize.INTEGER,
        allowNull:false
      },
      created_at :{
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
    await queryInterface.createTable('equipments',{
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type:{
        type: Sequelize.STRING,
        allowNull:false
      },
      name:{
        type: Sequelize.STRING,
        allowNull:false
      },
      effects:{
        type: Sequelize.STRING,
        allowNull:false
      },
      specific_character:{
        type: Sequelize.STRING,
        allowNull:true
      },
      created_at :{
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('characters');
    await queryInterface.dropTable('equipments');
  }
};
