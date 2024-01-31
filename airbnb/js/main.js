// console.log("js has been loaded");

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
const closeBtn = document.getElementById("closeBtn");


// 'event name', callback function
menuBtn.addEventListener("click", function() {
    console.log("menuBtn clicked");
    mobileMenu.classList.add("active");
});

closeBtn.addEventListener("click", function() {
    console.log("closeBtn clicked");
    mobileMenu.classList.remove("active");
});