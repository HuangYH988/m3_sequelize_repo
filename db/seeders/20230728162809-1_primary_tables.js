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
    await queryInterface.bulkInsert("characters", [
      {
        rarity: "diamond",
        variation: "Kold War",
        name: "Scorpion",
        class1: "Netherrealm",
        max_atk: 47520,
        max_hp: 95232,
      },
      {
        rarity: "diamond",
        variation: "Kold War",
        name: "Sub-Zero",
        class1: "Martial Artist",
        max_atk: 47520,
        max_hp: 95232,
      },
      {
        rarity: "diamond",
        variation: "Kold War",
        name: "Sonya Blade",
        class1: "Spec Ops",
        max_atk: 47520,
        max_hp: 95232,
      },
      {
        rarity: "diamond",
        variation: "Kold War",
        name: "Skarlet",
        class1: "Outworld",
        max_atk: 47520,
        max_hp: 95232,
      },
      {
        rarity: "diamond",
        variation: "MK11",
        name: "Scorpion",
        class1: "Netherrealm",
        class2: "Martial Artist",
        max_atk: 47520,
        max_hp: 95232,
      },
      {
        rarity: "diamond",
        variation: "MK11",
        name: "Sub-Zero",
        class1: "Martial Artist",
        max_atk: 47520,
        max_hp: 95232,
      },
      {
        rarity: "diamond",
        variation: "MK11",
        name: "Liu Kang",
        class1: "Martial Artist",
        max_atk: 47520,
        max_hp: 95232,
      },
      {
        rarity: "diamond",
        variation: "MK11",
        name: "Kabal",
        class1: "Netherrealm",
        max_atk: 47520,
        max_hp: 95232,
      },
      {
        rarity: "diamond",
        variation: "Strike Force",
        name: "Scorpion",
        class1: "Spec Ops",
        max_atk: 47520,
        max_hp: 95232,
      },
    ]);
    await queryInterface.bulkInsert("equipments", [
      {
        rarity: "Epic",
        type: "Armor",
        name: `Specter's Burning Vengeance`,
        effects:
          "100% Chance to apply Fire on Special Attacks 2-7 times per battle. 20-40% chance to apply Fire when blocking an enemy attack. Wearer explodes into flames when defeated, dealing massive damage and applying Fire to all opponents.",
      },
      {
        rarity: "Rare",
        type: "Accessory",
        name: `Specter's Infernal Chains`,
        effects:
          "50-100% Chance to drain 33% Power on Special Attack 1. 10-40% Fire damage boost.",
        specific_character: "Scorpion/Smoke",
        specific_effect:
          "50% Chance opponent is immediately pulled back with a Spear and stunned when tagging out",
      },
      {
        rarity: "Epic",
        type: "Weapon",
        name: `Kuai Liang's Scepter`,
        effects:
          "0.5-1.5 Bar of starting Power. 50-100% Lethal Blow chance against enemies affected by Freeze: +300% damage. 100% Chance to apply Bleed when hitting an opponent affected by Freeze",
      },
      {
        rarity: "Uncommon",
        type: "Accessory",
        name: `Kuai Liang's Bracers`,
        effects:
          "20-40% Basic attack damage boost. 20% Chance to Freeze an opponent on blocked basic attacks.",
      },
      {
        rarity: "Epic",
        type: "Weapon",
        name: `Nomad's Buzz Saw`,
        effects:
          "20-50% Chance to gain Speed after a successful critical hit. Poison applies to the enemy lasts 60-120% longer. Gain 2 Bars of Power after a teammate is defeated.",
      },
      {
        rarity: "Rare",
        type: "Accessory",
        name: `Nomad's Deadly Vapors`,
        effects:
          "20-80% Chance to apply Poison for 6 seconds to the active enemy at the start of the match when equipped on active fighter. 10-25% Chance to apply Poison to the enemy after gaining Speed. 40% Damage boost against enemies affected by Poison.",
      },
      {
        rarity: "Rare",
        type: "Weapon",
        name: `Famous Dashing Smile`,
        effects:
          "50-150% Combo Ender damage boost. 20-40% Chance to apply Incurability debuff to the whole team for 10sec on Special Attack 1. Gain 30% more Power from hitting an opponent. Opponent doesn't get Power from those hits.",
      },
      {
        rarity: "Epic",
        type: "Armor",
        name: `Famous Fashion Dominator`,
        effects:
          "35-55% Max Health boost. 40-70% Chance to apply Blind to an opponent for using a Special Attack against the user. Gain Energy Shield when below 80% Health. Energy Shield reduced all incoming damage when user loses health. The more Health is lost, the higher is Energy Shield damage reduction. Maximum reduction - 50% at 20% Health and below.",
        specific_character: "Johnny Cage",
        specific_effect:
          "5-10% Power generation boost after performing a successful Special Attack. Stackes up to 5 times",
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
    await queryInterface.bulkDelete("characters");
    await queryInterface.bulkDelete("equipments");
  },
};
