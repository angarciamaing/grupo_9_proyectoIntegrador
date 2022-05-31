window.onload = () => {
    
    const name = document.getElementById('name'); 
    const description = document.getElementById('description');
    const image = document.getElementById('image');
    const price = document.getElementById('price');
    
    name.focus(); // Coloca el  cursor en el pirmer campo del formulario al recargar la página

    const form = document.getElementById('createProductForm');
    form.onsubmit = (e) => {

        const errores = [];
       
        //Nombre del producto
        if(name.value == ""){     
            name.classList.add('is-invalid');                      // Agrega borde rojo si em campo está vacio 
            errores.push('error name');
            errores.name = 'Debe ingresar el nombre del producto'
            nameFront.innerText = errores.name
        } else if(name.value.length < 5) {
            name.classList.add('is-invalid');                      // Agrega borde rojo si em campo está vacio 
            errores.push('error name');
            errores.name = 'El nombre debe tener mínimo 5 caracteres'
            nameFront.innerText = errores.name
        } else {            
            delete errores.name
            nameFront.innerText = ""
        }

        //Descripcion del producto
        if(description.value == ""){
            description.classList.add('is-invalid');
            errores.push('error description');
            errores.description = 'Debe ingresar la descripción del producto'
            descriptionFront.innerText = errores.description
        } else if(description.value.length < 20) {
            description.classList.add('is-invalid');
            errores.push('error description');
            errores.description = 'La descripción debe tener mínimo 20 caracteres'
            descriptionFront.innerText = errores.description
        } else {        
            delete errores.description
            descriptionFront.innerText = ""
        }

        //Imagen del producto
        if(image.value == ""){
            description.classList.add('is-invalid');
            errores.push('error image');
            errores.image = 'Debe seleccionar una imagen'
            imageFront.innerText = errores.image
        } else {
            delete errores.image
            imageFront.innerText = ""
        }

        //Precio del producto
        if(price.value == ""){
            price.classList.add('is-invalid');
            errores.push('error price');
            errores.price = 'Debe ingresar el valor del producto'
            priceFront.innerText = errores.price
        } else {
            delete errores.price
            priceFront.innerText = ""
        }

        if(errores.length > 0){
            e.preventDefault();            
        }
    }

    const removeIsInvalid = (e) => {
        e.target.classList.remove('is-invalid');            // Quita el borde rojo cuando el cliente escribe en el campo 
    }
    name.onkeydown = removeIsInvalid
    description.onkeydown = removeIsInvalid
    price.onkeydown = removeIsInvalid    

}