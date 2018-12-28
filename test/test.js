'use strict';

var expect = require('chai').expect;
var simplmap = require('../index');

describe('#simplmap',function(){
    it('should return array with doubled values',function(){
        let doubleFunc = function(x) {
            return 2*x;
        };
        var result = simplmap([1,2,3], doubleFunc);
        let exp = [2,4,6];
        expect(result).to.eql(exp);

    });


});
