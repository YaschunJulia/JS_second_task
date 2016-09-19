'use strict';

var calWay = function(km) {
    var way = 0
    return function (km){
        way += Math.abs(km);
        return way;
    }
}
var go = calWay();

console.log('go(20) => ' + go(20));
console.log('go(40) => ' + go(40));
console.log('go(-15) => ' + go(-15));