let bySira = 0;
const bySlaytlar = document.getElementsByClassName("by-slide-item");
const byModal = document.querySelector(".by-modal-overlay");
const byModalImg = document.getElementById("by-img-target");

// Slayt Gösterimi
function byGoster(n) {
    if (n >= bySlaytlar.length) bySira = 0;
    if (n < 0) bySira = bySlaytlar.length - 1;

    for (let i = 0; i < bySlaytlar.length; i++) {
        bySlaytlar[i].style.display = "none";
        bySlaytlar[i].classList.remove("by-slide-active");
    }
    
    if (bySlaytlar[bySira]) {
        bySlaytlar[bySira].style.display = "block";
        bySlaytlar[bySira].classList.add("by-slide-active");
        if (byModal.style.display === "flex") {
            byModalImg.src = bySlaytlar[bySira].getElementsByTagName("img")[0].src;
        }
    }
}

// RESMİ BÜYÜTME (Yukarı atma özelliği eklendi)
function buyut(index) {
    bySira = index;
    
    // Sayfayı anında en üste kaydırır
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Modalı aç ve sayfa kaymasını kilitle
    byModal.style.display = "flex";
    
    
    byModalImg.src = bySlaytlar[bySira].getElementsByTagName("img")[0].src;document.body.style.overflow = "hidden"; 
}

function kapat() {
    byModal.style.display = "none";
    document.body.style.overflow = "auto"; // Kaydırmayı geri aç
}

// Boşluğa tıklayınca kapanma kuralı [cite: 2025-12-21]
window.onclick = function(event) {
    if (event.target == byModal) {
        kapat();
    }
}

function byDegistir(n) {
    bySira += n;
    byGoster(bySira);
}

// Sayfa yüklendiğinde ilk slaytı hazırla
window.onload = function() {
    byGoster(0);
};
