let slides = document.querySelectorAll(".slide");
let index = 0;

function tampilSlide() {
  slides.forEach(s => s.classList.remove("active"));
  slides[index].classList.add("active");
  index = (index + 1) % slides.length;
}

setInterval(tampilSlide, 4000);
