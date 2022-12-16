const sign = require('jwt-encode');

export default (token) => {
  return sign(token, 'femaledaily');
}