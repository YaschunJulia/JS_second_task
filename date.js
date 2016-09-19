'use strict';

var startOfMonth = function (date){
    var date = (typeof date === 'string') ? Date.parse(date) : date;
    var date = new Date(date);
    var month = date.getMonth();
    var year = date.getFullYear();
    var monthFormat = ((month + 1)<10) ? "0" + (month + 1) : (month + 1);
    var format = "01/"+  monthFormat + "/"+ year;
    return format;
};

console.log('startOfMonth(new Date()) => ' + startOfMonth(new Date()));
console.log('startOfMonth(Date.now()) => ' + startOfMonth(Date.now()));
console.log('startOfMonth("11/03/2009") => ' + startOfMonth('11/03/2009'));