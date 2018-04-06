const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');
const massive = require('massive');
// require('dotenv').config();
const config = require('./config')
const controller = require('./controller.js')

const app = new express();
app.use(bodyParser.json());
// app.use(cors());

app.post('/api/product', controller.create);
app.get('/api/products', controller.getAll);
app.get('/api/product/:id', controller.getOne);
app.put('/api/product/:id', controller.update);
app.delete('/api/product/:id', controller.delete);


const port = 4000;

massive(config.massiveURI).then(connection => {
  app.set('db', connection)
  app.listen(port, () => {
    console.log("listening on port", port);
  });
}).catch(console.log)
