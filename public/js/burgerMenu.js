window.onload = () => {
    const burgerMenu = document.getElementById("burger");

    const fullMenu = document.getElementById("menu");

   burgerMenu.addEventListener("click", () => {
       fullMenu.classList.toggle("show")
   })

}