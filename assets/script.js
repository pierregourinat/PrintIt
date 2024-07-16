const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Distinction des flèches gauche et droite
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Variables img et tagLine
const slideImage = document.querySelector(".banner-img");
const slideTagline = document.querySelector("#banner p");

arrowLeft.addEventListener("click", function () {
  let newIndex = (currentSlide - 1 + slides.length) % slides.length;
  updateDots(newIndex);
});

arrowRight.addEventListener("click", function () {
  let newIndex = (currentSlide + 1) % slides.length;
  updateDots(newIndex);
});

// Variable diapo actuelle
let currentSlide = 0;

// Fonction mise à jour de l'image, la tagline et le bullet point en fonction de l'index
function updateDots(index) {
  document.querySelectorAll(".dot").forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("dot_selected");
    } else {
      dot.classList.remove("dot_selected");
    }
  });
  currentSlide = index;
  slideImage.src = "assets/images/slideshow/" + slides[index].image;
  slideTagline.innerHTML = slides[index].tagLine;
}

// Bullet points
const dotsContainer = document.querySelector(".dots");

slides.forEach(function (slide, index) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) {
    dot.classList.add("dot_selected");
  }
  dot.addEventListener("click", function () {
    updateDots(index);
  });
  dotsContainer.appendChild(dot);
});
