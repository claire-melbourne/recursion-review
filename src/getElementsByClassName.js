// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, node = document.body, siblings = []) {
  var classes = [].slice().call(node.classList);
  if (classes.includes(className)) {
    var part = [node];
  } else {
    var part = [];
  }
  var children = [].slice().call(node.children);
  if (children.length === 0 && siblings.length === 0) {
    return part;
  }
  if (children.length > 0 && siblings.length === 0) {
    return part.concat(getElementsByClassName(className, children[0], children.slice(1)));
  }
  if (children.length === 0 && siblings.length > 0) {
    return part.concat(getElementsByClassName(className, siblings[0], siblings.slice(1)));
  }
  return part.concat(getElementsByClassName(className, children[0], children.slice(1))).concat(getElementsByClassName(className, siblings[0], siblings.slice(1)));
};
