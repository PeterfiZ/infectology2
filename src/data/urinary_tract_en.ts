import { Category } from '../types';

export const urinaryTractEn: Category = {
  name: 'Urinary Tract Infections',
  icon: '🚽',
  color: '#3b82f6',
  didactics: {
    overview: 'Distinguish lower (usually without systemic signs) and upper (pyelonephritis, systemic signs) urinary tract infections. Lower UTIs are mostly ambulatory; upper UTIs often require broader work-up and sometimes hospitalization.',
    lower: 'Typical symptoms: dysuria (burning), urinary frequency, urgency, suprapubic discomfort, occasional hematuria. Vital signs usually normal.',
    upper: 'Systemic signs: fever (>38°C), chills, malaise; local: flank/CVA tenderness, nausea/vomiting. Labs: leukocytosis, elevated CRP, pyuria; obtain urine culture and consider blood cultures in febrile patients.',
    diagnostics: ['1) Focused history and vitals', '2) Urine dipstick and microscopy', '3) Urine culture if complicated/recurrent or before treatment when systemic signs present', '4) Blood tests (CBC, creatinine, CRP) and blood cultures if systemic', '5) Imaging (US/CT) if obstruction, persistent symptoms or abscess suspected'],
    red_flags: ['Sepsis signs (hypotension, altered mental status)', 'Rapidly rising creatinine or obstruction', 'Pregnancy with fever', 'Inability to tolerate oral intake (vomiting)', 'Immunosuppression'],
    special_populations: 'Elderly: often atypical (confusion, falls, functional decline) — low threshold for investigation. Children: fever may be the sole sign. Pregnancy: low threshold for treatment and follow-up due to higher risk of pyelonephritis.',
    teaching_tip: 'If urinary symptoms are present without systemic signs → think cystitis. Add fever and flank pain or abnormal vitals → suspect pyelonephritis and escalate evaluation and care.'
  },
  diseases: [
    {
      id: 'cystitis',
      name: 'Localised Urinary Tract Infection: Cystitis',
      pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negative', shape: 'rod' },
      epidemiology: {
        incidence: '50% of women at least once in their lifetime',
        risk_groups: ['Sexually active women', 'Postmenopause', 'Pregnancy', 'Diabetes', 'Catheter use'],
        seasonality: 'None',
        transmission: 'Ascending infection (perineal flora)'
      },
      pathomechanism: {
        steps: [
          'Colonization: Gut bacteria (mainly E. coli) colonize the periurethral area and vaginal introitus.',
          'Ascension: Bacteria ascend through the urethra into the bladder (shorter urethra in women predisposes).',
          'Adherence and Invasion: Bacteria adhere to the bladder urothelium using P-fimbriae, avoiding washout by urine, and then invade cells.',
          'Inflammation: Bacterial multiplication and toxins (e.g., hemolysin) trigger an inflammatory response, causing mucosal hyperemia, edema, and symptoms.'
        ],
        virulence_factors: ['P-fimbriae (adherence)', 'Hemolysin', 'Aerobactin (iron uptake)']
      },
      clinical: {
        incubation: 'Variable',
        onset: 'Sudden',
        symptoms: [
          { name: 'Dysuria', description: 'Burning, stinging sensation during urination caused by irritation of the inflamed urethra and bladder neck.', severity: 'moderate' },
          { name: 'Frequency', description: 'Frequent voiding of small amounts of urine due to bladder wall irritation and reduced capacity.', severity: 'moderate' },
          { name: 'Urgency', description: 'Sudden, compelling urge to urinate that is difficult to defer (risk of urge incontinence).', severity: 'moderate' },
          { name: 'Suprapubic pain', description: 'Pressure or pain felt in the lower abdomen, above the pubic bone.', severity: 'mild' },
          { name: 'Hematuria', description: 'Macroscopic bloody urine (approx. 30%), often at the end of urination (terminal hematuria), due to bleeding from the hyperemic mucosa.', severity: 'mild' },
          { name: 'Atypical elderly presentation', description: 'Older patients may have fewer urinary symptoms and may present with confusion, delirium, or falls.', severity: 'mild' }
        ],
        physical_exam: [
          'Suprapubic tenderness',
          'Fever is usually ABSENT (if present, suspect pyelonephritis!)',
          'Flank is not tender',
          'Absence of vaginal discharge (increases probability of cystitis)',
          'In elderly or diabetic patients exam may be non-specific and fever may be absent'
        ],
        complications: ['Ascending pyelonephritis', 'Recurrent cystitis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine dipstick', finding: 'Leukocyte esterase+, Nitrite+', interpretation: 'High positive predictive value' },
          { test: 'Urine sediment', finding: 'Pyuria (>10 WBC/field)', interpretation: 'Common, but not specific' }
        ],
        imaging: [
          { test: 'Not necessary', finding: 'Only in atypical cases', interpretation: 'Not performed for standard cystitis' }
        ],
        microbiology: [
          { test: 'Urine culture', finding: '≥10^3 CFU/ml', significance: 'Recommended only in complicated, recurrent, or atypical cases (EAU 2025)' }
        ]
      },
      differential: [
        { disease: 'Vaginitis', distinguishing: 'Discharge, itching, external dysuria' },
        { disease: 'Urethritis (STD)', distinguishing: 'New partner, gradual onset, pyuria with sterile culture' },
        { disease: 'Interstitial cystitis', distinguishing: 'Chronic, negative culture' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: 'Single dose', note: 'First choice (EAU 2025)' },
            { drug: 'Nitrofurantoin', dose: '2x100mg PO', duration: '5 days', note: 'First choice (EAU 2025)' },
            { drug: 'Pivmecillinam', dose: '3x400mg PO', duration: '3-5 days', note: 'First choice (EAU 2025)' }
          ],
          inpatient: [
            { drug: 'Does not require hospital treatment', dose: '-', duration: '-', note: 'Except complications' }
          ]
        },
        targeted: 'Based on culture. Fluoroquinolones (Ciprofloxacin, Levofloxacin) are NOT recommended empirically for uncomplicated cystitis!',
        supportive: ['Ample fluid intake', 'Frequent urination', 'NSAID for pain relief'],
        prevention: ['Behavioral: Ample fluid intake, postcoital voiding', 'Non-antibiotic (EAU 2025): Topical estrogen (postmenopause), OM-89 immunostimulation, D-mannose, Bladder instillation', 'Antibiotic prophylaxis (last resort): Nitrofurantoin 50-100mg at night or Fosfomycin 3g every 10 days']
      },
      prognosis: {
        mortality: 'Zero',
        factors: 'Tendency to recur'
      }
    },
    {
      id: 'pyelonephritis',
      name: 'Localised Urinary Tract Infection: Pyelonephritis',
      pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (80%)', gram: 'Gram-negative', shape: 'rod' },
      epidemiology: {
        incidence: 'Common complication of untreated cystitis',
        risk_groups: ['Women', 'Pregnancy', 'Obstruction (stone, prostate)', 'Renal developmental anomaly', 'Diabetes'],
        seasonality: 'None',
        transmission: 'Ascending infection (95%), rarely hematogenous'
      },
      pathomechanism: {
        steps: [
          'Ascending Infection: Bacteria ascend from the bladder up the ureter to the renal pelvis (often facilitated by vesicoureteral reflux).',
          'Parenchymal Invasion: Pathogens invade the renal parenchyma, primarily the medulla.',
          'Inflammatory Response: A vigorous acute inflammatory reaction (neutrophil infiltration) is triggered against the bacteria, causing tissue edema, microabscesses, and tubular damage.',
          'Systemic Effect: Inflammatory mediators entering the circulation cause fever and systemic symptoms.'
        ],
        virulence_factors: ['P-fimbriae', 'Endotoxin', 'Capsule']
      },
      clinical: {
        incubation: 'Days after cystitis',
        onset: 'Sudden',
        symptoms: [
          { name: 'Fever and Chills', description: 'High fever (>38°C) with shaking chills is the hallmark of renal parenchymal infection and indicates a systemic inflammatory response.', severity: 'severe' },
          { name: 'Flank Pain', description: 'Dull, constant pain in the kidney area caused by stretching of the renal capsule; it may be unilateral or bilateral.', severity: 'severe' },
          { name: 'Gastrointestinal Symptoms', description: 'Nausea, vomiting, and appetite loss are common because renal inflammation can trigger visceral reflexes.', severity: 'moderate' },
          { name: 'Lower Urinary Tract Symptoms', description: 'Dysuria and frequency often precede fever but may be absent in 30-50% of cases; absence of bladder symptoms does not exclude an upper UTI.', severity: 'moderate' },
          { name: 'Atypical Presentation', description: 'Elderly or immunocompromised patients may present primarily with confusion, weakness, or functional decline rather than classic symptoms.', severity: 'moderate' }
        ],
        physical_exam: [
          'Costovertebral angle tenderness (Giordano\'s sign)',
          'Fever and tachycardia',
          'Abdominal tenderness may be present but is less specific',
          'The exam can be subtle in older or immunocompromised patients'
        ],
        complications: ['Renal abscess', 'Perinephric abscess', 'Urosepsis', 'Papillary necrosis', 'Chronic renal failure (recurrent)']
      },
      diagnostics: {
        laboratory: [
          { test: 'CBC', finding: 'Leukocytosis, left shift', interpretation: 'Systemic inflammation' },
          { test: 'CRP/PCT', finding: 'Significantly elevated', interpretation: 'Bacterial infection' },
          { test: 'Urinalysis', finding: 'Leukocyturia, bacteriuria, white blood cell casts', interpretation: 'Upper urinary tract origin' },
          { test: 'Renal function', finding: 'Creatinine may be elevated', interpretation: 'Acute kidney injury' }
        ],
        imaging: [
          { modality: 'Abdominal/pelvic CT', finding: 'Renal enlargement, perinephric fluid, wedge-shaped hypodensity', significance: 'Gold standard to rule out complications (EAU 2025)' },
          { modality: 'Renal US', finding: 'Obstruction, abscess', significance: 'Radiation-free alternative' }
        ],
        microbiology: [
          { test: 'Urine culture', finding: '≥10^4 CFU/ml', significance: 'Always take! (EAU 2025)' },
          { test: 'Blood culture', finding: 'Positive', significance: 'Recommended on hospital admission' }
        ]
      },
      differential: [
        { disease: 'Kidney stone', distinguishing: 'Colicky pain, no fever (if no infection), hematuria dominates' },
        { disease: 'Acute abdominal conditions', distinguishing: 'Appendicitis, cholecystitis (abdominal status, US)' },
        { disease: 'Pelvic inflammatory disease (PID)', distinguishing: 'Gynecological exam, discharge' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxime axetil', dose: '2x500mg PO', duration: '7 days', note: 'no activity against Enterococcus' },
            { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '5 days', note: 'Only an alternative if E. coli resistance <10% (EAU 2025)' },
            { drug: 'Ceftibuten/Cefixime', dose: 'PO', duration: '10 days', note: 'If quinolone cannot be given (less effective)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '1x1-2g IV', duration: '10-14 days', note: 'First choice' },
            { drug: 'Ciprofloxacin', dose: '2x400mg IV', duration: '10-14 days', note: 'Alternative if E. coli resistance <10% (EAU 2025)' }
          ]
        },
        targeted: 'Based on antibiogram. ESBL is common!',
        supportive: ['Fluid replacement', 'Antipyretics', 'Resolution of obstruction (catheter, stent)'],
        prevention: ['Proper treatment of cystitis', 'Correction of anatomical abnormalities']
      },
      prognosis: {
        mortality: 'Low (<1%), but 10-20% in urosepsis',
        factors: 'Old age, obstruction, resistant pathogen'
      }
    },
    {
      id: 'complicated_uti',
      name: 'Systemic Urinary Tract Infection',
      pathogen: { type: 'Bacterium', name: '<i>E. coli, Enterococcus, Pseudomonas, Klebsiella, Proteus</i>', gram: 'Mixed', shape: 'Mixed' },
      epidemiology: {
        incidence: 'Common in hospital settings and urological patients',
        risk_groups: ['Catheter users', 'Men', 'Pregnant women', 'Anatomical/functional abnormality', 'Renal failure', 'Immunosuppression'],
        seasonality: 'None',
        transmission: 'Ascending, catheter-associated, hematogenous'
      },
      pathomechanism: {
        steps: [
          'Predisposing Factor: Anatomical (e.g., stricture, stone) or functional (e.g., neurogenic bladder) abnormality, or presence of a foreign body (catheter) impedes urine flow and bacterial washout.',
          'Biofilm Formation: Bacteria (e.g., Proteus, Pseudomonas) form a biofilm layer on the catheter or stone, protecting them from antibiotics and the immune system.',
          'Persistence: Infection is difficult to eradicate; selection of resistant strains and recurrent infection are common.'
        ],
        virulence_factors: ['Biofilm', 'Multidrug resistance', 'Urease (Proteus)']
      },
      clinical: {
        incubation: 'Variable',
        onset: 'Variable (can be oligosymptomatic)',
        symptoms: [
          { name: 'Lower Urinary Tract Symptoms', description: 'Dysuria, frequency, and urgency may occur but are not always dominant; the infection can involve multiple segments of the urinary tract.', severity: 'moderate' },
          { name: 'Upper Urinary Tract/Local Pain', description: 'Suprapubic or flank pain may be present, especially when obstruction or renal involvement exists.', severity: 'moderate' },
          { name: 'Systemic Inflammation', description: 'Fever, chills and tachycardia point to a larger pathogen burden and a systemic host response.', severity: 'severe' },
          { name: 'Sepsis Signs', description: 'Hypotension, tachypnea, altered mental status, or oliguria may develop in urosepsis and require urgent source control.', severity: 'severe' },
          { name: 'Oligosymptomatic', description: 'Catheterized, neurogenic bladder, or immunosuppressed patients often lack classic symptoms, so lab and vital sign monitoring is essential.', severity: 'mild' }
        ],
        physical_exam: [
          'Often unremarkable, especially in catheterized patients',
          'Suprapubic or flank tenderness',
          'Presence of a catheter or other urinary device',
          'Fever or hypothermia'
        ],
        complications: ['Urosepsis', 'Renal abscess', 'Renal failure', 'Recurrence', 'Catheter obstruction']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine culture', finding: 'Women: ≥10^5 CFU/ml, Men: ≥10^4 CFU/ml', interpretation: 'Diagnostic thresholds (EAU 2025)' },
          { test: 'Catheter urine', finding: '≥10^4 CFU/ml', interpretation: 'Significant bacteriuria' },
          { test: 'Renal function', finding: 'Check creatinine', interpretation: 'Obstruction/damage' }
        ],
        imaging: [
          { modality: 'CT urography', finding: 'Anatomical/functional abnormality', significance: 'MANDATORY to clarify predisposing factor' }
        ],
        microbiology: [
          { test: 'Culture + Susceptibility', finding: 'Essential', significance: 'Basis for targeted therapy' }
        ]
      },
      differential: [
        { disease: 'Uncomplicated UTI', distinguishing: 'No risk factors, no systemic signs' },
        { disease: 'Prostatitis', distinguishing: 'Rektal examination' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxime axetil', dose: '2x500mg PO', duration: '7-14 days', note: 'no activity against Enterococcus' },
            { drug: 'Ciprofloxacin', dose: '2x500-750mg PO', duration: '7-14 days', note: 'Only if no fluoroquinolone treatment in the last 6 months and E. coli resistance <10% (EAU 2025)' },
            { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '7-14 days', note: 'Alternative if E. coli resistance <10% (EAU 2025)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '1x1-2g IV', duration: '10-14 days', note: 'In severe cases' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '10-14 days', note: 'Suspicion of Pseudomonas/previous AB treatment' },
            { drug: 'Carbapenem (Meropenem)', dose: '3x1g IV', duration: '10-14 days', note: 'ESBL risk or septic shock' }
          ]
        },
        targeted: 'Correction based on culture. Resolution of obstruction (catheter change, stent, nephrostomy) is essential!',
        supportive: ['Fluid replacement', 'Antipyretics'],
        prevention: ['Catheter care (closed system, prompt removal)', 'Elimination of obstruction', 'Avoidance of treating asymptomatic bacteriuria']
      },
      prognosis: {
        mortality: '10-30% in urosepsis',
        factors: 'Underlying disease, resistance, source control'
      }
    },
    {
      id: 'prostatitis',
      name: 'Bacterial Prostatitis',
      pathogen: { type: 'Bacterium', name: '<i>E. coli, Klebsiella, Proteus, Enterococcus, Pseudomonas</i>', gram: 'Mixed', shape: 'Mixed' },
      epidemiology: {
        incidence: '50% of men experience symptoms in their lifetime',
        risk_groups: ['Young/middle-aged men', 'Catheterization', 'Urological procedure (biopsy)', 'HIV', 'Diabetes'],
        seasonality: 'None',
        transmission: 'Ascending (reflux), hematogenous, lymphogenic, direct (biopsy)'
      },
      pathomechanism: {
        steps: [
          'Route of Infection: Most commonly, bacteria enter the prostatic ducts via intraprostatic reflux of infected urine.',
          'Inflammation: In acute cases, edema and microabscesses develop in the glands, causing swelling and tension of the prostate.',
          'Chronicity: Bacteria can form biofilms on prostatic stones or in ductal channels, maintaining recurrent infections.'
        ],
        virulence_factors: ['Biofilm', 'Anatomical location (poor AB penetration)']
      },
      clinical: {
        incubation: 'Variable',
        onset: 'Acute (ABP) or Chronic (CBP)',
        symptoms: [
          { name: 'Acute: Systemic Symptoms', description: 'Sudden onset of high fever, chills, myalgia, malaise (flu-like onset).', severity: 'severe' },
          { name: 'Pain', description: 'Characteristic perineal, rectal, lower abdominal pain, radiating to testes and penis.', severity: 'moderate' },
          { name: 'LUTS (Lower Urinary Tract Symptoms)', description: 'Marked dysuria, frequency, urgent need to void.', severity: 'moderate' },
          { name: 'Obstruction', description: 'The swollen prostate compresses the urethra, which can cause difficulty voiding, weak stream, or complete urinary retention.', severity: 'severe' },
          { name: 'Urinary retention', description: 'Severe obstruction may lead to bladder overdistension and acute urinary retention.', severity: 'severe' },
          { name: 'Chronic Symptoms', description: 'Milder, recurrent complaints: pelvic discomfort, recurrent urinary tract infections, painful ejaculation.', severity: 'mild' }
        ],
        physical_exam: [
          'Digital rectal exam (DRE):',
          'Acute: Swollen, warm, EXTREMELY tender prostate (Massage FORBIDDEN - risk of bacteremia!)',
          'Chronic: May be normal or slightly tender, not swollen',
          'Distended bladder on exam if urinary retention is present'
        ],
        complications: ['Prostate abscess', 'Urosepsis', 'Chronicity', 'Epididymitis', 'Urinary retention', 'Sexual dysfunction']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinalysis', finding: 'Pyuria, bacteriuria', interpretation: 'Positive' },
          { test: 'CBC/CRP', finding: 'Elevated (Acute)', interpretation: 'Systemic inflammation' },
          { test: 'PSA', finding: 'Elevated', interpretation: 'Due to inflammation (not for cancer diagnosis in acute phase!)' }
        ],
        imaging: [
          { modality: 'Transrectal US (TRUS)', finding: 'Abscess (hypoechoic area)', significance: 'Only if no improvement on treatment or suspicion of abscess' }
        ],
        microbiology: [
          { test: 'Acute: Urine culture', finding: 'Midstream urine', significance: 'Prostate massage FORBIDDEN!' },
          { test: 'Chronic: Meares-Stamey test', finding: '4-glass test or 2-glass test (pre/post massage)', significance: 'Gold standard (EAU 2025)' }
        ]
      },
      differential: [
        { disease: 'Cystitis', distinguishing: 'No fever, no prostate tenderness' },
        { disease: 'BPH', distinguishing: 'No signs of infection, slow progression' },
        { disease: 'Chronic pelvic pain syndrome (CPPS)', distinguishing: 'Negative culture, chronic pain' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Levofloxacin', dose: '1x500-750mg PO', duration: '2-4 weeks (Acute), 4-6 weeks (Chronic)', note: 'EAU 2025: First choice (good penetration)' },
            { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '2-4 weeks (Acute), 4-6 weeks (Chronic)', note: 'EAU 2025: First choice' },
            { drug: 'Cotrimoxazole', dose: '2x960mg PO', duration: '4-6 weeks', note: 'Alternative' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '1-2g IV', duration: '14 days', note: 'In severe acute cases (then switch to PO)' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '', note: 'Urosepsis/suspicion of Pseudomonas' }
          ]
        },
        targeted: 'Fluoroquinolones (first choice in chronic). Macrolides (suspicion of Chlamydia). Fosfomycin (MDR - controversial penetration).',
        supportive: ['NSAID for pain relief', 'Alpha-blocker (Tamsulosin) to relieve symptoms', 'Suprapubic catheter (in retention, urethral should be avoided in acute inflammation!)'],
        prevention: ['Early treatment of UTIs', 'Prostate biopsy prophylaxis: Targeted (based on rectal swab) or Fosfomycin/Ceftriaxon (Fluoroquinolones should be avoided!)']
      },
      prognosis: {
        mortality: 'Acute: low (but risk of sepsis); Chronic: impairs quality of life, difficult to cure (recurrence common)',
        factors: 'Biofilm, resistance, anatomy, transition to CPPS'
      }
    },
    {
      id: 'asymptomatic_bacteriuria',
      name: 'Asymptomatic Bacteriuria',
      pathogen: { type: 'Bacterium', name: '<i>E. coli, Enterococcus, GBS</i>, etc.', gram: 'Variable', shape: 'Variable' },
      epidemiology: {
        incidence: 'Common (women 3-5%, elderly 10-50%, catheterized 100%)',
        risk_groups: ['Elderly', 'Diabetes', 'Catheter use', 'Pregnancy'],
        seasonality: 'None',
        transmission: 'Endogenous colonization'
      },
      pathomechanism: {
        steps: [
          'Colonization: Bacteria colonize the urinary tract but lack virulence factors (e.g., specific fimbriae) that would trigger tissue invasion or inflammation.',
          'Commensalism: A state of equilibrium develops between the bacteria and the host, without symptoms.',
          'Protective Effect: Colonizing strains may compete with more virulent pathogens, potentially having a protective effect.'
        ],
        virulence_factors: ['Reduced virulence']
      },
      clinical: {
        incubation: '-',
        onset: 'Asymptomatic',
        symptoms: [
          { name: 'Asymptomatic', description: 'The patient has no urinary complaints (no dysuria, no fever, no pain). Bacteriuria is an incidental finding.', severity: 'mild' }
        ],
        physical_exam: [
          'Negative',
          'Cloudy/foul-smelling urine alone is not diagnostic and does not require treatment!',
          'No suprapubic or flank tenderness'
        ],
        complications: ['Unnecessary antibiotic treatment → resistance', 'Pyelonephritis (risk only in pregnancy/procedure)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine culture', finding: '≥10^5 CFU/ml (same strain)', interpretation: 'Women: 2 consecutive samples, Men: 1 sample (EAU 2025)' },
          { test: 'Catheterized sample', finding: '≥10^5 CFU/ml', interpretation: 'One sample is sufficient' },
          { test: 'Urine sediment', finding: 'Pyuria is often present', interpretation: 'Does NOT indicate treatment without symptoms!' }
        ],
        imaging: [
          { test: 'Not necessary', finding: 'No indication', interpretation: 'Not recommended for asymptomatic cases' }
        ],
        microbiology: [
          { test: 'Culture', finding: 'Positive', significance: 'Only if screening is indicated (e.g., pregnancy, urological procedure)' }
        ]
      },
      differential: [
        { disease: 'Cystitis', distinguishing: 'Presence of symptoms (dysuria, urgency)' },
        { disease: 'Contamination', distinguishing: 'Low colony count, mixed flora' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'NO treatment', dose: '-', duration: '-', note: 'General rule (not even in elderly, diabetics, catheterized patients!)' }
          ],
          inpatient: [
            { drug: 'NO treatment', dose: '-', duration: '-', note: 'Except indications' }
          ]
        },
        targeted: 'Only if indicated (Pregnancy, Urological procedure with mucosal injury). In pregnancy: Fosfomycin, Nitrofurantoin, Cephalosporin.',
        supportive: ['Education (urine smell/color does not warrant AB)'],
        prevention: ['Avoid unnecessary screening and treatment', 'Catheter care']
      },
      prognosis: {
        mortality: 'Does not increase mortality even if untreated',
        factors: '-'
      }
    }
  ]
};
