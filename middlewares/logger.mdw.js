const morgan = require('morgan');
const logger = morgan('combined');  // Ghi log chi tiết yêu cầu
module.exports = logger;
