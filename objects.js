// Creating Objects

 const person = {
    first: "Kimbo",
    last: "Slice",
    age: "29",
    email: "kimbo@gmail.com"
}

// Working with Objects properties
console.log(person.first);
console.log(person['last']);

// Looping

for (const key in person) {
    console.log(key + ': ' + person[key]);
}