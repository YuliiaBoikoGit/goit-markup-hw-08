(() => {
    const menuBtnRef = document.querySelector("[data-burger-button]");
    const mobileMenueRef = document.querySelector("[data-burger-menu]");
    const mobileLogoRef = document.querySelector("[data-burger-logo]");

    menuBtnRef.addEventListener("click", () => {
        const expanded =
            menuBtnRef.getAttribute("aria-expanded") === "true" || false;
        
        menuBtnRef.classList.toggle("is-open");
        menuBtnRef.setAttribute("aria-expanded", !expanded);

        mobileMenueRef.classList.toggle("is-open");

        mobileLogoRef.classList.toggle("is-open");

    });
})();