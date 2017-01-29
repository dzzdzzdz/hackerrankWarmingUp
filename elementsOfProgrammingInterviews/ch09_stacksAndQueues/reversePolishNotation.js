const reversePolishNotation = (string) => {
  let intermediateResults = [];
  let symbols = string.split(',');
  
  for (let token in symbols) {
    if (symbols[token].length == 1 && '+-*/'.includes(symbols[token])) {
      let y = intermediateResults.shift();
      let x = intermediateResults.shift();
      if (symbols[token] == '+') {
        intermediateResults.push(x + y);
      }
      else if (symbols[token] == '-') {
        intermediateResults.push(x - y);
      }
      else if (symbols[token] == '*') {
        intermediateResults.push(x * y);
      }
      else if (symbols[token] == '/') {
        intermediateResults.push(Math.floor(x / y));
      }
      else {
        console.log('Wrong token at ' + token);
      }
    }
    else { // token is a number
      intermediateResults.push(parseInt(symbols[token]));
    }
  }
  
  return intermediateResults.pop();
};
