const people = [
    { name: 'Meena', age: 20 },
    { name: 'Rina', age: 15 },
    { name: 'Suchorita', age: 22 },
]

let totalAge = 0;
for (const item of people) {
    totalAge = totalAge + item.age;
}
console.log('Total age is:', totalAge);

const newAge = people.reduce((p, c) => p + c.age, 0);
console.log(newAge);