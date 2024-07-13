const fibonacci = function (num) {
    let number = parseInt(num);
    return number < 0
        ? "OOPS"
        : number === 0
            ? 0
            : number < 3
                ? 1
                : fibonacci(number - 1) + fibonacci(number - 2);
};

// Do not edit below this line
module.exports = fibonacci;
