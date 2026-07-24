Object.assign(window.diseases, {
         sexually_transmitted: {
        name: 'Sexually Transmitted Infections',
        icon: '🔬',
        color: '#7c3aed',
        diseases: [
          {
            id: 'syphilis',
            name: 'Syphilis',
            pathogen: { type: 'Spirochete', name: '<i>Treponema pallidum</i>', gram: 'Gram-negative (stains poorly)', shape: 'spiral' },
            epidemiology: {
              incidence: 'Increasing incidence worldwide, high prevalence in MSM and HIV-positive populations',
              risk_groups: ['MSM (men who have sex with men)', 'HIV-positive individuals', 'Sex workers', 'Multiple sexual partners', 'Persons using methamphetamine/substances'],
              seasonality: 'None',
              transmission: 'Direct contact with active infectious lesions (mucous membranes/skin), vertical (congenital syphilis), rarely blood products'
            },
            pathomechanism: {
              steps: [
                'Entry and Dissemination: T. pallidum enters through micro-abrasions in skin or mucous membranes. It disseminates via lymphatics and bloodstream within minutes to hours, becoming systemic before the primary lesion appears.',
                'Immune Evasion: The bacteria use a "stealth" strategy with extremely low outer membrane protein density to evade antibody binding and complement activation, allowing persistent infection.',
                'Tissue Damage: Pathology is based on obliterative endarteritis (inflammation and occlusion of small terminal blood vessels) accompanied by dense perivascular plasma cell infiltration.',
                'Consequence: Ischemia caused by vessel occlusion leads to ulceration of the primary chancre and formation of gummas (necrotic granulomas) in the tertiary stage.'
              ],
              virulence_factors: ['Fibronectin-binding proteins (TpF1, TprK)', 'Hyaluronidase', 'Antigenic variation (TprK gene family)', 'Low density outer membrane proteins']
            },
            clinical: {
              incubation: 'Primary: 9-90 days (average 21 days)',
              onset: 'Phase-dependent',
              symptoms: [
                { name: 'Primary: Chancre', description: 'Painless, firm, indurated ulcer with a clean base (ulcus durum) at portal of entry. Accompanied by painless, non-suppurative regional lymphadenopathy.', severity: 'moderate' },
                { name: 'Secondary: Dissemination', description: '2-8 weeks post-chancre. Non-pruritic maculopapular rash involving palms and soles, condyloma lata (broad, moist, flat-topped papules in intertriginous areas), mucosal patches, "moth-eaten" alopecia, fever, and generalized lymphadenopathy.', severity: 'moderate' },
                { name: 'Latent Syphilis', description: 'Asymptomatic stage with positive serology. Early latent (<1 year duration) vs. Late latent (>1 year or unknown duration).', severity: 'mild' },
                { name: 'Tertiary Syphilis', description: 'Years later: Gummatous lesions (destructive granulomatous skin/bone lesions), Cardiovascular syphilis (aortic aneurysm, coronary ostial stenosis), and Neurosyphilis (tabes dorsalis, general paresis).', severity: 'severe' },
                { name: 'Neurosyphilis & Ocular/Otosyphilis', description: 'Can occur at ANY stage. Cranial nerve palsies, uveitis/retinitis, sudden hearing loss, meningitis, stroke-like syndromes.', severity: 'severe' }
              ],
              physical_exam: [
                'Primary: Painless genital/extragenital ulcer (ulcus durum) + non-tender inguinal adenopathy',
                'Secondary: Generalized maculopapular rash (palms/soles!), condyloma lata, mucosal white patches, patchy alopecia',
                'Latent: Completely asymptomatic',
                'Tertiary: Gummas (skin, palate, long bones), cardiovascular (aortic regurgitation murmur), or neurological signs (Argyll Robertson pupils, sensory ataxia)'
              ],
              complications: ['Neurosyphilis', 'Ocular/Otosyphilis', 'Cardiovascular syphilis (aortic aneurysm)', 'Gumma destruction', 'Congenital syphilis', 'Increased risk of HIV transmission and acquisition']
            },
            diagnostics: {
              laboratory: [
                { test: 'Non-treponemal test (RPR / VDRL)', finding: 'Quantitative titer (e.g., 1:32)', interpretation: 'Screening and monitoring treatment response (4-fold decline required)' },
                { test: 'Treponemal-specific test (TP-PA / FTA-ABS / EIA / CIA)', finding: 'Reactive', interpretation: 'Confirmation; remains positive for life in most individuals' },
                { test: 'Reverse sequence algorithm', finding: 'Automated EIA/CIA → Quantitative RPR → TP-PA (if discordant)', interpretation: 'Preferred high-throughput screening algorithm' }
              ],
              imaging: [
                { modality: 'Brain MRI', finding: 'Meningeal enhancement, cerebral infarctions, gummas', significance: 'Indicated for neurosyphilis symptoms' },
                { modality: 'Echo / CT Angiography', finding: 'Ascending aortic dilation, aneurysm', significance: 'Indicated for cardiovascular syphilis' }
              ],
              microbiology: [
                { test: 'Dark-field microscopy / Direct Fluorescent Antibody (DFA)', finding: 'Motile spirochetes from moist lesions', significance: 'Definitive diagnosis for primary/secondary lesions, but largely replaced by PCR' },
                { test: 'T. pallidum PCR', finding: 'Positive T. pallidum DNA', significance: 'High sensitivity/specificity for mucosal/ulcer swabs and CSF' },
                { test: 'CSF analysis (Neurosyphilis)', finding: 'CSF-VDRL reactive (specific), WBC >5 cells/µL, protein >45 mg/dL', significance: 'Mandatory in symptomatic neurosyphilis/ocular syphilis or tertiary stage' }
              ]
            },
            differential: [
              { disease: 'Genital herpes', distinguishing: 'Painful, clustered vesicles on erythematous base' },
              { disease: 'Chancroid (H. ducreyi)', distinguishing: 'Painful ulcer with ragged edges and painful suppurative adenopathy' },
              { disease: 'Lymphogranuloma venereum (LGV)', distinguishing: 'Transient ulcer followed by painful, matted inguinal buboes' },
              { disease: 'Pityriasis rosea', distinguishing: 'Herald patch, Christmas-tree distribution, spares palms and soles' },
              { disease: 'Drug eruption', distinguishing: 'Medication history, lack of lymphadenopathy or mucosal patches' }
            ],
            therapy: {
              guidelines: ['CDC STI Treatment Guidelines (2021/2024)', 'IUSTI European Syphilis Guideline (2020/2024)', 'AWMF S2k Leitlinie (2023)'],
              empirical: {
                outpatient: [
                  { drug: 'Benzathine Penicillin G', dose: '2.4 million units IM (single dose)', duration: 'Single dose', note: 'First-line for Early Syphilis (Primary, Secondary, Early Latent <1 year).' },
                  { drug: 'Benzathine Penicillin G', dose: '2.4 million units IM weekly', duration: '3 consecutive weeks (total 7.2 million units)', note: 'First-line for Late Latent (>1 year or unknown duration) and Tertiary Syphilis.' },
                  { drug: 'Penicillin Allergy: Doxycycline', dose: '100 mg PO BID', duration: '14 days (early) or 28 days (late/unknown)', note: 'Second-line alternative in non-pregnant penicillin-allergic patients.' }
                ],
                inpatient: [
                  { drug: 'Aqueous Crystalline Penicillin G', dose: '18-24 million units/day IV (3-4 million units IV every 4 hours or continuous infusion)', duration: '10-14 days', note: 'Mandatory first-line for Neurosyphilis, Ocular, or Otosyphilis.' },
                  { drug: 'Procaine Penicillin G + Probenecid', dose: '2.4 million units IM QD + Probenecid 500 mg PO QID', duration: '10-14 days', note: 'Alternative inpatient regimen for Neurosyphilis.' }
                ],
                icu: [
                  { drug: 'Aqueous Crystalline Penicillin G', dose: '18-24 million units/day IV', duration: '10-14 days', note: 'Severe Neurosyphilis / Ocular syphilis.' }
                ]
              },
              targeted: 'Penicillin G remains the gold standard. T. pallidum has no documented resistance to penicillin.',
              supportive: ['Warn about Jarisch-Herxheimer reaction (fever, chills, headache within 24h of first dose; manage with NSAIDs/corticosteroids)', 'Mandatory HIV & STI co-infection screening', 'Partner notification and treatment (contacts within 90 days for primary/secondary)', 'Post-exposure prophylaxis (Doxy-PEP: Doxycycline 200mg within 72h post-sex) in high-risk MSM'],
              prevention: ['Condom use', 'Doxy-PEP (200mg within 72h post-sex for high-risk MSM/transgender women)', 'Partner notification and presumptive treatment', 'Universal screening during pregnancy (1st trimester + 3rd trimester if high risk)']
            },
            guidelines: {
              diagnosis: [
                'Screening: Quantitative non-treponemal test (RPR/VDRL) or reverse sequence algorithm (automated EIA/CIA).',
                'Confirmation: Treponemal-specific test (TP-PA, FTA-ABS, or CIA).',
                'Neurosyphilis/Ocular Syphilis evaluation: Lumbar puncture (CSF cell count, protein, CSF-VDRL) + detailed ophthalmologic/audiologic examination for neurological, visual, or auditory symptoms.'
              ],
              treatment_indications: [
                'All confirmed cases of syphilis must be treated promptly according to stage.',
                'Sexual partners within the preceding 90 days should be treated presumptively for early syphilis, even if seronegative.'
              ],
              first_line: [
                'Early Syphilis (Primary, Secondary, Early Latent <1 yr): Benzathine Penicillin G 2.4 million units IM as a single dose.',
                'Late Latent / Tertiary Syphilis: Benzathine Penicillin G 2.4 million units IM once weekly for 3 consecutive weeks (total 7.2 MU).',
                'Neurosyphilis / Ocular / Otosyphilis: Aqueous Crystalline Penicillin G 18-24 million units/day IV (3-4 MU IV q4h) for 10-14 days.'
              ],
              special_populations: [
                'Penicillin Allergy in Pregnancy: Desensitization and treatment with Benzathine Penicillin G is MANDATORY (Doxycycline is contraindicated in pregnancy and alternatives are inadequate for congenital syphilis prevention!).',
                'Penicillin Allergy in Non-Pregnant Adults: Doxycycline 100 mg PO BID for 14 days (early) or 28 days (late/unknown). Ceftriaxone 1-2g IV/IM daily for 10-14 days is an alternative.',
                'Jarisch-Herxheimer Reaction: Acute febrile reaction with headache, myalgia, and exanthem worsening occurring within 24h of starting treatment. Treat symptomatically with antipyretics.',
                'Congenital Syphilis: Aqueous Crystalline Penicillin G 100,000-150,000 units/kg/day IV (50,000 u/kg/dose IV q12h for 7 days, then q8h) for 10 days.'
              ],
              monitoring: [
                'Serological response monitored by quantitative non-treponemal titers (RPR/VDRL) at 3, 6, 12, and 24 months post-treatment.',
                'Treatment success: At least a fourfold (2-dilution) drop in non-treponemal titer within 6-12 months for early syphilis, or 12-24 months for late syphilis.'
              ],
              references: [
                'CDC Sexually Transmitted Infections Treatment Guidelines, 2021/2024',
                'IUSTI: 2020/2024 European guideline on the management of syphilis',
                'CDC Clinical Care Guidelines for Doxycycline Post-Exposure Prophylaxis (Doxy-PEP), 2024'
              ]
            },
            prognosis: {
              mortality: 'Excellent prognosis if treated early; untreated syphilis leads to irreversible cardiovascular or neurological morbidity and high congenital mortality.',
              prognostic_scores: ['RPR/VDRL quantitative titer monitoring'],
              factors: 'Clinical stage at diagnosis, prompt treatment, HIV co-infection, adherence to follow-up serology'
            }
          },
          {
            id: 'hiv_aids',
            name: 'HIV Infection and AIDS',
            pathogen: { type: 'Virus', name: '<i>Human Immunodeficiency Virus</i> (HIV-1, HIV-2)', gram: 'Enveloped ssRNA retrovirus', shape: 'spherical (Lentivirus)' },
            epidemiology: {
              incidence: '~39.9 million people living with HIV worldwide; ~1.3 million new infections annually (UNAIDS 2024)',
              risk_groups: ['Men who have sex with men (MSM)', 'People who inject drugs (PWID)', 'Sex workers', 'Transgender individuals', 'Incarcerated individuals', 'Heterosexual partners of unsuppressed HIV individuals'],
              seasonality: 'None',
              transmission: 'Sexual (anal, vaginal, oral - zero risk if viral load <50 copies/mL [U=U]), parenteral (blood, shared needles, occupational needle stick), vertical (mother-to-child: pregnancy, delivery, breastfeeding)'
            },
            pathomechanism: {
              steps: [
                'Entry and Binding: Viral envelope glycoprotein gp120 binds with high affinity to host CD4 receptors on T-helper cells, macrophages, and dendritic cells, followed by binding to chemokine co-receptors CCR5 (R5-tropic, early/transmission) or CXCR4 (X4-tropic, late/rapid progression). gp41 mediates viral envelope fusion with the host cell membrane.',
                'Reverse Transcription and Integration: Viral genomic ssRNA is reverse transcribed into cDNA by error-prone HIV reverse transcriptase (generating high mutation rates and quasi-species). Viral integrase transports proviral cDNA into the nucleus and integrates it permanently into the host cell genome, establishing persistent latent reservoirs (memory CD4+ T-cells).',
                'Immune Exhaustion and GALT Depletion: Early massive destruction of gut-associated lymphoid tissue (GALT) causes intestinal mucosal barrier breakdown, microbial translocation, and chronic systemic immune activation. Persistent viral replication causes pyroptosis of infected CD4+ T-cells and apoptosis of bystander cells.',
                'Advanced Immunodeficiency (AIDS): Progressive decline of CD4+ T-cell count (<200 cells/µL) leads to severe cell-mediated immune collapse, predisposing to opportunistic infections (OIs), latent pathogen reactivation, and AIDS-defining malignancies.'
              ],
              virulence_factors: ['gp120 / gp41 (receptor binding & membrane fusion)', 'Reverse transcriptase (error-prone, mutation generator)', 'Integrase (genomic integration & latent reservoir establishment)', 'Capsid p24 (viral core & nuclear entry)', 'Nef (CD4 & MHC-I downregulation, immune evasion)', 'Tat, Rev, Vif, Vpr, Vpu (transcriptional regulation, infectivity & immune modulation)']
            },
            clinical: {
              incubation: '2-4 weeks for Acute Retroviral Syndrome (ARS); median 8-10 years for clinical progression to AIDS without ART',
              onset: 'Acute (ARS) or chronic/latent',
              symptoms: [
                { name: 'Acute Retroviral Syndrome (ARS / Acute HIV)', description: 'Mononucleosis-like febrile illness occurring 2-4 weeks post-exposure in 50-80% of newly infected individuals: high fever, painful pharyngitis with shallow mucosal/oral ulcers, generalized lymphadenopathy, erythematous maculopapular rash (trunk/face), myalgia/arthralgia, headache/aseptic meningitis, and diarrhea. Associated with explosive viral load (>1,000,000 copies/mL) and transient CD4 drop.', severity: 'moderate' },
                { name: 'Clinical Latency (Chronic Asymptomatic Stage)', description: 'Asymptomatic or oligosymptomatic state lasting 8-10 years on average without treatment. Active viral replication continues within lymphoid tissue. Persistent Generalized Lymphadenopathy (PGL, defined as enlarged nodes ≥1 cm at ≥2 extra-inguinal sites for >3 months) may be present.', severity: 'mild' },
                { name: 'Symptomatic Non-AIDS Stage (CDC Category B)', description: 'Appearance of immune impairment symptoms: persistent unexplained fever, night sweats, diarrhea >1 month, oral candidiasis (thrush), oral hairy leukoplakia (EBV), recurrent/multidermatomal herpes zoster, vulvovaginal candidiasis, cervical dysplasia, and peripheral neuropathy.', severity: 'moderate' },
                { name: 'Advanced HIV Disease (AHD) / AIDS Stage (CDC Category C / WHO Stage 4)', description: 'Defined by CD4 count <200 cells/µL or presence of AIDS-defining conditions: Opportunistic Infections (Pneumocystis jirovecii pneumonia, Cryptococcal meningitis, Toxoplasma encephalitis, CMV retinitis/colitis, Disseminated TB or MAC, Esophageal candidiasis, PML) and Malignancies (Kaposi sarcoma, Non-Hodgkin lymphoma, Primary CNS lymphoma, Invasive cervical cancer).', severity: 'severe' }
              ],
              physical_exam: [
                'Persistent Generalized Lymphadenopathy (PGL)',
                'Oral Cavity: Pseudomembranous oral candidiasis (scrapable white plaques), oral hairy leukoplakia (corrugated non-scrapable lateral tongue lesions), aphthous ulcers, Kaposi sarcoma palatal lesions',
                'Skin: Seborrheic dermatitis, Kaposi sarcoma (violaceous macules, papules, or nodules), molluscum contagiosum, multidermatomal herpes zoster, severe folliculitis',
                'Neurological: Focal deficits (Toxoplasma, Primary CNS Lymphoma, PML), nuchal rigidity/altered sensorium (Cryptococcal meningitis), distal symmetric polyneuropathy',
                'Constitutional: Cachexia (HIV wasting syndrome), fever, night sweats'
              ],
              complications: ['Pneumocystis jirovecii pneumonia (PCP)', 'Cryptococcal meningitis', 'Toxoplasma encephalitis', 'CMV retinitis / colitis / esophagitis', 'Disseminated TB / MAC', 'Kaposi sarcoma', 'Non-Hodgkin lymphoma / Primary CNS lymphoma', 'Progressive Multifocal Leukoencephalopathy (PML)', 'HIV-Associated Neurocognitive Disorder (HAND)', 'HIV-Associated Nephropathy (HIVAN)', 'Immune Reconstitution Inflammatory Syndrome (IRIS)']
            },
            diagnostics: {
              laboratory: [
                { test: 'CD4+ T-cell count & percentage', finding: 'Decreasing (<200 cells/µL = AHD / AIDS stage; <14%)', interpretation: 'Staging immunodeficiency, determining OI risk, and guiding OI primary prophylaxis' },
                { test: 'Complete Blood Count & CMP', finding: 'Anemia, leukopenia/lymphopenia, thrombocytopenia, elevated creatinine/BUN, transaminases', interpretation: 'Screening for cytopenias, organ dysfunction, baseline renal/hepatic function prior to ART' },
                { test: 'Metabolic & Cardiovascular Panel', finding: 'Fasting lipids, blood glucose, HbA1c', interpretation: 'Baseline assessment prior to ART initiation to manage long-term cardiometabolic risk' }
              ],
              microbiology: [
                { test: 'Screening test (4th generation HIV-1/2 Ag/Ab Combo ELISA/ECLIA)', finding: 'p24 antigen and HIV-1/2 antibody positive', significance: 'First-line screening test with short window period (2-3 weeks). Positive results require confirmatory testing!' },
                { test: 'Confirmatory test (HIV-1/HIV-2 differentiation immunoassay / NAT)', finding: 'Positive (differentiates HIV-1 vs HIV-2)', significance: 'Definitive diagnostic confirmation and virus typing' },
                { test: 'HIV RNA Quantitative PCR (Viral Load)', finding: 'Copies/mL', significance: 'Essential for diagnosing acute infection (p24+/Ab-), baseline assessment, and monitoring ART efficacy (target <50 copies/mL)' },
                { test: 'Genotypic Resistance Testing (GRT)', finding: 'Pre-treatment drug resistance mutations', significance: 'Mandatory for all newly diagnosed patients prior to ART initiation (testing RT, protease, and integrase genes)' },
                { test: 'HLA-B*5701 genetic screening', finding: 'Positive or Negative', significance: 'MANDATORY prior to prescribing Abacavir (ABC) (prevents severe, potentially fatal Abacavir Hypersensitivity Reaction!)' },
                { test: 'Co-infection screening package', finding: 'HBV (HBsAg, anti-HBs, anti-HBc), HCV (anti-HCV, HCV RNA), Syphilis (TPHA/RPR), STI NAAT, IGRA/TST for TB', significance: 'Comprehensive baseline screening required prior to starting ART' },
                { test: 'AHD Diagnostic Package (if CD4 <200 cells/µL or severe illness)', finding: 'Serum Cryptococcal Antigen LFA (CrAg LFA) + Urine TB-LAM', significance: 'Rapid point-of-care screening for occult cryptococcal disease and active tuberculosis' }
              ]
            },
            differential: [
              { disease: 'Mononucleosis (EBV / CMV)', distinguishing: 'Heterophile antibody positive (EBV), atypical lymphocytosis, negative 4th gen HIV Ag/Ab test' },
              { disease: 'Acute viral exanthems (HHV-6, Parvovirus B19, Enterovirus)', distinguishing: 'Negative HIV Ag/Ab test and viral load, lack of painful oral ulcers' },
              { disease: 'Secondary syphilis', distinguishing: 'Positive treponemal/non-treponemal serology (TPHA/RPR), palm/sole involvement of exanthem' },
              { disease: 'Influenza / COVID-19 / Acute Respiratory Infections', distinguishing: 'Respiratory symptoms dominate, positive NP PCR testing, negative HIV RNA' }
            ],
            therapy: {
              guidelines: ['EACS Guidelines Version 12.1 (2024)', 'DHHS Adult & Adolescent ART Guidelines (2024)', 'IAS-USA Panel Recommendations (2024)', 'WHO HIV Guidelines (2023/2024)', 'Deutsch-Österreichische Leitlinien (DÖAG 2024)'],
              empirical: {
                drug_classes: {
                  title: 'Antiretroviral Drug Classes (ART)',
                  drugs: [
                    { drug: 'INSTI (Integrase Transfer Inhibitors)', dose: '-', duration: '-', note: 'Preferred core class: highest genetic barrier to resistance, fastest viral load decay (Bictegravir, Dolutegravir, Cabotegravir, Raltegravir)' },
                    { drug: 'NRTI (Nucleoside/Nucleotide RT Inhibitors)', dose: '-', duration: '-', note: 'Backbone class: Tenofovir alafenamide (TAF), Tenofovir disoproxil fumarate (TDF), Emtricitabine (FTC), Lamivudine (3TC), Abacavir (ABC)' },
                    { drug: 'NNRTI (Non-Nucleoside RT Inhibitors)', dose: '-', duration: '-', note: 'Alternative class: Doravirine (DOR), Rilpivirine (RPV), Efavirenz (EFV)' },
                    { drug: 'PI (Protease Inhibitors)', dose: '-', duration: '-', note: 'Alternative/rescue class: Darunavir (DRV), Atazanavir (ATV) - boosted with Ritonavir (RTV) or Cobicistat (COBI)' },
                    { drug: 'Capsid Inhibitor (New Class)', dose: '-', duration: '-', note: 'Lenacapavir (LEN) - long-acting SC injection every 6 months for multidrug-resistant (MDR) HIV' },
                    { drug: 'Attachment & Entry Inhibitors', dose: '-', duration: '-', note: 'Fostemsavir (attachment inhibitor), Ibalizumab (monoclonal antibody), Maraviroc (CCR5 antagonist)' }
                  ]
                },
                combinations: {
                  title: 'First-Line Treatment Strategies (2024 Guidelines)',
                  drugs: [
                    { drug: '2 NRTI + 1 INSTI (3-drug regimen)', dose: '-', duration: '-', note: 'Gold standard initial therapy (e.g., BIC/TAF/FTC or DTG + TAF/FTC)' },
                    { drug: '1 NRTI + 1 INSTI (2-drug regimen)', dose: '-', duration: '-', note: 'Dolutegravir / Lamivudine (DTG/3TC) - preferred initial 2-drug regimen under specific baseline criteria' },
                    { drug: 'Long-Acting Injectable Maintenance ART', dose: '-', duration: '-', note: 'Cabotegravir + Rilpivirine (CAB/RPV) IM injection every 2 months for switch in stably suppressed patients (<50 copies/mL)' }
                  ]
                },
                regimens: {
                  title: 'Preferred Specific First-Line Regimens (EACS 12.1 & DHHS 2024)',
                  drugs: [
                    { drug: 'Bictegravir / Tenofovir alafenamide (TAF) / Emtricitabine (FTC)', dose: '1 tab (50/25/200mg) PO QD', duration: 'Lifelong', note: 'Preferred Single Tablet Regimen (STR, Biktarvy). Unsurpassed resistance barrier, no HLA testing required, effective regardless of baseline VL/CD4.' },
                    { drug: 'Dolutegravir + Tenofovir (TAF or TDF) + Emtricitabine (FTC) or Lamivudine (3TC)', dose: '50mg DTG + 1 tab TAF/FTC PO QD', duration: 'Lifelong', note: 'Preferred first-line regimen. High genetic barrier to resistance.' },
                    { drug: 'Dolutegravir / Lamivudine (DTG/3TC)', dose: '1 tab (50/300mg) PO QD', duration: 'Lifelong', note: 'Preferred 2-drug STR (Dovato). CONDITIONS: Baseline viral load <500,000 copies/mL, no active HBV co-infection, no known INSTI/NRTI resistance.' },
                    { drug: 'Dolutegravir / Abacavir / Lamivudine (DTG/ABC/3TC)', dose: '1 tab (50/600/300mg) PO QD', duration: 'Lifelong', note: 'Preferred STR (Triumeq) ONLY if HLA-B*5701 NEGATIVE and HBsAg NEGATIVE!' },
                    { drug: 'Cabotegravir + Rilpivirine (CAB/RPV IM Injection)', dose: 'IM injection every 2 months (after oral lead-in or direct IM)', duration: 'Lifelong', note: 'Maintenance switch regimen for virologically suppressed (<50 copies/mL for ≥6 mo) patients without prior treatment failure or resistance.' }
                  ]
                }
              },
              targeted: 'Rapid / Same-Day ART Initiation: ART should be initiated immediately on the day of diagnosis or as soon as possible for ALL people living with HIV ("Treat All"). Goal: Achieve viral suppression (<50 copies/mL) within 1-3 months, preserve immune function, prevent transmission (U=U), and reduce non-AIDS morbidity.',
              supportive: [
                'PCP Primary Prophylaxis: Indicated if CD4 <200 cells/µL or CD4% <14%. First-line: Trimethoprim-Sulfamethoxazole (TMP-SMX) 960mg PO QD (or 3x/week). Discontinue when CD4 >200 cells/µL for ≥3 months on ART.',
                'Toxoplasma Primary Prophylaxis: Indicated if CD4 <100 cells/µL AND Toxoplasma IgG positive. First-line: TMP-SMX 960mg PO QD (provides dual PCP/Toxo coverage). Discontinue when CD4 >200 cells/µL for ≥3 months on ART.',
                'Primary MAC Prophylaxis: Routine MAC prophylaxis is NO LONGER RECOMMENDED for patients starting ART immediately, regardless of CD4 count.',
                'Cryptococcal Disease Screening & Pre-emptive Therapy: Routine CrAg LFA screening if CD4 <200 cells/µL. If CrAg+, rule out meningitis; if asymptomatic, treat with Fluconazole 800mg/day for 2 weeks, then 400mg/day.',
                'Vaccinations: Pneumococcal (PCV15/PCV20 + PPSV23), Influenza (annual), HBV (40µg double dose if non-responder), HAV, HPV (up to age 26-45), Meningococcal, Recombinant Zoster Vaccine (RZV - Shingrix). Live vaccines (MMR, Varicella, Yellow Fever) CONTRAINDICATED if CD4 <200 cells/µL!'
              ],
              prevention: [
                'U=U (Undetectable = Untransmittable): People living with HIV who maintain an undetectable viral load (<50 copies/mL for ≥6 months) cannot sexually transmit HIV!',
                'PrEP (Pre-Exposure Prophylaxis): Daily oral TDF/FTC or TAF/FTC; event-driven "2-1-1" TDF/FTC for MSM. Long-acting injectable PrEP: Cabotegravir LA (every 2 months IM) or Lenacapavir (every 6 months SC).',
                'PEP (Post-Exposure Prophylaxis): Initiate within 72 hours (ideally <24h) post-exposure for 28 consecutive days. Preferred 3-drug regimen: TDF/FTC (or TAF/FTC) + Dolutegravir (or Bictegravir or Raltegravir).',
                'PMTCT (Prevention of Mother-to-Child Transmission): Universal pregnancy screening, immediate DTG-based ART, vaginal delivery if VL <50 copies/mL at 34-36 weeks (elective C-section if VL >50), infant PEP (Zidovudine or multi-drug ART).'
              ]
            },
            guidelines: {
              diagnosis: [
                'Screening: 4th generation HIV-1/2 Ag/Ab combination assay (p24 antigen + antibody).',
                'Confirmation: HIV-1/HIV-2 differentiation immunoassay or nucleic acid test (NAT).',
                'Pre-ART Baseline Workup: CD4 count & %, HIV RNA viral load, Genotypic resistance testing (GRT), HLA-B*5701 (before Abacavir), HBV/HCV serologies, Syphilis and STI screening, metabolic/renal/hepatic baseline.',
                'AHD Package (if CD4 <200 cells/µL or severe illness): Serum CrAg LFA (cryptococcal disease) and urine TB-LAM (tuberculosis).'
              ],
              treatment_indications: [
                'Universal Same-Day / Rapid ART Initiation: Universal recommendation to start ART as soon as possible after diagnosis regardless of CD4 count ("Treat All").',
                'Timing Exceptions in CNS Opportunistic Infections: In Cryptococcal Meningitis, defer ART by 2-6 weeks after antifungal start to prevent fatal intracranial IRIS. In TB Meningitis, defer ART by 2-8 weeks (or 2-4 weeks if CD4 <50) due to severe CNS IRIS risk.'
              ],
              first_line: [
                '1. Bictegravir / TAF / FTC (BIC/TAF/FTC - preferred 3-drug STR)',
                '2. Dolutegravir + TAF/FTC or TDF/FTC (preferred 3-drug regimen)',
                '3. Dolutegravir / Lamivudine (DTG/3TC - preferred 2-drug STR if VL <500,000 copies/mL and HBV negative)',
                '4. Dolutegravir / ABC / 3TC (if HLA-B*5701 negative and HBV negative)',
                '5. Cabotegravir + Rilpivirine (CAB/RPV IM injection - maintenance switch in suppressed patients)'
              ],
              monitoring: [
                'Plasma Viral Load: Measured at 1, 3, and 6 months post-ART initiation or switch, then every 6 months once suppressed (<50 copies/mL).',
                'CD4 Count: Measured every 3-6 months initially; if viral load remains suppressed (<50 copies/mL) and CD4 >350 cells/µL for ≥1-2 years, routine CD4 monitoring can be safely discontinued.'
              ],
              special_populations: [
                'Pregnancy: DTG-based 3-drug ART preferred throughout pregnancy (neural tube defect risk proved unfounded).',
                'TB Coinfection: Initiate ART within 2 weeks of TB therapy if CD4 <50, or within 2-8 weeks if CD4 ≥50. Double Dolutegravir dose to 50mg BID when co-administered with Rifampin!',
                'HBV Coinfection: Regimen MUST contain TAF/FTC, TDF/FTC, or TDF/3TC to treat both viruses and prevent HBV flare (never use 3TC alone).',
                'Renal Impairment: TAF preferred over TDF if eGFR <60 mL/min or osteopenia/osteoporosis present.'
              ]
            },
            prognosis: {
              mortality: 'With early diagnosis and adherent ART, life expectancy approaches that of the general uninfected population; untreated Advanced HIV Disease / AIDS carries high mortality from opportunistic infections and malignancies.',
              prognostic_scores: ['CD4+ T-cell count and percentage', 'Plasma HIV RNA viral load', 'AHD status / presence of active opportunistic infections', 'VACS Index (Veterans Aging Cohort Study Index)'],
              factors: 'Medication adherence (most critical factor), early diagnosis before severe immune depletion, prompt ART initiation, sustained viral suppression, effective management of non-AIDS comorbidities (cardiovascular, renal, hepatic, metabolic).'
            }
          },
          {
            id: 'gonorrhea',
            name: 'Gonorrhea',
            pathogen: { type: 'Bacterium', name: '<i>Neisseria gonorrhoeae</i>', gram: 'Gram-negative', shape: 'diplococcus (intracellular)' },
            epidemiology: {
              incidence: 'High worldwide prevalence; rapidly emerging antimicrobial resistance (MDR/XDR strains)',
              risk_groups: ['Sexually active young adults (<25 years)', 'MSM (men who have sex with men)', 'Persons with new or multiple sexual partners', 'Inconsistent condom users'],
              seasonality: 'None',
              transmission: 'Sexual contact (vaginal, anal, oral), vertical (perinatal ophthalmia neonatorum)'
            },
            pathomechanism: {
              steps: [
                'Adhesion & Colonization: Pili (fimbriae) and Opa (opacity) outer membrane proteins mediate attachment to columnar non-ciliated epithelial cells of the urethra, cervix, rectum, or pharynx.',
                'Invasion & Transcytosis: Bacteria trigger parasite-specified receptor-mediated endocytosis, surviving intracellularly and transcytosing to subepithelial tissues.',
                'Immune Evasion & Inflammation: Lipooligosaccharide (LOS) endotoxin triggers severe pyogenic host immune response. Phase variation of surface antigens and IgA1 protease cleavage evade adaptive mucosal immunity.',
                'Tissue Damage: Intensive neutrophil recruitment results in tissue destruction, microabscess formation, and profuse purulent discharge.'
              ],
              virulence_factors: ['Pili (adhesion, antigenic variation)', 'Opa & OmpA proteins (host cell binding)', 'LOS (endotoxin, pyogenic response)', 'IgA1 protease (mucosal immune cleavage)', 'PorB porins (inhibit phagolysosome fusion)']
            },
            clinical: {
              incubation: '2-7 days (range 1-14 days)',
              onset: 'Acute',
              symptoms: [
                { name: 'Men: Acute Anterior Urethritis', description: 'Abrupt onset of profuse, purulent, yellowish-green urethral discharge and severe dysuria (>90% symptomatic). Epididymitis or testicular pain may occur.', severity: 'moderate' },
                { name: 'Women: Cervicitis', description: '50% of women are asymptomatic. Symptomatic cases present with purulent vaginal/cervical discharge, intermenstrual bleeding, and dysuria. May ascend to cause Pelvic Inflammatory Disease (PID).', severity: 'moderate' },
                { name: 'Anorectal & Pharyngeal Infection', description: 'Anorectal: purulent discharge, tenesmus, rectal pain, or bleeding (50% asymptomatic). Pharyngeal: mostly asymptomatic (90%), or mild sore throat and cervical lymphadenopathy.', severity: 'moderate' },
                { name: 'Disseminated Gonococcal Infection (DGI)', description: 'Bacteremic spread resulting in classic triad: tenosynovitis, polyarthralgias, and acral purpuric/pustular skin lesions. Or purulent septic arthritis without skin lesions.', severity: 'severe' }
              ],
              physical_exam: [
                'Men: Copious purulent urethral discharge, urethral meatal erythema/edema',
                'Women: Mucopurulent cervical discharge, cervical motion tenderness (if PID), friable cervix',
                'DGI: Purpuric or pustular skin lesions on extremities, swollen erythematous joints (wrist, knee, ankle)'
              ],
              complications: ['Pelvic Inflammatory Disease (PID)', 'Tubal factor infertility', 'Ectopic pregnancy', 'Epididymoorchitis', 'Disseminated Gonococcal Infection (DGI)', 'Ophthalmia neonatorum']
            },
            diagnostics: {
              laboratory: [
                { test: 'Routine CBC & CRP', finding: 'Leukocytosis and elevated CRP in DGI or severe PID', interpretation: 'Systemic inflammatory monitoring' }
              ],
              microbiology: [
                { test: 'NAAT (Nucleic Acid Amplification Test)', finding: 'Positive for N. gonorrhoeae DNA/RNA', significance: 'Gold standard for diagnosis (first-void urine in men, self-collected vaginal swab or endocervical swab in women; pharyngeal/rectal swabs for MSM)' },
                { test: 'Gram Stain / Microscopy', finding: 'Intracellular Gram-negative diplococci inside polymorphonuclear leukocytes (PMNs)', significance: 'Diagnostic in symptomatic men (sensitivity >95%); lower sensitivity in women (50-60%) or pharyngeal samples' },
                { test: 'Culture & Antimicrobial Susceptibility Testing (AST)', finding: 'Growth on Thayer-Martin medium with MIC susceptibility profile', significance: 'MANDATORY for suspected treatment failure, antimicrobial resistance surveillance, or medico-legal cases' }
              ]
            },
            differential: [
              { disease: 'Chlamydia trachomatis urethritis/cervicitis', distinguishing: 'Longer incubation (1-3 weeks), clear/mucoid discharge, milder symptoms' },
              { disease: 'Mycoplasma genitalium', distinguishing: 'Persistent urethritis despite ceftriaxone, requires specific NAAT' },
              { disease: 'Trichomoniasis', distinguishing: 'Frothy yellow-green discharge, vaginal pH >4.5, wet mount/NAAT positive' },
              { disease: 'Septic arthritis (Staph/Strep)', distinguishing: 'Monoarticular, no skin papules, negative genital STI NAAT' }
            ],
            therapy: {
              guidelines: ['CDC STI Treatment Guidelines (2021/2024)', 'IUSTI European Gonorrhea Guideline (2020/2024)'],
              empirical: {
                outpatient: [
                  { drug: 'Ceftriaxone', dose: '500 mg IM (1g IM if body weight ≥150 kg)', duration: 'Single dose', note: 'First-line monotherapy according to CDC 2021/2024. European (IUSTI) regimen recommends Ceftriaxone 1g IM single dose.' },
                  { drug: 'Co-treatment for Chlamydia (if not excluded)', dose: 'Doxycycline 100 mg PO BID', duration: '7 days', note: 'Add Doxycycline if Chlamydia infection has not been ruled out!' },
                  { drug: 'Ceftriaxone Allergy Alternative: Gentamicin + Azithromycin', dose: 'Gentamicin 240 mg IM + Azithromycin 2g PO', duration: 'Single dose', note: 'Recommended alternative in severe cephalosporin/penicillin allergy.' },
                  { drug: 'Oral Cephalosporin Alternative: Cefixime', dose: '800 mg PO', duration: 'Single dose', note: 'Second-line oral alternative if IM Ceftriaxone unavailable (+ Doxycycline 100mg BID x 7d if chlamydia not excluded).' }
                ],
                inpatient: [
                  { drug: 'Ceftriaxone (Inpatient DGI)', dose: '1 g IV/IM every 24 hours', duration: '7 days', note: 'First-line treatment for Disseminated Gonococcal Infection (DGI).' }
                ]
              },
              targeted: 'Therapy should be adjusted based on culture and susceptibility testing if available. High vigilence for cephalosporin-resistant strains.',
              supportive: ['Abstinence from sexual activity for 7 days post-treatment and until partners are treated', 'Mandatory notification and treatment of all sexual partners within past 60 days', 'Test of Cure (TOC) required at 7-14 days for pharyngeal infection or if alternative regimens used'],
              prevention: ['Condom use', 'Screening in high-risk groups', 'Expedited Partner Therapy (EPT) where legally permitted']
            },
            guidelines: {
              diagnosis: [
                'First-line diagnostic method: NAAT (first-void urine in men, vaginal/cervical swabs in women, plus rectal and pharyngeal swabs based on sexual history).',
                'Gram stain microscopy: Highly sensitive and specific for symptomatic male urethritis.',
                'Culture and AST: Mandatory in persistent symptoms, suspected treatment failure, or high-risk epidemiologic settings.'
              ],
              treatment_indications: [
                'All individuals with positive NAAT, culture, or Gram stain for N. gonorrhoeae.',
                'Presumptive treatment for sexual partners within past 60 days.'
              ],
              first_line: [
                'Uncomplicated Gonorrhea (Cervix, Urethra, Rectum, Pharynx): Ceftriaxone 500 mg IM single dose (1g IM if ≥150 kg or IUSTI guideline).',
                'Plus Doxycycline 100 mg PO BID for 7 days if Chlamydia coinfection has not been excluded.',
                'Disseminated Gonococcal Infection (DGI): Ceftriaxone 1 g IV/IM daily for at least 7 days.'
              ],
              special_populations: [
                'Cephalosporin Allergy: Gentamicin 240 mg IM single dose + Azithromycin 2g PO single dose.',
                'Pregnancy: Ceftriaxone 500 mg IM single dose + Azithromycin 1g PO single dose (if chlamydia coinfection present; avoid Doxycycline!).',
                'Ophthalmia Neonatorum: Ceftriaxone 25-50 mg/kg IV/IM single dose (max 125 mg).'
              ],
              monitoring: [
                'Test of Cure (TOC): Recommended for pharyngeal gonorrhea (NAAT at 14 days or culture at 3-7 days) and cases treated with alternative non-ceftriaxone regimens.',
                'Repeat screening: All patients should be retested 3 months after treatment to detect reinfection.'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021/2024',
                'IUSTI: European guideline on the diagnosis and management of gonorrhea in adults (2020/2024)'
              ]
            },
            prognosis: {
              mortality: 'Extremely low mortality; morbidity stems from untreated upper genital tract disease (PID, ectopic pregnancy, infertility) or DGI.',
              prognostic_scores: ['Antimicrobial susceptibility profile'],
              factors: 'Prompt effective antibiotic treatment, partner co-treatment, adherence to follow-up testing'
            }
          },
          {
            id: 'chlamydia',
            name: 'Chlamydia Infection',
            pathogen: { type: 'Bacterium', name: '<i>Chlamydia trachomatis</i> (Serovars D-K, L1-L3)', gram: 'Gram-negative (obligate intracellular)', shape: 'coccoid' },
            epidemiology: {
              incidence: 'Most prevalent bacterial STI globally (~128 million annual cases globally)',
              risk_groups: ['Sexually active females <25 years of age', 'Persons with new or multiple sexual partners', 'MSM', 'Prior history of STI'],
              seasonality: 'None',
              transmission: 'Sexual contact (vaginal, anal, oral), vertical (perinatal transmission during delivery)'
            },
            pathomechanism: {
              steps: [
                'Infectious Biphasic Life Cycle: Extracellular infectious Elementary Bodies (EBs) adhere to and enter columnar mucosal epithelial cells.',
                'Intracellular Replication: Inside host cell inclusions, EBs differentiate into metabolically active, non-infectious Reticulate Bodies (RBs) which replicate by binary fission.',
                'Redifferentiation & Lysis: RBs differentiate back into EBs; host cell lysis releases EBs to infect adjacent cells.',
                'Fibrotic Tissue Destruction: Persistent low-grade mucosal inflammation triggers host immune-mediated tissue destruction, scarring, and tubal occlusion.'
              ],
              virulence_factors: ['Obligate intracellular persistence', 'Heat shock protein 60 (Hsp60, induces chronic fibrotic inflammation)', 'Type III secretion system (T3SS)', 'Type-specific MOMP antigens']
            },
            clinical: {
              incubation: '1-3 weeks (range 5-21 days)',
              onset: 'Gradual, insidious, or completely asymptomatic',
              symptoms: [
                { name: 'Asymptomatic Infection ("Silent Epidemic")', description: '70-80% of infected women and 50% of infected men are completely asymptomatic, serving as silent reservoirs.', severity: 'mild' },
                { name: 'Women: Cervicitis & Urethritis', description: 'Mucopurulent endocervical discharge, cervical friability (easy bleeding on swabbing), intermenstrual or post-coital spotting, dysuria, and pelvic pain.', severity: 'moderate' },
                { name: 'Men: Non-Gonococcal Urethritis (NGU)', description: 'Scant to moderate watery or mucoid (clear) urethral discharge, mild dysuria, urethral pruritus. Epididymitis (unilateral scrotal pain/swelling).', severity: 'moderate' },
                { name: 'Lymphogranuloma Venereum (LGV - Serovars L1-L3)', description: 'Transient painless genital ulcer followed by painful, unilateral, matted inguinal lymphadenopathy ("buboes") with groove sign, or severe hemorrhagic proctocolitis in MSM.', severity: 'severe' }
              ],
              physical_exam: [
                'Women: Mucopurulent endocervical discharge, cervical friability/erythema, cervical motion tenderness (if PID)',
                'Men: Clear or mucoid urethral discharge, epididymal tenderness',
                'LGV: Painful matted inguinal lymphadenopathy (buboes), groove sign, or ulcerative proctitis'
              ],
              complications: ['Pelvic Inflammatory Disease (PID)', 'Tubal factor infertility', 'Ectopic pregnancy', 'Fitz-Hugh-Curtis syndrome (perihepatitis)', 'Reactive Arthritis (Triad: urethritis, conjunctivitis, arthritis)', 'Neonatal inclusion conjunctivitis & interstitial pneumonia']
            },
            diagnostics: {
              laboratory: [
                { test: 'Urinalysis / WBC', finding: 'Sterile pyuria (WBCs present without bacterial growth on standard culture)', interpretation: 'Classic sign of C. trachomatis or Ureaplasma urethritis' }
              ],
              microbiology: [
                { test: 'NAAT (Nucleic Acid Amplification Test)', finding: 'Positive for C. trachomatis DNA/RNA', significance: 'Gold standard (first-catch urine in men; self-collected vaginal swab or endocervical swab in women; rectal swab for MSM)' },
                { test: 'LGV Genotyping (PCR)', finding: 'Identification of L1, L2, or L3 serovars', significance: 'Indicated for ulcerative proctitis or suppurative buboes (requires 21-day treatment course)' }
              ]
            },
            differential: [
              { disease: 'Neisseria gonorrhoeae', distinguishing: 'Shorter incubation (2-7 days), copious purulent discharge, Gram-negative diplococci on Gram stain' },
              { disease: 'Mycoplasma genitalium', distinguishing: 'Persistent NGU after Doxycycline, requires specific M. genitalium NAAT' },
              { disease: 'Trichomoniasis', distinguishing: 'Frothy yellow-green discharge, vaginal pH >4.5, motile protozoa' },
              { disease: 'Herpes Simplex Virus', distinguishing: 'Painful clustered vesicles/ulcers rather than urethral discharge' }
            ],
            therapy: {
              guidelines: ['CDC STI Treatment Guidelines (2021/2024)', 'IUSTI European Chlamydia Guideline (2020/2024)'],
              empirical: {
                outpatient: [
                  { drug: 'Doxycycline', dose: '100 mg PO BID', duration: '7 days', note: 'First-line therapy for uncomplicated genital, rectal, and pharyngeal chlamydia (updated in CDC 2021 due to superior efficacy over Azithromycin, especially for rectal infection).' },
                  { drug: 'Azithromycin (Second-line / Pregnancy)', dose: '1 g PO single dose', duration: 'Single dose', note: 'Alternative option; first-line choice in pregnant women or when adherence to 7-day Doxycycline is unlikely.' },
                  { drug: 'LGV Regimen (Serovars L1-L3)', dose: 'Doxycycline 100 mg PO BID', duration: '21 days', note: 'Extended 21-day course required for Lymphogranuloma Venereum (LGV).' },
                  { drug: 'Pregnancy First-Line Alternative', dose: 'Amoxicillin 500 mg PO TID', duration: '7 days', note: 'First-line alternative in pregnant women if Azithromycin not tolerated.' }
                ]
              },
              targeted: 'Doxycycline 100mg BID for 7 days is preferred for all non-pregnant adults.',
              supportive: ['Abstinence from sexual intercourse for 7 days after starting therapy and until partners are treated', 'Mandatory notification and treatment of all sexual partners within past 60 days', 'Screening for co-existing STIs (HIV, Syphilis, Gonorrhea)'],
              prevention: ['Condom use', 'Annual screening for all sexually active women <25 years and older women with risk factors', 'Expedited Partner Therapy (EPT)']
            },
            guidelines: {
              diagnosis: [
                'NAAT is the mandatory diagnostic gold standard (first-catch urine for males, self-collected vaginal swab for females).',
                'Rectal NAAT screening is strongly recommended for all individuals engaging in receptive anal intercourse.',
                'Serology is NOT recommended for diagnosing acute chlamydial genital infection.'
              ],
              treatment_indications: [
                'All individuals with positive NAAT for C. trachomatis.',
                'Presumptive treatment for sexual partners within preceding 60 days.',
                'Presumptive treatment in clinical syndromes (mucopurulent cervicitis, NGU, PID).'
              ],
              first_line: [
                'Non-pregnant adults (Urethral, Cervical, Rectal, Pharyngeal): Doxycycline 100 mg PO BID for 7 days.',
                'Lymphogranuloma Venereum (LGV): Doxycycline 100 mg PO BID for 21 days.'
              ],
              special_populations: [
                'Pregnancy: Azithromycin 1 g PO single dose OR Amoxicillin 500 mg PO TID for 7 days (Doxycycline is CONTRAINDICATED in pregnancy!).',
                'Neonatal Conjunctivitis/Pneumonia: Erythromycin base/ethylsuccinate 50 mg/kg/day PO divided in 4 doses for 14 days OR Azithromycin 20 mg/kg/day PO QD for 3 days.'
              ],
              monitoring: [
                'Test of Cure (TOC): NOT recommended for non-pregnant patients treated with first-line Doxycycline. MANDATORY in pregnant women (3-4 weeks post-treatment).',
                'Repeat Screening: All treated patients should undergo repeat NAAT screening 3 months after treatment due to high rates of reinfection.'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021/2024',
                'IUSTI: European guideline on the management of Chlamydia trachomatis infections (2020/2024)'
              ]
            },
            prognosis: {
              mortality: 'Extremely low; primary morbidity relates to chronic pelvic pain, ectopic pregnancy, and tubal factor infertility from ascending infection.',
              prognostic_scores: ['NAAT re-testing at 3 months'],
              factors: 'Early diagnosis, compliance with 7-day Doxycycline course, partner co-treatment'
            }
          },
          {
            id: 'genital_herpes',
            name: 'Genital Herpes',
            pathogen: { type: 'Virus', name: '<i>Herpes Simplex Virus</i> (HSV-2 predominant, HSV-1 increasing)', gram: 'Enveloped dsDNA virus', shape: 'spherical' },
            epidemiology: {
              incidence: 'High global prevalence (~500 million people living with HSV-2; HSV-1 causing increasing primary genital cases in young adults)',
              risk_groups: ['Sexually active adults', 'Multiple sexual partners', 'Persons with immunocompromising conditions', 'Female gender (higher susceptibility)'],
              seasonality: 'None',
              transmission: 'Direct mucosal or skin contact with active lesions or via asymptomatic viral shedding'
            },
            pathomechanism: {
              steps: [
                'Primary Mucosal Infection: HSV enters micro-abrasions in mucosal or cutaneous epithelium, replicating locally and causing lytic cell destruction (ballooning degeneration, multinucleated giant cells, focal ulceration).',
                'Neuroinvasion & Latency: Viral capsids enter sensory nerve endings and undergo retrograde axonal transport to sacral dorsal root ganglia (S2-S4), establishing lifelong latent infection in neuronal cell bodies.',
                'Reactivation & Recurrence: Under conditions of stress, immunosuppression, fever, or tissue injury, latent HSV reactivates, undergoing anterograde transport back to epithelial surfaces.',
                'Asymptomatic Shedding: Viral replication and release can occur at mucosal sites in the absence of visible cutaneous lesions, accounting for the majority of transmissions.'
              ],
              virulence_factors: ['Lifelong neurotropism and neuronal latency', 'Glycoprotein gD / gB (host cell entry)', 'ICP47 (inhibits TAP transporter, blocking MHC-I antigen presentation)', 'MicroRNA suppression of viral gene expression']
            },
            clinical: {
              incubation: '2-12 days (average 4 days)',
              onset: 'Sudden for primary episode; preceded by prodrome for recurrences',
              symptoms: [
                { name: 'First Episode Primary Genital Herpes', description: 'Severe local and systemic illness: painful, clustered vesicles on an erythematous base that rapidly rupture into shallow, tender ulcers. Accompanied by fever, headache, myalgias, painful inguinal lymphadenopathy, and severe dysuria (may cause urinary retention). Duration: 2-3 weeks.', severity: 'severe' },
                { name: 'Recurrent Genital Herpes', description: 'Milder and shorter (5-10 days). Preceded by prodromal tingling, itching, or burning in the sacral/genital region. Unilateral clustered vesicles/ulcers without systemic symptoms.', severity: 'mild' },
                { name: 'Asymptomatic / Subclinical Infection', description: 'Most HSV-2 infected individuals (>80%) have unrecognised or subclinical disease, yet periodically shed virus.', severity: 'mild' }
              ],
              physical_exam: [
                'Clustered fluid-filled vesicles on an erythematous base or tender punched-out shallow ulcers',
                'Tender bilateral inguinal lymphadenopathy (primary episode)',
                'Aseptic meningeal signs (nuchal rigidity, photophobia) or urinary retention (sacral radiculopathy)'
              ],
              complications: ['Urinary retention (sacral autonomic neuropathy / Elsberg syndrome)', 'Aseptic meningitis', 'Neonatal herpes (high risk with primary acquisition in 3rd trimester)', 'Increased risk of HIV acquisition and transmission (2-3 fold higher)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Routine CBC & Urinalysis', finding: 'Normal or mild lymphocytosis; evaluate for acute urinary retention', interpretation: 'Symptomatic workup' }
              ],
              microbiology: [
                { test: 'HSV Type-Specific PCR', finding: 'Positive for HSV-1 or HSV-2 DNA', significance: 'Gold standard diagnostic method (highest sensitivity and specificity; differentiates HSV-1 vs HSV-2)' },
                { test: 'Viral Culture', finding: 'Isolation of HSV virus', significance: 'Low sensitivity, rapidly declines as lesions heal or crust' },
                { test: 'Type-Specific Serology (gG1 / gG2 Glycoprotein IgG)', finding: 'Positive HSV-1 or HSV-2 IgG', significance: 'Indicated for diagnosing recurrent lesions without positive PCR, evaluating partners, or risk assessment in pregnancy (NOT for screening general asymptomatic population)' }
              ]
            },
            differential: [
              { disease: 'Primary Syphilis (Chancre)', distinguishing: 'Painless, single indurated ulcer with non-tender adenopathy' },
              { disease: 'Chancroid (H. ducreyi)', distinguishing: 'Painful, deep ulcer with undermined edges and suppurative inguinal bubo' },
              { disease: 'Non-infectious genital ulcers (Behcet disease, aphthous)', distinguishing: 'Recurrent oral/genital aphthae, negative HSV PCR, autoimmune features' }
            ],
            therapy: {
              guidelines: ['CDC STI Treatment Guidelines (2021/2024)', 'IUSTI European Genital Herpes Guideline (2020/2024)'],
              empirical: {
                outpatient: [
                  { drug: 'Valacyclovir (First Episode Primary)', dose: '1000 mg PO BID', duration: '7-10 days', note: 'Preferred due to superior oral bioavailability and twice-daily dosing.' },
                  { drug: 'Acyclovir (First Episode Primary)', dose: '400 mg PO TID (or 200 mg PO 5x/day)', duration: '7-10 days', note: 'First-line alternative.' },
                  { drug: 'Famciclovir (First Episode Primary)', dose: '250 mg PO TID', duration: '7-10 days', note: 'First-line alternative.' },
                  { drug: 'Valacyclovir (Recurrent Episodic Therapy)', dose: '500 mg PO BID for 3 days OR 1000 mg PO QD for 5 days', duration: '3-5 days', note: 'Initiate at first sign of prodrome or lesion outbreak.' },
                  { drug: 'Suppressive Antiviral Therapy', dose: 'Valacyclovir 500 mg PO QD (or 1000 mg QD) OR Acyclovir 400 mg PO BID', duration: 'Continuous daily', note: 'Indicated for patients with frequent recurrences (≥6 episodes/year) or to reduce transmission to discordant partners.' }
                ],
                inpatient: [
                  { drug: 'Acyclovir (Severe / Complicated HSV)', dose: '5-10 mg/kg IV every 8 hours', duration: '2-7 days or until clinical improvement', note: 'Indicated for disseminated infection, HSV encephalitis, meningitis, or severe urinary retention.' }
                ]
              },
              targeted: 'Antiviral therapy (Acyclovir, Valacyclovir, Famciclovir) inhibits viral DNA polymerase. Treatment does not eradicate latent virus from nerve ganglia.',
              supportive: ['Analgesics (NSAIDs, topical lidocaine 2% gel)', 'Warm saline sitz baths for severe dysuria', 'Catherization if urinary retention occurs'],
              prevention: ['Condom use (reduces transmission but not 100% protective)', 'Sexual abstinence during prodrome and active outbreak', 'Daily suppressive antiviral therapy (reduces viral shedding by 70-80% and transmission to susceptible partner by 50%)']
            },
            guidelines: {
              diagnosis: [
                'Type-specific HSV PCR swab from active ulcer base is the gold standard.',
                'Type-specific serology (gG-based IgG) should be used to differentiate HSV-1 from HSV-2 when direct swab testing is negative.'
              ],
              treatment_indications: [
                'All patients with a first clinical episode of genital herpes should receive antiviral therapy.',
                'Recurrent episodes: Episodic self-initiated therapy at prodrome OR continuous daily suppressive therapy.'
              ],
              first_line: [
                'Primary First Episode: Valacyclovir 1000 mg PO BID for 7-10 days.',
                'Recurrent Episodic: Valacyclovir 500 mg PO BID for 3 days.',
                'Suppressive Therapy: Valacyclovir 500 mg PO QD (or 1000 mg QD if ≥10 outbreaks/year).'
              ],
              special_populations: [
                'Pregnancy: Suppressive Acyclovir (400 mg PO TID) or Valacyclovir (500 mg PO BID) starting at 36 weeks gestation to prevent clinical outbreaks at delivery. Elective Cesarean delivery indicated if active genital lesions present at onset of labor.',
                'HIV Coinfection: Requires higher doses or longer duration of episodic treatment (e.g., Valacyclovir 1000 mg PO BID for 5-10 days).'
              ],
              monitoring: [
                'Evaluate efficacy of suppressive therapy annually; consider trial of discontinuation to reassess underlying recurrence frequency.'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021/2024',
                'IUSTI: European guideline for the management of genital herpes (2020/2024)'
              ]
            },
            prognosis: {
              mortality: 'Extremely low in immunocompetent adults; severe mortality in untreated neonatal herpes.',
              prognostic_scores: ['Annual outbreak frequency tracking'],
              factors: 'HSV type (HSV-2 has much higher recurrence rate than HSV-1), immunocompetence, early initiation of therapy'
            }
          },
          {
            id: 'trichomoniasis',
            name: 'Trichomoniasis',
            pathogen: { type: 'Protozoan', name: '<i>Trichomonas vaginalis</i>', gram: '-', shape: 'pear-shaped flagellated protozoan' },
            epidemiology: {
              incidence: 'Most prevalent non-viral STI worldwide (~156 million cases globally)',
              risk_groups: ['Sexually active women', 'Persons with multiple sexual partners', 'Persons with history of other STIs', 'Incarcerated populations'],
              seasonality: 'None',
              transmission: 'Sexual intercourse (vaginal-penile, vaginal-vaginal); non-sexual transmission is extremely rare'
            },
            pathomechanism: {
              steps: [
                'Adhesion & Mechanical Damage: Motile flagellated trophozoites adhere to squamous epithelial cells of the lower urogenital tract (vagina, urethra, Paraurethral glands).',
                'Cytotoxicity & Micro-ulceration: Secretion of cysteine proteinases, cell-detaching factors, and pore-forming proteins causes epithelial cell lysis and petechial micro-hemorrhages.',
                'Disruption of Vaginal Microbiome: Parasite infection consumes glycogen and lactobacilli, causing vaginal pH to elevate (>4.5) and promoting inflammatory leukorrhea.'
              ],
              virulence_factors: ['Surface adhesins (AP65, AP51)', 'Cysteine proteinases (CP30)', 'Trichomonas vaginalis virus (TVV, enhances mucosal inflammation)', 'Lipophosphoglycan (LPG)']
            },
            clinical: {
              incubation: '4-28 days',
              onset: 'Gradual or abrupt',
              symptoms: [
                { name: 'Women: Vulvovaginitis', description: 'Profuse, frothy, yellowish-green, foul-smelling ("fishy") vaginal discharge, intense vulvovaginal pruritus, dyspareunia, and dysuria. Vaginal pH >4.5.', severity: 'moderate' },
                { name: 'Men: Urethritis', description: '70-80% of infected men are asymptomatic transient carriers. Symptomatic men present with mild urethral discharge (glassy/clear), dysuria, or urethral pruritus.', severity: 'mild' },
                { name: 'Strawberry Cervix (Colpitis Macularis)', description: 'Classic punctate petechial hemorrhages on the cervix visible in ~2-5% of cases on speculum examination (pathognomonic).', severity: 'moderate' }
              ],
              physical_exam: [
                'Frothy, yellow-green vaginal discharge pooling in posterior fornix',
                'Erythematous vulvovaginal mucosa',
                'Strawberry cervix (punctate cervical petechiae)',
                'Vaginal pH test >4.5'
              ],
              complications: ['Adverse pregnancy outcomes (preterm labor, premature rupture of membranes, low birth weight)', 'Increased susceptibility to HIV acquisition and transmission (2-fold higher)', 'Pelvic Inflammatory Disease (PID)']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vaginal pH measurement', finding: 'pH > 4.5', interpretation: 'Consistent with Trichomoniasis or Bacterial Vaginosis' },
                { test: 'Amine "Whiff" Test (10% KOH)', finding: 'May be positive (fishy odor)', interpretation: 'Non-specific, seen in both TV and BV' }
              ],
              microbiology: [
                { test: 'NAAT (Nucleic Acid Amplification Test)', finding: 'Positive for T. vaginalis RNA/DNA', significance: 'Gold standard (highest sensitivity 95-100%; performed on vaginal swabs, urine, or liquid-based cytology)' },
                { test: 'Wet Mount Microscopy', finding: 'Motile, flagellated pear-shaped protozoa with jerky motion and WBCs', significance: 'Rapid, point-of-care test, but low sensitivity (50-60%); must be examined within 10-15 minutes of collection!' },
                { test: 'Culture (InPouch TV / Diamond medium)', finding: 'Growth of T. vaginalis', significance: 'Highly specific alternative if NAAT unavailable' }
              ]
            },
            differential: [
              { disease: 'Bacterial Vaginosis (BV)', distinguishing: 'Thin homogeneous grayish discharge, clue cells on wet mount, no motile protozoa, absent mucosal inflammation' },
              { disease: 'Vulvovaginal Candidiasis', distinguishing: 'Thick curdy "cottage-cheese" discharge, normal pH (<4.5), pseudohyphae on KOH mount, severe itching' },
              { disease: 'Chlamydia or Gonococcal cervicitis', distinguishing: 'Endocervical purulent discharge, negative wet mount for protozoa, positive specific NAAT' }
            ],
            therapy: {
              guidelines: ['CDC STI Treatment Guidelines (2021/2024)', 'IUSTI European Trichomoniasis Guideline (2020/2024)'],
              empirical: {
                outpatient: [
                  { drug: 'Metronidazole (First-line for Women)', dose: '500 mg PO BID', duration: '7 days', note: 'UPDATED in CDC 2021: 7-day multi-dose Metronidazole is superior to 2g single dose in women (reduces treatment failure rate by 50%).' },
                  { drug: 'Metronidazole (First-line for Men)', dose: '2 g PO single dose OR 500 mg PO BID for 7 days', duration: 'Single dose or 7 days', note: 'Single dose 2g remains acceptable for men.' },
                  { drug: 'Tinidazole (Alternative)', dose: '2 g PO single dose', duration: 'Single dose', note: 'First-line alternative with better tolerability.' }
                ]
              },
              targeted: '5-nitroimidazole class (Metronidazole or Tinidazole) is mandatory. Topical intravaginal nitroimidazoles are INEFFECTIVE and contraindicated due to failure to achieve therapeutic tissue levels in urethra/skene glands.',
              supportive: ['Strict abstinence from alcohol during treatment and for 24h post-metronidazole (48h post-tinidazole) to prevent disulfiram-like reaction', 'Mandatory concurrent treatment of all sexual partners', 'Abstinence from sexual intercourse until both partners complete treatment and symptoms resolve'],
              prevention: ['Condom use', 'Mandatory partner co-treatment', 'Screening in high-risk women (HIV-infected, incarcerated)']
            },
            guidelines: {
              diagnosis: [
                'NAAT is the gold standard diagnostic test.',
                'Wet mount microscopy should be performed immediately if NAAT is unavailable, but negative wet mount requires confirmation with NAAT or culture.'
              ],
              treatment_indications: [
                'All individuals (symptomatic or asymptomatic) with positive diagnostic test for T. vaginalis.',
                'All sexual partners must be treated simultaneously to prevent reinfection.'
              ],
              first_line: [
                'Women: Metronidazole 500 mg PO BID for 7 days.',
                'Men: Metronidazole 2 g PO single dose OR 500 mg PO BID for 7 days.',
                'Alternative: Tinidazole 2 g PO single dose.'
              ],
              special_populations: [
                'Pregnancy: Metronidazole 500 mg PO BID for 7 days is safe at any stage of pregnancy (symptomatic women should be treated to prevent adverse birth outcomes).',
                'HIV-Infected Women: Metronidazole 500 mg PO BID for 7 days is mandatory.',
                'Metronidazole Allergy / Treatment Failure: High-dose Tinidazole (2g PO QD for 7 days) or Metronidazole (2g PO QD for 7 days) after ruling out reinfection; consider CDC/IUSTI resistance testing.'
              ],
              monitoring: [
                'Retesting: All sexually active women treated for trichomoniasis should be retested with NAAT within 3 months post-treatment due to high rates of reinfection.'
              ],
              references: [
                'CDC STI Treatment Guidelines, 2021/2024',
                'IUSTI: European guideline on the management of Trichomonas vaginalis infection (2020/2024)'
              ]
            },
            prognosis: {
              mortality: 'Zero direct mortality; morbidity relates to adverse pregnancy outcomes and amplified HIV transmission.',
              prognostic_scores: ['NAAT re-testing at 3 months'],
              factors: 'Concurrent treatment of sexual partners, compliance with 7-day Metronidazole regimen in women'
            }
          }
        ],
    } // End of sexually_transmitted
});