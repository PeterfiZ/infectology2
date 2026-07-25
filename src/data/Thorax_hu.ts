// Auto-generated updated Thorax_hu.ts
Object.assign(window.diseases, {
  "bacterial_respiratory": {
    "name": "Bakteriális légúti fertőzések",
    "icon": (window.diseaseMetadata?.bacterial_respiratory?.icon || '🫁'),
    "color": (window.diseaseMetadata?.bacterial_respiratory?.color || '#06b6d4'),
    "tables": [
      {
        "title": "Típusos vs. Atípusos Pneumonia Differenciáldiagnosztika",
        "headers": [
          "Jellemző",
          "Típusos pneumonia",
          "Atípusos pneumonia"
        ],
        "rows": [
          [
            "Kezdet",
            "Hirtelen, dramatisch (Schüttelfrost)",
            "Lassú, lappangó (prodroma)"
          ],
          [
            "Láz",
            "Magas (>39°C)",
            "Enyhe vagy mérsékelt láz"
          ],
          [
            "Mellkasi fájdalom",
            "Pleuritises, szúró (gyakori)",
            "Retrosternalis, égő (ritkább)"
          ],
          [
            "Köhögés",
            "Produktív",
            "Száraz, produktulatlan, kínzó"
          ],
          [
            "Köpet",
            "Gennyes, rozsdabarna",
            "Kevés, nyákos vagy hiányzik"
          ],
          [
            "Pleurális folyadék",
            "Gyakori (parapneumóniás)",
            "Ritka"
          ],
          [
            "Radiológia",
            "Lobáris/szegmentális konszolidáció, bronchogram",
            "Intersticiális, opálüveg, diffúz, foltos"
          ],
          [
            "Extrapulmonális tünetek",
            "Ritka (außer septische Streuung)",
            "Gyakori (Kopfschmerzen, Myalgie, Ohr/Hals, GI, Ausschlag)"
          ],
          [
            "Labor (Fehérvérsejtek)",
            "Leukocitózis, balra tolt minőségi vérkép",
            "Normális vagy enyhe leukocitózis"
          ],
          [
            "Labor (CRP/PCT)",
            "Kifejezetten emelkedett (PCT >0,5)",
            "Mérsékelten emelkedett (PCT <0,25)"
          ],
          [
            "Labor (Májenzimek)",
            "Többnyire normális",
            "Gyakran emelkedett (GOT, GPT)"
          ],
          [
            "Kórokozó",
            "<i>S. pneumoniae, H. influenzae, M. catarrhalis, S. aureus, Klebsiella</i>",
            "<i>Mycoplasma, Chlamydia, Legionella, Coxiella</i>, Vírusok"
          ]
        ]
      }
    ],
    "diseases": [
      {
        "id": "bacterial_pneumonia",
        "name": "Bakteriális pneumonia",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Streptococcus pneumoniae</i>",
          "gram": "Gram-pozitív",
          "shape": "Diplococcusok"
        },
        "epidemiology": {
          "incidence": "Leggyakoribb kórokozó a területen szerzett pneumonia (CAP) (30-40%)",
          "risk_groups": [
            "65 év feletti személyek",
            "Krónikus betegségben szenvedő betegek (COPD, Herzinsuffizienz, Diabetes)",
            "Immungeschwächte",
            "Lépeltávolított (splenectomizált) betegek",
            "Alkoholbetegek",
            "Dohányosok"
          ],
          "seasonality": "Téli-tavaszi csúcsok, gyakran influenza felülfertőződés",
          "transmission": "Cseppfertőzés, endogén aktiváció"
        },
        "pathomechanism": {
          "steps": [
            "Die Infektion beginnt in der Regel -val / -vel der Mikroaspiration von Bakterien, die die oberen Atemwege besiedeln. Die Virulenzfaktoren des Kórokozós (z.B. Kapsel) helfen, die Abwehrmechanismen des Wirts (z.B. Phagozytose) zu umgehen.",
            "Die Bakterien vermehren sich in den Alveolen és lösen eine heftige Entzündungsreaktion aus. Freigesetzte Toxine (z.B. Pneumolysin) schädigen die Epithelzellen.",
            "Entzündungszellen (Neutrophile), rote Blutkörperchen és Fibrin füllen die Alveolen, was zur Konsolidierung des Lungengewebes führt. Dieser Prozess ist számára das charakteristische Bild der Lobärpneumonie verantwortlich."
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
          "incubation": "1-3 nap",
          "onset": "Hirtelen -val / -vel dramatischem Kezdet",
          "symptoms": [
            {
              "name": "Hirtelener Kezdet",
              "description": "Gekennzeichnet durch hohes Láz, Schüttelfrost és allgemeines Krankheitsgefühl.",
              "severity": "severe"
            },
            {
              "name": "Respiratorische Tünetek",
              "description": "Anfänglich trockener Köhögés, der später produktiv wird és typischerweise -val / -vel rostbraunem Köpet einhergeht. Pleuritische, stechende Mellkasi fájdalom és Atemnot sind gyakori.",
              "severity": "mvagyate"
            },
            {
              "name": "Atypische Präsentation",
              "description": "Bei älteren Menschen kann Láz fehlen; eine Bewusstseinsstörung kann das führende Symptom sein.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Tachypnoe, Tachykardie",
            "Dämpfung esetén / -nál Perkussion über dem betroffenen Lappen",
            "Bronchialatmen, Rasselgeräusche (Crepitatio)",
            "Erhöhte Bronchophonie és Stimmfreval/velus",
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
              "interpretation": "Typisch számára bakterielle Infektion"
            },
            {
              "test": "CRP",
              "finding": "Deutlich erhöht (>100 mg/L)",
              "interpretation": "Marker számára aktive Entzündung"
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
              "interpretation": "Kórokozóidentifikation"
            }
          ],
          "imaging": [
            {
              "modality": "Thorax-Röntgen (PA+seitlich)",
              "finding": "Lobáris/szegmentális konszolidáció, bronchogram",
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
              "finding": "Gram+ lanzettförmige Diplococcusok, >25 Neutrophile/Gesichtsfeld",
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
            "name": "CURB-65 Score - Pneumonie-Súlyosegrad",
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
                "label": "Blutdruck (Syst < 90 vagy Diast ≤ 60 mmHg)",
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
                "text": "Niedriges Risiko (Mortalität <3%). Ambulante Kezelés erwägen."
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
            "distinguishing": "Hyponatriämie, GI-Tünetek, atypisches Röntgenbild"
          },
          {
            "disease": "Klebsiella-Pneumonie",
            "distinguishing": "Alkoholbetegek, dunkler pflaumenmusartiger Köpet, Oberlappen"
          },
          {
            "disease": "Mykoplasmen-Pneumonie",
            "distinguishing": "Fiatal betegek, schleichender Kezdet, atypische Tünetek"
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
            "Magyar Infektológiai Társaság / Tüdőgyógyász Társaság"
          ],
          "empirical": {
            "cap_outpatient": {
              "title": "CAP - Ambulánsan kezelhető (Enyhe - CURB-65 0-1)",
              "drugs": [
                {
                  "drug": "Amoxicillin",
                  "dose": "3x500mg-1g p.o.",
                  "duration": "5 nap",
                  "note": "1. vonalbeli választandó szer (NICE). 5-Tage-Therapie i.d.R. ausreichend."
                },
                {
                  "drug": "Doxycyclin",
                  "dose": "200mg initial, dann 1x100mg p.o.",
                  "duration": "5 nap",
                  "note": "Penicillinallergia esetén."
                },
                {
                  "drug": "Clarithromycin",
                  "dose": "2x500mg p.o.",
                  "duration": "5 nap",
                  "note": "Alternatív."
                }
              ]
            },
            "cap_inpatient": {
              "title": "CAP - Osztályos felvétel (Mérsékelt - CURB-65 2)",
              "drugs": [
                {
                  "drug": "Amoxicillin + Clarithromycin",
                  "dose": "3x500mg-1g p.o./i.v. + 2x500mg p.o./i.v.",
                  "duration": "5 nap",
                  "note": "Atypische Abdeckung erforderlich (NICE)."
                },
                {
                  "drug": "Doxycyclin",
                  "dose": "200mg initial, dann 1x100mg p.o.",
                  "duration": "5 nap",
                  "note": "Monotherapie esetén / -nál Penicillinallergie."
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "1x500mg p.o./i.v.",
                  "duration": "5 nap",
                  "note": "Respiratorisches Fluorchinolon."
                }
              ]
            },
            "cap_icu": {
              "title": "CAP - Súlyos (CURB-65 3-5) / Intenzív osztály",
              "drugs": [
                {
                  "drug": "Co-Amoxiclav + Clarithromycin",
                  "dose": "1.2g i.v. q8h (8 óránként) + 500mg i.v. q12h (12 óránként)",
                  "duration": "7-10 nap",
                  "note": "NICE Empfehlung esetén / -nál schwerer CAP."
                },
                {
                  "drug": "Ceftriaxon + Clarithromycin",
                  "dose": "1x2g i.v. + 2x500mg i.v.",
                  "duration": "7-10 nap",
                  "note": "Gyakorie Alternatíve."
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "1x500mg i.v.",
                  "duration": "7-10 nap",
                  "note": "Bei Beta-Laktam-Allergie."
                }
              ]
            },
            "hap_early": {
              "title": "HAP - Nem súlyos / Korai kezdet",
              "drugs": [
                {
                  "drug": "Co-Amoxiclav",
                  "dose": "625mg p.o. 3x/nap vagy 1.2g i.v. 3x/nap",
                  "duration": "5 nap",
                  "note": "Választandó szer (NICE NG191)."
                },
                {
                  "drug": "Doxycyclin",
                  "dose": "100mg p.o.",
                  "duration": "5 nap",
                  "note": "Alternatíve."
                }
              ]
            },
            "hap_late_vap": {
              "title": "HAP - Súlyos / VAP / Magas kockázat",
              "drugs": [
                {
                  "drug": "Antipseudomonas Beta-Laktam",
                  "dose": "z.B. Piperacillin/Tazobactam, Cefepim, Meropenem",
                  "duration": "7 nap",
                  "note": "Komponente 1 (Gram-negatíve Abdeckung)."
                },
                {
                  "drug": "+ Antipseudomonas Fluorchinolon vagy Aminoglykosid",
                  "dose": "z.B. Ciprofloxacin, Amikacin",
                  "duration": "7 nap",
                  "note": "Komponente 2 (Dual Gram-negatíve Abdeckung)."
                },
                {
                  "drug": "+ MRSA-Abdeckung",
                  "dose": "Vancomycin vagy Linezolid",
                  "duration": "7 nap",
                  "note": "Komponente 3 (bei MRSA-Risiko >10-20%)."
                }
              ]
            },
            "vap_stenotrophomonas": {
              "title": "VAP - Stenotrophomonas maltophilia (Célzott)",
              "drugs": [
                {
                  "drug": "Trimethoprim/Sulfamethoxazol (TMP-SMX)",
                  "dose": "15-20 mg/kg/Tag (TMP) i.v. in 3-4 Einzeldosen",
                  "duration": "14 nap",
                  "note": "1. Wahl. Hohe Dosis erforderlich!"
                },
                {
                  "drug": "Levofloxacin",
                  "dose": "750 mg i.v. 1x/nap",
                  "duration": "14 nap",
                  "note": "Alternatíve."
                },
                {
                  "drug": "Cefiderocol",
                  "dose": "2g i.v. q8h (8 óránként)",
                  "duration": "14 nap",
                  "note": "Reserveantibiotikum."
                }
              ]
            }
          },
          "targeted": "Penicillinsensibel: Penicillin G 4x4 Mio. IE i.v.; Resistent: Ceftriaxon vagy Vancomycin",
          "supportive": [
            "O2-Therapie (SpO2 >92%)",
            "Flüssigkeitssubstitution",
            "Lázsenkung",
            "Thoraxdrainage esetén / -nál Empyem"
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
            "caption": "Gram-pozitíve, lanzettförmige Diplococcusok im Sputumpräparat.",
            "type": "Mikroskopie"
          }
        ]
      },
      {
        "id": "mediastinitis",
        "name": "Mediastinitis",
        "pathogen": {
          "type": "Baktérium",
          "name": "Polymikrobiell, gyakori <i>Staphylococcus aureus</i>, Streptokokken, Gram-negatíve Pálca, Anaerobier",
          "gram": "Gemischt",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Ritka, aber lebensbedrohliche Komplikation",
          "risk_groups": [
            "Postoperatív betegek",
            "Nach endoskopischen Eingriffen",
            "Oropharyngeale Infektionen",
            "Trauma",
            "Odontogene Infektionen",
            "Immunsuppression"
          ],
          "seasonality": "Nincs",
          "transmission": "Fortleitung aus beutánbartem Gewebe, chirurgische vagy endoskopische Intervention"
        },
        "pathomechanism": {
          "steps": [
            "Das Mediastinum kann von beutánbarten Geweben aus infiziert werden (z.B. Rachen, Speiseröhre, Zahn, Thoraxwand), után Endoskopie, Operation vagy Trauma.",
            "Die bakterielle Ausbreitung führt zu eitriger Entzündung, Gewebsnekrose és Abszessbildung im Mediastinum.",
            "Der Prozess führt zu Phlegmone, Zellnekrose és systemischer Entzündungsreaktion, die zu schwerer Sepsis, Schock és Multiorganversagen führen kann."
          ],
          "virulence_factors": [
            "Biofilm",
            "Toxine",
            "Polymikrobielle Gemeinschaft",
            "Gewebsnekrose"
          ]
        },
        "clinical": {
          "incubation": "Variabel, gyakori wenige nap bis hét",
          "onset": "Akut vagy subakut",
          "symptoms": [
            {
              "name": "Mellkasi fájdalom",
              "description": "Leitsymptom, gyakori stark, retrosternal/retrocardial, teilweise -val / -vel Schluckbeschwerden",
              "severity": "severe"
            },
            {
              "name": "Láz és B-Symptomatik",
              "description": "Entzündlicher Zustand, Tachykardie és Láz charakteristisch",
              "severity": "severe"
            },
            {
              "name": "Schluckbeschwerden / Heiserkeit",
              "description": "Mediastinale Entzündung vagy Abszess kann Ösophagus és Larynxbereich betreffen",
              "severity": "mvagyate"
            }
          ],
          "physical_exam": [
            "Láz, Tachykardie, Leukozytose",
            "Zervikale vagy supratrachiale Schwellung",
            "Mellkasi fájdalom, Schluckbeschwerden",
            "Hypotonie és Sepsiszeichen im schweren Verlauf"
          ],
          "complications": [
            "Septischer Schock",
            "Mediastinalabszess",
            "Ösophagusperforation",
            "Aorten- vagy Großgefäßerosion",
            "Pleuraempyem",
            "Tod"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Blutbild, CRP, PCT",
              "finding": "Entzündung, gyakori hohes PCT",
              "interpretation": "Súlyose Entzündung/Infektion"
            },
            {
              "test": "Blutkultur",
              "finding": "Kann positiv sein",
              "interpretation": "Verdacht auf Sepsis vagy hämatogene Streuung"
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
              "finding": "Mediastinale Aufweitung, evtl. Pleurális folyadék",
              "significance": "Erster Schritt, aber weniger spezifisch"
            }
          ],
          "microbiology": [
            {
              "test": "Chirurgische/Bronchoskopische Probenahme",
              "finding": "Kultur és PCR",
              "significance": "Célzotte Therapie és Resistenz"
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
                "dose": "4.5g i.v. 3x/nap",
                "duration": "Stationär/i.v.",
                "note": "Breites Spektrum, gyakorie 1. Wahl"
              },
              {
                "drug": "+ Vancomycin",
                "dose": "15-20 mg/kg i.v. 2x/nap",
                "duration": "",
                "note": "MRSA-Abdeckung"
              },
              {
                "drug": "+ Clindamycin vagy Metronidazol",
                "dose": "600mg i.v. 3x/nap",
                "duration": "",
                "note": "Anaerobe Abdeckung"
              }
            ],
            "icu": [
              {
                "drug": "Meropenem",
                "dose": "1g i.v. 3x/nap",
                "duration": "",
                "note": "Súlyoser, kritischer Zustand"
              },
              {
                "drug": "+ Vancomycin",
                "dose": "15-20 mg/kg i.v. 2x/nap",
                "duration": "",
                "note": "MRSA/G+ Abdeckung"
              }
            ]
          },
          "targeted": "Anpassung után Kultur és Empfindlichkeit; Quellensanierung és chirurgische Drainage entscheidend.",
          "supportive": [
            "Dringendes chirurgisches Konsil",
            "i.v. Flüssigkeitssubstitution",
            "Vasopressoren esetén / -nál schwerer Sepsis",
            "Ernährung",
            "Atemwegsalattstützung"
          ],
          "prevention": [
            "Antibiotikaprophylaxe vor Eingriffen",
            "Aseptische Mütungstechnik",
            "Kezelés von Zahn- és Pharynxinfektionen"
          ]
        },
        "prognosis": {
          "mortality": "10-40% je után Ursache és Kezeléssbeginn",
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
            "caption": "Thorax-CT -val / -vel Mediastinalverbreiterung és Abszessbildung.",
            "type": "CT Bildgebung"
          }
        ]
      },
      {
        "id": "tuberculosis",
        "name": "Tuberculosis (TBC)",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Mycobacterium tuberculosis</i> Complex",
          "gram": "Säurefest",
          "shape": "Pálca"
        },
        "epidemiology": {
          "incidence": "Weltweit ca. 10.6 Mio. Betegségen/Jahr, führende infektionsbedingte Todesursache",
          "risk_groups": [
            "HIV-Infizierte",
            "Immunsupprimierte",
            "Migranten aus Hochendemiegebieten",
            "Obdachlose",
            "Diabetiker"
          ],
          "seasonality": "Nincs",
          "transmission": "Tröpfcheninfektion (aerogen)"
        },
        "pathomechanism": {
          "steps": [
            "Inhalation von Mycobacterium tuberculosis Aerosolen in die Alveolen.",
            "Phagozytose durch Alveolarmakrophagen. Hemmung der Phagolysosomenfusion, Bildung des Ghon-Primärkomplexes.",
            "T-Zell-Aktivierung, Granulombildung -val / -vel verkäsender Nekrose. Latenz vagy Progression zu aktiver Tuberkulose."
          ],
          "virulence_factors": [
            "Mycolsäuren",
            "Cord-Faktor",
            "ESX-1 Sekretionssystem"
          ]
        },
        "clinical": {
          "incubation": "Monate bis Jahrzehnte (Latenz); primär 2-12 hét",
          "onset": "Schleichend",
          "symptoms": [
            {
              "name": "B-Symptomatik",
              "description": "Nachtschweiß, Gewichtsverlust, leichtes Láz, Fatigue.",
              "severity": "mvagyate"
            },
            {
              "name": "Respiratorische Tünetek",
              "description": "Chronischer Köhögés (>2-3 hét), Bluthusten (Hämoptoe), Mellkasi fájdalom.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Kachexie, Rasselgeräusche über den Lungenoberlappen, Dämpfung esetén / -nál Erguss"
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
              "finding": "Säurefeste Pálca im Sputum",
              "interpretation": "Schnellutánweis"
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
            "CDC / ATS / IDSA TB Guidelines",
            "Magyar Tüdőgyógyász Társaság Irányelvei"
          ],
          "empirical": {
            "title": "Standard 4-fach Therapie (Sensible Tbc)",
            "drugs": [
              {
                "drug": "Isoniazid (H) + Pyridoxin (B6)",
                "dose": "5 mg/kg p.o. 1x/nap + B6 25-50mg/Tag",
                "duration": "2 hónap Initial + 4 hónap Kontinuation",
                "note": "Pyridoxin zur Neuropathie-Prophylaxe."
              },
              {
                "drug": "Rifampicin (R)",
                "dose": "10 mg/kg p.o. 1x/nap",
                "duration": "2 hónap + 4 hónap",
                "note": "Rot-orange Verfärbung von Körperflüssigkeiten."
              },
              {
                "drug": "Pyrazinamid (Z)",
                "dose": "20-30 mg/kg p.o. 1x/nap",
                "duration": "2 hónap Initialphase",
                "note": "Hepatotoxisch."
              },
              {
                "drug": "Ethambutol (E)",
                "dose": "15-20 mg/kg p.o. 1x/nap",
                "duration": "2 hónap Initialphase",
                "note": "Optikusneuritis-Risiko."
              }
            ]
          },
          "targeted": "2 hónap 2HRZE, gefolgt von 4 hónapn 2HR (Gesamtdauer 6 hónap). MDR-TB esetén BPaLM-Schema (Bedaquilin + Pretomanid + Linezolid + Moxifloxacin) számára 6 hónap (WHO 2024)!",
          "supportive": [
            "Isolierung (Unterdruckzimmer)",
            "Beobachtete Einnahme (DOTS)",
            "Leberwertkontrollen"
          ],
          "prevention": [
            "Kontaktpersonen-Nachverfolgung",
            "Kezelés der latenten TB (LTBI) -val / -vel 3HP vagy 4R"
          ]
        },
        "prognosis": {
          "mortality": "Heilungsrate >95% esetén / -nál Adhärenz",
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
        "name": "Legionellosis (Legionáriusbetegség)",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Legionella pneumophila</i>",
          "gram": "Gram-negatív",
          "shape": "Pálca"
        },
        "epidemiology": {
          "incidence": "2-10% aller hospitalisierten CAP-Fälle",
          "risk_groups": [
            "Personen >50 J.",
            "Dohányosok",
            "Chronische Herzkranke/Lungenkranke",
            "Reisende"
          ],
          "seasonality": "Sommer-Herbst",
          "transmission": "Aerosolinhalation aus Wassersystemen (Duschen, Kühltürme). Nincs Mensch-zu-Mensch-Übertragung!"
        },
        "pathomechanism": {
          "steps": [
            "Inhalation von Legionellen-Aerosolen.",
            "Phagozytose durch Alveolarmakrophagen, intrazelluläre Vermehrung im Phagolysosom.",
            "Nekrotisierende Lobärpneumonie -val / -vel Zytokinfreisetzung."
          ],
          "virulence_factors": [
            "Dot/Icm Typ-IV Sekretionssystem",
            "Mip-Protein"
          ]
        },
        "clinical": {
          "incubation": "2-10 nap (Legionärskrankheit); 24-48h (Pontiac-Láz)",
          "onset": "Akut, rasch progredient",
          "symptoms": [
            {
              "name": "Hohes Láz & Schüttelfrost",
              "description": "Gefolgt von unproduktivem vagy eitrigem Köhögés.",
              "severity": "severe"
            },
            {
              "name": "Gastrointestinale Tünetek",
              "description": "Wässrige Diarrhö (30-50%), Bauchschmerzen.",
              "severity": "mvagyate"
            },
            {
              "name": "ZNS-Tünetek",
              "description": "Kopfschmerzen, Verwirrtheit, Delir.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Hohes Láz, relative Bradykardie (Faget-Zeichen), Rasselgeräusche, Verwirrtheit"
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
            "name": "CURB-65 Score - Pneumonie-Súlyosegrad",
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
                "label": "Blutdruck (Syst < 90 vagy Diast ≤ 60 mmHg)",
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
            "distinguishing": "Nincs Diarrhö/Verwirrtheit, Urin-Antigen"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Célzotte Antibiose esetén / -nál Legionellose",
            "drugs": [
              {
                "drug": "Levofloxacin",
                "dose": "500-750 mg p.o./i.v. 1x/nap",
                "duration": "7-14 nap",
                "note": "1. Wahl! Schnelle Bakterizidie."
              },
              {
                "drug": "Azithromycin",
                "dose": "500 mg p.o./i.v. 1x/nap",
                "duration": "5-10 nap",
                "note": "Sehr gut wirksame Alternatíve."
              }
            ]
          },
          "targeted": "Levofloxacin vagy Azithromycin. Beta-Laktame sind unwirksam!",
          "supportive": [
            "O2-Gabe",
            "Ausgleich der Hyponatriämie"
          ],
          "prevention": [
            "Thermische Desinfektion von Wassersystemen (>60°C)"
          ]
        },
        "prognosis": {
          "mortality": "5-10% alatt Therapie; bis 30% esetén / -nál Immunsuppression",
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
        "name": "Mycoplasma pneumoniae pneumonia",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Mycoplasma pneumoniae</i>",
          "gram": "Nincs Gram-Färbung",
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
            "Kälteagglutinin-Bildung (IgM ellen I-Antigen), hämolytische Anämie, Erythema multiforme / MIRM."
          ],
          "virulence_factors": [
            "P1-Adhäsin",
            "CARDS-Toxin"
          ]
        },
        "clinical": {
          "incubation": "1-3 hét",
          "onset": "Schleichend",
          "symptoms": [
            {
              "name": "Quälender Reizhusten",
              "description": "Trocken, anfallsartig, wochenlang.",
              "severity": "mvagyate"
            },
            {
              "name": "Kopfschmerzen & Prodrom",
              "description": "Pharyngitis, Myringitis bullosa, Otitis.",
              "severity": "mvagyate"
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
                "dose": "500mg nap 1, dann 250mg nap 2-5 p.o.",
                "duration": "5 nap",
                "note": "1. Wahl esetén / -nál Kindern és Erwachsenen."
              },
              {
                "drug": "Doxycyclin",
                "dose": "100mg 2x/nap p.o.",
                "duration": "7-10 nap",
                "note": "Alternatíve esetén / -nál Erwachsenen."
              }
            ]
          },
          "targeted": "Makrolide, Doxycyclin vagy Fluorchinolone. Beta-Laktame sind wirkungslos!",
          "supportive": [
            "Symptomatische Köhögésdämpfung"
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
        "name": "Chlamydia pneumoniae fertőzés",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Chlamydia pneumoniae</i>",
          "gram": "Gram-negatív",
          "shape": "Kugelförmig"
        },
        "epidemiology": {
          "incidence": "5-10% der CAP-Fälle",
          "risk_groups": [
            "Schulkinder, ältere Heimbewnélkülr"
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
          "incubation": "3-4 hét",
          "onset": "Biphasisch",
          "symptoms": [
            {
              "name": "Pharyngitis & Bronchitis",
              "description": "Erst Pharyngitis/Heiserkeit, dann hét später Bronchitis/Pneumonie.",
              "severity": "mvagyate"
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
              "interpretation": "Választandó szer"
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
                "dose": "100mg 2x/nap p.o.",
                "duration": "10-14 nap",
                "note": "1. Wahl."
              },
              {
                "drug": "Azithromycin",
                "dose": "500mg nap 1, 250mg nap 2-5",
                "duration": "5 nap",
                "note": "Alternatíve."
              }
            ]
          },
          "targeted": "Doxycyclin vagy Makrolide.",
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
        "name": "Psittacosis (Ornithosis / Papagájláz)",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Chlamydia psittaci</i>",
          "gram": "Gram-negatív",
          "shape": "Kugelförmig"
        },
        "epidemiology": {
          "incidence": "Ritka Zoonose",
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
          "incubation": "1-2 hét",
          "onset": "Hirtelen",
          "symptoms": [
            {
              "name": "Sehr starke Kopfschmerzen",
              "description": "Mit hohem Láz, Schüttelfrost és trockenem Köhögés.",
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
            "disease": "Q-Láz",
            "distinguishing": "Viehkontakt vs. Vogelkontakt"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Therapie der Ornithose",
            "drugs": [
              {
                "drug": "Doxycyclin",
                "dose": "100mg 2x/nap p.o.",
                "duration": "10-14 nap",
                "note": "1. vonalbeli választandó szer!"
              }
            ]
          },
          "targeted": "Doxycyclin 100mg 2x/nap számára 10-14 nap.",
          "supportive": [
            "Symptomatische Maßnahmen"
          ],
          "prevention": [
            "Quarantäne számára Importvögel"
          ]
        },
        "prognosis": {
          "mortality": "<1% alatt Doxycyclin",
          "prognostic_scores": [],
          "factors": "Therapiebeginn"
        },
        "gallery": []
      },
      {
        "id": "q_fever_resp",
        "name": "Q-láz (Coxiella burnetii légúti fertőzés)",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Coxiella burnetii</i>",
          "gram": "Gram-negatív",
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
          "incubation": "2-3 hét",
          "onset": "Hirtelen",
          "symptoms": [
            {
              "name": "Retroorbitale Kopfschmerzen",
              "description": "Extrem stark, -val / -vel hohem Láz, Myalgien és Pneumonie/Hepatitis.",
              "severity": "severe"
            },
            {
              "name": "Chronisches Q-Láz",
              "description": "Kultur-negative Endokarditis esetén / -nál Klappenpatienten.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Relative Bradykardie, Hepatomegalie"
          ],
          "complications": [
            "Chronische Q-Endokarditis, Q-Láz-Erschöpfungssyndrom"
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
            "title": "Therapie des Q-Lázs",
            "drugs": [
              {
                "drug": "Doxycyclin (Akut)",
                "dose": "100mg 2x/nap p.o.",
                "duration": "14 nap",
                "note": "1. Wahl!"
              },
              {
                "drug": "Doxycyclin + Hydroxychloroquin (Chronische Endokarditis)",
                "dose": "100mg 2x/nap + 200mg 3x/nap",
                "duration": "≥18-24 hónap",
                "note": "Hydroxychloroquin alkalisiert das Phagolysosom."
              }
            ]
          },
          "targeted": "Akut: Doxycyclin 14 nap. Chronisch: Doxycyclin + Hydroxychloroquin ≥18-24 hónap.",
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
    "name": "Kardiovaszkuláris fertőzések",
    "icon": (window.diseaseMetadata?.cardiovascular?.icon || '🫀'),
    "color": (window.diseaseMetadata?.cardiovascular?.color || '#b91c1c'),
    "diseases": [
      {
        "id": "endocarditis",
        "name": "Infektív endocarditis",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Staphylococcus aureus</i> (30-40%), Viridans-Streptokokken, Enterokokken, CoNS, HACEK-Gruppe",
          "gram": "Überwiegend Gram-pozitív",
          "shape": "Kokken"
        },
        "epidemiology": {
          "incidence": "3-10 Fälle / 100.000 Einwnélkülr/Jahr",
          "risk_groups": [
            "Träger von Klappenersatz / TAVI",
            "Z.n. früherer Endokarditis",
            "Angeborene Herzfehler",
            "i.v.-Drogenkonsumenten",
            "Hämodialysepatienten"
          ],
          "seasonality": "Nincs",
          "transmission": "Bakteriämie után zahnärztlichen, chirurgischen vagy endovaskulären Eingriffen / Hautverletzungen"
        },
        "pathomechanism": {
          "steps": [
            "Endothelschaden der Herzklappe, Bildung einer nicht-bakteriellen thrombotischen Endokarditis (NBTE).",
            "Transiente Bakteriämie führt zur Kórokozóanheftung (Fibronektin-bindende Proteine) és Kolonisierung.",
            "Bakterienvermehrung, Fibrin- és Thrombozytenablagerung bilden infizierte VEGETATIONEN. Klappendestruktion, Abszessbildung és embolische Streuung (Gehirn, Milz, Niere, Haut)."
          ],
          "virulence_factors": [
            "Biofilmbildung",
            "Fibronektin-bindendes Protein A (FnBPA)",
            "Clumping-Faktor",
            "Enterokokken-Ebp-Pili"
          ]
        },
        "clinical": {
          "incubation": "Tage bis hét (S. aureus akut; Strep/Enterokokken subakut)",
          "onset": "Akut fulminant vagy subakut schleichend",
          "symptoms": [
            {
              "name": "Láz & Neues Herzgeräusch",
              "description": "Gekennzeichnet durch unklares Láz, Schüttelfrost és ein neu aufgetretenes Regurgitationsgeräusch (Klappeninsuffizienz).",
              "severity": "severe"
            },
            {
              "name": "Embolische Phänomene",
              "description": "Schlaganfall, miliare Milz-/Niereninfarkte, Janeway-Läsionen (schmerzlose erythematöse Flecken an Handflächen/Fußsohlen).",
              "severity": "severe"
            },
            {
              "name": "Immunologische Phänomene",
              "description": "Osler-Knötchen (schmerzhafte Knötchen an Finger-/Zehenkuppen), Roth-Spots (Netzhautblutungen -val / -vel hellem Zentrum), Glomerulonephritis.",
              "severity": "mvagyate"
            }
          ],
          "physical_exam": [
            "Neues vagy sich veränderndes Herzgeräusch",
            "Janeway-Läsionen, Osler-Knötchen, Splitterblutungen alatt den Nägeln",
            "Splenomegalie, Petechien der Konjunktiven",
            "Neurologische Ausfälle esetén / -nál septischer Embolie"
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
                "Hauptkriterium 1 (Mikrobiologie): Typische Kórokozó in min. 2 separaten Blutkulturen (S. aureus, Viridans-Strep, S. gallolyticus, Enterokokken, HACEK) vagy Coxiella burnetii Phase-I-IgG >1:800",
                "Hauptkriterium 2 (Bildgebung): TTE/TEE positiv számára Vegetation, Abszess, Pseudoaneurysma, Klappenperforation VAGY 18F-FDG PET/CT / Kardio-CT positiv számára paravalvuläre Läsionen",
                "Nebenkriterien: Prädisposition (Herzklappe, i.v.-Drogen), Láz ≥38°C, vaskuläre Phänomene (Embolien, Janeway), immunologische Phänomene (Osler, Roth, RF), mikrobiologischer Hinweis"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "Blutkulturen (HK)",
              "finding": "Mindestens 3 HK-Sets im Abstand von 30 Min. VOR Antibiose!",
              "interpretation": "Essenziell számára gezielte Therapie"
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
              "modality": "18F-FDG PET/CT vagy SPECT/CT",
              "finding": "Hypermetabole paravalvuläre Herde esetén / -nál Klappenprothesen",
              "significance": "ESC 2023 Hauptkriterium esetén / -nál Prothesenendokarditis!"
            },
            {
              "modality": "Kopf-/Abdomen-MRT",
              "finding": "Stumme septische Embolien (Gehirn, Milz, Niere)",
              "significance": "Staging és Embolierisiko"
            }
          ]
        },
        "differential": [
          {
            "disease": "Nicht-bakterielle thrombotische Endokarditis (NBTE / Marantisch)",
            "distinguishing": "Marantius esetén / -nál Tumorpatienten, sterile Blutkulturen, kein Láz"
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
            "title": "Empirikuse Antibiose esetén / -nál akuter Infektiöser Endokarditis (ESC 2023)",
            "drugs": [
              {
                "drug": "Native Klappe: Ampicillin + Oxacillin/Flucloxacillin + Ceftriaxon",
                "dose": "Ampicillin 12g/Tag i.v. in 4-6 Dosen + Flucloxacillin 12g/Tag i.v. in 4-6 Dosen + Ceftriaxon 2g i.v. 1x/nap",
                "duration": "4-6 hét",
                "note": "Deckt S. aureus, Streptokokken és Enterokokken ab."
              },
              {
                "drug": "Klappenprothese (<1 Jahr postop): Vancomycin + Gentamicin + Rifampicin",
                "dose": "Vancomycin 30-60 mg/kg/Tag i.v. + Gentamicin 3 mg/kg/Tag i.v. + Rifampicin 900mg/Tag p.o. in 3 Dosen",
                "duration": "Mindestens 6 hét",
                "note": "Rifampicin greift Fremdkörper-Biofilm an!"
              }
            ]
          },
          "targeted": "Streptokokken (Penicillin G 4-6 hét vagy Ceftriaxon + Gentamicin 2 hét); MSSA (Flucloxacillin 4-6 hét); MRSA (Vancomycin vagy Daptomycin 10mg/kg/Tag); Enterococcus faecalis (Ampicillin 12g/Tag + Ceftriaxon 4g/Tag számára 6 hét).",
          "supportive": [
            "Dringendes herzchirurgisches Konsil (Indikationen: Refraktäre Herzinsuffizienz, unkontrollierte Infektion/Abszess, Embolieprävention esetén / -nál Vegetation >10mm)"
          ],
          "prevention": [
            "Endokarditisprophylaxe -val / -vel Amoxicillin 2g p.o. 30-60 Min. vor zahnärztlichen Eingriffen NUR esetén / -nál HÖCHSTRISIKOPATIENTEN (Klappenersatz, Z.n. IE, angeborene Herzfehler -val / -vel Shunt)!"
          ]
        },
        "prognosis": {
          "mortality": "15-20% In-Hospital Mortalität; 30% 1-Jahres-Mortalität",
          "prognostic_scores": [
            "ESC Endocarditis Risk Score"
          ],
          "factors": "S. aureus Kórokozó, Herzinsuffizienz, Paravalvulärabszess, hohes Alter"
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
        "name": "CIED (Kardiális elektronikus eszköz) fertőzés",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Staphylococcus epidermidis</i> / CoNS (50-70%), <i>Staphylococcus aureus</i> (25%), Cutibacterium acnes, Gram-negatíve Pálca",
          "gram": "Gram-pozitív",
          "shape": "Kokken"
        },
        "epidemiology": {
          "incidence": "1-2% aller CIED-Implantationen",
          "risk_groups": [
            "Aggregatwechsel / Revisionen",
            "CRT / ICD Mehrkammersysteme",
            "Diabetes, Niereninsuffizienz, Antikoagulation (Taschenhämatom)"
          ],
          "seasonality": "Nincs",
          "transmission": "Perioperative Inokulation vagy hämatogene Besiedlung"
        },
        "pathomechanism": {
          "steps": [
            "Bakterielle Besiedlung der Schrittmachertasche vagy der Sondenoberfläche.",
            "Ausgeprägte Biofilmbildung auf den Kunststoff-/Metallsonden.",
            "Ausbreitung entlang der Sonden in die V. cava superior, das rechte Atrium/Ventrikel és die Trikuspidalklappe (Sondenendokarditis)."
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
              "description": "Rötung, Schwellung, Erwärmung, Fluktuation vagy Perforation/Erosion der Schrittmachertasche.",
              "severity": "mvagyate"
            },
            {
              "name": "Systemische Sondenendokarditis",
              "description": "Unklares Láz, Schüttelfrost, pulmonale septische Embolien (Köhögés, Pleuraschmerz).",
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
              "interpretation": "Essenziell esetén / -nál Sondeninfektion"
            },
            {
              "test": "Taschen-Abstrich / Gewebekultur",
              "finding": "S. epidermidis / S. aureus",
              "interpretation": "Kórokozóbestimmung"
            }
          ],
          "imaging": [
            {
              "modality": "TEE (Transösophageale Echokardiographie)",
              "finding": "Sondenvegetationen, Trikuspidalklappenbefall",
              "significance": "Goldstandard"
            },
            {
              "modality": "18F-FDG PET/CT vagy SPECT/CT",
              "finding": "Fokale FDG-Anreicherung im Bereich der Tasche vagy des Sondenverlaufs",
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
            "title": "Empirikuse Antibiose & Sondenextraktion esetén / -nál CIED-Infektion",
            "drugs": [
              {
                "drug": "Vancomycin + Cefepim vagy Piperacillin/Tazobactam",
                "dose": "Vancomycin 15-20 mg/kg i.v. 2x/nap + Cefepim 2g i.v. 2x/nap",
                "duration": "Bis zur Extraktion",
                "note": "Breitspektrum számára Staphylokokken és Gram-negatíve."
              }
            ]
          },
          "targeted": "VOLLSTÄNDIGE ENTFERNUNG / EXTRAKTION DES GESAMTEN CIED-SYSTEMS (Aggregat + ALLE Sonden) IST OBLIGATORISCH (EHRA/ESC Klasse I)! Konservative Antibiose alleine versagt in >80-90%. Antibiose után Extraktion: 2 hét esetén / -nál unkomplizierter Tascheninfektion; 4-6 hét esetén / -nál Sondenendokarditis/Bakteriämie.",
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
          "mortality": "5-15% esetén / -nál Sondenendokarditis",
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
        "name": "Myocarditis (Szívizomgyulladás)",
        "pathogen": {
          "type": "Virus / Baktérium / Immunologisch",
          "name": "Enteroviren (Coxsackie B), Parvovirus B19, HHV-6, SARS-CoV-2, Influenza, Borrelia burgdorferi, Riesenzell-Myokarditis, Immune-Checkpoint-Inhibitoren",
          "gram": "Variabel",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "10-22 pro 100.000 Personen/Jahr",
          "risk_groups": [
            "Junge Erwachsene (20-40 J.), männliches Geschlecht",
            "Sportler esetén / -nál körperlicher Belastung während Infekt",
            "Immalattápiában részesülő betegek"
          ],
          "seasonality": "Herbst-Winter-Gipfel (viral)",
          "transmission": "Natur der Grunderkrankung / virale Atemwegs- vagy Magen-Darm-Infektion"
        },
        "pathomechanism": {
          "steps": [
            "Virale Invasion der Myozyten via Rezeptoren (CAR - Coxsackie-Adenovirus-Rezeptor).",
            "Direkte Zytolyse és virale Replikation im Herzmuskel.",
            "Immunverval/veltelte Gewebezerstörung durch CD8+ T-Zellen és Autoantikörper. Progression zu kardialem Remodeling és Dilatativer Kardiomyopathie (DCM)."
          ],
          "virulence_factors": [
            "CAR-Rezeptorbindung",
            "Zytotoxische Zytokine"
          ]
        },
        "clinical": {
          "incubation": "1-3 hét után viralem Infekt",
          "onset": "Akut (Herzinfarkt-ähnlich) bis fulminant",
          "symptoms": [
            {
              "name": "Mellkasi fájdalom",
              "description": "Oft infarktähnlich vagy pleuritisch/perikarditisch.",
              "severity": "severe"
            },
            {
              "name": "Herzinsuffizienz-Tünetek",
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
            "Súlyose ventrikuläre Arrhythmien (VT/VF)",
            "Dilatative Kardiomyopathie (DCM)",
            "Hirtelener Herztod"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Kardiales Troponin I/T & CK-MB",
              "finding": "Ausgeprägt erhöht (Myozytennekrose)",
              "interpretation": "Marker számára Herzmuskelschaden"
            },
            {
              "test": "NT-proBNP / BNP",
              "finding": "Stark erhöht",
              "interpretation": "Ausmaß der ventrikulären Wandspannung"
            },
            {
              "test": "Borrelien-Serologie / Vírusok-PCR",
              "finding": "Borrelia-IgM/IgG vagy Virusutánweis",
              "interpretation": "Ätiologiesuche"
            }
          ],
          "imaging": [
            {
              "modality": "Kardio-MRT (CMR)",
              "finding": "Lake-Louise-Kriterien positiv (T2-Ödem + T1 Late Gadolinium Enhancement in epicardialen/mesokardialen Abschnitten)",
              "significance": "Goldstandard der nicht-invasiven Diagnosztika!"
            },
            {
              "modality": "Echokardiographie",
              "finding": "Regionale vagy globale Wandbewegungsstörungen, LVEF-Reduktion, Perikarderguss",
              "significance": "Erstevaluation"
            }
          ],
          "microbiology": [
            {
              "test": "Endomyokardbiopsie (EMB)",
              "finding": "Histologie (Dallas-Kriterien), Immunhistochemie, Virus-PCR",
              "significance": "Goldstandard esetén / -nál fulminantem Verlauf / Riesenzellmyokarditis!"
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
                "duration": "Mindestens 6 hónap",
                "note": "Standard-Herzinsuffizienztherapie esetén / -nál LVEF-Reduktion."
              }
            ]
          },
          "targeted": "SZIGORÚ SPORTTILALOM 3-6 HÓNAPIG (ESC Klasse I)! Immunsuppression (Hochdosis-Steroide + Azathioprin/Ciclosporin) NUR esetén / -nál utángewiesener Riesenzellmyokarditis, eosinophiler vagy autoimmuner Myokarditis. Borreliosis (Lyme-kór) esetén: Ceftriaxon 2g i.v. 1x/nap számára 14-21 nap. Kardiogén sokk esetén: VAD / ECMO (Life-Support).",
          "supportive": [
            "Körperliche Schonung",
            "Antiarrhythmika",
            "Kardiogene Schock-Therapie"
          ],
          "prevention": [
            "Nincs Sport während fieberhafter Infekte!",
            "Grippe- és COVID-Impfung"
          ]
        },
        "prognosis": {
          "mortality": "50% Spontanheilung; 10-20% Progression zu DCM; Riesenzellmyokarditis >80% Mortalität nélkül Immunsuppression",
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
        "name": "Pericarditis (Szívburokgyulladás)",
        "pathogen": {
          "type": "Virus / Idiopathisch / Baktérium",
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
          "transmission": "Virale Atemwegs- vagy GI-Infektion"
        },
        "pathomechanism": {
          "steps": [
            "Entzündung des viszeralen és parietalen Perikardblattes.",
            "Fibrinöse Exsudation (\"Brot-und-Butter-Perikarditis\") és Flüssigkeitsansammlung im Perikardraum.",
            "Entzündungsreiz verursacht scharfe pleuritische Mellkasi fájdalom és Perikardreiben."
          ],
          "virulence_factors": [
            "Zytokinausschüttung",
            "Fibrinablagerung"
          ]
        },
        "clinical": {
          "incubation": "1-2 hét után viralem Prodrom",
          "onset": "Akut",
          "symptoms": [
            {
              "name": "Scharfer retrosternaler Brustschmerz",
              "description": "Charakteristisch: Verstärkung im Liegen és esetén / -nál Inspiration; Linderung beim Nach-Vorne-Beugen!",
              "severity": "severe"
            },
            {
              "name": "Perikardreiben",
              "description": "Lederknirschen-ähnliches Geräusch esetén / -nál der Auskultation.",
              "severity": "mvagyate"
            }
          ],
          "physical_exam": [
            "Perikardreiben (Pathognomonisch!), Pulsus paradoxus esetén / -nál Tamponade, Tachykardie"
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
              "finding": "Enyhe erhöht in 30% (Myoperikarditis)",
              "interpretation": "Beteiligung des Herzmuskels"
            }
          ],
          "imaging": [
            {
              "modality": "EKG",
              "finding": "ST-Strecken-Hebungen konkavbögig aus dem absteigenden T-Schenkel in fast allen Ableitungen (I, II, aVF, V2-V6) + PR-Depression (aVR -val / -vel ST-Senkung és PR-Hebung)",
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
                "drug": "Ibuprofen VAGY Aspirin + COLCHICIN",
                "dose": "Ibuprofen 600-800mg q8h (8 óránként) p.o. OR Aspirin 750-1000mg q8h (8 óránként) p.o. PLUS Colchicin 0.5mg 1-2x/nap",
                "duration": "NSAID 1-2 hét (ausschleichen); Colchicin 3 MONATE!",
                "note": "Colchicin HALBIERT die Rezidivrate (ESC Klasse I)!"
              }
            ]
          },
          "targeted": "Zweitlinientherapie: Niedrigdosierte Glukokortikoide (Prednison 0.2-0.5 mg/kg/Tag) NUR esetén / -nál Unverträglichkeit/Versagen von NSAID+Colchicin vagy autoimmuner Genese (Steroide ERHÖHEN das Rezidivrisiko!). Perikardpunktion esetén / -nál Tamponade vagy Verdacht auf eitrige/neoplastische Perikarditis.",
          "supportive": [
            "Körperliche Schonung bis zur CRP-Normalisierung"
          ],
          "prevention": [
            "3-monatige Colchicin-Einnahme verhindert Rezidive!"
          ]
        },
        "prognosis": {
          "mortality": "<1% esetén / -nál unkomplizierter Perikarditis; 15-30% Rezidivrisiko nélkül Colchicin",
          "prognostic_scores": [],
          "factors": "Láz >38°C, großer Erguss, Herzbeuteltamponade, Mangel an Colchicin"
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
        "name": "Vaszkuláris graft / Érprotézis fertőzés",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Staphylococcus aureus</i>, Koagulase-negative Staphylokokken (CoNS), <i>Pseudomonas aeruginosa</i>, Enterobacteriaceae, Cutibacterium, Candida",
          "gram": "Gram-pozitív és Gram-negatív",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "1-6% esetén / -nál offenen aortalen/peripheren Bypass-Operationen, 0.5-1.5% esetén / -nál endovaskulären Stentgrafts (EVAR / TEVAR)",
          "risk_groups": [
            "Aortás vagy perifériás érrekonstrukción átesett betegek",
            "EVAR / TEVAR Stentgraft-Träger",
            "Inguinale Wundkomplikationen (Leistenzugang)",
            "Diabetes mellitus, Adipositas, Re-Operationen"
          ],
          "seasonality": "Nincs",
          "transmission": "Perioperative Inokulation (intraoperative Kontamination), Ausbreitung aus Leistenwundinfektion vagy hämatogene Besiedlung"
        },
        "pathomechanism": {
          "steps": [
            "Inokulation & Biofilm: Bakterien lagern sich an die synthetische Prothese (PTFE, Dacron) an és bilden einen dichten Biofilm.",
            "Perigraft-Entzündung & Abszess: Ausbildung von periprothetischem Exsudat, Abszessen, Gaseinschlüssen és hiányziker Gewebeintegration (Non-incorporation).",
            "Anastomoseninsuffizienz & Pseudoaneurysma: Zerstörung der Nahtreihe és nativen Gefäßwand, was zu Pseudoaneurysmen vagy aorto-enterischen / aorto-bronchialen Fisteln führt.",
            "Septische Embolisation: Verschleppung infizierter Thromben aus dem Prothesenlumen után peripher."
          ],
          "virulence_factors": [
            "Dacron/PTFE-Adhäsine",
            "Biofilmbildung",
            "Bakterielle Proteasen"
          ]
        },
        "clinical": {
          "incubation": "Früh (<2 hónap postop - S. aureus, Gram-negatíve) vagy Spät (>2 hónap postop - S. epidermidis, Cutibacterium)",
          "onset": "Schleichendes Láz bis zur akuten massiven lebensbedrohlichen Blutung",
          "symptoms": [
            {
              "name": "Lokale Wundsymptome",
              "description": "Nicht heilende Wunde in der Leiste, Sinustrakt, eitrige Sekretion, pulsierende Schwellung (Pseudoaneurysma).",
              "severity": "mvagyate"
            },
            {
              "name": "Systemische Infektzeichen",
              "description": "Láz unklarer Genese (FUO), Schüttelfrost, Gewichtsverlust, Sepsis, CRP-Erhöhung.",
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
            "Prothesenthrombose és akute Ischämie",
            "Gliedmaßenamputation"
          ]
        },
        "diagnostics": {
          "criteria": [
            {
              "name": "MAGIC (Management of Aortic Graft Infection Collaboration) Kriterien",
              "items": [
                "Definitive VGI: Haupt-Chirurgisches/Histologisches/Mikrobiologisches Kriterium VAGY 1 Haupt-Bildgebungskriterium + 1 Nebenkriterium",
                "Haupt-Bildgebungskriterium: Periprothetisches Gas >7 nap postop, periprothetischer Abszess im CT, aorto-enterische Fistel, fokal intensive FDG-Aufnahme im 18F-FDG PET/CT",
                "Nebenkriterien: Láz, CRP-Erhöhung, Sinustrakt, periprothetische Gewebeverdickung"
              ]
            }
          ],
          "laboratory": [
            {
              "test": "Blutkulturen (HK)",
              "finding": "Mindestens 2-3 HK-Sets vor Antibiose",
              "interpretation": "Kórokozóutánweis"
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
              "finding": "Periprothetische Gasblasen (>7-14 nap postop), Flüssigkeitskollektion/Abszess, Pseudoaneurysma, Kontinuitätsalattbrechung der Darmwand",
              "significance": "ESC / ESVS Klasse I: Erstlinien-Bildgebung!"
            },
            {
              "modality": "18F-FDG PET/CT",
              "finding": "Intensive, fokale vagy diffuse patologische FDG-Aufnahme entlang der Gefäßprothese (\"Sandwich-Zeichen\")",
              "significance": "ESC / ESVS Klasse I GOLDSTANDARD: Höchste Sensitivität és Spezifität!"
            }
          ],
          "microbiology": [
            {
              "test": "Sonifikation der entfernten Prothese",
              "finding": "Kórokozó- és Resistenzbestimmung",
              "significance": "Erhöht die Ausbeute esetén / -nál Biofilmkeimen"
            }
          ]
        },
        "differential": [
          {
            "disease": "Aseptisches Serom / Flüssigkeit",
            "distinguishing": "PET-CT negativ, Punktion steril"
          },
          {
            "disease": "Postimplantationssyndrom (után EVAR)",
            "distinguishing": "Láz és Leukozytose direkt után EVAR nélkül Infektion, spontan regressiv in 3-5 napn"
          }
        ],
        "therapy": {
          "guidelines": [
            "ESVS 2020 Clinical Practice Guidelines on Vascular Graft Infections",
            "ESC 2023 Endocarditis guidelines"
          ],
          "empirical": {
            "title": "Empirikuse Antibiose esetén / -nál Gefäßprotheseninfektion",
            "drugs": [
              {
                "drug": "Vancomycin + Piperacillin/Tazobactam VAGY Cefepim / Meropenem",
                "dose": "Vancomycin 30-60 mg/kg/Tag i.v. + Pip-Tazo 4x4.5g/Tag i.v.",
                "duration": "Bis zur chirurgischen Sanierung",
                "note": "Breitspektrum-Abdeckung számára MRSA, Pseudomonas és Anaerobier."
              }
            ]
          },
          "targeted": "Kombinierte Chirurgische ÉS Antimikrobielle Therapie (ESVS Klasse I): Vollständige Entfernung der infizierten Prothese, radikales Debridement és RevasSystematisierung -val / -vel autologer Vein (V. saphena magna), Homograft vagy Rifampicin/Silber-beschichteter Prothese! Protézis eltávolítása után 6-12 hét gezielte i.v./p.o. Antibiose; wenn Prothese nicht entfernbar ist, LEBENSLANGE suppresive Antibiose erforderlich.",
          "supportive": [
            "Notfallmäßige gefäßchirurgische Konsultation esetén / -nál Verdacht auf aorto-enterische Fistel (Herald Bleeding!)",
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
          "factors": "Aortale Lokalisation, Notfall-OP, P. aeruginosa / S. aureus Kórokozó"
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
    "name": "Felső légúti fertőzések",
    "icon": (window.diseaseMetadata?.upper_respiratory?.icon || '🗣️'),
    "color": (window.diseaseMetadata?.upper_respiratory?.color || '#14b8a6'),
    "diseases": [
      {
        "id": "upper_respiratory_infections",
        "name": "Felső légúti fertőzés (Akut rhinitis / Meghűlés)",
        "pathogen": {
          "type": "Virus",
          "name": "Rhinoviren (>50%), Coronaviren, Adenoviren, RSV, Parainfluenzaviren",
          "gram": "Nincs",
          "shape": "Kapsid"
        },
        "epidemiology": {
          "incidence": "Leggyakoribb menschliche Infektion (Erwachsene 2-4x/Jahr, Kinder 6-8x/Jahr)",
          "risk_groups": [
            "Kleinkinder in Kitas",
            "Stress, Schlafmangel"
          ],
          "seasonality": "Herbst-Winter-Gipfel",
          "transmission": "Tröpfchen- és Kontaktinfektion"
        },
        "pathomechanism": {
          "steps": [
            "Invasion des Nasen-Rachen-Epithels, Entzündungsmediator-Freisetzung (Histamin, Bradykinin), Schleimhautödem és Hypersekretion."
          ],
          "virulence_factors": [
            "Rezeptorbindung (ICAM-1 esetén / -nál Rhinoviren)"
          ]
        },
        "clinical": {
          "incubation": "1-3 nap",
          "onset": "Mild",
          "symptoms": [
            {
              "name": "Nasal- és Halssymptome",
              "description": "Rhinitis (Schnupfen), Niesen, Halsschmerzen, mäßiges Láz, Köhögés.",
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
            "distinguishing": "Juckreiz, Eosinophilie, kein Láz"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Symptomatische Therapie der Erkältung",
            "drugs": [
              {
                "drug": "Analgetika / Antipyretika (Ibuprofen / Paracetamol)",
                "dose": "Ibuprofen 400mg 3x/nap vagy Paracetamol 500-1000mg 3-4x/Tag p.o.",
                "duration": "3-5 nap",
                "note": "Zur Schmerz- és Lázsenkung."
              },
              {
                "drug": "Abschwellende Nasentropfen (Xylometazolin)",
                "dose": "1-2 Tropfen/Sprühestöße pro Nasenloch max 3x/nap",
                "duration": "Maximal 5-7 nap!",
                "note": "Gefahr der Rhinitis medicamentosa esetén / -nál Langzeitanwendung."
              }
            ]
          },
          "targeted": "Rein symptomatisch! Nincs Antibiotika esetén / -nál unkomplizierter Erkältung!",
          "supportive": [
            "Ausreichend Flüssigkeit",
            "Nasenspülung -val / -vel Kochsalzlösung"
          ],
          "prevention": [
            "Händewaschen, Händehygiene"
          ]
        },
        "prognosis": {
          "mortality": "0%",
          "prognostic_scores": [],
          "factors": "Nincs"
        },
        "gallery": []
      },
      {
        "id": "laryngitis",
        "name": "Pseudokrupp (Laryngitis subglottica)",
        "pathogen": {
          "type": "Virus",
          "name": "Parainfluenzaviren (Typ 1-3), RSV, Adenoviren, Influenzaviren",
          "gram": "Nincs",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Gyakori esetén / -nál Säuglingen és Kleinkindern (6 hónap bis 3 Jahre)",
          "risk_groups": [
            "Kleinkinder (Anatomisch enge subglottische Region)"
          ],
          "seasonality": "Herbst-Winter",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Virale Infektion des Kehlkopf- és Trachealepithels.",
            "Subglottisches Schleimhautödem verengt die Atemwege (Hagen-Poiseuille-Gesetz: Radius-Halbierung erhöht Strömungswiderstand um das 16-fache!).",
            "Inspiratorischer Stridor és bellender Köhögés."
          ],
          "virulence_factors": [
            "Neuraminidase, Hämagglutinin"
          ]
        },
        "clinical": {
          "incubation": "2-5 nap",
          "onset": "Hirtelen, klassischerweise utánts aus dem Schlaf heraus",
          "symptoms": [
            {
              "name": "Bellender Köhögés & Heiserkeit",
              "description": "Charakteristischer bellernder \"Hundehusten\" és Heiserkeit.",
              "severity": "mvagyate"
            },
            {
              "name": "Inspiratorischer Stridor",
              "description": "Pfeifendes Atemgeräusch esetén / -nál der Einatmung, juguläre/interkostale Einziehungen.",
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
              "significance": "Ritka erforderlich"
            }
          ]
        },
        "calculators": [
          {
            "name": "Westley Croup Score - Pseudokrupp Súlyosegrad",
            "items": [
              {
                "label": "Inspiratorischer Stridor (Nincsr=0, Nyugtalanság esetén=1, Nyugalomban=2)",
                "points": 2
              },
              {
                "label": "Einziehungen (Nincs=0, Mild=1, Mäßig=2, Súlyos=3)",
                "points": 3
              },
              {
                "label": "Atemgeräusch (Normal=0, Vermindert=1, Stark vermindert=2)",
                "points": 2
              },
              {
                "label": "Zyanose (Nincs=0, Nyugtalanság esetén=4, Nyugalomban=5)",
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
                "text": "Súlyoser Pseudokrupp (6-11): Dexamethason + Inhalatives Adrenalin + Stationäre Aufnahme."
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
            "distinguishing": "Hohes Láz, Speichelfluss (Drooling), Sitzen in \"Tripod-Haltung\", kein bellender Köhögés!"
          },
          {
            "disease": "Fremdkörperaspiration",
            "distinguishing": "Hirtelener Kezdet beim Spielen, kein Infekt"
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
                "note": "Essenziell esetén / -nál JEDEM Súlyosegrad (Westley Score)!"
              },
              {
                "drug": "Inhalatives Adrenalin (L-Epinephrin)",
                "dose": "2-5 ml Adrenalin (1:1000) über Vernebler",
                "duration": "Bei Stridor in Ruhe",
                "note": "Schnelle Abschwellung durch alpha-sympathomimetische Vasokonstriktion."
              }
            ]
          },
          "targeted": "Glukokortikoide + inhalatives Adrenalin esetén / -nál schwerem Stridor. Nincs Antibiotika!",
          "supportive": [
            "Kühle feuchte Luft, Beruhigung des Kindes, Sauerstoffgabe"
          ],
          "prevention": [
            "Rauchfreie Umgebung"
          ]
        },
        "prognosis": {
          "mortality": "<0.1% esetén / -nál rechtzeitiger Dexamethasongabe",
          "prognostic_scores": [
            "Westley Croup Score"
          ],
          "factors": "Westley Score ≥6"
        },
        "gallery": []
      },
      {
        "id": "epiglottitis",
        "name": "Epiglottitis (Gégefedő-gyulladás)",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Haemophilus influenzae</i> Typ b (Hib - durch Impfung stark rückläufig), <i>Streptococcus pneumoniae</i>, <i>S. pyogenes</i>, <i>S. aureus</i>",
          "gram": "Gram-negatív / Gram-pozitív",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Ritka seit Einführung der Hib-Impfung",
          "risk_groups": [
            "Ungeimpfte Kinder",
            "Erwachsene -val / -vel Diabetes / Immunsuppression"
          ],
          "seasonality": "Ganzjährig",
          "transmission": "Tröpfcheninfektion"
        },
        "pathomechanism": {
          "steps": [
            "Bakterielle Infektion des Kehldeckels (Epiglottis) és der supraglottischen Strukturen.",
            "Massives entzündliches Ödem der Epiglottis.",
            "Rasche, lebensbedrohliche Verlegung der oberen Atemwege."
          ],
          "virulence_factors": [
            "Hib Kapselpolysaccharid (PRP)"
          ]
        },
        "clinical": {
          "incubation": "1-3 nap",
          "onset": "Dramatisch, fulminant",
          "symptoms": [
            {
              "name": "Die 3 \"Ds\"",
              "description": "Dysphagie (Schluckstörung), Drooling (Speichelfluss), Distress (Atemnot).",
              "severity": "severe"
            },
            {
              "name": "Kopforwärtsneigung (Tripod-Haltung)",
              "description": "Kind sitzt aufgerichtet, neigt den Kopf után vorne, um den Kehlkopf offen zu halten.",
              "severity": "severe"
            },
            {
              "name": "Kloßige Sprache",
              "description": "Gedämpfte \"Kloß-im-Mund\"-Sprache (Hot potato voice), KEIN bellender Köhögés!",
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
              "finding": "In 70% positiv számára Hib",
              "interpretation": "Csak a légútbiztosítás UTÁN!"
            }
          ],
          "imaging": [
            {
              "modality": "Hals-Röntgen seitlich",
              "finding": "Daumenzeichen (Thumbprint Sign - geschwollene Epiglottis)",
              "significance": "Nur esetén / -nál stabiler Situation"
            }
          ]
        },
        "differential": [
          {
            "disease": "Pseudokrupp",
            "distinguishing": "Bellender Köhögés, kein Speichelfluss, liegt flach"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Notfallbehandlung der Epiglottitis",
            "drugs": [
              {
                "drug": "Ceftriaxon i.v.",
                "dose": "2g i.v. 1x/nap (Kinder: 50-100 mg/kg/Tag)",
                "duration": "7-10 nap",
                "note": "1. Wahl után Atemwegssicherung!"
              },
              {
                "drug": "+ Vancomycin vagy Ampicillin/Sulbactam",
                "dose": "15-20 mg/kg i.v. q12h (12 óránként)",
                "duration": "7-10 nap",
                "note": "Zusätzliche Staphylokokken-Abdeckung."
              }
            ]
          },
          "targeted": "PRIMÄRES ZIEL: SOFORTIGE ATEMWEGSSICHERUNG (Orotracheale Intubation im Operationssaal / HNO-Notfall)! Erst daután Antibiose -val / -vel Ceftriaxon i.v.",
          "supportive": [
            "Notfall-Koniotomie/Tracheotomie Bereitstellung"
          ],
          "prevention": [
            "Hib-Schutzimpfung im Säuglingsalter (Obligatorisch!)"
          ]
        },
        "prognosis": {
          "mortality": "<1% esetén / -nál rechtzeitiger Intubation; bis 10-20% esetén / -nál verzögerter Diagnose",
          "prognostic_scores": [],
          "factors": "Atemwegsverlegung vor Intubation"
        },
        "gallery": []
      },
      {
        "id": "rsv_infection",
        "name": "RSV (Respiratory Syncytial Vírus) fertőzés",
        "pathogen": {
          "type": "Virus",
          "name": "Respiratorisches Synzytial-Virus (RSV - Pneumoviridae)",
          "gram": "Nincs",
          "shape": "Behülltes Einzelstrang-RNA-Virus"
        },
        "epidemiology": {
          "incidence": "Leggyakoribb Ursache számára Bronchiolitis és Pneumonie esetén / -nál Säuglingen <1 Jahr",
          "risk_groups": [
            "Frühgeborene",
            "Säuglinge <6 hónap",
            "Kinder -val / -vel angeborenen Herzfehlern / BPD",
            "Ältere Erwachsene (>65 J.)"
          ],
          "seasonality": "Winter-Frühjahr (November bis April)",
          "transmission": "Tröpfchen- és Schmierinfektion (Hohe Kontagiosität!)"
        },
        "pathomechanism": {
          "steps": [
            "Infektion des Epithels der kleinen Atemwege (Bronchiolen) via F-Protein (Fusionsprotein).",
            "Bildung von Zellsynzytien, Nekrose der Epithelzellen és massive Schleimproduktion.",
            "Verlegung der Bronchiolen, Air-Trapping (Überblähung) és Atelektasenbildung."
          ],
          "virulence_factors": [
            "F-Protein (Fusion)",
            "G-Protein (Attachment)"
          ]
        },
        "clinical": {
          "incubation": "2-8 nap",
          "onset": "Symptomprogression über 3-5 nap",
          "symptoms": [
            {
              "name": "Säuglings-Bronchiolitis",
              "description": "Gekennzeichnet durch Tachypnoe, giemendes/brummendes Atemgeräusch (Wheezing), interkostale Einziehungen, Nasenflügeln és Trinkschwäche.",
              "severity": "severe"
            },
            {
              "name": "Apnoen esetén / -nál Neugeborenen",
              "description": "Atemstillstände besonders esetén / -nál sehr jungen Säuglingen (<2 hónap).",
              "severity": "severe"
            },
            {
              "name": "Erwachsenen-Pneumonie",
              "description": "Súlyoser Bronchitis- / Pneumonieverlauf esetén / -nál Älteren.",
              "severity": "mvagyate"
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
              "finding": "RSV-RNA vagy Antigen positiv",
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
                "dose": "Einzeldosis 50mg (<5kg) vagy 100mg (≥5kg) i.m.",
                "duration": "Einmalig vor/in der RSV-Saison",
                "note": "JAVASOLT MINDEN ÚJSZÜLÖTT / CSECSEMŐ SZÁMÁRA in der 1. RSV-Saison (STIKO/CDC)!"
              },
              {
                "drug": "PALIVIZUMAB (Synagis)",
                "dose": "15 mg/kg i.m. monatlich während der Saison",
                "note": "Alternatíve számára Hochrisiko-Frühgeborene."
              },
              {
                "drug": "RSV-Impfstoffe (AREXVY / ABRYSVO)",
                "dose": "Einzeldosis i.m.",
                "duration": "Einmalig",
                "note": "Arexvy/Abrysvo számára Erwachsene ≥60 J.; Abrysvo számára Schwangere (32-36. SSW) zum mütterlichen Nestschutz!"
              }
            ]
          },
          "targeted": "Symptomatische Therapie ist der Eckpfeiler: Absaugen der Nase, Sauerstoffgabe (SpO2 >90-92%), High-Flow-Nasenkanüle (HFNC), adäquate Flüssigkeitszufuhr. Bronchodilatatoren és Steroide werden routinemäßig NICHT empfohlen!",
          "supportive": [
            "Sauerstofftherapie, HFNC",
            "Enterale/Parenterale Flüssigkeit"
          ],
          "prevention": [
            "Nirsevimab-Immunisierung számára alle Säuglinge",
            "RSV-Impfung számára Schwangere & Ältere"
          ],
          "guidelines": [
            "AAP / ECDC / WHO RSV Prophylaxis Guidelines 2024/2025"
          ]
        },
        "prognosis": {
          "mortality": "<0.5% esetén / -nál gesunden Säuglingen; bis 3-5% esetén / -nál Herzfehler/Frühgeborenen",
          "prognostic_scores": [],
          "factors": "Frühgeburtlichkeit, Alter <2 hónap"
        },
        "gallery": []
      },
      {
        "id": "influenza",
        "name": "Influenza",
        "pathogen": {
          "type": "Virus",
          "name": "Influenzavirus A (H1N1, H3N2), Influenzavirus B (Orthomyxoviridae)",
          "gram": "Nincs",
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
          "transmission": "Tröpfcheninfektion és Aerosole"
        },
        "pathomechanism": {
          "steps": [
            "Bindung des Hämagglutinins (HA) an Sialsäure-Rezeptoren des Tracheobronchialepithels.",
            "Zelllyse, Freisetzung neuer Virionen durch Neuraminidase (NA).",
            "Ausgeprägte Zytokinausschüttung (Zytokinsturm) verursacht typisches hohes Láz és Myalgien."
          ],
          "virulence_factors": [
            "Antigendrift (Punktmutationen - saisonal)",
            "Antigenshift (Reassortment - Pandemien)",
            "Neuraminidase",
            "Hämagglutinin"
          ]
        },
        "clinical": {
          "incubation": "1-4 nap",
          "onset": "Hirtelen, schlagartig innerhalb von óra",
          "symptoms": [
            {
              "name": "Schlagartiger Kezdet -val / -vel hohem Láz",
              "description": "Hohes Láz (≥39-40°C), Schüttelfrost, starke Myalgien (Muskelschmerzen) és Arthralgien.",
              "severity": "severe"
            },
            {
              "name": "Trachealer Köhögés & Kopfschmerzen",
              "description": "Trockener, schmerzhafter Köhögés, retrosternales Brennen, extreme Fatigue.",
              "severity": "mvagyate"
            }
          ],
          "physical_exam": [
            "Hohes Láz, Pharynxrötung, trockenes Rasselgeräusch, schwere Abgeschlagenheit"
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
              "finding": "Normal vagy interstitielles Muster",
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
                "dose": "75mg 2x/nap p.o. számára 5 nap",
                "duration": "5 nap",
                "note": "Neuraminidase-Hemmer. Indiziert esetén / -nál Risikopatienten / Súlyoseverlauf."
              },
              {
                "drug": "BALOXAVIR MARBOXIL (Xofluza)",
                "dose": "Einzeldosis 40mg (40-80kg) vagy 80mg (≥80kg) p.o.",
                "duration": "Einmalig",
                "note": "Capped-Endonuklease-Hemmer. Einmalige Einnahme!"
              }
            ]
          },
          "targeted": "Antivirale Therapie (Oseltamivir / Baloxavir) gestartet innerhalb von 48h verkürzt die Krankheitsdauer és senkt Komplikationen!",
          "supportive": [
            "Bettruhe, Lázsenkung (Paracetamol/Ibuprofen)",
            "Flüssigkeitssubstitution"
          ],
          "prevention": [
            "Jährliche Quadrivalente Influenza-Schutzimpfung (Tot- vagy Lebendimpfstoff)"
          ],
          "guidelines": [
            "CDC / WHO Influenza Treatment Guidelines 2024/2025"
          ]
        },
        "prognosis": {
          "mortality": "<0.1% gesamt; bis 1-3% esetén / -nál Risikogruppen / bakterieller Superinfektion",
          "prognostic_scores": [],
          "factors": "Alter, Komorbiditäten"
        },
        "gallery": []
      },
      {
        "id": "covid19",
        "name": "COVID-19 (SARS-CoV-2 fertőzés)",
        "pathogen": {
          "type": "Virus",
          "name": "SARS-CoV-2 (Coronaviridae)",
          "gram": "Nincs",
          "shape": "Behülltes Einzelstrang-RNA-Virus"
        },
        "epidemiology": {
          "incidence": "Pandemisch, val/veltlerweile endemische Wellen",
          "risk_groups": [
            "Ältere Menschen (>65 J.)",
            "Ungeimpfte",
            "Adipöse, Diabetiker, Immunsupprimierte"
          ],
          "seasonality": "Ganzjährig -val / -vel Herbst-Winter-Gipfeln",
          "transmission": "Aerosole és Tröpfchen"
        },
        "pathomechanism": {
          "steps": [
            "Spike-Protein-Bindung an ACE2-Rezeptoren der Alveolarzellen Typ II és Endothelzellen.",
            "Endothelitis, Mikrovaskuläre Thrombosen és Hyperkoagulabilität.",
            "Hyperinflammation (Zytokinsturm), ARDS és Multiorganbefall."
          ],
          "virulence_factors": [
            "Spike-Protein (RBD-Domäne)",
            "Mpro / 3CLpro Protease"
          ]
        },
        "clinical": {
          "incubation": "2-5 nap (Omikron-Varianten)",
          "onset": "Variabel",
          "symptoms": [
            {
              "name": "Respiratorische & Systemische Tünetek",
              "description": "Láz, Köhögés, Halsschmerzen, Fatigue, Anosmie/Ageusie (Geruchs-/Geschmacksverlust).",
              "severity": "mvagyate"
            },
            {
              "name": "Stille Hypoxie (Silent Hypoxia)",
              "description": "Gefährliche Abnahme der SpO2 nélkül subjektive Atemnot!",
              "severity": "severe"
            },
            {
              "name": "Long-COVID / Post-COVID-Syndrom",
              "description": "Persistierende Fatigue, Belastungsintoleranz (ME/CFS), \"Brain Fog\" >12 hét.",
              "severity": "mvagyate"
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
              "finding": "Erhöht esetén / -nál schwerem Verlauf",
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
            "title": "Empirikuse Therapie von COVID-19 (Leitlinien 2024/2025)",
            "drugs": [
              {
                "drug": "NIRMATRELVIR / RITONAVIR (Paxlovid)",
                "dose": "300mg/100mg 2x/nap p.o. számára 5 nap",
                "duration": "5 nap",
                "note": "Für Hochrisikopatienten in den ersten 5 napn p.o.!"
              },
              {
                "drug": "REMDESIVIR",
                "dose": "200mg nap 1, dann 100mg nap 2-3 i.v.",
                "duration": "3 nap",
                "note": "Frühtherapie i.v. esetén / -nál Risikopatienten."
              },
              {
                "drug": "DEXAMETHASON",
                "dose": "6mg 1x/nap p.o./i.v.",
                "duration": "10 nap",
                "note": "CSAK OXIGÉNT IGÉNYLŐ BETEGEKNÉL!"
              },
              {
                "drug": "TOCILIZUMAB / BARICITINIB",
                "dose": "Tocilizumab 8mg/kg i.v. einmalig",
                "note": "Bei rascher Progression / Zytokinsturm."
              }
            ]
          },
          "targeted": "Frühtherapie -val / -vel Paxlovid vagy Remdesivir esetén / -nál Risikopatienten. Dexamethason + Antikoagulation (LMWH) esetén / -nál Sauerstoffpflichtigkeit.",
          "supportive": [
            "Bauchlagerung (Prone positioning)",
            "Sauerstoffgabe / HFNC / Beatmung"
          ],
          "prevention": [
            "Angepasste mRNA-Impfungen (saisonal számára Risikogruppen)"
          ],
          "guidelines": [
            "WHO / NIH / IDSA COVID-19 Treatment Guidelines 2024/2025"
          ]
        },
        "prognosis": {
          "mortality": "<0.1% ambulant; 5-15% esetén / -nál hospitalisierter Hypoxie",
          "prognostic_scores": [],
          "factors": "Alter, Immunsuppression, Ungeimpft"
        },
        "gallery": []
      },
      {
        "id": "tonsillitis",
        "name": "Tonsillitis acuta (Tüszős mandulagyulladás)",
        "pathogen": {
          "type": "Baktérium / Virus",
          "name": "Streptococcus pyogenes (GABHS / Gruppe A Streptokokken - 15-30% esetén / -nál Kindern, 10% Erwachsene); Vírusok: Adenoviren, EBV, Enteroviren (~70%)",
          "gram": "Gram-pozitív (GAS)",
          "shape": "Streptokokken"
        },
        "epidemiology": {
          "incidence": "Sehr gyakori esetén / -nál Kindern (5-15 Jahre)",
          "risk_groups": [
            "Schulkinder"
          ],
          "seasonality": "Winter-Frühjahr",
          "transmission": "Tröpfchen- és Kontaktinfektion"
        },
        "pathomechanism": {
          "steps": [
            "Invasion der Gaumenmandeln (Tonsillae palatinae) durch Bakterien vagy Vírusok.",
            "Eitrige Exsudation in den Tonsillenkrypten (Stippchen / Beläge).",
            "Toxinverval/veltelte Gewebeentzündung (Streptolysin O/S, Erythrogene Toxine esetén / -nál Scharlach)."
          ],
          "virulence_factors": [
            "M-Protein (Inhibition der Phagozytose)",
            "Streptolysin O/S",
            "Pyrogene Exotoxine (SPE)"
          ]
        },
        "clinical": {
          "incubation": "1-4 nap",
          "onset": "Akut",
          "symptoms": [
            {
              "name": "Starke Halsschmerzen & Schluckschmerz",
              "description": "Odynophagie, bis in die Ohren ausstrahlend, hohes Láz.",
              "severity": "severe"
            },
            {
              "name": "Nincs Köhögés",
              "description": "Fehlen von Köhögés ist ein Hauptkriterium számára Bakterielle Tonsillitis (Centor Score)!",
              "severity": "mvagyate"
            }
          ],
          "physical_exam": [
            "Geschwollene, hyperämische Tonsillen -val / -vel eitrigen Stippchen/Belägen, schmerzhafte anterior-zervikale Lymphknoten, Scharlach-Exanthem"
          ],
          "complications": [
            "Peritonsillarabszess (Trismus, gaumensegelabweichung)",
            "Rheumatische Láz (ARF)",
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
                "label": "Láz > 38°C",
                "points": 1
              },
              {
                "label": "Fehlen von Köhögés",
                "points": 1
              },
              {
                "label": "Schmerzhafte zervikale Lymphknoten",
                "points": 1
              },
              {
                "label": "Tonsillenschwellung vagy -exsudat",
                "points": 1
              }
            ],
            "interpretation": [
              {
                "min": 0,
                "max": 1,
                "text": "Geringes Risiko (<10%): Nincs Antibiose, keine Testung."
              },
              {
                "min": 2,
                "max": 3,
                "text": "Mittleres Risiko (15-30%): GAS-Schnelltest/Kultur, Antibiose nur esetén / -nál Positivität."
              },
              {
                "min": 4,
                "max": 5,
                "text": "Hohes Risiko (50-60%): Empirikuse Antibiose vagy Schnelltest + Antibiose."
              }
            ]
          }
        ],
        "differential": [
          {
            "disease": "Infektiöse Mononukleose (EBV / Pfeiffersches Drüsenfieber)",
            "distinguishing": "Ganzkörper-Lymphknotenschwellung, Splenomegalie, Exanthem után Amoxicillin!"
          }
        ],
        "therapy": {
          "empirical": {
            "title": "Kausale Antibiose esetén / -nál GAS-Tonsillitis",
            "drugs": [
              {
                "drug": "PENICILLIN V (Phenoxymethylpenicillin)",
                "dose": "1 Mio. IE 3x/nap p.o. (Kinder: 50.000 IE/kg/Tag)",
                "duration": "10 VOLLE TAGE",
                "note": "1. WAHL! 10-Tage-Einnahme ist OBLIGATORISCH zur ARF-Prophylaxe!"
              },
              {
                "drug": "AMOXICILLIN",
                "dose": "500mg 2x/nap p.o.",
                "duration": "10 nap",
                "note": "Alternatíve 1. Wahl."
              },
              {
                "drug": "Cefadroxil / Cefuroxim",
                "dose": "500mg 2x/nap p.o.",
                "duration": "10 nap",
                "note": "Penicillinallergia esetén (nicht-anaphylaktisch)."
              },
              {
                "drug": "Azithromycin / Clarithromycin",
                "dose": "500mg nap 1, dann 250mg nap 2-5",
                "duration": "5 nap",
                "note": "Bei schwerer Penicillinallergie."
              }
            ]
          },
          "targeted": "Penicillin V vagy Amoxicillin számára 10 volle nap zur Verhinderung des Akuten Rheumatischen Lázs!",
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
        "name": "Akut rhinosinusitis (Melléküreg-gyulladás)",
        "pathogen": {
          "type": "Virus / Baktérium",
          "name": "Virale ARS (>90-98%): Rhinoviren, Influenzaviren; Bakterielle ABRS (2-10%): <i>Streptococcus pneumoniae</i>, <i>Haemophilus influenzae</i>, <i>Moraxella catarrhalis</i>",
          "gram": "Variabel",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Sehr gyakori (Erwachsene 1-2 Episoden/Jahr)",
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
            "Sekretstau és Hypoxie in den Paranasalräumen, Störung der mukoziliären Klärung.",
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
              "description": "Verstärkung beim Bücken után vorne! Stirn-, Oberkiefer- vagy retroorbitaler Schmerz.",
              "severity": "mvagyate"
            },
            {
              "name": "Eitrige Rhinorrhö & Nasenatmungsbehinderung",
              "description": "Eitriges Nasensekret, Hyposmie/Anosmie.",
              "severity": "mvagyate"
            },
            {
              "name": "Bakterielle ABRS Zeichen",
              "description": "Zwei-Phasen-Verlauf (\"Double Sickening\" - Besserung gefolgt von Verschlechterung), anhaltende Tünetek >10 nap, hohes Láz (>39°C).",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Druckschmerz über den Austrittspunkten der Nn. trigemini (N. infraorbitalis/supraorbitalis), eitriges Sekret im val/veltleren Nasengang"
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
              "significance": "NUR esetén / -nál Komplikationen vagy Therapieversagen!"
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
                "dose": "2 Sprühstöße pro Nasenloch 2x/nap",
                "duration": "14-21 nap",
                "note": "1. VÁLASZTANDÓ VÍRUSOS ÉS BAKTERIÁLIS RHINOSINUSITISBEN!"
              },
              {
                "drug": "AMOXICILLIN vagy CO-AMOXICLAV (bei ABRS)",
                "dose": "Amoxicillin 3x500mg-1g p.o. VAGY Co-Amoxiclav 2x875/125mg p.o.",
                "duration": "5-7 nap",
                "note": "Indiziert NUR esetén / -nál ABRS (Kriterien erfüllt)!"
              },
              {
                "drug": "Doxycyclin / Levofloxacin",
                "dose": "Doxycyclin 100mg 2x/nap p.o.",
                "duration": "5-7 nap",
                "note": "Penicillinallergia esetén."
              }
            ]
          },
          "targeted": "Virale ARS: Nasale Steroide + Salzwasserspülung + Abschwellende Nasentropfen (max 5 nap). ABRS: Amoxicillin vagy Co-Amoxiclav 5-7 nap.",
          "supportive": [
            "Nasenspülung -val / -vel Isotoner Kochsalzlösung",
            "Analgetika"
          ],
          "prevention": [
            "Kezelés allergischer Rhinitis"
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
        "name": "Otitis media acuta (Akut középfülgyulladás)",
        "pathogen": {
          "type": "Baktérium / Virus",
          "name": "<i>Streptococcus pneumoniae</i>, Non-typeable <i>Haemophilus influenzae</i> (NTHi), <i>Moraxella catarrhalis</i>, Respiratorische Vírusok",
          "gram": "Gram-pozitív / Gram-negatív",
          "shape": "Variabel"
        },
        "epidemiology": {
          "incidence": "Sehr gyakori esetén / -nál Säuglingen és Kleinkindern (6-24 hónap)",
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
            "Eitrige Exsudation in der Paukenhöhle, Vorwölbung (Bulging) és Ischämie des Trommelfells.",
            "Unbehandelter Druckanstieg führt zur spontanen Trommelfellperforation és Otorrhö."
          ],
          "virulence_factors": [
            "Pneumokokken-Kapsel",
            "NTHi Biofilmbildung",
            "BETA-Laktamase-Produktion"
          ]
        },
        "clinical": {
          "incubation": "2-7 nap után Erkältungsepidode",
          "onset": "Hirtelen, gyakori utánts -val / -vel stechenden Ohrenschmerzen",
          "symptoms": [
            {
              "name": "Klassische Kindheitssymptome",
              "description": "Hirtelene, stechende, hefstige Ohrenschmerzen (Otalgie), hohes Láz (≥38.5-39°C), Schallleitungsschwerhörigkeit.",
              "severity": "severe"
            },
            {
              "name": "Säuglings-Unspezifische Tünetek",
              "description": "Untröstliches Weinen, Unruhe, Nachtschreck, Greifen ans kranke Ohr (Ohrzwicken), Trinkverweigerung, Erbrechen.",
              "severity": "mvagyate"
            },
            {
              "name": "Otorrhö (Ohrfluss)",
              "description": "Nach spontaner Trommelfellperforation tritt eitriger Ohrfluss aus, begleitet von schlagartiger Linderung der Schmerzen!",
              "severity": "mvagyate"
            }
          ],
          "physical_exam": [
            "Otoskopie / Pneumatische Otoskopie (Goldstandard):",
            "  * Vorgewölbtes (bulging), rötlich/gelbliches, undurchsichtiges Trommelfell",
            "  * Starke Einschränkung vagy Aufhebung der Trommelfellbeweglichkeit",
            "  * Verstreichen der Lichtreflexes és der Hammergriff-Kontur",
            "Tragusdruckschmerz",
            "Rötung, Schwellung vagy Abstehen der Ohrmuschel über dem Mastoid weist auf eine MASTOIDITIS hin!"
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
              "finding": "Leukozytose és CRP-Erhöhung (>40-80 mg/L) esetén / -nál schwerer AOM",
              "interpretation": "Bakterieller Nachweis"
            }
          ],
          "imaging": [
            {
              "modality": "Otoskopie / Otomikroskopie",
              "finding": "Vorgewölbtes, hyperämisches Trommelfell -val / -vel verminderter Beweglichkeit",
              "significance": "Essentieller Goldstandard"
            },
            {
              "modality": "Felsenbein / Temporalkochen CT",
              "finding": "Verschattung der Mastoidzellen és knöcherne Destruktion",
              "significance": "NUR esetén / -nál Verdacht auf Mastoiditis!"
            }
          ],
          "microbiology": [
            {
              "test": "Ohrsekret-Kultur (után Perforation / Parazentese)",
              "finding": "Kórokozó és Antibiogramm",
              "significance": "Bei Célzotter Therapie / Rezidiv"
            }
          ]
        },
        "differential": [
          {
            "disease": "Otitis media serosa (OME / Paukenerguss)",
            "distinguishing": "KEINE akute Entzündung, kein Láz, keine Schmerzen! Bläschen/Flüssigkeitsspiegel hinter intaktem Trommelfell."
          },
          {
            "disease": "Otitis externa acuta (Gehörgangsentzündung)",
            "distinguishing": "Extremer Tragus-Druckschmerz és Ohrmuschel-Zugschmerz; Gehörgang geschwollen."
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "SYSTEMISCHE SCHMERZTHERAPIE (Ibuprofen / Paracetamol)",
                "dose": "Ibuprofen 10 mg/kg alle 6h VAGY Paracetamol 15 mg/kg alle 6h p.o./p.r.",
                "duration": "3-5 nap",
                "note": "1. ÉS WICHTIGSTER SCHRITT DER AOM-THERAPIE! Sofortiger Start!"
              },
              {
                "drug": "\"WATCHFUL WAITING\" (Abwartende Haltung - AAP / ECDC)",
                "dose": "Konsequente Schmerztherapie + Kontrollalattsuchung után 48-72h",
                "duration": "48 óra",
                "note": "Anwendbar esetén / -nál Kinder ≥2 J. -val / -vel milden einseitigen Tünetekn nélkül Otorrhö!"
              },
              {
                "drug": "AMOXICILLIN (Hochdosiert p.o.)",
                "dose": "80-90 mg/kg/Tag p.o. in 2-3 Dosen (Erwachsene: 3x1000mg p.o.)",
                "duration": "10 nap (<2 J.) / 5-7 nap (≥2 J.)",
                "note": "1. WAHL ANTIBIOTIKUM! Sofort indiziert bei: Säuglingen <6 Mon., beidseitiger AOM <2 J., hohem Láz (≥39°C) vagy Otorrhö!"
              },
              {
                "drug": "Amoxicillin / Clavulansäure (Hochdosiert)",
                "dose": "90 mg/kg/Tag Amoxicillin-Anteil p.o.",
                "duration": "7-10 nap",
                "note": "Indiziert esetén / -nál Amoxicillin-Gabe in den letzten 30 napn, purulenter Konjunktivitis vagy Amoxicillin-Versagen után 48h."
              },
              {
                "drug": "Cefuroxim axetil / Azithromycin",
                "dose": "Cefuroxim 30 mg/kg/Tag p.o.; Azithromycin 10 mg/kg nap 1, dann 5 mg/kg",
                "duration": "5-10 nap",
                "note": "Penicillinallergia esetén."
              }
            ],
            "inpatient": [
              {
                "drug": "Ceftriaxon i.v. / i.m.",
                "dose": "50 mg/kg i.v./i.m. 1x/nap",
                "duration": "1-3 nap",
                "note": "Bei erbrechenden Kindern vagy Therapieversagen."
              }
            ],
            "icu": [
              {
                "drug": "Parazentese (Trommelfellschnitt) + Mastoidektomie",
                "dose": "-",
                "duration": "-",
                "note": "Bei Mastoiditis vagy unerträglichen Schmerzen HNO-Myringotomie & Paukenröhrchen (Grommet)."
              }
            ]
          },
          "targeted": "Célzotte Antibiose után Ohrsekretkultur. Hochdosiertes Amoxicillin ist Erstlinie.",
          "supportive": [
            "Orale Schmerztherapie (NSAID/Paracetamol)! Ohrfeuchte Tropfen esetén / -nál intaktem Trommelfell NICHT wirksam, esetén / -nál Perforation KONTRAINDIZIERT!",
            "Abschwellende Nasentropfen"
          ],
          "prevention": [
            "1. IMPFUNGEN:",
            "- PNEUMOKOKKEN-KONJUGATIMPFSTOFFE (PCV13, PCV15, PCV20): Seit Einführung sind invasive AOM-Episoden um >60-80% gesunken!",
            "- HAEMOPHILUS INFLUENZAE B (Hib) Impfung.",
            "- JÄHRLICHE INFLUENZA-IMPFUNG: Senkt pos-influenzale AOM um 30-50%.",
            "2. RISIKOREDUKTION: Stillen bis zum 6. hónap, Vermeidung von Passivrauch."
          ],
          "guidelines": [
            "AAP / NICE NG91 Otitis Media Guidelines"
          ]
        },
        "prognosis": {
          "mortality": "Unkompliziert 0%; esetén / -nál Mastoiditis / intrakraniellen Komplikationen 1-3%",
          "prognostic_scores": [
            "AOM Severity Score"
          ],
          "factors": "Alter <6 hónap, PCV-Impfstatus, adäquate Dosis Amoxicillin"
        },
        "gallery": []
      }
    ]
  }
});
