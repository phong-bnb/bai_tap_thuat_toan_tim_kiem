var matrix = [[0, 1, 1, 2], [0, 5, 0, 0], [2, 0, 3, 3]];
for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix.length; j++) {
        if (matrix[i][j] === 0) {
            matrix[i].splice(j, 1);
            j--;
        }
    }
    //     console.log(matrix[1][1])
    //     break;
    //
}
console.log(matrix);
var sum = matrix.reduce(function (tota, current) {
    // @ts-ignore
    var total = current.reduce(function (ar, tr) { return ar + tr; }, 0);
    return total + total;
}, 0);
console.log(sum);
