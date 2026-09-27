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

function biggerThanFirst() {
    let count = 0;

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[0]) {
            count++;
        }
    }

    return count;
}

console.log(totalNumbers());
console.log(largestNumber());
console.log(biggerThanFirst());

let show = document.querySelector("#show");

show.addEventListener("click", function () {
    document.querySelector("#total").textContent = totalNumbers();
    document.querySelector("#big").textContent = largestNumber();
    document.querySelector("#above").textContent = biggerThanFirst();
});

