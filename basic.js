// Primitive type: String, Number, Boolean, Null, Undefined, NaN
// Save its value
let a;
typeof a;  // undefined

let n = 'hello' / 4;
n;  // NaN
typeof n;  // number

0.2 + 0.1;  // not exact 0.3
0.25 + 0.1;  // 0.35


// Object: key-value pair
// Save its reference
let obj = {}; 
typeof obj;  // object

let arr = [];
typeof arr;  // object

let myDate = new Date;
typeof myDate;  // object

console.log(kkk);  // error
console.log(obj.kkk);  // undefined


// Function
function f() {}
typeof f; // function


// Dynamic typing
let data = 'hello';
data = 42;

// disadvantage: check length
// advantage: compare ==

'20' === 20;  // false
'20' == 20;  // true
// parseInt("20")

false == 0;  // true
false == '';  // true

null == undefined;  // true
// null: manually set
// undefined: natually set

var check;
check == null;  // true
// check === null || check === undefined

// polymorphism 
11 + 22;
'a' + 'b';

'hello' + 12  // "hello12"
// 12.toString()

// Quiz
// #1
	[false == '', null==undefined]  // [true, true]
// #2
	[typeof null, null instanceof Object];  // ["object", false]
// #3
    var val = 'smtg';
    console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');  // Something
// In Javascript and java, the '+' operator has higher precedence than the ?: operator (ternary)
// error for java because of string + boolean, it tries to convert string to boolean
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#Table
// #4
    var ar = [0];
    if ([0]) {  // true
        console.log(ar == true);  // false
    } else { 
        console.log('wut');
    } 

    [0] == false  // true
	[1] == true  // true
	[2] == true  // false
	[2] == false;  // false

// truthy vs equal to true
// null, undefined, 0, NaN, false, "" are not truthy
// https://stackoverflow.com/questions/23061921/javascript-ifx-vs-ifx-true

let str = 'abc';
let int = 123;
let btrue = true;
let bfalse = false;
str + int;  // abc123. same for java, convert int to string
str + btrue;  // abctrue. same for java, convert boolean to string
int + btrue;  // 124. error for java
int + bfalse;  // 123. error for java
btrue + bfalse;  // 1. error for java