var res = function (arr) {
    return arr.sort(function (a, b) { return a - b; });
};
console.log(res([2, -100, -100000, 0, -2, 1]));
