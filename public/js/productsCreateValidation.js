window.onload = () => {
    const name = document.getElementById('name'); 
    const description = document.getElementById('description');
    const image = document.getElementById('image');
    
    name.focus(); // Coloca el  cursor en el pirmer campo del formulario al recargar la página

    console.log('hola');

    const form = document.getElementById('editProductForm');
    form.onsubmit = (e) => {
       
        if(name.value === ""){
            e.preventDefault();
            // alert('Nombre del producto no puede estar vacio')
            name.classList.add('is-invalid')
        }

        if(description.value === ""){
            e.preventDefault();
            alert('Descripción del producto no puede estar vacio')
        }

        if(image.value === ""){
            e.preventDefault();
            alert('Debes seleccionar una imagen')
        }
    }
}