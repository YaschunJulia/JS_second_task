'use strict';

var truncate = function (str, maxlenght){
  var dots = String.fromCharCode(8230);
  var newStr = str.slice(0, maxlenght - dots.length);
  return newStr + dots;
};

var addClass = function (className, classNameAdd){
  var className = (classNameAdd) ? className : '';
  var classNameAdd = classNameAdd || className;
  var repeate = className.indexOf(classNameAdd);
  if (repeate != -1 && (!className[repeate - 1] || className[repeate - 1] === ' ') && (className[repeate + classNameAdd.length] === '' || className[repeate+ classNameAdd.length] === ' ')) {
    return className; 
  } else if (!className){
    return classNameAdd;
  } else {
    return className + " " + classNameAdd;;    
  }
  
};

console.log('truncate("lorem ipsum in the",7) => ' + truncate('lorem ipsum in the', 7));

console.log('addClass("fa pulse","fa") => ' + addClass('fa pulse','fa') );
console.log('addClass("fa-pulse","fa") => ' + addClass('fa-pulse','fa') );