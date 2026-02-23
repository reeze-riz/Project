const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

const questionContainer = document.querySelector(".question-container");
const loadingContainer = document.querySelector(".loading-container");
const resultContainer = document.querySelector(".result-container");

// hide loading + result first
loadingContainer.style.display = "none";
resultContainer.style.display = "none";

// YES → show loading heart then result
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  loadingContainer.style.display = "block";

  // wait 3 seconds then show result
  setTimeout(() => {
    loadingContainer.style.display = "none";
    resultContainer.style.display = "block";
  }, 3000);
});

// NO button runs away
noBtn.addEventListener("mouseover", () => {
  noBtn.style.position = "absolute";
  noBtn.style.top = Math.random() * window.innerHeight + "px";
  noBtn.style.left = Math.random() * window.innerWidth + "px";
});
