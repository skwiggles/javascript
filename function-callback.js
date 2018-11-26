var whenDone = function() {
    console.log("I am done");
}

var doWork = function(callback) {
    // do some work
    setTimeout(callback, 3000);
}

doWork(whenDone)  // after 3s, print I am done

function sample() {
    var data = 10;
    var whenDone = function() {
        console.log(data);
    }
    var doWork = function(callback) {
        // do some work
        setTimeout(callback, 3000);
    }
}

// if js does not have closure scope, after the last line of doWork function is executed, the data and whenDone will be recycled
// because of closure scope is set when function is defined, so data is still available for callback function after some time