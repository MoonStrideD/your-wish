const screens = document.querySelectorAll(".screen");
const magic = document.getElementById("magic");
const heartbeat = document.getElementById("heartbeat");
const wow = document.getElementById("wow");

const popupOverlay = document.getElementById("popupOverlay");
const popupBtn = document.getElementById("popupBtn");
const popupText = document.getElementById("popupText");

// unlock audio on first click
document.body.addEventListener("click", () => {
  document.querySelectorAll("audio").forEach(a => {
    a.play().then(() => a.pause()).catch(() => {});
  });
}, { once: true });

// popup close
popupBtn.addEventListener("click", () => {
  popupOverlay.classList.add("hidden");
});

// helper to switch screens
function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openBox() {
  magic.play();
  showScreen("screen2");
}

function badWish(type) {
  if(type === "meat") {
    popupText.textContent = "NOT WITHOUT ME, BAD BOY 😤😤";
  } else {
    popupText.textContent = "HOW INCONSIDERATE OF YOU 😭😭";
  }
  popupOverlay.classList.remove("hidden");
}

function wishToSeeBae() {
  heartbeat.currentTime = 0;
  heartbeat.play().catch(()=>{});

  showScreen("screen3");

  const text = document.getElementById("processingText");
  const steps = [
    "Locating bae… 👀",
    "Calculating distance… 📍",
    "Heart connection established 💗",
    "Wish almost ready… ✨"
  ];

  let i = 0;
  const interval = setInterval(() => {
    text.textContent = steps[i];
    i++;
    if(i === steps.length) {
      clearInterval(interval);
      heartbeat.pause();
      heartbeat.currentTime = 0;

      setTimeout(() => {
        wow.play();
        showScreen("screen4");
      }, 1000);
    }
  }, 1800);
}

function openDoor() {
  // This is the final moment IRL 🚪💖
}
