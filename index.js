const joinButton = document.querySelector(".join-button");
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1gmQf3Jbx6NbkwCxVzDbdqcVATJ0UrGI6ZFbeMYm1p-8"

joinButton.addEventListener('click', openForm);
function openForm() {
    console.log("Open waitlist form");
    // open webpage on a new tab
    window.open(GOOGLE_FORM_URL, "_blank");
}