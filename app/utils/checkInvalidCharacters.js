module.exports = function(expression) {
    return /[^()+\-*/0-9.\s]/gi.test(expression);
}