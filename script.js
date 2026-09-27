
let numbers = [2, 3, 1];

function totalNumbers() {
    let total = 0;

    for (let number of numbers) {
        total += number;
    }

    return total;
}

console.log(totalNumbers());

