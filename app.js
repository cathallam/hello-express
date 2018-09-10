const express = require('express');
const bodyParser = require('body-parser');
const helloWorld = require('./controllers/helloWorld');
const createShoppingList = require('./controllers/createShoppingList');
const getShoppingList = require('./controllers/getShoppingList');
const updateShoppingList = require('./controllers/updateShoppingList');
const deleteShoppingList = require('./controllers/deleteShoppingList');

const app = express();
app.get('/', helloWorld);
app.get('/shoppinglists/:filename', getShoppingList);



app.use(bodyParser.json());
app.post('/shoppingLists', createShoppingList);
app.put('/shoppingLists/:filename', updateShoppingList);
app.delete('/shoppingLists/:filename', deleteShoppingList);

app.listen(3000, () => console.log('Example app listening on port 3000!'));
