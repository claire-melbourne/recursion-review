// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  // your code goes here
  if (json[0] === '"') {
    return json.slice(1, json.length - 1);
  }
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  if (json === 'null') {
    return null;
  }
  if (!isNaN(Number(json))) {
    return Number(json);
  }
  if (json === '[]') {
    return [];
  }
  if (json[0] === '[') {
    var results = [];
    json = json.slice(0, json.length - 1);
    var parts = json.split(',');
    for (var i = 0; i < parts.length; i++) {
      // do some stuff
    }
  }
};


//
