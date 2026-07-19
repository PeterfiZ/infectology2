import { Category } from '../types';

export const gastrointestinalEn: Category = {
  name: 'Gastrointestinal Infections',
  icon: '🦠',
  color: '#dc2626',
  tables: [
    {
      title: 'Differential Diagnosis of Diarrheal Illnesses',
      headers: ['Pathogen', 'Clinical Presentation', 'Transmission / Risk', 'Diagnostics', 'Treatment'],
      rows: [
        ['Campylobacter jejuni', 'Fever, crampy abdominal pain (can mimic appendicitis), watery/bloody stools', 'Poultry, unpasteurized milk', 'Stool culture, PCR', 'Supportive; Severe/risk: Azithromycin 500mg daily for 3 days'],
        ['Salmonella enteritidis', 'Fever, nausea, vomiting, watery diarrhea, rarely bloody', 'Eggs, poultry, reptiles', 'Stool culture', 'Supportive; Severe/risk (>65 years, immunosuppr.): Ciprofloxacin or Ceftriaxone'],
        ['Shigella spp.', 'High fever, tenesmus, small volume bloody/mucoid stools (dysentery)', 'Fecal-oral, person-to-person (very low infectious dose)', 'Stool culture, PCR', 'Ciprofloxacin or Azithromycin recommended (reduces transmission, shortens illness)'],
        ['EHEC (STEC)', 'Watery, then highly bloody diarrhea, with no or mild fever. Risk of HUS!', 'Raw beef, contaminated vegetables', 'Stool Shiga-toxin ELISA/PCR', 'Supportive. ANTIBIOTICS FORBIDDEN (increases toxin release and HUS risk!)'],
        ['Clostridioides difficile', 'Watery, foul-smelling diarrhea, fever, leukocytosis. Pseudomembranous colitis.', 'Post-antibiotic use (clindamycin, quinolones, cephalosporins, PPIs)', 'Stool toxin A+B and GDH, PCR', 'Vancomycin 4x125mg PO or Fidaxomicin 2x200mg PO for 10 days'],
        ['Vibrio cholerae', 'Extreme volume, painless, "rice-water" watery stools, rapid dehydration', 'Contaminated water, seafood', 'Special culture (TCBS), PCR', 'Immediate aggressive rehydration (main step!); Doxycycline (shortens duration)'],
        ['Yersinia enterocolitica', 'Fever, right lower quadrant pain (pseudoappendicitis), diarrhea', 'Pork, contaminated milk', 'Stool culture (cold enrichment)', 'Supportive; Severe: Ciprofloxacin or TMP/SMX'],
        ['Rotavirus', 'Vomiting, fever, watery diarrhea mainly in young children', 'Fecal-oral', 'Stool antigen rapid test, PCR', 'Supportive (rehydration). Vaccine available!'],
        ['Norovirus', 'Sudden onset of severe vomiting, watery diarrhea, mild fever. Outbreaks in closed communities.', 'Fecal-oral, aerosols (from vomiting), shellfish', 'Stool PCR', 'Supportive (rehydration). Highly contagious!'],
        ['Giardia duodenalis', 'Chronic, greasy, foul-smelling diarrhea, weight loss, bloating, malabsorption', 'Contaminated water (mountain streams), fecal-oral', 'Stool microscopy (cysts/trophozoites), antigen rapid test', 'Metronidazole 3x250-500mg for 5-7 days, or Tinidazole'],
        ['Cryptosporidium parvum', 'Watery diarrhea, self-limiting in immunocompetent, chronic/severe in HIV', 'Water (swimming pools - chlorine-resistant cysts)', 'Acid-fast stain (stool), antigen rapid test, PCR', 'Supportive; Nitazoxanide; HIV: antiretroviral therapy (ART) for immune reconstruction']
      ]
    }
  ],
  diseases: [
    {
      id: 'campylobacter',
      name: 'Campylobacteriosis',
      pathogen: { type: 'Bacterium', name: '<i>Campylobacter jejuni</i>', gram: 'Gram-negative', shape: 'curved rod (gull-wing shaped)' },
      epidemiology: {
        incidence: 'Most common bacterial gastroenteritis in developed countries',
        risk_groups: ['Young children', 'Young adults', 'Immunosuppressed'],
        seasonality: 'Summer and early autumn',
        transmission: 'Zoonosis (undercooked poultry, unpasteurized milk, contaminated water)'
      },
      pathomechanism: {
        steps: [
          'Adherence and Invasion: The bacterium adheres to epithelial cells, then invades the ileum and colon.',
          'Cytotoxin Production: Cytolethal distending toxin (CDT) is produced, which inhibits cell division and causes cell death.',
          'Inflammatory Response: Intense inflammation develops in the lamina propria (WBC infiltration), leading to mucosal ulcers and bloody diarrhea.',
          'Autoimmunity: The bacterium\'s lipooligosaccharide (LOS) shows molecular mimicry with gangliosides (GM1) of human peripheral nerves, which can trigger Guillain-Barré syndrome after infection.'
        ],
        virulence_factors: ['Flagella (motility)', 'Cytolethal distending toxin (CDT)', 'LOS (molecular mimicry)']
      },
      clinical: {
        incubation: '1-7 days (average 2-5 days)',
        onset: 'Sudden, often with flu-like prodrome',
        symptoms: [
          { name: 'Prodrome', description: 'Fever, headache, myalgia precede abdominal symptoms (by up to 12-24 hours).', severity: 'moderate' },
          { name: 'Abdominal pain', description: 'Severe, crampy abdominal pain, often localized to the right lower quadrant (pseudoappendicitis).', severity: 'severe' },
          { name: 'Diarrhea', description: 'Initially watery, then loose, mucoid, and distinctly bloody stools (up to 10+ times a day).', severity: 'severe' }
        ],
        physical_exam: [
          'Diffuse abdominal tenderness, sometimes with RLQ dominance',
          'Fever (often >38.5°C)',
          'Signs of dehydration (dry mucous membranes, decreased skin turgor)'
        ],
        complications: ['Guillain-Barré syndrome (GBS - 1/1000 cases)', 'Reactive arthritis (Reiter\'s syndrome)', 'IBS (post-infectious)', 'Erythema nodosum']
      },
      diagnostics: {
        laboratory: [
          { test: 'CBC', finding: 'Leukocytosis, left shift', interpretation: 'Infiltrative inflammation' },
          { test: 'Creatinine', finding: 'May be elevated', interpretation: 'Prerenal kidney injury due to dehydration' }
        ],
        imaging: [
          { modality: 'Abdominal/pelvic CT/US', finding: 'Terminal ileitis, colitis, lymphadenopathy', significance: 'Helps rule out appendicitis' }
        ],
        microbiology: [
          { test: 'Stool culture', finding: 'Selective media (Campy-Agar), microaerophilic environment, at 42°C', significance: 'Traditional diagnosis (slow)' },
          { test: 'Stool PCR', finding: 'Positive', significance: 'Rapid and highly sensitive (part of multiplex panels)' }
        ]
      },
      differential: [
        { disease: 'Acute appendicitis', distinguishing: 'Fever+pain without diarrhea, localized abdominal status, US/CT' },
        { disease: 'Other infiltrative bacterial diarrhea (Salmonella, Shigella, EIEC)', distinguishing: 'Stool culture or PCR' },
        { disease: 'Inflammatory bowel disease (IBD) first flare', distinguishing: 'History, endoscopy, histology' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Supportive', dose: '-', duration: '-', note: 'Fluid and electrolyte replacement (ORAL REHYDRATION SALTS - ORS)' }
          ],
          inpatient: [
            { drug: 'Crystalloid infusion', dose: 'IV as needed', duration: '-', note: 'In case of severe dehydration or oral intolerance' }
          ]
        },
        targeted: 'Treatment indicated: high fever, bloody stools, >8 stools/day, pregnancy, immunosuppression. First choice: Azithromycin 500 mg PO daily for 3 days. Alternative: Ciprofloxacin 2x500 mg PO for 3 days (high resistance!).',
        supportive: ['Fluid replacement', 'Antipyretics (paracetamol)', 'Loperamide is CONTRAINDICATED in invasive/bloody diarrhea!'],
        prevention: ['Thorough handwashing', 'Proper cooking of poultry', 'Avoid cross-contamination in the kitchen', 'Avoid unpasteurized milk']
      },
      prognosis: {
        mortality: 'Very low (<0.1%)',
        factors: 'Old age, severe comorbidities, immunosuppression'
      }
    },
    {
      id: 'c_difficile',
      name: 'Clostridioides difficile Infection (CDI)',
      pathogen: { type: 'Bacterium', name: '<i>Clostridioides difficile</i>', gram: 'Gram-positive', shape: 'rod (spore-forming, anaerobic)' },
      epidemiology: {
        incidence: 'Most common nosocomial diarrheal disease',
        risk_groups: ['Elderly (>65 years)', 'Antibiotic users (clindamycin, fluoroquinolones, cephalosporins)', 'Prolonged hospitalization', 'PPI (proton pump inhibitor) use'],
        seasonality: 'None',
        transmission: 'Fecal-oral (via spores - resistant to alcohol-based hand rubs!)'
      },
      pathomechanism: {
        steps: [
          'Flora Dysbiosis: Antibiotic therapy destroys normal gut flora, allowing C. difficile to colonize and overgrow.',
          'Spore Germination: Ingested spores germinate in the small intestine in response to bile acids.',
          'Toxin Production: Vegetative cells colonize the colon and produce Toxin A (enterotoxin) and Toxin B (cytotoxin). Certain strains (e.g., BI/NAP1/027) also produce binary toxin (CDT).',
          'Epithelial Damage: Toxins inactive Rho GTPases, disrupting the cell cytoskeleton, causing cell death and inflammation.',
          'Pseudomembrane Formation: Dead epithelial cells, fibrin, and inflammatory cells form yellowish-white plaques (pseudomembranes) on the colonic mucosa.'
        ],
        virulence_factors: ['Toxin A (TcdA)', 'Toxin B (TcdB - 10x more potent)', 'Spore formation', 'Binary toxin (CDT)']
      },
      clinical: {
        incubation: 'During or after antibiotic use (up to 8 weeks later)',
        onset: 'Acute or subacute',
        symptoms: [
          { name: 'Diarrhea', description: 'Watery, abundant, characteristically foul-smelling (horse stable odor) diarrhea (3-15+ times a day).', severity: 'moderate' },
          { name: 'Abdominal pain', description: 'Crampy lower abdominal pain, diffuse tenderness.', severity: 'moderate' },
          { name: 'Systemic signs', description: 'Fever, marked leukocytosis, dehydration, anorexia.', severity: 'severe' },
          { name: 'Complicated signs', description: 'In toxic megacolon, diarrhea may stop (due to paralytic ileus), leading to perforation and sepsis.', severity: 'severe' }
        ],
        physical_exam: [
          'Diffuse abdominal tenderness',
          'Fever',
          'In toxic megacolon: marked abdominal distension, guarding (defence), hypotension, tachycardia'
        ],
        complications: ['Toxic megacolon', 'Bowel perforation', 'Sepsis', 'Dehydration, renal failure', 'Electrolyte disturbances (hypokalemia)']
      },
      diagnostics: {
        laboratory: [
          { test: 'CBC', finding: 'Marked leukocytosis (WBC >15 G/L indicates severe infection)', interpretation: 'Systemic inflammation' },
          { test: 'Albumin', finding: '<30 g/L (indicates severe infection)', interpretation: 'Protein-losing enteropathy' },
          { test: 'Creatinine', finding: '>1.5x increase from baseline (indicates severe infection)', interpretation: 'Renal involvement' }
        ],
        imaging: [
          { modality: 'Abdominal/pelvic CT', finding: 'Colonic wall thickening ("accordion sign"), ascites', significance: 'Helps evaluate severity' },
          { modality: 'Abdominal X-ray', finding: 'Dilated colon (>6 cm)', significance: 'Mandatory if toxic megacolon is suspected' }
        ],
        microbiology: [
          { test: 'Two-step stool testing', finding: 'Step 1: GDH (Glutamate dehydrogenase) antigen + Toxin A/B ELISA. Step 2: if GDH+ but Toxin-, then PCR (toxigenic gene)', significance: 'ESCmid/IDSA recommended algorithm' }
        ]
      },
      differential: [
        { disease: 'Other antibiotic-associated diarrhea (AAD)', distinguishing: 'Stool CDI test negative, milder course' },
        { disease: 'Inflammatory bowel disease (IBD) flare', distinguishing: 'CDI test negative, biopsy (though CDI can coexist with IBD!)' },
        { disease: 'Ischemic colitis', distinguishing: 'Old age, cardiovascular risk, sudden left-sided abdominal pain and bloody stools' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Discontinuation of inciting antibiotic', dose: '-', duration: '-', note: 'In all cases, if clinically feasible' }
          ],
          inpatient: [
            { drug: 'Fluid and electrolyte replacement', dose: 'IV as needed', duration: '-', note: 'Crucial step' }
          ]
        },
        targeted: 'Treatment (ESCmid 2021/IDSA): 1. Non-severe/Severe CDI first episode: Fidaxomicin 2x200 mg PO for 10 days (first choice) OR Vancomycin 4x125 mg PO for 10 days. (Metronidazole is only an alternative if others are unavailable, in mild cases!). 2. Severe, fulminant CDI (ileus/shock): Vancomycin 4x500 mg PO/via tube + Metronidazole 3x500 mg IV + intracolonic Vancomycin. 3. First recurrence: Fidaxomicin (if Vanco used first) or Vanco taper/pulsatile regimen. 4. Multiple recurrences: Fecal microbiota transplantation (FMT).',
        supportive: ['Probiotics (weak evidence, Saccharomyces boulardii may be considered)', 'Strict contact precautions, handwashing with soap and water (alcohol is ineffective!)'],
        prevention: ['Rational antibiotic use (antimicrobial stewardship)', 'Contact isolation in hospitals', 'Environmental cleaning with sporicidal agents (e.g., chlorine-based)']
      },
      prognosis: {
        mortality: 'Uncomplicated: <5%; Fulminant/Toxic megacolon: >30%',
        factors: 'Age, renal failure, degree of leukocytosis, number of recurrences (risk increases with each recurrence)'
      }
    }
  ]
};
