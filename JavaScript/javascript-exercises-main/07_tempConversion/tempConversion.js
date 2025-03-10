const convertToCelsius = function convertToCelsius(fahrenheit) {
  // Convert Fahrenheit to Celsius and round to 1 decimal place
  return Math.round(((fahrenheit - 32) * (5 / 9)) * 10) / 10;
}

const convertToFahrenheit = function convertToFahrenheit(celsius) {
  // Convert Celsius to Fahrenheit and round to 1 decimal place
  return Math.round((celsius * (9 / 5) + 32) * 10) / 10;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
