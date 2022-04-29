function Funcoding(name) {
    console.log(name);
}
Funcoding('dave');


function Funcoding2(name) {
    return 'Hi' + name;
}
console.log(Funcoding2('dave'));

// Arrow Function
let func = (name) => 'Hi' + name;
console.log(func('Dave'));