function toggleDarkMode() {
    const element = document.querySelector("body");
    element.classList.toggle("darkMode");
}

function gridView() {
    const element = document.querySelector("div");
    element.classList.add("grid");
}

function colView() {
    const element = document.querySelector("div");
    element.classList.remove("grid");
}

function galleryOn() {
    const element = document.querySelector("div");
    element.classList.add("border", "bg-white");
}
