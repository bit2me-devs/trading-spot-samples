const { getRestAuthHeaders } = require('./rest');
const { wsAuthenticate } = require('./ws');

module.exports = {
  getRestAuthHeaders,
  wsAuthenticate
};
