const name = "Irah";
        const age = 21;
        const isStatus = true;
        alert(`Name: ${name}, Age: ${age}, Status: ${isStatus}`);

let x = 10;
let y = 5;
console.log("Addition:" + x + y)
console.log("Multiplication: " + x * y)
console.log("Division: " + x / y)
console.log("Subtraction: " + x - y)

if (true) {
    var a = 10;
    let b = 20;
    const c = 30;
    console.log("True");
}
else {
    console.log("False");
}

const Person = {
    fname : "Irah",
    lname : "Tampos",
    age : 21,
    favorite : ["tulog", "kaon", "selpon"],
    hobbys: {
        genadula : "wala",
        genatanaw : "movie",
        genabuhat : "selpon",
    } 
};
console.log(Person.fname + " " + Person.lname);
console.log(Person.fname, Person.lname);
console.log(Person.favorite[2]);
console.log(Person.hobbys.genabuhat);
console.log(Person);

const People = [
    {
        id: 1,
        fullName: " Irah Tampos",
        age: 21,
    },
    {
        id: 2,
        fullName: "Nicca Tampos",
        age: 20,
    },
    {
        id: 3,
        fullName: "Irah Nicca",
        age: 19,
    }
];
console.log(People);
console.log(People[0].fullName);

for (let j = 0; j < People.length; j++) {
    console.log(People[j].fullName);
}

const arr = [1,2,3];
arr.push(4);
console.log(arr);