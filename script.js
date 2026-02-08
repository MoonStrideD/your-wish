const screens=document.querySelectorAll(".screen");
const magic=document.getElementById("magic");
const heart=document.getElementById("heart");

function show(id){
  screens.forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

document.getElementById("openBox").onclick=()=>{
  magic.play();
  show("wishes");
};

document.getElementById("dubai").onclick=()=>{
  alert("HOW INCONSIDERATE OF YOU😭😭");
};

document.getElementById("meat").onclick=()=>{
  alert("NOT WITHOUT ME, BAD BOY 😒😒");
};

document.getElementById("bae").onclick=()=>{
  show("loading");
  heart.play();
  const lines=[
    "Locating bae… 👀",
    "Calculating distance…",
    "Heart connection established 💗",
    "Wish almost ready…"
  ];
  let i=0;
  const text=document.getElementById("loadingText");
  const interval=setInterval(()=>{
    text.textContent=lines[i++];
    if(i>=lines.length){
      clearInterval(interval);
      heart.pause();
      show("final");
    }
  },1500);
};
