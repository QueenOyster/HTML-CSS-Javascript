// Symbol([description]) 
// Unique Value
let testSymbol1 = Symbol(1);
let testSymbol2 = Symbol(1);
console.log(typeof testSymbol1, testSymbol1);
console.log(typeof testSymbol2, testSymbol2);

// All false
console.log(testSymbol1 == testSymbol2);
console.log(testSymbol1 === testSymbol2);