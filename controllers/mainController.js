
const path = require('path');
const fs = require('fs');
const {validationResult} = require('express-validator');

 const usersFilepath = path.join(__dirname,'../database/users.json');
 const users = JSON.parse(fs.readFileSync(usersFilepath, 'utf-8'));


module.exports = {
    
    home: (red, res) => {
        res.render('home');
    },

    detalleProducto: (req, res) => {
        res.render('detalle-producto');
    },

    shoppingCart: (req, res) => {
        res.render('shopping-cart');
    },

    edicionproducto : (req, res) => {
        res.render('edicion-producto');
    },
   
    store: (req, res) => {
          let usuarios = users
          let newUser = {
              id: usuarios[usuarios.length -1].id + 1,
              ... req.body
              
          };
          usuarios.push(newUser);
          fs.writeFileSync(usersFilepath, JSON.stringify(usuarios, null, ' ' ));
          res.redirect('register');
          
          
    
          let errors = validationResult(req);
          res.send(errors);
         
      }
};





