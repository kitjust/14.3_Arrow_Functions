
// ES5 Version
function double(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

// ES2015 Version
const double = arr => arr.map( val => val * 2 );


double([[5, 15, 45]]) // [10, 30, 90]

// ES5 Version
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
        return num ** 2;
    });
    var evens = squares.filter(function(square){
        return square % 2 === 0;
    });
    return evens;
}

// ES2015 Version
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);

squareAndFindEvens([1, 2, 3, 5, 8, 13, 21, 34, 55]) // [4, 64, 1156]