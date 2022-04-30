// Class
class User1 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    get_message() {
        return 'Hello!';
    }

}

// Constructor
const david = new User1('villa', 30);
console.log(typeof david, david.name, david.age, david.get_message());