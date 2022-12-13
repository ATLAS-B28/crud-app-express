const express = require("express");
const router = express.Router();
const {
  createUser,
  getAllOrSingle,
  updateUser,
  deleteUser
} = require('../controller/controller')
const {
  homeRoutes,
  addUserRoute,
  updateUserRoute,
} = require("../service/service");
router.get("/", homeRoutes);
router.get("/add-user", addUserRoute);
router.get("/update-user", updateUserRoute);
//api routes to create ,update and delete
router.post('/api/users',createUser)
router.get('/api/users',getAllOrSingle)
router.put('/api/users/:id',updateUser)
router.delete('/api/users/:id',deleteUser)
module.exports = router;
