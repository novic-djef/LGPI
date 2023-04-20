'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {


return queryInterface.createTable('user_table', {
  id: {type:Sequelize.INTEGER, unique:true, allowNull:false, primaryKey:true, autoIncrement:true },
  user_name: {type:Sequelize.STRING, allowNull:false,},
  password: {type:Sequelize.STRING, allowNull:false,},
  email: {type:Sequelize.STRING, allowNull:false},
})


    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
