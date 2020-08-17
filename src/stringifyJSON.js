// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  if (obj === null) {
    return 'null';
  }

  if (typeof obj === 'string') {
    return '"' + obj + '"';
  }
  if (Array.isArray(obj)) {
    var str = '[';

    for (var i = 0; i < obj.length; i++) {
      str += stringifyJSON(obj[i]) + ',';
    }

    if (str[str.length - 1] === ',') {
      str = str.slice(0, str.length - 1) + ']';
    } else {
      str += ']';
    }

    return str;
  }

  if (typeof obj === 'object') {

    var str = '{';
    for (var key in obj) {
      if (typeof obj[key] === 'function' || obj[key] === undefined) {
        continue;
      }

      str += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
    }

    if (str[str.length - 1] === ',') {
      str = str.slice(0, str.length - 1) + '}';
    } else {
      str += '}';
    }
    return str;

  }

  return '' + obj;

};
