window.addEventListener("DOMContentLoaded", () => {
  const elem = document.querySelector(".progress-done");
  const statusText = document.getElementById("status-text");
  const targetPercent = parseInt(elem.getAttribute("data-done"), 10);
  let width = 0;

  statusText.innerText = `Progress: 0% 🏗️`;
  statusText.classList.add("waiting");

  const interval = setInterval(() => {
    if (width >= targetPercent) {
      clearInterval(interval);
      statusText.classList.remove("waiting");
      statusText.innerText = "🚧 Site is under construction, coming soon!";
      elem.innerText = targetPercent + "%";
    } else {
      width++;
      elem.style.width = width + "%";
      elem.innerText = width + "%";
      statusText.innerText = `Ladu is working on it meanwhile give him pucchi 💋💋`;
    }
  }, 100);
});
