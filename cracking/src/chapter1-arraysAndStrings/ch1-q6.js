'use strict';

export const stringCompression = (str) => {
  if (!str) return str;

  let res = '';
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    count++;
    if (!str[i+1] || str[i] !== str[i+1]) {
      res += str[i] + count;
      count = 0;
    }
  }

  return res.length < str.length ? res : str;
};
