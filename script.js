const screens = document.querySelectorAll(".screen");
const magic = document.getElementById("magic");
const heartbeat = document.getElementById("heartbeat");
const wow = document.getElementById("wow");

// unlock audio on first interaction
document.body.addEventListener("click", () => {
  document.querySelectorAll("audio").forEach(a => {
    a.play().then(() => a.pause()).catch(() => {});
  });
}, { once: true });

function showScreen(id) {
  screens.forEach(s => s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

function openBox() {
  magic.play();
  showScreen("screen2");
}

function badWish(type) {
  if (type === "meat") {
    showPopup("NOT WITHOUT ME, BAD BOY 😤😤");
  } else {
    showPopup("HOW INCONSIDERATE OF YOU 😭😭");
  }
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
    if (i === steps.length) {
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
  // real life moment happens here 😭🚪💖
}

function showPopup(message) {
  document.getElementById("popupText").textContent = message;
  document.getElementById("popupOverlay").classList.remove("hidden");
}

function closePopup() {
  document.getElementById("popupOverlay").classList.add("hidden");
}
