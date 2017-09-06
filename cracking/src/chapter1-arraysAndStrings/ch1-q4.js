'use strict';

export const palindromePermutation = (str) => {
  if (!str) return false;

  let chars = [];
  for (let char of str) {
    if (char !== ' ' ) {
      let index = chars.indexOf(char);
      if (index > -1) {
        chars.splice(index, 1);
      } else {
        chars.push(char);
      }
    }
  }

  return chars.length <= 1;
};
