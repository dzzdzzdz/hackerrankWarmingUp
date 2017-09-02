#include <iostream>
using namespace std;

string intToString(int x) {
  string s;
  bool neg;
  if (x < 0) {
    x = -x;
    neg = true;
  } 
  else {
    neg = false;
  }
  if (x == 0) s = "0";
  while (x) {
    s.push_back('0' + x % 10);
    x /= 10;
  } 
  if (neg) s.push_back('-');
  reverse(s.begin(), s.end());
  return s;
}

int stringToInt(string s) {
  int x = 0;
  bool neg = s[0] == '-';

  for (int i = neg; i < s.size(); i++) {
    if (isdigit(s[i])) {
      x = x * 10 + s[i] - '0';
    }
    else {
      cout << "Illegal input" << endl;
    }
  }
  return neg ? -x : x;
}

int main() {
  cout << intToString(0) << endl;
  cout << stringToInt("-123") << endl;
}
