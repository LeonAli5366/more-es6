const numbers = [12, 4, 5, 33, 55, 3, 13, 88, 56, 1];
const getBig = numbers.filter(num => num > 20);
console.log(getBig);
const tiny = numbers.filter(x => x < 10);
console.log(tiny);
const even = numbers.filter(x => x % 2 == 0);
console.log(even)

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 25000 },
    { id: 4, name: 'tablet', price: 90000 }
];

const getBigPrice = products.filter(x => x.price > 30000);
console.log(getBigPrice)