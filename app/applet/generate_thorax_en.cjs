const fs = require('fs');

const enData = {
  bacterial_respiratory: {
    name: 'Bacterial Respiratory Infections',
    icon: 'window.diseaseMetadata.bacterial_respiratory.icon',
    color: 'window.diseaseMetadata.bacterial_respiratory.color',
    tables: [
      {
        title: 'Differential Diagnosis: Typical vs. Atypical Pneumonia',
        headers: ['Feature', 'Typical Pneumonia', 'Atypical Pneumonia'],
        rows: [
          ['Onset', 'Sudden, dramatic (chills/rigors)', 'Subacute, insidious (prodrome)'],
          ['Fever', 'High (>39°C / 102.2°F)', 'Low-grade or moderate fever'],
          ['Chest Pain', 'Pleuritic, sharp (common)', 'Retrosternal, burning (less common)'],
          ['Cough', 'Productive', 'Dry, non-productive, hacking'],
          ['Sputum', 'Purulent, rust-colored', 'Scant, mucoid, or absent'],
          ['Pleural Effusion', 'Common (parapneumonic)', 'Rare'],
          ['Radiology', 'Lobar/segmental consolidation, air bronchogram', 'Interstitial, ground-glass, patchy, diffuse'],
          ['Extrapulmonary Symptoms', 'Rare (except septic seeding)', 'Common (headache, myalgia, ear/throat, GI, rash)'],
          ['Labs (WBC)', 'Leukocytosis with left shift', 'Normal or mild leukocytosis'],
          ['Labs (CRP/PCT)', 'Markedly elevated (PCT >0.5)', 'Mildly elevated (PCT <0.25)'],
          ['Labs (Liver Enzymes)', 'Usually normal', 'Often elevated (AST, ALT)'],
          ['Pathogens', '<i>S. pneumoniae, H. influenzae, M. catarrhalis, S. aureus, Klebsiella</i>', '<i>Mycoplasma, Chlamydia, Legionella, Coxiella</i>, viruses']
        ]
      }
    ],
    diseases: [
      {
        id: 'bacterial_pneumonia',
        name: 'Bacterial Pneumonia',
        pathogen: { type: 'Bacterium', name: '<i>Streptococcus pneumoniae</i>', gram: 'Gram-positive', shape: 'Diplococci' },
        epidemiology: {
          incidence: 'Most common cause of Community-Acquired Pneumonia (CAP) (30-40%)',
          risk_groups: ['Elderly (>65 years)', 'Chronic medical conditions (COPD, Heart Failure, Diabetes)', 'Immunocompromised', 'Asplenic patients', 'Alcohol dependency', 'Smokers'],
          seasonality: 'Winter-Spring peak, frequent post-influenza superinfection',
          transmission: 'Respiratory droplets, endogenous activation'
        },
        pathomechanism: {
          steps: [
            'Infection typically begins with microaspiration of colonizing bacteria from the upper respiratory tract. Virulence factors (e.g., polysaccharide capsule) impair phagocytosis.',
            'Bacteria multiply within alveoli, triggering a intense inflammatory response. Secreted toxins (e.g., pneumolysin) damage alveolar epithelial cells.',
            'Neutrophils, erythrocytes, and fibrin fill the alveolar spaces, resulting in tissue consolidation (classic lobar pneumonia appearance).'
          ],
          virulence_factors: ['Polysaccharide capsule (93 serotypes)', 'Pneumolysin', 'Autolysin (LytA)', 'Neuraminidase', 'IgA1 protease']
        },
        clinical: {
          incubation: '1-3 days',
          onset: 'Sudden, acute onset',
          symptoms: [
            { name: 'Sudden Onset', description: 'Characterized by high fever, shaking chills (rigors), and severe malaise.', severity: 'severe' },
            { name: 'Respiratory Symptoms', description: 'Cough initially dry, progressing to productive cough with classic rust-colored sputum. Sharp pleuritic chest pain and dyspnea are prominent.', severity: 'moderate' },
            { name: 'Atypical Presentation', description: 'In elderly patients, fever may be absent and confusion/altered mental status may be the sole presenting sign.', severity: 'severe' }
          ],
          physical_exam: [
            'Tachypnea, tachycardia',
            'Dullness to percussion over the affected lobe',
            'Bronchial breath sounds, crackles (crepitations)',
            'Increased tactile fremitus and bronchophony',
            'Cyanosis in severe cases'
          ],
          complications: ['Empyema', 'Lung abscess', 'Meningitis', 'Sepsis / Septic shock', 'ARDS', 'Pericarditis']
        },
        diagnostics: {
          laboratory: [
            { test: 'Complete Blood Count (CBC)', finding: 'Leukocytosis (15-30 x10^9/L) with left shift', interpretation: 'Typical bacterial response' },
            { test: 'C-Reactive Protein (CRP)', finding: 'Markedly elevated (>100 mg/L)', interpretation: 'Active inflammatory response' },
            { test: 'Procalcitonin (PCT)', finding: '>0.5 ng/mL', interpretation: 'Strongly suggests bacterial etiology/sepsis' },
            { test: 'Arterial Blood Gas (ABG)', finding: 'Hypoxemia, variable PaCO2', interpretation: 'Respiratory compromise' },
            { test: 'Blood Cultures', finding: 'Positive in 20-30% of cases', interpretation: 'Confirms pathogen and sensitivities' }
          ],
          imaging: [
            { modality: 'Chest X-Ray (PA & Lateral)', finding: 'Lobar/segmental consolidation with air bronchograms', significance: 'Classic appearance' },
            { modality: 'Chest CT', finding: 'Detailed parenchymal evaluation', significance: 'Excludes complications/abscess' }
          ],
          microbiology: [
            { test: 'Sputum Gram Stain', finding: 'Gram-positive lancet-shaped diplococci, >25 PMNs per LPF', significance: 'Rapid preliminary test' },
            { test: 'Sputum Culture', finding: 'Growth of S. pneumoniae', significance: 'Antibiotic susceptibility testing' },
            { test: 'Urinary Antigen Test', finding: 'Positive for S. pneumoniae C-polysaccharide', significance: 'Rapid, highly specific (>90%)' },
            { test: 'PCR', finding: 'Detection of lytA gene', significance: 'Highest sensitivity' }
          ]
        },
        calculators: [
          {
            name: 'CURB-65 Score - CAP Severity Assessment',
            items: [
              { label: 'Confusion', points: 1 },
              { label: 'Urea > 7 mmol/L (BUN > 19 mg/dL)', points: 1 },
              { label: 'Respiratory rate ≥ 30/min', points: 1 },
              { label: 'Blood pressure (Systolic < 90 or Diastolic ≤ 60 mmHg)', points: 1 },
              { label: 'Age ≥ 65 years', points: 1 }
            ],
            interpretation: [
              { min: 0, max: 1, text: 'Low risk (Mortality <3%). Consider outpatient management.' },
              { min: 2, max: 2, text: 'Moderate risk (Mortality 9%). Hospital admission recommended.' },
              { min: 3, max: 5, text: 'High risk (Mortality 15-40%). Urgent inpatient/ICU care.' }
            ]
          }
        ],
        differential: [
          { disease: 'Legionella Pneumonia', distinguishing: 'Hyponatremia, prominent GI symptoms, atypical CXR' },
          { disease: 'Klebsiella Pneumonia', distinguishing: 'Alcohol misuse, currant-jelly sputum, upper lobe cavitation' },
          { disease: 'Mycoplasma Pneumonia', distinguishing: 'Young adults, insidious onset, extrapulmonary features' },
          { disease: 'Pulmonary Embolism', distinguishing: 'Risk factors, D-dimer, CT pulmonary angiogram' },
          { disease: 'Congestive Heart Failure', distinguishing: 'Cardiac history, elevated BNP, bilateral pulmonary edema' }
        ],
        therapy: {
          guidelines: ['NICE NG138 (Pneumonia in adults) 2024/2025', 'ATS/IDSA 2019 CAP Guidelines', 'Hungarian Society of Infectious Diseases / ERS'],
          empirical: {
            cap_outpatient: {
              title: 'CAP - Outpatient Management (Mild - CURB-65 0-1)',
              drugs: [
                { drug: 'Amoxicillin', dose: '500mg-1g p.o. 3x/day', duration: '5 days', note: 'First-line choice (NICE). 5 days therapy is generally sufficient.' },
                { drug: 'Doxycycline', dose: '200mg loading, then 100mg 1x/day p.o.', duration: '5 days', note: 'Preferred in penicillin allergy.' },
                { drug: 'Clarithromycin', dose: '500mg p.o. 2x/day', duration: '5 days', note: 'Alternative option.' }
              ]
            },
            cap_inpatient: {
              title: 'CAP - Inpatient Ward (Moderate - CURB-65 2)',
              drugs: [
                { drug: 'Amoxicillin + Clarithromycin', dose: '500mg-1g p.o./i.v. 3x/day + 500mg p.o./i.v. 2x/day', duration: '5 days', note: 'Covers typical and atypical organisms (NICE).' },
                { drug: 'Doxycycline', dose: '200mg loading, then 100mg p.o.', duration: '5 days', note: 'Monotherapy in penicillin allergy.' },
                { drug: 'Levofloxacin', dose: '500mg p.o./i.v. 1x/day', duration: '5 days', note: 'Respiratory fluoroquinolone.' }
              ]
            },
            cap_icu: {
              title: 'CAP - Severe (CURB-65 3-5) / ICU',
              drugs: [
                { drug: 'Co-amoxiclav + Clarithromycin', dose: '1.2g i.v. q8h + 500mg i.v. q12h', duration: '7-10 days', note: 'NICE guideline recommendation for severe CAP.' },
                { drug: 'Ceftriaxone + Clarithromycin', dose: '2g i.v. q24h + 500mg i.v. q12h', duration: '7-10 days', note: 'Standard international regimen.' },
                { drug: 'Levofloxacin', dose: '500mg i.v. q12-24h', duration: '7-10 days', note: 'Beta-lactam allergy option.' }
              ]
            },
            hap_early: {
              title: 'HAP - Non-severe / Early-onset',
              drugs: [
                { drug: 'Co-amoxiclav', dose: '625mg p.o. 3x/day or 1.2g i.v. 3x/day', duration: '5 days', note: 'First-line (NICE NG191).' },
                { drug: 'Doxycycline', dose: '100mg p.o.', duration: '5 days', note: 'Alternative.' }
              ]
            },
            hap_late_vap: {
              title: 'HAP - Severe / VAP / High-risk',
              drugs: [
                { drug: 'Antipseudomonal Beta-lactam', dose: 'e.g., Piperacillin/tazobactam, Cefepime, Meropenem', duration: '7 days', note: 'Component 1 (Gram-negative coverage).' },
                { drug: '+ Antipseudomonal Fluoroquinolone or Aminoglycoside', dose: 'e.g., Ciprofloxacin, Amikacin', duration: '7 days', note: 'Component 2 (Dual Gram-negative coverage).' },
                { drug: '+ MRSA Coverage', dose: 'Vancomycin or Linezolid', duration: '7 days', note: 'Component 3 (If MRSA risk >10-20%).' }
              ]
            },
            vap_stenotrophomonas: {
              title: 'VAP - Stenotrophomonas maltophilia (Targeted)',
              drugs: [
                { drug: 'Trimethoprim/Sulfamethoxazole (TMP-SMX)', dose: '15-20 mg/kg/day (TMP) i.v. divided in 3-4 doses', duration: '14 days', note: 'First-line! High dose required.' },
                { drug: 'Levofloxacin', dose: '750 mg i.v. q24h', duration: '14 days', note: 'Alternative.' },
                { drug: 'Cefiderocol', dose: '2g i.v. q8h', duration: '14 days', note: 'Novel siderophore cephalosporin.' }
              ]
            }
          },
          targeted: 'Penicillin-susceptible: Penicillin G 4x4 MU i.v.; Resistant: Ceftriaxone or Vancomycin',
          supportive: ['Oxygen therapy (target SpO2 >92%)', 'Fluid resuscitation', 'Antipyretics', 'Chest tube drainage for empyema'],
          prevention: ['PPSV23 (23-valent polysaccharide vaccine)', 'PCV13/15/20 (Conjugate vaccine)', 'Annual Influenza vaccination']
        },
        prognosis: {
          mortality: 'CAP overall: 5-15%; ICU patients: 20-50%',
          prognostic_scores: ['CURB-65', 'PSI/PORT Score'],
          factors: 'Advanced age, comorbidities, bacteremia, multilobar involvement'
        },
        references: [
          { text: 'NICE NG138: Pneumonia (community-acquired): antimicrobial prescribing', url: 'https://www.nice.org.uk/guidance/ng138' },
          { text: 'ATS/IDSA 2019 Clinical Practice Guideline for Community-Acquired Pneumonia', url: 'https://www.atsjournals.org/doi/full/10.1164/rccm.201908-1581ST' }
        ],
        gallery: [
          {
            url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Lobar_pneumonia.jpg',
            caption: 'Right lower lobe consolidation on chest radiograph.',
            type: 'X-ray'
          },
          {
            url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Streptococcus_pneumoniae.jpg',
            caption: 'Gram-positive lancet-shaped diplococci in sputum smear.',
            type: 'Microscopy'
          }
        ]
      },
      {
        id: 'mediastinitis',
        name: 'Mediastinitis',
        pathogen: { type: 'Bacterium', name: 'Polymicrobial, commonly <i>Staphylococcus aureus</i>, Streptococci, Gram-negative rods, Anaerobes', gram: 'Mixed', shape: 'Variable' },
        epidemiology: {
          incidence: 'Rare but life-threatening emergency',
          risk_groups: ['Postoperative cardiac surgery patients', 'Post-endoscopy/esophageal instrumentation', 'Oropharyngeal infections', 'Trauma', 'Odontogenic infections', 'Immunocompromised'],
          seasonality: 'None',
          transmission: 'Direct extension from adjacent structures, surgical or endoscopic perforation'
        },
        pathomechanism: {
          steps: [
            'Infection enters mediastinum from adjacent structures (e.g. pharynx, esophagus, teeth, sternum), following endoscopic procedures, surgery, or trauma.',
            'Bacterial spread triggers necrotizing inflammation and abscess formation within mediastinal fat planes.',
            'Uncontrolled phlegmonous inflammation leads to severe sepsis, septic shock, and multiorgan failure.'
          ],
          virulence_factors: ['Biofilm formation', 'Necrotizing toxins', 'Polymicrobial synergy']
        },
        clinical: {
          incubation: 'Variable, hours to weeks',
          onset: 'Acute or subacute',
          symptoms: [
            { name: 'Chest Pain', description: 'Severe retrosternal or retrocardiac chest pain, often radiating to back or neck, exacerbated by swallowing.', severity: 'severe' },
            { name: 'Systemic Infection', description: 'High fever, rigors, tachycardia, and rapidly progressive systemic toxicity.', severity: 'severe' },
            { name: 'Dysphagia & Dyspnea', description: 'Difficulty swallowing, hoarseness, and shortness of breath due to mediastinal compression.', severity: 'moderate' }
          ],
          physical_exam: [
            'High fever, tachycardia, tachypnea',
            'Sternal instability/purulent drainage (postoperative)',
            'Subcutaneous emphysema (Hamman sign - mediastinal crunch)',
            'Cervical edema and tenderness',
            'Hypotension and septic shock signs'
          ],
          complications: ['Septic shock', 'Mediastinal abscess', 'Esophageal perforation', 'Vascular erosion / Aortic rupture', 'Empyema', 'Death']
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC, CRP, Procalcitonin', finding: 'Marked leukocytosis, high CRP, high PCT', interpretation: 'Severe bacterial inflammation' },
            { test: 'Blood Cultures', finding: 'Frequently positive', interpretation: 'Bacteremia assessment' }
          ],
          imaging: [
            { modality: 'Chest & Neck CT with contrast', finding: 'Mediastinal fat stranding, fluid collections, gas bubbles, abscess', significance: 'Diagnostic gold standard' },
            { modality: 'Chest X-ray', finding: 'Mediastinal widening, pneumomediastinum, pleural effusion', significance: 'Initial screening' }
          ],
          microbiology: [
            { test: 'Surgical/Aspiration cultures', finding: 'Gram stain, aerobic and anaerobic cultures', significance: 'Guides targeted antimicrobial therapy' }
          ]
        },
        differential: [
          { disease: 'Pneumonia', distinguishing: 'Parenchymal infiltrates without mediastinal widening' },
          { disease: 'Aortic Dissection', distinguishing: 'CT angiography reveals intimal flap' },
          { disease: 'Pleural Empyema', distinguishing: 'Localized to pleural space' }
        ],
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Piperacillin/tazobactam', dose: '4.5g i.v. q8h', duration: 'Inpatient i.v.', note: 'Broad-spectrum first-line coverage.' },
              { drug: '+ Vancomycin', dose: '15-20 mg/kg i.v. q12h', duration: '', note: 'Covers MRSA.' },
              { drug: '+ Clindamycin or Metronidazole', dose: '600mg i.v. q8h', duration: '', note: 'Additional anaerobic coverage if esophageal perforation.' }
            ],
            icu: [
              { drug: 'Meropenem', dose: '1g i.v. q8h', duration: '', note: 'Critically ill patients.' },
              { drug: '+ Vancomycin', dose: '15-20 mg/kg i.v. q12h', duration: '', note: 'MRSA coverage.' }
            ]
          },
          targeted: 'Immediate surgical debridement and drainage is essential. Tailor antibiotics to culture results.',
          supportive: ['Urgent surgical consultation', 'Intravenous fluid resuscitation', 'Vasopressors for septic shock', 'Nutritional support', 'Airway protection'],
          prevention: ['Surgical antibiotic prophylaxis', 'Aseptic operative technique', 'Prompt treatment of deep neck/dental infections']
        },
        prognosis: {
          mortality: '10-40% depending on etiology and timing of surgical intervention',
          prognostic_scores: ['SOFA Score'],
          factors: 'Delayed surgical drainage, esophageal perforation, advanced age'
        },
        references: [
          { text: 'EACTS Guidelines on the management of mediastinitis', url: 'https://www.eacts.org' }
        ],
        gallery: [
          {
            url: 'https://commons.wikimedia.org/wiki/Special:FilePath/CT_scan_showing_mediastinitis.jpg',
            caption: 'Chest CT demonstrating mediastinal widening and abscess formation.',
            type: 'CT Imaging'
          }
        ]
      },
      {
        id: 'tuberculosis',
        name: 'Pulmonary Tuberculosis',
        pathogen: { type: 'Bacterium', name: '<i>Mycobacterium tuberculosis</i> Complex', gram: 'Acid-fast', shape: 'Rod' },
        epidemiology: {
          incidence: '10.6 million new cases worldwide annually; leading infectious cause of death globally',
          risk_groups: ['HIV-infected individuals', 'Immunosuppressed patients', 'Migrants from high-burden areas', 'Homeless individuals', 'Diabetics'],
          seasonality: 'None',
          transmission: 'Airborne droplet nuclei'
        },
        pathomechanism: {
          steps: [
            'Inhalation of airborne M. tuberculosis droplets reaching alveoli.',
            'Phagocytosis by alveolar macrophages. Inhibition of phagolysosome fusion; formation of Ghon primary complex.',
            'T-cell cell-mediated immunity forms caseating granulomas. Latent TB infection or progression to active disease.'
          ],
          virulence_factors: ['Mycolic acids', 'Cord factor', 'ESX-1 secretion system']
        },
        clinical: {
          incubation: 'Months to decades (latency); primary disease 2-12 weeks',
          onset: 'Insidious, slow progression',
          symptoms: [
            { name: 'Constitutional (B Symptoms)', description: 'Night sweats, unintentional weight loss, low-grade fever, fatigue.', severity: 'moderate' },
            { name: 'Respiratory Symptoms', description: 'Chronic cough (>2-3 weeks), hemoptysis (coughing up blood), pleuritic chest pain.', severity: 'severe' }
          ],
          physical_exam: ['Cachexia, apical crackles/post-tussive rales, dullness to percussion if pleural effusion'],
          complications: ['Miliary TB', 'TB meningitis', 'Massive hemoptysis (Rasmussen aneurysm)', 'Pulmonary fibrosis']
        },
        diagnostics: {
          laboratory: [
            { test: 'Acid-Fast Bacilli (AFB) Smear', finding: 'Acid-fast bacilli on Ziehl-Neelsen or Auramine stain', interpretation: 'Rapid initial screening' },
            { test: 'GeneXpert MTB/RIF PCR', finding: 'Detection of MTB DNA and Rifampicin resistance', interpretation: 'WHO gold standard rapid test' },
            { test: 'Mycobacterial Culture (MGIT / LJ)', finding: 'Growth of M. tuberculosis', interpretation: 'Definitive gold standard & DST' },
            { test: 'IGRA (QuantiFERON-TB)', finding: 'Positive Interferon-gamma release', interpretation: 'Detects TB infection (Latent or Active)' }
          ],
          imaging: [
            { modality: 'Chest X-Ray', finding: 'Upper lobe infiltrates, cavitation, apical scarring', significance: 'First-line imaging' },
            { modality: 'Chest CT', finding: 'Tree-in-bud pattern, cavitary lesions, lymphadenopathy', significance: 'High sensitivity' }
          ]
        },
        differential: [
          { disease: 'Bronchogenic Carcinoma', distinguishing: 'Biopsy / Histopathology' },
          { disease: 'Sarcoidosis', distinguishing: 'Non-caseating granulomas, negative IGRA' }
        ],
        therapy: {
          guidelines: ['WHO Consolidated Guidelines on Tuberculosis 2024', 'CDC / ATS / IDSA TB Guidelines'],
          empirical: {
            title: 'Standard 4-Drug Regimen (Drug-Susceptible TB)',
            drugs: [
              { drug: 'Isoniazid (H) + Pyridoxine (B6)', dose: '5 mg/kg p.o. q24h + B6 25-50mg/day', duration: '2 months Intensive + 4 months Continuation', note: 'Pyridoxine prevents peripheral neuropathy.' },
              { drug: 'Rifampin (R)', dose: '10 mg/kg p.o. q24h', duration: '2 months + 4 months', note: 'Causes orange discoloration of body fluids.' },
              { drug: 'Pyrazinamide (Z)', dose: '20-30 mg/kg p.o. q24h', duration: '2 months Intensive phase', note: 'Hepatotoxic; monitor LFTs.' },
              { drug: 'Ethambutol (E)', dose: '15-20 mg/kg p.o. q24h', duration: '2 months Intensive phase', note: 'Optic neuritis risk; monitor visual acuity/color vision.' }
            ]
          },
          targeted: '2 months 2HRZE followed by 4 months 2HR (total 6 months). For MDR-TB, WHO 2024 recommends the 6-month all-oral BPaLM regimen (Bedaquiline + Pretomanid + Linezolid + Moxifloxacin)!',
          supportive: ['Airborne isolation (negative pressure room)', 'Directly Observed Therapy (DOT)', 'Baseline and regular LFT monitoring'],
          prevention: ['Contact tracing', 'Latent TB Infection (LTBI) treatment with 3HP or 4R']
        },
        prognosis: {
          mortality: 'Cure rate >95% with adherence',
          prognostic_scores: ['WHO TB Outcomes'],
          factors: 'Drug resistance (MDR/XDR), HIV co-infection'
        },
        references: [
          { text: 'WHO Consolidated Guidelines on Tuberculosis 2024', url: 'https://www.who.int/teams/global-tuberculosis-programme' }
        ],
        gallery: []
      },
      {
        id: 'legionella',
        name: 'Legionella Pneumonia (Legionnaires\' Disease)',
        pathogen: { type: 'Bacterium', name: '<i>Legionella pneumophila</i>', gram: 'Gram-negative', shape: 'Rod' },
        epidemiology: {
          incidence: '2-10% of hospitalized CAP cases',
          risk_groups: ['Age >50 years', 'Smokers', 'Chronic lung/heart disease', 'Recent travel'],
          seasonality: 'Summer-Autumn peak',
          transmission: 'Inhalation of aerosols from contaminated water systems (showers, cooling towers). No person-to-person transmission!'
        },
        pathomechanism: {
          steps: [
            'Inhalation of Legionella-containing water aerosols into alveoli.',
            'Phagocytosis by alveolar macrophages; intracellular replication inside modified phagolysosomes.',
            'Necrotizing lobar pneumonia accompanied by robust cytokine release.'
          ],
          virulence_factors: ['Dot/Icm Type IV secretion system', 'Mip protein']
        },
        clinical: {
          incubation: '2-10 days (Legionnaires\' disease); 24-48h (Pontiac fever)',
          onset: 'Acute, rapidly progressive',
          symptoms: [
            { name: 'High Fever & Shivering', description: 'High fever (>39-40°C), chills, accompanied by dry or productive cough.', severity: 'severe' },
            { name: 'Gastrointestinal Symptoms', description: 'Watery diarrhea (30-50%), nausea, vomiting, abdominal pain.', severity: 'moderate' },
            { name: 'Neurological Symptoms', description: 'Headache, confusion, lethargy, delirium.', severity: 'severe' }
          ],
          physical_exam: ['High fever, relative bradycardia (Faget sign), crackles, altered mental status'],
          complications: ['ARDS', 'Acute kidney injury', 'Rhabdomyolysis', 'Septic shock']
        },
        diagnostics: {
          laboratory: [
            { test: 'Serum Sodium', finding: 'Hyponatremia (<130 mmol/L)', interpretation: 'Highly characteristic finding!' },
            { test: 'Urinary Antigen Test', finding: 'Detects L. pneumophila Serogroup 1 antigen', interpretation: 'Rapid, specific (>95%)' },
            { test: 'Sputum PCR', finding: 'Detection of Legionella DNA', interpretation: 'Highest sensitivity' }
          ],
          imaging: [
            { modality: 'Chest X-Ray', finding: 'Rapidly progressive infiltrates, often unilateral initially', significance: 'Lags behind clinical state' }
          ]
        },
        calculators: [
          {
            name: 'CURB-65 Score - CAP Severity Assessment',
            items: [
              { label: 'Confusion', points: 1 },
              { label: 'Urea > 7 mmol/L', points: 1 },
              { label: 'Respiratory rate ≥ 30/min', points: 1 },
              { label: 'Blood pressure (Systolic < 90 or Diastolic ≤ 60 mmHg)', points: 1 },
              { label: 'Age ≥ 65 years', points: 1 }
            ],
            interpretation: [
              { min: 0, max: 1, text: 'Low risk (<3% mortality).' },
              { min: 2, max: 2, text: 'Moderate risk (9% mortality).' },
              { min: 3, max: 5, text: 'High risk (15-40% mortality).' }
            ]
          }
        ],
        differential: [
          { disease: 'Pneumococcal Pneumonia', distinguishing: 'Absence of diarrhea/confusion; urinary antigen positive for S. pneumoniae' }
        ],
        therapy: {
          empirical: {
            title: 'Targeted Therapy for Legionellosis',
            drugs: [
              { drug: 'Levofloxacin', dose: '500-750 mg p.o./i.v. q24h', duration: '7-14 days', note: 'First-line choice! Rapid bactericidal activity.' },
              { drug: 'Azithromycin', dose: '500 mg p.o./i.v. q24h', duration: '5-10 days', note: 'Highly effective macrolide alternative.' }
            ]
          },
          targeted: 'Levofloxacin or Azithromycin. Beta-lactam antibiotics are INEFFECTIVE!',
          supportive: ['Supplemental oxygen', 'Correction of hyponatremia'],
          prevention: ['Superheating water systems (>60°C) and hyperchlorination']
        },
        prognosis: {
          mortality: '5-10% with prompt treatment; up to 30% in immunocompromised',
          prognostic_scores: ['CURB-65'],
          factors: 'Delayed antibiotic initiation, advanced age'
        },
        references: [
          { text: 'ESCMID Statement on Legionella Pneumonia', url: 'https://www.escmid.org' }
        ],
        gallery: []
      },
      {
        id: 'mycoplasma',
        name: 'Mycoplasma Pneumonia',
        pathogen: { type: 'Bacterium', name: '<i>Mycoplasma pneumoniae</i>', gram: 'No cell wall', shape: 'Pleomorphic' },
        epidemiology: {
          incidence: '10-20% of all CAP cases',
          risk_groups: ['School-aged children, adolescents, young adults (5-20 years)'],
          seasonality: 'Late summer / Autumn peak',
          transmission: 'Respiratory droplets'
        },
        pathomechanism: {
          steps: [
            'Attachment to respiratory ciliated epithelium via P1 adhesin.',
            'Production of CARDS toxin causing ciliostasis and epithelial desquamation.',
            'Production of cold agglutinins (IgM antibodies against I antigen), immune-mediated hemolytic anemia, Erythema multiforme / MIRM.'
          ],
          virulence_factors: ['P1 adhesin', 'CARDS toxin']
        },
        clinical: {
          incubation: '1-3 weeks',
          onset: 'Insidious',
          symptoms: [
            { name: 'Intense Hacking Cough', description: 'Dry, paroxysmal, persistent cough lasting for weeks.', severity: 'moderate' },
            { name: 'Headache & Prodromal Symptoms', description: 'Pharyngitis, bullous myringitis, earache.', severity: 'moderate' },
            { name: 'Extrapulmonary Manifestations', description: 'Erythema multiforme, MIRM, Raynaud phenomenon, cold-agglutinin hemolysis.', severity: 'severe' }
          ],
          physical_exam: ['Discreet chest examination findings despite prominent symptoms ("Walking pneumonia"), bullous myringitis'],
          complications: ['Erythema multiforme / Stevens-Johnson syndrome', 'Hemolytic anemia', 'Neurological complications (encephalitis)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Sputum/Swab PCR', finding: 'Detection of M. pneumoniae DNA', interpretation: 'Diagnostic test of choice' },
            { test: 'Cold Agglutinins', finding: 'Elevated IgM titer (≥1:64)', interpretation: 'Present in ~50% of cases' }
          ],
          imaging: [
            { modality: 'Chest X-Ray', finding: 'Interstitial or patchy reticulonodular infiltrates', significance: 'Looks worse than clinical exam' }
          ]
        },
        differential: [
          { disease: 'Chlamydia pneumoniae', distinguishing: 'PCR differentiation' }
        ],
        therapy: {
          empirical: {
            title: 'Therapy for Mycoplasma Pneumonia',
            drugs: [
              { drug: 'Azithromycin', dose: '500mg Day 1, then 250mg Days 2-5 p.o.', duration: '5 days', note: 'First-line in children and adults.' },
              { drug: 'Doxycycline', dose: '100mg p.o. 2x/day', duration: '7-10 days', note: 'Alternative for adults.' }
            ]
          },
          targeted: 'Macrolides, Doxycycline, or Fluoroquinolones. Beta-lactam antibiotics are INEFFECTIVE!',
          supportive: ['Symptomatic cough suppressants'],
          prevention: ['Hand hygiene and respiratory etiquette']
        },
        prognosis: {
          mortality: '<1%',
          prognostic_scores: [],
          factors: 'Macrolide resistance, CNS involvement'
        },
        references: [
          { text: 'ERS Guidelines for CAP Management', url: 'https://www.ersnet.org' }
        ],
        gallery: []
      },
      {
        id: 'chlamydia_pneumoniae',
        name: 'Chlamydia pneumoniae',
        pathogen: { type: 'Bacterium', name: '<i>Chlamydia pneumoniae</i>', gram: 'Gram-negative', shape: 'Spherical' },
        epidemiology: {
          incidence: '5-10% of CAP cases',
          risk_groups: ['School children, elderly nursing home residents'],
          seasonality: 'Year-round',
          transmission: 'Respiratory droplets'
        },
        pathomechanism: {
          steps: ['Obligate intracellular developmental cycle within respiratory epithelial cells.'],
          virulence_factors: ['Intracellular survival']
        },
        clinical: {
          incubation: '3-4 weeks',
          onset: 'Biphasic',
          symptoms: [
            { name: 'Pharyngitis followed by Bronchitis', description: 'Initial pharyngitis/hoarseness, followed weeks later by bronchitis/pneumonia.', severity: 'moderate' }
          ],
          physical_exam: ['Pharyngeal erythema, hoarseness, localized rales'],
          complications: ['Asthma exacerbations']
        },
        diagnostics: {
          laboratory: [
            { test: 'PCR', finding: 'Positive for C. pneumoniae DNA', interpretation: 'Method of choice' }
          ],
          imaging: [{ modality: 'Chest X-Ray', finding: 'Small patchy infiltrates', significance: 'Nonspecific' }]
        },
        differential: [{ disease: 'Mycoplasma Pneumonia', distinguishing: 'PCR panel' }],
        therapy: {
          empirical: {
            title: 'Treatment for C. pneumoniae Infection',
            drugs: [
              { drug: 'Doxycycline', dose: '100mg p.o. 2x/day', duration: '10-14 days', note: 'First-line.' },
              { drug: 'Azithromycin', dose: '500mg Day 1, 250mg Days 2-5', duration: '5 days', note: 'Alternative.' }
            ]
          },
          targeted: 'Doxycycline or Macrolides.',
          supportive: ['Symptomatic measures'],
          prevention: ['Hygiene measures']
        },
        prognosis: { mortality: '<1%', prognostic_scores: [], factors: 'Age' },
        gallery: []
      },
      {
        id: 'psittacosis',
        name: 'Psittacosis (Ornithosis)',
        pathogen: { type: 'Bacterium', name: '<i>Chlamydia psittaci</i>', gram: 'Gram-negative', shape: 'Spherical' },
        epidemiology: {
          incidence: 'Rare zoonotic infection',
          risk_groups: ['Bird owners, poultry workers, veterinarians'],
          seasonality: 'Year-round',
          transmission: 'Inhalation of dried bird droppings/dust'
        },
        pathomechanism: {
          steps: ['Inhalation, intracellular replication in macrophages, hematogenous spread, interstitial pneumonia.'],
          virulence_factors: ['LPS, intracellular replication']
        },
        clinical: {
          incubation: '1-2 weeks',
          onset: 'Sudden',
          symptoms: [
            { name: 'Severe Frontal Headache', description: 'Severe headache accompanied by high fever, chills, and dry cough.', severity: 'severe' }
          ],
          physical_exam: ['Relative bradycardia, splenomegaly, Horder spots'],
          complications: ['Endocarditis, hepatitis']
        },
        diagnostics: {
          laboratory: [{ test: 'Serology / PCR', finding: 'Titer rise / DNA positive', interpretation: 'Diagnostic confirmation' }],
          imaging: [{ modality: 'Chest X-Ray', finding: 'Atypical fan-shaped infiltrates', significance: 'Characteristic' }]
        },
        differential: [{ disease: 'Q Fever', distinguishing: 'Livestock exposure vs bird exposure' }],
        therapy: {
          empirical: {
            title: 'Treatment of Psittacosis',
            drugs: [
              { drug: 'Doxycycline', dose: '100mg p.o. 2x/day', duration: '10-14 days', note: 'First-line therapy!' }
            ]
          },
          targeted: 'Doxycycline 100mg 2x/day for 10-14 days.',
          supportive: ['Symptomatic relief'],
          prevention: ['Quarantine imported birds']
        },
        prognosis: { mortality: '<1% with doxycycline', prognostic_scores: [], factors: 'Prompt treatment' },
        gallery: []
      },
      {
        id: 'q_fever_resp',
        name: 'Q Fever',
        pathogen: { type: 'Bacterium', name: '<i>Coxiella burnetii</i>', gram: 'Gram-negative', shape: 'Coccobacillus' },
        epidemiology: {
          incidence: 'Worldwide zoonosis',
          risk_groups: ['Farmers, veterinarians, slaughterhouse workers, valve disease patients'],
          seasonality: 'Spring/Summer',
          transmission: 'Inhalation of birth products/aerosols from sheep, goats, cattle'
        },
        pathomechanism: {
          steps: ['Inhalation of spore-like forms, replication in phagolysosomes, granuloma formation.'],
          virulence_factors: ['Phase I LPS']
        },
        clinical: {
          incubation: '2-3 weeks',
          onset: 'Sudden',
          symptoms: [
            { name: 'Retro-orbital Headache', description: 'Severe retro-orbital headache with high fever, myalgias, and pneumonia/hepatitis.', severity: 'severe' },
            { name: 'Chronic Q Fever', description: 'Culture-negative endocarditis in valve disease patients.', severity: 'severe' }
          ],
          physical_exam: ['Relative bradycardia, hepatomegaly'],
          complications: ['Chronic Q endocarditis, Post-Q fever fatigue syndrome']
        },
        diagnostics: {
          laboratory: [
            { test: 'Serology (IFA)', finding: 'Phase II IgM/IgG high (Acute); Phase I IgG ≥1:800 (Chronic)', interpretation: 'Gold standard' },
            { test: 'PCR', finding: 'DNA positive', interpretation: 'Early phase' }
          ],
          imaging: [{ modality: 'Chest X-Ray', finding: 'Rounded opacity infiltrates', significance: 'Pneumonia' }]
        },
        differential: [{ disease: 'Legionellosis', distinguishing: 'Serology / Urinary antigen' }],
        therapy: {
          empirical: {
            title: 'Treatment of Q Fever',
            drugs: [
              { drug: 'Doxycycline (Acute)', dose: '100mg p.o. 2x/day', duration: '14 days', note: 'First choice!' },
              { drug: 'Doxycycline + Hydroxychloroquine (Chronic Endocarditis)', dose: '100mg 2x/day + 200mg 3x/day', duration: '≥18-24 months', note: 'Hydroxychloroquine alkalinizes phagolysosomes.' }
            ]
          },
          targeted: 'Acute: Doxycycline 14 days. Chronic: Doxycycline + Hydroxychloroquine ≥18-24 months.',
          supportive: ['Symptomatic therapy'],
          prevention: ['Pasteurization of milk, vaccination in endemic areas']
        },
        prognosis: { mortality: 'Acute <1%; Chronic endocarditis 5-15%', prognostic_scores: [], factors: 'Pre-existing valve disease' },
        gallery: []
      }
    ]
  },
  cardiovascular: {
    name: 'Cardiovascular Infections',
    icon: 'window.diseaseMetadata.cardiovascular.icon',
    color: 'window.diseaseMetadata.cardiovascular.color',
    diseases: [
      {
        id: 'endocarditis',
        name: 'Infective Endocarditis',
        pathogen: { type: 'Bacterium', name: '<i>Staphylococcus aureus</i> (30-40%), Viridans group streptococci, Enterococci, CoNS, HACEK group', gram: 'Predominantly Gram-positive', shape: 'Cocci' },
        epidemiology: {
          incidence: '3-10 cases / 100,000 person-years',
          risk_groups: ['Prosthetic heart valve / TAVI recipients', 'History of prior endocarditis', 'Congenital heart disease', 'Intravenous drug users', 'Hemodialysis patients'],
          seasonality: 'None',
          transmission: 'Bacteremia following dental, surgical, or intravascular procedures / skin lesions'
        },
        pathomechanism: {
          steps: [
            'Endothelial damage of heart valve leads to non-bacterial thrombotic endocarditis (NBTE).',
            'Transient bacteremia allows bacterial attachment (fibronectin-binding proteins) and colonization.',
            'Bacterial multiplication, fibrin, and platelet deposition form infected VEGETATIONS. Valve destruction, abscess formation, and septic embolization (brain, spleen, kidneys, skin).'
          ],
          virulence_factors: ['Biofilm formation', 'Fibronectin-binding protein A (FnBPA)', 'Clumping factor', 'Enterococcal Ebp pili']
        },
        clinical: {
          incubation: 'Days to weeks (S. aureus acute; Strep/Enterococci subacute)',
          onset: 'Acute fulminant or subacute insidious',
          symptoms: [
            { name: 'Fever & New Regurgitant Murmur', description: 'Unexplained fever, rigors, and a new or changing regurgitant cardiac murmur (valvular insufficiency).', severity: 'severe' },
            { name: 'Embolic Phenomena', description: 'Stroke, splenic/renal infarction, Janeway lesions (painless erythematous macules on palms/soles).', severity: 'severe' },
            { name: 'Immunological Phenomena', description: 'Osler nodes (painful nodules on pulp of fingers/toes), Roth spots (retinal hemorrhages with pale centers), glomerulonephritis.', severity: 'moderate' }
          ],
          physical_exam: [
            'New or changing heart murmur',
            'Janeway lesions, Osler nodes, splinter hemorrhages',
            'Splenomegaly, conjunctival petechiae',
            'Focal neurological deficits from septic emboli'
          ],
          complications: ['Acute heart failure (valve perforation/chordal rupture)', 'Perivalvular abscess / Pseudoaneurysm', 'Septic emboli (stroke, splenic/renal infarct)', 'AV block (aortic root abscess)', 'Septic shock']
        },
        diagnostics: {
          criteria: [
            {
              name: 'Modified Duke / ESC 2023 Duke-ISCVID Criteria',
              items: [
                'Definite IE: 2 Major criteria OR 1 Major + 3 Minor OR 5 Minor criteria',
                'Major Criterion 1 (Microbiology): Typical pathogens in 2 separate blood cultures (S. aureus, Viridans strep, S. gallolyticus, Enterococci, HACEK) or Coxiella burnetii Phase I IgG >1:800',
                'Major Criterion 2 (Imaging): TTE/TEE positive for vegetation, abscess, pseudoaneurysm, valve perforation OR 18F-FDG PET/CT / Cardiac CT positive for paravalvular lesion',
                'Minor Criteria: Predisposition (prosthetic valve, IVDU), Fever ≥38°C, Vascular phenomena (emboli, Janeway), Immunological phenomena (Osler, Roth, RF), Microbiological evidence'
              ]
            }
          ],
          laboratory: [
            { test: 'Blood Cultures', finding: 'At least 3 blood culture sets from separate venipunctures BEFORE starting antibiotics!', interpretation: 'Essential for pathogen identification' },
            { test: 'Inflammatory Markers (CRP, ESR, WBC)', finding: 'Markedly elevated; monitor CRP for response', interpretation: 'Assesses disease activity' },
            { test: 'Serology / PCR (Culture-negative IE)', finding: 'Coxiella burnetii, Bartonella spp., Tropheryma whipplei', interpretation: 'Specialized testing' }
          ],
          imaging: [
            { modality: 'Transesophageal Echocardiography (TEE)', finding: 'Vegetation, abscess, valve perforation, prosthetic dehiscence', significance: 'Gold standard (Sensitivity >90-95%)' },
            { modality: '18F-FDG PET/CT or SPECT/CT', finding: 'Hypermetabolic paravalvular foci in prosthetic valve IE', significance: 'ESC 2023 Major Criterion for prosthetic valve IE!' },
            { modality: 'Brain / Abdominal MRI', finding: 'Silent septic emboli (brain, spleen, kidneys)', significance: 'Staging and embolic risk' }
          ]
        },
        differential: [
          { disease: 'Non-Bacterial Thrombotic Endocarditis (NBTE / Marantic)', distinguishing: 'Malignancy association, sterile blood cultures, no fever' },
          { disease: 'Libman-Sacks Endocarditis', distinguishing: 'Systemic Lupus Erythematosus (SLE), Antiphospholipid syndrome' },
          { disease: 'Atrial Myxoma', distinguishing: 'Echocardiography shows pedunculated atrial mass' }
        ],
        therapy: {
          guidelines: ['ESC 2023 Guidelines for the management of endocarditis (Eur Heart J 2023)'],
          empirical: {
            title: 'Empiric Antibiotic Therapy for Acute Infective Endocarditis (ESC 2023)',
            drugs: [
              { drug: 'Native Valve: Ampicillin + Oxacillin/Flucloxacillin + Ceftriaxone', dose: 'Ampicillin 12g/day i.v. in 4-6 doses + Flucloxacillin 12g/day i.v. in 4-6 doses + Ceftriaxone 2g i.v. q24h', duration: '4-6 weeks', note: 'Covers S. aureus, Streptococci, and Enterococci.' },
              { drug: 'Prosthetic Valve (<1 yr postop): Vancomycin + Gentamicin + Rifampin', dose: 'Vancomycin 30-60 mg/kg/day i.v. + Gentamicin 3 mg/kg/day i.v. + Rifampin 900mg/day p.o. in 3 doses', duration: 'At least 6 weeks', note: 'Rifampin penetrates foreign body biofilm!' }
            ]
          },
          targeted: 'Streptococci (Penicillin G 4-6 weeks or Ceftriaxone + Gentamicin 2 weeks); MSSA (Flucloxacillin 4-6 weeks); MRSA (Vancomycin or Daptomycin 10mg/kg/day); Enterococcus faecalis (Ampicillin 12g/day + Ceftriaxone 4g/day for 6 weeks).',
          supportive: ['Urgent cardiac surgery consultation (Indications: Heart failure, uncontrolled infection/abscess, embolic prevention with vegetation >10mm)'],
          prevention: ['Antibiotic prophylaxis with Amoxicillin 2g p.o. 30-60 min prior to dental procedures ONLY in HIGH-RISK PATIENTS (prosthetic valves, prior IE, cyanotic congenital heart disease)!']
        },
        prognosis: {
          mortality: '15-20% in-hospital mortality; 30% 1-year mortality',
          prognostic_scores: ['ESC Endocarditis Risk Score'],
          factors: 'S. aureus pathogen, heart failure, paravalvular abscess, advanced age'
        },
        references: [
          { text: 'ESC 2023 Guidelines for the management of endocarditis', url: 'https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Endocarditis-Guidelines' }
        ],
        gallery: []
      },
      {
        id: 'cied',
        name: 'CIED Infection (Pacemaker / ICD / CRT)',
        pathogen: { type: 'Bacterium', name: '<i>Staphylococcus epidermidis</i> / CoNS (50-70%), <i>Staphylococcus aureus</i> (25%), Cutibacterium acnes, Gram-negative bacilli', gram: 'Gram-positive', shape: 'Cocci' },
        epidemiology: {
          incidence: '1-2% of all CIED implantations',
          risk_groups: ['Generator replacement / revisions', 'CRT / ICD dual-chamber systems', 'Diabetes, renal failure, anticoagulation (pocket hematoma)'],
          seasonality: 'None',
          transmission: 'Perioperative inoculation or hematogenous seeding'
        },
        pathomechanism: {
          steps: [
            'Bacterial colonization of pacemaker pocket or lead surfaces.',
            'Dense biofilm formation on synthetic leads.',
            'Spread along leads into superior vena cava, right atrium/ventricle, and tricuspid valve (lead endocarditis).'
          ],
          virulence_factors: ['Biofilm synthesis (PIA)', 'Foreign-body adhesins']
        },
        clinical: {
          incubation: 'Pocket infection weeks to months; lead endocarditis variable',
          onset: 'Local pocket infection to systemic lead endocarditis',
          symptoms: [
            { name: 'Pocket Infection', description: 'Erythema, swelling, warmth, tenderness, fluctuation, or erosion/perforation of generator pocket.', severity: 'moderate' },
            { name: 'Systemic Lead Endocarditis', description: 'Unexplained fever, chills, septic pulmonary emboli (cough, pleuritic chest pain).', severity: 'severe' }
          ],
          physical_exam: ['Erythema/erosion over device, purulent drainage, tricuspid regurgitation murmur'],
          complications: ['Tricuspid valve endocarditis', 'Septic pulmonary emboli', 'Superior vena cava syndrome / thrombosis', 'Sepsis']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blood Cultures', finding: 'At least 2-3 sets prior to antibiotics', interpretation: 'Essential for lead infection' },
            { test: 'Pocket Swab / Tissue Culture', finding: 'S. epidermidis / S. aureus', interpretation: 'Pathogen identification' }
          ],
          imaging: [
            { modality: 'TEE (Transesophageal Echocardiography)', finding: 'Lead vegetations, tricuspid valve involvement', significance: 'Gold standard' },
            { modality: '18F-FDG PET/CT or SPECT/CT', finding: 'Focal FDG uptake along pocket or lead trajectory', significance: 'EHRA 2024 / ESC 2023 recommendation!' }
          ]
        },
        differential: [{ disease: 'Aseptic Pocket Hematoma', distinguishing: 'PET-CT negative, sterile aspiration' }],
        therapy: {
          guidelines: ['EHRA 2024 International Consensus Document on CIED Infection', 'ESC 2023 Endocarditis guidelines'],
          empirical: {
            title: 'Empiric Antibiotics & Lead Extraction for CIED Infection',
            drugs: [
              { drug: 'Vancomycin + Cefepime or Piperacillin/tazobactam', dose: 'Vancomycin 15-20 mg/kg i.v. q12h + Cefepime 2g i.v. q12h', duration: 'Until extraction', note: 'Broad coverage for Staphylococci and Gram-negatives.' }
            ]
          },
          targeted: 'COMPLETE EXTRACTION OF THE ENTIRE CIED SYSTEM (Generator + ALL leads) IS MANDATORY (EHRA/ESC Class I)! Medical therapy alone fails in >80-90%. Post-extraction antibiotics: 2 weeks for uncomplicated pocket infection; 4-6 weeks for lead endocarditis/bacteremia.',
          supportive: ['Transvenous laser lead extraction at specialized center', 'Temporary pacing if pacemaker-dependent'],
          prevention: ['Perioperative cefazolin prophylaxis', 'Avoid pocket hematoma formation']
        },
        prognosis: { mortality: '5-15% in lead endocarditis', prognostic_scores: [], factors: 'S. aureus bacteremia, incomplete lead extraction' },
        references: [
          { text: 'EHRA 2024 International Consensus Document on CIED Infection', url: 'https://www.escardio.org/Sub-specialties/EHRA' }
        ],
        gallery: []
      },
      {
        id: 'myocarditis',
        name: 'Myocarditis (Acute Myocardial Inflammation)',
        pathogen: { type: 'Virus / Bacteria / Immune-mediated', name: 'Enteroviruses (Coxsackie B), Parvovirus B19, HHV-6, SARS-CoV-2, Influenza, Borrelia burgdorferi, Giant cell myocarditis, Immune checkpoint inhibitors', gram: 'Variable', shape: 'Variable' },
        epidemiology: {
          incidence: '10-22 per 100,000 persons/year',
          risk_groups: ['Young adults (20-40 years), male predominance', 'Athletes exercising during acute viral infection', 'Patients on immune checkpoint inhibitor therapy'],
          seasonality: 'Autumn-Winter peak (viral)',
          transmission: 'Viral respiratory or GI infection precursor'
        },
        pathomechanism: {
          steps: [
            'Viral invasion of myocytes via receptors (CAR - Coxsackie-Adenovirus Receptor).',
            'Direct cytolysis and viral replication within myocardium.',
            'Immune-mediated tissue destruction driven by CD8+ T cells and autoantibodies. Progression to cardiac remodeling and Dilated Cardiomyopathy (DCM).'
          ],
          virulence_factors: ['CAR receptor binding', 'Cytotoxic cytokine release']
        },
        clinical: {
          incubation: '1-3 weeks following viral prodrome',
          onset: 'Acute (infarct-like) to fulminant',
          symptoms: [
            { name: 'Chest Pain', description: 'Often mimicking acute myocardial infarction or pleuritic/pericarditic in nature.', severity: 'severe' },
            { name: 'Heart Failure Symptoms', description: 'Exertional dyspnea, orthopnea, peripheral edema, profound fatigue.', severity: 'severe' },
            { name: 'Arrhythmias', description: 'Palpitations, syncope, sudden cardiac arrest.', severity: 'severe' }
          ],
          physical_exam: ['Tachycardia, S3 gallop, pulmonary crackles, peripheral edema'],
          complications: ['Fulminant cardiogenic shock', 'Severe ventricular arrhythmias (VT/VF)', 'Dilated cardiomyopathy (DCM)', 'Sudden cardiac death']
        },
        diagnostics: {
          laboratory: [
            { test: 'Cardiac Troponin I/T & CK-MB', finding: 'Elevated (myocyte necrosis)', interpretation: 'Marker of myocardial injury' },
            { test: 'NT-proBNP / BNP', finding: 'Starkly elevated', interpretation: 'Ventricular wall stress assessment' },
            { test: 'Lyme Serology / Viral PCR', finding: 'Borrelia antibodies or viral DNA/RNA', interpretation: 'Etiology search' }
          ],
          imaging: [
            { modality: 'Cardiac MRI (CMR)', finding: 'Lake Louise criteria positive (T2 edema + T1 Late Gadolinium Enhancement in subepicardial/mid-myocardial distribution)', significance: 'Non-invasive gold standard!' },
            { modality: 'Echocardiography', finding: 'Regional or global wall motion abnormalities, reduced LVEF, pericardial effusion', significance: 'First-line evaluation' }
          ],
          microbiology: [{ test: 'Endomyocardial Biopsy (EMB)', finding: 'Histology (Dallas criteria), immunohistochemistry, viral PCR', significance: 'Gold standard in fulminant cases / Giant cell myocarditis suspicion!' }]
        },
        differential: [
          { disease: 'Acute Coronary Syndrome (ACS / MI)', distinguishing: 'Normal coronary arteries on angiography' },
          { disease: 'Takotsubo Cardiomyopathy', distinguishing: 'Apical ballooning on Echo/angiography, emotional/physical stressor' }
        ],
        therapy: {
          guidelines: ['2023 ESC Guidelines for the management of cardiomyopathies', 'ESC Working Group Consensus Statement'],
          empirical: {
            title: 'Supportive & Symptomatic Therapy for Myocarditis',
            drugs: [
              { drug: 'ACE-i / ARNI + Beta-blocker + MRA', dose: 'e.g., Ramipril / Sacubitril-valsartan + Bisoprolol + Spironolactone', duration: 'At least 6 months', note: 'Standard heart failure therapy for reduced LVEF.' }
            ]
          },
          targeted: 'STRICT ABSTINENCE FROM COMPETITIVE SPORTS FOR 3-6 MONTHS (ESC Class I)! Immunosuppression (High-dose steroids + Azathioprine/Cyclosporine) ONLY for proven giant cell, eosinophilic, or autoimmune myocarditis. For Lyme carditis: Ceftriaxone 2g i.v. q24h for 14-21 days. For cardiogenic shock: VAD / ECMO (Life-support).',
          supportive: ['Physical rest', 'Antiarrhythmics', 'Cardiogenic shock management'],
          prevention: ['Avoid exercise during acute febrile viral illness!', 'Influenza and COVID vaccination']
        },
        prognosis: { mortality: '50% spontaneous recovery; 10-20% progress to DCM; Giant cell myocarditis >80% mortality without immunosuppression', prognostic_scores: [], factors: 'LVEF <35%, ventricular tachycardia, giant cell histology' },
        references: [
          { text: '2023 ESC Guidelines for the management of cardiomyopathies', url: 'https://www.escardio.org' }
        ],
        gallery: []
      },
      {
        id: 'pericarditis',
        name: 'Acute Pericarditis',
        pathogen: { type: 'Virus / Idiopathic / Bacteria', name: 'Enteroviruses (Coxsackie), Echoviruses, Adenoviruses, EBV, CMV, SARS-CoV-2, Idiopathic (>80-90%), Mycobacterium tuberculosis, S. aureus, Autoimmune', gram: 'Variable', shape: 'Variable' },
        epidemiology: {
          incidence: '28 cases / 100,000 persons/year',
          risk_groups: ['Young males (20-50 years)', 'Post-myocardial infarction (Dressler syndrome)', 'Autoimmune disease (SLE, RA)', 'Uremic patients'],
          seasonality: 'Year-round',
          transmission: 'Viral respiratory or GI infection precursor'
        },
        pathomechanism: {
          steps: [
            'Inflammation of visceral and parietal pericardial layers.',
            'Fibrinous exudation ("bread-and-butter" pericarditis) and fluid accumulation in pericardial space.',
            'Inflammatory irritation causes sharp pleuritic chest pain and pericardial friction rub.'
          ],
          virulence_factors: ['Cytokine release', 'Fibrin deposition']
        },
        clinical: {
          incubation: '1-2 weeks post viral prodrome',
          onset: 'Acute',
          symptoms: [
            { name: 'Sharp Retrosternal Chest Pain', description: 'Characteristic: Exacerbated by lying flat and inspiration; relieved by sitting forward and leaning ahead!', severity: 'severe' },
            { name: 'Pericardial Friction Rub', description: 'Scratchy, leather-like triphasic sound heard on auscultation.', severity: 'moderate' }
          ],
          physical_exam: ['Pericardial friction rub (Pathognomonic!), Pulsus paradoxus if tamponade develops, tachycardia'],
          complications: ['Cardiac tamponade (Emergency!)', 'Recurrent pericarditis (15-30%)', 'Constrictive pericarditis ("armored heart")']
        },
        diagnostics: {
          laboratory: [
            { test: 'CRP / ESR', finding: 'Starkly elevated', interpretation: 'Assesses inflammatory activity' },
            { test: 'Troponin', finding: 'Mildly elevated in 30% (Myopericarditis)', interpretation: 'Indicates myocardial involvement' }
          ],
          imaging: [
            { modality: 'ECG', finding: 'Widespread concave ST-elevation in almost all leads (I, II, aVF, V2-V6) + PR depression (aVR shows PR elevation and ST depression)', significance: 'Classic diagnostic ECG pattern!' },
            { modality: 'Echocardiography', finding: 'Pericardial effusion, assesses for tamponade physiology (diastolic RV collapse)', significance: 'Essential baseline test' }
          ]
        },
        differential: [
          { disease: 'Acute Myocardial Infarction (AMI)', distinguishing: 'ECG: Convex ST-elevation with reciprocal changes, Troponin markedly elevated' },
          { disease: 'Pulmonary Embolism / Aortic Dissection', distinguishing: 'CT Pulmonary Angiogram / CTA' }
        ],
        therapy: {
          guidelines: ['ESC Guidelines for the diagnosis and management of pericardial diseases'],
          empirical: {
            title: 'First-Line Therapy for Acute Pericarditis (ESC)',
            drugs: [
              { drug: 'Ibuprofen OR Aspirin + COLCHICINE', dose: 'Ibuprofen 600-800mg q8h p.o. OR Aspirin 750-1000mg q8h p.o. PLUS Colchicine 0.5mg 1-2x/day', duration: 'NSAID 1-2 weeks (tapered); Colchicine for 3 MONTHS!', note: 'Colchicine HALVES recurrence rate (ESC Class I)!' }
            ]
          },
          targeted: 'Second-line: Low-dose corticosteroids (Prednisone 0.2-0.5 mg/kg/day) ONLY if NSAID+Colchicine contraindicated/failed or autoimmune origin (Steroids INCREASE recurrence risk!). Pericardiocentesis for tamponade or purulent/neoplastic suspicion.',
          supportive: ['Physical activity restriction until CRP normalizes'],
          prevention: ['3-month course of colchicine prevents recurrences!']
        },
        prognosis: { mortality: '<1% for uncomplicated pericarditis; 15-30% recurrence risk without colchicine', prognostic_scores: [], factors: 'Fever >38°C, large effusion, cardiac tamponade, failure of colchicine' },
        references: [
          { text: 'ESC Guidelines for the diagnosis and management of pericardial diseases', url: 'https://www.escardio.org' }
        ],
        gallery: []
      },
      {
        id: 'vascular_graft_infection',
        name: 'Vascular Graft Infection (VGI / EVGI)',
        pathogen: { type: 'Bacterium', name: '<i>Staphylococcus aureus</i>, Coagulase-negative Staphylococci (CoNS), <i>Pseudomonas aeruginosa</i>, Enterobacteriaceae, Cutibacterium, Candida', gram: 'Gram-positive and Gram-negative', shape: 'Variable' },
        epidemiology: {
          incidence: '1-6% in open aortic/peripheral bypass surgery; 0.5-1.5% in endovascular stent grafts (EVAR / TEVAR)',
          risk_groups: ['Open aortic or peripheral vascular reconstructions', 'EVAR / TEVAR stent graft recipients', 'Inguinal wound complications (groin incision)', 'Diabetes mellitus, obesity, re-operation'],
          seasonality: 'None',
          transmission: 'Perioperative inoculation (intraoperative contamination), extension from groin wound infection, or hematogenous seeding'
        },
        pathomechanism: {
          steps: [
            'Inoculation & Biofilm: Bacteria adhere to synthetic grafts (PTFE, Dacron) forming a dense biofilm.',
            'Perigraft Inflammation & Abscess: Periprothetic exsudate, abscess formation, gas pockets, and lack of tissue incorporation.',
            'Anastomotic Disruption & Pseudoaneurysm: Destruction of suture line and native vessel wall causing pseudoaneurysms or aorto-enteric / aorto-bronchial fistulas.',
            'Septic Embolization: Shedding of infected thrombi down the peripheral arterial bed.'
          ],
          virulence_factors: ['Dacron/PTFE adhesins', 'Biofilm formation', 'Bacterial proteases']
        },
        clinical: {
          incubation: 'Early (<2 months postop - S. aureus, Gram-negatives) or Late (>2 months postop - S. epidermidis, Cutibacterium)',
          onset: 'Indolent fever to acute catastrophic hemorrhage',
          symptoms: [
            { name: 'Local Wound Symptoms', description: 'Non-healing groin wound, sinus tract, purulent drainage, pulsatile mass (pseudoaneurysm).', severity: 'moderate' },
            { name: 'Systemic Infection Signs', description: 'Fever of unknown origin (FUO), chills, weight loss, sepsis, elevated CRP.', severity: 'severe' },
            { name: 'Life-threatening Bleeding / Fistula', description: 'Aorto-enteric fistula: A minor self-limiting gastrointestinal bleed ("Herald Bleeding") is a crucial warning sign before massive catastrophic hematemesis/melena!', severity: 'severe' }
          ],
          physical_exam: ['Groin wound breakdown, sinus tract, erythema over graft, pulsatile mass, blue toe syndrome (septic emboli)'],
          complications: ['Catastrophic massive hemorrhage (Aorto-enteric fistula rupture)', 'Septic shock', 'Graft thrombosis and acute limb ischemia', 'Limb amputation']
        },
        diagnostics: {
          criteria: [
            {
              name: 'MAGIC (Management of Aortic Graft Infection Collaboration) Criteria',
              items: [
                'Definite VGI: Major Surgical/Histological/Microbiological criterion OR 1 Major Imaging criterion + 1 Minor criterion',
                'Major Imaging Criterion: Perigraft gas >7 days postop, perigraft fluid/abscess on CT, aorto-enteric fistula, focal intense FDG uptake on 18F-FDG PET/CT',
                'Minor Criteria: Fever, elevated CRP, sinus tract, perigraft tissue thickening'
              ]
            }
          ],
          laboratory: [
            { test: 'Blood Cultures', finding: 'At least 2-3 sets prior to antibiotics', interpretation: 'Assesses bacteremia' },
            { test: 'CRP / PCT / ESR', finding: 'Markedly elevated', interpretation: 'Monitors treatment response' }
          ],
          imaging: [
            { modality: 'CT Angiography (CTA)', finding: 'Perigraft gas (>7-14 days postop), fluid collection/abscess, pseudoaneurysm, loss of intervening tissue plane with bowel', significance: 'ESC / ESVS Class I: First-line imaging!' },
            { modality: '18F-FDG PET/CT', finding: 'Intense focal or focal on diffuse FDG uptake along vascular graft ("Sandwich sign")', significance: 'ESC / ESVS Class I GOLD STANDARD: Highest sensitivity and specificity!' }
          ],
          microbiology: [{ test: 'Sonication of explanted graft', finding: 'Pathogen identification and susceptibility', significance: 'Increases yield for biofilm organisms' }]
        },
        differential: [
          { disease: 'Aseptic Seroma', distinguishing: 'PET-CT negative, sterile aspiration' },
          { disease: 'Post-Implantation Syndrome (after EVAR)', distinguishing: 'Fever and leukocytosis immediately post-EVAR without infection, resolves in 3-5 days' }
        ],
        therapy: {
          guidelines: ['ESVS 2020 Clinical Practice Guidelines on Vascular Graft Infections', 'ESC 2023 Endocarditis guidelines'],
          empirical: {
            title: 'Empiric Antibiotic Therapy for Vascular Graft Infection',
            drugs: [
              { drug: 'Vancomycin + Piperacillin/tazobactam OR Cefepime / Meropenem', dose: 'Vancomycin 30-60 mg/kg/day i.v. + Pip-Tazo 4.5g q6h i.v.', duration: 'Until surgical intervention', note: 'Broad-spectrum coverage for MRSA, Pseudomonas, and anaerobes.' }
            ]
          },
          targeted: 'Combined Surgical AND Antimicrobial Therapy (ESVS Class I): Complete excision of infected graft, radical debridement, and revascularization using autologous vein (GSV), homograft, or rifampicin/silver-bonded graft! Post-excision antimicrobial therapy for 6-12 weeks i.v./p.o.; if graft cannot be removed, LIFELONG suppressive antibiotic therapy is required.',
          supportive: ['Emergency vascular surgery consultation for suspected aorto-enteric fistula (Herald Bleeding!)', 'Negative pressure wound therapy (NPWT)'],
          prevention: ['Strict surgical asepsis', 'Perioperative antibiotic prophylaxis (Cefazolin 2g i.v.)']
        },
        prognosis: { mortality: 'Aortic graft infection 25-50% mortality; Untreated aorto-enteric fistula 100%! Amputation risk 10-25%.', prognostic_scores: ['MAGIC Prognosis Score'], factors: 'Aortic localization, emergency surgery, P. aeruginosa / S. aureus pathogen' },
        references: [
          { text: 'ESVS 2020 Clinical Practice Guidelines on Vascular Graft Infections', url: 'https://www.ejves.com' }
        ],
        gallery: []
      }
    ]
  },
  upper_respiratory: {
    name: 'Upper Respiratory Infections',
    icon: 'window.diseaseMetadata.upper_respiratory.icon',
    color: 'window.diseaseMetadata.upper_respiratory.color',
    diseases: [
      {
        id: 'upper_respiratory_infections',
        name: 'Upper Respiratory Tract Infection (Common Cold)',
        pathogen: { type: 'Virus', name: 'Rhinoviruses (>50%), Coronaviruses, Adenoviruses, RSV, Parainfluenza viruses', gram: 'None', shape: 'Capsid' },
        epidemiology: {
          incidence: 'Most common human infection (Adults 2-4x/year, Children 6-8x/year)',
          risk_groups: ['Young children in daycare', 'Stress, sleep deprivation'],
          seasonality: 'Autumn-Winter peak',
          transmission: 'Droplet and contact transmission'
        },
        pathomechanism: {
          steps: ['Invasion of nasopharyngeal epithelium, inflammatory mediator release (histamin, bradykinin), mucosal edema and hypersecretion.'],
          virulence_factors: ['Receptor binding (ICAM-1 for rhinoviruses)']
        },
        clinical: {
          incubation: '1-3 days',
          onset: 'Mild',
          symptoms: [
            { name: 'Nasal & Throat Symptoms', description: 'Rhinitis (rhinorrhea/stuffy nose), sneezing, sore throat, mild fever, cough.', severity: 'mild' }
          ],
          physical_exam: ['Erythematous nasal mucosa, serous/purulent discharge, pharyngeal redness'],
          complications: ['Secondary bacterial infection (Sinusitis, Otitis media, Bronchitis)']
        },
        diagnostics: {
          laboratory: [],
          imaging: []
        },
        differential: [{ disease: 'Allergic Rhinitis', distinguishing: 'Pruritus, eosinophilia, no fever' }],
        therapy: {
          empirical: {
            title: 'Symptomatic Treatment of Common Cold',
            drugs: [
              { drug: 'Analgesics / Antipyretics (Ibuprofen / Acetaminophen)', dose: 'Ibuprofen 400mg 3x/day or Acetaminophen 500-1000mg 3-4x/day p.o.', duration: '3-5 days', note: 'Pain and fever reduction.' },
              { drug: 'Decongestant Nasal Spray (Xylometazoline)', dose: '1-2 sprays per nostril max 3x/day', duration: 'Maximum 5-7 days!', note: 'Risk of rhinitis medicamentosa with prolonged use.' }
            ]
          },
          targeted: 'Purely symptomatic! Antibiotics are NOT indicated for uncomplicated common cold!',
          supportive: ['Adequate hydration', 'Nasal saline irrigation'],
          prevention: ['Hand hygiene']
        },
        prognosis: { mortality: '0%', prognostic_scores: [], factors: 'None' },
        gallery: []
      },
      {
        id: 'laryngitis',
        name: 'Laryngitis & Croup (Laryngotracheobronchitis)',
        pathogen: { type: 'Virus', name: 'Parainfluenza viruses (Types 1-3), RSV, Adenoviruses, Influenza viruses', gram: 'None', shape: 'Variable' },
        epidemiology: {
          incidence: 'Common in infants and young children (6 months to 3 years)',
          risk_groups: ['Young children (anatomically narrow subglottic space)'],
          seasonality: 'Autumn-Winter',
          transmission: 'Respiratory droplets'
        },
        pathomechanism: {
          steps: [
            'Viral infection of larynx and tracheal epithelium.',
            'Subglottic mucosal edema narrows airways (Poiseuille\'s law: halving radius increases resistance 16-fold!).',
            'Inspiratory stridor and barking cough.'
          ],
          virulence_factors: ['Neuraminidase, Hemagglutinin']
        },
        clinical: {
          incubation: '2-5 days',
          onset: 'Sudden, characteristically occurring at night',
          symptoms: [
            { name: 'Barking Cough & Hoarseness', description: 'Characteristic seal-like barking cough and hoarse voice.', severity: 'moderate' },
            { name: 'Inspiratory Stridor', description: 'High-pitched whistling sound during inspiration, jugular/intercostal retractions.', severity: 'severe' }
          ],
          physical_exam: ['Inspiratory stridor, hoarseness, chest wall retractions, tachypnea'],
          complications: ['Acute airway obstruction / Respiratory distress']
        },
        diagnostics: {
          laboratory: [],
          imaging: [{ modality: 'Neck X-ray (AP view)', finding: 'Steeple sign (subglottic narrowing)', significance: 'Rarely needed' }]
        },
        calculators: [
          {
            name: 'Westley Croup Score - Severity Assessment',
            items: [
              { label: 'Inspiratory Stridor (None=0, With agitation=1, At rest=2)', points: 2 },
              { label: 'Retractions (None=0, Mild=1, Moderate=2, Severe=3)', points: 3 },
              { label: 'Air Entry (Normal=0, Decreased=1, Severely decreased=2)', points: 2 },
              { label: 'Cyanosis (None=0, With agitation=4, At rest=5)', points: 5 },
              { label: 'Level of Consciousness (Normal=0, Disoriented=5)', points: 5 }
            ],
            interpretation: [
              { min: 0, max: 2, text: 'Mild Croup (≤2): Single dose oral Dexamethasone.' },
              { min: 3, max: 5, text: 'Moderate Croup (3-5): Dexamethasone + observation.' },
              { min: 6, max: 11, text: 'Severe Croup (6-11): Dexamethasone + Nebulized Epinephrine + Hospital admission.' },
              { min: 12, max: 17, text: 'Impending Respiratory Failure (≥12): ICU admission, intubation readiness!' }
            ]
          }
        ],
        differential: [
          { disease: 'Epiglottitis', distinguishing: 'High fever, drooling, tripod positioning, NO barking cough!' },
          { disease: 'Foreign Body Aspiration', distinguishing: 'Sudden onset during play, no infectious prodrome' }
        ],
        therapy: {
          empirical: {
            title: 'Stepwise Therapy for Croup',
            drugs: [
              { drug: 'Dexamethasone p.o. / i.m. / i.v.', dose: '0.6 mg/kg single dose (max 16mg)', duration: 'Single dose', note: 'Essential for ALL severity grades (Westley score)!' },
              { drug: 'Nebulized Epinephrine (L-Epinephrine)', dose: '2-5 ml of 1:1000 solution via nebulizer', duration: 'For stridor at rest', note: 'Rapid decongestion via alpha-sympathomimetic vasoconstriction.' }
            ]
          },
          targeted: 'Corticosteroids + nebulized Epinephrine for severe stridor. No antibiotics!',
          supportive: ['Cool humidified air, keeping child calm, supplemental oxygen'],
          prevention: ['Smoke-free environment']
        },
        prognosis: { mortality: '<0.1% with timely dexamethasone', prognostic_scores: ['Westley Croup Score'], factors: 'Westley score ≥6' },
        gallery: []
      },
      {
        id: 'epiglottitis',
        name: 'Epiglottitis (Acute Supraglottitis)',
        pathogen: { type: 'Bacterium', name: '<i>Haemophilus influenzae</i> type b (Hib - markedly reduced by vaccination), <i>Streptococcus pneumoniae</i>, <i>S. pyogenes</i>, <i>S. aureus</i>', gram: 'Gram-negative / Gram-positive', shape: 'Variable' },
        epidemiology: {
          incidence: 'Rare since introduction of Hib vaccine',
          risk_groups: ['Unvaccinated children', 'Adults with diabetes / immunosuppression'],
          seasonality: 'Year-round',
          transmission: 'Respiratory droplets'
        },
        pathomechanism: {
          steps: [
            'Bacterial infection of epiglottis and supraglottic structures.',
            'Massive inflammatory edema of epiglottis.',
            'Rapid, life-threatening upper airway obstruction.'
          ],
          virulence_factors: ['Hib PRP capsule']
        },
        clinical: {
          incubation: '1-3 days',
          onset: 'Dramatic, fulminant',
          symptoms: [
            { name: 'The 3 "Ds"', description: 'Dysphagia, Drooling, Distress (respiratory).', severity: 'severe' },
            { name: 'Tripod Position', description: 'Child sits upright, leaning forward with neck extended to maintain airway patency.', severity: 'severe' },
            { name: 'Muffled Voice', description: 'Muffled "hot potato" voice, NO barking cough!', severity: 'severe' }
          ],
          physical_exam: ['ABSOLUTE CONTRAINDICATION TO ORAL EXAMINATION (Risk of fatal laryngospasm!)', 'Seated position, drooling, stridor'],
          complications: ['Acute asphyxiation / Respiratory arrest', 'Sepsis', 'Abscess formation']
        },
        diagnostics: {
          laboratory: [
            { test: 'Blood Cultures', finding: 'Positive for Hib in 70%', interpretation: 'Obtain ONLY AFTER airway is secured!' }
          ],
          imaging: [{ modality: 'Lateral Neck Radiograph', finding: 'Thumbprint sign (swollen epiglottis)', significance: 'Only if patient is stable' }]
        },
        differential: [{ disease: 'Croup', distinguishing: 'Barking cough, no drooling, able to lie flat' }],
        therapy: {
          empirical: {
            title: 'Emergency Management of Epiglottitis',
            drugs: [
              { drug: 'Ceftriaxone i.v.', dose: '2g i.v. q24h (Children: 50-100 mg/kg/day)', duration: '7-10 days', note: 'First-line AFTER airway is secured!' },
              { drug: '+ Vancomycin or Ampicillin/sulbactam', dose: '15-20 mg/kg i.v. q12h', duration: '7-10 days', note: 'Additional Staphylococcal coverage.' }
            ]
          },
          targeted: 'PRIMARY GOAL: IMMEDIATE AIRWAY PROTECTION (Orotracheal intubation in Operating Room / OR)! Ceftriaxone i.v. initiated after airway secured.',
          supportive: ['Prepare for emergency cricothyroidotomy/tracheostomy'],
          prevention: ['Hib conjugate vaccine in infancy (Mandatory!)']
        },
        prognosis: { mortality: '<1% with timely intubation; up to 10-20% with delayed diagnosis', prognostic_scores: [], factors: 'Airway obstruction prior to intubation' },
        gallery: []
      },
      {
        id: 'rsv_infection',
        name: 'RSV Infection (Respiratory Syncytial Virus)',
        pathogen: { type: 'Virus', name: 'Respiratory Syncytial Virus (RSV - Pneumoviridae)', gram: 'None', shape: 'Enveloped ssRNA virus' },
        epidemiology: {
          incidence: 'Leading cause of bronchiolitis and pneumonia in infants <1 year',
          risk_groups: ['Premature infants', 'Infants <6 months', 'Congenital heart disease / BPD', 'Elderly (>65 years)'],
          seasonality: 'Winter-Spring (November to April)',
          transmission: 'Droplet and fomite transmission (Highly contagious!)'
        },
        pathomechanism: {
          steps: [
            'Infection of small airway (bronchiole) epithelium via F protein (fusion protein).',
            'Formation of cell syncytia, epithelial cell necrosis, and massive mucus production.',
            'Bronchiolar obstruction, air-trapping, and atelectasis.'
          ],
          virulence_factors: ['F protein (Fusion)', 'G protein (Attachment)']
        },
        clinical: {
          incubation: '2-8 days',
          onset: 'Symptom progression over 3-5 days',
          symptoms: [
            { name: 'Infant Bronchiolitis', description: 'Tachypnea, wheezing, intercostal retractions, nasal flaring, and poor feeding.', severity: 'severe' },
            { name: 'Apnea in Neonates', description: 'Brief cessation of breathing, particularly in young infants (<2 months).', severity: 'severe' },
            { name: 'Adult Pneumonia', description: 'Severe bronchitis / pneumonia course in elderly.', severity: 'moderate' }
          ],
          physical_exam: ['Tachypnea, wheezing, fine crackles, chest retractions, cyanosis'],
          complications: ['Respiratory failure', 'Secondary bacterial infection', 'Post-bronchiolitis reactive airway disease / asthma']
        },
        diagnostics: {
          laboratory: [
            { test: 'RSV Rapid Antigen / RT-PCR (Nasopharyngeal swab)', finding: 'RSV RNA or antigen positive', interpretation: 'Confirms diagnosis' }
          ],
          imaging: [{ modality: 'Chest X-ray', finding: 'Hyperinflation, peribronchial thickening, atelectasis', significance: 'Bronchiolitis' }]
        },
        differential: [{ disease: 'Rhinovirus / Metapneumovirus Bronchiolitis', distinguishing: 'PCR panel' }],
        therapy: {
          empirical: {
            title: 'Prophylaxis & Supportive Care for RSV Infection (2024/2025)',
            drugs: [
              { drug: 'NIRSEVIMAB (Beyfortus) - Monoclonal Antibody', dose: 'Single dose 50mg (<5kg) or 100mg (≥5kg) i.m.', duration: 'Single dose before/during RSV season', note: 'RECOMMENDED FOR ALL NEONATES/INFANTS in their 1st RSV season (STIKO/CDC)!' },
              { drug: 'PALIVIZUMAB (Synagis)', dose: '15 mg/kg i.m. monthly during season', note: 'Alternative for high-risk preterm infants.' },
              { drug: 'RSV Vaccines (AREXVY / ABRYSVO)', dose: 'Single dose i.m.', duration: 'Single dose', note: 'Arexvy/Abrysvo for adults ≥60 yrs; Abrysvo for pregnant women (32-36 wks gestation) for maternal protection!' }
            ]
          },
          targeted: 'Supportive therapy is the cornerstone: Nasal suctioning, supplemental oxygen (target SpO2 >90-92%), High-Flow Nasal Cannula (HFNC), adequate hydration. Routine bronchodilators and steroids are NOT recommended!',
          supportive: ['Supplemental oxygen, HFNC', 'Enteral/Parenteral hydration'],
          prevention: ['Nirsevimab immunization for all infants', 'RSV vaccination for pregnant women & elderly']
        },
        prognosis: { mortality: '<0.5% in healthy infants; up to 3-5% in congenital heart disease/preterm', prognostic_scores: [], factors: 'Prematurity, age <2 months' },
        gallery: []
      },
      {
        id: 'influenza',
        name: 'Influenza (Seasonal & Pandemic)',
        pathogen: { type: 'Virus', name: 'Influenza virus A (H1N1, H3N2), Influenza virus B (Orthomyxoviridae)', gram: 'None', shape: 'Segmented ssRNA virus' },
        epidemiology: {
          incidence: 'Annual winter epidemics (5-15% of population affected)',
          risk_groups: ['Pregnant women', 'Elderly (>60 years)', 'Chronic conditions (COPD, heart/renal disease)', 'Healthcare workers'],
          seasonality: 'Winter months (December to March)',
          transmission: 'Respiratory droplets and aerosols'
        },
        pathomechanism: {
          steps: [
            'Hemagglutinin (HA) binds sialic acid receptors on tracheobronchial epithelium.',
            'Cell lysis, release of new virions via Neuraminidase (NA).',
            'Robust cytokine release (cytokine storm) causes classic high fever and severe myalgias.'
          ],
          virulence_factors: ['Antigenic drift (point mutations - seasonal)', 'Antigenic shift (reassortment - pandemics)', 'Neuraminidase', 'Hemagglutinin']
        },
        clinical: {
          incubation: '1-4 days',
          onset: 'Sudden, abrupt over hours',
          symptoms: [
            { name: 'Abrupt Onset with High Fever', description: 'High fever (≥39-40°C / 102-104°F), rigors, prominent myalgias (muscle aches), and arthralgias.', severity: 'severe' },
            { name: 'Tracheal Cough & Headache', description: 'Dry, painful cough, retrosternal burning, severe prostration/fatigue.', severity: 'moderate' }
          ],
          physical_exam: ['High fever, pharyngeal redness, dry rales, marked prostration'],
          complications: ['Secondary bacterial pneumonia (S. aureus, S. pneumoniae)', 'Primary Influenza pneumonia', 'Myocarditis', 'Encephalopathy']
        },
        diagnostics: {
          laboratory: [
            { test: 'RT-PCR (Nasopharyngeal swab)', finding: 'Influenza A/B RNA positive', interpretation: 'Gold standard' },
            { test: 'Rapid Antigen Test', finding: 'Influenza A/B antigen positive', interpretation: 'Fast, lower sensitivity' }
          ],
          imaging: [{ modality: 'Chest X-Ray', finding: 'Normal or interstitial pattern', significance: 'Excludes bacterial superinfection' }]
        },
        differential: [{ disease: 'COVID-19 / RSV', distinguishing: 'RT-PCR Multiplex panel' }],
        therapy: {
          empirical: {
            title: 'Antiviral Therapy for Influenza (Start within 48h!)',
            drugs: [
              { drug: 'OSELTAMIVIR (Tamiflu)', dose: '75mg p.o. 2x/day for 5 days', duration: '5 days', note: 'Neuraminidase inhibitor. Indicated in high-risk / severe cases.' },
              { drug: 'BALOXAVIR MARBOXIL (Xofluza)', dose: 'Single dose 40mg (40-80kg) or 80mg (≥80kg) p.o.', duration: 'Single dose', note: 'Capped-endonuclease inhibitor. Single dose administration!' }
            ]
          },
          targeted: 'Antiviral therapy (Oseltamivir / Baloxavir) initiated within 48h shortens duration and reduces complications!',
          supportive: ['Bed rest, antipyretics (Acetaminophen/Ibuprofen)', 'Hydration'],
          prevention: ['Annual Quadrivalent Influenza Vaccination']
        },
        prognosis: { mortality: '<0.1% overall; up to 1-3% in high-risk / bacterial superinfection', prognostic_scores: [], factors: 'Age, underlying comorbidities' },
        gallery: []
      },
      {
        id: 'covid19',
        name: 'COVID-19 (SARS-CoV-2 Infection)',
        pathogen: { type: 'Virus', name: 'SARS-CoV-2 (Coronaviridae)', gram: 'None', shape: 'Enveloped ssRNA virus' },
        epidemiology: {
          incidence: 'Pandemic, now endemic waves',
          risk_groups: ['Elderly (>65 years)', 'Unvaccinated', 'Obesity, diabetes, immunosuppression'],
          seasonality: 'Year-round with Autumn-Winter peaks',
          transmission: 'Aerosols and droplets'
        },
        pathomechanism: {
          steps: [
            'Spike protein binding to ACE2 receptors on alveolar Type II cells and endothelial cells.',
            'Endothelial inflammation, microvascular thrombosis, and hypercoagulability.',
            'Hyperinflammation (cytokine storm), ARDS, and multiorgan involvement.'
          ],
          virulence_factors: ['Spike protein (RBD domain)', 'Mpro / 3CLpro protease']
        },
        clinical: {
          incubation: '2-5 days (Omicron variants)',
          onset: 'Variable',
          symptoms: [
            { name: 'Respiratory & Systemic Symptoms', description: 'Fever, cough, sore throat, fatigue, anosmia/ageusia (loss of taste/smell).', severity: 'moderate' },
            { name: 'Silent Hypoxia', description: 'Dangerous drop in SpO2 without subjective dyspnea!', severity: 'severe' },
            { name: 'Long-COVID / Post-COVID Condition', description: 'Persistent fatigue, post-exertional malaise (PEM/CFS), "brain fog" >12 weeks.', severity: 'moderate' }
          ],
          physical_exam: ['Hypoxemia, lung crackles, tachypnea'],
          complications: ['ARDS', 'Thromboembolism (PE, stroke)', 'Cytokine storm', 'Long COVID']
        },
        diagnostics: {
          laboratory: [
            { test: 'RT-PCR / Rapid Antigen Test', finding: 'SARS-CoV-2 RNA / Antigen positive', interpretation: 'Diagnostic confirmation' },
            { test: 'D-dimer, CRP, Ferritin, IL-6', finding: 'Elevated in severe disease', interpretation: 'Hyperinflammation / Thrombosis risk' }
          ],
          imaging: [{ modality: 'Chest CT', finding: 'Bilateral ground-glass opacities, crazy-paving pattern, consolidations', significance: 'Characteristic' }]
        },
        differential: [{ disease: 'Influenza / RSV', distinguishing: 'PCR Multiplex' }],
        therapy: {
          empirical: {
            title: 'Empiric Therapy for COVID-19 (2024/2025 Guidelines)',
            drugs: [
              { drug: 'NIRMATRELVIR / RITONAVIR (Paxlovid)', dose: '300mg/100mg 2x/day p.o. for 5 days', duration: '5 days', note: 'For high-risk outpatients within 5 days of onset!' },
              { drug: 'REMDESIVIR', dose: '200mg Day 1, then 100mg Days 2-3 i.v.', duration: '3 days', note: 'Early i.v. therapy for high-risk patients.' },
              { drug: 'DEXAMETHASONE', dose: '6mg 1x/day p.o./i.v.', duration: '10 days', note: 'ONLY FOR PATIENTS REQUIRING SUPPLEMENTAL OXYGEN!' },
              { drug: 'TOCILIZUMAB / BARICITINIB', dose: 'Tocilizumab 8mg/kg i.v. single dose', note: 'For rapid progression / cytokine storm.' }
            ]
          },
          targeted: 'Early therapy with Paxlovid or Remdesivir for high-risk outpatients. Dexamethasone + Anticoagulation (LMWH) for hospitalized oxygen-dependent patients.',
          supportive: ['Prone positioning', 'Supplemental oxygen / HFNC / Mechanical ventilation'],
          prevention: ['Updated mRNA vaccinations (seasonal for high-risk groups)']
        },
        prognosis: { mortality: '<0.1% outpatient; 5-15% in hospitalized hypoxic patients', prognostic_scores: [], factors: 'Age, immunosuppression, vaccination status' },
        gallery: []
      },
      {
        id: 'tonsillitis',
        name: 'Acute Tonsillitis',
        pathogen: { type: 'Bacterium / Virus', name: 'Streptococcus pyogenes (GABHS / Group A Strep - 15-30% in children, 10% adults); Viruses: Adenoviruses, EBV, Enteroviruses (~70%)', gram: 'Gram-positive (GAS)', shape: 'Streptococci' },
        epidemiology: {
          incidence: 'Very common in children (5-15 years)',
          risk_groups: ['School children'],
          seasonality: 'Winter-Spring',
          transmission: 'Droplet and contact transmission'
        },
        pathomechanism: {
          steps: [
            'Invasion of palatine tonsils by bacteria or viruses.',
            'Purulent exudation within tonsillar crypts (spots / exudate).',
            'Toxin-mediated inflammation (Streptolysin O/S, Erythrogenic toxins in Scarlet Fever).'
          ],
          virulence_factors: ['M protein (Inhibits phagocytosis)', 'Streptolysin O/S', 'Pyrogenic exotoxins (SPE)']
        },
        clinical: {
          incubation: '1-4 days',
          onset: 'Acute',
          symptoms: [
            { name: 'Severe Sore Throat & Odynophagia', description: 'Severe pain on swallowing, radiating to ears, high fever.', severity: 'severe' },
            { name: 'Absence of Cough', description: 'Lack of cough is a key criterion for bacterial etiology (Centor Score)!', severity: 'moderate' }
          ],
          physical_exam: ['Swollen, hyperemic tonsils with purulent exudate/spots, tender anterior cervical lymphadenopathy, scarlet fever rash'],
          complications: ['Peritonsillar abscess (Trismus, uvular deviation)', 'Acute Rheumatic Fever (ARF)', 'Post-Streptococcal Glomerulonephritis (PSGN)', 'Lemierre syndrome']
        },
        diagnostics: {
          laboratory: [
            { test: 'GAS Rapid Antigen Detection Test (RADT)', finding: 'Group A Strep antigen positive', interpretation: 'High specificity (>95%)' },
            { test: 'Throat Culture', finding: 'Growth of S. pyogenes', interpretation: 'Gold standard' }
          ],
          imaging: []
        },
        calculators: [
          {
            name: 'McIsaac / Modified Centor Score - GAS Pharyngitis Probability',
            items: [
              { label: 'Age (3-14 yrs = +1, 15-44 yrs = 0, ≥45 yrs = -1)', points: 1 },
              { label: 'Fever > 38°C (100.4°F)', points: 1 },
              { label: 'Absence of cough', points: 1 },
              { label: 'Tender anterior cervical lymphadenopathy', points: 1 },
              { label: 'Tonsillar swelling or exudate', points: 1 }
            ],
            interpretation: [
              { min: 0, max: 1, text: 'Low risk (<10%): No antibiotics or testing needed.' },
              { min: 2, max: 3, text: 'Moderate risk (15-30%): RADT/Culture; treat only if positive.' },
              { min: 4, max: 5, text: 'High risk (50-60%): Empiric antibiotics or RADT + treatment.' }
            ]
          }
        ],
        differential: [{ disease: 'Infectious Mononucleosis (EBV / Glandular Fever)', distinguishing: 'Generalized lymphadenopathy, splenomegaly, rash after Amoxicillin!' }],
        therapy: {
          empirical: {
            title: 'Targeted Antibiotic Therapy for GAS Tonsillitis',
            drugs: [
              { drug: 'PENICILLIN V (Phenoxymethylpenicillin)', dose: '1 MU 3x/day p.o. (Children: 50,000 IU/kg/day)', duration: '10 FULL DAYS', note: 'FIRST CHOICE! 10-day course is MANDATORY to prevent Acute Rheumatic Fever!' },
              { drug: 'AMOXICILLIN', dose: '500mg 2x/day p.o.', duration: '10 days', note: 'First-line alternative.' },
              { drug: 'Cefadroxil / Cefuroxime', dose: '500mg 2x/day p.o.', duration: '10 days', note: 'For non-anaphylactic penicillin allergy.' },
              { drug: 'Azithromycin / Clarithromycin', dose: '500mg Day 1, then 250mg Days 2-5', duration: '5 days', note: 'For severe penicillin allergy.' }
            ]
          },
          targeted: 'Penicillin V or Amoxicillin for 10 full days to prevent Acute Rheumatic Fever!',
          supportive: ['Analgesics (Ibuprofen / Acetaminophen)', 'Sore throat lozenges'],
          prevention: ['Hand hygiene']
        },
        prognosis: { mortality: '0%', prognostic_scores: ['McIsaac / Centor Score'], factors: 'Adherence to 10-day antibiotic course' },
        gallery: []
      },
      {
        id: 'sinusitis',
        name: 'Acute Sinusitis (Acute Rhinosinusitis - ARS / ABRS)',
        pathogen: { type: 'Bacterium / Virus', name: 'Viral ARS (>90-98%): Rhinoviruses, Influenza; Bacterial ABRS (2-10%): <i>Streptococcus pneumoniae</i>, <i>Haemophilus influenzae</i>, <i>Moraxella catarrhalis</i>', gram: 'Variable', shape: 'Variable' },
        epidemiology: {
          incidence: 'Extremely common (Adults 1-2 episodes/year)',
          risk_groups: ['Allergies', 'Anatomic variations (septal deviation)', 'Swimming'],
          seasonality: 'Autumn-Winter',
          transmission: 'Respiratory droplets'
        },
        pathomechanism: {
          steps: [
            'Mucosal swelling obstructs sinus ostia (ostial blockage).',
            'Secretory stasis and hypoxia within paranasal sinuses impair mucociliary clearance.',
            'Bacterial superinfection of stagnant secretions (ABRS).'
          ],
          virulence_factors: ['Pneumococcal capsule', 'BETA-lactamase production (M. catarrhalis >90%, H. influenzae ~30%)']
        },
        clinical: {
          incubation: 'Follows viral URI',
          onset: 'Acute',
          symptoms: [
            { name: 'Facial Pain & Pressure', description: 'Worsened by bending forward! Frontal, maxillary, or retro-orbital distribution.', severity: 'moderate' },
            { name: 'Purulent Rhinorrhea & Nasal Congestion', description: 'Purulent nasal discharge, hyposmia/anosmia.', severity: 'moderate' },
            { name: 'Bacterial ABRS Signs', description: 'Double sickening (worsening after initial improvement), persistent symptoms >10 days, high fever (>39°C).', severity: 'severe' }
          ],
          physical_exam: ['Tenderness over trigeminal nerve exit points (infraorbital/supraorbital), purulent discharge in middle meatus'],
          complications: ['Orbital cellulitis / Abscess (Emergency!)', 'Epidural / Brain abscess', 'Cavernous sinus thrombosis', 'Pott\'s puffy tumor']
        },
        diagnostics: {
          laboratory: [],
          imaging: [{ modality: 'CT Paranasal Sinuses', finding: 'Opacification, fluid levels, mucosal thickening', significance: 'ONLY for complications or treatment failure!' }]
        },
        differential: [{ disease: 'Dental Infection (Maxillary Tooth)', distinguishing: 'Dental consultation' }],
        therapy: {
          empirical: {
            title: 'Management of Acute Rhinosinusitis (EPOS 2020)',
            drugs: [
              { drug: 'Topical Nasal Steroids (Mometasone / Fluticasone)', dose: '2 sprays per nostril 2x/day', duration: '14-21 days', note: 'FIRST-LINE FOR VIRAL & BACTERIAL RHINOSINUSITIS!' },
              { drug: 'AMOXICILLIN or CO-AMOXICLAV (for ABRS)', dose: 'Amoxicillin 500mg-1g 3x/day p.o. OR Co-amoxiclav 875/125mg 2x/day p.o.', duration: '5-7 days', note: 'Indicated ONLY if ABRS criteria are met!' },
              { drug: 'Doxycycline / Levofloxacin', dose: 'Doxycycline 100mg 2x/day p.o.', duration: '5-7 days', note: 'For penicillin allergy.' }
            ]
          },
          targeted: 'Viral ARS: Nasal steroids + saline irrigation + decongestants (max 5 days). ABRS: Amoxicillin or Co-amoxiclav 5-7 days.',
          supportive: ['Isotonic saline nasal spray / irrigation', 'Analgesics'],
          prevention: ['Manage allergic rhinitis']
        },
        prognosis: { mortality: '<0.01%', prognostic_scores: [], factors: 'Complications' },
        gallery: []
      },
      {
        id: 'otitis_media',
        name: 'Acute Otitis Media (AOM)',
        pathogen: { type: 'Bacterium / Virus', name: '<i>Streptococcus pneumoniae</i>, Non-typeable <i>Haemophilus influenzae</i> (NTHi), <i>Moraxella catarrhalis</i>, Respiratory viruses', gram: 'Gram-positive / Gram-negative', shape: 'Variable' },
        epidemiology: {
          incidence: 'Extremely common in infants and young children (6-24 months)',
          risk_groups: ['Infants <2 years', 'Daycare attendance', 'Passive smoke exposure', 'Pacifier use'],
          seasonality: 'Winter-Spring',
          transmission: 'Extension from viral rhinitis via Eustachian tube'
        },
        pathomechanism: {
          steps: [
            'Viral URI leads to Eustachian tube dysfunction.',
            'Negative pressure in middle ear cavity allows aspiration of nasopharyngeal bacteria.',
            'Purulent exudate accumulates, bulging and inflaming the tympanic membrane.',
            'Unrelieved pressure leads to spontaneous tympanic membrane perforation and otorrhea.'
          ],
          virulence_factors: ['Pneumococcal capsule', 'NTHi biofilm formation', 'BETA-lactamase production']
        },
        clinical: {
          incubation: '2-7 days post URI',
          onset: 'Sudden, often at night with sharp ear pain',
          symptoms: [
            { name: 'Classic Pediatric Symptoms', description: 'Sudden, severe ear pain (otalgia), high fever (≥38.5-39°C), conductive hearing loss.', severity: 'severe' },
            { name: 'Infant Non-specific Symptoms', description: 'Inconsolable crying, irritability, ear tugging/pulling, poor feeding, vomiting.', severity: 'moderate' },
            { name: 'Otorrhea (Ear Discharge)', description: 'Purulent discharge following spontaneous tympanic membrane perforation, accompanied by sudden relief of pain!', severity: 'moderate' }
          ],
          physical_exam: [
            'Otoscopy / Pneumatic Otoscopy (Gold Standard):',
            '  * Bulging, erythematous or cloudy tympanic membrane',
            '  * Significantly reduced or absent tympanic membrane mobility',
            '  * Loss of normal bony landmarks and light reflex',
            'Tragus tenderness',
            'Erythema, swelling, or protrusion of the pinna over the mastoid process indicates MASTOIDITIS!'
          ],
          complications: ['Acute Mastoiditis (Warzenfortsatz-Destruktion - EMERGENCY!)', 'Facial nerve palsy', 'Labyrinthitis & Sensorineural hearing loss', 'Intracranial complications (Epidural abscess, meningitis, sinus thrombosis)']
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC & CRP', finding: 'Leukocytosis and elevated CRP (>40-80 mg/L) in severe AOM', interpretation: 'Bacterial marker' }
          ],
          imaging: [
            { modality: 'Otoscopy / Otomicroscopy', finding: 'Bulging, hyperemic tympanic membrane with reduced mobility', significance: 'Essential gold standard' },
            { modality: 'Temporal Bone CT', finding: 'Opacification of mastoid air cells with bony erosion', significance: 'ONLY if mastoiditis is suspected!' }
          ],
          microbiology: [{ test: 'Ear discharge culture (post-perforation / tympanocentesis)', finding: 'Pathogen identification and sensitivities', significance: 'For targeted therapy / treatment failure' }]
        },
        differential: [
          { disease: 'Otitis Media with Effusion (OME)', distinguishing: 'NO acute inflammation, fever, or pain! Fluid/bubbles behind intact tympanic membrane.' },
          { disease: 'Acute Otitis Externa (Swimmer\'s Ear)', distinguishing: 'Severe pain on tragus pressure or pinna traction; ear canal swollen.' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'SYSTEMIC ANALGESIA (Ibuprofen / Acetaminophen)', dose: 'Ibuprofen 10 mg/kg q6h OR Acetaminophen 15 mg/kg q6h p.o./p.r.', duration: '3-5 days', note: '1st AND MOST IMPORTANT STEP! Immediate pain relief!' },
              { drug: '"WATCHFUL WAITING" (Observation Option - AAP / ECDC)', dose: 'Strict analgesia + follow-up re-evaluation in 48-72h', duration: '48 hours', note: 'Appropriate for children ≥2 yrs with mild unilateral AOM without otorrhea!' },
              { drug: 'AMOXICILLIN (High-Dose p.o.)', dose: '80-90 mg/kg/day p.o. in 2-3 divided doses (Adults: 1g p.o. 3x/day)', duration: '10 days (<2 yrs) / 5-7 days (≥2 yrs)', note: 'FIRST-LINE ANTIBIOTIC! Indicated immediately for: Infants <6 mos, bilateral AOM <2 yrs, high fever (≥39°C), or otorrhea!' },
              { drug: 'Amoxicillin / Clavulanate (High-Dose)', dose: '90 mg/kg/day amoxicillin component p.o.', duration: '7-10 days', note: 'Indicated if amoxicillin used in last 30 days, purulent conjunctivitis, or amoxicillin failure after 48h.' },
              { drug: 'Cefuroxime axetil / Azithromycin', dose: 'Cefuroxime 30 mg/kg/day p.o.; Azithromycin 10 mg/kg Day 1, 5 mg/kg Days 2-5', duration: '5-10 days', note: 'For penicillin allergy.' }
            ],
            inpatient: [
              { drug: 'Ceftriaxone i.v. / i.m.', dose: '50 mg/kg i.v./i.m. q24h', duration: '1-3 days', note: 'For vomiting children or treatment failure.' }
            ],
            icu: [
              { drug: 'Tympanocentesis (Myringotomy) + Mastoidectomy', dose: '-', duration: '-', note: 'ENT intervention for mastoiditis or intractable severe pain.' }
            ]
          },
          targeted: 'Targeted antimicrobial therapy based on ear discharge culture. High-dose Amoxicillin is first-line.',
          supportive: ['Oral analgesics (NSAIDs/Acetaminophen)! Ear drops are INEFFECTIVE with intact tympanic membrane and CONTRAINDICATED with perforation!', 'Nasal decongestants'],
          prevention: [
            '1. VACCINATIONS:',
            '- PNEUMOCOCCAL CONJUGATE VACCINES (PCV13, PCV15, PCV20): Reduced invasive AOM episodes by >60-80%!',
            '- HAEMOPHILUS INFLUENZAE TYPE B (Hib) vaccine.',
            '- ANNUAL INFLUENZA VACCINATION: Reduces post-influenza AOM by 30-50%.',
            '2. RISK REDUCTION: Breastfeeding for at least 6 months, avoiding passive smoke exposure.'
          ]
        },
        prognosis: { mortality: 'Uncomplicated 0%; with mastoiditis / intracranial complications 1-3%', prognostic_scores: ['AOM Severity Score'], factors: 'Age <6 months, PCV vaccination status, adequate amoxicillin dose' },
        gallery: []
      }
    ]
  }
};

const enFileHeader = '// Auto-generated updated Thorax_en.ts\nObject.assign(window.diseases, ' +
  JSON.stringify(enData, null, 2).replace(/"(window\.diseaseMetadata\.[^"]+)"/g, '$1') + ');\n';

fs.writeFileSync('/app/applet/src/data/Thorax_en.ts', enFileHeader, 'utf8');
console.log('Successfully written Thorax_en.ts!');
