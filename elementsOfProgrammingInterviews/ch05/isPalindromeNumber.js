const isPalindromeNumber = (x) => {
  if (x < 0) {
    return false;
  }
  
  let numDigits = Math.floor(Math.log10(x)) + 1;
  let msdMask = Math.pow(10, numDigits - 1);
  for (let i = 0; i < numDigits / 2; i++) {
    if (Math.floor(x / msdMask) != x % 10) {
      return false;
    }
    x %= msdMask;
    x = Math.floor(x / 10);
    msdMask = Math.floor(msdMask / 100);
  }
  
  return true;
}
