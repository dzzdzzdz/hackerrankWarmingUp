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
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    let sumA = 0;
    let sumB = 0;
    if (a0 > b0) {
        sumA++;
    }
    if (a0 < b0) {
        sumB++;
    }
    if (a1 > b1) {
        sumA++;
    }
    if (a1 < b1) {
        sumB++;
    }
    if (a2 > b2) {
        sumA++;
    }
    if (a2 < b2) {
        sumB++;
    }
    console.log(sumA + ' ' + sumB);
}
