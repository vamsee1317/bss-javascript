
// Variable is a container helps us to store the data or information.


//   DataTypes :

    // Primitive : 
        // Single valued Terminologies
        // They do not deal with references



    // Non-primitive :
        // Collection of values
        // They deal with references


// Note : Javascript is dynamically dyped language, meaning you don't need to specify the data type while declaring a variable - it is automatically determined.


// C langauge
// int phoneNumner = 9123456789;

// Javascript language
// let phoneNumner = 9123456789;

// Primitive DT :

// 1.Number 
    let userPhoneNumber = 9123456789;
    console.log(userPhoneNumber);
    console.log(typeof userPhoneNumber);
// 2.String - collection of characters / words / sentences which are enclosed in a single quote of double quote.

    const userName = "VamseeKrishna";
    console.log(userName);
    console.log(typeof userName);

// 3.Boolean (true / false)
    let isAdmin = true;
    console.log(isAdmin);
    console.log(typeof isAdmin);
// 4.Undefined
    let userAge;
    console.log(userAge);
    console.log(typeof userAge);
// 5.Null
    let userAddress = null;
    console.log(userAddress);
    console.log(typeof userAddress);


    // console.log(employeeName);


// undefined vs null vs notdefined
    // undefined :
    // variable is declared but not assigned a value
    // null :
    // variable is declared and assigned a value of null
    // not defined : (error)
    // variable is not declared at all


// 6.Symbol 
    // unique identifier for object properties
// 7.BigInt
    // large integer values


// Non Primitive DT
// 1.Array - Collection of information or data, which is stored in a single variable of either same DT or Diff DT.

    let userDetails = [9123456789, true, null];
    // index values =          0            1       2       3
    // length       =           1           2       3       4
    // console.log(userDetails[0]);
    // console.log(userDetails[1]);
    // console.log(userDetails[2]);
    // console.log(userDetails[3]);
    // console.log(userDetails.length);

// 2.Object :
    // collection of key value pair
    // key : string
    // value : any DT

    let userInfo = {
        name : "VamseeKrishna",
        phoneNumber : 9123456789,
        isAdmin : true,
        address : null,
        hobbies : ["Cricket", "Football", "Reading"]
    }

    console.log(userInfo.name);
    console.log(userInfo.phoneNumber);
    console.log(userInfo.isAdmin);
    console.log(userInfo.address);
    console.log(userInfo.hobbies[0]);
    console.log(userInfo.hobbies[1]);
// 3. Array of an Objects

// const users = [{}, {}, {}, {}];

const users = [
    {
        name : "VamseeKrishna",
        phoneNumber : 9123456789,
        isAdmin : true,
        address : null
    },
    {
        name : "Hari",
        phoneNumber : 9876543210,
        isAdmin : false,
        address : null
    },
    {
        name : "Rahul",
        phoneNumber : 1234567890,
        isAdmin : true,
        address : null
    }
];


console.log(users[1].name);


