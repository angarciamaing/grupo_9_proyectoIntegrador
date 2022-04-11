window.onload = () => {
    const erroresList = document.getElementById('erroresList'); 
    const name = document.getElementById('name'); 
    const description = document.getElementById('description');
    const image = document.getElementById('image');
    const price = document.getElementById('price');
    
    name.focus(); // Coloca el  cursor en el pirmer campo del formulario al recargar la página

    console.log('hola');

    const form = document.getElementById('createProductForm');
    form.onsubmit = (e) => {

        const errores = [];
       
        if(name.value === "" && name.value <= 4){     
            name.classList.add('is-invalid');                      // Agrega borde rojo si em campo está vacio 
            errores.push('Debes de elegir un nombre');
        }

        if(description.value === ""){
            description.classList.add('is-invalid');
            errores.push('Debes de agregar una descripción');
            
        }

        if(image.value === ""){
            errores.push('Debes de elegir una imagen');
           
        }

        if(price.value === ""){
            price.classList.add('is-invalid');
            errores.push('Debes de asignar un precio');
            
        }

        if(errores.length > 0){
            e.preventDefault();
            for (const error of errores) {
                erroresList.innerHTML += "<li>" + error + "</li>"
            }
        }
    }

    const removeIsInvalid = (e) => {
        e.target.classList.remove('is-invalid');            // Quita el borde rojo cuando el cliente escribe en el campo 
    }

    name.onkeydown = removeIsInvalid
    description.onkeydown = removeIsInvalid
    price.onkeydown = removeIsInvalid
    

}