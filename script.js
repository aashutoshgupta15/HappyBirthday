// 🎂 Birth Timer
const countdown = () => {
  const birthdayTime = new Date("2025-07-18T11:45:00"); // set her birth time here
  const now = new Date();
  const gap = birthdayTime - now;

  const days = Math.floor(gap / (1000 * 60 * 60 * 24));
  const hours = Math.floor((gap / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((gap / (1000 * 60)) % 60);
  const seconds = Math.floor((gap / 1000) % 60);

  if (gap > 0) {
    document.getElementById("timer").innerText =
      `Countdown to your magic moment: ${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    document.getElementById("timer").innerText = "🎉 It's your birth time! 🌙";
  }
};

setInterval(countdown, 1000);

// 💌 Typing Message
const msg = "You are the moonlight of my world. Every moment with you shines brighter than galaxies. 💖";
let i = 0;
function typeMessage() {
  if (i < msg.length) {
    document.getElementById("message").textContent += msg.charAt(i);
    i++;
    setTimeout(typeMessage, 70);
  }
}
window.onload = typeMessage;

// 📸 Gallery
let current = 0;
const images = document.querySelectorAll(".gallery-img");

function showImage(index) {
  images.forEach((img, i) => img.classList.toggle("active", i === index));
}

function nextImg() {
  current = (current + 1) % images.length;
  showImage(current);
}

function prevImg() {
  current = (current - 1 + images.length) % images.length;
  showImage(current);
}

// 🎁 Reveal Gift (always available)
document.getElementById("reveal-btn").addEventListener("click", () => {
  document.getElementById("gift-link").style.display = "block";
});

// 🌌 Star Animation
const canvas = document.getElementById("star-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];
for (let i = 0; i < 150; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 1.5,
    alpha: Math.random(),
    speed: Math.random() * 0.004 + 0.001
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, 2 * Math.PI);
    ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
    ctx.fill();
    star.alpha += star.speed;
    if (star.alpha >= 1 || star.alpha <= 0) {
      star.speed = -star.speed;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();
