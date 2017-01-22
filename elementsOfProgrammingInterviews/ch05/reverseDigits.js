const reverseDigits = (x) => {
  let result = 0;
  let xRemaining = Math.abs(x);
  while (xRemaining != 0) {
    // The last digit of x becomes the first digit of result
    result = result * 10 + xRemaining % 10;
    // Chop off the last digit of x 
    xRemaining = Math.floor(xRemaining / 10);
  }
  
  return x < 0 ? -result : result;
}

// Brute force method by converting int to string
const bruteReverseDigits = (x) => {
  x = x.toString().split('').reverse().join('');
  return parseInt(x);
}
