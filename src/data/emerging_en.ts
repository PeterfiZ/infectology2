/**
 * c:\Users\Peterfi\OneDrive - Pécsi Tudományegyetem\A folyó ügyek\a gyorsan elintézendő\a leadandó, határidős dolgok\Cikkek, előadások\programok\Infectologia\emerging_en.js
 */
Object.assign(window.diseases, {
  emerging: {
    name: 'Emerging Pathogens',
    icon: '🚨',
    color: '#be185d',
    diseases: [
      {
        id: 'mpox',
        name: 'Mpox (Monkeypox)',
        pathogen: { type: 'Virus', name: '<i>Mpox virus</i> (MPXV)', genome: 'dsDNA, Poxviridae', shape: 'brick-shaped' },
        epidemiology: {
          incidence: 'Global outbreak (2022–), endemic in Central and West Africa',
          risk_groups: ['MSM (Men who have sex with men)', 'Healthcare workers', 'Household contacts'],
          seasonality: 'None',
          transmission: 'Close skin-to-skin contact, respiratory droplets, fomites, zoonotic (rodents)'
        },
        pathomechanism: { 
          steps: [
            'Entry: Virus enters through broken skin, mucous membranes, or respiratory tract.',
            'Replication: Initial replication occurs at the inoculation site and in regional lymph nodes.',
            'Viremia: The virus spreads via the bloodstream to the skin and internal organs.',
            'Lesion formation: Viral replication in the skin causes inflammation, necrosis, and characteristic pox-like lesions (macule-papule-vesicle-pustule-scab).'
          ],
          virulence_factors: ['Immunomodulatory proteins (host immune evasion)']
        },
        clinical: {
          incubation: '5–21 days',
          onset: 'Acute', // MORE ACCURATE: Acute is preferred over Sudden
          symptoms: [
            { name: 'Prodrome', description: 'Fever, intense headache, lymphadenopathy, back pain, myalgia, and intense asthenia.', severity: 'mild' },
            { name: 'Lymphadenopathy', description: 'Distinctive feature (cervical, inguinal), distinguishing it from smallpox and chickenpox.', severity: 'moderate' },
            { name: 'Rash', description: 'Appears 1-3 days after fever. Starts on face, spreads centrifugally (palms/soles involved). Stages: Macule → Papule → Vesicle → Pustule (umbilicated) → Scab. Lesions are often painful, then itchy.', severity: 'moderate' },
            { name: 'Mucosal symptoms', description: 'Oral, genital, and perianal lesions. Proctitis (rectal pain) is common in sexual transmission.', severity: 'severe' }
          ],
          physical_exam: [
            'Centrifugal distribution of rash (including palms and soles)',
            'Tender lymphadenopathy',
            'Anogenital lesions',
            'Fever'
          ],
          complications: ['Secondary bacterial infection', 'Bronchopneumonia', 'Sepsis', 'Encephalitis', 'Keratitis (leading to corneal scarring)']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Non-specific (leukocytosis or leucopenia)', interpretation: '-' }],
          microbiology: [
            { test: 'NAAT (PCR)', finding: 'MPXV DNA', significance: 'Gold standard (swab from lesion base/roof)' },
            { test: 'Electron microscopy', finding: 'Poxvirus morphology', significance: 'Research/Public health labs' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive care', dose: '-', duration: '-', note: 'Analgesia, hydration, wound care, strict isolation' }]
          },
          targeted: 'Tecovirimat (TPOXX) indicated for severe disease or immunocompromised patients.',
          supportive: ['Analgesics (NSAIDs/Opioids)', 'Fluid resuscitation'],
          prevention: ['Vaccination (JYNNEOS - modified vaccinia Ankara)', 'Infection control', 'Contact tracing']
        },
        prognosis: { mortality: 'Clade IIb (global): <0.1%; Clade I (Congo Basin): up to 10%', prognostic_scores: [], factors: 'Clade type, immune status, access to care' }
      },
      {
        id: 'nipah',
        name: 'Nipah Virus (NiV)',
        pathogen: { type: 'Virus', name: '<i>Nipah virus</i> (NiV)', genome: 'ssRNA (-), Paramyxoviridae', shape: 'pleomorphic' },
        epidemiology: {
          incidence: 'Sporadic outbreaks (South and Southeast Asia)',
          risk_groups: ['Pig farmers', 'Date palm sap collectors/consumers', 'Close contacts of cases'],
          seasonality: 'December–May (Bangladesh)',
          transmission: 'Direct contact with bats (Pteropus), consumption of contaminated date palm sap, pigs (intermediate host), human-to-human'
        },
        pathomechanism: {
          steps: [
            'Entry: Ingestion of contaminated food (e.g., date palm sap) or direct contact with infected animals (pigs, bats).',
            'Dissemination: The virus enters the bloodstream (viremia), either free or bound to leukocytes.',
            'Vasculitis: It infects endothelial cells (via Ephrin-B2 receptor), causing systemic vasculitis, thrombosis, and tissue ischemia.',
            'Tropism: High affinity for the CNS (crossing the blood-brain barrier) and lungs, causing severe inflammation and necrosis.'
          ],
          virulence_factors: ['Fusion (F) and Attachment (G) proteins', 'Interferon antagonists (P/V/W proteins)']
        },
        clinical: {
          incubation: '4–14 days (up to 45 days recorded)',
          onset: 'Acute',
          symptoms: [
            { name: 'Prodrome', description: 'Fever, headache, myalgia, sore throat, and vomiting.', severity: 'moderate' },
            { name: 'Respiratory symptoms', description: 'Cough, dyspnea, progressing to atypical pneumonia and acute respiratory distress syndrome (ARDS).', severity: 'severe' },
            { name: 'Encephalitis', description: 'Dizziness, altered consciousness, rapidly progressing to coma (within 24–48h). Brainstem signs (areflexia, hypotonia) are common.', severity: 'severe' }
          ],
          physical_exam: ['Hyperpyrexia', 'Nuchal rigidity', 'Altered mental status (GCS)', 'Segmental myoclonus', 'Hyporeflexia'],
          complications: ['Fulminant encephalitis', 'ARDS', 'Relapsed/Late-onset encephalitis', 'Death']
        },
        diagnostics: {
          laboratory: [{ test: 'CBC', finding: 'Thrombocytopenia, leukopenia', interpretation: '-' }],
          imaging: [{ modality: 'Brain MRI', finding: 'Small, confluent T2-hyperintense lesions', significance: 'Vascular encephalitis' }],
          microbiology: [
            { test: 'RT-PCR', finding: 'NiV RNA (throat swab, blood, urine, CSF)', significance: 'Diagnostic during acute phase' },
            { test: 'Serology (ELISA)', finding: 'IgM/IgG seroconversion', significance: 'Confirmatory' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'N/A', dose: '-', duration: '-', note: 'Medical emergency; requires immediate isolation and ICU care' }]
          },
          targeted: 'No approved antiviral. Monoclonal antibody (m102.4) and Ribavirin (limited evidence).',
          supportive: ['Mechanical ventilation', 'Seizure management', 'Correction of electrolyte imbalances'],
          prevention: ['Avoid Pteropus bat habitats', 'Boil raw date palm sap', 'Culling of infected livestock', 'Standard, contact, and droplet precautions']
        },
        prognosis: { mortality: 'High (40–75%)', prognostic_scores: [], factors: 'Neurological involvement, ARDS, level of supportive care' }
      },
      {
        id: 'oropouche',
        name: 'Oropouche Virus Disease (Oropouche Fever)',
        pathogen: { type: 'Virus', name: '<i>Oropouche virus</i> (OROV)', genome: 'segmented ssRNA (-), Peribunyaviridae', shape: 'spherical, enveloped' },
        epidemiology: {
          incidence: 'Endemic in Central and South America (especially the Amazon basin; recent urban outbreaks).',
          risk_groups: ['Residents or travelers in forested/tropical regions, pregnant individuals (due to risk of vertical transmission).'],
          seasonality: 'More common during the rainy season (promoting vector proliferation).',
          transmission: 'Vector-borne: primarily through the bite of the biting midge <i>Culicoides paraensis</i>, secondarily by the mosquito <i>Culex quinquefasciatus</i>. No direct person-to-person transmission (except maternal-fetal).'
        },
        pathomechanism: {
          steps: [
            'Inoculation: The virus is introduced into the skin and capillaries through the bite of an infected midge or mosquito.',
            'Dissemination: Following localized replication, the virus enters the bloodstream (viremia), causing sudden systemic, flu-like symptoms.',
            'Tropism and Relapse: The virus infects skeletal muscle and the nervous system. In about 60% of patients, symptoms recur days or weeks after initial recovery due to secondary viremic waves.',
            'Neurotropism and Congenital Risk: The virus can cross the blood-brain barrier to cause aseptic meningitis or encephalitis. In pregnant women, vertical transmission can lead to fetal loss or congenital microcephaly.'
          ],
          virulence_factors: ['Non-structural proteins NSs and NSm (interferon antagonist, host immune evasion)']
        },
        clinical: {
          incubation: '3–12 days (usually 4–8 days)',
          onset: 'Acute',
          symptoms: [
            { name: 'Febrile phase', description: 'Sudden onset of high fever, chills, severe headache, retro-orbital pain, photophobia, marked myalgia, and arthralgia.', severity: 'moderate' },
            { name: 'Cutaneous & Gastrointestinal signs', description: 'Maculopapular rash on the trunk and limbs, nausea, vomiting, and occasionally mild hemorrhagic manifestations (epistaxis, petechiae).', severity: 'moderate' },
            { name: 'Relapse (Recurrent phase)', description: 'In ~60% of cases, symptoms reappear in the same or milder form 2 to 10 days after initial improvement. Multiple relapses can occur.', severity: 'moderate' },
            { name: 'Neurological & Congenital complications', description: 'Aseptic meningitis (nuchal rigidity, meningeal signs) or encephalitis. Vertical transmission in pregnant women can cause miscarriage, stillbirth, or microcephaly.', severity: 'severe' }
          ],
          physical_exam: [
            'High fever and conjunctival injection (red eyes)',
            'Maculopapular rash',
            'Meningeal signs (nuchal rigidity in aseptic meningitis)',
            'Myalgia and joint tenderness'
          ],
          complications: ['Aseptic meningitis', 'Encephalitis', 'Pregnancy complications: spontaneous abortion, fetal death, congenital malformations (e.g., microcephaly)', 'Prolonged asthenia']
        },
        diagnostics: {
          laboratory: [{ test: 'Routine labs', finding: 'Leukopenia, lymphopenia, mild thrombocytopenia, slightly elevated CRP and transaminases', interpretation: 'Typical non-specific viral profile' }],
          imaging: [{ modality: 'Brain MRI/CT', finding: 'Meningeal enhancement in aseptic meningitis', significance: 'Indicated for suspected neurological complications' }],
          microbiology: [
            { test: 'RT-PCR (blood, serum, CSF)', finding: 'OROV RNA positive', significance: 'First 5–7 days from symptom onset (acute phase)' },
            { test: 'Serology (ELISA - serum, CSF)', finding: 'Specific IgM and IgG antibodies', significance: 'Detectable from day 5–6 of illness. CSF IgM confirms aseptic meningitis.' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Supportive care', dose: '-', duration: '-', note: 'Bed rest, oral rehydration, and symptomatic relief' }]
          },
          targeted: 'No approved specific antiviral therapy.',
          supportive: ['Analgesics and antipyretics (acetaminophen preferred)', 'Avoid aspirin and other NSAIDs (e.g., ibuprofen) until dengue is ruled out due to bleeding risk', 'Fluid and electrolyte replacement'],
          prevention: ['Vector control (use of fine mesh bed nets, repellents containing DEET or picaridin, protective clothing)', 'Note: standard mosquito nets may not block tiny Culicoides midges (micro-mesh required)', 'Travel advisories for pregnant individuals', 'No vaccine available']
        },
        prognosis: { mortality: 'Very low (<0.1%), though rare fatal cases have been reported recently. High fetal mortality if vertical transmission occurs.', prognostic_scores: [], factors: 'Age, pregnancy, immune status, neurological involvement' }
      }
    ]
  }
});
