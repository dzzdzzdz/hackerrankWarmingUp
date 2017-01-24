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

function main() {
    var n = parseInt(readLine());
    c = readLine().split(' ');
    c = c.map(Number);
    let count = 0;

    for (let i = 0; i < n-1;) {
        if (c[i+2] === 1) {
            count++;
            i++;
        }
        else {
            count++;
            i+=2;
        }
    }
    
    console.log(count);
}
