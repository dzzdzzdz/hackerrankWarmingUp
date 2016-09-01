process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
	input_stdin += data;
    });

process.stdin.on('end', function () {
	input_stdin_array = input_stdin.split("\n");
	main();    
    });

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

const main = () => {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
	a[a_i] = readLine().split(' ');
	a[a_i] = a[a_i].map(Number);
    }
    let primaryDiagonal = 0;
    let secondaryDiagonal = 0;
    for (let i = 0; i < a.length; i++) {
        primaryDiagonal += a[i][i];
    }
    let i = 0, j = n - 1;
    while (j >= 0) {
        secondaryDiagonal += a[i][j];
        i++;
        j--;
    }
    
    console.log(Math.abs(primaryDiagonal - secondaryDiagonal));
}
