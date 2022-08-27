const users = [
    { id: 1, name: 'abul', salary: 1000 }
];
console.log(users[0].name);

const data = {
    count: 5000,
    data: [
        { id: 1, name: 'babul', job: 'enginere' }
    ],
    datas: [
        { id: 2, name: 'kabul', job: 'doctor' }
    ]
};
const firstJob = data.data[0].name;
// console.log(firstJob);
const user = {
    id: 1,
    address: {
        street: {
            first: {
                dhaka: 111,
                natore: 999
            }
        }
    }
}
const multi = user.address.street.first.dhaka;
console.log(multi);