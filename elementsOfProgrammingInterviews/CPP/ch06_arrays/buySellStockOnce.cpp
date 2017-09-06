#include <iostream>
#include <vector>
#include <limits>
using namespace std;

double maxProfit(vector<double> prices) {
  double maxProfit = 0.0;
  double minPrice = numeric_limits<double>::max();
  for (double price : prices) {
    maxProfit = max(maxProfit, price - minPrice);
    minPrice = min(minPrice, price);
  }
  return maxProfit;
}

int main() {
  vector<double> v = {310, 315, 275, 295, 260, 270, 290, 230, 255, 250};
  cout << maxProfit(v) << endl;
}
