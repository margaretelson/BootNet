const express = require ("express")
const router = require ("express").Router()
const axios = require ("axios");
const db = require("../../models");


router.get("/github/:user", function(req,res){
    axios.get( "https://api.github.com/users/" + req.params.user).then(function(results){
        res.json(results.data)
    })
})

//get lis of users from db
router.get('/githubusers', function(req, res){
    res.send({type: 'GET'});
})

//add a new user to db
router.post('/githubusers', function(req, res){
    console.log(req.body);
    res.send({type: 'POST'});
})

//delete user from db
router.delete('/githubusers/:id', function(req, res){
    res.send({type: 'DELETE'});
})




module.exports = (app) => {
    app.post("/api/GithubUser", (req, res) => {
        db.Bootnet.create(req.body).then((newGithubUser) => {
          res.json(newGithubUser);
        });
      });
}

module.exports=router



//update a user to db
// router.put('githubusers/:id', function(req, res){
//     res.send({type: 'PUT'});
// })



