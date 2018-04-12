module.exports = {
  create: (req, res, next) => {
    const connection = req.app.get('db');
    const { name, price, imageurl } = req.body;
    console.log(  name, price, imageurl )
    connection.createProduct([name, price, imageurl])
      .then((product) => res.status(200).send(product))
      .catch((err) => res.status(500).send(err));
  },
  
  getOne: (req, res, next) => {
    const connection = req.app.get('db');
    const { id } = req.params;

    connection.readProduct([id])
      .then(product => res.status(200).send(product))
      .catch(() => res.status(500).send());
  },

  getAll: (req, res, next) => {
    const connection = req.app.get('db');

    connection.readProducts()
      .then(products => res.status(200).send(products))
      .catch(() => res.status(500).send());
  },

  update: (req, res, next) => {
    const connection = req.app.get('db');
    const { name, price , imageurl} = req.body
    const { id } = req.params;
    connection.updateProduct([name, price , imageurl, id])
      .then((result) => res.status(200).send(result))
      .catch(() => res.status(500).send());
  },

  delete: (req, res, next) => {
    const connection = req.app.get('db');
    const { params } = req;

    connection.deleteProduct([params.id])
      .then((result) => res.status(200).send(result))
      .catch(() => res.status(500).send());
  }
};