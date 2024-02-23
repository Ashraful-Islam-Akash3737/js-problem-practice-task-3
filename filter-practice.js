const instructor = [
    {name: 'Nodi', age: 28, position: 'senior'},
    {name: 'Akil', age: 26, position: 'junior'},
    {name: 'Shobuj', age: 30, position: 'senior'},
]

for (const item of instructor) {
    if (item.position === 'senior') {
        console.log(item);
    }
    else{
        continue;
    }
}

const senior = instructor.filter(item => item.position === "senior");
console.log(senior);