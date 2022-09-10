// Module
// What ? Its just a file
// Modules can load each other and use special directives 'export' and 'import' to interchange functionality
console.log('Modules')

// Export files in sayHi.js...then import the file using the import function
import { sayHi } from './sayHi.js'
console.log(sayHi)
sayHi('HELLO')
