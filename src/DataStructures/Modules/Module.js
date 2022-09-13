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
