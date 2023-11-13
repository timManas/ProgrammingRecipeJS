/**
    Notes:
    'require'  is considered Legacy code

    Currently we use "type": "modules" in our package.json
    THEREFORE:
    1. We have to rename this file to extension ".cjs" in order for it to work WHILE in type:modules
    */

const { get } = require('https')

get('https://www.google.com', (res) => {
  res.on('data', (chunk) => {
    console.log(`Data response: ${chunk}`)
  })

  res.on('end', () => {
    console.log('No more data')
  })

  res.on('close', () => {
    console.log('Closed')
  })

  res.on('error', (err) => {
    console.log(`error message: ${err}`)
  })
})
