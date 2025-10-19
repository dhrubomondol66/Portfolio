const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");
const mobileSidebar = document.getElementById("mobile-sidebar");

menuBtn.addEventListener("click", () => {
  mobileSidebar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
  mobileSidebar.classList.remove("active");
});
