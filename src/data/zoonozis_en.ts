Object.assign(window.diseases, {
  zoonotic: {
    name: 'Zoonoses',
    icon: '🐾',
    color: '#059669',
    diseases: [
      {
        id: 'leptospirosis',
        name: 'Leptospirosis',
        pathogen: {
          type: 'Spirochete',
          name: '<i>Leptospira interrogans</i> (>250 serovars, e.g., icterohaemorrhagiae, canicola, pomona)',
          gram: 'Gram-negative (faint, darkfield/silver stain)',
          shape: 'thin, spiral, with hooked ends'
        },
        epidemiology: {
          incidence: 'Tropical/subtropical: 10-100/100,000; Temperate: 0.1-1/100,000 per year. Most widespread zoonosis worldwide!',
          risk_groups: [
            'Agricultural workers, rice farmers',
            'Veterinarians, animal handlers, slaughterhouse workers',
            'Sewer workers, water utility staff',
            'Water sports enthusiasts, campers, extreme athletes (white-water rafting, triathlon)',
            'Population exposed to rodents, military personnel'
          ],
          seasonality: 'Late summer to autumn in temperate zones; rainy season / flooding in tropics',
          transmission: 'Fresh water, moist soil, or mud contaminated with urine of infected animals (rodents, dogs, swine) penetrating abraded skin or mucous membranes (conjunctiva, mouth, nose).'
        },
        pathomechanism: {
          steps: [
            'Invasion: Bacteria penetrate broken skin abrasions or intact mucous membranes during fresh water exposure.',
            'Hematogenous Spread & Endothelial Damage: Pathogen rapidly enters bloodstream (leptospiremic phase), dissemination to organs causing systemic vasculitis by damaging small vessel endothelial cells.',
            'Capillary Permeability & Hemorrhage: Endothelial damage leads to increased capillary permeability, organ edema, diffuse petechiae, and systemic bleeding diathesis.',
            'Weil\'s Disease: Severe form (~5-10%) involves hepatorenal syndrome (cholestatic jaundice without marked transaminase elevation, acute tubular necrosis) and Leptospirosis Pulmonary Hemorrhage Syndrome (LPHS).',
            'Immune Phase: From week 2, IgM antibodies clear bacteria from blood, persisting in renal tubules and aqueous humor (aseptic meningitis, uveitis).'
          ],
          virulence_factors: ['LipL32 outer membrane protein', 'Endothelial adhesins', 'Selective cholestasis-inducing factors', 'Hemolysins', 'Flagellar motility']
        },
        clinical: {
          incubation: '2-30 days (average 7-12 days)',
          onset: 'Classically biphasic (septic/leptospiremic phase -> immune phase)',
          symptoms: [
            {
              name: 'Anicteric Form (90%) - Acute / Septic Phase',
              description: 'Sudden high fever, chills, severe retrobulbar headache, prominent calf and lumbar myalgia. Pathognomonic: Conjunctival suffusion (conjunctival injection without purulent discharge).',
              severity: 'moderate'
            },
            {
              name: 'Anicteric Form - Immune Phase',
              description: 'Recurrent fever after a brief afebrile period, aseptic meningitis (headache, nuchal rigidity, CSF pleocytosis), uveitis, maculopapular rash.',
              severity: 'moderate'
            },
            {
              name: 'Weil\'s Disease (Icteric Form, 5-10%)',
              description: 'Severe, life-threatening form! Triad: 1. Orange-tinted jaundice with cholestasis; 2. Acute renal failure (oliguria/anuria, elevated creatinine); 3. Hemorrhagic diathesis (petechiae, ecchymosis, epistaxis, GI bleed).',
              severity: 'severe'
            },
            {
              name: 'Leptospirosis Pulmonary Hemorrhage Syndrome (LPHS)',
              description: 'Massive alveolar pulmonary hemorrhage with sudden hemoptysis, asphyxia, fulminant ARDS. Mortality exceeds 50%!',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Conjunctival suffusion (redness without discharge - highly characteristic!)',
            'Marked calf muscle tenderness on palpation (myositis)',
            'Orange-tinted jaundice',
            'Hepatomegaly and splenic tenderness',
            'Meningeal signs (nuchal rigidity)',
            'Petechiae, purpura, puncture-site bleeding',
            'Rales/crackles over lungs (pulmonary hemorrhage)'
          ],
          complications: [
            'Weil\'s syndrome (acute renal failure + jaundice)',
            'Massive pulmonary hemorrhage (LPHS) and ARDS',
            'Aseptic meningitis and encephalitis',
            'Myocarditis, arrhythmia, septic shock',
            'Late uveitis (months after recovery)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Marked leukocytosis with left shift, severe thrombocytopenia (<100 G/L)', interpretation: 'Indicates severe disease and DIC risk' },
            { test: 'Renal & Electrolytes', finding: 'Creatinine & BUN abruptly↑, hypokalemia (early stage due to tubular impairment!), proteinuria, hematuria', interpretation: 'Acute tubular necrosis' },
            { test: 'Liver Function', finding: 'Bilirubin↑↑ (direct >200-300 µmol/L) with disproportionately MILD transaminase elevation (AST/ALT <200 U/L), ALP/GGT elevated', interpretation: 'Classic "cholestatic-dissociated" liver pattern!' },
            { test: 'CK & CRP', finding: 'Creatine kinase (CK) markedly elevated (>1000 U/L), CRP/ESR significantly high', interpretation: 'Calf rhabdomyolysis / myositis' }
          ],
          imaging: [
            { modality: 'Chest X-ray / CT', finding: 'Snowflake-like or patchy bilateral parenchymal infiltrates, alveolar opacities', significance: 'Early detection of pulmonary hemorrhage' },
            { modality: 'Abdominal US', finding: 'Normal or mild hepatosplenomegaly, gallbladder wall edema, increased renal parenchymal echogenicity', significance: 'Rule out other jaundice causes' }
          ],
          microbiology: [
            { test: 'RT-PCR (Blood, CSF / Urine)', finding: 'Leptospira DNA detection', significance: 'MOST EFFECTIVE EARLY DIAGNOSTIC! Days 1-7 in blood/CSF, week 2 onward in urine.' },
            { test: 'Microscopic Agglutination Test (MAT)', finding: 'Single titer ≥1:400 or 4-fold rise in paired sera', significance: 'SEROLOGICAL GOLD STANDARD, but positive only from days 7-10!' },
            { test: 'ELISA IgM', finding: 'Positive Leptospira-specific IgM', significance: 'Rapid screening from end of week 1' }
          ]
        },
        differential: [
          { disease: 'Dengue Fever', distinguishing: 'Tropical history, retro-orbital pain, positive tourniquet test, no calf myositis' },
          { disease: 'Severe Falciparum Malaria', distinguishing: 'Plasmodium seen on peripheral blood smear/rapid test, fever periodicity' },
          { disease: 'Hantavirus Infection (HFRS)', distinguishing: 'Rodent urine inhalation, facial flush, severe proteinuria, no marked jaundice' },
          { disease: 'Viral Hepatitis (HAV/HBV/HEV)', distinguishing: 'Extremely high transaminases (>1000 U/L), slower onset, specific serology' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycycline', dose: '100 mg PO BID', duration: '7 days', note: 'First choice for mild anicteric cases!' },
              { drug: 'Amoxicillin', dose: '500 mg PO TID', duration: '7 days', note: 'Alternative for pregnant patients and children' },
              { drug: 'Azithromycin', dose: '500 mg PO QD', duration: '3 days', note: 'If penicillin/doxycycline allergy' }
            ],
            inpatient: [
              { drug: 'Penicillin G', dose: '1.5-2 million IU IV q4h (6x/day)', duration: '7 days', note: 'First-line therapy for severe/Weil\'s disease!' },
              { drug: 'Ceftriaxone', dose: '2 g IV QD', duration: '7 days', note: 'Equally effective alternative to Penicillin G' },
              { drug: 'Cefotaxime', dose: '2 g IV q8h', duration: '7 days', note: 'Alternative IV cephalosporin' }
            ],
            icu: [
              { drug: 'Ceftriaxone IV + Supportive ICU Care', dose: 'Ceftriaxone 2 g IV QD', duration: '7-10 days', note: 'Immediate hemodialysis / CRRT in renal failure; protective ventilation in LPHS!' }
            ]
          },
          targeted: 'Mild: Doxycycline 100 mg PO BID (or Amoxicillin). Severe / Weil\'s: Penicillin G 1.5-2M IU IV q4h or Ceftriaxone 2 g IV QD for 7 days. Jarisch-Herxheimer reaction may occur after first dose!',
          supportive: [
            'Early hemodialysis or continuous renal replacement therapy (CRRT/CVVH) for renal failure.',
            'Aggressive low tidal volume mechanical ventilation (ARDS protocol) and early PEEP for pulmonary hemorrhage.',
            'Platelet and fresh frozen plasma (FFP) transfusion for severe thrombocytopenia and bleeding.',
            'Strict monitoring of fluid and electrolyte balance.'
          ],
          prevention: [
            'Protective equipment (boots, gloves, goggles) in high-risk occupations and during floods.',
            'Rodent control and prevention of fresh water contamination.',
            'Doxycycline chemoprophylaxis (200 mg once weekly) for high-risk short-term exposure (e.g. extreme sports).'
          ]
        },
        guidelines: {
          diagnosis: [
            'In the early septic phase (<7 days), RT-PCR on blood and CSF is the most effective diagnostic tool.',
            'The serological gold standard is MAT, but it turns positive only from week 2.',
            'Conjunctival suffusion + calf pain + jaundice with cholestatic pattern = Suspect Leptospirosis!'
          ],
          treatment_indications: [
            'All suspected cases must be treated immediately with antibiotics without waiting for serological confirmation!'
          ],
          first_line: [
            'Mild case: Doxycycline 100 mg PO BID for 7 days.',
            'Severe / Weil\'s disease: Penicillin G 1.5-2M IU IV q4h or Ceftriaxone 2 g IV QD for 7 days.'
          ]
        },
        prognosis: {
          mortality: 'Anicteric form: <1%; Weil\'s disease: 10-15%; LPHS: >50%',
          prognostic_scores: ['SOFA score', 'APACHE II'],
          factors: 'Advanced age, oliguria/anuria, severe thrombocytopenia, presence of pulmonary hemorrhage'
        }
      },
      {
        id: 'hantavirus',
        name: 'Hantavirus Infection (HFRS and HPS)',
        pathogen: {
          type: 'Virus',
          name: '<i>Hantaviridae</i> family (Old World: Puumala, Dobrava-Belgrade, Hantaan, Seoul -> HFRS; New World: Sin Nombre, <b style="color: #ef4444">Andes</b>, Bayou -> HPS)',
          gram: 'Enveloped, tri-segmented negative-strand RNA virus',
          shape: 'spherical'
        },
        epidemiology: {
          incidence: '>10,000 HFRS cases/year in Europe (mainly Puumala in Northern/Central Europe, Dobrava in Balkans). HPS sporadic in the Americas.',
          risk_groups: ['Foresters, agricultural workers', 'Soldiers, campers, hikers', 'Cleaners of leaf litter, barns, uninhabited cabins', 'Persons living near rodents'],
          seasonality: 'Spring to autumn (rodent population peak and outdoor activity)',
          transmission: 'Inhalation of aerosols of dried rodent urine, feces, or saliva. Exception: <b style="color: #ef4444">Andes virus</b> can spread person-to-person!'
        },
        pathomechanism: {
          steps: [
            'Aerosol Inhalation: Virus enters lungs via inhalation of dust contaminated with rodent excreta.',
            'Endothelial Tropism: Hantaviruses selectively infect vascular endothelial cells via beta-3 integrin receptors without causing direct lytic cell death.',
            'T-cell Mediated Immunopathogenesis: Cytotoxic T-cells and inflammatory cytokines (TNF-alpha, IL-6, VEGF) loosen endothelial tight junctions.',
            'Vascular Leak Syndrome: Capillary leakage leads to plasma extravasation, fluid loss, and hemoconcentration.',
            'Clinical Phenotypes: HFRS leakage dominates in kidneys and retroperitoneum (acute tubulointerstitial nephritis and renal failure); HPS leakage dominates in pulmonary capillaries (non-cardiogenic pulmonary edema).'
          ],
          virulence_factors: ['Gn/Gc surface glycoproteins (beta-3 integrin binding)', 'Nucleocapsid protein (immunopathogenesis)', 'VEGF induction (vascular permeability)']
        },
        clinical: {
          incubation: '1-8 weeks (average 2-4 weeks)',
          onset: 'Sudden onset of high fever and systemic prodrome',
          symptoms: [
            {
              name: 'HFRS (Hemorrhagic Fever with Renal Syndrome) - Old World',
              description: 'Classic 5 stages: 1. Febrile stage (high fever, facial flush, conjunctivitis, severe back pain); 2. Hypotensive stage (shock, petechiae); 3. Oliguric stage (acute renal failure, proteinuria, uremia, bleeding); 4. Diuretic stage (polyuria, electrolyte imbalance); 5. Convalescent stage.',
              severity: 'severe'
            },
            {
              name: 'Nephropathia Epidemica (Puumala Virus)',
              description: 'Milder European HFRS. Sudden fever, severe back/flank pain (costovertebral angle tenderness), transient myopia (blurred vision due to ciliary body edema), proteinuria, elevated creatinine.',
              severity: 'moderate'
            },
            {
              name: 'HPS (Hantavirus Pulmonary Syndrome) - New World',
              description: 'Prodromal fever and myalgia followed by rapid (within hours) severe dyspnea, non-cardiogenic pulmonary edema, fulminant hypoxia, hypotension, and cardiogenic shock. Mortality 30-50%!',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Facial, neck, and upper chest flushing (Facial flush)',
            'Conjunctival injection and petechiae on palate / axilla',
            'Costovertebral angle tenderness (Giordano sign positive)',
            'Hypotension / systemic shock signs',
            'Fine crackles over lungs (HPS pulmonary edema)'
          ],
          complications: [
            'Acute renal failure (dialysis requirement)',
            'Severe non-cardiogenic pulmonary edema and refractory hypoxemia (HPS)',
            'Cardiogenic / distributive shock',
            'Pituitary hemorrhage (late panhypopituitarism)',
            'DIC and organ bleeding'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Classic Triad: 1. Marked thrombocytopenia (<50-100 G/L); 2. Leukocytosis with left shift & atypical lymphocytes; 3. Hemoconcentration (Hematocrit↑)', interpretation: 'Highly specific hematologic pattern for Hantavirus!' },
            { test: 'Renal & Urine', finding: 'Creatinine & BUN markedly elevated; Massive proteinuria (3-4+), microscopic hematuria', interpretation: 'Signs of acute tubulointerstitial nephritis' },
            { test: 'Coagulation', finding: 'Prolonged APTT, elevated D-dimer, decreased fibrinogen', interpretation: 'DIC in severe cases' }
          ],
          imaging: [
            { modality: 'Chest X-ray / CT', finding: 'HPS: Bilateral interstitial then alveolar infiltrates, rapid pleural effusion without cardiomegaly', significance: 'Hantavirus Pulmonary Syndrome diagnosis' },
            { modality: 'Abdominal US', finding: 'Enlarged, edematous kidneys with increased parenchymal echogenicity', significance: 'HFRS confirmation' }
          ],
          microbiology: [
            { test: 'Serology (ELISA / Immunoblot)', finding: 'Hantavirus-specific IgM positive at onset of symptoms', significance: 'DIAGNOSTIC GOLD STANDARD! IgM almost always detectable in febrile phase.' },
            { test: 'RT-PCR', finding: 'Viral RNA in blood or tissue', significance: 'Useful in early phase and for serotyping' }
          ]
        },
        differential: [
          { disease: 'Leptospirosis', distinguishing: 'Cholestatic jaundice present, calf pain, water exposure, responds to Penicillin' },
          { disease: 'Acute Glomerulonephritis', distinguishing: 'Post-streptococcal history, hypertension, no severe thrombocytopenia' },
          { disease: 'Legionella / Severe Influenza', distinguishing: 'No acute renal failure with proteinuria triad, specific urinary antigen/PCR' },
          { disease: 'Septic Shock', distinguishing: 'High Procalcitonin levels, positive blood culture' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Strict Observation / Hospital Referral', dose: '-', duration: '-', note: 'All suspected Hantavirus cases require hospital/ICU admission!' }
            ],
            inpatient: [
              { drug: 'Supportive Therapy + Cautious Fluids', dose: 'Hemodynamic monitoring', duration: '', note: 'Fluid replacement during hypotensive phase in HFRS, but exercise caution during oliguric phase!' },
              { drug: 'IV Ribavirin (HFRS)', dose: '33 mg/kg IV loading, then 16 mg/kg q6h for 4 days, then 8 mg/kg q8h for 3 days', duration: '7 days', note: 'For HFRS only! Started within first 5 days reduces renal failure and mortality. Ineffective in HPS!' }
            ],
            icu: [
              { drug: 'Inotropic Support + Renal/Respiratory Support', dose: 'Dobutamine / Norepinephrine', duration: '', note: 'STRICTLY RESTRICTIVE fluid therapy in HPS! Early venoarterial ECMO and mechanical ventilation indicated!' }
            ]
          },
          targeted: 'HFRS: Early IV Ribavirin (<5 days from onset). HPS: No specific antiviral available; treatment is strictly supportive.',
          supportive: [
            'HFRS: Early hemodialysis / CRRT for acute renal failure to avoid uremic complications and hypervolemia.',
            'HPS: Aggressive fluid resuscitation is STRICTLY FORBIDDEN as it worsens pulmonary edema! Early inotropic support (Dobutamine) and invasive hemodynamic monitoring.'
          ],
          prevention: [
            'Rodent control and avoidance of rodent excreta.',
            'Ventilation and damp cleaning (with disinfectant) of closed dusty areas.',
            'N95 respirator during cleaning of high-risk areas.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Thrombocytopenia + Hemoconcentration + Sudden Proteinuria + Rodent exposure = Suspect Hantavirus!',
            'Serological gold standard: IgM ELISA positive at onset.',
            'In HPS, pulmonary edema develops within hours without heart failure.'
          ],
          treatment_indications: [
            'HFRS: IV Ribavirin effective if started within first 5 days.',
            'HPS: Fluids must be RESTRICTED to prevent worsening pulmonary edema!'
          ],
          first_line: [
            'HFRS: IV Ribavirin + Renal support.',
            'HPS: ICU, Dobutamine, Restrictive fluids, ECMO.'
          ]
        },
        prognosis: {
          mortality: 'HFRS (Puumala): <0.5-1%; HFRS (Dobrava/Hantaan): 5-15%; HPS (Sin Nombre/Andes): 30-50%',
          prognostic_scores: ['SOFA score'],
          factors: 'Virus strain, early ICU admission, availability of ECMO/CRRT'
        }
      },
      {
        id: 'lyme',
        name: 'Lyme Disease (Lyme Borreliosis)',
        pathogen: {
          type: 'Spirochete',
          name: '<i>Borrelia burgdorferi sensu lato</i> (<i>B. afzelii</i> [skin], <i>B. garinii</i> [neuro], <i>B. burgdorferi ss.</i> [joint])',
          gram: 'Gram-negative',
          shape: 'spiral, flexible'
        },
        epidemiology: {
          incidence: 'USA: ~476,000 cases/year; Europe: ~232,000 cases/year. High incidence in Central/Eastern Europe.',
          risk_groups: ['Hikers, campers, foresters, hunters, gardeners, children playing outdoors'],
          seasonality: 'Spring to autumn (tick activity peak)',
          transmission: 'Bite of infected Ixodes ricinus / Ixodes scapularis tick (attachment >24-36 hours required for transmission).'
        },
        pathomechanism: {
          steps: [
            'Inoculation: Borrelia transmitted via tick saliva into human skin during prolonged feeding (>24-36h).',
            'Centrifugal Spread & EM: Bacteria multiply in skin and spread centrifugally, creating Erythema Migrans (EM).',
            'Dissemination: Hematogenous and lymphatic spread to distant sites (nervous system, heart, joints, skin).',
            'Immune Evasion: VlsE antigenic variation and OspC expression allow persistence and tissue evasion.',
            'Chronic Inflammation: Inflammatory response driven by host cytokines and immune complexes causes arthritis and neuroborreliosis.'
          ],
          virulence_factors: ['VlsE antigenic variation', 'OspC outer surface protein', 'Complement regulator-acquiring proteins', 'Motility']
        },
        clinical: {
          incubation: 'EM: 1-30 days (average 7-14 days; requires >24h tick attachment)',
          onset: 'Stage-dependent',
          symptoms: [
            {
              name: 'Early Localized Stage (Erythema Migrans)',
              description: '<b>Erythema Migrans (EM):</b> Painless, non-pruritic, expanding red ring/patch. <u>With tick bite:</u> >=1 day incubation, expanding oval/round lesion >=5 cm, grows for >=3 days. <u>Without known tick bite:</u> >=8 cm oval lesion present for >=5 days continuously expanding. Single non-expanding target spots are NOT EM!',
              severity: 'moderate'
            },
            {
              name: 'Early Disseminated Stage (Organ Manifestations)',
              description: 'Weeks to months later. <b>Neuroborreliosis:</b> Bannwarth syndrome (excruciating nocturnal radicular pain, peripheral facial palsy [can be BILATERAL!], lymphocytic meningitis). <b>Lyme Carditis:</b> Fluctuating AV blocks (I-III degree). <b>Borrelial Lymphocytoma (BL):</b> Firm livid-red nodule on earlobe, nipple, or scrotum.',
              severity: 'severe'
            },
            {
              name: 'Late Stage (Chronic Manifestations)',
              description: 'Months to years later. <b>Lyme Arthritis:</b> AFEBRILE, low-pain asymmetric oligoarthritis/monoarthritis of large joints (knee ~85%) with massive effusion. Seronegative Lyme arthritis DOES NOT EXIST! <b>ACA (Acrodermatitis Chronica Atrophicans):</b> Livid-purple doughy swelling, later paper-thin skin atrophy.',
              severity: 'moderate'
            }
          ],
          physical_exam: [
            'Erythema migrans: >5 cm (with tick bite) or >8 cm (without tick bite history) expanding oval lesion',
            'Facial palsy (sudden onset, frequently bilateral)',
            'Meningeal signs (mild with lymphocytic pleocytosis)',
            'Joint swelling (asymmetric, predominantly knee, AFEBRILE)',
            'Borrelial Lymphocytoma: firm livid-red nodule on earlobe/nipple/scrotum',
            'ACA: doughy swelling early, paper-thin atrophic skin late'
          ],
          complications: [
            'Post-Lyme syndrome (fatigue, cognitive complaints - DOES NOT RESPOND TO ANTIBIOTICS; further antibiotics FORBIDDEN!)',
            'Chronic refractory arthritis (especially after intra-articular steroid injections)',
            'Chronic neuroborreliosis (encephalomyelitis)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Two-tier Serology (ELISA + Western Blot)', finding: 'IgM (2-4 weeks), IgG (4-6 weeks)', interpretation: 'Two-tier! For typical EM, SEROLOGICAL TESTING IS STRICTLY FORBIDDEN (false negatives/irrelevant). Mandatory for arthritis, ACA, and neuroborreliosis (high IgG Blot).' },
            { test: 'Post-treatment Control Serology', finding: 'NOT RECOMMENDED / FORBIDDEN', interpretation: 'IgG/IgM antibodies persist for years after cure and do not indicate active infection.' },
            { test: 'CSF Examination', finding: 'Lymphocytic pleocytosis (50-800/µL), elevated protein', interpretation: 'Intrathecal Borrelia antibody index (AI >1.5) MANDATORY for neuroborreliosis.' }
          ],
          imaging: [
            { modality: 'ECG', finding: 'AV block (I-III degree)', significance: 'Mandatory in suspected Lyme carditis' }
          ],
          microbiology: [
            { test: 'Tick Testing for Borrelia', finding: 'STRICTLY CONTRAINDICATED', significance: 'No clinical value; prophylactic antibiotics FORBIDDEN based on tick test result.' },
            { test: 'PCR (Synovial Fluid / Skin Biopsy)', finding: 'Borrelia DNA positive', significance: 'Useful for Lyme arthritis (synovial fluid) and ACA (skin biopsy).' },
            { test: 'Non-validated Tests (LTT, ELISPOT, CD57)', finding: 'NOT RECOMMENDED', significance: 'Unreliable and scientifically unvalidated.' }
          ]
        },
        differential: [
          { disease: 'Erysipelas / Cellulitis', distinguishing: 'High fever, intense pain, rapid spread, marked leukocytosis' },
          { disease: 'Tinea Corporis', distinguishing: 'Scaly active border, intense itching, positive KOH stain' },
          { disease: 'Septic Arthritis / RA', distinguishing: 'Septic has high fever and purulent fluid (Lyme arthritis is AFEBRILE!). RA is symmetrical small joints.' },
          { disease: 'Multiple Sclerosis', distinguishing: 'MRI demyelination, CSF oligoclonal bands' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycycline PO', dose: '100 mg PO BID (300 mg/day if >90 kg, 400 mg/day if >120 kg)', duration: '40 days (for EM, BL, ACA, Lyme arthritis, and isolated peripheral neuritis!)', note: 'First-line guideline antibiotic. May be used in children <8y for short course if indicated. Photosensitizing!' },
              { drug: 'Amoxicillin PO', dose: '1000 mg PO TID (1.5x if >90 kg, 2x if >120 kg)', duration: '20 days (for EM, BL, ACA)', note: 'First choice in pregnancy and lactation. Children: 50 mg/kg/day in 3 doses.' },
              { drug: 'Cefuroxime Axetil PO', dose: '500 mg PO BID (1.5x if >90 kg, 2x if >120 kg)', duration: '20 days (for EM, BL, ACA)', note: 'Second-line oral alternative. Children: 30 mg/kg/day in 2 doses.' },
              { drug: 'Azithromycin PO', dose: '500 mg PO QD', duration: '12 days (EXCLUSIVELY for EM)', note: 'Only for EM in cases of severe beta-lactam and doxycycline allergy.' }
            ],
            inpatient: [
              { drug: 'Ceftriaxone IV', dose: '2 g IV QD', duration: '15 days', note: 'First-line for Neuroborreliosis, Lyme carditis, severe arthritis, ACA.' }
            ]
          },
          targeted: 'Typical EM: Treat immediately without serology. Doxycycline 40 days, Amoxicillin / Cefuroxime 20 days, or Azithromycin 12 days. Neuroborreliosis / Carditis: Ceftriaxone IV 2g QD for 15 days. Prolonged/repeated antibiotic courses for Post-Lyme syndrome are INEFFECTIVE AND CONTRAINDICATED!',
          supportive: [
            'Symptomatic analgesia, physical therapy.',
            'Local steroid ointment on EM is STRICTLY FORBIDDEN (causes local immunosuppression)!',
            'Intra-articular steroid injections in Lyme arthritis are STRICTLY FORBIDDEN (leads to refractory chronic arthritis)!'
          ],
          prevention: [
            'Antibiotic prophylaxis after a tick bite is STRICTLY CONTRAINDICATED!',
            'Prompt tick removal with fine tweezers without squeezing the body.',
            'Disinfection of tick bite site not routinely required.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Typical EM = Clinical diagnosis! Serology is STRICTLY FORBIDDEN for EM.',
            'Two-tier testing (ELISA + Blot) mandatory for organ manifestations.',
            'Tick testing and non-validated tests (LTT, CD57) are scientifically invalid.'
          ],
          treatment_indications: [
            'EM: Doxycycline 40 days, Amoxicillin 20 days.',
            'Neuroborreliosis / Carditis: Ceftriaxone IV 15 days.',
            'Post-Lyme syndrome: Antibiotics strictly FORBIDDEN.'
          ],
          first_line: [
            'EM / Arthritis / ACA: Doxycycline PO (100 mg BID, weight-adjusted).',
            'Neuroborreliosis: Ceftriaxone IV 2 g QD for 15 days.'
          ]
        },
        prognosis: {
          mortality: 'Extremely low (<0.1%)',
          prognostic_scores: ['None'],
          factors: 'Early diagnosis and proper treatment duration'
        }
      },
      {
        id: 'tularemia',
        name: 'Tularemia (Rabbit Fever)',
        pathogen: {
          type: 'Bacterium',
          name: '<i>Francisella tularensis</i> (subsp. <i>tularensis</i> [type A - North America] / subsp. <i>holarctica</i> [type B - Europe])',
          gram: 'Gram-negative',
          shape: 'small, pleomorphic coccobacillus, intracellular'
        },
        epidemiology: {
          incidence: 'Sporadic in Europe and North America; endemic in Scandinavia, Balkans, Central Europe.',
          risk_groups: ['Hunters, game dressers, farmers, foresters, veterinarians, laboratory staff (high lab infection risk!)'],
          seasonality: 'Summer (tick/fly vector), Winter (hunting season)',
          transmission: 'Extremely low infectious dose (10-50 organisms!). Transmission via tick/fly bite, direct contact with wild rabbits/rodents, inhalation of dusty hay/straw, ingestion of contaminated water/meat. No person-to-person spread.'
        },
        pathomechanism: {
          steps: [
            'Inoculation: Bacteria enter via skin abrasions, tick bites, aerosol inhalation, or ingestion.',
            'Phagosome Escape: Macrophages phagocytose bacteria, but F. tularensis escapes phagosome into cytoplasm via IglA-D type VI secretion system.',
            'Lymphatic Dissemination: Replicates inside macrophages, travels to regional lymph nodes causing suppurative necrotizing granulomas (buboes).',
            'Organ Spread: Disseminates via bloodstream to spleen, liver, lungs, and bone marrow.',
            'Clinical Forms: Entry site determines presentation (ulceroglandular, glandular, oculoglandular, oropharyngeal, typhoidal/pulmonary).'
          ],
          virulence_factors: ['Tularemia pathogenicity island (T6SS)', 'Phagosome escape mechanism', 'Capsule', 'Atypical LPS (low endotoxicity)', 'Category A bioterrorism agent']
        },
        clinical: {
          incubation: '3-5 days (range 1-14 days)',
          onset: 'Sudden onset of fever, chills, headache, and prostration',
          symptoms: [
            {
              name: 'Ulceroglandular Form (75-85%)',
              description: 'Punched-out skin ulcer with black eschar at entry site + painfully enlarged, necrotizing regional lymph node (bubo).',
              severity: 'moderate'
            },
            {
              name: 'Glandular Form (5-10%)',
              description: 'Painful regional lymphadenopathy (bubo) without primary skin ulcer.',
              severity: 'moderate'
            },
            {
              name: 'Oculoglandular Form',
              description: 'Painful purulent conjunctivitis with palpebral nodules and preauricular/submandibular lymphadenopathy (Parinaud syndrome).',
              severity: 'moderate'
            },
            {
              name: 'Oropharyngeal & Typhoidal / Pulmonary Forms',
              description: 'Exudative pharyngitis/tonsillitis (oropharyngeal). Pulmonary: Atypical pneumonia with hilar adenopathy. Typhoidal: High fever, sepsis, hepatosplenomegaly without localization. Untreated mortality 30-60%!',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Punched-out ulcer with black eschar',
            'Painful, fluctuant regional lymphadenopathy (bubo)',
            'Purulent conjunctivitis with preauricular node',
            'Exudative pharyngitis with cervical nodes',
            'Hepatomegaly, splenomegaly, crackles over lungs'
          ],
          complications: [
            'Bubo suppurative fistulization',
            'Septic shock and ARDS',
            'Meningitis and pericarditis',
            'Osteomyelitis'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Routine Culture', finding: 'BSL-3 HAZARD! FORBIDDEN ROUTINELY', interpretation: 'Extremely high laboratory infection risk! Notify lab in advance.' },
            { test: 'Serology (Agglutination / ELISA)', finding: 'Titer ≥1:160 or 4-fold rise in paired sera', interpretation: 'Diagnostic, but positive only after 2-3 weeks.' },
            { test: 'PCR (Exudate / Aspirate)', finding: 'F. tularensis DNA positive', interpretation: 'Rapid, sensitive, and safe diagnostic tool.' }
          ],
          imaging: [
            { modality: 'Chest X-ray / CT', finding: 'Hilar lymphadenopathy, patchy infiltrates, pleural effusion', significance: 'Pulmonary / typhoidal tularemia' }
          ],
          microbiology: [
            { test: 'DFA / Immunohistochemistry', finding: 'Antigen positive in tissue/ulcer', significance: 'Rapid confirmation' }
          ]
        },
        differential: [
          { disease: 'Cat-Scratch Disease', distinguishing: 'Cat contact, indolent course, Bartonella serology' },
          { disease: 'Pyogenic Lymphadenitis', distinguishing: 'Rapid response to beta-lactams, bacterial culture' },
          { disease: 'Cutaneous Anthrax', distinguishing: 'PAINLESS eschar with gelatinous edema (Tularemia ulcer is PAINFUL!)' },
          { disease: 'Plague (Yersinia pestis)', distinguishing: 'Bubo extremely painful, endemic geography, Gram-negative bipolar rod' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycycline', dose: '100 mg PO BID', duration: '14-21 days', note: 'Oral option for mild ulceroglandular disease' },
              { drug: 'Ciprofloxacin', dose: '500 mg PO BID', duration: '14-21 days', note: 'Alternative oral option' }
            ],
            inpatient: [
              { drug: 'Streptomycin IM', dose: '7.5-10 mg/kg IM BID (max 2 g/day)', duration: '10 days', note: 'GOLD STANDARD bactericidal cure!' },
              { drug: 'Gentamicin IV', dose: '5 mg/kg IV QD', duration: '10 days', note: 'First-line IV alternative if Streptomycin unavailable' }
            ],
            icu: [
              { drug: 'Gentamicin IV + Doxycycline IV', dose: 'Gentamicin 5 mg/kg IV QD + Doxy 100 mg IV BID', duration: '14-21 days', note: 'Combination therapy for severe pulmonary/typhoidal tularemia' }
            ]
          },
          targeted: 'Aminoglycosides (Streptomycin / Gentamicin) are the most effective bactericidal drugs. Oral options: Doxycycline or Ciprofloxacin for 14-21 days (shorter courses lead to relapse). Beta-lactams are INEFFECTIVE!',
          supportive: [
            'Fluctuant bubo: Fine needle aspiration recommended.',
            'Open surgical incision and drainage is FORBIDDEN (causes chronic draining sinus formation)!'
          ],
          prevention: [
            'Protective gloves during skinning/dressing wild game.',
            'Insect repellents against ticks and deer flies.',
            'Thorough cooking of wild meat.',
            'Post-exposure prophylaxis: Doxycycline 100 mg PO BID for 14 days after high-risk exposure.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Painful ulcer + Bubo + Game/tick exposure = Tularemia!',
            'Routine bacterial culture is FORBIDDEN due to BSL-3 laboratory infection hazard.',
            'PCR on ulcer exudate is the preferred rapid diagnostic method.'
          ],
          treatment_indications: [
            'Aminoglycosides (Gentamicin/Streptomycin) are first-line for moderate to severe cases.',
            'Beta-lactam antibiotics are INEFFECTIVE.'
          ],
          first_line: [
            'Inpatient / Severe: Gentamicin 5 mg/kg IV QD for 10 days.',
            'Outpatient / Mild: Doxycycline 100 mg PO BID for 14-21 days.'
          ]
        },
        prognosis: {
          mortality: 'Ulceroglandular: <1-2% (treated); Typhoidal/Pulmonary: 30-60% (untreated), <5% (treated)',
          prognostic_scores: ['None'],
          factors: 'Clinical form, early aminoglycoside treatment'
        }
      },
      {
        id: 'cat_scratch',
        name: 'Cat-Scratch Disease (CSD)',
        pathogen: {
          type: 'Bacterium',
          name: '<i>Bartonella henselae</i> (infrequently <i>B. clarridgeiae</i>)',
          gram: 'Gram-negative',
          shape: 'small, fastidious rod, intracellular'
        },
        epidemiology: {
          incidence: 'Most common in children and young adults (<21 years). Worldwide distribution.',
          risk_groups: ['Kitten owners, children, veterinarians, cat rescue personnel'],
          seasonality: 'Autumn and winter peak',
          transmission: 'Scratch or bite from infected (asymptomatic) kitten carrying cat fleas (*Ctenocephalides felis*). Flea feces inoculated into skin.'
        },
        pathomechanism: {
          steps: [
            'Inoculation: B. henselae inoculated via cat scratch/bite contaminated with cat flea feces.',
            'Primary Skin Lesion: Erythematous papule/pustule develops at scratch site within 3-10 days.',
            'Lymphatic Transport: Bacteria travel via lymphatics to regional lymph nodes (axillary, epitrochlear, cervical, inguinal).',
            'Stellate Granuloma: Microabscesses surrounded by histiocytes and multinucleated giant cells form in lymph node (suppurative granulomatous lymphadenitis).',
            'Angiogenesis in Immunocompromised: In HIV/immunosuppressed, VEGF induction drives vascular proliferation (Bacillary Angiomatosis and Peliosis Hepatis).'
          ],
          virulence_factors: ['BadA adhesin', 'Type IV secretion system', 'Endothelial proliferation induction (VEGF)', 'Erythrocyte invasion']
        },
        clinical: {
          incubation: 'Primary papule: 3-10 days; Regional lymphadenopathy: 1-3 weeks',
          onset: 'Subacute',
          symptoms: [
            {
              name: 'Typical CSD (90%)',
              description: 'Primary papule at scratch site followed 1-3 weeks later by painful regional lymphadenomegaly (axillary, epitrochlear, cervical). Lymph nodes are warm, erythematous, and 10-20% undergo suppuration.',
              severity: 'moderate'
            },
            {
              name: 'Parinaud Oculoglandular Syndrome (5%)',
              description: 'Direct inoculation into conjunctiva -> granulomatous conjunctivitis + preauricular/submandibular lymphadenopathy.',
              severity: 'moderate'
            },
            {
              name: 'Atypical / Disseminated Manifestations (<5%)',
              description: '<b>Neuroretinitis:</b> Sudden painless vision loss, optic disc edema, macular star exudates. <b>Encephalopathy:</b> Confusion, seizures. <b>Hepatosplenic CSD:</b> Microabscesses in liver/spleen.',
              severity: 'severe'
            },
            {
              name: 'Bacillary Angiomatosis & Peliosis Hepatis (HIV+ / Immunosuppressed)',
              description: 'Red-livid vascular skin papules/nodules resembling Kaposi sarcoma, blood-filled cysts in liver/spleen.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Primary scratch lesion (papule/crusted lesion)',
            'Unilateral regional lymphadenomegaly (tender, firm, 1-5 cm)',
            'Parinaud conjunctival granuloma + preauricular node',
            'Fundoscopy: Optic disc swelling with macular star (Neuroretinitis)',
            'Vascular skin lesions (Bacillary Angiomatosis)'
          ],
          complications: [
            'Lymph node suppuration / abscess',
            'Encephalopathy and neuroretinitis',
            'Hepatosplenic microabscesses',
            'Culture-negative endocarditis'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Serology IFA / ELISA (IgG / IgM)', finding: 'IgG ≥1:256 (akut) or positive IgM', interpretation: 'DIAGNOSTIC GOLD STANDARD! Positive 2-6 weeks after exposure.' },
            { test: 'PCR (Lymph Node Aspirate / Tissue)', finding: 'B. henselae DNA positive', interpretation: 'Highly specific and sensitive' },
            { test: 'Warthin-Starry Silver Stain', finding: 'Pleomorphic rods in necrotizing granuloma', interpretation: 'Histopathology' }
          ],
          imaging: [
            { modality: 'Lymph Node US', finding: 'Enlarged hypoechoic nodes with central necrosis/suppuration', significance: 'Assess need for needle aspiration' },
            { modality: 'Abdominal CT / US', finding: 'Multiple small hypodense lesions in liver and spleen', significance: 'Hepatosplenic CSD' }
          ],
          microbiology: [
            { test: 'Blood Culture', finding: 'Usually negative (fastidious growth 6-8 weeks)', significance: 'Special culture required for endocarditis' }
          ]
        },
        differential: [
          { disease: 'Pyogenic Lymphadenitis (Staph/Strep)', distinguishing: 'Rapid onset, acute purulence, responds quickly to beta-lactams' },
          { disease: 'Tularemia', distinguishing: 'Painful primary ulcer with eschar, wild game exposure, BSL-3 hazard' },
          { disease: 'Atypical Mycobacteriosis', distinguishing: 'Acid-fast bacilli positive, indolent violet discoloration' },
          { disease: 'Lymphoma', distinguishing: 'Non-tender, progressive, systemic symptoms, biopsy required' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Azithromycin', dose: '500 mg D1, then 250 mg D2-5 PO', duration: '5 days', note: 'First choice! Reduces lymph node size and speeds resolution.' },
              { drug: 'Doxycycline', dose: '100 mg PO BID', duration: '14-21 days', note: 'Alternative for adults' },
              { drug: 'Observation', dose: 'Symptomatic care', duration: '2-4 months', note: 'Mild typical CSD in immunocompetent patients is self-limiting' }
            ],
            inpatient: [
              { drug: 'Doxycycline + Rifampin', dose: 'Doxy 100 mg BID + Rifampin 300 mg BID PO', duration: '4-6 weeks', note: 'Indicated for Neuroretinitis and CNS involvement' }
            ],
            icu: [
              { drug: 'Gentamicin IV + Doxycycline IV', dose: 'Gentamicin 3 mg/kg QD IV + Doxy 100 mg BID IV', duration: '2 weeks Gentamicin + 6 weeks Doxycycline', note: 'First-line regimen for Bartonella culture-negative endocarditis' }
            ]
          },
          targeted: 'Typical CSD: Azithromycin 5-day regimen. Neuroretinitis / CNS CSD: Doxycycline + Rifampin for 4-6 weeks. Bartonella Endocarditis: Doxycycline + Gentamicin ± Valve surgery.',
          supportive: [
            'Fluctuant suppurative lymph node: FINE NEEDLE ASPIRATION for pain relief.',
            'OPEN SURGICAL INCISION AND DRAINAGE IS STRICTLY FORBIDDEN (causes chronic sinus tract formation and scarring)!'
          ],
          prevention: [
            'Flea control on domestic cats.',
            'Avoid cat scratches/bites; wash wounds immediately with soap and water.',
            'Immunocompromised individuals should avoid young kittens.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Cat scratch + Unilateral tender lymph node = CSD!',
            'Serology (IFA IgG ≥1:256) is the primary non-invasive diagnostic tool.',
            'Do not perform open biopsy/incision on suppurative nodes.'
          ],
          treatment_indications: [
            'Azithromycin 5-day course shortens lymph node resolution time.',
            'Neuroretinitis requires 4-6 weeks Doxycycline + Rifampin.'
          ],
          first_line: [
            'Typical CSD: Azithromycin 500 mg D1, 250 mg D2-5 PO.',
            'CNS / Neuroretinitis: Doxycycline 100 mg BID + Rifampin 300 mg BID PO.'
          ]
        },
        prognosis: {
          mortality: '<1% (overall excellent; higher in severe endocarditis)',
          prognostic_scores: ['None'],
          factors: 'Immune status (HIV+ at risk for Bacillary Angiomatosis), presence of endocarditis'
        }
      },
      {
        id: 'q_fever_zoo',
        name: 'Q Fever',
        pathogen: {
          type: 'Bacterium',
          name: '<i>Coxiella burnetii</i>',
          gram: 'Gram-negative',
          shape: 'small, obligate intracellular coccobacillus, spore-like variant'
        },
        epidemiology: {
          incidence: 'Worldwide zoonosis; occupational hazard.',
          risk_groups: ['Livestock farmers, veterinarians, slaughterhouse workers, sheep/goat/cattle breeders'],
          seasonality: 'Spring peak (lambing/calving season)',
          transmission: 'Inhalation of dust contaminated with spore-like small cell variant (SCV) from birth products (placenta, amniotic fluid, milk, urine). SCV survives months-years in soil. Single organism can infect!'
        },
        pathomechanism: {
          steps: [
            'Inhalation: SCV form inhaled into alveoli, phagocytosed by alveolar macrophages.',
            'Phagolysosomal Survival: Coxiella survives and replicates inside acidic phagolysosomes (pH ~4.5).',
            'Hematogenous Dissemination: Disseminates via blood to liver, bone marrow, and vascular endothelium.',
            'Acute Granulomatous Inflammation: Forms characteristic "doughnut" granulomas with central clear space and fibrinoid ring in liver/bone marrow.',
            'Chronic Shift: Phase variation shift from Phase II to Phase I antigen expression leads to chronic persistence (culture-negative endocarditis).'
          ],
          virulence_factors: ['Spore-like small cell variant (SCV)', 'Phase variation (Phase I: virulent, Phase II: avirulent)', 'Phagolysosomal acid resistance']
        },
        clinical: {
          incubation: '2-3 weeks (range 14-39 days)',
          onset: 'Sudden onset of high fever and systemic illness',
          symptoms: [
            {
              name: 'Acute Q Fever (60% Asymptomatic or Mild)',
              description: 'Triad: High fever with chills + excruciating RETROBULBAR HEADACHE + myalgia/arthralgia. Atypical pneumonia (mild cough) and granulomatous hepatitis (elevated transaminases). Rash is USUALLY ABSENT!',
              severity: 'moderate'
            },
            {
              name: 'Chronic Q Fever (1-2%)',
              description: 'Develops months to years later in patients with underlying valve disease or immunosuppression. Most common: Culture-negative infective endocarditis (aortic/mitral valve). Also vascular graft infection, aortic aneurysm, osteomyelitis.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'High fever with relative bradycardia',
            'Hepatomegaly and splenomegaly',
            'Infective endocarditis murmur / heart failure signs (chronic)'
          ],
          complications: [
            'Chronic Q fever endocarditis (aortic/mitral valve destruction)',
            'Aortic aneurysm infection / rupture',
            'Granulomatous hepatitis and osteomyelitis'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Liver Enzymes', finding: 'AST/ALT & ALP elevated', interpretation: 'Granulomatous hepatitis' },
            { test: 'CBC', finding: 'Thrombocytopenia in 25%, leukocytosis absent/mild', interpretation: 'Acute Q fever' }
          ],
          imaging: [
            { modality: 'Chest X-ray / CT', finding: 'Multiple rounded opacities, segment/lobe consolidation', significance: 'Atypical pneumonia' },
            { modality: 'Echocardiography (TEE)', finding: 'Valve vegetations, valve destruction', significance: 'Chronic Q fever endocarditis' }
          ],
          microbiology: [
            { test: 'Serology IFA (Phase I vs Phase II)', finding: 'Acute Q fever: Phase II IgG/IgM positive (IgG ≥1:200). Chronic Q fever: Phase I IgG ≥1:800!', significance: 'GOLD STANDARD DIAGNOSTIC! Phase shift differentiates acute from chronic Q fever.' },
            { test: 'RT-PCR (Blood / Tissue)', finding: 'Coxiella DNA positive', significance: 'Useful in early acute phase before seroconversion' }
          ]
        },
        differential: [
          { disease: 'Brucellosis', distinguishing: 'Undulant fever, raw dairy consumption, osteoarticular involvement' },
          { disease: 'Influenza / COVID-19', distinguishing: 'Upper respiratory tract symptoms, viral PCR' },
          { disease: 'Viral Hepatitis', distinguishing: 'Transaminases >1000 U/L, specific hepatitis serology' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycycline', dose: '100 mg PO BID', duration: '14 days', note: 'First-line for Acute Q Fever!' },
              { drug: 'Ciprofloxacin', dose: '750 mg PO BID', duration: '14 days', note: 'Alternative if Doxycycline contraindicated' }
            ],
            inpatient: [
              { drug: 'Doxycycline PO/IV', dose: '100 mg BID', duration: '14 days', note: 'Acute Q fever with pneumonia/hepatitis' }
            ],
            icu: [
              { drug: 'Doxycycline + Hydroxychloroquine', dose: 'Doxy 100 mg BID + Hydroxychloroquine 200 mg TID PO', duration: 'MINIMUM 18-24 MONTHS!', note: 'MANDATORY REGIMEN for Chronic Q Fever Endocarditis! Hydroxychloroquine alkalinizes phagolysosomes making Doxy bactericidal.' }
            ]
          },
          targeted: 'Acute Q Fever: Doxycycline 100 mg PO BID for 14 days. Chronic Q Fever Endocarditis: Doxycycline 100 mg BID + Hydroxychloroquine 200 mg TID for at least 18-24 months!',
          supportive: [
            'Symptomatic antipyretics and analgesics.',
            'Valve replacement surgery for severe chronic Q fever endocarditis.'
          ],
          prevention: [
            'Use PPE during lambing/calving procedures.',
            'Pasteurization of milk.',
            'Q fever vaccine (Q-Vax, available in Australia for high-risk workers).'
          ]
        },
        guidelines: {
          diagnosis: [
            'Severe retrobulbar headache + High fever + Pneumonia/Hepatitis + Livestock exposure = Q Fever!',
            'Serology IFA: Phase II IgG indicates acute Q fever; Phase I IgG ≥1:800 indicates chronic Q fever.',
            'Culture is dangerous and BSL-3 restricted.'
          ],
          treatment_indications: [
            'Acute Q fever: Treat immediately with Doxycycline 14 days.',
            'Chronic Q fever: Doxycycline + Hydroxychloroquine for 18-24 months.'
          ],
          first_line: [
            'Acute: Doxycycline 100 mg PO BID for 14 days.',
            'Chronic: Doxycycline 100 mg BID + Hydroxychloroquine 200 mg TID for 18-24 months.'
          ]
        },
        prognosis: {
          mortality: 'Acute Q fever: <1-2%; Chronic Q fever endocarditis: 5-25% (if untreated)',
          prognostic_scores: ['None'],
          factors: 'Pre-existing valvular disease, compliance with 18-24 month therapy'
        }
      },
      {
        id: 'rabies',
        name: 'Rabies',
        pathogen: {
          type: 'Virus',
          name: '<i>Rabies lyssavirus</i> (Rhabdoviridae family)',
          gram: 'Enveloped, negative-sense single-stranded RNA virus',
          shape: 'bullet-shaped'
        },
        epidemiology: {
          incidence: '~59,000 human deaths/year globally (predominantly Asia and Africa).',
          risk_groups: ['Children, animal handlers, veterinarians, cave explorers (bats), travelers to endemic areas'],
          seasonality: 'None',
          transmission: 'Bite, scratch, or saliva contact on mucous membranes/abraded skin from infected animal (dogs ~99% worldwide; bats, foxes, skunks, raccoons).'
        },
        pathomechanism: {
          steps: [
            'Inoculation: Virus inoculated via animal bite/saliva into muscle/subcutaneous tissue.',
            'Neuromuscular Entry: Binds nicotinic acetylcholine receptors (nAChR) at neuromuscular junction.',
            'Retrograde Axonal Transport: Travels retrogradely along peripheral nerve axons to spinal cord and brain at 12-24 mm/day.',
            'CNS Encephalitis: Replicates massively in CNS, forming pathognomonic Negri bodies (eosinophilic cytoplasmic inclusions in Purkinje cells/hippocampus).',
            'Centrifugal Spread: Spreads centrifugally along autonomic nerves to salivary glands, cornea, and skin.'
          ],
          virulence_factors: ['Bullet-shaped G-glycoprotein (neurotropism)', 'Retrograde axonal transport', 'Immune evasion']
        },
        clinical: {
          incubation: '1-3 months (range: 1 week to >1 year, depending on bite distance from CNS)',
          onset: 'Acute neurological progression following prodrome',
          symptoms: [
            {
              name: 'Prodromal Phase (2-10 days)',
              description: 'Non-specific fever, headache, malaise. PATHOGNOMONIC: Pain, intense itching, or paresthesia at the HEALED bite site!',
              severity: 'moderate'
            },
            {
              name: 'Furious Rabies (80%)',
              description: 'Agitation, confusion, hallucinations. PATHOGNOMONIC: Hydrophobia (gasping laryngeal spasms when attempting to drink or seeing water), Aerophobia (spasms triggered by air draft), hypersalivation, autonomic instability.',
              severity: 'severe'
            },
            {
              name: 'Dumb / Paralytic Rabies (20%)',
              description: 'Ascending flaccid muscle paralysis starting in bitten limb, resembling Guillain-Barré syndrome, without hydrophobia.',
              severity: 'severe'
            },
            {
              name: 'Coma and Death',
              description: 'Both forms progress to coma, hypoventilation, cardiac arrest, and death within 7-10 days of symptom onset.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Hypersalivation (foaming at mouth)',
            'Laryngeal spasms triggered by water or air draft (Hydrophobia / Aerophobia)',
            'Autonomic dysfunction (fluctuating BP, tachycardia, piloerection)',
            'Paresthesia at bite mark',
            'Flaccid ascending paralysis (paralytic form)'
          ],
          complications: [
            'Death (~100% mortality once clinical symptoms appear)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'No Routine Early Marker', finding: '-', interpretation: 'Clinical suspicion mandatory!' }
          ],
          imaging: [
            { modality: 'Brain MRI', finding: 'Non-specific T2 hyperintensity in brainstem, basal ganglia, limbic system', significance: 'Rule out other encephalitis causes' }
          ],
          microbiology: [
            { test: 'RT-PCR (Saliva, Nape Skin Biopsy)', finding: 'Rabies RNA positive', significance: 'Ante-mortem diagnostic gold standard (skin biopsy includes hair follicle nerves).' },
            { test: 'Direct Fluorescent Antibody (DFA)', finding: 'Viral antigen positive in skin biopsy or corneal impression', significance: 'Rapid ante-mortem test' },
            { test: 'Post-mortem Brain DFA', finding: 'Negri bodies / Viral antigen in brain tissue', significance: 'Definitive post-mortem confirmation' }
          ]
        },
        differential: [
          { disease: 'Tetanus', distinguishing: 'Trismus, painful muscle spasms without hydrophobia/pleocytosis' },
          { disease: 'Guillain-Barré Syndrome', distinguishing: 'Symmetrical ascending paralysis without autonomic hyperexcitability/hydrophobia' },
          { disease: 'Viral Encephalitis (HSV, Rabies-like)', distinguishing: 'No hydrophobia, specific viral PCR' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Post-Exposure Prophylaxis (PEP)', dose: 'IMMEDIATELY AFTER EXPOSURE!', duration: 'Days 0, 3, 7, 14', note: '1. Wash wound with soap and water for 15 min! 2. Infiltrate Human Rabies Immunoglobulin (HRIG 20 IU/kg) into wound! 3. Rabies vaccine IM on days 0, 3, 7, 14.' }
            ],
            inpatient: [
              { drug: 'Palliative Sedation & Analgesia', dose: 'Midazolam + Ketamine + Morphine', duration: 'Continuous', note: 'Palliative comfort care for clinical rabies.' }
            ],
            icu: [
              { drug: 'Milwaukee Protocol', dose: 'EXPERIMENTAL / DISCARDED', duration: '-', note: 'NOT recommended by WHO/CDC (unreproducible, high failure rate).' }
            ]
          },
          targeted: 'No effective antiviral treatment exists once clinical symptoms develop (~100% fatal). Post-Exposure Prophylaxis (PEP) is 100% effective if administered before symptom onset!',
          supportive: [
            'Heavy sedation, analgesia, quiet dark room.',
            'Avoid fluid boluses that trigger laryngeal spasms.'
          ],
          prevention: [
            'PEP: Immediate 15-minute soap-and-water wound washing + HRIG + 4-dose vaccine series.',
            'Mass vaccination of domestic dogs.',
            'Pre-exposure prophylaxis (PrEP) for veterinarians, animal handlers, travelers.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Healed bite site paresthesia + Hydrophobia = Clinical Rabies!',
            'Ante-mortem diagnosis: RT-PCR / DFA on nape skin biopsy (hair follicle nerves) and saliva.',
            'Observe biting dog/cat for 14 days if possible.'
          ],
          treatment_indications: [
            'PEP MUST be started immediately after Category II/III animal bite exposure!',
            'Clinical rabies requires palliative care.'
          ],
          first_line: [
            'PEP: HRIG 20 IU/kg infiltrated into wound + Vaccine IM on days 0, 3, 7, 14.'
          ]
        },
        prognosis: {
          mortality: '~100% after clinical symptom onset',
          prognostic_scores: ['None'],
          factors: 'Prompt PEP administration before symptoms'
        }
      },
      {
        id: 'anthrax',
        name: 'Anthrax',
        pathogen: {
          type: 'Bacterium',
          name: '<i>Bacillus anthracis</i>',
          gram: 'Gram-positive',
          shape: 'large spore-forming rod in chains ("bamboo cane")'
        },
        epidemiology: {
          incidence: 'Rare; endemic in livestock agricultural regions (Asia, Africa, Southern Europe). Bioterrorism agent.',
          risk_groups: ['Tanners, wool workers, livestock farmers, veterinarians, lab workers'],
          seasonality: 'None',
          transmission: 'Cutaneous (95% - spore inoculation into skin abrasion), Inhalational (Woolsorter\'s disease - spore inhalation), Gastrointestinal (ingestion of infected meat).'
        },
        pathomechanism: {
          steps: [
            'Spore Inoculation: Spores enter via abraded skin, inhalation, or ingestion.',
            'Germination & Capsule: Spores germinated inside macrophages, produce poly-D-glutamic acid capsule resisting phagocytosis.',
            'Exotoxin Production: Secretes three-component exotoxins: Protective Antigen (PA), Edema Factor (EF), and Lethal Factor (LF).',
            'Toxin Cascade: PA forms heptamer pore -> EF (adenylate cyclase) causes massive gelatinous non-inflammatory edema -> LF (zinc metalloprotease) cleaves MAPKs causing tissue necrosis and cytokine storm.',
            'Dissemination: Hemorrhagic mediastinitis, septic shock, and hemorrhagic anthrax meningitis.'
          ],
          virulence_factors: ['Poly-D-glutamic acid capsule', 'Protective Antigen (PA)', 'Edema Factor (EF)', 'Lethal Factor (LF)', 'Category A bioterrorism agent']
        },
        clinical: {
          incubation: 'Cutaneous: 1-7 days; Inhalational: 1-6 days (up to 60 days due to spore persistence)',
          onset: 'Form-dependent',
          symptoms: [
            {
              name: 'Cutaneous Anthrax (95%)',
              description: 'Painful/itchy papule -> vesicle -> PAINLESS BLACK ESCHAR (Malignant Pustule) surrounded by extensive non-pitting gelatinous EDEMA. Painlessness is cardinal!',
              severity: 'moderate'
            },
            {
              name: 'Inhalational Anthrax (Woolsorter\'s Disease)',
              description: 'Biphasic: 1. Prodromal mild influenza-like illness; 2. Sudden fulminant phase with severe dyspnea, cyanosis, shock, hemorrhagic mediastinitis. Mortality >85% untreated!',
              severity: 'severe'
            },
            {
              name: 'Gastrointestinal Anthrax',
              description: 'Severe abdominal pain, bloody vomiting, melena, ascites. High mortality.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Painless black eschar with surrounding gelatinous edema (Malignant Pustule)',
            'Mediastinal widening, dullness to percussion (Inhalational)',
            'Meningeal signs (Hemorrhagic anthrax meningitis)'
          ],
          complications: [
            'Septic shock and DIC',
            'Hemorrhagic anthrax meningitis (~100% fatal)',
            'Hemorrhagic mediastinitis and asphyxia'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'Gram Stain', finding: 'Large, square-ended Gram-positive rods in chains ("bamboo cane")', interpretation: 'Vesicle fluid or blood smear' },
            { test: 'Blood Culture', finding: 'B. anthracis positive', interpretation: 'Systemic anthrax / sepsis' }
          ],
          imaging: [
            { modality: 'Chest X-ray / CT', finding: 'PATHOGNOMONIC: MARKED MEDIASTINAL WIDENING and bilateral pleural effusion without parenchymal infiltrate!', significance: 'Inhalational Anthrax hallmark' }
          ],
          microbiology: [
            { test: 'PCR', finding: 'B. anthracis DNA positive', significance: 'Rapid confirmation' },
            { test: 'DFA', finding: 'Capsular and cell wall antigen positive', significance: 'Reference lab confirmation' }
          ]
        },
        differential: [
          { disease: 'Spider Bite (Brown Recluse)', distinguishing: 'Very painful eschar, necrotic skin lesion without gelatinous edema' },
          { disease: 'Tularemia', distinguishing: 'PAINFUL ulcer with eschar (Anthrax eschar is PAINLESS!)' },
          { disease: 'Bacterial Pneumonia', distinguishing: 'Absence of marked mediastinal widening on CT/X-ray' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Ciprofloxacin', dose: '500 mg PO BID', duration: '60 days', note: 'Cutaneous anthrax (60 days if bioterrorism/spore exposure suspected!)' },
              { drug: 'Doxycycline', dose: '100 mg PO BID', duration: '60 days', note: 'Alternative for cutaneous anthrax' }
            ],
            inpatient: [
              { drug: 'Ciprofloxacin IV + Meropenem IV + Linezolid IV (Triple Combination)', dose: 'Ciprofloxacin 400 mg IV BID + Meropenem 1 g IV TID + Linezolid 600 mg IV BID', duration: '14 days IV, total 60 DAYS PO/IV', note: 'MANDATORY TRIPLE COMBINATION for Systemic/Inhalational Anthrax! Linezolid/Clindamycin inhibits toxin synthesis.' }
            ],
            icu: [
              { drug: 'Triple Antibiotics + Raxibacumab / Obiltoxaximab IV', dose: 'Raxibacumab 40 mg/kg IV single dose', duration: 'Single dose', note: 'Monoclonal antibody targeting Protective Antigen (PA) to neutralize toxin in systemic anthrax!' }
            ]
          },
          targeted: 'Cutaneous: Ciprofloxacin PO for 60 days. Systemic / Inhalational: Triple IV combination (Ciprofloxacin + Linezolid + Meropenem) + Raxibacumab antitoxin for TOTAL 60 DAYS due to delayed spore germination!',
          supportive: [
            'Pleural effusion drainage (chest tube).',
            'SURGICAL EXCISION OR DEBRIDEMENT OF CUTANEOUS ESCHAR IS STRICTLY FORBIDDEN (increases toxin dissemination)!'
          ],
          prevention: [
            'PEP: Ciprofloxacin (500 mg PO BID) or Doxycycline (100 mg PO BID) for 60 DAYS + 3-dose Anthrax Vaccine after spore exposure.',
            'Incinerate infected animal carcasses on site; do NOT perform autopsy (spores form on exposure to air!).'
          ]
        },
        guidelines: {
          diagnosis: [
            'Painless black eschar + Gelatinous edema = Cutaneous Anthrax!',
            'Mediastinal widening on chest imaging = Inhalational Anthrax!',
            'Do NOT excise or debride cutaneous eschar.'
          ],
          treatment_indications: [
            'Systemic/inhalational anthrax requires triple combination antibiotics + antitoxin for 60 days.'
          ],
          first_line: [
            'Systemic: Ciprofloxacin IV + Linezolid IV + Meropenem IV + Raxibacumab IV for 60 days.',
            'Cutaneous: Ciprofloxacin 500 mg PO BID for 60 days.'
          ]
        },
        prognosis: {
          mortality: 'Cutaneous: <1% (treated), 20% (untreated); Inhalational: 45% (treated), >85% (untreated); GI: 40%',
          prognostic_scores: ['APACHE II'],
          factors: 'Clinical form, early antitoxin administration, presence of hemorrhagic meningitis'
        }
      },
      {
        id: 'brucellosis',
        name: 'Brucellosis (Malta Fever / Undulant Fever)',
        pathogen: {
          type: 'Bacterium',
          name: '<i>Brucella</i> species (<i>B. melitensis</i> [sheep/goats - most virulent!], <i>B. abortus</i> [cattle], <i>B. suis</i> [swine], <i>B. canis</i> [dogs])',
          gram: 'Gram-negative',
          shape: 'small, obligate aerobic, intracellular coccobacillus'
        },
        epidemiology: {
          incidence: 'Most widespread zoonosis in livestock regions (Mediterranean, Middle East, Central Asia, South America).',
          risk_groups: ['Shepherds, livestock farmers, veterinarians, slaughterhouse workers, laboratory staff (high aerosol infection risk!)'],
          seasonality: 'Spring and summer (lambing and milking season)',
          transmission: '1. Ingestion of unpasteurized milk, goat/sheep cheese, cream (most common!); 2. Direct contact with infected animal tissues/placenta via skin abrasions; 3. Aerosol inhalation in livestock facilities/labs.'
        },
        pathomechanism: {
          steps: [
            'Invasion: Bacteria enter via digestive tract, skin abrasions, or respiratory mucosa.',
            'Intracellular Survival: Phagocytosed by PMNs and macrophages; inhibits phagolysosome fusion and replicates inside endoplasmic reticulum.',
            'Hematogenous Spread: Infected macrophages travel to regional lymph nodes and bloodstream (bacteremia) to reach reticuloendothelial organs (liver, spleen, bone marrow).',
            'Granuloma Formation: Host forms non-caseating epithelioid granulomas in affected organs.',
            'Organ Foci: Seeding occurs in spine/joints (Spondylodiscitis), testes (Epididymo-orchitis), or heart valves (Endocarditis).'
          ],
          virulence_factors: ['Smooth LPS (O-antigen chain resists complement lysis)', 'Type IV secretion system (VirB operon inhibits phagolysosome fusion)', 'Intracellular persistence']
        },
        clinical: {
          incubation: '2-4 weeks (range: 1 week to 2-3 months)',
          onset: 'Indolent, gradual, or subacute undulant fever course',
          symptoms: [
            {
              name: 'Classic Acute Brucellosis (Undulant Fever)',
              description: '<b>Undulant Fever (Febris undulans):</b> Fever rises in afternoon/evening and falls spontaneously by morning with profuse moldy/sour-smelling sweating. Marked fatigue, lower back pain, myalgia, arthralgia, severe mood changes (depression).',
              severity: 'moderate'
            },
            {
              name: 'Osteoarticular Manifestations (30-50% - Most Common Complication!)',
              description: '<b>Spondylodiscitis / Vertebral Osteomyelitis:</b> Severe lumbar back pain, spinal stiffness, psoas abscess. Also Sacroiliitis and large joint (hip, knee) monoarthritis.',
              severity: 'severe'
            },
            {
              name: 'Genitourinary Manifestations (10-20%)',
              description: '<b>Epididymo-orchitis:</b> Painful, sudden unilateral testicular swelling and fever.',
              severity: 'moderate'
            },
            {
              name: 'Brucella Endocarditis (<2% - Main Cause of Death!)',
              description: 'Culture-negative valve destruction (predominantly aortic valve), rapidly progressive heart failure, valve abscesses, embolization.',
              severity: 'severe'
            }
          ],
          physical_exam: [
            'Febris undulans (undulant fever) with profuse sweating',
            'Hepatosplenomegaly and cervical/axillary lymphadenopathy',
            'Spinal percussion tenderness, Lasegue sign positive (Spondylodiscitis)',
            'Unilateral tender swollen testicle (Orchitis)'
          ],
          complications: [
            'Spinal spondylodiscitis, vertebral collapse, epidural abscess',
            'Infective endocarditis and valve perforation',
            'Neurobrucellosis (meningitis, radiculopathy, chronic encephalitis)',
            'Chronic Brucellosis (symptoms persisting >1 year)'
          ]
        },
        diagnostics: {
          laboratory: [
            { test: 'CBC', finding: 'Leukopenia with relative lymphocytosis, mild anemia, thrombocytopenia', interpretation: 'Reticuloendothelial bone marrow depression' },
            { test: 'Liver Enzymes', finding: 'Mild transaminase elevation', interpretation: 'Granulomatous hepatitis' }
          ],
          imaging: [
            { modality: 'Spine MRI (Contrast)', finding: 'Intervertebral disc and adjacent vertebral edema, contrast enhancement (Spondylodiscitis), paraspinal/psoas abscess', significance: 'Early detection of spondylodiscitis and epidural compression' },
            { modality: 'Echocardiography (TTE/TEE)', finding: 'Aortic/mitral valve vegetation, ulceration', significance: 'Mandatory if endocarditis suspected' }
          ],
          microbiology: [
            { test: 'Blood Culture (Lysis-centrifugation / BACTEC)', finding: 'Brucella spp. isolation', significance: 'SLOW GROWTH! Notify lab of Brucella suspicion; hold cultures for 21-28 days!' },
            { test: 'Serology (Standard Tube Agglutination - SAT / Wright)', finding: 'Titer ≥1:160 (or 4-fold rise)', significance: 'DIAGNOSTIC CORNERSTONE! Coombs test needed in chronic cases due to blocking antibodies.' },
            { test: 'PCR', finding: 'Brucella DNA positive', significance: 'Rapid and specific confirmation' }
          ]
        },
        differential: [
          { disease: 'Typhoid Fever (Salmonella Typhi)', distinguishing: 'Continuous fever, rose spots, bradycardia, stool culture' },
          { disease: 'Tuberculosis (Pott\'s Disease)', distinguishing: 'Disc space preserved early in Pott\'s, slow progression, PPD/IGRA positive' },
          { disease: 'Q Fever', distinguishing: 'Atypical pneumonia and retrobulbar headache dominate, phase variation serology' },
          { disease: 'Infective Endocarditis (Staph/Strep)', distinguishing: 'Rapid course, positive blood cultures within 24-48 hours' }
        ],
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Doxycycline + Rifampin (Standard Systemic Therapy)', dose: 'Doxycycline 100 mg PO BID + Rifampin 600-900 mg PO QD', duration: 'MINIMUM 6 WEEKS!', note: 'STANDARD FIRST-LINE ORAL COMBINATION! Monotherapy is FORBIDDEN due to high relapse rate!' }
            ],
            inpatient: [
              { drug: 'Doxycycline PO + Streptomycin IM / Gentamicin IV', dose: 'Doxycycline 100 mg PO BID x 6 weeks + Gentamicin 5 mg/kg IV QD for first 2 weeks (or Streptomycin 1 g IM x 14 days)', duration: 'Doxy 6 weeks + Aminoglycoside 2 weeks', note: 'LOWER RELAPSE RATE ALTERNATIVE! Preferred for Spondylodiscitis.' }
            ],
            icu: [
              { drug: 'Ceftriaxone IV + Doxycycline PO + Rifampin PO', dose: 'Ceftriaxone 2 g IV BID + Doxy 100 mg PO BID + Rifampin 900 mg PO QD', duration: 'MINIMUM 3-6 MONTHS!', note: 'MANDATORY TRIPLE REGIMEN for Neurobrucellosis and Brucella Endocarditis! Surgical valve replacement recommended for endocarditis.' }
            ]
          },
          targeted: 'Uncomplicated: Doxycycline (100 mg PO BID 6 weeks) + Rifampin (600-900 mg PO QD 6 weeks) OR Doxycycline (6 weeks) + Gentamicin (2 weeks). Spondylodiscitis: Doxycycline + Rifampin + Gentamicin for 8-12 weeks. Neurobrucellosis / Endocarditis: Ceftriaxone + Doxycycline + Rifampin for 3-6 months.',
          supportive: [
            'Rigid spinal orthosis for spondylodiscitis to prevent spinal instability.',
            'Early cardiac surgery consult for valve replacement in endocarditis.',
            'Analgesia (NSAIDs), bed rest.'
          ],
          prevention: [
            'Pasteurization or boiling of milk and dairy products.',
            'Avoid unpasteurized goat/sheep cheese.',
            'Wear protective gloves and goggles during animal birthing/veterinary procedures.',
            'Livestock vaccination and herd screening.'
          ]
        },
        guidelines: {
          diagnosis: [
            'Undulant fever + Back pain + Raw dairy exposure = Brucellosis!',
            'Blood cultures are slow (hold for minimum 21-28 days).',
            'Monotherapy is STRICTLY FORBIDDEN due to high relapse risk.'
          ],
          treatment_indications: [
            'All Brucellosis cases require combined antibiotic therapy for at least 6 weeks.'
          ],
          first_line: [
            'Standard: Doxycycline PO + Rifampin PO for 6 weeks (or Doxycycline 6 weeks + Gentamicin 2 weeks).',
            'Neurobrucellosis / Endocarditis: Ceftriaxone IV + Doxycycline PO + Rifampin PO for 3-6 months.'
          ]
        },
        prognosis: {
          mortality: '<1-2% (chiefly due to acute endocarditis); Relapse rate <5% with proper combination therapy, >30% with monotherapy',
          prognostic_scores: ['None'],
          factors: 'Compliance with 6-week combination therapy, early surgical intervention in endocarditis'
        }
      }
    ]
  }
});

(function ensureZoonoticEnDiseaseGalleries() {
  const category = (window as any).diseases ? (window as any).diseases.zoonotic : null;
  if (!category || !Array.isArray(category.diseases)) return;

  function createInlineGalleryImage(diseaseName: string, categoryName: string) {
    const safeDiseaseName = String(diseaseName || 'Disease');
    const safeCategoryName = String(categoryName || 'Zoonotic');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 630">
      <defs>
        <linearGradient id="bg" x1="0" x2="1" y1="0" y2="1">
          <stop offset="0%" stop-color="#dcfce7"/>
          <stop offset="100%" stop-color="#bbf7d0"/>
        </linearGradient>
      </defs>
      <rect width="1200" height="630" fill="url(#bg)"/>
      <circle cx="1030" cy="150" r="130" fill="#16a34a" opacity="0.14"/>
      <circle cx="180" cy="520" r="180" fill="#22c55e" opacity="0.12"/>
      <text x="80" y="150" font-size="62" font-family="Arial, sans-serif" font-weight="700" fill="#14532d">${safeDiseaseName}</text>
      <text x="80" y="230" font-size="36" font-family="Arial, sans-serif" fill="#166534">Category: ${safeCategoryName}</text>
      <text x="80" y="340" font-size="30" font-family="Arial, sans-serif" fill="#052e16">Zoonotic Infection - Didactic Illustration</text>
      <rect x="80" y="390" width="1040" height="8" fill="#16a34a" opacity="0.45"/>
      <text x="80" y="470" font-size="28" font-family="Arial, sans-serif" fill="#14532d">Infectologia</text>
    </svg>`;

    return {
      url: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`,
      caption: `${safeDiseaseName} - didactic illustration`,
      type: 'Illustration'
    };
  }

  category.diseases.forEach((disease: any) => {
    if (!disease || (Array.isArray(disease.gallery) && disease.gallery.length > 0)) return;
    disease.gallery = [createInlineGalleryImage(disease.name, category.name)];
  });
})();
