'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('User', [{
      name : 'Ali Jawad',
      email : 'alijawad1119@gmail.com',
      address : 'Dharampura Lahore',
      mobileNumber:'0321-6808487',
      gender:'Male',
      isSuperUser:true,
      password:'jawad123',
      createdAt : new Date(),
      updatedAt : new Date()
    },
    {
      name : 'Hamza Butt',
      email : 'hamza1119@gmail.com',
      address : 'Dharampura Lahore',
      mobileNumber:'0335-6808487',
      gender:'Male',
      isSuperUser:true,
      password:'hamza123',
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', [{
      isSuperUser:true
    }])
  }
};
