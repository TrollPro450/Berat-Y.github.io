document.addEventListener("DOMContentLoaded", function () {
    const root = document.documentElement;
    const themeSwitch = document.querySelector(".theme-switch__checkbox");

    // Kaydedilen tema varsa onu yükle
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        root.classList.add("dark-mode");
        themeSwitch.checked = true;
    }

    // Butona tıklanınca temayı değiştir
    themeSwitch.addEventListener("change", function () {
        if (themeSwitch.checked) {
            root.classList.add("dark-mode");
            localStorage.setItem("theme", "dark");
        } else {
            root.classList.remove("dark-mode");
            localStorage.setItem("theme", "light");
        }
    });
});


document.querySelector('.theme-switch__checkbox').addEventListener('change', function() {
    if (this.checked) {
        document.documentElement.style.setProperty('--ultragrey', '#000000'); // Siyah yap
    } else {
        document.documentElement.style.setProperty('--ultragrey', '#f4f4f7'); // Beyaz yap
    }
});

let currentIndex = 0;

function moveSlide(step) {
  const slides = document.querySelectorAll(".fotolar img");
  const totalSlides = slides.length;

  currentIndex = (currentIndex + step + totalSlides) % totalSlides; 
  const newTransform = `translateX(-${currentIndex * 100}%)`; /* Kaydırma işlemi */
  document.querySelector(".fotolar").style.transform = newTransform;
}
