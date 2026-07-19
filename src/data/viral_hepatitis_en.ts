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
      pathogen: { type: 'Virus', name: '<i>Hepatitis A virus</i> (HAV)', gram: 'ssRNA, Picornaviridae', shape: 'icosahedral' },
      epidemiology: {
        incidence: 'High in endemic areas, sporadic/epidemic in developed countries',
        risk_groups: ['Travelers', 'MSM', 'IV drug users', 'Homeless'],
        seasonality: 'None',
        transmission: 'Fecal-oral (contaminated water, food), sexual (oral-anal)'
      },
      pathomechanism: {
        steps: [
          'Oral Entry: The virus is absorbed from the intestinal tract and reaches the liver via the portal circulation.',
          'Hepatocyte Infection: The virus enters hepatocytes via the HAVCR-1 receptor and replicates in the cytoplasm, but does not cause direct cell death (non-cytopathic).',
          'Immune Response: Liver injury is caused by the host\'s cellular immune response (CD8+ cytotoxic T cells and NK cells) destroying infected hepatocytes.',
          'Shedding: The virus is excreted in the bile into the stool before symptoms appear.'
        ],
        virulence_factors: ['Capsid stability (acid-resistant)', 'Envelope in blood (eHAV) - immune evasion']
      },
      clinical: {
        incubation: '15-50 days (average 28 days)',
        onset: 'Sudden',
        symptoms: [
          { name: 'Prodrome', description: 'Flu-like symptoms (fever, headache, myalgia), loss of appetite, aversion to tobacco smoke/fatty foods.', severity: 'moderate' },
          { name: 'Icteric Phase', description: 'Dark urine (bilirubinuria), pale stool, then jaundice (skin, sclera). Fever often subsides by this stage.', severity: 'moderate' },
          { name: 'Abdominal Discomfort', description: 'Dull pain in the right upper quadrant, hepatomegaly, nausea.', severity: 'mild' }
        ],
        physical_exam: [
          'Jaundice (sclera, skin)',
          'Hepatomegaly, tender liver',
          'Splenomegaly (rare)',
          'Rash (rare)'
        ],
        complications: ['Fulminant hepatitis (<1%, more common in elderly)', 'Cholestatic hepatitis (prolongated)', 'Relapse (3-20%)', 'NO chronic carrier state']
      },
      diagnostics: {
        laboratory: [
          { test: 'Liver Enzymes', finding: 'ALT/AST >1000 U/L', interpretation: 'Acute hepatocellular necrosis' },
          { test: 'Bilirubin', finding: 'Elevated (direct and indirect)', interpretation: 'Jaundice' },
          { test: 'ALP/GGT', finding: 'Moderately elevated', interpretation: 'Higher in cholestatic forms' }
        ],
        imaging: [
          { modality: 'Abdominal US', finding: 'Hepatomegaly, gallbladder wall thickening', significance: 'Non-specific' }
        ],
        microbiology: [
          { test: 'Anti-HAV IgM', finding: 'Positive', significance: 'Diagnosis of acute infection (stays + for 3-6 months)' },
          { test: 'Anti-HAV IgG', finding: 'Positive', significance: 'Immunity (vaccination or past exposure)' },
          { test: 'HAV RNA (PCR)', finding: 'Positive', significance: 'Viremia (rarely needed)' }
        ],
        differential: [
          { disease: 'Other viral hepatitides (HBV, HCV, HEV)', distinguishing: 'Serology (HBsAg, Anti-HCV, Anti-HEV)' },
          { disease: 'Toxic/Drug-induced hepatitis', distinguishing: 'History (paracetamol, mushroom), toxicology' },
          { disease: 'Biliary obstruction (Choledocholithiasis)', distinguishing: 'Abdominal US (dilated bile ducts), ALP/GGT dominance, colic' },
          { disease: 'EBV/CMV mononucleosis', distinguishing: 'Sore throat, lymphadenopathy, monospot/serology' },
          { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies (ANA, ASMA), IgG elevation' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Supportive', dose: '-', duration: '-', note: 'Rest, adequate calories, alcohol avoidance' }
          ],
          inpatient: [
            { drug: 'Supportive', dose: '-', duration: '-', note: 'In case of severe vomiting, dehydration or coagulopathy' }
          ],
          icu: [
            { drug: 'Liver transplantation', dose: 'Listing', duration: '', note: 'In case of fulminant liver failure' }
          ]
        },
        targeted: 'No specific antiviral agent available.',
        supportive: ['Fluid replacement', 'Antiemetics', 'Avoidance of alcohol and hepatotoxic drugs'],
        prevention: ['Vaccination (inactivated, 2 doses)', 'Hygiene (handwashing)', 'Post-exposure prophylaxis (vaccine or IG within 2 weeks)'],
        guidelines: [
          'Diagnosis: Suspected acute hepatitis requires liver enzymes (ALT/AST), bilirubin, ALP/GGT, and INR.',
          'Diagnosis: Anti-HAV IgM positive confirms acute HAV infection.',
          'Treatment: Basically supportive care. Hospitalization for severe dehydration, coagulopathy, or fulminant hepatic injury.',
          'Post-exposure: Vaccine administration within 2 weeks of exposure (if not previously vaccinated) or immunoglobulin (IG) in specific cases.',
          'Prevention: Vaccine: 2 doses (0 and 6–12 months), vaccination 2 weeks before travel is optimal.'
        ],
        references: [
          'WHO. Hepatitis A fact sheet.',
          'CDC Yellow Book: Hepatitis A.'
        ]
      },
      prognosis: {
        mortality: 'Low (<0.1%), but 1.8% over age 50',
        prognostic_scores: ['King\'s College criteria (fulminant)'],
        factors: 'Age, underlying liver disease'
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
      pathogen: { type: 'Virus', name: '<i>Hepatitis B virus</i> (HBV)', gram: 'dsDNA (RT), Hepadnaviridae', shape: 'spherical (Dane particle)' },
      epidemiology: {
        incidence: '290 million chronic carriers worldwide',
        risk_groups: ['IV drug users', 'Sexual partners', 'Healthcare workers', 'Dialysis patients', 'Perinatal (mother-to-child)'],
        seasonality: 'None',
        transmission: 'Parenteral (blood), sexual, perinatal'
      },
      pathomechanism: {
        steps: [
          'Entry and Replication: The virus enters hepatocytes via the NTCP receptor. In the nucleus, it forms cccDNA (covalently closed circular DNA), which is the basis for persistence.',
          'Immunopathogenesis: The virus is non-cytopathic. Liver damage is caused by the cytotoxic T-cell immune response against infected cells.',
          'Chronicity: If the immune response is insufficient (e.g., neonates), the virus persists. Viral DNA can integrate into the host genome, increasing the risk of HCC.'
        ],
        virulence_factors: ['HBsAg (decoy)', 'HBeAg (immunotolerance)', 'X protein (transactivator)']
      },
      clinical: {
        incubation: '45-160 days (average 90 days)',
        onset: 'Slow',
        symptoms: [
          { name: 'Acute Phase', description: 'Often asymptomatic. If symptomatic: serum sickness-like prodrome (rash, arthralgia), followed by jaundice, fatigue, right upper quadrant pain.', severity: 'moderate' },
          { name: 'Chronic Phase', description: 'Mostly asymptomatic ("silent killer"). In late stages, signs of liver cirrhosis (ascites, variceal bleeding, encephalopathy) dominate.', severity: 'mild' },
          { name: 'Extrahepatic Symptoms', description: 'Polyarteritis nodosa, glomerulonephritis.', severity: 'moderate' }
        ],
        physical_exam: [
          'Hepatomegaly',
          'Splenomegaly',
          'Spider nevi, palmar erythema (chronic/cirrhosis)',
          'Ascites, caput medusae (decompensated cirrhosis)'
        ],
        complications: ['Chronic hepatitis (90% in infants, <5% in adults)', 'Cirrhosis', 'Hepatocellular carcinoma (HCC)', 'Polyarteritis nodosa', 'Glomerulonephritis']
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT/AST', finding: 'Elevated', interpretation: 'Activity of inflammation' }
        ],
        microbiology: [
          { test: 'HBsAg', finding: 'Positive', significance: 'Presence of infection (acute or chronic)' },
          { test: 'Anti-HBs', finding: 'Positive', significance: 'Immunity (vaccination or recovery)' },
          { test: 'Anti-HBc IgM', finding: 'Positive', significance: 'Acute infection (important in window period!)' },
          { test: 'Anti-HBc (Total)', finding: 'Positive', significance: 'Past or chronic infection' },
          { test: 'HBeAg', finding: 'Positive', significance: 'High replication and infectivity' },
          { test: 'HBV DNA', finding: 'Positive', significance: 'Measure of viral replication (therapy monitoring)' }
        ],
        differential: [
          { disease: 'Other viral hepatitides (HAV, HCV, HDV)', distinguishing: 'Serology (Anti-HAV IgM, Anti-HCV, Anti-HDV)' },
          { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies (ANA, ASMA, LKM-1), hypergammaglobulinaemia' },
          { disease: 'Alcoholic liver disease', distinguishing: 'History, AST > ALT ratio (2:1), elevated GGT' },
          { disease: 'Drug-induced liver injury (DILI)', distinguishing: 'Drug history, recovery after discontinuation' },
          { disease: 'Wilson\'s disease', distinguishing: 'Young age, low ceruloplasmin, Kayser-Fleischer ring' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Entecavir', dose: '0.5 mg PO daily', duration: 'Long-term', note: 'Nucleoside analog. 1 mg if lamivudine-resistant.' },
            { drug: 'Tenofovir disoproxil (TDF)', dose: '300 mg PO daily', duration: 'Long-term', note: 'Nucleotide analog. Monitor renal function and bone density.' },
            { drug: 'Tenofovir alafenamide (TAF)', dose: '25 mg PO daily', duration: 'Long-term', note: 'Preferred if bone or renal disease risk is present.' }
          ],
          inpatient: [
            { drug: 'Tenofovir (TDF/TAF) or Entecavir', dose: 'Standard', duration: '', note: 'Start immediately in severe acute hepatitis or acute liver failure.' }
          ]
        },
        targeted: 'Chronic HBV: Lifelong NA (Entecavir, TDF, TAF) to suppress replication. Finite: Peg-IFN alpha (48 weeks) in selected patients.',
        supportive: ['HCC screening (US every 6 months)', 'Vaccination against HAV', 'Screening of family members'],
        prevention: ['Vaccination (recombinant HBsAg, 0-1-6 mo)', 'Pregnancy screening', 'HBIG + vaccine for neonates (≤12 hours; complete series)'],
        guidelines: [
          'Acute HBV: HBsAg positive and Anti-HBc IgM positive.',
          'Chronic HBV: HBsAg positive >6 months.',
          'Resolved: HBsAg negative, Anti-HBc (Total) positive, Anti-HBs positive.',
          'Vaccinated: Only Anti-HBs positive (all others negative).',
          'Inactive carrier: HBsAg+, HBeAg-, Anti-HBe+, normal ALT, low HBV DNA.',
          'Treatment indication: Chronic hepatitis (elevated ALT + HBV DNA >2000 IU/ml + fibrosis) OR Cirrhosis.',
          'Pregnancy: TDF from week 24-28 if HBV DNA >200,000 IU/ml.',
          'Renal impairment: TAF or Entecavir (dose adjustment).',
          'Monitoring: During NA treatment: ALT and HBV DNA every 3-6 months; HCC screening with ultrasound ± AFP every 6 months in cirrhotic patients.'
        ],
        references: [
          'EASL 2017 Clinical Practice Guidelines on the management of hepatitis B virus infection.',
          'WHO Guidelines for the Prevention, Care and Treatment of Persons with Chronic Hepatitis B Infection. 2015.'
        ]
      },
      prognosis: {
        mortality: 'Acute: <1%; Chronic: significant due to cirrhosis/HCC',
        prognostic_scores: ['PAGE-B (HCC risk)'],
        factors: 'HBeAg status, viral load, genotype, co-infections'
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
      pathogen: { type: 'Virus', name: '<i>Hepatitis C virus</i> (HCV)', gram: 'ssRNA, Flaviviridae', shape: 'spherical, enveloped' },
      epidemiology: {
        incidence: '71 million chronic patients worldwide',
        risk_groups: ['IV drug users', 'Blood transfusion (before 1992)', 'Tattoos/piercings', 'Healthcare workers (needlestick)'],
        seasonality: 'None',
        transmission: 'Parenteral (blood), sexual (rare, higher in MSM), perinatal'
      },
      pathomechanism: {
        steps: [
          'Replication: The virus replicates in the cytoplasm of hepatocytes (no nuclear phase, hence it is curable).',
          'Immune Evasion: The viral RNA polymerase is error-prone, leading to continuous mutation (quasispecies), evading immune recognition.',
          'Fibrosis: Chronic inflammation activates stellate cells to produce collagen, leading to liver fibrosis, then cirrhosis.'
        ],
        virulence_factors: ['NS3/4A protease', 'NS5A/B polymerase', 'Modulation of lipid metabolism']
      },
      clinical: {
        incubation: '14-180 days',
        onset: 'Slow/Asymptomatic',
        symptoms: [
          { name: 'Acute Phase', description: 'Rarely diagnosed (80% asymptomatic). Mild fatigue, loss of appetite may occur.', severity: 'mild' },
          { name: 'Chronic Phase', description: 'Can be asymptomatic for decades. The leading symptom is chronic fatigue. Often only complications of cirrhosis or lab findings bring it to light.', severity: 'moderate' },
          { name: 'Extrahepatic Symptoms', description: 'Cryoglobulinemia (vasculitis), porphyria cutanea tarda, lichen planus, diabetes.', severity: 'moderate' }
        ],
        physical_exam: [
          'Often negative',
          'Signs of cirrhosis in late stages'
        ],
        complications: ['Chronic hepatitis (70-80%!)', 'Cirrhosis (20-30% within 20 years)', 'HCC', 'Extrahepatic: Cryoglobulinemia, Porphyria cutanea tarda, Lichen planus, Diabetes']
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT', finding: 'Fluctuating elevation', interpretation: 'Chronic inflammation' }
        ],
        microbiology: [
          { test: 'Anti-HCV', finding: 'Positive', significance: 'Exposure (not necessarily active infection)' },
          { test: 'HCV RNA', finding: 'Positive', significance: 'Active infection (confirmation required!)' },
          { test: 'Genotyping', finding: '1-6', significance: 'Therapy choice (although pangenotypic drugs dominate)' }
        ],
        differential: [
          { disease: 'Hepatitis B', distinguishing: 'HBsAg positive' },
          { disease: 'Alcoholic liver disease', distinguishing: 'History, AST > ALT, macrocytosis' },
          { disease: 'Non-alcoholic fatty liver disease (NAFLD/NASH)', distinguishing: 'Metabolic syndrome, US (steatosis), biopsy' },
          { disease: 'Autoimmune hepatitis', distinguishing: 'Autoantibodies, histology (plasma cell infiltration)' },
          { disease: 'Hemochromatosis', distinguishing: 'High ferritin, transferrin saturation, HFE gene mutation' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Glecaprevir / Pibrentasvir (Maviret)', dose: '3 tab PO daily', duration: '8 weeks', note: 'Pangenotypic. 8 weeks with or without compensated cirrhosis.' },
            { drug: 'Sofosbuvir / Velpatasvir (Epclusa)', dose: '1 tab PO daily', duration: '12 weeks', note: 'Pangenotypic. Safe in decompensated cirrhosis (with RBV).' }
          ]
        },
        targeted: 'Pangenotypic DAA therapy for all patients (Simplified treatment). Genotyping not strictly necessary for treatment initiation (except in cirrhosis/prior failure).',
        supportive: ['Check drug interactions (www.hep-druginteractions.org)', 'Alcohol avoidance'],
        prevention: ['No vaccine', 'Screening of blood products', 'Harm reduction (needle exchange)', 'Safe sex'],
        guidelines: [
          'Screening: Anti-HCV serology (ELISA) in all risk groups and blood donations.',
          'HCV RNA positive = Active infection -> Treat.',
          'All chronic HCV infected patients should be treated, except those with limited life expectancy or pregnancy.',
          'SVR12 (Sustained Virologic Response): HCV RNA negative 12 weeks after treatment = Cure.',
          'In case of cirrhosis, continue HCC screening after SVR!'
        ],
        references: [
          'EASL Recommendations on Treatment of Hepatitis C (2020 update).',
          'WHO. Guidelines for the care and treatment of persons diagnosed with chronic hepatitis C virus infection.'
        ]
      },
      prognosis: {
        mortality: 'Excellent with treatment (SVR = cure), worse in cirrhosis',
        factors: 'Fibrosis stage, co-infection (HIV/HBV), alcohol'
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
      pathogen: { type: 'Virus', name: '<i>Hepatitis D virus</i> (HDV)', gram: 'ssRNA (defective)', shape: 'in HBsAg envelope' },
      epidemiology: {
        incidence: '5% of HBV infected patients (approx. 15-20 million)',
        seasonality: 'None',
        risk_groups: ['HBV infected patients', 'IV drug users', 'Sexual partners', 'Healthcare workers'],
        transmission: 'Parenteral, sexual (like HBV). Only infects in the presence of HBV!'
      },
      pathomechanism: {
        steps: [
          'Defective Virus: Requires Hepatitis B surface antigen (HBsAg) for replication and virion assembly.',
          'Co-infection: HBV and HDV infect simultaneously. Usually causes severe acute hepatitis, but chronicity is rare (<5%).',
          'Superinfection: A chronic HBV carrier becomes infected with HDV. This is the most severe form, often leading to fulminant liver failure or rapidly progressive cirrhosis.'
        ],
        virulence_factors: ['Delta antigen (HDAg)']
      },
      clinical: {
        incubation: '30-60 days',
        onset: 'Sudden',
        symptoms: [
          { name: 'Exacerbation', description: 'Sudden clinical worsening in a known HBV patient (acute flare).', severity: 'severe' },
          { name: 'Decompensation', description: 'Rapidly developing liver failure, jaundice, coagulopathy.', severity: 'severe' }
        ],
        complications: ['Fulminant hepatitis', 'Rapid progression to cirrhosis (most aggressive viral hepatitis)']
      },
      diagnostics: {
        laboratory: [
          { test: 'ALT/AST', finding: 'Elevated', interpretation: 'Acute flare' }
        ],
        microbiology: [
          { test: 'Anti-HDV', finding: 'Positive', significance: 'Screening in all HBV patients' },
          { test: 'HDV RNA', finding: 'Positive', significance: 'Active replication' }
        ]
      },
      differential: [
        { disease: 'HBV co-infection', distinguishing: 'HDV RNA positive, Anti-HDV positive' },
        { disease: 'Acute HBV flare-up', distinguishing: 'HDV RNA negative, Anti-HDV negative' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Bulevirtide', dose: '2 mg SC daily', duration: 'Long-term', note: 'Entry inhibitor. Monotherapy or Peg-IFN combination.' },
            { drug: 'Peg-IFN alpha', dose: '180 mcg SC weekly', duration: '48 weeks', note: 'Alternative, but low sustained response rate.' }
          ]
        },
        targeted: 'Bulevirtide (long-term maintenance) or Peg-IFN (48 weeks). Nucleoside analogs (for HBV) should be continued but do not affect HDV directly.',
        supportive: ['HBV vaccination protects against HDV as well'],
        guidelines: [
          'All HBsAg positive patients should be screened once for anti-HDV.',
          'Bulevirtide 2mg SC daily is recommended for compensated liver disease and HDV RNA positivity.',
          'Peg-IFN alpha: A 48-week course can be attempted.',
          'Monitor: HDV RNA, ALT, and HBsAg.'
        ],
        references: [
          'EASL Clinical Practice Guidelines on hepatitis delta virus (2023).',
          'WHO. Hepatitis D resources and technical brief.'
        ]
      },
      prognosis: {
        mortality: 'High, rapid cirrhosis progression',
        factors: 'Superinfection has worse prognosis'
      }
    },
    {
      id: 'hev',
      name: 'Hepatitis E',
      pathogen: { type: 'Virus', name: '<i>Hepatitis E virus</i> (HEV)', gram: 'ssRNA, Hepeviridae', shape: 'icosahedral' },
      epidemiology: {
        incidence: 'Developing countries (water), Developed countries (pork/wild game)',
        risk_groups: ['Pregnant women (severe course)', 'Immunosuppressed (chronic)', 'Liver disease patients', 'Pork handlers'],
        seasonality: 'Rainy season (tropics)',
        transmission: 'Fecal-oral (water - Genotypes 1,2), Zoonotic (raw pork/wild game - Genotypes 3,4)'
      },
      pathomechanism: {
        steps: [
          'Entry: Fecal-oral (contaminated water - genotypes 1, 2) or zoonotic (undercooked meat - genotypes 3, 4).',
          'Pregnancy: In pregnant women (especially 3rd trimester), the virus can cause fulminant hepatic failure, likely due to hormonal and immunological changes (20% mortality).',
          'Chronicity: In immunosuppressed patients (e.g., transplant recipients), the virus may not be cleared, leading to chronic hepatitis and fibrosis.'
        ],
        virulence_factors: ['ORF3 protein (viral release)', 'Capsid protein']
      },
      clinical: {
        incubation: '15-60 days (average 40)',
        onset: 'Sudden',
        symptoms: [
          { name: 'Acute Hepatitis', description: 'Similar to HAV (fever, jaundice, vomiting).', severity: 'moderate' },
          { name: 'Neurological Symptoms', description: 'More frequently associated with neurological complications (Guillain-Barré syndrome, neuralgic amyotrophy).', severity: 'severe' },
          { name: 'In Pregnancy', description: 'Severe, life-threatening signs of liver failure.', severity: 'severe' }
        ],
        physical_exam: ['Jaundice', 'Hepatomegaly'],
        complications: ['Fulminant hepatitis in pregnant women (20% mortality! - G1,2)', 'Chronic hepatitis in immunosuppressed (G3)', 'Neurological symptoms (Guillain-Barré, Neuralgic amyotrophy)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Liver Enzymes', finding: 'ALT/AST elevated', interpretation: 'Hepatitis' }
        ],
        imaging: [
          { modality: 'Abdominal US', finding: 'Hepatomegaly', significance: 'Non-specific' }
        ],
        microbiology: [
          { test: 'Anti-HEV IgM', finding: 'Positive', significance: 'Acute infection' },
          { test: 'HEV RNA', finding: 'Positive', significance: 'Confirmation, chronic cases' }
        ],
        differential: [
          { disease: 'Hepatitis A', distinguishing: 'Serology (Anti-HAV IgM)' },
          { disease: 'Drug-induced liver injury (DILI)', distinguishing: 'History (e.g., antibiotics, NSAIDs)' },
          { disease: 'Ischemic hepatitis', distinguishing: 'Shock, history of hypotension, extreme LDH elevation' },
          { disease: 'Wilson\'s disease (in fulminant cases)', distinguishing: 'Hemolysis, low ALP, high urinary copper' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Supportive', dose: '-', duration: '-', note: 'In immunocompetent acute infection (self-limiting).' }
          ],
          inpatient: [
            { drug: 'Ribavirin', dose: '600-800 mg PO', duration: '12 weeks', note: 'Chronic HEV (immunosuppressed) or severe acute cases.' }
          ]
        },
        targeted: 'Chronic HEV (immunosuppressed): 1. Reduce immunosuppression (if possible). 2. Ribavirin for 12 weeks. If failure: Ribavirin 24 weeks or Peg-IFN.',
        supportive: ['Fluid replacement', 'Close monitoring in pregnancy (danger of fulminant course!)'],
        prevention: ['Food safety (thorough cooking of pork/wild game)'],
        guidelines: [
          'Anti-HEV IgM and IgG, and HEV RNA are recommended. HEV RNA is mandatory in suspected chronic infection.',
          'Acute: generally no treatment needed (except liver failure).',
          'Chronic (>3 months HEV RNA+): Immunosuppressed patients (transplant, HIV) require Ribavirin.'
        ],
        references: [
          'EASL Clinical Practice Guidelines on hepatitis E virus infection.',
          'WHO. Hepatitis E fact sheet.'
        ]
      },
      prognosis: {
        mortality: 'Generally low; up to 20% in pregnant women (genotypes 1-2)',
        factors: 'Pregnancy, immunosuppression'
      }
    },
    {
      id: 'hgv',
      name: 'Hepatitis G (GBV-C)',
      pathogen: { type: 'Virus', name: '<i>GB virus C</i> (HGV)', gram: 'ssRNA, Flaviviridae', shape: '-' },
      epidemiology: {
        incidence: '1-4% of blood donors',
        risk_groups: ['IV drug users', 'Hemodialysis patients', 'Multiple transfusions'],
        seasonality: 'None',
        transmission: 'Blood, sexual, vertical'
      },
      pathomechanism: {
        steps: ['Lymphotropic virus', 'Replication in lymphocytes', 'Not hepatotropic (controversial)', 'Interference with HIV replication'],
        virulence_factors: ['Not known']
      },
      clinical: {
        incubation: 'Unknown',
        onset: 'Asymptomatic',
        symptoms: [
          { name: 'Asymptomatic', description: 'Does not cause acute or chronic hepatitis', severity: 'mild' }
        ],
        physical_exam: ['Negative'],
        complications: ['Slows AIDS progression in HIV co-infection (favorable effect)']
      },
      diagnostics: {
        laboratory: [{ test: 'Liver Function', finding: 'Normal', interpretation: 'Does not cause hepatitis' }],
        microbiology: [
          { test: 'PCR', finding: 'RNA', significance: 'Research purposes, not in clinical routine' }
        ]
      },
      differential: [
        { disease: 'Other viral hepatitides', distinguishing: 'Serology (HBV, HCV)' },
        { disease: 'Non-infectious liver diseases', distinguishing: 'Diagnosis of exclusion' }
      ],
      therapy: {
        empirical: {},
        targeted: 'Does not require treatment.'
      },
      prognosis: {
        mortality: 'Not pathogenic to the liver',
        factors: '-'
      }
    },
    {
      id: 'ttv',
      name: 'Torque teno virus (TTV)',
      pathogen: { type: 'Virus', name: '<i>Torque teno virus</i>', gram: 'ssDNA, Anelloviridae', shape: '-' },
      epidemiology: {
        incidence: 'Ubiquitous (population >90% carriers)',
        risk_groups: ['General population'],
        seasonality: 'None',
        transmission: 'Blood, saliva, feces, breast milk'
      },
      pathomechanism: {
        steps: ['Persistent viremia', 'Replication in many tissues', 'Unproven pathogenicity'],
        virulence_factors: ['-']
      },
      clinical: {
        incubation: '-',
        onset: 'Asymptomatic',
        symptoms: [
          { name: 'Asymptomatic', description: 'Considered a commensal virus', severity: 'mild' }
        ],
        physical_exam: ['Negative'],
        complications: ['Pathogenicity not proven', 'May be a marker of the degree of immunosuppression']
      },
      diagnostics: {
        laboratory: [],
        microbiology: [
          { test: 'PCR', finding: 'DNA', significance: 'Research' }
        ]
      },
      differential: [
        { disease: 'Other viral hepatitides', distinguishing: 'Serology (HBV, HCV)' },
        { disease: 'Non-infectious liver diseases', distinguishing: 'Diagnosis of exclusion' }
      ],
      therapy: {
        empirical: {},
        targeted: 'None'
      },
      prognosis: {
        mortality: 'Good',
        factors: '-'
      }
    },
    {
      id: 'senv',
      name: 'SEN virus',
      pathogen: { type: 'Virus', name: '<i>SEN virus</i>', gram: 'ssDNA, Anelloviridae', shape: '-' },
      epidemiology: {
        incidence: 'Unknown',
        risk_groups: ['Transfused patients'],
        seasonality: 'None',
        transmission: 'Transfusion, blood'
      },
      pathomechanism: {
        steps: ['Transmitted by blood', 'Can replicate in hepatocytes', 'May cause mild hepatitis (controversial)'],
        virulence_factors: ['-']
      },
      clinical: {
        incubation: '-',
        onset: 'Slow',
        symptoms: [
          { name: 'Mild hepatitis?', description: 'Associated with post-transfusion hepatitis, but cause-effect not proven', severity: 'mild' }
        ],
        physical_exam: ['-'],
        complications: ['No proven significant liver damage']
      },
      diagnostics: {
        laboratory: [{ test: 'ALT', finding: 'Mild elevation possible', interpretation: '?' }],
        microbiology: [
          { test: 'PCR', finding: 'DNA', significance: 'Research' }
        ]
      },
      differential: [
        { disease: 'Other viral hepatitides', distinguishing: 'Serology (HBV, HCV)' },
        { disease: 'Non-infectious liver diseases', distinguishing: 'Diagnosis of exclusion' }
      ],
      therapy: {
        empirical: {},
        targeted: 'None'
      },
      prognosis: {
        mortality: 'Good',
        factors: '-'
      }
    }
  ]
};
