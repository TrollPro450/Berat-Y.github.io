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

document.addEventListener("DOMContentLoaded", function () {
    // Slider için mevcut resimleri alıyoruz
    const images = document.querySelectorAll(".fotolar img");
    // Tüm resimlerin src'lerini diziye aktarıyoruz
    const imageSrcs = Array.from(images).map(img => img.src);
    
    // Her resme tıklanma olayı ekliyoruz
    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            createFullscreenSlider(index);
        });
    });
    
    function createFullscreenSlider(startIndex) {
        let currentIndex = startIndex;
        
        // Tam ekran kapsayıcı div oluşturuyoruz
        const fullscreenDiv = document.createElement("div");
        fullscreenDiv.classList.add("fullscreen");
        
        // Tam ekran resim elementi
        const fullscreenImg = document.createElement("img");
        fullscreenImg.src = imageSrcs[currentIndex];
        fullscreenDiv.appendChild(fullscreenImg);
        
        // Önceki butonunu oluşturuyoruz
        const prevBtn = document.createElement("button");
        prevBtn.classList.add("fullscreen-prev");
        prevBtn.innerHTML = "&#10094;"; // Sol ok simgesi
        fullscreenDiv.appendChild(prevBtn);
        
        // Sonraki butonunu oluşturuyoruz
        const nextBtn = document.createElement("button");
        nextBtn.classList.add("fullscreen-next");
        nextBtn.innerHTML = "&#10095;"; // Sağ ok simgesi
        fullscreenDiv.appendChild(nextBtn);
        
        // Kapatma butonunu oluşturuyoruz
        const closeBtn = document.createElement("span");
        closeBtn.classList.add("fullscreen-close");
        closeBtn.innerHTML = "&times;"; // Kapatma simgesi
        fullscreenDiv.appendChild(closeBtn);
        
        document.body.appendChild(fullscreenDiv);
        
        // Önceki buton tıklama işlemi
        prevBtn.addEventListener("click", function(event) {
            event.stopPropagation(); // Üst kapsayıcıya geçmesin
            currentIndex = (currentIndex - 1 + imageSrcs.length) % imageSrcs.length;
            fullscreenImg.src = imageSrcs[currentIndex];
        });
        
        // Sonraki buton tıklama işlemi
        nextBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            currentIndex = (currentIndex + 1) % imageSrcs.length;
            fullscreenImg.src = imageSrcs[currentIndex];
        });
        
        // Kapatma butonuna tıklayınca tam ekran mod kapansın
        closeBtn.addEventListener("click", function(event) {
            event.stopPropagation();
            document.body.removeChild(fullscreenDiv);
        });
        
        // Tam ekran arka planına tıklayınca kapatma
        fullscreenDiv.addEventListener("click", function() {
            document.body.removeChild(fullscreenDiv);
        });
        
        // Resme tıklanırsa, kapatma olayı tetiklenmesin
        fullscreenImg.addEventListener("click", function(event) {
            event.stopPropagation();
        });
    }
});
