class Animal {
    constructor (name) {
        this.name = name;
    }
    get_message() {
        return 'Hello';
    }
}

Animal.prototype.age = 10;
const david = new Animal('David');
// Only for Property
console.log(david.hasOwnProperty('name'));
console.log(david.hasOwnProperty('age'));