const processData = (input) => {
    input = input.split('\n');
    for (let i=1; i < input.length; i++) {
        let data = input[i].split(' ').map(Number);
        let prisoners = data[0];
        let sweets = data[1];
        let id = data[2];
        
        let firstReceiver = sweets - 1;
        let lastReceiver = firstReceiver + (id - 1);
        
        lastReceiver = lastReceiver % prisoners;
        lastReceiver += 1;
        
        console.log(lastReceiver);
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
