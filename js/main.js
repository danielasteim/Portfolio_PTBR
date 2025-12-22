const panel = document.getElementById("panel");
const panelTitle = document.querySelector(".panel-title");
const panelClose = document.querySelector(".panel-close");
const skillButtons = document.querySelectorAll(".skills-menu button");

skillButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    skillButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    openPanel(btn.dataset.category);
  });
});

function openPanel(category) {
  panel.classList.add("active");
  renderProjects(category);
}

panelClose.addEventListener("click", closePanel);

function closePanel() {
  panel.classList.remove("active");
  skillButtons.forEach(b => b.classList.remove("active"));
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape" && panel.classList.contains("active")) {
    closePanel();
  }
});
