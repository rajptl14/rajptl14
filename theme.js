document.addEventListener("DOMContentLoaded", () => {
    new Typed('#typed', {
        stringsElement: '#typed-strings',
        typeSpeed: 70,
        backSpeed: 70,
        loop: false,
        showCursor: false
    });

    const toggle = document.getElementById("theme-toggle");
    const root = document.documentElement;
    const icon = document.getElementById("theme-icon");

    toggle.addEventListener("click", () => {
        const current = root.getAttribute("data-theme");
        if (current === "light") {
            root.setAttribute("data-theme", "dark");
            icon.textContent = "☾";
        } else {
            root.setAttribute("data-theme", "light");
            icon.textContent = "☼";
        }
    });
});