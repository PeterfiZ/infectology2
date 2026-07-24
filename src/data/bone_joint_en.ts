import { Category } from '../types';

export const boneJointEn: Category = {
  name: 'Bone and Joint Infections',
  icon: '🦴',
  color: '#57534e',
  didactics: {
    overview: 'Bone and Joint Infections encompass deep organ/space osteomyelitis, septic arthritis, spondylodiscitis, and prosthetic joint infections (PJI). Management requires prompt diagnostic workup (blood cultures, synovial fluid arthrocentesis, image-guided biopsy, and MRI), surgical source control (joint drainage, sequestrectomy, hardware management), and targeted antimicrobial therapy.',
    primary: 'Acute Osteomyelitis: Typically hematogenous in children and contiguous (diabetic foot, open fracture) in adults. S. aureus (MSSA/MRSA) is the primary pathogen. Gold standard diagnosis is Bone Biopsy for culture and histology prior to antibiotics (unless septic). OVIVA trial principles demonstrate that early transition to highly bioavailable oral antibiotics (after 7–10 days IV) is non-inferior to 6 weeks IV therapy.',
    secondary: 'Septic Arthritis: Medical and orthopaedic emergency. Requires emergency arthrocentesis before antibiotics (Synovial WBC >50,000/µL, >90% PMNs). Treatment demands immediate joint decompression/drainage (repeated needle aspiration, arthroscopy, or open lavage) and 3–4 weeks targeted antibiotics.',
    biliary: 'Infective Spondylodiscitis: Vertebral osteomyelitis and discitis. Cardinal symptom is localized deep back pain (>90%), but fever is present in only ~50%. Contrast MRI of the spine is the gold standard imaging. Total duration of antimicrobial therapy is 6 weeks. Emergency surgery is indicated for progressive neurological deficits, spinal instability, or epidural abscess.',
    diagnostics: [
      '1) Diagnostic Arthrocentesis (Joint Aspiration): Mandatory for suspected Septic Arthritis BEFORE antibiotics (Synovial WBC >50,000/µL, >90% PMNs).',
      '2) Bone Biopsy & Culture: Gold standard for Osteomyelitis diagnosis (CT-guided or intraoperative biopsy) prior to antibiotics.',
      '3) Contrast MRI: Gold standard imaging for Spondylodiscitis, Osteomyelitis, and Epidural/Paravertebral abscesses.',
      '4) Blood Cultures (x2-3 pairs): Positive in 50–70% of Spondylodiscitis and Septic Arthritis cases.',
      '5) Sepsis Markers: ESR and CRP for baseline severity and treatment response monitoring.'
    ],
    red_flags: [
      'Acute monarthritis with inability to move joint actively or passively (Septic Arthritis emergency)',
      'Progressive neurological deficits (motor paresis, sensory level, sphincter dysfunction) in suspected Spondylodiscitis (Epidural Abscess)',
      'Spinal percussion tenderness with unremitting night back pain',
      'Positive Probe-to-Bone (PTB) test with exposed bone in foot ulcer',
      'SIRS criteria / Septic Shock in joint/bone infection'
    ],
    special_populations: 'Diabetic Patients: High risk for contiguous osteomyelitis in foot ulcers; perform PTB test and MRI. IV Drug Users: Increased incidence of CA-MRSA, Septic Arthritis (sternoclavicular/sacroiliac joints), and Spondylodiscitis. Elderly: Atypical presentation without fever; higher mortality in septic arthritis.',
    teaching_tip: 'In Septic Arthritis, Joint Drainage is an emergency! In Osteomyelitis and Spondylodiscitis, early oral antibiotic switch after 7–10 days IV induction (OVIVA trial) is non-inferior to 6 weeks IV therapy.'
  },
  tables: [
    {
      title: 'Guideline Summary & Differential Diagnosis of Major Bone and Joint Infections',
      headers: ['Disease', 'Pathogen Spectrum', 'Diagnostic Gold Standard', 'Key Guideline Criteria', 'Empiric Antimicrobial Therapy', 'Interventional / Surgical Source Control'],
      rows: [
        ['Osteomyelitis', 'Staphylococcus aureus (MSSA/MRSA), S. epidermidis, Gram-negatives', 'Bone Biopsy culture & Histology + MRI', 'IDSA / OVIVA Trial: 4-6w total therapy; Early oral switch non-inferior', 'Vancomycin 15-20mg/kg IV + Ceftriaxone 2g IV q24h (Early oral switch)', 'Surgical debridement of necrotic bone (sequestrectomy)'],
        ['Septic Arthritis', 'Staphylococcus aureus, S. pyogenes, N. gonorrhoeae, Gram-negatives', 'Bedside Arthrocentesis (Synovial WBC >50,000/µL)', 'IDSA / BSH: Immediate emergency joint drainage + IV ABx', 'Vancomycin 15-20mg/kg IV + Ceftriaxone 2g IV q24h x 3-4 weeks', 'Emergency joint drainage (Arthroscopic washout or needle aspiration)'],
        ['Spondylodiscitis', 'Staphylococcus aureus, E. coli, Streptococci, M. tuberculosis', 'Contrast MRI of Spine + Blood cultures / CT biopsy', 'IDSA Guidelines: 6 weeks targeted antimicrobial therapy + MRI monitoring', 'Vancomycin + Ceftriaxone 2g IV q24h (6w total; early oral switch)', 'Surgery for neurological deficit, spinal instability, or epidural abscess']
      ]
    }
  ],
diseases: [
    {
      id: 'osteomyelitis',
      name: 'Osteomyelitis (Acute and Chronic Osteomyelitis)',
      pathogen: {
        type: 'Bacteria',
        name: '<i>Staphylococcus aureus</i> (most common: 50-70%, including MRSA), <i>Staphylococcus epidermidis</i> (CoNS - post-implant/post-surgery), <i>Streptococcus</i> spp., <i>Pseudomonas aeruginosa</i> (IV drug users, puncture wounds), <i>Enterobacterales</i> (<i>E. coli</i>, <i>Klebsiella</i> - diabetic foot), <i>Salmonella</i> spp. (sickle cell anemia), <i>Mycobacterium tuberculosis</i>',
        gram: 'Mixed (predominantly Gram-positive)',
        shape: 'coccus/bacillus'
      },
      epidemiology: {
        incidence: 'Predominantly hematogenous in children (metaphysis), post-traumatic/postoperative or contiguous in adults (from diabetic foot ulcer).',
        risk_groups: [
          'Diabetes mellitus',
          'Peripheral arterial disease',
          'Surgery/trauma/orthopedic implant',
          'Intravenous drug users (IVDU)',
          'Chronic hemodialysis',
          'Sickle cell anemia (Salmonella risk)'
        ],
        seasonality: 'None',
        transmission: 'Hematogenous spread, per continuitatem spread (from ulcer/soft tissue), or direct inoculation (open fracture, surgery)'
      },
      pathomechanism: {
        steps: [
          'Invasion: Via hematogenous spread (in the well-vascularized metaphysis of children or vertebrae of adults), surrounding soft tissue infection/diabetic ulcer (per continuitatem), or direct inoculation (trauma/surgery).',
          'Inflammation and Ischaemia: Bacterial proliferation causes intramedullary edema and elevated bone marrow pressure. Microvascular occlusion leads to bone necrosis and dead bone islands (sequester).',
          'Reactive Bone Formation & Sinus Tract: New bone (involucrum) forms under the periosteum, surrounding the sequester. Purulent sinus tracts may break through the skin.',
          'Biofilm Formation: Staphylococci adhere to the bone matrix and metal implants using MSCRAMM proteins, forming a protective extracellular matrix (biofilm) that shields them from neutrophils and antibiotics.'
        ],
        virulence_factors: ['Biofilm formation', 'Adhesins (MSCRAMM)', 'Alpha/Panton-Valentine leukocidin (PVL) toxins', 'Intracellular persistence (in osteoblasts)']
      },
      clinical: {
        incubation: 'Days (acute) or weeks-months-years (chronic)',
        onset: 'Acute (hematogenous/traumatic) or slowly progressive, indolent (chronic)',
        symptoms: [
          {
            name: 'Acute Osteomyelitis',
            description: 'Pronounced, deep bone pain, local swelling, warmth, erythema, fever, and inability to bear weight on the affected limb.',
            severity: 'severe'
          },
          {
            name: 'Chronic Osteomyelitis',
            description: 'Indolent, dull pain, persistent or cyclically draining purulent sinus tract, crusting, fever is usually absent.',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Pronounced local tenderness over the bone',
          'Warmth, swelling, erythema in the overlying soft tissues',
          'Presence of a draining sinus tract (in the chronic form)',
          'Probe-to-Bone (PTB) test: A hard, rough bone surface can be felt at the base of a diabetic foot ulcer using a sterile metal probe (high specificity and sensitivity!)'
        ],
        complications: [
          'Chronic osteomyelitis and bone destruction',
          'Pathological fracture',
          'Septic arthritis (if the metaphysis is within the joint capsule, e.g., hip, shoulder)',
          'Squamous cell carcinoma (Marjolin ulcer) at the edge of a chronically draining sinus tract',
          'Septic shock and systemic sepsis'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP and ESR', finding: 'Significantly elevated (CRP > 50-100 mg/L)', interpretation: 'Essential for monitoring therapy and assessing clinical response' },
          { test: 'Complete Blood Count', finding: 'Leukocytosis with a left shift', interpretation: 'Elevated in acute form, may be normal in chronic osteomyelitis' },
          { test: 'Blood Culture (2 pairs)', finding: 'Positive (in 50-60% of acute hematogenous cases)', interpretation: 'Mandatory to obtain before starting antibiotics' }
        ],
        imaging: [
          { modality: 'X-ray', finding: 'Initially (for 10-14 days) negative! Later periosteal reaction, lytic lesions, cortical erosion, sequester/involucrum', significance: 'Baseline investigation, but does not rule out early diagnosis' },
          { modality: 'MRI (contrast-enhanced)', finding: 'Bone marrow edema (T1 low, T2/STIR high intensity), abscess formation, soft tissue extension', significance: 'GOLD STANDARD imaging (sensitivity >90%, specificity >85%)' },
          { modality: 'CT', finding: 'Detection of sequestrum, cortical destruction, gas formation', significance: 'Excellent in the presence of metal implants or for surgical planning' },
          { modality: 'FDG-PET/CT', finding: 'Increased glucose metabolism in the bone', significance: 'Useful in chronic forms or in the presence of metal artifacts' }
        ],
        microbiology: [
          { test: 'Bone biopsy (percutaneous CT-guided or open surgical)', finding: 'Pathogen identification + histopathology (neutrophil granulocytes, osteonecrosis)', significance: 'GOLD STANDARD diagnosis! Two samples must be taken (microbiology + histology). Mandatory before antibiotics!' },
          { test: 'Sinus tract swab culture', finding: 'Skin elements and colonization', significance: 'NOT RELIABLE for identifying deep bone infection (unless isolated S. aureus)!' }
        ],
        calculators: [
          {
            name: 'Cierny-Mader Classification',
            items: [
              { label: 'Anatomical: I. Medullary (mainly hematogenous)', points: 1 },
              { label: 'Anatomical: II. Superficial (surface bone erosion)', points: 2 },
              { label: 'Anatomical: III. Localized (circumscribed, stable bone)', points: 3 },
              { label: 'Anatomical: IV. Diffuse (through-and-through, unstable bone)', points: 4 }
            ],
            interpretation: [
              { min: 1, max: 4, text: 'Determines the extent of surgical debridement and reconstruction.' }
            ]
          }
        ]
      },
      differential: [
        { disease: 'Charcot osteoarthropathy', distinguishing: 'Diabetic neuropathy, pronounced deformity without fever and elevated CRP; distinguished by MRI/biopsy' },
        { disease: 'Ewing sarcoma / Osteosarcoma', distinguishing: 'Young patient, "onion-skin" periosteal reaction on X-ray, confirmed by histopathology' },
        { disease: 'Cellulitis / Soft tissue abscess', distinguishing: 'Process restricted to soft tissues, bone marrow signal intensity is normal on MRI' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'No outpatient empirical therapy', dose: '-', duration: '-', note: 'Hospital evaluation and biopsy required before antibiotics!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg IV q8-12h (AUC/MIC target 400-600)', duration: 'Until cultures return', note: 'MRSA and Gram-positive coverage' },
            { drug: '+ Cefepime', dose: '2g IV q8h', duration: '', note: 'Gram-negative (Pseudomonas) coverage' },
            { drug: 'or Piperacillin/Tazobactam', dose: '4.5g IV q6h', duration: '', note: 'Broad spectrum (Gram-negative + anaerobes)' }
          ],
          icu: [
            { drug: 'Meropenem + Vancomycin', dose: 'Meropenem 1g IV q8h + Vancomycin 15-20mg/kg IV', duration: '', note: 'In case of septic shock or severe immunosuppression' }
          ]
        },
        targeted: 'Based on bone biopsy cultures! MSSA: Cefazolin 3x2g IV or Flucloxacillin 4x2g IV; MRSA: Vancomycin / Daptomycin / Linezolid; Pseudomonas: Ciprofloxacin 2x750mg PO / Cefepime. For biofilm / Staphylococcus, adjunctive Rifampicin (2x300-450mg PO) can be given, but EXCLUSIVELY after debridement and in oral combination!',
        supportive: [
          'Radical surgical debridement (removal of all dead bone/sequester) - ESSENTIAL!',
          'Filling dead space (antibiotic cement/beads, calcium sulfate sponge)',
          'Limb immobilization and weight-bearing reduction',
          'Vascular reconstruction / revascularization if ischemia is present'
        ],
        prevention: [
          'Immediate debridement and prophylactic antibiotics for open fractures',
          'Early and expert management of diabetic foot ulcers',
          'Strict adherence to surgical asepsis'
        ]
      },
      guidelines: {
        diagnosis: [
          'Imaging: MRI is the most sensitive and specific imaging modality. Plain X-rays may be negative in the first 10-14 days.',
          'Microbiology: Bone biopsy (percutaneous CT-guided or open) with histology and culture is mandatory before starting antibiotics (unless the patient is hemodynamically unstable or septic).',
          'Do not use sinus tract swab cultures for diagnosis, as they only reflect skin colonization.'
        ],
        treatment_indications: [
          'All confirmed osteomyelitis must be treated: Radical surgical debridement + targeted antibiotic therapy.'
        ],
        first_line: [
          'Empiric: Vancomycin + Cefepime / Piperacillin-tazobactam.',
          'Targeted: Based on biopsy. The OVIVA trial (NEJM 2019) proved that after 1-2 weeks of IV treatment, early conversion to highly bioavailable oral antibiotics (e.g., fluoroquinolones, clindamycin, linezolid, amoxicillin/clavulanate) is NON-INFERIOR to 6 weeks of total IV therapy, provided successful surgical debridement has been performed!'
        ]
      },
      prognosis: {
        mortality: 'Low (<1-2%), but morbidity and chronic recurrence rates are high (10-30%)',
        prognostic_scores: ['Cierny-Mader staging system'],
        factors: 'Adequate surgical debridement, limb vascularization, early oral/IV targeted therapy, unresectable sequester'
      }
    },
    {
      id: 'septic_arthritis',
      name: 'Septic Arthritis (Acute Purulent Arthritis)',
      pathogen: {
        type: 'Bacteria',
        name: '<i>Staphylococcus aureus</i> (>50%, including MRSA), <i>Streptococcus</i> spp. (Groups A, B, C, G, <i>S. pneumoniae</i>), <i>Neisseria gonorrhoeae</i> (young, sexually active adults), Gram-negative enteric bacteria (<i>E. coli</i>, <i>Pseudomonas aeruginosa</i> - elderly, IVDU, immunosuppression), <i>Kingella kingae</i> (young children <4 years)',
        gram: 'Mixed (predominantly Gram-positive)',
        shape: 'coccus/bacillus'
      },
      epidemiology: {
        incidence: '2-10/100,000 population/year. Rheumatological/orthopedic emergency!',
        risk_groups: [
          'Elderly (>80 years)',
          'Rheumatoid arthritis and other inflammatory joint diseases',
          'Joint prosthesis (PJI) or previous joint surgery/injection',
          'Diabetes mellitus',
          'Immunosuppressive / biological therapy',
          'Intravenous drug users (sterno-clavicular, sacroiliac joints!)',
          'Sexually active youths (Gonococcus)'
        ],
        seasonality: 'None',
        transmission: 'Hematogenous spread (most common), direct inoculation (puncture, surgery, arthrocentesis), per continuitatem (from soft tissue abscess/osteomyelitis)'
      },
      pathomechanism: {
        steps: [
          'Invasion: Bacteria enter the synovial membrane (which lacks a basement membrane) via the bloodstream, or enter the joint space via direct inoculation or contiguous infection.',
          'Inflammatory Cascade: Proliferating bacteria trigger intense neutrophil granulocyte invasion, resulting in a dense, purulent joint effusion.',
          'Irreversibe Cartilage Damage: Proteolytic enzymes, lysosomal enzymes, and inflammatory cytokines (TNF-a, IL-1) released from PMN granulocytes destroy chondrocytes and degrade the proteoglycan/collagen matrix within 24-48 hours!',
          'Pressure Ischemia: Elevated intra-articular pressure reduces synovial blood circulation, leading to bone and cartilage necrosis, followed by ankylosis.'
        ],
        virulence_factors: ['Adhesins (collagen-binding protein)', 'Proteases and hyaluronidase', 'Staphylococcal exotoxins', 'Chondrocyte apoptosis-inducing factors']
      },
      clinical: {
        incubation: '1-3 days (acute bacterial) or hours-days',
        onset: 'Hyperacute or acute',
        symptoms: [
          {
            name: 'Acute Monoarthritis',
            description: 'Sudden onset of extremely severe, throbbing pain, swelling, warmth, and erythema in a single large joint (knee ~50%, hip ~20%, shoulder, ankle, wrist).',
            severity: 'severe'
          },
          {
            name: 'Pronounced Functional Impairment',
            description: 'The patient is unable to move the joint either ACTIVELY or PASSIVELY due to excruciating pain (antalgic posture). Accompanied by high fever and chills.',
            severity: 'severe'
          },
          {
            name: 'Disseminated Gonococcal Infection (DGI)',
            description: 'Migratory polyarthralgia/arthritis, tenosynovitis (on the dorsum of the wrist/ankle), and tiny, painful vesiculopustular skin lesions on the extremities.',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Significantly swollen, warm, red joint with fluctuating effusion',
          'Extremely severe pain upon even the slightest PASSIVE movement attempt',
          'Muscle guarding, limb fixed in an antalgic flexion position',
          'Systemic signs: high fever, tachycardia, hypotension (sepsis)'
        ],
        complications: [
          'Irreversible cartilage destruction and early osteoarthritis',
          'Fibrous or osseous ankylosis (joint stiffness)',
          'Adjacent osteomyelitis and soft tissue abscesses',
          'Septic shock and death'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Synovial fluid analysis (Arthrocentesis)', finding: 'Turbid/purulent; WBC > 50,000 /µL (often > 100,000 /µL, >90% PMN); Gram stain 50-75% positive', interpretation: 'EMERGENCY BASELINE TEST! Must be performed immediately before antibiotics!' },
          { test: 'Synovial lactate and glucose', finding: 'Lactate > 10 mmol/L, glucose <50% of serum value', interpretation: 'Confirms bacterial infection' },
          { test: 'Polarized light microscopy', finding: 'Negative for crystals (MSU/CPPD)', interpretation: 'Rule out gout and pseudogout (though infection and crystals can coexist!)' },
          { test: 'CBC, CRP, ESR', finding: 'Pronounced leukocytosis with left shift, CRP > 100 mg/L', interpretation: 'Pronounced systemic inflammation' },
          { test: 'Blood culture (2 pairs)', finding: 'Positive (in 30-50%)', interpretation: 'Mandatory collection' }
        ],
        imaging: [
          { modality: 'Ultrasound', finding: 'Joint effusion, synovial thickening', significance: 'First-line imaging, mandatory for guiding joint aspiration!' },
          { modality: 'X-ray', finding: 'Initially only soft tissue swelling; later joint space narrowing, subchondral erosion', significance: 'Baseline examination to rule out fracture or prior joint disease' },
          { modality: 'MRI', finding: 'Joint fluid, synovial contrast enhancement, bone marrow edema, soft tissue abscess', significance: 'Suspected hip infection or associated osteomyelitis/abscess' }
        ],
        microbiology: [
          { test: 'Synovial fluid culture (aerobic + anaerobic + inoculated into blood culture bottles)', finding: 'Pathogen identification + resistance', significance: 'Basis of targeted therapy. Sensitivity 80-90%.' },
          { test: '16S rRNA PCR', finding: 'Bacterial DNA', significance: 'If the patient has already received antibiotics and culture is negative' }
        ]
      },
      differential: [
        { disease: 'Gouty attack (Gout)', distinguishing: 'WBC in synovium can be very high, but polarized microscopy reveals needle-shaped, negatively birefringent MSU crystals' },
        { disease: 'Pseudogout (CPPD)', distinguishing: 'Rhomboid-shaped, positively birefringent calcium pyrophosphate crystals are visible' },
        { disease: 'Reactive arthritis', distinguishing: 'Sterile arthritis following GI (Salmonella, Shigella) or GU (Chlamydia) infection; joint fluid is sterile' },
        { disease: 'Lyme arthritis', distinguishing: 'Large joint effusion usually associated with less pain; Borrelia serology / PCR positive' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'NO OUTPATIENT TREATMENT!', dose: '-', duration: '-', note: 'IMMEDIATE EMERGENCY HOSPITAL ADMISSION AND JOINT ASPIRATION/DRAINAGE!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg IV q8-12h', duration: '2-4 weeks', note: 'MRSA and Gram-positive coverage' },
            { drug: '+ Ceftriaxone', dose: '1-2g IV q24h', duration: '', note: 'Gram-negative and Gonococcus coverage' },
            { drug: 'or Cefepime / Pip-Tazo', dose: '2g IV q8h / 4.5g IV q6h', duration: '', note: 'In case of Pseudomonas risk (IVDU, elderly)' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'Vancomycin 15-20mg/kg IV + Meropenem 1g IV q8h', duration: '', note: 'In case of septic shock or severe immunosuppression' }
          ]
        },
        targeted: 'S. aureus (MSSA): Cefazolin 3x2g IV or Flucloxacillin 4x2g IV; MRSA: Vancomycin / Daptomycin 6-8mg/kg IV; N. gonorrhoeae: Ceftriaxone 1x1-2g IV (then PO cefixime/azithromycin); Gram-negative rods: Ceftriaxone / Cefepime / Ciprofloxacin.',
        supportive: [
          'JOINT DECOMPRESSION AND DRAINAGE (CRITICAL!): Repeated daily needle aspirations, ARTHROSCOPY and lavage, or open arthrotomy (mandatory for hip joint!)',
          'Adequate analgesia (NSAIDs, opioids)',
          'Temporary splinting during the acute painful phase, followed by EARLY PASSIVE/ACTIVE PHYSIOTHERAPY to prevent stiffness!'
        ],
        prevention: [
          'Strict adherence to aseptic technique during joint injections / arthroscopy',
          'Prevention of gonorrhea and partner treatment',
          'Early treatment of skin and soft tissue infections'
        ]
      },
      guidelines: {
        diagnosis: [
          'Arthrocentesis: Immediate joint aspiration and synovial analysis (cell count, Gram stain, crystals, culture) is mandatory before starting antibiotics!',
          'Blood cultures (2 pairs) must be obtained in all cases.',
          'Ultrasound imaging is recommended to confirm effusion and guide aspiration.'
        ],
        treatment_indications: [
          'All septic arthritis requires IMMEDIATE joint decompression (aspiration/arthroscopy/surgery) and empiric parenteral antibiotics to prevent cartilage damage!'
        ],
        first_line: [
          'Empiric: Vancomycin + Ceftriaxone.',
          'Drainage: Arthroscopy and lavage or repeated needle aspirations.',
          'Duration: Generally 2-4 weeks. In clinically stable, asymptomatic patients with normalizing CRP, oral switch (OVIVA concept) can be applied after 1-2 weeks of IV.'
        ]
      },
      prognosis: {
        mortality: '10-15% (up to 20-30% in polyarticular forms or elderly, comorbid patients)',
        prognostic_scores: ['None specific'],
        factors: 'Delay in decompression/drainage (>24-48 hours) leads to irreversible cartilage damage and permanent disability!'
      }
    },
    {
      id: 'spondylodiscitis',
      name: 'Spondylodiscitis (Vertebral Osteomyelitis and Discitis)',
      pathogen: {
        type: 'Bacteria',
        name: '<i>Staphylococcus aureus</i> (30-50%, including MRSA), <i>Staphylococcus epidermidis</i> (CoNS - post spinal surgery/instrumentation), <i>Streptococcus</i> spp., <i>Enterobacterales</i> (<i>E. coli</i>, <i>Klebsiella</i> - from urogenital focus), <i>Pseudomonas aeruginosa</i> (IVDU), <i>Mycobacterium tuberculosis</i> (Pott disease), <i>Brucella</i> spp.',
        gram: 'Mixed (predominantly Gram-positive)',
        shape: 'coccus/bacillus'
      },
      epidemiology: {
        incidence: '2-7/100,000 population/year. More common in men over 50 years.',
        risk_groups: [
          'Advanced age (>50-60 years)',
          'Diabetes mellitus',
          'Intravenous drug users (IVDU)',
          'Chronic kidney disease / hemodialysis',
          'Infective endocarditis (associated in up to 30%!)',
          'Spine surgery, epidural catheter, superficial spinal inoculation',
          'Urogenital infection or procedure (via Batson plexus)'
        ],
        seasonality: 'None',
        transmission: 'Hematogenous dissemination (mainly via spinal artery or Batson venous plexus), direct inoculation (surgery, epidural), per continuitatem'
      },
      pathomechanism: {
        steps: [
          'Hematogenous Dissemination: Bacteria reach the subchondral, richly vascularized bone marrow of the vertebral body via the bloodstream.',
          'Spread to the Disc: Infection breaks through the hyaline cartilage endplate into the avascular intervertebral disc. Since the adult disc lacks its own blood vessels, inflammation destroys the entire disc and then spreads to the adjacent vertebra (spondylodiscitis).',
          'Abscess Formation & Compression: The inflammatory process may break through into surrounding soft tissues, forming an epidural abscess, paravertebral abscess, or psoas abscess.',
          'Neurological Complication: Epidural abscess or vertebral collapse causes spinal cord or cauda equina compression.'
        ],
        virulence_factors: ['Biofilm formation', 'Adhesins', 'Cartilage-destroying enzymes']
      },
      clinical: {
        incubation: 'Weeks to months (insidious course)',
        onset: 'Subacute or chronic (less commonly acute fulminant)',
        symptoms: [
          {
            name: 'Localized Back and Low Back Pain',
            description: 'THE MOST IMPORTANT LEADING SYMPTOM (>90%): Gradually worsening, dull, deep back or lower back pain present at rest and at night, which is not relieved by lying down.',
            severity: 'severe'
          },
          {
            name: 'Fever (Inconsistent)',
            description: 'Fever is present in only about 50% of cases! Its absence does not rule out spondylodiscitis!',
            severity: 'moderate'
          },
          {
            name: 'Neurological Deficit (Emergency!)',
            description: 'Radicular radiating pain, lower limb paresis/paresthesia, sensory level, bowel or bladder incontinence/retention (Epidural abscess / spinal cord compression!).',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Pronounced local tenderness to palpation and percussion over the spinous process of the affected vertebra',
          'Marked paravertebral muscle spasm and restricted spinal mobility',
          'Neurological status: muscle strength decrease, reflex abnormalities, Lasegue sign, assessment of sphincter functions'
        ],
        complications: [
          'Epidural abscess (spinal compression)',
          'Psoas abscess and paravertebral phlegmon',
          'Spinal instability, vertebral collapse, and kyphotic deformity',
          'Permanent paraplegia / cauda equina syndrome'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP and ESR', finding: 'Almost always significantly elevated (CRP > 50-100 mg/L, ESR > 50 mm/h)', interpretation: 'Most sensitive laboratory signs and basis for treatment monitoring' },
          { test: 'Complete Blood Count', finding: 'Normal or mild leukocytosis', interpretation: 'WBC count is often normal in subacute cases' },
          { test: 'Blood culture (2-3 pairs)', finding: 'Positive in 50-70%!', interpretation: 'MANDATORY TO OBTAIN! If positive, can render invasive spine biopsy unnecessary!' },
          { test: 'Echocardiography (TTE/TEE)', finding: 'Valvular vegetation', interpretation: 'MANDATORY in all S. aureus, Enterococcus, or Streptococcus spondylodiscitis to rule out infective endocarditis!' }
        ],
        imaging: [
          { modality: 'MRI (contrast-enhanced)', finding: 'Vertebral body and disc edema (T1 low, T2/STIR high intensity), contrast enhancement, epidural/psoas abscess', significance: 'GOLD STANDARD imaging (sensitivity and specificity >90%)!' },
          { modality: 'CT', finding: 'Bone destruction, sequestration, gas formation', significance: 'For CT-guided biopsy or in case of MRI contraindication' },
          { modality: '18F-FDG PET/CT', finding: 'Increased focal FDG uptake', significance: 'In early stages or in the presence of metal implant artifacts' }
        ],
        microbiology: [
          { test: 'CT-guided percutaneous needle biopsy', finding: 'Culture (aerobic, anaerobic, fungal, TB) + histopathology', significance: 'MANDATORY if blood cultures are negative and there is no indication for immediate surgery!' }
        ]
      },
      differential: [
        { disease: 'Degenerative spine disease (Modic I signal)', distinguishing: 'No fever, CRP/ESR are normal, disc height is reduced on MRI but does not enhance contrast like infection' },
        { disease: 'Spinal metastasis / Multiple myeloma', distinguishing: 'Tumor spares the disc (only vertebral body is involved!), whereas spondylodiscitis destroys the disc!' },
        { disease: 'Tuberculosis spondylodiscitis (Pott disease)', distinguishing: 'Slow course lasting months, multiple vertebrae involved, fever is absent, cold abscess forms' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'No outpatient therapy', dose: '-', duration: '-', note: 'Emergency hospital admission and MRI evaluation!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg IV q8-12h', duration: '6-8 weeks', note: 'MRSA and Gram-positive coverage' },
            { drug: '+ Cefepime', dose: '2g IV q8h', duration: '', note: 'Gram-negative (Pseudomonas) coverage' },
            { drug: 'or Ceftriaxone', dose: '2g IV q24h', duration: '', note: 'If Pseudomonas risk is low' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'Vancomycin 15-20mg/kg IV + Meropenem 1g IV q8h', duration: '', note: 'In case of septic shock or severe neurological deficit' }
          ]
        },
        targeted: 'Based on biopsy or blood culture! S. aureus (MSSA): Cefazolin 3x2g IV or Flucloxacillin 4x2g IV; MRSA: Vancomycin / Daptomycin; Gram-negative: Ceftriaxone / Cefepime / Ciprofloxacin.',
        supportive: [
          'CRITICAL RULE: In clinically stable, neurologically asymptomatic patients, ANTIBIOTICS MUST BE DELAYED until microbiological sampling (blood culture / CT biopsy)!',
          'Surgical decompression (laminectomy) and debridement are indicated IMMEDIATELY for: 1. Neurological deficit / spinal cord compression; 2. Progressive spinal instability; 3. Large epidural/psoas abscess not drainable percutaneously.',
          'Wearing a rigid spine orthosis (brace) for pain control and instability prevention'
        ],
        prevention: [
          'Early recognition of infective endocarditis and urogenital infections',
          'Strict surgical asepsis during spinal procedures'
        ]
      },
      guidelines: {
        diagnosis: [
          'Clinical suspicion: Persistent back/low back pain + elevated CRP/ESR.',
          'MRI with contrast is the gold standard diagnostic tool.',
          'Collection of 2-3 pairs of blood cultures is mandatory.',
          'CT-guided biopsy should be performed if blood cultures are negative and the patient is stable.'
        ],
        treatment_indications: [
          'Immediate surgical decompression is indicated if neurological deficit or spinal cord compression is present!'
        ],
        first_line: [
          'Initial parenteral antibiotic (2-3 weeks), followed by oral switch to highly bioavailable agents in clinically stable patients with decreased CRP.',
          'Total treatment duration: 6-8 weeks (IDSA Native Vertebral Osteomyelitis Guidelines).'
        ]
      },
      prognosis: {
        mortality: '2-10% (higher in elderly, comorbid patients)',
        prognostic_scores: ['None specific'],
        factors: 'Delayed diagnosis, presence of initial neurological deficit, untreated infective endocarditis'
      }
    },
    {
      id: 'prosthetic_joint_infection',
      name: 'Prosthetic Joint Infection (PJI / Periprosthetic Joint Infection)',
      pathogen: {
        type: 'Bacteria',
        name: '<i>Staphylococcus epidermidis</i> and other CoNS (30-40%), <i>Staphylococcus aureus</i> (20-30%, including MRSA), <i>Cutibacterium acnes</i> (mainly shoulder prosthesis), <i>Streptococcus</i> spp., <i>Enterococcus</i> spp., <i>Enterobacterales</i> (<i>E. coli</i>, <i>Klebsiella</i>), <i>Pseudomonas aeruginosa</i>, Polymicrobial (10-15%)',
        gram: 'Mixed (predominantly Gram-positive CoNS and Staph)',
        shape: 'coccus/bacillus'
      },
      epidemiology: {
        incidence: 'Occurs in 1-2% of knee and hip replacements. One of the most serious complications of orthopedic surgery!',
        risk_groups: [
          'Previous joint surgery or history of PJI',
          'Diabetes mellitus and obesity (BMI > 35)',
          'Rheumatoid arthritis and steroid/biologic therapy',
          'Surgical wound healing disorder, hematoma, prolonged wound drainage (>72 hours)',
          'Smoking'
        ],
        seasonality: 'None',
        transmission: 'Surgical inoculation (most common intraoperatively), from early postoperative wound dehiscence, or late hematogenous seeding from a remote focus (e.g., dental, urogenital, skin)'
      },
      pathomechanism: {
        steps: [
          'Adhesion: Bacteria adhere to the metal, ceramic, or polyethylene (implant) surface during surgery or via hematogenous route.',
          'Biofilm Formation: Within minutes/hours, bacteria secrete an extracellular polymeric matrix (biofilm). Bacteria within the biofilm undergo phenotypic changes, transforming into slowly dividing "persister" cells.',
          'Resistance: Biofilm protects against host neutrophils, antibodies, and standard antibiotic concentrations (up to 1000x higher antibiotic levels would be needed to eradicate them!).',
          'Aseptic vs Septic Loosening: Chronic inflammation around the biofilm results in osteolysis, destruction of the bone-implant interface, and prosthesis loosening.'
        ],
        virulence_factors: ['Biofilm exopolysaccharide matrix', 'MSCRAMM adhesins', 'Persister cell phenotype', 'Intracellular survival']
      },
      clinical: {
        incubation: 'From days post-surgery (early) to years (chronic)',
        onset: 'Acute (early / hematogenous) or indolent, chronically progressive',
        symptoms: [
          {
            name: 'Early PJI (<4 weeks post-surgery)',
            description: 'Acute joint pain, erythema, swelling, warmth, wound dehiscence, persistent purulent wound drainage, fever.',
            severity: 'severe'
          },
          {
            name: 'Late Chronic PJI (>3-4 weeks/months post-surgery)',
            description: 'Dull joint pain present both on weight-bearing and at rest, early loosening of the prosthesis, functional decline, fever is usually absent.',
            severity: 'moderate'
          },
          {
            name: 'Sinus Tract',
            description: 'Presence of a draining sinus tract leading directly from the skin surface to the implant/joint space - pathognomonic for PJI by itself!',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Erythema, swelling, increased warmth around the surgical scar',
          'Pain on both active and passive joint movement',
          'Presence of a sinus tract or fistula communicating with the joint (in chronic cases)',
          'Prosthesis instability on manual examination (in advanced cases of loosening)'
        ],
        complications: [
          'Chronic osteolysis and extensive bone destruction',
          'Chronic pain and permanent functional disability',
          'Systemic sepsis',
          'Need for multi-stage revision surgery or amputation'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP and ESR', finding: 'Elevated (CRP usually > 10 mg/L, ESR > 30 mm/h)', interpretation: 'Sensitive screening tests, though non-specific in the early postoperative period' },
          { test: 'Joint aspiration (Arthrocentesis)', finding: 'Synovial WBC > 3,000 /µL (chronic) or > 10,000 /µL (early), >65% PMN', interpretation: 'GOLD STANDARD diagnostic test!' },
          { test: 'Blood cultures (2 pairs)', finding: 'Positive in acute hematogenous or systemic symptoms', interpretation: 'Mandatory in febrile patients' }
        ],
        imaging: [
          { modality: 'X-ray', finding: 'Periprosthetic radiolucency (>2mm), bone resorption, periosteal reaction', significance: 'Baseline test, detects loosening or advanced destruction' },
          { modality: 'Bone scan (Three-phase / Leukocyte scan)', finding: 'Increased uptake around the prosthesis', significance: 'Helpful when infection is suspected but X-ray is inconclusive' },
          { modality: 'FDG-PET/CT or MRI (with metal artifact reduction)', finding: 'Periprosthetic inflammation', significance: 'High sensitivity in complex cases' }
        ],
        microbiology: [
          { test: 'Periprosthetic tissue / fluid cultures (at least 3-5 intraoperative samples)', finding: 'Identification of pathogen + antibiogram', significance: 'Definitive diagnosis. Extended culture (up to 14 days) for slow-growing bacteria like C. acnes.' },
          { test: 'Sonication of removed implant', finding: 'Dislodges biofilm bacteria into fluid for culture', significance: 'Significantly increases sensitivity of pathogen detection' }
        ]
      },
      differential: [
        { disease: 'Aseptic prosthesis loosening', distinguishing: 'Normal CRP/ESR, synovial WBC is low, cultures are negative' },
        { disease: 'Metallosis / Wear debris reaction', distinguishing: 'Grayish synovial fluid, metal wear particles present, cultures negative' },
        { disease: 'Complex regional pain syndrome (CRPS)', distinguishing: 'Neuropathic pain features, normal inflammatory markers, no joint effusion' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'No empiric antibiotics before diagnostic aspiration!', dose: '-', duration: '-', note: 'Must obtain synovial fluid samples first to avoid false-negative cultures.' }
          ],
          inpatient: [
            { drug: 'Vancomycin + Cefepime', dose: 'Vancomycin 15-20mg/kg IV + Cefepime 2g IV q8h', duration: 'Until culture results', note: 'Broad coverage for MRSA and Gram-negatives' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'Vancomycin 15-20mg/kg IV + Meropenem 1g IV q8h', duration: '', note: 'Severe sepsis or shock' }
          ]
        },
        targeted: 'Based on intraoperative multi-sample cultures and sensitivities. For Staphylococci with retained implant (DAIR): Rifampicin combination is mandatory (e.g., Rifampicin + Ciprofloxacin or Levofloxacin / IV beta-lactam or Vancomycin).',
        supportive: [
          'Surgical management strategy depends on symptom duration: 1. DAIR (Debridement, Antibiotics, and Implant Retention) for early infections (<3-4 weeks) or acute hematogenous; 2. One-stage or Two-stage exchange arthroplasty for chronic infections; 3. Resection arthroplasty or amputation in unfit patients.',
          'Prolonged targeted antibiotic therapy (6-12 weeks).'
        ],
        prevention: [
          'Perioperative antibiotic prophylaxis (single dose of cefazolin 30-60 min before incision)',
          'Strict operating room ventilation and laminar flow',
          'Optimization of patient risk factors (glycemic control, weight loss, smoking cessation)'
        ]
      },
      guidelines: {
        diagnosis: [
          'EBJIS (European Bone and Joint Infection Society) criteria: Based on clinical signs, serum inflammatory markers, synovial fluid analysis, imaging, and microbiology.',
          'At least 3-5 intraoperative tissue samples for culture are required.'
        ],
        treatment_indications: [
          'Confirmed PJI requires surgical intervention (DAIR or exchange arthroplasty) combined with prolonged targeted antimicrobial therapy.'
        ],
        first_line: [
          'DAIR with component retention and rifampicin-based combination therapy for acute infections.',
          'Two-stage exchange arthroplasty (removal of old prosthesis, placement of antibiotic spacer, later reimplantation) remains the gold standard for chronic PJI.'
        ]
      },
      prognosis: {
        mortality: 'Low, but treatment failure and recurrence rates can be 10-30%',
        prognostic_scores: ['Host grade (McPherson classification)'],
        factors: 'Duration of infection, causative pathogen (MRSA, Pseudomonas worse than MSSA), integrity of surrounding soft tissues, patient comorbidities'
      }
    }
  ]
};
