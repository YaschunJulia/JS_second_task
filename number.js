'use strict';

var randomInt = function (from, to){
  var to = isFinite(to) ? to : Number.MAX_SAFE_INTEGER;
  var from = isFinite(from) ? from : Number.MIN_SAFE_INTEGER;
  var result;

  if (to > from){
    result = Math.floor(Math.random() * (to - from + 1)) + from;
  } else if (from > to){
    result = Math.floor(Math.random() * (from - to + 1)) + to;     
  } else {
    result = from;
  } 

    return result;
};

var getDecimate = function(double){
  if (!isFinite(double))  {return false;}
  var result = '';  
  var str = String(double);
  var commaPos = str.indexOf('.');
  var lenght = str.length - 1 - commaPos;
  for (var i = commaPos; i < str.length; i++){
    result += str[i];
  }

  return result + " lenght = " + lenght;
};

console.log('randomInt(5,7) => ' + randomInt(5,7));
console.log('randomInt(25,7) => ' + randomInt(25,7));
console.log('randomInt(-Infinity,10) => ' + randomInt(-Infinity,10));
console.log('randomInt(15) => ' + randomInt(15));

console.log('getDecimate(10.98743) => ' + getDecimate(10.98743));