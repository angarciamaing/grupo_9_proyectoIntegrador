const { validationResult } = require('express-validator');
const User = require('../models/User');
const controller = {

    register: (req, res) => {
        return res.render('register');
    },
    processRegister: (req,res) =>{

        const resultValidation = validationResult(req);

       if(resultValidation.isEmpty()){
           let user = req.body;
           user.profilePicture = req.file.filename

           userId = User.create(user);

           res.redirect('login')
       } else {
           res.render(this.register)
       }

    },

    login: (req,res) => {
        return res.render('login')
    },

   // profile: (req,res) => {
     //   return res.render('profile');
    //}
}

module.exports = controller;