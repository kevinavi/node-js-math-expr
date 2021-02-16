module.exports = function (character) {
    switch (character)
    {
        case '-':
        case '+':
            return 1;

        case '*':
        case '/':
            return 2;

        default:
            return -1;
    }
};