module.exports = function(character) {
    return (character >= '0' && character <= '9') || character == '.';
};