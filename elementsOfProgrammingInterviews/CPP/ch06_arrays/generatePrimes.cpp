#include <iostream>
#include <vector>
using namespace std;

vector<int> generatePrimes(int n) {
  vector<int> primes;
  vector<bool> isPrime(primes.size()+1, true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (int i = 2; i <= n; i++) {
    if (isPrime[i]) {
      primes.push_back(i);
      for (int j = i; j <= n; j += i) {
	isPrime[j] = false;
      }
    }
  }

  return primes;
}

int main() {
  vector<int> v = generatePrimes(10);
  for (int i : v) {
    cout << i;
  }
  cout << endl;
}
