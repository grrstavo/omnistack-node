module.exports = function parseStringAsArray(arrayAsString) {
    return arrayAsString.split(',').map(node => node.trim());
};