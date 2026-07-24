import { Category } from '../types';

export const viralHepatitisEn: Category = {
  name: 'Viral Hepatitis',
  icon: '🧬',
  color: '#eab308',
  tables: [
    {
      title: 'Differential Diagnosis of Viral Hepatitis',
      headers: ['Virus', 'Transmission', 'Incubation', 'Chronicity', 'Key Serology', 'Main Features'],
      rows: [
        ['HAV', 'Fecal-oral', '2-6 weeks', 'No', 'Anti-HAV IgM', 'Acute, epidemic, travel-related'],
        ['HBV', 'Parenteral, sexual', '2-6 months', 'Yes (especially perinatal)', 'HBsAg, Anti-HBc IgM', 'Chronic liver disease, HCC risk'],
        ['HCV', 'Parenteral', '2-26 weeks', 'Yes (>70%)', 'Anti-HCV, HCV RNA', 'Chronic, curable (DAA), extrahepatic manif.'],
        ['HDV', 'Parenteral (with HBV)', 'Variable', 'Yes (superinfection)', 'Anti-HDV (in HBsAg+ patient)', 'Exacerbates HBV, rapid cirrhosis progression'],
        ['HEV', 'Fecal-oral (G1,2), Zoonotic (G3,4)', '2-10 weeks', 'Yes (immunosuppr.)', 'Anti-HEV IgM, HEV RNA', 'Fulminant in pregnant women, pork-related']
      ]
    },
    {
      title: 'Interpretation of Hepatitis B Serological Patterns',
      headers: ['HBsAg', 'Anti-HBs', 'Anti-HBc (Total)', 'Anti-HBc IgM', 'Interpretation'],
      rows: [
        ['-', '-', '-', '-', 'Susceptible (uninfected, unprotected)'],
        ['-', '+', '-', '-', 'Protected (due to vaccination)'],
        ['-', '+', '+', '-', 'Resolved infection (natural immunity)'],
        ['+', '-', '+', '+', 'Acute infection'],
        ['+', '-', '+', '-', 'Chronic infection'],
        ['-', '-', '+', '-', 'Possible: 1. Resolved (low Anti-HBs); 2. False positive; 3. Occult HBV; 4. Window period']
      ]
    },
    {
      title: 'Meaning of Hepatitis Serological Markers',
      headers: ['Marker', 'Virus', 'Meaning'],
      rows: [
        ['Anti-HAV IgM', 'HAV', 'Acute infection'],
        ['Anti-HAV IgG', 'HAV', 'Immunity (vaccination or exposure)'],
        ['HBsAg', 'HBV', 'Presence of infection (acute or chronic)'],
        ['Anti-HBs', 'HBV', 'Immunity (vaccination or recovery)'],
        ['Anti-HBc IgM', 'HBV', 'Acute infection (also in window period)'],
        ['Anti-HBc (Total)', 'HBV', 'Past or present infection'],
        ['HBeAg', 'HBV', 'High replication, infectivity'],
        ['Anti-HBe', 'HBV', 'Lower replication (seroconversion)'],
        ['HBV DNA', 'HBV', 'Measure of viral replication'],
        ['Anti-HCV', 'HCV', 'Exposure (not necessarily active)'],
        ['HCV RNA', 'HCV', 'Active infection'],
        ['Anti-HDV', 'HDV', 'HDV infection (only with HBV)'],
        ['Anti-HEV IgM', 'HEV', 'Acute infection']
      ]
    }
  ],
  diseases: [
    {
      id: 'hav',
      name: 'Hepatitis A',
      pathogen: { type: 'Virus', name: '<i>Hepatitis A virus</i> (HAV)', gram: 'ssRNA (+), Picornaviridae (genus Hepatovirus)', shape: 'icosahedral, non-enveloped (stool) / quasi-enveloped (eHAV, blood)' },
      epidemiology: {
        incidence: 'High endemicity in low-income countries (childhood infection); low in developed countries with sporadic outbreaks (MSM, foodborne, travelers).',
        risk_groups: ['Travelers to endemic areas', 'Men who have sex with men (MSM)', 'People who inject drugs (PWID)', 'Unsheltered / Homeless individuals', 'Patients with chronic liver disease (HBV, HCV, MASLD, cirrhosis)', 'Sewage and laboratory workers'],
        seasonality: 'None',
        transmission: 'Fecal-oral (contaminated water, food, shellfish), sexual contact (oral-anal), rarely parenteral (viremic blood/needle sharing).'
      },
      pathomechanism: {
        steps: [
          'Oral entry: Ingested HAV crosses the intestinal epithelium and enters the portal circulation to reach the liver.',
          'Hepatocyte infection: Enters hepatocytes via the HAVCR-1 (TIM-1) receptor and replicates in the cytoplasm; non-cytopathic (no direct cell necrosis).',
          'Immune-mediated cell destruction: Liver injury is driven by the host CD8+ cytotoxic T lymphocyte and NK cell response destroying infected hepatocytes.',
          'Shedding and quasi-envelope (eHAV): Virions are excreted into bile and stool (highest viral titers 1–2 weeks prior to symptom onset). In blood, virions circulate wrapped in host lipids as quasi-enveloped virions (eHAV), protecting them from neutralizing antibodies.'
        ],
        virulence_factors: ['Acid-resistant capsid (survives gastric acid)', 'eHAV quasi-envelope (immune evasion in blood)', 'High environmental stability']
      },
      clinical: {
        incubation: '15–50 days (average 28 days)',
        onset: 'Sudden',
        symptoms: [
          { name: 'Prodromal phase', description: 'Flu-like symptoms (fever, malaise, headache), nausea, right upper quadrant pain, anorexia, aversion to tobacco smoke/fatty foods (lasts 1–2 weeks).', severity: 'moderate' },
          { name: 'Icteric phase', description: 'Dark urine (bilirubinuria), pale/acholic stool, jaundice (sclera, skin). Fever usually subsides when jaundice develops.', severity: 'moderate' },
          { name: 'Atypical forms (cholestatic / relapsing)', description: 'Prolonged cholestasis (pruritus, elevated ALP/GGT >12 weeks) or relapse (in 4–20%, 4–15 weeks after primary improvement).', severity: 'moderate' }
        ],
        physical_exam: [
          'Jaundice (sclera, skin)',
          'Hepatomegaly, tender liver margin',
          'Splenomegaly (in 10–20%)',
          'Rarely spider nevi or transient exanthem'
        ],
        complications: [
          'Fulminant hepatitis / Acute liver failure (ALF): <0.5–1%, but significantly higher in elderly (>50 years) or underlying chronic liver disease (HBV, HCV, cirrhosis) (coagulopathy, encephalopathy).',
          'Cholestatic hepatitis (prolonged cholestasis, severe itching, recovers without sequelae).',
          'Relapsing HAV (secondary spike in liver enzymes and symptoms weeks after apparent recovery, without chronicity).',
          'Extrahepatic manifestations: Acute interstitial nephritis, aplastic anemia, leukocytoclastic vasculitis, Guillain-Barré syndrome.',
          'NO chronic carrier state or chronic hepatitis!'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Liver enzymes (ALT, AST)', finding: 'Markedly elevated (>1000 U/L, often >2000–5000 U/L; ALT > AST)', interpretation: 'Acute severe hepatocellular necrosis' },
          { test: 'Bilirubin (direct and total)', finding: 'Significantly elevated (>50–200 µmol/L)', interpretation: 'Mixed/hepatocellular and cholestatic jaundice' },
          { test: 'ALP / GGT', finding: 'Moderately elevated (markedly high in cholestatic variant)', interpretation: 'Cholestasis' },
          { test: 'Prothrombin time / INR', finding: 'INR monitoring is mandatory!', interpretation: 'INR >1.5 raises suspicion of acute liver failure (ALF) and fulminant course' }
        ],
        imaging: [
          { modality: 'Abdominal ultrasound', finding: 'Hepatomegaly, reactive gallbladder wall thickening, minimal perihepatic fluid', significance: 'Excludes biliary obstruction and structural abnormalities' }
        ],
        microbiology: [
          { test: 'Anti-HAV IgM (ELISA)', finding: 'Positive', significance: 'Gold standard for acute Hepatitis A diagnosis (persists for 3–6 months)' },
          { test: 'Anti-HAV IgG / Total Anti-HAV', finding: 'Positive', significance: 'Confirms past infection or vaccine immunity (persists for life)' },
          { test: 'HAV RNA (RT-PCR)', finding: 'Positive', significance: 'Used in atypical serological window, relapses, or epidemiological investigations' }
        ],
        differential: [
          { disease: 'Other acute viral hepatitides (HBV, HCV, HEV, EBV, CMV)', distinguishing: 'Identical clinical presentation; differentiated by serology panel (HBsAg, Anti-HBc, Anti-HCV, Anti-HEV IgM)' },
          { disease: 'Drug-induced liver injury (DILI)', distinguishing: 'History (acetaminophen, mushrooms, antibiotics), toxicology screen' },
          { disease: 'Choledocholithiasis / Acute cholangitis', distinguishing: 'Abdominal US/MRCP (dilated bile ducts, gallstones), Charcot triad, ALP/GGT dominance' },
          { disease: 'Autoimmune hepatitis (acute onset)', distinguishing: 'Autoantibodies (ANA, ASMA), serum IgG elevation, liver biopsy' },
          { disease: 'Ischemic hepatitis / Shock liver', distinguishing: 'History of circulatory collapse, extremely rapid spike in LDH' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Supportive therapy', dose: '-', duration: '-', note: 'Bed rest, symptomatic treatment, balanced diet, strict prohibition of alcohol and hepatotoxic drugs' }
          ],
          inpatient: [
            { drug: 'IV Fluid hydration & Antiemetics', dose: 'Individualized', duration: 'Acute phase', note: 'Indicated for severe dehydration, pregnancy, elderly, or coagulopathy' }
          ],
          icu: [
            { drug: 'Emergency liver transplantation', dose: 'Transplant list', duration: 'Immediate', note: 'For fulminant liver failure meeting King\'s College criteria' }
          ]
        },
        targeted: 'No specific approved antiviral therapy available.',
        supportive: ['Adequate hydration', 'High-carbohydrate diet', 'Cholestyramine or ursodeoxycholic acid for cholestasis', 'Strict alcohol avoidance for at least 6 months'],
        prevention: [
          'Pre-exposure vaccination (inactivated HAV vaccine in 2 doses: 0 and 6–12 months)',
          'Post-exposure prophylaxis (PEP): within 14 days of exposure. Healthy individuals aged 1–40 years receive 1 dose of HAV vaccine; individuals >40 years, immunocompromised, or with chronic liver disease receive HAV vaccine + Human Normal Immunoglobulin (HNIG).'
        ],
        guidelines: [
          'Diagnosis: Serum Anti-HAV IgM is essential to confirm acute HAV infection. Strict monitoring of INR is mandatory for early detection of acute liver failure (ALF).',
          'Treatment: Exclusively supportive. Hospital admission recommended for INR >1.5, encephalopathy, severe dehydration, or high-risk patients (elderly, chronic liver disease).',
          'Liver transplantation: In the event of acute liver failure, immediate referral to a liver transplant center and evaluation using King\'s College criteria is required.',
          'Post-exposure prophylaxis (PEP): Within 14 days of exposure, administer 1 dose of HAV vaccine (ages 1–40) or vaccine + HNIG (>40 years, immunosuppressed, cirrhosis).',
          'Pre-exposure prevention: Inactivated vaccine in 2 doses (0 and 6–12 months). Highly recommended for travelers to endemic areas, MSM, chronic liver disease patients, PWID.'
        ],
        references: [
          'EASL Clinical Practice Guidelines & Public Health Recommendations on Hepatitis A.',
          'WHO. Hepatitis A fact sheet & CDC Yellow Book.'
        ]
      },
      prognosis: {
        mortality: 'Low in young patients (<0.1%), but 1.8–5% in individuals over 50 years or with underlying chronic liver disease',
        prognostic_scores: ['King\'s College criteria (acute liver failure)'],
        factors: 'Age, underlying chronic liver disease (HBV, HCV, cirrhosis), worsening coagulopathy (INR)'
      },
      gallery: [
        {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>1 mo</text><text x='350' y='370' class='txt'>3 mo</text><text x='500' y='370' class='txt'>6 mo</text><text x='650' y='370' class='txt'>1 yr</text><text x='350' y='390' class='txt' text-anchor='middle'>Time after infection</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q150,50 250,50 Q350,50 450,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='40' class='txt' fill='purple'>Anti-HAV IgM</text><path d='M150,350 Q250,100 350,100 L750,100' fill='none' stroke='green' stroke-width='3' /><text x='600' y='90' class='txt' fill='green'>Anti-HAV IgG</text><path d='M50,350 Q100,200 150,200 Q200,200 220,350' fill='none' stroke='red' stroke-width='3' stroke-dasharray='5,5' /><text x='80' y='190' class='txt' fill='red'>Virus (stool)</text><path d='M100,350 Q180,150 220,150 Q260,150 300,350' fill='none' stroke='orange' stroke-width='2' /><text x='180' y='140' class='txt' fill='orange'>ALT (Symptoms)</text></svg>",
          caption: 'Serological course of Hepatitis A',
          type: 'Diagram'
        }
      ]
    },
    {
      id: 'hbv',
      name: 'Hepatitis B',
      pathogen: { type: 'Virus', name: '<i>Hepatitis B virus</i> (HBV)', gram: 'dsDNA (with reverse transcriptase), Hepadnaviridae', shape: 'spherical (42 nm Dane particle, enveloped)' },
      epidemiology: {
        incidence: '250–290 million chronic HBsAg carriers worldwide; ~820,000 deaths annually due to cirrhosis and HCC.',
        risk_groups: ['People who inject drugs (PWID)', 'Multiple sexual partners, MSM', 'Healthcare workers (needlestick exposure)', 'Hemodialysis and blood transfusion recipients', 'Individuals from endemic regions and their newborns (perinatal transmission)'],
        seasonality: 'None',
        transmission: 'Parenteral (blood, bodily fluids), sexual, vertical (perinatal/mother-to-child), percutaneous.'
      },
      pathomechanism: {
        steps: [
          'Hepatocyte entry & Receptor: HBV binds to the sodium-taurocholate cotransporting polypeptide (NTCP) receptor on hepatocytes to enter the cytoplasm.',
          'cccDNA formation: Inside the nucleus, partially double-stranded DNA converts to covalently closed circular DNA (cccDNA). cccDNA forms an extremely stable episomal reservoir that underlies viral persistence and cannot be cleared by current nucleos(t)ide analogs.',
          'DNA Integration & Carcinogenesis: A portion of HBV DNA integrates into the host cell genome. This leads to cccDNA-independent HBsAg and HBx protein expression, genomic instability, and hepatocellular carcinoma (HCC) — even in the absence of cirrhosis!',
          'Immunopathogenesis: HBV is non-cytopathic. Liver inflammation and injury are mediated by host CD8+ cytotoxic T-cell responses against infected hepatocytes.',
          'EASL Natural History Phases: 1. HBeAg+ chronic infection ("immunotolerant": high HBV DNA, normal ALT); 2. HBeAg+ chronic hepatitis (high DNA, elevated ALT, fibrosis); 3. HBeAg- chronic infection ("inactive carrier": low DNA <2000 IU/mL, normal ALT); 4. HBeAg- chronic hepatitis (fluctuating DNA >2000 IU/mL, elevated ALT, progressive fibrosis); 5. HBsAg-negative phase (Occult HBV / resolved: HBsAg-, cccDNA persists in liver, risk of reactivation during immunosuppression).'
        ],
        virulence_factors: ['cccDNA (persistent viral reservoir)', 'HBx protein (transactivator, oncogenic)', 'HBsAg overproduction (immune decoy)', 'HBeAg (induction of immunotolerance)']
      },
      clinical: {
        incubation: '45–160 days (average 90 days)',
        onset: 'Insidious / Slow',
        symptoms: [
          { name: 'Acute phase', description: '70% anicteric/subclinical. Symptomatic cases feature serum sickness-like prodrome (arthralgia, urticaria, fever — Gianotti-Crosti syndrome in children), followed by jaundice, dark urine, and right upper quadrant dull pain.', severity: 'moderate' },
          { name: 'Chronic phase', description: 'Asymptomatic for decades ("silent killer"). In late stages, signs of decompensated liver cirrhosis (ascites, variceal bleeding, hepatic encephalopathy, jaundice, splenomegaly) dominate.', severity: 'severe' },
          { name: 'Extrahepatic manifestations (EASL highlighted)', description: 'Polyarteritis nodosa (PAN), Membranous / Membranoproliferative glomerulonephritis, cryoglobulinemia, Gianotti-Crosti syndrome.', severity: 'severe' }
        ],
        physical_exam: [
          'Hepatomegaly (tender liver edge)',
          'Jaundice (sclera, skin)',
          'Splenomegaly, spider nevi, palmar erythema (chronic/cirrhosis)',
          'Ascites, caput medusae, flapping tremor / asterixis (decompensated cirrhosis)'
        ],
        complications: [
          'Chronic Hepatitis B (90% in perinatal/infant infection, <5% in adult infection)',
          'Liver cirrhosis and decompensation',
          'Hepatocellular carcinoma (HCC — can occur even without preceding cirrhosis!)',
          'Polyarteritis nodosa (PAN) and Glomerulonephritis',
          'HBV reactivation under immunosuppression / biological therapy / rituximab'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Liver enzymes (ALT, AST)', finding: 'Acute: >1000 U/L; Chronic: fluctuating elevations', interpretation: 'Hepatocellular damage and inflammatory activity' },
          { test: 'Bilirubin & Albumin & INR', finding: 'Elevated direct bilirubin, hypoalbuminemia, prolonged INR', interpretation: 'Decreased synthetic function of liver, hepatic decompensation' },
          { test: 'Platelet count', finding: 'Thrombocytopenia (<150 G/L)', interpretation: 'Sign of portal hypertension and hypersplenism' }
        ],
        microbiology: [
          { test: 'HBsAg', finding: 'Positive', significance: 'Presence of infection (>6 months duration = chronic HBV)' },
          { test: 'Anti-HBs', finding: 'Positive (≥10 IU/L)', significance: 'Immunity and protection (successful vaccination or resolved infection)' },
          { test: 'Anti-HBc IgM', finding: 'Positive', significance: 'Confirms acute HBV infection (positive during window period!) or acute flare' },
          { test: 'Anti-HBc Total (IgG+IgM)', finding: 'Positive', significance: 'Past or ongoing HBV infection (positive in all HBsAg+ individuals)' },
          { test: 'HBeAg / Anti-HBe', finding: 'HBeAg+ or Anti-HBe+', significance: 'HBeAg+ = high viral replication; HBeAg- = seroconversion or precore mutant' },
          { test: 'HBV DNA (Quantitative RT-PCR)', finding: 'Positive (IU/mL)', significance: 'Accurate measurement of viral replication; baseline for treatment indication and monitoring' }
        ],
        differential: [
          { disease: 'Other viral hepatitides (HAV, HCV, HDV, HEV)', distinguishing: 'Serology and PCR assays (Anti-HAV IgM, Anti-HCV, Anti-HDV, Anti-HEV IgM)' },
          { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies (ANA, ASMA, LKM-1), elevated serum IgG, liver biopsy' },
          { disease: 'Alcoholic or Metabolic liver disease (MASLD/MASH)', distinguishing: 'History, AST/ALT >2, metabolic syndrome, ultrasound steatosis' },
          { disease: 'Drug-induced liver injury (DILI)', distinguishing: 'History of hepatotoxic agent, close temporal relationship' },
          { disease: 'Wilson\'s disease', distinguishing: 'Young patient, low ceruloplasmin, high 24h urinary copper, Kayser-Fleischer rings' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Entecavir (ETV)', dose: '0.5 mg PO daily (1.0 mg if lamivudine-resistant or decompensated)', duration: 'Long-term / Lifelong', note: 'First-line nucleoside analog with high barrier to resistance.' },
            { drug: 'Tenofovir disoproxil fumarate (TDF)', dose: '300 mg PO daily', duration: 'Long-term / Lifelong', note: 'First-line nucleotide analog with zero resistance. Monitor renal function and bone mineral density.' },
            { drug: 'Tenofovir alafenamide (TAF)', dose: '25 mg PO daily', duration: 'Long-term / Lifelong', note: 'Preferred first-line in patients aged >60 years, with underlying bone disease/osteoporosis, or renal impairment (eGFR <60).' }
          ],
          inpatient: [
            { drug: 'Tenofovir (TDF/TAF) or Entecavir', dose: 'Standard dosing', duration: 'Immediate initiation', note: 'Initiate immediately in severe acute hepatitis B, fulminant liver failure, or acute decompensation!' }
          ]
        },
        targeted: 'EASL Guideline: Long-term / lifelong nucleos(t)ide analog (NA: Entecavir, TDF, TAF) treatment for sustained suppression of HBV DNA. Finite (48-week) Peg-IFN alpha-2a therapy may be considered in selected patients with compensated liver disease and good baseline parameters.',
        supportive: ['Regular HCC surveillance (abdominal US every 6 months)', 'Administer HAV vaccine', 'Screen and vaccinate family members and sexual partners', 'Strict alcohol prohibition'],
        prevention: ['Recombinant HBV vaccination (0-1-6 month schedule)', 'Universal HBsAg screening in pregnant women during the 1st trimester', 'Post-exposure prophylaxis (HBIG + 1st vaccine dose within 12 hours) for newborns of HBsAg+ mothers and after needlestick exposure'],
        guidelines: [
          'Treatment Indications (EASL 2017): 1. ALL patients with liver cirrhosis (compensated or decompensated) must be treated if HBV DNA is detectable! 2. Chronic hepatitis B: HBV DNA >2000 IU/mL AND ALT > ULN AND at least moderate fibrosis (≥F2). 3. HBV DNA >20,000 IU/mL AND ALT >2x ULN regardless of fibrosis stage. 4. Family history of HCC or extrahepatic manifestations.',
          'Pregnancy & Mother-to-Child Transmission (MTCT): Administer TDF (Tenofovir disoproxil) from gestational weeks 24–28 until 4–12 weeks postpartum if maternal HBV DNA >200,000 IU/mL (>10^5 IU/mL). Newborn receives HBIG + vaccine within 12 hours.',
          'Immunosuppressive / Biological Therapy Prophylaxis: All HBsAg+ and Anti-HBc+ patients starting immunosuppressive therapy (e.g., rituximab, steroids, chemotherapy) must receive NA prophylaxis to prevent HBV reactivation.',
          'Monitoring: During NA therapy, monitor ALT, HBV DNA, and renal parameters every 3–6 months. HCC screening (abdominal US ± AFP every 6 months) is mandatory in all cirrhotic patients and high-risk patients (PAGE-B score)!'
        ],
        references: [
          'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection. J Hepatol. 2017;67(2):370-398.',
          'WHO Guidelines for the prevention, care and treatment of persons with chronic hepatitis B infection (2024 update).'
        ]
      },
      prognosis: {
        mortality: 'Acute: <1% (except fulminant course); Chronic: untreated 5-year cirrhosis risk 8-20%, annual HCC risk 2-5%',
        prognostic_scores: ['PAGE-B score (HCC risk prediction under NA therapy)', 'MELD / Child-Pugh score (in cirrhosis)'],
        factors: 'Viral load (HBV DNA), HBeAg seroconversion, fibrosis stage, HDV/HCV/HIV co-infection, alcohol consumption'
      },
      gallery: [
        {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='200' y='370' class='txt'>4 wk</text><text x='350' y='370' class='txt'>8 wk</text><text x='500' y='370' class='txt'>6 mo</text><text x='650' y='370' class='txt'>12 mo</text><text x='350' y='390' class='txt' text-anchor='middle'>Time after infection</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q100,50 150,50 Q200,50 250,350' fill='none' stroke='red' stroke-width='3' /><text x='120' y='40' class='txt' fill='red'>HBsAg</text><path d='M60,350 Q100,100 140,100 Q180,100 220,350' fill='none' stroke='orange' stroke-width='3' stroke-dasharray='5,5' /><text x='140' y='90' class='txt' fill='orange'>HBeAg</text><path d='M80,350 Q150,80 200,80 Q300,80 350,350' fill='none' stroke='purple' stroke-width='3' /><text x='200' y='70' class='txt' fill='purple'>Anti-HBc IgM</text><path d='M80,350 Q150,120 200,120 L750,120' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='110' class='txt' fill='blue'>Anti-HBc Total</text><path d='M280,350 Q350,150 400,150 L750,150' fill='none' stroke='green' stroke-width='3' /><text x='600' y='140' class='txt' fill='green'>Anti-HBs</text><path d='M240,350 Q300,200 350,200 L750,200' fill='none' stroke='%23b45309' stroke-width='3' stroke-dasharray='5,5' /><text x='600' y='190' class='txt' fill='%23b45309'>Anti-HBe</text><text x='265' y='300' class='txt' font-size='12' fill='gray'>Window period</text></svg>",
          caption: 'Serological course of acute HBV infection (Recovery)',
          type: 'Diagram'
        }
      ]
    },
    {
      id: 'hcv',
      name: 'Hepatitis C',
      pathogen: { type: 'Virus', name: '<i>Hepatitis C virus</i> (HCV)', gram: 'ssRNA (+), Flaviviridae (genus Hepacivirus)', shape: 'spherical, enveloped virus (50 nm)' },
      epidemiology: {
        incidence: 'Worldwide ~58–71 million chronic infections; ~290,000 deaths annually due to cirrhosis and HCC.',
        risk_groups: ['People who inject drugs (PWID / needle sharing)', 'Blood transfusion recipients (prior to 1992)', 'Healthcare workers (needlestick injuries)', 'Unsterile tattoos, piercings, or medical procedures', 'Men who have sex with men (MSM, particularly with HIV co-infection)'],
        seasonality: 'None',
        transmission: 'Parenteral (blood-borne — dominant), sexual (less common, higher in MSM/HIV), vertical (mother-to-child ~5%).'
      },
      pathomechanism: {
        steps: [
          'Cytoplasmic replication: HCV replicates exclusively in the cytoplasm of hepatocytes. It forms no nuclear dDNA or cccDNA — making the infection directly targetable and biologically FULLY ERADICABLE (curable!) with DAAs.',
          'Quasispecies & Immune evasion: Viral NS5B RNA-dependent RNA polymerase lacks proofreading activity, driving continuous mutations (quasispecies) and immune evasion.',
          'High chronicity & Fibrogenesis: 75–85% of infected individuals develop chronic hepatitis. Persistent parenchymal inflammation activates hepatic stellate cells, causing confluent fibrosis, cirrhosis (in 20–30% over 20–30 years), and HCC.'
        ],
        virulence_factors: ['NS3/4A protease', 'NS5A complex protein', 'NS5B RNA polymerase', 'Extreme quasispecies variability']
      },
      clinical: {
        incubation: '14–180 days (average 6–8 weeks)',
        onset: 'Insidious / Paucisymptomatic',
        symptoms: [
          { name: 'Acute phase', description: '80% asymptomatic ("silent killer"). Mild fatigue, anorexia, anicteric course. Spontaneous clearance occurs in only 15–25%.', severity: 'mild' },
          { name: 'Chronic phase', description: 'Asymptomatic for decades. The leading symptom is chronic fatigue, cognitive dysfunction ("brain fog"). In late stages, complications of cirrhosis appear.', severity: 'moderate' },
          { name: 'Extrahepatic manifestations (EASL highlighted)', description: 'Mixed type II/III cryoglobulinemic vasculitis (purpura, arthralgia, glomerulonephritis), B-cell non-Hodgkin lymphoma, Porphyria cutanea tarda (PCT), Lichen planus, insulin resistance, and Type 2 Diabetes.', severity: 'severe' }
        ],
        physical_exam: [
          'Completely normal physical exam in early/intermediate stages',
          'Signs of cirrhosis (palmar erythema, spider nevi, splenomegaly, ascites, jaundice) in late stages',
          'Lower extremity purpura or ulcers in cryoglobulinemia'
        ],
        complications: [
          'Chronic Hepatitis C (develops in 75–85%!)',
          'Liver cirrhosis (20–30% over 20–30 years)',
          'Hepatocellular carcinoma (HCC — 1–4% annual risk in cirrhosis)',
          'Extrahepatic complications: Cryoglobulinemic vasculitis, B-cell lymphoma, glomerulonephritis, T2DM'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT / AST', finding: 'Fluctuating elevation or completely normal', interpretation: 'Presence of liver inflammation; normal ALT does NOT rule out advanced fibrosis!' },
          { test: 'Platelets & APRI / FIB-4 index', finding: 'Thrombocytopenia, high FIB-4 (>3.25)', interpretation: 'Suspicion of advanced fibrosis / cirrhosis' }
        ],
        microbiology: [
          { test: 'Anti-HCV (ELISA)', finding: 'Positive', significance: 'Confirms exposure (does not distinguish active from resolved infection on its own)' },
          { test: 'HCV RNA (Quantitative RT-PCR)', finding: 'Positive (IU/mL)', significance: 'Confirms ACTIVE infection (mandatory follow-up test for all Anti-HCV+ patients!)' },
          { test: 'Genotyping (1–6)', finding: 'Genotype determination', significance: 'Historical relevance; not strictly required prior to simplified pangenotypic DAA therapy' },
          { test: 'Fibrosis staging (EASL)', finding: 'FibroScan (Transient Elastography) / FIB-4', significance: 'Essential to identify cirrhosis (F4) due to mandatory post-SVR HCC surveillance obligation' }
        ],
        differential: [
          { disease: 'Hepatitis B and D co-infection', distinguishing: 'Serology (HBsAg, Anti-HBc, Anti-HDV, HBV DNA)' },
          { disease: 'Alcoholic liver disease', distinguishing: 'History, AST/ALT >2, marked elevation of GGT and MCV' },
          { disease: 'Metabolic dysfunction-associated steatotic liver disease (MASLD / MASH)', distinguishing: 'Metabolic syndrome, ultrasound steatosis, histology' },
          { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies (ANA, ASMA), elevated serum IgG' },
          { disease: 'Hemochromatosis', distinguishing: 'High serum iron, ferritin, and transferrin saturation (>45%), HFE gene mutation' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 tablets (300 mg / 120 mg) PO once daily with food', duration: '8 weeks', note: 'Pangenotypic DAA. Treatment-naïve patients without cirrhosis AND with compensated cirrhosis (Child-Pugh A) require ONLY 8 WEEKS!' },
            { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 tablet (400 mg / 100 mg) PO once daily', duration: '12 weeks', note: 'Pangenotypic DAA. Suitable for both non-cirrhotic and compensated cirrhotic patients.' }
          ]
        },
        targeted: 'EASL Guideline: Pangenotypic DAA (Direct-Acting Antiviral) therapy for ALL viremic (HCV RNA+) patients. Goal is Sustained Virologic Response (SVR12 = undetectable HCV RNA 12 weeks post-treatment), representing definitive biological CURE (>95–99% success rate!).',
        supportive: ['Check drug-drug interactions prior to initiation (www.hep-druginteractions.org)', 'Strict alcohol prohibition', 'Liver-protective lifestyle'],
        prevention: ['No vaccine available (high viral variability)', 'Mandatory PCR screening of blood products and organ donors', 'Harm reduction programs (needle exchange for PWID)', 'Safe sex practices'],
        guidelines: [
          'Treatment Indication (EASL 2020/2023): ALL patients with chronic HCV infection must be treated, regardless of fibrosis stage. Exceptions: pregnancy (DAAs not approved in pregnancy) or very limited non-hepatic life expectancy.',
          'Pangenotypic Regimens (Simplified treatment): Glecaprevir/Pibrentasvir (8 weeks) or Sofosbuvir/Velpatasvir (12 weeks).',
          'Strict Contraindication in Decompensated Cirrhosis (Child-Pugh B/C): Protease inhibitor-containing regimens (Glecaprevir, Grazoprevir, Voxilaprevir) are ABSOLUTELY CONTRAINDICATED due to severe hepatotoxicity! In decompensated cirrhosis: use Sofosbuvir/Velpatasvir + Ribavirin (RBV) for 12 weeks.',
          'Post-SVR HCC Surveillance Obligation: If the patient had F3 (advanced fibrosis) or F4 (cirrhosis) prior to treatment, LIFELONG HCC screening (abdominal US every 6 months) remains mandatory even after achieving SVR (cure)!'
        ],
        references: [
          'EASL Recommendations on Treatment of Hepatitis C 2020 update. J Hepatol. 2020;73(5):1170-1218.',
          'WHO. Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection.'
        ]
      },
      prognosis: {
        mortality: 'Excellent (>95–99% SVR12 = cure with DAAs); worse in decompensated cirrhosis or advanced HCC',
        prognostic_scores: ['FIB-4 / APRI index', 'Child-Pugh and MELD score (in cirrhosis)'],
        factors: 'Pre-treatment fibrosis stage, presence of decompensation, HIV/HBV co-infection, alcohol use'
      },
      gallery: [
        {
          url: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 400' style='background-color:white'><defs><style>.txt{font-family:sans-serif;font-size:14px;}.axis{stroke:black;stroke-width:2;}.grid{stroke:%23eee;stroke-width:1;}</style></defs><path class='grid' d='M50,50 H750 M50,150 H750 M50,250 H750 M50,350 H750' /><line class='axis' x1='50' y1='350' x2='750' y2='350' /><line class='axis' x1='50' y1='350' x2='50' y2='50' /><text x='50' y='370' class='txt'>0</text><text x='150' y='370' class='txt'>2 mo</text><text x='250' y='370' class='txt'>6 mo</text><text x='450' y='370' class='txt'>1 yr</text><text x='650' y='370' class='txt'>Years...</text><text x='350' y='390' class='txt' text-anchor='middle'>Time after infection</text><text x='20' y='200' class='txt' transform='rotate(-90 20,200)' text-anchor='middle'>Titer</text><path d='M50,350 Q80,50 150,50 L750,50' fill='none' stroke='red' stroke-width='3' /><text x='600' y='40' class='txt' fill='red'>HCV RNA</text><path d='M100,350 Q200,100 300,100 L750,100' fill='none' stroke='blue' stroke-width='3' /><text x='600' y='90' class='txt' fill='blue'>Anti-HCV</text><path d='M100,350 Q150,150 200,250 T300,200 T400,250 T500,200 T600,250 T700,200' fill='none' stroke='orange' stroke-width='2' /><text x='600' y='190' class='txt' fill='orange'>ALT (Fluctuating)</text></svg>",
          caption: 'Serological course of chronic Hepatitis C',
          type: 'Diagram'
        }
      ]
    },
    {
      id: 'hdv',
      name: 'Hepatitis D',
      pathogen: { type: 'Virus', name: '<i>Hepatitis D virus</i> (HDV / genus Deltavirus)', gram: 'ssRNA (-), defective satellite virus', shape: 'spherical (36 nm), circular RNA in HBsAg envelope' },
      epidemiology: {
        incidence: 'Worldwide ~5% of HBsAg-positive patients (12–20 million people) are co-infected with HDV.',
        risk_groups: ['Chronic HBV infected patients (HBsAg carriers)', 'People who inject drugs (PWID)', 'High-risk sexual behavior / MSM', 'Individuals from endemic regions (Mediterranean, Eastern Europe, Amazon basin)'],
        seasonality: 'None',
        transmission: 'Parenteral (blood), sexual, percutaneous. Infects and propagates EXCLUSIVELY in the presence of Hepatitis B virus (HBsAg)!'
      },
      pathomechanism: {
        steps: [
          'Defective satellite virus: HDV cannot synthesize its own envelope protein. It utilizes HBsAg produced by Hepatitis B virus (via the NTCP receptor) for entry, assembly, and virion release.',
          'Co-infection (simultaneous acute HBV + HDV infection): Typically causes severe acute hepatitis with high risk of fulminant course, but chronicity is rare (<5%).',
          'Superinfection (HDV infects a chronic HBV carrier): Progresses to chronicity in >80–90%. This is the MOST AGGRESSIVE and RAPIDLY PROGRESSIVE form of human viral hepatitis! 70–80% develop cirrhosis within 5–10 years, with exceptionally high rates of HCC and decompensation.'
        ],
        virulence_factors: ['HDAg (Small and Large Hepatitis Delta Antigen)', 'Exploitation of HBsAg coat', 'Direct cytopathic and immune-mediated hepatocytotoxicity']
      },
      clinical: {
        incubation: '30–60 days (shorter in superinfection)',
        onset: 'Sudden / Acute flare',
        symptoms: [
          { name: 'Superinfection / Acute flare', description: 'Sudden, dramatic deterioration in a patient with known chronic HBV: severe jaundice, profound fatigue, nausea, right upper quadrant pain.', severity: 'severe' },
          { name: 'Rapidly progressive cirrhosis', description: 'Signs of portal hypertension (ascites, variceal bleeding, splenomegaly) appear strikingly early in young adulthood.', severity: 'severe' }
        ],
        physical_exam: [
          'Jaundice (marked scleral and cutaneous icterus)',
          'Tender hepatomegaly',
          'Splenomegaly, spider nevi, ascites, asterixis (signs of early cirrhosis and decompensation)'
        ],
        complications: [
          'Fulminant liver failure (ALF) during acute superinfection',
          'Extremely rapid progression to liver cirrhosis (within 5–10 years)',
          'Hepatocellular carcinoma (HCC — 3x higher risk than HBV monoinfection)',
          'Early hepatic decompensation and mortality'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT / AST', finding: 'Markedly elevated or showing fluctuating spikes', interpretation: 'Severe necroinflammatory activity' },
          { test: 'Bilirubin & INR', finding: 'Progressively rising bilirubin, INR >1.5', interpretation: 'Rapid deterioration of hepatic function, threat of acute liver failure' }
        ],
        microbiology: [
          { test: 'Anti-HDV Total (IgG/IgM ELISA)', finding: 'Positive', significance: 'EASL Requirement: ALL HBsAg-positive patients MUST be screened AT LEAST ONCE for Anti-HDV!' },
          { test: 'HDV RNA (Quantitative RT-PCR)', finding: 'Positive (IU/mL)', significance: 'Confirms active HDV replication; cornerstone for diagnosis and treatment monitoring' },
          { test: 'HBsAg & Anti-HBc IgM', finding: 'HBsAg+; Anti-HBc IgM+ (co-infection) or Anti-HBc IgM- (superinfection)', significance: 'Differentiates co-infection from superinfection' }
        ],
        differential: [
          { disease: 'Acute HBV reactivation / flare (without HDV)', distinguishing: 'HDV RNA negative, Anti-HDV negative; sudden spike in HBV DNA' },
          { disease: 'Other acute superinfections (HAV, HEV, HCV)', distinguishing: 'Anti-HAV IgM, Anti-HEV IgM, HCV RNA testing' },
          { disease: 'Drug-induced liver injury (DILI) in an HBV carrier', distinguishing: 'History of hepatotoxic agent, HDV RNA negative' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Bulevirtide (Hepcludex)', dose: '2 mg SC once daily (self-injection)', duration: 'Long-term maintenance therapy (years)', note: 'EASL First-Line Agent: Entry inhibitor lipopeptide (NTCP receptor blocker). Indicated in compensated liver disease with HDV RNA positivity.' },
            { drug: 'Peg-IFN alpha-2a', dose: '180 mcg SC weekly', duration: '48 weeks', note: 'Off-label alternative (if Bulevirtide is unavailable); low sustained response rate (~20-30%).' }
          ]
        },
        targeted: 'EASL 2023 Guideline: Bulevirtide 2 mg SC daily monotherapy or combined with a nucleos(t)ide analog (NA). Because Bulevirtide does not act directly on HBV cccDNA, underlying HBV NA treatment (Tenofovir/Entecavir) MUST be continued!',
        supportive: ['Strict alcohol prohibition', 'Regular HCC screening (abdominal US + AFP every 6 months)', 'Early liver transplant consultation'],
        prevention: ['Hepatitis B vaccination (since HDV propagation requires HBsAg)', 'Safe needle practices and blood screening'],
        guidelines: [
          'Universal Screening (EASL 2023): Every HBsAg-positive patient must be screened at least once for Anti-HDV antibodies!',
          'Treatment Indication (Bulevirtide): Chronic HDV RNA-positive adult patients with compensated liver disease (including cirrhosis).',
          'Dosing and Duration: Bulevirtide 2 mg S.C. daily. Therapy should be continued for as long as clinical and virological benefit is observed (over years).',
          'Monitoring: HDV RNA, ALT, HBsAg, bile acid levels (Bulevirtide elevates serum bile acids due to NTCP inhibition; this is an expected physiological effect).'
        ],
        references: [
          'EASL Clinical Practice Guidelines on Hepatitis Delta Virus. J Hepatol. 2023;79(2):433-460.',
          'European Medicines Agency (EMA). Hepcludex (bulevirtide) summary of product characteristics.'
        ]
      },
      prognosis: {
        mortality: 'Highest mortality among viral hepatitides; untreated 10-year cirrhosis risk >70%, high liver-related mortality',
        prognostic_scores: ['BEHIND score', 'Child-Pugh and MELD score'],
        factors: 'Superinfection vs co-infection, HDV RNA persistence, fibrosis stage, Bulevirtide treatment response'
      }
    },
    {
      id: 'hev',
      name: 'Hepatitis E',
      pathogen: { type: 'Virus', name: '<i>Hepatitis E virus</i> (HEV / Orthohepevirus A)', gram: 'ssRNA (+), Hepeviridae (Orthohepevirus A)', shape: 'icosahedral, non-enveloped (stool) / quasi-enveloped (eHEV, blood)' },
      epidemiology: {
        incidence: 'Most common cause of acute viral hepatitis worldwide. Waterborne epidemics in developing countries (Genotypes 1, 2); Zoonosis in Europe and North America (Genotypes 3, 4).',
        risk_groups: ['Consumers of raw/undercooked pork or wild game (sausage, liver)', 'Solid organ transplant (SOT) recipients', 'HIV-infected patients (CD4 <200/µL)', 'Patients receiving chemotherapy or biological therapies (anti-TNF, rituximab)', 'Pregnant women (fulminant risk with Genotypes 1/2)', 'Patients with underlying chronic liver disease / cirrhosis'],
        seasonality: 'Rainy season in tropics (water contamination); no seasonality in temperate climates',
        transmission: 'Zoonotic (undercooked pork, wild boar, deer meat — G3, G4), fecal-oral (contaminated drinking water — G1, G2), blood transfusion, organ transplantation, vertical (mother-to-child).'
      },
      pathomechanism: {
        steps: [
          'Transmission & Systemic entry: Fecal-oral (contaminated water — Genotypes 1, 2) or zoonotic (undercooked pork/game — Genotypes 3, 4).',
          'Hepatocyte injury: Following hepatocyte infection, an immune-mediated T-cell response causes necrosis and lobular inflammation.',
          'Pregnancy fulminant course (Genotypes 1, 2): In the 3rd trimester, high progesterone/estrogen levels, altered Th2 immune response, and placenta-liver axis injury lead to fulminant hepatic failure (20–25% mortality).',
          'Chronicity (EASL definition): In immunocompromised patients (SOT recipients, HIV, chemotherapy, anti-TNF/rituximab), Genotype 3 infection is not cleared. Persistence of HEV RNA >3 months defines CHRONIC HEV infection, which progresses to cirrhosis within 2–5 years.'
        ],
        virulence_factors: ['ORF3 protein (viral release and immune evasion)', 'ORF2 capsid protein', 'eHEV quasi-envelope in serum']
      },
      clinical: {
        incubation: '15–60 days (average 40 days)',
        onset: 'Sudden or Insidious',
        symptoms: [
          { name: 'Acute icteric hepatitis', description: 'Fever, anorexia, nausea, right upper quadrant pain, jaundice, dark urine.', severity: 'moderate' },
          { name: 'Neurological extrahepatic symptoms (EASL highlighted)', description: 'Guillain-Barré syndrome, Neuralgic amyotrophy (Parsonage-Turner syndrome), encephalitis, myelitis.', severity: 'severe' },
          { name: 'Pregnancy complications (G1, G2)', description: 'Fulminant liver failure, premature labor, fetal death.', severity: 'severe' },
          { name: 'Chronic HEV infection (G3 in immunocompromised)', description: 'Often asymptomatic or mild fatigue, persistent liver enzyme elevation, rapidly progressive cirrhosis.', severity: 'severe' }
        ],
        physical_exam: [
          'Jaundice (sclera, skin)',
          'Hepatomegaly (tender liver edge)',
          'Peripheral paresis, muscle weakness, loss of reflexes in neurological manifestations'
        ],
        complications: [
          'Fulminant liver failure (ALF): Up to 20–25% mortality in pregnant women with G1/G2 infection.',
          'Acute-on-chronic liver failure (ACLF): Severe decompensation in patients with pre-existing cirrhosis.',
          'Chronic Hepatitis E (EASL: HEV RNA persistence >3 months): Leads to rapid cirrhosis in transplant recipients, HIV patients, and chemotherapy patients.',
          'Neurological manifestations: Guillain-Barré syndrome, Neuralgic amyotrophy (Parsonage-Turner).',
          'Renal complications: Membranoproliferative glomerulonephritis (MPGN), membranous nephropathy.'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Liver enzymes (ALT, AST)', finding: 'Markedly elevated in acute phase; mild fluctuating elevation in chronic cases', interpretation: 'Hepatocellular injury' },
          { test: 'Bilirubin & ALP/GGT', finding: 'Elevated during icteric phase', interpretation: 'Cholestasis' }
        ],
        imaging: [
          { modality: 'Abdominal ultrasound', finding: 'Hepatomegaly; signs of cirrhosis in chronic cases (surface nodularity, splenomegaly, ascites)', significance: 'Evaluates structural and vascular changes' }
        ],
        microbiology: [
          { test: 'Anti-HEV IgM & IgG (ELISA)', finding: 'Anti-HEV IgM positive in immunocompetent patients', significance: 'Serological proof of acute HEV infection' },
          { test: 'HEV RNA (RT-PCR in blood/stool)', finding: 'Quantitative PCR positive', significance: 'MANDATORY in immunocompromised patients (where serology may be false-negative!) and for diagnosing chronic HEV (>3 months)' }
        ],
        differential: [
          { disease: 'Other acute viral hepatitides (HAV, HBV, HCV, CMV, EBV)', distinguishing: 'Identical symptoms; differentiated by specific serology and PCR assays' },
          { disease: 'Drug-induced liver injury (DILI)', distinguishing: 'Common mimicker; EASL guidelines recommend HEV testing (Anti-HEV IgM & HEV RNA) in ALL suspected DILI cases!' },
          { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies (ANA, ASMA), serum IgG elevation, liver biopsy' },
          { disease: 'Ischemic / Toxic hepatitis', distinguishing: 'History of circulatory collapse, mushroom or paracetamol toxicity' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Supportive care', dose: '-', duration: '-', note: 'Self-limiting in immunocompetent acute infection; specific antiviral drug generally not required' }
          ],
          inpatient: [
            { drug: 'Ribavirin (off-label)', dose: '600–1000 mg/day PO', duration: '21–30 days', note: 'To prevent Acute-on-chronic liver failure (ACLF) or severe acute HEV' }
          ],
          icu: [
            { drug: 'Ribavirin monotherapy', dose: '600–1000 mg/day (eGFR adapted)', duration: '12 weeks (3 months)', note: 'First-line treatment for chronic HEV infection in immunocompromised patients (EASL CPG)' }
          ]
        },
        targeted: 'EASL Chronic HEV Algorithm: 1. Reduce immunosuppression (if feasible, ~30% clearance). 2. Ribavirin monotherapy (600–1000 mg/day) for 12 weeks. 3. If HEV RNA positive at week 12, continue Ribavirin for total 24 weeks (6 months). 4. Peg-Interferon-alpha considered ONLY in liver transplant recipients (contraindicated in kidney/heart transplant!).',
        supportive: ['Maintain fluid and electrolyte balance', 'Close observation of pregnant women and cirrhotic patients', 'Specific management of neurological complications'],
        prevention: ['Thorough heat cooking of pork, liver, and wild game (>70°C)', 'HEV RNA screening of blood products for high-risk populations', 'HEV 239 vaccine (Hecolin) currently licensed only in China'],
        guidelines: [
          'Diagnosis in Immunosuppression: Serology is unreliable (false-negative); HEV RNA (RT-PCR) testing is mandatory.',
          'Exclusion of DILI: Testing for HEV (Anti-HEV IgM and HEV RNA) is mandatory in all cases of suspected drug-induced liver injury (DILI).',
          'Chronic HEV Definition (EASL): Persistence of HEV RNA for >3 months in transplant recipients or immunocompromised patients.',
          'Chronic HEV Treatment: 1. Reduce immunosuppression. 2. Ribavirin monotherapy for 12 weeks (extended to 24 weeks if necessary).',
          'Severe Acute HEV / ACLF: Consider Ribavirin (600–1000 mg/day) for 21–30 days to prevent liver failure.'
        ],
        references: [
          'EASL Clinical Practice Guidelines on Hepatitis E Virus Infection (Journal of Hepatology).',
          'WHO. Hepatitis E fact sheet.'
        ]
      },
      prognosis: {
        mortality: 'Generally low (<1%); up to 20–25% in pregnant women (G1/G2); progression to cirrhosis in chronic HEV',
        factors: 'Pregnancy (G1/G2), level of immunosuppression, pre-existing chronic liver disease/cirrhosis'
      }
    },
    {
      id: 'hgv',
      name: 'Hepatitis G virus / Human Pegivirus 1 (HPgV-1 / GBV-C)',
      pathogen: { type: 'Virus', name: '<i>Human Pegivirus 1</i> (HPgV-1, formerly GBV-C / HGV)', gram: 'ssRNA (+), Flaviviridae (genus Pegivirus)', shape: 'spherical, enveloped' },
      epidemiology: {
        incidence: 'Worldwide distribution; 1–5% of healthy blood donors are persistently viremic. 20–50% of the population have Anti-E2 antibodies indicating past infection.',
        risk_groups: ['People who inject drugs (PWID)', 'Hemodialysis patients', 'Multiple blood product recipients', 'HIV- and HCV-infected individuals', 'Individuals with high-risk sexual behavior'],
        seasonality: 'None',
        transmission: 'Parenteral (blood, needlestick, blood products), sexual contact, vertical (mother-to-child)'
      },
      pathomechanism: {
        steps: [
          'Lymphotropic virus: Replicates in T and B lymphocytes, as well as peripheral blood mononuclear cells (PBMCs). NOT a hepatotropic virus!',
          'Does not damage hepatocytes; causes no cytopathic effect or histological liver inflammation.',
          'In HIV-1 co-infection, exerts favorable immunomodulatory effects: downregulates HIV co-receptors (CD4, CXCR4, CCR5) and upregulates inhibitory chemokines (SDF-1, RANTES, MIP-1α/β).',
          'Reduces T-cell hyperactivation and apoptosis, thereby slowing CD4+ cell decline and HIV/AIDS disease progression.'
        ],
        virulence_factors: ['E2 envelope glycoprotein (cell entry, immunomodulation)', 'NS5A non-structural protein']
      },
      clinical: {
        incubation: '14–60 days, clinically irrelevant',
        onset: 'Asymptomatic',
        symptoms: [
          { name: 'Asymptomatic carriage', description: 'Does NOT independently cause acute or chronic hepatitis, liver cirrhosis, or liver failure. "Hepatitis G" is a historical misnomer.', severity: 'mild' }
        ],
        physical_exam: ['Physical examination completely normal (no jaundice, no hepatomegaly)'],
        complications: ['NO hepatic complications.', 'In HIV-1 co-infection, persistent HPgV-1 viremia slows AIDS disease progression and improves survival (protective effect).']
      },
      diagnostics: {
        laboratory: [{ test: 'Liver enzymes (ALT, AST), Bilirubin, ALP, GGT', finding: 'Completely within normal reference limits', interpretation: 'No hepatocellular damage' }],
        imaging: [{ modality: 'Abdominal ultrasound', finding: 'Normal liver parenchyma and biliary tract', significance: 'Excludes other pathology' }],
        microbiology: [
          { test: 'HPgV-1 RT-PCR', finding: 'RNA detection', significance: 'Research/specialized setting; confirms active viremia' },
          { test: 'Anti-E2 antibody', finding: 'Positive', significance: 'Indicates clearance of viremia and past infection' }
        ]
      },
      differential: [
        { disease: 'True hepatotropic viruses (HBV, HCV, HAV, HEV, HDV)', distinguishing: 'Serology and PCR assays (HBsAg, Anti-HCV, HCV RNA, etc.)' },
        { disease: 'Non-infectious liver diseases (DILI, NAFLD/NASH, Autoimmune hepatitis)', distinguishing: 'Diagnosis of exclusion, autoantibodies, toxicology' }
      ],
      therapy: {
        empirical: {},
        targeted: 'Does NOT require specific antiviral therapy. No hepatological indication for treatment.',
        supportive: ['No clinical intervention required.'],
        prevention: ['Routine blood donor screening for HPgV-1 is not indicated. Standard infection control.'],
        references: [
          'Stapleton JT, et al. HPgV-1 (GBV-C) infection and pathogenesis. Nat Rev Microbiol.',
          'EASL & CDC Clinical Guidelines on Viral Hepatitis misnomers and Anelloviridae/Pegivirus.'
        ]
      },
      prognosis: {
        mortality: 'Non-pathogenic to the liver (zero liver mortality).',
        prognostic_scores: [],
        factors: 'In HIV co-infection, HPgV-1 persistence is a favorable prognostic factor.'
      }
    },
    {
      id: 'ttv',
      name: 'Torque teno virus (TTV)',
      pathogen: { type: 'Virus', name: '<i>Torque teno virus</i> (TTV)', gram: 'ssDNA (-/+), Anelloviridae (genus Alphatorquevirus)', shape: 'small (28-32 nm), non-enveloped, icosahedral' },
      epidemiology: {
        incidence: 'Ubiquitous: present in >70–90% of the population as persistent viremia. Fundamental component of the human commensal virome.',
        risk_groups: ['General population', 'Solid organ transplant recipients (liver, kidney, heart, lung)', 'Immunosuppressed patients'],
        seasonality: 'None',
        transmission: 'Respiratory droplets, fecal-oral, parenteral (blood), sexual, vertical, and breast milk'
      },
      pathomechanism: {
        steps: [
          'Systemic replication: Present in bone marrow, PBMCs, T and B lymphocytes, liver, and lung tissues.',
          'Non-cytopathic: Does not cause hepatocyte necrosis, histological inflammation, or liver dysfunction.',
          'Immune equilibrium: Plasma TTV DNA load inversely correlates with host cellular immunocompetence (T-cell function).',
          'Biomarker in organ transplantation: High TTV load indicates over-immunosuppression (risk of opportunistic infections like CMV, BKV, fungal infections); low TTV load indicates under-immunosuppression (risk of allograft rejection).'
        ],
        virulence_factors: ['ORF1 capsid protein (high genetic variability, immune evasion)']
      },
      clinical: {
        incubation: 'Clinically not applicable (lifelong commensal persistence)',
        onset: 'Asymptomatic',
        symptoms: [
          { name: 'Commensal state', description: 'Does not cause acute or chronic hepatitis, nor systemic disease.', severity: 'mild' }
        ],
        physical_exam: ['Physical examination completely normal.'],
        complications: ['Not pathogenic to the liver. Quantitative plasma TTV DNA viral load serves as a reliable biomarker to guide personalized immunosuppressive therapy in organ transplant recipients.']
      },
      diagnostics: {
        laboratory: [{ test: 'Liver function panel (ALT, AST, Bilirubin)', finding: 'Normal', interpretation: 'No liver injury' }],
        imaging: [{ modality: 'Ultrasound', finding: 'Normal', significance: 'No pathology' }],
        microbiology: [
          { test: 'Quantitative Real-Time PCR (TTV DNA copy number)', finding: 'DNA detection (copies/mL)', significance: 'Surrogate biomarker to monitor and guide immunosuppressive load in transplant recipients' }
        ]
      },
      differential: [
        { disease: 'Clinical hepatitis syndromes (HAV-HEV, EBV, CMV)', distinguishing: 'Serology, expanded PCR panel' }
      ],
      therapy: {
        empirical: {},
        targeted: 'Does NOT require antiviral therapy.',
        supportive: ['Fine-tuning of immunosuppressive drug doses in transplant recipients based on TTV DNA levels (protocol-guided).'],
        prevention: ['Due to ubiquitous prevalence, prevention is neither feasible nor necessary.']
      },
      prognosis: {
        mortality: 'Physiological virome component (zero mortality).',
        prognostic_scores: [],
        factors: 'TTV DNA copy number in transplant recipients correlates with infection and rejection risks.'
      }
    },
    {
      id: 'senv',
      name: 'SEN virus (SENV-D / SENV-H)',
      pathogen: { type: 'Virus', name: '<i>SEN virus</i> (SENV-D and SENV-H strains)', gram: 'ssDNA (-/+), family Anelloviridae', shape: 'small, non-enveloped circular DNA virus' },
      epidemiology: {
        incidence: 'Present in 10–20% of healthy blood donors, and 40–60% of transfused patients, hemodialysis patients, and PWID.',
        risk_groups: ['Transfusion recipients', 'Hemodialysis patients', 'People who inject drugs (PWID)', 'General population'],
        seasonality: 'None',
        transmission: 'Parenteral (transfusion, blood, needlestick), non-parenteral (fecal-oral, vertical)'
      },
      pathomechanism: {
        steps: [
          'Transmitted via blood, establishing persistent viremia.',
          'DNA detectable in hepatocytes and peripheral cells, but does NOT cause cytopathology or necroinflammation.',
          'Rigorous prospective and retrospective clinical studies demonstrated that SENV presence does NOT increase the risk of post-transfusion hepatitis, cryptogenic hepatitis, cirrhosis, or impaired liver function.',
          'Commensal element of the human anellovirome.'
        ],
        virulence_factors: ['No proven virulence factors.']
      },
      clinical: {
        incubation: 'Not applicable',
        onset: 'Asymptomatic',
        symptoms: [
          { name: 'Asymptomatic carriage', description: 'Does not cause acute or chronic liver disease. Historical associations with post-transfusion hepatitis were disproven by scientific research.', severity: 'mild' }
        ],
        physical_exam: ['Physical examination completely normal.'],
        complications: ['No proven hepatic or systemic complications.']
      },
      diagnostics: {
        laboratory: [{ test: 'ALT / AST', finding: 'Within normal limits', interpretation: 'No significant hepatocytolysis' }],
        imaging: [{ modality: 'Ultrasound', finding: 'Normal', significance: '-' }],
        microbiology: [
          { test: 'SENV-D / SENV-H PCR', finding: 'DNA detection', significance: 'Research laboratory tool; not routinely indicated' }
        ]
      },
      differential: [
        { disease: 'Post-transfusion hepatitis (HCV, HBV, CMV, EBV)', distinguishing: 'Serology and specific PCR assays' }
      ],
      therapy: {
        empirical: {},
        targeted: 'No treatment required.',
        supportive: [],
        prevention: ['SENV screening of blood products is not indicated or recommended.']
      },
      prognosis: {
        mortality: 'Excellent (non-pathogenic virus).',
        prognostic_scores: [],
        factors: '-'
      }
    }
  ]
};
