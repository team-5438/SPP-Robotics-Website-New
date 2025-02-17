const currentPageNavImage = document.getElementById("nav-image")

function scrollToTop() {
    window.scrollTo( { top: 0, behavior: "smooth" } )
}

if (currentPageNavImage !== null) {
    currentPageNavImage.addEventListener("click", (event) => {
        event.preventDefault()
        scrollToTop()
    })
}