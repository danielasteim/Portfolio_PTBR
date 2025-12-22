const content = {
  en: {
    profile: {
      role: "Computer Engineer | Data Analyst<",
      summary: "Organized, proactive and highly logical, with a fast learning curve and a creative approach to problem-solving. I aim to help companies structure, analyze and leverage their data to build innovative solutions, optimize workflows and automate processes efficiently.",
      skills: "Python | SQL | Pipelines | Power Bi | Excel"
    },
    categories: {
      dashboards: "DASHBOARDS",
      analysis: "DATA ANALYSIS",
      pipelines: "FULL PIPELINES",
      spreadsheets: "SPREADSHEETS",
      coding: "COMPUTER ENGINEERING"
    }
  },

  pt: {
    profile: {
      role: "Engenheira de Computação | Analista de Dados",
      summary: "Organizada, proativa e lógica, com rápida capacidade de aprendizado e abordagem criativa na resolução de problemas. Quero ajudar empresas a estruturar, analisar e extrair valor de seus dados para desenvolver soluções inovadoras, otimizar fluxos de trabalho e automatizar processos de forma eficiente.",
      skills: "Python | SQL | Pipelines | Power Bi | Excel"
    },
    categories: {
      dashboards: "DASHBOARDS",
      analysis: "ANÁLISE DE DADOS",
      pipelines: "PIPELINES COMPLETOS",
      spreadsheets: "PLANILHAS",
      coding: "COMPUTAÇÃO"
    }
  }
};

// tries to get the current langugage active, otherswise defaults to 'en'
let currentLang = localStorage.getItem("lang") || "en";

function renderLanguage(lang) {
  const data = content[lang];

  // Profile
  document.querySelector(".role").textContent = data.profile.role;
  document.querySelector(".summary").textContent = data.profile.summary;
  document.querySelector(".core-skills").textContent = data.profile.skills;

  // Categories
  document.querySelectorAll(".skills-menu button").forEach(btn => {
    const key = btn.dataset.category;
    btn.textContent = data.categories[key];
  });

  localStorage.setItem("lang", lang);
}

document.querySelectorAll(".lang-toggle button").forEach(btn => {
  btn.addEventListener("click", () => {
    document
      .querySelector(".lang-toggle .active")
      .classList.remove("active");

    btn.classList.add("active");

    renderLanguage(btn.dataset.lang);
  });
});

// Init
renderLanguage(currentLang);