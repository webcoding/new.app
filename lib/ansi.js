// Generated by CoffeeScript 1.8.0
(function() {
  var CODES, ansi;

  CODES = {
    off: 0,
    red: 31,
    green: 32,
    yellow: 33
  };

  ansi = module.exports = function(message, color) {
    var str;
    if (color == null) {
      color = 'green';
    }
    str = '';
    str += "\u001b[" + CODES[color] + 'm';
    str += message;
    str += "\u001b[" + CODES['off'] + 'm';
    return str;
  };

}).call(this);
