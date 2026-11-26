/* ==========================================================================
   ឯកសារត្រួតពិនិត្យដំណើរការមេរបស់កម្មវិធី (Main Application Controller)
   គ្រប់គ្រង Navigation Menu, Mobile Hamburger, Theme, Language, និង History
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // ទាញយកធាតុ DOM សំខាន់ៗ
  const sidebar = document.getElementById("sidebar");
  const sidebarOverlay = document.getElementById("sidebarOverlay");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeSidebarBtn = document.getElementById("closeSidebarBtn");
  const navItems = document.querySelectorAll(".nav-item");
  const pageSections = document.querySelectorAll(".page-section");
  const pageTitle = document.getElementById("pageTitle");

  // ប្រវត្តិគណនាពី localStorage
  let calcHistory = JSON.parse(localStorage.getItem("esp_history") || "[]");

  /* -------------------- ១. មុខងារបើក/បិទម៉ឺនុយលើទូរស័ព្ទ -------------------- */
  function openMobileSidebar() {
    sidebar.classList.add("open");
    sidebarOverlay.classList.add("show");
  }

  function closeMobileSidebar() {
    sidebar.classList.remove("open");
    sidebarOverlay.classList.remove("show");
  }

  hamburgerBtn.addEventListener("click", openMobileSidebar);
  closeSidebarBtn.addEventListener("click", closeMobileSidebar);
  sidebarOverlay.addEventListener("click", closeMobileSidebar);

  /* -------------------- ២. មុខងារផ្លាស់ប្តូរទំព័រ (Page Navigation) -------------------- */
  function navigateTo(pageName) {
    // ធ្វើបច្ចុប្បន្នភាព Active Menu Highlighting
    navItems.forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-page") === pageName);
    });

    // បង្ហាញទំព័រដែលបានជ្រើសរើស
    pageSections.forEach((sec) => {
      sec.classList.toggle("active", sec.id === `page-${pageName}`);
    });

    // ប្តូរចំណងជើងនៅរបារខាងលើ
    pageTitle.textContent = t(`nav_${pageName}`);
    closeMobileSidebar();
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navItems.forEach((btn) => {
    btn.addEventListener("click", () => {
      navigateTo(btn.getAttribute("data-page"));
    });
  });

  // ប៊ូតុងផ្លូវកាត់នៅទំព័រដើម (Hero CTA Buttons)
  document.querySelectorAll("[data-goto]").forEach((btn) => {
    btn.addEventListener("click", () => {
      navigateTo(btn.getAttribute("data-goto"));
    });
  });

  /* -------------------- ៣. មុខងារប្តូរពន្លឺ Light / Dark Mode -------------------- */
  const themeToggleBtn = document.getElementById("themeToggleBtn");
  const themeIcon = document.getElementById("themeIcon");
  const savedTheme = localStorage.getItem("esp_theme") || "light";

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("esp_theme", theme);
    themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    document.getElementById("themeText").textContent = theme === "dark" ? t("theme_light") : t("theme_dark");
  }

  applyTheme(savedTheme);

  themeToggleBtn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });

  /* -------------------- ៤. មុខងារគ្រប់គ្រងប្រវត្តិគណនា (History) -------------------- */
  function updateHistoryBadge() {
    const badge = document.getElementById("historyCountBadge");
    if (badge) badge.textContent = calcHistory.length;
  }

  function saveToHistory(type, equationStr, answerStr) {
    const entry = {
      id: Date.now(),
      type,
      equation: equationStr,
      answer: answerStr,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
    };
    calcHistory.unshift(entry);
    if (calcHistory.length > 30) calcHistory.pop();
    localStorage.setItem("esp_history", JSON.stringify(calcHistory));
    updateHistoryBadge();
    renderHistory();
  }

  function renderHistory() {
    const container = document.getElementById("historyListContainer");
    if (!container) return;

    if (calcHistory.length === 0) {
      container.innerHTML = `<p class="muted-text">${t("hist_empty")}</p>`;
      return;
    }

    container.innerHTML = calcHistory.map((item) => `
      <div class="history-item">
        <div>
          <div class="history-meta">${item.type} • ${item.time}</div>
          <div class="history-eq">${item.equation}</div>
        </div>
        <div class="history-ans">${item.answer}</div>
      </div>
    `).join("");
  }

  document.getElementById("clearHistoryBtn").addEventListener("click", () => {
    calcHistory = [];
    localStorage.removeItem("esp_history");
    updateHistoryBadge();
    renderHistory();
  });

  /* -------------------- ៥. ការភ្ជាប់សមីការដឺក្រេទី២ (Quadratic UI) -------------------- */
  const qA = document.getElementById("quadA");
  const qB = document.getElementById("quadB");
  const qC = document.getElementById("quadC");
  const quadLivePreview = document.getElementById("quadLivePreview");
  const quadResultContainer = document.getElementById("quadResultContainer");
  const quadConditionBadge = document.getElementById("quadConditionBadge");

  function updateQuadPreview() {
    const a = parseFloat(qA.value) || 0;
    const b = parseFloat(qB.value) || 0;
    const c = parseFloat(qC.value) || 0;
    quadLivePreview.textContent = `${a}x² + (${b})x + (${c}) = 0`;
  }

  function renderResultHTML(resultObj) {
    return `
      <div class="result-summary-box">
        <h4>${t("final_answer_label")}</h4>
        <div class="roots-display">${resultObj.finalAnswer}</div>
      </div>
      ${resultObj.steps.map((s) => `
        <div class="step-card">
          <div class="step-title">${s.title}</div>
          <div class="step-detail">${s.detail}</div>
        </div>
      `).join("")}
    `;
  }

  function executeQuadraticSolve(recordHistory = true) {
    updateQuadPreview();
    const a = parseFloat(qA.value) || 0;
    const b = parseFloat(qB.value) || 0;
    const c = parseFloat(qC.value) || 0;
    const res = solveQuadraticEquation(a, b, c, window.currentLang);
    quadConditionBadge.textContent = res.conditionLabel;
    quadResultContainer.innerHTML = renderResultHTML(res);
    if (recordHistory) {
      saveToHistory("Quadratic (x²)", `${a}x² + (${b})x + (${c}) = 0`, res.finalAnswer);
    }
  }

  [qA, qB, qC].forEach((inp) => inp.addEventListener("input", updateQuadPreview));
  document.getElementById("solveQuadBtn").addEventListener("click", () => executeQuadraticSolve(true));

  document.getElementById("clearQuadBtn").addEventListener("click", () => {
    qA.value = "";
    qB.value = "";
    qC.value = "";
    updateQuadPreview();
    quadConditionBadge.textContent = "Ready";
    quadResultContainer.innerHTML = "";
  });

  document.querySelectorAll(".quad-example").forEach((chip) => {
    chip.addEventListener("click", () => {
      qA.value = chip.getAttribute("data-a");
      qB.value = chip.getAttribute("data-b");
      qC.value = chip.getAttribute("data-c");
      executeQuadraticSolve(true);
    });
  });

  /* -------------------- ៦. ការភ្ជាប់សមីការដឺក្រេទី៣ (Cubic UI) -------------------- */
  const cA = document.getElementById("cubicA");
  const cB = document.getElementById("cubicB");
  const cC = document.getElementById("cubicC");
  const cD = document.getElementById("cubicD");
  const cubicLivePreview = document.getElementById("cubicLivePreview");
  const cubicResultContainer = document.getElementById("cubicResultContainer");
  const cubicConditionBadge = document.getElementById("cubicConditionBadge");

  function updateCubicPreview() {
    const a = parseFloat(cA.value) || 0;
    const b = parseFloat(cB.value) || 0;
    const c = parseFloat(cC.value) || 0;
    const d = parseFloat(cD.value) || 0;
    cubicLivePreview.textContent = `${a}x³ + (${b})x² + (${c})x + (${d}) = 0`;
  }

  function executeCubicSolve(recordHistory = true) {
    updateCubicPreview();
    const a = parseFloat(cA.value) || 0;
    const b = parseFloat(cB.value) || 0;
    const c = parseFloat(cC.value) || 0;
    const d = parseFloat(cD.value) || 0;
    const res = solveCubicEquation(a, b, c, d, window.currentLang);
    cubicConditionBadge.textContent = res.conditionLabel;
    cubicResultContainer.innerHTML = renderResultHTML(res);
    if (recordHistory) {
      saveToHistory("Cubic (x³)", `${a}x³ + (${b})x² + (${c})x + (${d}) = 0`, res.finalAnswer);
    }
  }

  [cA, cB, cC, cD].forEach((inp) => inp.addEventListener("input", updateCubicPreview));
  document.getElementById("solveCubicBtn").addEventListener("click", () => executeCubicSolve(true));

  document.getElementById("clearCubicBtn").addEventListener("click", () => {
    cA.value = "";
    cB.value = "";
    cC.value = "";
    cD.value = "";
    updateCubicPreview();
    cubicConditionBadge.textContent = "Ready";
    cubicResultContainer.innerHTML = "";
  });

  document.querySelectorAll(".cubic-example").forEach((chip) => {
    chip.addEventListener("click", () => {
      cA.value = chip.getAttribute("data-a");
      cB.value = chip.getAttribute("data-b");
      cC.value = chip.getAttribute("data-c");
      cD.value = chip.getAttribute("data-d");
      executeCubicSolve(true);
    });
  });

  /* -------------------- ៧. មុខងារប្តូរភាសា ខ្មែរ 🇰🇭 / អង់គ្លេស 🇬🇧 -------------------- */
  document.getElementById("langToggleBtn").addEventListener("click", () => {
    const nextLang = window.currentLang === "km" ? "en" : "km";
    applyLanguage(nextLang);
    renderTeamMembers();
    renderHistory();
    executeQuadraticSolve(false);
    executeCubicSolve(false);
  });

  /* -------------------- ៨. ចាប់ផ្តើមដំណើរការដំបូង (Initial Boot) -------------------- */
  applyLanguage(window.currentLang);
  renderTeamMembers();
  updateHistoryBadge();
  renderHistory();
  executeQuadraticSolve(false);
  executeCubicSolve(false);
});
