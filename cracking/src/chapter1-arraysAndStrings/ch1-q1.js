'use strict';

export const isUnique = (str) => {
  let chars = [];
  for (let i = 0; i < str.length; i++) {
    if (chars.includes(str[i])) return false;
    chars.push(str[i]);
  }
  return true;
};

export const isUniqueSorted = (str) => {
  str.sort();
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i-1]) return false;
  }
  return true;
};
