// // four variables are created and assigned in a single go,
// // separated by commas
// var myObj = new Object(),
//     str = 'myString',
//     rand = Math.random(),
//     obj = new Object();

// myObj.type              = 'Dot syntax';
// myObj['date created']   = 'String with space';
// myObj[str]              = 'String value';
// myObj[rand]             = 'Random Number';
// myObj[obj]              = 'Object';
// myObj['']               = 'Even an empty string';


// // this will list all properties of an object including its prototypes
// function listAllProperties(o) {
// 	var objectToInspect;
// 	var result = [];

// 	for(objectToInspect = o; objectToInspect !== null;
//            objectToInspect = Object.getPrototypeOf(objectToInspect)) {
//         result = result.concat(
//             Object.getOwnPropertyNames(objectToInspect)
//         );
//     }

// 	return result;
// }

// console.log(listAllProperties(myObj));

function Car(make, model, year, owner) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
  }

  function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }  
  
  var rand = new Person('Rand McKinnon', 33, 'M');
  var ken = new Person('Ken Jones', 39, 'M');

  var car1 = new Car('Eagle', 'Talon TSi', 1993, rand);
  var car2 = new Car('Nissan', '300ZX', 1992, ken);
  
  console.log(car2.owner.name);

  Car.prototype.color = null;
  car1.color = "black"

  console.log(car1);
  console.log(car2);

  // Object form 1 to create object with getter and setter
  var o = {
    a: 7,
    get b() {
      return this.a + 1;
    },
    set c(x) {
      this.a = x / 2;
    }
  };
  
  console.log(o.a); // 7
  console.log(o.b); // 8 <-- At this point the get b() method is initiated.
  o.c = 50;         //   <-- At this point the set c(x) method is initiated
  console.log(o.a); // 25
  
  
  
  // Object form 2 alows for creating getters and setters later on
  var o = { a: 0 };

Object.defineProperties(o, {
    'b': { get: function() { return this.a + 1; } },
    'c': { set: function(x) { this.a = x / 2; } }
});

o.c = 10; // Runs the setter, which assigns 10 / 2 (5) to the 'a' property
console.log(o.b); // Runs the getter, which yields a + 1 or 6

// Delete a property from an object
// Creates a new object, myobj, with two properties, a and b.
var myobj = new Object;
myobj.a = 5;
myobj.b = 12;

// Removes the a property, leaving myobj with only the b property.
delete myobj.a;
console.log ('a' in myobj); // output: "false"


// compare objects
// Two variables, two distinct objects with the same properties
var fruit = {name: 'apple'};
var fruitbear = {name: 'apple'};

fruit == fruitbear; // return false
fruit === fruitbear; // return false


// Two variables, a single object
var fruit = {name: 'apple'};
var fruitbear = fruit;  // Assign fruit object reference to fruitbear

// Here fruit and fruitbear are pointing to same object
fruit == fruitbear; // return true
console.log(fruit === fruitbear) ; // return true

fruit.name = 'grape';
console.log(fruitbear); // output: { name: "grape" }, instead of { name: "apple" }


const array = ["r", "e", "t", "u", "p", "m", "o", "c" ]

console.log(array.reverse());
console.log(array.join(""));

let string = "tnellecxe";
console.log(string.split("").reverse().join("")) 

let today = "Today work Great";
console.log(today.split(" ").reverse().join(" "))

// pop(remove element from end), shift(removing from start of array), 
// push(add to end), unshift(add to beginning)

let anotherArray = ["one", "two", "three", "four", "five"]
const element = anotherArray.shift()
console.log(anotherArray)
console.log(element)

anotherArray.unshift("one")
console.log(anotherArray)
const element2 = anotherArray.pop()
console.log(anotherArray)
anotherArray.push("five")
console.log(element2)
console.log(anotherArray)

//charAt returns the character at an index
let position = "I want to search for position in this string"
console.log(position.charAt(15)) 

//indexOf returns the index of a character
console.log(position.indexOf("in", 30))

// lastIndexOf returns the index of the last occurance of the character, counts right to left
console.log(position.lastIndexOf("in"))

let moreStrings = "I am going to go to sleep after this."

console.log(moreStrings.lastIndexOf("g"))

