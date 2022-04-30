// Literal 방식
// 빈 객체에 추가도 가능
const user = {
    // property
    age: 20,
    name: "Musa",
    details: {
        hobby: "coding", // get_details에서, return this.hobby;
        major: "japanese",
        get_details: function(item) { // arrow function으로 표현하면, this 사용 불가
            return item * 2;
        }
    },

    // getter and setter
    get get_age() {
        return this.age;
    },
    set set_age(value) {
        this.age = value;
    },

    // method
    get_data: function() {
        return 1 + 2;
    }
};

// type: object
console.log(typeof user, user);
// property
console.log(user.age);
console.log(user.name);
// method
console.log(user.get_data());
// property(object)
console.log(user.details);
console.log(user.details.hobby);
console.log(user.details.get_details(1));

// getter and setter
// 내부 property를 직접 제어하지 않게끔
console.log(user.get_age);
user.set_age = 50;
console.log(user.get_age);

/* Other Expressions: 
뉴 오브젝트 방식
const user = new Object();
user.age = 10;
user. name = 'Musa';

생성자 방식: prototype 사용 가능
function User(age, name) { ... }
const musa = new User(10, 'Musa');
*/