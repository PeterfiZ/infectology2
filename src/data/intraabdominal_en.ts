import { Category } from '../types';

export const intraabdominalEn: Category = {
  name: 'Intra-abdominal Infections',
  icon: '🩺',
  color: '#16a34a',
  didactics: {
    overview: 'Intra-abdominal infections (IAIs) encompass a broad spectrum of pathological conditions ranging from uncomplicated localized inflammation (appendicitis, diverticulitis, cholecystitis) to life-threatening complicated peritonitis, liver abscesses, and ascending cholangitis. According to WSES (2020/2024), SIS (2024), EASL (2021/2023), and Tokyo Guidelines (TG18/TG23), management relies on two fundamental pillars: timely, adequate source control (surgical, endoscopic, or percutaneous) and tailored antimicrobial therapy.',
    primary: 'Spontaneous Bacterial Peritonitis (SBP): Monomicrobial infection of ascitic fluid in cirrhosis without an intra-abdominal surgical source. Diagnosis requires ascitic fluid polymorphonuclear (PMN) count ≥ 250/mm³ (0.25 x 10⁹/L). First-line empiric treatment: IV 3rd generation cephalosporin (Ceftriaxone 2g/day or Cefotaxime 2g q8h). Mandatory supportive co-therapy: IV Albumin (1.5 g/kg on day 1, 1.0 g/kg on day 3) to prevent acute kidney injury / hepatorenal syndrome (HRS-AKI) and reduce mortality (EASL guidelines).',
    secondary: 'Secondary Peritonitis & Complicated IAIs: Polymicrobial disruption of GI tract integrity leading to purulent or feculent peritonitis. Surgical or interventional source control within 6–12 hours is paramount. Antimicrobial therapy duration: Short-course therapy (4 days / 96 hours post-adequate source control according to the STOP-IT trial and WSES 2024 guidelines) is as effective as longer courses.',
    biliary: 'Acute Ascending Cholangitis & Acute Cholecystitis (Tokyo Guidelines TG18/TG23): Cholangitis is a medical emergency requiring urgent biliary decompression (ERCP with sphincterotomy/stent or PTC) within 12–24h + IV broad-spectrum antibiotics (Ceftriaxone+Metronidazole or Pip/Tazo). Cholecystitis requires early laparoscopic cholecystectomy within 72–96h of symptom onset.',
    diagnostics: [
      '1) Contrast-enhanced Abdominal/Pelvic CT scan (gold standard for peritonitis, abscess, diverticulitis staging, free air)',
      '2) Diagnostic Bedside Paracentesis (ascitic fluid PMN count and culture in blood culture bottles) for all cirrhotic patients upon admission or clinical deterioration',
      '3) Abdominal Ultrasound (first-line imaging for biliary tract pathology: acute cholecystitis and dilated bile ducts in cholangitis)',
      '4) Sepsis Biomarkers (Lactate, Procalcitonin, CBC) and blood cultures before initiating antimicrobial therapy',
      '5) Intraoperative or image-guided percutaneous specimen collection for Gram stain and aerobic/anaerobic culture'
    ],
    red_flags: [
      'Septic Shock (refractory hypotension, serum lactate > 2 mmol/L, altered sensorium)',
      'Board-like abdominal rigidity (muscular defense / pneumoperitoneum on CT)',
      'Reynolds Pentad in Cholangitis (Charcot triad + hypotension + confusion = Grade III TG18 severe cholangitis)',
      'Acute Kidney Injury / Hepatorenal Syndrome (HRS-AKI) in cirrhotic SBP',
      'Purulent or feculent peritonitis (Hinchey III/IV diverticulitis / perforated hollow viscus)'
    ],
    special_populations: 'Cirrhotic Patients: Diagnostic paracentesis is mandatory for any patient admitted with ascites or clinical worsening; IV Albumin co-administration is critical in SBP. Elderly & Immunocompromised: Classic peritoneal signs (guarding, fever) may be muted or absent; maintain a low threshold for CT scanning.',
    teaching_tip: 'In complicated IAIs, Source Control is king! Antibiotics support source control; they do NOT replace it. Following adequate source control, a 4-day antibiotic course is non-inferior to 8–10 days (STOP-IT trial / WSES 2024).'
  },
  tables: [
    {
      title: 'Differential Diagnosis & Guideline Summary for Major Intra-abdominal Infections',
      headers: ['Disease', 'Pathogen Profile', 'Diagnostic Gold Standard', 'Key Guideline Criteria', 'Empiric Antimicrobial Therapy', 'Interventional / Surgical Source Control'],
      rows: [
        ['Spontaneous Bacterial Peritonitis (SBP)', 'Monomicrobial: E. coli, K. pneumoniae, S. pneumoniae', 'Diagnostic Paracentesis: Ascitic PMN ≥ 250/mm³', 'EASL 2021/2023: PMN > 250/mm³ + IV Albumin 1.5g/kg (D1) & 1g/kg (D3)', 'Ceftriaxone 2g IV daily (Pip/Tazo or Meropenem if nosocomial)', 'Paracentesis only (No surgical source control indicated)'],
        ['Secondary Peritonitis', 'Polymicrobial: E. coli, Klebsiella, B. fragilis, Enterococcus', 'Contrast CT Abdomen (free air, fluid, perforation site)', 'WSES 2024 / SIS: Emergency source control <6-12h; 4-day ABx post-source control', 'Ceftriaxone 2g IV + Metronidazole 500mg IV q8h (Pip/Tazo 4.5g q6h if severe/nosocomial)', 'Urgent Surgical Laparotomy / Laparoscopy (Repair, Resection, Lavage)'],
        ['Pyogenic Liver Abscess', 'Mixed: E. coli, K. pneumoniae (ST23/K1), S. anginosus, Anaerobes', 'Abdominal CT / US (rim-enhancing hypodense lesion)', 'EASL/WSES: Image-guided aspiration/drainage + 4–6 weeks total ABx', 'Ceftriaxone 2g IV + Metronidazole 500mg IV q8h (Pip/Tazo 4.5g q6h if severe)', 'US/CT-guided Percutaneous Catheter Drainage (First-line)'],
        ['Acute Ascending Cholangitis', 'Mixed: E. coli, Klebsiella, Enterococcus, Pseudomonas, Anaerobes', 'Tokyo Guidelines (TG18/TG23): Charcot Triad / Reynolds Pentad + US/MRCP', 'TG18: Systemic inflammation + Cholestasis + Bile duct dilation on imaging', 'Ceftriaxone 2g IV + Metronidazole 500mg IV q8h (Pip/Tazo or Meropenem if Grade III)', 'Emergency / Urgent Biliary Decompression via ERCP (Stent/Sphincterotomy) or PTC'],
        ['Acute Cholecystitis', 'Mixed: E. coli, Klebsiella, Enterococcus, Pseudomonas', 'Abdominal US: Wall >3-4mm, fluid, sonographic Murphy sign', 'TG18 / WSES: Early Laparoscopic Cholecystectomy <72–96h from onset', 'Ceftriaxone 2g IV + Metronidazole 500mg IV q8h (Pip/Tazo if Grade III / Acalculous)', 'Early Laparoscopic Cholecystectomy (PTGBD drainage if unfit for surgery)'],
        ['Acute Diverticulitis', 'Mixed: E. coli, B. fragilis, Enterococcus, Peptostreptococcus', 'Contrast CT Abdomen: Wall >4mm, pericolic stranding, Hinchey staging', 'WSES 2020/2024: Outpatient non-ABx observation for uncomplicated (Hinchey 0/Ia)', 'Uncomplicated: Symptomatic only. Complicated: Amoxi-Clav PO or Ceftriaxone+Metronidazole IV', 'Percutaneous drainage for abscess ≥3-4cm; Surgery for Hinchey III/IV peritonitis']
      ]
    }
  ],
  diseases: [
    {
      id: 'primary_bacterial_peritonitis',
      name: 'Spontaneous Bacterial Peritonitis (SBP)',
      pathogen: {
        type: 'Bacteria',
        name: '<i>Escherichia coli</i> (40–50%), <i>Klebsiella pneumoniae</i> (15–20%), <i>Streptococcus pneumoniae</i>, <i>Enterococcus spp.</i> (typically monomicrobial)',
        gram: 'Variable',
        shape: 'Variable'
      },
      epidemiology: {
        incidence: 'Occurs in 10–30% of hospitalized cirrhotic patients with ascites; 1-year recurrence rate up to 70% without prophylaxis',
        risk_groups: [
          'Decompensated cirrhosis with ascites (especially low ascitic fluid protein < 1.5 g/dL / 15 g/L)',
          'Gastrointestinal bleeding in cirrhosis',
          'Prior episode of SBP',
          'Severe hyperbilirubinemia or impaired renal function (MELD score > 20)',
          'Nephrotic syndrome'
        ],
        seasonality: 'None',
        transmission: 'Translocation of endogenous gut bacterial flora across the compromised intestinal mucosal barrier'
      },
      pathomechanism: {
        steps: [
          'Bacterial Translocation: Intestinal hyperpermeability and dysbiosis in portal hypertension allow enteric bacteria to migrate through the intestinal wall into mesenteric lymph nodes.',
          'Bacteremia: Impaired reticuloendothelial phagocytic clearance (hepatic macrophage deficiency) leads to transient or persistent bacteremia.',
          'Ascitic Seeding: Bacteria colonize ascitic fluid with low opsonic activity (complement C3/C4 deficiency), allowing unchecked monomicrobial bacterial multiplication and peritoneal inflammation.'
        ],
        virulence_factors: ['Adhesins', 'Endotoxin (LPS)', 'Capsular polysaccharide', 'Bacterial translocation factors']
      },
      clinical: {
        incubation: 'Acute onset',
        onset: 'Gradual or sudden onset in cirrhotic patients',
        symptoms: [
          { name: 'Abdominal pain & tenderness', description: 'Diffuse, mild-to-moderate abdominal discomfort or rebound tenderness (spontaneous guarding).', severity: 'moderate' },
          { name: 'Fever & chills', description: 'Body temperature > 37.8°C or hypothermia in advanced liver failure / shock.', severity: 'moderate' },
          { name: 'Worsening Hepatic Encephalopathy', description: 'Sudden onset or rapid deterioration of altered mental status (flapping tremor, lethargy, confusion).', severity: 'severe' },
          { name: 'Unexplained Acute Kidney Injury (AKI)', description: 'Progressive oliguria or rising serum creatinine without an obvious renal cause.', severity: 'severe' },
          { name: 'Asymptomatic / Subtle presentation', description: 'Up to 20% of cases present without peritoneal signs; diagnosed solely on routine paracentesis.', severity: 'mild' }
        ],
        physical_exam: [
          'Diffuse abdominal tenderness, shifting dullness (ascites)',
          'Signs of chronic liver disease (spider naevi, palmar erythema, jaundice, caput medusae)',
          'Asterixis / Flapping tremor (Encephalopathy Grade I-III)',
          'Tachycardia, hypotension, or hypothermia in septic shock'
        ],
        complications: [
          'Hepatorenal Syndrome (HRS-AKI) due to splanchnic arterial vasodilation',
          'Acute-on-Chronic Liver Failure (ACLF)',
          'Septic shock and multiorgan dysfunction (MODS)',
          'High 30-day mortality (20–30%)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Diagnostic Paracentesis (Ascitic Fluid Analysis)', finding: 'Polymorphonuclear (PMN) count ≥ 250/mm³ (0.25 x 10⁹/L)', interpretation: 'DIAGNOSTIC FOR SBP! Empiric IV antibiotics must be started immediately.' },
          { test: 'Serum-Ascites Albumin Gradient (SAAG)', finding: '≥ 1.1 g/dL', interpretation: 'Confirms portal hypertension etiology' },
          { test: 'Ascitic Total Protein', finding: '< 1.5 g/dL (< 15 g/L)', interpretation: 'High risk for SBP recurrence; indicates need for primary prophylaxis' },
          { test: 'Serum Creatinine & Blood Urea Nitrogen', finding: 'Elevated (AKI)', interpretation: 'Monitors development of Hepatorenal Syndrome (HRS-AKI)' }
        ],
        imaging: [
          { modality: 'Abdominal Ultrasound', finding: 'Ascites fluid collection, liver cirrhosis architecture, guides bedside paracentesis', significance: 'First-line imaging' }
        ],
        microbiology: [
          { test: 'Ascitic Fluid Culture', finding: 'Inoculation of 10 mL ascitic fluid directly into blood culture bottles at bedside (aerobic + anaerobic)', significance: 'Monobacterial isolation in 50–80% of true SBP cases' },
          { test: 'Blood Cultures', finding: 'Positive in 30–50% of SBP cases', significance: 'Obtain prior to antibiotic administration' }
        ],
        differential: [
          { disease: 'Secondary Peritonitis in Cirrhosis', distinguishing: 'Polymicrobial culture, ascitic protein > 1.0 g/dL, glucose < 50 mg/dL, elevated LDH, free air on CT scan' },
          { disease: 'Culture-Negative Neutrocytic Ascites (CNNA)', distinguishing: 'PMN ≥ 250/mm³ but negative culture; managed identically to SBP' },
          { disease: 'Monomicrobial Non-neutrocytic Bacterascites (MNBA)', distinguishing: 'PMN < 250/mm³ with positive culture; treat if patient has symptoms' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxone', dose: '2g IV q24h', duration: '5–7 days', note: 'EASL First-line for community-acquired SBP' },
            { drug: 'Cefotaxime', dose: '2g IV q8h', duration: '5–7 days', note: 'Alternative 3rd-generation cephalosporin' },
            { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV q6h-q8h', duration: '5–7 days', note: 'For healthcare-associated SBP or severe sepsis' },
            { drug: 'Meropenem', dose: '1g IV q8h', duration: '5–7 days', note: 'For nosocomial SBP, septic shock, or suspected ESBL' }
          ]
        },
        targeted: 'Adjust therapy based on ascitic fluid culture and susceptibility report.',
        supportive: [
          'IV ALBUMIN INFUSION (EASL Guideline): 1.5 g/kg body weight within 6 hours of diagnosis (Day 1) AND 1.0 g/kg body weight on Day 3. Proven to reduce incidence of HRS-AKI from 30% to 10% and decrease mortality!',
          'Discontinue non-selective beta-blockers (NSBBs) if severe hypotension or AKI develops.',
          'Avoid all nephrotoxic drugs (NSAIDs, aminoglycosides, contrast media).'
        ],
        prevention: [
          'Secondary Prophylaxis (after 1st SBP episode): Continuous oral Norfloxacin 400mg daily OR Ciprofloxacin 500mg daily OR TMP-SMX 800/160mg daily indefinitely (or until liver transplantation).',
          'Primary Prophylaxis in Acute GI Bleeding: Ceftriaxone 1g IV daily for 7 days.',
          'Primary Prophylaxis in Low Ascitic Protein (<1.5 g/dL): Indicated if Child-Pugh ≥ 9 or serum bilirubin ≥ 3 mg/dL with renal dysfunction.'
        ]
      },
      guidelines: {
        diagnosis: [
          'Perform urgent diagnostic paracentesis in every cirrhotic patient with ascites admitted to the hospital, or presenting with fever, abdominal pain, encephalopathy, or AKI.',
          'SBP Diagnosis: Ascitic PMN count ≥ 250/mm³ (0.25 x 10⁹/L).'
        ],
        treatment_indications: [
          'Start empiric IV 3rd-generation cephalosporin immediately upon PMN ≥ 250/mm³ result.',
          'Co-administer IV Albumin (1.5 g/kg Day 1, 1.0 g/kg Day 3) to prevent Hepatorenal Syndrome and death (EASL Guideline).'
        ],
        first_line: ['Ceftriaxone 2g IV daily + IV Albumin infusion.'],
        supportive: ['Discontinue nephrotoxins, monitor renal function and fluid balance.'],
        prevention: ['Long-term oral quinolone or TMP-SMX prophylaxis after SBP recovery.']
      },
      prognosis: {
        mortality: '10–30% in-hospital mortality; 1-year mortality up to 50% without liver transplantation',
        prognostic_scores: ['MELD Score', 'Child-Pugh Score', 'CLIF-SOFA Score'],
        factors: 'Hepatorenal Syndrome (HRS-AKI), delayed paracentesis, and failure to administer IV Albumin significantly worsen survival.'
      }
    },
    {
      id: 'secondary_peritonitis',
      name: 'Secondary Peritonitis & Complicated Intra-abdominal Infections',
      pathogen: {
        type: 'Mixed (Bacteria)',
        name: '<i>Escherichia coli, Klebsiella pneumoniae, Proteus spp., Enterococcus faecalis, Bacteroides fragilis, Peptostreptococcus spp.</i> (polymicrobial aerobic + anaerobic mixture)',
        gram: 'Variable',
        shape: 'Variable'
      },
      epidemiology: {
        incidence: 'Common emergency surgical condition resulting from perforation or gangrene of the gastrointestinal tract',
        risk_groups: [
          'Perforated peptic ulcer disease',
          'Perforated acute appendicitis or diverticulitis',
          'Postoperative anastomotic leak',
          'Ischemic bowel necrosis',
          'Penetrating or blunt abdominal trauma'
        ],
        seasonality: 'None',
        transmission: 'Disruption of gastrointestinal wall integrity allowing endogenous visceral flora into the sterile peritoneal cavity'
      },
      pathomechanism: {
        steps: [
          'Visceral Perforation: Disruption of the GI tract wall spills gastric, biliary, or feculent contents into the peritoneal cavity.',
          'Peritoneal Inflammation: Polymicrobial invasion triggers severe fibrinopurulent inflammation, widespread vasodilation, exudation, and systemic cytokine release.',
          'Complicated Extravasation: Local containment attempts form abscesses or loculations; uncontained leakage leads to diffuse peritonitis, septic shock, and multiorgan dysfunction.'
        ],
        virulence_factors: ['Lipopolysaccharide (LPS)', 'Anaerobic capsule (B. fragilis)', 'Synergistic polymicrobial toxicity', 'Exotoxins']
      },
      clinical: {
        incubation: 'Acute onset',
        onset: 'Sudden, severe abdominal distress',
        symptoms: [
          { name: 'Severe Abdominal Pain', description: 'Sudden, excruciating, sharp abdominal pain aggravated by any body movement or coughing.', severity: 'severe' },
          { name: 'Fever & Rigors', description: 'High fever (>38.5°C) or hypothermia (<36.0°C) in severe sepsis.', severity: 'moderate' },
          { name: 'Paralytic Ileus Symptoms', description: 'Nausea, repeated bilious or feculent vomiting, absolute constipation (no gas or stool passage).', severity: 'severe' }
        ],
        physical_exam: [
          'Board-like abdominal rigidity (muscular defense / involuntäre Abwehrspannung)',
          'Rebound tenderness (Blumberg sign)',
          'Absent bowel sounds ("silent abdomen")',
          'Systemic signs: Tachycardia, hypotension, tachypnea, cold clammy extremities'
        ],
        complications: [
          'Septic Shock and Multiorgan Dysfunction Syndrome (MODS)',
          'Intra-abdominal abscess formation (subphrenic, pelvic, interloop)',
          'Postoperative anastomotic failure',
          'Abdominal compartment syndrome'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Complete Blood Count (CBC)', finding: 'Marked leukocytosis (>15,000/µL) with left shift, or leukopenia (<4,000/µL) in severe sepsis', interpretation: 'Severe systemic infection' },
          { test: 'Serum Lactate & Procalcitonin', finding: 'Lactate > 2.0 mmol/L, elevated PCT', interpretation: 'Tissue hypoperfusion, severe sepsis indicator' }
        ],
        imaging: [
          { modality: 'Contrast-Enhanced CT Abdomen/Pelvis', finding: 'Pneumoperitoneum (free air under diaphragm/peritoneal cavity), fluid collections, phlegmon, focal wall defect', significance: 'GOLD STANDARD for diagnosing perforation site and planning source control' },
          { modality: 'Upright Chest / Abdominal X-ray', finding: 'Free air under diaphragm (subdiaphragmatic crescent)', significance: 'Rapid initial bedside confirmation of hollow viscus perforation' }
        ],
        microbiology: [
          { test: 'Intraoperative Fluid Culture', finding: 'Polymicrobial growth (aerobic Gram-negatives + anaerobes)', significance: 'Guides postoperative targeted antimicrobial adjustment' },
          { test: 'Blood Cultures', finding: 'Positive in 20–40% of cases', significance: 'Obtain prior to surgery and antimicrobial initiation' }
        ],
        differential: [
          { disease: 'Spontaneous Bacterial Peritonitis (SBP)', distinguishing: 'Ascites background, monomicrobial culture, no free air on CT, no surgical perforation' },
          { disease: 'Acute Pancreatitis', distinguishing: 'Markedly elevated serum lipase (>3x ULN), pancreatic swelling/necrosis on CT without free air' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxone + Metronidazole', dose: '2g IV q24h + 500mg IV q8h', duration: '4 days post-adequate source control (WSES 2024 / STOP-IT trial)', note: 'Mild/Moderate Community-acquired' },
            { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV q6h-q8h', duration: '4 days post-adequate source control', note: 'Severe Community-acquired / Healthcare-associated' },
            { drug: 'Meropenem', dose: '1g IV q8h', duration: '4 days post-adequate source control', note: 'Septic shock, high ESBL risk, or healthcare-associated' }
          ]
        },
        targeted: 'Adjust based on intraoperative microbiology, keeping anaerobic coverage intact.',
        supportive: ['Immediate goal-directed fluid resuscitation (crystalloids), vasopressors (Norepinephrine) for septic shock, ICU admission.'],
        prevention: ['Perioperative antibiotic prophylaxis, timely management of peptic ulcer and acute appendicitis/diverticulitis.']
      },
      guidelines: {
        diagnosis: [
          'Perform urgent contrast-enhanced CT of the abdomen/pelvis to pinpoint perforation and abscess location.',
          'Obtain blood cultures and serum lactate immediately upon suspicion of sepsis.'
        ],
        treatment_indications: [
          'SURGICAL OR INTERVENTIONAL SOURCE CONTROL WITHIN 6–12 HOURS IS MANDATORY (suture repair, resection, lavage, drainage)!',
          'WSES 2024 / SIS GUIDELINES (STOP-IT TRIAL): After successful, adequate source control, a 4-day (96-hour) post-operative antimicrobial course is fully effective and non-inferior to longer regimens!'
        ],
        first_line: ['Urgent Surgical Source Control + Broad-spectrum IV Antibiotics (Ceftriaxone+Metronidazole or Pip/Tazo).'],
        supportive: ['Hemodynamic stabilization, sepsis resuscitation protocol.'],
        prevention: ['Aseptic surgical technique, early identification of anastomotic leak.']
      },
      prognosis: {
        mortality: '10–40% (exceeds 50% in septic shock or delayed source control in elderly patients)',
        prognostic_scores: ['APACHE II Score', 'Mannheim Peritonitis Index (MPI)', 'WSES Sepsis Score'],
        factors: 'Rapidity and adequacy of surgical source control is the single primary determinant of survival.'
      }
    },
    {
      id: 'pyogenic_liver_abscess',
      name: 'Pyogenic Liver Abscess',
      pathogen: {
        type: 'Mixed (Bacteria)',
        name: '<i>Escherichia coli, Klebsiella pneumoniae</i> (hypermucoviscous ST23/K1 serotypes), <i>Streptococcus anginosus</i> group, <i>Bacteroides fragilis</i>',
        gram: 'Variable',
        shape: 'Variable'
      },
      epidemiology: {
        incidence: 'Most common visceral abscess; incidence 2–4 per 100,000 per year',
        risk_groups: [
          'Biliary tract pathology (choledocholithiasis, cholangitis, biliary stricture/stent)',
          'Diabetes mellitus (strongly predisposes to hypervirulent K. pneumoniae abscesses)',
          'Intra-abdominal infection (appendicitis, diverticulitis, IBD)',
          'Malignancy (colorectal carcinoma, pancreaticobiliary cancer)',
          'Immunosuppression'
        ],
        seasonality: 'None',
        transmission: 'Ascending biliary spread (40–50%), portal vein pyemia (pylephlebitis), hematogenous seeding via hepatic artery, or direct extension'
      },
      pathomechanism: {
        steps: [
          'Bacterial Seeding: Pathogens reach hepatic parenchyma via infected bile ducts, portal blood flow, or hepatic arterial bacteremia.',
          'Parenchymal Necrosis: Microvascular thrombosis and bacterial proliferation cause localized liver tissue necrosis, leukocyte infiltration, and liquefactive purulent accumulation.',
          'Hypermucoviscous Syndrome: Hypervirulent K. pneumoniae (K1/K2) strains produce capsular polysaccharides enabling septic metastatic dissemination (endophthalmitis, brain abscess, meningitis).'
        ],
        virulence_factors: ['Hypermucoviscosity (rmpA, magA genes)', 'Siderophores (aerobactin)', 'B. fragilis capsule', 'Cytotoxins']
      },
      clinical: {
        incubation: 'Subacute onset (days to weeks)',
        onset: 'Insidious, constitutional presentation',
        symptoms: [
          { name: 'Fever & Chills', description: 'Spiking fever with rigors, night sweats, and malaise (main presenting feature in >85%).', severity: 'moderate' },
          { name: 'Right Upper Quadrant (RUQ) Pain', description: 'Dull, constant RUQ abdominal pain, sometimes with pleuritic chest pain radiating to the right shoulder.', severity: 'moderate' },
          { name: 'Anorexia & Weight Loss', description: 'Progressive fatigue, involuntary weight loss, nausea.', severity: 'mild' }
        ],
        physical_exam: [
          'RUQ tenderness to palpation, hepatomegaly',
          'Intercostal tenderness over lower right ribs',
          'Jaundice (present in ~25%, higher if biliary obstruction)',
          'Right lung base dullness / decreased breath sounds (sympathetic pleural effusion)'
        ],
        complications: [
          'Abscess rupture into peritoneal cavity (peritonitis) or pleural space (empyema)',
          'Metastatic Endophthalmitis (K. pneumoniae syndrome - permanent visual loss risk!)',
          'Septic shock and portal vein thrombosis (pylephlebitis)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Complete Blood Count (CBC)', finding: 'Leukocytosis with left shift, normocytic anemia', interpretation: 'Chronic/subacute inflammation' },
          { test: 'Liver Enzymes', finding: 'Markedly elevated Alkaline Phosphatase (ALP) and GGT, variable Bilirubin', interpretation: 'Cholestatic space-occupying lesion pattern' }
        ],
        imaging: [
          { modality: 'Contrast CT Abdomen/Pelvis', finding: 'Hypodense, rim-enhancing multilocular or unilocular fluid collection with surrounding parenchymal hyperemia ("double-target sign")', significance: 'GOLD STANDARD for mapping location, size, and guiding drainage' },
          { modality: 'Abdominal Ultrasound', finding: 'Hypoechoic or complex fluid collection with internal debris', significance: 'First-line rapid diagnostic and guidance tool' }
        ],
        microbiology: [
          { test: 'Abscess Fluid Gram Stain & Culture', finding: 'Purulent aspirate yields bacterial pathogen', significance: 'CRITICAL for definitive microbiological diagnosis and targeted antibiotics' },
          { test: 'Blood Cultures', finding: 'Positive in 50% of pyogenic liver abscesses', significance: 'Obtain prior to antibiotic initiation' },
          { test: 'Epitope / Serology Tests', finding: 'E. histolytica serology negative', significance: 'Rules out amoebic liver abscess' }
        ],
        differential: [
          { disease: 'Amoebic Liver Abscess (Entamoeba histolytica)', distinguishing: 'Endemic travel history, single right lobe lesion, positive E. histolytica serology; ASPIRATION NOT ROUTINELY NEEDED (Metronidazole cure)' },
          { disease: 'Echinococcal (Hydatid) Cyst', distinguishing: 'E. granulosus serology, multilocular daughter cysts on US/CT; ROUTINE PERCUTANEOUS NEEDLE ASPIRATION CONTRAINDICATED (anaphylaxis risk!)' },
          { disease: 'Hepatocellular Carcinoma / Metastasis', distinguishing: 'Tumor markers (AFP, CEA), hypervascular arterial enhancement on CT' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxone + Metronidazole', dose: '2g IV q24h + 500mg IV q8h', duration: '2–4 weeks IV, total 4–6 weeks', note: 'Standard First-line empiric regimen' },
            { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV q6h-q8h', duration: '2–4 weeks IV, total 4–6 weeks', note: 'For severe illness or biliary tract origin' },
            { drug: 'Meropenem', dose: '1g IV q8h', duration: '2–4 weeks IV, total 4–6 weeks', note: 'For septic shock or ESBL-producing organisms' }
          ]
        },
        targeted: 'Step-down to oral antibiotics (e.g., Ciprofloxacin/Amoxicillin-Clavulanate + Metronidazole) based on culture for total 4–6 weeks course.',
        supportive: [
          'IMAGE-GUIDED PERCUTANEOUS CATHETER DRAINAGE (PCD) OR ASPIRATION: First-line intervention for source control! Drainage is indicated for abscesses > 3–5 cm.',
          'Ophthalmology consultation for funduscopic exam if K. pneumoniae isolated (rule out endophthalmitis).'
        ],
        prevention: ['Prompt management of biliary disease and intra-abdominal infections.']
      },
      guidelines: {
        diagnosis: [
          'Perform diagnostic US or CT-guided aspiration for Gram stain and culture.',
          'Rule out amoebic and echinococcal etiology prior to intervention.'
        ],
        treatment_indications: [
          'Abscesses < 3–5 cm: Can be treated with antibiotics alone or needle aspiration.',
          'Abscesses > 3–5 cm, multiloculated, or thick pus: Percutaneous Catheter Drainage (PCD) + IV Antibiotics.',
          'Surgical Drainage: Reserved for PCD failure, multiloculated rupture, or concurrent surgical pathology.'
        ],
        first_line: ['Percutaneous Catheter Drainage + IV Ceftriaxone + Metronidazole.'],
        supportive: ['Ophthalmologic screening for K. pneumoniae endophthalmitis.'],
        prevention: ['Treat underlying biliary stone disease.']
      },
      prognosis: {
        mortality: '5–10% with percutaneous drainage; up to 40% if untreated or ruptured',
        prognostic_scores: ['APACHE II Score'],
        factors: 'Multiple abscesses, underlying biliary malignancy, delayed drainage, and metastatic endophthalmitis worsen outcomes.'
      }
    },
    {
      id: 'cholangitis',
      name: 'Acute Ascending Cholangitis',
      pathogen: {
        type: 'Mixed (Bacteria)',
        name: '<i>Escherichia coli</i> (25–50%), <i>Klebsiella pneumoniae</i> (15–20%), <i>Enterococcus spp.</i>, <i>Enterobacter</i>, <i>Pseudomonas aeruginosa</i>, <i>Bacteroides fragilis</i>',
        gram: 'Variable',
        shape: 'Variable'
      },
      epidemiology: {
        incidence: 'Life-threatening biliary infection caused by biliary tract obstruction',
        risk_groups: [
          'Choledocholithiasis (common bile duct stones - most common cause ~70%)',
          'Malignant biliary stricture (pancreatic carcinoma, cholangiocarcinoma, ampullary tumor)',
          'Biliary stent occlusion',
          'Benign strictures or post-ERCP complication'
        ],
        seasonality: 'None',
        transmission: 'Bacterial ascension from the duodenum into the biliary tree in the setting of elevated intrabiliary pressure'
      },
      pathomechanism: {
        steps: [
          'Biliary Obstruction: Biliary flow stasis (stone, tumor, clogged stent) increases intrabiliary duct pressure (>20 cmH₂O).',
          'Bacterial Proliferation: Intestinal bacteria ascending from the duodenum colonize stagnant bile.',
          'Cholangiovenous Reflux: Elevated intrabiliary pressure breaks tight junction mucosal barriers, forcing bacteria and endotoxins into hepatic veins and systemic circulation, causing severe septic shock.'
        ],
        virulence_factors: ['Endotoxin (LPS)', 'Adhesins', 'Biofilm formation on biliary stents']
      },
      clinical: {
        incubation: 'Acute onset',
        onset: 'Rapidly progressive, severe illness',
        symptoms: [
          { name: 'Charcot Triad', description: 'Fever/chills + Right Upper Quadrant pain + Jaundice (classic triad present in ~50–70% of cases).', severity: 'severe' },
          { name: 'Reynolds Pentad', description: 'Charcot Triad + Hypotension (Septic Shock) + Altered Mental Status (Lethargy/Confusion). Indicates Grade III Severe Cholangitis!', severity: 'severe' }
        ],
        physical_exam: [
          'Jaundice (scleral icterus, yellow skin)',
          'RUQ abdominal tenderness / guarding',
          'Fever (>38.5°C) or hypothermia',
          'Hypotension, tachycardia, altered sensorium in severe cases (Reynolds pentad)'
        ],
        complications: [
          'Septic Shock and Multiorgan Failure',
          'Pyogenic Liver Abscesses',
          'Acute Kidney Injury (AKI)',
          'Disseminated Intravascular Coagulation (DIC)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Liver Function Tests (LFTs)', finding: 'Markedly elevated conjugated Bilirubin (≥2.0 mg/dL), ALP, GGT, AST, ALT', interpretation: 'Cholestatic pattern with biliary obstruction' },
          { test: 'Inflammatory Markers', finding: 'Leukocytosis (>12,000/µL or <4,000/µL), elevated CRP and Procalcitonin', interpretation: 'Systemic inflammatory response / Sepsis' }
        ],
        imaging: [
          { modality: 'Abdominal Ultrasound', finding: 'Dilated intra- and extrahepatic bile ducts (common bile duct diameter >6–8mm), gallstones, choledocholithiasis', significance: 'First-line imaging' },
          { modality: 'MRCP / Contrast CT Abdomen', finding: 'Visualizes exact location of bile duct stones, tumors, or stent occlusion', significance: 'Performed if US is inconclusive' }
        ],
        microbiology: [
          { test: 'Blood Cultures', finding: 'Positive in 20–50% of cases (Gram-negative bacilli)', significance: 'Mandatory before antibiotics' },
          { test: 'Bile Culture', finding: 'Polymicrobial culture obtained during ERCP decompression', significance: 'Guides targeted therapy' }
        ],
        differential: [
          { disease: 'Acute Cholecystitis', distinguishing: 'Jaundice rare, bile ducts NOT dilated (gallbladder wall thickened)' },
          { disease: 'Pyogenic Liver Abscess', distinguishing: 'Fluid collection on CT, jaundice less prominent' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxone + Metronidazole', dose: '2g IV q24h + 500mg IV q8h', duration: '4–7 days post-decompression', note: 'Tokyo Guidelines TG18 Grade I-II Community-acquired' },
            { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV q6h-q8h', duration: '4–7 days post-decompression', note: 'TG18 Grade III Severe / Healthcare-associated / Clogged Stent' },
            { drug: 'Meropenem', dose: '1g IV q8h', duration: '4–7 days post-decompression', note: 'Septic shock, suspected ESBL' }
          ]
        },
        targeted: 'Adjust based on bile and blood culture results.',
        supportive: ['Immediate goal-directed IV fluid resuscitation, vasopressors (Norepinephrine) for shock, ICU monitoring.'],
        prevention: ['Elective endoscopic stone clearance, timely biliary stent replacement.']
      },
      guidelines: {
        diagnosis: [
          'TOKYO GUIDELINES (TG18/TG23) DIAGNOSTIC CRITERIA:',
          'A. Systemic Inflammation: Fever/chills or WBC <4.0 or >10.0 x10⁹/L, CRP ≥1 mg/dL.',
          'B. Cholestasis: Jaundice (Bilirubin ≥2.0 mg/dL) or ALP/GGT/AST/ALT >1.5x ULN.',
          'C. Imaging: Biliary dilation or evidence of etiology (stone, stricture, stent).',
          'Suspected: 1 item A + 1 item B or C. Definite: 1 item A + 1 item B + 1 item C.'
        ],
        treatment_indications: [
          'TOKYO GUIDELINES (TG18/TG23) SEVERITY & BILIARY DECOMPRESSION STRATEGY:',
          'Grade III (Severe): Organ dysfunction (shock, confusion, PaO2/FiO2 <300, Cr >2.0, INR >1.5) -> EMERGENCY BILIARY DECOMPRESSION (ERCP / PTC) + ICU + IV Antibiotics.',
          'Grade II (Moderate): WBC >12,000, Fever ≥39°C, Age ≥75, Bilirubin ≥5 mg/dL -> URGENT BILIARY DECOMPRESSION (within 24–48h) + IV Antibiotics.',
          'Grade I (Mild): Antimicrobial therapy; if no response within 24h, early biliary decompression.'
        ],
        first_line: ['ERCP with Sphincterotomy / Stone Extraction / Stenting + Broad-spectrum IV Antibiotics.'],
        supportive: ['ICU admission, vasopressors.'],
        prevention: ['Cholecystectomy after resolution of acute cholangitis.']
      },
      prognosis: {
        mortality: '5–10% with timely biliary decompression; near 100% without biliary drainage in severe cholangitis',
        prognostic_scores: ['Tokyo Guidelines TG18/TG23 Severity Score'],
        factors: 'Immediate endoscopic biliary decompression is the definitive life-saving procedure.'
      }
    },
    {
      id: 'acute_cholecystitis',
      name: 'Acute Cholecystitis',
      pathogen: {
        type: 'Mixed (Bacteria)',
        name: '<i>Escherichia coli, Klebsiella pneumoniae, Enterococcus spp., Enterobacter, Pseudomonas, Anaerobes</i>',
        gram: 'Variable',
        shape: 'Variable'
      },
      epidemiology: {
        incidence: 'One of the most common surgical emergencies',
        risk_groups: [
          'Gallstone disease (Female, >40 years, Obesity, Fertile/Multiparity - "4 Fs")',
          'Acalculous cholecystitis: Critically ill ICU patients, severe trauma, burns, sepsis, prolonged TPN'
        ],
        seasonality: 'None',
        transmission: 'Impaction of a gallstone in the cystic duct leading to luminal obstruction, ischemia, and secondary bacterial infection'
      },
      pathomechanism: {
        steps: [
          'Cystic Duct Obstruction: Impacted gallstone obstructs gallbladder outflow.',
          'Wall Distension & Ischemia: Gallbladder luminal pressure rises, impairing venous/lymphatic drainage and causing mucosal ischemia and chemical inflammation (lysolecithin).',
          'Secondary Bacterial Infection: Stagnant bile is superinfected by enteric bacteria in 50–80% of cases.',
          'Acalculous Cholecystitis: Bile stasis and splanchnic ischemia lead to direct gallbladder wall necrosis without stones in critically ill patients.'
        ],
        virulence_factors: ['Bacterial mucosal invasion', 'Ischemia-enhanced endotoxemia']
      },
      clinical: {
        incubation: 'Acute onset',
        onset: 'Gradually worsening, then persistent abdominal pain',
        symptoms: [
          { name: 'RUQ / Epigastric Pain', description: 'Constant, severe RUQ pain radiating to the right scapula or shoulder, lasting >6 hours.', severity: 'severe' },
          { name: 'Nausea & Vomiting', description: 'Frequent accompanying symptom.', severity: 'moderate' },
          { name: 'Fever & Chills', description: 'Low-grade fever, progressing to high fever with rigors if gangrene or empyema develops.', severity: 'moderate' }
        ],
        physical_exam: [
          'Positive Murphy Sign (focal tenderness and abrupt arrest of inspiration upon palpation of the RUQ)',
          'RUQ abdominal tenderness, localized guarding',
          'Palpable, tender gallbladder mass (hydrops or empyema)',
          'Jaundice is usually ABSENT (if present, suspect choledocholithiasis or Mirizzi syndrome)'
        ],
        complications: [
          'Gangrenous Cholecystitis',
          'Empyema of the Gallbladder (suppurative cholecystitis)',
          'Gallbladder Perforation and Biliary Peritonitis',
          'Pericholecystic Abscess',
          'Gallstone Ileus (cholecysto-enteric fistula)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Complete Blood Count (CBC) & CRP', finding: 'Leukocytosis (>12,000/µL) with left shift, markedly elevated CRP', interpretation: 'Acute inflammation' },
          { test: 'Liver Function Tests (LFTs)', finding: 'Usually normal or mildly elevated; marked ALP/Bilirubin elevation suggests common bile duct stone', interpretation: 'Assesses biliary involvement or obstruction' }
        ],
        imaging: [
          { modality: 'Abdominal Ultrasound', finding: 'Thickened gallbladder wall (>3–4 mm), pericholecystic fluid, impacted gallstone, sonographic Murphy sign', significance: 'GOLD STANDARD (Sensitivity >90%)' },
          { modality: 'Contrast CT / HIDA Scan', finding: 'CT: Wall enhancement, pericholecystic fat stranding, perforation. HIDA: Non-visualization of gallbladder', significance: 'Used if US is inconclusive or complications suspected' }
        ],
        microbiology: [
          { test: 'Blood Cultures', finding: 'Obtain in severe cases or fever', significance: 'Sepsis workup' },
          { test: 'Bile Culture', finding: 'Intraoperative bile culture', significance: 'Guides targeted therapy in complicated cases' }
        ],
        differential: [
          { disease: 'Acute Cholangitis', distinguishing: 'Jaundice, dilated bile ducts, Reynolds pentad' },
          { disease: 'Acute Pancreatitis', distinguishing: 'Lipase elevated >3x ULN' },
          { disease: 'Peptic Ulcer Disease', distinguishing: 'Gastroscopy findings' }
        ]
      },
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Ceftriaxone + Metronidazole', dose: '2g IV q24h + 500mg IV q8h', duration: 'Until surgery / resolution', note: 'Tokyo Guidelines TG18 Grade I-II Mild/Moderate' },
            { drug: 'Amoxicillin-Clavulanate', dose: '1.2g IV q8h', duration: 'Until surgery / resolution', note: 'Alternative empiric regimen' },
            { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV q6h-q8h', duration: 'Until surgery / resolution', note: 'TG18 Grade III Severe / Acalculous / Healthcare-associated' }
          ]
        },
        targeted: 'Based on intraoperative bile culture.',
        supportive: ['IV fluid resuscitation, analgesia (NSAIDs / opioids).'],
        prevention: ['Elective cholecystectomy for symptomatic gallstones.']
      },
      guidelines: {
        diagnosis: [
          'TOKYO GUIDELINES (TG18/TG23) DIAGNOSTIC CRITERIA:',
          'A. Local Inflammation: Murphy sign, RUQ pain/tenderness/mass.',
          'B. Systemic Inflammation: Fever, elevated CRP, elevated WBC.',
          'C. Imaging: Characteristic ultrasound findings of acute cholecystitis.',
          'Suspected: 1 item A + 1 item B. Definite: 1 item A + 1 item B + 1 item C.'
        ],
        treatment_indications: [
          'TOKYO GUIDELINES (TG18/TG23) & WSES GUIDELINES SEVERITY & SURGICAL STRATEGY:',
          'Grade I (Mild): EARLY LAPAROSCOPIC CHOLECYSTECTOMY (Lap-C) within 72–96 hours of symptom onset is the treatment of choice!',
          'Grade II (Moderate): WBC >18,000, tender mass, symptoms >72h, or local gangrene -> Early Laparoscopic Cholecystectomy by experienced surgeon; if high surgical risk -> Percutaneous Transhepatic Gallbladder Drainage (PTGBD).',
          'Grade III (Severe): Organ dysfunction -> PERCUTANEOUS TRANSHEPATIC GALLBLADDER DRAINAGE (PTGBD) + IV Antibiotics + ICU admission.'
        ],
        first_line: ['Early Laparoscopic Cholecystectomy + IV Antibiotics (Ceftriaxone+Metronidazole).'],
        supportive: ['Analgesia, PTGBD drainage in high-risk non-surgical candidates.'],
        prevention: ['Elective laparoscopic cholecystectomy for symptomatic gallstones.']
      },
      prognosis: {
        mortality: '1–3% overall; higher (>10%) in acalculous cholecystitis or gallbladder perforation',
        prognostic_scores: ['Tokyo Guidelines TG18/TG23 Severity Score'],
        factors: 'Early laparoscopic cholecystectomy (<72h) significantly reduces complication rates and hospital stay.'
      }
    },
    {
      id: 'acute_diverticulitis',
      name: 'Acute Diverticulitis',
      pathogen: {
        type: 'Mixed (Bacteria)',
        name: '<i>Escherichia coli, Bacteroides fragilis, Enterococcus spp., Klebsiella, Peptostreptococcus</i>',
        gram: 'Variable',
        shape: 'Variable'
      },
      epidemiology: {
        incidence: 'Very common in Western countries; present in ~50% of people >60 years (diverticulosis), with 10–25% developing acute diverticulitis',
        risk_groups: [
          'Age >50–60 years',
          'Low-fiber, highly processed Western diet',
          'Obesity and physical inactivity',
          'Chronic use of NSAIDs, corticosteroids, or opioids'
        ],
        seasonality: 'None',
        transmission: 'Obstruction and microperforation of colonic diverticula (most commonly sigmoid colon ~90%)'
      },
      pathomechanism: {
        steps: [
          'Diverticula Formation: False diverticula (mucosal outpouchings) form at weak points in the colonic muscularis wall where vasa recta penetrate.',
          'Fecalith Obstruction & Microperforation: A fecalith obstructs the diverticular neck, causing localized ischemia, bacterial overgrowth, and microperforation.',
          'Complicated Progression: Uncontrolled microperforation leads to pericolic phlegmon, abscess, macroperforation with purulent or feculent peritonitis, or fistula formation.'
        ],
        virulence_factors: ['Synergistic polymicrobial tissue necrosis', 'Colonic flora invasiveness']
      },
      clinical: {
        incubation: 'Acute onset',
        onset: 'Gradually worsening abdominal pain',
        symptoms: [
          { name: 'Left Lower Quadrant (LLQ) Pain', description: 'Constant, dull or cramping LLQ pain ("left-sided appendicitis").', severity: 'moderate' },
          { name: 'Fever & Rigors', description: 'Low-grade fever in uncomplicated cases; high fever with chills in abscess or peritonitis.', severity: 'moderate' },
          { name: 'Altered Bowel Habits', description: 'Constipation (more common) or diarrhea, abdominal bloating, tenesmus.', severity: 'mild' }
        ],
        physical_exam: [
          'Left lower quadrant abdominal tenderness, localized guarding',
          'Palpable tender LLQ mass (phlegmon or abscess)',
          'Signs of diffuse peritonitis (rigidity, rebound tenderness) if free perforation occurs'
        ],
        complications: [
          'Pericolic or pelvic abscess (Hinchey Ib / II)',
          'Free perforation with purulent or feculent peritonitis (Hinchey III / IV)',
          'Fistula formation (Colovesical fistula -> pneumaturia, fecaluria; Colovaginal fistula)',
          'Colonic stricture and bowel obstruction'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Complete Blood Count (CBC) & CRP', finding: 'Leukocytosis with left shift, elevated CRP (>50 mg/L)', interpretation: 'Inflammatory activity marker' },
          { test: 'Urinalysis', finding: 'Sterile pyuria possible', interpretation: 'Adjacent colonic inflammation irritating the bladder' }
        ],
        imaging: [
          { modality: 'Contrast CT Abdomen/Pelvis', finding: 'Colonic wall thickening (>4 mm), pericolic fat stranding, diverticula, abscess, free extraluminal gas', significance: 'GOLD STANDARD for diagnosis and Hinchey / WSES staging' },
          { modality: 'Colonoscopy', finding: 'STRICTLY CONTRAINDICATED in the acute phase', significance: 'High risk of converting microperforation to free macroperforation! Recommended 6 weeks post-recovery to exclude colorectal cancer.' }
        ],
        microbiology: [
          { test: 'Abscess Fluid Culture', finding: 'Polymicrobial flora obtained via percutaneous drainage', significance: 'Guides targeted therapy' }
        ],
        differential: [
          { disease: 'Colorectal Carcinoma', distinguishing: 'CT, followed by delayed colonoscopy 6 weeks post-recovery' },
          { disease: 'Inflammatory Bowel Disease (Crohn\'s Disease)', distinguishing: 'History, endoscopy' },
          { disease: 'Gynecological Disorders (Ovarian cyst rupture, PID)', distinguishing: 'Pelvic ultrasound' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Symptomatic Observational Care ONLY (No Antibiotics)', dose: '-', duration: '-', note: 'WSES 2020/2024 & EAES Guidelines: Safe for uncomplicated CT-confirmed diverticulitis (Hinchey 0/Ia) in immunocompetent patients!' },
            { drug: 'Amoxicillin-Clavulanate', dose: '875/125mg PO BID', duration: '5–7 days', note: 'Outpatient ABx if immunocompromised, high risk, or systemic symptoms' },
            { drug: 'Ciprofloxacin + Metronidazole', dose: '500mg PO BID + 500mg PO TID', duration: '5–7 days', note: 'If penicillin allergic' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone + Metronidazole', dose: '2g IV q24h + 500mg IV q8h', duration: '4–7 days', note: 'Complicated diverticulitis (Hinchey Ib-II)' },
            { drug: 'Piperacillin-Tazobactam', dose: '4.5g IV q6h-q8h', duration: '4–7 days', note: 'Severe peritonitis (Hinchey III-IV)' }
          ]
        },
        targeted: 'Adjust based on abscess fluid culture.',
        supportive: [
          'Percutaneous CT-guided drainage for abscesses ≥ 3–4 cm (Hinchey Ib/II).',
          'Clear liquid diet / bowel rest during acute phase.'
        ],
        prevention: ['High-fiber diet, adequate hydration, weight management, physical activity.']
      },
      guidelines: {
        diagnosis: [
          'Perform contrast-enhanced CT of abdomen/pelvis for accurate diagnosis and Hinchey staging.',
          'Avoid colonoscopy during acute inflammation; schedule 6 weeks later.'
        ],
        treatment_indications: [
          'Uncomplicated Diverticulitis (Hinchey 0 / Ia): Observational outpatient care without antibiotics is safe in immunocompetent patients (AVOD & DIABOLO trials / WSES 2024)!',
          'Complicated Diverticulitis with Abscess ≥ 3–4 cm (Hinchey Ib / II): Percutaneous Drainage + Antibiotics.',
          'Purulent or Feculent Peritonitis (Hinchey III / IV): Urgent Surgery (Hartmann procedure or primary resection with anastomosis +/- loop ileostomy).'
        ],
        first_line: ['Uncomplicated: Observational care. Complicated: Antibiotics + Percutaneous drainage / Surgery.'],
        supportive: ['Clear liquids, percutaneous abscess drainage.'],
        prevention: ['High-fiber diet, colonoscopy at 6 weeks to rule out malignancy.']
      },
      prognosis: {
        mortality: '<1% in uncomplicated diverticulitis; up to 20% in perforated feculent peritonitis',
        prognostic_scores: ['Hinchey Classification', 'WSES Diverticulitis Staging'],
        factors: 'Hinchey stage and immunosuppression dictate surgical management and survival.'
      }
    }
  ]
};
