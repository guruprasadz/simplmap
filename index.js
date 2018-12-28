'use strict';

module.exports = function(arr,func){
    let result = [];
    arr.forEach(element => {
        result.push(func(element));
    });
    return result;
}