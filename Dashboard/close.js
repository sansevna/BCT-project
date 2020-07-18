const togBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector(".sideMenu");
togBtn.addEventListener("click", function () {
  sidebar.classList.toggle("show-sidebar");
});