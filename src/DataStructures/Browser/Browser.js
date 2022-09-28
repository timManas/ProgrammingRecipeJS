/**

Javascript in the browser

    Root -> DOM
         -> BOM (ex: navigator, screen, location, frames, history. XMLHTTPRequest)
         -> Javascript

    - Root object is the window
        > Global object for JS Code in browser
        > Describers the browser window and provides method ot control it 
*/
console.log("'window' root object")
// Ex1: Window
function sayHi() {
  console.log('Hello')
}

window.sayHi() // Note: This will only work in the browser

/*
    Document object model
    - Represents all page content as objects that can be modified
    - 'document' is the main entry point 
 */
console.log('DOM - Document object model')

// Ex1:
document.body.style.background = 'red' // This will only work in browser

/* 
    Browser object model
    - Additional objects provided by browser for working with the everything except the document
*/
console.log('BOM - Browser object model')

// Ex1
console.log(location.href)
if (confirm('Go to wikipedia?')) {
  location.href = 'http://wikipedia.com'
}
