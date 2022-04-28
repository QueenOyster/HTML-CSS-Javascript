let age = 12;
if (age >= 19) {
    console.log('성인입니다');
} else if (age >= 15){
    console.log('청소년입니다');
} else {
    console.log('어린이입니다');
}

switch (age) {
    case 12:
        console.log('12살입니다');
        break // 없으면 아래도 실행됨
    case 13:
        console.log('13살입니다');
        break
    default:
        console.log('매칭되는 나이가 없습니다.');
}