const isPalindrome = (s) => {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    if (s.charAt(i) !== s.charAt(j)) {
      return false;
    }  
  }
  
  return true;
};
