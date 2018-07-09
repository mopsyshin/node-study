const models = require('../models');

// force true는 기존에 db가 있더라도 새로운 db 동기화를 강제하는 것을 의미한다
module.exports = () => {
  return models.sequelize.sync({force: true});
}