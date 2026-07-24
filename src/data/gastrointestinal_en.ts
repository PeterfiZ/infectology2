import { Category } from '../types';

export const gastrointestinalEn: Category = {
  name: 'Gastrointestinal Infections',
  icon: '🦠',
  color: '#dc2626',
  tables: [
    {
      title: 'Differential Diagnosis of Gastrointestinal Infections',
      headers: ['Disease', 'Pathogen', 'Affected Segment', 'Mechanism', 'Stool Volume', 'Stool Characteristics', 'Fever', 'Key Features / Complications'],
      rows: [
        ['C. difficile', 'C. difficile', 'Large intestine', 'Toxin A/B (inflammation)', 'Moderate/Large', 'Watery, greenish, foul', '+', 'AB-associated, pseudomembrane, toxic megacolon'],
        ['Salmonella', 'Salmonella enterica', 'Small & Large intestine', 'Invasion + Enterotoxin', 'Moderate', 'Watery (rarely bloody)', '++', 'Food poisoning, reptile contact, extraintestinal complications'],
        ['Shigella', 'Shigella spp.', 'Large intestine', 'Invasion + Shiga toxin', 'Small', 'Bloody-mucoid (dysentery)', '++', 'Tenesmus, low infectious dose, HUS'],
        ['Campylobacter', 'Campylobacter jejuni', 'Small & Large intestine', 'Invasion + Toxin', 'Moderate', 'Watery/Bloody', '+', 'Pseudoappendicitis, GBS, poultry'],
        ['E. coli (EHEC)', 'E. coli (STEC)', 'Large intestine', 'Shiga toxin', 'Moderate', 'Bloody', '-', 'Afebrile, HUS risk, antibiotics forbidden!'],
        ['E. coli (ETEC)', 'E. coli (ETEC)', 'Small intestine', 'Enterotoxin (secretory)', 'Large', 'Watery', '-', 'Traveler\'s diarrhea'],
        ['E. coli (EPEC)', 'E. coli (EPEC)', 'Small intestine', 'Malabsorption', 'Large', 'Watery/Mucoid', '+/-', 'Infantile diarrhea'],
        ['E. coli (EIEC)', 'E. coli (EIEC)', 'Large intestine', 'Invasion', 'Small', 'Bloody-mucoid', '++', 'Dysentery-like, fever'],
        ['Yersinia', 'Yersinia enterocolitica', 'Small & Large intestine', 'Invasion', 'Moderate', 'Watery/Bloody', '+', 'Pseudoappendicitis, reactive arthritis, iron overload sepsis'],
        ['Giardia', 'Giardia duodenalis', 'Small intestine', 'Malabsorption', 'Large/Moderate', 'Greasy, foul-smelling', '-', 'Sulfurous burps, malabsorption, lactose intolerance'],
        ['Amoeba', 'E. histolytica', 'Large intestine', 'Invasion/Cytotoxin', 'Small', 'Bloody-mucoid', '+/-', 'Liver abscess (anchovy paste), two-step therapy mandatory'],
        ['Cryptosporidium', 'Cryptosporidium spp.', 'Small intestine', 'Secretory/Malabsorption', 'Large', 'Watery', '-', 'Chlorine-resistant, severe in HIV/AIDS (CD4 <100)'],
        ['Viral GE', 'Norovirus / Rotavirus', 'Small intestine', 'Malabsorption/Osmotic', 'Large', 'Watery', '-/+', 'Vomiting dominates (Norovirus), soap & water required'],
        ['Cholera', 'Vibrio cholerae', 'Small intestine', 'Enterotoxin (secretory)', 'Very large', 'Rice-water', '-', 'Massive fluid loss, rapid dehydration, rehydration key']
      ]
    }
  ],
  diseases: [
    {
      id: 'cdiff',
      name: 'Clostridioides difficile Infection (CDI)',
      pathogen: { type: 'Bacterium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-positive', shape: 'spore-forming anaerobic rod' },
      epidemiology: {
        incidence: 'Most common cause of healthcare-associated infectious diarrhea; community-acquired CDI is also increasing. Recurrence follows ~20-30% of successfully treated first episodes.',
        risk_groups: ['Age >65 years', 'Hospitalization or long-term care facility stay', 'Recent antibiotic exposure (especially clindamycin, fluoroquinolones, 3rd/4th gen cephalosporins, carbapenems)', 'Previous CDI episode', 'Unnecessary PPI/H2-blocker use', 'Inflammatory bowel disease (IBD)', 'Immunosuppression, chemotherapy, organ transplantation', 'Chronic kidney disease, hypoalbuminemia'],
        seasonality: 'None',
        transmission: 'Fecal-oral route via heat-resistant spores (nosocomial transmission, strict hand hygiene with soap and water required!).'
      },
      pathomechanism: {
        steps: [
          'Antibiotic treatment disrupts normal colonic microbiota, allowing ingested or resident C. difficile spores to germinate.',
          'Vegetative cells multiply and secrete Toxin A (enterotoxin, causing fluid secretion and neutrophil recruitment) and Toxin B (cytotoxin, destroying epithelial cell cytoskeleton).',
          'Severe mucosal inflammation, epithelial necrosis, and fibrin-neutrophil exudates form characteristic yellow-white pseudomembranes.',
          'Hypervirulent strains (e.g., NAP1/BI/027) produce binary toxin (CDT) and higher levels of toxins A and B due to tcdC gene deletions.'
        ],
        virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB)', 'Binary toxin (CDT)', 'Spore formation', 'Surface layer proteins (SLPs)']
      },
      clinical: {
        incubation: '2-10 days after antibiotic exposure, up to 8 weeks post-treatment',
        onset: 'Acute',
        symptoms: [
          { name: 'Watery diarrhea', description: 'New-onset unexplained diarrhea (≥3 unformed stools in 24h), characteristically watery, foul-smelling ("horse barn" odor), occasionally greenish.', severity: 'severe' },
          { name: 'Abdominal pain', description: 'Diffuse, crampy abdominal pain and lower abdominal tenderness.', severity: 'moderate' },
          { name: 'Fever and leukocytosis', description: 'Fever, marked leukocytosis (WBC >15 G/L), and unexplained rise in serum creatinine indicate severe disease.', severity: 'severe' },
          { name: 'Fulminant colitis', description: 'Severe abdominal pain, distension, ileus (diarrhea may paradoxically decrease), toxic megacolon, hemodynamic instability, shock.', severity: 'severe' }
        ],
        physical_exam: ['Diffuse lower abdominal tenderness', 'Abdominal distension', 'Fever, tachycardia, dehydration', 'Peritoneal signs or absent bowel sounds in fulminant CDI/ileus'],
        complications: ['Fulminant colitis', 'Toxic megacolon (>6 cm colonic dilation)', 'Bowel perforation and peritonitis', 'Septic shock', 'Acute kidney injury', 'Recurrent CDI (20-30%)']
      },
      diagnostics: {
        laboratory: [
          { test: 'CBC', finding: 'Leukocytosis (often >15-25 G/L, leukemoid reaction possible)', interpretation: 'Indicator of severe CDI' },
          { test: 'Serum Creatinine', finding: 'Elevated (>1.5x baseline or >1.5 mg/dL)', interpretation: 'Severe CDI criterion' },
          { test: 'Serum Albumin', finding: 'Decreased (<30 g/L)', interpretation: 'Protein-losing enteropathy, severe inflammation' },
          { test: 'Serum Lactate', finding: 'Elevated (>2.2 mmol/L)', interpretation: 'Fulminant CDI, bowel ischemia/hypoperfusion' }
        ],
        imaging: [
          { modality: 'Abdominal X-ray', finding: 'Colonic dilation (>6 cm), thumbprinting, pneumoperitoneum if perforated', significance: 'Rule out toxic megacolon and perforation' },
          { modality: 'Abdominal CT', finding: 'Diffuse colonic wall thickening, "accordion sign", pericolic fat stranding, ascites', significance: 'Assessment of disease extent and complications' }
        ],
        microbiology: [
          { test: 'Two-step stool algorithm (GDH + Toxin EIA)', finding: 'GDH positive + Toxin EIA positive', significance: 'Confirms active toxin-producing CDI (High PPV)' },
          { test: 'Stool NAAT / PCR', finding: 'tcdB gene detected', significance: 'Used for arbitration when GDH+/Toxin- or as primary test; highly sensitive' },
          { test: 'Flexible Sigmoidoscopy', finding: 'Yellowish-white pseudomembranes on colonic mucosa', significance: 'Diagnostic in equivocal or urgent cases (contraindicated in severe toxic megacolon)' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fidaxomicin', dose: '200 mg PO BID (2x daily)', duration: '10 days', note: 'First-line preferred (IDSA/SHEA 2021 update) - lower recurrence rate' },
            { drug: 'Vancomycin', dose: '125 mg PO QID (4x daily)', duration: '10 days', note: 'Standard first-line alternative if fidaxomicin unavailable' }
          ],
          inpatient: [
            { drug: 'Fulminant CDI: Vancomycin (Oral/NG)', dose: '500 mg PO/NG QID (4x daily)', duration: '10-14 days', note: 'Higher oral dose for fulminant/severe complicated CDI' },
            { drug: 'Fulminant CDI: Metronidazole IV', dose: '500 mg IV TID (3x daily)', duration: '10-14 days', note: 'Add IV Metronidazole in fulminant disease or ileus' },
            { drug: 'Fulminant CDI: Vancomycin Retention Enema', dose: '500 mg in 100 mL saline PR QID', duration: 'As needed', note: 'For complete ileus where oral drug delivery is impaired' }
          ]
        },
        targeted: 'FIRST EPISODE (Non-severe & Severe): Fidaxomicin 200 mg PO BID for 10 days (preferred) OR Vancomycin 125 mg PO QID for 10 days. FULMINANT CDI: Oral/NG Vancomycin 500 mg QID + IV Metronidazole 500 mg TID + Rectal Vancomycin enemas if ileus. FIRST RECURRENCE: Fidaxomicin 200 mg BID for 10 days (or pulsed/tapered vancomycin). SECOND OR SUBSEQUENT RECURRENCE: Tapered/pulsed vancomycin, Fidaxomicin, or Fecal Microbiota Transplantation (FMT) / live biotherapeutic products (Vowst / Rebyota). Prevention of recurrence: Bezlotoxumab 10 mg/kg IV single dose in high-risk patients.',
        supportive: ['Discontinue inciting antibiotics as soon as clinically feasible', 'Isotonic IV fluid replacement and electrolyte correction', 'ANTIMOTILITY AGENTS (Loperamide, diphenoxylate, opioids) ARE STRICTLY CONTRAINDICATED!'],
        prevention: ['Antibiotic stewardship', 'Contact precautions (gowns and gloves)', 'Hand hygiene WITH SOAP AND WATER (alcohol rubs do NOT kill spores!)', 'Environmental cleaning with sporicidal agents (bleach/hypochlorite)']
      },
      guidelines: {
        diagnosis: ['Test ONLY symptomatic patients (≥3 unformed stools/24h). Use 2-step GDH + Toxin EIA algorithm (NAAT for arbitration). Do NOT perform test-of-cure.'],
        treatment_indications: ['Immediate targeted treatment for all confirmed or highly suspected symptomatic CDI cases.'],
        first_line: ['Fidaxomicin 200 mg PO BID for 10 days OR Vancomycin 125 mg PO QID for 10 days.'],
        supportive: ['Fluid and electrolyte replacement. Discontinue inciting antibiotics. Antimotility drugs strictly forbidden.'],
        prevention: ['Soap and water handwashing, sporicidal environmental disinfection, Bezlotoxumab / FMT for recurrent cases.'],
        dosing: {
          adult: {
            fidaxomicin: '200 mg PO BID for 10 days',
            vancomycin: '125 mg PO QID for 10 days (500 mg QID PO/NG + PR enema in fulminant CDI)',
            metronidazole_iv: '500 mg IV TID (adjunct in fulminant CDI/ileus)',
            bezlotoxumab: '10 mg/kg IV single dose (for recurrence prevention in high-risk patients)'
          },
          pediatric: 'Vancomycin 40 mg/kg/day PO divided in 4 doses (max 500 mg/day) or age/weight-based Fidaxomicin (>6 months).'
        },
        references: [
          'IDSA/SHEA 2021 Focused Update on C. difficile Guidelines in Adults: https://www.idsociety.org/',
          'ESCMID 2021 update of the treatment guidance document for Clostridioides difficile infection in adults'
        ]
      },
      prognosis: {
        mortality: 'Non-complicated CDI: <5%; Fulminant CDI / Toxic Megacolon: 30-50%',
        prognostic_scores: ['ATLAS Score', 'Zar Score'],
        factors: 'Age >80 years, WBC >25 G/L, serum albumin <25 g/L, acute kidney injury, hypervirulent strain (NAP1/027)'
      },
      differential: [
        { disease: 'Non-CDI Antibiotic-Associated Diarrhea (AAD)', distinguishing: 'Negative C. diff GDH/toxin tests, milder clinical course, resolves upon stopping AB' },
        { disease: 'Inflammatory Bowel Disease (IBD) Flare', distinguishing: 'Negative C. diff testing, chronic history, endoscopic and biopsy findings' },
        { disease: 'Ischemic Colitis', distinguishing: 'Sudden left lower quadrant pain, hematochezia, CT angiography findings, cardiovascular risk factors' }
      ]
    },
    {
      id: 'salmonellosis',
      name: 'Salmonellosis (Non-typhoidal Salmonella)',
      pathogen: { type: 'Bacterium', name: '<i>Salmonella enterica</i> (e.g., serovars <i>Enteritidis, Typhimurium</i>)', gram: 'Gram-negative', shape: 'rod' },
      epidemiology: {
        incidence: 'Common cause of foodborne gastroenteritis worldwide; seasonal summer peak.',
        risk_groups: ['Infants (<3 months)', 'Elderly (>65 years)', 'Immunocompromised (HIV, biologics, chemotherapy, asplenia)', 'Sickle cell disease patients', 'Patients with prosthetic heart valves or vascular grafts'],
        seasonality: 'Summer and early autumn',
        transmission: 'Fecal-oral: contaminated food products (poultry, eggs, unpasteurized milk, produce), contact with reptiles (turtles, iguanas) or amphibians.'
      },
      pathomechanism: {
        steps: [
          'Ingested bacteria survive gastric acidity and colonize the distal ileum and colon.',
          'Using Type III Secretion Systems (T3SS-1), bacteria invade M-cells and enterocytes, causing membrane ruffling.',
          'Neutrophil recruitment into the lamina propria triggers active fluid and electrolyte secretion.',
          'In high-risk individuals, bacteria translocate into bloodstream (bacteremia) causing focal endovascular, osteoarticular, or metastatic infections.'
        ],
        virulence_factors: ['T3SS-1 and T3SS-2', 'Endotoxin (LPS)', 'Enterotoxin', 'Flagella']
      },
      clinical: {
        incubation: '6-72 hours (average 12-36 hours)',
        onset: 'Sudden',
        symptoms: [
          { name: 'Diarrhea', description: 'Abrupt onset of abundant watery, mucoid, or occasionally bloody stools, accompanied by nausea and vomiting.', severity: 'moderate' },
          { name: 'Fever and chills', description: 'Moderate to high fever (38-39°C), chills, myalgias, and headache.', severity: 'moderate' },
          { name: 'Abdominal cramps', description: 'Diffusely painful, crampy abdominal discomfort, often periumbilical.', severity: 'moderate' }
        ],
        physical_exam: ['Fever', 'Diffuse abdominal tenderness', 'Signs of dehydration'],
        complications: ['Bacteremia and sepsis (5-10%, higher in elderly/immunocompromised)', 'Mycotic abdominal aortic aneurysm / endovascular infection', 'Osteomyelitis (classic in sickle cell disease)', 'Septic arthritis', 'Reactive arthritis (Reiter syndrome)']
      },
      diagnostics: {
        laboratory: [{ test: 'CBC / CRP', finding: 'Leukocytosis with left shift, elevated CRP', interpretation: 'Bacterial inflammatory response' }],
        microbiology: [
          { test: 'Stool culture', finding: 'Salmonella isolation on selective media (e.g., SS agar, XLD agar)', significance: 'Diagnostic gold standard' },
          { test: 'Blood cultures', finding: 'Positive for Salmonella enterica', significance: 'Mandatory in febrile, septic, or high-risk patients' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Supportive Therapy', dose: '-', duration: '-', note: 'ANTIBIOTICS ARE CONTRAINDICATED IN HEALTHY ADULTS (prolongs stool shedding without shortening illness!)' }],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '1-2 g IV q24h', duration: '7-14 days', note: 'For severe disease, bacteremia, or high-risk patients' },
            { drug: 'Azithromycin', dose: '500 mg PO q24h', duration: '5-7 days', note: 'Oral alternative for high-risk outpatient management' }
          ]
        },
        targeted: 'CLINICAL GUIDELINE: In healthy individuals with non-complicated gastroenteritis, ANTIBIOTICS ARE CONTRAINDICATED because they do not shorten symptom duration but prolong fecal shedding and select for resistance! Targeted antimicrobial therapy is indicated ONLY in high-risk groups (infants <3 months, adults >65 years, immunocompromised, sickle cell disease, prosthetic devices, severe sepsis): Ceftriaxone 1-2 g IV q24h, Azithromycin 500 mg PO daily, or Ciprofloxacin 500 mg PO BID (if susceptible).',
        supportive: ['Oral Rehydration Salts (ORS)', 'IV fluid and electrolyte repletion in severe dehydration'],
        prevention: ['Food safety (thorough cooking of eggs and poultry)', 'Hand hygiene after handling reptiles/amphibians']
      },
      guidelines: {
        diagnosis: ['Stool culture for acute febrile gastroenteritis. Blood cultures mandatory if fever, chills, or sepsis signs are present.'],
        treatment_indications: ['Antibiotics indicated ONLY in high-risk patient groups or invasive/bacteremic disease!'],
        first_line: ['Ceftriaxone 1-2 g IV daily OR Azithromycin 500 mg PO daily for 5-7 days (7-14 days if bacteremic).'],
        supportive: ['Oral rehydration salts (ORS).'],
        prevention: ['Kitchen hygiene, thorough thermal processing of poultry/eggs.'],
        dosing: {
          adult: {
            ceftriaxone: '1-2 g IV q24h for 7-14 days',
            azithromycin: '500 mg PO q24h for 5-7 days',
            ciprofloxacin: '500 mg PO BID for 7-10 days (only if strain confirmed susceptible)'
          },
          pediatric: 'Ceftriaxone 50-80 mg/kg/day IV; Azithromycin 10 mg/kg/day PO.'
        },
        references: ['CDC Salmonella Guidance: https://www.cdc.gov/salmonella/']
      },
      prognosis: { mortality: 'Low (<0.5%) in uncomplicated enteritis; high if bacteremia or mycotic aneurysm develops', prognostic_scores: [], factors: 'Age, immunocompromise, endovascular involvement' },
      differential: [
        { disease: 'Campylobacteriosis', distinguishing: 'Stool culture, often more severe crampy right lower quadrant pain' },
        { disease: 'Shigellosis', distinguishing: 'Markedly bloody-mucoid dysenteric stools, tenesmus' }
      ]
    },
    {
      id: 'shigellosis',
      name: 'Shigellosis (Bacillary Dysentery)',
      pathogen: { type: 'Bacterium', name: '<i>Shigella (dysenteriae, flexneri, sonnei, boydii)</i>', gram: 'Gram-negative', shape: 'rod' },
      epidemiology: {
        incidence: 'Worldwide distribution; highly contagious due to extremely low infectious dose (10-100 organisms).',
        risk_groups: ['Young children in daycare/kindergarten', 'Men who have sex with men (MSM)', 'Travelers to endemic regions', 'People experiencing homelessness'],
        seasonality: 'Summer and autumn',
        transmission: 'Fecal-oral (person-to-person direct contact, contaminated food/water, fomites).'
      },
      pathomechanism: {
        steps: [
          'Bacteria enter colonic epithelium through M-cells and invade basolateral surfaces.',
          'Using actin tail polymerization (Ipa proteins), Shigella spreads intercellularly from cell to cell without entering extracellular space.',
          'Severe cell lysis, mucosal ulceration, microabscesses, and intense neutrophilic inflammation ensue.',
          'S. dysenteriae type 1 produces Shiga toxin (Stx), causing endothelial cell injury in renal capillaries and triggering Hemolytic Uremic Syndrome (HUS).'
        ],
        virulence_factors: ['Shiga toxin (Stx)', 'Ipa (Invasive plasmid antigen) proteins', 'Type III Secretion System']
      },
      clinical: {
        incubation: '1-4 days',
        onset: 'Sudden',
        symptoms: [
          { name: 'Dysentery', description: 'Initially watery diarrhea quickly evolving into frequent, small-volume, highly bloody, and mucoid stools.', severity: 'severe' },
          { name: 'Tenesmus', description: 'Severe, painful, spasmodic, and ineffective urges to defecate.', severity: 'severe' },
          { name: 'High fever', description: 'High spiking fever, chills, toxic appearance; febrile seizures in young children.', severity: 'severe' }
        ],
        physical_exam: ['High fever', 'Marked lower abdominal tenderness', 'Signs of dehydration and systemic toxicity'],
        complications: ['Hemolytic Uremic Syndrome (HUS - S. dysenteriae 1)', 'Toxic megacolon', 'Rectal prolapse (especially in young children)', 'Reactive arthritis']
      },
      diagnostics: {
        laboratory: [{ test: 'CBC', finding: 'Leukocytosis with prominent left shift', interpretation: 'Severe invasive inflammation' }],
        microbiology: [
          { test: 'Stool culture', finding: 'Shigella isolation on selective media (XLD / MacConkey)', significance: 'Diagnostic gold standard + antimicrobial susceptibility testing' },
          { test: 'Stool PCR panel', finding: 'ipaH gene detected', significance: 'Highly sensitive rapid molecular identification' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Azithromycin', dose: '500 mg PO q24h (or 1 g single dose)', duration: '3 days', note: 'First-line empiric choice due to quinolone resistance' },
            { drug: 'Ciprofloxacin', dose: '500 mg PO BID', duration: '3 days', note: 'Use ONLY if local susceptibility is documented' }
          ],
          inpatient: [
            { drug: 'Ceftriaxone', dose: '1-2 g IV q24h', duration: '3-5 days', note: 'For severe, hospitalized, or septic patients' }
          ]
        },
        targeted: 'CLINICAL GUIDELINE: Antibiotic therapy IS RECOMMENDED FOR ALL CONFIRMED/SUSPECTED CASES (shortens clinical illness duration and eliminates shedding to prevent public health outbreaks!). Preferred first-line: Azithromycin 500 mg PO daily for 3 days OR Ceftriaxone 1-2 g IV daily. (Fluoroquinolones should be used ONLY if strain susceptibility is confirmed, due to widespread XDR Shigella!). Antimotility agents (Loperamide) ARE STRICTLY CONTRAINDICATED!',
        supportive: ['Oral Rehydration Salts (ORS)', 'Antipyretics (Paracetamol)'],
        prevention: ['Strict hand hygiene with soap and water', 'Contact isolation of infected individuals']
      },
      guidelines: {
        diagnosis: ['Stool culture or multiplex PCR for bloody-mucoid diarrhea and tenesmus.'],
        treatment_indications: ['Antibiotic therapy is indicated for ALL symptomatic cases!'],
        first_line: ['Azithromycin 500 mg PO daily for 3 days OR Ceftriaxone 1-2 g IV daily for 3-5 days.'],
        supportive: ['Rehydration. Antimotility agents strictly forbidden!'],
        prevention: ['Contact precautions, rigorous hand hygiene.'],
        dosing: {
          adult: { azithromycin: '500 mg PO q24h for 3 days (or 1 g PO single dose)', ceftriaxone: '1-2 g IV q24h for 3-5 days', ciprofloxacin: '500 mg PO BID for 3 days (only if susceptible!)' },
          pediatric: 'Azithromycin 10-12 mg/kg/day PO for 3 days.'
        },
        references: ['CDC Shigella Guidance: https://www.cdc.gov/shigella/']
      },
      prognosis: { mortality: '<1% with appropriate treatment; up to 10-20% in untreated S. dysenteriae 1 epidemics', prognostic_scores: [], factors: 'Young age, malnutrition, HUS development' },
      differential: [
        { disease: 'EIEC (Enteroinvasive E. coli)', distinguishing: 'Clinically indistinguishable; distinguished by culture/PCR' },
        { disease: 'STEC/EHEC', distinguishing: 'Fever usually absent; Shiga toxin positive; antibiotics forbidden in STEC' }
      ]
    },
    {
      id: 'campylobacter',
      name: 'Campylobacteriosis',
      pathogen: { type: 'Bacterium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negative', shape: 'curved/spiral rod ("gull-wing" shape)' },
      epidemiology: {
        incidence: 'Most common cause of bacterial gastroenteritis in developed countries.',
        risk_groups: ['Infants and young children', 'Young adults', 'Immunosuppressed individuals'],
        seasonality: 'Summer and early autumn',
        transmission: 'Zoonosis: handling/consuming undercooked poultry, unpasteurized milk, contaminated drinking water.'
      },
      pathomechanism: {
        steps: [
          'Bacteria adhere to intestinal epithelial cells and invade the ileum and colon.',
          'Cytolethal distending toxin (CDT) induces host cell cycle arrest and apoptosis.',
          'Mesenteric lymph node enlargement leads to severe right lower quadrant pain (pseudoappendicitis).',
          'Lipooligosaccharide (LOS) structures demonstrate molecular mimicry with human peripheral nerve GM1 gangliosides, triggering post-infectious Guillain-Barré Syndrome (GBS).'
        ],
        virulence_factors: ['Flagellum (motility)', 'Cytolethal distending toxin (CDT)', 'LOS molecular mimicry']
      },
      clinical: {
        incubation: '1-7 days (average 2-5 days)',
        onset: 'Sudden, frequently preceded by flu-like prodrome',
        symptoms: [
          { name: 'Prodrome', description: 'Fever, severe headache, and myalgias precede abdominal symptoms by 12-24 hours.', severity: 'moderate' },
          { name: 'Pseudoappendicitis', description: 'Severe, crampy right lower quadrant abdominal pain mimicking acute appendicitis.', severity: 'severe' },
          { name: 'Diarrhea', description: 'Initially watery, progressing to frequent, loose, mucoid, and overtly bloody stools (10+ per day).', severity: 'severe' }
        ],
        physical_exam: ['Diffuse or right lower quadrant abdominal tenderness', 'Fever (>38.5°C)', 'Dehydration signs'],
        complications: ['Guillain-Barré Syndrome (GBS - 1 per 1,000 cases)', 'Reactive arthritis (Reiter syndrome)', 'Erythema nodosum', 'Post-infectious IBS']
      },
      diagnostics: {
        laboratory: [{ test: 'CBC / CRP', finding: 'Leukocytosis, elevated CRP', interpretation: 'Infiltrative intestinal inflammation' }],
        imaging: [{ modality: 'Abdominal US/CT', finding: 'Terminal ileitis, colonic wall thickening, mesenteric lymphadenopathy', significance: 'Excludes acute appendicitis' }],
        microbiology: [
          { test: 'Stool culture', finding: 'Selective media (Campy-Agar) under microaerophilic conditions at 42°C', significance: 'Diagnostic gold standard' },
          { test: 'Stool PCR panel', finding: 'Campylobacter DNA detected', significance: 'Rapid, highly sensitive test' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Supportive Therapy', dose: '-', duration: '-', note: 'Fluid replacement (ORS) is sufficient for mild cases' }],
          inpatient: [{ drug: 'Azithromycin', dose: '500 mg PO q24h', duration: '3 days', note: 'First-line antimicrobial of choice' }]
        },
        targeted: 'ANTIMICROBIAL INDICATIONS: High fever, bloody diarrhea, >8 stools/day, worsening symptoms (>1 week), pregnancy, or immunosuppression. First choice: Azithromycin 500 mg PO daily for 3 days (or 1 g PO single dose). (Fluoroquinolones SHOULD BE AVOIDED empirically due to >60-80% Ciprofloxacin resistance!). Antimotility drugs (Loperamide) ARE CONTRAINDICATED!',
        supportive: ['Oral Rehydration Salts (ORS)', 'Antipyretics'],
        prevention: ['Thorough cooking of poultry', 'Avoiding cross-contamination on cutting boards', 'Consuming only pasteurized dairy']
      },
      guidelines: {
        diagnosis: ['Stool culture (at 42°C) or PCR panel for acute bloody diarrhea or pseudoappendicitis presentation.'],
        treatment_indications: ['Targeted antibiotics indicated ONLY for severe, bloody, high-fever, or immunocompromised cases!'],
        first_line: ['Azithromycin 500 mg PO daily for 3 days.'],
        supportive: ['ORS, hydration. Loperamide contraindicated.'],
        prevention: ['Food hygiene, poultry handling safety.'],
        dosing: { adult: { azithromycin: '500 mg PO q24h for 3 days (or 1 g PO single dose)' }, pediatric: 'Azithromycin 10 mg/kg/day PO for 3 days.' },
        references: ['CDC Campylobacter Guidance: https://www.cdc.gov/campylobacter/']
      },
      prognosis: { mortality: 'Very low (<0.1%)', prognostic_scores: [], factors: 'Guillain-Barré Syndrome severity' },
      differential: [
        { disease: 'Acute Appendicitis', distinguishing: 'Absence of diarrhea, surgical peritoneal signs, US/CT findings' },
        { disease: 'Salmonellosis / Shigellosis', distinguishing: 'Stool culture / PCR differentiation' }
      ]
    },
    {
      id: 'ecoli_enteritis',
      name: 'Pathogenic E. coli Enteritis (STEC/EHEC, ETEC, EPEC, EIEC)',
      pathogen: { type: 'Bacterium', name: '<i>Escherichia coli</i> (diarrheagenic pathotypes)', gram: 'Gram-negative', shape: 'rod' },
      epidemiology: {
        incidence: 'ETEC: leading cause of traveler\'s diarrhea; STEC/EHEC: cause of severe foodborne outbreaks.',
        risk_groups: ['Children and elderly (STEC/EHEC - high HUS risk!)', 'International travelers (ETEC)', 'Infants (EPEC)'],
        seasonality: 'Summer months',
        transmission: 'Fecal-oral: undercooked ground beef, unpasteurized milk/juice, contaminated leafy greens, water, petting zoos.'
      },
      pathomechanism: {
        steps: [
          'STEC/EHEC (e.g., O157:H7, O104:H4): Produces Shiga toxins (Stx1, Stx2). Stx damages colonic microvasculature (hemorrhagic colitis) and translocates systemically to renal glomerular endothelial cells (Gb3 receptor), causing Microangiopathic Hemolytic Anemia, Thrombocytopenia, and Acute Kidney Injury -> HUS!',
          'ETEC: Produces Heat-Labile (LT) and Heat-Stable (ST) enterotoxins -> hypersecretion (cAMP/cGMP surge) -> profuse watery diarrhea.',
          'EPEC: Attaching and effacing (A/E) lesions via intimin -> microvillus destruction -> malabsorptive diarrhea.',
          'EIEC: Epithelial cell invasion -> Shigella-like dysentery.'
        ],
        virulence_factors: ['Shiga toxins (Stx1, Stx2)', 'LT and ST enterotoxins', 'Intimin (eae)', 'Invasins']
      },
      clinical: {
        incubation: 'STEC: 3-4 days; ETEC: 1-3 days',
        onset: 'Sudden',
        symptoms: [
          { name: 'STEC/EHEC: Hemorrhagic Colitis', description: 'Sudden onset of watery diarrhea quickly turning into PROFUSE BLOODY DIARRHEA, accompanied by severe crampy abdominal pain, WITHOUT FEVER or with low-grade fever.', severity: 'severe' },
          { name: 'ETEC: Traveler\'s Diarrhea', description: 'Profuse watery diarrhea, abdominal bloating, absence of fever.', severity: 'moderate' },
          { name: 'EIEC: Dysentery', description: 'Fever, bloody-mucoid stools, tenesmus.', severity: 'severe' }
        ],
        physical_exam: ['STEC: Severe abdominal tenderness, ABSENCE OF FEVER', 'Signs of dehydration'],
        complications: ['Hemolytic Uremic Syndrome (HUS) - develops in 5-15% of STEC cases (triad: microangiopathic hemolytic anemia, thrombocytopenia, acute kidney injury)', 'TTP in adults']
      },
      diagnostics: {
        laboratory: [{ test: 'CBC / Creatinine', finding: 'Thrombocytopenia, schistocytes on blood smear, elevated creatinine', interpretation: 'EARLY SIGNS OF HUS!' }],
        microbiology: [
          { test: 'Stool Shiga toxin assay', finding: 'Positive Stx1/Stx2 by ELISA or PCR', significance: 'Gold standard for STEC/EHEC diagnosis' },
          { test: 'Sorbitol-MacConkey Agar', finding: 'Sorbitol-non-fermenting colonies (O157:H7)', significance: 'Culture screening' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'STEC/EHEC: ANTIBIOTICS ARE STRICTLY FORBIDDEN!', dose: '-', duration: '-', note: 'Antibiotics INCREASE HUS RISK by 4-20x (triggers massive toxin release due to bacterial lysis)!' },
            { drug: 'ETEC: Rifaximin', dose: '200 mg PO TID', duration: '3 days', note: 'For non-invasive traveler\'s diarrhea' },
            { drug: 'EIEC: Azithromycin', dose: '500 mg PO q24h', duration: '3 days', note: 'For invasive pathotype' }
          ]
        },
        targeted: 'CRITICAL CLINICAL MANDATE: IN STEC/EHEC INFECTIONS, ANTIBIOTIC THERAPY IS STRICTLY CONTRAINDICATED, AS IT DRASTICALLY INCREASES THE RISK OF DEVELOPING HEMOLYTIC UREMIC SYNDROME (HUS)! Loperamide is also strictly forbidden! Treatment: Aggressive isotonic IV rehydration, close laboratory monitoring, and hemodialysis / eculizumab if HUS occurs. ETEC/EIEC: Rifaximin or Azithromycin.',
        supportive: ['Aggressive IV volume expansion', 'Daily monitoring of renal function, platelets, and Hgb/Hct'],
        prevention: ['Cooking ground beef thoroughly (≥71°C)', 'Avoiding unpasteurized milk and juice']
      },
      guidelines: {
        diagnosis: ['Bloody diarrhea without fever → suspect STEC/EHEC! Order stool Shiga toxin assay/PCR.'],
        treatment_indications: ['STEC/EHEC: ANTIBIOTICS STRICTLY FORBIDDEN! ETEC/EIEC: Antibiotics if severe.'],
        first_line: ['STEC: Aggressive IV rehydration only! ETEC: Rifaximin 3x200 mg or Azithromycin 1g single dose.'],
        supportive: ['Aggressive hydration. Loperamide forbidden!'],
        prevention: ['Thorough cooking, food safety.'],
        dosing: { adult: { rifaximin: '200 mg PO TID for 3 days', azithromycin: '500 mg PO daily for 3 days (or 1 g single dose)' }, pediatric: 'STEC: Antibiotics strictly avoided!' },
        references: ['CDC STEC Guidance: https://www.cdc.gov/ecoli/']
      },
      prognosis: { mortality: 'ETEC: minimal; STEC/EHEC: 3-5% mortality if HUS develops', prognostic_scores: [], factors: 'Age extremes, HUS development, early antibiotic administration (worsens prognosis!)' },
      differential: [
        { disease: 'Shigellosis', distinguishing: 'High fever present; STEC lacks fever' },
        { disease: 'Ischemic Colitis', distinguishing: 'Older age, vascular risk factors' }
      ]
    },
    {
      id: 'yersiniosis',
      name: 'Yersiniosis',
      pathogen: { type: 'Bacterium', name: '<i>Yersinia enterocolitica</i>', gram: 'Gram-negative', shape: 'coccobacillus (psychrophilic)' },
      epidemiology: {
        incidence: 'More common in temperate climates during winter months.',
        risk_groups: ['Children', 'Patients with iron overload states (hemochromatosis, thalassemia, desferrioxamine therapy)'],
        seasonality: 'Winter',
        transmission: 'Contaminated raw/undercooked pork, unpasteurized milk, contaminated water (psychrophilic: multiplies at 4°C in refrigerators!).'
      },
      pathomechanism: {
        steps: [
          'Bacteria translocate across M-cells in the terminal ileum into Peyer patches.',
          'Drainage into mesenteric lymph nodes induces mesenteric lymphadenitis and terminal ileitis (pseudoappendicitis).',
          'In iron overload states or desferrioxamine therapy, siderophilic nature allows rapid bacterial replication leading to fatal sepsis.',
          'Post-infectious immune complex deposition causes HLA-B27 reactive arthritis and erythema nodosum.'
        ],
        virulence_factors: ['Yops (Yersinia outer proteins)', 'Type III Secretion System', 'Yersiniabactin']
      },
      clinical: {
        incubation: '4-7 days',
        onset: 'Gradual',
        symptoms: [
          { name: 'Enterocolitis', description: 'Fever, watery or bloody diarrhea, vomiting.', severity: 'moderate' },
          { name: 'Pseudoappendicitis', description: 'Severe right lower quadrant pain and tenderness mimicking acute appendicitis.', severity: 'severe' },
          { name: 'Erythema nodosum / Arthritis', description: 'Painful erythematous nodules on shins, joint pain weeks after resolution.', severity: 'moderate' }
        ],
        physical_exam: ['Right lower quadrant tenderness', 'Fever', 'Erythema nodosum lesions on lower extremities'],
        complications: ['Reactive arthritis (HLA-B27 associated)', 'Erythema nodosum', 'Severe bacteremia/sepsis (in iron overload)']
      },
      diagnostics: {
        laboratory: [{ test: 'CBC / CRP', finding: 'Leukocytosis, elevated CRP', interpretation: 'Bacterial inflammation' }],
        imaging: [{ modality: 'Abdominal US', finding: 'Terminal ileal wall thickening, enlarged mesenteric lymph nodes, normal appendix', significance: 'Rules out appendicitis' }],
        microbiology: [{ test: 'Stool culture', finding: 'Selective CIN agar (notify lab for cold enrichment at 25°C)', significance: 'Diagnostic gold standard' }]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Supportive Therapy', dose: '-', duration: '-', note: 'Self-limiting in mild non-complicated enterocolitis' }],
          inpatient: [
            { drug: 'Ciprofloxacin', dose: '500 mg PO BID', duration: '7-10 days', note: 'For severe, invasive, or pseudoappendicitis cases' },
            { drug: 'Doxycycline', dose: '100 mg PO BID', duration: '7-10 days', note: 'Alternative agent' }
          ]
        },
        targeted: 'Mild enterocolitis requires supportive care only. Severe, invasive, pseudoappendiceal, or iron-overloaded patients require antimicrobial therapy: Ciprofloxacin 500 mg PO BID, Doxycycline 100 mg PO BID, or Ceftriaxone 1-2 g IV daily.',
        supportive: ['Fluid replacement', 'Analgesia'],
        prevention: ['Avoiding raw pork products', 'Consuming pasteurized milk']
      },
      guidelines: {
        diagnosis: ['Right lower quadrant pain + fever + diarrhea → Abdominal US + stool culture on CIN agar.'],
        treatment_indications: ['Antibiotics indicated ONLY for severe, invasive, pseudoappendiceal, or iron-overloaded cases.'],
        first_line: ['Ciprofloxacin 500 mg PO BID or Doxycycline 100 mg PO BID for 7-10 days.'],
        supportive: ['Fluid replacement.'],
        prevention: ['Thorough pork cooking.'],
        dosing: { adult: { ciprofloxacin: '500 mg PO BID for 7-10 days', doxycycline: '100 mg PO BID for 7-10 days' }, pediatric: 'TMP-SMX or Ceftriaxone in severe cases.' },
        references: ['CDC Yersinia Guidance: https://www.cdc.gov/yersinia/']
      },
      prognosis: { mortality: 'Low (<0.1%); high (30-50%) if bacteremia occurs in iron overload', prognostic_scores: [], factors: 'Iron overload, immunocompromise' },
      differential: [
        { disease: 'Acute Appendicitis', distinguishing: 'Ultrasound/CT findings, surgical peritoneal signs' },
        { disease: 'Crohn\'s Disease', distinguishing: 'Chronic history, endoscopic/histologic findings' }
      ]
    },
    {
      id: 'giardiasis',
      name: 'Giardiasis',
      pathogen: { type: 'Protozoan', name: '<i>Giardia duodenalis (lamblia)</i>', gram: '-', shape: 'pear-shaped (trophozoite) / oval (cyst)' },
      epidemiology: {
        incidence: 'Most common parasitic intestinal infection worldwide.',
        risk_groups: ['Young children in daycare', 'Backpackers/hikers consuming untreated stream water', 'Selective IgA deficiency patients'],
        seasonality: 'Late summer and early autumn',
        transmission: 'Fecal-oral (ingestion of chlorine-resistant cysts in contaminated surface water, food, or hands).'
      },
      pathomechanism: {
        steps: [
          'Ingested cysts excyst in the duodenum to release flagellated trophozoites.',
          'Trophozoites attach to upper small intestinal villi using ventral adhesive disks (non-invasive).',
          'Villus atrophy and brush border disaccharidase (lactase) deficiency develop.',
          'Malabsorption of fat and carbohydrates results in greasy, foul-smelling osmotic diarrhea.'
        ],
        virulence_factors: ['Ventral adhesive disk', 'VSP (Variable Surface Proteins)']
      },
      clinical: {
        incubation: '1-3 weeks',
        onset: 'Gradual',
        symptoms: [
          { name: 'Greasy diarrhea', description: 'Persistent, chronic, foul-smelling, pale, greasy (steatorrhea) stools without blood.', severity: 'moderate' },
          { name: 'Bloating and sulfurous burps', description: 'Marked abdominal distension, flatulence, and characteristic rotten-egg smelling eructation.', severity: 'moderate' },
          { name: 'Weight loss', description: 'Significant weight loss due to nutrient and vitamin malabsorption.', severity: 'moderate' }
        ],
        physical_exam: ['Abdominal distension, tympany', 'Diffuse mild abdominal tenderness', 'ABSENCE OF FEVER'],
        complications: ['Chronic malabsorption syndrome', 'Secondary lactose intolerance', 'Growth faltering in children']
      },
      diagnostics: {
        laboratory: [{ test: 'CBC', finding: 'Normal WBC count, NO EOSINOPHILIA (non-tissue-invasive protozoan!)', interpretation: 'Excludes tissue-invasive helminths' }],
        microbiology: [
          { test: 'Stool parasite examination', finding: 'Cysts or trophozoites on microscopic exam', significance: '3 separate stool samples required due to intermittent shedding' },
          { test: 'Stool antigen ELISA / PCR', finding: 'Giardia specific antigen detected', significance: 'Highly sensitive rapid test (>95%)' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Metronidazole', dose: '250-500 mg PO TID (3x daily)', duration: '5-7 days', note: 'Standard first-line regimen' },
            { drug: 'Tinidazole', dose: '2 g PO single dose', duration: 'Single dose', note: 'High efficacy, convenient single dose' }
          ]
        },
        targeted: 'Nitroimidazoles: Metronidazole 250-500 mg PO TID for 5-7 days OR Tinidazole 2 g PO single dose. IN PREGNANCY (especially 1st trimester): Paromomycin 500 mg PO TID for 7 days (non-absorbable luminal agent, completely safe for fetus!).',
        supportive: ['Lactose-free diet for secondary lactase deficiency', 'Fluid replacement'],
        prevention: ['Boiling surface/stream water (min 1 min)', 'Microfiltration (<1 micron filters)']
      },
      guidelines: {
        diagnosis: ['Persistent greasy diarrhea + bloating → 3 stool samples for microscopy or stool antigen ELISA.'],
        treatment_indications: ['All symptomatic confirmed cases must be treated.'],
        first_line: ['Metronidazole 250-500 mg PO TID for 5-7 days OR Tinidazole 2 g PO single dose.'],
        supportive: ['Lactose-free diet.'],
        prevention: ['Water filtration / boiling.'],
        dosing: {
          adult: { metronidazole: '250-500 mg PO TID for 5-7 days', tinidazole: '2 g PO single dose' },
          pregnancy: 'Paromomycin 500 mg PO TID for 7 days (non-absorbable).',
          pediatric: 'Metronidazole 15-30 mg/kg/day PO divided in 3 doses for 5-7 days.'
        },
        references: ['CDC Giardia Guidance: https://www.cdc.gov/parasites/giardia/']
      },
      prognosis: { mortality: 'Excellent (>99% cure rate)', prognostic_scores: [], factors: 'Underlying IgA deficiency' },
      differential: [
        { disease: 'Lactose Intolerance', distinguishing: 'Hydrogen breath test, diet response' },
        { disease: 'Cryptosporidiosis', distinguishing: 'Acid-fast stain, more watery diarrhea' }
      ]
    },
    {
      id: 'amoebiasis',
      name: 'Amebiasis (Amebic Dysentery and Liver Abscess)',
      pathogen: { type: 'Protozoan', name: '<i>Entamoeba histolytica</i>', gram: '-', shape: 'ameboid (trophozoite with ingested RBCs) / 4-nucleated cyst' },
      epidemiology: {
        incidence: 'Endemic in tropical and subtropical regions with low sanitation.',
        risk_groups: ['Travelers/immigrants from tropical areas', 'Men who have sex with men (MSM)', 'Institutionalized individuals'],
        seasonality: 'None',
        transmission: 'Fecal-oral: ingestion of cysts in contaminated water or raw food.'
      },
      pathomechanism: {
        steps: [
          'Ingested 4-nucleated cysts excyst in colonic lumen into motile trophozoites.',
          'Trophozoites adhere to colonic epithelium via Gal/GalNAc lectins and secrete cysteine proteinases, creating classic "flask-shaped" mucosal ulcers.',
          'Trophozoites invade portal circulation and migrate to the liver, lysing hepatocytes to form an "anchovy paste" chocolate-brown amebic liver abscess.'
        ],
        virulence_factors: ['Gal/GalNAc lectin', 'Cysteine proteinases', 'Amebapores']
      },
      clinical: {
        incubation: '2-4 weeks (liver abscess can present months to years later)',
        onset: 'Gradual',
        symptoms: [
          { name: 'Amebic Dysentery', description: 'Gradually worsening bloody-mucoid diarrhea, crampy abdominal pain, low-grade fever.', severity: 'severe' },
          { name: 'Amebic Liver Abscess', description: 'Right upper quadrant pain, high fever, night sweats, hepatomegaly, weight loss (can occur without active intestinal symptoms!).', severity: 'severe' }
        ],
        physical_exam: ['Right upper quadrant tenderness, positive liver percussion tenderness (abscess)', 'Tenderness along colon frame'],
        complications: ['Amebic liver abscess rupture (into pleura, pericardium, or peritoneum)', 'Bowel perforation', 'Ameboma (granuloma mimicking colon carcinoma)', 'Brain abscess']
      },
      diagnostics: {
        laboratory: [{ test: 'CBC / Liver Enzymes', finding: 'Leukocytosis, elevated ALP and GGT', interpretation: 'Liver involvement' }],
        imaging: [{ modality: 'Abdominal US / CT', finding: 'Solitary, round, hypoechoic liver lesion (most commonly right lobe)', significance: 'Detects amebic liver abscess' }],
        microbiology: [
          { test: 'Stool PCR / Antigen ELISA', finding: 'E. histolytica specific DNA/antigen', significance: 'Gold standard (distinguishes E. histolytica from non-pathogenic E. dispar)' },
          { test: 'Serum Serology (IgG)', finding: 'Positive', significance: '>90% sensitive in invasive amebiasis and liver abscess' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Step 1: Metronidazole', dose: '750 mg PO TID', duration: '7-10 days', note: 'Tissue amebicide (kills invasive trophozoites)' },
            { drug: 'Step 2: Paromomycin', dose: '500 mg PO TID', duration: '7 days', note: 'Luminal amebicide (MANDATORY TO ERADICATE CYSTS AND PREVENT RELAPSE!)' }
          ]
        },
        targeted: 'MANDATORY TWO-STEP SEQUENTIAL TREATMENT: 1. Tissue amebicide: Metronidazole 750 mg PO TID for 7-10 days (or Tinidazole 2 g PO daily for 3 days) to eradicate tissue trophozoites. 2. FOLLOWED MANDATORILY BY Luminal amebicide: Paromomycin 500 mg PO TID for 7 days to eliminate luminal cysts and prevent relapse! Liver abscess: Oral Metronidazole is equally effective; drainage required only for imminent rupture or diagnostic uncertainty.',
        supportive: ['Fluid rehydration', 'Pain management'],
        prevention: ['Boiling or filtering water in tropical regions']
      },
      guidelines: {
        diagnosis: ['Bloody stool or liver abscess → Stool PCR/ELISA + Serum serology + Liver US.'],
        treatment_indications: ['ALL E. histolytica infections MUST be treated with two-step therapy!'],
        first_line: ['Metronidazole 750 mg PO TID for 7-10 days THEN Paromomycin 500 mg PO TID for 7 days.'],
        supportive: ['Rehydration.'],
        prevention: ['Water and food hygiene.'],
        dosing: {
          adult: { metronidazole: '750 mg PO TID for 7-10 days', tinidazole: '2 g PO daily for 3 days', paromomycin: '500 mg PO TID for 7 days (luminal eradication!)' },
          pediatric: 'Metronidazole 35-50 mg/kg/day PO in 3 divided doses for 7-10 days.'
        },
        references: ['CDC Amebiasis Guidance: https://www.cdc.gov/parasites/amebiasis/']
      },
      prognosis: { mortality: '<1% with appropriate therapy; 10-20% if liver abscess ruptures', prognostic_scores: [], factors: 'Abscess size, timely luminal paromomycin administration' },
      differential: [
        { disease: 'Pyogenic Bacterial Liver Abscess', distinguishing: 'More septic, positive blood/drainage bacterial cultures, polymicrobial' },
        { disease: 'Shigellosis / EIEC', distinguishing: 'Stool PCR / culture' }
      ]
    },
    {
      id: 'cryptosporidiosis',
      name: 'Cryptosporidiosis',
      pathogen: { type: 'Protozoan', name: '<i>Cryptosporidium hominis / parvum</i>', gram: 'Modified Ziehl-Neelsen acid-fast', shape: '4-8 µm spherical oocyst' },
      epidemiology: {
        incidence: 'Major cause of recreational waterborne outbreaks (swimming pools, splash pads).',
        risk_groups: ['HIV/AIDS patients (CD4 <100/µL - life-threatening opportunistic pathogen!)', 'Young children', 'Veterinarians and animal handlers'],
        seasonality: 'Summer and autumn',
        transmission: 'Fecal-oral: swimming pool water, drinking water (OOCYSTS ARE COMPLETELY RESISTANT TO CHLORINE DISINFECTION!), animal contact.'
      },
      pathomechanism: {
        steps: [
          'Ingested oocysts excyst in the small intestine, releasing sporozoites.',
          'Sporozoites attach to the apical membrane of enterocytes (intracellular, but extracytoplasmic position).',
          'Villus atrophy and crypt hyperplasia cause severe secretory and osmotic diarrhea.',
          'In severe immunocompromise (CD4 <100), infection spreads to biliary tract and pancreatic duct (sclerosing cholangitis).'
        ],
        virulence_factors: ['Chlorine-resistant oocyst wall', 'Secretory proteases']
      },
      clinical: {
        incubation: '7-10 days',
        onset: 'Sudden',
        symptoms: [
          { name: 'Watery diarrhea', description: 'Profuse, voluminous watery diarrhea, accompanied by crampy abdominal pain and fever.', severity: 'moderate' },
          { name: 'AIDS-associated chronic diarrhea', description: 'In CD4 <100/µL, intractable, multi-liter daily watery diarrhea, extreme dehydration, wasting, and cachexia.', severity: 'severe' }
        ],
        physical_exam: ['Severe dehydration signs', 'Wasting, cachexia in HIV patients'],
        complications: ['Severe dehydration and electrolyte collapse', 'Acalculous cholecystitis / Sclerosing cholangitis (in AIDS)', 'Fatal outcome in unmanaged HIV']
      },
      diagnostics: {
        laboratory: [{ test: 'CD4 Count', finding: '<100/µL', interpretation: 'High risk for severe/intractable disease in HIV' }],
        microbiology: [
          { test: 'Stool staining', finding: 'Acid-fast oocysts on modified Ziehl-Neelsen or Kinyoun stain', significance: 'Classic diagnostic method' },
          { test: 'Stool antigen ELISA / PCR', finding: 'Positive for Cryptosporidium', significance: 'Most sensitive diagnostic test' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Nitazoxanide', dose: '500 mg PO BID', duration: '3 days', note: 'For immunocompetent patients' },
            { drug: 'ART (Antiretroviral Therapy)', dose: '-', duration: '-', note: 'IN HIV PATIENTS, IMMUNE RECONSTRUCTION IS THE KEY TO CURE!' }
          ]
        },
        targeted: 'Immunocompetent patients: Supportive rehydration; Nitazoxanide 500 mg PO BID for 3 days if needed. HIV/AIDS patients: THE CORNERSTONE OF TREATMENT IS INITIATING OR OPTIMIZING ANTIRETROVIRAL THERAPY (ART) to raise CD4 count >200/µL (only immune restoration cures the infection!). Nitazoxanide can be used as adjunct.',
        supportive: ['Aggressive oral/IV fluid and electrolyte repletion', 'Enteral or parenteral nutritional support'],
        prevention: ['Boiling drinking water / ultrafiltration (<1 micron)', 'Avoiding public pools for 2 weeks after diarrhea resolves']
      },
      guidelines: {
        diagnosis: ['Persistent watery diarrhea → Modified Ziehl-Neelsen stain or stool PCR.'],
        treatment_indications: ['Immediate ART start in HIV! Nitazoxanide in immunocompetent if symptomatic.'],
        first_line: ['HIV: ART optimization. Immunocompetent: Nitazoxanide 500 mg PO BID for 3 days.'],
        supportive: ['Electrolyte replacement, nutritional support.'],
        prevention: ['Water ultrafiltration.'],
        dosing: { adult: { nitazoxanide: '500 mg PO BID for 3 days (immunocompetent)' }, pediatric: '1-3 yrs: 100 mg BID; 4-11 yrs: 200 mg BID for 3 days.' },
        references: ['CDC Cryptosporidium Guidance: https://www.cdc.gov/parasites/crypto/']
      },
      prognosis: { mortality: 'Good in immunocompetent; high mortality in AIDS (CD4 <50) without ART', prognostic_scores: [], factors: 'CD4+ T-cell count recovery on ART' },
      differential: [
        { disease: 'Giardiasis', distinguishing: 'Greasy stool, sulfurous burping' },
        { disease: 'Cystoisosporiasis / Microsporidiosis', distinguishing: 'Different spore sizes and specialized stains' }
      ]
    },
    {
      id: 'viral_gastroenteritis',
      name: 'Viral Gastroenteritis (Norovirus, Rotavirus, Adenovirus)',
      pathogen: { type: 'Virus', name: '<i>Norovirus, Rotavirus, Enteric Adenovirus (40/41), Astrovirus</i>', gram: 'RNA / DNA', shape: 'Icosahedral non-enveloped viruses' },
      epidemiology: {
        incidence: 'Norovirus: most common cause of epidemic gastroenteritis across all ages. Rotavirus: leading cause of severe infant dehydration.',
        risk_groups: ['Infants and young children (Rotavirus)', 'Elderly, nursing home residents, hospitalized patients (Norovirus)', 'Cruise ship passengers and closed communities'],
        seasonality: 'Winter and early spring ("winter vomiting disease")',
        transmission: 'Fecal-oral, aerosolized vomitus, fomites. Norovirus is EXTREMELY RESISTANT to alcohol-based hand sanitizers!'
      },
      pathomechanism: {
        steps: [
          'Viruses infect mature enterocytes at the villus tips of the small intestine.',
          'Villus blunting leads to brush border lactase loss and osmotic/secretory fluid accumulation.',
          'Rotavirus NSP4 enterotoxin triggers direct intestinal fluid secretion.',
          'Delayed gastric emptying induces severe projectile vomiting.'
        ],
        virulence_factors: ['Environmentally stable capsid', 'NSP4 enterotoxin (Rotavirus)', 'Aerosolization via vomitus']
      },
      clinical: {
        incubation: '12-48 hours (Norovirus); 1-3 days (Rotavirus)',
        onset: 'Hyperacute, sudden',
        symptoms: [
          { name: 'Projectile vomiting', description: 'Abrupt, intense, recurrent vomiting (especially prominent in Norovirus).', severity: 'severe' },
          { name: 'Watery diarrhea', description: 'Profuse watery diarrhea, abdominal cramping, and low-grade fever.', severity: 'moderate' },
          { name: 'Dehydration', description: 'Rapidly evolving hypovolemic dehydration in infants and frail elderly.', severity: 'severe' }
        ],
        physical_exam: ['Dehydration signs (dry mucous membranes, sunken fontanelle in infants, poor turgor)', 'Diffuse abdominal tenderness'],
        complications: ['Severe hypovolemic dehydration', 'Electrolyte disturbances (hypokalemia, hyponatremia)', 'Prerenal azotemia']
      },
      diagnostics: {
        laboratory: [{ test: 'Serum Electrolytes / BUN', finding: 'Hypokalemia, elevated BUN/Creatinine ratio', interpretation: 'Dehydration severity' }],
        microbiology: [
          { test: 'Stool antigen rapid test', finding: 'Positive for Rotavirus or Adenovirus', significance: 'Rapid pediatric bedside diagnosis' },
          { test: 'Stool RT-PCR', finding: 'Norovirus genogroup I/II detected', significance: 'Outbreak investigation' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'Supportive Rehydration', dose: '-', duration: '-', note: 'ANTIBIOTICS ARE COMPLETELY INEFFECTIVE AND FORBIDDEN!' }]
        },
        targeted: 'No specific antiviral agents exist. THERAPY IS STRICTLY SUPPORTIVE: Oral Rehydration Salts (ORS) given in frequent small sips. For intractable vomiting, single-dose Ondansetron (0.15 mg/kg PO/IV) can be administered to suppress vomiting and prevent IV rehydration/hospitalization.',
        supportive: ['ORS administration', 'Antipyretics (Paracetamol)', 'Loperamide is avoided in young children!'],
        prevention: ['Oral Rotavirus vaccination in infants (Rotarix, RotaTeq)', 'HAND HYGIENE WITH SOAP AND WATER (alcohol sanitizers do NOT reliably kill Norovirus!)', 'Surface disinfection with chlorine bleach']
      },
      guidelines: {
        diagnosis: ['Clinical diagnosis for acute vomiting + watery diarrhea; Rotavirus antigen test in infants.'],
        treatment_indications: ['Rehydration and supportive care only!'],
        first_line: ['ORS orally; Ondansetron for intractable vomiting.'],
        supportive: ['Fluid and electrolyte replacement.'],
        prevention: ['Rotavirus vaccine; soap and water handwashing for Norovirus.'],
        dosing: { adult: { ondansetron: '4-8 mg PO/IV PRN for vomiting' }, pediatric: 'Ondansetron 0.15 mg/kg PO/IV single dose.' },
        references: ['CDC Norovirus Guidance: https://www.cdc.gov/norovirus/']
      },
      prognosis: { mortality: 'Very low (<0.01%) in developed countries with adequate fluid management', prognostic_scores: [], factors: 'Age extremes, prompt rehydration' },
      differential: [
        { disease: 'Bacterial Enteritis', distinguishing: 'High fever, bloody stool, positive stool culture' },
        { disease: 'Food Poisoning (S. aureus, B. cereus preformed toxin)', distinguishing: 'Sudden vomiting 1-6 hours post-ingestion' }
      ]
    },
    {
      id: 'cholera',
      name: 'Cholera',
      pathogen: { type: 'Bacterium', name: '<i>Vibrio cholerae</i> (serogroups O1, O139)', gram: 'Gram-negative', shape: 'curved rod (vibrio)' },
      epidemiology: {
        incidence: 'Endemic in parts of Asia, Africa, and Hispaniola; causes explosive epidemic outbreaks in disaster zones.',
        risk_groups: ['People living in extreme poverty', 'Refugees, disaster victims', 'Individuals with blood group O (more severe disease)'],
        seasonality: 'Rainy season',
        transmission: 'Fecal-oral: drinking contaminated water, consuming contaminated seafood.'
      },
      pathomechanism: {
        steps: [
          'Bacteria attach to small intestinal enterocytes via toxin-coregulated pili (TCP) and secrete Cholera Toxin (CT - AB5 toxin).',
          'Toxin subunit A irreversibly ADP-ribosylates Gs-alpha, continuously activating adenylate cyclase.',
          'Surging intracellular cAMP causes massive chloride secretion through CFTR channels and inhibits sodium absorption.',
          'Profound isotonic fluid loss into the intestinal lumen (up to 1 L/hour) results in rapid hypovolemic shock.'
        ],
        virulence_factors: ['Cholera toxin (CT)', 'Toxin-coregulated pilus (TCP)']
      },
      clinical: {
        incubation: 'A few hours to 5 days',
        onset: 'Hyperacute, dramatic',
        symptoms: [
          { name: 'Rice-water diarrhea', description: 'Painless, massive volume, odorless, pale milky-white watery stools with flecks of mucus ("rice-water stools").', severity: 'severe' },
          { name: 'Rapid dehydration', description: 'Profound fluid collapse within hours, severe muscle cramps (due to K+ and HCO3- loss), anuria, hypovolemic shock.', severity: 'severe' }
        ],
        physical_exam: [
          'Profound hypovolemic shock (hypotension, thready pulse)',
          'Washerwoman\'s hands (wrinkled skin, severely decreased turgor)',
          'Sunken eyes, dry mucous membranes',
          'FEVER IS TYPICALLY ABSENT'
        ],
        complications: ['Hypovolemic shock and death (within hours if untreated!)', 'Acute tubular necrosis / AKI', 'Severe hypokalemia and metabolic acidosis']
      },
      diagnostics: {
        laboratory: [{ test: 'CBC / Electrolytes', finding: 'Hemoconcentration, severe hypokalemia, metabolic acidosis', interpretation: 'Massive isotonic volume loss' }],
        microbiology: [
          { test: 'Stool culture', finding: 'Yellow colonies on TCBS (Thiosulfate-Citrate-Bile salts-Sucrose) agar', significance: 'Diagnostic gold standard' },
          { test: 'Rapid dipstick / Darkfield microscopy', finding: 'Darting ("shooting star") motility of vibrios', significance: 'Rapid field identification' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [{ drug: 'WHO Oral Rehydration Salts (ORS)', dose: 'High volume', duration: '-', note: 'Immediate administration for mild/moderate cases' }],
          inpatient: [
            { drug: 'IV Ringer\'s Lactate', dose: '100 mL/kg IV in 3 hours', duration: '-', note: 'LIFE-SAVING in severe shock!' },
            { drug: 'Doxycycline', dose: '300 mg PO single dose', duration: 'Single dose', note: 'Adjunctive antibiotic for adults' },
            { drug: 'Azithromycin', dose: '1 g PO single dose', duration: 'Single dose', note: 'Preferred for pregnant women and children' }
          ]
        },
        targeted: 'IMMEDIATE AGGRESSIVE REHYDRATION IS LIFE-SAVING (WHO ORS orally or IV Ringer\'s Lactate). Antibiotics are secondary but shorten fluid loss and bacterial shedding: Doxycycline 300 mg PO single dose (adults) OR Azithromycin 1 g PO single dose (pregnant women and children).',
        supportive: ['Continuous fluid replacement matching stool loss', 'Potassium and bicarbonate correction'],
        prevention: ['Safe drinking water supply', 'Oral Cholera Vaccines (Dukoral, Shanchol, Euvichol)']
      },
      guidelines: {
        diagnosis: ['Rice-water diarrhea + shock → Immediate cholera suspicion! Stool culture on TCBS agar.'],
        treatment_indications: ['IMMEDIATE aggressive fluid replacement! Antibiotics as secondary adjunct.'],
        first_line: ['Ringer\'s Lactate IV + ORS. Doxycycline 300 mg PO single dose.'],
        supportive: ['Continuous fluid balance monitoring.'],
        prevention: ['Water hygiene, oral cholera vaccines.'],
        dosing: { adult: { doxycycline: '300 mg PO single dose', azithromycin: '1 g PO single dose' }, pediatric: 'Azithromycin 20 mg/kg PO single dose.' },
        references: ['WHO Cholera Guidance: https://www.who.int/news-room/fact-sheets/detail/cholera']
      },
      prognosis: { mortality: '<1% with immediate rehydration; >50% if untreated!', prognostic_scores: [], factors: 'Timeliness of fluid resuscitation' },
      differential: [
        { disease: 'ETEC (Enterotoxigenic E. coli)', distinguishing: 'Less extreme volume loss, travel history' },
        { disease: 'Viral Gastroenteritis', distinguishing: 'Vomiting dominates, smaller stool volume' }
      ]
    },
    {
      id: 'travelers_diarrhea',
      name: 'Traveler\'s Diarrhea',
      pathogen: { type: 'Syndrome', name: '<i>ETEC (most common), Campylobacter, Salmonella, Shigella, Norovirus, Giardia</i>', gram: 'Variable', shape: '-' },
      epidemiology: {
        incidence: 'Affects 20-50% of international travelers visiting developing countries.',
        risk_groups: ['Young adult travelers', 'Immunosuppressed', 'Patients taking proton pump inhibitors (PPIs)'],
        seasonality: 'None',
        transmission: 'Fecal-oral: contaminated water, ice cubes, unpeeled fruit, raw vegetables, street food.'
      },
      pathomechanism: {
        steps: [
          'Travelers encounter unaccustomed bacterial strains (predominantly ETEC) to which they lack local immunity.',
          'Enterotoxin production or mucosal invasion leads to acute secretional or inflammatory diarrhea.'
        ]
      },
      clinical: {
        incubation: 'During travel or within 1-2 weeks after returning',
        onset: 'Acute',
        symptoms: [
          { name: 'Watery diarrhea', description: '3 to 8 loose/watery stools per day, accompanied by crampy abdominal pain and bloating.', severity: 'moderate' },
          { name: 'Fever and dysentery (invasive)', description: 'Indicates invasive pathogen (Campylobacter, Shigella, Salmonella).', severity: 'severe' }
        ],
        physical_exam: ['Mild diffuse abdominal tenderness', 'Dehydration signs'],
        complications: ['Dehydration', 'Post-infectious IBS (occurs in 5-10% of travelers)', 'Reactive arthritis']
      },
      diagnostics: {
        laboratory: [{ test: 'Routine labs', finding: 'Unremarkable', interpretation: 'Not indicated in mild non-invasive cases' }],
        microbiology: [{ test: 'Stool multiplex PCR / culture', finding: 'Pathogen identification', significance: 'Indicated ONLY in severe, febrile, dysenteric, or persistent (>14 days) cases' }]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Rifaximin', dose: '200 mg PO TID', duration: '3 days', note: 'For non-invasive (afebrile, non-bloody) traveler\'s diarrhea' },
            { drug: 'Azithromycin', dose: '1 g PO single dose (or 500 mg daily for 3 days)', duration: '1-3 days', note: 'For severe, febrile, dysenteric cases or travel to SE Asia (high Campylobacter quinolone resistance!)' }
          ]
        },
        targeted: 'CLINICAL GUIDELINES: 1. Mild cases: Rehydration (ORS) + optional Loperamide. 2. Moderate non-invasive cases: Rifaximin 200 mg PO TID for 3 days. 3. Severe, febrile, or dysenteric cases OR travel to South/Southeast Asia: Azithromycin 1000 mg PO single dose OR 500 mg PO daily for 3 days.',
        supportive: ['ORS rehydration', 'Loperamide (ONLY if afebrile and non-bloody stool!)'],
        prevention: ['"Boil it, cook it, peel it, or forget it!"', 'Bottled water consumption', 'Prophylactic Rifaximin reserved only for extremely high-risk immunocompromised travelers']
      },
      guidelines: {
        diagnosis: ['Stool PCR panel for severe/febrile traveler\'s diarrhea or persistent diarrhea.'],
        treatment_indications: ['Antibiotics indicated for severe, febrile, or incapacitating traveler\'s diarrhea.'],
        first_line: ['SE Asia / dysentery: Azithromycin 1 g single dose. Non-invasive: Rifaximin 3x200 mg for 3 days.'],
        supportive: ['ORS. Loperamide only if no fever or bloody stool.'],
        prevention: ['Food and water precautions.'],
        dosing: { adult: { azithromycin: '1 g PO single dose (or 500 mg PO daily for 3 days)', rifaximin: '200 mg PO TID for 3 days' }, pediatric: 'Azithromycin 10 mg/kg PO.' },
        references: ['CDC Traveler\'s Diarrhea Yellow Book: https://wwwnc.cdc.gov/travel/']
      },
      prognosis: { mortality: 'Very low (<0.01%)', prognostic_scores: [], factors: 'Post-infectious IBS development' },
      differential: [
        { disease: 'Giardiasis', distinguishing: 'Persistent (>2 weeks), greasy stool, sulfurous burping' },
        { disease: 'Amebiasis', distinguishing: 'Bloody stool, tropical travel' }
      ]
    },
    {
      id: 'dysentery_syndrome',
      name: 'Dysentery Syndrome',
      pathogen: { type: 'Syndrome', name: '<i>Shigella, EIEC, STEC/EHEC, Campylobacter, Entamoeba histolytica, Salmonella</i>', gram: 'Variable', shape: '-' },
      epidemiology: {
        incidence: 'Infectious disease emergency presentation worldwide.',
        risk_groups: ['Children', 'Elderly', 'Immunocompromised', 'Tropical travelers'],
        seasonality: 'Summer and autumn',
        transmission: 'Fecal-oral route (contaminated food, water, direct contact).'
      },
      pathomechanism: {
        steps: [
          'Invasive pathogens invade colonic epithelial lining.',
          'Severe ulcerative inflammation, mucosal necrosis, and microvascular hemorrhages develop.',
          'In Shiga-toxin producing strains, endothelial damage can trigger HUS.'
        ]
      },
      clinical: {
        incubation: '1-7 days depending on etiology',
        onset: 'Acute',
        symptoms: [
          { name: 'Bloody-mucoid diarrhea', description: 'Frequent, small-volume stools containing overt blood and mucus.', severity: 'severe' },
          { name: 'Tenesmus', description: 'Painful, spasmodic, ineffective urges to evacuate bowel.', severity: 'severe' },
          { name: 'High fever', description: 'Fever with chills and toxicity (EXCEPT in STEC!).', severity: 'severe' }
        ],
        physical_exam: ['Lower abdominal tenderness', 'Fever', 'Toxicity and dehydration signs'],
        complications: ['Hemolytic Uremic Syndrome (HUS - STEC/Shigella)', 'Toxic megacolon', 'Bowel perforation', 'Septic shock']
      },
      diagnostics: {
        laboratory: [{ test: 'CBC / Creatinine', finding: 'Leukocytosis, thrombocytopenia/anemia (HUS screen!)', interpretation: 'Severity and HUS evaluation' }],
        microbiology: [
          { test: 'Stool culture', finding: 'Bacterial pathogens', significance: 'Mandatory' },
          { test: 'Stool Shiga toxin assay / PCR', finding: 'Stx1/Stx2, ipaH detected', significance: 'MANDATORY TO DISTINGUISH STEC FROM SHIGELLA!' },
          { test: 'Stool parasite exam', finding: 'E. histolytica trophozoites/cysts', significance: 'In amebic dysentery suspicion' }
        ]
      },
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Azithromycin', dose: '500 mg PO daily (or 1 g single dose)', duration: '3 days', note: 'Preferred empiric agent (covers Shigella/Campylobacter)' },
            { drug: 'Ceftriaxone', dose: '1-2 g IV q24h', duration: '3-5 days', note: 'For hospitalized or severely ill patients' }
          ]
        },
        targeted: 'CLINICAL MANDATE: 1. If Shiga toxin positive (STEC/EHEC), ANTIBIOTICS ARE STRICTLY CONTRAINDICATED! 2. If Shigella/Campylobacter/EIEC confirmed: Azithromycin 500 mg PO daily for 3 days or Ceftriaxone 1-2 g IV daily. 3. If Entamoeba histolytica confirmed: Metronidazol 750 mg PO TID for 7-10 days, FOLLOWED MANDATORILY BY Paromomycin 500 mg PO TID for 7 days. Antimotility drugs (Loperamide) ARE STRICTLY CONTRAINDICATED!',
        supportive: ['ORS and IV Ringer\'s Lactate rehydration', 'Strict monitoring for HUS development'],
        prevention: ['Contact isolation', 'Rigorous hand hygiene']
      },
      guidelines: {
        diagnosis: ['Bloody-mucoid stool + tenesmus → MANDATORY: Stool culture + Shiga toxin test/PCR + Parasitology.'],
        treatment_indications: ['Empiric Azithromycin started ONLY AFTER excluding STEC!'],
        first_line: ['Azithromycin 500 mg PO daily for 3 days or Ceftriaxone 1-2 g IV.'],
        supportive: ['Aggressive rehydration. Loperamide forbidden!'],
        prevention: ['Contact precautions.'],
        dosing: { adult: { azithromycin: '500 mg PO daily for 3 days', ceftriaxone: '1-2 g IV q24h for 3-5 days' }, pediatric: 'Azithromycin 10 mg/kg/day PO for 3 days.' },
        references: ['IDSA Infectious Diarrhea Guidelines: https://www.idsociety.org/']
      },
      prognosis: { mortality: '1-15% depending on pathogen and HUS development', prognostic_scores: [], factors: 'STEC etiology, HUS development, delayed amebiasis paromomycin treatment' },
      differential: [
        { disease: 'STEC/EHEC', distinguishing: 'No fever, antibiotics worsen outcome!' },
        { disease: 'IBD Acute Flare', distinguishing: 'Negative infective panel, colonoscopy' }
      ]
    }
  ]
};
