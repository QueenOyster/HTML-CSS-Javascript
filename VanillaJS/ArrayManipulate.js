// push, pop
const data = [1, 2, 3];
data.push(4);
data.pop();

// shift: 첫항을 지우고, 앞으로 밀기
data.shift();
console.log(data);
// [2, 3]

// concat: 중합하기
const data2 = [4, 5];
const data3 = data.concat(data2);
console.log(data3);
// [2, 3, 4, 5]

// join: 각 원소 특정 기호를 엮어 섞기
const data4 = [1, 2, 3, 4, 5, 6];
let data5 = data4.join('*');
console.log(data5, typeof data5);
// 1*2*3*4*5*6 string

// reverse: 표시순 뒤집기
data4.reverse();
console.log(data4);

// slice: 일부 범위에만 해당하는 배열 만들기
let data6 = data4.slice(1, 3);
// 배열의 1번째 ~ 3-1번째
console.log(data6);

// forEach: 배열 속 각각의 값 나타내기
data4.forEach(item => {
    console.log(item);
})

// ★map: 배열 속 각각의 값을 다른 연산을 거쳐 타 배열에 복제
const data7 = data4.map(item => item * 2);
console.log(data7);

// indexOf: 해당 원소의 순서
console.log(data7.indexOf(12));
// 0

// findIndex: 배열 속 객체속 원소의 순서도 가르쳐줌
const myArray = [
    {
        id: 1,
        name: 'David'
    },
    {
        id: 2,
        name: 'Alex'
    }
];
console.log(myArray.indexOf('Alex'));
console.log(myArray.findIndex(item => item.name === 'Alex')); 
// 1
// find: findIndex처럼 순서 말고 그 객체 값
console.log(myArray.find(item => item.name === 'Alex'));
// {id: 2, name: 'Alex'}

// ★filter: 해당하는 원소만 필터링
let myArray2 = [1, 2, 3, 4, 5, 6];
let even = myArray2.filter(item => item % 2 === 0);
console.log(even, typeof even);
// [2, 4, 6] object