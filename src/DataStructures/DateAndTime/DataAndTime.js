console.log('------ Data & Time ------')
// Syntax: new Date(year, month, date, hours, minutes, seconds, ms)

// Get the current date
let now = new Date()
console.log('Date Now: ' + now)

// Pass parameter inside Date()
let Jan01_1970 = new Date(0)
console.log('Date: ' + Jan01_1970)

// Add 24 hrs to get the next day
let Jan02_1970 = new Date(24 * 3600 * 1000)
console.log('Date: ' + Jan02_1970)

// If single argument * String, parse data
let date = new Date('2017-01-26')
console.log(
  'date: ' +
    date +
    '     Note: Since time is not set, program assume to be midnight GMT and is adjusted accordingly'
)

// Set Date using default syntax
let date2 = new Date(2011, 0, 1, 0, 0, 0, 0)
console.log('Date2: ' + date2)

let date3 = new Date(2011, 0, 1)
console.log('Date3: ' + date3)

// Get Miscellaneous
console.log('getHours: ' + now.getHours())
console.log('getDay: ' + now.getDay())
console.log('getFullYear: ' + now.getFullYear())
console.log('getMilliseconds: ' + now.getMilliseconds())
console.log('getMinutes: ' + now.getMinutes())
console.log('getMonth: ' + now.getMonth())
console.log('getTime: ' + now.getTime())
console.log('getTimezoneOffset: ' + now.getTimezoneOffset())
console.log('getUTCDate: ' + now.getUTCDate())
console.log('getUTCDay: ' + now.getUTCDay())
console.log('getUTCSeconds: ' + now.getUTCSeconds())

// Setting Time
console.log('\nSetting Time')
let today = new Date()
today.setHours(0)
console.log('today set Hours: ' + today)

today.setHours(0, 0, 0, 0)
console.log(
  'today setHours(0, 0, 0, 0): ' + today + '  Note: Time is set to 00:00:00'
)

// AutoCorrection
// Handy feature allows us to set the proper date incase we fat finger the time and date
console.log('\nAutoCorrection')
let date4 = new Date(2022, 0, 32)
console.log(
  'Date: ' + date4 + '    note: Notice the date is set to Feb 1st instead'
)
