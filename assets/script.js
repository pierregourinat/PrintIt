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
  console.log("Flèche gauche cliquée");
  updateDots(currentSlide - 1);
});

arrowRight.addEventListener("click", function () {
  console.log("Flèche droite cliquée");
  updateDots(currentSlide + 1);
});

// Bullet points
const dotsContainer = document.querySelector(".dots");

// Variable diapo actuelle
let currentSlide = 0;

// Fonction mise à jour des bullet points
function updateDots(index) {
  console.log("Maj bullet points index", index);

  document.querySelectorAll(".dot").forEach((dot, idx) => {
    if (idx === index) {
      dot.classList.add("dot_selected");
      console.log(`Bullet point ${idx} sélectionné`);
    } else {
      dot.classList.remove("dot_selected");
      console.log(`Bullet point ${idx} déselectionné`);
    }
  });
  currentSlide = index;
}

slides.forEach(function (slide, index) {
  const dot = document.createElement("div");
  dot.classList.add("dot");
  if (index === 0) {
    dot.classList.add("dot_selected");
  }
  dot.addEventListener("click", function () {
    console.log("Bullet point cliqué, index :", index);
    updateDots(index);
  });
  dotsContainer.appendChild(dot);
  console.log("Bullet point ajouté pour l'image :", slide.image);
});
