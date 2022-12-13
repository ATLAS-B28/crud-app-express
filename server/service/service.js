const axios = require('axios')
const homeRoutes = (req, res) => {
  //make a get req using axios
  axios.get('http://localhost:3000/api/users')
  .then(//returns apromise
  function(response){
    console.log(response.data);
  res.render("index",{users:response.data});//returns response with data property
  })
  .catch(err=>{
    res.send(err)
  })
  
};
const addUserRoute = (req, res) => {
  res.render("add_user");
};
const updateUserRoute = (req, res) => {
  axios.get('http://localhost:3000/api/users',{ 
    params : {
      id : req.query.id
    }
  })//get the specific user
  .then(function(userdata){
    res.render('update_user',{users:userdata.data})
  })
  .catch(err=>{
    res.send(err)
  })
};
module.exports = {
  homeRoutes,
  addUserRoute,
  updateUserRoute,
};
