class Animal {
    constructor (name) {
        this.name = name;
    }
    get_message() {
        return 'Hello';
    }
}

// Inheritance
class User extends Animal {
    constructor (name, age) {
        super(name);
        this.age = age;
    }
    // Polymorphism
    get_message() {
        return 'New Hello';
    }
}

const david = new User('David', 25);
console.log(david.name, david.age, david.get_message());