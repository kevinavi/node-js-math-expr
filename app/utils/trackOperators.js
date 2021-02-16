module.exports = function(current, previous) {

    current.addition += previous.addition;
    current.subtraction += previous.subtraction;
    current.multiplication += previous.multiplication;
    current.division += previous.division;

    return current;
}