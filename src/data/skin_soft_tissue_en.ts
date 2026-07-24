import { Category } from '../types';

export const skinSoftTissueEn: Category = {
  name: 'Skin and Soft Tissue Infections',
  icon: '🩹',
  color: '#e11d48',
  didactics: {
    overview: 'Skin and Soft Tissue Infections (SSTIs) and deep space bone/joint infections span a broad clinical spectrum ranging from superficial localized lesions (impetigo, folliculitis) to life-threatening necrotizing soft tissue infections (NSTIs), complex diabetic foot infections (DFIs), and bone/joint destructions (osteomyelitis, septic arthritis, spondylodiscitis). Management is governed by recent authoritative guidelines (IDSA 2024 updates, WSES 2024, IWGDF 2023, NPIAP 2023, and OVIVA trial principles). Treatment rests on two main pillars: prompt, aggressive surgical source control (debridement, drainage, or revascularization) and targeted, evidence-based antimicrobial therapy.',
    primary: 'Classification of Purulent vs. Non-Purulent SSTIs (IDSA 2024): 1) Purulent SSTIs (Cutaneous Abscesses, Furuncles, Carbuncles): Primary treatment is Incision & Drainage (I&D). Antibiotics are indicated for moderate/severe cases, systemic symptoms (fever, SIRS), immunosuppression, or facial/hand locations. 2) Non-Purulent SSTIs (Erysipelas, Cellulitis, Necrotizing Infections): Empiric therapy targets Streptococci and MSSA/MRSA. Short-course oral therapy (5–7 days) is as effective as 10–14 days for uncomplicated cellulitis if clinical response is achieved.',
    secondary: 'Necrotizing Soft Tissue Infections (NSTIs / Necrotizing Fasciitis): Hyperacute surgical emergencies. Key diagnostic clue: Pain out of proportion to physical findings. LRINEC score may support suspicion, but surgery MUST NEVER be delayed for imaging or laboratory results. Surgical exploration ("Finger test") and radical debridement within 6–12 hours is life-saving. Empiric triple therapy: (Pip/Tazo or Meropenem) + Vancomycin + Clindamycin (for toxin synthesis inhibition) ± IVIG in GAS Toxic Shock Syndrome.',
    biliary: 'Diabetic Foot Infections (DFI - IWGDF 2023) & Chronic Pressure Injuries (NPIAP 2023): DFI management requires infection staging (mild, moderate, severe), Probe-to-Bone (PTB) test, off-loading, and vascular assessment (ABI). Systemic antibiotics are contraindicated for uninfected colonized chronic ulcers or pressure injuries; they are indicated strictly for active clinical infection, cellulitis, or osteomyelitis.',
    diagnostics: [
      '1) Clinical Examination: Distinguish purulent vs non-purulent, assess depth, crepitus, bullae, anesthesia, and Probe-to-Bone (PTB) status.',
      '2) Surgical Exploration ("Finger Test"): Lack of bleeding, "dishwater" fluid, and loss of fascial resistance confirm Necrotizing Fasciitis.',
      '3) Diagnostic Arthrocentesis: Mandatory for suspected Septic Arthritis BEFORE starting antibiotics (Synovial WBC > 50,000/µL, >90% PMNs).',
      '4) Microbiology: Deep tissue biopsy or curettage for DFI/Osteomyelitis (avoid superficial swabs of uncleaned ulcers); Blood cultures (50% positive in Spondylodiscitis/Septic Arthritis).',
      '5) Imaging: Contrast CT for soft tissue gas/abscess in NSTI; MRI (gold standard) for Spondylodiscitis, Osteomyelitis, and deep tissue abscesses.'
    ],
    red_flags: [
      'Excruciating pain out of proportion to physical exam findings (early NSTI warning)',
      'Subcutaneous crepitus, skin necrosis, bullae, or loss of sensation (anesthesia due to nerve necrosis)',
      'Reynolds/SIRS criteria or Septic Shock (hypotension, elevated lactate >2 mmol/L, altered mental status)',
      'Positive Probe-to-Bone (PTB) test with exposed bone in diabetic foot ulcer',
      'Acute monarthritis with inability to move joint actively or passively (Septic Arthritis emergency)',
      'Progressive neurological deficits (motor paresis, sphincter dysfunction) in suspected Spondylodiscitis (Epidural Abscess)'
    ],
    special_populations: 'Diabetic Patients: Polyneuropathy blunts pain perception; micro-/macrovascular disease impairs healing—low threshold for PTB test and imaging. Elderly & Immunocompromised: May present without fever or classic leukocytosis. IV Drug Users: High incidence of CA-MRSA, Septic Arthritis, Spondylodiscitis, and Infective Endocarditis.',
    teaching_tip: 'In Purulent SSTIs, Incision & Drainage is primary! In NSTIs, Surgical Source Control is life-saving! In Bone and Joint Infections (Osteomyelitis, Septic Arthritis, Spondylodiscitis), early oral antibiotic switch after 7–10 days IV induction (OVIVA trial) is non-inferior to 6 weeks IV therapy.'
  },
  tables: [
    {
      title: 'Guideline Summary & Differential Diagnosis of Major Skin, Soft Tissue, and Bone/Joint Infections',
      headers: ['Disease', 'Pathogen Spectrum', 'Diagnostic Gold Standard', 'Key Guideline Criteria', 'Empiric Antimicrobial Therapy', 'Interventional / Surgical Source Control'],
      rows: [
        ['Necrotizing Fasciitis (NSTI)', 'Type I: Polymicrobial; Type II: GAS, S. aureus; Type III: Vibrio/Clostridium', 'Surgical Exploration ("Finger test") & Tissue Biopsy', 'WSES 2024 / IDSA: Emergency debridement <6-12h; LRINEC score >=6/8', 'Pip/Tazo 4.5g q6h + Vanco 15-20mg/kg + Clindamycin 900mg q8h IV', 'Immediate emergency radical surgical debridement + re-look <24h'],
        ['Erysipelas', 'Streptococcus pyogenes (GAS) >> Group B/C/G Strep', 'Clinical: Sharp, raised, flame-like bright red plaque', 'IDSA 2024 / AWMF: Non-purulent superficial infection; 7-10d PO therapy', 'Penicillin V 500-1000mg PO q6h or Penicillin G 2-4MU IV q4-6h', 'None required (treat tinea pedis / entry portal; elevate limb)'],
        ['Cellulitis', 'Streptococcus pyogenes, MSSA, MRSA', 'Clinical: Diffuse, ill-defined erythema, warmth, edema', 'IDSA 2024: 5–7 days duration non-inferior if clinical response', 'Cephalexin 500mg PO q6h or Cefazolin 1-2g IV q8h (+ Vanco/TMP-SMX if MRSA)', 'Elevate limb; drainage only if secondary abscess develops'],
        ['Impetigo Contagiosa', 'S. aureus (bullous & non-bullous), S. pyogenes', 'Clinical: Honey-colored crusts or flaccid bullae', 'IDSA: Topical therapy for mild (<5 lesions); Oral for extensive/bullous', 'Topical Mupirocin 2% BID x 5d OR Oral Cephalexin 500mg PO q6h x 7d', 'Local wound hygiene and removal of crusts'],
        ['Cutaneous Abscess / Furuncle', 'Staphylococcus aureus (MSSA & MRSA)', 'Clinical examination & Bedside US (fluctuance)', 'IDSA 2024: Primary therapy is Incision & Drainage; ABx for SIRS/face', 'Incision & Drainage alone (Add TMP-SMX or Doxycycline if SIRS/severe)', 'Primary Incision & Drainage (I&D) + copiously irrigate'],
        ['Diabetic Foot Infection (DFI)', 'Mild: Monomicrobial. Moderate/Severe: Polymicrobial + Anaerobes', 'Clinical infection signs + Deep tissue biopsy + PTB test', 'IWGDF / IDSA 2023: Staging mild/mod/severe; PTB test for osteomyelitis', 'Amox/Clav PO (Mild) or Pip/Tazo 4.5g IV q6h + Vanco (Mod/Severe)', 'Surgical debridement, off-loading (TCC), vascular revascularization'],
        ['Pressure Injury (Decubitus)', 'Secondary colonization / Polymicrobial infection', 'Clinical staging (NPIAP Stage 1-4 / DTPI)', 'NPIAP 2023: Systemic ABx ONLY for acute cellulitis, sepsis, osteomyelitis', 'No systemic ABx for uninfected ulcers! (Pip/Tazo only if cellulitis/sepsis)', 'Debridement of necrotic slough/eschar + pressure offloading q2h'],
        ['Osteomyelitis', 'Staphylococcus aureus (MSSA/MRSA), S. epidermidis', 'Bone Biopsy culture & Histology + MRI', 'IDSA / OVIVA Trial: 4-6w total therapy; Early oral switch non-inferior', 'Vancomycin 15-20mg/kg IV + Ceftriaxone 2g IV q24h (Early oral switch)', 'Surgical debridement of necrotic bone (sequestrectomy)'],
        ['Septic Arthritis', 'Staphylococcus aureus, S. pyogenes, N. gonorrhoeae', 'Bedside Arthrocentesis (Synovial WBC >50,000/µL)', 'IDSA / BSH: Immediate emergency joint drainage + IV ABx', 'Vancomycin 15-20mg/kg IV + Ceftriaxone 2g IV q24h x 3-4 weeks', 'Emergency joint drainage (Arthroscopic washout or needle aspiration)'],
        ['Spondylodiscitis', 'Staphylococcus aureus, E. coli, Streptococci', 'Contrast MRI of Spine + Blood cultures / CT biopsy', 'IDSA Guidelines: 6 weeks targeted antimicrobial therapy + MRI monitoring', 'Vancomycin + Ceftriaxone 2g IV q24h (6w total; early oral switch)', 'Surgery for neurological deficit, spinal instability, or epidural abscess']
      ]
    }
  ],
  diseases: [
    {
      id: 'necrotizing_fasciitis',
      name: 'Necrotizing Fasciitis (Necrotizing Soft Tissue Infection - NSTI)',
      pathogen: {
        type: 'Bacterium',
        name: 'Type I: Polymicrobial (Aerobes + Anaerobes); Type II: Monomicrobial (<i>Streptococcus pyogenes</i> / GAS, <i>Staphylococcus aureus</i>); Type III: <i>Vibrio vulnificus</i>, <i>Clostridium perfringens</i>',
        gram: 'Mixed',
        shape: 'Variable'
      },
      epidemiology: {
        incidence: '0.4–1.0 / 100,000 annually; high mortality (20–40% even with treatment)',
        risk_groups: ['Type I: Diabetes mellitus, obesity, peripheral vascular disease, cirrhosis, immunosuppression', 'Type II: Young healthy individuals, blunt trauma, surgery, varicella infection, IV drug use', 'Type III: Marine exposure, raw seafood consumption, liver disease'],
        seasonality: 'None (Vibrio vulnificus higher in warm summer coastal waters)',
        transmission: 'Direct inoculation through minor skin breach, surgical wounds, trauma, or hematogenous seed'
      },
      pathomechanism: {
        steps: [
          'Entry: Bacteria enter subcutaneous tissue and superficial fascial planes, which have sparse blood supply.',
          'Toxin & Enzyme Secretion: Exotoxins (GAS SpeA/B/C, Clostridial alpha-toxin, PVL) cause direct tissue destruction, capillary thrombosis, and intense localized edema.',
          'Ischemic Necrosis: Microvascular thrombosis causes rapid liquefactive necrosis of subcutaneous fat and fascia. Destruction of cutaneous nerves produces localized anesthesia (a ominous late sign).',
          'Systemic Toxicity & Shock: Massive release of cytokines and bacterial superantigens leads to Streptococcal/Staphylococcal Toxic Shock Syndrome (STSS) and multi-organ failure.'
        ],
        virulence_factors: ['GAS M protein', 'Streptococcal pyrogenic exotoxins (SpeA/B/C)', 'Panton-Valentine leukocidin (PVL)', 'Clostridial alpha-toxin (lecithinase)', 'Hyaluronidase']
      },
      clinical: {
        incubation: 'Hours to 2–3 days following minor trauma or surgery',
        onset: 'Hyperacute, fulminant progression',
        symptoms: [
          { name: 'Early Warning Sign', description: 'Excruciating pain that is markedly disproportionate to the mild initial cutaneous findings (erythema, edema). Patient appears systemically septic and febrile.', severity: 'severe' },
          { name: 'Advanced Local Signs', description: 'Skin color changes from bright red to violaceous/grey, followed by bullae formation (fluid-filled blisters), skin necrosis, crepitus (gas in tissues), and localized anesthesia due to cutaneous nerve destruction.', severity: 'severe' },
          { name: 'Systemic Toxic Shock', description: 'Refractory hypotension, tachycardia, high fever, altered mental status, oliguria, and multi-organ failure.', severity: 'severe' }
        ],
        physical_exam: [
          'Pain out of proportion to exam findings (hallmark early sign!)',
          'Tense, "woody" induration extending far beyond skin erythema',
          'Skin evolution: Erythema -> Violaceous/bronze discoloration -> Bullae -> Cutaneous gangrene',
          'Cutaneous anesthesia (loss of sensation over affected area due to nerve infarction)',
          'Subcutaneous crepitus (tastable gas, prominent in Type I and Clostridial infection)',
          'Systemic toxicity: Fever, tachycardia, hypotension, confused sensorium'
        ],
        complications: ['Septic Shock & Toxic Shock Syndrome (STSS)', 'Disseminated Intravascular Coagulation (DIC)', 'Multi-Organ Dysfunction Syndrome (MODS)', 'Limb amputation', 'Death (20–40% treated, 100% untreated)']
      },
      diagnostics: {
        laboratory: [
          { test: 'LRINEC Score (Laboratory Risk Indicator for Necrotizing Fasciitis)', finding: 'Score >=6 indicates suspicion; score >=8 indicates high probability (calculates CRP, WBC, Hb, Na, Creatinine, Glucose)', interpretation: 'Note: LRINEC has moderate/low sensitivity (~60-70%); a LOW score DOES NOT rule out NSTI!' },
          { test: 'Serum Lactate & Arterial Blood Gas', finding: 'Markedly elevated lactate (>2-4 mmol/L), metabolic acidosis', interpretation: 'Severe tissue hypoperfusion and anaerobic metabolism' },
          { test: 'Complete Blood Count (CBC) & Creatinine', finding: 'Profound leukocytosis (>20,000/µL) with left shift or leukopenia; elevated creatinine', interpretation: 'Severe systemic infection and acute kidney injury' }
        ],
        imaging: [
          { modality: 'Contrast CT Scan', finding: 'Fascial thickening, fluid along fascial planes, subcutaneous gas (high specificity)', significance: 'Best imaging modality, BUT imaging MUST NEVER DELAY emergency surgery if clinical suspicion is high!' },
          { modality: 'Plain Radiographs', finding: 'Soft tissue gas shadows', significance: 'Low sensitivity, late finding' }
        ],
        microbiology: [
          { test: 'Bedside Surgical "Finger Test"', finding: 'Minimal resistance to blunt finger dissection of subcutaneous fascia, absence of bleeding, foul "dishwater" fluid', significance: 'Bedside diagnostic gold standard' },
          { test: 'Intraoperative Tissue Biopsy & Gram Stain', finding: 'Polymicrobial or Gram-positive cocci in chains/clusters, PMN infiltrate, fascial necrosis', significance: 'Gold standard for definitive diagnosis and targeted therapy' },
          { test: 'Blood Cultures (x2 pairs)', finding: 'Positive in >60% of Type II (GAS) infections', significance: 'Confirms bacteremic spread' }
        ],
        scores: ['LRINEC Score', 'FGSI (Fournier Gangrene Severity Index)']
      },
      calculators: [
        {
          name: 'LRINEC Score - Necrotizing Fasciitis Risk Assessment',
          items: [
            { label: 'CRP >= 150 mg/L', points: 4 },
            { label: 'WBC 15 - 25 x 10^9/L', points: 1 },
            { label: 'WBC > 25 x 10^9/L', points: 2 },
            { label: 'Hemoglobin < 13.5 g/dL', points: 1 },
            { label: 'Hemoglobin < 11.0 g/dL', points: 2 },
            { label: 'Sodium < 135 mmol/L', points: 2 },
            { label: 'Serum Creatinine > 141 µmol/L (1.6 mg/dL)', points: 2 },
            { label: 'Glucose > 10 mmol/L (180 mg/dL)', points: 1 }
          ],
          interpretation: [
            { min: 0, max: 5, text: 'Low Risk (<50% probability). Clinical vigilance required. Do not rely solely on score if clinical suspicion is high!' },
            { min: 6, max: 7, text: 'Intermediate Risk (50-75% probability). Urgent surgical consultation and re-evaluation.' },
            { min: 8, max: 13, text: 'High Risk (>75% probability). IMMEDIATE emergency surgical exploration and broad-spectrum IV antibiotics!' }
          ]
        }
      ],
      differential: [
        { disease: 'Severe Cellulitis', distinguishing: 'No severe pain out of proportion, no fascial gas, intact skin sensation, lacks rapid systemic toxicity' },
        { disease: 'Pyomyositis', distinguishing: 'Infection confined within skeletal muscle bellies; MRI differentiates' },
        { disease: 'Clostridial Gas Gangrene', distinguishing: 'Dominant muscle necrosis (myonecrosis), sweet/foul odor, profuse gas production' },
        { disease: 'Deep Vein Thrombosis (DVT)', distinguishing: 'Swelling and pain present, but lacks fever, erythema progression, and skin necrosis' }
      ],
      therapy: {
        guidelines: ['WSES 2024 / IDSA Guidelines: Emergency radical surgical debridement (<6-12h) + empiric broad-spectrum triple IV antimicrobial therapy + re-look surgery within 24h.'],
        empirical: {
          outpatient: [
            { drug: 'NO OUTPATIENT THERAPY!', dose: 'IMMEDIATE EMERGENCY TRANSFER TO SURGICAL ICU', duration: '-', note: 'Surgical emergency! Every hour delay increases mortality.' }
          ],
          inpatient: [
            { drug: 'Piperacillin / Tazobactam', dose: '4.5 g IV q6h', duration: 'Until surgical control & clinical stability', note: 'Broad-spectrum Gram-positive, Gram-negative, and anaerobic coverage' },
            { drug: '+ Vancomycin', dose: '15-20 mg/kg IV q8-12h (target trough 15-20 µg/mL)', duration: '', note: 'MRSA coverage' },
            { drug: '+ Clindamycin', dose: '900 mg IV q8h', duration: '', note: 'CRITICAL antitoxin effect: suppresses bacterial ribosomal protein synthesis & toxin production (GAS SpeA/SpeB, PVL)' }
          ],
          icu: [
            { drug: 'Meropenem', dose: '1.0 g IV q8h', duration: '', note: 'Alternative to Pip/Tazo in severe shock, carbapenemase risk, or penicillin allergy' },
            { drug: '+ Vancomycin + Clindamycin', dose: 'Standard doses IV', duration: '', note: 'Empiric triple regimen' },
            { drug: 'Intravenous Immunoglobulin (IVIG)', dose: '1 g/kg on Day 1, then 0.5 g/kg/day on Days 2-3', duration: '3 days total', note: 'Adjunctive therapy in Streptococcal Toxic Shock Syndrome (STSS) to neutralize circulating superantigens' }
          ]
        },
        targeted: 'Guided by intraoperative Gram stain & cultures. Type II GAS: Penicillin G (4 MU IV q4h) + Clindamycin (900mg IV q8h). Type III Vibrio: Ceftriaxone (2g IV q24h) + Doxycycline (100mg PO/IV q12h).',
        supportive: ['IMMEDIATE emergency radical surgical debridement (mandatory within 6-12 hours)', 'Planned surgical re-exploration (re-look debridement) within 24 hours', 'Aggressive IV crystalloid fluid resuscitation', 'Vasopressor support (Norepinephrine) for septic shock', 'Hyperbaric Oxygen Therapy (HBOT) (adjunctive only, must NEVER delay surgery)'],
        prevention: ['Meticulous wound care', 'Aseptic surgical technique', 'Optimized glycemic control in diabetic patients']
      },
      guidelines: {
        diagnosis: [
          'Clinical diagnosis (disproportionate pain, systemic toxicity) demands immediate surgical exploration.',
          'Surgical "Finger test" provides immediate bedside confirmation.',
          'Do NOT delay surgery for imaging or LRINEC calculation.'
        ],
        treatment_indications: [
          'Immediate emergency surgical debridement in ALL suspected cases.',
          'Empiric broad-spectrum triple-drug IV therapy before and during surgery.'
        ],
        first_line: [
          'Surgical debridement + (Piperacillin/Tazobactam or Meropenem) + Vancomycin + Clindamycin IV.'
        ]
      },
      prognosis: {
        mortality: '20–40% despite optimal surgical and ICU care; 100% without surgery',
        prognostic_scores: ['LRINEC Score', 'FGSI'],
        factors: 'Surgical delay >12 hours, advanced age, truncal/head-neck location, septic shock at presentation'
      }
    },
    {
      id: 'erysipelas',
      name: 'Erysipelas',
      pathogen: {
        type: 'Bacterium',
        name: '<i>Streptococcus pyogenes</i> (Group A Streptococcus [GAS] >90%), less commonly Group B, C, or G Streptococci',
        gram: 'Gram-positive',
        shape: 'coccus'
      },
      epidemiology: {
        incidence: 'Common superficial SSTI, 10–100 / 100,000 per year',
        risk_groups: ['Elderly adults', 'Infants and young children', 'Lymphedema / prior lymph node dissection', 'Chronic venous insufficiency', 'Obesity', 'Tinea pedis / interdigital skin breach'],
        seasonality: 'Slightly higher in winter and spring',
        transmission: 'Inoculation via minor cutaneous breach (tinea pedis, scratch, ulcer)'
      },
      pathomechanism: {
        steps: [
          'Entry: GAS penetrates upper dermis and superficial cutaneous lymphatics via a minor skin break.',
          'Lymphatic Spread: Rapid bacterial multiplication and lymphatic spread create the characteristic sharply demarcated, raised, flame-like advancing border.',
          'Exotoxin Release: Pyrogenic exotoxins cause intense local vascular dilation, edema, and systemic febrile reaction.'
        ],
        virulence_factors: ['GAS M protein', 'Streptolysin O and S', 'Hyaluronidase', 'Streptokinase']
      },
      clinical: {
        incubation: '1 to 4 days',
        onset: 'Sudden, acute onset',
        symptoms: [
          { name: 'Cutaneous Plaque', description: 'Abrupt appearance of a fiery red, swollen, warm, painful skin lesion with sharp, raised, step-off borders (flame-like advancement). Most common on lower limbs (80%) and face (15% - Milian ear sign).', severity: 'severe' },
          { name: 'Systemic Symptoms', description: 'High fever (38.5–40°C), shaking chills, headache, and malaise often precede or accompany skin signs by several hours.', severity: 'moderate' }
        ],
        physical_exam: [
          'Fiery red, shiny, indurated plaque',
          'Sharply demarcated, raised, step-off margin (differentiates from cellulitis)',
          'Milian ear sign (ear involvement indicates erysipelas due to lack of deep subcutaneous tissue)',
          'Regional painful lymphadenopathy and lymphangitis (red streaks)',
          'Inspect interdigital spaces for tinea pedis (entry portal!)'
        ],
        complications: ['Bullous erysipelas', 'Progression to cellulitis or deep abscess', 'Recurrent erysipelas leading to chronic lymphedema (elephantiasis nostras verrucosa)', 'Post-streptococcal glomerulonephritis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Complete Blood Count (CBC)', finding: 'Leukocytosis (12,000–18,000/µL) with neutrophilia', interpretation: 'Acute bacterial infection' },
          { test: 'C-Reactive Protein (CRP) & ESR', finding: 'Markedly elevated CRP (>50-100 mg/L)', interpretation: 'Acute phase inflammatory response' },
          { test: 'Blood Cultures', finding: 'Positive in <5% of cases', interpretation: 'Indicated only in severe systemic toxicity or immunocompromised patients' }
        ],
        imaging: [
          { modality: 'Duplex Ultrasound', finding: 'Excludes deep vein thrombosis (DVT) or subcutaneous abscess if leg swelling is severe', significance: 'Clinical diagnosis; imaging not routinely required' }
        ],
        microbiology: [
          { test: 'Skin Surface Swab', finding: 'Low yield unless intact bullae fluid or open skin breach is aspirated', significance: 'Confirmation of Group A Strep' }
        ]
      },
      differential: [
        { disease: 'Cellulitis', distinguishing: 'Deeper dermal/subcutaneous involvement, diffuse ill-defined borders, flat non-raised plaque' },
        { disease: 'Herpes Zoster', distinguishing: 'Dermatomal distribution, painful grouped vesicles on erythematous base' },
        { disease: 'Contact Dermatitis', distinguishing: 'Intense pruritus, absence of fever/chills, history of allergen exposure' },
        { disease: 'Erythema Migrans (Lyme Disease)', distinguishing: 'Expanding annular target lesion, tick exposure history, minimal pain/fever' }
      ],
      therapy: {
        guidelines: ['IDSA 2024 / AWMF S2k Guidelines: First-line oral/IV therapy targeted specifically against Group A Streptococcus. Routine coverage for S. aureus/MRSA is NOT required for classic erysipelas.'],
        empirical: {
          outpatient: [
            { drug: 'Penicillin V (Phenoxymethylpenicillin)', dose: '500 mg - 1000 mg PO q6h', duration: '7 to 10 days', note: 'First-line therapy for mild, uncomplicated erysipelas' },
            { drug: 'Amoxicillin', dose: '500 mg - 1000 mg PO q8h', duration: '7 to 10 days', note: 'Alternative first-line PO regimen' },
            { drug: 'Cephalexin', dose: '500 mg PO q6h', duration: '7 to 10 days', note: 'First-line alternative in non-anaphylactic penicillin allergy' },
            { drug: 'Clindamycin', dose: '300 mg - 450 mg PO q8h', duration: '7 to 10 days', note: 'For severe IgE-mediated penicillin allergy (monitor for C. difficile)' }
          ],
          inpatient: [
            { drug: 'Penicillin G (Benzylpenicillin)', dose: '2 - 4 million IU IV q4-6h', duration: '7 to 10 days (switch to PO when fever subsides)', note: 'First-line IV therapy for severe or inpatient erysipelas' },
            { drug: 'Cefazolin', dose: '1 - 2 g IV q8h', duration: '7 to 10 days', note: 'Preferred IV alternative in non-severe penicillin allergy' },
            { drug: 'Ceftriaxone', dose: '1 - 2 g IV q24h', duration: '7 to 10 days', note: 'Once-daily outpatient/inpatient parenteral regimen' }
          ]
        },
        targeted: 'Streptococcus pyogenes is uniformly susceptible to Penicillin. Resistance to Macrolides/Clindamycin ranges from 10–30%.',
        supportive: ['Strict leg elevation above heart level (reduces local edema)', 'Cooling moist compresses', 'Analgesics and antipyretics (Paracetamol/Ibuprofen)', 'Treatment of interdigital tinea pedis with topical antifungals (critical to prevent recurrence)'],
        prevention: ['Treatment of entry portals (tinea pedis, skin fissures)', 'Compression therapy for chronic venous edema (after acute infection resolves)', 'Secondary prophylaxis: Benzathine Penicillin G 1.2 MU IM every 3–4 weeks for patients with >=3 recurrences per year']
      },
      guidelines: {
        diagnosis: [
          'Clinical diagnosis based on fiery red, raised, sharply demarcated plaque with acute fever.',
          'Microbiological swabs are not routinely indicated for typical uncomplicated cases.'
        ],
        treatment_indications: [
          'All cases require narrow-spectrum anti-streptococcal antimicrobial therapy.',
          'Hospitalization required for severe systemic toxicity, facial involvement, lymphedema, or treatment failure.'
        ],
        first_line: [
          'Oral Penicillin V or Amoxicillin; IV Penicillin G for severe/hospitalized cases.'
        ]
      },
      prognosis: {
        mortality: '<1% with timely antibiotic therapy',
        prognostic_scores: ['None'],
        factors: 'High recurrence rate (20–30%) in chronic lymphedema, venous insufficiency, or untreated tinea pedis'
      }
    },
    {
      id: 'cellulitis',
      name: 'Cellulitis',
      pathogen: {
        type: 'Bacterium',
        name: '<i>Streptococcus pyogenes</i> (GAS) and <i>Staphylococcus aureus</i> (MSSA & MRSA)',
        gram: 'Gram-positive',
        shape: 'coccus'
      },
      epidemiology: {
        incidence: 'High incidence (~200 / 100,000 annually)',
        risk_groups: ['Diabetes mellitus', 'Obesity', 'Peripheral vascular disease', 'Chronic lymphedema', 'Previous cellulitis episodes', 'Disrupted skin barrier (trauma, ulcers, eczema, IV drug use)'],
        seasonality: 'Higher incidence in warm summer months',
        transmission: 'Bacterial invasion into deep dermis via cutaneous breaks'
      },
      pathomechanism: {
        steps: [
          'Invasion: Pathogens enter deeper dermis and subcutaneous fat layer through skin breaks.',
          'Diffuse Spread: Bacteria produce hyaluronidase and enzymes allowing diffuse horizontal and vertical spread within subcutaneous tissue (unlike the superficial, lymph-restricted spread of erysipelas).',
          'Inflammatory Cascade: Neutrophil recruitment, cytokine release, capillary leakage, and localized tissue swelling.'
        ],
        virulence_factors: ['Streptococcal M protein & toxins', 'Staphylococcal coagulase & alpha-toxin', 'PVL (in CA-MRSA)']
      },
      clinical: {
        incubation: '1 to 3 days',
        onset: 'Acute onset over 24–48 hours',
        symptoms: [
          { name: 'Spreading Erythema', description: 'Ill-defined, flat, poorly demarcated spreading redness, warmth, swelling, and tenderness over affected area (most commonly lower extremity).', severity: 'moderate' },
          { name: 'Systemic Symptoms', description: 'Low-grade fever, malaise, regional lymphadenopathy; severe fever/chills suggest bacteremia or deeper infection.', severity: 'moderate' }
        ],
        physical_exam: [
          'Spreading erythema with ill-defined, diffuse margins',
          'Local warmth, non-fluctuant edema, tenderness',
          'Red streaks (lymphangitis) advancing proximal to lesion',
          'Pitting edema of affected extremity',
          'Absence of purulence or fluctuance (if purulent, treat as cutaneous abscess/MRSA)'
        ],
        complications: ['Subcutaneous abscess formation', 'Necrotizing fasciitis transition', 'Bacteremia & Septic shock', 'Recurrent cellulitis causing secondary lymphedema', 'Thrombophlebitis']
      },
      diagnostics: {
        laboratory: [
          { test: 'CBC', finding: 'Mild to moderate leukocytosis with left shift', interpretation: 'Inflammatory response' },
          { test: 'CRP / ESR', finding: 'Elevated', interpretation: 'Useful for baseline and response monitoring' },
          { test: 'Blood Cultures', finding: 'Positive in <5% of uncomplicated cases', interpretation: 'Recommended for severe infection, SIRS, sepsis, or immunocompromised hosts' }
        ],
        imaging: [
          { modality: 'Bedside Ultrasound (POCUS)', finding: 'Subcutaneous cobblestoning (edema); identifies occult fluid collection / abscess', significance: 'Crucial to rule out drainage-requiring abscess or DVT' },
          { modality: 'Duplex Ultrasound', finding: 'Excludes deep vein thrombosis (DVT)', significance: 'Indicated for unilateral lower limb swelling' }
        ],
        microbiology: [
          { test: 'Wound / Aspirate Swab', finding: 'NOT recommended for uncomplicated non-purulent cellulitis', significance: 'High rate of false-positive surface colonization' }
        ]
      },
      differential: [
        { disease: 'Erysipelas', distinguishing: 'Superficial dermis, fiery red, sharply raised margins, prominent initial chills' },
        { disease: 'Cutaneous Abscess', distinguishing: 'Fluctuant tender central mass; ultrasound reveals fluid collection' },
        { disease: 'Deep Vein Thrombosis (DVT)', distinguishing: 'Unilateral calf pain/swelling without marked local heat or spreading skin redness; Doppler US positive' },
        { disease: 'Stasis Dermatitis', distinguishing: 'Bilateral chronic lower leg erythema and hemosiderin staining, non-tender, no systemic fever' }
      ],
      therapy: {
        guidelines: ['IDSA 2024 Guidelines: Non-purulent cellulitis empiric therapy must cover Streptococci and MSSA. Short-course therapy (5–7 days) is as effective as 10–14 days for uncomplicated cases. Routine MRSA coverage is NOT indicated unless risk factors exist.'],
        empirical: {
          outpatient: [
            { drug: 'Cephalexin', dose: '500 mg PO q6h', duration: '5 to 7 days', note: 'First-line oral choice for non-purulent cellulitis (covers Strep & MSSA)' },
            { drug: 'Amoxicillin / Clavulanate', dose: '875/125 mg PO q12h', duration: '5 to 7 days', note: 'First-line broad-spectrum oral alternative' },
            { drug: 'Cefadroxil', dose: '500 mg - 1000 mg PO q12h', duration: '5 to 7 days', note: 'Convenient twice-daily oral cephalosporin' },
            { drug: 'Trimethoprim / Sulfamethoxazole (TMP-SMX)', dose: '1-2 DS tablets PO q12h', duration: '5 to 7 days', note: 'ADD to beta-lactam IF MRSA risk factors exist (penetrating trauma, IVDU, purulent drainage, known MRSA colonization)' }
          ],
          inpatient: [
            { drug: 'Cefazolin', dose: '1 - 2 g IV q8h', duration: '5 to 7 days total (switch to PO)', note: 'First-line IV regimen for non-purulent cellulitis' },
            { drug: 'Ceftriaxone', dose: '1 - 2 g IV q24h', duration: '5 to 7 days', note: 'First-line once-daily IV option' },
            { drug: 'Vancomycin', dose: '15 - 20 mg/kg IV q8-12h', duration: '5 to 7 days', note: 'First-line IV choice IF severe MRSA risk, purulent cellulitis, or severe penicillin anaphylaxis' }
          ]
        },
        targeted: 'Streptococci -> Penicillin / Cefazolin; MSSA -> Cefazolin / Flucloxacillin; MRSA -> Vancomycin / Linezolid / TMP-SMX / Doxycycline.',
        supportive: ['Limb elevation above heart level (essential to reduce edema and speed healing!)', 'Cooling moist dressing', 'Moisturizers for dry cracked skin', 'Treatment of underlying entry portal (tinea pedis, venous eczema)'],
        prevention: ['Skin hydration and care', 'Compression therapy for chronic venous insufficiency (once acute infection resolves)', 'Prophylactic oral Penicillin for >=3 recurrent cellulitis episodes per year']
      },
      guidelines: {
        diagnosis: [
          'Clinical diagnosis based on spreading, ill-defined erythema, warmth, and swelling.',
          'Bedside ultrasound recommended to rule out occult abscess formation.'
        ],
        treatment_indications: [
          'Empiric therapy covering Streptococci and MSSA for non-purulent cellulitis.',
          '5–7 days duration is non-inferior to longer courses for uncomplicated cases.'
        ],
        first_line: [
          'Oral Cephalexin or Cefadroxil (outpatient); IV Cefazolin or Ceftriaxone (inpatient).'
        ]
      },
      prognosis: {
        mortality: '<1% in uncomplicated cellulitis; higher in elderly or bacteremic patients',
        prognostic_scores: ['Eron Classification for SSTI'],
        factors: 'Delayed treatment, untreated lymphedema, uncontrolled diabetes'
      }
    },
    {
      id: 'impetigo',
      name: 'Impetigo Contagiosa',
      pathogen: {
        type: 'Bacterium',
        name: '<i>Staphylococcus aureus</i> (primary cause of bullous & non-bullous) and <i>Streptococcus pyogenes</i> (GAS)',
        gram: 'Gram-positive',
        shape: 'coccus'
      },
      epidemiology: {
        incidence: 'Most common bacterial skin infection in children (ages 2–6 years)',
        risk_groups: ['Young children in daycare/school', 'Warm humid climates', 'Crowded living conditions', 'Minor skin trauma, insect bites, pediculosis, scabies', 'Contact sports'],
        seasonality: 'Peak in late summer and autumn',
        transmission: 'Direct person-to-person contact or autoinoculation via hands/fomites'
      },
      pathomechanism: {
        steps: [
          'Colonization: Pathogens colonize minor skin breaks or abrasions.',
          'Exotoxin Effect (Bullous form): S. aureus produces Exfoliative Toxins A and B (ETA/ETB), which specifically cleave desmoglein-1 in the superficial epidermis (stratum granulosum), causing intraepidermal blisters.',
          'Non-Bullous form: Local bacterial multiplication triggers painful neutrophilic intraepidermal pustules that rupture, producing dried serous "honey-colored" crusts.'
        ],
        virulence_factors: ['Exfoliative toxins A and B (ETA/ETB)', 'GAS M protein', 'Staphylococcal coagulase']
      },
      clinical: {
        incubation: '1 to 3 days (GAS) or 4 to 10 days (S. aureus)',
        onset: 'Acute presentation',
        symptoms: [
          { name: 'Non-Bullous Impetigo (70%)', description: 'Small red papules or vesicles around nose and mouth that rapidly rupture, oozing serous fluid that dries into characteristic golden, amber, "honey-colored" crusts on an erythematous base.', severity: 'moderate' },
          { name: 'Bullous Impetigo (30%)', description: 'Flaccid, fluid-filled bullae (1–2 cm) with clear/turbid fluid that rupture leaving thin, varnish-like brown crusts with surrounding scale. Nikolsky sign is negative.', severity: 'moderate' },
          { name: 'Pruritus & Discomfort', description: 'Mild localized itching or burning; systemic symptoms (fever, lymphadenopathy) are rare.', severity: 'mild' }
        ],
        physical_exam: [
          'Facial distribution (perioral, perinasal) or extremities',
          'Classic honey-colored (golden-yellow) stuck-on crusts',
          'Superficial flaccid bullae with turbid fluid (bullous form)',
          'Regional painless or tender lymphadenopathy',
          'Absence of deep dermal involvement or systemic fever'
        ],
        complications: ['Ecthyma (ulcerative deep form penetrating into dermis)', 'Post-streptococcal glomerulonephritis (PSGN - up to 5% with nephritogenic GAS strains; NOT prevented by antibiotics)', 'Staphylococcal Scalded Skin Syndrome (SSSS in neonates)', 'Cellulitis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Clinical Diagnosis', finding: 'Characteristic honey-colored crusts or flaccid bullae', interpretation: 'Sufficient for treatment initiation; labs not required' }
        ],
        microbiology: [
          { test: 'Exudate / Crust Swab & Culture', finding: 'Identifies S. aureus or S. pyogenes; antimicrobial susceptibility testing', significance: 'Indicated for widespread lesions, treatment failure, bullous outbreaks, or suspected MRSA' }
        ]
      },
      differential: [
        { disease: 'Herpes Simplex Virus (HSV)', distinguishing: 'Grouped painful vesicles on erythematous base, perioral, recurs at same site, swab PCR positive' },
        { disease: 'Contact Dermatitis', distinguishing: 'Linear/geographic pruritic papulovesicles, clear fluid, history of allergen exposure' },
        { disease: 'Superficial Tinea Corporis', distinguishing: 'Annular scaling plaque with central clearing; KOH prep positive' }
      ],
      therapy: {
        guidelines: ['IDSA Guidelines: Topical antimicrobial therapy is first-line for localized non-bullous impetigo (<5 lesions). Oral systemic therapy is reserved for widespread/bullous lesions, daycare outbreaks, or systemic signs.'],
        empirical: {
          outpatient: [
            { drug: 'Mupirocin 2% Ointment', dose: 'Apply topically to lesions BID or TID', duration: '5 days', note: 'First-line topical regimen for localized impetigo' },
            { drug: 'Retapamulin 1% Ointment', dose: 'Apply topically to lesions BID', duration: '5 days', note: 'Topical alternative for patients >=9 months old' },
            { drug: 'Ozenoxacin 1% Cream', dose: 'Apply topically BID', duration: '5 days', note: 'Topical quinolone alternative for patients >=2 months old' },
            { drug: 'Cephalexin', dose: '25-50 mg/kg/day PO in 4 divided doses (or 500mg PO q6h in adults)', duration: '7 days', note: 'First-line ORAL systemic therapy for widespread or bullous impetigo' },
            { drug: 'Amoxicillin / Clavulanate', dose: '25-45 mg/kg/day PO in 2 divided doses', duration: '7 days', note: 'Oral alternative covering MSSA and GAS' },
            { drug: 'Trimethoprim / Sulfamethoxazole (TMP-SMX)', dose: '8-12 mg/kg/day TMP PO in 2 divided doses', duration: '7 days', note: 'Oral choice IF MRSA is confirmed or suspected' }
          ],
          inpatient: [
            { drug: 'Cefazolin', dose: '50-100 mg/kg/day IV in 3 divided doses', duration: '7 days', note: 'Indicated only for rare severe, complicated, or neonate cases' }
          ]
        },
        targeted: 'Targeted to isolated S. aureus or GAS. Note: Topical Neomycin/Bacitracin is NOT recommended due to contact sensitization.',
        supportive: ['Gently soak and wash crusts with warm water and soap before applying topical ointment', 'Strict hand hygiene and short fingernails', 'Keep child home from daycare/school until 24 hours after initiating effective antibiotics', 'Separate towels and washcloths'],
        prevention: ['Prompt treatment of minor cuts and insect bites', 'Good hand hygiene in childcare facilities', 'Treatment of nasal S. aureus carriage if recurrent']
      },
      guidelines: {
        diagnosis: [
          'Clinical diagnosis based on honey-colored crusts or flaccid bullae.',
          'Swab culture recommended for widespread or treatment-refractory cases.'
        ],
        treatment_indications: [
          'Topical Mupirocin for localized cases (<5 lesions).',
          'Oral Cephalexin or Amox/Clav for extensive, bullous, or outbreak cases.'
        ],
        first_line: [
          'Topical Mupirocin 2% ointment BID x 5 days OR Oral Cephalexin x 7 days.'
        ]
      },
      prognosis: {
        mortality: 'Excellent (<0.1%)',
        prognostic_scores: ['None'],
        factors: 'Risk of PSGN with nephritogenic GAS strains; excellent response to therapy'
      }
    },
    {
      id: 'folliculitis',
      name: 'Folliculitis, Furuncle, Carbuncle & Cutaneous Abscess',
      pathogen: {
        type: 'Bacterium',
        name: '<i>Staphylococcus aureus</i> (MSSA & MRSA primary cause); <i>Pseudomonas aeruginosa</i> ("Hot-Tub" folliculitis)',
        gram: 'Gram-positive',
        shape: 'coccus'
      },
      epidemiology: {
        incidence: 'Very common purulent SSTI spectrum',
        risk_groups: ['Diabetes mellitus', 'Obesity', 'Crowded living conditions, military barracks, contact sports (CA-MRSA)', 'Nasal S. aureus carriage', 'Shaving, friction, tight clothing', 'Hot-tub / heated pool exposure (Pseudomonas)'],
        seasonality: 'Higher in warm, humid weather',
        transmission: 'Autoinoculation from nasal carriage, direct person-to-person contact, contaminated water'
      },
      pathomechanism: {
        steps: [
          'Folliculitis: Superficial bacterial infection restricted to the hair follicle ostium, causing small perifollicular pustules.',
          'Furuncle (Boil): Infection extends deeper into dermis and subcutaneous tissue around hair follicle, forming a tender, suppurative inflammatory nodule with central necrosis.',
          'Carbuncle: Coalition of multiple adjacent furuncles with subcutaneous loculations and sinus tract drainage.',
          'Cutaneous Abscess: Focal collection of pus within dermis and subcutaneous tissue characterized by fluctuance, tissue liquefaction, and surrounding erythema.'
        ],
        virulence_factors: ['Panton-Valentine leukocidin (PVL toxin in CA-MRSA causing severe tissue necrosis)', 'Alpha-hemolysin', 'Coagulase']
      },
      clinical: {
        incubation: '1 to 3 days',
        onset: 'Acute onset',
        symptoms: [
          { name: 'Folliculitis', description: 'Multiple small (1–3 mm) itchy or mildy tender pustules surrounded by narrow erythematous halos centered on hair follicles.', severity: 'mild' },
          { name: 'Furuncle & Carbuncle', description: 'Painful, firm, red nodule that becomes fluctuant and ruptures, discharging purulent necrotic material. Carbuncles present with severe pain, systemic fever, and multi-headed pus drainage.', severity: 'moderate' },
          { name: 'Cutaneous Abscess', description: 'Painful, tender, erythematous, warm, fluctuant nodule or mass with a central necrotic point and surrounding edema.', severity: 'severe' }
        ],
        physical_exam: [
          'Erythematous perifollicular pustules (Folliculitis)',
          'Tender, firm nodule with central pustule/necrosis (Furuncle)',
          'Large indurated plaque with multiple draining sinuses (Carbuncle)',
          'Fluctuant, compressible central soft collection with surrounding warmth (Abscess)',
          'Regional lymphadenopathy and fever (Carbuncle / Large Abscess)'
        ],
        complications: ['Extensive tissue destruction', 'Bacteremia and metastatic seeding (Infective Endocarditis, Septic Arthritis, Spondylodiscitis)', 'Cavernous sinus thrombosis (from facial furuncles in danger triangle)', 'Recurrent furunculosis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Clinical Diagnosis', finding: 'Sufficient for simple folliculitis or localized furuncle', interpretation: 'Labs not needed for mild cases' },
          { test: 'CBC & CRP', finding: 'Leukocytosis and elevated CRP in carbuncles or severe abscesses with SIRS', interpretation: 'Assesses systemic inflammatory response' }
        ],
        imaging: [
          { modality: 'Bedside Ultrasound (POCUS)', finding: 'Anechoic or hypoechoic fluid collection with posterior acoustic enhancement & "swirl" sign on compression', significance: 'Gold standard to confirm drainage-requiring fluid collection vs cellulitis' }
        ],
        microbiology: [
          { test: 'Pus Gram Stain & Culture', finding: 'Gram-positive cocci in clusters (S. aureus); antimicrobial susceptibility testing (MSSA vs MRSA)', significance: 'MANDATORY for carbuncles, severe abscesses, recurrent cases, or treatment failures' }
        ]
      },
      differential: [
        { disease: 'Epidermal Inclusion Cyst (Infected)', distinguishing: 'Pre-existing cyst with central punctum, foul cheesy keraceous material, recurrent at same site' },
        { disease: 'Hidradenitis Suppurativa', distinguishing: 'Recurrent inflammatory nodules, sinus tracts, and scarring in axillae, groin, or inframammary folds' },
        { disease: 'Hot-Tub Folliculitis', distinguishing: 'Follicular pustules under swimsuit area 8–48 hours post hot-tub exposure; caused by Pseudomonas aeruginosa' }
      ],
      therapy: {
        guidelines: ['IDSA 2024 Guidelines: Primary and definitive treatment for Cutaneous Abscesses, Furuncles, and Carbuncles is INCISION & DRAINAGE (I&D). Routine systemic antibiotics are NOT recommended after complete I&D unless specific risk criteria are met.'],
        empirical: {
          outpatient: [
            { drug: 'Incision & Drainage (I&D) Alone', dose: 'Primary surgical intervention', duration: 'Definitive', note: 'Primary therapy for uncomplicated cutaneous abscesses/furuncles!' },
            { drug: 'Trimethoprim / Sulfamethoxazole (TMP-SMX)', dose: '1-2 DS tablets PO q12h', duration: '5 to 7 days', note: 'Oral first-line choice IF antibiotics indicated (covers CA-MRSA)' },
            { drug: 'Doxycycline', dose: '100 mg PO q12h', duration: '5 to 7 days', note: 'Oral alternative covering MRSA' },
            { drug: 'Cephalexin', dose: '500 mg PO q6h', duration: '5 to 7 days', note: 'Oral choice IF MSSA is confirmed or low MRSA prevalence' },
            { drug: 'Topical Mupirocin 2%', dose: 'Apply topically BID', duration: '5 to 7 days', note: 'For superficial folliculitis' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15 - 20 mg/kg IV q8-12h', duration: '5 to 7 days', note: 'IV choice for severe carbuncles/abscesses with SIRS, severe immunosuppression, or facial location' },
            { drug: 'Cefazolin', dose: '1 - 2 g IV q8h', duration: '5 to 7 days', note: 'IV choice for severe MSSA carbuncles' }
          ]
        },
        targeted: 'Targeted to culture results. Indications for adding systemic antibiotics AFTER I&D: 1) Severe or extensive disease (carbuncle, multiple sites); 2) Rapid progression or surrounding cellulitis (>2 cm); 3) Systemic signs (fever, SIRS, sepsis); 4) Immunosuppression or severe comorbidities; 5) High-risk anatomical location (face, hand, genitalia); 6) Extremes of age.',
        supportive: ['Incision & Drainage: Adequate linear incision, probe to break up subcutaneous loculations, warm irrigation', 'Wound packing: Optional (brief packing for large >5 cm abscesses; non-packing preferred in small abscesses)', 'Warm moist compresses for furuncles to encourage spontaneous drainage'],
        prevention: ['Decolonization protocol for recurrent S. aureus furunculosis: Intranasal Mupirocin 2% ointment BID for 5 days + Chlorhexidine 2% body wash daily for 5–14 days', 'Hygiene, avoid sharing razors/towels']
      },
      guidelines: {
        diagnosis: [
          'Clinical diagnosis; Bedside Ultrasound confirms fluctuant fluid collection.',
          'Pus culture recommended for carbuncles, severe or recurrent abscesses.'
        ],
        treatment_indications: [
          'Incision & Drainage is primary and sufficient for uncomplicated simple abscesses.',
          'Add systemic antibiotics (TMP-SMX, Doxycycline) for SIRS, surrounding cellulitis, or facial location.'
        ],
        first_line: [
          'Primary Incision & Drainage + (TMP-SMX or Doxycycline if antibiotic criteria met).'
        ]
      },
      prognosis: {
        mortality: '<0.1% for uncomplicated abscesses; higher if complicated by bacteremia',
        prognostic_scores: ['None'],
        factors: 'Adequacy of surgical drainage is the single most important determinant of cure!'
      }
    },
    {
      id: 'diabetic_foot',
      name: 'Diabetic Foot Infection (DFI)',
      pathogen: {
        type: 'Polymicrobial',
        name: 'Mild: Monomicrobial (<i>Staphylococcus aureus</i>, <i>Streptococcus agalactiae</i>/Group B); Moderate/Severe: Polymicrobial (<i>S. aureus</i>, <i>Enterobacteriaceae</i> [<i>E. coli</i>, <i>Klebsiella</i>, <i>Proteus</i>], <i>Pseudomonas aeruginosa</i>, <i>Bacteroides fragilis</i>, <i>Peptostreptococcus</i>)',
        gram: 'Mixed',
        shape: 'Variable'
      },
      epidemiology: {
        incidence: '15–25% of diabetic patients develop a foot ulcer; DFI is the leading cause of non-traumatic lower extremity amputation worldwide',
        risk_groups: ['Diabetic peripheral neuropathy (loss of protective sensation)', 'Peripheral Artery Disease (PAD / ischemia)', 'Foot deformities (Charcot neuroarthropathy, hammer toes)', 'Prior foot ulcer or amputation', 'Poor glycemic control (HbA1c >8%)'],
        seasonality: 'None',
        transmission: 'Skin breach due to unnoticed trauma, friction, or pressure ulcer in a neuropathic ischemic foot'
      },
      pathomechanism: {
        steps: [
          'Neuropathy & Trauma: Peripheral sensory neuropathy leads to loss of protective sensation; repetitive unnoticed mechanical trauma causes skin ulceration.',
          'Ischemia & Impaired Healing: Peripheral arterial disease and microvascular dysfunction cause tissue hypoxia, impairing leukocyte function and wound healing.',
          'Polymicrobial Infection: Bacteria colonize the ulcer and form dense, antibiotic-resistant biofilms. Infection spreads rapidly along deep fascial compartments, tendons, and bone joints.',
          'Osteomyelitis Development: Contiguous spread into underlying bone causes localized bone necrosis, abscess, and gangrene.'
        ],
        virulence_factors: ['Biofilm matrix formation', 'Polymicrobial synergy', 'Adhesins', 'Bacterial proteases']
      },
      clinical: {
        incubation: 'Subacute or acute presentation',
        onset: 'Insidious onset, rapidly worsening when infected',
        symptoms: [
          { name: 'Ulcer & Infection Signs', description: 'Foot ulceration with purulent drainage, foul odor, surrounding erythema, warmth, and swelling. Pain may be surprisingly ABSENT or muted due to severe diabetic neuropathy!', severity: 'severe' },
          { name: 'Systemic Infection Signs', description: 'Fever, chills, severe hyperglycemia / glycemic instability, confusion, or hypotension in severe, limb- or life-threatening DFI.', severity: 'severe' }
        ],
        physical_exam: [
          'Inspect ulcer depth, size, purulence, foul odor, slough, and necrotic tissue',
          'Probe-to-Bone (PTB) Test: Gently insert a sterile metallic probe into ulcer base; feeling hard, gritty bone indicates underlying osteomyelitis with high specificity (>85%)',
          'Neurological Exam: Semmes-Weinstein 10g monofilament test (loss of protective sensation)',
          'Vascular Exam: Palpate dorsalis pedis & posterior tibial pulses; measure Ankle-Brachial Index (ABI) and Toe Brachial Index (TBI)',
          'Check for deep space abscess, gas, crepitus, or ascending lymphangitis'
        ],
        complications: ['Cortical bone necrosis & Osteomyelitis (up to 50% of deep ulcers)', 'Deep plantar space abscess', 'Wet gangrene', 'Major lower extremity amputation (below-knee / above-knee)', 'Sepsis & Death']
      },
      diagnostics: {
        laboratory: [
          { test: 'Serum Inflammatory Markers (CRP, ESR, WBC)', finding: 'Markedly elevated CRP and ESR (>70 mm/h strongly correlates with osteomyelitis)', interpretation: 'Assesses infection severity and response to therapy' },
          { test: 'HbA1c & Blood Glucose', finding: 'Hyperglycemia (HbA1c elevated)', interpretation: 'Essential for metabolic management' }
        ],
        imaging: [
          { modality: 'Plain Foot Radiographs (2 views)', finding: 'Cortical erosion, periosteal reaction, bone destruction, soft tissue gas, radiopaque foreign body', significance: 'Initial imaging for all DFIs; may take 2-4 weeks to show early bone changes' },
          { modality: 'Contrast MRI of Foot', finding: 'Bone marrow edema, cortical disruption, deep abscess loculations', significance: 'Gold standard imaging modality for DFI osteomyelitis and deep abscesses' }
        ],
        microbiology: [
          { test: 'Deep Tissue Biopsy or Curettage (after wound debridement)', finding: 'Gram stain, aerobic and anaerobic cultures & sensitivities', significance: 'MANDATORY gold standard for microbiology! NEVER rely on superficial swab cultures of uncleaned ulcers (reflects harmless colonizers)' }
        ],
        scores: ['IWGDF / IDSA DFI Infection Severity Classification (Uninfected, Mild, Moderate, Severe)', 'PEDIS Classification']
      },
      differential: [
        { disease: 'Uninfected Neuropathic Ulcer', distinguishing: 'Absence of purulence, erythema (<0.5 cm), warmth, or induration; simple callus/ulcer' },
        { disease: 'Charcot Neuroarthropathy (Acute)', distinguishing: 'Warm, swollen, erythematous foot in a neuropathic patient WITHOUT skin breach or open ulcer; MRI differentiates' },
        { disease: 'Ischemic Rest Pain / Dry Gangrene', distinguishing: 'Painful, cold, black necrotic digits without active purulent infection or systemic sepsis' }
      ],
      therapy: {
        guidelines: ['IWGDF / IDSA 2023 Guidelines: Multi-disciplinary approach is mandatory: 1) Infection control (targeted antibiotics); 2) Surgical debridement & source control; 3) Off-loading (pressure relief); 4) Vascular revascularization; 5) Glycemic control.'],
        empirical: {
          outpatient: [
            { drug: 'Amoxicillin / Clavulanate', dose: '875/125 mg PO q12h (or 1000mg PO TID)', duration: '1 to 2 weeks', note: 'First-line PO choice for MILD DFI (superficial, erythema <2 cm)' },
            { drug: 'Cephalexin', dose: '500 mg PO q6h', duration: '1 to 2 weeks', note: 'PO option for mild DFI' },
            { drug: 'Trimethoprim / Sulfamethoxazole (TMP-SMX)', dose: '1-2 DS tablets PO q12h', duration: '1 to 2 weeks', note: 'PO option if MRSA suspected in mild DFI' }
          ],
          inpatient: [
            { drug: 'Piperacillin / Tazobactam', dose: '4.5 g IV q6h', duration: '2 to 4 weeks (soft tissue) or up to 6 weeks (osteomyelitis)', note: 'First-line broad-spectrum IV regimen for MODERATE to SEVERE DFI (covers Pseudomonas & Anaerobes)' },
            { drug: 'Ampicillin / Sulbactam', dose: '3.0 g IV q6h', duration: '2 to 4 weeks', note: 'First-line IV choice for moderate DFI without Pseudomonas risk' },
            { drug: '+ Vancomycin', dose: '15 - 20 mg/kg IV q8-12h', duration: '', note: 'ADD to IV regimen IF high local MRSA prevalence, prior MRSA, or severe DFI' }
          ],
          icu: [
            { drug: 'Meropenem', dose: '1.0 g IV q8h + Vancomycin', duration: '', note: 'For severe DFI with septic shock or severe renal failure' }
          ]
        },
        targeted: 'Guided by deep tissue curettage/bone biopsy culture. Duration: Mild soft tissue = 1-2 weeks; Moderate/Severe soft tissue = 2-4 weeks; Osteomyelitis = 4-6 weeks (or 1-2 weeks post radical bone resection).',
        supportive: ['Off-loading: Non-weight bearing, Total Contact Casting (TCC), or removable cast walkers (CRITICAL!)', 'Surgical debridement of slough, pus, and necrotic bone', 'Urgent vascular evaluation (ABI, Angiography) & Revascularization (Angioplasty/Bypass) if ischemia present', 'Optimization of blood glucose (insulin infusion if acute infection)'],
        prevention: ['Daily foot inspection by patient/caregiver', 'Proper diabetic footwear and orthotics', 'Professional podiatry care', 'Tight glycemic control (HbA1c <7.0%)']
      },
      guidelines: {
        diagnosis: [
          'Diagnosis of DFI is clinical (purulence, warmth, erythema >0.5 cm).',
          'Probe-to-Bone (PTB) test and plain X-rays mandatory for all deep ulcers.',
          'Obtain microbiology ONLY from deep tissue biopsy/curettage after wound cleansing.'
        ],
        treatment_indications: [
          'Uninfected ulcers do NOT require antibiotic therapy.',
          'Mild DFI: Oral broad-spectrum antibiotics (Amox/Clav) for 1–2 weeks.',
          'Moderate/Severe DFI: IV broad-spectrum antibiotics (Pip/Tazo ± Vanco) + surgical debridement.'
        ],
        first_line: [
          'Oral Amox/Clav (Mild); IV Pip/Tazo + Vancomycin (Moderate/Severe).'
        ]
      },
      prognosis: {
        mortality: '5-year mortality following major DFI amputation is 50–60% (worse than many cancers)',
        prognostic_scores: ['IWGDF/IDSA Severity Grade', 'WIfI (Wound, Ischemia, foot Infection) classification'],
        factors: 'Co-existing peripheral artery disease (PAD), delayed surgical debridement, underlying osteomyelitis'
      }
    },
    {
      id: 'chronic_ulcer',
      name: 'Chronic Leg Ulcer (Venous, Arterial & Mixed)',
      pathogen: {
        type: 'Indirect',
        name: 'Secondary bacterial colonization & infection (<i>Staphylococcus aureus</i>, <i>Pseudomonas aeruginosa</i>, <i>Enterococcus spp.</i>, <i>Proteus mirabilis</i>, Anaerobes)',
        gram: 'Variable',
        shape: '-'
      },
      epidemiology: {
        incidence: 'Affects 1–2% of adult population; 70–80% are venous stasis ulcers, 10–15% arterial, 10–15% mixed',
        risk_groups: ['Chronic venous insufficiency / deep vein thrombosis history', 'Peripheral Artery Disease (PAD / atherosclerosis)', 'Advanced age', 'Obesity and immobility', 'Heart failure'],
        seasonality: 'None',
        transmission: 'Non-contagious chronic vascular tissue failure; secondary infection via environmental breach'
      },
      pathomechanism: {
        steps: [
          'Venous Ulcers: Chronic venous hypertension causes ambulatory venous stagnation, capillary distension, extravasation of RBCs (hemosiderin deposition), pericapillary fibrin cuffs, and localized tissue ischemia.',
          'Arterial Ulcers: Atherosclerotic arterial occlusion causes critical limb ischemia, nutrient arterial blood flow restriction, and ischemic tissue necrosis.',
          'Chronic Inflammation & Biofilm: Persistent inflammation and bacterial biofilm colonization arrest wound healing in the inflammatory phase, preventing re-epithelialization.'
        ],
        virulence_factors: ['Microbial biofilm matrix', 'Pro-inflammatory bacterial endotoxins', 'Matrix metalloproteinase (MMP) elevation']
      },
      clinical: {
        incubation: 'Develops slowly over months to years',
        onset: 'Insidious, non-healing wound',
        symptoms: [
          { name: 'Venous Ulcer', description: 'Shallow, irregular-bordered ulcer located in gaiter region (medial malleolus), with heavy exudate, surrounding lipodermatosclerosis, and hemosiderin hyperpigmentation. Pain is mild and relieved by leg elevation.', severity: 'moderate' },
          { name: 'Arterial Ulcer', description: 'Deep, "punched-out" circular ulcer on distal toes, lateral malleolus, or heel, with a pale/necrotic dry wound base. Severe ischemic pain, worse at night and elevated; relieved by dangling leg.', severity: 'severe' },
          { name: 'Signs of Active Infection', description: 'Increasing localized pain, rapid expansion of ulcer edge, foul odor, purulent exudate, surrounding cellulitis (>1 cm), or systemic fever.', severity: 'severe' }
        ],
        physical_exam: [
          'Venous: Hyperpigmentation (stasis dermatitis), varicose veins, pitting edema, gaiter distribution',
          'Arterial: Absent/diminished pedal pulses, delayed capillary refill (>3s), pale cool skin, loss of leg hair, dependent rubor',
          'Measure Ankle-Brachial Index (ABI) before applying any compression! (ABI 0.9-1.3 normal; ABI <0.8 indicates arterial disease; ABI <0.5 indicates severe ischemia - COMPRESSION CONTRAINDICATED!)'
        ],
        complications: ['Cellulitis & Erysipelas', 'Osteomyelitis of underlying bone', 'Squamous cell carcinoma transformation (Marjolin ulcer)', 'Limb loss / amputation']
      },
      diagnostics: {
        laboratory: [
          { test: 'Serum Inflammatory Markers (CRP, CBC)', finding: 'Normal in simple uninfected colonization; elevated in active cellulitis/infection', interpretation: 'Distinguishes colonization from clinical infection' }
        ],
        imaging: [
          { modality: 'Ankle-Brachial Index (ABI) & Toe Brachial Index (TBI)', finding: 'ABI <0.8 confirms arterial pathology; ABI 0.9-1.2 with venous reflux confirms venous ulcer', significance: 'MANDATORY before applying compression therapy!' },
          { modality: 'Venous & Arterial Duplex Ultrasound', finding: 'Identifies superficial/deep venous valvular incompetence or arterial stenosis', significance: 'Guides vascular intervention' }
        ],
        microbiology: [
          { test: 'Wound Swab / Biopsy', finding: 'Colonization with mixed flora is ubiquitous', significance: 'ROUTINE SWABBING OF UNINFECTED ULCERS IS CONTRAINDICATED! Swab ONLY if clinical signs of infection are present.' }
        ]
      },
      differential: [
        { disease: 'Diabetic Foot Ulcer', distinguishing: 'Located on plantar pressure points, accompanied by diabetic neuropathy and loss of monofilament sensation' },
        { disease: 'Pressure Injury (Decubitus)', distinguishing: 'Located directly over bony prominences (sacrum, ischium, trochanter) subject to pressure/shear' },
        { disease: 'Pyoderma Gangrenosum', distinguishing: 'Violaceous, undermined border, rapidly expanding, intensely painful, associated with IBD/RA' }
      ],
      therapy: {
        guidelines: ['EWMA / AWMF Guidelines: 1) Systemic or topical antibiotics are CONTRAINDICATED for simple bacterial colonization of chronic ulcers! 2) Antibiotics are indicated STRICTLY for active clinical infection (cellulitis, osteomyelitis, sepsis); 3) Primary treatment is cause-directed (compression for venous; revascularization for arterial).'],
        empirical: {
          outpatient: [
            { drug: 'NO SYSTEMIC ANTIBIOTICS FOR UNINFECTED ULCERS!', dose: '-', duration: '-', note: 'Routine antibiotics do NOT promote wound healing and cause resistance!' },
            { drug: 'Amoxicillin / Clavulanate', dose: '875/125 mg PO q12h', duration: '7 to 10 days', note: 'Oral choice ONLY if clinical cellulitis or local wound infection develops' }
          ],
          inpatient: [
            { drug: 'Piperacillin / Tazobactam', dose: '4.5 g IV q6h', duration: '7 to 14 days', note: 'For severe, complicated ulcer infection with extensive cellulitis or sepsis' }
          ]
        },
        targeted: 'Targeted to microbiology ONLY if active clinical infection is present.',
        supportive: ['Venous Ulcer: Multilayer compression bandaging (4-layer or short-stretch) IF ABI >0.8 (Gold Standard!)', 'Arterial Ulcer: Urgent vascular surgical revascularization (Angioplasty / Bypass); NO COMPRESSION IF ABI <0.5!', 'Wound debridement (sharp, enzymatic, or autolytic) to remove slough and biofilm', 'Moisture balance wound dressings (foams, alginates)'],
        prevention: ['Venous: Lifelong medical compression stockings (Class 2/3) after ulcer healing', 'Arterial: Cardiovascular risk factor control (smoking cessation, statins, antiplatelet therapy)', 'Regular mobilization']
      },
      guidelines: {
        diagnosis: [
          'Distinguish venous vs arterial vs mixed ulcer via physical exam and ABI measurement.',
          'Do NOT perform routine wound swabs on uninfected ulcers.'
        ],
        treatment_indications: [
          'Antibiotics indicated ONLY for active clinical infection (cellulitis, sepsis).',
          'Venous ulcers require compression therapy (if ABI >0.8); Arterial ulcers require revascularization.'
        ],
        first_line: [
          'Compression therapy + local wound care for venous ulcers; Revascularization for arterial ulcers.'
        ]
      },
      prognosis: {
        mortality: 'Ulcer recurrence rate is up to 50–70% within 12 months without compliance with compression stockings',
        prognostic_scores: ['ABPI / ABI Staging'],
        factors: 'Patient adherence to compression therapy, baseline arterial perfusion, wound size >10 cm²'
      }
    },
    {
      id: 'decubitus',
      name: 'Pressure Injury (Decubitus Ulcer)',
      pathogen: {
        type: 'Secondary',
        name: 'Secondary bacterial colonization & polymicrobial deep space infection (<i>Staphylococcus aureus</i>, <i>Escherichia coli</i>, <i>Proteus mirabilis</i>, <i>Pseudomonas aeruginosa</i>, <i>Bacteroides fragilis</i>)',
        gram: 'Variable',
        shape: '-'
      },
      epidemiology: {
        incidence: 'Affects 10–20% of hospitalized elderly patients and up to 30% in intensive care or spinal cord injury units',
        risk_groups: ['Immobile or bedridden patients', 'Spinal cord injury / neurological deficit', 'Critical illness in ICU', 'Incontinence (moisture-associated skin damage)', 'Malnutrition & Hypoalbuminemia', 'Advanced age'],
        seasonality: 'None',
        transmission: 'Ischemic tissue breakdown caused by sustained mechanical pressure, shear forces, and friction'
      },
      pathomechanism: {
        steps: [
          'Pressure & Ischemia: Sustained external pressure exceeding capillary occlusion pressure (>32 mmHg) over a bony prominence collapses microvessels, leading to tissue ischemia and cell death.',
          'Shear & Friction: Shear forces distort deep tissue layers, tearing microvessels at the muscle-bone interface (deep tissue injury).',
          'Reperfusion Injury & Necrosis: Ischemia-reperfusion injury and accumulation of toxic metabolic end-products cause full-thickness tissue necrosis extending from deep bone outwards to skin.',
          'Infection: Secondary colonization by fecal/skin flora spreads to subcutaneous fat, muscle, and contiguous bone (osteomyelitis).'
        ],
        virulence_factors: ['Biofilm formation', 'Polymicrobial enzymatic degradation', 'Tissue ischemia synergy']
      },
      clinical: {
        incubation: 'Can develop within 2 to 6 hours of unrelieved pressure!',
        onset: 'Insidious or rapidly progressive depth',
        symptoms: [
          { name: 'Stage 1 Pressure Injury', description: 'Intact skin with localized area of non-blanchable erythema over a bony prominence (sacrum, heel, ischium, trochanter). May be painful, firm, warm, or cool.', severity: 'mild' },
          { name: 'Stage 2 Pressure Injury', description: 'Partial-thickness skin loss with exposed dermis. Viable pink/red wound bed, moist, clean; may present as an intact or ruptured serum-filled blister.', severity: 'moderate' },
          { name: 'Stage 3 Pressure Injury', description: 'Full-thickness skin loss; subcutaneous fat is visible in the ulcer, with slough, eschar, and undermining/tunneling.', severity: 'severe' },
          { name: 'Stage 4 Pressure Injury', description: 'Full-thickness skin and tissue loss with exposed or directly palpable fascia, muscle, tendon, ligament, cartilage, or bone. Slough/eschar present; high risk of contiguous osteomyelitis.', severity: 'severe' },
          { name: 'Unstageable & DTPI', description: 'Unstageable: Obscured full-thickness tissue loss covered by slough/eschar. Deep Tissue Pressure Injury (DTPI): Intact or non-intact skin with localized, persistent non-blanchable deep red, maroon, or purple discoloration.', severity: 'severe' }
        ],
        physical_exam: [
          'Examine classic pressure sites: Sacrum (30%), Heels (20%), Ischial tuberosity (15%), Greater trochanter (10%), Occiput',
          'Measure length, width, depth, tunneling, and undermining',
          'Assess wound bed: Granulation tissue, slough, eschar, exudate, odor',
          'Check surrounding skin for cellulitis (>1 cm erythema, warmth, induration)'
        ],
        complications: ['Contiguous Osteomyelitis (up to 30–40% of Stage 4 ulcers)', 'Bacteremia and Septic Shock', 'Subcutaneous sinus tracts and complex fistulae', 'Marjolin ulcer (squamous cell carcinoma)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Serum Albumin & Prealbumin', finding: 'Hypoalbuminemia (<3.0 g/dL)', interpretation: 'Indicates severe protein malnutrition requiring nutritional support' },
          { test: 'CBC & CRP', finding: 'Elevated in active cellulitis, bacteremia, or osteomyelitis', interpretation: 'Assesses systemic infection' }
        ],
        imaging: [
          { modality: 'Plain Radiographs', finding: 'Periosteal reaction or cortical erosion underlying Stage 4 ulcer', significance: 'Initial screening for underlying osteomyelitis' },
          { modality: 'Contrast MRI', finding: 'Bone marrow edema and cortical disruption under ulcer base', significance: 'Gold standard for detecting contiguous osteomyelitis under Stage 4 pressure injury' }
        ],
        microbiology: [
          { test: 'Wound Biopsy or Deep Aspirate', finding: 'Polymicrobial culture', significance: 'Indicated ONLY if clinical signs of cellulitis, sepsis, or osteomyelitis are present. Routine swabs of uninfected ulcers are CONTRAINDICATED!' }
        ],
        scores: ['NPIAP / EPUAP Staging System (Stages 1-4, Unstageable, DTPI)', 'Braden Scale for Pressure Injury Risk Assessment']
      },
      differential: [
        { disease: 'Moisture-Associated Skin Damage (MASD / Incontinence Dermatitis)', distinguishing: 'Diffusely scattered erythema in skin folds or perineum, superficial, non-blanchable, lacks sharp bony prominence location' },
        { disease: 'Venous Stasis Ulcer', distinguishing: 'Gaiter distribution on lower leg, stasis dermatitis, hemosiderin pigmentation' },
        { disease: 'Diabetic Foot Ulcer', distinguishing: 'Neuropathic foot pressure sites (metatarsal heads, plantar surface), loss of monofilament sensation' }
      ],
      therapy: {
        guidelines: ['NPIAP / EPUAP 2023 Guidelines: 1) Systemic antibiotics are STRICTLY CONTRAINDICATED for uninfected pressure injuries or simple colonization! Systemic antibiotics are indicated ONLY for acute cellulitis, osteomyelitis, or sepsis. 2) Primary treatment is pressure redistribution, repositioning, debridement, and moisture management.'],
        empirical: {
          outpatient: [
            { drug: 'NO SYSTEMIC ANTIBIOTICS FOR UNINFECTED PRESSURE INJURIES!', dose: '-', duration: '-', note: 'Antibiotics do NOT heal uninfected pressure injuries!' },
            { drug: 'Amoxicillin / Clavulanate', dose: '875/125 mg PO q12h', duration: '7 to 10 days', note: 'Oral choice ONLY if secondary cellulitis or local acute soft tissue infection develops' }
          ],
          inpatient: [
            { drug: 'Piperacillin / Tazobactam', dose: '4.5 g IV q6h', duration: '10 to 14 days (longer if osteomyelitis)', note: 'IV choice for Stage 3/4 pressure injury complicated by acute cellulitis, deep space abscess, or sepsis' }
          ]
        },
        targeted: 'Guided by bone biopsy or deep tissue culture if osteomyelitis or sepsis is confirmed.',
        supportive: ['Pressure Redistribution: High-specification reactive foam or alternating pressure air mattresses (MANDATORY!)', 'Repositioning Schedule: Turn bedbound patients every 2 hours; 30-degree tilted side-lying position', 'Debridement: Sharp surgical, enzymatic (collagenase), or autolytic debridement of necrotic slough/eschar (EXCEPTION: Stable, dry, uninfected heel eschar should NOT be debrided!)', 'Nutritional Support: High-protein enteral supplementation (1.2-1.5 g/kg/day), Zinc, Vitamin C'],
        prevention: ['Use Braden Scale for daily risk stratification', 'Keep skin clean and dry (barrier creams for incontinence)', 'Avoid dragging/shearing patients during bed transfers']
      },
      guidelines: {
        diagnosis: [
          'Stage according to NPIAP/EPUAP criteria (Stages 1–4, Unstageable, DTPI).',
          'Do NOT swab uninfected pressure injuries.'
        ],
        treatment_indications: [
          'Systemic antibiotics indicated ONLY for cellulitis, osteomyelitis, or bacteremia.',
          'Primary interventions: Pressure off-loading, repositioning q2h, debridement, high-protein nutrition.'
        ],
        first_line: [
          'Pressure redistribution mattress + Repositioning q2h + Debridement of necrotic tissue.'
        ]
      },
      prognosis: {
        mortality: 'In-hospital mortality for elderly patients with Stage 3-4 pressure injury is 20–30%',
        prognostic_scores: ['Braden Scale', 'NPIAP Staging'],
        factors: 'Malnutrition, immobility, presence of underlying osteomyelitis or bacteremia'
      }
    },
    {
      id: 'osteomyelitis',
      name: 'Osteomyelitis',
      pathogen: {
        type: 'Bacterium',
        name: '<i>Staphylococcus aureus</i> (MSSA & MRSA ~50-70% overall); <i>Staphylococcus epidermidis</i> (prosthetic/implant); <i>Pseudomonas aeruginosa</i> (puncture wounds, PWID); <i>Salmonella spp.</i> (sickle cell disease); Gram-negative bacilli',
        gram: 'Gram-positive',
        shape: 'coccus'
      },
      epidemiology: {
        incidence: '10–20 / 100,000 annually; hematogenous predominant in children; contiguous (diabetic foot/trauma) predominant in adults',
        risk_groups: ['Diabetes mellitus', 'Peripheral vascular disease', 'Orthopedic trauma or joint replacement surgery', 'People Who Inject Drugs (PWID)', 'Hemodialysis patients', 'Sickle cell disease'],
        seasonality: 'None',
        transmission: 'Hematogenous seeding via bloodstream, contiguous spread from soft tissue/ulcer, or direct inoculation (trauma/surgery)'
      },
      pathomechanism: {
        steps: [
          'Invasion: Bacteria reach bone tissue via hematogenous bloodstream, contiguous ulcer/soft tissue infection, or direct surgical/traumatic inoculation.',
          'Inflammation & Ischemia: Bacteria express adhesins (MSCRAMMs) binding to bone matrix. Local inflammatory response inside rigid non-expandable bone marrow increases intraosseous pressure, compressing microvessels and producing bone ischemia.',
          'Necrosis & Sequestrum: Avascular bone undergoes necrosis, detaching as a dead bone fragment called a SEQUESTRUM.',
          'New Bone Formation & Biofilm: Periosteum forms a sheath of reactive new bone surrounding the dead bone, termed an INVOLUCRUM. Bacteria produce thick slime biofilms on sequestra, shielding them from host immune cells and systemic antibiotics.'
        ],
        virulence_factors: ['Bone adhesins (MSCRAMMs binding fibronectin/collagen)', 'Biofilm matrix formation', 'Intraosteocytic persistence (S. aureus small colony variants - SCVs)']
      },
      clinical: {
        incubation: 'Acute (days) or Chronic (weeks to months/years)',
        onset: 'Variable (acute hematogenous vs chronic contiguous)',
        symptoms: [
          { name: 'Acute Osteomyelitis', description: 'Gradual or rapid onset of deep, aching, localized bone pain, swelling, warmth, and erythema over affected site. Patient exhibits localized tenderness, refusal to bear weight, and high fever/chills (especially in children).', severity: 'severe' },
          { name: 'Chronic Osteomyelitis', description: 'Indolent presentation with dull bone pain, localized swelling, and a chronic draining cutaneous sinus tract discharging purulent fluid. Systemic fever is often absent.', severity: 'moderate' }
        ],
        physical_exam: [
          'Exquisite pinpoint bony tenderness on palpation',
          'Local swelling, erythema, and warmth over affected bone segment',
          'Inability or severe pain on bearing weight or moving limb',
          'Presence of a chronic draining sinus tract communicating with underlying bone',
          'Positive Probe-to-Bone (PTB) test at ulcer base'
        ],
        complications: ['Chronic refractory osteomyelitis', 'Pathological fracture', 'Contiguous Septic Arthritis', 'Brodie abscess (localized intraosseous abscess)', 'Amyloidosis (in decades-long chronic sinus tracts)', 'Squamous cell carcinoma in sinus tract (Marjolin ulcer)']
      },
      diagnostics: {
        laboratory: [
          { test: 'C-Reactive Protein (CRP) & ESR', finding: 'ESR (>50-70 mm/h) and CRP markedly elevated', interpretation: 'SENSITIVE markers for baseline severity and monitoring treatment response (CRP normalizes rapidly on effective therapy)' },
          { test: 'Blood Cultures (x2 pairs)', finding: 'Positive in ~50% of acute hematogenous osteomyelitis cases', interpretation: 'MANDATORY before initiating antibiotics in suspected hematogenous cases' }
        ],
        imaging: [
          { modality: 'Plain Radiographs (X-ray)', finding: 'Normal for first 10-14 days! Later shows periosteal elevation, cortical erosion, lytic bone destruction, and sequestrum', significance: 'Baseline initial imaging; cannot rule out acute osteomyelitis in first 2 weeks' },
          { modality: 'Contrast MRI', finding: 'Bone marrow edema (hypointense on T1, hyperintense on T2), cortical disruption, soft tissue/subperiosteal abscess', significance: 'GOLD STANDARD imaging modality (sensitivity and specificity >90-95%)' },
          { modality: 'PET-CT / Bone Scintigraphy', finding: 'Increased tracer uptake', significance: 'Useful when MRI is contraindicated (e.g. cardiac pacemakers)' }
        ],
        microbiology: [
          { test: 'Bone Biopsy & Culture (Percutaneous CT-guided or Intraoperative Open Biopsy)', finding: 'Histopathology showing osteonecrosis & neutrophilic infiltrate; microbiology culture & sensitivities', significance: 'DEFINITIVE GOLD STANDARD DIAGNOSIS! MUST be performed BEFORE antibiotic administration unless patient is in septic shock' }
        ],
        scores: ['Cierny-Mader Staging System for Adult Osteomyelitis (Anatomical types 1-4; Host classes A-C)']
      },
      differential: [
        { disease: 'Charcot Neuroarthropathy', distinguishing: 'Diabetic foot swelling and bone fragmentation without elevated CRP/ESR or fever; MRI differentiates' },
        { disease: 'Severe Cellulitis', distinguishing: 'Infection restricted to soft tissue; MRI confirms intact bone marrow' },
        { disease: 'Ewing Sarcoma / Osteosarcoma', distinguishing: 'Onion-skin or sunburst radiograph appearance; bone biopsy confirms tumor' }
      ],
      therapy: {
        guidelines: ['IDSA Guidelines & OVIVA Trial (NEJM 2019): 1) Targeted antimicrobial therapy for 4 to 6 weeks total; 2) Surgical debridement of dead bone (sequestrectomy) is essential; 3) OVIVA Trial Principle: Early switch to highly bioavailable ORAL antibiotics (after 7-10 days IV induction) is NON-INFERIOR to 6 weeks continuous IV therapy!'],
        empirical: {
          outpatient: [
            { drug: 'NO OUTPATIENT EMPIRIC THERAPY WITHOUT BIOPSY!', dose: '-', duration: '-', note: 'Hospital admission and bone biopsy required before starting antibiotics (unless septic)' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15 - 20 mg/kg IV q8-12h (target trough 15-20 µg/mL)', duration: '1 to 2 weeks IV then PO switch (4-6 weeks total)', note: 'First-line IV empiric coverage for MRSA' },
            { drug: '+ Ceftriaxone', dose: '2.0 g IV q24h', duration: '4 to 6 weeks total', note: 'Empiric Gram-negative coverage' },
            { drug: '+ Cefepime / Pip-Tazo', dose: '2.0 g IV q8h / 4.5 g IV q6h', duration: '4 to 6 weeks total', note: 'Substitute for Ceftriaxone IF Pseudomonas risk (puncture wound, PWID)' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'IV standard doses', duration: '4 to 6 weeks total', note: 'For osteomyelitis with septic shock' }
          ]
        },
        targeted: 'Based on Bone Biopsy Culture: MSSA -> Cefazolin 2g IV q8h OR Flucloxacillin 2g IV q6h (or oral Cefadroxil/Fluoroquinolone); MRSA -> Vancomycin IV OR oral Linezolid 600mg BID / TMP-SMX DS BID + Rifampicin 300mg BID (Rifampicin added for biofilm eradication on metal hardware). OVIVA Protocol: Switch to oral regimen after 7-10 days IV if clinically improved and oral option is high-bioavailability (Fluoroquinolones, Clindamycin, Linezolid, TMP-SMX).',
        supportive: ['Surgical Source Control: Surgical debridement of avascular necrotic bone (sequestrectomy) and hardware removal if loose', 'Limb immobilization during acute phase', 'Hyperbaric Oxygen Therapy (HBOT) (adjunctive for refractory Cierny-Mader Class C host osteomyelitis)'],
        prevention: ['Immediate thorough surgical debridement and copious irrigation of open fractures (<6 hours)', 'Aseptic surgical technique in orthopedic implants', 'Diabetic foot ulcer prevention']
      },
      guidelines: {
        diagnosis: [
          'MRI is the gold standard imaging modality.',
          'Bone biopsy for culture and histology is mandatory before antibiotic initiation (unless septic).'
        ],
        treatment_indications: [
          'Requires surgical debridement of dead bone + 4 to 6 weeks targeted antibiotic therapy.',
          'OVIVA Trial: Early oral antibiotic switch after 1 week IV is non-inferior to 6 weeks IV.'
        ],
        first_line: [
          'Empiric: Vancomycin + Ceftriaxone IV; Early oral switch based on bone culture sensitivities.'
        ]
      },
      prognosis: {
        mortality: '<1-2% directly, but chronic recurrence rate is 20–30%',
        prognostic_scores: ['Cierny-Mader Staging System'],
        factors: 'Completeness of surgical bone debridement, presence of retained orthopedic implants, host vascularity'
      }
    },
    {
      id: 'septic_arthritis',
      name: 'Septic Arthritis (Acute Suppurative Joint Infection)',
      pathogen: {
        type: 'Bacterium',
        name: '<i>Staphylococcus aureus</i> (MSSA & MRSA ~50-60% overall); <i>Streptococcus spp.</i> (<i>S. pyogenes</i>, <i>S. pneumoniae</i>, Group B Strep ~20%); <i>Neisseria gonorrhoeae</i> (sexually active young adults); Gram-negative bacilli (elderly/immunocompromised)',
        gram: 'Mixed',
        shape: 'coccus'
      },
      epidemiology: {
        incidence: '2–10 / 100,000 annually; orthopaedic emergency',
        risk_groups: ['Pre-existing joint disease (Rheumatoid Arthritis, Osteoarthritis, Gout)', 'Prosthetic joint replacement', 'Advanced age (>80 years)', 'Diabetes mellitus', 'People Who Inject Drugs (PWID)', 'Sexually active young adults (Disseminated Gonococcal Infection)'],
        seasonality: 'None',
        transmission: 'Hematogenous spread via synovial capillaries (80%), direct traumatic/surgical inoculation, or contiguous spread from osteomyelitis'
      },
      pathomechanism: {
        steps: [
          'Synovial Invasions: Pathogens seed the highly vascular synovial membrane lacking a protective basement membrane.',
          'Massive Inflammatory Effusion: Rapid bacterial multiplication triggers intense neutrophilic recruitment into joint space, producing a tense purulent effusion.',
          'Irreversible Cartilage Destruction: Lysosomal enzymes released from dying PMN leukocytes, bacterial proteases, and increased intra-articular pressure cause permanent articular cartilage matrix destruction within 24 to 48 hours!',
          'Joint Ankylosis & Bone Erosion: Untreated infection leads to subchondral bone erosion and fibrous or bony joint ankylosis.'
        ],
        virulence_factors: ['Staphylococcal MSCRAMM adhesins (binding sialoprotein/collagen)', 'Chondrocyte-damaging toxins', 'Proteolytic enzymes']
      },
      clinical: {
        incubation: 'Rapid onset over 24 to 48 hours',
        onset: 'Hyperacute, fulminant presentation',
        symptoms: [
          { name: 'Acute Monarthritis', description: 'Sudden onset of severe, excruciating, continuous joint pain, swelling, intense warmth, and redness, most commonly in a single large joint (Knee ~50%, Hip ~20%, Shoulder ~10%, Ankle/Wrist).', severity: 'severe' },
          { name: 'Pseudoparalysis & Fever', description: 'Patient holds the joint in slight flexion and refuses ANY active or passive joint movement due to excruciating pain. Accompanied by high fever (38.5-40°C), chills, and rigor.', severity: 'severe' },
          { name: 'Gonococcal Tenosynovitis-Dermatitis', description: 'In Disseminated Gonococcal Infection (DGI): Migratory polyarthralgias, tenosynovitis (wrist/ankle), and sparse necrotic pustular skin lesions on extremities.', severity: 'moderate' }
        ],
        physical_exam: [
          'Tense, warm, red, swollen joint effusion',
          'Severe pain on passive range of motion ( hallmark sign distinguishing from superficial cellulitis!)',
          'Joint held in position of maximum volume capacity (e.g. knee 30° flexion, hip flexed/abducted/externally rotated)',
          'Examine skin for pustules (Gonococcus) or entry wounds / puncture marks'
        ],
        complications: ['Irreversible articular cartilage destruction & osteoarthritis (within 48h)', 'Pathological joint dislocation / subluxation', 'Contiguous Osteomyelitis', 'Septic shock & Death (10–15% mortality)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Complete Blood Count (CBC) & CRP/ESR', finding: 'Marked leukocytosis (>15,000/µL) with left shift; CRP and ESR significantly elevated', interpretation: 'Severe acute systemic inflammation' },
          { test: 'Blood Cultures (x2 pairs)', finding: 'Positive in 50% of non-gonococcal cases', interpretation: 'MANDATORY before starting antibiotics' }
        ],
        imaging: [
          { modality: 'Joint Ultrasound (POCUS)', finding: 'Confirms joint space effusion, synovial thickening, and guides needle aspiration', significance: 'First-line imaging modality to detect deep joint effusion (especially hip/shoulder)' },
          { modality: 'Plain Radiographs', finding: 'Soft tissue swelling, widening of joint space; later joint space narrowing and subchondral erosion', significance: 'Initial baseline image' }
        ],
        microbiology: [
          { test: 'EMERGENCY BEDSIDE ARTHROCENTESIS (Diagnostic Synovial Fluid Aspiration)', finding: 'Synovial fluid is opaque/purulent; Synovial WBC > 50,000 /µL (often >100,000/µL with >90% PMNs); Synovial glucose <50% of blood glucose; Synovial lactate elevated (>10 mmol/L); Gram stain positive in 50-75%', significance: 'MANDATORY IMMEDIATE GOLD STANDARD DIAGNOSIS! MUST be performed BEFORE antibiotic administration!' },
          { test: 'Synovial Fluid Polarized Microscopy', finding: 'Excludes gout / pseudogout crystals', significance: 'Rules out crystal arthropathy (note: infection and crystals can co-exist!)' }
        ]
      },
      differential: [
        { disease: 'Acute Gout / Pseudogout (CPPD)', distinguishing: 'Negatively birefringent needle-shaped uric acid crystals (gout) or positively birefringent rhomboid crystals (CPPD); Synovial WBC usually 20,000-50,000/µL' },
        { disease: 'Reactive Arthritis', distinguishing: 'Sterile synovitis post-GI/GU infection, HLA-B27, extra-articular manifestations (conjunctivitis, urethritis)' },
        { disease: 'Periarticular Cellulitis / Bursitis', distinguishing: 'Pain is localized over bursa/skin; passive joint motion is preserved and non-painful once superficial skin is not stressed' }
      ],
      therapy: {
        guidelines: ['IDSA / British Society for Antimicrobial Chemotherapy (BSAC) Guidelines: Medical & Surgical Emergency! 1) Immediate Joint Decompression & Drainage (needle aspiration, arthroscopy, or open arthrotomy); 2) Empiric parenteral broad-spectrum antibiotics immediately after arthrocentesis; 3) OVIVA trial oral switch once drained and stable.'],
        empirical: {
          outpatient: [
            { drug: 'NO OUTPATIENT THERAPY!', dose: 'IMMEDIATE EMERGENCY ADMISSION FOR ARTHROCENTESIS & IV ABX', duration: '-', note: 'Medical emergency! Joint cartilage destroyed within 24-48 hours without drainage.' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15 - 20 mg/kg IV q8-12h (target trough 15-20 µg/mL)', duration: '2 to 4 weeks total', note: 'First-line IV empiric choice for Gram-positive / MRSA coverage' },
            { drug: '+ Ceftriaxone', dose: '2.0 g IV q24h', duration: '2 to 4 weeks total', note: 'Empiric Gram-negative and Gonococcal coverage' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'IV standard doses', duration: '3 to 4 weeks total', note: 'For septic arthritis with septic shock or severe immunosuppression' }
          ]
        },
        targeted: 'MSSA -> Cefazolin 2g IV q8h or Flucloxacillin 2g IV q6h; MRSA -> Vancomycin / Daptomycin; N. gonorrhoeae -> Ceftriaxone 1-2g IV q24h (7 days total). Duration: Non-gonococcal = 3-4 weeks total (1 week IV then high-bioavailability oral switch per OVIVA protocol once joint is adequately drained).',
        supportive: ['EMERGENCY JOINT DRAINAGE: Repeat closed needle joint aspiration daily OR Arthroscopic lavage OR Open surgical washout (MANDATORY!)', 'Analgesics and short-term joint splinting for pain relief', 'Early physical therapy & passive mobilization as soon as acute pain subsides to prevent joint stiffness'],
        prevention: ['Strict aseptic technique during intra-articular injections', 'Prompt treatment of local skin infections', 'Prophylaxis/treatment of STI (Gonorrhea)']
      },
      guidelines: {
        diagnosis: [
          'Immediate bedside diagnostic arthrocentesis BEFORE antibiotics is mandatory.',
          'Synovial fluid WBC >50,000/µL with >90% PMNs confirms septic arthritis.'
        ],
        treatment_indications: [
          'Immediate emergency joint drainage (needle aspiration, arthroscopy) + IV antibiotics.',
          'Early oral antibiotic switch (OVIVA protocol) after 7-10 days IV if joint is drained and clinically stable.'
        ],
        first_line: [
          'Emergency Joint Drainage + (Vancomycin + Ceftriaxone IV).'
        ]
      },
      prognosis: {
        mortality: '10–15% mortality (up to 25% in polyarticular or elderly patients)',
        prognostic_scores: ['Gächter Arthroscopic Staging for Septic Arthritis (Stages I-IV)'],
        factors: 'Delay in joint drainage >24-48 hours causes permanent joint disability and cartilage destruction'
      }
    },
    {
      id: 'spondylodiscitis',
      name: 'Infective Spondylodiscitis (Vertebral Osteomyelitis & Discitis)',
      pathogen: {
        type: 'Bacterium',
        name: '<i>Staphylococcus aureus</i> (MSSA & MRSA 50–60% overall); <i>Escherichia coli</i> & Gram-negative bacilli (20–25% post-urological); <i>Streptococcus spp.</i> (10–15%); <i>Mycobacterium tuberculosis</i> (Pott disease in endemic areas)',
        gram: 'Mixed',
        shape: 'bacillus/coccus'
      },
      epidemiology: {
        incidence: '2–7 / 100,000 annually; increasing due to aging population, spinal surgery, and vascular access',
        risk_groups: ['Elderly adults (>60 years, male predominance 2:1)', 'Diabetes mellitus', 'Hemodialysis patients', 'People Who Inject Drugs (PWID)', 'Recent spinal surgery, epidural catheter, or urological procedure', 'Infective Endocarditis'],
        seasonality: 'None',
        transmission: 'Hematogenous seeding via Batson venous plexus or spinal arteries (80%), direct surgical/epidural inoculation, or contiguous spread'
      },
      pathomechanism: {
        steps: [
          'Hematogenous Seeding: Pathogens reach vascular arterial metaphysis of adjacent vertebral bodies via bloodstream (often seeded from UTI, skin infection, or endocarditis).',
          'Intervertebral Disc Destruction: Infection breaches the vertebral endplate, rapidly spreading into the avascular intervertebral disc (discitis) and adjacent vertebra (spondylitis).',
          'Abscess Loculation: Soft tissue extension produces paravertebral or psoas abscesses, or expands posteriorly into the spinal canal producing an EPIDURAL ABSCESS.',
          'Spinal Cord Compression: Epidural abscess or necrotic bone collapse causes direct spinal cord compression, ischemia, and irreversible neurological paralysis.'
        ],
        virulence_factors: ['Staphylococcal MSCRAMMs', 'Biofilm formation', 'Vertebral endplate collagen degradation']
      },
      clinical: {
        incubation: 'Insidious onset over 2 to 6 weeks',
        onset: 'Subacute or chronic presentation',
        symptoms: [
          { name: 'Localized Back Pain (Cardinal Sign >90%)', description: 'Constant, dull, deep back or neck pain that gradually worsens, persists at rest and at night, and is unrelieved by analgesics or posture changes.', severity: 'severe' },
          { name: 'Fever & Systemic Signs', description: 'Fever is present in only 50% of cases! Absence of fever MUST NOT rule out spondylodiscitis.', severity: 'moderate' },
          { name: 'Neurological Deficit (Red Flag Emergency!)', description: 'Radicular pain, motor weakness, sensory paresthesias/numbness, gait ataxia, bowel/bladder dysfunction, or paraplegia indicate Epidural Abscess & Spinal Cord Compression!', severity: 'severe' }
        ],
        physical_exam: [
          'Pinpoint percussion tenderness over the affected spinous process ( hallmark physical sign!)',
          'Severe paravertebral muscle spasm and rigid limitation of spinal movement',
          'Complete Neurological Exam: Test motor strength, dermatomal sensation, deep tendon reflexes, babinski sign, and anal sphincter tone',
          'Auscultate heart for new murmur (rule out concomitant Infective Endocarditis!)'
        ],
        complications: ['Spinal Epidural Abscess with Paraplegia / Quadriplegia', 'Psoas muscle or paravertebral abscess', 'Pathological vertebral body collapse and kyphotic spinal deformity', 'Infective Endocarditis (co-exists in 10–15% of cases)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Inflammatory Markers (ESR & CRP)', finding: 'ESR (>50 mm/h) and CRP elevated in >90% of cases', interpretation: 'Excellent diagnostic sensitivity and primary marker for monitoring treatment response' },
          { test: 'Blood Cultures (x2-3 pairs)', finding: 'Positive in 50–70% of cases', interpretation: 'MANDATORY FIRST STEP! Positive blood culture in classic MRI spondylodiscitis confirms pathogen WITHOUT needing CT biopsy!' }
        ],
        imaging: [
          { modality: 'Contrast-Enhanced Spine MRI', finding: 'Bone marrow edema (hypointense T1, hyperintense T2), loss of intervertebral disc height, erosion of vertebral endplates, contrast enhancement, epidural/paravertebral abscess', significance: 'GOLD STANDARD imaging modality (sensitivity and specificity >95%)' },
          { modality: 'CT Spine with Contrast', finding: 'Vertebral cortical bone erosion and soft tissue abscess', significance: 'Indicated if MRI is strictly contraindicated (e.g. non-compatible pacemaker)' },
          { modality: 'Echocardiogram (TTE / TEE)', finding: 'Valvular vegetation', significance: 'MANDATORY in all S. aureus or Enterococcal spondylodiscitis to exclude Infective Endocarditis!' }
        ],
        microbiology: [
          { test: 'CT-Guided Needle Biopsy or Intraoperative Biopsy', finding: 'Histopathology & microbiology culture', significance: 'MANDATORY if blood cultures are negative BEFORE starting antimicrobial therapy!' }
        ]
      },
      differential: [
        { disease: 'Degenerative Disc Disease / Modic Changes', distinguishing: 'Normal CRP/ESR, absence of disc space contrast enhancement or endplate erosion on MRI' },
        { disease: 'Vertebral Metastasis / Multiple Myeloma', distinguishing: 'Intervertebral disc is characteristically SPARED in malignancy; CRP usually normal' },
        { disease: 'Tuberculous Spondylitis (Pott Disease)', distinguishing: 'Indolent multi-level involvement, large cold psoas abscess, thoracic spine, acid-fast bacilli positive' }
      ],
      therapy: {
        guidelines: ['IDSA Guidelines for Spondylodiscitis: 1) Antimicrobial therapy for 6 weeks total; 2) Withhold empiric antibiotics in stable patients until blood cultures or CT biopsy obtain pathogen; 3) Emergency surgery for neurological deficit, spinal instability, or epidural abscess.'],
        empirical: {
          outpatient: [
            { drug: 'NO OUTPATIENT EMPIRIC THERAPY!', dose: '-', duration: '-', note: 'Hospital admission, MRI, and microbiological sampling mandatory' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15 - 20 mg/kg IV q8-12h (target trough 15-20 µg/mL)', duration: '6 weeks total (IV for 1-2w then PO switch)', note: 'First-line empiric choice for MRSA / Gram-positive coverage' },
            { drug: '+ Ceftriaxone', dose: '2.0 g IV q24h', duration: '6 weeks total', note: 'Empiric Gram-negative coverage' },
            { drug: '+ Cefepime', dose: '2.0 g IV q8h', duration: '6 weeks total', note: 'Substitute for Ceftriaxone IF Pseudomonas risk (PWID, urological procedure)' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'IV standard doses', duration: '6 weeks total', note: 'For spondylodiscitis with septic shock' }
          ]
        },
        targeted: 'Guided by Culture: S. aureus -> Cefazolin 2g IV q8h / Flucloxacillin 2g IV q6h (or oral Fluoroquinolone / Linezolid); E. coli -> Ceftriaxone 2g IV q24h or oral Ciprofloxacin 750mg BID. Duration: 6 weeks total. Early switch to highly bioavailable oral regimen after 1-2 weeks IV is safe and effective once CRP improves and pain decreases.',
        supportive: ['Orthopedic Spinal Orthosis (Brace / Corset) during ambulation for 6–12 weeks', 'Bed rest during acute pain phase', 'Analgesic pain control', 'SURGICAL INDICATIONS: 1) Progressive neurological deficit or spinal cord compression; 2) Spinal instability / kyphotic deformity; 3) Epidural or psoas abscess refractory to percutaneous drainage; 4) Intractable pain despite antibiotics.'],
        prevention: ['Prompt diagnosis and treatment of bacteremia (UTI, skin, IV line)', 'Aseptic spinal injection technique', 'Endocarditis prophylaxis']
      },
      guidelines: {
        diagnosis: [
          'MRI of the spine with contrast is the gold standard imaging.',
          'Obtain blood cultures x2-3. If negative, CT-guided needle biopsy is mandatory BEFORE starting antibiotics.'
        ],
        treatment_indications: [
          '6 weeks total antimicrobial therapy.',
          'Emergency surgery indicated for neurological deficit, spinal instability, or epidural abscess.'
        ],
        first_line: [
          'Empiric IV Vancomycin + Ceftriaxone; early oral switch after 1-2 weeks once culture known and stable.'
        ]
      },
      prognosis: {
        mortality: '2–10% mortality; neurological recovery depends on speed of surgical decompression (<24h)',
        prognostic_scores: ['None specific'],
        factors: 'Presence of neurological deficit at presentation, delay in diagnosis >2 months, severe epidural abscess'
      }
    }
  ]
};
