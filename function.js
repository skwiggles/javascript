// #1 function is a instance of object. one diff is function can be executed
function af() {}
console.dir(af)

// #2 function can be stored in a variable
var func = function() {}

// #3 function can be passed to another function as parameter
var printfunc = function() {
    console.log("this is print func")
}
var onefunc = function(param) {
    param()
}

onefunc(printfunc)  // this is print func
onefunc("given string")  // error: param is not a function
// better to check 
// typeof param === 'function'

// #4 function can return another function
var twofunc = function() {
    return function() {
        console.log("this is return func")
    }
}

var result = twofunc()  // result is a function, but has not yet been executed
result()  // this is return func

var greet = function() {
    debugger
    console.log("hello " + this.name)
}

greet()  // this refers to window, same as window.greet()

var hostobj = {
    greetfunc: greet,
    name: "host"
}

hostobj.greetfunc()  // this refers to hostobj, hello host

var hostobj2 = {
    name: "host2"
}
greet.call(hostobj2)  // this refers to hostobj2, hello host2

var greet2 = function(greetings) {
    return greetings + " " + this.name
}

// call vs apply
// when have more parameters, or not sure how many parameters, use apply to pass in an array
greet2.call(hostobj2)  // undefined host2
greet2.call(hostobj2, 'aloha')  // aloha host2
greet2.apply(hostobj2, ['aloha'])  // aloha host2


// create function
// can use constructor function, but not used offen
var add = new Function("a", "b", "return a + b");
add(1,2)  // 3

var sayHello = function() {
    return function inner() {
        return "hello from inner";
    }
}

// when calling sayHello, it creates the inner function
var x = sayHello()
x()  // hello from inner

// two steps: 1. being created  2. being executed
// important to scope

var sample = {
    inner: {
        code: "secret",
        inner: {
            code: "done"
        }
    }
}
//  scope is under window, it is global scope
//  first inner is under sample, can only be accessed by sample.inner

function sample2() {
    var inner2 = "this is inner2 var";
    return inner2;
}

sample2()  // this is inner var
inner2 //  error, inner is not defined

var inner3 = "this is inner3 var"
function sample3() {
    return inner3;
}

sample3()  // this is inner3 var
// inside sample3 function, it can access inner3 because it is global scope

function sample4() {
    var inner3 = "inner3 var"
    return inner3
}

sample4()  // inner3 var
// inside sample4 function, the inner scope inner3 has higher priority than the global scope inner3

function sample5() {
    inner3 = "change inner3 var"
}

sample5()
inner3  // change inner3 var
// inside sample5 function, it can change value of global scope variable inner3
