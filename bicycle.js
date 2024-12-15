const searchIcon = document.getElementById("search");
const searchField = document.getElementById("input");

searchIcon.onclick = () => {
  searchField.classList.toggle("hidden");
};

const slides = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

function showNextSlide() {
  slides[currentIndex].classList.add("hidden");
  currentIndex = (currentIndex + 1) % slides.length;
  slides[currentIndex].classList.remove("hidden");
}

// Automatically move slides every 3 seconds
setInterval(showNextSlide, 3000);

function handleNavigation(select) {
  const value = select.value;
  if (value) {
    window.location.href = value;
  }
}
