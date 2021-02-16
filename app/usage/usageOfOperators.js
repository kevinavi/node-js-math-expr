const matchCharactersAndOperators = require('../utils/matchCharactersAndOperators');
const checkInvalidCharacters = require('../utils/checkInvalidCharacters');

function trackOperators(operator, element) {
    switch (operator) {
        case '+':
            element.addition++;
            break;
        case '-':
            element.subtraction++;
            break;
        case '*':
            element.multiplication++;
            break;
        case '/':
            element.division++;
            break;
        default:
            break;
    }
}

function getUsageOfOperators(expression) {
    var tokens = matchCharactersAndOperators(expression);
    var containsInvalidChars = checkInvalidCharacters(expression);

    var usageOfOperators = {
        addition: 0,
        subtraction: 0,
        multiplication: 0,
        division: 0
    };

    if (Array.isArray(tokens) && !containsInvalidChars) {
        for (let index = 0; index < tokens.length; index++) {
            var token = tokens[index];
            trackOperators(token, usageOfOperators);
        }

        return usageOfOperators;
    }
}

module.exports = function(expression) {
    return getUsageOfOperators(expression);
};