const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/1gmQf3Jbx6NbkwCxVzDbdqcVATJ0UrGI6ZFbeMYm1p-8"
const t = "5ef97046932e8d79a73de3601fea905d"
let hoverEventSent = false;

function openForm() {
    // open webpage on a new tab
    window.open(GOOGLE_FORM_URL, "_blank");
    mixpanel.track("landing_page_signup_clicked");
}

// on page load
window.onload = function() {
    mixpanel.init(t, { debug: false, track_pageview: false });
    mixpanel.track("landing_page_visited");
    const joinButton = document.querySelector(".join-button");
    joinButton.addEventListener('click', openForm);
    joinButton.addEventListener('mouseover', function() {        
        if (!hoverEventSent) {
            mixpanel.track("landing_page_signup_hovered");
            hoverEventSent = true;
        }
    });
};

