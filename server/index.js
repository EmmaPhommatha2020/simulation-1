const express = require('express');
const bodyParser = require('body-parser');
const massive = require('massive');
const config = require('./config')
const ctr = require('./controller.js')

const app = new express();
app.use(bodyParser.json());

app.post('/api/product', ctr.create);
app.get('/api/products', ctr.getAll);
app.get('/api/product/:id', ctr.getOne);
app.put('/api/product/:id', ctr.update);
app.delete('/api/product/:id', ctr.delete);


const port = 4000;

massive(config.massiveURI).then(connection => {
  app.set('db', connection)
  app.listen(port, () => {
    console.log("listening on port", port);
  });
}).catch(console.log)
