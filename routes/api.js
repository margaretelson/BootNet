const router = require ("express").Router()
const axios = require ("axios")

router.get("/api/github/:user", function(req,res){
    axios.get( "https://api.github.com/users/" + req.params.user).then(function(results){
        res.json(results.data)
    })
})

module.exports=router




