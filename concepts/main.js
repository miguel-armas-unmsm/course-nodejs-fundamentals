/**
 * MONOHILO
 * Lenguajes síncronos como Java ejecutarían las instrucciones de manera secuencial (1ra, 2da y 3ra).
 * NodeJS por su parte ejecuta las instrucciones asíncronamente. (1ra, 3ra y 2da)
 */

console.log('hello world!'); // first instruction

let i = 0;

setInterval(function() {
    console.log(i); // second instruction
    i++;
    
    // if(i === 5) {
    //     console.log('forced error!');
    //     var a = 3 + z;
    // }
}, 1000);

console.log('second instruction'); // thrid instruction