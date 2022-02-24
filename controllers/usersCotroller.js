// const path = require('path');
const fs = require('fs');
// const {validationResult} = require('express-validator');




const users = {
    fileMame: '../database/users.json',

    login : (req, res) => {
        res.render('login');
    },
    register: (req, res) => {
        res.render('register');
    },

    genereId: () => {
        let allUsers = this.findAll();
        let lastuser = allUsers.pop();
        return lastuser.id + 1;
    },

    create: (userData) => {
        let allUsers = this.findAll();
        allUsers.push(userData);
        fs.writeFileSync(this.fileName, JSON.stringify(allUsers, null, ' ' ));
        return true;
    }
}



// console.log(users.genereId)


module.exports = users;