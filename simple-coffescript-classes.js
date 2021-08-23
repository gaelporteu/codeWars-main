// Create a class that would allow for the following code to work correctly:

// jon = new Person("Jon")
// jon.greet("Jane") # => "Hello Jane, my name is Jon"

// # RudePerson should inherit from Person
// bill = new RudePerson("Bill")
// bill.greet("Jane") # => "I'm Bill, now go away Jane"
class Person {
    constructor(name) {
        this._name = name;
    } 
    get name() {
        return this._name;
    }
    
    greet(pname) {
        console.log(`Hello ${pname}, my name is ${this.name}`);
    }
}

class RudePerson extends Person {
    constructor(name) {
        super(name);
    }
    greet(pname) {
        console.log(`I'm ${this.name}, now go away ${pname}`);
    }
}

james = new Person("James")
james.greet("Jim")
bob = new RudePerson("Bob")
bob.greet("Sara") 
