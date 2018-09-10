/* STEP 1: Call helloWorld passing in a node-mocks-http mock request and
mock response object as arguments. */

const helloWorld = require('../controllers/helloWorld');
const httpMocks = require('node-mocks-http');

it('returns a Hello World object', () => {
  const request = httpMocks.createRequest({
    method: 'GET',
    url: '/',
  });

  const response = httpMocks.createResponse();
  helloWorld(request, response);
  expect(response._getData().message).toBe('Hello World!');
});
