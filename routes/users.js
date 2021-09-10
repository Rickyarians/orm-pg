var express = require('express');
var router = express.Router();
const { User } = require('./../models')
const bcrypt = require('bcrypt');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
          
          bcrypt.hash(req.body.password, 5, function(err, hash) {
              // Store hash in your password DB.
              User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
              })
                .then(result => {
                  res.status(200).json(result)
            })
          });
       
});

router.post('/login', async =(req, res, next) => {
          // get user yang emailnya tersebut
          // dapet data row 
          // row -> password
          // row->password == req.body.password // compare
          // kalo sama balikkin berhasil login
          // kasih pesan error

          User.findOne({where: {email : req.body.email}}).then(result => {
            console.log(result)
            bcrypt.compare(req.body.password, result.password, function(err, result1) {
              // result == true
              // console.log(result1)
              if(result1) {
                res.status(200).json({
                  "message" : "anda berhak login"
                })
              } else {
                res.status(401).json({
                  "message" : "unathorized"
                })
              }
            });
          })
          

});

module.exports = router;
