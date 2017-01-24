function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);
    
    if (x1 === x2 && v1 === v2) {
        console.log('YES');
    }
    else if (x1 === x2 && v1 !== v2) {
        console.log('NO');
    }
    else if (x1 <= x2 && v1 <= v2) {
        console.log('NO');
    }
    else {
        if (Math.abs(x1 - x2) % Math.abs(v1 - v2) === 0) {
            console.log('YES');
        }
        else {
            console.log('NO');
        }
    }
}
