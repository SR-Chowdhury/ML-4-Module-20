/**
 * Practice Problem 1
 */
console.log('Practice Problem 1:');
function foo () {
    console.log('foo');
    bar();
}
foo();
function bar () {
    console.log('bar');
}


/**
 * Practice Problem 2
 */

console.log('\nPractice Problem 2:');

function make_avg (a, b, c) {
    var avg = (a + b + c) / 3;
    return avg;
}
var x = make_avg(10, 20, 30);
console.log('Average: '+x);

/**
 * Practice Problem 3
 */
console.log('\nPractice Problem 3:');
var sum = 0;
var arr_avg;
var arr = [2, 5, 9, 45, 74, 20, 36];
function make_arr_avg (arr, arr_length) {
    for (var i = 0; i < arr_length; i++) {
        sum += arr[i]; 
    }
    arr_avg = sum / arr_length;
    return arr_avg;
}
var y = make_arr_avg(arr, arr.length);
console.log('Array Average: '+y);


/**
 * Practice Problem 4
 */
console.log('\nPractice Problem 4:');
function odd_even (args) {
    if (args %2 == 0) {
        console.log(args + ' is even number');
    }
    else {
        console.log(args + ' is odd number');
    }
}
odd_even(13);

/**
 * Practice Problem 5
 */
console.log('\nPractice Problem 5:');
const signal = 'green';
switch(signal) {
    case 'red':
        console.log('you may be in danger');
        break;
    case 'amber':
        console.log('you should stop');
        break;
    default:
        console.log('you can go if safe');
}