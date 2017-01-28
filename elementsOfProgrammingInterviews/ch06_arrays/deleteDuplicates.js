const deleteDuplicates = (sortedArr) => {
  if (sortedArr.length === 0) {
    return 0;
  }
  
  let writeIndex = 1;
  
  for (let i = 1; i < sortedArr.length; i++) {
    if (sortedArr[writeIndex-1] != sortedArr[i]) {
      sortedArr[writeIndex++] = sortedArr[i];
    }
  }
  
  return writeIndex;
}
