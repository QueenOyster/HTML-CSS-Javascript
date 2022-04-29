// 빈 객체에 추가도 가능
const user = {
    // property
    age: 20,
    name: "Musa",
    details: {
        hobby: "coding",
        major: "japanese",
        get_details: function(item) {
            return item * 2;
        }
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