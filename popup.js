// Get selectors
const button = document.querySelector("button");
const container = document.querySelector(".popupBox-container");
const popupBox = document.querySelector(".popupBox");
const close = document.querySelector(".popupBox-close");

// Show popup when button is clicked
button.addEventListener("click", () => {
  container.style.display = "block";
});

// Hide popup when X is clicked
close.addEventListener("click", () => {
  container.style.display = "none";
});

// Hide popup box when anywhere outside of it is clicked
popupBox.parentElement.addEventListener("click", (e) => {
  const isPopupMessage = popupBox.contains(e.target);
  if (!isPopupMessage) {
    container.style.display = "none";
  }
});