const numbers = [2, 3, 4, 5, 6, 7];


function getDoubled(numbers) {
    const output = [];
    for (const number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}
const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
const makeDouble2 = numbers.map(x => x * 2);
const makeDouble3 = [1, 2, 3, 4, 5].map(x => x * 5);
const result = getDoubled(numbers);
// console.log(result);
// console.log(makeDouble);
// console.log(makeDoubleDirect);
// console.log(makeDouble2);
console.log(makeDouble3);