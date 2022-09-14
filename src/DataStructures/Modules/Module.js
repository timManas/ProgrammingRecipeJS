// Module
// What ? Its just a file
// Modules can load each other and use special directives 'export' and 'import' to interchange functionality.
// A module has either named exports {...} or the default one (single value ones ex: default Export)

console.log('Modules')

//Ex: Single Export -  Export files in sayHi.js...then import the file using the import function
import { sayHi } from './singleExport.js'
console.log('importing: ' + sayHi)
sayHi('HIIIII')

// Ex2: MultiExport
import { sayWow, sayHello } from './multiExport.js'
sayWow('WOOOW')
sayHello('HELLLLOOO')

// Ex3: Import a Array
import { months } from './multiExport.js'
console.log('Months: ' + months)

// Ex4: Import a constant
import { CONSTANT } from './multiExport.js'
console.log('CONSTANT: ' + CONSTANT)

// Ex5: Import a Class
import { User } from './multiExport.js'
let user1 = new User('Tim')

// Ex6: Import an Object using 'as'
import { object1 as person } from './multiExport.js'
console.log('Person Name: ' + person.name + '  age: ' + person.age)

// Ex7: Import a single Default Object
import Person from './defaultExport.js'
let personDefault = new Person('Tim', 35)
console.log(
  'Default Person Name: ' + personDefault.name + '  age: ' + personDefault.age
)

/**
Summary

To summarize, the core concepts are:

1. A module is a file. To make import/export work, browsers need <script type="module">. Modules have several differences:
- Deferred by default.
- Async works on inline scripts.

2. To load external scripts from another origin (domain/protocol/port), CORS headers are needed.
3. Duplicate external scripts are ignored.
4. Modules have their own, local top-level scope and interchange functionality via import/export.
5. Modules always use strict.
    - Module code is executed only once. Exports are created once and shared between importers.

 */
