const convertToCelsius = function(degree) {
    degree = (degree - 32) * (5/9);
    degree = Math.round(degree * 10) / 10;
    return degree;
};

const convertToFahrenheit = function(degree) {
    degree = ((degree * 9) / 5) + 32;
    degree = Math.round(degree * 10) / 10;
    return degree;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
