module.exports = function(expression) {
    return expression.match(/(?:\d+\.?\d*|-?\.\d*)|[()+\-*/]/gi);
}