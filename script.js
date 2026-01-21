// Book Rain Creation
const rain = document.querySelector('.rain');
const icons = ["📘", "📕", "📗", "📖", "✏️"];

for (let i = 0; i < 40; i++) {
  const span = document.createElement("span");
  span.innerText = icons[Math.floor(Math.random() * icons.length)];
  span.style.left = Math.random() * 100 + "vw";
  span.style.animationDuration = (3 + Math.random() * 5) + "s";
  span.style.fontSize = (16 + Math.random() * 20) + "px";
  rain.appendChild(span);
}

// Motivation Text
const message = [
  "Nee podura efforts ku kandipa result kidaikum...",
  "Kashtam irukalam...",
  "Aana nee strong ah iru 💪",
  "all the best"
  
];

const btn = document.getElementById("openBtn");
const textEl = document.getElementById("text");
const character = document.querySelector(".character");

btn.addEventListener("click", () => {
  btn.style.display = "none";
  character.style.opacity = 1;
  typeText();
});

let line = 0;
let char = 0;

function typeText() {
  if (line < message.length) {
    if (char < message[line].length) {
      textEl.innerHTML += message[line].charAt(char);
      char++;
      setTimeout(typeText, 70);
    } else {
      textEl.innerHTML += "<br>";
      line++;
      char = 0;
      setTimeout(typeText, 600);
    }
  }

}
