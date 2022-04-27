// to Number & Integer => 1
console.log(parseInt(1.2));
// to Number & Change Nothing => 1.2
console.log(parseFloat(1.2));
// to Number => 1.2
console.log(Number(1.2));

// to String
console.log(String(1.2));

// to Boolean
console.log(typeof Boolean(0), Boolean(-1)); // 0이 아니면 true
console.log(typeof Boolean(0), Boolean(0)); // 0이면 false

// Datatype 판단: typeof