import { Category } from '../types';

export const urinaryTractEn: Category = {
  name: 'Urinary Tract Infections',
  icon: '🚽',
  color: '#3b82f6',
  didactics: {
    overview: 'The gold standard for the clinical classification of urinary tract infections (UTIs) is established by the EAU 2026 (European Association of Urology) Guidelines on Urological Infections, complemented by the North American IDSA (Infectious Diseases Society of America) practice guidelines (with note: according to IDSA classification). EAU 2026 categorizes infections based on anatomical site, clinical severity, and the ORENUC host risk factor system (uncomplicated cystitis, uncomplicated pyelonephritis, complicated UTI / cUTI, urosepsis, urethritis, male genital infections, and asymptomatic bacteriuria). According to IDSA classification, cUTI is defined by systemic symptoms, upper tract involvement, obstruction, or host factors that increase the risk of therapeutic failure and multidrug resistance.',
    lower: 'Lower UTI (Cystitis): Acute dysuria, frequency, urgency, suprapubic tenderness WITHOUT systemic features (fever, flank pain). Routine urine culture is NOT required in sporadic uncomplicated cystitis according to EAU 2026 and IDSA.',
    upper: 'Upper UTI (Pyelonephritis): Fever (>38°C), chills, flank/CVA pain, positive Giordano sign, nausea/vomiting. Urine culture is mandatory; urgent imaging (US/CT) is indicated if fever persists for 48-72h to rule out obstruction or abscess.',
    diagnostics: [
      '1) Clinical assessment and risk factor stratification (EAU ORENUC classification; screening for fever, flank pain, and systemic compromise)',
      '2) Urine dipstick and sediment microscopy (leukocyte esterase, nitrite, pyuria confirmation)',
      '3) Urine culture and susceptibility testing (mandatory in pyelonephritis, cUTI, pregnancy, men, and recurrence within 2-4 weeks)',
      '4) Inflammatory markers (CBC, CRP, procalcitonin) and renal function tests for systemic/upper tract symptoms',
      '5) Renal/pelvic ultrasound or contrast-enhanced CT in suspected obstruction, calculi, abscess, or non-resolving fever'
    ],
    red_flags: [
      'Signs of sepsis / septic shock (hypotension, tachycardia, tachypnea, oliguria, elevated lactate)',
      'Acute urinary tract obstruction / hydronephrosis with fever (stone, stricture, BPH) – requires IMMEDIATE emergency source control and decompression!',
      'Febrile pyelonephritis or asymptomatic bacteriuria in pregnancy',
      'Inability to tolerate oral fluids or medications (severe vomiting, dehydration)',
      'Non-resolving fever or worsening clinical condition after >48-72h of appropriate antibiotic therapy'
    ],
    special_populations: 'Elderly: frequently present with atypical symptoms (delirium, falls, anorexia, acute decline) – thorough diagnostic workup is needed, but asymptomatic bacteriuria (ASB) must NOT be treated! Pregnancy: ASB and UTI must be routinely screened and treated to prevent pyelonephritis and preterm delivery. Men: all UTIs should be considered complicated and involve potential prostate involvement according to EAU and IDSA.',
    teaching_tip: 'Antibiotic Stewardship Rule: Empirical fluoroquinolones (Ciprofloxacin, Levofloxacin) and oral 3rd-generation cephalosporins for uncomplicated cystitis must be STRONGLY AVOIDED per EAU 2026 and IDSA guidelines due to adverse effect profiles and resistance selection!'
  },
  tables: [
    {
      title: 'UTI Guideline Classification: EAU 2026 vs. IDSA Practice Guidelines',
      headers: ['Clinical Category', 'EAU 2026 Classification & Criteria (Primary Standard)', 'IDSA Classification & Definitions (With note: according to IDSA)', 'First-Line Management Strategy'],
      rows: [
        [
          '<strong>Uncomplicated Cystitis</strong>',
          'Acute, sporadic or recurrent lower UTI in non-pregnant, premenopausal women without known urological abnormalities or comorbidities (ORENUC: O/R category).',
          'Acute bladder infection in healthy, non-pregnant women; infection is restricted to the bladder mucosa with absence of systemic symptoms.',
          'Fosfomycin trometamol (3g PO single dose), Nitrofurantoin (100mg BID PO for 5 days), or Pivmecillinam (400mg TID PO for 3-5 days). Fluoroquinolones avoided!'
        ],
        [
          '<strong>Uncomplicated Pyelonephritis</strong>',
          'Renal parenchymal infection in non-pregnant women with structurally normal urinary tracts. Features: fever (>38°C), chills, flank/CVA pain.',
          'Renal parenchymal infection accompanied by systemic symptoms (fever, chills, CVA tenderness) without anatomical obstruction or severe underlying comorbidities.',
          'Outpatient: Cefuroxime axetil or Cefpodoxime (Ciprofloxacin/Levofloxacin only if local E. coli resistance <10%). Inpatient: Ceftriaxone 1-2g IV QD or Cefotaxime.'
        ],
        [
          '<strong>Complicated UTI (cUTI)</strong>',
          'Any UTI associated with ORENUC host risk factors: male sex, pregnancy, urological abnormalities (U), catheters/foreign bodies (C), nephrological (N), or extra-urogenital (E) factors.',
          '<em>With note: according to IDSA classification:</em> Infection extending beyond the bladder with systemic symptoms (fever, chills, delirium, hemodynamic instability), upper tract involvement, or urosepsis, AND/OR presence of structural/functional abnormality, foreign body, male sex, or immunosuppression.',
          'Immediate source control (catheter exchange, relief of obstruction) + Broad-spectrum/targeted IV therapy (Ceftriaxone, Piperacillin/tazobactam, Cefepime, Meropenem).'
        ],
        [
          '<strong>Catheter-Associated UTI (CAUTI)</strong>',
          'Symptomatic UTI in patients with indwelling bladder catheters, suprapubic cystostomy, or nephrostomy (EAU Catheter category). Biofilm formation.',
          '<em>With note: according to IDSA classification:</em> Symptomatic infection in a patient with an indwelling urinary catheter or within 48h of catheter removal, with significant bacteriuria (≥10³ CFU/mL).',
          'Immediate removal or exchange of the indwelling catheter under aseptic conditions before initiating targeted antibiotic therapy.'
        ],
        [
          '<strong>Asymptomatic Bacteriuria (ASB)</strong>',
          'Significant bacterial count (≥10⁵ CFU/mL) in the absence of UTI symptoms. Antibiotic treatment is strictly contraindicated (except pregnancy and urological surgery).',
          '<em>With note: according to IDSA classification:</em> Isolation of ≥10⁵ CFU/mL in an asymptomatic person (2 consecutive samples in women, 1 sample in men/catheterized). Routine screening/treatment is harmful and strongly discouraged.',
          'DO NOT TREAT! Exceptions: 1) Pregnancy (screen at 12-16 weeks and treat), 2) Prior to invasive urological procedures involving mucosal trauma.'
        ],
        [
          '<strong>Male Genital Infections (Prostatitis)</strong>',
          'EAU categories: NIH Type I (Acute bacterial), NIH Type II (Chronic bacterial), NIH Type III (CPPS), NIH Type IV (Asymptomatic inflammatory). Epididymo-orchitis.',
          '<em>With note: according to IDSA classification:</em> All UTIs in men are classified as complicated by default due to high rates of prostatic tissue involvement.',
          'Prostate-penetrating agents: Fluoroquinolones (Ciprofloxacin, Levofloxacin) or TMP-SMX for 2-4 weeks (acute) / 4-6 weeks (chronic).'
        ]
      ]
    }
  ],
  diseases: [
    {
      id: 'uti_classification',
      name: 'UTI Classification & Guidelines (EAU 2026 & IDSA)',
      didactics: {
        overview: 'Modern classification of urinary tract infections (UTIs) relies on international evidence-based guidelines: the primary clinical standard is established by the EAU 2026 (European Association of Urology Guidelines on Urological Infections), supplemented by the North American IDSA (Infectious Diseases Society of America) practice guidelines. Accurate classification is crucial for antimicrobial stewardship, targeted diagnostic evaluation, and timely prevention of life-threatening complications (urosepsis, pyonephrosis, perinephric abscess).',
        sections: [
          {
            title: '1. Primary Classification According to EAU 2026 Guidelines',
            icon: '🇪🇺',
            badge: 'EAU 2026 Primary Standard',
            content: 'The EAU 2026 categorizes urinary tract infections based on anatomical localization, clinical severity, and host risk factors into 7 primary entities:',
            items: [
              {
                label: '1) Uncomplicated Cystitis',
                text: 'Acute lower urinary tract infection in non-pregnant, premenopausal women without known urological abnormalities or relevant comorbidities. Hallmark symptoms: dysuria, frequency, urgency, suprapubic pain WITHOUT fever. Routine urine culture is not indicated.'
              },
              {
                label: '2) Uncomplicated Pyelonephritis',
                text: 'Acute renal parenchymal infection in non-pregnant women with structurally normal urinary tracts. Hallmark symptoms: fever (>38°C), chills, flank/costovertebral angle (CVA) pain, positive Giordano sign. Urine culture is mandatory.'
              },
              {
                label: '3) Complicated UTI (cUTI)',
                text: 'All infections that increase the risk of complications, treatment failure, or multidrug-resistant pathogens: infections in men, pregnant women, anatomical/functional abnormalities (obstruction, calculi, stricture, VUR), indwelling foreign bodies, or systemic comorbidities (diabetes, immunosuppression, CKD).'
              },
              {
                label: '4) Urosepsis',
                text: 'Life-threatening organ dysfunction caused by a dysregulated host response to urinary tract infection (SOFA score increase ≥2 points, qSOFA, hypotension, elevated lactate). Requires immediate source control and emergency resuscitation.'
              },
              {
                label: '5) Urethritis',
                text: 'Infection of the urethral mucosa primarily caused by sexually transmitted pathogens (N. gonorrhoeae, C. trachomatis, Mycoplasma genitalium, Trichomonas vaginalis).'
              },
              {
                label: '6) Male Genital Infections',
                text: 'Bacterial prostatitis: NIH Type I (Acute bacterial), NIH Type II (Chronic bacterial), NIH Type III (Chronic pelvic pain syndrome - CPPS), NIH Type IV (Asymptomatic inflammatory). Also includes acute epididymitis, orchitis, and epididymo-orchitis.'
              },
              {
                label: '7) Asymptomatic Bacteriuria (ASB)',
                text: 'Significant bacteriuria (≥10⁵ CFU/mL) without signs or symptoms of UTI. Treatment is strictly contraindicated, except in pregnancy and prior to mucosal-traumatizing urological procedures.'
              }
            ]
          },
          {
            title: '2. EAU ORENUC Host Risk Factor Classification System',
            icon: '📊',
            badge: 'EAU Risk Stratification',
            content: 'The EAU ORENUC system stratifies patients based on predisposing host factors and clinical vulnerability:',
            items: [
              {
                label: 'O (No known risk factors)',
                text: 'Premenopausal, non-pregnant healthy women (uncomplicated infections).'
              },
              {
                label: 'R (Recurrent UTI risk factors)',
                text: 'Risk factors for recurrent cystitis: sexual activity, spermicide use, postmenopausal estrogen deficiency, history of childhood or frequent rUTI.'
              },
              {
                label: 'E (Extra-urogenital risk factors)',
                text: 'Systemic extra-urogenital comorbidities: poorly controlled diabetes mellitus, immunosuppression, autoimmune disease, pregnancy.'
              },
              {
                label: 'N (Nephrological risk factors)',
                text: 'Renal impairment: chronic kidney disease (CKD), polycystic kidney disease, renal allograft transplantation.'
              },
              {
                label: 'U (Urological risk factors)',
                text: 'Urological anatomical or functional anomalies: urinary tract obstruction, urolithiasis, neurogenic bladder dysfunction, vesicoureteral reflux (VUR), bladder outlet obstruction.'
              },
              {
                label: 'C (Catheter & Foreign body)',
                text: 'Indwelling catheters and devices: long-term urinary catheter (CAUTI), ureteral double-J stent, nephrostomy tube, suprapubic cystostomy.'
              }
            ]
          },
          {
            title: '3. IDSA Classification & Definitions (With note: According to IDSA Guideline)',
            icon: '🇺🇸',
            badge: 'With note: according to IDSA',
            content: 'The IDSA (Infectious Diseases Society of America) practice guidelines delineate urinary tract infections according to the following criteria:',
            items: [
              {
                label: 'IDSA cUTI Definition',
                text: '<em>(With note: according to IDSA classification)</em> Complicated UTI (cUTI) is defined as an infection extending beyond the bladder with systemic manifestations (fever, chills, tachycardia, altered mental status/delirium, hypotension), upper tract involvement (pyelonephritis), or urosepsis, AND/OR presence of structural/functional urinary tract abnormalities or host compromises (obstruction, foreign body, male sex, immunosuppression) that increase the risk of therapeutic failure or antimicrobial resistance.'
              },
              {
                label: 'IDSA cUTI with Systemic Signs without Obstruction',
                text: '<em>(With note: according to IDSA classification)</em> Febrile infections with systemic signs in structurally normal tracts or underlying metabolic disease (e.g., diabetic pyelonephritis).'
              },
              {
                label: 'IDSA cUTI with Obstruction or Foreign Body',
                text: '<em>(With note: according to IDSA classification)</em> Infections complicated by nephrolithiasis, strictures, tumors, or stents where urgent source control (decompression) is mandatory for cure.'
              },
              {
                label: 'IDSA CAUTI Guidelines',
                text: '<em>(With note: according to IDSA classification)</em> Catheter-Associated UTI: symptomatic infection in a patient with an indwelling urethral catheter or within 48h of catheter removal, with significant bacteriuria (≥10³ CFU/mL).'
              },
              {
                label: 'IDSA ASB Guidelines',
                text: '<em>(With note: according to IDSA classification)</em> Asymptomatic bacteriuria definition: isolation of ≥10⁵ CFU/mL in 2 consecutive clean-catch samples in women, or 1 sample in men/catheterized patients. IDSA strongly recommends against screening and treating ASB, except in pregnancy and prior to urological procedures involving mucosal bleeding.'
              },
              {
                label: 'UTI in Men per IDSA',
                text: '<em>(With note: according to IDSA classification)</em> IDSA classifies all UTIs in adult males as complicated due to anatomical length and high frequency of prostatic involvement.'
              }
            ]
          },
          {
            title: '4. Diagnostic and Microbiological Thresholds',
            icon: '🔬',
            badge: 'Clinical Microbiology',
            content: 'Significant bacteriuria thresholds across clinical syndromes according to EAU 2026 and IDSA:',
            items: [
              {
                label: 'Acute uncomplicated cystitis in women',
                text: '≥10³ CFU/mL uropathogen in clean-catch midstream urine.'
              },
              {
                label: 'Acute uncomplicated pyelonephritis in women',
                text: '≥10⁴ CFU/mL uropathogen in clean-catch midstream urine.'
              },
              {
                label: 'Complicated UTI (cUTI) / Men',
                text: '≥10⁵ CFU/mL in women; ≥10⁴ CFU/mL in men or catheterized midstream samples.'
              },
              {
                label: 'Straight catheterized specimen',
                text: '≥10² CFU/mL is considered clinically significant.'
              },
              {
                label: 'Asymptomatic Bacteriuria (ASB)',
                text: '≥10⁵ CFU/mL (2 consecutive samples in women, 1 sample in men).'
              }
            ]
          }
        ],
        teaching_tip: [
          '<strong>EAU 2026 & IDSA Key Message:</strong> Cloudy, foul-smelling urine or asymptomatic pyuria alone in the absence of clinical symptoms does NOT constitute an infection and is NOT an indication for antibiotic treatment!',
          '<strong>Fluoroquinolone Restriction:</strong> In uncomplicated cystitis, fluoroquinolones (Ciprofloxacin, Levofloxacin) are strictly discouraged under both EAU 2026 and IDSA stewardship guidelines.'
        ]
      },
      pathogen: {
        type: 'Guideline Synthesis',
        name: 'EAU 2026 Guidelines on Urological Infections & IDSA cUTI/ASB Guidelines',
        gram: 'Standard',
        shape: 'Clinical Algorithm'
      }
    },
    {
      id: 'cystitis',
      name: 'Acute Uncomplicated Cystitis',
      pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negative', shape: 'rod' },
      epidemiology: {
        incidence: '50% of women at least once in their lifetime; 20-30% experience recurrence',
        risk_groups: ['Sexually active premenopausal women (EAU ORENUC: O/R)', 'Postmenopausal women (estrogen deficiency)', 'Pregnancy', 'New sexual partner or spermicide use'],
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
          'Fever AND flank/CVA tenderness are ABSENT (Giordano sign negative)',
          'Absence of vaginal discharge or irritation (helps differentiate from vaginitis)',
          'Normal vital signs (no tachycardia, no hypotension)'
        ],
        complications: ['Ascending acute pyelonephritis', 'Recurrent cystitis (rUTI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine dipstick', finding: 'Leukocyte esterase+, Nitrite+ (with Gram-negative rods)', interpretation: 'High positive predictive value (>90%) with typical clinical history' },
          { test: 'Urine sediment', finding: 'Pyuria (>10 WBC/HPF), WBC clumps, no WBC casts', interpretation: 'Confirms lower urinary tract inflammation' }
        ],
        imaging: [
          { test: 'Imaging not indicated', finding: 'Not performed in routine uncomplicated cystitis', interpretation: 'Reserved only for complicated or non-resolving courses' }
        ],
        microbiology: [
          { test: 'Urine culture (EAU 2026 / IDSA)', finding: '≥10^3 CFU/mL uropathogen', significance: 'NOT routinely needed for sporadic uncomplicated cystitis! Indications: suspected pyelonephritis, recurrence within 2-4 weeks, atypical symptoms, pregnancy.' }
        ]
      },
      differential: [
        { disease: 'Vaginitis / Vulvovaginitis', distinguishing: 'Vaginal discharge, pruritus, dysuria described as external irritation' },
        { disease: 'Urethritis (STI - Chlamydia, Gonorrhea, Mycoplasma)', distinguishing: 'Gradual onset, new sexual partner, urethral discharge, sterile pyuria' },
        { disease: 'Interstitial cystitis / Bladder pain syndrome', distinguishing: 'Chronic pain (>6 weeks) with full bladder, sterile urine cultures' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: 'Single dose', note: 'EAU 2026 and IDSA first-line agent' },
            { drug: 'Nitrofurantoin', dose: '100mg PO BID (macrocrystals)', duration: '5 days', note: 'EAU 2026 and IDSA first-line agent' },
            { drug: 'Pivmecillinam', dose: '400mg PO TID', duration: '3-5 days', note: 'EAU 2026 first-line agent' },
            { drug: 'Nitroxoline', dose: '250mg PO TID', duration: '5 days', note: 'EAU 2026 accepted alternative' }
          ],
          inpatient: [
            { drug: 'Hospital admission not indicated', dose: '-', duration: '-', note: 'Except in severe comorbidities or complications' }
          ]
        },
        targeted: 'Adjusted according to urine culture. EAU 2026 & IDSA Warning: Fluoroquinolones (Ciprofloxacin, Levofloxacin) and oral 3rd-gen cephalosporins are EMPIRICALLY DISCOURAGED in uncomplicated cystitis due to collateral damage and resistance selection!',
        supportive: [
          'Non-pharmacological therapy: High fluid intake (minimum 2.0-2.5 liters/day to promote mechanical flushing of bacteria).',
          'Frequent, regular voiding; avoid holding urine.',
          'Symptomatic pain relief: NSAIDs (e.g. Ibuprofen 400mg PO TID for 3-5 days) can be considered as initial symptomatic therapy for mild-to-moderate symptoms as part of antibiotic stewardship.',
          'Lower abdominal warmth (heating pad) to relieve bladder spasm.',
          'Phytotherapy: Bearberry leaf extract (Uvae ursi folium) may provide short-term symptom relief.'
        ],
        prevention: [
          'Behavioral measures: Liberal fluid intake (>2L/day), postcoital voiding within 15 minutes of intercourse, avoiding spermicidal condoms/diaphragms, wiping from front to back.',
          'EAU 2026 Non-antimicrobial prophylaxis (Strongly recommended for rUTI):',
          '1) Vaginal / Topical Estrogen replacement (Estriol cream/suppository): Restores protective vaginal Lactobacillus flora in postmenopausal women (Strong EAU recommendation!).',
          '2) Immunoactive prophylaxis / Oral immunostimulation (OM-89 / Uro-Vaxom®): 1 capsule daily PO for 3 months (Strong EAU recommendation for rUTI prevention!).',
          '3) D-mannose: 2g/day PO prevents E. coli fimbrial adhesion to urothelium.',
          '4) Endovesical GAG-layer replenishment: Intravesical hyaluronic acid + chondroitin sulfate instillation for refractory recurrent cystitis.',
          '5) Methenamine hippurate: 1g BID PO in women without urinary tract abnormalities.',
          '6) Probiotics: Vaginal Lactobacillus crispatus.',
          'Antimicrobial prophylaxis (Reserved as last resort when non-antimicrobial measures fail): Postcoital prophylaxis (Nitrofurantoin 50mg or Fosfomycin 3g after coitus) or continuous low-dose prophylaxis for 3-6 months (Nitrofurantoin 50-100mg nocte or Fosfomycin 3g every 10 days).'
        ]
      },
      prognosis: {
        mortality: 'Zero mortality',
        factors: 'Risk of recurrence (20-30% develop recurrent infections)'
      }
    },
    {
      id: 'pyelonephritis',
      name: 'Acute Uncomplicated Pyelonephritis',
      pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (75-80%)', gram: 'Gram-negative', shape: 'rod' },
      epidemiology: {
        incidence: '10-12 cases / 10,000 women / year; can occur as a complication of untreated cystitis',
        risk_groups: ['Young sexually active women', 'EAU ORENUC: O/R risk category', 'History of previous pyelonephritis'],
        seasonality: 'None',
        transmission: 'Ascending infection from bladder via ureters (95%), rarely hematogenous'
      },
      pathomechanism: {
        steps: [
          'Ascension: Pathogens ascend from the bladder through the ureters into the renal pelvis (facilitated by vesicoureteral reflux or endotoxin-induced decreased peristalsis).',
          'Renal Parenchymal Invasion: Bacteria invade the renal pelvis and medulla, entering collecting ducts.',
          'Acute Inflammatory Response: Severe neutrophilic infiltration, interstitial edema, microabscess formation, and tubular necrosis develop.',
          'Systemic Spillover: Pro-inflammatory cytokines (IL-1, IL-6, TNF-alpha) and endotoxins enter the circulation, producing high fever, rigors, and systemic inflammatory response.'
        ],
        virulence_factors: ['P-fimbriae (pyelonephritis-associated pili, bind to renal digalactoside receptors)', 'LPS endotoxin', 'K-capsule (antiphagocytic)']
      },
      clinical: {
        incubation: '1-3 days following cystitis',
        onset: 'Sudden, severe onset',
        symptoms: [
          { name: 'High fever and chills', description: 'Spiking fever (>38.5°C), shaking rigors, and profuse diaphoresis signaling parenchymal invasion and bacteremia.', severity: 'severe' },
          { name: 'Flank / CVA pain', description: 'Unilateral or bilateral dull, persistent flank pain caused by stretching of the renal capsule.', severity: 'severe' },
          { name: 'Gastrointestinal distress', description: 'Prominent nausea, vomiting, anorexia, and abdominal discomfort due to celiac plexus and peritoneal irritation.', severity: 'moderate' },
          { name: 'Lower urinary tract symptoms', description: 'Dysuria, frequency, and urgency may precede or accompany, but are ABSENT in 30-50% of cases!', severity: 'moderate' },
          { name: 'Atypical presentation in elderly', description: 'Elderly or immunocompromised patients may lack fever; delirium, falls, confusion, and hemodynamic instability may be the sole indicators.', severity: 'severe' }
        ],
        physical_exam: [
          'Giordano sign positive: Marked costovertebral angle (CVA) tenderness on percussion of the affected side',
          'Fever (>38.5°C), tachycardia, systemic toxicity',
          'Mild abdominal tenderness in ipsilateral quadrant without peritoneal signs',
          'Signs of dehydration (dry mucous membranes, reduced skin turgor)'
        ],
        complications: ['Renal / Perinephric abscess', 'Urosepsis and septic shock', 'Emphysematous pyelonephritis (diabetics)', 'Renal papillary necrosis', 'Acute kidney injury (AKI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Complete Blood Count (CBC)', finding: 'Marked leukocytosis with left shift and neutrophilia', interpretation: 'Systemic bacterial infection' },
          { test: 'CRP and Procalcitonin (PCT)', finding: 'Significantly elevated (CRP >100 mg/L, PCT >0.5 ng/mL)', interpretation: 'Indicates parenchymal inflammation and sepsis risk' },
          { test: 'Renal panel & electrolytes', finding: 'Elevated creatinine/BUN, reduced eGFR', interpretation: 'Identifies acute kidney injury or prerenal azotemia' },
          { test: 'Urine sediment', finding: 'Prominent pyuria, WBC casts (pathognomonic for upper tract infection)', interpretation: 'Confirms renal parenchymal inflammation' }
        ],
        imaging: [
          { modality: 'Contrast CT Abdomen/Pelvis (EAU 2026 / IDSA)', finding: 'Wedge-shaped areas of decreased enhancement, renal enlargement, perinephric stranding', significance: 'Gold standard to rule out complications (abscess, obstruction). Indicated if fever persists >48-72h on targeted antibiotics.' },
          { modality: 'Renal ultrasound', finding: 'Hydronephrosis (obstruction), calculi, abscess', significance: 'First-line non-radiation imaging' }
        ],
        microbiology: [
          { test: 'Urine culture (EAU 2026 / IDSA)', finding: '≥10^4 CFU/mL uropathogen', significance: 'MANDATORY before initiating antimicrobial therapy!' },
          { test: 'Blood cultures', finding: 'Bacteremia (~15-20% positivity)', significance: 'Mandatory in hospitalized or febrile/toxic patients (2 sets)' }
        ]
      },
      differential: [
        { disease: 'Urolithiasis (Renal colic)', distinguishing: 'Colicky radiating flank-to-groin pain, absence of fever (unless obstructed infection), hematuria predominates' },
        { disease: 'Acute appendicitis / Cholecystitis', distinguishing: 'Abdominal exam, lack of pyuria/WBC casts, ultrasound/CT findings' },
        { disease: 'Pelvic Inflammatory Disease (PID)', distinguishing: 'Cervical motion tenderness, adnexal mass/pain, purulent vaginal discharge' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxime axetil', dose: '500mg PO BID', duration: '7 days', note: 'EAU 2026 first-line oral cephalosporin option' },
            { drug: 'Cefpodoxime proxetil', dose: '200mg PO BID', duration: '10 days', note: 'Oral 3rd-generation cephalosporin alternative' },
            { drug: 'Ciprofloxacin', dose: '500mg PO BID', duration: '7 days', note: 'ONLY if local E. coli resistance is <10%! (EAU 2026 / IDSA)' },
            { drug: 'Levofloxacin', dose: '750mg PO QD', duration: '5 days', note: 'ONLY if local E. coli resistance is <10%! (EAU 2026 / IDSA)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '1-2g IV QD', duration: '10-14 days', note: 'EAU 2026 / IDSA first-line parenteral choice' },
            { drug: 'Cefotaxime', dose: '2g IV TID', duration: '10-14 days', note: 'Parenteral cephalosporin alternative' },
            { drug: 'Piperacillin/tazobactam', dose: '4.5g IV TID', duration: '10-14 days', note: 'Pseudomonas risk or prior antibiotic exposure' },
            { drug: 'Gentamicin / Amikacin', dose: 'Single daily dose IV', duration: '3-5 days', note: 'Synergistic combination option in severe sepsis' }
          ]
        },
        targeted: 'Adjusted according to antibiogram. When starting oral beta-lactams in outpatients, an initial IV loading dose of Ceftriaxone (1g) or Aminoglycoside in the ED is recommended!',
        supportive: [
          'Non-pharmacological therapy: Aggressive hydration via IV crystalloids or oral fluids to maintain optimal renal perfusion and urinary flow.',
          'Strict bed rest during the febrile phase.',
          'Antipyretic and analgesic therapy: Paracetamol (500-1000mg PO/IV QID) or Metamizole. NSAIDs used with caution under renal function monitoring.',
          'Antiemetic therapy (Metoclopramide 10mg IV/PO or Ondansetron 4-8mg IV) to enable oral hydration and medication tolerance.',
          'Close hemodynamic and renal monitoring (blood pressure, pulse, urine output, renal panel).'
        ],
        prevention: [
          'Timely and appropriate treatment of acute cystitis.',
          'EAU 2026 non-antimicrobial preventative measures (adequate hydration, OM-89 immunostimulation, vaginal estrogen in postmenopause).',
          'Surgical correction of anatomical urological abnormalities (calculi, VUR).'
        ]
      },
      prognosis: {
        mortality: '<1% with prompt antibiotic therapy, but 10-20% if complicated by urosepsis or emphysematous changes',
        factors: 'Advanced age, diabetes, urological obstruction, multidrug-resistant (MDR/ESBL) pathogens'
      }
    },
    {
      id: 'complicated_uti',
      name: 'Complicated Urinary Tract Infection (cUTI)',
      pathogen: { type: 'Bacterium', name: '<i>E. coli, Enterococcus faecalis, Pseudomonas aeruginosa, Klebsiella, Proteus, Enterobacter</i>', gram: 'Mixed', shape: 'Mixed' },
      epidemiology: {
        incidence: 'Common in nosocomial settings, urology patients, and catheterized populations',
        risk_groups: ['EAU ORENUC: E, N, U, C categories', 'Catheterized patients (CAUTI)', 'Men (complicated by default per IDSA)', 'Pregnant women', 'Anatomical/functional obstruction (neurogenic bladder, strictures)', 'Renal failure / Kidney transplantation', 'Immunosuppression / Diabetes'],
        seasonality: 'None',
        transmission: 'Ascending, catheter-associated (biofilm), nosocomial transmission'
      },
      pathomechanism: {
        steps: [
          'Predisposing Factors: Anatomical (stricture, calculus, BPH) or functional (neurogenic bladder) obstruction, or foreign body (catheter, stent) impedes normal urinary flow and host defenses.',
          'Biofilm Formation: Uropathogens (Proteus, Pseudomonas, Enterococcus) establish dense biofilms on urothelium and device surfaces, preventing antibiotic penetration and immune clearance.',
          'Parenchymal & Systemic Invasion: Urinary stasis and elevated intraluminal pressure promote rapid bacterial translocation into renal parenchyma and venous circulation, triggering urosepsis.'
        ],
        virulence_factors: ['Biofilm formation', 'Multidrug resistance (ESBL, AmpC, Carbapenemases)', 'Urease production (Proteus – staghorn calculi)']
      },
      clinical: {
        incubation: 'Variable',
        onset: 'Variable (ranging from mild symptoms to fulminant septic shock)',
        symptoms: [
          { name: 'Systemic inflammatory signs', description: 'High fever, rigors, tachycardia, tachypnea, profound malaise, hemodynamic instability.', severity: 'severe' },
          { name: 'Signs of Urosepsis / Septic Shock', description: 'Hypotension (SBP <90 mmHg), oliguria (<0.5 mL/kg/h), delirium, elevated serum lactate – requires EMERGENCY resuscitation!', severity: 'severe' },
          { name: 'Flank / Suprapubic pain', description: 'May be present, but frequently absent in catheterized, spinal cord injured, or elderly patients.', severity: 'moderate' },
          { name: 'Lower urinary tract symptoms', description: 'Dysuria, frequency, or in catheterized patients: cloudy, foul urine, sediment encrustation, catheter blockage.', severity: 'moderate' },
          { name: 'Atypical / Oligosymptomatic forms', description: 'Elderly and immunocompromised patients may present solely with altered mental status (delirium) or sudden hypothermia.', severity: 'severe' }
        ],
        physical_exam: [
          'Systemic signs: Fever or hypothermia (<36°C), tachycardia, tachypnea',
          'Costovertebral angle tenderness or suprapubic tenderness',
          'Presence of indwelling bladder catheter, nephrostomy, or suprapubic tube',
          'Shock signs: cool, mottled extremities, prolonged capillary refill time'
        ],
        complications: ['Urosepsis and septic shock (mortality 20-40%)', 'Acute kidney injury (AKI)', 'Renal and perinephric abscess', 'Urinary tract obstruction and pyonephrosis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine culture (EAU 2026 / IDSA)', finding: 'Women: ≥10^5 CFU/mL; Men/Catheterized: ≥10^4 CFU/mL', interpretation: 'MANDATORY before initiating antibiotic therapy!' },
          { test: 'Blood cultures', finding: 'Positive blood cultures (2 sets)', interpretation: 'Mandatory in all febrile/systemic cases' },
          { test: 'Inflammatory markers & Renal panel', finding: 'Procalcitonin (PCT), CRP, CBC, creatinine, lactate, ABG', interpretation: 'Sepsis stratification and organ dysfunction monitoring' }
        ],
        imaging: [
          { modality: 'CT Urography / Contrast CT Abdomen-Pelvis (EAU 2026 / IDSA)', finding: 'Urinary tract obstruction, renal/psoas abscess, infected calculus, emphysematous changes', significance: 'MANDATORY to identify anatomical source and need for decompression!' },
          { modality: 'Emergency Renal Ultrasound', finding: 'Hydronephrosis, pyonephrosis, obstructing calculus', significance: 'Immediate bedside imaging to exclude obstruction' }
        ],
        microbiology: [
          { test: 'Susceptibility testing', finding: 'Screening for MDR pathogens (ESBL, CRE, Pseudomonas)', significance: 'Directs targeted step-down therapy' }
        ]
      },
      differential: [
        { disease: 'Uncomplicated pyelonephritis', distinguishing: 'No host risk factors, no anatomical/functional abnormality' },
        { disease: 'Acute bacterial prostatitis', distinguishing: 'Exquisitely tender prostate on DRE' },
        { disease: 'Other septic foci (Intraabdominal sepsis, Pneumonia)', distinguishing: 'History, imaging, physical findings' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxime axetil', dose: '500mg PO BID', duration: '7-14 days', note: 'Only in mild cases without systemic compromise' },
            { drug: 'Ciprofloxacin / Levofloxacin', dose: 'PO', duration: '7-14 days', note: 'Only if no fluoroquinolone use in prior 6 months and local resistance <10% (EAU 2026 / IDSA)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '2g IV QD', duration: '7-14 days', note: 'First-line parenteral agent' },
            { drug: 'Piperacillin/tazobactam', dose: '4.5g IV TID', duration: '7-14 days', note: 'Pseudomonas coverage or hospital-acquired cUTI' },
            { drug: 'Cefepime', dose: '2g IV BID', duration: '7-14 days', note: 'Pseudomonas and Enterobacteriaceae coverage' },
            { drug: 'Meropenem', dose: '1g IV TID', duration: '7-14 days', note: 'ESBL risk or septic shock' },
            { drug: 'Ceftazidime/avibactam or Cefiderocol', dose: 'IV', duration: '7-14 days', note: 'Targeted for multidrug-resistant (MDR) Gram-negative pathogens (EAU 2026 / IDSA cUTI)' }
          ]
        },
        targeted: 'IMMEDIATE SOURCE CONTROL: Relieving urinary tract obstruction (percutaneous nephrostomy or double-J stent insertion) and removing or replacing the indwelling catheter are essential prerequisites for cure according to both EAU 2026 and IDSA cUTI guidelines!',
        supportive: [
          'Non-pharmacological therapy / Urgent Source Control: Catheter replacement under aseptic conditions prior to antibiotic therapy (eliminates biofilm reservoir).',
          'Sepsis Protocol: Immediate IV fluid resuscitation (crystalloids 30 mL/kg within first 3 hours) to restore organ perfusion.',
          'Vasopressor therapy (Norepinephrine) if mean arterial pressure (MAP) remains <65 mmHg despite adequate fluid resuscitation.',
          'Urological emergency intervention (percutaneous drainage of abscess, relief of obstruction).',
          'Oxygenation, intensive care hemodynamic and urinary output monitoring.'
        ],
        prevention: [
          'Strict indications for urinary catheterization (remove catheter as soon as no longer strictly necessary!).',
          'Maintain closed aseptic drainage systems.',
          'AVOID treating asymptomatic bacteriuria (prevents selection of multidrug-resistant strains).',
          'Early urological management of anatomical obstruction and calculi.'
        ]
      },
      prognosis: {
        mortality: '20-40% in urosepsis and septic shock',
        factors: 'Advanced age, delayed source control, multidrug-resistant (MDR) pathogens, severe underlying comorbidity'
      }
    },
    {
      id: 'prostatitis',
      name: 'Acute and Chronic Bacterial Prostatitis',
      pathogen: { type: 'Bacterium', name: '<i>E. coli</i> (80%), <i>Klebsiella, Proteus, Pseudomonas aeruginosa, Enterococcus faecalis</i>', gram: 'Mixed', shape: 'Mixed' },
      epidemiology: {
        incidence: '10-15% lifetime prevalence in men; accounts for 8% of urology clinic visits',
        risk_groups: ['Young and middle-aged men', 'Status post transrectal prostate biopsy', 'Indwelling urinary catheters', 'BPH / pelvic floor dysfunction', 'HIV / Diabetes mellitus'],
        seasonality: 'None',
        transmission: 'Ascending infection from infected urine (intraprostatic ductal reflux), direct inoculation after biopsy'
      },
      pathomechanism: {
        steps: [
          'Intraprostatic Reflux: Infected urine is forced into prostatic ducts under high intraurethral voiding pressure.',
          'Acute Inflammation (NIH Type I - ABP): Severe stromal edema, diffuse leukocytic infiltration, and microabscesses cause marked prostatic swelling and capsular tension.',
          'Chronic Colonization (NIH Type II - CBP): Bacteria establish persistent biofilms on prostatic calculi (prostatoliths) or within acini, shielding pathogens from host immunity and antibiotics.'
        ],
        virulence_factors: ['Biofilm formation', 'Lipid barrier (the blood-prostate barrier and acidic pH impede penetration of many standard antibiotics)']
      },
      clinical: {
        incubation: '1-7 days',
        onset: 'Acute (ABP) sudden and severe; Chronic (CBP) prolonged and relapsing (>3 months)',
        symptoms: [
          { name: 'Acute: Systemic febrile illness', description: 'High spiking fever, rigors, myalgias, arthralgias, severe flu-like malaise.', severity: 'severe' },
          { name: 'Pelvic / Perineal pain', description: 'Deep, throbbing perineal, rectal, and suprapubic pain radiating to penis, testes, or sacrum.', severity: 'severe' },
          { name: 'LUTS & Voiding dysfunction', description: 'Severe dysuria, frequency, urgency, hesitancy, weak stream, terminal dribbling.', severity: 'moderate' },
          { name: 'Acute urinary retention', description: 'Marked prostatic swelling can cause complete bladder outlet obstruction.', severity: 'severe' },
          { name: 'Chronic: Recurrent symptoms', description: 'Persistent pelvic discomfort, painful ejaculation, recurrent cystitis caused by the identical bacterial strain.', severity: 'moderate' }
        ],
        physical_exam: [
          'Digital Rectal Examination (DRE):',
          'IN ACUTE PROSTATITIS: The prostate is swollen, hot, tense, and EXQUISITELY TENDER. PROSTATIC MASSAGE IS STRICTLY CONTRAINDICATED (high risk of bacteremia and septic shock!)',
          'IN CHRONIC PROSTATITIS: Prostate may feel normal, boggy, or mildly tender.',
          'Palpable distended bladder with suprapubic dullness in acute urinary retention.'
        ],
        complications: ['Prostatic abscess (especially in diabetics)', 'Urosepsis and septic shock', 'Acute urinary retention', 'Epididymo-orchitis', 'Progression to chronic pelvic pain syndrome (CPPS)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine sediment & dipstick', finding: 'Marked pyuria and bacteriuria', interpretation: 'Confirms urinary tract infection' },
          { test: 'Inflammatory markers', finding: 'High leukocytosis, markedly elevated CRP', interpretation: 'Reflects acute systemic inflammation' },
          { test: 'Serum PSA', finding: 'Significantly elevated (often >20-50 ng/mL)', interpretation: 'Secondary to acute inflammation! Do NOT use for cancer screening during acute phase; re-evaluate 2-3 months after resolution.' }
        ],
        imaging: [
          { modality: 'Transrectal Ultrasound (TRUS) or Pelvic MRI', finding: 'Prostatic abscess (hypoechoic fluid collection/cavity)', significance: 'Indicated if fever persists >48-72h despite antibiotics or if fluctuance is suspected.' }
        ],
        microbiology: [
          { test: 'Acute: Midstream urine culture (EAU 2026)', finding: '≥10^4 CFU/mL uropathogen', significance: 'Obtained without prostatic massage!' },
          { test: 'Chronic: Meares-Stamey 4-glass test or 2-glass test (EAU 2026)', finding: '10-fold higher bacterial count in post-massage urine (VB3) or expressed prostatic secretions (EPS) compared to pre-massage urine (VB2)', significance: 'Gold standard for diagnosing chronic bacterial prostatitis' }
        ]
      },
      differential: [
        { disease: 'Benign Prostatic Hyperplasia (BPH)', distinguishing: 'Gradual progression, absence of infectious signs, no fever' },
        { disease: 'Chronic Pelvic Pain Syndrome (CPPS / NIH Type III)', distinguishing: 'Similar chronic pain, but sterile urine and negative EPS cultures' },
        { disease: 'Prostate adenocarcinoma', distinguishing: 'Negative cultures, hard nodule on DRE, absence of acute inflammation' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fluoroquinolones (Levofloxacin / Ciprofloxacin)', dose: 'Levofloxacin 500mg PO QD or Ciprofloxacin 500mg PO BID', duration: '2-4 weeks for Acute, 4-6 weeks for Chronic!', note: 'EAU 2026 and IDSA first-line agents due to optimal prostate tissue penetration' },
            { drug: 'Trimethoprim-sulfamethoxazole (TMP-SMX)', dose: '960mg PO BID', duration: '4-6 weeks', note: 'First-line alternative in chronic prostatitis' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '2g IV QD', duration: 'Until afebrile, then step down to oral', note: 'For severe acute prostatitis' },
            { drug: 'Piperacillin/tazobactam', dose: '4.5g IV TID', duration: 'Until afebrile', note: 'In septic or nosocomial cases' }
          ]
        },
        targeted: 'Tailored according to antibiogram. EAU 2026: Antimicrobials must possess high lipid solubility and low protein binding to penetrate the prostatic capsule (Fluoroquinolones, TMP-SMX, Doxycycline).',
        supportive: [
          'Non-pharmacological therapy / Bladder Decompression: In acute urinary retention, SUPRAPUBIC CYSTOSTOMY catheterization is mandatory! Transurethral catheterization is CONTRAINDICATED in acute prostatitis as it exacerbates tissue damage and triggers bacteremia.',
          'Alpha-1 blockers (e.g. Tamsulosin 0.4mg PO QD or Silodosin 8mg PO QD) to reduce bladder neck resistance, improve voiding mechanics, and relieve pain.',
          'Anti-inflammatory analgesia: NSAIDs (Ibuprofen 400mg PO TID or Celecoxib) for 2-4 weeks.',
          'Warm sitz baths (38-40°C), avoid prolonged sitting (use specialized donut cushion).',
          'Stool softeners to prevent straining during defecation; adequate hydration.'
        ],
        prevention: [
          'Prompt and complete eradication of lower urinary tract infections.',
          'EAU 2026 guideline prior to prostate biopsy: Targeted rectal swab-based prophylaxis, or Ceftriaxone/Fosfomycin prophylaxis (avoid fluoroquinolone monotherapy due to resistance!).'
        ]
      },
      prognosis: {
        mortality: 'Low with appropriate treatment, but risk of urosepsis exists; chronic form causes substantial quality of life impairment',
        factors: 'Development of prostatic abscess, biofilm persistence, transition to CPPS'
      }
    },
    {
      id: 'asymptomatic_bacteriuria',
      name: 'Asymptomatic Bacteriuria (ASB)',
      pathogen: { type: 'Bacterium', name: '<i>Escherichia coli, Enterococcus faecalis, Klebsiella, Proteus, Streptococcus agalactiae (GBS)</i>', gram: 'Mixed', shape: 'Mixed' },
      epidemiology: {
        incidence: 'Healthy women: 3-5%, Diabetics: 9-27%, Long-term care residents: 25-50%, Chronic catheterization: 100%',
        risk_groups: ['Elderly', 'Diabetic patients', 'Catheterized individuals', 'Pregnant women', 'Spinal cord injury patients'],
        seasonality: 'None',
        transmission: 'Endogenous uropathogen colonization'
      },
      pathomechanism: {
        steps: [
          'Commensal Colonization: Low-virulence bacterial strains (lacking P-fimbriae and hemolysins) colonize the bladder without triggering mucosal invasion or inflammatory cascades.',
          'Immune Tolerance: A stable host-pathogen equilibrium is established without tissue injury.',
          'Protective Effect: Asymptomatic colonization by avirulent strains actually prevents superinfection by more aggressive, virulent uropathogens!'
        ],
        virulence_factors: ['Lack of virulence factors (loss of adhesins/fimbriae)']
      },
      clinical: {
        incubation: '-',
        onset: 'Asymptomatic',
        symptoms: [
          { name: 'Complete ABSENCE of clinical symptoms', description: 'The patient has NO lower or upper tract symptoms (no dysuria, no frequency, no fever, no flank pain). Bacteriuria is an incidental finding on screening or urinalysis.', severity: 'mild' }
        ],
        physical_exam: [
          'Completely normal physical examination',
          'Cloudy or malodorous urine ALONE is NOT a symptom and does NOT justify testing or treatment! (EAU 2026 / IDSA)',
          'No suprapubic or costovertebral angle tenderness'
        ],
        complications: ['Inappropriate antibiotic exposure leading to Clostridioides difficile colitis and multidrug-resistant selection!', 'Pyelonephritis and preterm delivery in PREGNANCY (mandatory indication for treatment!)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urine culture (EAU 2026 / IDSA)', finding: 'Women: ≥10^5 CFU/mL with the same organism in 2 CONSECUTIVE clean-catch midstream samples; Men: ≥10^5 CFU/mL in 1 clean-catch sample', interpretation: 'Strict diagnostic criteria for ASB' },
          { test: 'Catheterized specimen', finding: '≥10^5 CFU/mL in 1 sample', interpretation: 'Confirms bacteriuria' },
          { test: 'Urine sediment', finding: 'Pyuria is frequently present', interpretation: 'Pyuria alone DOES NOT indicate antibiotic therapy in asymptomatic patients! (EAU 2026 / IDSA)' }
        ],
        imaging: [
          { test: 'Imaging not indicated', finding: 'No indication', interpretation: 'Not indicated in asymptomatic patients' }
        ],
        microbiology: [
          { test: 'Urine culture screening', finding: 'Screening only in indicated populations', significance: 'ONLY indicated in pregnancy and prior to urological procedures with mucosal bleeding!' }
        ]
      },
      differential: [
        { disease: 'Symptomatic cystitis / pyelonephritis', distinguishing: 'Presence of subjective symptoms (dysuria, urgency) or systemic signs (fever)' },
        { disease: 'Specimen contamination', distinguishing: 'Low colony count (<10^5 CFU/mL), mixed polymicrobial flora' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'NO ANTIBIOTIC TREATMENT (DO NOT TREAT)', dose: '-', duration: '-', note: 'EAU 2026 & IDSA strong recommendation: DO NOT TREAT! (Except pregnancy and urological surgery)' }
          ],
          inpatient: [
            { drug: 'NO ANTIBIOTIC TREATMENT (DO NOT TREAT)', dose: '-', duration: '-', note: 'No indication in elderly, diabetics, catheterized, or renal transplant patients' }
          ]
        },
        targeted: 'EXCLUSIVE INDICATIONS FOR TREATMENT (EAU 2026 / IDSA ASB Guidelines):\n1) PREGNANT WOMEN: Screen at 12-16 weeks. Treat with targeted therapy based on culture (Fosfomycin 3g single dose, Nitrofurantoin 100mg BID for 5 days, Cephalexin or Amoxicillin-clavulanate for 5-7 days) to prevent pyelonephritis and premature labor.\n2) PRIOR TO UROLOGICAL PROCEDURES BREACHING THE MUCOSA (e.g. TURP, ureteroscopy): Targeted prophylaxis administered immediately pre-procedure.\nDO NOT TREAT: Postmenopausal women, diabetic patients, elderly residents, long-term catheterized patients, spinal cord injury patients!',
        supportive: [
          'Non-pharmacological education: Patient and nursing education that urine odor, color, or cloudiness alone does not constitute an infection and does not warrant antibiotic treatment.',
          'Liberal fluid intake, regular bladder emptying.',
          'Discontinuation of inappropriate routine urine screening in non-indicated populations.'
        ],
        prevention: [
          'AVOID unnecessary urine dipstick testing and cultures.',
          'Early removal of indwelling urinary catheters.',
          'Proper perineal hygiene and hydration.'
        ]
      },
      prognosis: {
        mortality: 'ASB does not increase mortality; treating it causes harm through adverse drug events and antimicrobial resistance',
        factors: 'Untreated in pregnancy increases risk of pyelonephritis and prematurity'
      }
    }
  ]
};
