const toTop = document.querySelector("#btn-back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 1500) {
        toTop.classList.add("active");
    } else {
        toTop.classList.remove("active");
    }
})

toTop.addEventListener("click", () => {
    window.scrollTo({
        top: 0
    })
})