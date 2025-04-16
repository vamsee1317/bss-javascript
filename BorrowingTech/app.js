const user1 = {

    // Props : Describes how object looks like
    name: 'John Doe',
    age: 30,
    occupation: 'Software Engineer',

    // // Methods : Describes working nature of objects
    // greet: function() {
    //     console.log(`Hello, my name is ${this.name} and I am ${this.age}years old.`);
    //     },
    // work: function() {
    //     console.log(`I am a ${this.occupation} and I am working.`);
    // }
}

const user2 = {
    name: 'Jane Doe',
    age: 25,
    occupation: 'Doctor',
    // greet: function() {
    //     console.log(`Hello, my name is ${this.name} and I am ${this.age}years old.`);
    // },
    // work: function() {
    //     console.log(`I am a ${this.occupation} and I am working.`);
    // }
}


    function greet(time, day) {
        console.log(`Hello Good ${time} & It's ${day}, my name is ${this.name} and I am ${this.age}years old.`);
    }

    function work() {
        console.log(`I am a ${this.occupation} and I am working.`);
    }

// One Time resolution tech

// Call:

greet.call(user1, "Morning", "Monday");
greet.call(user1, "Afternoon", "Monday")


// Apply:
greet.apply(user1, ["Morning", "Monday"])
greet.apply(user1, ["Afternoon", "Monday"])

// Peramnent resolution :

// Bind :

const userOneBound = greet.bind(user1);

userOneBound("Night", "Monday");
userOneBound("Afternoon", "Monday");
userOneBound("Morning", "Monday");