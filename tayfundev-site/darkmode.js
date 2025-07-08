const modeBtn = document.getElementById("modeToggle");
const icon = document.getElementById("modeIcon");
modeBtn.onclick = () => {
  document.body.classList.toggle("light-mode");
  icon.src = document.body.classList.contains("light-mode") ? 'sun.svg' : 'moon.svg';
};
