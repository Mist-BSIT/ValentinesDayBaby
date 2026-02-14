const bg = document.querySelector(".hearts-bg");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (Math.random() * 2 + 2) + "s";
  heart.style.fontSize = (Math.random() * 20 + 10) + "px";

  heart.innerHTML = "💖";

  bg.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 4000);
}

setInterval(createHeart, 300);
