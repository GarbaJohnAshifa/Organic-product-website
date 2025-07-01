// Wait until the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const fades = document.querySelectorAll(".fade-in");
  
    // Trigger animation by adding class
    fades.forEach((el) => {
      el.style.opacity = "1"; // Ensure it's visible even if animation skips
      el.classList.add("animated");
  });
  });
  


  // Fade-In Hero Text on Page Load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".fade-in").forEach(el => {
      el.style.opacity = "1";
      el.classList.add("animated");
  });
  });
  
  // Back to Top Button
  const backToTop = document.getElementById("backToTop");
  window.addEventListener("scroll", () => {
    backToTop.style.display = window.scrollY> 300? "block": "none";
  });
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  });
  
  // Newsletter Form Validation (Simple)
  document.getElementById("newsletter-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("newsletter-email").value;
    const msg = document.getElementById("newsletter-msg");
  
    if (!email.includes("@") ||!email.includes(".")) {
      msg.textContent = "Please enter a valid email address.";
      msg.style.color = "crimson";
  } else {
      msg.textContent = "Subscribed successfully!";
      msg.style.color = "green";
  }
  });
  