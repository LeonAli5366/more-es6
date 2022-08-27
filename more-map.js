const result = [12, 34, 56, 68, 78].map(x => x / 2);
console.log(result);

const friends = ['tom sanks', 'tom cruise', 'tom solaiman'];
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);

const nameLength = friends.map(friend => friend.length);
console.log(nameLength);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 80000 },
    { id: 3, name: 'watch', price: 35000 },
    { id: 4, name: 'tablet', price: 90000 }
];
const items = products.map(product => product.name);
console.log(items);
const prices = products.map(product => product.price);
console.log(prices)