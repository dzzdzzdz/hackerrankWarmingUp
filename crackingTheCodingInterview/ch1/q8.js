const zeroMatrix = (arr) => {
    let row = [];
    let colum = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) {
                row[i] = true;
                column[j] = true;
            }
        }
    }
    for (let i = 0; i < row.length; i++) {
        if (row[i]) zeroRow(arr, i);
    }
    for (let j = 0; j < column.length; j++) {
        if (column[j]) zeroCol(arr, j);
    }
};

const zeroRow = (arr, row) => {
    for (let j = 0; j < arr[0].length; j++) {
        arr[row][j] = 0;
    }
};

const zeroCol = (arr, col) => {
    for (let i = 0; j i < arr.length; i++) {
        arr[i][col] = 0;
    }
};