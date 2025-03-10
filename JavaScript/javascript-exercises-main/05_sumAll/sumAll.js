const sumAll = function sumAll(start, end) {
    // Check if both parameters are numbers and integers
    if (!Number.isInteger(start) || !Number.isInteger(end)) {
      return 'ERROR';
    }
  
    // Check if either number is negative
    if (start < 0 || end < 0) {
      return 'ERROR';
    }
  
    // Ensure start is the smaller number
    const min = Math.min(start, end);
    const max = Math.max(start, end);
  
    // Calculate the sum
    let sum = 0;
    for (let i = min; i <= max; i++) {
      sum += i;
    }
  
    return sum;
  }
  
  

// Do not edit below this line
module.exports = sumAll;
