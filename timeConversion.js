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
    var time = readLine();
    var hour = time.substring(0, 2);
    var minutes = time.substring(2, 5);
    var seconds = time.substring(5, 8);
    var ampm = time.charAt(8);

    if (hour === '12' && ampm === 'A') {
        hour = '00';
    }
    if (ampm === 'P') {
        if (hour * 1 < 12) {
            hour = (hour*1 + 12);
        }
    }
    console.log(hour+minutes+seconds);

}
