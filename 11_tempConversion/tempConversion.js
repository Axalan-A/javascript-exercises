const convertToCelsius = function(temperatureInF) {
  let temperatureInC = (temperatureInF - 32) * (5/9)
  temperatureInC = Math.round(temperatureInC * 10)/10
  return temperatureInC
};

const convertToFahrenheit = function(temperatureInC) {
  let temperatureInF = (temperatureInC * (9/5) + 32)
  temperatureInF = Math.round(temperatureInF * 10)/10
  return temperatureInF
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
