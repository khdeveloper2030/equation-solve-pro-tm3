/* ==========================================================================
   ឯកសារគ្រប់គ្រងភាសាខ្មែរ 🇰🇭 និងអង់គ្លេស 🇬🇧 (Bilingual Language Module)
   រក្សាទុកឃ្លាបកប្រែទាំងអស់សម្រាប់ចំណុចប្រទាក់ និងជំហានដោះស្រាយសមីការ
   ========================================================================== */

const TRANSLATIONS = {
  km: {
    nav_home: "ទំព័រដើម",
    nav_quadratic: "សមីការដឺក្រេទី២",
    nav_cubic: "សមីការដឺក្រេទី៣",
    nav_formulas: "រូបមន្តគណិតវិទ្យា",
    nav_history: "ប្រវត្តិគណនា",
    nav_team: "ក្រុមការងារ",
    nav_about: "អំពីកម្មវិធី",
    sidebar_footer: "គម្រោងបទបង្ហាញវិទ្យាល័យ • v2.0",
    theme_dark: "ងងឹត",
    theme_light: "ភ្លឺ",
    hero_tag: "ឧបករណ៍គណិតវិទ្យាឆ្លាតវៃ",
    hero_title: "ដោះស្រាយសមីការដឺក្រេទី២ និងទី៣ មួយជំហានម្តងៗ",
    hero_desc: "គណនាឫសពិត ឫសកុំផ្លិច ឫសឌុប និងករណីពិសេសទាំងអស់ជាមួយការបង្ហាញរូបមន្ត និងដំណោះស្រាយលម្អិតជាភាសាខ្មែរ និងអង់គ្លេស។",
    btn_start_quad: "ដោះស្រាយសមីការដឺក្រេទី២",
    btn_start_cubic: "ដោះស្រាយសមីការដឺក្រេទី៣",
    feat_1_title: "គ្រប់លក្ខខណ្ឌទាំងអស់",
    feat_1_desc: "គាំទ្រឫសពិត ឫសកុំផ្លិច ឫសឌុប មេគុណសូន្យ សមីការដឺក្រេទី១ គ្មានចម្លើយ និងចម្លើយរាប់មិនអស់។",
    feat_2_title: "ដំណោះស្រាយលម្អិត",
    feat_2_desc: "បង្ហាញរូបមន្ត ការជំនួសលេខ ឌីសគ្រីមីណង់ (Δ) និងលទ្ធផលចុងក្រោយយ៉ាងច្បាស់លាស់។",
    feat_3_title: "ភាសាខ្មែរ 🇰🇭 និងអង់គ្លេស 🇬🇧",
    feat_3_desc: "ប្តូរភាសាទូទាំងកម្មវិធីភ្លាមៗ រួមទាំងការពន្យល់ជំហានដោះស្រាយសមីការផងដែរ។",
    quad_heading: "សមីការដឺក្រេទី២ (Quadratic Equation)",
    cubic_heading: "សមីការដឺក្រេទី៣ (Cubic Equation)",
    btn_calculate: "គណនា",
    btn_clear: "សម្អាត",
    examples_label: "ឧទាហរណ៍សាកល្បង (Examples):",
    ex_q_real: "២ ឫសពិត (Δ > 0)",
    ex_q_double: "ឫសឌុប (Δ = 0)",
    ex_q_complex: "ឫសកុំផ្លិច (Δ < 0)",
    ex_q_linear: "ដឺក្រេទី១ (a = 0)",
    ex_q_nosol: "គ្មានចម្លើយ (0 = 5)",
    ex_q_inf: "ចម្លើយរាប់មិនអស់ (0 = 0)",
    ex_c_3real: "៣ ឫសពិតផ្សេងគ្នា",
    ex_c_triple: "ឫសបីជាន់ (x=1)",
    ex_c_double: "ឫសឌុប & ១ ឫសពិត",
    ex_c_complex: "១ ឫសពិត & ២ កុំផ្លិច",
    ex_c_quad: "ដឺក្រេទី២ (a = 0)",
    ex_c_linear: "ដឺក្រេទី១ (a=b=0)",
    ex_c_nosol: "គ្មានចម្លើយ (0 = 7)",
    ex_c_inf: "ចម្លើយរាប់មិនអស់",
    result_heading: "លទ្ធផល និងជំហានដោះស្រាយ",
    final_answer_label: "ចម្លើយចុងក្រោយ (Final Answer)",
    form_banner_title: "សង្ខេបរូបមន្តដោះស្រាយសមីការ",
    form_banner_sub: "មូលដ្ឋានគ្រឹះពីជគណិតសម្រាប់ថ្នាក់វិទ្យាល័យ",
    form_quad_title: "១. សមីការដឺក្រេទី២ (ax² + bx + c = 0, a ≠ 0)",
    form_q_gt0: "មានឫសពិតពីរផ្សេងគ្នា៖ x₁,₂ = (-b ± √Δ) / (2a)",
    form_q_eq0: "មានឫសឌុបមួយ៖ x₁ = x₂ = -b / (2a)",
    form_q_lt0: "មានឫសកុំផ្លិចឆ្លាស់គ្នាពីរ៖ x₁,₂ = (-b ± i√|Δ|) / (2a)",
    form_cubic_title: "២. សមីការដឺក្រេទី៣ (ax³ + bx² + cx + d = 0, a ≠ 0)",
    form_c_cases: "ប្រើវិធីសាស្ត្រ Cardano នៅពេល Δ₀ ≥ 0 និងរូបមន្តត្រីកោណមាត្រនៅពេល Δ₀ < 0 (៣ ឫសពិត)។",
    form_special_title: "៣. ករណីពិសេស (Degenerate Cases)",
    form_sp_1: "ប្រសិនបើ a = 0 និង b ≠ 0 ៖ សមីការក្លាយជាដឺក្រេទី១ x = -c / b។",
    form_sp_2: "ប្រសិនបើ a = 0, b = 0 និង c ≠ 0 ៖ សមីការគ្មានចម្លើយ (0 = c មិនពិត)។",
    form_sp_3: "ប្រសិនបើ a = 0, b = 0 និង c = 0 ៖ សមីការមានចម្លើយរាប់មិនអស់ (∀x ∈ ℝ)។",
    hist_title: "ប្រវត្តិនៃការគណនាសមីការ",
    hist_sub: "រក្សាទុកដោយស្វ័យប្រវត្តិក្នុងកម្មវិធីរុករករបស់អ្នក",
    btn_clear_history: "លុបប្រវត្តិទាំងអស់",
    hist_empty: "មិនទាន់មានប្រវត្តិគណនានៅឡើយទេ។ សូមសាកល្បងដោះស្រាយសមីការ!",
    team_title: "សមាជិកក្រុមអភិវឌ្ឍន៍គម្រោង",
    team_sub: "ប្រធានក្រុម ១ រូប និងសមាជិក ៤ រូប សម្រាប់គម្រោងបទបង្ហាញវិទ្យាល័យ",
    about_title: "អំពី Equation Solver Pro",
    about_p1: "Equation Solver Pro គឺជាកម្មវិធីគេហទំព័រអប់រំដែលបង្កើតឡើងដោយប្រើបច្ចេកវិទ្យា HTML5, CSS3 និង Vanilla JavaScript សុទ្ធសាធ ដើម្បីជួយសិស្សានុសិស្សវិទ្យាល័យក្នុងការសិក្សា និងផ្ទៀងផ្ទាត់ការដោះស្រាយសមីការដឺក្រេទី២ និងទី៣។",
    about_tech_label: "បច្ចេកវិទ្យា៖",
    about_accuracy_label: "ភាពជាក់លាក់គណិតវិទ្យា៖",
    about_accuracy_val: "គាំទ្រគ្រប់ករណី ឫសពិត ឫសកុំផ្លិច និងករណីមេគុណសូន្យ",
    about_offline_label: "ដំណើរការ៖",
    about_offline_val: "ដំណើរការ 100% លើម៉ាស៊ីនផ្ទាល់ (Offline Ready)"
  },
  en: {
    nav_home: "Home",
    nav_quadratic: "Quadratic Solver",
    nav_cubic: "Cubic Solver",
    nav_formulas: "Formulas",
    nav_history: "History",
    nav_team: "Team Work",
    nav_about: "About",
    sidebar_footer: "High School Presentation Project • v2.0",
    theme_dark: "Dark",
    theme_light: "Light",
    hero_tag: "Smart Mathematical Tool",
    hero_title: "Solve Quadratic & Cubic Equations Step-by-Step",
    hero_desc: "Compute real roots, complex roots, repeated roots, and all degenerate cases with clear formulas and detailed steps in Khmer and English.",
    btn_start_quad: "Solve Quadratic Equation",
    btn_start_cubic: "Solve Cubic Equation",
    feat_1_title: "All Mathematical Conditions",
    feat_1_desc: "Supports real roots, complex conjugate roots, repeated roots, zero coefficients, linear equations, no solution, and infinite solutions.",
    feat_2_title: "Step-by-Step Breakdown",
    feat_2_desc: "Displays exact formulas, coefficient substitutions, discriminants (Δ), and final roots clearly.",
    feat_3_title: "Khmer 🇰🇭 & English 🇬🇧",
    feat_3_desc: "Switch the entire application language instantly, including full mathematical explanations.",
    quad_heading: "Quadratic Equation Solver",
    cubic_heading: "Cubic Equation Solver",
    btn_calculate: "Calculate",
    btn_clear: "Clear",
    examples_label: "Quick Examples (All Cases):",
    ex_q_real: "2 Real Roots (Δ > 0)",
    ex_q_double: "Repeated Root (Δ = 0)",
    ex_q_complex: "Complex Roots (Δ < 0)",
    ex_q_linear: "Linear (a = 0)",
    ex_q_nosol: "No Solution (0 = 5)",
    ex_q_inf: "Infinite Solutions (0 = 0)",
    ex_c_3real: "3 Distinct Real Roots",
    ex_c_triple: "Triple Root (x = 1)",
    ex_c_double: "Double & 1 Real Root",
    ex_c_complex: "1 Real & 2 Complex",
    ex_c_quad: "Quadratic (a = 0)",
    ex_c_linear: "Linear (a = b = 0)",
    ex_c_nosol: "No Solution (0 = 7)",
    ex_c_inf: "Infinite Solutions",
    result_heading: "Solution & Step-by-Step Calculation",
    final_answer_label: "Final Answer",
    form_banner_title: "Algebraic Equation Formulas",
    form_banner_sub: "Essential High School Algebra Reference Guide",
    form_quad_title: "1. Quadratic Equation (ax² + bx + c = 0, a ≠ 0)",
    form_q_gt0: "Two distinct real roots: x₁,₂ = (-b ± √Δ) / (2a)",
    form_q_eq0: "One repeated real root: x₁ = x₂ = -b / (2a)",
    form_q_lt0: "Two complex conjugate roots: x₁,₂ = (-b ± i√|Δ|) / (2a)",
    form_cubic_title: "2. Cubic Equation (ax³ + bx² + cx + d = 0, a ≠ 0)",
    form_c_cases: "Uses Cardano's formula when Δ₀ ≥ 0 and trigonometric solution when Δ₀ < 0 (3 real roots).",
    form_special_title: "3. Special & Degenerate Cases",
    form_sp_1: "If a = 0 and b ≠ 0: Reduces to linear equation x = -c / b.",
    form_sp_2: "If a = 0, b = 0, and c ≠ 0: Contradiction (0 = c), No Solution.",
    form_sp_3: "If a = 0, b = 0, and c = 0: Identity (0 = 0), Infinitely Many Solutions.",
    hist_title: "Calculation History",
    hist_sub: "Automatically saved in your browser storage",
    btn_clear_history: "Clear All History",
    hist_empty: "No calculations recorded yet. Try solving an equation!",
    team_title: "Project Development Team",
    team_sub: "1 Team Leader and 4 Members for High School Presentation",
    about_title: "About Equation Solver Pro",
    about_p1: "Equation Solver Pro is an educational web application built with pure HTML5, CSS3, and Vanilla JavaScript to help high-school students learn and verify quadratic and cubic equation solutions.",
    about_tech_label: "Technology Stack:",
    about_accuracy_label: "Mathematical Coverage:",
    about_accuracy_val: "All real, complex, repeated, and degenerate zero-coefficient cases",
    about_offline_label: "Execution:",
    about_offline_val: "Runs 100% locally in any modern browser"
  }
};

// អថេរសកលរក្សាភាសាបច្ចុប្បន្ន ('km' ឬ 'en')
window.currentLang = localStorage.getItem("esp_lang") || "km";

/**
 * អនុគមន៍ទាញយកអត្ថបទតាមពាក្យគន្លឹះ និងភាសាបច្ចុប្បន្ន
 */
function t(key) {
  return (TRANSLATIONS[window.currentLang] && TRANSLATIONS[window.currentLang][key]) || key;
}

/**
 * អនុគមន៍ធ្វើបច្ចុប្បន្នភាពអត្ថបទទូទាំងគេហទំព័រនៅពេលប្តូរភាសា
 */
function applyLanguage(lang) {
  window.currentLang = lang;
  localStorage.setItem("esp_lang", lang);
  document.documentElement.lang = lang;

  // បកប្រែធាតុទាំងអស់ដែលមាន attribute data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // ធ្វើបច្ចុប្បន្នភាពប៊ូតុងភាសា និងពន្លឺ
  const langFlag = document.getElementById("langFlag");
  const langText = document.getElementById("langText");
  if (langFlag && langText) {
    langFlag.textContent = lang === "km" ? "🇰🇭" : "🇬🇧";
    langText.textContent = lang === "km" ? "ខ្មែរ" : "English";
  }

  const isDark = document.documentElement.getAttribute("data-theme") === "dark";
  const themeText = document.getElementById("themeText");
  if (themeText) {
    themeText.textContent = isDark ? t("theme_light") : t("theme_dark");
  }

  // ធ្វើបច្ចុប្បន្នភាពចំណងជើងទំព័របច្ចុប្បន្ន
  const activeNav = document.querySelector(".nav-item.active");
  if (activeNav) {
    const pageKey = "nav_" + activeNav.getAttribute("data-page");
    const pageTitleEl = document.getElementById("pageTitle");
    if (pageTitleEl) pageTitleEl.textContent = t(pageKey);
  }
}
