'use strict';

Array.prototype.spliceMy = function(index, deleteCount, newPart){
  for (var i = 0; i < deleteCount; i++){
    if (newPart && newPart[i]){
      this[index + i] = newPart[i];
    } else {
      if (this[index + i + deleteCount]){
        this[index + i] = this[index+ i + deleteCount];
        this[index + i + deleteCount] = Number.MAX_SAFE_INTEGER;
      } else{
        this[index + i] = Number.MAX_SAFE_INTEGER;
      }
    }
  }
  for ( i = this.length; i >= index ; i--){
    if(this[i] === Number.MAX_SAFE_INTEGER) {
        this.pop();
    }
  }
  return this;
};

var shake = function (arr){
  var arrNew = arr;
  var random, p;
  for (var i = 0; i< arr.length; i++){
    random = Math.floor(Math.random() * arr.length);
    p = arrNew[i] ;
    arrNew[i] = arrNew[random];
    arrNew[random] = p;   
  }
  return arrNew;
};

console.log('[3,2,8,4,9].splice(2,2) => ' + [3,2,8,4,9].spliceMy(2,2));
console.log('[3,2,8,4,9].splice(1,2,[12,13]) => ' + [3,2,8,4,9].spliceMy(1,2,[12,13]));

console.log('shake([3,2,8,4,9]) => ' + shake([3,2,8,4,9]));