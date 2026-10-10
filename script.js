
const revealButton = document.getElementById("reveal-button");
const loveLetter = document.getElementById("love-letter");

revealButton.addEventListener("click", function () {
    loveLetter.style.display = "block";
    revealButton.textContent = "Your letter is open ❤️";
});


const heartsContainer = document.querySelector(".hearts-container");

function createHeart() {
    const heart = document.createElement("span");

    heart.classList.add("floating-heart");
    heart.textContent = "♥";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (12 + Math.random() * 16) + "px";
    heart.style.animationDuration = (6 + Math.random() * 5) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 11000);
}

setInterval(createHeart, 1200);
