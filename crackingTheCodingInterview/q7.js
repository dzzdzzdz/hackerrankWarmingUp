const rotateMatrix = (arr) => {
    let size = arr.length;
    let last = size - 1;
    for (let i = 0; i < Math.floor(size/2); i++) {
        for (let j = 0; j < size/2; j++) {
            let temp = arr[i][j];
            arr[i][j] = arr[last-j][i];
            arr[last-j][i] = arr[last-i][last-j];
            arr[last-i][last-j] = arr[j][last-i];
            arr[j][last-i] = temp;
        }
    }
    return arr;
}