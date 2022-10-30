const primaryNav = document.querySelector(".navigationContainer");
const navToggleBtn = document.querySelector(".mobileNavToggleBtn");

navToggleBtn.addEventListener("click", () => {
    const navVisibility = primaryNav.getAttribute("data-visible");
    console.log(navVisibility);

    if (navVisibility === "false") {
        primaryNav.setAttribute("data-visible", "true");
        navToggleBtn.setAttribute("aria-expanded", "true");
    } else {
        primaryNav.setAttribute("data-visible", "false");
        navToggleBtn.setAttribute("aria-expanded", "false");
    }
})