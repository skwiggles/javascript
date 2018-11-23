// Primitive type: String, Number, Boolean, Null, Undefined, NaN
let a
typeof a  // undefined

let n = "hello" / 4
n  // NaN
typeof n  // number

0.2 + 0.1  // not exact 0.3
0.25 + 0.1  // 0.35




// Object: key-value pair
let obj = {}
typeof obj  // object

let arr = []
typeof arr  // object

let myDate = new Date
typeof myDate  // object





// Function
function f() {}
typeof f // function


// Dynamic typing
let d = "hello"
d = 42

// disadvantage: check length
// advantage: compare ==

"20" === 20  // false
"20" == 20  // true
// parseInt("20")

false == 0  // true
false == ""  // true

null == undefined  // true
// null: manually set
// undefined: natually set

var check
check == null  // true
// check === null || check === undefined

// polymorphism 
11 + 22
"a" + "b"

"hello" + 12  // "hello12"
// 12.toString()

// Quiz
[false == "", null==undefined]  // [true, true]

[typeof null, null instanceof Object]  // ["object", false]

var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');  // Something

var a = [0];
if ([0]) {  // true
console.log(a == true);  // false
} else { 
console.log("wut");
} 