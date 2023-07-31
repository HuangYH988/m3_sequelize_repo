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
     */
    await queryInterface.bulkInsert("specials", [
      {
        character_id: 1,
        type: 2,
        effect: "shield",
        is_grapple: false,
        min_multiplier: 0.825,
        max_multiplier: 1.65,
      },
      {
        character_id: 2,
        type: 2,
        effect: "freeze",
        is_grapple: false,
        min_multiplier: 0.858,
        max_multiplier: 1.683,
      },
      {
        character_id: 3,
        type: 2,
        effect: "power drain",
        is_grapple: false,
        min_multiplier: 0.891,
        max_multiplier: 1.716,
      },
      {
        character_id: 4,
        type: 2,
        effect: "regen",
        is_grapple: false,
        min_multiplier: 0.858,
        max_multiplier: 1.402,
      },
      {
        character_id: 6,
        type: 2,
        effect: "power drain",
        is_grapple: true,
        min_multiplier: 0.858,
        max_multiplier: 1.402,
      },
      {
        character_id: 7,
        type: 2,
        effect: "snare",
        is_grapple: false,
        min_multiplier: 1.023,
        max_multiplier: 1.518,
      },
      {
        character_id: 8,
        type: 2,
        effect: "slow",
        is_grapple: true,
        min_multiplier: 0.825,
        max_multiplier: 1.65,
      },
      {
        character_id: 5,
        type: 1,
        effect: null,
        is_grapple: false,
        min_multiplier: 0.363,
        max_multiplier: 0.693,
      },
      {
        character_id: 3,
        type: 1,
        effect: null,
        is_grapple: false,
        min_multiplier: 0.33,
        max_multiplier: 0.66,
      },
      {
        character_id: 4,
        type: 1,
        effect: "bleed",
        is_grapple: false,
        min_multiplier: 0.33,
        max_multiplier: 0.528,
      },
      {
        character_id: 8,
        type: 1,
        effect: "snare",
        is_grapple: false,
        min_multiplier: 0.33,
        max_multiplier: 0.495,
      },
      {
        character_id: 9,
        type: 1,
        effect: "power drain",
        is_grapple: false,
        min_multiplier: 0.33,
        max_multiplier: 0.66,
      },
    ]);

    await queryInterface.bulkInsert("passive", [
      {
        character_id: 1,
        passive:
          "Achieving 80%+ on Flame Shield (Special Attack 2) applies Fire DOT for 3-9 seconds to the entire enemy team. Kold War Scorpion is immune to fire. All Kold War Teammates that achieve 90-80%+ on Special Attack 2 apply Fire DOT on the enemy. Kold War characters do 10% more damage versus Day of the Dead Characters.",
      },
      {
        character_id: 2,
        passive:
          "Increases team's power generation and decreases opponents power generation for each Kold War team member. Kold War Sub-Zero does +50% critical damage against enemies affected by frostbite. Kold War teammates using Special Attacks have a 30-50% chance to cause frostbite. Kold War characters do 10% more damage versus Day of the Dead Characters.",
      },
      {
        character_id: 3,
        passive:
          "Each Team member starts encased in Ice Armor that reduces 60-90% damage of a special attack or X-Ray/Fatal Blow for 8 seconds. Kold War Characters have no time limit on Ice Armor. All Kold War Teammates have a 40-60% chance to gain Ice Armor on special attack 2. Kold War characters do 10% more damage versus Day of the Dead Characters.",
      },
      {
        character_id: 4,
        passive:
          "Whenever reduced to below 30% health Kold War Skarlet gains Krimson Shield, which reflets back 50% of the enemy's initial damage from Basic Attack, Special Attack, and X-Ray/Fatal Blow damage. All Kold War teammates have a 40-60% chance to gain Krimson Shield for 7-12 seconds on Special Attack 1. Kold War characters do 10% more damages versus Day of the Dead Characters.",
      },
      {
        character_id: 5,
        passive:
          "Apply fire to 1-3 opponent(s) for 5-9 seconds at the start of the match and when MK11 Scorpion tags-in. Fire DOTs add up together. MK11 teammates have 25% chance for Lethal Blow on basic attacks.",
      },
      {
        character_id: 6,
        passive:
          "Any opponent fighting against MK11 Sub-Zero for 12-8 seconds gets frostbite. When performing combo enders against frostbitten opponents, MK11 Sub-Zero has a 30-50% chance of freezing them. Sub-Zero saves each MK11 teammate once, by replacing him or her with an Ice Clone. The Ice Clone explodes, dealing low/medium/high damage and causing bleed.",
      },
      {
        character_id: 7,
        passive:
          "MK11 Liu Kang has a 35% chance on Special Attacks. With each successful hit Liu Kang applies a Concussion effect on his opponent, which stacks up to a 20/35/50 times. Each Concussion increases critical hit chance and unblockable attack chance against the opponent by 1%. Liu Kang counterattacks the opponent's Special Attacks with a chance equal to the number of Concussion effects on the opponent. For 15 seconds after tag-in, MK11 characters in Liu Kang's team are immune to Blind and their attacks cannot be dodged.",
      },
      {
        character_id: 8,
        passive:
          "When MK11 Kabal tags-in, he gains speed increase for 4-12 seconds and stuns the opponent with his dash. When an MK11 teammate is stunned, Kabal will attempt to stun the opponent and remove stun from his teammate. When an MK11 teammate is defeated, Kabal will tag-in and if unblocked, will perform his Fatal Blow attack.",
      },
      {
        character_id: 9,
        passive:
          "If an opponent resurrects, Johnny instantly gains 1 bar of power. Strike Force Johnny Cage gains up to +50-100% damage and +15-25% power generation as he loses health. All Strike Force teammates do +10-30% damage vs. Netherrealm characters. Strike Force Characters do 10% more damage vs. Ronin Characters.",
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("specials");
    await queryInterface.bulkDelete("passive");
  },
};
