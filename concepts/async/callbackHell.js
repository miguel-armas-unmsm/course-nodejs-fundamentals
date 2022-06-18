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

/**
 * Función recursiva.
 * @param {string} stringValue: Parámetro string
 * @param {int} count: Número de veces que se repetirá middleFunction()
 * @param {function} callbackFunction: callbackFuncion()
 */
function processCallbacks(stringValue, count, callbackFunction) {
    if(count > 0) {
        middleFunction(function() {
            processCallbacks(stringValue, --count, callbackFunction);
        });
    } else {
        endingFunction(stringValue, callbackFunction);
    }
}

/**
 * main
 */
console.log('starting process.')
startingFunction('hello, world!', function(stringValue) {
    processCallbacks(stringValue, 3, function() {
        console.log('finished proccess.')
    });
})


// startingFunction('hello', function(stringValue) {
//     middleFunction(function() {
//         middleFunction(function() {
//             middleFunction(function() {
//                 endingFunction(stringValue, function() {
//                     console.log('ending process.');
//                 });
//             });
//         });
//     });
// });
