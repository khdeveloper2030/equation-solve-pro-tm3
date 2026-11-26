/* ==========================================================================
   ម៉ាស៊ីនគណនាសមីការដឺក្រេទី២ (Quadratic Equation Solver Engine)
   ដោះស្រាយសមីការទម្រង់ ax² + bx + c = 0 គ្រប់ករណីទាំងអស់
   ========================================================================== */

const EPSILON = 1e-10;

/**
 * អនុគមន៍បង្គត់លេខឱ្យស្អាត និងលុបលេខសូន្យលើស (Format Clean Number)
 */
function fmtNum(n) {
  if (Math.abs(n) < EPSILON) return "0";
  const rounded = Math.round(n * 1e6) / 1e6;
  return Number.isInteger(rounded) ? rounded.toString() : rounded.toFixed(4).replace(/\.?0+$/, "");
}

/**
 * អនុគមន៍ដោះស្រាយសមីការដឺក្រេទី២ ax² + bx + c = 0
 * គាំទ្រ៖ ២ ឫសពិត, ឫសឌុប, ២ ឫសកុំផ្លិច, សមីការដឺក្រេទី១, គ្មានចម្លើយ និងចម្លើយរាប់មិនអស់
 */
function solveQuadraticEquation(a, b, c, lang = "km") {
  const isKm = lang === "km";
  const steps = [];
  let conditionLabel = "";
  let finalAnswer = "";

  // ជំហានទី ១៖ បង្ហាញសមីការដើម
  steps.push({
    title: isKm ? "ជំហានទី ១៖ កំណត់មេគុណនៃសមីការ" : "Step 1: Identify Coefficients",
    detail: isKm
      ? `សមីការ៖ (${fmtNum(a)})x² + (${fmtNum(b)})x + (${fmtNum(c)}) = 0
មេគុណ៖ a = ${fmtNum(a)}, b = ${fmtNum(b)}, c = ${fmtNum(c)}`
      : `Equation: (${fmtNum(a)})x² + (${fmtNum(b)})x + (${fmtNum(c)}) = 0
Coefficients: a = ${fmtNum(a)}, b = ${fmtNum(b)}, c = ${fmtNum(c)}`
  });

  // ករណីទី ១៖ មេគុណ a = 0 (មិនមែនជាសមីការដឺក្រេទី២ទេ)
  if (Math.abs(a) < EPSILON) {
    // ករណីរង ១.១៖ a = 0 និង b = 0
    if (Math.abs(b) < EPSILON) {
      if (Math.abs(c) < EPSILON) {
        conditionLabel = isKm ? "ចម្លើយរាប់មិនអស់ (0 = 0)" : "Infinitely Many Solutions";
        finalAnswer = isKm ? "∀x ∈ ℝ (គ្រប់ចំនួនពិត x សុទ្ធតែជាឫស)" : "∀x ∈ ℝ (All real numbers)";
        steps.push({
          title: isKm ? "ជំហានទី ២៖ ពិនិត្យករណីពិសេស a = 0, b = 0, c = 0" : "Step 2: Degenerate Identity Case",
          detail: isKm
            ? "ដោយសារ a = 0, b = 0 និង c = 0 សមីការក្លាយជា 0 = 0 ដែលពិតជានិច្ចចំពោះគ្រប់តម្លៃ x។"
            : "Since a = 0, b = 0, and c = 0, the equation reduces to 0 = 0, which holds true for any x."
        });
      } else {
        conditionLabel = isKm ? "គ្មានចម្លើយ (Contradiction)" : "No Solution";
        finalAnswer = isKm ? "S = ∅ (គ្មានឫស)" : "S = ∅ (No solution)";
        steps.push({
          title: isKm ? "ជំហានទី ២៖ ពិនិត្យករណីពិសេស a = 0, b = 0, c ≠ 0" : "Step 2: Degenerate Contradiction Case",
          detail: isKm
            ? `ដោយសារ a = 0 និង b = 0 សមីការក្លាយជា ${fmtNum(c)} = 0 ដែលមិនពិត។ ដូច្នេះសមីការគ្មានចម្លើយ។`
            : `Since a = 0 and b = 0, the equation becomes ${fmtNum(c)} = 0, which is false. Hence no solution exists.`
        });
      }
      return { conditionLabel, finalAnswer, steps };
    }

    // ករណីរង ១.២៖ សមីការដឺក្រេទី១ bx + c = 0
    const x = -c / b;
    conditionLabel = isKm ? "សមីការដឺក្រេទី១ (Linear)" : "Linear Equation (a = 0)";
    finalAnswer = `x = ${fmtNum(x)}`;
    steps.push({
      title: isKm ? "ជំហានទី ២៖ ដោះស្រាយសមីការដឺក្រេទី១" : "Step 2: Solve Linear Equation",
      detail: isKm
        ? `ដោយសារ a = 0 សមីការក្លាយជា៖ ${fmtNum(b)}x + (${fmtNum(c)}) = 0
រូបមន្ត៖ x = -c / b = -(${fmtNum(c)}) / ${fmtNum(b)} = ${fmtNum(x)}`
        : `Since a = 0, the equation reduces to: ${fmtNum(b)}x + (${fmtNum(c)}) = 0
Formula: x = -c / b = -(${fmtNum(c)}) / ${fmtNum(b)} = ${fmtNum(x)}`
    });
    return { conditionLabel, finalAnswer, steps };
  }

  // ករណីទី ២៖ សមីការដឺក្រេទី២ពេញលេញ (a ≠ 0) -> គណនាឌីសគ្រីមីណង់ Δ = b² - 4ac
  const delta = b * b - 4 * a * c;
  steps.push({
    title: isKm ? "ជំហានទី ២៖ គណនាឌីសគ្រីមីណង់ (Δ)" : "Step 2: Calculate Discriminant (Δ)",
    detail: isKm
      ? `រូបមន្ត៖ Δ = b² - 4ac
ជំនួសលេខ៖ Δ = (${fmtNum(b)})² - 4(${fmtNum(a)})(${fmtNum(c)}) = ${fmtNum(b * b)} - (${fmtNum(4 * a * c)}) = ${fmtNum(delta)}`
      : `Formula: Δ = b² - 4ac
Substitution: Δ = (${fmtNum(b)})² - 4(${fmtNum(a)})(${fmtNum(c)}) = ${fmtNum(b * b)} - (${fmtNum(4 * a * c)}) = ${fmtNum(delta)}`
  });

  if (delta > EPSILON) {
    // ២ ឫសពិតផ្សេងគ្នា
    const sqrtDelta = Math.sqrt(delta);
    const x1 = (-b - sqrtDelta) / (2 * a);
    const x2 = (-b + sqrtDelta) / (2 * a);
    conditionLabel = isKm ? "Δ > 0 • ២ ឫសពិតផ្សេងគ្នា" : "Δ > 0 • 2 Distinct Real Roots";
    finalAnswer = `x₁ = ${fmtNum(x1)}   ,   x₂ = ${fmtNum(x2)}`;
    steps.push({
      title: isKm ? "ជំហានទី ៣៖ គណនាឫសពិតទាំងពីរ (Δ > 0)" : "Step 3: Compute Two Real Roots (Δ > 0)",
      detail: isKm
        ? `រូបមន្ត៖ x₁,₂ = (-b ± √Δ) / (2a) ដែល √Δ = √${fmtNum(delta)} ≈ ${fmtNum(sqrtDelta)}
x₁ = (${fmtNum(-b)} - ${fmtNum(sqrtDelta)}) / ${fmtNum(2 * a)} = ${fmtNum(x1)}
x₂ = (${fmtNum(-b)} + ${fmtNum(sqrtDelta)}) / ${fmtNum(2 * a)} = ${fmtNum(x2)}`
        : `Formula: x₁,₂ = (-b ± √Δ) / (2a) with √Δ = √${fmtNum(delta)} ≈ ${fmtNum(sqrtDelta)}
x₁ = (${fmtNum(-b)} - ${fmtNum(sqrtDelta)}) / ${fmtNum(2 * a)} = ${fmtNum(x1)}
x₂ = (${fmtNum(-b)} + ${fmtNum(sqrtDelta)}) / ${fmtNum(2 * a)} = ${fmtNum(x2)}`
    });
  } else if (Math.abs(delta) <= EPSILON) {
    // ឫសឌុប
    const x0 = -b / (2 * a);
    conditionLabel = isKm ? "Δ = 0 • ឫសឌុប" : "Δ = 0 • Repeated Root";
    finalAnswer = `x₁ = x₂ = ${fmtNum(x0)}`;
    steps.push({
      title: isKm ? "ជំហានទី ៣៖ គណនាឫសឌុប (Δ = 0)" : "Step 3: Compute Repeated Root (Δ = 0)",
      detail: isKm
        ? `ដោយសារ Δ = 0 សមីការមានឫសឌុបមួយ៖
រូបមន្ត៖ x₁ = x₂ = -b / (2a) = ${fmtNum(-b)} / ${fmtNum(2 * a)} = ${fmtNum(x0)}`
        : `Since Δ = 0, there is one repeated real root:
Formula: x₁ = x₂ = -b / (2a) = ${fmtNum(-b)} / ${fmtNum(2 * a)} = ${fmtNum(x0)}`
    });
  } else {
    // ឫសកុំផ្លិចឆ្លាស់គ្នាពីរ
    const realPart = -b / (2 * a);
    const imagPart = Math.abs(Math.sqrt(-delta) / (2 * a));
    conditionLabel = isKm ? "Δ < 0 • ២ ឫសកុំផ្លិច" : "Δ < 0 • 2 Complex Roots";
    finalAnswer = `x₁ = ${fmtNum(realPart)} - ${fmtNum(imagPart)}i   ,   x₂ = ${fmtNum(realPart)} + ${fmtNum(imagPart)}i`;
    steps.push({
      title: isKm ? "ជំហានទី ៣៖ គណនាឫសកុំផ្លិចឆ្លាស់គ្នា (Δ < 0)" : "Step 3: Compute Complex Conjugate Roots (Δ < 0)",
      detail: isKm
        ? `ដោយសារ Δ = ${fmtNum(delta)} < 0 សមីការមានឫសកុំផ្លិចឆ្លាស់គ្នាពីរ៖
រូបមន្ត៖ x₁,₂ = (-b ± i√|Δ|) / (2a)
ផ្នែកពិត = ${fmtNum(realPart)} , ផ្នែកនិម្មិត = ±${fmtNum(imagPart)}i`
        : `Since Δ = ${fmtNum(delta)} < 0, the roots are complex conjugates:
Formula: x₁,₂ = (-b ± i√|Δ|) / (2a)
Real part = ${fmtNum(realPart)} , Imaginary part = ±${fmtNum(imagPart)}i`
    });
  }

  return { conditionLabel, finalAnswer, steps };
}
