const typingText = document.getElementById("typingText");
const textContent = typingText.textContent;
typingText.textContent = ""; // Kosongkan teks untuk animasi ketik

let i = 0;
function typeEffect() {
    if (i < textContent.length) {
        typingText.textContent += textContent.charAt(i);
        i++;
        setTimeout(typeEffect, 80); // Kecepatan ketik dalam milidetik
    }
}

window.onload = typeEffect; // Memulai animasi saat halaman dimuat
