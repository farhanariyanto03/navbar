const navBar = document.querySelector(".navbar");

window.addEventListener('scroll', () => {
    const positionWindow = window.scrollY > 0;
    navBar.classList.toggle('scrolling-active', positionWindow)
    sideBar.classList.remove("menu-active");
});

const menuBar = document.querySelectorAll(".ri-menu-line");
const sideBar = document.querySelector(".navigation");

// Anda perlu melakukan perulangan melalui setiap elemen dalam menuBar
menuBar.forEach((element) => {
    element.addEventListener("click", () => {
        sideBar.classList.toggle("menu-active");
    });
});

const iconClose = document.querySelectorAll(".ri-close-line");
iconClose.forEach((element) => {
    element.addEventListener('click', () => {
        sideBar.classList.remove("menu-active");
    });
});


// const menuBar = document.querySelectorAll(".ri-menu-line");
// const slideBar = document.querySelector(".navigation");

// menuBar.addEventListener("click", () => {
//     slideBar.classList.toggle("menu-active");
// });