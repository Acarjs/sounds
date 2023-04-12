const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = `<h1>${sound}</h1>`;

  document.getElementById("buttons").appendChild(btn);

  btn.addEventListener("click", () => {
    soundStop();
    document.getElementById(sound).play();
  });
});

function soundStop() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
