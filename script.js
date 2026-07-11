let header = document.querySelector(".header");
let openMenu = document.querySelector("#openMenu");
let closeMenu = document.querySelector("#closeMenu");
let unOrderList = document.querySelector(".unOrderList");

window.onscroll = function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
};



openMenu.addEventListener("click", () => {
  unOrderList.style.display = "flex";
});

closeMenu.addEventListener("click", () => {
  unOrderList.style.display = "none";
});

// const openMenu = document.getElementById("openMenu");
// const closeMenu = document.getElementById("closeMenu");
// const menu = document.querySelector(".links ul");

// openMenu.onclick = () => {
//     menu.classList.add("show");
// };

// closeMenu.onclick = () => {
//     menu.classList.remove("show");
// };

// // يقفل القائمة بعد الضغط على أي لينك
// document.querySelectorAll(".links ul a").forEach(link => {
//     link.onclick = () => {
//         menu.classList.remove("show");
//     };
// });
