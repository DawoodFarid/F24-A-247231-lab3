let numbers = [2, 3, 1];

function totalNumbers() {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

function largestNumber() {
    let largest = numbers[0];

    for (let number of numbers) {
        if (number > largest) {
            largest = number;
        }
    }

    return largest;
}

console.log(totalNumbers());
console.log(largestNumber());

