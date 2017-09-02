const generatePrimes = (n) => {
  let primes = [];
  let isPrime = new Array(n+1);
  for (let i = 0; i < isPrime.length; i++) {
    isPrime[i] = true;
  }
  
  isPrime[0] = false;
  isPrime[1] = false;
  
  for (let p = 2; p <= n; p++) {
    if (!!isPrime[p]) {
      primes.push(p);
      for (let j = p; j <= n; j+=p) {
        isPrime[j] = false;
      }
    }
  }
  
  return primes;
}
