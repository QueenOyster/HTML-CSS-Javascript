/*
let: 재선언 불가능, 재할당 가능
*/
// 변수 선언
let testValue;
// 재선언 불가능 -> let testValue; (Syntax Error)
// 값 할당
testValue = 1;
// print
console.log(testValue);
// 재할당 가능
testValue = 2;
console.log(testValue);

/*
Const: 재선언 불가능, 재할당 불가능
*/
// 상수 선언
const testValue1 = 1;
// 재선언 불가능 -> testValue1 = 2; (TypeError)
console.log(testValue1);

// var보다는 let과 const를 사용할 것