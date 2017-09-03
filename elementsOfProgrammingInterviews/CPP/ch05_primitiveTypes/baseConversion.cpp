#include <iostream>
using namespace std;

string convertBase(const string &s, const int &b1, const int &b2) {
  bool neg = s[0] == '-';
  int x = 0;
  for (int i = neg; i < s.size(); i++) {
    x *= b1;
    x += isdigit(s[i]) ? s[i] - '0' : s[i] - 'A' + 10;
  }

  string ans;
  while (x) {
    int r = x % b2;
    ans.push_back(r >= 10 ? 'A' + r - 10 : '0' + r);
    x /= b2;
  }
  if (ans.empty()) ans.push_back('0');
  if (neg) ans.push_back('-');
  reverse(ans.begin(), ans.end());

  return ans;
}

int main() {
  cout << convertBase("123", 10, 16) << endl;
}
