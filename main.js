const btn = document.querySelector("#nav-btn");
const ul = document.querySelector(".nav-list");

btn.addEventListener("click", function() {
    ul.classList.toggle("active");
})