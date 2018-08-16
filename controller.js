module.exports = {
  getSomething: function (req, res) {
    // 'get' the database connection object off of app, off of req and use it as db
    const db = req.app.get('db');

    // run our sql queries which are on db >> this is an asynchronous function
    db.get_stuff()
      .then(resp => {
        res.status(200).send(resp);
      })
  },
  createSomething: function (req, res) {
    const db = req.app.get('db');
    const { name, quantity, favoriteColor } = req.body;

    db.create_something([name, quantity, favoriteColor])
      .then(resp => {
        res.status(200).send(resp);
      });
  },
  updateSomething: function (req, res) {
    const db = req.app.get('db');
    const {
      params: { id },
      body: {
        name,
        quantity,
        favoriteColor
      },
    } = req;
    
    db.update_something([id, name, quantity, favoriteColor])
      .then(resp => {
        res.status(200).send(resp);
      });
  },
};