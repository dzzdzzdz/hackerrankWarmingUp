const plusOne = (arr) => {
  let n = arr.length - 1;
  arr[n] = arr[n] + 1;
  n += 1;
  
  for (let i = n; i > 0; i--) {
    if (arr[i] === 10) {
      arr[i] = 0;
      arr[i-1] = arr[i-1] + 1;
    }
  }
  
  if (arr[0] === 10) {
    arr[0] = 0;
    arr.unshift(1);
  }
  
  return arr;
}
