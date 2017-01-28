const stringToInt = (str) => {
  let result = 0;
  for (let i = str.charAt(0) == '-' ? 1 : 0; i < str.length; i++) {
    result = result * 10 + (str.charAt(i) - '0');
  }
  
  return str.charAt(0) == '-' ? -result : result;
};
