'use strict';

export const URLify = (str) => {
  if (!str || str.length === 0) return str;

  let spaceCount = 0;
  for (let i = 0; i < str.length; i++) if (str[i] === ' ') spaceCount++;

  let newLength = str.length-1 + 2*spaceCount;
  for (let i = str.length-1, j = newLength; i >= 0 && j > i; i--, j--) {
    if (str[i] === ' ') {
      str[j--] = '0';
      str[j--] = '2';
      str[j] = '%';
    } else {
      str[j] = str[i];
    }
  }
  return str;
};
