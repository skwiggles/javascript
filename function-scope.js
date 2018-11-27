var a = 10;
function add() {
	var b = 20;
	return a + b;
}
add();  // 30

function add2() {
	var a = 20;
	var result = add();
	console.log(result);
}

add2();  // 30

// js is lexically scoped, aka static scope
// scope of function is set when function being defined
// when defining function add(), it can only see a = 10
// when running function add(), its scope remain 
// function has a scope chain, scope is object
// scope of function add(), closure scope is same as global scope because it is defined under window
// localscope = {
//     this: {},
//     b: 20,
//     __parent__: {  // refers to closure scope
//         a: 10,
//         __parent__: {  // refers to global scope
//             xxx: yyy
//         }
//     }
// }

// Variables Are Function-Scoped
// Variable Declarations Are Hoisted
function sample() {
    console.log(bar);  // undefined
    var bar = 'abc';
    console.log(bar);  // abc
}

// same as
function sample() {
    var bar;
    console.log(bar);  // undefined
    bar = 'abc';
    console.log(bar);  // abc
}

function sample2() {
    console.log(bar);  // error: bar is not defined
    var bar2 = 'abc';
    console.log(bar);  // not reached 
}

// Quiz
// #1
// Because of 'var name = 'Jack'', 
// typeof name === 'undefined' is true
var name = 'World!';
function quiz1() {
    if (typeof name === 'undefined') {
        var name = 'Jack';
        console.log('Goodbye ' + name);
    } else {
        console.log('Hello ' + name);
    }
}
quiz1()  // Goodbye Jack