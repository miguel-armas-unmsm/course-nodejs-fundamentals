/**
 * Una callback es una función «A» que se usa como argumento de otra función «B». De esta forma, al llamar a «B», esta ejecutará «A».
 */

function startingFunction(startingParameter, callbackFunction) {
    setTimeout(function() {
        console.log('starting parameter: ' + startingParameter);
        callbackFunction('bye');
    }, 1000);
}

function endingFunction(endingParameter, callbackFunction) {
    setTimeout(function() {
        console.log('ending parameter: ' + endingParameter);
        callbackFunction();
    }, 1000);
}

console.log('starting process.')
startingFunction('hello', function(stringValue) {
    endingFunction(stringValue, function() {
        console.log('ending process.');
    })
});
