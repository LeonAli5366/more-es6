const numbers = [12, 4, 5, 33, 55, 3, 13, 88, 56, 15];
const fives = numbers.find(x => x % 5 == 0);
const fivesAll = numbers.filter(x => x % 5 == 0);
console.log(fivesAll)
console.log(fives);
const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 25000 },
    { id: 4, name: 'tablet', price: 90000 }
];
const getCheap = products.find(x => x.price < 40000);
console.log(getCheap);