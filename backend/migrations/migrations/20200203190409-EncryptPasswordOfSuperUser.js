'use strict';

var bcrypt = require('bcrypt');
module.exports = {
  up: (queryInterface, Sequelize) => {
    return bcrypt.hash('jawad123', 10, this.SALTROUNDS).then(hashedPassword => {
      return queryInterface.sequelize.query(`UPDATE "User" SET password = ?`, {
        replacements: [hashedPassword]
      });
    });
  },

  down: (queryInterface, Sequelize) => {
    return true;
  }
};
