Object.assign(window.diseases, {
  sepsis_systemic: {
    name: 'Sepsis and Systemic Infections',
    icon: window.diseaseMetadata.sepsis_systemic.icon,
    color: window.diseaseMetadata.sepsis_systemic.color,
    diseases: [
      {
        id: "sepsis",
    name: "Sepsis and Septic Shock",
    pathogen: {
        "type": "Syndrome",
        "name": "Dysregulated host response triggered by bacterial (Gram-positive/negative), fungal, viral, or parasitic pathogens",
        "gram": "Variable",
        "shape": "Variable"
    },
    epidemiology: {
        "incidence": "Approximately 49 million cases and 11 million deaths worldwide per year (about 20% of all deaths).",
        "risk_groups": [
            "Adults over 65 years of age",
            "Infants under 1 year of age",
            "Immunosuppressed patients (e.g., chemotherapy, HIV)",
            "Patients with chronic disease (diabetes, renal failure, COPD, liver cirrhosis)",
            "Asplenic patients",
            "Patients with invasive devices (catheters, mechanical ventilation)"
        ],
        "seasonality": "No direct seasonality, but more common in winter as a complication of respiratory infections (influenza, COVID-19).",
        "transmission": "The sepsis syndrome itself is not contagious, but the triggering infection (e.g., meningococcus, pneumococcus) may be transmissible."
    },
    pathomechanism: {
        "steps": [
            "Pathogens or their components (PAMPs - e.g., endotoxins, peptidoglycans) bind to pattern recognition receptors (PRRs, e.g., TLRs) on the host's immune cells.",
            "The host mounts a dysregulated inflammatory response: massive release of pro-inflammatory (TNF-alpha, IL-1, IL-6) and anti-inflammatory cytokines (cytokine storm).",
            "Systemic endothelial activation and damage occur, leading to increased capillary permeability (fluid leakage into the interstitium) and hypovolemia.",
            "The coagulation system is activated (via tissue factor expression) alongside inhibition of natural anticoagulant pathways (protein C, antithrombin) and impaired fibrinolysis, leading to microthrombus formation (DIC).",
            "Microcirculatory disturbances, vasodilation, tissue hypoperfusion, and mitochondrial dysfunction (cellular dysoxia) drive progressive organ damage (MODS)."
        ],
        "virulence_factors": [
            "Lipopolysaccharide (LPS / endotoxin) - in Gram-negative organisms",
            "Lipoteichoic acid and peptidoglycan - in Gram-positive organisms",
            "Superantigens (e.g., TSST-1 in Staphylococcus aureus)",
            "Bacterial capsule (inhibits phagocytosis)",
            "Exotoxins (e.g., alpha-toxin, pneumolysin)",
            "Siderophores (facilitate iron acquisition)"
        ]
    },
    clinical: {
        "incubation": "Depends on the underlying infection (hours to days).",
        "onset": "Sudden, extremely rapid progression (septic shock can develop within hours).",
        "symptoms": [
            {
                "name": "Fever or Hypothermia",
                "description": ">38.3°C or <36.0°C (in elderly or immunosuppressed patients, only hypothermia or normothermia may be observed)",
                "severity": "severe"
            },
            {
                "name": "Acute mental status change / Encephalopathy",
                "description": "GCS < 15, new-onset confusion, delirium, agitation, or lethargy",
                "severity": "severe"
            },
            {
                "name": "Hypotension",
                "description": "Systolic blood pressure < 100 mmHg or mean arterial pressure (MAP) < 65 mmHg",
                "severity": "severe"
            },
            {
                "name": "Tachypnea",
                "description": "Respiratory rate > 22/min (an early sign of compensatory respiratory alkalosis and tissue hypoxia)",
                "severity": "moderate"
            },
            {
                "name": "Oliguria",
                "description": "Urine output < 0.5 ml/kg/hour for at least 2 hours despite adequate fluid resuscitation",
                "severity": "severe"
            },
            {
                "name": "Peripheral perfusion disturbance",
                "description": "Mottled skin (mainly on the knees), cold, clammy extremities due to redistribution of circulation",
                "severity": "severe"
            }
        ],
        "physical_exam": [
            "Fever (>38.3°C) or hypothermia (<36.0°C)",
            "Tachycardia (>90/min)",
            "Tachypnea (>20/min or PaCO2 <32 mmHg)",
            "Prolonged capillary refill time (>3 seconds)",
            "Mottled skin (mottling score)",
            "Acute confusion, disorientation"
        ],
        "complications": [
            "Septic shock (persistent hypotension requiring vasopressors to maintain MAP >= 65 mmHg, and lactate > 2 mmol/L despite adequate fluid resuscitation)",
            "ARDS (acute respiratory distress syndrome)",
            "Acute kidney injury (AKI) requiring renal replacement therapy",
            "DIC (disseminated intravascular coagulation)",
            "Sepsis-induced myocardial dysfunction",
            "Multiple organ dysfunction syndrome (MODS)",
            "Death"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Chest X-ray / CT",
                "finding": "Infiltrates, lobar pneumonia, bilateral diffuse opacities suggestive of ARDS.",
                "significance": "Confirmation of a pulmonary focus and diagnosis of ARDS."
            },
            {
                "modality": "Abdominal ultrasound / CT",
                "finding": "Free abdominal fluid, gallbladder distension, abscesses, inflammatory bowel wall thickening.",
                "significance": "Identification of an intra-abdominal focus and planning of source control (e.g., drainage, surgery)."
            }
        ],
        "laboratory": [
            {
                "test": "Serum lactate",
                "finding": "> 2 mmol/L",
                "interpretation": "Marker of tissue hypoperfusion and anaerobic metabolism; serial measurement is key to tracking lactate clearance."
            },
            {
                "test": "Procalcitonin (PCT) / CRP",
                "finding": "Markedly elevated values",
                "interpretation": "Supports suspicion of systemic bacterial infection; PCT kinetics help guide safe discontinuation of antibiotic therapy."
            },
            {
                "test": "Complete blood count and coagulation panel",
                "finding": "Leukocytosis (>12 G/L) or leukopenia (<4 G/L), thrombocytopenia (<100 G/L), prolonged INR/aPTT",
                "interpretation": "Sign of systemic inflammatory response and incipient DIC or organ damage."
            }
        ],
        "microbiology": [
            {
                "test": "Blood culture (at least 2 sets: from separate peripheral sites, aerobic and anaerobic bottles)",
                "finding": "Identification of the pathogen and its resistance profile",
                "significance": "Must be drawn immediately before starting empirical antibiotics! Helps guide later de-escalation."
            },
            {
                "test": "Focus-specific cultures (urine, sputum, CSF, wound discharge)",
                "finding": "Bacterial or fungal growth",
                "significance": "Basis for targeted treatment of the primary infectious focus."
            }
        ]
    },
    therapy: {
        "targeted": "Empirical broad-spectrum antibiotics should be given within the first hour, followed by targeted de-escalation once microbiology results are available. Rapid identification and surgical/interventional elimination of the infectious focus (source control, e.g., abscess drainage, removal of necrotic tissue, catheter exchange) is essential, ideally within 6-12 hours of diagnosis.",
        "supportive": [
            "Monitoring dynamic fluid responsiveness (e.g., passive leg raise test, stroke volume variation) to avoid fluid overload",
            "Protective mechanical ventilation in ARDS (low tidal volume: 6 ml/kg, adequate PEEP)",
            "Strict glycemic control (target: 140-180 mg/dl or 7.8-10.0 mmol/l)",
            "Early enteral nutrition",
            "Prophylactic low molecular weight heparin (LMWH) against deep vein thrombosis",
            "Stress ulcer prophylaxis with a proton pump inhibitor (PPI) in high-risk patients",
            "Renal replacement therapy (CRRT) in hemodynamically unstable acute kidney injury"
        ],
        "prevention": [
            "Strict adherence to hospital infection control and hygiene protocols (hand hygiene, isolation)",
            "Vaccination (Streptococcus pneumoniae, influenza, SARS-CoV-2, Neisseria meningitidis)",
            "Avoiding unnecessary use of invasive devices (urinary catheters, central venous catheters) and prompt removal",
            "Early surgical debridement of wounds"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Fluid resuscitation (balanced crystalloids, e.g., Ringer's lactate)",
                    "dose": "30 ml/kg",
                    "duration": "Within the first 3 hours",
                    "note": "Mandatory in cases of hypotension or lactate >= 4 mmol/L. Synthetic colloids (HES, gelatin) should be avoided due to the risk of renal failure. Albumin may be considered when large-volume crystalloid requirements are anticipated."
                },
                {
                    "drug": "Empirical intravenous antibiotic therapy (e.g., piperacillin/tazobactam, meropenem, ceftazidime, combined with vancomycin if MRSA is suspected)",
                    "dose": "Maximum allowed dose (adjusted to renal function)",
                    "duration": "Started within the first hour, generally for 7-10 days",
                    "note": "Choice should be focus- and local resistance-specific. Targeted coverage is needed if Pseudomonas or MRSA risk is present."
                },
                {
                    "drug": "Norepinephrine (Noradrenaline)",
                    "dose": "Titrated to achieve MAP >= 65 mmHg",
                    "duration": "Continuously during the shock phase",
                    "note": "First-line vasopressor of choice. May be started early via a peripheral line if central access is delayed."
                },
                {
                    "drug": "Vasopressin",
                    "dose": "Fixed dose of 0.03 U/min",
                    "duration": "As a continuous infusion",
                    "note": "Can be added to norepinephrine to help reach the MAP target or to reduce the norepinephrine dose."
                },
                {
                    "drug": "Hydrocortisone",
                    "dose": "200 mg/day (e.g., 4x50 mg IV or continuous infusion)",
                    "duration": "In refractory shock",
                    "note": "Recommended only when fluid and vasopressor therapy fail to restore hemodynamic stability."
                }
            ],
            "outpatient": []
        }
    },
    prognosis: {
        "mortality": "Approximately 15-25% for sepsis; in-hospital mortality can reach 40-50% once septic shock develops.",
        "factors": "Age, pre-existing comorbidities, speed of diagnosis and therapeutic interventions (antibiotics, source control), initial lactate level and lactate clearance, number of organs affected.",
        "prognostic_scores": [
            "SOFA score (Sequential Organ Failure Assessment): an increase of >=2 points indicates acute organ dysfunction and sepsis",
            "NEWS (National Early Warning Score) / SIRS criteria / MEWS: better sensitivity for screening than qSOFA",
            "APACHE II score (for estimating ICU outcomes)"
        ]
    },
    language: "en",
    group: "systemic_en"
  },
  {
    id: "fever-of-unknown-origin",
    name: "Fever of Unknown Origin (FUO)",
    pathogen: {
        "type": "Syndrome",
        "name": "Multifactorial (infectious, systemic autoimmune/inflammatory, malignant, and other causes)",
        "gram": "Not applicable",
        "shape": "Not applicable"
    },
    epidemiology: {
        "incidence": "About 2-5% of hospital fever cases; the most common causes underlying undiagnosed febrile states are infections (25-35%), malignancies (15-20%), and non-infectious inflammatory diseases (GCA, Still's disease, etc., 15-20%).",
        "risk_groups": [
            "Elderly patients (giant cell arteritis and malignancy are more common)",
            "Neutropenic or otherwise immunosuppressed patients",
            "Hospitalized (nosocomial) patients",
            "People living with HIV"
        ],
        "seasonality": "No seasonality",
        "transmission": "Not a transmissible syndrome (although some of the underlying pathogens may themselves be contagious)"
    },
    pathomechanism: {
        "steps": [
            "Peripheral inflammatory cells (monocytes, macrophages) produce endogenous pyrogens (IL-1, IL-6, TNF-alpha, IFN) in response to exogenous pyrogens (pathogens, toxins) or immune stimulation.",
            "Endogenous pyrogens reach the preoptic area of the hypothalamus (organum vasculosum laminae terminalis - OVLT) via the circulation.",
            "Cyclooxygenase-2 (COX-2) is activated in OVLT cells, leading to synthesis of prostaglandin E2 (PGE2).",
            "The increased PGE2 level shifts the hypothalamic thermoregulatory set-point upward.",
            "The body initiates heat-conserving and heat-generating mechanisms (vasoconstriction, shivering/chills), resulting in fever.",
            "In FUO, this cycle persists continuously due to an ongoing occult inflammatory focus, malignancy, or autoimmune process."
        ],
        "virulence_factors": [
            "Not applicable (depends on the specific pathogen)"
        ]
    },
    clinical: {
        "incubation": "Not applicable",
        "onset": "Gradual or fluctuating, febrile state persisting for at least 3 weeks",
        "symptoms": [
            {
                "name": "Fever",
                "description": "Body temperature >38.3°C measured on multiple occasions, persisting for at least 3 weeks and remaining undiagnosed despite initial investigations.",
                "severity": "severe"
            },
            {
                "name": "Systemic symptoms",
                "description": "Night sweats, unintentional weight loss, malaise, loss of appetite.",
                "severity": "moderate"
            },
            {
                "name": "Organ-specific accompanying symptoms",
                "description": "Joint pain, headache (suggesting GCA), skin rashes, lymphadenopathy, or abdominal pain depending on the underlying cause.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Detailed and repeated daily physical examination (new rashes, heart murmurs, lymph nodes, tenderness of temporal arteries)",
            "Analysis of the fever curve",
            "Fundoscopic examination (signs of endocarditis, tuberculosis, or granulomatous diseases)"
        ],
        "complications": [
            "Progression of the underlying malignant or systemic inflammatory disease due to delayed diagnosis",
            "Sepsis or organ failure from untreated infections",
            "Iatrogenic harm from unnecessary empirical therapies (e.g., drug fever, resistance)"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Chest and abdominal/pelvic CT",
                "finding": "Identification of infiltrates, abscesses, lymphadenopathy, organomegaly (hepatosplenomegaly), or occult tumors.",
                "significance": "First-line anatomical imaging."
            },
            {
                "modality": "18F-FDG PET/CT",
                "finding": "Areas of increased glucose metabolism (vasculitis, malignancy, osteomyelitis, or occult abscess).",
                "significance": "The most important early second-line functional imaging study, with a high negative predictive value."
            }
        ],
        "laboratory": [
            {
                "test": "Complete blood count, CRP, ESR, ferritin",
                "finding": "Leukocytosis/leukopenia, elevated inflammatory markers, extremely high ferritin (suggesting Still's disease or HLH).",
                "interpretation": "Confirmation of systemic inflammation and determination of direction for further workup."
            },
            {
                "test": "Serum and urine immunofixation / protein electrophoresis",
                "finding": "Monoclonal gammopathy or elevated polyclonal immunoglobulins.",
                "interpretation": "Suggests multiple myeloma or systemic autoimmune disorders."
            },
            {
                "test": "Autoantibodies (ANA, ANCA, RF, anti-CCP)",
                "finding": "Positivity for specific antibodies.",
                "interpretation": "For diagnosis of connective tissue diseases (autoimmune conditions) and vasculitides."
            }
        ],
        "microbiology": [
            {
                "test": "Repeated blood cultures (at least 3 pairs, from different venous sites, before antibiotics)",
                "finding": "Confirmation of bacteremia or fungemia (e.g., slow-growing HACEK organisms, Mycobacteria).",
                "significance": "Gold standard for diagnosing infective endocarditis and other intravascular infections."
            },
            {
                "test": "Viral and other specific PCR tests / serology",
                "finding": "Positivity for CMV, EBV, HIV, Bartonella, Coxiella burnetii, Brucella.",
                "significance": "To rule out atypical and chronic infections."
            },
            {
                "test": "IGRA (Quantiferon-TB) or Mantoux test",
                "finding": "Positive result in latent or active tuberculosis.",
                "significance": "To rule out extrapulmonary/miliary tuberculosis."
            }
        ]
    },
    therapy: {
        "targeted": "Targeted treatment appropriate to the diagnosed underlying condition (antimicrobials for infections, immunosuppression/corticosteroids for autoimmune conditions, oncological treatment for malignancies).",
        "supportive": [
            "Maintaining fluid and electrolyte balance",
            "Physical cooling and, if needed, NSAIDs or paracetamol (only if this does not interfere with diagnostic investigations and the patient's clinical condition warrants it)",
            "Nutritional support"
        ],
        "prevention": [
            "Prevention of hospital-acquired infections (in nosocomial FUO)",
            "Proper aseptic technique when using invasive devices"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Empirical broad-spectrum antibiotic (e.g., piperacillin/tazobactam or meropenem)",
                    "dose": "Individualized according to clinical condition and renal function",
                    "duration": "Until culture results are available or the clinical picture is clarified",
                    "note": "Indicated only in unstable patients showing signs of sepsis, or in patients with severe neutropenia (ANC < 500/uL)."
                },
                {
                    "drug": "Corticosteroid (e.g., prednisolone)",
                    "dose": "Not routinely recommended",
                    "duration": "Individual decision",
                    "note": "May be started empirically before biopsy only in cases of strong suspicion of giant cell arteritis (GCA) with impending vision loss."
                }
            ],
            "outpatient": [
                {
                    "drug": "Empirical antimicrobial or steroid treatment should be avoided",
                    "dose": "Not applicable",
                    "duration": "Not applicable",
                    "note": "In stable outpatients, empirical treatment reduces diagnostic accuracy and may mask symptoms."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Low (<5-10%) in younger patients with an infectious or inflammatory cause, but can reach 30-50% in older patients or with a malignant underlying cause.",
        "factors": "Nature of the underlying disease, patient age, degree of immunosuppression, and speed of diagnosis.",
        "prognostic_scores": [
            "No specific FUO prognostic scoring system exists; qSOFA/SOFA can be used to estimate sepsis risk, and specific oncological staging systems apply for malignancies."
        ]
    },
    language: "en",
    group: "systemic_en"
  },
  {
    id: "pyomyositis",
    name: "Pyomyositis (Purulent Myositis)",
    pathogen: {
        "type": "Bacterium",
        "name": "Staphylococcus aureus (including MRSA), Streptococcus pyogenes (Group A Streptococcus), Gram-negative rods (e.g., Escherichia coli, Klebsiella pneumoniae)",
        "gram": "Gram-positive and Gram-negative",
        "shape": "cocci and rods"
    },
    epidemiology: {
        "incidence": "Common in tropical regions (primary form); rarer in temperate climates and usually secondary, associated with immunosuppression or trauma.",
        "risk_groups": [
            "People living with HIV/AIDS",
            "Patients with diabetes mellitus",
            "Neutropenia or immunosuppressive therapy",
            "Intravenous drug users",
            "Recent blunt trauma or extreme physical exertion",
            "Liver cirrhosis, renal failure"
        ],
        "seasonality": "None",
        "transmission": "Not transmitted person-to-person; most commonly results from hematogenous colonization of damaged or injured muscle tissue during transient bacteremia."
    },
    pathomechanism: {
        "steps": [
            "Healthy skeletal muscle is resistant to bacterial infection.",
            "Blunt trauma, microtrauma, ischemia, or intense physical exertion causes local muscle injury (hematoma, edema).",
            "During a transient bacteremia, circulating bacteria adhere to the damaged, vulnerable muscle tissue.",
            "Invasive phase: bacteria proliferate, causing local inflammation and edema without true pus formation.",
            "Suppurative phase: microabscesses form and coalesce into a tense, well-circumscribed intramuscular abscess.",
            "Late phase: without adequate treatment, the abscess breaks through the fascia, causing septic embolization, bacteremia, and septic shock."
        ],
        "virulence_factors": [
            "S. aureus fibronectin-binding proteins (FnBPA, FnBPB) for adhesion to damaged muscle tissue",
            "Panton-Valentine leukocidin (PVL) toxin (common in necrotizing forms)",
            "Alpha-hemolysin and other cytolytic toxins",
            "Superantigens (TSST-1, enterotoxins), which trigger a massive inflammatory response"
        ]
    },
    clinical: {
        "incubation": "Variable, generally days to weeks after the predisposing trauma or bacteremia.",
        "onset": "Gradual but progressive course (three clinical phases: invasive, suppurative, late septic).",
        "symptoms": [
            {
                "name": "Deep muscle pain",
                "description": "Localized, cramping pain, initially dull, later becoming unbearable.",
                "severity": "severe"
            },
            {
                "name": "Fever and chills",
                "description": "Often high, septic-pattern fever, especially from the suppurative phase onward.",
                "severity": "severe"
            },
            {
                "name": "Tense swelling",
                "description": "The affected muscle is rigid, woody on palpation, swollen and extremely tender.",
                "severity": "moderate"
            },
            {
                "name": "Loss of function",
                "description": "Severe restriction of movement of the affected muscle group due to pain.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Swelling of the affected muscle, marked tenderness, and woody, tense firmness.",
            "Fluctuance is usually not palpable due to the deep location and tense fascia.",
            "Signs of systemic inflammatory response (fever, tachycardia, tachypnea).",
            "The overlying skin may initially be normal; erythema appears only late."
        ],
        "complications": [
            "Intramuscular abscess formation",
            "Compartment syndrome",
            "Sepsis and septic shock",
            "Metastatic abscesses (e.g., lung, brain, kidney)",
            "Infection of nearby bones and joints (osteomyelitis, septic arthritis)"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "MRI",
                "finding": "Muscle edema on T2-weighted images, contrast enhancement of the abscess wall.",
                "significance": "The most sensitive and specific imaging modality, particularly for detecting the early, invasive phase."
            },
            {
                "modality": "Ultrasound",
                "finding": "Disruption of muscle fiber architecture, hypoechoic fluid collection (abscess).",
                "significance": "A fast, inexpensive method for detecting abscesses and guiding aspiration/drainage."
            },
            {
                "modality": "CT",
                "finding": "Muscle swelling, low-density areas (abscesses) with or without gas bubbles.",
                "significance": "A useful alternative, especially for evaluating retroperitoneal or pelvic (psoas) muscles."
            }
        ],
        "laboratory": [
            {
                "test": "Complete blood count, CRP, procalcitonin",
                "finding": "Marked leukocytosis with left shift, significantly elevated CRP and procalcitonin levels.",
                "interpretation": "Signs of acute systemic bacterial infection."
            },
            {
                "test": "Creatine kinase (CK)",
                "finding": "Normal or only minimally elevated.",
                "interpretation": "Important diagnostic point: unlike in myositis and rhabdomyolysis, CK levels in pyomyositis are usually normal because the cell damage is localized."
            },
            {
                "test": "Blood culture",
                "finding": "Positive in 10-30% of cases (most commonly S. aureus).",
                "interpretation": "Confirms hematogenous origin and guides targeted therapy."
            }
        ],
        "microbiology": [
            {
                "test": "Abscess aspirate culture and Gram stain",
                "finding": "Identification of Gram-positive cocci or Gram-negative rods and determination of the resistance profile.",
                "significance": "The gold standard for diagnosis and targeted therapy."
            },
            {
                "test": "PCR testing",
                "finding": "Identification of bacterial DNA in culture-negative cases.",
                "significance": "A supplementary diagnostic test in cases of prior antibiotic treatment."
            }
        ]
    },
    therapy: {
        "targeted": "Incision and drainage, or ultrasound/CT-guided percutaneous aspiration, is mandatory in the abscess stage, complemented by targeted antibiotic therapy based on culture results.",
        "supportive": [
            "Surgical debridement to remove necrotic tissue",
            "Effective pain management (NSAIDs, opioids if needed)",
            "Aggressive intravenous fluid therapy in sepsis",
            "Temporary rest for the affected limb"
        ],
        "prevention": [
            "Tight control of diabetes mellitus and other comorbidities",
            "Immediate disinfection and proper care of skin injuries",
            "Strict aseptic technique during invasive procedures"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin IV PLUS piperacillin/tazobactam IV (or ceftriaxone + metronidazole)",
                    "dose": "Vancomycin: 15-20 mg/kg q8-12h; piperacillin/tazobactam: 4.5 g q6h",
                    "duration": "3-4 weeks (including at least 1-2 weeks of IV therapy, followed by oral step-down)",
                    "note": "Broad-spectrum empirical coverage is required, especially in immunosuppressed patients or in cases of pelvic (psoas) involvement. Vancomycin covers MRSA, while piperacillin/tazobactam provides coverage against Gram-negatives and anaerobes."
                }
            ],
            "outpatient": [
                {
                    "drug": "Oral clindamycin or oral TMP-SMX or oral amoxicillin-clavulanate",
                    "dose": "Clindamycin: 300-450 mg q6-8h; TMP-SMX: 160/800 mg q12h; amoxicillin-clavulanate: 875/125 mg q12h",
                    "duration": "Until completion of the full 3-4 week course",
                    "note": "Switching to oral therapy is recommended only after successful drainage, clinical improvement, at least 48-72 hours of being afebrile, and based on culture results."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "<1-2% with timely surgical drainage and effective antibiotic treatment, but can reach 10-15% with delayed diagnosis or sepsis.",
        "factors": "Delayed diagnosis, inadequate or delayed surgical drainage, immunosuppressed state, presence of MRSA or Gram-negative pathogens.",
        "prognostic_scores": [
            "SOFA / qSOFA score (for assessing the severity of systemic sepsis)"
        ]
    },
    language: "en",
    group: "systemic_en"
  },
  {
    id: "toxic-shock-syndrome",
    name: "Toxic Shock Syndrome (TSS)",
    pathogen: {
        "type": "Bacterium",
        "name": "Staphylococcus aureus, Streptococcus pyogenes (Group A Streptococcus - GAS)",
        "gram": "Gram-positive",
        "shape": "cocci (in clusters or chains)"
    },
    epidemiology: {
        "incidence": "Rare (Staphylococcal TSS: ~0.5-1/100,000; Streptococcal TSS: ~2-4/100,000 population/year)",
        "risk_groups": [
            "Menstruating women using superabsorbent tampons",
            "Patients with surgical or postoperative wounds",
            "Burn victims and those with extensive skin injuries",
            "Children with chickenpox (increased risk of Strep TSS)",
            "Recently postpartum women (postpartum endometritis)"
        ],
        "seasonality": "None",
        "transmission": "Not directly transmitted person-to-person; caused by toxins produced at an infected focus entering the systemic circulation."
    },
    pathomechanism: {
        "steps": [
            "Staphylococcus aureus or Streptococcus pyogenes colonizes or infects a mucosal surface or soft tissue, where it produces exotoxins (Staph: TSST-1, enterotoxins; Strep: SpeA, SpeC, SpeF).",
            "These toxins act as superantigens: bypassing normal antigen presentation, they directly link the MHC-II molecules of antigen-presenting cells to the beta chain of the T-cell receptor (TCR).",
            "This non-specific linkage activates up to 20-30% of the body's T-cells simultaneously (compared with 0.01% for normal antigens).",
            "The massive T-cell activation triggers an uncontrolled cytokine storm (enormous release of TNF-alpha, IL-1, IL-2, IL-6, and IFN-gamma).",
            "The cytokines cause generalized vasodilation, a drastic increase in capillary permeability (capillary leak syndrome), and severe hypotension, leading to multiorgan failure and refractory shock."
        ],
        "virulence_factors": [
            "TSST-1 (Toxic Shock Syndrome Toxin-1 - S. aureus)",
            "Staphylococcal enterotoxins (SEA, SEB, SEC)",
            "Streptococcal pyrogenic exotoxins (SpeA, SpeB, SpeC, SpeF)",
            "M protein (inhibits phagocytosis, promotes adhesion - S. pyogenes)"
        ]
    },
    clinical: {
        "incubation": "Extremely rapid (as little as 12-48 hours after the infection/injury)",
        "onset": "Sudden",
        "symptoms": [
            {
                "name": "High fever",
                "description": "Sudden-onset fever >38.9°C, often accompanied by chills.",
                "severity": "severe"
            },
            {
                "name": "Hypotension and shock",
                "description": "Systolic blood pressure <90 mmHg in adults, poorly or not responsive to fluid resuscitation.",
                "severity": "severe"
            },
            {
                "name": "Diffuse erythroderma",
                "description": "Sunburn-like, diffuse, flat red rash that also involves the palms and soles.",
                "severity": "moderate"
            },
            {
                "name": "Multisystem organ involvement",
                "description": "Involvement of at least three organ systems (GI: vomiting/diarrhea; musculoskeletal: severe myalgia and elevated CK; renal/hepatic failure; thrombocytopenia).",
                "severity": "severe"
            },
            {
                "name": "Desquamation",
                "description": "Sheet-like skin peeling occurring 1-2 weeks after onset, particularly on the palms and soles.",
                "severity": "mild"
            }
        ],
        "physical_exam": [
            "Diffuse maculopapular rash (erythroderma)",
            "Severe hypotension, tachycardia, peripheral perfusion disturbance",
            "Mucosal hyperemia (conjunctiva, oral cavity, vaginal redness)",
            "Strawberry tongue (especially with streptococcal infection)",
            "Altered mental status, confusion, or somnolence due to hypoperfusion",
            "Signs of local soft-tissue infection (in Strep TSS: erythema, swelling, crepitus, bullae suggestive of necrotizing fasciitis)"
        ],
        "complications": [
            "Refractory septic shock",
            "ARDS (acute respiratory distress syndrome)",
            "DIC (disseminated intravascular coagulation)",
            "Acute kidney injury (may require renal replacement therapy)",
            "Limb necrosis requiring amputation",
            "Multiorgan failure and death"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "CT / MRI (with contrast)",
                "finding": "Soft-tissue gas bubbles, thickening of the deep fascia, absence of contrast enhancement in necrotic areas.",
                "significance": "Rapid confirmation or exclusion of necrotizing fasciitis (especially in Strep TSS), which requires immediate surgical intervention."
            },
            {
                "modality": "Ultrasound (point-of-care - POCUS)",
                "finding": "Free fluid along the soft tissues and fascia ('cobblestone' pattern, 'fluid wave' sign).",
                "significance": "Rapid bedside assessment in the ICU prior to surgical exploration."
            }
        ],
        "laboratory": [
            {
                "test": "Complete blood count",
                "finding": "Marked leukocytosis with left shift, severe thrombocytopenia (<100,000/uL).",
                "interpretation": "Systemic inflammatory response and consumptive coagulopathy."
            },
            {
                "test": "Renal and hepatic function",
                "finding": "Creatinine >177 umol/L (or double the baseline value), elevated total bilirubin.",
                "interpretation": "Diagnostic criterion for multiorgan failure."
            },
            {
                "test": "Creatine kinase (CK)",
                "finding": "Markedly elevated (>2x the upper limit of normal).",
                "interpretation": "Confirms severe myositis, rhabdomyolysis."
            },
            {
                "test": "Coagulation panel (INR, aPTT, fibrinogen)",
                "finding": "Prolonged clotting times, decreased fibrinogen level, elevated D-dimer.",
                "interpretation": "Confirms developing systemic DIC."
            }
        ],
        "microbiology": [
            {
                "test": "Blood culture",
                "finding": "Often negative in Staph TSS (<5-15% positive); often positive in Strep TSS (>50-60% bacteremic).",
                "significance": "Key to confirming etiology; a positive blood culture confirms the diagnosis in Strep TSS."
            },
            {
                "test": "Wound, vaginal, and throat swab cultures",
                "finding": "Growth of S. aureus or S. pyogenes.",
                "significance": "Identification of the primary infectious or colonization focus."
            },
            {
                "test": "Molecular and toxin testing (PCR, ELISA)",
                "finding": "Detection of superantigen toxin genes (e.g., tst, speA, speC).",
                "significance": "Confirmatory testing performed by reference laboratories."
            }
        ]
    },
    therapy: {
        "targeted": "For Staph TSS: for MSSA, cefazolin (or flucloxacillin) + clindamycin; for MRSA, vancomycin + clindamycin. For Strep TSS: high-dose penicillin G + clindamycin (to inhibit toxin synthesis). Linezolid can be used as a toxin-synthesis inhibitor in cases of clindamycin resistance or intolerance. IVIG (intravenous immunoglobulin, 1-2 g/kg) is recommended to neutralize toxins in severe, treatment-refractory Strep TSS and necrotizing fasciitis. Immediate surgical debridement and source control (removal of tampons, foreign bodies) is mandatory!",
        "supportive": [
            "Aggressive intravenous fluid therapy (crystalloids) to correct hypovolemic and distributive shock.",
            "Early initiation of vasopressors (first choice: norepinephrine) to maintain MAP >65 mmHg.",
            "Respiratory support (protective mechanical ventilation in ARDS).",
            "Continuous renal replacement therapy (CRRT) for acute kidney injury and anuria.",
            "Transfusion support (red blood cells, platelets, fresh frozen plasma) in severe coagulopathy and bleeding."
        ],
        "prevention": [
            "Avoiding the use of superabsorbent tampons, changing them frequently (every 4-6 hours).",
            "Sterile and proper management of postoperative wounds.",
            "Immediate disinfection of skin abrasions and injuries."
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin",
                    "dose": "15-20 mg/kg IV every 12 hours (with serum level monitoring or AUC-based dosing)",
                    "duration": "10-14 days (based on clinical picture and source control)",
                    "note": "For empirical coverage of MRSA and resistant Gram-positive strains."
                },
                {
                    "drug": "Clindamycin",
                    "dose": "900 mg IV every 8 hours",
                    "duration": "Until clinical stability and toxic symptoms resolve (generally 3-5 days, then targeted therapy)",
                    "note": "Halts bacterial superantigen toxin production through inhibition of protein synthesis (counteracting the Eagle effect)."
                },
                {
                    "drug": "Piperacillin/Tazobactam",
                    "dose": "4.5 g IV every 6 hours (extended infusion recommended)",
                    "duration": "Until microbiology results are available",
                    "note": "Broad-spectrum Gram-negative and anaerobic coverage if a mixed wound infection is suspected."
                }
            ],
            "outpatient": [
                {
                    "drug": "None",
                    "dose": "Not applicable",
                    "duration": "Not applicable",
                    "note": "Suspected toxic shock syndrome requires immediate ICU admission and monitoring!"
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Menstrual Staph TSS: <1-3%; non-menstrual Staph TSS: 5-15%; streptococcal TSS (Strep TSS): 30-45% (even with appropriate intensive care).",
        "factors": "Patient age, time elapsed from onset of shock to initiation of adequate antibiotics and source control, nature of the primary infectious focus (e.g., necrotizing fasciitis), type of pathogen, and presence of bacteremia.",
        "prognostic_scores": [
            "SOFA (Sequential Organ Failure Assessment) score",
            "APACHE II score"
        ]
    },
    language: "en",
    group: "systemic_en"
  },
  {
    id: "invasive-candidiasis",
    name: "Invasive Candidiasis",
    pathogen: {
        "type": "Fungus",
        "name": "Candida albicans, Candida glabrata, Candida parapsilosis, Candida tropicalis, Candida krusei, and Candida auris",
        "gram": "Budding yeast",
        "shape": "Oval budding cells, forming pseudohyphae and true hyphae (except C. glabrata)"
    },
    epidemiology: {
        "incidence": "4th most common cause of nosocomial bloodstream infections in ICUs.",
        "risk_groups": [
            "Intensive care unit (ICU) admission",
            "Central venous catheter (CVC)",
            "Broad-spectrum antibiotic therapy",
            "Total parenteral nutrition (TPN)",
            "Major abdominal surgery, gastrointestinal perforation",
            "Neutropenia, immunosuppression"
        ],
        "seasonality": "None",
        "transmission": "Endogenous translocation from the gastrointestinal tract, or exogenous transmission (healthcare workers' hands, contaminated equipment - particularly for Candida auris)"
    },
    pathomechanism: {
        "steps": [
            "Disruption of the mucosal or skin barrier (dysbiosis from broad-spectrum antibiotics, chemotherapy, surgery)",
            "Translocation into the bloodstream via the gastrointestinal tract, or direct entry through intravascular devices",
            "Adhesion and biofilm formation on foreign bodies (e.g., CVC)",
            "Hematogenous dissemination and colonization of deep organs, formation of microabscesses (eye, heart, liver, spleen, bones)"
        ],
        "virulence_factors": [
            "Biofilm-forming ability (especially C. albicans, C. auris)",
            "Adhesins (ALS gene family)",
            "Morphological transition (yeast-to-hyphal switching)",
            "Extracellular hydrolytic enzymes (secreted aspartyl proteases, phospholipases)"
        ]
    },
    clinical: {
        "incubation": "Variable",
        "onset": "Acute or gradually worsening sepsis",
        "symptoms": [
            {
                "name": "Persistent fever",
                "description": "Fever not responding to broad-spectrum antibiotic therapy.",
                "severity": "severe"
            },
            {
                "name": "Sepsis / septic shock",
                "description": "Hypotension, tachycardia, tachypnea, organ dysfunction.",
                "severity": "severe"
            },
            {
                "name": "Endophthalmitis",
                "description": "Blurred vision, scotomas, eye pain. Causes blindness if untreated.",
                "severity": "severe"
            },
            {
                "name": "Skin manifestations",
                "description": "Painless, erythematous, nodular, or papulopustular skin lesions.",
                "severity": "moderate"
            },
            {
                "name": "Hepatosplenic candidiasis",
                "description": "Right upper quadrant pain, fever, and elevated alkaline phosphatase occurring after recovery from neutropenia.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Fever, tachycardia, hypotension (signs of sepsis/septic shock)",
            "Dilated fundoscopic exam (chorioretinitis, vitritis, white cotton-wool-like lesions)",
            "Maculopapular or nodular skin lesions",
            "New heart murmur (suspicion of endocarditis)",
            "Abdominal tenderness or hepatomegaly"
        ],
        "complications": [
            "Septic shock and multiorgan failure",
            "Endophthalmitis (permanent vision loss)",
            "Infective endocarditis",
            "Osteomyelitis and discitis",
            "Liver and spleen abscesses"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Echocardiography (TTE/TEE)",
                "finding": "Vegetations on the cardiac valves in candidemia, to rule out endocarditis.",
                "significance": "Recommended in all patients with candidemia to rule out endocarditis."
            },
            {
                "modality": "Abdominal CT / MRI",
                "finding": "Small, round, low-density, target-like lesions in the liver and/or spleen.",
                "significance": "Diagnosis of chronic disseminated (hepatosplenic) candidiasis."
            },
            {
                "modality": "Fundoscopic examination",
                "finding": "Chorioretinal white lesions, vitreous opacities.",
                "significance": "Confirmation of candidal endophthalmitis (recommended within 72 hours of diagnosis)."
            }
        ],
        "laboratory": [
            {
                "test": "Blood culture",
                "finding": "Positive (sensitivity only 50-60%)",
                "interpretation": "Gold standard, but a negative result does not rule out invasive candidiasis."
            },
            {
                "test": "1,3-beta-D-glucan (BDG)",
                "finding": "Positive (>80 pg/mL)",
                "interpretation": "A fungal cell-wall component. Has a high negative predictive value when systemic infection is suspected."
            }
        ],
        "microbiology": [
            {
                "test": "Culture and MALDI-TOF",
                "finding": "Precise identification of the Candida species",
                "significance": "Identifies the species, which is critical for adjusting empirical therapy and for targeted treatment."
            },
            {
                "test": "Antifungal susceptibility testing (MIC)",
                "finding": "Determination of susceptibility profile (azoles, echinocandins, amphotericin B)",
                "significance": "Guides oral de-escalation and treatment of resistant strains (e.g., C. auris)."
            },
            {
                "test": "T2Candida panel",
                "finding": "Direct DNA detection from whole blood based on magnetic resonance",
                "significance": "A rapid (3-5 hours), highly sensitive method for detecting the most common Candida species, even in blood-culture-negative cases."
            }
        ]
    },
    therapy: {
        "targeted": "For echinocandin-susceptible species, de-escalation from first-line echinocandin to oral fluconazole should occur once the patient is clinically stable, follow-up blood cultures are negative, and fluconazole susceptibility is confirmed. For C. auris, high-dose echinocandin or liposomal amphotericin B is required.",
        "supportive": [
            "Prompt removal of all central venous catheters (CVC) is strongly recommended",
            "Ophthalmology consultation with dilated fundoscopic exam (within 72 hours of diagnosis in non-neutropenic patients)",
            "Repeat blood cultures every 24-48 hours to confirm candidemia clearance"
        ],
        "prevention": [
            "Strict infection control and contact isolation (especially for Candida auris)",
            "Prevention of catheter-associated infections (use of catheter care bundles)",
            "Targeted antifungal prophylaxis in high-risk patients (e.g., liver transplant recipients, recurrent gastrointestinal perforation)"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Caspofungin",
                    "dose": "70 mg loading dose on day 1, then 50 mg IV daily",
                    "duration": "For a minimum of 14 days after resolution of candidemia (first negative blood culture) and symptom improvement.",
                    "note": "First-line empirical choice. Anidulafungin (200 mg loading, then 100 mg/day IV) or micafungin (100 mg/day IV) may be given as alternatives."
                },
                {
                    "drug": "Fluconazole",
                    "dose": "800 mg (12 mg/kg) loading dose, then 400 mg (6 mg/kg) IV or PO daily",
                    "duration": "For a minimum of 14 days after resolution of candidemia.",
                    "note": "Should only be chosen empirically if the patient is clinically stable, has had no prior azole exposure, and the ward has a low prevalence of resistant strains (C. glabrata, C. krusei)."
                }
            ],
            "outpatient": [
                {
                    "drug": "Fluconazole",
                    "dose": "400 mg PO daily",
                    "duration": "Until completion of the full 14-day course (counted from the negative blood culture).",
                    "note": "Only as step-down/de-escalation therapy in stable patients with negative follow-up blood cultures who are confirmed to be infected with a fluconazole-susceptible strain."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Approximately 30-40% (may exceed 60% in septic shock)",
        "factors": "Timely removal of the CVC (source control), speed of initiating adequate empirical therapy, patient age, and comorbidities.",
        "prognostic_scores": [
            "Candida score (for guiding the decision to initiate empirical treatment)",
            "SOFA / APACHE II score (for assessing sepsis severity)"
        ]
    },
    language: "en",
    group: "systemic_en"
  },
  {
    id: "invasive-aspergillosis",
    name: "Invasive Aspergillosis",
    pathogen: {
        "type": "Fungus",
        "name": "Aspergillus fumigatus",
        "gram": "Mold",
        "shape": "hyphae (45° branching, septate)"
    },
    epidemiology: {
        "incidence": "Notably prevalent in 5-10% of neutropenic patients, and prominent among hematologic malignancy patients, transplant recipients, and critically ill ICU patients",
        "risk_groups": [
            "Prolonged neutropenia (<500/uL for >10 days)",
            "Allogeneic stem cell transplantation (HSCT)",
            "Solid organ transplantation (SOT, especially lung)",
            "Prolonged, high-dose corticosteroid therapy",
            "Severe viral pneumonia (influenza-associated IAPA, COVID-19-associated CAPA)"
        ],
        "seasonality": "None (construction dust, renovation work pose increased risk)",
        "transmission": "Inhalation of conidia from the environmental air"
    },
    pathomechanism: {
        "steps": [
            "Inhaled Aspergillus conidia reach the pulmonary alveoli",
            "Reduced immune response (in neutropenic or steroid-treated patients, alveolar macrophages are unable to eliminate the conidia)",
            "The conidia germinate and transform into tissue-damaging hyphae",
            "Angioinvasion: the hyphae breach the walls of pulmonary blood vessels",
            "Result: thrombosis, infarction, local tissue necrosis, and hematogenous spread",
            "Metastatic foci form in other organs (central nervous system, skin, kidney)"
        ],
        "virulence_factors": [
            "Capacity for angioinvasion",
            "Gliotoxin and other mycotoxins (inhibit phagocytosis)",
            "Conidial melanin (protects against oxidative stress)",
            "Elastases, proteases, and metalloproteinases (tissue destruction)"
        ]
    },
    clinical: {
        "incubation": "Days to weeks (strongly dependent on the degree of immunosuppression)",
        "onset": "Acute or subacute progression",
        "symptoms": [
            {
                "name": "Fever",
                "description": "Fever in a neutropenic patient not responding to broad-spectrum antibiotic therapy",
                "severity": "severe"
            },
            {
                "name": "Cough",
                "description": "Dry or minimally productive cough",
                "severity": "moderate"
            },
            {
                "name": "Pleuritic chest pain",
                "description": "Sharp pain related to breathing, a sign of angioinvasive growth and infarction",
                "severity": "moderate"
            },
            {
                "name": "Hemoptysis",
                "description": "Coughing up blood, resulting from vessel erosion (can be life-threatening)",
                "severity": "severe"
            },
            {
                "name": "Sinusitis symptoms",
                "description": "Facial pain, nasal congestion, bloody or black nasal discharge in cases of paranasal sinus involvement",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Fever, tachypnea, hypoxia",
            "Decreased breath sounds or pleural friction rub over the lungs",
            "Black, necrotic crusts visible on nasal examination (rhinocerebral form)",
            "Skin lesions: painless, necrotic-centered papules or nodules in disseminated disease",
            "Focal neurological deficit or altered mental status (in cerebral dissemination and abscess)"
        ],
        "complications": [
            "Massive, fatal pulmonary hemorrhage",
            "Hematogenous dissemination (brain, skin, heart valves)",
            "Brain abscess and stroke-like neurological symptoms",
            "Multiorgan failure and death"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Chest HRCT (high-resolution CT)",
                "finding": "Halo sign (ground-glass opacity surrounding a nodule due to edema/hemorrhage), air-crescent sign (during the healing/sequestration phase), cavitation, consolidation.",
                "significance": "The most important early diagnostic method in neutropenic patients, forming the basis of the EORTC/MSGERC criteria."
            }
        ],
        "laboratory": [
            {
                "test": "Galactomannan (GM) antigen test",
                "finding": "Serum index >0.5, or bronchoalveolar lavage (BAL) fluid index >1.0",
                "interpretation": "Detection of a specific Aspergillus cell-wall antigen. Piperacillin/tazobactam used to cause false-positive results, though this is now rare with modern formulations."
            },
            {
                "test": "Beta-D-glucan (BDG) test",
                "finding": "Positive (>80 pg/mL)",
                "interpretation": "A pan-fungal marker, not specific for Aspergillus, but helps support suspicion of a fungal infection."
            }
        ],
        "microbiology": [
            {
                "test": "Aspergillus PCR (serum or BAL)",
                "finding": "Detectable Aspergillus DNA",
                "significance": "High sensitivity and specificity; officially accepted as a diagnostic element under the EORTC/MSGERC consensus criteria."
            },
            {
                "test": "BAL or biopsy specimen culture",
                "finding": "Growth of Aspergillus species (e.g., A. fumigatus, A. flavus)",
                "significance": "Confirms the diagnosis and allows testing for azole resistance (susceptibility testing)."
            },
            {
                "test": "Direct microscopy (calcofluor white stain)",
                "finding": "Regular septate hyphae branching at 45-degree angles",
                "significance": "Provides rapid, immediate diagnostic value from tissue or BAL samples."
            }
        ]
    },
    therapy: {
        "targeted": "First-line treatment: voriconazole or isavuconazole. Alternative/salvage treatment: liposomal amphotericin B (L-AmB). Combination therapy (e.g., voriconazole + anidulafungin) may be considered in refractory cases.",
        "supportive": [
            "Reduction or temporary suspension of immunosuppression (if clinically feasible)",
            "Administration of G-CSF to shorten the duration of neutropenia",
            "Urgent surgical resection for massive hemoptysis or lesions near major vessels"
        ],
        "prevention": [
            "Posaconazole prophylaxis (in high-risk acute leukemia or GVHD patients)",
            "Use of HEPA-filtered, positive-pressure isolation rooms near construction sites",
            "Wearing masks (FFP2/FFP3) for high-risk patients in hazardous environments"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Voriconazole",
                    "dose": "Loading dose: 6 mg/kg IV every 12 hours (first 2 doses), then maintenance: 4 mg/kg IV every 12 hours",
                    "duration": "6-12 weeks (based on clinical and radiological response)",
                    "note": "Therapeutic drug monitoring (TDM) is required (target trough concentration: 1-5.5 ug/mL). Strong CYP3A4 inhibitor."
                },
                {
                    "drug": "Isavuconazole",
                    "dose": "Loading dose: 200 mg IV every 8 hours (for the first 48 hours, total of 6 doses), then maintenance: 200 mg IV once daily",
                    "duration": "6-12 weeks",
                    "note": "Similar efficacy to voriconazole, but with a more favorable side-effect profile (less hepatotoxicity and fewer visual disturbances)."
                }
            ],
            "outpatient": [
                {
                    "drug": "Voriconazole (oral)",
                    "dose": "200 mg twice daily by mouth (at least 1 hour before meals)",
                    "duration": "Until completion of the full 6-12 week course (continued as an outpatient)",
                    "note": "Regular monitoring of liver function and visual/neurological side effects, as well as outpatient TDM, is required."
                },
                {
                    "drug": "Isavuconazole (oral)",
                    "dose": "200 mg once daily by mouth (after the loading phase)",
                    "duration": "Until completion of the full 6-12 week course",
                    "note": "Excellent bioavailability, can be taken independently of food, and has more stable pharmacokinetics, so routine TDM is not necessarily required."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "30-50% with early adequate treatment; untreated or with delayed diagnosis, mortality exceeds 80% (especially in cerebral dissemination)",
        "factors": "Resolution/duration of neutropenia, time between diagnosis and initiation of adequate antifungal treatment, presence of graft-versus-host disease (GVHD)",
        "prognostic_scores": []
    }
  },
        ]
      },
});
