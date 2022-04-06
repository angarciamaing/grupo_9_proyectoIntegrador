//const User = require('../models/User');
const db = require('../database/models')
const User = db.User

const userLoggedMiddleware = async(req, res, next)=> {

    try {
        res.locals.isLogged = false;

    let emailInCookie = req.cookies.email;
    let userFromCookie = await User.findOne({where:{email:emailInCookie}});

    if(userFromCookie) {
        req.session.userLogged = userFromCookie;
        
    }

    if(req.session && req.session.userLogged ){    
        res.locals.isLogged = true;
        res.locals.userLogged = req.session.userLogged;

    }

        
    } catch (error) {
        
    }

    
    
    


    next();
}


module.exports = userLoggedMiddleware;