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

