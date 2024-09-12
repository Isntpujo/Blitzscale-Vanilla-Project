const btnMenu = document.querySelector(".menu-hamburger");
const menuExpand = document.querySelector(".dropdown-content")

btnMenu.addEventListener("click", () => {
    menuExpand.classList.toggle("hide");
    console.log(btnMenu)
})

document.addEventListener("click", e => {
    if (!menuExpand.contains(e.target) && e.target !== btnMenu) {
        menuExpand.classList.add("hide")
    }
})