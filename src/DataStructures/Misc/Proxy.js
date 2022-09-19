// Proxy
// What ? An object wraps another object and intercepts operations (ex: read/write)
// Syntax: let proxy = new Proxy (target, handler)
// target - Is an object to wrap
// handler - proxy configuration: an object with methods which intercept operation (ex: get and set)
// Note: Empty tarps will allow all operations on proxy to forward to target

console.log('Proxy')

// Ex1: Empty Handler with no traps
let target = {}
let proxy = new Proxy(target, {}) // Handler is empty

proxy.test = 'Hello World'
console.log('Proxy Test: ' + proxy.test)
console.log('Target Test: ' + target.test) // Notice by changing proxy, we change target

//
