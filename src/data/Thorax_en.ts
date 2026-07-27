Object.assign(window.diseases, {
  "bacterial_respiratory": {
    "name": "Bacterial Respiratory Infections",
    "icon": window.diseaseMetadata.bacterial_respiratory.icon,
    "color": window.diseaseMetadata.bacterial_respiratory.color,
    "tables": [
      {
        "title": "Differential Diagnosis of Typical vs. Atypical Pneumonia",
        "headers": [
          "Feature",
          "Typical Pneumonia",
          "Atypical Pneumonia"
        ],
        "rows": [
          [
            "Onset",
            "Sudden, dramatic (chills)",
            "Slow, gradual (prodrome)"
          ],
          [
            "Fever",
            "High (>39°C)",
            "Low-grade or moderate fever"
          ],
          [
            "Chest pain",
            "Pleuritic, sharp (common)",
            "Retrosternal, burning (less common)"
          ],
          [
            "Cough",
            "Productive",
            "Dry, non-productive, hacking"
          ],
          [
            "Sputum",
            "Purulent, rust-colored",
            "Scant, mucoid or absent"
          ],
          [
            "Pleural effusion",
            "Common (parapneumonic)",
            "Rare"
          ],
          [
            "Radiology",
            "Lobar/segmental consolidation, air bronchogram",
            "Interstitial, ground-glass, diffuse, patchy"
          ],
          [
            "Extrapulmonary symptoms",
            "Rare (except septic spread)",
            "Common (headache, myalgia, ear/throat, GI, rash)"
          ],
          [
            "Lab (WBC)",
            "Leukocytosis, left shift",
            "Normal or mild leukocytosis"
          ],
          [
            "Lab (CRP/PCT)",
            "Significantly elevated (PCT >0.5)",
            "Moderately elevated (PCT <0.25)"
          ],
          [
            "Lab (Liver enzymes)",
            "Usually normal",
            "Often elevated (AST, ALT)"
          ],
          [
            "Pathogens",
            "<i>S. pneumoniae, H. influenzae, M. catarrhalis, S. aureus, Klebsiella</i>",
            "<i>Mycoplasma, Chlamydia, Legionella, Coxiella</i>, Viruses"
          ]
        ]
      }
    ],
    "diseases": [
      {
        "id": "bacterial_pneumonia",
        "name": "Bacterial Pneumonia",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Streptococcus pneumoniae</i>",
          "gram": "Gram-positive",
          "shape": "diplococcus"
        },
        "epidemiology": {
          "incidence": "Most common cause of community-acquired pneumonia (CAP) (30-40%)",
          "risk_groups": [
            "Elderly (>65 years)",
            "Patients with chronic diseases (COPD, heart failure, diabetes)",
            "Immunocompromised",
            "Asplenic patients",
            "Patients with alcohol use disorder",
            "Smokers"
          ],
          "seasonality": "Winter-spring peak, often as influenza superinfection",
          "transmission": "Droplet infection, endogenous activation"
        },
        "pathomechanism": {
          "steps": [
            "The infection usually begins with microaspiration of bacteria colonizing the upper airways. The pathogen's virulence factors (e.g., capsule) help evade host defense mechanisms (e.g., phagocytosis).",
            "The bacteria multiply in the alveoli, triggering a vigorous inflammatory response. Released toxins (e.g., pneumolysin) damage epithelial cells.",
            "Inflammatory cells (neutrophils), red blood cells, and fibrin fill the alveoli, leading to the consolidation of lung tissue. This process is responsible for the characteristic picture of lobar pneumonia."
          ],
          "virulence_factors": [
            "Capsular polysaccharide (93 serotypes)",
            "Pneumolysin",
            "Autolysin (LytA)",
            "Neuraminidase",
            "IgA1 protease"
          ]
        },
        "clinical": {
          "incubation": "1-3 days",
          "onset": "Sudden, dramatic onset",
          "symptoms": [
            {
              "name": "Sudden Onset",
              "description": "Characterized by high fever, chills, and malaise.",
              "severity": "severe"
            },
            {
              "name": "Respiratory Symptoms",
              "description": "Initially a dry cough, which later becomes productive, classically with rust-colored sputum. Pleuritic, sharp chest pain and shortness of breath are common.",
              "severity": "moderate"
            },
            {
              "name": "Atypical Presentation",
              "description": "In the elderly, fever may be absent, and altered mental status can be the leading symptom.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Tachypnea, tachycardia",
            "Dullness to percussion over the affected lobe",
            "Bronchial breath sounds, crepitation",
            "Increased bronchophony and tactile fremitus",
            "Cyanosis in severe cases"
          ],
          "complications": [
            "Empyema",
            "Lung abscess",
            "Meningitis",
            "Sepsis/septic shock",
            "ARDS",
            "Pericarditis"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC",
              "finding": "Leukocytosis (15-30 G/L), left shift",
              "interpretation": "Typical for bacterial infection"
            },
            {
              "test": "CRP",
              "finding": "Significantly elevated (>100 mg/L)",
              "interpretation": "Marker of active inflammation"
            },
            {
              "test": "PCT",
              "finding": ">0.5 ng/mL",
              "interpretation": "Suspicion of bacterial sepsis"
            },
            {
              "test": "Arterial blood gas",
              "finding": "Hypoxemia, possibly hypocapnia",
              "interpretation": "Respiratory failure"
            },
            {
              "test": "Blood culture",
              "finding": "Positive in 20-30%",
              "interpretation": "Pathogen identification"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray (PA+lateral)",
              "finding": "Lobar/segmental consolidation, air bronchogram",
              "significance": "Typical appearance"
            },
            {
              "modality": "Chest CT",
              "finding": "Detailed parenchyma evaluation",
              "significance": "Exclusion of complications"
            }
          ],
          "microbiology": [
            {
              "test": "Sputum Gram stain",
              "finding": "Gram+ lancet-shaped diplococci, >25 neutrophils/field",
              "significance": "Quick orientation"
            },
            {
              "test": "Sputum culture",
              "finding": "S. pneumoniae isolation",
              "significance": "Antibiotic susceptibility"
            },
            {
              "test": "Urine antigen test",
              "finding": "Pneumococcal polysaccharide detection",
              "significance": "Fast, specific (>90%)"
            },
            {
              "test": "PCR",
              "finding": "lytA gene detection",
              "significance": "Most sensitive method"
            }
          ]
        },
        "calculators": [
          {
            "name": "CURB-65 Score - Pneumonia Severity",
            "items": [
              {
                "label": "Confusion",
                "points": 1
              },
              {
                "label": "Urea > 7 mmol/L",
                "points": 1
              },
              {
                "label": "Respiratory rate ≥ 30/min",
                "points": 1
              },
              {
                "label": "Blood pressure (SBP < 90 or DBP ≤ 60 mmHg)",
                "points": 1
              },
              {
                "label": "Age ≥ 65 years",
                "points": 1
              }
            ],
            "interpretation": [
              {
                "min": 0,
                "max": 1,
                "text": "Low risk (mortality <3%). Consider home treatment."
              },
              {
                "min": 2,
                "max": 2,
                "text": "Moderate risk (mortality 9%). Hospital admission recommended."
              },
              {
                "min": 3,
                "max": 5,
                "text": "High risk (mortality 15-40%). Urgent hospital/ICU admission."
              }
            ]
          }
        ],
        "differential": [
          {
            "disease": "Legionella pneumonia",
            "distinguishing": "Hyponatremia, GI symptoms, atypical X-ray"
          },
          {
            "disease": "Klebsiella pneumonia",
            "distinguishing": "Alcoholics, currant jelly sputum, upper lobe"
          },
          {
            "disease": "Mycoplasma pneumonia",
            "distinguishing": "Young people, slow onset, atypical symptoms"
          },
          {
            "disease": "Pulmonary embolism",
            "distinguishing": "Risk factors, D-dimer, CTPA"
          },
          {
            "disease": "Heart failure",
            "distinguishing": "Cardiac history, BNP, bilateral infiltrates"
          }
        ],
        "therapy": {
          "guidelines": [
            "NICE NG138 (Pneumonia in adults) 2024/2025",
            "ATS/IDSA 2019 CAP Guidelines",
            "Hungarian Society of Infectology"
          ],
          "empirical": {
            "cap_outpatient": {
              "title": "CAP - Outpatient (Mild - CURB-65 0-1)",
              "drugs": [
                {
                  "drug": "Amoxicillin",
                  "dose": "3x500mg-1g PO",
                  "duration": "5 days",
                  "note": "First choice (NICE). 5-day course is usually sufficient."
                },
                {
                  "drug": "Doxycycline",
                  "dose": "200mg stat, then 1x100mg PO",
                  "duration": "5 days",
                  "note": "For penicillin allergy."
                },
                {
                  "drug": "Clarithromycin",
                  "dose": "2x500mg PO",
                  "duration": "5 days",
                  "note": "Alternative."
                }
              ]
            },
            "cap_inpatient": {
              "title": "CAP - Inpatient (Moderate - CURB-65 2)",
              "drugs": [
                {
                  "drug": "Amoxicillin + Clarithromycin",
                  "dose": "3x500mg-1g PO/IV + 2x500mg PO/IV",
                  "duration": "5 days",
                  "note": "Atypical coverage may be needed. (NICE)"
                },
                {
                  "drug": "Doxycycline",
                  "dose": "200mg stat, then 1x100mg PO",
                  "duration": "5 days",
                  "note": "Monotherapy for penicillin allergy."
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "1x500mg PO/IV",
                  "duration": "5 days",
                  "note": "Alternative (NICE: respiratory fluoroquinolone)."
                }
              ]
            },
            "cap_icu": {
              "title": "CAP - Severe (CURB-65 3-5) / ICU",
              "drugs": [
                {
                  "drug": "Co-amoxiclav + Clarithromycin",
                  "dose": "1.2g IV q8h + 500mg IV q12h",
                  "duration": "7-10 days",
                  "note": "NICE recommendation for severe CAP."
                },
                {
                  "drug": "Ceftriaxone + Clarithromycin",
                  "dose": "1x2g IV + 2x500mg IV",
                  "duration": "7-10 days",
                  "note": "Common alternative (not NICE first-line, but widespread)."
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "1x500mg IV",
                  "duration": "7-10 days",
                  "note": "For beta-lactam allergy."
                }
              ]
            },
            "hap_early": {
              "title": "HAP - Not severe / Early",
              "drugs": [
                {
                  "drug": "Co-amoxiclav",
                  "dose": "625mg PO TID or 1.2g IV TID",
                  "duration": "5 days",
                  "note": "First choice (NICE NG191)."
                },
                {
                  "drug": "Doxycycline",
                  "dose": "100mg PO",
                  "duration": "5 days",
                  "note": "Alternative."
                }
              ]
            },
            "hap_late_vap": {
              "title": "HAP - Severe / VAP / High risk",
              "drugs": [
                {
                  "drug": "Antipseudomonal beta-lactam",
                  "dose": "e.g., Piperacillin/tazobactam, Cefepime, Meropenem",
                  "duration": "7 days",
                  "note": "1st component (Gram-negative coverage)."
                },
                {
                  "drug": "+ Antipseudomonal fluoroquinolone or aminoglycoside",
                  "dose": "e.g., Ciprofloxacin, Amikacin",
                  "duration": "7 days",
                  "note": "2nd component (double G- coverage if needed)."
                },
                {
                  "drug": "+ MRSA coverage",
                  "dose": "Vancomycin or Linezolid",
                  "duration": "7 days",
                  "note": "3rd component (if MRSA risk >10-20%)."
                }
              ]
            },
            "vap_stenotrophomonas": {
              "title": "VAP - Stenotrophomonas maltophilia (Targeted)",
              "drugs": [
                {
                  "drug": "Trimethoprim/Sulfamethoxazole (TMP-SMX)",
                  "dose": "15-20 mg/kg/day (TMP) IV in 3-4 div. doses",
                  "duration": "14 days",
                  "note": "First choice. High dose required!"
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "750 mg IV daily",
                  "duration": "14 days",
                  "note": "Alternative."
                },
                {
                  "drug": "Cefiderocol",
                  "dose": "2g IV q8h",
                  "duration": "14 days",
                  "note": "Reserve antibiotic."
                }
              ]
            }
          },
          "targeted": "Penicillin-sensitive: Penicillin G 4x4 million IU IV; Resistant: Ceftriaxone or Vancomycin",
          "supportive": [
            "O2 therapy (SpO2 >92%)",
            "Fluid resuscitation",
            "Antipyretics",
            "Chest drain for empyema"
          ],
          "prevention": [
            "PPSV23 (23-valent polysaccharide)",
            "PCV13/15/20 (conjugate)",
            "Influenza vaccine"
          ]
        },
        "prognosis": {
          "mortality": "CAP: 5-15%, ICU: 20-50%",
          "prognostic_scores": [
            "CURB-65",
            "PSI/PORT score"
          ],
          "factors": "Age, comorbidity, bacteremia, multilobar involvement"
        },
        "references": [
          {
            "text": "NICE NG138: Pneumonia (community-acquired): antimicrobial prescribing",
            "url": "https://www.nice.org.uk/guidance/ng138"
          },
          {
            "text": "ATS/IDSA 2019 Clinical Practice Guideline for Community-Acquired Pneumonia",
            "url": "https://www.atsjournals.org/doi/full/10.1164/rccm.201908-1581ST"
          }
        ],
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Lobar_pneumonia.jpg",
            "caption": "Right lower lobe consolidation on chest X-ray.",
            "type": "X-ray"
          },
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Streptococcus_pneumoniae.jpg",
            "caption": "Gram-positive, lancet-shaped diplococci in sputum smear.",
            "type": "Microscopy"
          }
        ]
      },
      {
        "id": "mediastinitis",
        "name": "Mediastinitis",
        "pathogen": {
          "type": "Bacterium",
          "name": "Polymicrobial, often <i>Staphylococcus aureus</i>, streptococci, gram-negative organisms, anaerobes",
          "gram": "Mixed",
          "shape": "Variable"
        },
        "epidemiology": {
          "incidence": "Rare but severe complication",
          "risk_groups": [
            "Postoperative patients",
            "After endoscopic procedures",
            "Oropharyngeal infections",
            "Trauma",
            "Odontogenic infections",
            "Immunosuppression"
          ],
          "seasonality": "None",
          "transmission": "Not directly contagious; spreads from adjacent tissues, surgery, or endoscopy"
        },
        "pathomechanism": {
          "steps": [
            "The mediastinum can become infected from adjacent tissues (e.g., throat, esophagus, tooth, chest wall), after endoscopy, surgery, or trauma.",
            "Bacterial spread causes inflammation, tissue necrosis, and abscess formation in the mediastinum.",
            "The process can lead to plastic inflammation, cell death, and a systemic inflammatory response that results in sepsis, shock, and multi-organ failure."
          ],
          "virulence_factors": [
            "Biofilm",
            "Toxins",
            "Polymicrobial community",
            "Tissue necrosis"
          ]
        },
        "clinical": {
          "incubation": "Variable, often several days to weeks",
          "onset": "Acute or subacute",
          "symptoms": [
            {
              "name": "Chest pain",
              "description": "Main symptom, often severe and intense, sometimes with dysphagia",
              "severity": "severe"
            },
            {
              "name": "Fever and malaise",
              "description": "Inflammatory condition with tachycardia and fever",
              "severity": "severe"
            },
            {
              "name": "Dysphagia / hoarseness",
              "description": "If the esophagus, larynx, or surrounding mediastinal space is involved",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Fever, tachycardia, leukocytosis",
            "Neck or supraclavicular swelling",
            "Chest pain, dysphagia",
            "In severe cases hypotension and sepsis signs"
          ],
          "complications": [
            "Septic shock",
            "Mediastinal abscess",
            "Esophageal perforation",
            "Aortic or major vessel involvement",
            "Pulmonary or pleural complications",
            "Death"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC, CRP, PCT",
              "finding": "Inflammation, often high PCT",
              "interpretation": "Severe inflammation/infection"
            },
            {
              "test": "Blood culture",
              "finding": "May be positive",
              "interpretation": "Sepsis or hematogenous spread suspected"
            }
          ],
          "imaging": [
            {
              "modality": "CT chest/neck",
              "finding": "Mediastinal soft-tissue swelling, abscess, gas, fluid",
              "significance": "Most important imaging"
            },
            {
              "modality": "Chest X-ray",
              "finding": "Mediastinal widening, sometimes pleural effusion",
              "significance": "First step, but less specific"
            }
          ],
          "microbiology": [
            {
              "test": "Surgical/bronchoscopic samples",
              "finding": "Culture and PCR",
              "significance": "Targeted therapy and resistance"
            }
          ]
        },
        "differential": [
          {
            "disease": "Pneumonia",
            "distinguishing": "Pulmonary parenchymal focus, less mediastinal"
          },
          {
            "disease": "Aortic dissection / mediastinal bleeding",
            "distinguishing": "Distinguishable with appropriate imaging"
          },
          {
            "disease": "Pleuritis / empyema",
            "distinguishing": "Pleural and fluid focus, not primary mediastinal infection"
          }
        ],
        "therapy": {
          "empirical": {
            "inpatient": [
              {
                "drug": "Piperacillin/tazobactam",
                "dose": "4.5g IV q8h",
                "duration": "Hospital/IV",
                "note": "Broad spectrum, often first choice"
              },
              {
                "drug": "+ Vancomycin",
                "dose": "15-20 mg/kg IV q12h",
                "duration": "",
                "note": "MRSA coverage"
              },
              {
                "drug": "+ Clindamycin or Metronidazole",
                "dose": "600mg IV q8h",
                "duration": "",
                "note": "Anaerobic coverage"
              }
            ],
            "icu": [
              {
                "drug": "Meropenem",
                "dose": "1g IV q8h",
                "duration": "",
                "note": "Severe, critical condition"
              },
              {
                "drug": "+ Vancomycin",
                "dose": "15-20 mg/kg IV q12h",
                "duration": "",
                "note": "MRSA/G+ coverage"
              }
            ]
          },
          "targeted": "Adjusted based on culture and susceptibility; source control and surgical drainage are decisive.",
          "supportive": [
            "Urgent surgical consultation",
            "IV fluids",
            "Vasopressors in severe sepsis",
            "Nutrition",
            "Respiratory support"
          ],
          "prevention": [
            "Antibiotic prophylaxis before procedures",
            "Hygienic surgical technique",
            "Treatment of dental and throat infections"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "CT chest/neck is the key examination; clinical suspicion and imaging together determine the diagnosis."
          ],
          "treatment_indications": [
            "Any suspected mediastinitis requires urgent hospital care; surgical debridement/drainage is often necessary."
          ],
          "first_line": [
            "Broad-spectrum IV antibiotics plus surgical source control."
          ]
        },
        "prognosis": {
          "mortality": "High, especially if diagnosed late or associated with sepsis",
          "prognostic_scores": [
            "No single score"
          ],
          "factors": "Late diagnosis, immunosuppression, severity of the underlying disease, vascular involvement"
        }
      },
      {
        "id": "tuberculosis",
        "name": "Pulmonary Tuberculosis",
        "pathogen": {
          "type": "Mycobacterium",
          "name": "<i>Mycobacterium tuberculosis</i>",
          "gram": "Acid-fast (Ziehl-Neelsen+)",
          "shape": "rod"
        },
        "epidemiology": {
          "incidence": "~10 million new cases/year worldwide, ~500 cases/year in Hungary",
          "risk_groups": [
            "People living with HIV (20-30x risk)",
            "Patients with diabetes",
            "Immunocompromised",
            "Socially disadvantaged",
            "Healthcare workers",
            "Immigrants from endemic areas"
          ],
          "seasonality": "No seasonality",
          "transmission": "Droplet infection (< 5 μm aerosol), 8+ hours exposure in a closed space"
        },
        "pathomechanism": {
          "steps": [
            "Infection occurs by inhaling aerosol droplets containing the pathogen. The bacteria are phagocytosed by alveolar macrophages but survive and multiply within them.",
            "A primary lesion (Ghon focus) develops at the site of infection, and the bacteria spread to regional lymph nodes, forming the primary complex.",
            "The cellular immune response (T-cells) is activated, leading to granuloma formation. These granulomas encapsulate the bacteria, establishing a latent infection (LTBI) in 90% of cases.",
            "In case of immunosuppression, the bacteria can reactivate. The center of the granuloma undergoes caseous necrosis, which can liquefy and form a cavity, leading to an open, infectious form of the disease."
          ],
          "virulence_factors": [
            "Cord factor (trehalose dimycolate)",
            "Mycolic acid (cell wall)",
            "Lipoarabinomannan",
            "ESAT-6 and CFP-10 secreted antigens"
          ]
        },
        "clinical": {
          "incubation": "Primary: 2-12 weeks; Reactivation: years-decades",
          "onset": "Slow, insidious",
          "symptoms": [
            {
              "name": "Respiratory Symptoms",
              "description": "Chronic cough lasting more than 3 weeks, which may initially be dry and later become productive. Bloody sputum (hemoptysis) may appear later.",
              "severity": "severe"
            },
            {
              "name": "Constitutional (B) Symptoms",
              "description": "Insidious onset with prolonged symptoms: low-grade fever (especially in the afternoon), profuse night sweats, and significant unintentional weight loss.",
              "severity": "moderate"
            },
            {
              "name": "Other",
              "description": "Fatigue, loss of appetite, chest pain.",
              "severity": "mild"
            }
          ],
          "physical_exam": [
            "Cachexia",
            "Crepitation/bronchial breathing over upper lobes",
            "Decreased breath sounds over a cavity",
            "Pleural friction rub",
            "Lymphadenopathy (miliary/extrapulmonary)"
          ],
          "complications": [
            "Miliary TB",
            "TB meningitis",
            "Pleuritis",
            "Pericarditis",
            "Spontaneous pneumothorax",
            "Hemoptysis",
            "Amyloidosis"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC",
              "finding": "Normocytic anemia, lymphopenia",
              "interpretation": "Signs of chronic disease"
            },
            {
              "test": "CRP/ESR",
              "finding": "Moderately elevated",
              "interpretation": "Non-specific"
            },
            {
              "test": "Liver/kidney function",
              "finding": "Baseline before treatment",
              "interpretation": "Monitoring for drug toxicity"
            },
            {
              "test": "HIV serology",
              "finding": "Mandatory",
              "interpretation": "Exclusion of coinfection"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray",
              "finding": "Upper lobe infiltrate, cavity, fibrotic scarring, calcification",
              "significance": "Screening and follow-up"
            },
            {
              "modality": "Chest CT",
              "finding": "Tree-in-bud sign, cavities, miliary pattern",
              "significance": "More sensitive, extrapulmonary"
            }
          ],
          "microbiology": [
            {
              "test": "Sputum Ziehl-Neelsen stain",
              "finding": "Acid-fast bacilli (AFB)",
              "significance": "Fast, but only positive >10^4/mL"
            },
            {
              "test": "Sputum/BAL culture",
              "finding": "Löwenstein-Jensen/MGIT",
              "significance": "Gold standard, 2-8 weeks"
            },
            {
              "test": "GeneXpert MTB/RIF",
              "finding": "MTB DNA + rifampicin resistance",
              "significance": "Fast (<2 hours), sensitive"
            },
            {
              "test": "Tuberculin skin test (Mantoux)",
              "finding": ">10mm induration",
              "significance": "Exposure, not active disease"
            },
            {
              "test": "IGRA (QuantiFERON/T-SPOT)",
              "finding": "IFN-γ production to ESAT-6/CFP-10",
              "significance": "Not affected by BCG"
            }
          ]
        },
        "differential": [
          {
            "disease": "Lung carcinoma",
            "distinguishing": "Smoking, X-ray/CT, bronchoscopy, biopsy"
          },
          {
            "disease": "Non-tuberculous mycobacteriosis (NTM)",
            "distinguishing": "Bronchiectasis, culture, MAC most common"
          },
          {
            "disease": "Sarcoidosis",
            "distinguishing": "Bilateral hilar lymphadenopathy, biopsy (non-caseating)"
          },
          {
            "disease": "Fungal pneumonia",
            "distinguishing": "Immunosuppression, culture/antigen"
          },
          {
            "disease": "Actinomycosis",
            "distinguishing": "Sulfur granules, chest wall penetration"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Isoniazid (INH)",
                "dose": "5 mg/kg (max 300mg) PO",
                "duration": "6 months",
                "note": "Hepatotoxicity, peripheral neuropathy (B6!)"
              },
              {
                "drug": "Rifampicin (RIF)",
                "dose": "10 mg/kg (max 600mg) PO",
                "duration": "6 months",
                "note": "Drug interactions (CYP450)"
              },
              {
                "drug": "Pyrazinamide (PZA)",
                "dose": "25 mg/kg PO",
                "duration": "2 months",
                "note": "Hyperuricemia, hepatotoxicity"
              },
              {
                "drug": "Ethambutol (EMB)",
                "dose": "15 mg/kg PO",
                "duration": "2 months",
                "note": "Optic neuritis"
              }
            ],
            "inpatient": [
              {
                "drug": "Same + isolation",
                "dose": "Airborne isolation",
                "duration": "2 weeks or 3 negative sputa",
                "note": "Negative pressure room"
              }
            ],
            "icu": [
              {
                "drug": "IV formulations",
                "dose": "If PO not tolerated",
                "duration": "Individual",
                "note": "MDR-TB: individualized"
              }
            ]
          },
          "targeted": "MDR-TB: Bedaquiline, Linezolid, Fluoroquinolones, Aminoglycosides - expert center",
          "supportive": [
            "Vitamin B6 (neuropathy prevention)",
            "Nutrition",
            "Contact tracing"
          ],
          "prevention": [
            "BCG vaccine (newborns)",
            "LTBI treatment (INH 9 mo or RIF 4 mo)",
            "Contact screening"
          ]
        },
        "prognosis": {
          "mortality": "Treated: <5%; Untreated: 50%; MDR/XDR: 30-50%",
          "prognostic_scores": [
            "No standard scores"
          ],
          "factors": "HIV status, MDR, adherence, late diagnosis"
        },
        "references": [
          {
            "text": "WHO Global Tuberculosis Report 2023",
            "url": "https://www.who.int/teams/global-tuberculosis-programme/tb-reports/global-tuberculosis-report-2023"
          },
          {
            "text": "CDC Tuberculosis (TB) Guidelines",
            "url": "https://www.cdc.gov/tb/topic/treatment/index.htm"
          }
        ],
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tuberculosis-x-ray-1.jpg",
            "caption": "Right upper lobe cavity in post-primary tuberculosis.",
            "type": "X-ray"
          },
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tuberculosis-x-ray-1.jpg",
            "caption": "Chest CT with \"tree-in-bud\" pattern, indicating active endobronchial spread.",
            "type": "CT"
          }
        ]
      },
      {
        "id": "legionella",
        "name": "Legionella Pneumonia (Legionnaires' Disease)",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Legionella pneumophila</i>",
          "gram": "Gram-negative (stains poorly)",
          "shape": "rod, intracellular"
        },
        "epidemiology": {
          "incidence": "2-9% of CAP, up to 30% of nosocomial pneumonia",
          "risk_groups": [
            "Elderly (>50 years)",
            "Smokers",
            "COPD patients",
            "Immunocompromised",
            "Chronic kidney disease",
            "Diabetes"
          ],
          "seasonality": "Summer-autumn (air conditioning)",
          "transmission": "Inhalation (aerosol from contaminated water: cooling towers, showers, hot tubs). NOT transmitted person-to-person!"
        },
        "pathomechanism": {
          "steps": [
            "Infection occurs by inhaling aerosols (e.g., from showers, cooling towers, air conditioners) containing the bacteria.",
            "Once in the lungs, Legionella enters alveolar macrophages, where a special secretion system (Dot/Icm) prevents the fusion of phagosomes and lysosomes.",
            "The bacteria replicate within a protected vacuole inside the macrophage, then lyse the cell to infect new ones.",
            "This process triggers a severe, necrotizing pneumonia and a strong inflammatory response."
          ],
          "virulence_factors": [
            "Dot/Icm secretion system",
            "Mip (macrophage infectivity potentiator)",
            "Flagellum",
            "Over 300 effector proteins"
          ]
        },
        "clinical": {
          "incubation": "2-10 days (average 5-6 days)",
          "onset": "Prodrome for 1-2 days, then rapid progression",
          "symptoms": [
            {
              "name": "Atypical Pneumonia",
              "description": "High fever, chills, and an initially dry, non-productive cough.",
              "severity": "severe"
            },
            {
              "name": "Extrapulmonary Symptoms",
              "description": "Multisystem involvement is characteristic: gastrointestinal (diarrhea, nausea) and neurological (headache, confusion, delirium).",
              "severity": "moderate"
            },
            {
              "name": "Characteristic Signs",
              "description": "Relative bradycardia (low pulse rate despite high fever) and hyponatremia in lab tests are common.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "High fever with relative bradycardia (Faget's sign)",
            "Signs of consolidation on auscultation",
            "Mild hepatomegaly",
            "Cerebellar signs possible"
          ],
          "complications": [
            "Respiratory failure/ARDS",
            "Acute kidney injury",
            "Rhabdomyolysis",
            "Sepsis",
            "Endocarditis",
            "Encephalopathy"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC",
              "finding": "Leukocytosis (left shift)",
              "interpretation": "Non-specific"
            },
            {
              "test": "Sodium",
              "finding": "Hyponatremia (<130 mmol/L)",
              "interpretation": "SIADH - characteristic!"
            },
            {
              "test": "Liver enzymes",
              "finding": "Elevated AST, ALT, LDH",
              "interpretation": "Common association"
            },
            {
              "test": "CK",
              "finding": "Elevated",
              "interpretation": "Myositis/rhabdomyolysis"
            },
            {
              "test": "CRP/PCT",
              "finding": "Significantly elevated",
              "interpretation": "Severe bacterial infection"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray",
              "finding": "Rapidly progressing infiltrate, often unilateral, lobar",
              "significance": "Worse than clinical picture"
            },
            {
              "modality": "Chest CT",
              "finding": "Ground-glass and consolidation, pleural effusion",
              "significance": "More sensitive"
            }
          ],
          "microbiology": [
            {
              "test": "Urine Legionella antigen",
              "finding": "L. pneumophila serogroup 1 (70%)",
              "significance": "Fast (<15 min), specific >95%"
            },
            {
              "test": "Culture (BCYE agar)",
              "finding": "Legionella isolation",
              "significance": "Gold standard, 3-5 days"
            },
            {
              "test": "PCR",
              "finding": "Legionella DNA",
              "significance": "Fast, detects all serotypes"
            },
            {
              "test": "Serology",
              "finding": "4x titer rise",
              "significance": "Retrospective diagnosis"
            }
          ]
        },
        "calculators": [
          {
            "name": "CURB-65 Score - Pneumonia Severity",
            "items": [
              {
                "label": "Confusion",
                "points": 1
              },
              {
                "label": "Urea > 7 mmol/L",
                "points": 1
              },
              {
                "label": "Respiratory rate ≥ 30/min",
                "points": 1
              },
              {
                "label": "Blood pressure (SBP < 90 or DBP ≤ 60 mmHg)",
                "points": 1
              },
              {
                "label": "Age ≥ 65 years",
                "points": 1
              }
            ],
            "interpretation": [
              {
                "min": 0,
                "max": 1,
                "text": "Low risk (mortality <3%). Consider home treatment."
              },
              {
                "min": 2,
                "max": 2,
                "text": "Moderate risk (mortality 9%). Hospital admission recommended."
              },
              {
                "min": 3,
                "max": 5,
                "text": "High risk (mortality 15-40%). Urgent hospital/ICU admission."
              }
            ]
          }
        ],
        "differential": [
          {
            "disease": "Pneumococcal pneumonia",
            "distinguishing": "Productive cough, no GI/neuro symptoms, normal Na"
          },
          {
            "disease": "Mycoplasma pneumonia",
            "distinguishing": "Younger patients, slower progression, cold agglutinins"
          },
          {
            "disease": "Q fever",
            "distinguishing": "Animal exposure, hepatitis dominates"
          },
          {
            "disease": "Psittacosis",
            "distinguishing": "Bird contact, hepatosplenomegaly"
          },
          {
            "disease": "Influenza pneumonia",
            "distinguishing": "Seasonality, rapid test, epidemiology"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Azithromycin",
                "dose": "1x500mg PO",
                "duration": "5-7 days",
                "note": "First choice"
              },
              {
                "drug": "Levofloxacin",
                "dose": "1x750mg PO",
                "duration": "7-10 days",
                "note": "Alternative"
              }
            ],
            "inpatient": [
              {
                "drug": "Levofloxacin",
                "dose": "1x750mg IV",
                "duration": "10-14 days",
                "note": "Better penetration"
              },
              {
                "drug": "Azithromycin",
                "dose": "1x500mg IV",
                "duration": "10-14 days",
                "note": "Alternative"
              }
            ],
            "icu": [
              {
                "drug": "Levofloxacin + Azithromycin",
                "dose": "In combination",
                "duration": "14-21 days",
                "note": "In severe cases"
              },
              {
                "drug": "Rifampicin may be added",
                "dose": "2x300mg IV/PO",
                "duration": "",
                "note": "In immunosuppressed patients"
              }
            ]
          },
          "targeted": "Fluoroquinolones or macrolides (beta-lactams are ineffective!)",
          "supportive": [
            "Fluid resuscitation",
            "Electrolyte correction",
            "Ventilation for ARDS"
          ],
          "prevention": [
            "Water system maintenance (>60°C)",
            "Disinfection of cooling towers",
            "Nosocomial surveillance"
          ]
        },
        "prognosis": {
          "mortality": "Overall 10-15%, immunocompromised 40%",
          "prognostic_scores": [
            "CURB-65",
            "PSI"
          ],
          "factors": "Delayed diagnosis, inappropriate antibiotics, immunosuppression"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Legionella_pneumophila_01.jpg",
            "caption": "Electron micrograph of Legionella pneumophila.",
            "type": "Microscopy"
          }
        ]
      },
      {
        "id": "mycoplasma",
        "name": "Mycoplasma Pneumonia",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Mycoplasma pneumoniae</i>",
          "gram": "No cell wall",
          "shape": "pleomorphic"
        },
        "epidemiology": {
          "incidence": "15-20% of CAP, 50% in epidemics",
          "risk_groups": [
            "School-age children",
            "Young adults",
            "Closed communities (dorms, barracks)"
          ],
          "seasonality": "Autumn-winter, but occurs year-round",
          "transmission": "Droplet infection (close contact)"
        },
        "pathomechanism": {
          "steps": [
            "The pathogen adheres tightly to the cilia of respiratory epithelial cells using its P1 adhesin.",
            "Hydrogen peroxide and the CARDS toxin produced by the bacterium damage the cilia (ciliostasis), leading to impaired mucociliary clearance.",
            "The inflammatory response and cellular damage cause the prolonged cough and pneumonia."
          ],
          "virulence_factors": [
            "P1 adhesin",
            "CARDS toxin",
            "Hydrogen peroxide"
          ]
        },
        "clinical": {
          "incubation": "2-3 weeks",
          "onset": "Slow, gradual",
          "symptoms": [
            {
              "name": "Atypical Pneumonia",
              "description": "Gradual onset with low-grade fever, headache, and malaise. The leading symptom is a dry, hacking, paroxysmal cough that lasts for weeks.",
              "severity": "moderate"
            },
            {
              "name": "\"Walking Pneumonia\"",
              "description": "Physical findings (sparse auscultation) are often much milder than the extensive inflammation seen on the chest X-ray.",
              "severity": "mild"
            },
            {
              "name": "Extrapulmonary Symptoms",
              "description": "Rashes (e.g., erythema multiforme), hemolytic anemia (cold agglutinin disease), or neurological complications can occur.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Often sparse auscultation findings",
            "Possible rales, wheezing",
            "Bullous myringitis (eardrum blisters - rare but specific)",
            "Cervical lymphadenopathy"
          ],
          "complications": [
            "Stevens-Johnson syndrome",
            "Hemolytic anemia (cold agglutinin)",
            "Encephalitis",
            "Myocarditis"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC",
              "finding": "Normal WBC, possibly mild leukocytosis",
              "interpretation": "Non-specific"
            },
            {
              "test": "CRP",
              "finding": "Moderately elevated",
              "interpretation": "Atypical feature"
            },
            {
              "test": "Cold agglutinin",
              "finding": "Positive (50%)",
              "interpretation": "Non-specific, but characteristic"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray",
              "finding": "Interstitial pattern, patchy infiltrates",
              "significance": "Worse than clinical picture (\"Walking pneumonia\")"
            }
          ],
          "microbiology": [
            {
              "test": "PCR",
              "finding": "DNA detection (throat/sputum)",
              "significance": "Gold standard, fast"
            },
            {
              "test": "Serology (IgM/IgG)",
              "finding": "Titer rise",
              "significance": "Retrospective, often negative in acute phase"
            }
          ]
        },
        "differential": [
          {
            "disease": "Chlamydia pneumoniae",
            "distinguishing": "Clinically difficult to distinguish, PCR"
          },
          {
            "disease": "Viral pneumonia",
            "distinguishing": "Epidemiology, PCR"
          },
          {
            "disease": "Legionella",
            "distinguishing": "More severe, older patients, hyponatremia"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Azithromycin",
                "dose": "500mg D1, then 250mg D2-5",
                "duration": "5 days",
                "note": "First choice"
              },
              {
                "drug": "Doxycycline",
                "dose": "2x100mg",
                "duration": "7-10 days",
                "note": "Alternative (>8 years)"
              },
              {
                "drug": "Clarithromycin",
                "dose": "2x500mg",
                "duration": "7 days",
                "note": "Alternative"
              }
            ],
            "inpatient": [
              {
                "drug": "Levofloxacin",
                "dose": "1x500-750mg IV/PO",
                "duration": "10-14 days",
                "note": "In severe cases"
              },
              {
                "drug": "Moxifloxacin",
                "dose": "1x400mg IV/PO",
                "duration": "10-14 days",
                "note": "Alternative"
              }
            ],
            "icu": [
              {
                "drug": "Macrolide + Beta-lactam",
                "dose": "Combination",
                "duration": "",
                "note": "To cover mixed infection"
              }
            ]
          },
          "targeted": "Macrolides (resistance increasing!), Tetracyclines, Fluoroquinolones",
          "supportive": [
            "Cough suppressants",
            "Antipyretics"
          ],
          "prevention": [
            "Droplet precautions",
            "No vaccine"
          ]
        },
        "prognosis": {
          "mortality": "Very low, usually self-limiting",
          "prognostic_scores": [
            "PSI (rarely needed)"
          ],
          "factors": "Extrapulmonary complications"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Mycoplasma_pneumoniae.webp",
            "caption": "Radiologic image associated with Mycoplasma pneumoniae infection.",
            "type": "X-ray"
          }
        ]
      },
      {
        "id": "chlamydia_pneumoniae",
        "name": "Chlamydia pneumoniae",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Chlamydia pneumoniae</i>",
          "gram": "Gram-negative (intracellular)",
          "shape": "coccoid"
        },
        "epidemiology": {
          "incidence": "5-10% of CAP",
          "risk_groups": [
            "Elderly",
            "Patients with chronic diseases",
            "Closed communities"
          ],
          "seasonality": "Year-round",
          "transmission": "Droplet infection"
        },
        "pathomechanism": {
          "steps": [
            "Infection begins with the inhalation of infectious elementary bodies (EBs). Inside the cell, EBs transform into reticulate bodies (RBs), the replicating form.",
            "After replication, RBs convert back to EBs, the cell lyses, and the new elementary bodies infect more cells.",
            "This cycle leads to damage of the respiratory epithelium and inflammation."
          ],
          "virulence_factors": [
            "Intracellular survival",
            "Endotoxin-like substances"
          ]
        },
        "clinical": {
          "incubation": "3-4 weeks",
          "onset": "Gradual",
          "symptoms": [
            {
              "name": "Biphasic Course",
              "description": "Often occurs in two phases: initially pharyngitis and laryngitis (hoarseness is characteristic), followed 1-3 weeks later by the development of atypical pneumonia.",
              "severity": "moderate"
            },
            {
              "name": "Prolonged Cough",
              "description": "The most characteristic feature of the pneumonia is a dry, irritative cough that persists for weeks to months.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Pharyngitis",
            "Rales",
            "Signs of sinusitis"
          ],
          "complications": [
            "Reactive arthritis",
            "Myocarditis",
            "Atherosclerosis (association)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC",
              "finding": "Normal",
              "interpretation": "Non-specific"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray",
              "finding": "Small infiltrates",
              "significance": "Non-specific"
            }
          ],
          "microbiology": [
            {
              "test": "PCR",
              "finding": "DNA detection",
              "significance": "Most sensitive"
            },
            {
              "test": "Serology",
              "finding": "MIF (microimmunofluorescence)",
              "significance": "Gold standard serology"
            }
          ]
        },
        "differential": [
          {
            "disease": "Mycoplasma",
            "distinguishing": "Practically identical clinical picture"
          },
          {
            "disease": "Viruses",
            "distinguishing": "PCR"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Doxycycline",
                "dose": "2x100mg",
                "duration": "10-14 days",
                "note": "First choice"
              },
              {
                "drug": "Azithromycin",
                "dose": "500mg D1, 250mg D2-5",
                "duration": "5 days",
                "note": "Alternative"
              }
            ],
            "inpatient": [
              {
                "drug": "Levofloxacin",
                "dose": "1x750mg",
                "duration": "10-14 days",
                "note": "In more severe cases"
              }
            ],
            "icu": [
              {
                "drug": "Levofloxacin",
                "dose": "IV",
                "duration": "14 days",
                "note": ""
              }
            ]
          },
          "targeted": "Tetracyclines, Macrolides, Quinolones",
          "supportive": [
            "Symptomatic treatment"
          ],
          "prevention": [
            "No vaccine"
          ]
        },
        "prognosis": {
          "mortality": "Low",
          "prognostic_scores": [
            "PSI"
          ],
          "factors": "Old age, comorbidity"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Chlamydophila_psittaci_FA_stain.jpg",
            "caption": "Fluorescent stain of Chlamydophila/Chlamydia psittaci.",
            "type": "Microscopy"
          }
        ]
      },
      {
        "id": "psittacosis",
        "name": "Ornithosis (Psittacosis)",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Chlamydia psittaci</i>",
          "gram": "Intracellular",
          "shape": "coccoid"
        },
        "epidemiology": {
          "incidence": "Rare, occupational disease",
          "risk_groups": [
            "Bird owners (parrots, pigeons)",
            "Veterinarians",
            "Poultry workers"
          ],
          "seasonality": "None",
          "transmission": "Inhalation of dust from bird droppings"
        },
        "pathomechanism": {
          "steps": [
            "Infection occurs by inhaling dust contaminated with the dried droppings of birds (especially parrots, pigeons).",
            "The pathogen spreads from the lungs to the reticuloendothelial system (liver, spleen), where it multiplies.",
            "During a secondary viremia, the bacteria return to the lungs, causing an atypical, interstitial pneumonia."
          ],
          "virulence_factors": [
            "Intracellular survival"
          ]
        },
        "clinical": {
          "incubation": "5-14 days",
          "onset": "Sudden",
          "symptoms": [
            {
              "name": "Typhoid-like Symptoms",
              "description": "Sudden onset of high fever, chills, and a severe, debilitating headache.",
              "severity": "severe"
            },
            {
              "name": "Respiratory Symptoms",
              "description": "A dry, non-productive cough. Physical findings are often sparse compared to the chest X-ray.",
              "severity": "moderate"
            },
            {
              "name": "Systemic Signs",
              "description": "Hepatosplenomegaly and relative bradycardia (Faget's sign) are common.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Relative bradycardia (Faget's sign)",
            "Splenomegaly (10-70%)",
            "Horder spots (pink rash - rare)",
            "Sparse lung findings"
          ],
          "complications": [
            "Endocarditis",
            "Hepatitis",
            "Neurological symptoms",
            "ARDS"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC",
              "finding": "Normal or leukopenia",
              "interpretation": "Non-bacterial character"
            },
            {
              "test": "Liver enzymes",
              "finding": "Elevated",
              "interpretation": "Common"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray",
              "finding": "Atypical pneumonia, fan-shaped hilar infiltrate",
              "significance": "Characteristic"
            }
          ],
          "microbiology": [
            {
              "test": "Serology",
              "finding": "MIF, complement fixation",
              "significance": "4x titer rise"
            },
            {
              "test": "PCR",
              "finding": "Respiratory sample",
              "significance": "Specific"
            }
          ]
        },
        "differential": [
          {
            "disease": "Q fever",
            "distinguishing": "Similar, but no bird contact"
          },
          {
            "disease": "Legionella",
            "distinguishing": "Water exposure"
          },
          {
            "disease": "Typhoid fever",
            "distinguishing": "Travel, rash"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Doxycycline",
                "dose": "2x100mg",
                "duration": "14-21 days",
                "note": "First choice"
              }
            ],
            "inpatient": [
              {
                "drug": "Doxycycline",
                "dose": "2x100mg IV",
                "duration": "14-21 days",
                "note": "In severe cases"
              }
            ],
            "icu": [
              {
                "drug": "Doxycycline",
                "dose": "IV",
                "duration": "",
                "note": ""
              }
            ]
          },
          "targeted": "Tetracyclines (Doxycycline), Macrolides (less effective)",
          "supportive": [
            "Antipyretics"
          ],
          "prevention": [
            "Quarantine of birds",
            "Protective equipment",
            "Wet cleaning"
          ]
        },
        "prognosis": {
          "mortality": "Treated <1%, untreated 10-20%",
          "prognostic_scores": [
            "None"
          ],
          "factors": "Late diagnosis"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Chlamydophila_psittaci_FA_stain.jpg",
            "caption": "Microscopic image of C. psittaci in psittacosis.",
            "type": "Microscopy"
          }
        ]
      },
      {
        "id": "q_fever_resp",
        "name": "Q Fever",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Coxiella burnetii</i>",
          "gram": "Gram-negative (intracellular)",
          "shape": "coccobacillus"
        },
        "epidemiology": {
          "incidence": "Zoonosis, occupational disease",
          "risk_groups": [
            "Livestock farmers",
            "Slaughterhouse workers",
            "Veterinarians"
          ],
          "seasonality": "Spring (birthing season)",
          "transmission": "Aerosol (placenta, amniotic fluid, milk, feces dust)"
        },
        "pathomechanism": {
          "steps": [
            "Infection occurs by inhaling highly infectious aerosols from animal birth products (placenta, amniotic fluid).",
            "The pathogen enters alveolar macrophages, where it not only survives but also replicates within acidic phagosomes.",
            "It spreads via the bloodstream to the liver and bone marrow.",
            "The body attempts to contain the infection by forming characteristic \"doughnut-shaped\" granulomas.",
            "The disease can be acute or chronic (mainly manifesting as endocarditis)."
          ],
          "virulence_factors": [
            "Spore-like form (resistant)",
            "LPS phase variation"
          ]
        },
        "clinical": {
          "incubation": "2-3 weeks",
          "onset": "Sudden",
          "symptoms": [
            {
              "name": "Acute Q Fever",
              "description": "Presents with a sudden onset of high fever, severe retro-orbital headache, and flu-like symptoms. Atypical pneumonia (mild cough) and granulomatous hepatitis (elevated liver enzymes) are common.",
              "severity": "moderate"
            },
            {
              "name": "Chronic Q Fever",
              "description": "Develops months to years later, mainly in patients with pre-existing heart valve defects or immunosuppression. The most common manifestation is culture-negative endocarditis.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Hepatomegaly",
            "Splenomegaly",
            "Relative bradycardia"
          ],
          "complications": [
            "Chronic Q fever (Endocarditis)",
            "Osteomyelitis",
            "Chronic hepatitis"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Liver enzymes",
              "finding": "Elevated",
              "interpretation": "Hepatitis"
            },
            {
              "test": "Thrombocytopenia",
              "finding": "Mild",
              "interpretation": "Common"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray",
              "finding": "Round opacities, multiple",
              "significance": "Pneumonia"
            },
            {
              "modality": "Echo",
              "finding": "Vegetation",
              "significance": "Endocarditis (chronic)"
            }
          ],
          "microbiology": [
            {
              "test": "Serology (IF)",
              "finding": "Phase II (acute), Phase I (chronic)",
              "significance": "Diagnostic"
            },
            {
              "test": "PCR",
              "finding": "From blood",
              "significance": "In early phase"
            }
          ]
        },
        "differential": [
          {
            "disease": "Brucellosis",
            "distinguishing": "Undulant fever, dairy products"
          },
          {
            "disease": "Influenza",
            "distinguishing": "Seasonality, respiratory symptoms dominate"
          },
          {
            "disease": "Viral hepatitis",
            "distinguishing": "Serology"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Doxycycline",
                "dose": "2x100mg",
                "duration": "14 days",
                "note": "Acute Q fever"
              }
            ],
            "inpatient": [
              {
                "drug": "Doxycycline",
                "dose": "2x100mg",
                "duration": "14 days",
                "note": ""
              }
            ],
            "icu": [
              {
                "drug": "Doxycycline + Hydroxychloroquine",
                "dose": "Long-term",
                "duration": "18-24 months",
                "note": "Chronic Q fever (endocarditis)"
              }
            ]
          },
          "targeted": "Doxycycline",
          "supportive": [
            "Antipyretics"
          ],
          "prevention": [
            "Protective equipment during birthing",
            "Pasteurization of milk",
            "Vaccine (Australia)"
          ]
        },
        "prognosis": {
          "mortality": "Acute <2%, Chronic (endocarditis) high if untreated",
          "prognostic_scores": [
            "None"
          ],
          "factors": "Valve defect, immunosuppression"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Coxiella_burnetii%2C_the_bacteria_that_causes_Q_Fever.jpg",
            "caption": "Coxiella burnetii, the causative agent of Q fever.",
            "type": "Microscopy"
          }
        ]
      }
    ]
  },
  "cardiovascular": {
    "name": "Cardiovascular Infections",
    "icon": window.diseaseMetadata.cardiovascular.icon,
    "color": window.diseaseMetadata.cardiovascular.color,
    "diseases": [
      {
        "id": "endocarditis",
        "name": "Infective Endocarditis",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Staphylococcus aureus, Viridans group streptococci, Enterococcus faecalis, Streptococcus gallolyticus, Coagulase-negative staphylococci (S. epidermidis), HACEK group, Coxiella burnetii</i>",
          "gram": "Gram-positive / Gram-negative / Intracellular",
          "shape": "coccus / bacillus"
        },
        "epidemiology": {
          "incidence": "3–10 per 100,000 person-years (increasing age and prosthetic valve usage)",
          "risk_groups": [
            "Prosthetic heart valves (PVE) and TAVI",
            "Cardiac implantable electronic devices (CIED)",
            "Previous episode of infective endocarditis",
            "Congenital heart disease (repaired with prosthetic material or unrepaired cyanotic)",
            "People who inject drugs (PWID)",
            "Hemodialysis and chronic indwelling central venous catheter patients"
          ],
          "seasonality": "None",
          "transmission": "Bacteremia from mucosal disruption (dental, GI, GU procedures), skin/soft tissue infection, or vascular catheters"
        },
        "pathomechanism": {
          "steps": [
            "Endothelial Injury & NBTE: Mechanical or jet-stream injury damages heart valve endothelium, triggering local fibrin and platelet deposition to form sterile Non-Bacterial Thrombotic Endocarditis (NBTE).",
            "Bacterial Adherence & Biofilm: Transient bacteremia allows circulating pathogens with surface adhesins (MSCRAMMs) to colonize NBTE, forming dense biofilms and protective extracellular matrix.",
            "Vegetation Development & Local Tissue Destruction: Proliferating microcolonies promote ongoing fibrin-platelet clotting, forming expanding vegetations that erode valvular cusps, chordae tendineae, and paravalvular structures (causing leaflet perforation, regurgitation, ring abscess, pseudoaneurysm, or intracardiac fistula).",
            "Systemic Septic Embolization: Friable vegetation fragments embolize into circulation, causing ischemic/septic stroke, mycotic aneurysms, splenic/renal infarctions, or septic pulmonary emboli (right-sided IE)."
          ],
          "virulence_factors": [
            "MSCRAMM adhesins (ClfA, FnBPA) for fibronectin/collagen binding",
            "Extracellular biofilm matrix production (PGA/PNAG)",
            "Exotoxins, hemolysins, and coagulase (S. aureus)"
          ]
        },
        "clinical": {
          "incubation": "Days (acute S. aureus) to weeks/months (subacute Viridans strep / Enterococcus)",
          "onset": "Acute or Subacute",
          "symptoms": [
            {
              "name": "Constitutional Symptoms",
              "description": "Fever (present in >90%), chills, night sweats, fatigue, anorexia, weight loss, and arthralgias/myalgias (often presenting as fever of unknown origin [FUO]).",
              "severity": "moderate"
            },
            {
              "name": "Cardiac Failure & Regurgitant Murmurs",
              "description": "New onset or worsening regurgitant cardiac murmur (aortic or mitral regurgitation) and symptoms of acute heart failure (shortness of breath, orthopnea, pulmonary edema) secondary to valvular destruction.",
              "severity": "severe"
            },
            {
              "name": "Embolic & Vascular Phenomena",
              "description": "Acute focal neurological deficits (ischemic/hemorrhagic stroke from septic cerebral emboli), flank pain (splenic/renal infarction), Osler nodes (tender subcutaneous nodules on digit pads), Janeway lesions (painless erythematous macules on palms/soles), and splinter hemorrhages under nails.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Fever (>38.0°C)",
            "New or changing regurgitant heart murmur (aortic/mitral insufficiency)",
            "Signs of heart failure (S3 gallop, bilateral pulmonary crackles, elevated JVP)",
            "Splenomegaly (in subacute cases, 15-30%)",
            "Peripheral vascular signs: Janeway lesions (painless palmar/plantar macules), splinter hemorrhages, conjunctival petechiae",
            "Immunological signs: Osler nodes (painful finger/toe pads), Roth spots (retinal hemorrhages with pale centers)"
          ],
          "complications": [
            "Acute heart failure & cardiogenic shock (severe valve acute insufficiency)",
            "Paravalvular extension: ring abscess, pseudoaneurysm, intracardiac fistula, AV block (conduction bundle erosion)",
            "Systemic septic embolization (stroke, mycotic cerebral aneurysm, splenic/renal infarct)",
            "Sepsis and septic shock",
            "Glomerulonephritis (immune complex deposition) & acute kidney injury"
          ]
        },
        "diagnostics": {
          "criteria": [
            {
              "name": "Major Criteria (ESC 2023)",
              "items": [
                "Blood Cultures Positive: Typical microorganisms consistent with IE (S. aureus, Viridans strep, S. gallolyticus, HACEK, E. faecalis without primary focus) from ≥2 separate blood culture sets; OR persistent bacteremia with any pathogen; OR single positive blood culture/PCR for Coxiella burnetii, or Phase I IgG antibody titer >1:800",
                "Positive Imaging: 1) Echocardiography (TTE/TEE) showing vegetation, abscess, pseudoaneurysm, intracardiac fistula, valvular perforation/aneurysm, or new prosthetic valve dehiscence; 2) Cardiac CT showing paravalvular lesions, pseudoaneurysms, or structural details; 3) 18F-FDG PET/CT or WBC SPECT/CT showing abnormal focal activity at prosthetic valve implantation site (>3 months post-op) or cardiac device"
              ]
            },
            {
              "name": "Minor Criteria (ESC 2023)",
              "items": [
                "Predisposition: Predisposing heart condition (prosthetic valve, prior IE, CHD) or PWID",
                "Fever: Temperature >38.0°C",
                "Vascular Phenomena: Major arterial emboli, septic pulmonary infarcts, mycotic aneurysm, intracranial hemorrhage, Janeway lesions, or imaging-proven emboli/vascular lesions",
                "Immunological Phenomena: Glomerulonephritis, Osler nodes, Roth spots, or positive Rheumatoid Factor",
                "Microbiological Evidence: Positive blood culture not meeting major criterion or serological evidence of active infection with compatible organism"
              ]
            },
            {
              "name": "ESC Diagnostic Categories",
              "items": [
                "Definite IE: 2 Major criteria; OR 1 Major + 3 Minor criteria; OR 5 Minor criteria",
                "Possible IE: 1 Major + 1 Minor criterion; OR 3 Minor criteria"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "Blood cultures (3 sets before antibiotics)",
              "finding": "Continuous bacteremia with typical pathogen",
              "interpretation": "Essential major diagnostic criterion. Obtain 3 sets at 30-min intervals prior to antimicrobial initiation."
            },
            {
              "test": "Inflammatory markers (CRP, ESR, Leukocytes)",
              "finding": "Markedly elevated CRP and ESR, leukocytosis",
              "interpretation": "Monitors disease activity and therapeutic response."
            },
            {
              "test": "Serology & PCR (Culture-negative IE)",
              "finding": "Coxiella burnetii (IgG >1:800), Bartonella spp. serology/PCR, Tropheryma whipplei PCR",
              "interpretation": "Crucial when initial blood cultures remain sterile (5-10% of cases)."
            }
          ],
          "imaging": [
            {
              "modality": "Transthoracic (TTE) & Transesophageal (TEE) Echocardiography",
              "finding": "Vegetation, leaflet perforation, paravalvular abscess, new prosthetic dehiscence",
              "significance": "First-line imaging (TTE in all patients, TEE mandatory in prosthetic valves, CIED, or negative TTE with high suspicion)."
            },
            {
              "modality": "Cardiac CT & Whole-body CT",
              "finding": "Paravalvular abscess/pseudoaneurysm, coronary involvement, peripheral septic emboli (spleen, kidney, brain)",
              "significance": "Class I in ESC 2023 for anatomical evaluation and peripheral embolic screening."
            },
            {
              "modality": "18F-FDG PET/CT or WBC SPECT/CT",
              "finding": "Focal paravalvular metabolic uptake around prosthetic valves or device leads",
              "significance": "Class I for prosthetic valve endocarditis (>3 months post-implant) and suspected CIED infection."
            }
          ],
          "microbiology": [
            {
              "test": "Blood culture",
              "finding": "Pathogen identification and susceptibility testing",
              "significance": "Cornerstone of targeted antimicrobial therapy."
            },
            {
              "test": "Serology & Valvular Tissue PCR",
              "finding": "Coxiella, Bartonella, Tropheryma whipplei, fungal PCR",
              "significance": "Essential for culture-negative IE."
            }
          ]
        },
        "therapy": {
          "guidelines": [
            "2023 ESC Guidelines for the management of endocarditis (Multidisciplinary Endocarditis Team - Class I, Level B)"
          ],
          "empirical": {
            "native_community": {
              "title": "Empiric: Native Valve or Late Prosthetic Valve (>12 months)",
              "drugs": [
                {
                  "drug": "Ampicillin + (Flu)cloxacillin + Gentamicin",
                  "dose": "Ampicillin 12g/day IV (4-6 doses) + (Flu)cloxacillin 12g/day IV (4-6 doses) + Gentamicin 3mg/kg/day IV",
                  "duration": "4-6 weeks (Gentamicin only for first 3-5 days)",
                  "note": "Class I recommendation (ESC 2023). Covers Staphylococci, Streptococci, and Enterococci."
                },
                {
                  "drug": "Vancomycin + Gentamicin (Penicillin Allergy)",
                  "dose": "Vancomycin 30-60mg/kg/day IV (trough 15-20 mcg/mL) + Gentamicin 3mg/kg/day IV",
                  "duration": "4-6 weeks (Gentamicin max 3-5 days)",
                  "note": "Class I recommendation for severe beta-lactam hypersensitivity."
                }
              ]
            },
            "prosthetic_early": {
              "title": "Empiric: Early Prosthetic Valve (<12 months) or Nosocomial",
              "drugs": [
                {
                  "drug": "Vancomycin + Gentamicin + Rifampicin",
                  "dose": "Vancomycin 30-60mg/kg/day IV + Gentamicin 3mg/kg/day IV + Rifampicin 900-1200mg/day IV/PO (2-3 divided doses)",
                  "duration": "6 weeks (Rifampicin for 6 weeks, Gentamicin for 2 weeks)",
                  "note": "Class I recommendation. Delay Rifampicin by 3-5 days until bacteremia clears to prevent rapid resistance."
                }
              ]
            },
            "targeted_staph": {
              "title": "Targeted: Staphylococcus spp. (MSSA / MRSA)",
              "drugs": [
                {
                  "drug": "MSSA Native Valve: (Flu)cloxacillin or Cefazolin",
                  "dose": "(Flu)cloxacillin 12g/day IV OR Cefazolin 6g/day IV (3 divided doses)",
                  "duration": "4-6 weeks",
                  "note": "Class I recommendation. Cefazolin preferred for non-anaphylactic penicillin allergy."
                },
                {
                  "drug": "MRSA Native Valve: Vancomycin or Daptomycin",
                  "dose": "Vancomycin 30-60mg/kg/day IV OR Daptomycin 10-12mg/kg/day IV",
                  "duration": "4-6 weeks",
                  "note": "Class I recommendation."
                },
                {
                  "drug": "Prosthetic Valve Staphylococcal IE: Triple Therapy",
                  "dose": "(Flu)cloxacillin or Vancomycin + Rifampicin 900-1200mg/day + Gentamicin 3mg/kg/day",
                  "duration": "Beta-lactam/Vanco 6 weeks, Rifampicin 6 weeks, Gentamicin 2 weeks",
                  "note": "Class I recommendation. Biofilm eradication."
                }
              ]
            },
            "targeted_strep": {
              "title": "Targeted: Streptococcus spp. (Oral / Bowel)",
              "drugs": [
                {
                  "drug": "Penicillin G or Amoxicillin or Ceftriaxone",
                  "dose": "Penicillin G 12-24 million IU/day IV OR Amoxicillin 100-200mg/kg/day IV OR Ceftriaxone 2g/day IV",
                  "duration": "4 weeks (native valve) or 6 weeks (prosthetic valve)",
                  "note": "Class I recommendation. Short 2-week regimen possible with Gentamicin in uncomplicated native valve IE."
                }
              ]
            },
            "targeted_entero": {
              "title": "Targeted: Enterococcus faecalis",
              "drugs": [
                {
                  "drug": "Amoxicillin + Ceftriaxone (Preferred Dual Beta-Lactam)",
                  "dose": "Amoxicillin 200mg/kg/day IV + Ceftriaxone 4g/day IV (2 divided doses)",
                  "duration": "6 weeks (4 weeks if native valve & symptoms <3 months)",
                  "note": "Class I recommendation. High synergistic efficacy without nephrotoxicity."
                },
                {
                  "drug": "Ampicillin + Gentamicin",
                  "dose": "Ampicillin 12g/day IV + Gentamicin 3mg/kg/day IV",
                  "duration": "6 weeks (Gentamicin 2-6 weeks depending on renal function)",
                  "note": "Class I recommendation (alternative)."
                }
              ]
            },
            "culture_neg": {
              "title": "Culture-Negative & Special Pathogens",
              "drugs": [
                {
                  "drug": "Coxiella burnetii (Q Fever)",
                  "dose": "Doxycycline 200mg/day PO + Hydroxychloroquine 600mg/day PO",
                  "duration": "18-24 months",
                  "note": "Class I recommendation."
                },
                {
                  "drug": "Bartonella spp.",
                  "dose": "Doxycycline 200mg/day PO (6 weeks) + Gentamicin 3mg/kg/day IV (2 weeks)",
                  "duration": "6 weeks",
                  "note": "Class I recommendation."
                }
              ]
            }
          },
          "targeted": "In stable patients with left-sided IE after at least 10 days of IV therapy, switching to oral antibiotic therapy (OAT) is recommended (ESC 2023 based on the POET trial) provided TEE rules out abscess or uncorrected surgical complications, and patient compliance/absorption is verified.",
          "supportive": [
            "Immediate management by a multidisciplinary Endocarditis Team (Cardiologist, Infectious Disease, Cardiac Surgeon, Microbiologist)",
            "Surgical indications (ESC 2023): Emergency (<24h) or Urgent (<7 days) surgery for: 1) Heart failure / cardiogenic shock from severe acute regurgitation; 2) Uncontrolled infection (abscess, pseudoaneurysm, persistent bacteremia >7 days, fungal/multiresistant organism); 3) High embolic risk (persistent vegetation >10mm after embolic event, or isolated >15mm vegetation)",
            "Strict colonoscopy screening in all patients with Streptococcus gallolyticus or Enterococcus faecalis IE to detect occult gastrointestinal neoplasia"
          ],
          "prevention": [
            "Targeted Antibiotic Prophylaxis: Recommended ONLY in highest-risk patients (prosthetic valves including TAVI, prior IE, unrepaired cyanotic CHD, repaired CHD with prosthetic material) undergoing high-risk dental procedures (Amoxicillin 2g PO 30-60 min before procedure, or Clindamycin 600mg PO / Cefazolin 2g IV if penicillin allergic) - Class IIa recommendation",
            "Strict oral and cutaneous hygiene measures in all high-risk cardiac patients (Class I recommendation)"
          ]
        },
        "prognosis": {
          "mortality": "In-hospital mortality: 15–20%; 1-year mortality: 30–40%",
          "prognostic_scores": [
            "PALM score (PVE, Age, LVEF, Microorganism)",
            "EuroSCORE II (for surgical risk)"
          ],
          "factors": "Staphylococcus aureus infection, heart failure / cardiogenic shock, paravalvular abscess, prosthetic valve endocarditis, delayed surgical intervention"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Endocarditis_ultrasound.JPG",
            "caption": "Echocardiographic image of endocarditis vegetation.",
            "type": "Echocardiography"
          }
        ]
      },
      {
        "id": "cied",
        "name": "CIED infection (pacemaker/ICD/CRT)",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Staphylococcus aureus, coagulase-negative staphylococci (e.g. S. epidermidis), Cutibacterium acnes</i>",
          "gram": "Gram-positive",
          "shape": "coccus/rod"
        },
        "epidemiology": {
          "incidence": "~1-10/1000 implantations/year (institution-dependent)",
          "risk_groups": [
            "Implanted pacemaker/ICD/CRT",
            "Previous infection",
            "Diabetes",
            "Immunosuppression",
            "Skin infection, catheter",
            "Poor tissue reaction in the pocket"
          ],
          "seasonality": "None",
          "transmission": "Hematogenous/contiguous spread, contamination at implantation or later"
        },
        "pathomechanism": {
          "steps": [
            "A biofilm forms on the lead structures and the subcutaneous pocket surface.",
            "The bacteria can invade the surrounding tissue and trigger an inflammatory reaction around the leads.",
            "The infection can spread from the pocket to the leads, adjacent tissue, and occasionally to endocarditis.",
            "Because of the biofilm, pathogens become resistant to bactericidal agents and surgical cleaning."
          ],
          "virulence_factors": [
            "Biofilm formation",
            "Adhesion proteins",
            "Toxins, superantigens"
          ]
        },
        "clinical": {
          "incubation": "Days to weeks",
          "onset": "Acute or subacute",
          "symptoms": [
            {
              "name": "Pocket infection",
              "description": "Erythema, swelling, pain, or drainage in the pacemaker/ICD pocket.",
              "severity": "moderate"
            },
            {
              "name": "Systemic symptoms",
              "description": "Fever, chills, fatigue, weight loss, or septic status.",
              "severity": "severe"
            },
            {
              "name": "Lead/endocardial symptoms",
              "description": "Infection involving the leads is often associated with lead failure, a new murmur, or migration of the leads.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Pocket erythema, swelling, purulence",
            "Fever",
            "Septic status",
            "New heart murmur or hemodynamic instability"
          ],
          "complications": [
            "Septic emboli",
            "Endocarditis",
            "Poor healing, lead dysfunction",
            "Sepsis"
          ]
        },
        "diagnostics": {
          "criteria": [
            {
              "name": "Clinical suspicion",
              "items": [
                "Pocket infection, lead or generator infection",
                "Fever, positive culture",
                "Elevated CRP/ESR",
                "Septic status"
              ]
            },
            {
              "name": "Laboratory",
              "items": [
                "Blood cultures (at least 2 sets)",
                "CRP/ESR",
                "CBC"
              ]
            },
            {
              "name": "Imaging",
              "items": [
                "Pocket ultrasound/CT/MRI",
                "TTE/TEE if endocarditis is suspected",
                "PET/CT if the spread is unclear"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "Blood culture",
              "finding": "Positive",
              "interpretation": "Identification of the pathogen is essential"
            },
            {
              "test": "CRP/ESR",
              "finding": "Elevated",
              "interpretation": "Inflammation/infection"
            },
            {
              "test": "CBC",
              "finding": "Leukocytosis",
              "interpretation": "Septic pattern"
            }
          ],
          "imaging": [
            {
              "modality": "Pocket ultrasound / CT",
              "finding": "Abscess, fluid, tissue inflammation",
              "significance": "Confirm local infection"
            },
            {
              "modality": "TTE/TEE",
              "finding": "Vegetation, lead attachment, abscess",
              "significance": "Assess endocardial spread"
            }
          ],
          "microbiology": [
            {
              "test": "Aspiration / culture of removed device",
              "finding": "Pathogen isolated",
              "significance": "Basis for therapy and reimplantation"
            }
          ]
        },
        "differential": [
          {
            "disease": "Skin infection / postoperative inflammation",
            "distinguishing": "No purulence, no pathogen, quicker healing"
          },
          {
            "disease": "Endocarditis",
            "distinguishing": "Cardiac symptoms/vegetation, positive echocardiography"
          }
        ],
        "therapy": {
          "guidelines": [
            "EHRA 2024 CIED infection guidelines",
            "ESC 2023 infective endocarditis guideline"
          ],
          "empirical": {
            "title": "Empiric therapy",
            "drugs": [
              {
                "drug": "Vancomycin + Gentamicin + Rifampicin",
                "dose": "30-60mg/kg + 3mg/kg + 900-1200mg IV/PO",
                "duration": "Induction treatment; definitive therapy after culture",
                "note": "If device infection is suspected, a combination is required because of the biofilm."
              }
            ]
          },
          "targeted": "Depending on the pathogen, therapy can be directed against staphylococci, Gram-negatives, or Cutibacterium. Complete device removal and pocket reconstruction are often necessary.",
          "supportive": [
            "Management of septic status",
            "Planning lead removal/reimplantation",
            "Antibiotic prophylaxis before procedures if necessary"
          ],
          "prevention": [
            "Oral hygiene, treatment of skin infections",
            "Asepsis during implantation procedures",
            "Correction of risk factors"
          ]
        },
        "prognosis": {
          "mortality": "Higher in severe cases, especially with sepsis/endocarditis",
          "prognostic_scores": [
            "None specific"
          ],
          "factors": "S. aureus, late infection, diabetes, immunosuppression, lead failure"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Pacemaker_implantation.jpg",
            "caption": "Pacemaker implantation and leads.",
            "type": "Imaging"
          }
        ]
      },
      {
        "id": "myocarditis",
        "name": "Acute Myocarditis",
        "pathogen": {
          "type": "Virus / Autoimmune / Toxic",
          "name": "<i>Parvovirus B19, HHV-6, Coxsackievirus B, Enteroviruses, Adenovirus, SARS-CoV-2, EBV, CMV, Influenza, Borrelia burgdorferi</i>",
          "gram": "RNA/DNA viruses, Spirochetes, Immune checkpoint inhibitors (ICI)",
          "shape": "variable"
        },
        "epidemiology": {
          "incidence": "10–22 per 100,000 person-years; accounts for 10–20% of sudden cardiac deaths in young adults (<35 years)",
          "risk_groups": [
            "Young adults (18-40 years)",
            "Male predominance (2:1 ratio)",
            "Athletes / individuals engaging in strenuous physical exertion during viral prodrome",
            "Patients receiving Immune Checkpoint Inhibitor (ICI) cancer therapy"
          ],
          "seasonality": "Viral-dependent (Enterovirus in summer/autumn, Influenza in winter)",
          "transmission": "Respiratory droplets, fecal-oral, vector-borne (Borrelia), or non-infectious autoimmune/drug-induced"
        },
        "pathomechanism": {
          "steps": [
            "Phase 1 - Acute Viral Entry & Myocyte Injury (Days 1–7): Pathogens enter cardiomyocytes and endothelial cells via specific receptors (e.g. CAR, integrins), causing direct viral replication, cellular lysis, and activation of innate immunity.",
            "Phase 2 - Autoimmune Response & Molecular Mimicry (Weeks 1–4): Viral antigens expose cryptic cardiac proteins (e.g., cardiac myosin). Autoreactive T-lymphocytes and autoantibodies attack healthy cardiomyocytes, producing diffuse interstitial inflammation, cellular necrosis, and microvascular ischemia.",
            "Phase 3 - Remodeling & Fibrosis (Months): Inflammation resolves or persists chronically. Excessive extracellular matrix deposition leads to myocardial scarring, ventricular enlargement, wall thinning, and progression to Dilated Cardiomyopathy (DCM) in 10-30% of cases."
          ],
          "virulence_factors": [
            "Viral Protease 2A (cleaves dystrophin, undermining myocyte membrane stability)",
            "Coxsackievirus and Adenovirus Receptor (CAR) binding"
          ]
        },
        "clinical": {
          "incubation": "1–3 weeks following a viral prodromal illness",
          "onset": "Variable (from asymptomatic / mild to fulminant cardiogenic shock)",
          "symptoms": [
            {
              "name": "Viral Prodrome",
              "description": "Fever, upper respiratory tract symptoms, myalgias, fatigue, or gastrointestinal infection (diarrhea) occurring 1-3 weeks prior to cardiac presentation.",
              "severity": "mild"
            },
            {
              "name": "Acute Chest Pain (Infarction-like / Pleuritic)",
              "description": "Acute precordial chest pain that may mimic acute coronary syndrome (ACS) or present with pleuritic features indicative of myopericarditis.",
              "severity": "severe"
            },
            {
              "name": "Heart Failure & Dyspnea",
              "description": "Rapidly progressive exertional dyspnea, orthopnea, fatigue, peripheral edema, or acute pulmonary edema due to left ventricular systolic dysfunction.",
              "severity": "severe"
            },
            {
              "name": "Arrhythmias & Palpitations",
              "description": "Palpitations, presyncope, syncope, or sudden cardiac arrest caused by ventricular tachycardia (VT/VF) or high-grade AV blocks.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Tachycardia disproportionate to body temperature",
            "S3 gallop rhythm and soft S1",
            "Signs of overt heart failure: elevated JVP, bilateral basilar lung crackles, peripheral edema",
            "Pericardial friction rub (if concurrent pericarditis / myopericarditis is present)",
            "Hemodynamic instability, hypotension, cool extremities, oliguria (fulminant myocarditis)"
          ],
          "complications": [
            "Dilated Cardiomyopathy (DCM) and chronic heart failure (10–30%)",
            "Fulminant myocarditis & refractory cardiogenic shock",
            "Lethal ventricular arrhythmias (VT/VF) and complete heart block",
            "Intracardiac thrombus formation and systemic thromboembolism",
            "Sudden cardiac death (SCD)"
          ]
        },
        "diagnostics": {
          "criteria": [
            {
              "name": "Clinical Presentation Patterns (ESC Guidelines)",
              "items": [
                "Acute chest pain pattern (pseudoinfarction): Chest pain + ECG changes + elevated troponin + normal coronary angiogram",
                "New-onset heart failure pattern: Dyspnea, fatigue, impaired LVEF, dilated LV",
                "Arrhythmic pattern: Palpitations, syncope, sustained VT, or AV block",
                "Fulminant cardiogenic shock pattern: Rapid hemodynamic collapse requiring inotropic/MCS support"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "High-sensitivity Cardiac Troponin (hs-cTnI / hs-cTnT)",
              "finding": "Elevated (often markedly elevated in acute phase)",
              "interpretation": "High sensitivity marker for cardiomyocyte injury and necrosis."
            },
            {
              "test": "NT-proBNP / BNP",
              "finding": "Elevated",
              "interpretation": "Reflects ventricular wall stress and heart failure severity; strong prognostic marker."
            },
            {
              "test": "Inflammatory markers (CRP, ESR, Leukocytes)",
              "finding": "Elevated CRP and ESR",
              "interpretation": "Confirms systemic inflammatory activity."
            }
          ],
          "imaging": [
            {
              "modality": "Cardiac Magnetic Resonance (CMR - Gold Standard Non-invasive Imaging)",
              "finding": "Updated Lake Louise Criteria: 1) T2-weighted marker (myocardial edema on T2 mapping or T2WI); AND 2) T1-weighted marker (myocardial injury on Late Gadolinium Enhancement [LGE] with midwall/subepicardial non-ischemic distribution, or elevated native T1 / ECV)",
              "significance": "Class I recommendation (ESC 2023) for non-invasive confirmation, risk stratification, and tissue characterization."
            },
            {
              "modality": "Echocardiography",
              "finding": "Global or regional wall motion abnormalities, reduced LVEF, increased wall thickness (edema), pericardial effusion",
              "significance": "Mandatory initial imaging to evaluate LV function, rule out valvular/mechanical causes, and track recovery."
            },
            {
              "modality": "Coronary Angiography (Invasive or CT)",
              "finding": "Normal / non-obstructive coronary arteries",
              "significance": "Essential to rule out Acute Coronary Syndrome (ACS) in patients presenting with chest pain and elevated troponin."
            }
          ],
          "microbiology": [
            {
              "test": "Endomyocardial Biopsy (EMB - Gold Standard Definitive Diagnosis)",
              "finding": "Inflammatory infiltrate (Dallas criteria >14 leukocytes/mm²) + Viral genome PCR on myocardial tissue",
              "significance": "Indicated strictly in fulminant presentation, unexplained acute HF with hemodynamic instability, high-grade AV block, sustained VT, or suspicion of giant cell / eosinophilic / sarcoid myocarditis (ESC Guidelines)."
            },
            {
              "test": "Viral Serology",
              "finding": "Not routinely recommended",
              "significance": "Low diagnostic value due to high background seroprevalence (except HIV, Hepatitis C, Borrelia burgdorferi)."
            }
          ]
        },
        "differential": [
          {
            "disease": "Acute Coronary Syndrome (ACS / STEMI / NSTEMI)",
            "distinguishing": "Coronary angiography demonstrates clear coronary occlusion; CMR shows ischemic subendocardial/transmural LGE rather than subepicardial LGE."
          },
          {
            "disease": "Acute Pericarditis",
            "distinguishing": "Troponin is normal or only minimally elevated, no wall motion abnormalities on echocardiography, no myocardial edema/LGE on CMR."
          },
          {
            "disease": "Stress Cardiomyopathy (Takotsubo)",
            "distinguishing": "Apical or midventricular ballooning pattern, precipitated by severe emotional/physical stress, rapid EF recovery, distinct CMR appearance."
          }
        ],
        "therapy": {
          "guidelines": [
            "ESC Guidelines for the management of acute heart failure and myocarditis"
          ],
          "empirical": {
            "outpatient": [
              {
                "drug": "Physical Activity Restriction",
                "dose": "Abstinence from competitive and strenuous sports",
                "duration": "3 to 6 months",
                "note": "Class I recommendation (ESC 2023). Crucial to prevent lethal ventricular arrhythmias during acute healing."
              },
              {
                "drug": "NSAIDs / Analgesics",
                "dose": "Low-dose symptomatic pain relief",
                "duration": "Short term",
                "note": "Use with caution; avoid high-dose NSAIDs if LVEF is reduced (may worsen HF and mortality)."
              }
            ],
            "inpatient": [
              {
                "drug": "Guideline-Directed Medical Therapy (GDMT) for Heart Failure",
                "dose": "ACEi/ARB/ARNI (Sacubitril/Valsartan) + Beta-blocker (Bisoprolol/Metoprolol succinate) + MRA (Spironolactone/Eplerenone) + SGLT2i (Dapagliflozin/Empagliflozin)",
                "duration": "At least 6 months to long-term",
                "note": "Class I recommendation for LVEF <50% or HF symptoms."
              },
              {
                "drug": "Antiarrhythmic Therapy",
                "dose": "Amiodarone (for sustained VT/VF)",
                "duration": "As needed",
                "note": "Class I. Temporary pacing for high-grade AV block. Avoid digoxin in acute stage due to increased toxicity."
              }
            ],
            "icu": [
              {
                "drug": "Mechanical Circulatory Support (MCS)",
                "dose": "VA-ECMO, Impella, or Left Ventricular Assist Device (LVAD)",
                "duration": "Bridge to recovery or bridge to transplant",
                "note": "Class I recommendation in fulminant myocarditis with cardiogenic shock."
              },
              {
                "drug": "High-Dose Corticosteroids (Immune Checkpoint Inhibitor Myocarditis)",
                "dose": "Methylprednisolone 1000mg/day IV pulse for 3 days, followed by oral taper",
                "duration": "Several weeks",
                "note": "Emergency therapy for ICI-induced myocarditis."
              }
            ]
          },
          "targeted": "Immunosuppressive Therapy (Prednisolone + Azathioprine / Cyclosporine) is recommended strictly in biopsy-proven VIRUS-NEGATIVE (PCR-negative) autoimmune myocarditis, Giant Cell Myocarditis (GCM - emergency!), Eosinophilic myocarditis, or Cardiac Sarcoidosis. Immunosuppression is CONTRAINDICATED in active viral replication (PCR positive)!",
          "supportive": [
            "Strict physical rest (3–6 months) until clinical recovery, normal LVEF, normal troponin, and clearance of edema on CMR",
            "Heart failure GDMT continuation for at least 6 months after EF recovery",
            "Delay ICD implantation for at least 3–6 months, as inflammatory arrhythmias frequently resolve after acute phase"
          ],
          "prevention": [
            "Influenza, COVID-19, and Measles vaccinations",
            "Avoidance of heavy physical exertion during acute febrile viral infections"
          ]
        },
        "prognosis": {
          "mortality": "Variable: ~50% recover spontaneously within weeks; 10-20% progress to chronic DCM; high acute mortality in fulminant/giant-cell forms if unsupported.",
          "prognostic_scores": [
            "Lake Louise Criteria CMR extent",
            "LGE presence and extent on follow-up CMR"
          ],
          "factors": "Baseline LVEF <30%, presence of LGE on CMR, sustained VT or bundle branch block, Giant Cell or Eosinophilic histology, viral persistence on EMB"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Histopathology_of_myocarditis_with_myocyte_necrosis.jpg",
            "caption": "Histopathology of myocarditis with myocyte necrosis.",
            "type": "Histology"
          }
        ]
      },
      {
        "id": "pericarditis",
        "name": "Acute Pericarditis",
        "pathogen": {
          "type": "Virus / Idiopathic / Autoimmune / Bacterial",
          "name": "<i>Coxsackievirus B, Echovirus, Adenovirus, Parvovirus B19, EBV, CMV, Influenza, SARS-CoV-2, Mycobacterium tuberculosis, Staphylococcus aureus</i>",
          "gram": "Variable",
          "shape": "-"
        },
        "epidemiology": {
          "incidence": "Responsible for 0.1-0.2% of emergency department presentations for chest pain",
          "risk_groups": [
            "Men aged 20–50 years",
            "Post-cardiotomy / post-myocardial infarction patients (Dressler syndrome)",
            "Autoimmune disease patients (SLE, Rheumatoid Arthritis)",
            "Uremic / End-Stage Renal Disease patients"
          ],
          "seasonality": "Viral epidemics (spring/autumn)",
          "transmission": "Respiratory droplets (viral) or non-infectious autoimmune/uremic/neoplastic causes"
        },
        "pathomechanism": {
          "steps": [
            "Pericardial Layer Inflammation: Infectious agents or immune complexes cause acute inflammation of the visceral and parietal pericardium.",
            "Fibrinous Exudation & Friction Rub: Inflammatory exudation deposits fibrin onto pericardial surfaces ('bread and butter' pericarditis), generating friction between layers during cardiac movement.",
            "Effusion & Intrapericardial Pressure Rise: Serosanguinous or purulent fluid accumulates in the pericardial cavity. Rapid or massive fluid buildup increases intrapericardial pressure, impeding diastolic ventricular filling and reducing cardiac output (Cardiac Tamponade).",
            "Chronic Remodeling: In recurrent or purulent cases, chronic inflammation can cause pericardial thickening, fibrosis, and calcification, leading to Constrictive Pericarditis."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "Variable (often 1–2 weeks following viral infection)",
          "onset": "Sudden",
          "symptoms": [
            {
              "name": "Classic Pericarditic Chest Pain",
              "description": "Sharp, retrosternal or precordial chest pain radiating to the trapezial ridge (phrenic nerve involvement). Pleuritic (worsened by deep inspiration and coughing) and posture-dependent (worsened by lying flat, relieved by sitting up and leaning forward).",
              "severity": "severe"
            },
            {
              "name": "Systemic Symptoms & Dyspnea",
              "description": "Low-grade fever, malaise, myalgias, and dyspnea (shallow breathing to minimize pleuritic pain, or due to pericardial effusion).",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Pericardial friction rub: pathognomonic superficial, high-pitched, scratchy sound heard best at left lower sternal border with patient leaning forward in expiration (triphasic, biphasic, or monophasic)",
            "Muffled or distant heart sounds (in medium to large pericardial effusion)",
            "Beck's Triad (in Cardiac Tamponade): Hypotension, distant/muffled heart sounds, distended neck veins (JVD)",
            "Pulsus paradoxus (drop in systolic BP >10 mmHg during inspiration in tamponade)"
          ],
          "complications": [
            "Cardiac Tamponade (life-threatening emergency requiring pericardiocentesis)",
            "Recurrent Pericarditis (occurs in 15–30% of patients without colchicine)",
            "Myopericarditis (concurrent myocardial inflammation with elevated troponin)",
            "Constrictive Pericarditis (<1% in idiopathic, up to 20-30% in purulent/tuberculous pericarditis)"
          ]
        },
        "diagnostics": {
          "criteria": [
            {
              "name": "Diagnostic Criteria (ESC Guidelines - 2 of 4 required)",
              "items": [
                "Pericarditic chest pain (sharp, pleuritic, improved leaning forward)",
                "Pericardial friction rub",
                "New widespread ST-segment elevation (concave upward) and/or PR segment depression on ECG",
                "New or worsening pericardial effusion on Echocardiography / CT / MRI"
              ]
            },
            {
              "name": "High-Risk Criteria for Hospitalization (ESC Guidelines)",
              "items": [
                "Major risk factors: High fever (>38°C), subacute onset, large pericardial effusion (>20mm), cardiac tamponade, failure to respond to NSAIDs within 1 week",
                "Minor risk factors: Myopericarditis, immunosuppression, trauma, oral anticoagulant therapy"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "C-Reactive Protein (CRP) / ESR",
              "finding": "Markedly elevated CRP",
              "interpretation": "Essential baseline and serial marker; treatment duration should be guided by CRP normalization!"
            },
            {
              "test": "High-sensitivity Troponin (hs-cTnI / hs-cTnT)",
              "finding": "Normal or mildly elevated (if elevated = myopericarditis)",
              "interpretation": "Excludes significant myocardial involvement."
            },
            {
              "test": "Complete Blood Count (CBC) & Blood Cultures",
              "finding": "Leukocytosis; cultures negative in viral/idiopathic",
              "interpretation": "Assesses infectious etiology."
            }
          ],
          "imaging": [
            {
              "modality": "ECG (12-lead)",
              "finding": "Stage 1: Widespread concave ST elevations + PR depressions (PR elevation in aVR); Stage 2: Normalization; Stage 3: Diffuse T-wave inversions; Stage 4: Normalization",
              "significance": "Diagnostic in ~80% of acute cases."
            },
            {
              "modality": "Echocardiography",
              "finding": "Pericardial effusion, signs of hemodynamic compromise (RV diastolic collapse, IVC plethora)",
              "significance": "Mandatory first-line imaging in all suspected cases."
            },
            {
              "modality": "Cardiac CT / CMR",
              "finding": "Pericardial thickening, pericardial hyperenhancement / edema on late gadolinium enhancement",
              "significance": "Confirms inflammation and evaluates for constrictive pericarditis or myopericarditis."
            }
          ],
          "microbiology": [
            {
              "test": "Pericardial Fluid Analysis & Biopsy",
              "finding": "Exudate, PCR for viruses/TB, Gram stain/culture, cytology",
              "significance": "Indicated ONLY in cardiac tamponade, purulent suspicion, or suspected neoplastic disease."
            }
          ]
        },
        "differential": [
          {
            "disease": "Acute Myocardial Infarction (STEMI)",
            "distinguishing": "Convex-upward regional ST elevation with reciprocal ST depressions; persistent localized Q-waves; ischemic chest pain not improved by leaning forward."
          },
          {
            "disease": "Acute Myocarditis",
            "distinguishing": "Dominant troponin elevation, wall motion abnormalities on echocardiography, myocardial edema/LGE on CMR."
          },
          {
            "disease": "Pulmonary Embolism",
            "distinguishing": "Dyspnea dominates over pain, S1Q3T3 pattern or sinus tachycardia, elevated D-dimer, CTA confirms pulmonary artery occlusion."
          },
          {
            "disease": "Aortic Dissection",
            "distinguishing": "Sudden tearing chest/back pain, pulse deficit, asymmetric blood pressure, widened mediastinum on CT."
          }
        ],
        "therapy": {
          "guidelines": [
            "ESC Guidelines for the diagnosis and management of pericardial diseases"
          ],
          "empirical": {
            "outpatient": [
              {
                "drug": "Aspirin or Ibuprofen (First-Line NSAID)",
                "dose": "Aspirin 750–1000mg PO every 8 hours OR Ibuprofen 600mg PO every 8 hours",
                "duration": "1–2 weeks, then taper every 1–2 weeks after CRP normalizes",
                "note": "Class I recommendation. Tapering prevents early relapse."
              },
              {
                "drug": "+ Colchicine (Essential Adjunct)",
                "dose": "0.5mg once daily (<70 kg) OR 0.5mg twice daily (≥70 kg)",
                "duration": "3 months",
                "note": "Class I recommendation (ESC). Halves recurrence rate! No loading dose required."
              },
              {
                "drug": "Proton Pump Inhibitor (PPI)",
                "dose": "Omeprazole 20mg PO once daily",
                "duration": "Duration of NSAID therapy",
                "note": "Mandatory gastroprotection."
              }
            ],
            "inpatient": [
              {
                "drug": "Inpatient Admission Criteria",
                "dose": "Hospitalization for high-risk features",
                "duration": "Until risk resolves",
                "note": "Indicated if fever >38°C, subacute onset, large effusion, tamponade, NSAID failure, or anticoagulation."
              }
            ],
            "icu": [
              {
                "drug": "Emergency Pericardiocentesis",
                "dose": "Echo-guided or fluoroscopic needle drainage",
                "duration": "Immediate",
                "note": "Life-saving procedure for cardiac tamponade."
              }
            ]
          },
          "targeted": "Second-line / Corticosteroid Therapy: Low-dose Prednisolone (0.2–0.5 mg/kg/day) is recommended ONLY when NSAIDs/Colchicine are contraindicated, failed, or for specific indications (autoimmune disease, pregnancy). Taper extremely slowly! Avoid high-dose steroids as they significantly increase recurrence rates. Interleukin-1 receptor antagonists (Anakinra or Rilonacept) are recommended for corticosteroid-dependent or colchicine-resistant recurrent pericarditis.",
          "supportive": [
            "Strict physical activity restriction (no competitive sports or strenuous exercise) until symptom resolution and normalization of CRP (at least 3 months for competitive athletes) - Class I recommendation",
            "Avoid routine anticoagulation in acute pericarditis due to risk of converting effusion into hemopericardium and tamponade"
          ],
          "prevention": [
            "Colchicine administration for 3 months during the first episode reduces recurrence rate from ~30% to <10%"
          ]
        },
        "prognosis": {
          "mortality": "Low (<1% in idiopathic/viral); high in purulent, neoplastic, or untreated tamponade cases.",
          "prognostic_scores": [
            "ESC High-Risk Mortality Predictors"
          ],
          "factors": "Elevated CRP persistence, lack of colchicine usage, steroid usage in first episode, tuberculous or purulent etiology"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Acute_Pericarditis_ECG.jpg",
            "caption": "Typical ECG pattern in acute pericarditis.",
            "type": "ECG"
          }
        ]
      },
      {
        "id": "vascular_graft_infection",
        "name": "Vascular Graft Infection (VGI / EVGI)",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Staphylococcus aureus</i>, Coagulase-negative Staphylococci (CoNS), <i>Pseudomonas aeruginosa</i>, Enterobacteriaceae, Cutibacterium, Candida",
          "gram": "Gram-positive and Gram-negative",
          "shape": "Variable"
        },
        "epidemiology": {
          "incidence": "1-6% in open aortic/peripheral bypass surgeries, 0.5-1.5% in endovascular stent grafts (EVAR / TEVAR)",
          "risk_groups": [
            "Patients after open aortic or peripheral vascular reconstructions",
            "EVAR / TEVAR stent graft carriers",
            "Inguinal wound complications (groin access)",
            "Diabetes mellitus, obesity, re-operations"
          ],
          "seasonality": "None",
          "transmission": "Perioperative inoculation (intraoperative contamination), spread from groin wound infection, or hematogenous seeding"
        },
        "pathomechanism": {
          "steps": [
            "Inoculation & Biofilm: Bacteria attach to the synthetic prosthesis (PTFE, Dacron) and form a dense biofilm.",
            "Perigraft Inflammation & Abscess: Formation of periprosthetic exudate, abscesses, gas entrapment, and lack of tissue incorporation (non-incorporation).",
            "Anastomotic Insufficiency & Pseudoaneurysm: Destruction of suture line and native vessel wall leading to pseudoaneurysms or aorto-enteric / aorto-bronchial fistulas.",
            "Septic Embolization: Dislodgement of infected thrombi from the graft lumen to the periphery."
          ],
          "virulence_factors": [
            "Dacron/PTFE adhesins",
            "Biofilm formation",
            "Bacterial proteases"
          ]
        },
        "clinical": {
          "incubation": "Early (<2 months postop - S. aureus, Gram-negatives) or Late (>2 months postop - S. epidermidis, Cutibacterium)",
          "onset": "Insidious fever to acute massive life-threatening hemorrhage",
          "symptoms": [
            {
              "name": "Local Wound Symptoms",
              "description": "Non-healing wound in the groin, sinus tract, purulent discharge, pulsatile mass (pseudoaneurysm).",
              "severity": "moderate"
            },
            {
              "name": "Systemic Infection Signs",
              "description": "Fever of unknown origin (FUO), chills, weight loss, sepsis, elevated CRP.",
              "severity": "severe"
            },
            {
              "name": "Life-Threatening Bleeding / Fistula",
              "description": "Aorto-enteric fistula: A dramatic warning sign is a small, spontaneously self-limiting gastrointestinal bleed (\"herald bleeding\"), followed by massive hematemesis/melena!",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Groin wound infection, sinus tract, erythema over graft course, pulsatile mass, blue toe syndrome (septic emboli)"
          ],
          "complications": [
            "Massive catastrophic hemorrhage (aorto-enteric fistula rupture)",
            "Septic shock",
            "Prosthetic graft thrombosis and acute ischemia",
            "Limb amputation"
          ]
        },
        "diagnostics": {
          "criteria": [
            {
              "name": "MAGIC (Management of Aortic Graft Infection Collaboration) Criteria",
              "items": [
                "Definitive VGI: Major Surgical/Histological/Microbiological criterion OR 1 Major Imaging criterion + 1 Minor criterion",
                "Major Imaging Criteria: Periprosthetic gas >7 days postop, periprosthetic abscess on CT, aorto-enteric fistula, focal intense FDG uptake on 18F-FDG PET/CT",
                "Minor Criteria: Fever, elevated CRP, sinus tract, periprosthetic soft tissue thickening"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "Blood cultures (BC)",
              "finding": "At least 2-3 blood culture sets before antibiotics",
              "interpretation": "Pathogen identification"
            },
            {
              "test": "CRP / PCT / ESR",
              "finding": "Markedly elevated",
              "interpretation": "Disease monitoring"
            }
          ],
          "imaging": [
            {
              "modality": "CT Angiography (CTA)",
              "finding": "Periprosthetic gas bubbles (>7-14 days postop), fluid collection/abscess, pseudoaneurysm, loss of bowel wall continuity",
              "significance": "ESC / ESVS Class I: First-line imaging!"
            },
            {
              "modality": "18F-FDG PET/CT",
              "finding": "Intense focal or diffuse pathological FDG uptake along the vascular graft (\"sandwich sign\")",
              "significance": "ESC / ESVS Class I GOLD STANDARD: Highest sensitivity and specificity!"
            }
          ],
          "microbiology": [
            {
              "test": "Sonication of explanted graft",
              "finding": "Pathogen and resistance identification",
              "significance": "Increases yield for biofilm organisms"
            }
          ]
        },
        "differential": [
          {
            "disease": "Aseptic Seroma / Fluid Collection",
            "distinguishing": "PET-CT negative, sterile fluid aspiration"
          },
          {
            "disease": "Post-Implantation Syndrome (after EVAR)",
            "distinguishing": "Fever and leukocytosis directly after EVAR without infection, spontaneously resolves in 3-5 days"
          }
        ],
        "therapy": {
          "guidelines": [
            "ESVS 2020 Clinical Practice Guidelines on Vascular Graft Infections",
            "ESC 2023 Endocarditis guidelines"
          ],
          "empirical": {
            "title": "Empiric Antibiotic Therapy in Vascular Graft Infection",
            "drugs": [
              {
                "drug": "Vancomycin + Piperacillin/Tazobactam OR Cefepime / Meropenem",
                "dose": "Vancomycin 30-60 mg/kg/day IV + Pip-Tazo 4x4.5g/day IV",
                "duration": "Until surgical intervention",
                "note": "Broad-spectrum coverage for MRSA, Pseudomonas, and anaerobes."
              }
            ]
          },
          "targeted": "Combined Surgical AND Antimicrobial Therapy (ESVS Class I): Complete removal of the infected graft, radical debridement, and revascularization with autologous vein (great saphenous vein), homograft, or rifampicin/silver-coated graft! After graft removal, 6-12 weeks of targeted IV/oral antibiotics; if graft removal is not feasible, LIFELONG suppressive antibiotic therapy is required.",
          "supportive": [
            "Emergency vascular surgery consultation on suspicion of aorto-enteric fistula (herald bleeding!)",
            "Supportive wound management (NPWT)"
          ],
          "prevention": [
            "Strict surgical asepsis during vascular reconstructions",
            "Perioperative antibiotic prophylaxis (Cefazolin 2g IV) for all vascular surgeries"
          ]
        },
        "prognosis": {
          "mortality": "Aortic graft infection mortality is 25-50%; untreated aorto-enteric fistula mortality is 100%! Risk of limb amputation is 10-25%.",
          "prognostic_scores": [
            "MAGIC Prognosis Score"
          ],
          "factors": "Aortic location, emergency surgery, P. aeruginosa / S. aureus pathogen, aorto-enteric fistula"
        },
        "references": [
          {
            "text": "Editor's Choice - European Society for Vascular Surgery (ESVS) 2020 Clinical Practice Guidelines on the Management of Vascular Graft and Endovascular Prosthetic Infections. Eur J Vasc Endovasc Surg. 2020;59(3):339-399.",
            "url": "https://www.ejves.com"
          },
          {
            "text": "Management of Aortic Graft Infection Collaboration (MAGIC) criteria. J Vasc Surg. 2016;64(1):247-254.",
            "url": "https://www.jvascsurg.org"
          }
        ],
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/CT_scan_of_aortic_graft_infection.jpg",
            "caption": "CT image of aortic graft infection showing perigraft gas bubbles and fluid collection.",
            "type": "CT Imaging"
          }
        ]
      }
    ]
  },
  "upper_respiratory": {
    "name": "Upper Respiratory Infections",
    "icon": window.diseaseMetadata.upper_respiratory.icon,
    "color": window.diseaseMetadata.upper_respiratory.color,
    "diseases": [
      {
        "id": "upper_respiratory_infections",
        "name": "Upper Respiratory Infections (Common Cold)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Rhinovirus</i> (most common), <i>Coronavirus, Adenovirus, Influenza</i>",
          "gram": "RNA viruses",
          "shape": "variable"
        },
        "epidemiology": {
          "incidence": "Most common infection, adults 2-3x/year, children 6-8x/year",
          "risk_groups": [
            "Children",
            "Elderly",
            "Immunocompromised"
          ],
          "seasonality": "Year-round, peak in autumn-winter",
          "transmission": "Droplet, contact, fomites"
        },
        "pathomechanism": {
          "steps": [
            "Viruses enter through the mucous membranes of the upper respiratory tract, where they replicate in epithelial cells.",
            "The infection triggers local inflammation, edema, and increased mucus production.",
            "This causes the characteristic symptoms: rhinorrhea, nasal congestion, and sore throat."
          ],
          "virulence_factors": [
            "Receptor binding (ICAM-1 for rhinovirus)",
            "Immunomodulation"
          ]
        },
        "clinical": {
          "incubation": "1-3 days",
          "onset": "Sudden",
          "symptoms": [
            {
              "name": "Typical Symptoms",
              "description": "Typically presents with rhinorrhea, nasal congestion, sneezing, sore throat, and a dry cough. Fever is usually mild or absent. Symptoms generally resolve on their own within 7-10 days.",
              "severity": "mild"
            }
          ],
          "physical_exam": [
            "Nasal mucosa hyperemia, edema",
            "Mild pharyngeal redness",
            "Cervical lymphadenopathy",
            "Normal lung auscultation"
          ],
          "complications": [
            "Sinusitis",
            "Otitis media",
            "Bronchitis",
            "Pneumonia (rare)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Not needed",
              "finding": "-",
              "interpretation": "Clinical diagnosis"
            }
          ],
          "imaging": [
            {
              "test": "Not needed",
              "finding": "-",
              "interpretation": "Clinical diagnosis"
            }
          ],
          "microbiology": [
            {
              "test": "Virus PCR",
              "finding": "Etiology",
              "significance": "If needed (e.g., epidemic)"
            }
          ]
        },
        "differential": [
          {
            "disease": "Allergic rhinitis",
            "distinguishing": "Pruritus, seasonality, eosinophilia"
          },
          {
            "disease": "Bacterial sinusitis",
            "distinguishing": "Persistent symptoms, fever, pain"
          },
          {
            "disease": "Influenza",
            "distinguishing": "High fever, myalgia, prostration"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportive",
                "dose": "-",
                "duration": "7-10 days",
                "note": "Rest, fluids, symptomatic treatment"
              },
              {
                "drug": "Decongestant",
                "dose": "Oxymetazoline nasal",
                "duration": "3-5 days",
                "note": "Not for longer!"
              },
              {
                "drug": "Antihistamine",
                "dose": "Loratadine",
                "duration": "",
                "note": "If allergy is suspected"
              }
            ],
            "inpatient": [
              {
                "drug": "Not needed",
                "dose": "-",
                "duration": "-",
                "note": "Rare"
              }
            ],
            "icu": [
              {
                "drug": "Not needed",
                "dose": "-",
                "duration": "-",
                "note": "Rare"
              }
            ]
          },
          "targeted": "No specific antiviral",
          "supportive": [
            "Rest",
            "Fluid intake",
            "Antipyretics"
          ],
          "prevention": [
            "Hand hygiene",
            "Mask wearing during epidemics"
          ]
        },
        "prognosis": {
          "mortality": "Very low",
          "prognostic_scores": [
            "None"
          ],
          "factors": "Immune status"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Human_rhinovirus_14.jpg",
            "caption": "Human rhinovirus on electron microscopy.",
            "type": "Virology"
          }
        ]
      },
      {
        "id": "laryngitis",
        "name": "Laryngitis",
        "pathogen": {
          "type": "Virus/bacteria",
          "name": "<i>Rhinovirus, Parainfluenza, Adenovirus</i>; in bacterial cases <i>Streptococcus pyogenes, Streptococcus pneumoniae, Haemophilus influenzae</i>",
          "gram": "Virus/bacteria",
          "shape": "variable"
        },
        "epidemiology": {
          "incidence": "Common, especially in cold seasons",
          "risk_groups": [
            "Children",
            "Singers",
            "Smokers",
            "Immunocompromised"
          ],
          "seasonality": "Autumn-winter",
          "transmission": "Droplet, contact"
        },
        "pathomechanism": {
          "steps": [
            "Viruses or bacteria trigger inflammation of the laryngeal mucosa.",
            "The inflammation causes edema, which leads to voice changes.",
            "In severe cases, edema of the subglottic region can cause airway narrowing and stridor."
          ],
          "virulence_factors": [
            "Local inflammation",
            "Mucosal barrier injury",
            "Toxins in bacterial cases"
          ]
        },
        "clinical": {
          "incubation": "1-3 days",
          "onset": "Gradual",
          "symptoms": [
            {
              "name": "Voice disturbance",
              "description": "Hoarseness, altered voice, or complete loss of voice.",
              "severity": "moderate"
            },
            {
              "name": "Throat and cough symptoms",
              "description": "Sore throat, dry cough, and upper airway symptoms.",
              "severity": "moderate"
            },
            {
              "name": "Airway symptoms",
              "description": "In severe cases, stridor and dyspnea.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Hoarseness",
            "Hyperemia of the laryngeal mucosa",
            "Stridor in severe disease",
            "Fever may be present"
          ],
          "complications": [
            "Chronic laryngitis",
            "Airway narrowing",
            "Secondary bacterial infection"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Throat culture",
              "finding": "If bacteria are present",
              "interpretation": "For bacterial etiology"
            }
          ],
          "imaging": [
            {
              "modality": "Not needed",
              "finding": "-",
              "interpretation": "Clinical diagnosis"
            }
          ],
          "microbiology": [
            {
              "test": "PCR / culture",
              "finding": "Etiology",
              "significance": "If therapy adjustment is needed"
            }
          ]
        },
        "differential": [
          {
            "disease": "Epiglottitis",
            "distinguishing": "Acute respiratory distress, significant swallowing difficulty"
          },
          {
            "disease": "Airway allergy",
            "distinguishing": "Pruritus, urticaria, allergic history"
          },
          {
            "disease": "Vocal overuse",
            "distinguishing": "No infection, normal temperature"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportive treatment",
                "dose": "-",
                "duration": "3-7 days",
                "note": "Rest, voice rest, humidified air"
              },
              {
                "drug": "Antibiotic",
                "dose": "Amoxicillin/clavulanate",
                "duration": "5-7 days",
                "note": "If bacterial infection is suspected"
              }
            ],
            "inpatient": [
              {
                "drug": "IV antibiotic",
                "dose": "Ampicillin/sulbactam or ceftriaxone",
                "duration": "3-5 days",
                "note": "Severe disease or airway symptoms"
              }
            ],
            "icu": [
              {
                "drug": "Airway protection",
                "dose": "-",
                "duration": "-",
                "note": "If stridor/obstruction is present"
              }
            ]
          },
          "targeted": "Targeted antibiotic therapy based on culture if bacterial",
          "supportive": [
            "Rest",
            "Voice rest",
            "Fluid intake",
            "Oxygen if needed"
          ],
          "prevention": [
            "Hand hygiene",
            "Smoking cessation",
            "Treatment of infections"
          ]
        },
        "prognosis": {
          "mortality": "Very low",
          "prognostic_scores": [
            "None"
          ],
          "factors": "Age, smoking, recurrent infections"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Larynx.jpg",
            "caption": "Inflammation of the laryngeal mucosa.",
            "type": "Anatomy"
          }
        ]
      },
      {
        "id": "epiglottitis",
        "name": "Epiglottitis",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Haemophilus influenzae</i> type b (most common), <i>Streptococcus pyogenes, Streptococcus pneumoniae</i>",
          "gram": "Gram-negative/positive",
          "shape": "rod/coccus"
        },
        "epidemiology": {
          "incidence": "Rare but life-threatening",
          "risk_groups": [
            "Children",
            "Unvaccinated",
            "Immunocompromised"
          ],
          "seasonality": "Year-round",
          "transmission": "Droplet infection"
        },
        "pathomechanism": {
          "steps": [
            "The pathogen infects the pharyngeal mucosa and rapidly causes severe inflammation of the epiglottis.",
            "The edema can lead to rapid closure of the upper airway.",
            "The patient requires urgent care because of dyspnea, stridor, and swallowing difficulty."
          ],
          "virulence_factors": [
            "Capsule",
            "Adhesins",
            "Toxins"
          ]
        },
        "clinical": {
          "incubation": "Several hours to 1 day",
          "onset": "Sudden",
          "symptoms": [
            {
              "name": "Acute respiratory distress",
              "description": "Sudden shortness of breath, stridor, dysphagia, and drooling.",
              "severity": "severe"
            },
            {
              "name": "Fever and constitutional symptoms",
              "description": "Fever, chills, and general malaise.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Tripod position",
            "Stridor",
            "Dysphagia",
            "Tachypnea"
          ],
          "complications": [
            "Airway obstruction",
            "Sepsis",
            "Respiratory failure"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blood culture",
              "finding": "May be positive",
              "interpretation": "Severe bacterial infection"
            }
          ],
          "imaging": [
            {
              "modality": "Laryngoscopy / lateral neck X-ray",
              "finding": "Swelling of the epiglottis",
              "significance": "Diagnosis"
            }
          ],
          "microbiology": [
            {
              "test": "Throat / blood culture",
              "finding": "Pathogen",
              "significance": "Guide therapy"
            }
          ]
        },
        "differential": [
          {
            "disease": "Laryngitis",
            "distinguishing": "Less severe, no significant airway narrowing"
          },
          {
            "disease": "Peritonsillar abscess",
            "distinguishing": "Painful throat, displaced uvula, pharyngeal ulcer"
          },
          {
            "disease": "Anaphylaxis",
            "distinguishing": "Urticaria, angioedema, bronchial obstruction"
          }
        ],
        "therapy": {
          "empirical": {
            "inpatient": [
              {
                "drug": "Third-generation cephalosporin + vancomycin",
                "dose": "IV",
                "duration": "7-10 days",
                "note": "Emergency hospital treatment"
              }
            ],
            "icu": [
              {
                "drug": "Airway protection",
                "dose": "-",
                "duration": "-",
                "note": "In severe obstruction"
              }
            ]
          },
          "targeted": "Targeted antibiotic therapy based on culture",
          "supportive": [
            "Urgent airway management",
            "IV antibiotics",
            "Oxygen"
          ],
          "prevention": [
            "Hib vaccination",
            "Hand hygiene"
          ]
        },
        "prognosis": {
          "mortality": "Low with appropriate treatment",
          "prognostic_scores": [
            "None"
          ],
          "factors": "Delayed treatment, childhood, immunodeficiency"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Epiglottis.jpg",
            "caption": "Acute inflammation of the epiglottis.",
            "type": "Anatomy"
          }
        ]
      },
      {
        "id": "rsv_infection",
        "name": "RSV Infection (Respiratory Syncytial Virus)",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Human Respiratory Syncytial Virus</i> (HRSV)",
          "gram": "RNA virus, Pneumoviridae",
          "shape": "helical"
        },
        "epidemiology": {
          "incidence": "All children infected by age 2, adults reinfection",
          "risk_groups": [
            "Infants (<6 months)",
            "Elderly (>65)",
            "Patients with chronic lung disease",
            "Immunocompromised"
          ],
          "seasonality": "Winter-spring",
          "transmission": "Droplet, contact (very contagious!)"
        },
        "pathomechanism": {
          "steps": [
            "The virus infects respiratory epithelial cells and, using its fusion (F) protein, causes the cells to merge, forming so-called syncytia.",
            "This process leads to epithelial cell destruction, ciliary damage, and increased mucus production.",
            "In infants, the small airways (bronchioles) become narrowed due to mucus and edema, creating the characteristic picture of bronchiolitis (wheezing, shortness of breath)."
          ],
          "virulence_factors": [
            "Fusion protein (F)",
            "G glycoprotein (adherence)"
          ]
        },
        "clinical": {
          "incubation": "4-6 days",
          "onset": "Gradual",
          "symptoms": [
            {
              "name": "Initial Symptoms",
              "description": "Begins with mild, upper respiratory symptoms (rhinorrhea, low-grade fever).",
              "severity": "mild"
            },
            {
              "name": "Bronchiolitis (Infants)",
              "description": "The most severe form in infants. Characterized by shortness of breath, wheezing, tachypnea, and intercostal retractions. In severe cases, apnea and respiratory failure can occur.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Tachypnea, retractions",
            "Wheezing, crepitation",
            "Apnea in infants",
            "Hypoxia"
          ],
          "complications": [
            "Bronchiolitis obliterans",
            "Pneumonia",
            "Apnea",
            "Death (rare in infants, but possible)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC",
              "finding": "Normal or mild leukocytosis",
              "interpretation": "Non-specific"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray",
              "finding": "Hyperinflation, atelectasis",
              "significance": "Bronchiolitis"
            }
          ],
          "microbiology": [
            {
              "test": "Nasopharyngeal aspirate PCR",
              "finding": "RSV RNA",
              "significance": "Gold standard"
            },
            {
              "test": "Immunofluorescence",
              "finding": "Antigen detection",
              "significance": "Fast"
            }
          ]
        },
        "differential": [
          {
            "disease": "Bronchiolitis other causes",
            "distinguishing": "Virus PCR"
          },
          {
            "disease": "Asthma",
            "distinguishing": "History, atopy"
          },
          {
            "disease": "Pertussis",
            "distinguishing": "Whoop, lymphocytosis"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Supportive",
                "dose": "-",
                "duration": "-",
                "note": "Oxygen, hydration"
              },
              {
                "drug": "Bronchodilator",
                "dose": "Salbutamol",
                "duration": "",
                "note": "If wheezing"
              }
            ],
            "inpatient": [
              {
                "drug": "Ribavirin",
                "dose": "Aerosol",
                "duration": "3-5 days",
                "note": "In severe cases, immunocompromised"
              }
            ],
            "icu": [
              {
                "drug": "Ventilation",
                "dose": "NIV or intubation",
                "duration": "",
                "note": "In case of apnea"
              }
            ]
          },
          "targeted": "Palivizumab prophylaxis for high-risk infants",
          "supportive": [
            "Oxygen",
            "Hydration",
            "Physiotherapy"
          ],
          "prevention": [
            "Hand hygiene",
            "Isolation",
            "Passive immunization: Nirsevimab, Clesrovimab (long-acting), Palivizumab",
            "Vaccination: Elderly (>60 years) and pregnant women (maternal)"
          ]
        },
        "prognosis": {
          "mortality": "Low, but higher risk in infants",
          "prognostic_scores": [
            "None"
          ],
          "factors": "Age, comorbidity"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Respiratory_syncytial_virus_01.jpg",
            "caption": "Respiratory syncytial virus (RSV) micrograph.",
            "type": "Virology"
          }
        ]
      },
      {
        "id": "influenza",
        "name": "Influenza",
        "pathogen": {
          "type": "Virus",
          "name": "<i>Influenza A/B/C virus</i>",
          "gram": "RNA virus, Orthomyxoviridae",
          "shape": "helical"
        },
        "epidemiology": {
          "incidence": "Seasonal epidemic: 5-20% of population/year, pandemics: up to 50%",
          "risk_groups": [
            "Elderly (>65)",
            "Children (<5)",
            "Pregnant women",
            "Patients with chronic diseases",
            "Healthcare workers",
            "Immunocompromised"
          ],
          "seasonality": "November-March (northern hemisphere)",
          "transmission": "Droplet, contact (1-2 meters), fomites"
        },
        "pathomechanism": {
          "steps": [
            "The virus uses its hemagglutinin (HA) to bind to respiratory epithelial cells and enter them.",
            "It replicates within the cell and then uses neuraminidase (NA) to be released and infect new cells.",
            "The viral infection leads to the destruction of respiratory epithelial cells and damage to the cilia, impairing airway clearance.",
            "The body's strong immune response (cytokine storm) causes systemic symptoms like fever and muscle pain."
          ],
          "virulence_factors": [
            "Hemagglutinin (H1-18)",
            "Neuraminidase (N1-11)",
            "NS1 protein (IFN antagonist)",
            "PB1-F2 (pro-apoptotic)"
          ]
        },
        "clinical": {
          "incubation": "1-4 days (average 2 days)",
          "onset": "Sudden",
          "symptoms": [
            {
              "name": "Sudden Onset",
              "description": "Begins with a high fever (>38°C), chills, severe headache, and muscle pain (myalgia).",
              "severity": "severe"
            },
            {
              "name": "Respiratory Symptoms",
              "description": "A dry, hacking cough and sore throat are characteristic.",
              "severity": "moderate"
            },
            {
              "name": "Constitutional Symptoms",
              "description": "Marked weakness, malaise (prostration), and loss of appetite.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Febrile, ill-appearing",
            "Conjunctivitis",
            "Pharyngeal hyperemia",
            "Clear lung auscultation (uncomplicated)",
            "Tachycardia"
          ],
          "complications": [
            "Primary influenza pneumonia",
            "Secondary bacterial pneumonia",
            "Myocarditis",
            "Encephalitis",
            "Reye's syndrome (aspirin!)",
            "Myositis"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC",
              "finding": "Leukopenia or normal, lymphopenia",
              "interpretation": "Typical for viral infection"
            },
            {
              "test": "CRP",
              "finding": "Moderately elevated",
              "interpretation": "Lower than in bacterial"
            },
            {
              "test": "PCT",
              "finding": "Normal (<0.25)",
              "interpretation": "Exclusion of bacterial superinfection"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray",
              "finding": "Normal or interstitial pattern",
              "significance": "Exclusion of pneumonia"
            },
            {
              "modality": "CT",
              "finding": "Ground-glass opacities",
              "significance": "Viral pneumonia"
            }
          ],
          "microbiology": [
            {
              "test": "Rapid antigen test (RAT)",
              "finding": "Influenza A/B",
              "significance": "Fast (15 min), low sensitivity (50-70%)"
            },
            {
              "test": "RT-PCR",
              "finding": "Viral RNA detection",
              "significance": "Gold standard, subtyping"
            },
            {
              "test": "Virus culture",
              "finding": "Isolation",
              "significance": "Epidemiological/surveillance"
            }
          ]
        },
        "differential": [
          {
            "disease": "COVID-19",
            "distinguishing": "Loss of smell/taste, PCR"
          },
          {
            "disease": "RSV infection",
            "distinguishing": "Children, elderly, bronchiolitis"
          },
          {
            "disease": "Adenovirus infection",
            "distinguishing": "Conjunctivitis, pharyngitis, longer febrile period"
          },
          {
            "disease": "Bacterial pneumonia",
            "distinguishing": "Productive sputum, localized findings, high PCT"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Oseltamivir",
                "dose": "2x75mg PO",
                "duration": "5 days",
                "note": "Within 48 hours of symptom onset!"
              },
              {
                "drug": "Baloxavir",
                "dose": "1x40-80mg PO",
                "duration": "Single dose",
                "note": ">80kg: 80mg"
              }
            ],
            "inpatient": [
              {
                "drug": "Oseltamivir",
                "dose": "2x75mg PO/NG",
                "duration": "5-10 days",
                "note": "Longer in severe cases"
              },
              {
                "drug": "Peramivir",
                "dose": "1x600mg IV",
                "duration": "Single or repeated",
                "note": "If PO not tolerated"
              }
            ],
            "icu": [
              {
                "drug": "Oseltamivir",
                "dose": "2x150mg PO/NG",
                "duration": "10 days",
                "note": "Higher dose may be considered"
              },
              {
                "drug": "+ Empiric AB",
                "dose": "CAP coverage",
                "duration": "",
                "note": "Bacterial superinfection"
              }
            ]
          },
          "targeted": "Neuraminidase inhibitors (oseltamivir, zanamivir, peramivir) or cap-dependent endonuclease inhibitor (baloxavir)",
          "supportive": [
            "Antipyretics (paracetamol!)",
            "Fluid resuscitation",
            "Oxygen",
            "Ventilation for ARDS"
          ],
          "prevention": [
            "Annual influenza vaccine",
            "Hand hygiene",
            "Patient isolation",
            "Chemoprophylaxis (oseltamivir 1x75mg)"
          ]
        },
        "prognosis": {
          "mortality": "Overall 0.1%, >65 years 1-2%, pandemic strain higher",
          "prognostic_scores": [
            "None specific"
          ],
          "factors": "Age, comorbidity, virus subtype, vaccination status"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Influenza_A_virus_particle.jpg",
            "caption": "Influenza A virus particle (electron microscopy).",
            "type": "Microscopy"
          }
        ]
      },
      {
        "id": "covid19",
        "name": "COVID-19",
        "pathogen": {
          "type": "Virus",
          "name": "<i>SARS-CoV-2</i>",
          "gram": "RNA virus, Coronaviridae",
          "shape": "spherical, with spike proteins"
        },
        "epidemiology": {
          "incidence": "Pandemic from 2020, becoming endemic",
          "risk_groups": [
            "Elderly (>65)",
            "Patients with obesity (BMI>30)",
            "Diabetes",
            "Cardiovascular disease",
            "Immunocompromised",
            "Chronic lung disease"
          ],
          "seasonality": "Winter peak, but year-round",
          "transmission": "Respiratory (aerosol + droplet), contact, fecal-oral rare"
        },
        "pathomechanism": {
          "steps": [
            "The virus uses its Spike (S) protein to bind to the ACE2 receptor on the surface of cells, which is found in many organs (lungs, heart, vessels, gut).",
            "After entry, the virus replicates within the cell (viral phase).",
            "In severe cases, an excessive immune response, the so-called cytokine storm, can develop in the second week of the disease.",
            "This hyperinflammation leads to systemic endothelial damage, microthrombosis, and, in the lungs, acute respiratory distress syndrome (ARDS), which is the basis of the severe course."
          ],
          "virulence_factors": [
            "Spike protein",
            "NSP1 (host shutdown)",
            "ORF8 (immunomodulation)",
            "Nucleocapsid"
          ]
        },
        "clinical": {
          "incubation": "2-14 days (median 5 days, Omicron 3 days)",
          "onset": "Variable",
          "symptoms": [
            {
              "name": "Common Symptoms",
              "description": "Fever, dry cough, fatigue, and muscle pain (myalgia).",
              "severity": "moderate"
            },
            {
              "name": "Characteristic Symptoms",
              "description": "Loss of smell and taste (anosmia, dysgeusia) can be an early, specific sign.",
              "severity": "mild"
            },
            {
              "name": "Severe Symptoms",
              "description": "Shortness of breath (dyspnea), chest pain, and hypoxemia (low blood oxygen), which can lead to ARDS.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Fever, tachypnea",
            "Decreased SpO2 (silent hypoxia!)",
            "Bilateral crepitation",
            "Tachycardia",
            "No specific physical sign"
          ],
          "complications": [
            "ARDS",
            "Pulmonary embolism",
            "Myocarditis",
            "Acute kidney injury",
            "Stroke",
            "MIS-C (children)",
            "Long COVID"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CBC",
              "finding": "Lymphopenia, normal/decreased platelets",
              "interpretation": "Marker of severity"
            },
            {
              "test": "D-dimer",
              "finding": "Elevated",
              "interpretation": "Thrombotic risk, poor prognosis"
            },
            {
              "test": "Ferritin",
              "finding": "Elevated",
              "interpretation": "Marker of cytokine storm"
            },
            {
              "test": "CRP/IL-6",
              "finding": "Elevated",
              "interpretation": "Degree of inflammation"
            },
            {
              "test": "LDH, troponin",
              "finding": "Elevated in severe cases",
              "interpretation": "Tissue damage"
            }
          ],
          "imaging": [
            {
              "modality": "Chest X-ray",
              "finding": "Bilateral peripheral infiltrates",
              "significance": "Less sensitive"
            },
            {
              "modality": "Chest CT",
              "finding": "Ground-glass opacities, crazy paving, consolidation",
              "significance": "Characteristic pattern"
            }
          ],
          "microbiology": [
            {
              "test": "RT-PCR (nasopharynx/oropharynx)",
              "finding": "SARS-CoV-2 RNA",
              "significance": "Gold standard, Ct value"
            },
            {
              "test": "Rapid antigen test",
              "finding": "Nucleocapsid protein",
              "significance": "Fast, indicates infectiousness"
            },
            {
              "test": "Serology",
              "finding": "Anti-S, Anti-N IgG/IgM",
              "significance": "Past infection, vaccine efficacy"
            }
          ]
        },
        "differential": [
          {
            "disease": "Influenza",
            "distinguishing": "Faster course, myalgia dominates, PCR"
          },
          {
            "disease": "Bacterial pneumonia",
            "distinguishing": "High PCT, lobar infiltrate"
          },
          {
            "disease": "Heart failure",
            "distinguishing": "Cardiac history, BNP, bilateral"
          },
          {
            "disease": "Pulmonary embolism",
            "distinguishing": "D-dimer, CTPA"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Paxlovid (nirmatrelvir/ritonavir)",
                "dose": "2x300/100mg PO",
                "duration": "5 days",
                "note": "Early, high-risk, interactions!"
              },
              {
                "drug": "Molnupiravir",
                "dose": "2x800mg PO",
                "duration": "5 days",
                "note": "Alternative if Paxlovid is contraindicated"
              }
            ],
            "inpatient": [
              {
                "drug": "Remdesivir",
                "dose": "200mg IV D1, then 100mg/day",
                "duration": "5 days (max 10)",
                "note": "If O2 is needed"
              },
              {
                "drug": "Dexamethasone",
                "dose": "6mg/day IV/PO",
                "duration": "10 days",
                "note": "Only with O2 need/ventilation!"
              }
            ],
            "icu": [
              {
                "drug": "Dexamethasone",
                "dose": "6-20mg/day",
                "duration": "10 days",
                "note": "Cytokine storm"
              },
              {
                "drug": "Tocilizumab",
                "dose": "8mg/kg IV single dose",
                "duration": "",
                "note": "IL-6 inhibitor, rapidly deteriorating"
              },
              {
                "drug": "LMWH",
                "dose": "Therapeutic dose",
                "duration": "",
                "note": "Thromboprophylaxis/therapy"
              }
            ]
          },
          "targeted": "Antiviral (Paxlovid, Remdesivir) early; Immunomodulatory (steroid, tocilizumab) in hypoxic phase",
          "supportive": [
            "Oxygen (prone positioning!)",
            "HFNC/NIV",
            "Invasive ventilation",
            "ECMO"
          ],
          "prevention": [
            "mRNA vaccines (Pfizer, Moderna)",
            "Hand hygiene",
            "Mask wearing",
            "Isolation"
          ]
        },
        "prognosis": {
          "mortality": "Omicron <1%, previously 2-5%, ICU 20-40%",
          "prognostic_scores": [
            "4C Mortality Score",
            "NEWS2"
          ],
          "factors": "Age, comorbidity, lymphopenia, D-dimer, ferritin, vaccination status"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/SARS-CoV-2_without_background.png",
            "caption": "SARS-CoV-2 virus model.",
            "type": "Virology"
          }
        ]
      },
      {
        "id": "tonsillitis",
        "name": "Tonsillitis",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Streptococcus pyogenes</i> (GAS, most common)",
          "gram": "Gram-positive",
          "shape": "chain"
        },
        "epidemiology": {
          "incidence": "Common in childhood, 5-15 years",
          "risk_groups": [
            "Children",
            "Young adults"
          ],
          "seasonality": "Winter-spring",
          "transmission": "Droplet, contact"
        },
        "pathomechanism": {
          "steps": [
            "Bacteria colonize the pharyngeal mucosa, triggering a strong local inflammatory response.",
            "This causes swelling and redness of the tonsils and the formation of purulent exudate (follicles).",
            "Bacterial toxins (e.g., streptolysin) are responsible for systemic symptoms like fever, and erythrogenic toxin for the rash in scarlet fever."
          ],
          "virulence_factors": [
            "M protein",
            "Streptolysins",
            "Hyaluronidase"
          ]
        },
        "clinical": {
          "incubation": "2-5 days",
          "onset": "Sudden",
          "symptoms": [
            {
              "name": "Local Symptoms",
              "description": "Sudden onset of severe sore throat and difficulty swallowing. The tonsils are swollen, red, and often covered with a white, purulent exudate (follicles).",
              "severity": "severe"
            },
            {
              "name": "Systemic Symptoms",
              "description": "Accompanied by high fever, chills, headache, and painful swelling of the cervical lymph nodes.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Tonsillar hyperemia, swelling",
            "Exudate",
            "Cervical lymphadenitis",
            "Scarlet fever symptoms (rare)"
          ],
          "complications": [
            "Peritonsillar abscess",
            "Rheumatic fever",
            "Glomerulonephritis",
            "Lemierre's syndrome"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Strep test",
              "finding": "Positive",
              "interpretation": "Rapid diagnosis"
            },
            {
              "test": "Throat swab culture",
              "finding": "GAS",
              "significance": "Confirmation"
            }
          ]
        },
        "calculators": [
          {
            "name": "Centor Score (McIsaac) - Strep A Probability",
            "items": [
              {
                "label": "Fever > 38°C",
                "points": 1
              },
              {
                "label": "Absence of cough",
                "points": 1
              },
              {
                "label": "Tender anterior cervical adenopathy",
                "points": 1
              },
              {
                "label": "Tonsillar swelling or exudate",
                "points": 1
              },
              {
                "label": "Age 3-14 years",
                "points": 1
              },
              {
                "label": "Age ≥ 45 years",
                "points": -1
              }
            ],
            "interpretation": [
              {
                "min": -1,
                "max": 1,
                "text": "Low risk (<10%). No antibiotic needed."
              },
              {
                "min": 2,
                "max": 3,
                "text": "Intermediate risk (15-30%). Culture or rapid test recommended."
              },
              {
                "min": 4,
                "max": 5,
                "text": "High risk (>50%). Empiric antibiotics or testing."
              }
            ]
          }
        ],
        "differential": [
          {
            "disease": "Viral pharyngitis",
            "distinguishing": "Mild symptoms, no exudate"
          },
          {
            "disease": "Mononucleosis",
            "distinguishing": "Lymphocytosis, hepatosplenomegaly"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Penicillin V",
                "dose": "4x500mg PO",
                "duration": "10 days",
                "note": "First choice"
              },
              {
                "drug": "Amoxicillin",
                "dose": "3x500mg PO",
                "duration": "10 days",
                "note": "Alternative"
              }
            ],
            "inpatient": [
              {
                "drug": "Penicillin G",
                "dose": "4x4 million IU IV",
                "duration": "7-10 days",
                "note": "In severe cases"
              }
            ],
            "icu": [
              {
                "drug": "Surgical drainage",
                "dose": "For abscess",
                "duration": "",
                "note": ""
              }
            ]
          },
          "targeted": "Penicillin",
          "supportive": [
            "Analgesics",
            "Fluids"
          ],
          "prevention": [
            "Hygiene"
          ]
        },
        "prognosis": {
          "mortality": "Low",
          "prognostic_scores": [
            "Centor Score (McIsaac)"
          ],
          "factors": "Late treatment"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Tonsillitis.jpg",
            "caption": "Clinical image of exudative tonsillitis.",
            "type": "Clinical photo"
          }
        ]
      },
      {
        "id": "sinusitis",
        "name": "Sinusitis",
        "pathogen": {
          "type": "Virus/Bacterium",
          "name": "Viruses (first 7-10 days), then <i>Streptococcus pneumoniae, Haemophilus influenzae</i>",
          "gram": "Mixed",
          "shape": "variable"
        },
        "epidemiology": {
          "incidence": "Common, adults 1-2x/year",
          "risk_groups": [
            "Patients with allergies",
            "Smokers",
            "Immunocompromised"
          ],
          "seasonality": "Winter",
          "transmission": "Endogenous, complication of upper respiratory infection"
        },
        "pathomechanism": {
          "steps": [
            "Following a viral upper respiratory infection (common cold), the nasal and sinus mucosa become swollen.",
            "The edema blocks the sinus ostia (openings), leading to mucus retention.",
            "The stagnant mucus provides an ideal breeding ground for bacterial superinfection, resulting in purulent inflammation."
          ],
          "virulence_factors": [
            "Biofilm formation"
          ]
        },
        "clinical": {
          "incubation": "After upper respiratory infection",
          "onset": "Gradual",
          "symptoms": [
            {
              "name": "Characteristic Symptoms",
              "description": "Facial pain or pressure that worsens when bending forward. It is accompanied by nasal congestion, purulent nasal discharge, and often a headache.",
              "severity": "moderate"
            },
            {
              "name": "Signs of Bacterial Superinfection",
              "description": "Symptoms lasting more than 10 days, worsening symptoms (\"double sickening\"), or high fever (>38°C) and unilateral facial pain suggest a bacterial origin.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Facial tenderness",
            "Mucopurulent nasal discharge",
            "Postnasal drip"
          ],
          "complications": [
            "Orbital cellulitis",
            "Meningitis",
            "Osteomyelitis"
          ]
        },
        "diagnostics": {
          "imaging": [
            {
              "modality": "Sinus CT",
              "finding": "Fluid level, mucosal thickening",
              "significance": "If needed"
            }
          ]
        },
        "differential": [
          {
            "disease": "Migraine",
            "distinguishing": "Unilateral headache, aura"
          },
          {
            "disease": "Dental pain",
            "distinguishing": "Dental examination"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Amoxicillin/Clavulanate",
                "dose": "2x875/125mg PO",
                "duration": "7-10 days",
                "note": "If bacterial is suspected"
              },
              {
                "drug": "Decongestant",
                "dose": "Pseudoephedrine",
                "duration": "3-5 days",
                "note": "Symptomatic"
              }
            ],
            "inpatient": [
              {
                "drug": "IV antibiotics",
                "dose": "If complicated",
                "duration": "",
                "note": ""
              }
            ],
            "icu": [
              {
                "drug": "Surgical drainage",
                "dose": "If abscess",
                "duration": "",
                "note": ""
              }
            ]
          },
          "targeted": "Antibiotics if bacterial",
          "supportive": [
            "Decongestants",
            "Steam inhalation"
          ],
          "prevention": [
            "Allergy treatment"
          ]
        },
        "prognosis": {
          "mortality": "Low",
          "prognostic_scores": [
            "None"
          ],
          "factors": "Immune status"
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Sinusitis_01.jpg",
            "caption": "Imaging example of sinusitis.",
            "type": "Imaging"
          }
        ]
      },
      {
        "id": "otitis_media",
        "name": "Otitis Media",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis</i>",
          "gram": "Mixed",
          "shape": "coccus/bacillus"
        },
        "epidemiology": {
          "incidence": "Common in childhood, 80% experience by age 3",
          "risk_groups": [
            "Infants",
            "Children",
            "Exposure to passive smoking"
          ],
          "seasonality": "Winter",
          "transmission": "Complication of upper respiratory infection"
        },
        "pathomechanism": {
          "steps": [
            "Eustachian tube obstruction (adenoid hyperplasia, rhinitis)",
            "Bacterial ascent",
            "Purulent inflammation in the middle ear",
            "Possible eardrum perforation"
          ],
          "virulence_factors": [
            "Biofilm formation"
          ]
        },
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Blausen_0871_TympanicMembrane_2.png",
            "caption": "Typical tympanic membrane changes in otitis media.",
            "type": "Otoscopy"
          }
        ]
      }
    ]
  }
});
