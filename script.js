let progress = 0;
const progressBar = document.getElementById("progress");
const statusText = document.getElementById("status-text");

function updateProgress() {
  if (progress < 82) {
    progress += 1;
    progressBar.style.width = progress + "%";
    statusText.innerText = `Progress: ${progress}% 🏗️`;
    statusText.classList.add("waiting");
    setTimeout(updateProgress, 100);
  } else {
    statusText.classList.remove("waiting");
    statusText.innerText = "🚧 Site is under construction, coming soon!";
  }
}

updateProgress();
