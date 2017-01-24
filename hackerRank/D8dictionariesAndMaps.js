const processData = (input) => {
    input = input.split('\n');
    let entries = parseInt(input[0]);
    let phonebook = [];
    
    for (let i = 0; i < entries; i++) {
        let line = input[i+1];
        line = line.split(' ');
        phonebook[line[0]] = line[1];
    }
    
    for (let i = entries+1; i < input.length; i++) {
        if (!!phonebook[input[i]]) {
            console.log(input[i]+'='+phonebook[input[i]]);
        }
        else {
            console.log('Not found');
        }
    }
} 

    process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
	_input += input;
    });

process.stdin.on("end", function () {
	processData(_input);
    });
