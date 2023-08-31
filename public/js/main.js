let btn = document.querySelector('.readmore')
let aboutText = document.querySelector('.description')

function showMoreText() {
    aboutText.classList.toggle("description")
}

btn.addEventListener("click", showMoreText)

const primaryNav = document.querySelector(".primary-navigation")
const navToggle = document.querySelector(".mobile-nav-toggle")

navToggle.addEventListener("click", () => {
    const isVisible = primaryNav.getAttribute("data-visible")

    if (isVisible === "false") {
        primaryNav.setAttribute("data-visible", "true")
        navToggle.setAttribute("aria-expanded", "true")
    }

    if (isVisible === "true") {
        primaryNav.setAttribute("data-visible", "false")
        navToggle.setAttribute("aria-expanded", "false")
    }
})