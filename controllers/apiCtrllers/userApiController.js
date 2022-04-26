const {User} = require('../../database/models');

const userApiController = {

    userList : async (req,res) =>{
        const users = await User.findAll()
        res.json(users)

    },
    saveAdminRegister: async (req, res) =>{
        try {
            const{full_name,user_name,email,password}=req.body
            let emailExits = req.body.email    
            let userInDB = await User.findOne({where:{
                email:emailExits
                }
            });
            
           
            if (userInDB) {
                res.json("Este correo ya Existe")
            }
    
            if(!userInDB){
            let userToCreate = {
                full_name,
                user_name,
                email,
                password,     
                profile_picture: req.file.filename,
                category_user_id:1
                
            } 
            
            
             const user = await User.create(userToCreate)
              res.json(user);
           }
            
        } catch (error) {
            console.log(error)
            res.json("Algo ha salido mal")
        }

       
    },
  processRegister: async (req,res) =>{
      try {
        const{full_name,user_name,email,password}=req.body
        let emailExits = req.body.email

        let userInDB = await User.findOne({where:{
            email:emailExits
            }
        });
        
       
        if (userInDB) {
           res.json("Este email ya existe")
        }

        if(!userInDB){
        let userToCreate = {
            full_name,
            user_name,
            email,
            password,            
            profile_picture: req.file.filename,
            category_user_id:2
            
        } 
        
        
         const user = await User.create(userToCreate)
          res.json(user);
       }
      } catch (error) {
          res.json("Algo salío mal")
          console.log(error);
      }     

    },
    saveEdition: async (req,res) =>{

        try {
            const{full_name,user_name,email,password}=req.body;
            const id = req.params.id;

            let emailExits = req.body.email

            let userInDB = await User.findOne({where:{
                email:emailExits
                }
            });
        
       
        if (userInDB) {
           res.json("Este email ya existe")
        }

            const userImage = await User.findByPk(id)

            let image = req.file ?  req.file.filename : userImage.profile_picture;

            const user= await User.update({
                full_name,
                user_name,
                profile_picture:image,
                email,
                password
            },{where: {id:id}})
            
           
         res.json(user);           
       
            
        } catch (error) {
            res.json("Algo ha salido mal")
            console.log(error);
        }
    },

    deleteUser: async (req,res) =>{
        try {
            const id = req.body.id;

            await User.destroy(
                {where: {
                    id:id
                }});

            res.json("Usuario Eliminado con exito ");
            
        } catch (error) {
            res.json("Algo ha salido mal");
            console.log(error)
        }

    },


    //LOGIN USER

    // Proceso validacion de credenciales login
    loginProcess: async (req, res) => {
        
        try {
            const {email, password} = req.body;
            const user = await User.findOne({
                where:{
                    email
                }
            });

            if(await user.validPassword(password)){
                return res.json('Usuario logueado exitosamente');
            }else{
                res.json("Credenciales Invalidas");
            }
            
        } catch (error) {
            res.json("Algo ha salido mal")
        }
        
    }  
        
    }
    
    module.exports = userApiController;