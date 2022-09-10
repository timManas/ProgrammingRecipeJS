// Module
// What ? Its just a file
// Modules can load each other and use special directives 'export' and 'import' to interchange functionality
console.log('Modules')

//Ex: Single Export -  Export files in sayHi.js...then import the file using the import function
import { sayHi } from './singleExport.js'
console.log('importing: ' + sayHi)
sayHi('HIIIII')

// Ex2: MultiExport
import { sayWow, sayHello } from './multiExport.js'
sayWow('WOOOW')
sayHello('HELLLLOOO')
