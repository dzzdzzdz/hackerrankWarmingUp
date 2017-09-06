#include <iostream>
#include <vector>
using namespace std;

void rotateMatrix(vector<vector<int>> &matrix) {
  int size = matrix.size()-1;
  for (int i = 0; i < matrix.size()/2; i++) {
    for (int j = i; j < size-i; j++) {
      int temp = matrix[i][j];

      matrix[i][j] = matrix[size-j][i];
      matrix[size-j][i] = matrix[size-i][size-j];
      matrix[size-i][size-j] = matrix[j][size-i];
      matrix[j][size-i] = temp;
    }
  }
}

int main() {
  vector<vector<int>> v = {{1, 2, 3, 4}, {5, 6, 7, 8}, {9, 10, 11, 12}, {13, 14, 15, 16}};
  for (int i = 0; i < v.size(); i++) {
    for (int j = 0; j < v[i].size(); j++) {
      cout << v[i][j] << "\t";
    }
    cout << endl;
  }
  cout << endl;

  rotateMatrix(v);
  for (int i = 0; i < v.size(); i++) {
    for (int j = 0; j < v[i].size(); j++) {
      cout << v[i][j] << "\t";
    }
    cout << endl;
  }
  cout << endl;
}
