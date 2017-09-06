#include <iostream>
#include <vector>
using namespace std;

template <typename T>
void plusOne(vector<T> &arr) {
  int n = arr.size()-1;
  arr[n] = arr[n] + 1;
  for (int i = n; i > 0 && arr[i] == 10; i--) {
    arr[i] = 0;
    arr[i-1] = arr[i-1] + 1;
  }
  if (arr[0] == 10) {
    arr[0] = 0;
    arr.insert(arr.begin(), 1);
  }
}

int main() {
  vector<int> v = {9, 9, 9};
  for (int i : v) {
    cout << i;
  }
  cout << endl;
  plusOne(v);
  for (int i : v) {
    cout << i;
  }
  cout << endl;
}
