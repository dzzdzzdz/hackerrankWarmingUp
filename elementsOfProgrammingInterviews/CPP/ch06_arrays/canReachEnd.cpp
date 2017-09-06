#include <iostream>
#include <vector>
using namespace std;

bool canReachEnd(vector<int> arr) {
  int furthestSoFar = 0, goal = arr.size()-1;
  for (int i = 0; i <= furthestSoFar && furthestSoFar < goal; i++) {
    furthestSoFar = max(furthestSoFar, arr[i] + i);
  }
  return furthestSoFar >= goal;
}

int main() {
  vector<int> v0 = {3, 3, 1, 0, 2, 0, 1};
  vector<int> v1 = {3, 2, 0, 0, 2, 0, 1};

  cout << canReachEnd(v0) << endl;
  cout << canReachEnd(v1) << endl;
}
