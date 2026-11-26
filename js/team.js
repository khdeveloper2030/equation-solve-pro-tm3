/* ==========================================================================
   ឯកសារគ្រប់គ្រងទិន្នន័យក្រុមការងារ (Team Work Data & Renderer)
   បង្ហាញប្រធានក្រុម ១ រូប និងសមាជិក ៤ រូប ជាមួយរូបភាព តួនាទី និងភារកិច្ច
   ========================================================================== */

const TEAM_MEMBERS = [
  {
    isLeader: true,
    image: "assets/images/leader.jpg",
    name_km: "សុខ វិសាល (Sok Visal)",
    name_en: "Sok Visal",
    role_km: "ប្រធានក្រុម (Team Leader)",
    role_en: "Team Leader",
    resp_km: "ដឹកនាំគម្រោង រៀបចំរចនាសម្ព័ន្ធកូដ ម៉ាស៊ីនគណនាសមីការដឺក្រេទី៣ និងការធ្វើបទបង្ហាញរួម។",
    resp_en: "Project management, software architecture, cubic solver algorithm, and final presentation lead."
  },
  {
    isLeader: false,
    image: "assets/images/member1.jpg",
    name_km: "ចាន់ សុភា (Chan Sophea)",
    name_en: "Chan Sophea",
    role_km: "សមាជិកទី ១ • អ្នកអភិវឌ្ឍគណិតវិទ្យា",
    role_en: "Member 1 • Math Algorithm Developer",
    resp_km: "សរសេរកូដដោះស្រាយសមីការដឺក្រេទី២ ផ្ទៀងផ្ទាត់ឌីសគ្រីមីណង់ និងករណីឫសកុំផ្លិច។",
    resp_en: "Implemented quadratic solver logic, discriminant checks, and complex root formatting."
  },
  {
    isLeader: false,
    image: "assets/images/member2.jpg",
    name_km: "លី ម៉ាលីស (Ly Malis)",
    name_en: "Ly Malis",
    role_km: "សមាជិកទី ២ • អ្នករចនា UI/UX",
    role_en: "Member 2 • UI/UX & Responsive Designer",
    resp_km: "រចនាផ្ទៃកម្មវិធី ពណ៌ Gradient មុខងារ Light/Dark Mode និងការបង្ហាញលើទូរស័ព្ទដៃ។",
    resp_en: "Designed modern interface, gradient themes, Light/Dark mode, and mobile responsiveness."
  },
  {
    isLeader: false,
    image: "assets/images/member3.jpg",
    name_km: "កែវ ដារ៉ា (Keo Dara)",
    name_en: "Keo Dara",
    role_km: "សមាជិកទី ៣ • អ្នកបកប្រែខ្មែរ-អង់គ្លេស",
    role_en: "Member 3 • Bilingual Content & Localization",
    resp_km: "រៀបចំប្រព័ន្ធប្តូរភាសាខ្មែរ-អង់គ្លេស ពាក្យបច្ចេកទេសគណិតវិទ្យា និងទំព័ររូបមន្ត។",
    resp_en: "Built Khmer-English translation dictionary, math terminology, and formula reference page."
  },
  {
    isLeader: false,
    image: "assets/images/member4.jpg",
    name_km: "ហេង រតនា (Heng Ratana)",
    name_en: "Heng Ratana",
    role_km: "សមាជិកទី ៤ • អ្នកសាកល្បង និងឯកសារ",
    role_en: "Member 4 • QA Testing & Documentation",
    resp_km: "ធ្វើតេស្តគ្រប់លក្ខខណ្ឌសមីការ រៀបចំប្រវត្តិគណនា និងសរសេរឯកសារណែនាំ README.md។",
    resp_en: "Tested all edge-case equations, built calculation history storage, and authored documentation."
  }
];

/**
 * អនុគមន៍បង្ហាញកាតសមាជិកក្រុមទាំង ៥ នាក់លើទំព័រ Team Work
 */
function renderTeamMembers() {
  const container = document.getElementById("teamGridContainer");
  if (!container) return;

  const isKm = window.currentLang === "km";
  container.innerHTML = TEAM_MEMBERS.map((m) => `
    <article class="team-card ${m.isLeader ? "leader-card" : ""}">
      <span class="role-badge">${isKm ? m.role_km : m.role_en}</span>
      <img src="${m.image}" alt="${isKm ? m.name_km : m.name_en}" class="team-avatar" />
      <h3 class="team-name">${isKm ? m.name_km : m.name_en}</h3>
      <p class="team-resp">${isKm ? m.resp_km : m.resp_en}</p>
    </article>
  `).join("");
}
