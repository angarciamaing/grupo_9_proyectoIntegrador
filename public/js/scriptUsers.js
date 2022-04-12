window.onload = function () {
      
        const  form = document.getElementById("form-register");

       

        const regPassExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
        const regEmailExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const  allowedExtensions =  /(\.jpg|\.jpeg|\.png|\.gif)$/i;


        
  


   form.onsubmit = (e) =>{
       

    const fullName = document.getElementById("full_name");
    const userName = document.getElementById("user_name");
    const email = document.getElementById("email");
    const picture = document.getElementById("profilePicture");
    const fileName = picture.value;

    const password = document.getElementById("password");
    const rePassword = document.getElementById('password2');

    fullName.focus();
    const errors = [];

     
    if(fullName.value == ''){
       
        errors.push("El nombre no debe estar vacio")
       }else{
           console.log("campo correcto");
       }

       if(userName.value == ''){
           errors.push("El nombre de usuario no debe de estar vacio")
       }

       if(!regEmailExp.test(email.value)){
        errors.push("Por favor ingrese un Email Valido")
        
       }

       if(!picture.value){
           
        errors.push("Debe subir una imagen")
       } 
        else{
           
       }

      if(!allowedExtensions.exec(picture.value)){
        errors.push("El formato de archivo no es correcto")
    }


       
       if(!regPassExp.test(password.value)){
        //alert('Please provide a valid password');
        errors.push("La contraseña debe contener minimo 8 Caracteres, una mayuscula, una miniscula, un numero y un caracter especial.")

        
       }
       else{
        
       }

       if(password.value !== rePassword.value){
        errors.push("Las contraseñas no coinciden")

       }
       
     
       
        if (errors.length > 0) {
        e.preventDefault();
    let ulErrors = document.getElementById("errores");
    ulErrors.classList.add('alert-warning');
    ulErrors.innerHTML = '';
    for (let i = 0; i < errors.length; i++) {
        ulErrors.innerHTML += `<li >  ${errors[i]} </li>`;
    };
}
   

   
}
      
   

}