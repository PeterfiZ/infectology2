// Auto-generated updated Thorax_de.ts
Object.assign(window.diseases, {
  "bacterial_respiratory": {
    "name": "Bakterielle Atemwegsinfektionen",
    "icon": (window.diseaseMetadata?.bacterial_respiratory?.icon || '🫁'),
    "color": (window.diseaseMetadata?.bacterial_respiratory?.color || '#06b6d4'),
    "tables": [
      {
        "title": "Differentialdiagnose: Typische vs. Atypische Pneumonie",
        "headers": [
          "Merkmal",
          "Typische Pneumonie",
          "Atypische Pneumonie"
        ],
        "rows": [
          [
            "Beginn",
            "Plötzlich, dramatisch (Schüttelfrost)",
            "Langsam, schleichend (Prodrom)"
          ],
          [
            "Fieber",
            "Hoch (>39°C)",
            "Leichtes oder mäßiges Fieber"
          ],
          [
            "Brustschmerzen",
            "Pleuritisch, stechend (häufig)",
            "Retrosternal, brennend (seltener)"
          ],
          [
            "Husten",
            "Produktiv",
            "Trocken, unproduktiv, quälend"
          ],
          [
            "Auswurf",
            "Eitrig, rostbraun",
            "Wenig, schleimig oder fehlend"
          ],
          [
            "Pleuraerguss",
            "Häufig (parapneumonisch)",
            "Selten"
          ],
          [
            "Radiologie",
            "Lobär-/Segmentkonsolidierung, Aerogramm",
            "Interstitiell, Milchglas, diffus, fleckig"
          ],
          [
            "Extrapulmonale Symptome",
            "Selten (außer septische Streuung)",
            "Häufig (Kopfschmerzen, Myalgie, Ohr/Hals, GI, Ausschlag)"
          ],
          [
            "Labor (Leukozyten)",
            "Leukozytose, Linksverschiebung",
            "Normal oder leichte Leukozytose"
          ],
          [
            "Labor (CRP/PCT)",
            "Deutlich erhöht (PCT >0.5)",
            "Mäßig erhöht (PCT <0.25)"
          ],
          [
            "Labor (Leberenzyme)",
            "Meist normal",
            "Oft erhöht (AST, ALT)"
          ],
          [
            "Erreger",
            "<i>S. pneumoniae, H. influenzae, M. catarrhalis, S. aureus, Klebsiella</i>",
            "<i>Mycoplasma, Chlamydia, Legionella, Coxiella</i>, Viren"
          ]
        ]
      }
    ],
    "diseases": [
      {
        "id": "bacterial_pneumonia",
        "name": "Bakterielle Pneumonie",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Streptococcus pneumoniae</i>",
          "gram": "Gram-positiv",
          "shape": "Diplokokken"
        },
        "epidemiology": {
          "incidence": "Häufigster Erreger der ambulant erworbenen Pneumonie (CAP) (30-40%)",
          "risk_groups": [
            "Personen über 65 Jahre",
            "Patienten mit chronischen Erkrankungen (COPD, Herzinsuffizienz, Diabetes)",
            "Immungeschwächte",
            "Splenektomierte Patienten",
            "Alkoholkranke",
            "Raucher"
          ],
          "seasonality": "Winter-Frühling-Gipfel, oft Influenza-Superinfektion",
          "transmission": "Tröpfcheninfektion, endogene Aktivierung"
        },
        "pathomechanism": {
          "steps": [
            "Die Infektion beginnt in der Regel mit der Mikroaspiration von Bakterien, die die oberen Atemwege besiedeln. Die Virulenzfaktoren des Erregers (z.B. Kapsel) helfen, die Abwehrmechanismen des Wirts (z.B. Phagozytose) zu umgehen.",
            "Die Bakterien vermehren sich in den Alveolen und lösen eine heftige Entzündungsreaktion aus. Freigesetzte Toxine (z.B. Pneumolysin) schädigen die Epithelzellen.",
            "Entzündungszellen (Neutrophile), rote Blutkörperchen und Fibrin füllen die Alveolen, was zur Konsolidierung des Lungengewebes führt. Dieser Prozess ist für das charakteristische Bild der Lobärpneumonie verantwortlich."
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
          "incubation": "1-3 Tage",
          "onset": "Plötzlich mit dramatischem Beginn",
          "symptoms": [
            {
              "name": "Plötzlicher Beginn",
              "description": "Gekennzeichnet durch hohes Fieber, Schüttelfrost und allgemeines Krankheitsgefühl.",
              "severity": "severe"
            },
            {
              "name": "Respiratorische Symptome",
              "description": "Anfänglich trockener Husten, der später produktiv wird und typischerweise mit rostbraunem Auswurf einhergeht. Pleuritische, stechende Brustschmerzen und Atemnot sind häufig.",
              "severity": "moderate"
            },
            {
              "name": "Atypische Präsentation",
              "description": "Bei älteren Menschen kann Fieber fehlen; eine Bewusstseinsstörung kann das führende Symptom sein.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Tachypnoe, Tachykardie",
            "Dämpfung bei Perkussion über dem betroffenen Lappen",
            "Bronchialatmen, Rasselgeräusche (Crepitatio)",
            "Erhöhte Bronchophonie und Stimmfremitus",
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
              "interpretation": "Typisch für bakterielle Infektion"
            },
            {
              "test": "CRP",
              "finding": "Deutlich erhöht (>100 mg/L)",
              "interpretation": "Marker für aktive Entzündung"
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
              "interpretation": "Erregeridentifikation"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen (PA+seitlich)",
              "finding": "Lobär-/Segmentkonsolidierung, Aerogramm",
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
              "finding": "Gram+ lanzettförmige Diplokokken, >25 Neutrophile/Gesichtsfeld",
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
            "name": "CURB-65 Score - Pneumonie-Schweregrad",
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
                "label": "Blutdruck (Syst < 90 oder Diast ≤ 60 mmHg)",
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
                "text": "Niedriges Risiko (Mortalität <3%). Ambulante Behandlung erwägen."
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
            "distinguishing": "Hyponatriämie, GI-Symptome, atypisches Röntgenbild"
          },
          {
            "disease": "Klebsiella-Pneumonie",
            "distinguishing": "Alkoholkranke, dunkler pflaumenmusartiger Auswurf, Oberlappen"
          },
          {
            "disease": "Mykoplasmen-Pneumonie",
            "distinguishing": "Junge Patienten, schleichender Beginn, atypische Symptome"
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
            "Ungarische Gesellschaft für Infektiologie / DGI"
          ],
          "empirical": {
            "cap_outpatient": {
              "title": "CAP - Ambulant behandelbar (Leicht - CURB-65 0-1)",
              "drugs": [
                {
                  "drug": "Amoxicillin",
                  "dose": "3x500mg-1g p.o.",
                  "duration": "5 Tage",
                  "note": "Mittel der 1. Wahl (NICE). 5-Tage-Therapie i.d.R. ausreichend."
                },
                {
                  "drug": "Doxycyclin",
                  "dose": "200mg initial, dann 1x100mg p.o.",
                  "duration": "5 Tage",
                  "note": "Bei Penicillinallergie."
                },
                {
                  "drug": "Clarithromycin",
                  "dose": "2x500mg p.o.",
                  "duration": "5 Tage",
                  "note": "Alternativ."
                }
              ]
            },
            "cap_inpatient": {
              "title": "CAP - Stationär (Mittelschwer - CURB-65 2)",
              "drugs": [
                {
                  "drug": "Amoxicillin + Clarithromycin",
                  "dose": "3x500mg-1g p.o./i.v. + 2x500mg p.o./i.v.",
                  "duration": "5 Tage",
                  "note": "Atypische Abdeckung erforderlich (NICE)."
                },
                {
                  "drug": "Doxycyclin",
                  "dose": "200mg initial, dann 1x100mg p.o.",
                  "duration": "5 Tage",
                  "note": "Monotherapie bei Penicillinallergie."
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "1x500mg p.o./i.v.",
                  "duration": "5 Tage",
                  "note": "Respiratorisches Fluorchinolon."
                }
              ]
            },
            "cap_icu": {
              "title": "CAP - Schwer (CURB-65 3-5) / Intensivstation",
              "drugs": [
                {
                  "drug": "Co-Amoxiclav + Clarithromycin",
                  "dose": "1.2g i.v. alle 8h + 500mg i.v. alle 12h",
                  "duration": "7-10 Tage",
                  "note": "NICE Empfehlung bei schwerer CAP."
                },
                {
                  "drug": "Ceftriaxon + Clarithromycin",
                  "dose": "1x2g i.v. + 2x500mg i.v.",
                  "duration": "7-10 Tage",
                  "note": "Häufige Alternative."
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "1x500mg i.v.",
                  "duration": "7-10 Tage",
                  "note": "Bei Beta-Laktam-Allergie."
                }
              ]
            },
            "hap_early": {
              "title": "HAP - Nicht schwer / Frühbeginn",
              "drugs": [
                {
                  "drug": "Co-Amoxiclav",
                  "dose": "625mg p.o. 3x/Tag oder 1.2g i.v. 3x/Tag",
                  "duration": "5 Tage",
                  "note": "Mittel der Wahl (NICE NG191)."
                },
                {
                  "drug": "Doxycyclin",
                  "dose": "100mg p.o.",
                  "duration": "5 Tage",
                  "note": "Alternative."
                }
              ]
            },
            "hap_late_vap": {
              "title": "HAP - Schwer / VAP / Hohes Risiko",
              "drugs": [
                {
                  "drug": "Antipseudomonas Beta-Laktam",
                  "dose": "z.B. Piperacillin/Tazobactam, Cefepim, Meropenem",
                  "duration": "7 Tage",
                  "note": "Komponente 1 (Gram-negative Abdeckung)."
                },
                {
                  "drug": "+ Antipseudomonas Fluorchinolon oder Aminoglykosid",
                  "dose": "z.B. Ciprofloxacin, Amikacin",
                  "duration": "7 Tage",
                  "note": "Komponente 2 (Dual Gram-negative Abdeckung)."
                },
                {
                  "drug": "+ MRSA-Abdeckung",
                  "dose": "Vancomycin oder Linezolid",
                  "duration": "7 Tage",
                  "note": "Komponente 3 (bei MRSA-Risiko >10-20%)."
                }
              ]
            },
            "vap_stenotrophomonas": {
              "title": "VAP - Stenotrophomonas maltophilia (Gezielt)",
              "drugs": [
                {
                  "drug": "Trimethoprim/Sulfamethoxazol (TMP-SMX)",
                  "dose": "15-20 mg/kg/Tag (TMP) i.v. in 3-4 Einzeldosen",
                  "duration": "14 Tage",
                  "note": "1. Wahl. Hohe Dosis erforderlich!"
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "750 mg i.v. 1x/Tag",
                  "duration": "14 Tage",
                  "note": "Alternative."
                },
                {
                  "drug": "Cefiderocol",
                  "dose": "2g i.v. alle 8h",
                  "duration": "14 Tage",
                  "note": "Reserveantibiotikum."
                }
              ]
            }
          },
          "targeted": "Penicillinsensibel: Penicillin G 4x4 Mio. IE i.v.; Resistent: Ceftriaxon oder Vancomycin",
          "supportive": [
            "O2-Therapie (SpO2 >92%)",
            "Flüssigkeitssubstitution",
            "Fiebersenkung",
            "Thoraxdrainage bei Empyem"
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
            "caption": "Gram-positive, lanzettförmige Diplokokken im Sputumpräparat.",
            "type": "Mikroskopie"
          }
        ]
      },
      {
        "id": "mediastinitis",
        "name": "Mediastinitis",
        "pathogen": {
          "type": "Bakterium",
          "name": "Polymikrobiell, häufig <i>Staphylococcus aureus</i>, Streptokokken, Gram-negative Stäbchen, Anaerobier",
          "gram": "Gemischt",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Seltene, aber lebensbedrohliche Komplikation",
          "risk_groups": [
            "Postoperative Patienten",
            "Nach endoskopischen Eingriffen",
            "Oropharyngeale Infektionen",
            "Trauma",
            "Odontogene Infektionen",
            "Immunsuppression"
          ],
          "seasonality": "Keine",
          "transmission": "Fortleitung aus benachbartem Gewebe, chirurgische oder endoskopische Intervention"
        },
        "pathomechanism": {
          "steps": [
            "Das Mediastinum kann von benachbarten Geweben aus infiziert werden (z.B. Rachen, Speiseröhre, Zahn, Thoraxwand), nach Endoskopie, Operation oder Trauma.",
            "Die bakterielle Ausbreitung führt zu eitriger Entzündung, Gewebsnekrose und Abszessbildung im Mediastinum.",
            "Der Prozess führt zu Phlegmone, Zellnekrose und systemischer Entzündungsreaktion, die zu schwerer Sepsis, Schock und Multiorganversagen führen kann."
          ],
          "virulence_factors": [
            "Biofilm",
            "Toxine",
            "Polymikrobielle Gemeinschaft",
            "Gewebsnekrose"
          ]
        },
        "clinical": {
          "incubation": "Variabel, häufig wenige Tage bis Wochen",
          "onset": "Akut oder subakut",
          "symptoms": [
            {
              "name": "Brustschmerzen",
              "description": "Leitsymptom, häufig stark, retrosternal/retrocardial, teilweise mit Schluckbeschwerden",
              "severity": "severe"
            },
            {
              "name": "Fieber und B-Symptomatik",
              "description": "Entzündlicher Zustand, Tachykardie und Fieber charakteristisch",
              "severity": "severe"
            },
            {
              "name": "Schluckbeschwerden / Heiserkeit",
              "description": "Mediastinale Entzündung oder Abszess kann Ösophagus und Larynxbereich betreffen",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Fieber, Tachykardie, Leukozytose",
            "Zervikale oder supratrachiale Schwellung",
            "Brustschmerzen, Schluckbeschwerden",
            "Hypotonie und Sepsiszeichen im schweren Verlauf"
          ],
          "complications": [
            "Septischer Schock",
            "Mediastinalabszess",
            "Ösophagusperforation",
            "Aorten- oder Großgefäßerosion",
            "Pleuraempyem",
            "Tod"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild, CRP, PCT",
              "finding": "Entzündung, häufig hohes PCT",
              "interpretation": "Schwere Entzündung/Infektion"
            },
            {
              "test": "Blutkultur",
              "finding": "Kann positiv sein",
              "interpretation": "Verdacht auf Sepsis oder hämatogene Streuung"
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
              "finding": "Mediastinale Aufweitung, evtl. Pleuraerguss",
              "significance": "Erster Schritt, aber weniger spezifisch"
            }
          ],
          "microbiology": [
            {
              "test": "Chirurgische/Bronchoskopische Probenahme",
              "finding": "Kultur und PCR",
              "significance": "Gezielte Therapie und Resistenz"
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
                "dose": "4.5g i.v. 3x/Tag",
                "duration": "Stationär/i.v.",
                "note": "Breites Spektrum, häufige 1. Wahl"
              },
              {
                "drug": "+ Vancomycin",
                "dose": "15-20 mg/kg i.v. 2x/Tag",
                "duration": "",
                "note": "MRSA-Abdeckung"
              },
              {
                "drug": "+ Clindamycin oder Metronidazol",
                "dose": "600mg i.v. 3x/Tag",
                "duration": "",
                "note": "Anaerobe Abdeckung"
              }
            ],
            "icu": [
              {
                "drug": "Meropenem",
                "dose": "1g i.v. 3x/Tag",
                "duration": "",
                "note": "Schwerer, kritischer Zustand"
              },
              {
                "drug": "+ Vancomycin",
                "dose": "15-20 mg/kg i.v. 2x/Tag",
                "duration": "",
                "note": "MRSA/G+ Abdeckung"
              }
            ]
          },
          "targeted": "Anpassung nach Kultur und Empfindlichkeit; Quellensanierung und chirurgische Drainage entscheidend.",
          "supportive": [
            "Dringendes chirurgisches Konsil",
            "i.v. Flüssigkeitssubstitution",
            "Vasopressoren bei schwerer Sepsis",
            "Ernährung",
            "Atemwegsunterstützung"
          ],
          "prevention": [
            "Antibiotikaprophylaxe vor Eingriffen",
            "Aseptische Mütungstechnik",
            "Behandlung von Zahn- und Pharynxinfektionen"
          ]
        },
        "prognosis": {
          "mortality": "10-40% je nach Ursache und Behandlungsbeginn",
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
            "caption": "Thorax-CT mit Mediastinalverbreiterung und Abszessbildung.",
            "type": "CT Bildgebung"
          }
        ]
      },
      {
        "id": "tuberculosis",
        "name": "Lungentuberkulose",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Mycobacterium tuberculosis</i> Complex",
          "gram": "Säurefest",
          "shape": "Stäbchen"
        },
        "epidemiology": {
          "incidence": "Weltweit ca. 10.6 Mio. Erkrankungen/Jahr, führende infektionsbedingte Todesursache",
          "risk_groups": [
            "HIV-Infizierte",
            "Immunsupprimierte",
            "Migranten aus Hochendemiegebieten",
            "Obdachlose",
            "Diabetiker"
          ],
          "seasonality": "Keine",
          "transmission": "Tröpfcheninfektion (aerogen)"
        },
        "pathomechanism": {
          "steps": [
            "Inhalation von Mycobacterium tuberculosis Aerosolen in die Alveolen.",
            "Phagozytose durch Alveolarmakrophagen. Hemmung der Phagolysosomenfusion, Bildung des Ghon-Primärkomplexes.",
            "T-Zell-Aktivierung, Granulombildung mit verkäsender Nekrose. Latenz oder Progression zu aktiver Tuberkulose."
          ],
          "virulence_factors": [
            "Mycolsäuren",
            "Cord-Faktor",
            "ESX-1 Sekretionssystem"
          ]
        },
        "clinical": {
          "incubation": "Monate bis Jahrzehnte (Latenz); primär 2-12 Wochen",
          "onset": "Schleichend",
          "symptoms": [
            {
              "name": "B-Symptomatik",
              "description": "Nachtschweiß, Gewichtsverlust, leichtes Fieber, Fatigue.",
              "severity": "moderate"
            },
            {
              "name": "Respiratorische Symptome",
              "description": "Chronischer Husten (>2-3 Wochen), Bluthusten (Hämoptoe), Brustschmerzen.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Kachexie, Rasselgeräusche über den Lungenoberlappen, Dämpfung bei Erguss"
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
              "finding": "Säurefeste Stäbchen im Sputum",
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
                "dose": "5 mg/kg p.o. 1x/Tag + B6 25-50mg/Tag",
                "duration": "2 Monate Initial + 4 Monate Kontinuation",
                "note": "Pyridoxin zur Neuropathie-Prophylaxe."
              },
              {
                "drug": "Rifampicin (R)",
                "dose": "10 mg/kg p.o. 1x/Tag",
                "duration": "2 Monate + 4 Monate",
                "note": "Rot-orange Verfärbung von Körperflüssigkeiten."
              },
              {
                "drug": "Pyrazinamid (Z)",
                "dose": "20-30 mg/kg p.o. 1x/Tag",
                "duration": "2 Monate Initialphase",
                "note": "Hepatotoxisch."
              },
              {
                "drug": "Ethambutol (E)",
                "dose": "15-20 mg/kg p.o. 1x/Tag",
                "duration": "2 Monate Initialphase",
                "note": "Optikusneuritis-Risiko."
              }
            ]
          },
          "targeted": "2 Monate 2HRZE, gefolgt von 4 Monaten 2HR (Gesamtdauer 6 Monate). Bei MDR-TB BPaLM-Schema (Bedaquilin + Pretomanid + Linezolid + Moxifloxacin) für 6 Monate (WHO 2024)!",
          "supportive": [
            "Isolierung (Unterdruckzimmer)",
            "Beobachtete Einnahme (DOTS)",
            "Leberwertkontrollen"
          ],
          "prevention": [
            "Kontaktpersonen-Nachverfolgung",
            "Behandlung der latenten TB (LTBI) mit 3HP oder 4R"
          ]
        },
        "prognosis": {
          "mortality": "Heilungsrate >95% bei Adhärenz",
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
        "name": "Legionellen-Pneumonie (Legionärskrankheit)",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Legionella pneumophila</i>",
          "gram": "Gram-negativ",
          "shape": "Stäbchen"
        },
        "epidemiology": {
          "incidence": "2-10% aller hospitalisierten CAP-Fälle",
          "risk_groups": [
            "Personen >50 J.",
            "Raucher",
            "Chronische Herzkranke/Lungenkranke",
            "Reisende"
          ],
          "seasonality": "Sommer-Herbst",
          "transmission": "Aerosolinhalation aus Wassersystemen (Duschen, Kühltürme). Keine Mensch-zu-Mensch-Übertragung!"
        },
        "pathomechanism": {
          "steps": [
            "Inhalation von Legionellen-Aerosolen.",
            "Phagozytose durch Alveolarmakrophagen, intrazelluläre Vermehrung im Phagolysosom.",
            "Nekrotisierende Lobärpneumonie mit Zytokinfreisetzung."
          ],
          "virulence_factors": [
            "Dot/Icm Typ-IV Sekretionssystem",
            "Mip-Protein"
          ]
        },
        "clinical": {
          "incubation": "2-10 Tage (Legionärskrankheit); 24-48h (Pontiac-Fieber)",
          "onset": "Akut, rasch progredient",
          "symptoms": [
            {
              "name": "Hohes Fieber & Schüttelfrost",
              "description": "Gefolgt von unproduktivem oder eitrigem Husten.",
              "severity": "severe"
            },
            {
              "name": "Gastrointestinale Symptome",
              "description": "Wässrige Diarrhö (30-50%), Bauchschmerzen.",
              "severity": "moderate"
            },
            {
              "name": "ZNS-Symptome",
              "description": "Kopfschmerzen, Verwirrtheit, Delir.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Hohes Fieber, relative Bradykardie (Faget-Zeichen), Rasselgeräusche, Verwirrtheit"
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
            "name": "CURB-65 Score - Pneumonie-Schweregrad",
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
                "label": "Blutdruck (Syst < 90 oder Diast ≤ 60 mmHg)",
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
            "distinguishing": "Keine Diarrhö/Verwirrtheit, Urin-Antigen"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Gezielte Antibiose bei Legionellose",
            "drugs": [
              {
                "drug": "Levofloxacin",
                "dose": "500-750 mg p.o./i.v. 1x/Tag",
                "duration": "7-14 Tage",
                "note": "1. Wahl! Schnelle Bakterizidie."
              },
              {
                "drug": "Azithromycin",
                "dose": "500 mg p.o./i.v. 1x/Tag",
                "duration": "5-10 Tage",
                "note": "Sehr gut wirksame Alternative."
              }
            ]
          },
          "targeted": "Levofloxacin oder Azithromycin. Beta-Laktame sind unwirksam!",
          "supportive": [
            "O2-Gabe",
            "Ausgleich der Hyponatriämie"
          ],
          "prevention": [
            "Thermische Desinfektion von Wassersystemen (>60°C)"
          ]
        },
        "prognosis": {
          "mortality": "5-10% unter Therapie; bis 30% bei Immunsuppression",
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
        "name": "Mykoplasmen-Pneumonie",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Mycoplasma pneumoniae</i>",
          "gram": "Keine Gram-Färbung",
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
            "Kälteagglutinin-Bildung (IgM gegen I-Antigen), hämolytische Anämie, Erythema multiforme / MIRM."
          ],
          "virulence_factors": [
            "P1-Adhäsin",
            "CARDS-Toxin"
          ]
        },
        "clinical": {
          "incubation": "1-3 Wochen",
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
                "dose": "500mg Tag 1, dann 250mg Tag 2-5 p.o.",
                "duration": "5 Tage",
                "note": "1. Wahl bei Kindern und Erwachsenen."
              },
              {
                "drug": "Doxycyclin",
                "dose": "100mg 2x/Tag p.o.",
                "duration": "7-10 Tage",
                "note": "Alternative bei Erwachsenen."
              }
            ]
          },
          "targeted": "Makrolide, Doxycyclin oder Fluorchinolone. Beta-Laktame sind wirkungslos!",
          "supportive": [
            "Symptomatische Hustendämpfung"
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
        "name": "Chlamydia pneumoniae",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Chlamydia pneumoniae</i>",
          "gram": "Gram-negativ",
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
          "incubation": "3-4 Wochen",
          "onset": "Biphasisch",
          "symptoms": [
            {
              "name": "Pharyngitis & Bronchitis",
              "description": "Erst Pharyngitis/Heiserkeit, dann Wochen später Bronchitis/Pneumonie.",
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
              "interpretation": "Mittel der Wahl"
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
                "dose": "100mg 2x/Tag p.o.",
                "duration": "10-14 Tage",
                "note": "1. Wahl."
              },
              {
                "drug": "Azithromycin",
                "dose": "500mg Tag 1, 250mg Tag 2-5",
                "duration": "5 Tage",
                "note": "Alternative."
              }
            ]
          },
          "targeted": "Doxycyclin oder Makrolide.",
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
        "name": "Ornithose (Psittakose)",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Chlamydia psittaci</i>",
          "gram": "Gram-negativ",
          "shape": "Kugelförmig"
        },
        "epidemiology": {
          "incidence": "Seltene Zoonose",
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
          "incubation": "1-2 Wochen",
          "onset": "Plötzlich",
          "symptoms": [
            {
              "name": "Sehr starke Kopfschmerzen",
              "description": "Mit hohem Fieber, Schüttelfrost und trockenem Husten.",
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
            "disease": "Q-Fieber",
            "distinguishing": "Viehkontakt vs. Vogelkontakt"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Therapie der Ornithose",
            "drugs": [
              {
                "drug": "Doxycyclin",
                "dose": "100mg 2x/Tag p.o.",
                "duration": "10-14 Tage",
                "note": "Mittel der 1. Wahl!"
              }
            ]
          },
          "targeted": "Doxycyclin 100mg 2x/Tag für 10-14 Tage.",
          "supportive": [
            "Symptomatische Maßnahmen"
          ],
          "prevention": [
            "Quarantäne für Importvögel"
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
        "name": "Q-Fieber",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Coxiella burnetii</i>",
          "gram": "Gram-negativ",
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
          "incubation": "2-3 Wochen",
          "onset": "Plötzlich",
          "symptoms": [
            {
              "name": "Retroorbitale Kopfschmerzen",
              "description": "Extrem stark, mit hohem Fieber, Myalgien und Pneumonie/Hepatitis.",
              "severity": "severe"
            },
            {
              "name": "Chronisches Q-Fieber",
              "description": "Kultur-negative Endokarditis bei Klappenpatienten.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Relative Bradykardie, Hepatomegalie"
          ],
          "complications": [
            "Chronische Q-Endokarditis, Q-Fieber-Erschöpfungssyndrom"
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
            "title": "Therapie des Q-Fiebers",
            "drugs": [
              {
                "drug": "Doxycyclin (Akut)",
                "dose": "100mg 2x/Tag p.o.",
                "duration": "14 Tage",
                "note": "1. Wahl!"
              },
              {
                "drug": "Doxycyclin + Hydroxychloroquin (Chronische Endokarditis)",
                "dose": "100mg 2x/Tag + 200mg 3x/Tag",
                "duration": "≥18-24 Monate",
                "note": "Hydroxychloroquin alkalisiert das Phagolysosom."
              }
            ]
          },
          "targeted": "Akut: Doxycyclin 14 Tage. Chronisch: Doxycyclin + Hydroxychloroquin ≥18-24 Monate.",
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
    "name": "Kardiovaskuläre Infektionen",
    "icon": (window.diseaseMetadata?.cardiovascular?.icon || '🫀'),
    "color": (window.diseaseMetadata?.cardiovascular?.color || '#b91c1c'),
    "diseases": [
      {
        "id": "endocarditis",
        "name": "Infektiöse Endokarditis",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Staphylococcus aureus</i> (30-40%), Viridans-Streptokokken, Enterokokken, CoNS, HACEK-Gruppe",
          "gram": "Überwiegend Gram-positiv",
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
          "seasonality": "Keine",
          "transmission": "Bakteriämie nach zahnärztlichen, chirurgischen oder endovaskulären Eingriffen / Hautverletzungen"
        },
        "pathomechanism": {
          "steps": [
            "Endothelschaden der Herzklappe, Bildung einer nicht-bakteriellen thrombotischen Endokarditis (NBTE).",
            "Transiente Bakteriämie führt zur Erregeranheftung (Fibronektin-bindende Proteine) und Kolonisierung.",
            "Bakterienvermehrung, Fibrin- und Thrombozytenablagerung bilden infizierte VEGETATIONEN. Klappendestruktion, Abszessbildung und embolische Streuung (Gehirn, Milz, Niere, Haut)."
          ],
          "virulence_factors": [
            "Biofilmbildung",
            "Fibronektin-bindendes Protein A (FnBPA)",
            "Clumping-Faktor",
            "Enterokokken-Ebp-Pili"
          ]
        },
        "clinical": {
          "incubation": "Tage bis Wochen (S. aureus akut; Strep/Enterokokken subakut)",
          "onset": "Akut fulminant oder subakut schleichend",
          "symptoms": [
            {
              "name": "Fieber & Neues Herzgeräusch",
              "description": "Gekennzeichnet durch unklares Fieber, Schüttelfrost und ein neu aufgetretenes Regurgitationsgeräusch (Klappeninsuffizienz).",
              "severity": "severe"
            },
            {
              "name": "Embolische Phänomene",
              "description": "Schlaganfall, miliare Milz-/Niereninfarkte, Janeway-Läsionen (schmerzlose erythematöse Flecken an Handflächen/Fußsohlen).",
              "severity": "severe"
            },
            {
              "name": "Immunologische Phänomene",
              "description": "Osler-Knötchen (schmerzhafte Knötchen an Finger-/Zehenkuppen), Roth-Spots (Netzhautblutungen mit hellem Zentrum), Glomerulonephritis.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Neues oder sich veränderndes Herzgeräusch",
            "Janeway-Läsionen, Osler-Knötchen, Splitterblutungen unter den Nägeln",
            "Splenomegalie, Petechien der Konjunktiven",
            "Neurologische Ausfälle bei septischer Embolie"
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
                "Hauptkriterium 1 (Mikrobiologie): Typische Erreger in min. 2 separaten Blutkulturen (S. aureus, Viridans-Strep, S. gallolyticus, Enterokokken, HACEK) oder Coxiella burnetii Phase-I-IgG >1:800",
                "Hauptkriterium 2 (Bildgebung): TTE/TEE positiv für Vegetation, Abszess, Pseudoaneurysma, Klappenperforation ODER 18F-FDG PET/CT / Kardio-CT positiv für paravalvuläre Läsionen",
                "Nebenkriterien: Prädisposition (Herzklappe, i.v.-Drogen), Fieber ≥38°C, vaskuläre Phänomene (Embolien, Janeway), immunologische Phänomene (Osler, Roth, RF), mikrobiologischer Hinweis"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "Blutkulturen (HK)",
              "finding": "Mindestens 3 HK-Sets im Abstand von 30 Min. VOR Antibiose!",
              "interpretation": "Essenziell für gezielte Therapie"
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
              "modality": "18F-FDG PET/CT oder SPECT/CT",
              "finding": "Hypermetabole paravalvuläre Herde bei Klappenprothesen",
              "significance": "ESC 2023 Hauptkriterium bei Prothesenendokarditis!"
            },
            {
              "modality": "Kopf-/Abdomen-MRT",
              "finding": "Stumme septische Embolien (Gehirn, Milz, Niere)",
              "significance": "Staging und Embolierisiko"
            }
          ]
        },
        "differential": [
          {
            "disease": "Nicht-bakterielle thrombotische Endokarditis (NBTE / Marantisch)",
            "distinguishing": "Marantius bei Tumorpatienten, sterile Blutkulturen, kein Fieber"
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
            "title": "Empirische Antibiose bei akuter Infektiöser Endokarditis (ESC 2023)",
            "drugs": [
              {
                "drug": "Native Klappe: Ampicillin + Oxacillin/Flucloxacillin + Ceftriaxon",
                "dose": "Ampicillin 12g/Tag i.v. in 4-6 Dosen + Flucloxacillin 12g/Tag i.v. in 4-6 Dosen + Ceftriaxon 2g i.v. 1x/Tag",
                "duration": "4-6 Wochen",
                "note": "Deckt S. aureus, Streptokokken und Enterokokken ab."
              },
              {
                "drug": "Klappenprothese (<1 Jahr postop): Vancomycin + Gentamicin + Rifampicin",
                "dose": "Vancomycin 30-60 mg/kg/Tag i.v. + Gentamicin 3 mg/kg/Tag i.v. + Rifampicin 900mg/Tag p.o. in 3 Dosen",
                "duration": "Mindestens 6 Wochen",
                "note": "Rifampicin greift Fremdkörper-Biofilm an!"
              }
            ]
          },
          "targeted": "Streptokokken (Penicillin G 4-6 Wochen oder Ceftriaxon + Gentamicin 2 Wochen); MSSA (Flucloxacillin 4-6 Wochen); MRSA (Vancomycin oder Daptomycin 10mg/kg/Tag); Enterococcus faecalis (Ampicillin 12g/Tag + Ceftriaxon 4g/Tag für 6 Wochen).",
          "supportive": [
            "Dringendes herzchirurgisches Konsil (Indikationen: Refraktäre Herzinsuffizienz, unkontrollierte Infektion/Abszess, Embolieprävention bei Vegetation >10mm)"
          ],
          "prevention": [
            "Endokarditisprophylaxe mit Amoxicillin 2g p.o. 30-60 Min. vor zahnärztlichen Eingriffen NUR bei HÖCHSTRISIKOPATIENTEN (Klappenersatz, Z.n. IE, angeborene Herzfehler mit Shunt)!"
          ]
        },
        "prognosis": {
          "mortality": "15-20% In-Hospital Mortalität; 30% 1-Jahres-Mortalität",
          "prognostic_scores": [
            "ESC Endocarditis Risk Score"
          ],
          "factors": "S. aureus Erreger, Herzinsuffizienz, Paravalvulärabszess, hohes Alter"
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
        "name": "CIED-Infektion (Schrittmacher / ICD / CRT)",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Staphylococcus epidermidis</i> / CoNS (50-70%), <i>Staphylococcus aureus</i> (25%), Cutibacterium acnes, Gram-negative Stäbchen",
          "gram": "Gram-positiv",
          "shape": "Kokken"
        },
        "epidemiology": {
          "incidence": "1-2% aller CIED-Implantationen",
          "risk_groups": [
            "Aggregatwechsel / Revisionen",
            "CRT / ICD Mehrkammersysteme",
            "Diabetes, Niereninsuffizienz, Antikoagulation (Taschenhämatom)"
          ],
          "seasonality": "Keine",
          "transmission": "Perioperative Inokulation oder hämatogene Besiedlung"
        },
        "pathomechanism": {
          "steps": [
            "Bakterielle Besiedlung der Schrittmachertasche oder der Sondenoberfläche.",
            "Ausgeprägte Biofilmbildung auf den Kunststoff-/Metallsonden.",
            "Ausbreitung entlang der Sonden in die V. cava superior, das rechte Atrium/Ventrikel und die Trikuspidalklappe (Sondenendokarditis)."
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
              "description": "Rötung, Schwellung, Erwärmung, Fluktuation oder Perforation/Erosion der Schrittmachertasche.",
              "severity": "moderate"
            },
            {
              "name": "Systemische Sondenendokarditis",
              "description": "Unklares Fieber, Schüttelfrost, pulmonale septische Embolien (Husten, Pleuraschmerz).",
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
              "interpretation": "Essenziell bei Sondeninfektion"
            },
            {
              "test": "Taschen-Abstrich / Gewebekultur",
              "finding": "S. epidermidis / S. aureus",
              "interpretation": "Erregerbestimmung"
            }
          ],
          "imaging": [
            {
              "modality": "TEE (Transösophageale Echokardiographie)",
              "finding": "Sondenvegetationen, Trikuspidalklappenbefall",
              "significance": "Goldstandard"
            },
            {
              "modality": "18F-FDG PET/CT oder SPECT/CT",
              "finding": "Fokale FDG-Anreicherung im Bereich der Tasche oder des Sondenverlaufs",
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
            "title": "Empirische Antibiose & Sondenextraktion bei CIED-Infektion",
            "drugs": [
              {
                "drug": "Vancomycin + Cefepim oder Piperacillin/Tazobactam",
                "dose": "Vancomycin 15-20 mg/kg i.v. 2x/Tag + Cefepim 2g i.v. 2x/Tag",
                "duration": "Bis zur Extraktion",
                "note": "Breitspektrum für Staphylokokken und Gram-negative."
              }
            ]
          },
          "targeted": "VOLLSTÄNDIGE ENTFERNUNG / EXTRAKTION DES GESAMTEN CIED-SYSTEMS (Aggregat + ALLE Sonden) IST OBLIGATORISCH (EHRA/ESC Klasse I)! Konservative Antibiose alleine versagt in >80-90%. Antibiose nach Extraktion: 2 Wochen bei unkomplizierter Tascheninfektion; 4-6 Wochen bei Sondenendokarditis/Bakteriämie.",
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
          "mortality": "5-15% bei Sondenendokarditis",
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
        "name": "Myokarditis (Akute Herzmuskelentzündung)",
        "pathogen": {
          "type": "Virus / Bakterium / Immunologisch",
          "name": "Enteroviren (Coxsackie B), Parvovirus B19, HHV-6, SARS-CoV-2, Influenza, Borrelia burgdorferi, Riesenzell-Myokarditis, Immune-Checkpoint-Inhibitoren",
          "gram": "Variabel",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "10-22 pro 100.000 Personen/Jahr",
          "risk_groups": [
            "Junge Erwachsene (20-40 J.), männliches Geschlecht",
            "Sportler bei körperlicher Belastung während Infekt",
            "Patienten unter Immuntherapie"
          ],
          "seasonality": "Herbst-Winter-Gipfel (viral)",
          "transmission": "Natur der Grunderkrankung / virale Atemwegs- oder Magen-Darm-Infektion"
        },
        "pathomechanism": {
          "steps": [
            "Virale Invasion der Myozyten via Rezeptoren (CAR - Coxsackie-Adenovirus-Rezeptor).",
            "Direkte Zytolyse und virale Replikation im Herzmuskel.",
            "Immunvermittelte Gewebezerstörung durch CD8+ T-Zellen und Autoantikörper. Progression zu kardialem Remodeling und Dilatativer Kardiomyopathie (DCM)."
          ],
          "virulence_factors": [
            "CAR-Rezeptorbindung",
            "Zytotoxische Zytokine"
          ]
        },
        "clinical": {
          "incubation": "1-3 Wochen nach viralem Infekt",
          "onset": "Akut (Herzinfarkt-ähnlich) bis fulminant",
          "symptoms": [
            {
              "name": "Brustschmerzen",
              "description": "Oft infarktähnlich oder pleuritisch/perikarditisch.",
              "severity": "severe"
            },
            {
              "name": "Herzinsuffizienz-Symptome",
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
            "Schwere ventrikuläre Arrhythmien (VT/VF)",
            "Dilatative Kardiomyopathie (DCM)",
            "Plötzlicher Herztod"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Kardiales Troponin I/T & CK-MB",
              "finding": "Ausgeprägt erhöht (Myozytennekrose)",
              "interpretation": "Marker für Herzmuskelschaden"
            },
            {
              "test": "NT-proBNP / BNP",
              "finding": "Stark erhöht",
              "interpretation": "Ausmaß der ventrikulären Wandspannung"
            },
            {
              "test": "Borrelien-Serologie / Viren-PCR",
              "finding": "Borrelia-IgM/IgG oder Virusnachweis",
              "interpretation": "Ätiologiesuche"
            }
          ],
          "imaging": [
            {
              "modality": "Kardio-MRT (CMR)",
              "finding": "Lake-Louise-Kriterien positiv (T2-Ödem + T1 Late Gadolinium Enhancement in epicardialen/mesokardialen Abschnitten)",
              "significance": "Goldstandard der nicht-invasiven Diagnostik!"
            },
            {
              "modality": "Echokardiographie",
              "finding": "Regionale oder globale Wandbewegungsstörungen, LVEF-Reduktion, Perikarderguss",
              "significance": "Erstevaluation"
            }
          ],
          "microbiology": [
            {
              "test": "Endomyokardbiopsie (EMB)",
              "finding": "Histologie (Dallas-Kriterien), Immunhistochemie, Virus-PCR",
              "significance": "Goldstandard bei fulminantem Verlauf / Riesenzellmyokarditis!"
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
                "duration": "Mindestens 6 Monate",
                "note": "Standard-Herzinsuffizienztherapie bei LVEF-Reduktion."
              }
            ]
          },
          "targeted": "STRENGES SPORTVERBOT FÜR 3-6 MONATE (ESC Klasse I)! Immunsuppression (Hochdosis-Steroide + Azathioprin/Ciclosporin) NUR bei nachgewiesener Riesenzellmyokarditis, eosinophiler oder autoimmuner Myokarditis. Bei Borreliose: Ceftriaxon 2g i.v. 1x/Tag für 14-21 Tage. Bei kardiogenem Schock: VAD / ECMO (Life-Support).",
          "supportive": [
            "Körperliche Schonung",
            "Antiarrhythmika",
            "Kardiogene Schock-Therapie"
          ],
          "prevention": [
            "Kein Sport während fieberhafter Infekte!",
            "Grippe- und COVID-Impfung"
          ]
        },
        "prognosis": {
          "mortality": "50% Spontanheilung; 10-20% Progression zu DCM; Riesenzellmyokarditis >80% Mortalität ohne Immunsuppression",
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
        "name": "Akute Perikarditis (Szívburokgyulladás)",
        "pathogen": {
          "type": "Virus / Idiopathisch / Bakterium",
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
          "transmission": "Virale Atemwegs- oder GI-Infektion"
        },
        "pathomechanism": {
          "steps": [
            "Entzündung des viszeralen und parietalen Perikardblattes.",
            "Fibrinöse Exsudation (\"Brot-und-Butter-Perikarditis\") und Flüssigkeitsansammlung im Perikardraum.",
            "Entzündungsreiz verursacht scharfe pleuritische Brustschmerzen und Perikardreiben."
          ],
          "virulence_factors": [
            "Zytokinausschüttung",
            "Fibrinablagerung"
          ]
        },
        "clinical": {
          "incubation": "1-2 Wochen nach viralem Prodrom",
          "onset": "Akut",
          "symptoms": [
            {
              "name": "Scharfer retrosternaler Brustschmerz",
              "description": "Charakteristisch: Verstärkung im Liegen und bei Inspiration; Linderung beim Nach-Vorne-Beugen!",
              "severity": "severe"
            },
            {
              "name": "Perikardreiben",
              "description": "Lederknirschen-ähnliches Geräusch bei der Auskultation.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Perikardreiben (Pathognomonisch!), Pulsus paradoxus bei Tamponade, Tachykardie"
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
              "finding": "Leicht erhöht in 30% (Myoperikarditis)",
              "interpretation": "Beteiligung des Herzmuskels"
            }
          ],
          "imaging": [
            {
              "modality": "EKG",
              "finding": "ST-Strecken-Hebungen konkavbögig aus dem absteigenden T-Schenkel in fast allen Ableitungen (I, II, aVF, V2-V6) + PR-Depression (aVR mit ST-Senkung und PR-Hebung)",
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
                "drug": "Ibuprofen ODER Aspirin + COLCHICIN",
                "dose": "Ibuprofen 600-800mg alle 8h p.o. OR Aspirin 750-1000mg alle 8h p.o. PLUS Colchicin 0.5mg 1-2x/Tag",
                "duration": "NSAID 1-2 Wochen (ausschleichen); Colchicin 3 MONATE!",
                "note": "Colchicin HALBIERT die Rezidivrate (ESC Klasse I)!"
              }
            ]
          },
          "targeted": "Zweitlinientherapie: Niedrigdosierte Glukokortikoide (Prednison 0.2-0.5 mg/kg/Tag) NUR bei Unverträglichkeit/Versagen von NSAID+Colchicin oder autoimmuner Genese (Steroide ERHÖHEN das Rezidivrisiko!). Perikardpunktion bei Tamponade oder Verdacht auf eitrige/neoplastische Perikarditis.",
          "supportive": [
            "Körperliche Schonung bis zur CRP-Normalisierung"
          ],
          "prevention": [
            "3-monatige Colchicin-Einnahme verhindert Rezidive!"
          ]
        },
        "prognosis": {
          "mortality": "<1% bei unkomplizierter Perikarditis; 15-30% Rezidivrisiko ohne Colchicin",
          "prognostic_scores": [],
          "factors": "Fieber >38°C, großer Erguss, Herzbeuteltamponade, Mangel an Colchicin"
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
        "name": "Gefäßprotheseninfektion (VGI / EVGI)",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Staphylococcus aureus</i>, Koagulase-negative Staphylokokken (CoNS), <i>Pseudomonas aeruginosa</i>, Enterobacteriaceae, Cutibacterium, Candida",
          "gram": "Gram-positiv und Gram-negativ",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "1-6% bei offenen aortalen/peripheren Bypass-Operationen, 0.5-1.5% bei endovaskulären Stentgrafts (EVAR / TEVAR)",
          "risk_groups": [
            "Patienten nach offenen aortalen oder peripheren Gefäßrekonstruktionen",
            "EVAR / TEVAR Stentgraft-Träger",
            "Inguinale Wundkomplikationen (Leistenzugang)",
            "Diabetes mellitus, Adipositas, Re-Operationen"
          ],
          "seasonality": "Keine",
          "transmission": "Perioperative Inokulation (intraoperative Kontamination), Ausbreitung aus Leistenwundinfektion oder hämatogene Besiedlung"
        },
        "pathomechanism": {
          "steps": [
            "Inokulation & Biofilm: Bakterien lagern sich an die synthetische Prothese (PTFE, Dacron) an und bilden einen dichten Biofilm.",
            "Perigraft-Entzündung & Abszess: Ausbildung von periprothetischem Exsudat, Abszessen, Gaseinschlüssen und fehlender Gewebeintegration (Non-incorporation).",
            "Anastomoseninsuffizienz & Pseudoaneurysma: Zerstörung der Nahtreihe und nativen Gefäßwand, was zu Pseudoaneurysmen oder aorto-enterischen / aorto-bronchialen Fisteln führt.",
            "Septische Embolisation: Verschleppung infizierter Thromben aus dem Prothesenlumen nach peripher."
          ],
          "virulence_factors": [
            "Dacron/PTFE-Adhäsine",
            "Biofilmbildung",
            "Bakterielle Proteasen"
          ]
        },
        "clinical": {
          "incubation": "Früh (<2 Monate postop - S. aureus, Gram-negative) oder Spät (>2 Monate postop - S. epidermidis, Cutibacterium)",
          "onset": "Schleichendes Fieber bis zur akuten massiven lebensbedrohlichen Blutung",
          "symptoms": [
            {
              "name": "Lokale Wundsymptome",
              "description": "Nicht heilende Wunde in der Leiste, Sinustrakt, eitrige Sekretion, pulsierende Schwellung (Pseudoaneurysma).",
              "severity": "moderate"
            },
            {
              "name": "Systemische Infektzeichen",
              "description": "Fieber unklarer Genese (FUO), Schüttelfrost, Gewichtsverlust, Sepsis, CRP-Erhöhung.",
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
            "Prothesenthrombose und akute Ischämie",
            "Gliedmaßenamputation"
          ]
        },
        "diagnostics": {
          "criteria": [
            {
              "name": "MAGIC (Management of Aortic Graft Infection Collaboration) Kriterien",
              "items": [
                "Definitive VGI: Haupt-Chirurgisches/Histologisches/Mikrobiologisches Kriterium ODER 1 Haupt-Bildgebungskriterium + 1 Nebenkriterium",
                "Haupt-Bildgebungskriterium: Periprothetisches Gas >7 Tage postop, periprothetischer Abszess im CT, aorto-enterische Fistel, fokal intensive FDG-Aufnahme im 18F-FDG PET/CT",
                "Nebenkriterien: Fieber, CRP-Erhöhung, Sinustrakt, periprothetische Gewebeverdickung"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "Blutkulturen (HK)",
              "finding": "Mindestens 2-3 HK-Sets vor Antibiose",
              "interpretation": "Erregernachweis"
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
              "finding": "Periprothetische Gasblasen (>7-14 Tage postop), Flüssigkeitskollektion/Abszess, Pseudoaneurysma, Kontinuitätsunterbrechung der Darmwand",
              "significance": "ESC / ESVS Klasse I: Erstlinien-Bildgebung!"
            },
            {
              "modality": "18F-FDG PET/CT",
              "finding": "Intensive, fokale oder diffuse patologische FDG-Aufnahme entlang der Gefäßprothese (\"Sandwich-Zeichen\")",
              "significance": "ESC / ESVS Klasse I GOLDSTANDARD: Höchste Sensitivität und Spezifität!"
            }
          ],
          "microbiology": [
            {
              "test": "Sonifikation der entfernten Prothese",
              "finding": "Erreger- und Resistenzbestimmung",
              "significance": "Erhöht die Ausbeute bei Biofilmkeimen"
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
            "distinguishing": "Fieber und Leukozytose direkt nach EVAR ohne Infektion, spontan regressiv in 3-5 Tagen"
          }
        ],
        "therapy": {
          "guidelines": [
            "ESVS 2020 Clinical Practice Guidelines on Vascular Graft Infections",
            "ESC 2023 Endocarditis guidelines"
          ],
          "empirical": {
            "title": "Empirische Antibiose bei Gefäßprotheseninfektion",
            "drugs": [
              {
                "drug": "Vancomycin + Piperacillin/Tazobactam ODER Cefepim / Meropenem",
                "dose": "Vancomycin 30-60 mg/kg/Tag i.v. + Pip-Tazo 4x4.5g/Tag i.v.",
                "duration": "Bis zur chirurgischen Sanierung",
                "note": "Breitspektrum-Abdeckung für MRSA, Pseudomonas und Anaerobier."
              }
            ]
          },
          "targeted": "Kombinierte Chirurgische UND Antimikrobielle Therapie (ESVS Klasse I): Vollständige Entfernung der infizierten Prothese, radikales Debridement und RevasSystematisierung mit autologer Vein (V. saphena magna), Homograft oder Rifampicin/Silber-beschichteter Prothese! Nach Prothesenentfernung 6-12 Wochen gezielte i.v./p.o. Antibiose; wenn Prothese nicht entfernbar ist, LEBENSLANGE suppresive Antibiose erforderlich.",
          "supportive": [
            "Notfallmäßige gefäßchirurgische Konsultation bei Verdacht auf aorto-enterische Fistel (Herald Bleeding!)",
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
          "factors": "Aortale Lokalisation, Notfall-OP, P. aeruginosa / S. aureus Erreger"
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
    "name": "Infektionen der oberen Atemwege",
    "icon": (window.diseaseMetadata?.upper_respiratory?.icon || '🗣️'),
    "color": (window.diseaseMetadata?.upper_respiratory?.color || '#14b8a6'),
    "diseases": [
      {
        "id": "upper_respiratory_infections",
        "name": "Infektionen der oberen Atemwege (Erkältung)",
        "pathogen": {
          "type": "Virus",
          "name": "Rhinoviren (>50%), Coronaviren, Adenoviren, RSV, Parainfluenzaviren",
          "gram": "Keine",
          "shape": "Kapsid"
        },
        "epidemiology": {
          "incidence": "Häufigste menschliche Infektion (Erwachsene 2-4x/Jahr, Kinder 6-8x/Jahr)",
          "risk_groups": [
            "Kleinkinder in Kitas",
            "Stress, Schlafmangel"
          ],
          "seasonality": "Herbst-Winter-Gipfel",
          "transmission": "Tröpfchen- und Kontaktinfektion"
        },
        "pathomechanism": {
          "steps": [
            "Invasion des Nasen-Rachen-Epithels, Entzündungsmediator-Freisetzung (Histamin, Bradykinin), Schleimhautödem und Hypersekretion."
          ],
          "virulence_factors": [
            "Rezeptorbindung (ICAM-1 bei Rhinoviren)"
          ]
        },
        "clinical": {
          "incubation": "1-3 Tage",
          "onset": "Mild",
          "symptoms": [
            {
              "name": "Nasal- und Halssymptome",
              "description": "Rhinitis (Schnupfen), Niesen, Halsschmerzen, mäßiges Fieber, Husten.",
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
            "distinguishing": "Juckreiz, Eosinophilie, kein Fieber"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Symptomatische Therapie der Erkältung",
            "drugs": [
              {
                "drug": "Analgetika / Antipyretika (Ibuprofen / Paracetamol)",
                "dose": "Ibuprofen 400mg 3x/Tag oder Paracetamol 500-1000mg 3-4x/Tag p.o.",
                "duration": "3-5 Tage",
                "note": "Zur Schmerz- und Fiebersenkung."
              },
              {
                "drug": "Abschwellende Nasentropfen (Xylometazolin)",
                "dose": "1-2 Tropfen/Sprühestöße pro Nasenloch max 3x/Tag",
                "duration": "Maximal 5-7 Tage!",
                "note": "Gefahr der Rhinitis medicamentosa bei Langzeitanwendung."
              }
            ]
          },
          "targeted": "Rein symptomatisch! Keine Antibiotika bei unkomplizierter Erkältung!",
          "supportive": [
            "Ausreichend Flüssigkeit",
            "Nasenspülung mit Kochsalzlösung"
          ],
          "prevention": [
            "Händewaschen, Händehygiene"
          ]
        },
        "prognosis": {
          "mortality": "0%",
          "prognostic_scores": [],
          "factors": "Keine"
        },
        "gallery": []
      },
      {
        "id": "laryngitis",
        "name": "Laryngitis und Pseudokrupp (Laryngotracheobronchitis)",
        "pathogen": {
          "type": "Virus",
          "name": "Parainfluenzaviren (Typ 1-3), RSV, Adenoviren, Influenzaviren",
          "gram": "Keine",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Häufig bei Säuglingen und Kleinkindern (6 Monate bis 3 Jahre)",
          "risk_groups": [
            "Kleinkinder (Anatomisch enge subglottische Region)"
          ],
          "seasonality": "Herbst-Winter",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Virale Infektion des Kehlkopf- und Trachealepithels.",
            "Subglottisches Schleimhautödem verengt die Atemwege (Hagen-Poiseuille-Gesetz: Radius-Halbierung erhöht Strömungswiderstand um das 16-fache!).",
            "Inspiratorischer Stridor und bellender Husten."
          ],
          "virulence_factors": [
            "Neuraminidase, Hämagglutinin"
          ]
        },
        "clinical": {
          "incubation": "2-5 Tage",
          "onset": "Plötzlich, klassischerweise nachts aus dem Schlaf heraus",
          "symptoms": [
            {
              "name": "Bellender Husten & Heiserkeit",
              "description": "Charakteristischer bellernder \"Hundehusten\" und Heiserkeit.",
              "severity": "moderate"
            },
            {
              "name": "Inspiratorischer Stridor",
              "description": "Pfeifendes Atemgeräusch bei der Einatmung, juguläre/interkostale Einziehungen.",
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
              "significance": "Selten erforderlich"
            }
          ]
        },
        "calculators": [
          {
            "name": "Westley Croup Score - Pseudokrupp Schweregrad",
            "items": [
              {
                "label": "Inspiratorischer Stridor (Keiner=0, Bei Unruhe=1, In Ruhe=2)",
                "points": 2
              },
              {
                "label": "Einziehungen (Keine=0, Mild=1, Mäßig=2, Schwer=3)",
                "points": 3
              },
              {
                "label": "Atemgeräusch (Normal=0, Vermindert=1, Stark vermindert=2)",
                "points": 2
              },
              {
                "label": "Zyanose (Keine=0, Bei Unruhe=4, In Ruhe=5)",
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
                "text": "Schwerer Pseudokrupp (6-11): Dexamethason + Inhalatives Adrenalin + Stationäre Aufnahme."
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
            "distinguishing": "Hohes Fieber, Speichelfluss (Drooling), Sitzen in \"Tripod-Haltung\", kein bellender Husten!"
          },
          {
            "disease": "Fremdkörperaspiration",
            "distinguishing": "Plötzlicher Beginn beim Spielen, kein Infekt"
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
                "note": "Essenziell bei JEDEM Schweregrad (Westley Score)!"
              },
              {
                "drug": "Inhalatives Adrenalin (L-Epinephrin)",
                "dose": "2-5 ml Adrenalin (1:1000) über Vernebler",
                "duration": "Bei Stridor in Ruhe",
                "note": "Schnelle Abschwellung durch alpha-sympathomimetische Vasokonstriktion."
              }
            ]
          },
          "targeted": "Glukokortikoide + inhalatives Adrenalin bei schwerem Stridor. Keine Antibiotika!",
          "supportive": [
            "Kühle feuchte Luft, Beruhigung des Kindes, Sauerstoffgabe"
          ],
          "prevention": [
            "Rauchfreie Umgebung"
          ]
        },
        "prognosis": {
          "mortality": "<0.1% bei rechtzeitiger Dexamethasongabe",
          "prognostic_scores": [
            "Westley Croup Score"
          ],
          "factors": "Westley Score ≥6"
        },
        "gallery": []
      },
      {
        "id": "epiglottitis",
        "name": "Epiglottitis (Akute Supraglottitis)",
        "pathogen": {
          "type": "Bakterium",
          "name": "<i>Haemophilus influenzae</i> Typ b (Hib - durch Impfung stark rückläufig), <i>Streptococcus pneumoniae</i>, <i>S. pyogenes</i>, <i>S. aureus</i>",
          "gram": "Gram-negativ / Gram-positiv",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Selten seit Einführung der Hib-Impfung",
          "risk_groups": [
            "Ungeimpfte Kinder",
            "Erwachsene mit Diabetes / Immunsuppression"
          ],
          "seasonality": "Ganzjährig",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Bakterielle Infektion des Kehldeckels (Epiglottis) und der supraglottischen Strukturen.",
            "Massives entzündliches Ödem der Epiglottis.",
            "Rasche, lebensbedrohliche Verlegung der oberen Atemwege."
          ],
          "virulence_factors": [
            "Hib Kapselpolysaccharid (PRP)"
          ]
        },
        "clinical": {
          "incubation": "1-3 Tage",
          "onset": "Dramatisch, fulminant",
          "symptoms": [
            {
              "name": "Die 3 \"Ds\"",
              "description": "Dysphagie (Schluckstörung), Drooling (Speichelfluss), Distress (Atemnot).",
              "severity": "severe"
            },
            {
              "name": "Kopforwärtsneigung (Tripod-Haltung)",
              "description": "Kind sitzt aufgerichtet, neigt den Kopf nach vorne, um den Kehlkopf offen zu halten.",
              "severity": "severe"
            },
            {
              "name": "Kloßige Sprache",
              "description": "Gedämpfte \"Kloß-im-Mund\"-Sprache (Hot potato voice), KEIN bellender Husten!",
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
              "finding": "In 70% positiv für Hib",
              "interpretation": "Erst NACH Sicherung der Atemwege!"
            }
          ],
          "imaging": [
            {
              "modality": "Hals-Röntgen seitlich",
              "finding": "Daumenzeichen (Thumbprint Sign - geschwollene Epiglottis)",
              "significance": "Nur bei stabiler Situation"
            }
          ]
        },
        "differential": [
          {
            "disease": "Pseudokrupp",
            "distinguishing": "Bellender Husten, kein Speichelfluss, liegt flach"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Notfallbehandlung der Epiglottitis",
            "drugs": [
              {
                "drug": "Ceftriaxon i.v.",
                "dose": "2g i.v. 1x/Tag (Kinder: 50-100 mg/kg/Tag)",
                "duration": "7-10 Tage",
                "note": "1. Wahl nach Atemwegssicherung!"
              },
              {
                "drug": "+ Vancomycin oder Ampicillin/Sulbactam",
                "dose": "15-20 mg/kg i.v. alle 12h",
                "duration": "7-10 Tage",
                "note": "Zusätzliche Staphylokokken-Abdeckung."
              }
            ]
          },
          "targeted": "PRIMÄRES ZIEL: SOFORTIGE ATEMWEGSSICHERUNG (Orotracheale Intubation im Operationssaal / HNO-Notfall)! Erst danach Antibiose mit Ceftriaxon i.v.",
          "supportive": [
            "Notfall-Koniotomie/Tracheotomie Bereitstellung"
          ],
          "prevention": [
            "Hib-Schutzimpfung im Säuglingsalter (Obligatorisch!)"
          ]
        },
        "prognosis": {
          "mortality": "<1% bei rechtzeitiger Intubation; bis 10-20% bei verzögerter Diagnose",
          "prognostic_scores": [],
          "factors": "Atemwegsverlegung vor Intubation"
        },
        "gallery": []
      },
      {
        "id": "rsv_infection",
        "name": "RSV-Infektion (Respiratorisches Synzytial-Virus)",
        "pathogen": {
          "type": "Virus",
          "name": "Respiratorisches Synzytial-Virus (RSV - Pneumoviridae)",
          "gram": "Keine",
          "shape": "Behülltes Einzelstrang-RNA-Virus"
        },
        "epidemiology": {
          "incidence": "Häufigste Ursache für Bronchiolitis und Pneumonie bei Säuglingen <1 Jahr",
          "risk_groups": [
            "Frühgeborene",
            "Säuglinge <6 Monate",
            "Kinder mit angeborenen Herzfehlern / BPD",
            "Ältere Erwachsene (>65 J.)"
          ],
          "seasonality": "Winter-Frühjahr (November bis April)",
          "transmission": "Tröpfchen- und Schmierinfektion (Hohe Kontagiosität!)"
        },
        "pathomechanism": {
          "steps": [
            "Infektion des Epithels der kleinen Atemwege (Bronchiolen) via F-Protein (Fusionsprotein).",
            "Bildung von Zellsynzytien, Nekrose der Epithelzellen und massive Schleimproduktion.",
            "Verlegung der Bronchiolen, Air-Trapping (Überblähung) und Atelektasenbildung."
          ],
          "virulence_factors": [
            "F-Protein (Fusion)",
            "G-Protein (Attachment)"
          ]
        },
        "clinical": {
          "incubation": "2-8 Tage",
          "onset": "Symptomprogression über 3-5 Tage",
          "symptoms": [
            {
              "name": "Säuglings-Bronchiolitis",
              "description": "Gekennzeichnet durch Tachypnoe, giemendes/brummendes Atemgeräusch (Wheezing), interkostale Einziehungen, Nasenflügeln und Trinkschwäche.",
              "severity": "severe"
            },
            {
              "name": "Apnoen bei Neugeborenen",
              "description": "Atemstillstände besonders bei sehr jungen Säuglingen (<2 Monate).",
              "severity": "severe"
            },
            {
              "name": "Erwachsenen-Pneumonie",
              "description": "Schwerer Bronchitis- / Pneumonieverlauf bei Älteren.",
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
              "finding": "RSV-RNA oder Antigen positiv",
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
                "dose": "Einzeldosis 50mg (<5kg) oder 100mg (≥5kg) i.m.",
                "duration": "Einmalig vor/in der RSV-Saison",
                "note": "EMPFOHLEN FÜR ALLE NEUGEBORENEN/SÄUGLINGE in der 1. RSV-Saison (STIKO/CDC)!"
              },
              {
                "drug": "PALIVIZUMAB (Synagis)",
                "dose": "15 mg/kg i.m. monatlich während der Saison",
                "note": "Alternative für Hochrisiko-Frühgeborene."
              },
              {
                "drug": "RSV-Impfstoffe (AREXVY / ABRYSVO)",
                "dose": "Einzeldosis i.m.",
                "duration": "Einmalig",
                "note": "Arexvy/Abrysvo für Erwachsene ≥60 J.; Abrysvo für Schwangere (32-36. SSW) zum mütterlichen Nestschutz!"
              }
            ]
          },
          "targeted": "Symptomatische Therapie ist der Eckpfeiler: Absaugen der Nase, Sauerstoffgabe (SpO2 >90-92%), High-Flow-Nasenkanüle (HFNC), adäquate Flüssigkeitszufuhr. Bronchodilatatoren und Steroide werden routinemäßig NICHT empfohlen!",
          "supportive": [
            "Sauerstofftherapie, HFNC",
            "Enterale/Parenterale Flüssigkeit"
          ],
          "prevention": [
            "Nirsevimab-Immunisierung für alle Säuglinge",
            "RSV-Impfung für Schwangere & Ältere"
          ]
        },
        "prognosis": {
          "mortality": "<0.5% bei gesunden Säuglingen; bis 3-5% bei Herzfehler/Frühgeborenen",
          "prognostic_scores": [],
          "factors": "Frühgeburtlichkeit, Alter <2 Monate"
        },
        "gallery": []
      },
      {
        "id": "influenza",
        "name": "Influenza (Szezonale und Pandemische)",
        "pathogen": {
          "type": "Virus",
          "name": "Influenzavirus A (H1N1, H3N2), Influenzavirus B (Orthomyxoviridae)",
          "gram": "Keine",
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
          "transmission": "Tröpfcheninfektion und Aerosole"
        },
        "pathomechanism": {
          "steps": [
            "Bindung des Hämagglutinins (HA) an Sialsäure-Rezeptoren des Tracheobronchialepithels.",
            "Zelllyse, Freisetzung neuer Virionen durch Neuraminidase (NA).",
            "Ausgeprägte Zytokinausschüttung (Zytokinsturm) verursacht typisches hohes Fieber und Myalgien."
          ],
          "virulence_factors": [
            "Antigendrift (Punktmutationen - saisonal)",
            "Antigenshift (Reassortment - Pandemien)",
            "Neuraminidase",
            "Hämagglutinin"
          ]
        },
        "clinical": {
          "incubation": "1-4 Tage",
          "onset": "Plötzlich, schlagartig innerhalb von Stunden",
          "symptoms": [
            {
              "name": "Schlagartiger Beginn mit hohem Fieber",
              "description": "Hohes Fieber (≥39-40°C), Schüttelfrost, starke Myalgien (Muskelschmerzen) und Arthralgien.",
              "severity": "severe"
            },
            {
              "name": "Trachealer Husten & Kopfschmerzen",
              "description": "Trockener, schmerzhafter Husten, retrosternales Brennen, extreme Fatigue.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Hohes Fieber, Pharynxrötung, trockenes Rasselgeräusch, schwere Abgeschlagenheit"
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
              "finding": "Normal oder interstitielles Muster",
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
                "dose": "75mg 2x/Tag p.o. für 5 Tage",
                "duration": "5 Tage",
                "note": "Neuraminidase-Hemmer. Indiziert bei Risikopatienten / Schwereverlauf."
              },
              {
                "drug": "BALOXAVIR MARBOXIL (Xofluza)",
                "dose": "Einzeldosis 40mg (40-80kg) oder 80mg (≥80kg) p.o.",
                "duration": "Einmalig",
                "note": "Capped-Endonuklease-Hemmer. Einmalige Einnahme!"
              }
            ]
          },
          "targeted": "Antivirale Therapie (Oseltamivir / Baloxavir) gestartet innerhalb von 48h verkürzt die Krankheitsdauer und senkt Komplikationen!",
          "supportive": [
            "Bettruhe, Fiebersenkung (Paracetamol/Ibuprofen)",
            "Flüssigkeitssubstitution"
          ],
          "prevention": [
            "Jährliche Quadrivalente Influenza-Schutzimpfung (Tot- oder Lebendimpfstoff)"
          ]
        },
        "prognosis": {
          "mortality": "<0.1% gesamt; bis 1-3% bei Risikogruppen / bakterieller Superinfektion",
          "prognostic_scores": [],
          "factors": "Alter, Komorbiditäten"
        },
        "gallery": []
      },
      {
        "id": "covid19",
        "name": "COVID-19 (SARS-CoV-2 Infektion)",
        "pathogen": {
          "type": "Virus",
          "name": "SARS-CoV-2 (Coronaviridae)",
          "gram": "Keine",
          "shape": "Behülltes Einzelstrang-RNA-Virus"
        },
        "epidemiology": {
          "incidence": "Pandemisch, mittlerweile endemische Wellen",
          "risk_groups": [
            "Ältere Menschen (>65 J.)",
            "Ungeimpfte",
            "Adipöse, Diabetiker, Immunsupprimierte"
          ],
          "seasonality": "Ganzjährig mit Herbst-Winter-Gipfeln",
          "transmission": "Aerosole und Tröpfchen"
        },
        "pathomechanism": {
          "steps": [
            "Spike-Protein-Bindung an ACE2-Rezeptoren der Alveolarzellen Typ II und Endothelzellen.",
            "Endothelitis, Mikrovaskuläre Thrombosen und Hyperkoagulabilität.",
            "Hyperinflammation (Zytokinsturm), ARDS und Multiorganbefall."
          ],
          "virulence_factors": [
            "Spike-Protein (RBD-Domäne)",
            "Mpro / 3CLpro Protease"
          ]
        },
        "clinical": {
          "incubation": "2-5 Tage (Omikron-Varianten)",
          "onset": "Variabel",
          "symptoms": [
            {
              "name": "Respiratorische & Systemische Symptome",
              "description": "Fieber, Husten, Halsschmerzen, Fatigue, Anosmie/Ageusie (Geruchs-/Geschmacksverlust).",
              "severity": "moderate"
            },
            {
              "name": "Stille Hypoxie (Silent Hypoxia)",
              "description": "Gefährliche Abnahme der SpO2 ohne subjektive Atemnot!",
              "severity": "severe"
            },
            {
              "name": "Long-COVID / Post-COVID-Syndrom",
              "description": "Persistierende Fatigue, Belastungsintoleranz (ME/CFS), \"Brain Fog\" >12 Wochen.",
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
              "finding": "Erhöht bei schwerem Verlauf",
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
            "title": "Empirische Therapie von COVID-19 (Leitlinien 2024/2025)",
            "drugs": [
              {
                "drug": "NIRMATRELVIR / RITONAVIR (Paxlovid)",
                "dose": "300mg/100mg 2x/Tag p.o. für 5 Tage",
                "duration": "5 Tage",
                "note": "Für Hochrisikopatienten in den ersten 5 Tagen p.o.!"
              },
              {
                "drug": "REMDESIVIR",
                "dose": "200mg Tag 1, dann 100mg Tag 2-3 i.v.",
                "duration": "3 Tage",
                "note": "Frühtherapie i.v. bei Risikopatienten."
              },
              {
                "drug": "DEXAMETHASON",
                "dose": "6mg 1x/Tag p.o./i.v.",
                "duration": "10 Tage",
                "note": "NUR BEI SAUERSTOFFPFLICHTIGEN PATIENTEN!"
              },
              {
                "drug": "TOCILIZUMAB / BARICITINIB",
                "dose": "Tocilizumab 8mg/kg i.v. einmalig",
                "note": "Bei rascher Progression / Zytokinsturm."
              }
            ]
          },
          "targeted": "Frühtherapie mit Paxlovid oder Remdesivir bei Risikopatienten. Dexamethason + Antikoagulation (LMWH) bei Sauerstoffpflichtigkeit.",
          "supportive": [
            "Bauchlagerung (Prone positioning)",
            "Sauerstoffgabe / HFNC / Beatmung"
          ],
          "prevention": [
            "Angepasste mRNA-Impfungen (saisonal für Risikogruppen)"
          ]
        },
        "prognosis": {
          "mortality": "<0.1% ambulant; 5-15% bei hospitalisierter Hypoxie",
          "prognostic_scores": [],
          "factors": "Alter, Immunsuppression, Ungeimpft"
        },
        "gallery": []
      },
      {
        "id": "tonsillitis",
        "name": "Tonsillitis acuta (Mandelentzündung)",
        "pathogen": {
          "type": "Bakterium / Virus",
          "name": "Streptococcus pyogenes (GABHS / Gruppe A Streptokokken - 15-30% bei Kindern, 10% Erwachsene); Viren: Adenoviren, EBV, Enteroviren (~70%)",
          "gram": "Gram-positiv (GAS)",
          "shape": "Streptokokken"
        },
        "epidemiology": {
          "incidence": "Sehr häufig bei Kindern (5-15 Jahre)",
          "risk_groups": [
            "Schulkinder"
          ],
          "seasonality": "Winter-Frühjahr",
          "transmission": "Tröpfchen- und Kontaktinfektion"
        },
        "pathomechanism": {
          "steps": [
            "Invasion der Gaumenmandeln (Tonsillae palatinae) durch Bakterien oder Viren.",
            "Eitrige Exsudation in den Tonsillenkrypten (Stippchen / Beläge).",
            "Toxinvermittelte Gewebeentzündung (Streptolysin O/S, Erythrogene Toxine bei Scharlach)."
          ],
          "virulence_factors": [
            "M-Protein (Inhibition der Phagozytose)",
            "Streptolysin O/S",
            "Pyrogene Exotoxine (SPE)"
          ]
        },
        "clinical": {
          "incubation": "1-4 Tage",
          "onset": "Akut",
          "symptoms": [
            {
              "name": "Starke Halsschmerzen & Schluckschmerz",
              "description": "Odynophagie, bis in die Ohren ausstrahlend, hohes Fieber.",
              "severity": "severe"
            },
            {
              "name": "Kein Husten",
              "description": "Fehlen von Husten ist ein Hauptkriterium für Bakterielle Tonsillitis (Centor Score)!",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Geschwollene, hyperämische Tonsillen mit eitrigen Stippchen/Belägen, schmerzhafte anterior-zervikale Lymphknoten, Scharlach-Exanthem"
          ],
          "complications": [
            "Peritonsillarabszess (Trismus, gaumensegelabweichung)",
            "Rheumatische Fieber (ARF)",
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
                "label": "Fieber > 38°C",
                "points": 1
              },
              {
                "label": "Fehlen von Husten",
                "points": 1
              },
              {
                "label": "Schmerzhafte zervikale Lymphknoten",
                "points": 1
              },
              {
                "label": "Tonsillenschwellung oder -exsudat",
                "points": 1
              }
            ],
            "interpretation": [
              {
                "min": 0,
                "max": 1,
                "text": "Geringes Risiko (<10%): Keine Antibiose, keine Testung."
              },
              {
                "min": 2,
                "max": 3,
                "text": "Mittleres Risiko (15-30%): GAS-Schnelltest/Kultur, Antibiose nur bei Positivität."
              },
              {
                "min": 4,
                "max": 5,
                "text": "Hohes Risiko (50-60%): Empirische Antibiose oder Schnelltest + Antibiose."
              }
            ]
          }
        ],
        "differential": [
          {
            "disease": "Infektiöse Mononukleose (EBV / Pfeiffersches Drüsenfieber)",
            "distinguishing": "Ganzkörper-Lymphknotenschwellung, Splenomegalie, Exanthem nach Amoxicillin!"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Kausale Antibiose bei GAS-Tonsillitis",
            "drugs": [
              {
                "drug": "PENICILLIN V (Phenoxymethylpenicillin)",
                "dose": "1 Mio. IE 3x/Tag p.o. (Kinder: 50.000 IE/kg/Tag)",
                "duration": "10 VOLLE TAGE",
                "note": "1. WAHL! 10-Tage-Einnahme ist OBLIGATORISCH zur ARF-Prophylaxe!"
              },
              {
                "drug": "AMOXICILLIN",
                "dose": "500mg 2x/Tag p.o.",
                "duration": "10 Tage",
                "note": "Alternative 1. Wahl."
              },
              {
                "drug": "Cefadroxil / Cefuroxim",
                "dose": "500mg 2x/Tag p.o.",
                "duration": "10 Tage",
                "note": "Bei Penicillinallergie (nicht-anaphylaktisch)."
              },
              {
                "drug": "Azithromycin / Clarithromycin",
                "dose": "500mg Tag 1, dann 250mg Tag 2-5",
                "duration": "5 Tage",
                "note": "Bei schwerer Penicillinallergie."
              }
            ]
          },
          "targeted": "Penicillin V oder Amoxicillin für 10 volle Tage zur Verhinderung des Akuten Rheumatischen Fiebers!",
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
        "name": "Sinusitis acuta (Akute Rhinosinusitis - ARS / ABRS)",
        "pathogen": {
          "type": "Virus / Bakterium",
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
            "Sekretstau und Hypoxie in den Paranasalräumen, Störung der mukoziliären Klärung.",
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
              "description": "Verstärkung beim Bücken nach vorne! Stirn-, Oberkiefer- oder retroorbitaler Schmerz.",
              "severity": "moderate"
            },
            {
              "name": "Eitrige Rhinorrhö & Nasenatmungsbehinderung",
              "description": "Eitriges Nasensekret, Hyposmie/Anosmie.",
              "severity": "moderate"
            },
            {
              "name": "Bakterielle ABRS Zeichen",
              "description": "Zwei-Phasen-Verlauf (\"Double Sickening\" - Besserung gefolgt von Verschlechterung), anhaltende Symptome >10 Tage, hohes Fieber (>39°C).",
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
              "significance": "NUR bei Komplikationen oder Therapieversagen!"
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
                "dose": "2 Sprühstöße pro Nasenloch 2x/Tag",
                "duration": "14-21 Tage",
                "note": "1. WAHL BEI VIRALER & BAKTERIELLER RHINOSINUSITIS!"
              },
              {
                "drug": "AMOXICILLIN oder CO-AMOXICLAV (bei ABRS)",
                "dose": "Amoxicillin 3x500mg-1g p.o. ODER Co-Amoxiclav 2x875/125mg p.o.",
                "duration": "5-7 Tage",
                "note": "Indiziert NUR bei ABRS (Kriterien erfüllt)!"
              },
              {
                "drug": "Doxycyclin / Levofloxacin",
                "dose": "Doxycyclin 100mg 2x/Tag p.o.",
                "duration": "5-7 Tage",
                "note": "Bei Penicillinallergie."
              }
            ]
          },
          "targeted": "Virale ARS: Nasale Steroide + Salzwasserspülung + Abschwellende Nasentropfen (max 5 Tage). ABRS: Amoxicillin oder Co-Amoxiclav 5-7 Tage.",
          "supportive": [
            "Nasenspülung mit Isotoner Kochsalzlösung",
            "Analgetika"
          ],
          "prevention": [
            "Behandlung allergischer Rhinitis"
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
        "name": "Otitis media acuta (Mittelohrentzündung - AOM)",
        "pathogen": {
          "type": "Bakterium / Virus",
          "name": "<i>Streptococcus pneumoniae</i>, Non-typeable <i>Haemophilus influenzae</i> (NTHi), <i>Moraxella catarrhalis</i>, Respiratorische Viren",
          "gram": "Gram-positiv / Gram-negativ",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Sehr häufig bei Säuglingen und Kleinkindern (6-24 Monate)",
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
            "Eitrige Exsudation in der Paukenhöhle, Vorwölbung (Bulging) und Ischämie des Trommelfells.",
            "Unbehandelter Druckanstieg führt zur spontanen Trommelfellperforation und Otorrhö."
          ],
          "virulence_factors": [
            "Pneumokokken-Kapsel",
            "NTHi Biofilmbildung",
            "BETA-Laktamase-Produktion"
          ]
        },
        "clinical": {
          "incubation": "2-7 Tage nach Erkältungsepidode",
          "onset": "Plötzlich, häufig nachts mit stechenden Ohrenschmerzen",
          "symptoms": [
            {
              "name": "Klassische Kindheitssymptome",
              "description": "Plötzliche, stechende, hefstige Ohrenschmerzen (Otalgie), hohes Fieber (≥38.5-39°C), Schallleitungsschwerhörigkeit.",
              "severity": "severe"
            },
            {
              "name": "Säuglings-Unspezifische Symptome",
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
            "  * Starke Einschränkung oder Aufhebung der Trommelfellbeweglichkeit",
            "  * Verstreichen der Lichtreflexes und der Hammergriff-Kontur",
            "Tragusdruckschmerz",
            "Rötung, Schwellung oder Abstehen der Ohrmuschel über dem Mastoid weist auf eine MASTOIDITIS hin!"
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
              "finding": "Leukozytose und CRP-Erhöhung (>40-80 mg/L) bei schwerer AOM",
              "interpretation": "Bakterieller Nachweis"
            }
          ],
          "imaging": [
            {
              "modality": "Otoskopie / Otomikroskopie",
              "finding": "Vorgewölbtes, hyperämisches Trommelfell mit verminderter Beweglichkeit",
              "significance": "Essentieller Goldstandard"
            },
            {
              "modality": "Felsenbein / Temporalkochen CT",
              "finding": "Verschattung der Mastoidzellen und knöcherne Destruktion",
              "significance": "NUR bei Verdacht auf Mastoiditis!"
            }
          ],
          "microbiology": [
            {
              "test": "Ohrsekret-Kultur (nach Perforation / Parazentese)",
              "finding": "Erreger und Antibiogramm",
              "significance": "Bei Gezielter Therapie / Rezidiv"
            }
          ]
        },
        "differential": [
          {
            "disease": "Otitis media serosa (OME / Paukenerguss)",
            "distinguishing": "KEINE akute Entzündung, kein Fieber, keine Schmerzen! Bläschen/Flüssigkeitsspiegel hinter intaktem Trommelfell."
          },
          {
            "disease": "Otitis externa acuta (Gehörgangsentzündung)",
            "distinguishing": "Extremer Tragus-Druckschmerz und Ohrmuschel-Zugschmerz; Gehörgang geschwollen."
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "SYSTEMISCHE SCHMERZTHERAPIE (Ibuprofen / Paracetamol)",
                "dose": "Ibuprofen 10 mg/kg alle 6h ODER Paracetamol 15 mg/kg alle 6h p.o./p.r.",
                "duration": "3-5 Tage",
                "note": "1. UND WICHTIGSTER SCHRITT DER AOM-THERAPIE! Sofortiger Start!"
              },
              {
                "drug": "\"WATCHFUL WAITING\" (Abwartende Haltung - AAP / ECDC)",
                "dose": "Konsequente Schmerztherapie + Kontrolluntersuchung nach 48-72h",
                "duration": "48 Stunden",
                "note": "Anwendbar bei Kinder ≥2 J. mit milden einseitigen Symptomen ohne Otorrhö!"
              },
              {
                "drug": "AMOXICILLIN (Hochdosiert p.o.)",
                "dose": "80-90 mg/kg/Tag p.o. in 2-3 Dosen (Erwachsene: 3x1000mg p.o.)",
                "duration": "10 Tage (<2 J.) / 5-7 Tage (≥2 J.)",
                "note": "1. WAHL ANTIBIOTIKUM! Sofort indiziert bei: Säuglingen <6 Mon., beidseitiger AOM <2 J., hohem Fieber (≥39°C) oder Otorrhö!"
              },
              {
                "drug": "Amoxicillin / Clavulansäure (Hochdosiert)",
                "dose": "90 mg/kg/Tag Amoxicillin-Anteil p.o.",
                "duration": "7-10 Tage",
                "note": "Indiziert bei Amoxicillin-Gabe in den letzten 30 Tagen, purulenter Konjunktivitis oder Amoxicillin-Versagen nach 48h."
              },
              {
                "drug": "Cefuroxim axetil / Azithromycin",
                "dose": "Cefuroxim 30 mg/kg/Tag p.o.; Azithromycin 10 mg/kg Tag 1, dann 5 mg/kg",
                "duration": "5-10 Tage",
                "note": "Bei Penicillinallergie."
              }
            ],
            "inpatient": [
              {
                "drug": "Ceftriaxon i.v. / i.m.",
                "dose": "50 mg/kg i.v./i.m. 1x/Tag",
                "duration": "1-3 Tage",
                "note": "Bei erbrechenden Kindern oder Therapieversagen."
              }
            ],
            "icu": [
              {
                "drug": "Parazentese (Trommelfellschnitt) + Mastoidektomie",
                "dose": "-",
                "duration": "-",
                "note": "Bei Mastoiditis oder unerträglichen Schmerzen HNO-Myringotomie & Paukenröhrchen (Grommet)."
              }
            ]
          },
          "targeted": "Gezielte Antibiose nach Ohrsekretkultur. Hochdosiertes Amoxicillin ist Erstlinie.",
          "supportive": [
            "Orale Schmerztherapie (NSAID/Paracetamol)! Ohrfeuchte Tropfen bei intaktem Trommelfell NICHT wirksam, bei Perforation KONTRAINDIZIERT!",
            "Abschwellende Nasentropfen"
          ],
          "prevention": [
            "1. IMPFUNGEN:",
            "- PNEUMOKOKKEN-KONJUGATIMPFSTOFFE (PCV13, PCV15, PCV20): Seit Einführung sind invasive AOM-Episoden um >60-80% gesunken!",
            "- HAEMOPHILUS INFLUENZAE B (Hib) Impfung.",
            "- JÄHRLICHE INFLUENZA-IMPFUNG: Senkt pos-influenzale AOM um 30-50%.",
            "2. RISIKOREDUKTION: Stillen bis zum 6. Monat, Vermeidung von Passivrauch."
          ]
        },
        "prognosis": {
          "mortality": "Unkompliziert 0%; bei Mastoiditis / intrakraniellen Komplikationen 1-3%",
          "prognostic_scores": [
            "AOM Severity Score"
          ],
          "factors": "Alter <6 Monate, PCV-Impfstatus, adäquate Dosis Amoxicillin"
        },
        "gallery": []
      }
    ]
  }
});
