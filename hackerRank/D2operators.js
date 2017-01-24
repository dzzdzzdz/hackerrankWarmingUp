function processData(input) {
    input = input.split('\n');
    for (var i = 0; i < input.length; i++) {
        var mealCost = input[0] * 1;
        var tip = input[1] * 1;
        var tax = input[2] * 1;
    }
    var totalCost = Math.round(mealCost + tip*mealCost/100 + tax*mealCost/100);
    console.log('The total meal cost is ' + totalCost + ' dollars.');
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
