// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var str = '[';

    if(obj.length === 0) {
      return '[]';
    }
    for (var i = 0; i < obj.length; i++) {
      str += stringifyJSON(obj[i]) + ',';
    }
    str = str.slice(0, str.length - 1) + ']';
    return str;
  }

  return '' + obj;

};
