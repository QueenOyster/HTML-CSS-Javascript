/* for */
// All 0, 1
for (let i = 0; i < 2; ++i) { //++은 나중에 실행
    console.log(i);
}
for (let i = 0; i < 2; i++) { //++은 나중에 실행
    console.log(i);
}

// for ~ of (Python의 for ~ in 과 비슷)
const data = ['David', 39, true];
for (let item of data) {
    console.log(item);
}

// Object는 Python의 Dict와 비슷한 문법을 가지고 있다.
const data2 = {
    name: 'David',
    age: 20,
    brand: "Emart",
    get_message: function() {
        return 'Hello'
    }
}
console.log(Object.entries(data2));
console.log(Object.keys(data2));
console.log(Object.values(data2));

for (let property in data2) {
    console.log(property);
    console.log(data2[property]);
}

/* while */
let i = 0;
while (i < 5) {
    console.log(i);
    ++i; // 앞, 뒤 상관없음
}

/* break, continue */
for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    } else if (i === 3) {
        break;
    }
    console.log(i);
}