const isWellFormed = (s) => {
  let leftChars = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
      leftChars.unshift(s[i]);
    }
    else {
      if ((s[i] == ')' && leftChars[0] == '(') || (s[i] == ']' && leftChars[0] == '[') || (s[i] == '}' && leftChars[0] == '{')) {
        leftChars.shift();
      }
    }
    console.log(leftChars)
  }
  
  return leftChars.length == 0;
};
