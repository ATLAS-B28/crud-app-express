const User = require("../model/User");
//create and save new user
const createUser = (req, res) => {
  //validate request
  if (!req.body) {
    res.status(400).send({ message: "Content cannot be empty" });
    return;
  }
  //new user initiated
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    address: req.body.address,
    gender: req.body.gender,
    status: req.body.status,
  });
  //save it
  user
    .save(user)
    .then((data) => {
      res.redirect('/add-user');//this will lead to redirection of admin
      //and the new user will stored and display
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Server Error: something wrong please try again",
      });
    });
};
const getAllOrSingle = async (req, res) => {
  //either id or user
  if (req.query.id) {
    //if query.id is there
    const id = req.query.id;
    await User.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: `Not found user with id ${id}` });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Error getting the user" });
      });
  } else {
    await User.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Error occurred while retriving info",
        });
      });
  }
};
const updateUser = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Date to update can not be empty" });
  }
  //const id = req.params.id; //url parameter
  /*await User.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({ message: `Cannot update with id ${id}` });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Cannot update the user details" });
    });*/

  const id = req.params.id;
  const data = await User.findByIdAndUpdate(id, req.body, {
    useFindandUpdate:false
  });
  if (!data) {
    res.status(404).send({ message: `User with id ${id} not found` });
  } else {
    res.send(data);
  }
};
const deleteUser = async (req, res) => {
  const id = req.params.id;
  await User.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        req.status(404).send({ message: `Cannot delete user with id ${id}` });
      } else {
        res.send({
          message: "User was deleted successfully",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: `Could not delete user with id ${id}`,
      });
    });
};
module.exports = {
  createUser,
  getAllOrSingle,
  updateUser,
  deleteUser,
};
