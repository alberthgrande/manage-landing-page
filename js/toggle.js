const toggleBtn = document.querySelector(".btn-mobile-nav");
const navMain = document.querySelector(".nav-main");
toggleBtn.addEventListener("click", () => {
    navMain.classList.toggle("active")
    console.log("hello")
})