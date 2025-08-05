const sumAll = function(...numbers) {

    for (let i = 0; i < numbers.length; i++) {
        if (!Number.isInteger(numbers[i])) {
            return "ERROR";
        }
        if (numbers[i] < 0) {
            return "ERROR";
        }
    }

    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let sum = 0;

    for (let i = min; i <= max; i++) { 
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
