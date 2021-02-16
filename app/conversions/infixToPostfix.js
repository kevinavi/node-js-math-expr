const IsWhiteSpace = require('../utils/isWhiteSpace');
const IsDigit = require('../utils/checkDigitAndDecimal');
const precedence = require('../utils/precedenceRule');

function infixToPostfix(expression) {
    if (typeof expression !== 'string') {
      if (expression instanceof String) {
        expression = expression.toString();
      } else {
        return null;
      }
    }

    var result = '';
    var stack = [];

    for (let index = 0; index < expression.length; index++) {
      const element = expression[index];
      if (IsWhiteSpace(element)) {
        continue;
      }

      else if (IsDigit(expression[index])) {
        var operand = 0;
        while (index < expression.length && IsDigit(expression[index]))
        {
          if (expression[index] == '.') {
            operand = operand + expression[index];
            index++;
            while(index < expression.length && IsDigit(expression[index])) {
              operand += expression[index];
              index++;
            }
            break;
          }
          operand = (operand * 10) + (expression[index] - '0');
          index++;
        }
        index--;
        result = result + " " + operand.toString() + " ";
      }

      else if (expression[index] == '.') {
        result = result.trim() + expression[index];
      }

      else if (element == '(')
      {
          stack.push(element);
      }

      else if (element == ')')
      {
          while (stack.length > 0 && stack[stack.length - 1] != '(')
          {
              result = result + " " + stack.pop();
          }

          if (stack.length > 0 && stack[stack.length - 1] != '(')
          {
              return "Invalid";
          }
          else
          {
              stack.pop();
          }
      }
      else
      {
          while (stack.length > 0 && precedence(element) <= precedence(stack[stack.length - 1]))
          {
              result = result + " " + stack.pop();
          }
          stack.push(element);
      }
    }

    while (stack.length > 0)
    {
        result = result + " " + stack.pop();
    }

    return result;
}

module.exports = function(expression) {
    return infixToPostfix(expression);
};