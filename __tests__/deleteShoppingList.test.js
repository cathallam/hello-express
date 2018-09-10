const fs = require('fs');
const path = require('path');
const httpMocks = require('node-mocks-http');
const deleteShoppingList = require('../controllers/deleteShoppingList');

it('deletes and existing shopping list', done => {
  expect.assertions(1);

  const filename = Date.now().toString();
  const filePath = path.join(__dirname, '../controllers/shoppingLists', filename);

  fs.writeFile(filePath, 'No Pomegranates', err => {
    if (err) throw err;

    const request = httpMocks.createRequest({
      method: 'DELETE',
      url: '/shoppingLists/:filename',
      params: {
        filename: filename
      }
    });

    const response = httpMocks.createResponse({
      eventEmitter: require('events').EventEmitter
    });

    deleteShoppingList(request, response);

      response.on('end', () => {
      fs.stat(filePath, (err, stats) => {
        expect(err.code).toBe('ENOENT');
        done();
}) 
      });
    });
  });
