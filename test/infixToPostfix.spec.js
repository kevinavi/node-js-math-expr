const infixToPostfix = require('../app/conversions/infixToPostfix');
const should = require('chai').should();

describe('infixToPostfix conversions', function() {
    it('given an expression, successfully convert it to postfix', function() {
        const expression = '1+2';
        var result = infixToPostfix(expression);
        result.should.equal(' 1  2  +');
    })

    it('given an expression with multiple digits, successfully convert it to postfix', function() {
        const expression = '1+22*89';
        var result = infixToPostfix(expression);
        result.should.equal(' 1  22  89  * +');
    })

    it('given an expression with negative operator, successfully convert it to postfix', function() {
        const expression = '1+2-8';
        var result = infixToPostfix(expression);
        result.should.equal(' 1  2  + 8  -');
    })

    it('given an expression with decimals, successfully convert it to postfix', function() {
        const expression = '1+2-8.8';
        var result = infixToPostfix(expression);
        result.should.equal(' 1  2  + 8.8  -');
    })
});