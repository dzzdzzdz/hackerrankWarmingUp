#include <iostream>
#include <vector>
using namespace std;

int deleteDuplicates(vector<int> &arr) {
  if (arr.empty()) {
    return 0;
  }
  int writeIndex = 1;
  for (int i = 1; i < arr.size(); i++) {
    if (arr[writeIndex-1] != arr[i]) {
      arr[writeIndex++] = arr[i];
    }
  }
  return writeIndex;
}

int main() {
  vector<int> v = {2, 3, 5, 5, 7, 11, 11, 11, 13};
  cout << deleteDuplicates(v) << endl;
}
