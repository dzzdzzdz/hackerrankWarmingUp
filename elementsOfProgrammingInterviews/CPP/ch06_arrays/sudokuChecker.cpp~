#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

bool hasDuplicate();

bool sudokuChecker(vector<vector<int>> grid) {
  for (int i = 0; i < grid.size(); i++) {
    // Check row constrains
    if (hasDuplicate(grid, i, i+1, 0, grid.size())) return false;
  }
  for (int i = 0; i < grid.size(); i++) {
    // Check column constraints
    if (hasDuplicate(grid, 0, grid.size(), i, i+1)) return false;
  }
  int regionSize = (int)sqrt(grid.size());
  for (int i = 0; i < regionSize; i++) {
    for (int j = 0; j < regionSize(); j++) {
      if (hasDuplicate(grid, regionSize*i, regionSize*(i+1), regionSize*j, regionSize*(j+1))) return false;
    }
  }
  return true;
}

bool hasDuplicate(vector<vector<int>> grid, int startRow, int endRow, int startCol, int endCol) {
  vector<bool> isPresent(grid.size()+1, false);
  for (int i = startRow; i < endRow; i++) {
    for (int j = startCol; j < endCol; j++) {
      if (grid[i][j] != 0 && isPresent[grid[i][j]]) {
	return true;
      }
      isPresent[grid[i][j]] = true;
    }
  }
  return false;
}
