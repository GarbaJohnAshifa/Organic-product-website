const buttons = document.querySelectorAll(".view-more");

buttons.forEach(function(button) {
  button.addEventListener("click", function() {
    const infoDiv = button.nextElementSibling;
    infoDiv.classList.toggle("show-info");

    if (infoDiv.classList.contains("show-info")) {
      button.textContent = "Hide Info";
} else {
      button.textContent = "View More";
}
});
});

