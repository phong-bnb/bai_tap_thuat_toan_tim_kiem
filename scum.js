function Scum(numbers, value) {
    var count = 0;
    for (var i = 0; i < numbers.length; i++) {
        if (value === numbers[i]) {
            count++;
        }
    }
    console.log("số lần xuất hiện trong mảng là: " + count);
}
var numbers = [1, 2, 3, 4, 1, 8, 2, 1, 9, 54, 1, 5, 8, 1];
var value = 1;
var find = Scum(numbers, value);
