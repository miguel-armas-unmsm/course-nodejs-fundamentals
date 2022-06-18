/**
 * Las variables de entorno pueden definirse en el momento que se escribe el comando para la ejeución del programa.
 * $ $env:KEY="abcd1234"; node environment.js
 */

let key = process.env.KEY || 'empty key';

console.log('key: ' + key);