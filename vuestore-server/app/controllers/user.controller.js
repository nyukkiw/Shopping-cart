const db = require('../models');
const user = db.users;
const order = db.orders;

exports.create = async (req, res) => {
  try {
    const newUser = await user.create({
      name: req.body.name,
      email: req.body.email,
      role: req.body.role || 'user'
    })

    await order.create({
      userId: newUser._id,
      cart_items: [],
      totalPrice: 0
    })

    res.status(201).send(newUser);
  } catch (err) {
    res.status(400).send({
      message: err.message
    })
  }
}

exports.findAll = (req, res) => {
  User.find()
    .then(users => res.send(users))
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}

exports.findOne = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send({ message: "User not found" })
      }
      res.send(user)
    })
    .catch(err => {
      res.status(500).send({
        message: err.message
      })
    })
}


