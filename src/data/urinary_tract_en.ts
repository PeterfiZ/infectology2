import { Category } from '../types';

export const urinaryTractEn: Category = {
  name: 'Urinary Tract Infections',
  icon: '🚽',
  color: '#3b82f6',
  didactics: {
    overview: 'According to EAU 2025/2026 Guidelines, UTIs are classified into: localized uncomplicated lower UTI (cystitis), localized uncomplicated upper UTI (pyelonephritis), systemic / complicated UTI (in patients with risk factors, anatomical/functional abnormalities, or devices), bacterial prostatitis (acute and chronic), and asymptomatic bacteriuria (ASB).',
    lower: 'Lower UTI (Cystitis): Acute dysuria, frequency, urgency, suprapubic discomfort WITHOUT systemic symptoms (fever, flank pain). Routine urine culture is NOT required according to EAU 2025/2026.',
    upper: 'Upper UTI (Pyelonephritis): Fever (>38°C), chills, flank/CVA pain, Giordano sign, nausea/vomiting. Urine culture mandatory; imaging (CT/US) indicated if fever persists for 48-72h under treatment.',
    diagnostics: [
      '1) Evaluation of history and clinical symptoms (presence/absence of fever and flank pain)',
      '2) Urine dipstick and sediment analysis (leukocyte esterase, nitrite, pyuria)',
      '3) Urine culture (mandatory for pyelonephritis, complicated cases, recurrences, or pregnancy)',
      '4) Inflammatory markers (CBC, CRP, procalcitonin) and renal function for systemic symptoms',
      '5) Abdominal/pelvic US or CT imaging in suspected obstruction, abscess, or treatment failure'
    ],
    red_flags: [
      'Signs of sepsis / septic shock (hypotension, tachycardia, tachypnea, confusion)',
      'Acute urinary tract obstruction (urolithiasis, BPH) with stasis',
      'Febrile pyelonephritis in pregnancy',
      'Inability to tolerate oral medication (severe vomiting)',
      'Immunosuppression or non-resolving fever >72h under targeted antibiotics'
    ],
    special_populations: 'Elderly: frequently present with atypical symptoms (delirium, confusion, falls) - low threshold for investigation, but DO NOT treat asymptomatic bacteriuria! Pregnancy: ASB must be routinely screened and treated. Men: UTIs should always be considered complicated or prostatitis.',
    teaching_tip: 'Empirical fluoroquinolones (Ciprofloxacin, Levofloxacin) for uncomplicated cystitis must be STRONGLY AVOIDED per EAU 2025/2026 guidelines due to serious collateral damage and resistance risks!'
  },
  diseases: [
    {
      id: 'cystitis',
      name: 'Acute Uncomplicated Cystitis',
      pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negative', shape: 'rod' },
      epidemiology: {
        incidence: '50% of women at least once in their lifetime; 20-30% experience recurrence',
        risk_groups: ['Sexually active premenopausal women', 'Postmenopausal women (estrogen deficiency)', 'Pregnancy', 'New sexual partner or spermicide use'],
        seasonality: 'None',
        transmission: 'Ascending infection from perineal and periurethral flora'
      },
      pathomechanism: {
        steps: [
          'Colonization: Uropathogenic gut bacteria (UPEC) colonize the periurethral area and vaginal introitus.',
          'Ascension: Bacteria ascend through the short female urethra into the urinary bladder.',
          'Adherence & Invasion: Bacteria adhere to uroplakin molecules on urothelial cells via type 1 and P fimbriae, forming intracellular bacterial communities (IBCs).',
          'Inflammatory Response: Bacteria and toxins trigger mucosal inflammation, hyperemia, edema, and bladder nerve irritation.'
        ],
        virulence_factors: ['Type 1 & P fimbriae (adherence)', 'Hemolysin (urothelial damage)', 'Aerobactin (iron acquisition)']
      },
      clinical: {
        incubation: '1-3 days',
        onset: 'Acute, sudden onset',
        symptoms: [
          { name: 'Dysuria', description: 'Burning, stinging sensation during and at the end of micturition.', severity: 'moderate' },
          { name: 'Frequency', description: 'Frequent voiding of small volumes due to increased bladder wall irritability.', severity: 'moderate' },
          { name: 'Urgency', description: 'Sudden, compelling urge to urinate that is difficult to defer.', severity: 'moderate' },
          { name: 'Suprapubic pain', description: 'Pressure, dull pain, or cramp-like discomfort above the pubic bone.', severity: 'mild' },
          { name: 'Terminal hematuria', description: 'Macroscopically bloody urine at the end of voiding (~30% of cases).', severity: 'mild' },
          { name: 'Absence of fever', description: 'Systemic signs (fever, chills, flank pain) are ABSENT. Presence of fever suggests upper UTI (pyelonephritis)!', severity: 'mild' }
        ],
        physical_exam: [
          'Suprapubic tenderness on lower abdominal palpation',
          'ABSENCE of fever and flank/CVA tenderness (Giordano sign negative)',
          'Absence of vaginal discharge (helps distinguish from vulvovaginitis)',
          'Normal vital signs'
        ],
        complications: ['Ascending acute pyelonephritis', 'Recurrent cystitis (rUTI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine dipstick', finding: 'Leukocyte esterase+, Nitrite+ (with Gram-negative rods)', interpretation: 'High positive predictive value (>90%) with typical symptoms' },
          { test: 'Urine sediment', finding: 'Pyuria (>10 WBC/HPF)', interpretation: 'Confirms lower urinary tract inflammation' }
        ],
        imaging: [
          { test: 'Imaging not indicated', finding: 'Not performed routinely', interpretation: 'Reserved for complications or atypical presentations' }
        ],
        microbiology: [
          { test: 'Urine culture (EAU 2025/2026)', finding: '≥10^3 CFU/ml uropathogen', significance: 'NOT routinely required for uncomplicated cystitis! Indications: suspected pyelonephritis, recurrence within 2-4 weeks, atypical symptoms, pregnancy.' }
        ]
      },
      differential: [
        { disease: 'Vaginitis / Vulvovaginitis', distinguishing: 'Vaginal discharge, pruritus, external dysuria' },
        { disease: 'Urethritis (STD)', distinguishing: 'Gradual onset, new sexual partner, urethral discharge, sterile pyuria' },
        { disease: 'Interstitial cystitis / Bladder pain syndrome', distinguishing: 'Chronic (>6 weeks) pain with full bladder, negative urine culture' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: 'Single dose', note: 'EAU 2025/2026 First-line choice' },
            { drug: 'Nitrofurantoin', dose: '2x100mg PO (macrocrystals)', duration: '5 days', note: 'EAU 2025/2026 First-line choice' },
            { drug: 'Pivmecillinam', dose: '3x400mg PO', duration: '3-5 days', note: 'EAU 2025/2026 First-line choice' },
            { drug: 'Nitroxoline', dose: '3x250mg PO', duration: '5 days', note: 'EAU 2025/2026 Accepted alternative' }
          ],
          inpatient: [
            { drug: 'Does not require hospital admission', dose: '-', duration: '-', note: 'Except for severe complications' }
          ]
        },
        targeted: 'Adjusted per culture. EAU 2025/2026 warning: Fluoroquinolones (Ciprofloxacin, Levofloxacin) and oral 3rd gen Cephalosporins MUST BE AVOIDED EMPIRICALLY in uncomplicated cystitis!',
        supportive: [
          'Non-pharmacological therapy: Generous daily fluid intake (at least 2.0-2.5 L/day for mechanical flushing of bacteria).',
          'Regular voiding, avoiding delayed micturition.',
          'Symptomatic pain relief: NSAIDs (e.g., Ibuprofen 3x400mg PO for 3-5 days) may be considered as monotherapy for mild symptoms in antimicrobial stewardship.',
          'Suprapubic warmth (warm water bottle) for spasm relief.',
          'Phytotherapy: Bearberry leaf extract (Uvae ursi folium) for short-term symptom relief.'
        ],
        prevention: [
          'Behavioral prevention: Generous hydration (>2L/day), postcoital voiding (within 15 min), avoiding spermicides/diaphragms, front-to-back wiping.',
          'EAU 2025/2026 Non-antibiotic Prophylaxis (Strongly recommended for rUTI):',
          '1) Topical / Local Estrogen Replacement (Estriol cream/pessary): Restores vaginal Lactobacillus flora in postmenopausal women (Strong EAU Recommendation!).',
          '2) Immunoactive Prophylaxis / Oral Immunostimulation (OM-89 / Uro-Vaxom®): 1 capsule/day PO for 3 months (Strong EAU Recommendation!).',
          '3) D-Mannose: 2g/day PO.',
          '4) Bladder Instillation (GAG Layer Replacement): Hyaluronic acid + chondroitin sulfate (HA/CS) in refractory rUTI.',
          '5) Methenamine hippurate: 2x1g/day PO in intact urinary anatomy.',
          '6) Probiotics: Vaginal Lactobacillus crispatus.',
          'Antibiotic Prophylaxis (Only as last resort): Postcoital (Nitrofurantoin 50mg or Fosfomycin 3g) or low-dose continuous prophylaxis for 3-6 months (Nitrofurantoin 50-100mg qhs or Fosfomycin 3g every 10 days).'
        ]
      },
      prognosis: {
        mortality: 'Zero mortality',
        factors: 'Tendency to recur (20-30% recurrence rate)'
      }
    },
    {
      id: 'pyelonephritis',
      name: 'Acute Uncomplicated Pyelonephritis',
      pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (75-80%)', gram: 'Gram-negative', shape: 'rod' },
      epidemiology: {
        incidence: '10-12 cases per 10,000 women/year; can occur as a complication of untreated cystitis',
        risk_groups: ['Young sexually active women', 'Pregnancy', 'Anatomical/functional urological anomalies', 'Diabetes mellitus'],
        seasonality: 'None',
        transmission: 'Ascending infection from bladder via ureter (95%), rarely hematogenous'
      },
      pathomechanism: {
        steps: [
          'Ascension: Pathogens ascend from the bladder up the ureter to the renal pelvis.',
          'Parenchymal Invasion: Pathogens invade renal parenchyma (primarily the medulla).',
          'Acute Inflammatory Response: Vigorous neutrophilic infiltration, interstitial edema, microabscess formation, and tubular necrosis.',
          'Systemic Translocation: Inflammatory mediators (IL-1, IL-6, TNF-alpha) and endotoxins enter the systemic circulation causing high fever and chills.'
        ],
        virulence_factors: ['P fimbriae (Pyelonephritis-associated pili)', 'Endotoxin (LPS)', 'Capsular antigen (K-antigen)']
      },
      clinical: {
        incubation: '1-3 days after cystitis',
        onset: 'Acute, sudden onset',
        symptoms: [
          { name: 'High fever and chills', description: 'Sudden spike of high fever (>38.5°C), shaking chills, and profuse sweating indicating parenchymal and bacteremic involvement.', severity: 'severe' },
          { name: 'Flank / CVA pain', description: 'Unilateral or bilateral dull, constant flank pain due to renal capsular stretching.', severity: 'severe' },
          { name: 'Gastrointestinal symptoms', description: 'Nausea, vomiting, anorexia due to reflex peritoneal and celiac irritation.', severity: 'moderate' },
          { name: 'Lower urinary tract symptoms', description: 'Dysuria, frequency, urgency may be present, but are absent in 30-50% of cases!', severity: 'moderate' },
          { name: 'Atypical presentation in elderly', description: 'Fever may be absent; delirium, confusion, weakness, and hypotension may dominate.', severity: 'severe' }
        ],
        physical_exam: [
          'Giordano sign positive: Costovertebral angle (CVA) tenderness on the affected side',
          'Fever (>38.5°C), tachycardia, systemic ill appearance',
          'Abdominal tenderness in the ipsilateral hypochondrium without rigidity',
          'Signs of dehydration'
        ],
        complications: ['Renal abscess / Perinephric abscess', 'Urosepsis and septic shock', 'Emphysematous pyelonephritis (in diabetics)', 'Papillary necrosis', 'Acute kidney injury (AKI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'CBC', finding: 'Marked leukocytosis with left shift', interpretation: 'Systemic bacterial infection' },
          { test: 'CRP and Procalcitonin (PCT)', finding: 'Significantly elevated (CRP >100 mg/L, PCT >0.5 ng/mL)', interpretation: 'Indicates parenchymal inflammation and sepsis risk' },
          { test: 'Renal function & Electrolytes', finding: 'Elevated creatinine, BUN', interpretation: 'Acute kidney injury or dehydration' },
          { test: 'Urine sediment', finding: 'Marked pyuria, WBC casts (pathognomonic for upper UTI!)', interpretation: 'Confirms renal parenchymal infection' }
        ],
        imaging: [
          { modality: 'Abdominal/pelvic CT (EAU 2025/2026)', finding: 'Wedge-shaped hypodensities, renal enlargement, perinephric fat stranding', significance: 'Gold standard imaging to rule out abscess or obstruction in non-responders after 48-72h of targeted antibiotics.' },
          { modality: 'Renal Ultrasound', finding: 'Obstruction (hydronephrosis), urolithiasis, abscess', significance: 'First-line radiation-free imaging' }
        ],
        microbiology: [
          { test: 'Urine culture (EAU 2025/2026)', finding: '≥10^4 CFU/ml uropathogen', significance: 'ALWAYS MANDATORY prior to initiating antibiotics!' },
          { test: 'Blood culture', finding: 'Bacteremia (~15-20% positive)', significance: 'Mandatory in hospitalized or septic patients (2 sets)' }
        ]
      },
      differential: [
        { disease: 'Urolithiasis (Kidney stone)', distinguishing: 'Colicky pain radiating to groin, absence of fever (unless obstructed), hematuria dominates' },
        { disease: 'Acute appendicitis / Cholecystitis', distinguishing: 'Abdominal exam, ultrasound findings, absence of pyuria' },
        { disease: 'Pelvic Inflammatory Disease (PID)', distinguishing: 'Gynecological tenderness, vaginal discharge' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxime axetil', dose: '2x500mg PO', duration: '7 days', note: 'EAU 2025/2026 First-line oral option' },
            { drug: 'Cefpodoxime proxetil', dose: '2x200mg PO', duration: '10 days', note: 'Oral 3rd gen cephalosporin alternative' },
            { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7 days', note: 'ONLY if local E. coli resistance is <10%! (EAU 2025/2026)' },
            { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '5 days', note: 'ONLY if local E. coli resistance is <10%! (EAU 2025/2026)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '1x1-2g IV', duration: '10-14 days', note: 'EAU 2025/2026 First-line IV choice' },
            { drug: 'Cefotaxime', dose: '3x2g IV', duration: '10-14 days', note: 'Parenteral alternative' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '10-14 days', note: 'If Pseudomonas or prior antibiotic exposure' },
            { drug: 'Gentamicin / Amikacin', dose: 'Single daily dose IV', duration: '3-5 days', note: 'Combination option for severe cases' }
          ]
        },
        targeted: 'Adjusted per antibiogram. When using oral beta-lactams in outpatients, an initial single IV dose of Ceftriaxone (1g) or Aminoglycoside in ED is recommended!',
        supportive: [
          'Non-pharmacological therapy: Rehydration (IV crystalloids or oral fluid) to preserve renal perfusion.',
          'Strict bed rest during febrile phase.',
          'Analgesia & Antipyresis: Paracetamol (3-4x500-1000mg PO/IV) or Metamizol (3-4x500-1000mg IV/PO). NSAIDs with caution under renal monitoring.',
          'Antiemetics (Metoclopramid 3x10mg IV/PO or Ondansetron) to ensure oral intake.',
          'Monitoring of vital signs (BP, heart rate, urine output) and renal panel.'
        ],
        prevention: [
          'Prompt, effective treatment of cystitis.',
          'EAU 2025/2026 non-antibiotic preventive measures.',
          'Correction of urological obstructions.'
        ]
      },
      prognosis: {
        mortality: '<1% with adequate therapy, but 10-20% in urosepsis or emphysematous cases',
        factors: 'Advanced age, diabetes, urological obstruction, MDR/ESBL pathogens'
      }
    },
    {
      id: 'complicated_uti',
      name: 'Systemic / Complicated Urinary Tract Infection',
      pathogen: { type: 'Bacterium', name: '<i>E. coli, Enterococcus faecalis, Pseudomonas aeruginosa, Klebsiella, Proteus, Enterobacter</i>', gram: 'Mixed', shape: 'Mixed' },
      epidemiology: {
        incidence: 'Common in nosocomial settings, urological and catheterized patients',
        risk_groups: ['Catheterized patients (CAUTI)', 'Men', 'Pregnant women', 'Neurogenic bladder / Obstruction', 'Renal failure / Transplant', 'Immunosuppression / Diabetes'],
        seasonality: 'None',
        transmission: 'Ascending, catheter-associated (biofilm), nosocomial'
      },
      pathomechanism: {
        steps: [
          'Predisposing Factors: Anatomical (stricture, stone, BPH) or functional voiding dysfunction or foreign body (catheter, stent) impairs urine drainage.',
          'Biofilm Formation: Bacteria (especially Proteus, Pseudomonas, Enterococci) form a resistant biofilm on foreign bodies.',
          'Parenchymal & Systemic Invasion: Bacteria enter tissues and bloodstream, triggering urosepsis.'
        ],
        virulence_factors: ['Biofilm formation', 'Multidrug resistance (ESBL, AmpC, Carbapenemase)', 'Urease production (Proteus - infective stones)']
      },
      clinical: {
        incubation: 'Variable',
        onset: 'Variable (oligosymptomatic to severe sepsis)',
        symptoms: [
          { name: 'Systemic inflammatory symptoms', description: 'High fever, chills, tachycardia, tachypnea.', severity: 'severe' },
          { name: 'Signs of urosepsis / Septic shock', description: 'Hypotension (BP <90 mmHg), oliguria (<0.5 ml/kg/h), confusion, elevated lactate – REQUIRES IMMEDIATE ACTION!', severity: 'severe' },
          { name: 'Flank / Suprapubic pain', description: 'May be present, but often absent in catheterized or neurogenic patients.', severity: 'moderate' },
          { name: 'Lower urinary tract symptoms', description: 'Dysuria, cloudy/foul urine, catheter obstruction.', severity: 'moderate' },
          { name: 'Oligosymptomatic in elderly', description: 'Delirium or hypotension as the sole presenting sign.', severity: 'severe' }
        ],
        physical_exam: [
          'Fever or hypothermia (<36°C), tachycardia, tachypnea',
          'Flank or suprapubic tenderness',
          'Indwelling catheter, cystostomy, or ureteral stent present',
          'Signs of shock (cool, mottled extremities, prolonged capillary refill)'
        ],
        complications: ['Urosepsis and septic shock (20-40% mortality)', 'Acute kidney injury (AKI)', 'Renal abscess', 'Pyonephrosis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine culture (EAU 2025/2026)', finding: 'Women: ≥10^5 CFU/ml, Men/Catheter: ≥10^4 CFU/ml', interpretation: 'ALWAYS MANDATORY prior to antibiotics!' },
          { test: 'Blood culture', finding: '2 sets mandatory in septic patients', interpretation: 'Detects bacteremia' },
          { test: 'Inflammatory & Renal panel', finding: 'Procalcitonin (PCT), CRP, WBC, creatinine, lactate, blood gas', interpretation: 'Monitors sepsis and organ dysfunction' }
        ],
        imaging: [
          { modality: 'CT urography / Pelvic CT (EAU 2025/2026)', finding: 'Obstruction, abscess, infective stone, emphysema', significance: 'MANDATORY for source control identification!' },
          { modality: 'Emergency Ultrasound', finding: 'Hydronephrosis, pyonephrosis', significance: 'Immediate evaluation of obstruction' }
        ],
        microbiology: [
          { test: 'Pathogen ID + Antibiogram', finding: 'MDR suspicion', significance: 'Basis for targeted therapy' }
        ]
      },
      differential: [
        { disease: 'Uncomplicated Pyelonephritis', distinguishing: 'No obstruction, no underlying risk factors' },
        { disease: 'Acute Prostatitis', distinguishing: 'Tender, swollen prostate on DRE' },
        { disease: 'Other sepsis sources', distinguishing: 'History, focal imaging' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxime axetil', dose: '2x500mg PO', duration: '7-14 days', note: 'Only for mild cases without systemic toxicity' },
            { drug: 'Ciprofloxacin / Levofloxacin', dose: 'PO', duration: '7-14 days', note: 'Only if no quinolones in last 6 months and resistance <10% (EAU 2025/2026)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '1x2g IV', duration: '7-14 days', note: 'First-line option' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '7-14 days', note: 'If Pseudomonas suspected' },
            { drug: 'Cefepime', dose: '2x2g IV', duration: '7-14 days', note: 'Pseudomonas and Enterobacteriaceae coverage' },
            { drug: 'Meropenem', dose: '3x1g IV', duration: '7-14 days', note: 'If ESBL risk or septic shock' },
            { drug: 'Ceftazidime/Avibactam or Cefiderocol', dose: 'IV', duration: '7-14 days', note: 'For multidrog-resistant (MDR) Gram-negative pathogens (EAU 2025/2026)' }
          ]
        },
        targeted: 'SOURCE CONTROL IMMEDIATELY: Decompression of obstructed kidney (percutaneous nephrostomy or DJ stent), immediate replacement or removal of catheter!',
        supportive: [
          'Non-pharmacological therapy / Source control: Aseptic catheter replacement (removing biofilm reservoir).',
          'Sepsis protocol: Aggressive IV fluid resuscitation (crystalloids 30 ml/kg within first 3 hours).',
          'Vasopressors (Norepinephrine) if MAP <65 mmHg despite fluids.',
          'Urological invasive intervention (abscess drainage, stone removal).',
          'ICU monitoring (urine output, lactate, blood gas).'
        ],
        prevention: [
          'Strict indication for urinary catheterization (prompt removal!).',
          'Closed catheter system, aseptic care.',
          'Avoiding treatment of asymptomatic bacteriuria.',
          'Surgical correction of anatomical obstacles.'
        ]
      },
      prognosis: {
        mortality: '20-40% in urosepsis and septic shock',
        factors: 'Advanced age, inadequate source control, MDR pathogens, severe comorbidities'
      }
    },
    {
      id: 'prostatitis',
      name: 'Acute and Chronic Bacterial Prostatitis',
      pathogen: { type: 'Bacterium', name: '<i>E. coli</i> (80%), <i>Klebsiella, Proteus, Pseudomonas aeruginosa, Enterococcus faecalis</i>', gram: 'Mixed', shape: 'Mixed' },
      epidemiology: {
        incidence: '10-15% of men experience prostatitis in their lifetime; 8% of urology visits',
        risk_groups: ['Young and middle-aged men', 'Post prostate biopsy', 'Catheterized patients', 'BPH / pelvic dysfunction', 'HIV / Diabetes'],
        seasonality: 'None',
        transmission: 'Ascending via intraprostatic reflux, direct inoculation after transrectal biopsy'
      },
      pathomechanism: {
        steps: [
          'Intraprostatic Reflux: Infected urine enters prostatic ducts under high voiding pressure.',
          'Acute Inflammation (NIH Type I - ABP): Stroma edema, neutrophilic infiltration, microabscesses cause prostate swelling and tension.',
          'Chronicity (NIH Type II - CBP): Bacteria form biofilms on prostatic calculi or ductal walls, leading to recurrent infections.'
        ],
        virulence_factors: ['Biofilm formation', 'Tissue barrier (prostate capsule & acidic pH impede antibiotic penetration)']
      },
      clinical: {
        incubation: '1-7 days',
        onset: 'Acute (ABP) sudden onset; Chronic (CBP) insidious, persistent (>3 months)',
        symptoms: [
          { name: 'Acute: Systemic fever symptoms', description: 'Sudden high fever, chills, myalgia, flu-like malaise.', severity: 'severe' },
          { name: 'Pelvic / Perineal pain', description: 'Pain in perineum, rectum, suprapubic area radiating to penis and testes.', severity: 'severe' },
          { name: 'LUTS and voiding difficulty', description: 'Marked dysuria, frequency, urgency, weak stream.', severity: 'moderate' },
          { name: 'Acute urinary retention', description: 'Swollen prostate causes complete obstruction with painful bladder distension.', severity: 'severe' },
          { name: 'Chronic: Recurrent complaints', description: 'Pelvic/perineal discomfort, painful ejaculation, recurrent UTIs with same strain.', severity: 'moderate' }
        ],
        physical_exam: [
          'Digital Rectal Examination (DRE):',
          'IN ACUTE PROSTATITIS: Prostate is swollen, hot, tender, EXTREMELY PAINFUL. PROSTATE MASSAGE IS STRONGLY FORBIDDEN IN ACUTE PROSTATITIS (Risk of bacteremia and urosepsis!)',
          'IN CHRONIC PROSTATITIS: Prostate may feel normal, indurated, or slightly tender.',
          'Suprapubic dullness in urinary retention.'
        ],
        complications: ['Prostatic abscess', 'Urosepsis', 'Acute urinary retention', 'Epididymo-orchitis', 'Transition to Chronic Pelvic Pain Syndrome (CPPS)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinalysis & Dipstick', finding: 'Pyuria, bacteriuria', interpretation: 'Confirms UTI' },
          { test: 'Inflammatory markers', finding: 'Leukocytosis, markedly elevated CRP', interpretation: 'Systemic inflammation' },
          { test: 'Serum PSA', finding: 'Markedly elevated (often >20-50 ng/ml)', interpretation: 'Reactive elevation! Not for cancer screening in acute phase; recheck 2-3 months after resolution.' }
        ],
        imaging: [
          { modality: 'Transrectal US (TRUS) / Pelvic MRI', finding: 'Prostatic abscess (hypoechoic/fluid cavity)', significance: 'Indicated if fever persists after 48-72h of targeted antibiotics.' }
        ],
        microbiology: [
          { test: 'Acute: Midstream urine culture (EAU 2025/2026)', finding: '≥10^4 CFU/ml uropathogen', significance: 'Obtained WITHOUT prostate massage!' },
          { test: 'Chronic: Meares-Stamey 4-glass or 2-glass test (EAU 2025/2026)', finding: '10-fold higher bacterial count in post-massage urine (VB3) or EPS compared to pre-massage urine (VB2)', significance: 'Gold standard for chronic bacterial prostatitis!' }
        ]
      },
      differential: [
        { disease: 'BPH (Benign Prostatic Hyperplasia)', distinguishing: 'Slow progression, no infection signs, no fever' },
        { disease: 'Chronic Pelvic Pain Syndrome (CPPS / NIH Type III)', distinguishing: 'Pain present, but urine and EPS cultures consistently negative' },
        { disease: 'Prostate carcinoma', distinguishing: 'No acute symptoms, hard nodule on DRE, culture negative' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fluoroquinolones (Levofloxacin / Ciprofloxacin)', dose: 'Levofloxacin 1x500mg PO or Ciprofloxacin 2x500mg PO', duration: 'Acute: 2-4 weeks, Chronic: 4-6 weeks!', note: 'EAU 2025/2026 First choice due to excellent tissue penetration' },
            { drug: 'Trimethoprim-Sulfamethoxazole (Cotrimoxazole)', dose: '2x960mg PO', duration: '4-6 weeks', note: 'Alternative choice in chronic prostatitis' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '1x2g IV', duration: 'Until afebrile, then switch to PO', note: 'In severe acute prostatitis' },
            { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g IV', duration: 'Until afebrile', note: 'In septic or nosocomial cases' }
          ]
        },
        targeted: 'Adjusted per antibiogram. EAU 2025/2026: Select lipophilic agents (Fluoroquinolones, Cotrimoxazole, Doxycycline).',
        supportive: [
          'Non-pharmacological therapy / Urinary drainage: In acute urinary retention, SUPRAPUBIC CYSTOSTOMY is mandatory! AVOID transurethral catheterization in acute prostatitis (urosepsis risk).',
          'Alpha-1 blockers (e.g., Tamsulosin 0.4mg PO qd) to relax bladder neck and ease voiding.',
          'Analgesia & Anti-inflammatory: NSAIDs (Ibuprofen 3x400mg PO or Celecoxib) for 2-4 weeks.',
          'Warm sitz baths (38-40°C), pressure relief on perineum (special cushion).',
          'Stool softeners, ample hydration.'
        ],
        prevention: [
          'Early, complete treatment of UTIs.',
          'EAU 2025/2026 recommendation prior to prostate biopsy: Targeted rectal swab-based prophylaxis, or Ceftriaxone/Fosfomycin (avoid fluoroquinolone monotherapy!).'
        ]
      },
      prognosis: {
        mortality: 'Very low with therapy, but sepsis risk in acute phase; Chronic significantly impairs quality of life',
        factors: 'Abscess formation, biofilm, transition to CPPS'
      }
    },
    {
      id: 'asymptomatic_bacteriuria',
      name: 'Asymptomatic Bacteriuria (ASB)',
      pathogen: { type: 'Bacterium', name: '<i>Escherichia coli, Enterococcus faecalis, Klebsiella, Proteus, Streptococcus agalactiae (GBS)</i>', gram: 'Mixed', shape: 'Mixed' },
      epidemiology: {
        incidence: 'Healthy women: 3-5%, Diabetics: 9-27%, Nursing home residents: 25-50%, Indwelling catheters: 100%',
        risk_groups: ['Elderly', 'Diabetics', 'Catheterized patients', 'Pregnant women', 'Spinal cord injury'],
        seasonality: 'None',
        transmission: 'Endogenous uropathogen colonization'
      },
      pathomechanism: {
        steps: [
          'Commensal Colonization: Low-virulence bacterial strains colonize the bladder without tissue invasion or inflammatory cascade.',
          'Immune Tolerance: A stable equilibrium is established between host and bacteria.',
          'Protective Function: Colonization by avirulent strains can prevent superinfection by highly virulent pathogens!'
        ],
        virulence_factors: ['Absence or reduction of virulence factors']
      },
      clinical: {
        incubation: '-',
        onset: 'Asymptomatic',
        symptoms: [
          { name: 'Complete ABSENCE of clinical symptoms', description: 'No lower or upper urinary tract complaints (no dysuria, no frequency, no fever). Incidental laboratory finding.', severity: 'mild' }
        ],
        physical_exam: [
          'Completely normal physical exam',
          'Cloudy or foul-smelling urine ALONE is NOT a symptom and NOT an indication for treatment! (EAU 2025/2026)',
          'No suprapubic or flank tenderness'
        ],
        complications: ['Unnecessary antibiotic treatment -> Multidrug resistance and Clostridioides difficile colitis!', 'Risk of pyelonephritis and premature delivery in PREGNANCY (hence treated in pregnant women!)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine culture (EAU 2025/2026)', finding: 'Women: ≥10^5 CFU/ml of same species in 2 CONSECUTIVE samples; Men: ≥10^5 CFU/ml in 1 sample', interpretation: 'Strict diagnostic criteria' },
          { test: 'Catheterized urine', finding: '≥10^5 CFU/ml in 1 sample', interpretation: 'Bacteriuria confirmed' },
          { test: 'Urine sediment', finding: 'Pyuria frequently present', interpretation: 'Pyuria ALONE does NOT warrant antibiotic therapy in asymptomatic patients! (EAU 2025/2026)' }
        ],
        imaging: [
          { test: 'Imaging not indicated', finding: 'No indication', interpretation: 'Not recommended' }
        ],
        microbiology: [
          { test: 'Urine culture screening', finding: 'Perform only in indicated groups', significance: 'Screen ONLY in pregnancy and prior to urological procedures violating mucosal integrity!' }
        ]
      },
      differential: [
        { disease: 'Symptomatic cystitis / pyelonephritis', distinguishing: 'Presence of subjective symptoms (dysuria, urgency) or fever' },
        { disease: 'Contamination', distinguishing: 'Lower colony count (<10^5 CFU/ml), mixed flora' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'NO ANTIBIOTIC TREATMENT (DO NOT TREAT)', dose: '-', duration: '-', note: 'EAU 2025/2026 Strict Recommendation: DO NOT TREAT! (Exceptions: Pregnancy & urological surgery)' }
          ],
          inpatient: [
            { drug: 'NO ANTIBIOTIC TREATMENT (DO NOT TREAT)', dose: '-', duration: '-', note: 'No treatment indication in elderly, diabetics, catheterized, or transplant patients' }
          ]
        },
        targeted: 'EXCLUSIVE INDICATIONS (EAU 2025/2026):\n1) PREGNANT WOMEN: Screen at 12-16 weeks. Treat targeted by culture (Fosfomycin 3g 1x, Nitrofurantoin 2x100mg 5 days, Cefalexin or Amoxicillin-clavulanate 5-7 days) to prevent pyelonephritis and premature labor.\n2) PRIOR TO UROLOGICAL SURGERY VIOLATING MUCOSAL INTEGRITY (e.g., TURP, ureteroscopy): Targeted antibiotic prior to procedure.\nDO NOT TREAT: Postmenopausal women, diabetics, catheterized patients, nursing home residents, spinal cord injury!',
        supportive: [
          'Non-pharmacological therapy / Education: Inform patients and staff that urine odor or cloudiness alone does not justify antibiotics.',
          'Generous fluid intake, regular voiding.',
          'Discontinue unnecessary urine dipsticks/cultures.'
        ],
        prevention: [
          'AVOID unnecessary urine testing and cultures.',
          'Prompt removal of urinary catheters.',
          'Good hygiene and hydration.'
        ]
      },
      prognosis: {
        mortality: 'ASB does not increase mortality; treatment is harmful due to resistance and side effects',
        factors: 'Untreated in pregnancy carries high risk of pyelonephritis'
      }
    }
  ]
};
