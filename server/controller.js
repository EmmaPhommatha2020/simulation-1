module.exports = {
  create: (req, res, next) => {
    const connection = req.app.get('db');
    const { name, price, imageurl } = req.body;
    connection.createProduct([name, price, imageurl])
      .then((result) => res.status(200).send(result))
      .catch((err) => res.status(500).send(err));
  },
  getOne: (req, res, next) => {
    const connection = req.app.get('db');
    const { params } = req;

    connection.readProduct([params.id])
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

    connection.updateProduct([name, price , imageurl, req.params.id])
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