document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".navbar");
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
        } else {
            navbar.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
        }
    });

    document.querySelectorAll('.nav-links a').forEach(anchor => {
        anchor.addEventListener('click', function (event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });

    // See More Button functionality
    const seeMoreBtn = document.querySelector(".see-more-btn");
    const seeMoreText = document.querySelector(".see-more-text");

    seeMoreBtn.addEventListener("click", function () {
        if (seeMoreText.style.webkitLineClamp === "3") {
            seeMoreText.style.webkitLineClamp = "none"; // Show all text
            seeMoreBtn.textContent = "See Less";
        } else {
            seeMoreText.style.webkitLineClamp = "3"; // Collapse the text
            seeMoreBtn.textContent = "See More";
        }
    });
});
