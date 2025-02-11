// script.js
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you for contacting us!");
        form.reset();
    });
});

// scroll button
        const scrollBtn = document.getElementById("scrollToTop");
        
        window.onscroll = function() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                scrollBtn.style.display = "flex";
            } else {
                scrollBtn.style.display = "none";
            }
        };
        
        scrollBtn.addEventListener("click", function() {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });

// footer
// script.js
document.getElementById('subscribeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('emailInput').value;
    alert(`Subscribed with ${email}`);
    document.getElementById('emailInput').value = ''; // Clear input field
});

// Share functionality
const currentURL = encodeURIComponent(window.location.href);

document.getElementById('facebookShare').href = `https://www.facebook.com/sharer/sharer.php?u=${currentURL}`;
document.getElementById('twitterShare').href = `https://twitter.com/intent/tweet?url=${currentURL}&text=Check%20this%20out!`;
document.getElementById('linkedinShare').href = `https://www.linkedin.com/sharing/share-offsite/?url=${currentURL}`;
document.getElementById('whatsappShare').href = `https://api.whatsapp.com/send?text=Check%20this%20out:%20${currentURL}`;