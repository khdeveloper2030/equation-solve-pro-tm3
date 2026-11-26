/* ==========================================================================
   ម៉ាស៊ីនគណនាសមីការដឺក្រេទី៣ (Cubic Equation Solver Engine)
   ដោះស្រាយសមីការទម្រង់ ax³ + bx² + cx + d = 0 គ្រប់ករណីទាំងអស់
   ========================================================================== */

/**
 * អនុគមន៍គណនាឫសគូបនៃចំនួនពិត (Real Cube Root)
 */
function cbrtReal(x) {
  return x < 0 ? -Math.pow(-x, 1 / 3) : Math.pow(x, 1 / 3);
}

/**
 * អនុគមន៍ដោះស្រាយសមីការដឺក្រេទី៣ ax³ + bx² + cx + d = 0
 * គាំទ្រ៖ ៣ ឫសពិតផ្សេងគ្នា, ឫសឌុប, ឫសបីជាន់, ១ ឫសពិត និង ២ ឫសកុំផ្លិច, និងករណី a = 0
 */
function solveCubicEquation(a, b, c, d, lang = "km") {
  const isKm = lang === "km";
  const steps = [];

  // ជំហានទី ១៖ បង្ហាញសមីការដើម
  steps.push({
    title: isKm ? "ជំហានទី ១៖ កំណត់មេគុណនៃសមីការដឺក្រេទី៣" : "Step 1: Identify Cubic Coefficients",
    detail: isKm
      ? `សមីការ៖ (${fmtNum(a)})x³ + (${fmtNum(b)})x² + (${fmtNum(c)})x + (${fmtNum(d)}) = 0
មេគុណ៖ a = ${fmtNum(a)}, b = ${fmtNum(b)}, c = ${fmtNum(c)}, d = ${fmtNum(d)}`
      : `Equation: (${fmtNum(a)})x³ + (${fmtNum(b)})x² + (${fmtNum(c)})x + (${fmtNum(d)}) = 0
Coefficients: a = ${fmtNum(a)}, b = ${fmtNum(b)}, c = ${fmtNum(c)}, d = ${fmtNum(d)}`
  });

  // ប្រសិនបើ a = 0 បង្វែរទៅដោះស្រាយសមីការដឺក្រេទី២ bx² + cx + d = 0
  if (Math.abs(a) < EPSILON) {
    steps.push({
      title: isKm ? "ជំហានទី ២៖ បង្វែរទៅសមីការដឺក្រេទី២ (a = 0)" : "Step 2: Reduce to Quadratic Equation (a = 0)",
      detail: isKm
        ? "ដោយសារមេគុណ a = 0 សមីការថយមកត្រឹមដឺក្រេទី២៖ bx² + cx + d = 0"
        : "Since a = 0, the cubic term vanishes, reducing to bx² + cx + d = 0."
    });
    const quadRes = solveQuadraticEquation(b, c, d, lang);
    // បន្ថែមជំហានបន្តពីសមីការដឺក្រេទី២
    quadRes.steps.slice(1).forEach((st, idx) => {
      steps.push({
        title: (isKm ? `ជំហានទី ${idx + 3}៖ ` : `Step ${idx + 3}: `) + st.title.replace(/^.*?៖\s*|^Step \d+:\s*/, ""),
        detail: st.detail
      });
    });
    return {
      conditionLabel: quadRes.conditionLabel,
      finalAnswer: quadRes.finalAnswer,
      steps
    };
  }

  // បម្លែងទៅជាសមីការដឺក្រេទី៣បង្រួម (Depressed Cubic): t³ + pt + q = 0 ដែល x = t - b/(3a)
  const shift = -b / (3 * a);
  const p = (3 * a * c - b * b) / (3 * a * a);
  const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);

  steps.push({
    title: isKm ? "ជំហានទី ២៖ បម្លែងទៅទម្រង់បង្រួម (Depressed Cubic)" : "Step 2: Convert to Depressed Cubic (t³ + pt + q = 0)",
    detail: isKm
      ? `តាង x = t - b/(3a) = t + (${fmtNum(shift)})
p = (3ac - b²)/(3a²) = ${fmtNum(p)}
q = (2b³ - 9abc + 27a²d)/(27a³) = ${fmtNum(q)}`
      : `Substitute x = t - b/(3a) = t + (${fmtNum(shift)})
p = (3ac - b²)/(3a²) = ${fmtNum(p)}
q = (2b³ - 9abc + 27a²d)/(27a³) = ${fmtNum(q)}`
  });

  // គណនាឌីសគ្រីមីណង់ Cardano Δ₀ = (q/2)² + (p/3)³
  const delta0 = (q / 2) * (q / 2) + (p / 3) * (p / 3) * (p / 3);

  steps.push({
    title: isKm ? "ជំហានទី ៣៖ គណនាឌីសគ្រីមីណង់ Cardano (Δ₀)" : "Step 3: Compute Cardano Discriminant (Δ₀)",
    detail: isKm
      ? `រូបមន្ត៖ Δ₀ = (q/2)² + (p/3)³ = ${fmtNum(delta0)}`
      : `Formula: Δ₀ = (q/2)² + (p/3)³ = ${fmtNum(delta0)}`
  });

  let conditionLabel = "";
  let finalAnswer = "";

  if (Math.abs(delta0) <= EPSILON) {
    // ករណី Δ₀ = 0 (ឫសបីជាន់ ឬ ឫសឌុប និង ១ ឫសពិត)
    if (Math.abs(p) <= EPSILON && Math.abs(q) <= EPSILON) {
      const x1 = shift;
      conditionLabel = isKm ? "Δ₀ = 0 • ឫសបីជាន់ (Triple Root)" : "Δ₀ = 0 • Triple Real Root";
      finalAnswer = `x₁ = x₂ = x₃ = ${fmtNum(x1)}`;
      steps.push({
        title: isKm ? "ជំហានទី ៤៖ រកឫសបីជាន់ (p = q = 0)" : "Step 4: Find Triple Root (p = q = 0)",
        detail: isKm
          ? `ដោយសារ p = 0 និង q = 0 នោះ t = 0 នាំឱ្យ x₁ = x₂ = x₃ = ${fmtNum(x1)}`
          : `Since p = 0 and q = 0, t = 0, giving triple root x₁ = x₂ = x₃ = ${fmtNum(x1)}`
      });
    } else {
      const t1 = (3 * q) / p;
      const t2 = (-3 * q) / (2 * p);
      const x1 = t1 + shift;
      const x2 = t2 + shift;
      conditionLabel = isKm ? "Δ₀ = 0 • ឫសឌុប & ១ ឫសពិត" : "Δ₀ = 0 • Double & 1 Real Root";
      finalAnswer = `x₁ = ${fmtNum(x1)}   ,   x₂ = x₃ = ${fmtNum(x2)}`;
      steps.push({
        title: isKm ? "ជំហានទី ៤៖ រកឫសឌុប និងឫសពិតមួយ" : "Step 4: Compute Repeated & Simple Real Roots",
        detail: isKm
          ? `t₁ = 3q/p = ${fmtNum(t1)} ⇒ x₁ = ${fmtNum(x1)}
t₂ = t₃ = -3q/(2p) = ${fmtNum(t2)} ⇒ x₂ = x₃ = ${fmtNum(x2)}`
          : `t₁ = 3q/p = ${fmtNum(t1)} ⇒ x₁ = ${fmtNum(x1)}
t₂ = t₃ = -3q/(2p) = ${fmtNum(t2)} ⇒ x₂ = x₃ = ${fmtNum(x2)}`
      });
    }
  } else if (delta0 > EPSILON) {
    // ករណី Δ₀ > 0៖ មាន ១ ឫសពិត និង ២ ឫសកុំផ្លិចឆ្លាស់គ្នា (រូបមន្ត Cardano)
    const sqrtD = Math.sqrt(delta0);
    const u = cbrtReal(-q / 2 + sqrtD);
    const v = cbrtReal(-q / 2 - sqrtD);
    const t1 = u + v;
    const x1 = t1 + shift;

    const realPart = -(u + v) / 2 + shift;
    const imagPart = Math.abs(((u - v) * Math.sqrt(3)) / 2);

    conditionLabel = isKm ? "Δ₀ > 0 • ១ ឫសពិត & ២ កុំផ្លិច" : "Δ₀ > 0 • 1 Real & 2 Complex Roots";
    finalAnswer = `x₁ = ${fmtNum(x1)}  |  x₂,₃ = ${fmtNum(realPart)} ± ${fmtNum(imagPart)}i`;
    steps.push({
      title: isKm ? "ជំហានទី ៤៖ អនុវត្តរូបមន្ត Cardano" : "Step 4: Apply Cardano's Formula",
      detail: isKm
        ? `u = ∛(-q/2 + √Δ₀) = ${fmtNum(u)}
v = ∛(-q/2 - √Δ₀) = ${fmtNum(v)}
ឫសពិត៖ x₁ = u + v - b/(3a) = ${fmtNum(x1)}
ឫសកុំផ្លិច៖ x₂,₃ = ${fmtNum(realPart)} ± ${fmtNum(imagPart)}i`
        : `u = ∛(-q/2 + √Δ₀) = ${fmtNum(u)}
v = ∛(-q/2 - √Δ₀) = ${fmtNum(v)}
Real root: x₁ = u + v - b/(3a) = ${fmtNum(x1)}
Complex roots: x₂,₃ = ${fmtNum(realPart)} ± ${fmtNum(imagPart)}i`
    });
  } else {
    // ករណី Δ₀ < 0៖ មាន ៣ ឫសពិតផ្សេងគ្នា (វិធីសាស្ត្រត្រីកោណមាត្រ Vieta)
    const r = 2 * Math.sqrt(-p / 3);
    const cosPhi = Math.max(-1, Math.min(1, (-q / 2) / Math.sqrt(-Math.pow(p / 3, 3))));
    const phi = Math.acos(cosPhi);

    const roots = [0, 1, 2].map((k) => r * Math.cos((phi + 2 * Math.PI * k) / 3) + shift);
    roots.sort((m, n) => m - n);

    conditionLabel = isKm ? "Δ₀ < 0 • ៣ ឫសពិតផ្សេងគ្នា" : "Δ₀ < 0 • 3 Distinct Real Roots";
    finalAnswer = `x₁ = ${fmtNum(roots[0])}   ,   x₂ = ${fmtNum(roots[1])}   ,   x₃ = ${fmtNum(roots[2])}`;
    steps.push({
      title: isKm ? "ជំហានទី ៤៖ ដោះស្រាយតាមរូបមន្តត្រីកោណមាត្រ (Δ₀ < 0)" : "Step 4: Trigonometric Solution (Casus Irreducibilis)",
      detail: isKm
        ? `ដោយសារ Δ₀ < 0 សមីការមានឫសពិតបីផ្សេងគ្នា៖
xₖ = 2√(-p/3)·cos((φ + 2kπ)/3) - b/(3a) សម្រាប់ k = 0, 1, 2
លទ្ធផល៖ x₁ = ${fmtNum(roots[0])}, x₂ = ${fmtNum(roots[1])}, x₃ = ${fmtNum(roots[2])}`
        : `Since Δ₀ < 0, there are 3 distinct real roots:
xₖ = 2√(-p/3)·cos((φ + 2kπ)/3) - b/(3a) for k = 0, 1, 2
Roots: x₁ = ${fmtNum(roots[0])}, x₂ = ${fmtNum(roots[1])}, x₃ = ${fmtNum(roots[2])}`
    });
  }

  return { conditionLabel, finalAnswer, steps };
}
