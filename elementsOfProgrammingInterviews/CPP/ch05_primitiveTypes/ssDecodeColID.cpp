#include <iostream>
using namespace std;

int ssDecodeColID(const string &col) {
  int x = 0;
  for (const char &c : col) {
    x = x * 26 + c - 'A' + 1;
  }
  return x;
}

int main() {
  cout << ssDecodeColID("A") << endl;
  cout << ssDecodeColID("AA") << endl;
  cout << ssDecodeColID("AAA") << endl;
  cout << ssDecodeColID("AXH") << endl;
}
