const openModals = document.getElementsByClassName("openModal");
const modals = document.getElementsByClassName("secondNav");

for( let i = 0 ; i < openModals.length ; i++){
    openModals[i].addEventListener("mouseenter", function(){
        modals[i].classList.remove('displayNone');
    });
    openModals[i].addEventListener("mouseout", function(){
        modals[i].classList.add("displayNone");
    })
}
