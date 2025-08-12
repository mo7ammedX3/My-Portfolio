// script.js

// Mobile menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector("nav ul.nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Smooth scrolling for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId && targetId.startsWith("#")) {
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
      });
    }
    // Close menu on mobile after clicking link
    if (navLinks.classList.contains("show")) {
      navLinks.classList.remove("show");
    }
  });
});

// Contact form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert(
    this.closest("html").lang === "ar"
      ? "تم إرسال رسالتك بنجاح!"
      : "Your message has been sent successfully!"
  );
  this.reset();
});
