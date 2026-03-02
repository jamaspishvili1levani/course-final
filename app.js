const languageBtn = document.querySelector(".language");
const menu = document.querySelector(".off-screen-menu");

languageBtn.addEventListener("click", () => {
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
