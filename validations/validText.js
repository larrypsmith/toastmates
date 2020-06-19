module.exports = function(str) {
  return typeof str === 'string' && str.trim().length > 0;
}