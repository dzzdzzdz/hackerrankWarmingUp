const lookAndSay = (n) => {
  let s = '1';
  for (let i = 1; i < n; i++) {
    s = nextNumber(s);
  }
  
  return s;
};

const nextNumber = (s) => {
  let result = '';
  for (let i = 0; i < s.length; i++) {
    let count = 1;
    while (i + 1 < s.length && s.charAt(i) == s.charAt(i + 1)) {
      i++;
      count++;
    }
    result += count;
    result += s.charAt(i);
  }
  
  return result.toString();
};
