//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [{
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt"
    }]
}

function food_dishes(person) {
    for (property in person) { console.log(Object.values(person)) };
    return Object.values(person)
}

console.log(food_dishes(person3))

// function food_dishes(Object){
//     for (property in Object){
//         console.log(Object.values())};
//         return Object.values()
//     }

// console.log(food_dishes(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype

// let human = {
//     name : 'Connor',
//     age : 33
// }

function Person(name, age) {
    this.name = name;
    this.age = age;

    this.printInfo = () => {
        console.log(`This is ${this.name}, age ${this.age}`)
    };

    this.getOld = () => {
        this.age += 1;
    }
}

let person1 = new Person('Connor', 33);
person1.printInfo()

let person2 = new Person('Johnny', 50);
person2.printInfo()
person2.getOld()
person2.printInfo()
person2.getOld()
person2.printInfo()
person2.getOld()
person2.printInfo()








// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 


// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

let checkString = (str) => {
    return new Promise((resolve, reject) => {
        if (str.length > 10) {
            resolve(str);
        } else {
            reject(str);
        }
    })
}

checkString('hello')
.then((answer) => {
    console.log(`Big word`);
}).catch((answer) => {
    console.log(`Small Number`)
});


checkString('congratulations')
.then((answer) => {
    console.log(`Big word`);
}).catch((answer) => {
    console.log(`Small Number`)
});








// def find_average (numbers):
//     if len(numbers)==0:
//         return 0
//     else:
//         return sum(numbers)/len(numbers)

function find_average(numbers){
    for (let i = 0; i < array.length; i++);
    sum += array[i];
        if (numbers.length === 0)
            return 0;
        else sum / numbers.length;
            return 
        }

console.log(find_average([1,2,3,4,5,6,7,8,9,10]))

// OMG! this is sooo much easier in python!

// I think I'm on the right track but it's still not working



// Very simple, given an integer or a floating-point number, find its opposite.

// Examples:

// 1: -1
// 14: -14
// -34: 34

function opposite(number) {
    return number * -1
}

console.log(opposite(10))
console.log(opposite(34))
console.log(opposite(-10))
console.log(opposite(-55))