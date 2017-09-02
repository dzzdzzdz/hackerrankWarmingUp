const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const dutchFlagPartition = (arr) => {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;
  
  while (mid <= high) {
    if (arr[mid] === 2) {
      swap(arr, mid, high--);
    }
    else if (arr[mid] === 1) {
      mid++;
    }
    else if (arr[mid] === 0) {
      swap(arr, low++, mid++);
    }
  }
  
  return arr;
};
