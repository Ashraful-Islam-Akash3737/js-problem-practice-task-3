const number = [12, 47, 456, 78];
const sum = (number) => {
    let num = number.map(p => p * p);
    return num;
}
console.log(sum(number));
// map
const newNum = number.map(p => p * p);
console.log( "newNum is:",newNum);

// filter
const graterThen20 = number.filter(p => p >= 50);
console.log("grater then 50",graterThen20);

// find
const smallerThen50 = number.find(p => p <= 50);
console.log("smaller then 50",smallerThen50);

// reduce
const totalSum = number.reduce((p,c) => p + c, 0);
console.log("totalSum Is", totalSum);
