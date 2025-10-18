// Foto Sistemi - Galerideki Slayt Geçişlerini Yönetir
let currentIndex = 0;

/**
 * Normal slayt gösterisini sağa veya sola kaydırır.
 * @param {number} step - 1 (ileri) veya -1 (geri)
 */
function moveSlide(step) {
    // Slayt elementlerini '.fotolar img' yerine '.slider-container .fotolar' üzerinden buluyoruz (daha kararlı olması için)
    const container = document.querySelector(".fotolar");
    const slides = container ? container.querySelectorAll("img") : [];
    const totalSlides = slides.length;

    if (totalSlides === 0) return;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const newTransform = `translateX(-${currentIndex * 100}%)`; // Kaydırma işlemi
    if (container) {
        container.style.transform = newTransform;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".fotolar img");
    const imageSrcs = Array.from(images).map(img => img.src);
    
    // Her resme tıklanma olayı ekliyoruz
    images.forEach((img, index) => {
        img.addEventListener("click", function () {
            createFullscreenSlider(index);
        });
    });
    
    // Tam ekran penceresi açıkken aktif slayt numarasını tutmak için bir değişken
    let fullscreenCurrentIndex = 0; 
    let fullscreenDiv = null; // Tam ekran div referansı

    /**
     * Tam ekran galeri görünümünü oluşturur ve yönetir.
     * @param {number} startIndex - Başlangıç resmi dizini.
     */
    function createFullscreenSlider(startIndex) {
        // Zaten bir tam ekran varsa kapat
        if (fullscreenDiv) document.body.removeChild(fullscreenDiv); 

        fullscreenCurrentIndex = startIndex;
        
        // Tam ekran kapsayıcı div oluşturuyoruz
        fullscreenDiv = document.createElement("div");
        fullscreenDiv.classList.add("fullscreen");
        
        // Tam ekran resim elementi
        const fullscreenImg = document.createElement("img");
        fullscreenImg.src = imageSrcs[fullscreenCurrentIndex];
        fullscreenDiv.appendChild(fullscreenImg);
        
        // --- Navigasyon Butonları ---
        const prevBtn = document.createElement("button");
        prevBtn.classList.add("fullscreen-prev");
        prevBtn.innerHTML = "&#10094;";
        
        const nextBtn = document.createElement("button");
        nextBtn.classList.add("fullscreen-next");
        nextBtn.innerHTML = "&#10095;";
        
        const closeBtn = document.createElement("span");
        closeBtn.classList.add("fullscreen-close");
        closeBtn.innerHTML = "&times;";
        
        fullscreenDiv.appendChild(prevBtn);
        fullscreenDiv.appendChild(nextBtn);
        fullscreenDiv.appendChild(closeBtn);
        
        document.body.appendChild(fullscreenDiv);

        // --- Fonksiyon: Tam Ekran Slayt Geçişi ---
        function changeFullscreenSlide(step) {
            fullscreenCurrentIndex = (fullscreenCurrentIndex + step + imageSrcs.length) % imageSrcs.length;
            fullscreenImg.src = imageSrcs[fullscreenCurrentIndex];
        }

        // --- Olay Dinleyicileri ---
        
        // Kapatma Fonksiyonu
        function closeFullscreen() {
            if (fullscreenDiv && fullscreenDiv.parentNode) {
                document.body.removeChild(fullscreenDiv);
                fullscreenDiv = null; // Referansı temizle
            }
        }

        prevBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            changeFullscreenSlide(-1);
        });
        
        nextBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            changeFullscreenSlide(1);
        });
        
        closeBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            closeFullscreen();
        });
        
        // Tam ekran arka planına tıklayınca kapatma
        fullscreenDiv.addEventListener("click", closeFullscreen);
        
        // Resme tıklanırsa kapatma olayı tetiklenmesin
        fullscreenImg.addEventListener("click", (e) => {
            e.stopPropagation();
        });
        
        
        // =======================================================
        // ✨ YENİ: Klavye Olay Dinleyicisi (ESC ve OK Tuşları)
        // =======================================================
        document.addEventListener('keydown', handleKeyDown);

        function handleKeyDown(e) {
            const isFullscreenActive = document.querySelector('.fullscreen');

            // ESC tuşu: Tam ekranı kapat
            if (e.key === 'Escape' && isFullscreenActive) {
                closeFullscreen();
                // Olay dinleyiciyi kaldır ki, tam ekran kapandıktan sonra klavye dinlemesin.
                document.removeEventListener('keydown', handleKeyDown); 
                return;
            }

            // Sağ/Sol Ok tuşları
            if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
                const direction = e.key === 'ArrowRight' ? 1 : -1;
                
                if (isFullscreenActive) {
                    // Tam ekran modunda ise, tam ekran slaytını değiştir
                    changeFullscreenSlide(direction);
                } else {
                    // Normal modda ise, ana galeri slaytını değiştir
                    moveSlide(direction);
                }
            }
        }
    }
    
    // YENİ: Klavye olaylarını genel olarak da dinle (Normal Slayt Geçişi için)
    document.addEventListener('keydown', (e) => {
        // Eğer tam ekran açık değilse, normal slayt geçişini yap
        if (!document.querySelector('.fullscreen')) {
            if (e.key === 'ArrowRight') {
                moveSlide(1);
            } else if (e.key === 'ArrowLeft') {
                moveSlide(-1);
            }
        }
    });
});
