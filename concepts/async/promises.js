/**
 * El código spaguetti puede refactorizarse con la recursividad.
 */

 function startingFunction(startingParameter, callbackFunction) {
    setTimeout(function() {
        console.log('starting parameter: ' + startingParameter);
        callbackFunction('bye');
    }, 1000);
}

function middleFunction(callbackFunction) {
    setTimeout(function() {
        console.log('bla bla bla...');
        callbackFunction();
    }, 1000);
}

function endingFunction(endingParameter, callbackFunction) {
    setTimeout(function() {
        console.log('ending parameter: ' + endingParameter);
        callbackFunction;
    }, 1000);
}