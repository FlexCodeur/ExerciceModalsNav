const openModals = document.getElementsByClassName("openModal");
const modals = document.getElementsByClassName("secondNav");

for (let i = 0; i < openModals.length; i++) {
  openModals[i].addEventListener("mouseenter", () => {
    modals[i].classList.remove("displayNone");
  });
  window.addEventListener("mousemove", (e) => {
    if (e.offsetY > 105) {
      modals[i].classList.add("displayNone");
    }
  });
}
