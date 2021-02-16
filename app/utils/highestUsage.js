module.exports = function(result) {
    return Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);
}