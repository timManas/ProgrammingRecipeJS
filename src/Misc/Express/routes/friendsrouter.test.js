// const request = require('supertest')
// const app = require('../app.js')

import request from 'supertest'
import { app } from '../app.js'

/**
  Why is request set to supertest ?
  - Because it will supertest will be the tool which makes the request on the API
  
  You need to create an app.js file here in order for supertest to test the API
*/

describe('Test GET /friends', () => {
  test('Should response with 200 success', async () => {
    const response = await request(app).get('/friends').expect(200)
    console.log('response: ' + JSON.stringify(response))
  })
})

describe('Test POST /friends', () => {
  test('Should response with 200 success', async () => {
    const response = await request(app)
      .post('/friends')
      .send({
        name: 'TEST',
      })
      .expect(200)
    console.log('response: ' + JSON.stringify(response))
  })
})
