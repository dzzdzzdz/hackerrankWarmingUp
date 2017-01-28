const computeMaxProfit = (arr) => {
  let minPrice = Number.MAX_SAFE_INTEGER;
  let maxProfit = 0.0;

  for (let price in arr) {
    maxProfit = Math.max(maxProfit, arr[price] - minPrice);
    minPrice = Math.min(minPrice, arr[price]);
  }
  
  return maxProfit;
}
