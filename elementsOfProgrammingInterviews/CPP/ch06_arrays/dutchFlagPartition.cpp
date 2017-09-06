#include <iostream>
#include <vector>
using namespace std;

template <typename T>
void dutchFlagPartition(vector<T> &A, const int &pivotIndex) {
  T pivot = A[pivotIndex];
  /*
    bottom = A[0 : smaller - 1];
    middle = A[smaller : equal - 1];
    unclassified = A[smaller : larger]
    top = A[larger - 1 : A.size() - 1]
  */
  int smaller = 0, equal = 0, larger = A.size()-1;
  while (smaller <= larger) {
    if (A[equal] < pivot) {
      swap(A[smaller++], A[equal++]);
    } else if (A[equal] == pivot) {
      equal++;
    } else {
      swap(A[equal], A[larger--]);
    }
  }
}

int main() {
  vector<int> v = {0, 1, 2, 0, 2, 1, 1};
  for (int i : v) {
    cout << i;
  }
  cout << endl;
  dutchFlagPartition(v, 3);
  for (int i : v) {
    cout << i;
  }
  cout << endl;
}
