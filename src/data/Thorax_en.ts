// Auto-generated updated Thorax_en.ts
Object.assign(window.diseases, {
  "bacterial_respiratory": {
    "name": "Bacterial Respiratory Infections",
    "icon": (window.diseaseMetadata?.bacterial_respiratory?.icon || '🫁'),
    "color": (window.diseaseMetadata?.bacterial_respiratory?.color || '#06b6d4'),
    "tables": [
      {
        "title": "Differential Diagnosis: Typical vs. Atypical Pneumonia",
        "headers": [
          "Feature",
          "Typical Pneumonia",
          "Atypical Pneumonia"
        ],
        "rows": [
          [
            "Onset",
            "Sudden, dramatic (chills)",
            "Slow, insidious (prodrome)"
          ],
          [
            "Fever",
            "High (>39°C)",
            "Mildes or mäßiges Fever"
          ],
          [
            "Chest Pain",
            "Pleuritic, sharp (common)",
            "Retrosternal, burning (rarer)"
          ],
          [
            "Cough",
            "Productive",
            "Dry, non-productive, distressing"
          ],
          [
            "Sputum",
            "Purulent, rust-colored",
            "Scanty, mucoid or absent"
          ],
          [
            "Pleural Effusion",
            "Common (parapneumonic)",
            "Rare"
          ],
          [
            "Radiology",
            "Lobar/segmental consolidation, air bronchogram",
            "Interstitial, ground-glass, diffuse, patchy"
          ],
          [
            "Extrapulmonary Symptoms",
            "Rare (except septic dissemination)",
            "Common (headache, myalgia, ear/throat, GI, rash)"
          ],
          [
            "Lab (Leukocytes)",
            "Leukocytosis, left shift",
            "Normal or mild leukocytosis"
          ],
          [
            "Lab (CRP/PCT)",
            "Significantly elevated (PCT >0.5)",
            "Moderately elevated (PCT <0.25)"
          ],
          [
            "Lab (Liver Enzymes)",
            "Mostly normal",
            "Often elevated (AST, ALT)"
          ],
          [
            "Pathogen",
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
          "shape": "Diplococci"
        },
        "epidemiology": {
          "incidence": "Most common pathogen of community-acquired pneumonia (CAP) (30-40%)",
          "risk_groups": [
            "Persons over 65 years",
            "Patients with chronic diseases (COPD, Herzinsuffizienz, Diabetes)",
            "Immungeschwächte",
            "Splenectomized patients",
            "Alcoholics",
            "Smokers"
          ],
          "seasonality": "Winter-spring peak, often influenza superinfection",
          "transmission": "Droplet infection, endogenous activation"
        },
        "pathomechanism": {
          "steps": [
            "Die Infektion beginnt in der Regel with der Mikroaspiration von Bakterien, die die oberen Atemwege besiedeln. Die Virulenzfaktoren des Pathogens (z.B. Kapsel) helfen, die Abwehrmechanismen des Wirts (z.B. Phagozytose) zu umgehen.",
            "Die Bakterien vermehren sich in den Alveolen and lösen eine heftige Entzündungsreaktion aus. Freigesetzte Toxine (z.B. Pneumolysin) schädigen die Epithelzellen.",
            "Entzündungszellen (Neutrophile), rote Blutkörperchen and Fibrin füllen die Alveolen, was zur Konsolidierung des Lungengewebes führt. Dieser Prozess ist for das charakteristische Bild der Lobärpneumonie verantwortlich."
          ],
          "virulence_factors": [
            "Kapselpolysaccharid (93 Serotypen)",
            "Pneumolysin",
            "Autolysin (LytA)",
            "Neuraminidase",
            "IgA1-Protease"
          ]
        },
        "clinical": {
          "incubation": "1-3 days",
          "onset": "Sudden with dramatischem Onset",
          "symptoms": [
            {
              "name": "Suddener Onset",
              "description": "Gekennzeichnet durch hohes Fever, Schüttelfrost and allgemeines Krankheitsgefühl.",
              "severity": "severe"
            },
            {
              "name": "Respiratorische Symptoms",
              "description": "Anfänglich trockener Cough, der später produktiv wird and typischerweise with rostbraunem Sputum einhergeht. Pleuritische, stechende Chest Pain and Atemnot sind häufig.",
              "severity": "moderate"
            },
            {
              "name": "Atypische Präsentation",
              "description": "Bei älteren Menschen kann Fever fehlen; eine Bewusstseinsstörung kann das führende Symptom sein.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Tachypnoe, Tachykardie",
            "Dämpfung in / with Perkussion über dem betroffenen Lappen",
            "Bronchialatmen, Rasselgeräusche (Crepitatio)",
            "Erhöhte Bronchophonie and Stimmfremitus",
            "Zyanose in schweren Fällen"
          ],
          "complications": [
            "Empyem",
            "Lungenabszess",
            "Meningitis",
            "Sepsis/septischer Schock",
            "ARDS",
            "Perikarditis"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild",
              "finding": "Leukozytose (15-30 G/L), Linksverschiebung",
              "interpretation": "Typisch for bakterielle Infektion"
            },
            {
              "test": "CRP",
              "finding": "Deutlich erhöht (>100 mg/L)",
              "interpretation": "Marker for aktive Entzündung"
            },
            {
              "test": "PCT",
              "finding": ">0.5 ng/mL",
              "interpretation": "Verdacht auf bakterielle Sepsis"
            },
            {
              "test": "Arterielle BGA",
              "finding": "Hypoxämie, evtl. Hypokapnie",
              "interpretation": "Respiratorische Insuffizienz"
            },
            {
              "test": "Blutkultur",
              "finding": "In 20-30% positiv",
              "interpretation": "Pathogenidentifikation"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen (PA+seitlich)",
              "finding": "Lobar/segmental consolidation, air bronchogram",
              "significance": "Typisches Erscheinungsbild"
            },
            {
              "modality": "Thorax-CT",
              "finding": "Detaillierte Parenchymbeurteilung",
              "significance": "Ausschluss von Komplikationen"
            }
          ],
          "microbiology": [
            {
              "test": "Sputum Gram-Färbung",
              "finding": "Gram+ lanzettförmige Diplococci, >25 Neutrophile/Gesichtsfeld",
              "significance": "Schnelle Orientierung"
            },
            {
              "test": "Sputumkultur",
              "finding": "S. pneumoniae Isolierung",
              "significance": "Antibiotika-Empfindlichkeit"
            },
            {
              "test": "Urin-Antigentest",
              "finding": "Pneumokokken-Polysaccharid-Nachweis",
              "significance": "Schnell, spezifisch (>90%)"
            },
            {
              "test": "PCR",
              "finding": "lytA-Gen-Nachweis",
              "significance": "Empfindlichste Methode"
            }
          ]
        },
        "calculators": [
          {
            "name": "CURB-65 Score - Pneumonie-Severeegrad",
            "items": [
              {
                "label": "Verwirrtheit (Confusion)",
                "points": 1
              },
              {
                "label": "Harnstoff > 7 mmol/l",
                "points": 1
              },
              {
                "label": "Atemfrequenz ≥ 30/min",
                "points": 1
              },
              {
                "label": "Blutdruck (Syst < 90 or Diast ≤ 60 mmHg)",
                "points": 1
              },
              {
                "label": "Alter ≥ 65 Jahre",
                "points": 1
              }
            ],
            "interpretation": [
              {
                "min": 0,
                "max": 1,
                "text": "Niedriges Risiko (Mortalität <3%). Ambulante Treatment erwägen."
              },
              {
                "min": 2,
                "max": 2,
                "text": "Mittleres Risiko (Mortalität 9%). Krankenhausaufnahme empfohlen."
              },
              {
                "min": 3,
                "max": 5,
                "text": "Hohes Risiko (Mortalität 15-40%). Dringende Krankenhaus-/Intensivbehandlung."
              }
            ]
          }
        ],
        "differential": [
          {
            "disease": "Legionellen-Pneumonie",
            "distinguishing": "Hyponatriämie, GI-Symptoms, atypisches Röntgenbild"
          },
          {
            "disease": "Klebsiella-Pneumonie",
            "distinguishing": "Alcoholics, dunkler pflaumenmusartiger Sputum, Oberlappen"
          },
          {
            "disease": "Mykoplasmen-Pneumonie",
            "distinguishing": "Junge Patients, schleichender Onset, atypische Symptoms"
          },
          {
            "disease": "Lungenembolie",
            "distinguishing": "Risikofaktoren, D-Dimer, CT-Pulmonalisangiographie"
          },
          {
            "disease": "Herzinsuffizienz",
            "distinguishing": "Kardiale Anamnese, BNP, beidseitiges Infiltrat"
          }
        ],
        "therapy": {
          "guidelines": [
            "NICE NG138 (Pneumonia in adults) 2024/2025",
            "ATS/IDSA 2019 CAP Guidelines",
            "ERS Guidelines"
          ],
          "empirical": {
            "cap_outpatient": {
              "title": "CAP - Outpatient Management (Mild - CURB-65 0-1)",
              "drugs": [
                {
                  "drug": "Amoxicillin",
                  "dose": "3x500mg-1g p.o.",
                  "duration": "5 days",
                  "note": "First-line choice (NICE). 5-Tage-Therapie i.d.R. ausreichend."
                },
                {
                  "drug": "Doxycyclin",
                  "dose": "200mg initial, dann 1x100mg p.o.",
                  "duration": "5 days",
                  "note": "In penicillin allergy."
                },
                {
                  "drug": "Clarithromycin",
                  "dose": "2x500mg p.o.",
                  "duration": "5 days",
                  "note": "Alternative."
                }
              ]
            },
            "cap_inpatient": {
              "title": "CAP - Inpatient Ward (Moderate - CURB-65 2)",
              "drugs": [
                {
                  "drug": "Amoxicillin + Clarithromycin",
                  "dose": "3x500mg-1g p.o./i.v. + 2x500mg p.o./i.v.",
                  "duration": "5 days",
                  "note": "Atypische Abdeckung erforderlich (NICE)."
                },
                {
                  "drug": "Doxycyclin",
                  "dose": "200mg initial, dann 1x100mg p.o.",
                  "duration": "5 days",
                  "note": "Monotherapie in / with Penicillinallergie."
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "1x500mg p.o./i.v.",
                  "duration": "5 days",
                  "note": "Respiratorisches Fluorchinolon."
                }
              ]
            },
            "cap_icu": {
              "title": "CAP - Severe / ICU (CURB-65 3-5)",
              "drugs": [
                {
                  "drug": "Co-Amoxiclav + Clarithromycin",
                  "dose": "1.2g i.v. q8h + 500mg i.v. q12h",
                  "duration": "7-10 days",
                  "note": "NICE Empfehlung in / with schwerer CAP."
                },
                {
                  "drug": "Ceftriaxon + Clarithromycin",
                  "dose": "1x2g i.v. + 2x500mg i.v.",
                  "duration": "7-10 days",
                  "note": "Commone Alternativee."
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "1x500mg i.v.",
                  "duration": "7-10 days",
                  "note": "Bei Beta-Laktam-Allergie."
                }
              ]
            },
            "hap_early": {
              "title": "HAP - Non-severe / Early onset",
              "drugs": [
                {
                  "drug": "Co-Amoxiclav",
                  "dose": "625mg p.o. three times daily or 1.2g i.v. three times daily",
                  "duration": "5 days",
                  "note": "Drug of choice (NICE NG191)."
                },
                {
                  "drug": "Doxycyclin",
                  "dose": "100mg p.o.",
                  "duration": "5 days",
                  "note": "Alternativee."
                }
              ]
            },
            "hap_late_vap": {
              "title": "HAP - Severe / VAP / High risk",
              "drugs": [
                {
                  "drug": "Antipseudomonas Beta-Laktam",
                  "dose": "z.B. Piperacillin/Tazobactam, Cefepim, Meropenem",
                  "duration": "7 days",
                  "note": "Komponente 1 (Gram-negativee Abdeckung)."
                },
                {
                  "drug": "+ Antipseudomonas Fluorchinolon or Aminoglykosid",
                  "dose": "z.B. Ciprofloxacin, Amikacin",
                  "duration": "7 days",
                  "note": "Komponente 2 (Dual Gram-negativee Abdeckung)."
                },
                {
                  "drug": "+ MRSA-Abdeckung",
                  "dose": "Vancomycin or Linezolid",
                  "duration": "7 days",
                  "note": "Komponente 3 (bei MRSA-Risiko >10-20%)."
                }
              ]
            },
            "vap_stenotrophomonas": {
              "title": "VAP - Stenotrophomonas maltophilia (Targeted)",
              "drugs": [
                {
                  "drug": "Trimethoprim/Sulfamethoxazol (TMP-SMX)",
                  "dose": "15-20 mg/kg/Tag (TMP) i.v. in 3-4 Einzeldosen",
                  "duration": "14 days",
                  "note": "1. Wahl. Hohe Dosis erforderlich!"
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "750 mg i.v. once daily",
                  "duration": "14 days",
                  "note": "Alternativee."
                },
                {
                  "drug": "Cefiderocol",
                  "dose": "2g i.v. q8h",
                  "duration": "14 days",
                  "note": "Reserveantibiotikum."
                }
              ]
            }
          },
          "targeted": "Penicillinsensibel: Penicillin G 4x4 Mio. IE i.v.; Resistent: Ceftriaxon or Vancomycin",
          "supportive": [
            "O2-Therapie (SpO2 >92%)",
            "Flüssigkeitssubstitution",
            "Feversenkung",
            "Thoraxdrainage in / with Empyem"
          ],
          "prevention": [
            "PPSV23 (23-valenter Polysaccharid-Impfstoff)",
            "PCV13/15/20 (Konjugatimpfstoff)",
            "Influenza-Impfung"
          ]
        },
        "prognosis": {
          "mortality": "CAP: 5-15%, Intensivstation: 20-50%",
          "prognostic_scores": [
            "CURB-65",
            "PSI/PORT Score"
          ],
          "factors": "Alter, Komorbiditäten, Bakteriämie, multilobärer Befall"
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
            "caption": "Konsolidierung des rechten Unterlappens im Thorax-Röntgen.",
            "type": "Röntgen"
          },
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/Streptococcus_pneumoniae.jpg",
            "caption": "Gram-positivee, lanzettförmige Diplococci im Sputumpräparat.",
            "type": "Mikroskopie"
          }
        ]
      },
      {
        "id": "mediastinitis",
        "name": "Mediastinitis",
        "pathogen": {
          "type": "Bacterium",
          "name": "Polymikrobiell, häufig <i>Staphylococcus aureus</i>, Streptokokken, Gram-negativee Rods, Anaerobier",
          "gram": "Gemischt",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Rare, aber lebensbedrohliche Komplikation",
          "risk_groups": [
            "Postoperative Patients",
            "Nach endoskopischen Eingriffen",
            "Oropharyngeale Infektionen",
            "Trauma",
            "Odontogene Infektionen",
            "Immunsuppression"
          ],
          "seasonality": "None",
          "transmission": "Fortleitung aus benachbartem Gewebe, chirurgische or endoskopische Intervention"
        },
        "pathomechanism": {
          "steps": [
            "Das Mediastinum kann von benachbarten Geweben aus infiziert werden (z.B. Rachen, Speiseröhre, Zahn, Thoraxwand), after Endoskopie, Operation or Trauma.",
            "Die bakterielle Ausbreitung führt zu eitriger Entzündung, Gewebsnekrose and Abszessbildung im Mediastinum.",
            "Der Prozess führt zu Phlegmone, Zellnekrose and systemischer Entzündungsreaktion, die zu schwerer Sepsis, Schock and Multiorganversagen führen kann."
          ],
          "virulence_factors": [
            "Biofilm",
            "Toxine",
            "Polymikrobielle Gemeinschaft",
            "Gewebsnekrose"
          ]
        },
        "clinical": {
          "incubation": "Variabel, häufig wenige days bis weeks",
          "onset": "Akut or subakut",
          "symptoms": [
            {
              "name": "Chest Pain",
              "description": "Leitsymptom, häufig stark, retrosternal/retrocardial, teilweise with Schluckbeschwerden",
              "severity": "severe"
            },
            {
              "name": "Fever and B-Symptomatik",
              "description": "Entzündlicher Zustand, Tachykardie and Fever charakteristisch",
              "severity": "severe"
            },
            {
              "name": "Schluckbeschwerden / Heiserkeit",
              "description": "Mediastinale Entzündung or Abszess kann Ösophagus and Larynxbereich betreffen",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Fever, Tachykardie, Leukozytose",
            "Zervikale or supratrachiale Schwellung",
            "Chest Pain, Schluckbeschwerden",
            "Hypotonie and Sepsiszeichen im schweren Verlauf"
          ],
          "complications": [
            "Septischer Schock",
            "Mediastinalabszess",
            "Ösophagusperforation",
            "Aorten- or Großgefäßerosion",
            "Pleuraempyem",
            "Tod"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild, CRP, PCT",
              "finding": "Entzündung, häufig hohes PCT",
              "interpretation": "Severee Entzündung/Infektion"
            },
            {
              "test": "Blutkultur",
              "finding": "Kann positiv sein",
              "interpretation": "Verdacht auf Sepsis or hämatogene Streuung"
            }
          ],
          "imaging": [
            {
              "modality": "CT Thorax/Hals",
              "finding": "Mediastinale Gewebeschwellung, Abszess, Gas, Flüssigkeit",
              "significance": "Wichtigste Bildgebung"
            },
            {
              "modality": "Thorax-Röntgen",
              "finding": "Mediastinale Aufweitung, evtl. Pleural Effusion",
              "significance": "Erster Schritt, aber weniger spezifisch"
            }
          ],
          "microbiology": [
            {
              "test": "Chirurgische/Bronchoskopische Probenahme",
              "finding": "Kultur and PCR",
              "significance": "Targetede Therapie and Resistenz"
            }
          ]
        },
        "differential": [
          {
            "disease": "Pneumonie",
            "distinguishing": "Lungenparenchymbefall, weniger mediastinal"
          },
          {
            "disease": "Aortendissection / Mediastinalblutung",
            "distinguishing": "Bildgebend abgrenzbar"
          },
          {
            "disease": "Pleuritis / Empyem",
            "distinguishing": "Pleuraler Befall, keine primäre Mediastinitis"
          }
        ],
        "therapy": {
          "empirical": {
            "inpatient": [
              {
                "drug": "Piperacillin/Tazobactam",
                "dose": "4.5g i.v. three times daily",
                "duration": "Stationär/i.v.",
                "note": "Breites Spektrum, häufige 1. Wahl"
              },
              {
                "drug": "+ Vancomycin",
                "dose": "15-20 mg/kg i.v. twice daily",
                "duration": "",
                "note": "MRSA-Abdeckung"
              },
              {
                "drug": "+ Clindamycin or Metronidazol",
                "dose": "600mg i.v. three times daily",
                "duration": "",
                "note": "Anaerobe Abdeckung"
              }
            ],
            "icu": [
              {
                "drug": "Meropenem",
                "dose": "1g i.v. three times daily",
                "duration": "",
                "note": "Severeer, kritischer Zustand"
              },
              {
                "drug": "+ Vancomycin",
                "dose": "15-20 mg/kg i.v. twice daily",
                "duration": "",
                "note": "MRSA/G+ Abdeckung"
              }
            ]
          },
          "targeted": "Anpassung after Kultur and Empfindlichkeit; Quellensanierung and chirurgische Drainage entscheidend.",
          "supportive": [
            "Dringendes chirurgisches Konsil",
            "i.v. Flüssigkeitssubstitution",
            "Vasopressoren in / with schwerer Sepsis",
            "Ernährung",
            "Atemwegsunterstützung"
          ],
          "prevention": [
            "Antibiotikaprophylaxe vor Eingriffen",
            "Aseptische Mütungstechnik",
            "Treatment von Zahn- and Pharynxinfektionen"
          ]
        },
        "prognosis": {
          "mortality": "10-40% je after Ursache and Treatmentsbeginn",
          "prognostic_scores": [
            "SOFA Score"
          ],
          "factors": "Verzögerte Intervention, Ösophagusperforation, Alter"
        },
        "references": [
          {
            "text": "EACTS Guidelines on the management of mediastinitis",
            "url": "https://www.eacts.org"
          }
        ],
        "gallery": [
          {
            "url": "https://commons.wikimedia.org/wiki/Special:FilePath/CT_scan_showing_mediastinitis.jpg",
            "caption": "Thorax-CT with Mediastinalverbreiterung and Abszessbildung.",
            "type": "CT Bildgebung"
          }
        ]
      },
      {
        "id": "tuberculosis",
        "name": "Tuberculosis",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Mycobacterium tuberculosis</i> Complex",
          "gram": "Säurefest",
          "shape": "Rods"
        },
        "epidemiology": {
          "incidence": "Weltweit ca. 10.6 Mio. Diseaseen/Jahr, führende infektionsbedingte Todesursache",
          "risk_groups": [
            "HIV-Infizierte",
            "Immunsupprimierte",
            "Migranten aus Hochendemiegebieten",
            "Obdachlose",
            "Diabetiker"
          ],
          "seasonality": "None",
          "transmission": "Tröpfcheninfektion (aerogen)"
        },
        "pathomechanism": {
          "steps": [
            "Inhalation von Mycobacterium tuberculosis Aerosolen in die Alveolen.",
            "Phagozytose durch Alveolarmakrophagen. Hemmung der Phagolysosomenfusion, Bildung des Ghon-Primärkomplexes.",
            "T-Zell-Aktivierung, Granulombildung with verkäsender Nekrose. Latenz or Progression zu aktiver Tuberkulose."
          ],
          "virulence_factors": [
            "Mycolsäuren",
            "Cord-Faktor",
            "ESX-1 Sekretionssystem"
          ]
        },
        "clinical": {
          "incubation": "Monate bis Jahrzehnte (Latenz); primär 2-12 weeks",
          "onset": "Schleichend",
          "symptoms": [
            {
              "name": "B-Symptomatik",
              "description": "Nachtschweiß, Gewichtsverlust, leichtes Fever, Fatigue.",
              "severity": "moderate"
            },
            {
              "name": "Respiratorische Symptoms",
              "description": "Chronischer Cough (>2-3 weeks), Bluthusten (Hämoptoe), Chest Pain.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Kachexie, Rasselgeräusche über den Lungenoberlappen, Dämpfung in / with Erguss"
          ],
          "complications": [
            "Miliartuberkulose",
            "Tbc-Meningitis",
            "Kavernenblutung",
            "Lungenfibrose"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Ziehl-Neelsen / Auramin-Färbung",
              "finding": "Säurefeste Rods im Sputum",
              "interpretation": "Schnellnachweis"
            },
            {
              "test": "GeneXpert MTB/RIF PCR",
              "finding": "MTB-DNA + Rifampicin-Resistenz",
              "interpretation": "WHO-Goldstandard Schnelltest"
            },
            {
              "test": "Kultur (MGIT / Löwenstein-Jensen)",
              "finding": "Wachstum von M. tuberculosis",
              "interpretation": "Phänotypisches Antibiogramm"
            },
            {
              "test": "IGRA (QuantiFERON)",
              "finding": "Interferon-Gamma-Freisetzung positiv",
              "interpretation": "Nachweis der Tbc-Infektion"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen",
              "finding": "Oberlappeninfiltrat, Kaverne, Vernarbung",
              "significance": "Screening"
            },
            {
              "modality": "Thorax-CT",
              "finding": "Tree-in-bud-Muster, Kavernen",
              "significance": "Empfindlicher"
            }
          ]
        },
        "differential": [
          {
            "disease": "Bronchialkarzinom",
            "distinguishing": "Histologie"
          },
          {
            "disease": "Sarkoidose",
            "distinguishing": "Nicht-verkäsende Granulome, IGRA negativ"
          }
        ],
        "therapy": {
          "guidelines": [
            "WHO Consolidated Guidelines on Tuberculosis 2024",
            "CDC / ATS / IDSA TB Guidelines"
          ],
          "empirical": {
            "title": "Standard 4-fach Therapie (Sensible Tbc)",
            "drugs": [
              {
                "drug": "Isoniazid (H) + Pyridoxin (B6)",
                "dose": "5 mg/kg p.o. once daily + B6 25-50mg/Tag",
                "duration": "2 months Initial + 4 months Kontinuation",
                "note": "Pyridoxin zur Neuropathie-Prophylaxe."
              },
              {
                "drug": "Rifampicin (R)",
                "dose": "10 mg/kg p.o. once daily",
                "duration": "2 months + 4 months",
                "note": "Rot-orange Verfärbung von Körperflüssigkeiten."
              },
              {
                "drug": "Pyrazinamid (Z)",
                "dose": "20-30 mg/kg p.o. once daily",
                "duration": "2 months Initialphase",
                "note": "Hepatotoxisch."
              },
              {
                "drug": "Ethambutol (E)",
                "dose": "15-20 mg/kg p.o. once daily",
                "duration": "2 months Initialphase",
                "note": "Optikusneuritis-Risiko."
              }
            ]
          },
          "targeted": "2 months 2HRZE, gefolgt von 4 monthsn 2HR (Gesamtdauer 6 months). In MDR-TB BPaLM-Schema (Bedaquilin + Pretomanid + Linezolid + Moxifloxacin) for 6 months (WHO 2024)!",
          "supportive": [
            "Isolierung (Unterdruckzimmer)",
            "Beobachtete Einnahme (DOTS)",
            "Leberwertkontrollen"
          ],
          "prevention": [
            "Kontaktpersonen-Nachverfolgung",
            "Treatment der latenten TB (LTBI) with 3HP or 4R"
          ]
        },
        "prognosis": {
          "mortality": "Heilungsrate >95% in / with Adhärenz",
          "prognostic_scores": [
            "WHO TB Outcomes"
          ],
          "factors": "Resistenzen, HIV-Koinfektion"
        },
        "references": [
          {
            "text": "WHO Consolidated Guidelines on Tuberculosis 2024",
            "url": "https://www.who.int/teams/global-tuberculosis-programme"
          }
        ],
        "gallery": []
      },
      {
        "id": "legionella",
        "name": "Legionellosis (Legionnaires' Disease)",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Legionella pneumophila</i>",
          "gram": "Gram-negative",
          "shape": "Rods"
        },
        "epidemiology": {
          "incidence": "2-10% aller hospitalisierten CAP-Fälle",
          "risk_groups": [
            "Personen >50 J.",
            "Smokers",
            "Chronische Herzkranke/Lungenkranke",
            "Reisende"
          ],
          "seasonality": "Sommer-Herbst",
          "transmission": "Aerosolinhalation aus Wassersystemen (Duschen, Kühltürme). None Mensch-zu-Mensch-Übertragung!"
        },
        "pathomechanism": {
          "steps": [
            "Inhalation von Legionellen-Aerosolen.",
            "Phagozytose durch Alveolarmakrophagen, intrazelluläre Vermehrung im Phagolysosom.",
            "Nekrotisierende Lobärpneumonie with Zytokinfreisetzung."
          ],
          "virulence_factors": [
            "Dot/Icm Typ-IV Sekretionssystem",
            "Mip-Protein"
          ]
        },
        "clinical": {
          "incubation": "2-10 days (Legionärskrankheit); 24-48h (Pontiac-Fever)",
          "onset": "Akut, rasch progredient",
          "symptoms": [
            {
              "name": "Hohes Fever & Schüttelfrost",
              "description": "Gefolgt von unproduktivem or eitrigem Cough.",
              "severity": "severe"
            },
            {
              "name": "Gastrointestinale Symptoms",
              "description": "Wässrige Diarrhö (30-50%), Bauchschmerzen.",
              "severity": "moderate"
            },
            {
              "name": "ZNS-Symptoms",
              "description": "Kopfschmerzen, Verwirrtheit, Delir.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Hohes Fever, relative Bradykardie (Faget-Zeichen), Rasselgeräusche, Verwirrtheit"
          ],
          "complications": [
            "ARDS",
            "Akutes Nierenversagen",
            "Rhabdomyolyse",
            "Septischer Schock"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Serum-Natrium",
              "finding": "Hyponatriämie (<130 mmol/L)",
              "interpretation": "Sehr charakteristisch!"
            },
            {
              "test": "Urin-Antigentest",
              "finding": "L. pneumophila Serogruppe 1 Antigen positiv",
              "interpretation": "Schnell, spezifisch (>95%)"
            },
            {
              "test": "PCR (Sputum)",
              "finding": "Legionella-DNA positiv",
              "interpretation": "Höchste Sensitivität"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen",
              "finding": "Rasche Infiltratprogression, oft einseitig",
              "significance": "Schlechter als Klinik"
            }
          ]
        },
        "calculators": [
          {
            "name": "CURB-65 Score - Pneumonie-Severeegrad",
            "items": [
              {
                "label": "Verwirrtheit (Confusion)",
                "points": 1
              },
              {
                "label": "Harnstoff > 7 mmol/l",
                "points": 1
              },
              {
                "label": "Atemfrequenz ≥ 30/min",
                "points": 1
              },
              {
                "label": "Blutdruck (Syst < 90 or Diast ≤ 60 mmHg)",
                "points": 1
              },
              {
                "label": "Alter ≥ 65 Jahre",
                "points": 1
              }
            ],
            "interpretation": [
              {
                "min": 0,
                "max": 1,
                "text": "Niedriges Risiko (<3% Mortalität)."
              },
              {
                "min": 2,
                "max": 2,
                "text": "Mittleres Risiko (9% Mortalität)."
              },
              {
                "min": 3,
                "max": 5,
                "text": "Hohes Risiko (15-40% Mortalität)."
              }
            ]
          }
        ],
        "differential": [
          {
            "disease": "Pneumokokken-Pneumonie",
            "distinguishing": "None Diarrhö/Verwirrtheit, Urin-Antigen"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Targetede Antibiose in / with Legionellose",
            "drugs": [
              {
                "drug": "Levofloxacin",
                "dose": "500-750 mg p.o./i.v. once daily",
                "duration": "7-14 days",
                "note": "1. Wahl! Schnelle Bakterizidie."
              },
              {
                "drug": "Azithromycin",
                "dose": "500 mg p.o./i.v. once daily",
                "duration": "5-10 days",
                "note": "Sehr gut wirksame Alternativee."
              }
            ]
          },
          "targeted": "Levofloxacin or Azithromycin. Beta-Laktame sind unwirksam!",
          "supportive": [
            "O2-Gabe",
            "Ausgleich der Hyponatriämie"
          ],
          "prevention": [
            "Thermische Desinfektion von Wassersystemen (>60°C)"
          ]
        },
        "prognosis": {
          "mortality": "5-10% unter Therapie; bis 30% in / with Immunsuppression",
          "prognostic_scores": [
            "CURB-65"
          ],
          "factors": "Therapieverzögerung, Alter"
        },
        "references": [
          {
            "text": "ESCMID Statement on Legionella Pneumonia",
            "url": "https://www.escmid.org"
          }
        ],
        "gallery": []
      },
      {
        "id": "mycoplasma",
        "name": "Mycoplasma Pneumonia",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Mycoplasma pneumoniae</i>",
          "gram": "None Gram-Färbung",
          "shape": "Pleomorph"
        },
        "epidemiology": {
          "incidence": "10-20% der CAP-Fälle",
          "risk_groups": [
            "Schulkinder, Jugendliche, junge Erwachsene (5-20 J.)"
          ],
          "seasonality": "Spätsommer/Herbst",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Anheftung an das CILIEN-Epithel über P1-Adhäsin.",
            "CARDS-Toxin Produktion, ciliostatischer Schaden.",
            "Kälteagglutinin-Bildung (IgM against I-Antigen), hämolytische Anämie, Erythema multiforme / MIRM."
          ],
          "virulence_factors": [
            "P1-Adhäsin",
            "CARDS-Toxin"
          ]
        },
        "clinical": {
          "incubation": "1-3 weeks",
          "onset": "Schleichend",
          "symptoms": [
            {
              "name": "Quälender Reizhusten",
              "description": "Trocken, anfallsartig, wochenlang.",
              "severity": "moderate"
            },
            {
              "name": "Kopfschmerzen & Prodrom",
              "description": "Pharyngitis, Myringitis bullosa, Otitis.",
              "severity": "moderate"
            },
            {
              "name": "Extrapulmonale Manifestationen",
              "description": "Erythema multiforme, MIRM, Raynaud-Syndrom, Kälteagglutinin-Hämolyse.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Diskreter Auskultationsbefund (\"Walking pneumonia\"), Trommelfellbläschen"
          ],
          "complications": [
            "Erythema multiforme / Stevens-Johnson-Syndrom",
            "Hämolytische Anämie",
            "Neuropathien"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "PCR (Abstrich/Sputum)",
              "finding": "M. pneumoniae DNA positiv",
              "interpretation": "Methode der Wahl"
            },
            {
              "test": "Kälteagglutinine",
              "finding": "IgM positiv (Titer ≥1:64)",
              "interpretation": "In ~50% der Fälle"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen",
              "finding": "Interstitielle Zeichnungsvermehrung, fleckiges Infiltrat",
              "significance": "Schlechter als Klinik"
            }
          ]
        },
        "differential": [
          {
            "disease": "Chlamydia pneumoniae",
            "distinguishing": "PCR-Differenzierung"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Therapie der Mykoplasmen-Pneumonie",
            "drugs": [
              {
                "drug": "Azithromycin",
                "dose": "500mg day 1, dann 250mg day 2-5 p.o.",
                "duration": "5 days",
                "note": "1. Wahl in / with Kindern and Erwachsenen."
              },
              {
                "drug": "Doxycyclin",
                "dose": "100mg twice daily p.o.",
                "duration": "7-10 days",
                "note": "Alternativee in / with Erwachsenen."
              }
            ]
          },
          "targeted": "Makrolide, Doxycyclin or Fluorchinolone. Beta-Laktame sind wirkungslos!",
          "supportive": [
            "Symptomatische Coughdämpfung"
          ],
          "prevention": [
            "Hygienemaßnahmen"
          ]
        },
        "prognosis": {
          "mortality": "<1%",
          "prognostic_scores": [],
          "factors": "Makrolidresistenz, ZNS-Komplikationen"
        },
        "references": [
          {
            "text": "ERS Guidelines for CAP Management",
            "url": "https://www.ersnet.org"
          }
        ],
        "gallery": []
      },
      {
        "id": "chlamydia_pneumoniae",
        "name": "Chlamydia pneumoniae Infection",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Chlamydia pneumoniae</i>",
          "gram": "Gram-negative",
          "shape": "Kugelförmig"
        },
        "epidemiology": {
          "incidence": "5-10% der CAP-Fälle",
          "risk_groups": [
            "Schulkinder, ältere Heimbewohner"
          ],
          "seasonality": "Ganzjährig",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Intrazellulärer Entwicklungszyklus in Atemwegsepithelzellen."
          ],
          "virulence_factors": [
            "Intrazelluläres Überleben"
          ]
        },
        "clinical": {
          "incubation": "3-4 weeks",
          "onset": "Biphasisch",
          "symptoms": [
            {
              "name": "Pharyngitis & Bronchitis",
              "description": "Erst Pharyngitis/Heiserkeit, dann weeks später Bronchitis/Pneumonie.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Pharyngitis, Heiserkeit, Rasselgeräusche"
          ],
          "complications": [
            "Asthma-Exazerbation"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "PCR",
              "finding": "DNA positiv",
              "interpretation": "Drug of choice"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen",
              "finding": "Kleine Infiltrate",
              "significance": "Unspezifisch"
            }
          ]
        },
        "differential": [
          {
            "disease": "Mykoplasmen-Pneumonie",
            "distinguishing": "PCR"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Therapie der C. pneumoniae Infektion",
            "drugs": [
              {
                "drug": "Doxycyclin",
                "dose": "100mg twice daily p.o.",
                "duration": "10-14 days",
                "note": "1. Wahl."
              },
              {
                "drug": "Azithromycin",
                "dose": "500mg day 1, 250mg day 2-5",
                "duration": "5 days",
                "note": "Alternativee."
              }
            ]
          },
          "targeted": "Doxycyclin or Makrolide.",
          "supportive": [
            "Symptomatische Therapie"
          ],
          "prevention": [
            "Hygienemaßnahmen"
          ]
        },
        "prognosis": {
          "mortality": "<1%",
          "prognostic_scores": [],
          "factors": "Alter"
        },
        "gallery": []
      },
      {
        "id": "psittacosis",
        "name": "Psittacosis (Ornithosis)",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Chlamydia psittaci</i>",
          "gram": "Gram-negative",
          "shape": "Kugelförmig"
        },
        "epidemiology": {
          "incidence": "Rare Zoonose",
          "risk_groups": [
            "Vogelhalter, Geflügelzüchter, Tierärzte"
          ],
          "seasonality": "Ganzjährig",
          "transmission": "Inhalation von getrocknetem Vogelkot/-staub"
        },
        "pathomechanism": {
          "steps": [
            "Inhalation, intrazelluläre Vermehrung in Makrophagen, hämatogene Aussaat, interstitielle Pneumonie."
          ],
          "virulence_factors": [
            "LPS, intrazelluläre Replikation"
          ]
        },
        "clinical": {
          "incubation": "1-2 weeks",
          "onset": "Sudden",
          "symptoms": [
            {
              "name": "Sehr starke Kopfschmerzen",
              "description": "Mit hohem Fever, Schüttelfrost and trockenem Cough.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Relative Bradykardie, Splenomegalie, Horder-Flecken"
          ],
          "complications": [
            "Endokarditis, Hepatitis"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Serologie / PCR",
              "finding": "Titeranstieg / DNA positiv",
              "interpretation": "Diagnosesicherung"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen",
              "finding": "Atypische fächerförmige Infiltrate",
              "significance": "Typisch"
            }
          ]
        },
        "differential": [
          {
            "disease": "Q-Fever",
            "distinguishing": "Viehkontakt vs. Vogelkontakt"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Therapie der Ornithose",
            "drugs": [
              {
                "drug": "Doxycyclin",
                "dose": "100mg twice daily p.o.",
                "duration": "10-14 days",
                "note": "First-line choice!"
              }
            ]
          },
          "targeted": "Doxycyclin 100mg twice daily for 10-14 days.",
          "supportive": [
            "Symptomatische Maßnahmen"
          ],
          "prevention": [
            "Quarantäne for Importvögel"
          ]
        },
        "prognosis": {
          "mortality": "<1% unter Doxycyclin",
          "prognostic_scores": [],
          "factors": "Therapiebeginn"
        },
        "gallery": []
      },
      {
        "id": "q_fever_resp",
        "name": "Q Fever (Respiratory)",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Coxiella burnetii</i>",
          "gram": "Gram-negative",
          "shape": "Coccobacillus"
        },
        "epidemiology": {
          "incidence": "Weltweite Zoonose",
          "risk_groups": [
            "Landwirte, Tierärzte, Schlachthofarbeiter, Herzklappenpatienten"
          ],
          "seasonality": "Frühjahr/Sommer",
          "transmission": "Inhalation von Geburtsmaterial-Staub/Aerosolen von Schafen, Ziegen, Rindern"
        },
        "pathomechanism": {
          "steps": [
            "Inhalation sporenaehnlicher Formen, Replikation im Phagolysosom, Granulombildung."
          ],
          "virulence_factors": [
            "Phase-I-LPS"
          ]
        },
        "clinical": {
          "incubation": "2-3 weeks",
          "onset": "Sudden",
          "symptoms": [
            {
              "name": "Retroorbitale Kopfschmerzen",
              "description": "Extrem stark, with hohem Fever, Myalgien and Pneumonie/Hepatitis.",
              "severity": "severe"
            },
            {
              "name": "Chronisches Q-Fever",
              "description": "Kultur-negative Endokarditis in / with Klappenpatienten.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Relative Bradykardie, Hepatomegalie"
          ],
          "complications": [
            "Chronische Q-Endokarditis, Q-Fever-Erschöpfungssyndrom"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Serologie (IFA)",
              "finding": "Phase-II-IgM/IgG hoch (Akut); Phase-I-IgG ≥1:800 (Chronisch)",
              "interpretation": "Goldstandard"
            },
            {
              "test": "PCR",
              "finding": "DNA positiv",
              "interpretation": "Frühphase"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen",
              "finding": "Runde Infiltrate",
              "significance": "Pneumonie"
            }
          ]
        },
        "differential": [
          {
            "disease": "Legionellose",
            "distinguishing": "Serologie / Urin-Antigen"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Therapie des Q-Fevers",
            "drugs": [
              {
                "drug": "Doxycyclin (Akut)",
                "dose": "100mg twice daily p.o.",
                "duration": "14 days",
                "note": "1. Wahl!"
              },
              {
                "drug": "Doxycyclin + Hydroxychloroquin (Chronische Endokarditis)",
                "dose": "100mg twice daily + 200mg three times daily",
                "duration": "≥18-24 months",
                "note": "Hydroxychloroquin alkalisiert das Phagolysosom."
              }
            ]
          },
          "targeted": "Akut: Doxycyclin 14 days. Chronisch: Doxycyclin + Hydroxychloroquin ≥18-24 months.",
          "supportive": [
            "Symptomatische Therapie"
          ],
          "prevention": [
            "Milchpasteurisierung, Impfung in Endemiegebieten"
          ]
        },
        "prognosis": {
          "mortality": "Akut <1%; Chronische Endokarditis 5-15%",
          "prognostic_scores": [],
          "factors": "Herzklappenfehler"
        },
        "gallery": []
      }
    ]
  },
  "cardiovascular": {
    "name": "Cardiovascular Infections",
    "icon": (window.diseaseMetadata?.cardiovascular?.icon || '🫀'),
    "color": (window.diseaseMetadata?.cardiovascular?.color || '#b91c1c'),
    "diseases": [
      {
        "id": "endocarditis",
        "name": "Infective Endocarditis",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Staphylococcus aureus</i> (30-40%), Viridans-Streptokokken, Enterokokken, CoNS, HACEK-Gruppe",
          "gram": "Überwiegend Gram-positive",
          "shape": "Kokken"
        },
        "epidemiology": {
          "incidence": "3-10 Fälle / 100.000 Einwohner/Jahr",
          "risk_groups": [
            "Träger von Klappenersatz / TAVI",
            "Z.n. früherer Endokarditis",
            "Angeborene Herzfehler",
            "i.v.-Drogenkonsumenten",
            "Hämodialysepatienten"
          ],
          "seasonality": "None",
          "transmission": "Bakteriämie after zahnärztlichen, chirurgischen or endovaskulären Eingriffen / Hautverletzungen"
        },
        "pathomechanism": {
          "steps": [
            "Endothelschaden der Herzklappe, Bildung einer nicht-bakteriellen thrombotischen Endokarditis (NBTE).",
            "Transiente Bakteriämie führt zur Pathogenanheftung (Fibronektin-bindende Proteine) and Kolonisierung.",
            "Bakterienvermehrung, Fibrin- and Thrombozytenablagerung bilden infizierte VEGETATIONEN. Klappendestruktion, Abszessbildung and embolische Streuung (Gehirn, Milz, Niere, Haut)."
          ],
          "virulence_factors": [
            "Biofilmbildung",
            "Fibronektin-bindendes Protein A (FnBPA)",
            "Clumping-Faktor",
            "Enterokokken-Ebp-Pili"
          ]
        },
        "clinical": {
          "incubation": "Tage bis weeks (S. aureus akut; Strep/Enterokokken subakut)",
          "onset": "Akut fulminant or subakut schleichend",
          "symptoms": [
            {
              "name": "Fever & Neues Herzgeräusch",
              "description": "Gekennzeichnet durch unklares Fever, Schüttelfrost and ein neu aufgetretenes Regurgitationsgeräusch (Klappeninsuffizienz).",
              "severity": "severe"
            },
            {
              "name": "Embolische Phänomene",
              "description": "Schlaganfall, miliare Milz-/Niereninfarkte, Janeway-Läsionen (schmerzlose erythematöse Flecken an Handflächen/Fußsohlen).",
              "severity": "severe"
            },
            {
              "name": "Immunologische Phänomene",
              "description": "Osler-Knötchen (schmerzhafte Knötchen an Finger-/Zehenkuppen), Roth-Spots (Netzhautblutungen with hellem Zentrum), Glomerulonephritis.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Neues or sich veränderndes Herzgeräusch",
            "Janeway-Läsionen, Osler-Knötchen, Splitterblutungen unter den Nägeln",
            "Splenomegalie, Petechien der Konjunktiven",
            "Neurologische Ausfälle in / with septischer Embolie"
          ],
          "complications": [
            "Akute Herzinsuffizienz (Klappenperforation/Abriss)",
            "Perivalvulärer Abszess / Pseudoaneurysma",
            "Septische Embolien (Schlaganfall, Milz-/Niereninfarkt)",
            "AV-Blockierungen (bei Aortenringabszess)",
            "Septischer Schock"
          ]
        },
        "diagnostics": {
          "criteria": [
            {
              "name": "Modifizierte Duke-Kriterien / ESC 2023 Duke-ISCVID Kriterien",
              "items": [
                "Diagnose Definitiv: 2 Hauptkriterien OR 1 Haupt- + 3 Nebenkriterien OR 5 Nebenkriterien",
                "Hauptkriterium 1 (Mikrobiologie): Typische Pathogen in min. 2 separaten Blutkulturen (S. aureus, Viridans-Strep, S. gallolyticus, Enterokokken, HACEK) or Coxiella burnetii Phase-I-IgG >1:800",
                "Hauptkriterium 2 (Bildgebung): TTE/TEE positiv for Vegetation, Abszess, Pseudoaneurysma, Klappenperforation OR 18F-FDG PET/CT / Kardio-CT positiv for paravalvuläre Läsionen",
                "Nebenkriterien: Prädisposition (Herzklappe, i.v.-Drogen), Fever ≥38°C, vaskuläre Phänomene (Embolien, Janeway), immunologische Phänomene (Osler, Roth, RF), mikrobiologischer Hinweis"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "Blutkulturen (HK)",
              "finding": "Mindestens 3 HK-Sets im Abstand von 30 Min. VOR Antibiose!",
              "interpretation": "Essenziell for gezielte Therapie"
            },
            {
              "test": "Entzündungsparameter (CRP, BSG, Leukozyten)",
              "finding": "Massiv erhöht, CRP-Verlaufskontrolle",
              "interpretation": "Aktivitätsbeurteilung"
            },
            {
              "test": "Serologie / PCR (bei kultur-negativer IE)",
              "finding": "Coxiella burnetii, Bartonella spp., Tropheryma whipplei",
              "interpretation": "Spezialdiagnostik"
            }
          ],
          "imaging": [
            {
              "modality": "Transösophageale Echokardiographie (TEE)",
              "finding": "Vegetation, Abszess, Klappenperforation, Dehiszenz einer Prothese",
              "significance": "Goldstandard (Sensitivität >90-95%)"
            },
            {
              "modality": "18F-FDG PET/CT or SPECT/CT",
              "finding": "Hypermetabole paravalvuläre Herde in / with Klappenprothesen",
              "significance": "ESC 2023 Hauptkriterium in / with Prothesenendokarditis!"
            },
            {
              "modality": "Kopf-/Abdomen-MRT",
              "finding": "Stumme septische Embolien (Gehirn, Milz, Niere)",
              "significance": "Staging and Embolierisiko"
            }
          ]
        },
        "differential": [
          {
            "disease": "Nicht-bakterielle thrombotische Endokarditis (NBTE / Marantisch)",
            "distinguishing": "Marantius in / with Tumorpatienten, sterile Blutkulturen, kein Fever"
          },
          {
            "disease": "Libman-Sacks-Endokarditis",
            "distinguishing": "Bei Systemischem Lupus Erythematodes (SLE), Antiphospholipid-Syndrom"
          },
          {
            "disease": "Atriales Myxom",
            "distinguishing": "Histologie / Echokardiographie (gestielter Myxomtumor im Vorhof)"
          }
        ],
        "therapy": {
          "guidelines": [
            "ESC 2023 Guidelines for the management of endocarditis (Eur Heart J 2023)"
          ],
          "empirical": {
            "title": "Empirice Antibiose in / with akuter Infektiöser Endokarditis (ESC 2023)",
            "drugs": [
              {
                "drug": "Native Klappe: Ampicillin + Oxacillin/Flucloxacillin + Ceftriaxon",
                "dose": "Ampicillin 12g/Tag i.v. in 4-6 Dosen + Flucloxacillin 12g/Tag i.v. in 4-6 Dosen + Ceftriaxon 2g i.v. once daily",
                "duration": "4-6 weeks",
                "note": "Deckt S. aureus, Streptokokken and Enterokokken ab."
              },
              {
                "drug": "Klappenprothese (<1 Jahr postop): Vancomycin + Gentamicin + Rifampicin",
                "dose": "Vancomycin 30-60 mg/kg/Tag i.v. + Gentamicin 3 mg/kg/Tag i.v. + Rifampicin 900mg/Tag p.o. in 3 Dosen",
                "duration": "Mindestens 6 weeks",
                "note": "Rifampicin greift Fremdkörper-Biofilm an!"
              }
            ]
          },
          "targeted": "Streptokokken (Penicillin G 4-6 weeks or Ceftriaxon + Gentamicin 2 weeks); MSSA (Flucloxacillin 4-6 weeks); MRSA (Vancomycin or Daptomycin 10mg/kg/Tag); Enterococcus faecalis (Ampicillin 12g/Tag + Ceftriaxon 4g/Tag for 6 weeks).",
          "supportive": [
            "Dringendes herzchirurgisches Konsil (Indikationen: Refraktäre Herzinsuffizienz, unkontrollierte Infektion/Abszess, Embolieprävention in / with Vegetation >10mm)"
          ],
          "prevention": [
            "Endokarditisprophylaxe with Amoxicillin 2g p.o. 30-60 Min. vor zahnärztlichen Eingriffen NUR in / with HÖCHSTRISIKOPATIENTEN (Klappenersatz, Z.n. IE, angeborene Herzfehler with Shunt)!"
          ]
        },
        "prognosis": {
          "mortality": "15-20% In-Hospital Mortalität; 30% 1-Jahres-Mortalität",
          "prognostic_scores": [
            "ESC Endocarditis Risk Score"
          ],
          "factors": "S. aureus Pathogen, Herzinsuffizienz, Paravalvulärabszess, hohes Alter"
        },
        "references": [
          {
            "text": "ESC 2023 Guidelines for the management of endocarditis",
            "url": "https://www.escardio.org/Guidelines/Clinical-Practice-Guidelines/Endocarditis-Guidelines"
          }
        ],
        "gallery": []
      },
      {
        "id": "cied",
        "name": "CIED Infection",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Staphylococcus epidermidis</i> / CoNS (50-70%), <i>Staphylococcus aureus</i> (25%), Cutibacterium acnes, Gram-negativee Rods",
          "gram": "Gram-positive",
          "shape": "Kokken"
        },
        "epidemiology": {
          "incidence": "1-2% aller CIED-Implantationen",
          "risk_groups": [
            "Aggregatwechsel / Revisionen",
            "CRT / ICD Mehrkammersysteme",
            "Diabetes, Niereninsuffizienz, Antikoagulation (Taschenhämatom)"
          ],
          "seasonality": "None",
          "transmission": "Perioperative Inokulation or hämatogene Besiedlung"
        },
        "pathomechanism": {
          "steps": [
            "Bakterielle Besiedlung der Schrittmachertasche or der Sondenoberfläche.",
            "Ausgeprägte Biofilmbildung auf den Kunststoff-/Metallsonden.",
            "Ausbreitung entlang der Sonden in die V. cava superior, das rechte Atrium/Ventrikel and die Trikuspidalklappe (Sondenendokarditis)."
          ],
          "virulence_factors": [
            "Biofilm-Synthese (PIA)",
            "Fremdkörper-Adhäsine"
          ]
        },
        "clinical": {
          "incubation": "Tascheninfektion wochen- bis monatelang; Sondenendokarditis variabel",
          "onset": "Lokale Taschenentzündung bis zur septischen Sondenendokarditis",
          "symptoms": [
            {
              "name": "Tascheninfektion",
              "description": "Rötung, Schwellung, Erwärmung, Fluktuation or Perforation/Erosion der Schrittmachertasche.",
              "severity": "moderate"
            },
            {
              "name": "Systemische Sondenendokarditis",
              "description": "Unklares Fever, Schüttelfrost, pulmonale septische Embolien (Cough, Pleuraschmerz).",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Rötung/Erosion über dem Aggregat, Eiteraustritt, Trikuspidalinsuffizienz-Geräusch"
          ],
          "complications": [
            "Trikuspidalklappen-Endokarditis",
            "Septische Lungenembolien",
            "Vena-cava-superior-Thrombose",
            "Sepsis"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutkulturen",
              "finding": "Mindestens 2-3 HK-Sets vor Antibiose",
              "interpretation": "Essenziell in / with Sondeninfektion"
            },
            {
              "test": "Taschen-Abstrich / Gewebekultur",
              "finding": "S. epidermidis / S. aureus",
              "interpretation": "Pathogenbestimmung"
            }
          ],
          "imaging": [
            {
              "modality": "TEE (Transösophageale Echokardiographie)",
              "finding": "Sondenvegetationen, Trikuspidalklappenbefall",
              "significance": "Goldstandard"
            },
            {
              "modality": "18F-FDG PET/CT or SPECT/CT",
              "finding": "Fokale FDG-Anreicherung im Bereich der Tasche or des Sondenverlaufs",
              "significance": "EHRA 2024 / ESC 2023 Empfehlung!"
            }
          ]
        },
        "differential": [
          {
            "disease": "Aseptisches Taschenhämatom",
            "distinguishing": "PET-CT negativ, sterile Punktion"
          }
        ],
        "therapy": {
          "guidelines": [
            "EHRA 2024 International Consensus Document on CIED Infection",
            "ESC 2023 Endocarditis guidelines"
          ],
          "empirical": {
            "title": "Empirice Antibiose & Sondenextraktion in / with CIED-Infektion",
            "drugs": [
              {
                "drug": "Vancomycin + Cefepim or Piperacillin/Tazobactam",
                "dose": "Vancomycin 15-20 mg/kg i.v. twice daily + Cefepim 2g i.v. twice daily",
                "duration": "Bis zur Extraktion",
                "note": "Breitspektrum for Staphylokokken and Gram-negativee."
              }
            ]
          },
          "targeted": "VOLLSTÄNDIGE ENTFERNUNG / EXTRAKTION DES GESAMTEN CIED-SYSTEMS (Aggregat + ALLE Sonden) IST OBLIGATORISCH (EHRA/ESC Klasse I)! Konservative Antibiose alleine versagt in >80-90%. Antibiose after Extraktion: 2 weeks in / with unkomplizierter Tascheninfektion; 4-6 weeks in / with Sondenendokarditis/Bakteriämie.",
          "supportive": [
            "Transvenöse Lasersondenextraktion im spezialisierten Zentrum",
            "Interimspacing falls Schrittmacherabhängigkeit besteht"
          ],
          "prevention": [
            "Perioperative Cefazolin-Prophylaxe",
            "Taschenhämatome vermeiden"
          ]
        },
        "prognosis": {
          "mortality": "5-15% in / with Sondenendokarditis",
          "prognostic_scores": [],
          "factors": "S. aureus Bakteriämie, unvollständige Sondenextraktion"
        },
        "references": [
          {
            "text": "EHRA 2024 International Consensus Document on CIED Infection",
            "url": "https://www.escardio.org/Sub-specialties/EHRA"
          }
        ],
        "gallery": []
      },
      {
        "id": "myocarditis",
        "name": "Myocarditis",
        "pathogen": {
          "type": "Virus / Bacterium / Immunologisch",
          "name": "Enteroviren (Coxsackie B), Parvovirus B19, HHV-6, SARS-CoV-2, Influenza, Borrelia burgdorferi, Riesenzell-Myokarditis, Immune-Checkpoint-Inhibitoren",
          "gram": "Variabel",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "10-22 pro 100.000 Personen/Jahr",
          "risk_groups": [
            "Junge Erwachsene (20-40 J.), männliches Geschlecht",
            "Sportler in / with körperlicher Belastung während Infekt",
            "Patients unter Immuntherapie"
          ],
          "seasonality": "Herbst-Winter-Gipfel (viral)",
          "transmission": "Natur der Grunderkrankung / virale Atemwegs- or Magen-Darm-Infektion"
        },
        "pathomechanism": {
          "steps": [
            "Virale Invasion der Myozyten via Rezeptoren (CAR - Coxsackie-Adenovirus-Rezeptor).",
            "Direkte Zytolyse and virale Replikation im Herzmuskel.",
            "Immunvermittelte Gewebezerstörung durch CD8+ T-Zellen and Autoantikörper. Progression zu kardialem Remodeling and Dilatativer Kardiomyopathie (DCM)."
          ],
          "virulence_factors": [
            "CAR-Rezeptorbindung",
            "Zytotoxische Zytokine"
          ]
        },
        "clinical": {
          "incubation": "1-3 weeks after viralem Infekt",
          "onset": "Akut (Herzinfarkt-ähnlich) bis fulminant",
          "symptoms": [
            {
              "name": "Chest Pain",
              "description": "Oft infarktähnlich or pleuritisch/perikarditisch.",
              "severity": "severe"
            },
            {
              "name": "Herzinsuffizienz-Symptoms",
              "description": "Belastungsdyspnoe, Orthopnoe, peripheren Ödeme, Fatigue.",
              "severity": "severe"
            },
            {
              "name": "Herzrhythmusstörungen",
              "description": "Palpitationen, Synkopen, plötzlicher Herztod.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Tachykardie, dritter Herzton (Galopprhythmus), Lungenrasseln, peripherer Ödeme"
          ],
          "complications": [
            "Fulminante Kardiogener Schock",
            "Severee ventrikuläre Arrhythmien (VT/VF)",
            "Dilatative Kardiomyopathie (DCM)",
            "Suddener Herztod"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Kardiales Troponin I/T & CK-MB",
              "finding": "Ausgeprägt erhöht (Myozytennekrose)",
              "interpretation": "Marker for Herzmuskelschaden"
            },
            {
              "test": "NT-proBNP / BNP",
              "finding": "Stark erhöht",
              "interpretation": "Ausmaß der ventrikulären Wandspannung"
            },
            {
              "test": "Borrelien-Serologie / Viruses-PCR",
              "finding": "Borrelia-IgM/IgG or Virusnachweis",
              "interpretation": "Ätiologiesuche"
            }
          ],
          "imaging": [
            {
              "modality": "Kardio-MRT (CMR)",
              "finding": "Lake-Louise-Kriterien positiv (T2-Ödem + T1 Late Gadolinium Enhancement in epicardialen/mesokardialen Abschnitten)",
              "significance": "Goldstandard der nicht-invasiven Diagnostics!"
            },
            {
              "modality": "Echokardiographie",
              "finding": "Regionale or globale Wandbewegungsstörungen, LVEF-Reduktion, Perikarderguss",
              "significance": "Erstevaluation"
            }
          ],
          "microbiology": [
            {
              "test": "Endomyokardbiopsie (EMB)",
              "finding": "Histologie (Dallas-Kriterien), Immunhistochemie, Virus-PCR",
              "significance": "Goldstandard in / with fulminantem Verlauf / Riesenzellmyokarditis!"
            }
          ]
        },
        "differential": [
          {
            "disease": "Akutes Koronarsyndrom (ACS / Herzinfarkt)",
            "distinguishing": "Unauffällige Koronarangiographie (KHK Ausschluss)"
          },
          {
            "disease": "Takotsubo-Kardiomyopathie",
            "distinguishing": "Apikales Ballooning im Echo, Stress-Trigger"
          }
        ],
        "therapy": {
          "guidelines": [
            "2023 ESC Guidelines for the management of cardiomyopathies",
            "ESC Working Group Consensus Statement"
          ],
          "empirical": {
            "title": "Unterstützende & Symptomatische Therapie der Myokarditis",
            "drugs": [
              {
                "drug": "ACE-Hemmer / ARNI + Beta-Blocker + MRA",
                "dose": "z.B. Ramipril / Sacubitril-Valsartan + Bisoprolol + Spironolacton",
                "duration": "Mindestens 6 months",
                "note": "Standard-Herzinsuffizienztherapie in / with LVEF-Reduktion."
              }
            ]
          },
          "targeted": "STRICT SPORTS RESTRICTION FOR 3-6 MONTHS (ESC Klasse I)! Immunsuppression (Hochdosis-Steroide + Azathioprin/Ciclosporin) NUR in / with nachgewiesener Riesenzellmyokarditis, eosinophiler or autoimmuner Myokarditis. In Lyme disease: Ceftriaxon 2g i.v. once daily for 14-21 days. In cardiogenic shock: VAD / ECMO (Life-Support).",
          "supportive": [
            "Körperliche Schonung",
            "Antiarrhythmika",
            "Kardiogene Schock-Therapie"
          ],
          "prevention": [
            "No Sport während fieberhafter Infekte!",
            "Grippe- and COVID-Impfung"
          ]
        },
        "prognosis": {
          "mortality": "50% Spontanheilung; 10-20% Progression zu DCM; Riesenzellmyokarditis >80% Mortalität without Immunsuppression",
          "prognostic_scores": [],
          "factors": "LVEF <35%, ventrikuläre Tachykardien, Riesenzellhistologie"
        },
        "references": [
          {
            "text": "2023 ESC Guidelines for the management of cardiomyopathies",
            "url": "https://www.escardio.org"
          }
        ],
        "gallery": []
      },
      {
        "id": "pericarditis",
        "name": "Acute Pericarditis",
        "pathogen": {
          "type": "Virus / Idiopathisch / Bacterium",
          "name": "Enteroviren (Coxsackie), Echoviren, Adenoviren, EBV, CMV, SARS-CoV-2, Idiopathisch (>80-90%), Mycobacterium tuberculosis, S. aureus, Autoimmun",
          "gram": "Variabel",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "28 Fälle / 100.000 Personen/Jahr",
          "risk_groups": [
            "Junge Männer (20-50 J.)",
            "Post-Myokardinfarkt (Dressler-Syndrom)",
            "Autoimmunpatienten (SLE, RA)",
            "Urämiepatienten"
          ],
          "seasonality": "Ganzjährig",
          "transmission": "Virale Atemwegs- or GI-Infektion"
        },
        "pathomechanism": {
          "steps": [
            "Entzündung des viszeralen and parietalen Perikardblattes.",
            "Fibrinöse Exsudation (\"Brot-und-Butter-Perikarditis\") and Flüssigkeitsansammlung im Perikardraum.",
            "Entzündungsreiz verursacht scharfe pleuritische Chest Pain and Perikardreiben."
          ],
          "virulence_factors": [
            "Zytokinausschüttung",
            "Fibrinablagerung"
          ]
        },
        "clinical": {
          "incubation": "1-2 weeks after viralem Prodrom",
          "onset": "Akut",
          "symptoms": [
            {
              "name": "Scharfer retrosternaler Brustschmerz",
              "description": "Charakteristisch: Verstärkung im Liegen and in / with Inspiration; Linderung beim Nach-Vorne-Beugen!",
              "severity": "severe"
            },
            {
              "name": "Perikardreiben",
              "description": "Lederknirschen-ähnliches Geräusch in / with der Auskultation.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Perikardreiben (Pathognomonisch!), Pulsus paradoxus in / with Tamponade, Tachykardie"
          ],
          "complications": [
            "Herzbeuteltamponade (Notfall!)",
            "Rezidivierende Perikarditis (15-30%)",
            "Konstruktive Perikarditis (\"Panzerherz\")"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "CRP / BSG",
              "finding": "Stark erhöht",
              "interpretation": "Entzündungsaktivität"
            },
            {
              "test": "Troponin",
              "finding": "Mild erhöht in 30% (Myoperikarditis)",
              "interpretation": "Beteiligung des Herzmuskels"
            }
          ],
          "imaging": [
            {
              "modality": "EKG",
              "finding": "ST-Strecken-Hebungen konkavbögig aus dem absteigenden T-Schenkel in fast allen Ableitungen (I, II, aVF, V2-V6) + PR-Depression (aVR with ST-Senkung and PR-Hebung)",
              "significance": "Klassisches EKG-Muster!"
            },
            {
              "modality": "Echokardiographie",
              "finding": "Perikarderguss, Beurteilung von Tamponadezeichen (RV-Kollaps in der Diastole)",
              "significance": "Essentiell"
            }
          ]
        },
        "differential": [
          {
            "disease": "Akuter Myokardinfarkt (AMI)",
            "distinguishing": "EKG: Konvexe ST-Hebungen spiegelbildlich, Troponin massiv erhöht"
          },
          {
            "disease": "Lungenembolie / Aortendissection",
            "distinguishing": "CT-Pulmonalisangiographie / CTA"
          }
        ],
        "therapy": {
          "guidelines": [
            "ESC Guidelines for the diagnosis and management of pericardial diseases"
          ],
          "empirical": {
            "title": "Erstlinien-Therapie der Akuten Perikarditis (ESC)",
            "drugs": [
              {
                "drug": "Ibuprofen OR Aspirin + COLCHICIN",
                "dose": "Ibuprofen 600-800mg q8h p.o. OR Aspirin 750-1000mg q8h p.o. PLUS Colchicin 0.5mg 1-twice daily",
                "duration": "NSAID 1-2 weeks (ausschleichen); Colchicin 3 MONATE!",
                "note": "Colchicin HALBIERT die Rezidivrate (ESC Klasse I)!"
              }
            ]
          },
          "targeted": "Zweitlinientherapie: Niedrigdosierte Glukokortikoide (Prednison 0.2-0.5 mg/kg/Tag) NUR in / with Unverträglichkeit/Versagen von NSAID+Colchicin or autoimmuner Genese (Steroide ERHÖHEN das Rezidivrisiko!). Perikardpunktion in / with Tamponade or Verdacht auf eitrige/neoplastische Perikarditis.",
          "supportive": [
            "Körperliche Schonung bis zur CRP-Normalisierung"
          ],
          "prevention": [
            "3-monatige Colchicin-Einnahme verhindert Rezidive!"
          ]
        },
        "prognosis": {
          "mortality": "<1% in / with unkomplizierter Perikarditis; 15-30% Rezidivrisiko without Colchicin",
          "prognostic_scores": [],
          "factors": "Fever >38°C, großer Erguss, Herzbeuteltamponade, Mangel an Colchicin"
        },
        "references": [
          {
            "text": "ESC Guidelines for the diagnosis and management of pericardial diseases",
            "url": "https://www.escardio.org"
          }
        ],
        "gallery": []
      },
      {
        "id": "vascular_graft_infection",
        "name": "Vascular Graft Infection",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Staphylococcus aureus</i>, Koagulase-negative Staphylokokken (CoNS), <i>Pseudomonas aeruginosa</i>, Enterobacteriaceae, Cutibacterium, Candida",
          "gram": "Gram-positive and Gram-negative",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "1-6% in / with offenen aortalen/peripheren Bypass-Operationen, 0.5-1.5% in / with endovaskulären Stentgrafts (EVAR / TEVAR)",
          "risk_groups": [
            "Patients after offenen aortalen or peripheren Gefäßrekonstruktionen",
            "EVAR / TEVAR Stentgraft-Träger",
            "Inguinale Wundkomplikationen (Leistenzugang)",
            "Diabetes mellitus, Adipositas, Re-Operationen"
          ],
          "seasonality": "None",
          "transmission": "Perioperative Inokulation (intraoperative Kontamination), Ausbreitung aus Leistenwundinfektion or hämatogene Besiedlung"
        },
        "pathomechanism": {
          "steps": [
            "Inokulation & Biofilm: Bakterien lagern sich an die synthetische Prothese (PTFE, Dacron) an and bilden einen dichten Biofilm.",
            "Perigraft-Entzündung & Abszess: Ausbildung von periprothetischem Exsudat, Abszessen, Gaseinschlüssen and fehlender Gewebeintegration (Non-incorporation).",
            "Anastomoseninsuffizienz & Pseudoaneurysma: Zerstörung der Nahtreihe and nativen Gefäßwand, was zu Pseudoaneurysmen or aorto-enterischen / aorto-bronchialen Fisteln führt.",
            "Septische Embolisation: Verschleppung infizierter Thromben aus dem Prothesenlumen after peripher."
          ],
          "virulence_factors": [
            "Dacron/PTFE-Adhäsine",
            "Biofilmbildung",
            "Bakterielle Proteasen"
          ]
        },
        "clinical": {
          "incubation": "Früh (<2 months postop - S. aureus, Gram-negativee) or Spät (>2 months postop - S. epidermidis, Cutibacterium)",
          "onset": "Schleichendes Fever bis zur akuten massiven lebensbedrohlichen Blutung",
          "symptoms": [
            {
              "name": "Lokale Wundsymptome",
              "description": "Nicht heilende Wunde in der Leiste, Sinustrakt, eitrige Sekretion, pulsierende Schwellung (Pseudoaneurysma).",
              "severity": "moderate"
            },
            {
              "name": "Systemische Infektzeichen",
              "description": "Fever unklarer Genese (FUO), Schüttelfrost, Gewichtsverlust, Sepsis, CRP-Erhöhung.",
              "severity": "severe"
            },
            {
              "name": "Lebensbedrohliche Blutung / Fistel",
              "description": "Aorto-enterische Fistel: Dramatisches Warnzeichen ist eine kleine, spontan sistierende Magen-Darm-Blutung (\"Herald Bleeding\"), der eine massive Hämatemesis/Meläna folgt!",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Leistenwundinfektion, Fistel, Erythem über dem Prothesenverlauf, pulsierende Raumforderung, Blue-Toe-Syndrom (septische Embolien)"
          ],
          "complications": [
            "Massive katastrophale Blutung (Aorto-enterische Fistel-Ruptur)",
            "Septischer Schock",
            "Prothesenthrombose and akute Ischämie",
            "Gliedmaßenamputation"
          ]
        },
        "diagnostics": {
          "criteria": [
            {
              "name": "MAGIC (Management of Aortic Graft Infection Collaboration) Kriterien",
              "items": [
                "Definitive VGI: Haupt-Chirurgisches/Histologisches/Mikrobiologisches Kriterium OR 1 Haupt-Bildgebungskriterium + 1 Nebenkriterium",
                "Haupt-Bildgebungskriterium: Periprothetisches Gas >7 days postop, periprothetischer Abszess im CT, aorto-enterische Fistel, fokal intensive FDG-Aufnahme im 18F-FDG PET/CT",
                "Nebenkriterien: Fever, CRP-Erhöhung, Sinustrakt, periprothetische Gewebeverdickung"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "Blutkulturen (HK)",
              "finding": "Mindestens 2-3 HK-Sets vor Antibiose",
              "interpretation": "Pathogennachweis"
            },
            {
              "test": "CRP / PCT / BSG",
              "finding": "Stark erhöht",
              "interpretation": "Verlaufskontrolle"
            }
          ],
          "imaging": [
            {
              "modality": "CT-Angiographie (CTA)",
              "finding": "Periprothetische Gasblasen (>7-14 days postop), Flüssigkeitskollektion/Abszess, Pseudoaneurysma, Kontinuitätsunterbrechung der Darmwand",
              "significance": "ESC / ESVS Klasse I: Erstlinien-Bildgebung!"
            },
            {
              "modality": "18F-FDG PET/CT",
              "finding": "Intensive, fokale or diffuse patologische FDG-Aufnahme entlang der Gefäßprothese (\"Sandwich-Zeichen\")",
              "significance": "ESC / ESVS Klasse I GOLDSTANDARD: Höchste Sensitivität and Spezifität!"
            }
          ],
          "microbiology": [
            {
              "test": "Sonifikation der entfernten Prothese",
              "finding": "Pathogen- and Resistenzbestimmung",
              "significance": "Erhöht die Ausbeute in / with Biofilmkeimen"
            }
          ]
        },
        "differential": [
          {
            "disease": "Aseptisches Serom / Flüssigkeit",
            "distinguishing": "PET-CT negativ, Punktion steril"
          },
          {
            "disease": "Postimplantationssyndrom (nach EVAR)",
            "distinguishing": "Fever and Leukozytose direkt after EVAR without Infektion, spontan regressiv in 3-5 daysn"
          }
        ],
        "therapy": {
          "guidelines": [
            "ESVS 2020 Clinical Practice Guidelines on Vascular Graft Infections",
            "ESC 2023 Endocarditis guidelines"
          ],
          "empirical": {
            "title": "Empirice Antibiose in / with Gefäßprotheseninfektion",
            "drugs": [
              {
                "drug": "Vancomycin + Piperacillin/Tazobactam OR Cefepim / Meropenem",
                "dose": "Vancomycin 30-60 mg/kg/Tag i.v. + Pip-Tazo 4x4.5g/Tag i.v.",
                "duration": "Bis zur chirurgischen Sanierung",
                "note": "Breitspektrum-Abdeckung for MRSA, Pseudomonas and Anaerobier."
              }
            ]
          },
          "targeted": "Kombinierte Chirurgische AND Antimikrobielle Therapie (ESVS Klasse I): Vollständige Entfernung der infizierten Prothese, radikales Debridement and RevasSystematisierung with autologer Vein (V. saphena magna), Homograft or Rifampicin/Silber-beschichteter Prothese! After prosthesis removal 6-12 weeks gezielte i.v./p.o. Antibiose; wenn Prothese nicht entfernbar ist, LEBENSLANGE suppresive Antibiose erforderlich.",
          "supportive": [
            "Notfallmäßige gefäßchirurgische Konsultation in / with Verdacht auf aorto-enterische Fistel (Herald Bleeding!)",
            "Unterstützendes Wundmanagement (NPWT)"
          ],
          "prevention": [
            "Strenge chirurgische Asepsis",
            "Perioperative Antibiotikaprophylaxe (Cefazolin 2g i.v.)"
          ]
        },
        "prognosis": {
          "mortality": "Aortale Protheseninfektion 25-50% Mortalität; Aorto-enterische Fistel unbehandelt 100%! Amputationsrisiko 10-25%.",
          "prognostic_scores": [
            "MAGIC Prognosis Score"
          ],
          "factors": "Aortale Lokalisation, Notfall-OP, P. aeruginosa / S. aureus Pathogen"
        },
        "references": [
          {
            "text": "ESVS 2020 Clinical Practice Guidelines on Vascular Graft Infections",
            "url": "https://www.ejves.com"
          }
        ],
        "gallery": []
      }
    ]
  },
  "upper_respiratory": {
    "name": "Upper Respiratory Tract Infections",
    "icon": (window.diseaseMetadata?.upper_respiratory?.icon || '🗣️'),
    "color": (window.diseaseMetadata?.upper_respiratory?.color || '#14b8a6'),
    "diseases": [
      {
        "id": "upper_respiratory_infections",
        "name": "Upper Respiratory Tract Infection (Common Cold)",
        "pathogen": {
          "type": "Virus",
          "name": "Rhinoviren (>50%), Coronaviren, Adenoviren, RSV, Parainfluenzaviren",
          "gram": "None",
          "shape": "Kapsid"
        },
        "epidemiology": {
          "incidence": "Most common menschliche Infektion (Erwachsene 2-4x/Jahr, Kinder 6-8x/Jahr)",
          "risk_groups": [
            "Kleinkinder in Kitas",
            "Stress, Schlafmangel"
          ],
          "seasonality": "Herbst-Winter-Gipfel",
          "transmission": "Tröpfchen- and Kontaktinfektion"
        },
        "pathomechanism": {
          "steps": [
            "Invasion des Nasen-Rachen-Epithels, Entzündungsmediator-Freisetzung (Histamin, Bradykinin), Schleimhautödem and Hypersekretion."
          ],
          "virulence_factors": [
            "Rezeptorbindung (ICAM-1 in / with Rhinoviren)"
          ]
        },
        "clinical": {
          "incubation": "1-3 days",
          "onset": "Mild",
          "symptoms": [
            {
              "name": "Nasal- and Halssymptome",
              "description": "Rhinitis (Schnupfen), Niesen, Halsschmerzen, mäßiges Fever, Cough.",
              "severity": "mild"
            }
          ],
          "physical_exam": [
            "Gerötete Nasenschleimhaut, seröse/eitrige Rhinorrhö, Pharynxrötung"
          ],
          "complications": [
            "Bakterielle Superinfektion (Sinusitis, Otitis media, Bronchitis)"
          ]
        },
        "diagnostics": {
          "laboratory": [],
          "imaging": []
        },
        "differential": [
          {
            "disease": "Allergische Rhinitis",
            "distinguishing": "Juckreiz, Eosinophilie, kein Fever"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Symptomatische Therapie der Erkältung",
            "drugs": [
              {
                "drug": "Analgetika / Antipyretika (Ibuprofen / Paracetamol)",
                "dose": "Ibuprofen 400mg three times daily or Paracetamol 500-1000mg 3-4x/Tag p.o.",
                "duration": "3-5 days",
                "note": "Zur Schmerz- and Feversenkung."
              },
              {
                "drug": "Abschwellende Nasentropfen (Xylometazolin)",
                "dose": "1-2 Tropfen/Sprühestöße pro Nasenloch max three times daily",
                "duration": "Maximal 5-7 days!",
                "note": "Gefahr der Rhinitis medicamentosa in / with Langzeitanwendung."
              }
            ]
          },
          "targeted": "Rein symptomatisch! None Antibiotika in / with unkomplizierter Erkältung!",
          "supportive": [
            "Ausreichend Flüssigkeit",
            "Nasenspülung with Kochsalzlösung"
          ],
          "prevention": [
            "Händewaschen, Händehygiene"
          ]
        },
        "prognosis": {
          "mortality": "0%",
          "prognostic_scores": [],
          "factors": "None"
        },
        "gallery": []
      },
      {
        "id": "laryngitis",
        "name": "Croup (Laryngotracheobronchitis)",
        "pathogen": {
          "type": "Virus",
          "name": "Parainfluenzaviren (Typ 1-3), RSV, Adenoviren, Influenzaviren",
          "gram": "None",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Common in / with Säuglingen and Kleinkindern (6 months bis 3 Jahre)",
          "risk_groups": [
            "Kleinkinder (Anatomisch enge subglottische Region)"
          ],
          "seasonality": "Herbst-Winter",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Virale Infektion des Kehlkopf- and Trachealepithels.",
            "Subglottisches Schleimhautödem verengt die Atemwege (Hagen-Poiseuille-Gesetz: Radius-Halbierung erhöht Strömungswiderstand um das 16-fache!).",
            "Inspiratorischer Stridor and bellender Cough."
          ],
          "virulence_factors": [
            "Neuraminidase, Hämagglutinin"
          ]
        },
        "clinical": {
          "incubation": "2-5 days",
          "onset": "Sudden, klassischerweise nachts aus dem Schlaf heraus",
          "symptoms": [
            {
              "name": "Bellender Cough & Heiserkeit",
              "description": "Charakteristischer bellernder \"Hundehusten\" and Heiserkeit.",
              "severity": "moderate"
            },
            {
              "name": "Inspiratorischer Stridor",
              "description": "Pfeifendes Atemgeräusch in / with der Einatmung, juguläre/interkostale Einziehungen.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Inspiratorischer Stridor, Heiserkeit, Einziehungen, Tachypnoe"
          ],
          "complications": [
            "Akute Atemwegsverlegung / Respiratorische Insuffizienz"
          ]
        },
        "diagnostics": {
          "laboratory": [],
          "imaging": [
            {
              "modality": "Hals-Röntgen (AP)",
              "finding": "Kirchturm-Zeichen (Steeple Sign - subglottische Verengung)",
              "significance": "Rare erforderlich"
            }
          ]
        },
        "calculators": [
          {
            "name": "Westley Croup Score - Pseudokrupp Severeegrad",
            "items": [
              {
                "label": "Inspiratorischer Stridor (Noner=0, With agitation=1, At rest=2)",
                "points": 2
              },
              {
                "label": "Einziehungen (None=0, Mild=1, Mäßig=2, Severe=3)",
                "points": 3
              },
              {
                "label": "Atemgeräusch (Normal=0, Vermindert=1, Stark vermindert=2)",
                "points": 2
              },
              {
                "label": "Zyanose (None=0, With agitation=4, At rest=5)",
                "points": 5
              },
              {
                "label": "Bewusstsein (Normal=0, Desorientiert=5)",
                "points": 5
              }
            ],
            "interpretation": [
              {
                "min": 0,
                "max": 2,
                "text": "Milder Pseudokrupp (≤2): Ambulante Einzeldosis Dexamethason p.o."
              },
              {
                "min": 3,
                "max": 5,
                "text": "Mittelschwerer Pseudokrupp (3-5): Dexamethason + Überwachung."
              },
              {
                "min": 6,
                "max": 11,
                "text": "Severeer Pseudokrupp (6-11): Dexamethason + Inhalatives Adrenalin + Stationäre Aufnahme."
              },
              {
                "min": 12,
                "max": 17,
                "text": "Drohendes Atemversagen (≥12): Intensivstation, Intubationsbereitschaft!"
              }
            ]
          }
        ],
        "differential": [
          {
            "disease": "Epiglottitis",
            "distinguishing": "Hohes Fever, Speichelfluss (Drooling), Sitzen in \"Tripod-Haltung\", kein bellender Cough!"
          },
          {
            "disease": "Fremdkörperaspiration",
            "distinguishing": "Suddener Onset beim Spielen, kein Infekt"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Stufentherapie des Pseudokrupp",
            "drugs": [
              {
                "drug": "Dexamethason p.o. / i.m. / i.v.",
                "dose": "0.6 mg/kg Einzeldosis (max 16mg)",
                "duration": "Einmalig",
                "note": "Essenziell in / with JEDEM Severeegrad (Westley Score)!"
              },
              {
                "drug": "Inhalatives Adrenalin (L-Epinephrin)",
                "dose": "2-5 ml Adrenalin (1:1000) über Vernebler",
                "duration": "Bei Stridor in Ruhe",
                "note": "Schnelle Abschwellung durch alpha-sympathomimetische Vasokonstriktion."
              }
            ]
          },
          "targeted": "Glukokortikoide + inhalatives Adrenalin in / with schwerem Stridor. None Antibiotika!",
          "supportive": [
            "Kühle feuchte Luft, Beruhigung des Kindes, Sauerstoffgabe"
          ],
          "prevention": [
            "Rauchfreie Umgebung"
          ]
        },
        "prognosis": {
          "mortality": "<0.1% in / with rechtzeitiger Dexamethasongabe",
          "prognostic_scores": [
            "Westley Croup Score"
          ],
          "factors": "Westley Score ≥6"
        },
        "gallery": []
      },
      {
        "id": "epiglottitis",
        "name": "Acute Epiglottitis",
        "pathogen": {
          "type": "Bacterium",
          "name": "<i>Haemophilus influenzae</i> Typ b (Hib - durch Impfung stark rückläufig), <i>Streptococcus pneumoniae</i>, <i>S. pyogenes</i>, <i>S. aureus</i>",
          "gram": "Gram-negative / Gram-positive",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Rare seit Einführung der Hib-Impfung",
          "risk_groups": [
            "Ungeimpfte Kinder",
            "Erwachsene with Diabetes / Immunsuppression"
          ],
          "seasonality": "Ganzjährig",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Bakterielle Infektion des Kehldeckels (Epiglottis) and der supraglottischen Strukturen.",
            "Massives entzündliches Ödem der Epiglottis.",
            "Rasche, lebensbedrohliche Verlegung der oberen Atemwege."
          ],
          "virulence_factors": [
            "Hib Kapselpolysaccharid (PRP)"
          ]
        },
        "clinical": {
          "incubation": "1-3 days",
          "onset": "Dramatisch, fulminant",
          "symptoms": [
            {
              "name": "Die 3 \"Ds\"",
              "description": "Dysphagie (Schluckstörung), Drooling (Speichelfluss), Distress (Atemnot).",
              "severity": "severe"
            },
            {
              "name": "Kopforwärtsneigung (Tripod-Haltung)",
              "description": "Kind sitzt aufgerichtet, neigt den Kopf after vorne, um den Kehlkopf offen zu halten.",
              "severity": "severe"
            },
            {
              "name": "Kloßige Sprache",
              "description": "Gedämpfte \"Kloß-im-Mund\"-Sprache (Hot potato voice), KEIN bellender Cough!",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "ABSOLUTES MANIPULATIONSVERBOT IM MUND/RACHEN (Gefahr des fatalen Laryngospasmus!)",
            "Sitzende Haltung, Speichelfluss, Stridor"
          ],
          "complications": [
            "Akuter Erstickungstod / Atemstillstand",
            "Sepsis",
            "Abszessbildung"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutkulturen",
              "finding": "In 70% positiv for Hib",
              "interpretation": "Only AFTER securing the airway!"
            }
          ],
          "imaging": [
            {
              "modality": "Hals-Röntgen seitlich",
              "finding": "Daumenzeichen (Thumbprint Sign - geschwollene Epiglottis)",
              "significance": "Nur in / with stabiler Situation"
            }
          ]
        },
        "differential": [
          {
            "disease": "Pseudokrupp",
            "distinguishing": "Bellender Cough, kein Speichelfluss, liegt flach"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Notfallbehandlung der Epiglottitis",
            "drugs": [
              {
                "drug": "Ceftriaxon i.v.",
                "dose": "2g i.v. once daily (Kinder: 50-100 mg/kg/Tag)",
                "duration": "7-10 days",
                "note": "1. Wahl after Atemwegssicherung!"
              },
              {
                "drug": "+ Vancomycin or Ampicillin/Sulbactam",
                "dose": "15-20 mg/kg i.v. q12h",
                "duration": "7-10 days",
                "note": "Zusätzliche Staphylokokken-Abdeckung."
              }
            ]
          },
          "targeted": "PRIMÄRES ZIEL: SOFORTIGE ATEMWEGSSICHERUNG (Orotracheale Intubation im Operationssaal / HNO-Notfall)! Erst danach Antibiose with Ceftriaxon i.v.",
          "supportive": [
            "Notfall-Koniotomie/Tracheotomie Bereitstellung"
          ],
          "prevention": [
            "Hib-Schutzimpfung im Säuglingsalter (Obligatorisch!)"
          ]
        },
        "prognosis": {
          "mortality": "<1% in / with rechtzeitiger Intubation; bis 10-20% in / with verzögerter Diagnose",
          "prognostic_scores": [],
          "factors": "Atemwegsverlegung vor Intubation"
        },
        "gallery": []
      },
      {
        "id": "rsv_infection",
        "name": "RSV Infection",
        "pathogen": {
          "type": "Virus",
          "name": "Respiratorisches Synzytial-Virus (RSV - Pneumoviridae)",
          "gram": "None",
          "shape": "Behülltes Einzelstrang-RNA-Virus"
        },
        "epidemiology": {
          "incidence": "Most common Ursache for Bronchiolitis and Pneumonie in / with Säuglingen <1 Jahr",
          "risk_groups": [
            "Frühgeborene",
            "Säuglinge <6 months",
            "Kinder with angeborenen Herzfehlern / BPD",
            "Ältere Erwachsene (>65 J.)"
          ],
          "seasonality": "Winter-Frühjahr (November bis April)",
          "transmission": "Tröpfchen- and Schmierinfektion (Hohe Kontagiosität!)"
        },
        "pathomechanism": {
          "steps": [
            "Infektion des Epithels der kleinen Atemwege (Bronchiolen) via F-Protein (Fusionsprotein).",
            "Bildung von Zellsynzytien, Nekrose der Epithelzellen and massive Schleimproduktion.",
            "Verlegung der Bronchiolen, Air-Trapping (Überblähung) and Atelektasenbildung."
          ],
          "virulence_factors": [
            "F-Protein (Fusion)",
            "G-Protein (Attachment)"
          ]
        },
        "clinical": {
          "incubation": "2-8 days",
          "onset": "Symptomprogression über 3-5 days",
          "symptoms": [
            {
              "name": "Säuglings-Bronchiolitis",
              "description": "Gekennzeichnet durch Tachypnoe, giemendes/brummendes Atemgeräusch (Wheezing), interkostale Einziehungen, Nasenflügeln and Trinkschwäche.",
              "severity": "severe"
            },
            {
              "name": "Apnoen in / with Neugeborenen",
              "description": "Atemstillstände besonders in / with sehr jungen Säuglingen (<2 months).",
              "severity": "severe"
            },
            {
              "name": "Erwachsenen-Pneumonie",
              "description": "Severeer Bronchitis- / Pneumonieverlauf in / with Älteren.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Tachypnoe, Giemen, Feuchte Rasselgeräusche, Einziehungen, Zyanose"
          ],
          "complications": [
            "Respiratorische Insuffizienz",
            "Bakterielle Superinfektion",
            "Post-Bronchiolitis-Asthma"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "RSV-Schnelltest / RT-PCR (Nasopharynx-Abstrich)",
              "finding": "RSV-RNA or Antigen positiv",
              "interpretation": "Diagnosesicherung"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen",
              "finding": "Überblähung, Atelektasen",
              "significance": "Bronchiolitis"
            }
          ]
        },
        "differential": [
          {
            "disease": "Rhinovirus- / Metapneumovirus-Bronchiolitis",
            "distinguishing": "PCR-Panel"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Prophylaxe & Unterstützende Therapie der RSV-Infektion (2024/2025)",
            "drugs": [
              {
                "drug": "NIRSEVIMAB (Beyfortus) - Monoklonaler Antikörper",
                "dose": "Einzeldosis 50mg (<5kg) or 100mg (≥5kg) i.m.",
                "duration": "Einmalig vor/in der RSV-Saison",
                "note": "RECOMMENDED FOR ALL NEWBORNS/INFANTS in der 1. RSV-Saison (STIKO/CDC)!"
              },
              {
                "drug": "PALIVIZUMAB (Synagis)",
                "dose": "15 mg/kg i.m. monatlich während der Saison",
                "note": "Alternativee for Hochrisiko-Frühgeborene."
              },
              {
                "drug": "RSV-Impfstoffe (AREXVY / ABRYSVO)",
                "dose": "Einzeldosis i.m.",
                "duration": "Einmalig",
                "note": "Arexvy/Abrysvo for Erwachsene ≥60 J.; Abrysvo for Schwangere (32-36. SSW) zum mütterlichen Nestschutz!"
              }
            ]
          },
          "targeted": "Symptomatische Therapie ist der Eckpfeiler: Absaugen der Nase, Sauerstoffgabe (SpO2 >90-92%), High-Flow-Nasenkanüle (HFNC), adäquate Flüssigkeitszufuhr. Bronchodilatatoren and Steroide werden routinemäßig NICHT empfohlen!",
          "supportive": [
            "Sauerstofftherapie, HFNC",
            "Enterale/Parenterale Flüssigkeit"
          ],
          "prevention": [
            "Nirsevimab-Immunisierung for alle Säuglinge",
            "RSV-Impfung for Schwangere & Ältere"
          ],
          "guidelines": [
            "AAP / ECDC / WHO RSV Prophylaxis Guidelines 2024/2025"
          ]
        },
        "prognosis": {
          "mortality": "<0.5% in / with gesunden Säuglingen; bis 3-5% in / with Herzfehler/Frühgeborenen",
          "prognostic_scores": [],
          "factors": "Frühgeburtlichkeit, Alter <2 months"
        },
        "gallery": []
      },
      {
        "id": "influenza",
        "name": "Influenza (Seasonal Flu)",
        "pathogen": {
          "type": "Virus",
          "name": "Influenzavirus A (H1N1, H3N2), Influenzavirus B (Orthomyxoviridae)",
          "gram": "None",
          "shape": "Segmentiertes Einzelstrang-RNA-Virus"
        },
        "epidemiology": {
          "incidence": "Jährliche Winterepidemien (5-15% der Bevölkerung betroffen)",
          "risk_groups": [
            "Schwangere",
            "Personen >60 J.",
            "Chronisch Kranke (COPD, Herz-, Nierenkranke)",
            "Krankenhauspersonal"
          ],
          "seasonality": "Wintermonat (Dezember bis März)",
          "transmission": "Tröpfcheninfektion and Aerosole"
        },
        "pathomechanism": {
          "steps": [
            "Bindung des Hämagglutinins (HA) an Sialsäure-Rezeptoren des Tracheobronchialepithels.",
            "Zelllyse, Freisetzung neuer Virionen durch Neuraminidase (NA).",
            "Ausgeprägte Zytokinausschüttung (Zytokinsturm) verursacht typisches hohes Fever and Myalgien."
          ],
          "virulence_factors": [
            "Antigendrift (Punktmutationen - saisonal)",
            "Antigenshift (Reassortment - Pandemien)",
            "Neuraminidase",
            "Hämagglutinin"
          ]
        },
        "clinical": {
          "incubation": "1-4 days",
          "onset": "Sudden, schlagartig innerhalb von hours",
          "symptoms": [
            {
              "name": "Schlagartiger Onset with hohem Fever",
              "description": "Hohes Fever (≥39-40°C), Schüttelfrost, starke Myalgien (Muskelschmerzen) and Arthralgien.",
              "severity": "severe"
            },
            {
              "name": "Trachealer Cough & Kopfschmerzen",
              "description": "Trockener, schmerzhafter Cough, retrosternales Brennen, extreme Fatigue.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Hohes Fever, Pharynxrötung, trockenes Rasselgeräusch, schwere Abgeschlagenheit"
          ],
          "complications": [
            "Bakterielle Superinfektionspneumonie (S. aureus, S. pneumoniae)",
            "Primaere Influenza-Pneumonie",
            "Myokarditis",
            "Enzephalopathie"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "RT-PCR (Nasopharyngealabstrich)",
              "finding": "Influenza A/B RNA positiv",
              "interpretation": "Goldstandard"
            },
            {
              "test": "Antigen-Schnelltest",
              "finding": "Influenza A/B Antigen positiv",
              "interpretation": "Schnell, aber geringere Sensitivität"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen",
              "finding": "Normal or interstitielles Muster",
              "significance": "Ausschluss einer Superinfektion"
            }
          ]
        },
        "differential": [
          {
            "disease": "COVID-19 / RSV",
            "distinguishing": "RT-PCR Multiplex-Panel"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Antivirale Therapie der Influenza (Start innerhalb von 48h!)",
            "drugs": [
              {
                "drug": "OSELTAMIVIR (Tamiflu)",
                "dose": "75mg twice daily p.o. for 5 days",
                "duration": "5 days",
                "note": "Neuraminidase-Hemmer. Indiziert in / with Risikopatienten / Severeeverlauf."
              },
              {
                "drug": "BALOXAVIR MARBOXIL (Xofluza)",
                "dose": "Einzeldosis 40mg (40-80kg) or 80mg (≥80kg) p.o.",
                "duration": "Einmalig",
                "note": "Capped-Endonuklease-Hemmer. Einmalige Einnahme!"
              }
            ]
          },
          "targeted": "Antivirale Therapie (Oseltamivir / Baloxavir) gestartet innerhalb von 48h verkürzt die Krankheitsdauer and senkt Komplikationen!",
          "supportive": [
            "Bettruhe, Feversenkung (Paracetamol/Ibuprofen)",
            "Flüssigkeitssubstitution"
          ],
          "prevention": [
            "Jährliche Quadrivalente Influenza-Schutzimpfung (Tot- or Lebendimpfstoff)"
          ],
          "guidelines": [
            "CDC / WHO Influenza Treatment Guidelines 2024/2025"
          ]
        },
        "prognosis": {
          "mortality": "<0.1% gesamt; bis 1-3% in / with Risikogruppen / bakterieller Superinfektion",
          "prognostic_scores": [],
          "factors": "Alter, Komorbiditäten"
        },
        "gallery": []
      },
      {
        "id": "covid19",
        "name": "COVID-19",
        "pathogen": {
          "type": "Virus",
          "name": "SARS-CoV-2 (Coronaviridae)",
          "gram": "None",
          "shape": "Behülltes Einzelstrang-RNA-Virus"
        },
        "epidemiology": {
          "incidence": "Pandemisch, mittlerweile endemische Wellen",
          "risk_groups": [
            "Ältere Menschen (>65 J.)",
            "Ungeimpfte",
            "Adipöse, Diabetiker, Immunsupprimierte"
          ],
          "seasonality": "Ganzjährig with Herbst-Winter-Gipfeln",
          "transmission": "Aerosole and Tröpfchen"
        },
        "pathomechanism": {
          "steps": [
            "Spike-Protein-Bindung an ACE2-Rezeptoren der Alveolarzellen Typ II and Endothelzellen.",
            "Endothelitis, Mikrovaskuläre Thrombosen and Hyperkoagulabilität.",
            "Hyperinflammation (Zytokinsturm), ARDS and Multiorganbefall."
          ],
          "virulence_factors": [
            "Spike-Protein (RBD-Domäne)",
            "Mpro / 3CLpro Protease"
          ]
        },
        "clinical": {
          "incubation": "2-5 days (Omikron-Varianten)",
          "onset": "Variabel",
          "symptoms": [
            {
              "name": "Respiratorische & Systemische Symptoms",
              "description": "Fever, Cough, Halsschmerzen, Fatigue, Anosmie/Ageusie (Geruchs-/Geschmacksverlust).",
              "severity": "moderate"
            },
            {
              "name": "Stille Hypoxie (Silent Hypoxia)",
              "description": "Gefährliche Abnahme der SpO2 without subjektive Atemnot!",
              "severity": "severe"
            },
            {
              "name": "Long-COVID / Post-COVID-Syndrom",
              "description": "Persistierende Fatigue, Belastungsintoleranz (ME/CFS), \"Brain Fog\" >12 weeks.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Hypoxämie, Lungenrasseln, Tachypnoe"
          ],
          "complications": [
            "ARDS",
            "Thromboembolien (Lungenarterienembolie, Schlaganfall)",
            "Zytokinsturm",
            "Long COVID"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "RT-PCR / Antigen-Schnelltest",
              "finding": "SARS-CoV-2 RNA / Antigen positiv",
              "interpretation": "Diagnosesicherung"
            },
            {
              "test": "D-Dimer, CRP, Ferritin, IL-6",
              "finding": "Erhöht in / with schwerem Verlauf",
              "interpretation": "Hyperinflammation / Thromboserisiko"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-CT",
              "finding": "Beidseitige Milchglastrübungen (Ground-glass), Crazy Paving, Konsolidierungen",
              "significance": "Charakteristisch"
            }
          ]
        },
        "differential": [
          {
            "disease": "Influenza / RSV",
            "distinguishing": "PCR Multiplex"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Empirice Therapie von COVID-19 (Leitlinien 2024/2025)",
            "drugs": [
              {
                "drug": "NIRMATRELVIR / RITONAVIR (Paxlovid)",
                "dose": "300mg/100mg twice daily p.o. for 5 days",
                "duration": "5 days",
                "note": "Für Hochrisikopatienten in den ersten 5 daysn p.o.!"
              },
              {
                "drug": "REMDESIVIR",
                "dose": "200mg day 1, dann 100mg day 2-3 i.v.",
                "duration": "3 days",
                "note": "Frühtherapie i.v. in / with Risikopatienten."
              },
              {
                "drug": "DEXAMETHASON",
                "dose": "6mg once daily p.o./i.v.",
                "duration": "10 days",
                "note": "ONLY IN PATIENTS REQUIRING OXYGEN!"
              },
              {
                "drug": "TOCILIZUMAB / BARICITINIB",
                "dose": "Tocilizumab 8mg/kg i.v. einmalig",
                "note": "Bei rascher Progression / Zytokinsturm."
              }
            ]
          },
          "targeted": "Frühtherapie with Paxlovid or Remdesivir in / with Risikopatienten. Dexamethason + Antikoagulation (LMWH) in / with Sauerstoffpflichtigkeit.",
          "supportive": [
            "Bauchlagerung (Prone positioning)",
            "Sauerstoffgabe / HFNC / Beatmung"
          ],
          "prevention": [
            "Angepasste mRNA-Impfungen (saisonal for Risikogruppen)"
          ],
          "guidelines": [
            "WHO / NIH / IDSA COVID-19 Treatment Guidelines 2024/2025"
          ]
        },
        "prognosis": {
          "mortality": "<0.1% ambulant; 5-15% in / with hospitalisierter Hypoxie",
          "prognostic_scores": [],
          "factors": "Alter, Immunsuppression, Ungeimpft"
        },
        "gallery": []
      },
      {
        "id": "tonsillitis",
        "name": "Acute Streptococcal Tonsillitis",
        "pathogen": {
          "type": "Bacterium / Virus",
          "name": "Streptococcus pyogenes (GABHS / Gruppe A Streptokokken - 15-30% in / with Kindern, 10% Erwachsene); Viruses: Adenoviren, EBV, Enteroviren (~70%)",
          "gram": "Gram-positive (GAS)",
          "shape": "Streptokokken"
        },
        "epidemiology": {
          "incidence": "Sehr häufig in / with Kindern (5-15 Jahre)",
          "risk_groups": [
            "Schulkinder"
          ],
          "seasonality": "Winter-Frühjahr",
          "transmission": "Tröpfchen- and Kontaktinfektion"
        },
        "pathomechanism": {
          "steps": [
            "Invasion der Gaumenmandeln (Tonsillae palatinae) durch Bakterien or Viruses.",
            "Eitrige Exsudation in den Tonsillenkrypten (Stippchen / Beläge).",
            "Toxinvermittelte Gewebeentzündung (Streptolysin O/S, Erythrogene Toxine in / with Scharlach)."
          ],
          "virulence_factors": [
            "M-Protein (Inhibition der Phagozytose)",
            "Streptolysin O/S",
            "Pyrogene Exotoxine (SPE)"
          ]
        },
        "clinical": {
          "incubation": "1-4 days",
          "onset": "Akut",
          "symptoms": [
            {
              "name": "Starke Halsschmerzen & Schluckschmerz",
              "description": "Odynophagie, bis in die Ohren ausstrahlend, hohes Fever.",
              "severity": "severe"
            },
            {
              "name": "No Cough",
              "description": "Fehlen von Cough ist ein Hauptkriterium for Bakterielle Tonsillitis (Centor Score)!",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Geschwollene, hyperämische Tonsillen with eitrigen Stippchen/Belägen, schmerzhafte anterior-zervikale Lymphknoten, Scharlach-Exanthem"
          ],
          "complications": [
            "Peritonsillarabszess (Trismus, gaumensegelabweichung)",
            "Rheumatische Fever (ARF)",
            "Poststreptokokken-Glomerulonephritis (PSGN)",
            "Lemierre-Syndrom"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "GAS-Schnelltest (RADT)",
              "finding": "Gruppe-A-Streptokokken Antigen positiv",
              "interpretation": "Hohe Spezifität (>95%)"
            },
            {
              "test": "Rachenabstrich-Kultur",
              "finding": "Wachstum von S. pyogenes",
              "interpretation": "Goldstandard"
            }
          ],
          "imaging": []
        },
        "calculators": [
          {
            "name": "McIsaac / Modifizierter Centor Score - GAS Pharyngitis Wahrscheinlichkeit",
            "items": [
              {
                "label": "Alter (3-14 J. = +1, 15-44 J. = 0, ≥45 J. = -1)",
                "points": 1
              },
              {
                "label": "Fever > 38°C",
                "points": 1
              },
              {
                "label": "Fehlen von Cough",
                "points": 1
              },
              {
                "label": "Schmerzhafte zervikale Lymphknoten",
                "points": 1
              },
              {
                "label": "Tonsillenschwellung or -exsudat",
                "points": 1
              }
            ],
            "interpretation": [
              {
                "min": 0,
                "max": 1,
                "text": "Geringes Risiko (<10%): None Antibiose, keine Testung."
              },
              {
                "min": 2,
                "max": 3,
                "text": "Mittleres Risiko (15-30%): GAS-Schnelltest/Kultur, Antibiose nur in / with Positivität."
              },
              {
                "min": 4,
                "max": 5,
                "text": "Hohes Risiko (50-60%): Empirice Antibiose or Schnelltest + Antibiose."
              }
            ]
          }
        ],
        "differential": [
          {
            "disease": "Infektiöse Mononukleose (EBV / Pfeiffersches Drüsenfieber)",
            "distinguishing": "Ganzkörper-Lymphknotenschwellung, Splenomegalie, Exanthem after Amoxicillin!"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Kausale Antibiose in / with GAS-Tonsillitis",
            "drugs": [
              {
                "drug": "PENICILLIN V (Phenoxymethylpenicillin)",
                "dose": "1 Mio. IE three times daily p.o. (Kinder: 50.000 IE/kg/Tag)",
                "duration": "10 VOLLE TAGE",
                "note": "1. WAHL! 10-Tage-Einnahme ist OBLIGATORISCH zur ARF-Prophylaxe!"
              },
              {
                "drug": "AMOXICILLIN",
                "dose": "500mg twice daily p.o.",
                "duration": "10 days",
                "note": "Alternativee 1. Wahl."
              },
              {
                "drug": "Cefadroxil / Cefuroxim",
                "dose": "500mg twice daily p.o.",
                "duration": "10 days",
                "note": "In penicillin allergy (nicht-anaphylaktisch)."
              },
              {
                "drug": "Azithromycin / Clarithromycin",
                "dose": "500mg day 1, dann 250mg day 2-5",
                "duration": "5 days",
                "note": "Bei schwerer Penicillinallergie."
              }
            ]
          },
          "targeted": "Penicillin V or Amoxicillin for 10 volle days zur Verhinderung des Akuten Rheumatischen Fevers!",
          "supportive": [
            "Analgetika (Ibuprofen / Paracetamol)",
            "Lokale Halstabletten"
          ],
          "prevention": [
            "Händehygiene"
          ]
        },
        "prognosis": {
          "mortality": "0%",
          "prognostic_scores": [
            "McIsaac / Centor Score"
          ],
          "factors": "Adhärenz bezüglich 10-Tage-Therapie"
        },
        "gallery": []
      },
      {
        "id": "sinusitis",
        "name": "Acute Rhinosinusitis",
        "pathogen": {
          "type": "Virus / Bacterium",
          "name": "Virale ARS (>90-98%): Rhinoviren, Influenzaviren; Bakterielle ABRS (2-10%): <i>Streptococcus pneumoniae</i>, <i>Haemophilus influenzae</i>, <i>Moraxella catarrhalis</i>",
          "gram": "Variabel",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Sehr häufig (Erwachsene 1-2 Episoden/Jahr)",
          "risk_groups": [
            "Allergiker",
            "Anatomische Varianten (Septumdeviation)",
            "Schwimmbäder"
          ],
          "seasonality": "Herbst-Winter",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Schleimhautschwellung verlegt die Sinusostien (Ostium-Verlegung).",
            "Sekretstau and Hypoxie in den Paranasalräumen, Störung der mukoziliären Klärung.",
            "Bakterielle Besiedlung des gestauten Sekrets (ABRS)."
          ],
          "virulence_factors": [
            "Pneumokokken-Kapsel",
            "BETA-Laktamase-Produktion (M. catarrhalis >90%, H. influenzae ~30%)"
          ]
        },
        "clinical": {
          "incubation": "Gefolgt auf Erkältungsinfekt",
          "onset": "Akut",
          "symptoms": [
            {
              "name": "Gesichtsschmerz & Druckgefühl",
              "description": "Verstärkung beim Bücken after vorne! Stirn-, Oberkiefer- or retroorbitaler Schmerz.",
              "severity": "moderate"
            },
            {
              "name": "Eitrige Rhinorrhö & Nasenatmungsbehinderung",
              "description": "Eitriges Nasensekret, Hyposmie/Anosmie.",
              "severity": "moderate"
            },
            {
              "name": "Bakterielle ABRS Zeichen",
              "description": "Zwei-Phasen-Verlauf (\"Double Sickening\" - Besserung gefolgt von Verschlechterung), anhaltende Symptoms >10 days, hohes Fever (>39°C).",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Druckschmerz über den Austrittspunkten der Nn. trigemini (N. infraorbitalis/supraorbitalis), eitriges Sekret im mittleren Nasengang"
          ],
          "complications": [
            "Orbitalphlegmone / Abszess (Notfall!)",
            "Epiduralabszess / Hirnabszess",
            "Sinus-cavernosus-Thrombose",
            "Pott's Puffy Tumor"
          ]
        },
        "diagnostics": {
          "laboratory": [],
          "imaging": [
            {
              "modality": "CT Nasennebenhöhlen (DVT / CT)",
              "finding": "Verschattung, Spiegelbildung, Schleimhautverdickung",
              "significance": "NUR in / with Komplikationen or Therapieversagen!"
            }
          ]
        },
        "differential": [
          {
            "disease": "Dentaler Infekt (Oberkieferzahn)",
            "distinguishing": "Zahnärztliches Konsil"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Therapie der Akuten Rhinosinusitis (EPOS 2020)",
            "drugs": [
              {
                "drug": "Topische Nasensteroide (Mometason / Fluticason)",
                "dose": "2 Sprühstöße pro Nasenloch twice daily",
                "duration": "14-21 days",
                "note": "1ST CHOICE IN VIRAL & BACTERIAL RHINOSINUSITIS!"
              },
              {
                "drug": "AMOXICILLIN or CO-AMOXICLAV (bei ABRS)",
                "dose": "Amoxicillin 3x500mg-1g p.o. OR Co-Amoxiclav 2x875/125mg p.o.",
                "duration": "5-7 days",
                "note": "Indiziert NUR in / with ABRS (Kriterien erfüllt)!"
              },
              {
                "drug": "Doxycyclin / Levofloxacin",
                "dose": "Doxycyclin 100mg twice daily p.o.",
                "duration": "5-7 days",
                "note": "In penicillin allergy."
              }
            ]
          },
          "targeted": "Virale ARS: Nasale Steroide + Salzwasserspülung + Abschwellende Nasentropfen (max 5 days). ABRS: Amoxicillin or Co-Amoxiclav 5-7 days.",
          "supportive": [
            "Nasenspülung with Isotoner Kochsalzlösung",
            "Analgetika"
          ],
          "prevention": [
            "Treatment allergischer Rhinitis"
          ],
          "guidelines": [
            "EPOS 2020 (European Position Paper on Rhinosinusitis)"
          ]
        },
        "prognosis": {
          "mortality": "<0.01%",
          "prognostic_scores": [],
          "factors": "Komplikationen"
        },
        "gallery": []
      },
      {
        "id": "otitis_media",
        "name": "Acute Otitis Media",
        "pathogen": {
          "type": "Bacterium / Virus",
          "name": "<i>Streptococcus pneumoniae</i>, Non-typeable <i>Haemophilus influenzae</i> (NTHi), <i>Moraxella catarrhalis</i>, Respiratorische Viruses",
          "gram": "Gram-positive / Gram-negative",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Sehr häufig in / with Säuglingen and Kleinkindern (6-24 months)",
          "risk_groups": [
            "Säuglinge <2 Jahre",
            "Kita-Kinder",
            "Passivrauch-Exposition",
            "Schnullergebrauch"
          ],
          "seasonality": "Winter-Frühjahr",
          "transmission": "Auszugehen von viraler Rhinitis via Eustachi-Röhre (Tuba auditiva)"
        },
        "pathomechanism": {
          "steps": [
            "Virale Atemwegsinfektion führt zur Dysfunktion der Tuba auditiva (Eustachi-Röhre).",
            "Unterdruck im Mittelohr, Einwanderung von Bakterien aus dem Nasen-Rachen-Raum.",
            "Eitrige Exsudation in der Paukenhöhle, Vorwölbung (Bulging) and Ischämie des Trommelfells.",
            "Unbehandelter Druckanstieg führt zur spontanen Trommelfellperforation and Otorrhö."
          ],
          "virulence_factors": [
            "Pneumokokken-Kapsel",
            "NTHi Biofilmbildung",
            "BETA-Laktamase-Produktion"
          ]
        },
        "clinical": {
          "incubation": "2-7 days after Erkältungsepidode",
          "onset": "Sudden, häufig nachts with stechenden Ohrenschmerzen",
          "symptoms": [
            {
              "name": "Klassische Kindheitssymptome",
              "description": "Suddene, stechende, hefstige Ohrenschmerzen (Otalgie), hohes Fever (≥38.5-39°C), Schallleitungsschwerhörigkeit.",
              "severity": "severe"
            },
            {
              "name": "Säuglings-Unspezifische Symptoms",
              "description": "Untröstliches Weinen, Unruhe, Nachtschreck, Greifen ans kranke Ohr (Ohrzwicken), Trinkverweigerung, Erbrechen.",
              "severity": "moderate"
            },
            {
              "name": "Otorrhö (Ohrfluss)",
              "description": "Nach spontaner Trommelfellperforation tritt eitriger Ohrfluss aus, begleitet von schlagartiger Linderung der Schmerzen!",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Otoskopie / Pneumatische Otoskopie (Goldstandard):",
            "  * Vorgewölbtes (bulging), rötlich/gelbliches, undurchsichtiges Trommelfell",
            "  * Starke Einschränkung or Aufhebung der Trommelfellbeweglichkeit",
            "  * Verstreichen der Lichtreflexes and der Hammergriff-Kontur",
            "Tragusdruckschmerz",
            "Rötung, Schwellung or Abstehen der Ohrmuschel über dem Mastoid weist auf eine MASTOIDITIS hin!"
          ],
          "complications": [
            "Akute Mastoiditis (Einschmelzung des Warzenfortsatzes - NOTFALL!)",
            "Fazialisparese",
            "Labyrinthitis & Sensorineuraler Hörverlust",
            "Intrakranielle Komplikationen (Epiduralabszess, Meningitis, Sinusthrombose)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild & CRP",
              "finding": "Leukozytose and CRP-Erhöhung (>40-80 mg/L) in / with schwerer AOM",
              "interpretation": "Bakterieller Nachweis"
            }
          ],
          "imaging": [
            {
              "modality": "Otoskopie / Otomikroskopie",
              "finding": "Vorgewölbtes, hyperämisches Trommelfell with verminderter Beweglichkeit",
              "significance": "Essentieller Goldstandard"
            },
            {
              "modality": "Felsenbein / Temporalkochen CT",
              "finding": "Verschattung der Mastoidzellen and knöcherne Destruktion",
              "significance": "NUR in / with Verdacht auf Mastoiditis!"
            }
          ],
          "microbiology": [
            {
              "test": "Ohrsekret-Kultur (nach Perforation / Parazentese)",
              "finding": "Pathogen and Antibiogramm",
              "significance": "Bei Targeteder Therapie / Rezidiv"
            }
          ]
        },
        "differential": [
          {
            "disease": "Otitis media serosa (OME / Paukenerguss)",
            "distinguishing": "KEINE akute Entzündung, kein Fever, keine Schmerzen! Bläschen/Flüssigkeitsspiegel hinter intaktem Trommelfell."
          },
          {
            "disease": "Otitis externa acuta (Gehörgangsentzündung)",
            "distinguishing": "Extremer Tragus-Druckschmerz and Ohrmuschel-Zugschmerz; Gehörgang geschwollen."
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "SYSTEMISCHE SCHMERZTHERAPIE (Ibuprofen / Paracetamol)",
                "dose": "Ibuprofen 10 mg/kg alle 6h OR Paracetamol 15 mg/kg alle 6h p.o./p.r.",
                "duration": "3-5 days",
                "note": "1. AND WICHTIGSTER SCHRITT DER AOM-THERAPIE! Sofortiger Start!"
              },
              {
                "drug": "\"WATCHFUL WAITING\" (Abwartende Haltung - AAP / ECDC)",
                "dose": "Konsequente Schmerztherapie + Kontrolluntersuchung after 48-72h",
                "duration": "48 hours",
                "note": "Anwendbar in / with Kinder ≥2 J. with milden einseitigen Symptomsn without Otorrhö!"
              },
              {
                "drug": "AMOXICILLIN (Hochdosiert p.o.)",
                "dose": "80-90 mg/kg/Tag p.o. in 2-3 Dosen (Erwachsene: 3x1000mg p.o.)",
                "duration": "10 days (<2 J.) / 5-7 days (≥2 J.)",
                "note": "1. WAHL ANTIBIOTIKUM! Sofort indiziert bei: Säuglingen <6 Mon., beidseitiger AOM <2 J., hohem Fever (≥39°C) or Otorrhö!"
              },
              {
                "drug": "Amoxicillin / Clavulansäure (Hochdosiert)",
                "dose": "90 mg/kg/Tag Amoxicillin-Anteil p.o.",
                "duration": "7-10 days",
                "note": "Indiziert in / with Amoxicillin-Gabe in den letzten 30 daysn, purulenter Konjunktivitis or Amoxicillin-Versagen after 48h."
              },
              {
                "drug": "Cefuroxim axetil / Azithromycin",
                "dose": "Cefuroxim 30 mg/kg/Tag p.o.; Azithromycin 10 mg/kg day 1, dann 5 mg/kg",
                "duration": "5-10 days",
                "note": "In penicillin allergy."
              }
            ],
            "inpatient": [
              {
                "drug": "Ceftriaxon i.v. / i.m.",
                "dose": "50 mg/kg i.v./i.m. once daily",
                "duration": "1-3 days",
                "note": "Bei erbrechenden Kindern or Therapieversagen."
              }
            ],
            "icu": [
              {
                "drug": "Parazentese (Trommelfellschnitt) + Mastoidektomie",
                "dose": "-",
                "duration": "-",
                "note": "Bei Mastoiditis or unerträglichen Schmerzen HNO-Myringotomie & Paukenröhrchen (Grommet)."
              }
            ]
          },
          "targeted": "Targetede Antibiose after Ohrsekretkultur. Hochdosiertes Amoxicillin ist Erstlinie.",
          "supportive": [
            "Orale Schmerztherapie (NSAID/Paracetamol)! Ohrfeuchte Tropfen in / with intaktem Trommelfell NICHT wirksam, in / with Perforation KONTRAINDIZIERT!",
            "Abschwellende Nasentropfen"
          ],
          "prevention": [
            "1. IMPFUNGEN:",
            "- PNEUMOKOKKEN-KONJUGATIMPFSTOFFE (PCV13, PCV15, PCV20): Seit Einführung sind invasive AOM-Episoden um >60-80% gesunken!",
            "- HAEMOPHILUS INFLUENZAE B (Hib) Impfung.",
            "- JÄHRLICHE INFLUENZA-IMPFUNG: Senkt pos-influenzale AOM um 30-50%.",
            "2. RISIKOREDUKTION: Stillen bis zum 6. month, Vermeidung von Passivrauch."
          ],
          "guidelines": [
            "AAP / NICE NG91 Otitis Media Guidelines"
          ]
        },
        "prognosis": {
          "mortality": "Unkompliziert 0%; in / with Mastoiditis / intrakraniellen Komplikationen 1-3%",
          "prognostic_scores": [
            "AOM Severity Score"
          ],
          "factors": "Alter <6 months, PCV-Impfstatus, adäquate Dosis Amoxicillin"
        },
        "gallery": []
      }
    ]
  }
});
