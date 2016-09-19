'use strict';

Array.prototype.spliceMy = function(index, deleteCount, newPart){
  var newPart = (Array.isArray(newPart)) ? newPart : [];
  var arrRemove = [];

  if (!newPart.length) {
    for (var j = 2; j < arguments.length; j++){
        newPart.push(arguments[j]);
    }
  }


 for (var i = index; i < index + deleteCount; i++){
   arrRemove.push(this[i]);
   this[i] = Number.MAX_SAFE_INTEGER;
 }

//если есть новый массив добавляем вместо старых новые
    if (newPart){

      var k = 1;

      for (var j = newPart.lenght - deleteCount ; j > 0; j--){
        console.log(this[this.lenght - k]);
        this[this.lenght + j] = this[this.lenght - k];
        k++;
      } 

      for (var j = 0; j < newPart.length; j++){      
        this[index + j] = newPart[j];               
      }
    } 


 for (var i = index + deleteCount; i < this.length; i++){
    if(this[i - deleteCount] === Number.MAX_SAFE_INTEGER){
      this[i - deleteCount] = this[i];
      this[i] = Number.MAX_SAFE_INTEGER;
    }
 } 


  var i = this.length - 1;
  while (this[i] === Number.MAX_SAFE_INTEGER){
      this.pop();
      i--;
  }

  return arrRemove;
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

var arr = [3,2,8,4,9,10];
console.log("arr: " + arr);
console.log('arr.splice(2,2) => ' + " delete: " + arr.spliceMy(2,2) + " new arr: " + arr );
console.log('arr.splice(1,2,[12,13]) => ' + " delete: " + arr.spliceMy(1, 2, [12,13]) + " new arr: " + arr);
console.log('arr.spliceMy(3, 2, "17", "18") => ' + " delete: " + arr.spliceMy(3, 2, '17', '18') + " new arr: " + arr);

console.log('shake([3,2,8,4,9]) => ' + shake([3,2,8,4,9]));