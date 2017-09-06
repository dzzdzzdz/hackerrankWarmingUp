'use strict';

export const stringRotation = (str1, str2) => {
  if (!str1 || !str2) throw new Error('invalid input');
    /*
      str1 = xy
      str2 = yx
      str1 = xyxy = xstr2y
     */
  if (str1.length === str2.length && str1.length > 0) return isSubstring(str1+str1, str2);
  return false;
};

const isSubstring = (str1, str2) => { return str1.includes(str2); };
