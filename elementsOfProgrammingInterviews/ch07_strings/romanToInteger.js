const romanToInteger = (s) => {
  let NUMERALS = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000
  };
  let result = NUMERALS[s[s.length-1]];
  
  for (let i = s.length - 2; i >= 0; i--) {
    if (NUMERALS[s[i]] < NUMERALS[s[i+1]]) {
      result -= NUMERALS[s[i]];
    }
    else {
      result += NUMERALS[s[i]];
    }
  }
  
  return result;
};
