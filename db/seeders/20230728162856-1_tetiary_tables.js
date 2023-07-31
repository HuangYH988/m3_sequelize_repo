"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     *
     */
    await queryInterface.bulkInsert("special_damage", [
      { character_id: 1, special_id: 1 },
      { character_id: 2, special_id: 2 },
      { character_id: 3, special_id: 3 },
      { character_id: 4, special_id: 4 },
      { character_id: 6, special_id: 5 },
      { character_id: 7, special_id: 6 },
      { character_id: 8, special_id: 7 },
      { character_id: 5, special_id: 8 },
      { character_id: 3, special_id: 9 },
      { character_id: 4, special_id: 10 },
      { character_id: 8, special_id: 11 },
      { character_id: 9, special_id: 12 },
    ]);

    await queryInterface.bulkInsert("combined_effect", [
      { equip1_id: 1, equip2_id: 2 },
      { equip1_id: 3, equip2_id: 4 },
      { equip1_id: 5, equip2_id: 6 },
      { equip1_id: 7, equip2_id: 8 },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("special_damage");
    await queryInterface.bulkDelete("combined_effect");
  },
};
