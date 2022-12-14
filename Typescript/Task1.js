var x = function (s) {
    s.forEach(function (value) {
        console.log(value + " " + value.length);
    });
};
x(["World", "Hello Team"]);
