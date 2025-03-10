const leapYears = function leapYears(year) {
    // Check if the year is divisible by 4
    if (year % 4 === 0) {
      // If it's divisible by 100, it's not a leap year...
      if (year % 100 === 0) {
        // ...unless it's also divisible by 400
        return year % 400 === 0;
      }
      // If it's divisible by 4 but not by 100, it is a leap year
      return true;
    }
    // If it's not divisible by 4, it's not a leap year
    return false;
  }
  

// Do not edit below this line
module.exports = leapYears;
