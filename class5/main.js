
// Mandatory Task 01

function createGreeting(name,age){
    return  `Hello,My Name Is ${name} And I'm ${age} Years Old.`;
}

const greeting = createGreeting("Zohan",25);
console.log(greeting); //Hello,My Name Is Zohan And I'm 25 Years Old.


// Mandatory Task  02
function calculateArea(length, width = length){
    const rectangle =  length*width;
    return  rectangle;
}

console.log(calculateArea(5)); //25

console.log(calculateArea(5,10)); //50

// Mandatory Task  03

const user = {
    address: {
        street: {
            name: "CR Dutta Road"
        }
    }
};

const userWithoutStreet = {
    address: {}
};

function getStreetName(user){
    return user?.address?.street?.name ?? "Street not found";
}

console.log(getStreetName(user)); //CR Dutta Road

console.log(getStreetName(userWithoutStreet)); //Street not found

// Mandatory Task  04

function cleanUpString(str){
    return str.trim().replace(/white/g,"red");
}

console.log(cleanUpString("   white is white   ")); //Output:red is red

// Mandatory Task  05

function processArray(arr){
    return arr

    .map(item => {

        const[name,age] = item.split('-');
        return { name, age: parseInt(age, 10) };
    })

    .filter(person => person.age >= 18);
}

const input = ["Zohan-25", "Wafi-17", "Saher-19"];
console.log(processArray(input));
// Output: [{ name: "Zohan", age: 25 }, { name: "Saher", age: 19 }]

