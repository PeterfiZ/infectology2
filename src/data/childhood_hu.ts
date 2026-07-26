Object.assign(window.diseases, {
  "childhood": {
    "name": "Gyermekkori fertőzések",
    "icon": window.diseaseMetadata.childhood.icon,
    "color": window.diseaseMetadata.childhood.color,
    "diseases": [
      {
        "id": "measles",
        "name": "Kanyaró (Morbilli)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Measles morbillivirus</i>",
          "gram": "ssRNS, Paramyxoviridae",
          "shape": "pleomorf"
        },
        "epidemiology": {
          "incidence": "Oltatlan populációban járványos",
          "risk_groups": [
            "Oltatlanok",
            "Immunszupprimáltak"
          ],
          "seasonality": "Tél-tavasz",
          "transmission": "Cseppfertőzés (nagyon fertőző! R0=12-18)"
        },
        "pathomechanism": {
          "steps": [
            "Behatolás és Szaporodás: A vírus a légúti hámsejteken és az immunsejteken (CD150 receptor) keresztül jut be, majd a regionális nyirokcsomókban szaporodik.",
            "Virémia: A primer virémiát követően a vírus a retikuloendoteliális rendszerben (máj, lép, csontvelő) tovább szaporodik, majd egy masszív szekunder virémia során eljut a bőrhöz, kötőhártyához és a légutakhoz.",
            "Szöveti károsodás: A fertőzött sejtek fúziójával óriássejtek (Warthin-Finkeldey) képződnek. A kiütés a vírus-fertőzött endothel sejtek elleni T-sejtes immunválasz eredménye.",
            "Immunszuppresszió: A vírus átmeneti, de súlyos immunszuppressziót okoz (anergiát), ami hetekig-hónapokig tarthat, hajlamosítva a másodlagos bakteriális fertőzésekre (pl. pneumonia, otitis)."
          ],
          "virulence_factors": [
            "Hemagglutinin",
            "Fúziós protein"
          ]
        },
        "clinical": {
          "incubation": "10-14 nap",
          "onset": "Prodroma (láz, 3C)",
          "symptoms": [
            {
              "name": "Prodroma (3C)",
              "description": "Magas láz (>40°C), Köhögés (Cough), Nátha (Coryza), Conjunctivitis - szinte 100%-ban jelen vannak a kiütés előtt.",
              "severity": "moderate"
            },
            {
              "name": "Koplik-foltok",
              "description": "Pathognomikus sószemcseszerű foltok a buccán (60-70%-ban), amelyek a kiütés előtt jelennek meg és 1-2 nap alatt eltűnnek.",
              "severity": "mild"
            },
            {
              "name": "Kiütés",
              "description": "Makulopapularis kiütés, amely a fül mögül indul, majd az arcra, törzsre és végtagokra terjed (cranio-caudalis irány). A kiütések gyakran konfluálnak, majd a megjelenés sorrendjében halványodnak el, barnás pigmentációt és finom hámlást hagyva maguk után.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Koplik-foltok",
            "Exanthema",
            "Láz",
            "Conjunctivitis"
          ],
          "complications": [
            "Otitis media",
            "Pneumonia (óriássejtes)",
            "Encephalitis",
            "SSPE (évekkel később)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Vérkép",
              "finding": "Leukopenia",
              "interpretation": "-"
            }
          ],
          "microbiology": [
            {
              "test": "IgM szerológia",
              "finding": "Pozitív (kiütés után)",
              "significance": "Diagnosztikus"
            },
            {
              "test": "PCR",
              "finding": "RNS (torok, vizelet)",
              "significance": "Korai fázis"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív",
                "dose": "-",
                "duration": "-",
                "note": "Lázcsillapítás, folyadék"
              }
            ]
          },
          "targeted": "A-vitamin adása csökkenti a morbiditást/mortalitást (WHO ajánlás).",
          "prevention": [
            "MMR vakcina (15 hó, 11 év)"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai gyanú: Láz + 3C (köhögés, nátha, conjunctivitis) + Koplik-foltok.",
            "Megerősítés: Anti-kanyaró IgM szerológia."
          ],
          "treatment_indications": [
            "Minden esetben szupportív terápia. A-vitamin adása javasolt a szövődmények csökkentésére."
          ]
        },
        "prognosis": {
          "mortality": "Fejlett országokban alacsony, fejlődőkben magas (pneumonia)",
          "prognostic_scores": [],
          "factors": "Életkor, vakcináció státusz"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3EKanyar%C3%B3%20(Morbilli)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Kanyaró (Morbilli) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "mumps",
        "name": "Mumpsz (Járványos fültőmirigy-gyulladás / Parotitis epidemica)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Mumps orthorubulavirus</i>",
          "gram": "ssRNS, Paramyxoviridae",
          "shape": "pleomorf"
        },
        "epidemiology": {
          "incidence": "Oltatlanokban",
          "risk_groups": [
            "Oltatlanok"
          ],
          "seasonality": "Tél-tavasz",
          "transmission": "Cseppfertőzés, nyál"
        },
        "pathomechanism": {
          "steps": [
            "A vírus cseppfertőzéssel jut a felső légutakba, ahol a hámsejtekben szaporodik.",
            "Virémia révén jut el a célszervekbe: nyálmirigyek (főleg parotis), központi idegrendszer, here, pancreas, petefészek.",
            "A mirigyekben duzzanatot, interstitialis ödémát és limfocitás infiltrációt okoz."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "16-18 nap",
          "onset": "Akut",
          "symptoms": [
            {
              "name": "Parotitis",
              "description": "A fültőmirigy fájdalmas duzzanata (95% tüneteseknél), amely kezdetben egyoldali, majd gyakran kétoldalivá válik. A fülcimpa elemelkedik, rágáskor fájdalmas.",
              "severity": "moderate"
            },
            {
              "name": "Láz",
              "description": "Mérsékelt láz, fejfájás, izomfájdalom a prodromális szakban.",
              "severity": "mild"
            },
            {
              "name": "Orchitis",
              "description": "Heregyulladás (pubertás utáni fiúk 20-30%-a), fájdalmas duzzanattal jár, ritkán sterilitást okoz.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Parotis duzzanat (fülcimpa elemelkedik)",
            "Here duzzanat/fájdalom"
          ],
          "complications": [
            "Meningitis (aszepszis)",
            "Orchitis (sterilitás ritka)",
            "Pancreatitis",
            "Süketség"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Amiláz",
              "finding": "Emelkedett (nyálmirigy/pancreas eredet)",
              "interpretation": "-"
            }
          ],
          "microbiology": [
            {
              "test": "IgM szerológia",
              "finding": "Pozitív",
              "significance": "Diagnosztikus"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív",
                "dose": "-",
                "duration": "-",
                "note": "Fájdalomcsillapítás, borogatás"
              }
            ]
          },
          "targeted": "Nincs.",
          "prevention": [
            "MMR vakcina"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai gyanú: Akut, fájdalmas fültőmirigy-duzzanat.",
            "Megerősítés: Anti-mumpsz IgM szerológia."
          ],
          "treatment_indications": [
            "Szupportív terápia. Orchitis esetén ágynyugalom, here hűtése, NSAID."
          ]
        },
        "prognosis": {
          "mortality": "Nagyon alacsony",
          "prognostic_scores": [],
          "factors": "Életkor, vakcináció"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3EMumpsz%20(J%C3%A1rv%C3%A1nyos%20f%C3%BClt%C5%91mirigy-gyullad%C3%A1s%20%2F%20Parotitis%20epidemica)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Mumpsz (Járványos fültőmirigy-gyulladás / Parotitis epidemica) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "rubella",
        "name": "Rózsahimlő (Rubella)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Rubella virus</i>",
          "gram": "ssRNS, Matonaviridae",
          "shape": "gömb"
        },
        "epidemiology": {
          "incidence": "Ritka (oltás miatt)",
          "risk_groups": [
            "Oltatlanok",
            "Terhesek (magzat!)"
          ],
          "seasonality": "Tavasz",
          "transmission": "Cseppfertőzés"
        },
        "pathomechanism": {
          "steps": [
            "Behatolás: A vírus a nasopharynx nyálkahártyáján keresztül jut be, majd a regionális nyirokcsomókba vándorol és ott szaporodik.",
            "Virémia: A vírus a vérárammal eljut a bőrhöz és az ízületekhez. A kiütés és az ízületi tünetek immunkomplex-mediáltak.",
            "Teratogenitás: Terhesség alatt a vírus átjut a placentán, és a magzati sejtekben gátolja a mitózist, valamint apoptózist indukál, ami súlyos fejlődési rendellenességekhez vezet (Congenitalis Rubella Szindróma)."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "14-21 nap",
          "onset": "Enyhe",
          "symptoms": [
            {
              "name": "Kiütés",
              "description": "Apróelemű, halvány rózsaszín makulopapulózus kiütés, amely az arcon kezdődik és gyorsan terjed lefelé, majd 3 nap alatt nyomtalanul eltűnik.",
              "severity": "mild"
            },
            {
              "name": "Lymphadenopathia",
              "description": "Jellegzetes a tarkótáji (occipitalis) és fül mögötti (retroauricularis) nyirokcsomók fájdalmas duzzanata.",
              "severity": "moderate"
            },
            {
              "name": "Arthralgia/Arthritis",
              "description": "Felnőtt nőkben gyakori (akár 70%) ízületi fájdalom vagy gyulladás.",
              "severity": "mild"
            },
            {
              "name": "Forchheimer-foltok",
              "description": "Petechiák a lágyszájpadon (nem specifikus, de előfordul).",
              "severity": "mild"
            }
          ],
          "physical_exam": [
            "Nyirokcsomó duzzanat (tarkó)",
            "Kiütés"
          ],
          "complications": [
            "Congenitalis Rubella Szindróma (CRS): szívhiba, katarakta, süketség",
            "Arthritis",
            "Encephalitis (ritka)"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "IgM szerológia",
              "finding": "Pozitív",
              "significance": "Diagnosztikus"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív",
                "dose": "-",
                "duration": "-",
                "note": "-"
              }
            ]
          },
          "targeted": "Nincs.",
          "prevention": [
            "MMR vakcina",
            "Terhesek szűrése"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai gyanú: Enyhe kiütés + jellegzetes retroauricularis/occipitalis nyirokcsomó-duzzanat.",
            "Megerősítés: Anti-rubella IgM szerológia. Terhességben kritikus a diagnózis!"
          ],
          "treatment_indications": [
            "Szupportív terápia. Congenitalis Rubella Szindróma megelőzése a legfőbb cél."
          ]
        },
        "prognosis": {
          "mortality": "Jó, kivéve CRS"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3ER%C3%B3zsahiml%C5%91%20(Rubella)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Rózsahimlő (Rubella) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "scarlatina",
        "name": "Skarlát (Vörheny)",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Streptococcus pyogenes</i> (GAS)",
          "gram": "Gram-pozitív",
          "shape": "lánc"
        },
        "epidemiology": {
          "incidence": "Gyakori gyermekkorban",
          "risk_groups": [
            "5-15 évesek"
          ],
          "seasonality": "Tél-tavasz",
          "transmission": "Cseppfertőzés"
        },
        "pathomechanism": {
          "steps": [
            "Kolonizáció: A Streptococcus pyogenes (GAS) cseppfertőzéssel jut a garatba, ahol megtapad és pharyngitist okoz.",
            "Toxin termelés: A baktérium eritrogén toxint (szuperantigén) termel, ha bakteriofággal fertőzött.",
            "Szisztémás hatás: A toxin a véráramba jutva generalizált kapilláris tágulatot és gyulladásos bőrreakciót vált ki azoknál, akik nem rendelkeznek ellenanyaggal a toxin ellen."
          ],
          "virulence_factors": [
            "Erythrogen toxin (SpeA, B, C)"
          ]
        },
        "clinical": {
          "incubation": "2-5 nap",
          "onset": "Hirtelen",
          "symptoms": [
            {
              "name": "Torokfájás",
              "description": "Hirtelen kezdődő, súlyos torokfájás, nyelési nehézség, gyakran hányással kísérve.",
              "severity": "moderate"
            },
            {
              "name": "Láz",
              "description": "Magas láz, hidegrázás.",
              "severity": "moderate"
            },
            {
              "name": "Kiütés",
              "description": "Diffúz vörös, \"smirgli\" tapintású kiütés, amely nyomásra elhalványul. A hajlatokban sötétebb csíkokat alkot (Pastia-vonalak). A gyógyulás során a tenyerek és talpak lemezes hámlása jellemző.",
              "severity": "moderate"
            },
            {
              "name": "Nyelv",
              "description": "Kezdetben fehér lepedékes (\"fehér epernyelv\"), majd a lepedék leválása után vörös és papillás (\"málnanyelv\").",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Pharynx hyperaemia",
            "Málnanyelv",
            "Filatov-jel (száj körüli sápadtság)",
            "Pastia-vonalak (hajlatokban)",
            "Hámlás (később)"
          ],
          "complications": [
            "Rheumás láz",
            "Glomerulonephritis",
            "Peritonsillaris tályog"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Torokváladék tenyésztés",
              "finding": "Strep. pyogenes",
              "significance": "Gold standard"
            },
            {
              "test": "Gyorsteszt (Strep A)",
              "finding": "Pozitív",
              "significance": "Gyors"
            }
          ],
          "calculators": [
            {
              "name": "Centor Score (McIsaac) - Strep A valószínűség",
              "items": [
                {
                  "label": "Láz > 38°C",
                  "points": 1
                },
                {
                  "label": "Köhögés hiánya",
                  "points": 1
                },
                {
                  "label": "Érzékeny elülső nyaki nyirokcsomók",
                  "points": 1
                },
                {
                  "label": "Tonsilla duzzanat vagy exsudatum",
                  "points": 1
                },
                {
                  "label": "Életkor 3-14 év",
                  "points": 1
                },
                {
                  "label": "Életkor ≥ 45 év",
                  "points": -1
                }
              ],
              "interpretation": [
                {
                  "min": -1,
                  "max": 1,
                  "text": "Alacsony kockázat (<10%). Antibiotikum nem javasolt."
                },
                {
                  "min": 2,
                  "max": 3,
                  "text": "Közepes kockázat (15-30%). Tenyésztés vagy gyorsteszt javasolt. Pozitív esetben AB."
                },
                {
                  "min": 4,
                  "max": 5,
                  "text": "Magas kockázat (>50%). Empirikus antibiotikum adható vagy tesztelés."
                }
              ]
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Penicillin V",
                "dose": "PO",
                "duration": "10 nap",
                "note": "Első választás"
              },
              {
                "drug": "Amoxicillin",
                "dose": "PO",
                "duration": "10 nap",
                "note": "Alternatíva"
              },
              {
                "drug": "Macrolid (pl. Azithromycin)",
                "dose": "PO",
                "duration": "5 nap",
                "note": "Penicillin allergia esetén"
              }
            ]
          },
          "targeted": "Penicillin.",
          "prevention": [
            "Higiénia",
            "Nincs vakcina"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai gyanú (Centor/FeverPAIN score) + Strep A gyorsteszt vagy torokváladék tenyésztés."
          ],
          "treatment_indications": [
            "Minden igazolt GAS pharyngitis/tonsillitis kezelendő a reumás láz megelőzése érdekében."
          ],
          "first_line": [
            "Penicillin V 10 napig. Allergia esetén makrolid."
          ]
        },
        "prognosis": {
          "mortality": "Kezeléssel kiváló",
          "prognostic_scores": [
            "Centor Score (McIsaac)"
          ]
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3ESkarl%C3%A1t%20(V%C3%B6rheny)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Skarlát (Vörheny) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "mononucleosis",
        "name": "Infectious Mononucleosis (Csókbetegség)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Epstein-Barr vírus</i> (EBV)",
          "gram": "dsDNS, Herpesviridae (HHV-4)",
          "shape": "gömb"
        },
        "epidemiology": {
          "incidence": "Serdülők/fiatal felnőttek (90% felnőttkorra átesik)",
          "risk_groups": [
            "Fiatalok"
          ],
          "seasonality": "Nincs",
          "transmission": "Nyál (csók), cseppfertőzés"
        },
        "pathomechanism": {
          "steps": [
            "Az EBV a nyállal terjed és az oropharynx hámsejtjeit fertőzi meg.",
            "Ezt követően a B-limfocitákat fertőzi, amelyekben látens fertőzést alakít ki és immortalizálja őket.",
            "A szervezet erős celluláris immunválaszt ad (CD8+ T-sejtek), ami a vérképben megjelenő atípusos limfocitákhoz (\"virociták\") és a nyirokszervek megnagyobbodásához vezet."
          ],
          "virulence_factors": [
            "LMP, EBNA proteinek"
          ]
        },
        "clinical": {
          "incubation": "4-6 hét",
          "onset": "Fokozatos",
          "symptoms": [
            {
              "name": "Torokfájás",
              "description": "Súlyos, gyakran pseudomembranosus lepedékkel fedett mandulákkal járó garatgyulladás.",
              "severity": "severe"
            },
            {
              "name": "Láz",
              "description": "Elhúzódó, akár 10-14 napig is tartó láz.",
              "severity": "moderate"
            },
            {
              "name": "Lymphadenopathia",
              "description": "Generalizált, szimmetrikus nyirokcsomó-duzzanat, amely különösen a hátsó nyaki láncot érinti.",
              "severity": "moderate"
            },
            {
              "name": "Fáradtság",
              "description": "Kifejezett gyengeség és fáradékonyság, amely hetekig-hónapokig tarthat.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Generalizált lymphadenopathia (nyaki dominancia)",
            "Hepatosplenomegalia",
            "Tonsilla lepedék",
            "Ampicillin-rash (ha AB-t kapott)"
          ],
          "complications": [
            "Lépruptúra (ritka, de veszélyes)",
            "Légúti obstrukció (tonsilla)",
            "Hepatitis",
            "Burkitt lymphoma (késői, endémiás)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Vérkép",
              "finding": "Lymphocytosis, atípusos mononuclearis sejtek (>10%)",
              "interpretation": "Jellegzetes"
            },
            {
              "test": "Májenzimek",
              "finding": "Enyhe emelkedés",
              "interpretation": "Gyakori"
            }
          ],
          "microbiology": [
            {
              "test": "Monospot teszt",
              "finding": "Heterofil antitest pozitív",
              "significance": "Gyors (gyerekeknél gyakran negatív!)"
            },
            {
              "test": "EBV szerológia",
              "finding": "VCA IgM+, EBNA- (akut)",
              "significance": "Konfirmálás"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív",
                "dose": "-",
                "duration": "-",
                "note": "Pihenés, folyadék"
              }
            ]
          },
          "targeted": "Nincs. Szteroid csak légúti obstrukció esetén.",
          "supportive": [
            "Fizikai kímélet (lépruptúra veszély miatt sporttilalom 3-4 hétig!)"
          ],
          "prevention": [
            "Higiénia"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai triász (láz, torokfájás, nycs. duzzanat) + Vérkép (atípusos lymphocyták) + Szerológia (Monospot vagy EBV-specifikus IgM/IgG)."
          ],
          "treatment_indications": [
            "Szupportív. Amoxicillin/Ampicillin kerülendő (kiütés).",
            "Fizikai kímélet a lépruptúra megelőzése miatt."
          ]
        },
        "prognosis": {
          "mortality": "Nagyon alacsony"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3EInfectious%20Mononucleosis%20(Cs%C3%B3kbetegs%C3%A9g)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Infectious Mononucleosis (Csókbetegség) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "mononucleosis_syndrome",
        "name": "Mononucleosis szindróma (CMV, Toxoplasma, HIV)",
        "pathogen": {
          "type": "Vegyes",
          "name": "<i>Cytomegalovirus (CMV), Toxoplasma gondii, HIV</i>",
          "gram": "-",
          "shape": "-"
        },
        "epidemiology": {
          "incidence": "Gyakori, heterofil-negatív mononucleosis esetek",
          "risk_groups": [
            "Szexuálisan aktív fiatalok (CMV, HIV)",
            "Macskatartók/nyers hús (Toxoplasma)"
          ],
          "seasonality": "Nincs",
          "transmission": "Testnedvek (CMV, HIV), feko-orális/hús (Toxoplasma)"
        },
        "pathomechanism": {
          "steps": [
            "A kórokozók (CMV, Toxoplasma, HIV) szisztémás fertőzést okoznak, amely immunválaszt vált ki.",
            "Hasonlóan az EBV-hez, aktiválják a T-limfocitákat (atípusos limfociták), de nem a B-sejteket immortalizálják (kivéve EBV).",
            "A tünetek a gazdaszervezet immunválaszának következményei."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "Változó (CMV 20-60 nap, HIV 2-4 hét, Toxoplasma 5-23 nap)",
          "onset": "Fokozatos",
          "symptoms": [
            {
              "name": "Láz",
              "description": "Elhúzódó láz (hetekig tarthat), gyakran ez a vezető tünet.",
              "severity": "moderate"
            },
            {
              "name": "Lymphadenopathia",
              "description": "Generalizált nyirokcsomó-duzzanat, de kevésbé kifejezett, mint EBV-nél.",
              "severity": "mild"
            },
            {
              "name": "Pharyngitis hiánya/enyhesége",
              "description": "Ellentétben az EBV-vel, a torokfájás és a mandulagyulladás gyakran hiányzik vagy nagyon enyhe (kivéve akut HIV, ahol lehet fekélyes).",
              "severity": "moderate"
            },
            {
              "name": "Hepatomegalia/Splenomegalia",
              "description": "Előfordulhat, de ritkább és enyhébb, mint EBV-nél.",
              "severity": "mild"
            }
          ],
          "physical_exam": [
            "Láz",
            "Enyhe lymphadenopathia",
            "Exanthema (HIV-nél gyakori)",
            "Pharyngitis hiánya (CMV/Toxoplasma)"
          ],
          "complications": [
            "Hepatitis",
            "Pneumonia",
            "Guillain-Barré szindróma",
            "Congenitalis fertőzés (terhességben!)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Vérkép",
              "finding": "Lymphocytosis, atípusos mononuclearis sejtek",
              "interpretation": "Hasonló az EBV-hez"
            },
            {
              "test": "Májenzimek",
              "finding": "Enyhe emelkedés",
              "interpretation": "Gyakori"
            }
          ],
          "microbiology": [
            {
              "test": "Monospot teszt",
              "finding": "NEGATÍV",
              "significance": "Kulcsfontosságú különbség az EBV-től!"
            },
            {
              "test": "CMV szerológia",
              "finding": "IgM pozitív",
              "significance": "CMV igazolása"
            },
            {
              "test": "Toxoplasma szerológia",
              "finding": "IgM pozitív",
              "significance": "Toxoplasma igazolása"
            },
            {
              "test": "HIV teszt",
              "finding": "Ag/Ab pozitív / PCR",
              "significance": "Akut HIV kizárása kötelező!"
            }
          ]
        },
        "differential": [
          {
            "disease": "EBV Mononucleosis",
            "distinguishing": "Súlyos pharyngitis, Monospot pozitív"
          },
          {
            "disease": "Streptococcus pharyngitis",
            "distinguishing": "Gennyes mandulák, leukocytosis (nem lymphocytosis)"
          },
          {
            "disease": "Lymphoma",
            "distinguishing": "Láz, fogyás, éjszakai izzadás, fixált nyirokcsomók"
          }
        ],
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív",
                "dose": "-",
                "duration": "-",
                "note": "Tüneti kezelés"
              }
            ]
          },
          "targeted": "CMV/Toxo: immunkompetenseknél általában nem igényel kezelést. HIV: ART indítása. Terhességben speciális kezelés!",
          "prevention": [
            "Higiénia",
            "Biztonságos szex",
            "Húsok átsütése"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Mononucleosis szindróma (láz, lymphocytosis) negatív Monospot teszttel (\"Heterofil-negatív mononucleosis\").",
            "Differenciálás: CMV (idősebbek, láz dominál), Toxoplasma (nyaki nycs.), Akut HIV (kiütés, rizikómagatartás)."
          ],
          "treatment_indications": [
            "Szupportív. Immunszupprimáltaknál vagy súlyos szervi érintettségnél specifikus terápia (Ganciclovir, Pyrimethamin/Sulfadiazin)."
          ]
        },
        "prognosis": {
          "mortality": "Kiváló immunkompetenseknél"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3EMononucleosis%20szindr%C3%B3ma%20(CMV%2C%20Toxoplasma%2C%20HIV)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Mononucleosis szindróma (CMV, Toxoplasma, HIV) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "exanthema_subitum",
        "name": "Exanthema Subitum (Roseola infantum / Háromnapos láz)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Human Herpesvirus 6</i> (HHV-6)",
          "gram": "dsDNS, Herpesviridae",
          "shape": "gömb"
        },
        "epidemiology": {
          "incidence": "Csecsemők/kisdedek (6 hó - 2 év) szinte mind átesnek",
          "risk_groups": [
            "Csecsemők"
          ],
          "seasonality": "Egész évben",
          "transmission": "Nyál (tünetmentes hordozó felnőttektől)"
        },
        "pathomechanism": {
          "steps": [
            "A HHV-6 vírus cseppfertőzéssel terjed, és élethosszig tartó látens fertőzést hoz létre.",
            "A primer fertőzés során a vírus a nyálmirigyekben és a limfocitákban szaporodik.",
            "A virémia magas lázat okoz, majd a láz hirtelen megszűnésekor immunmediált mechanizmussal jelennek meg a kiütések."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "5-15 nap",
          "onset": "Hirtelen",
          "symptoms": [
            {
              "name": "Magas láz",
              "description": "Hirtelen kezdődő, 3-5 napig tartó magas láz (39-40°C), miközben a gyermek általános állapota meglepően jó.",
              "severity": "moderate"
            },
            {
              "name": "Kiütés",
              "description": "A láz kritikus csökkenésével egyidőben vagy utána jelennek meg a rózsaszín, makulopapulózus kiütések a törzsön, majd a nyakon.",
              "severity": "mild"
            },
            {
              "name": "Nagayama-foltok",
              "description": "Ulcerációk vagy papulák a lágyszájpadon és az uvula tövénél.",
              "severity": "mild"
            }
          ],
          "physical_exam": [
            "Láz",
            "Nagayama-foltok (uvula tövénél)",
            "Cervicalis/occipitalis lymphadenopathia",
            "Kiütés (később)"
          ],
          "complications": [
            "Lázgörcs (gyakori ok!)",
            "Encephalitis (ritka)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Vérkép",
              "finding": "Leukopenia",
              "interpretation": "-"
            }
          ],
          "microbiology": [
            {
              "test": "Klinikai kép",
              "finding": "Láz utáni kiütés",
              "significance": "Diagnosztikus"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív",
                "dose": "-",
                "duration": "-",
                "note": "Lázcsillapítás"
              }
            ]
          },
          "targeted": "Nincs.",
          "prevention": [
            "-"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Jellegzetes klinikai kép: 3-5 nap magas láz, majd a láz megszűnésével megjelenő kiütés."
          ],
          "treatment_indications": [
            "Szupportív. Lázgörcsre való felkészülés/kezelés fontos."
          ]
        },
        "prognosis": {
          "mortality": "Kiváló"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3EExanthema%20Subitum%20(Roseola%20infantum%20%2F%20H%C3%A1romnapos%20l%C3%A1z)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Exanthema Subitum (Roseola infantum / Háromnapos láz) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "varicella",
        "name": "Bárányhimlő (Varicella)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Varicella-zoster vírus</i> (VZV)",
          "gram": "dsDNS, Herpesviridae (HHV-3)",
          "shape": "gömb"
        },
        "epidemiology": {
          "incidence": "Nagyon gyakori gyermekkorban (oltatlanok)",
          "risk_groups": [
            "Oltatlan gyermekek",
            "Immunszupprimáltak",
            "Terhesek",
            "Felnőttek (súlyosabb)"
          ],
          "seasonality": "Tél-tavasz",
          "transmission": "Cseppfertőzés, hólyagbennék (levegőben terjed!)"
        },
        "pathomechanism": {
          "steps": [
            "Behatolás: A VZV a légutakon keresztül jut be, majd a regionális nyirokcsomókban szaporodik.",
            "Virémia: A primer virémia után a vírus a májban és lépben szaporodik, majd egy szekunder, T-sejt asszociált virémia során eljut a bőrbe és a nyálkahártyákra.",
            "Bőrtünetek: A vírus a bőrben lévő hámsejteket fertőzi, intraepidermális hólyagokat és nekrózist okozva.",
            "Latencia: A fertőzés után a vírus az érzőidegek mentén visszahúzódik a gerincvelői hátsó gyöki ganglionokba, ahol látens formában megmarad."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "10-21 nap",
          "onset": "Hirtelen",
          "symptoms": [
            {
              "name": "Kiütés",
              "description": "Viszkető, polimorf kiütések (makula, papula, vezikula, pörk) jelennek meg hullámokban, így egy időben minden stádium látható (\"csillagos égbolt\"). A friss hólyagok \"rózsasziromra hullott harmatcseppre\" emlékeztetnek.",
              "severity": "moderate"
            },
            {
              "name": "Láz",
              "description": "Mérsékelt láz a kiütések megjelenésekor.",
              "severity": "mild"
            },
            {
              "name": "Enanthema",
              "description": "Fájdalmas hólyagok a szájnyálkahártyán.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Polimorf kiütések (hajas fejbőrön is!)",
            "Láz",
            "Lymphadenopathia"
          ],
          "complications": [
            "Bakteriális felülfertőződés (impetiginizálódás)",
            "Cerebellitis (ataxia)",
            "Pneumonia (felnőttek)",
            "Encephalitis",
            "Reye-szindróma (aspirin!)"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Klinikai kép",
              "finding": "Jellegzetes",
              "significance": "Diagnosztikus"
            },
            {
              "test": "PCR",
              "finding": "VZV DNS",
              "significance": "Bizonytalan esetben"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív",
                "dose": "-",
                "duration": "-",
                "note": "Hűsítő rázókeverék NEM javasolt (felülfertőződés), inkább hintőpor vagy semmi. Viszketéscsillapítás."
              }
            ]
          },
          "targeted": "Acyclovir (kockázati csoportoknak, felnőtteknek, immunszupprimáltaknak).",
          "prevention": [
            "Varicella vakcina (kötelező)"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai kép: Polimorf, viszkető kiütések, melyek egyszerre több stádiumban vannak jelen."
          ],
          "treatment_indications": [
            "Egészséges gyermekeknél szupportív. Acyclovir javasolt: >12 évesek, krónikus bőr/tüdőbetegség, szteroidot szedők, felnőttek, terhesek."
          ],
          "prevention": [
            "Kötelező védőoltás. Post-expozíciós profilaxis (oltás vagy VZIG)."
          ]
        },
        "prognosis": {
          "mortality": "Alacsony, de szövődmények előfordulnak"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3EB%C3%A1r%C3%A1nyhiml%C5%91%20(Varicella)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Bárányhimlő (Varicella) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "herpes_zoster",
        "name": "Övsömör (Herpes Zoster)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Varicella-zoster vírus</i> (VZV) reaktiváció",
          "gram": "dsDNS",
          "shape": "-"
        },
        "epidemiology": {
          "incidence": "Főleg idősek, de immunszupprimált gyermekekben is",
          "risk_groups": [
            "Immunszupprimáltak",
            "Korábbi varicella"
          ],
          "seasonality": "Nincs",
          "transmission": "Hólyagbennék fertőz (varicellát okozhat szeronegatívnak)"
        },
        "pathomechanism": {
          "steps": [
            "A látens VZV reaktiválódik a szenzoros ganglionokban (pl. immunszuppresszió vagy idős kor miatt).",
            "A vírus az érzőidegek axonjain keresztül vándorol a bőrhöz.",
            "A megfelelő dermatómában gyulladást, fájdalmat és hólyagos kiütést okoz."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "-",
          "onset": "Fájdalommal kezdődik",
          "symptoms": [
            {
              "name": "Fájdalom",
              "description": "Prodromális, égető, nyilalló fájdalom az érintett dermatómában, amely napokkal a kiütés előtt jelentkezhet.",
              "severity": "severe"
            },
            {
              "name": "Kiütés",
              "description": "Csoportos, fájdalmas hólyagok vörös alapon, amelyek szigorúan egyoldaliak és nem lépik át a középvonalat.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Dermatómális eloszlású vezikulák (nem lépi át a középvonalat)"
          ],
          "complications": [
            "Postherpeses neuralgia (PHN)",
            "Ophthalmicus zoster (szem)",
            "Ramsay Hunt szindróma (fül/arcideg)"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Klinikai kép",
              "finding": "Jellegzetes",
              "significance": "Diagnosztikus"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Acyclovir",
                "dose": "5x800mg PO",
                "duration": "7 nap",
                "note": "72 órán belül kezdve"
              },
              {
                "drug": "Valacyclovir",
                "dose": "3x1000mg PO",
                "duration": "7 nap",
                "note": "Jobb biohasznosulás"
              }
            ]
          },
          "targeted": "Antivirális szer + Fájdalomcsillapítás.",
          "prevention": [
            "Zoster vakcina (időseknek)"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai kép: Egyoldali, dermatómának megfelelő vezikuláris kiütés, gyakran prodromális fájdalommal."
          ],
          "treatment_indications": [
            "Antivirális kezelés (Acyclovir, Valacyclovir) 72 órán belül kezdve csökkenti a tünetek súlyosságát és a postherpeses neuralgia (PHN) kockázatát.",
            "Ophthalmicus zoster esetén sürgős szemészeti konzílium szükséges."
          ]
        },
        "prognosis": {
          "mortality": "Alacsony, PHN életminőséget rontja"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3E%C3%96vs%C3%B6m%C3%B6r%20(Herpes%20Zoster)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Övsömör (Herpes Zoster) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "hsv_infection",
        "name": "Herpes Simplex fertőzések (Gingivostomatitis)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Herpes Simplex Virus 1</i> (HSV-1)",
          "gram": "dsDNS, Herpesviridae",
          "shape": "gömb"
        },
        "epidemiology": {
          "incidence": "Gyakori kisgyermekkorban (1-3 év)",
          "risk_groups": [
            "Kisgyermekek"
          ],
          "seasonality": "Nincs",
          "transmission": "Nyál, közvetlen kontaktus"
        },
        "pathomechanism": {
          "steps": [
            "A HSV-1 közvetlen kontaktussal fertőzi a nyálkahártyát vagy a sérült bőrt.",
            "A hámsejtekben szaporodva sejtpusztulást, hólyagképződést és fekélyeket okoz.",
            "A vírus bejut az érzőidegek végződéseibe, és retrográd transzporttal a ganglionokba jut, ahol látenssé válik."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "2-12 nap",
          "onset": "Hirtelen",
          "symptoms": [
            {
              "name": "Gingivostomatitis",
              "description": "Kisgyermekek primer fertőzése. Magas láz, fájdalmas, duzzadt, vérző íny, és számos fekély a szájnyálkahártyán. Az evés/ivás fájdalmas.",
              "severity": "severe"
            },
            {
              "name": "Herpes labialis",
              "description": "Rezidív fertőzés (ajakherpesz), amelyet prodromális bizsergés előz meg.",
              "severity": "mild"
            },
            {
              "name": "Eczema herpeticum",
              "description": "Atópiás dermatitis felülfertőződése, kiterjedt hólyagos kiütésekkel és lázzal járó súlyos állapot.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Duzzadt, vérző íny",
            "Fekélyek a nyelven/szájpadon",
            "Cervicalis lymphadenopathia",
            "Láz"
          ],
          "complications": [
            "Dehidráció (fájdalom miatt nem iszik)",
            "Eczema herpeticum",
            "Herpeses ujjgyulladás (herpetic whitlow)",
            "Encephalitis"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Klinikai kép",
              "finding": "Jellegzetes",
              "significance": "Diagnosztikus"
            },
            {
              "test": "PCR",
              "finding": "HSV DNS",
              "significance": "Súlyos/atípusos esetben"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív",
                "dose": "-",
                "duration": "-",
                "note": "Fájdalomcsillapítás, folyadék, ecsetelés"
              },
              {
                "drug": "Acyclovir",
                "dose": "PO/IV",
                "duration": "5-7 nap",
                "note": "Súlyos esetben vagy immunszuppressziónál"
              }
            ]
          },
          "targeted": "Acyclovir.",
          "prevention": [
            "Kontaktus kerülése aktív lézióval"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai kép: Fájdalmas, duzzadt, vérzékeny íny és fekélyek a szájban, lázzal kísérve kisgyermekkorban."
          ],
          "treatment_indications": [
            "Elsősorban szupportív (fájdalomcsillapítás, folyadékpótlás a dehidráció elkerülésére).",
            "Acyclovir súlyos esetekben, immunkompromittáltaknál vagy eczema herpeticum esetén javasolt."
          ]
        },
        "prognosis": {
          "mortality": "Alacsony, dehidráció veszély"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3EHerpes%20Simplex%20fert%C5%91z%C3%A9sek%20(Gingivostomatitis)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Herpes Simplex fertőzések (Gingivostomatitis) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "pertussis",
        "name": "Pertussis (Szamárköhögés)",
        "pathogen": {
          "type": "Baktérium",
          "name": "<i>Bordetella pertussis</i>",
          "gram": "Gram-negatív",
          "shape": "bacillus"
        },
        "epidemiology": {
          "incidence": "Oltatlan gyermekekben járványos",
          "risk_groups": [
            "Csecsemők (<6 hó)",
            "Oltatlan gyermekek",
            "Felnőttek (enyhébb)"
          ],
          "seasonality": "Tél-tavasz",
          "transmission": "Cseppfertőzés (nagyon fertőző! R0=12-17)"
        },
        "pathomechanism": {
          "steps": [
            "Adhézió: A Bordetella pertussis a légúti csillós hámsejtekhez tapad (filamentózus hemagglutinin).",
            "Toxinhatás: Toxinokat termel (pertussis toxin, trachealis citotoxin), amelyek megbénítják a csillókat, gátolják a mukociliáris clearance-t és lokális gyulladást, nekrózist okoznak.",
            "Szisztémás hatás: A pertussis toxin gátolja a limfociták kilépését az erekből a nyirokcsomókba, ami a vérben extrém magas limfocitaszámot (lymphocytosis) eredményez."
          ],
          "virulence_factors": [
            "Pertussis toxin (PT)",
            "Filamentous hemagglutinin (FHA)",
            "Adenylát cikláz toxin (ACT)"
          ]
        },
        "clinical": {
          "incubation": "7-10 nap",
          "onset": "Katarális fázis (1-2 hét)",
          "symptoms": [
            {
              "name": "Katarális fázis",
              "description": "Enyhe láz, nátha, köhögés (1-2 hét). Ez a legfertőzőbb szakasz, de nehéz elkülöníteni a náthától.",
              "severity": "mild"
            },
            {
              "name": "Paroxysmalis fázis",
              "description": "Rohamszerű, görcsös köhögés, amelyet mély, húzó belégzés (\"whoop\") kísér. A roham végén gyakran hányás jelentkezik. Csecsemőknél apnoe lehet a vezető tünet.",
              "severity": "severe"
            },
            {
              "name": "Konvaleszcens fázis",
              "description": "A köhögés lassan enyhül, de hónapokig visszatérhet (\"100 napos köhögés\").",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Köhögési rohamok (whoop jellemző gyermekeken)",
            "Apnoe (csecsemők)",
            "Lymphocytosis (>20,000/µL)",
            "Petechiák (erőlködés miatt)"
          ],
          "complications": [
            "Pneumonia (bakteriális/virális)",
            "Encephalopathia",
            "Apnoe/halál (csecsemők)",
            "Atelektázis",
            "Hernia (köhögés miatt)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Vérkép",
              "finding": "Lymphocytosis (>20,000/µL)",
              "interpretation": "Jellegzetes"
            },
            {
              "test": "CRP",
              "finding": "Normális vagy enyhén emelkedett",
              "interpretation": "Nem gyulladásos"
            }
          ],
          "microbiology": [
            {
              "test": "Nasopharyngealis aspirátum tenyésztés",
              "finding": "Bordetella pertussis",
              "significance": "Gold standard (korai fázisban)"
            },
            {
              "test": "PCR",
              "finding": "DNS detektálás",
              "significance": "Gyors, érzékeny"
            },
            {
              "test": "Szerológia",
              "finding": "IgG/IgA emelkedés",
              "significance": "Késői diagnózis"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Azithromycin",
                "dose": "10mg/kg/nap PO",
                "duration": "5 nap",
                "note": "Első választás"
              },
              {
                "drug": "Clarithromycin",
                "dose": "15mg/kg/nap PO",
                "duration": "7 nap",
                "note": "Alternatíva"
              }
            ]
          },
          "targeted": "Makrolid antibiotikum (erythromycin, azithromycin).",
          "supportive": [
            "Szupportív (oxigén, rehidráció)",
            "Izoláció (5 nap antibiotikum után)",
            "Köhögéscsillapítók NEM (mukus retenció!)"
          ],
          "prevention": [
            "DTP vakcina (kötelező, 3+1 dózis)",
            "Felnőttkori emlékeztető",
            "Terhesek oltása a 3. trimeszterben (magzat védelme)"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai gyanú (elhúzódó, rohamokban jelentkező köhögés) + Labor (kifejezett lymphocytosis).",
            "Megerősítés: Nasopharyngealis PCR (gold standard)."
          ],
          "treatment_indications": [
            "Minden gyanús/igazolt esetet kezelni kell a fertőzőképesség csökkentésére és a tünetek enyhítésére (ha korán kezdik).",
            "Csecsemők kórházi ellátást igényelnek (apnoe veszély).",
            "Kontaktusok profilaxisa szükséges."
          ],
          "first_line": [
            "Makrolidok (pl. Azithromycin 5 napig)."
          ]
        },
        "prognosis": {
          "mortality": "Alacsony fejlett országokban, de csecsemőknél magas (1-2%)",
          "factors": "Korai kezelés, vakcináció"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3EPertussis%20(Szam%C3%A1rk%C3%B6h%C3%B6g%C3%A9s)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Pertussis (Szamárköhögés) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "hand_foot_mouth",
        "name": "Kéz-láb-száj betegség (Hand, Foot, and Mouth Disease)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Coxsackie A16, Enterovirus 71</i>",
          "gram": "ssRNS, Picornaviridae",
          "shape": "ikozahidrális"
        },
        "epidemiology": {
          "incidence": "Gyakori gyermekkorban (<5-10 év)",
          "risk_groups": [
            "Kisgyermekek",
            "Közösségek"
          ],
          "seasonality": "Nyár-ősz",
          "transmission": "Feko-orális, cseppfertőzés, hólyagbennék"
        },
        "pathomechanism": {
          "steps": [
            "A vírus a szájüregbe jutva a garat és a bél nyirokszöveteiben szaporodik.",
            "Virémia révén jut el a bőrhöz és a nyálkahártyákhoz.",
            "A bőrön és a szájnyálkahártyán gyulladást, hólyagképződést okoz."
          ],
          "virulence_factors": [
            "-"
          ]
        },
        "clinical": {
          "incubation": "3-7 nap",
          "onset": "Hirtelen",
          "symptoms": [
            {
              "name": "Prodroma",
              "description": "Láz, torokfájás, étvágytalanság, rossz közérzet.",
              "severity": "mild"
            },
            {
              "name": "Enanthema",
              "description": "Fájdalmas hólyagok és fekélyek a nyelven, pofanyálkahártyán (herpangina-szerű).",
              "severity": "moderate"
            },
            {
              "name": "Exanthema",
              "description": "Nem viszkető, vörös udvarú hólyagok vagy papulák a tenyereken, talpakon, esetleg a pelenka területén.",
              "severity": "moderate"
            }
          ],
          "physical_exam": [
            "Hólyagok a tenyéren/talpon",
            "Fekélyek a szájban",
            "Láz"
          ],
          "complications": [
            "Dehidráció (fájdalmas nyelés)",
            "Körömleválás (onychomadesis - hetekkel később)",
            "Asepticus meningitis (ritka, EV71)",
            "Encephalitis (EV71)"
          ]
        },
        "diagnostics": {
          "laboratory": [
            {
              "test": "Vérkép",
              "finding": "Normál",
              "interpretation": "-"
            }
          ],
          "microbiology": [
            {
              "test": "Klinikai kép",
              "finding": "Jellegzetes",
              "significance": "Diagnosztikus"
            },
            {
              "test": "PCR",
              "finding": "Enterovírus RNS (torok, széklet)",
              "significance": "Súlyos esetben"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív",
                "dose": "-",
                "duration": "-",
                "note": "Fájdalomcsillapítás, folyadék"
              }
            ]
          },
          "targeted": "Nincs.",
          "prevention": [
            "Higiénia",
            "Kézmosás"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai kép: Láz, szájüregi fekélyek és kiütések a tenyéren/talpon."
          ],
          "treatment_indications": [
            "Szupportív. Dehidráció megelőzése."
          ]
        },
        "prognosis": {
          "mortality": "Kiváló, kivéve EV71 encephalitis",
          "prognostic_scores": [],
          "factors": "Kórokozó típusa"
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3EK%C3%A9z-l%C3%A1b-sz%C3%A1j%20betegs%C3%A9g%20(Hand%2C%20Foot%2C%20and%20Mouth%20Disease)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EChildhood%20infection%20educational%20illustration%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Kéz-láb-száj betegség (Hand, Foot, and Mouth Disease) - educational illustration",
            "type": "Illustration"
          }
        ]
      },
      {
        "id": "erythema_infectiosum",
        "name": "Lepkehimlő betegség (Erythema infectiosum / Parvovirus B19)",
        "pathogen": {
          "type": "Vírus",
          "name": "<i>Parvovirus B19</i>",
          "gram": "ssDNS, Parvoviridae",
          "shape": "icosahedralis, burok nélküli"
        },
        "epidemiology": {
          "incidence": "Gyakori gyermekkorban (5–15 év között), tavaszi járványok formájában",
          "risk_groups": [
            "Kisgyermekek",
            "Várandósok (hydrops fetalis kockázata!)",
            "Krónikus haemolyticus anaemiások (pl. sarlósejtes, szferocitózis)",
            "Immunszupprimáltak"
          ],
          "seasonality": "Tél-tavasz",
          "transmission": "Légúti cseppfertőzés, transzplacentáris, vérkészítmények"
        },
        "pathomechanism": {
          "steps": [
            "Behatolás & Virémia: Légúti úton bejutva a vírus az erythroid progenitor sejtek P-antigénjéhez (globotid) kötődik a csontvelőben.",
            "Erythroid Apoptosis: Fertőzi és elpusztítja az erythroid praecursorokat, átmeneti erythropoiesis-leállást és reticulocytopeniát okozva.",
            "Immunkomplex Exanthema: A keringő IgM/IgG immunkomplexek leperkálódása felelős a háromfázisú bőrkiütésekért és az ízületi gyulladásért.",
            "Transzplacentáris terjedés: Terhesség alatt a placenta átlépésével magzati anaemiát, szívelégtelenséget és Hydrops fetalist okozhat."
          ],
          "virulence_factors": [
            "NS1 nem-strukturális fehérje (apoptosis indukció)",
            "P-antigén (globotid) receptor-kötődés"
          ]
        },
        "clinical": {
          "incubation": "4–14 nap (akár 21 nap)",
          "onset": "Enyhe / tünetszegény prodromum",
          "symptoms": [
            {
              "name": "Pillangó-exanthema (Pofonvágott arc)",
              "description": "Élénkvörös, orcákra korlátozódó erythema (\"slapped cheek\"), a száj körüli terület sápadt marad (circumoralis pallor).",
              "severity": "mild"
            },
            {
              "name": "Csipkeszerű / Hálózatos kiütés",
              "description": "A törzsön és végtagokon megjelenő reticularis maculopapulosus kiütés, ami meleg, napfény vagy stressz hatására visszatérhet.",
              "severity": "mild"
            },
            {
              "name": "Arthralgia / Arthritis",
              "description": "Főleg felnőtt nőkben a kéz kisízületeinek szimmetrikus fájdalma és gyulladása.",
              "severity": "moderate"
            },
            {
              "name": "Aplasticus krízis",
              "description": "Haemolyticus anaemiás betegekben hirtelen fellépő súlyos anaemia, reticulocytopenia, sápadtság.",
              "severity": "severe"
            }
          ],
          "physical_exam": [
            "Élénkvörös orcák",
            "Hálózatos (reticularis) maculopapulosus kiütés a karokon és combokon",
            "Szimmetrikus ízületi duzzanat (kéz/csukló)"
          ],
          "complications": [
            "Transient aplasticus krízis (haemolyticus anaemiásokban)",
            "Hydrops fetalis / intrauterin elhalás terhességben",
            "Kesztyű-zokni purpura szindróma (PPGSS)",
            "Krónikus Pure Red Cell Aplasia (PRCA) immunszupprimáltakban"
          ]
        },
        "diagnostics": {
          "microbiology": [
            {
              "test": "Anti-Parvovirus B19 IgM szerológia",
              "finding": "Pozitív a kiütések megjelenésekor",
              "significance": "Akut fertőzés igazolása immunocompetens betegekben"
            },
            {
              "test": "Parvovirus B19 PCR (vér / amniotikus folyadék)",
              "finding": "Magas vírusszám",
              "significance": "Indikált terhesekben, aplasticus krízisben, immunszupprimáltakban"
            }
          ]
        },
        "therapy": {
          "empirical": {
            "outpatient": [
              {
                "drug": "Szupportív terápia",
                "dose": "-",
                "duration": "-",
                "note": "Láz- és fájdalomcsillapítás (Paracetamol / NSAID). Pihenés."
              }
            ]
          },
          "targeted": "Aplasticus krízisben vörösvértest-transzfúzió. Krónikus aplasiában / immunszuppresszióban IVIG (Intravénás immunoglobulin). Magzati hydrops esetén intrauterin transfusio.",
          "prevention": [
            "Gyakori kézhigiéné",
            "Terhesek elkülönítése igazolt fertőzött gyermekektől",
            "Nincs védőoltás"
          ]
        },
        "guidelines": {
          "diagnosis": [
            "Klinikai diagnózis: Pofonvágott orca + hálózatos kiütés.",
            "Szerológia / PCR azonnal indokolt terhességben és haemolyticus anaemia esetén!"
          ],
          "treatment_indications": [
            "Tüneti kezelés nem komplikált esetekben.",
            "Súlyos anaemia vagy terhességi szövődmény esetén azonnali kórházi / perinatológiai centrumi ellátás."
          ]
        },
        "prognosis": {
          "mortality": "Gyermekkorban kiváló. Terhességben a 20. hét előtt 2-10% magzati veszteség."
        },
        "gallery": [
          {
            "url": "data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201200%20630%22%3E%0A%20%20%20%20%20%20%3Cdefs%3E%0A%20%20%20%20%20%20%20%20%3ClinearGradient%20id%3D%22bg%22%20x1%3D%220%22%20x2%3D%221%22%20y1%3D%220%22%20y2%3D%221%22%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%220%25%22%20stop-color%3D%22%23fee2e2%22%2F%3E%0A%20%20%20%20%20%20%20%20%20%20%3Cstop%20offset%3D%22100%25%22%20stop-color%3D%22%23fecaca%22%2F%3E%0A%20%20%20%20%20%20%20%20%3C%2FlinearGradient%3E%0A%20%20%20%20%20%20%3C%2Fdefs%3E%0A%20%20%20%20%20%20%3Crect%20width%3D%221200%22%20height%3D%22630%22%20fill%3D%22url(%23bg)%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%221030%22%20cy%3D%22150%22%20r%3D%22130%22%20fill%3D%22%23ef4444%22%20opacity%3D%220.14%22%2F%3E%0A%20%20%20%20%20%20%3Ccircle%20cx%3D%22180%22%20cy%3D%22520%22%20r%3D%22180%22%20fill%3D%22%23f87171%22%20opacity%3D%220.12%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22150%22%20font-size%3D%2262%22%20font-family%3D%22Arial%2C%20sans-serif%22%20font-weight%3D%22700%22%20fill%3D%22%237f1d1d%22%3ELepid%C5%91%20betegs%C3%A9g%20(Parvovirus%20B19)%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22230%22%20font-size%3D%2236%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23991b1b%22%3ECategory%3A%20Gyermekkori%20fert%C5%91z%C3%A9sek%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22340%22%20font-size%3D%2230%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%23450a0a%22%3EErythema%20infectiosum%20-%20Parvovirus%20B19%3C%2Ftext%3E%0A%20%20%20%20%20%20%3Crect%20x%3D%2280%22%20y%3D%22390%22%20width%3D%221040%22%20height%3D%228%22%20fill%3D%22%23dc2626%22%20opacity%3D%220.45%22%2F%3E%0A%20%20%20%20%20%20%3Ctext%20x%3D%2280%22%20y%3D%22470%22%20font-size%3D%2228%22%20font-family%3D%22Arial%2C%20sans-serif%22%20fill%3D%22%237f1d1d%22%3EInfectologia%3C%2Ftext%3E%0A%20%20%20%20%3C%2Fsvg%3E",
            "caption": "Lepidő betegség (Erythema infectiosum) illusztráció",
            "type": "Illustration"
          }
        ]
      }
    ],
    "tables": [
      {
        "title": "Kiütéses gyermekkori fertőző betegségek összehasonlító táblázata",
        "headers": [
          "Betegség (Kórokozó)",
          "Lappangás & Prodromum",
          "Kiütés jellege & Terjedése",
          "Karakterisztikus jel / Enanthema",
          "Fertőzőképesség",
          "Súlyos szövődmények",
          "Terápia & Megelőzés (Oltás)"
        ],
        "rows": [
          [
            "<b>Kanyaró</b> (Morbilli)<br/><small><i>Measles morbillivirus</i> (ssRNS, Paramyxoviridae)</small>",
            "10–14 nap.<br/><b>Súlyos prodromum:</b> magas láz, \"3K\" (Köhögés, Kötőhártya-gyulladás, Katarrhus / rhinitis).",
            "Maculopapulosus, összefolyó (confluens), sötétvörös exanthema. Fentről lefelé terjed (fül mögött/arcon kezdődik → törzs → végtagok). Barna pigmentációval és finom hámlással gyógyul.",
            "<b>Koplik-foltok</b> (a szájnyálkahártyán mészszerű, apró fehér felrakódás vörös udvarral a rágófogak mellett).",
            "Rendkívül fertőző (R0=12–18). Cseppfertőzés. A kiütések előtt 4 nappal és utána 4 napig fertőz.",
            "Otitis media, kanyarós pneumonia, postinfectiosus encephalitis, <b>SSPE</b> (Subakut szklerotizáló panencephalitis - évekkel később, halálos).",
            "Szupportív + A-vitamin pótlás.<br/><b>MMR védőoltás</b> (élő gyengített, kötelező)."
          ],
          [
            "<b>Skarlát</b> (Vörheny / Scarlatina)<br/><small><i>Streptococcus pyogenes</i> (GAS, erythrogén toxin)</small>",
            "1–7 nap.<br/>Hirtelen kezdet: magas láz, hirtelen torokfájás, hidegrázás, hányás, tüszős mandulagyulladás.",
            "Apróelemű, punctiform, \"dörzspapír-szerű\" erythema. Hajlatokban kifejezettebb (<b>Pastia-vonalak</b>). Arc pirult, de a száj körül sápadt (<b>Filatov-háromszög</b>). Lemezes hámlással gyógyul (tenyér/talp).",
            "<b>Málna- / Epernyelv</b> (kezdetben fehér lepedékes, majd élénkvörös hyperplasiás papillákkal), Pastia-jelek, perioralis pallor.",
            "Cseppfertőzés / direkt kontaktus. Penicillin indítása után 24 órával már nem fertőz.",
            "Peritonsillaris abszcesszus, reumatás láz, poststreptococcalis glomerulonephritis (PSGN), PANDAS szindróma.",
            "<b>Penicillin V</b> (10 nap) vagy Amoxicillin (Allergia: Macrolid / Cefalosporin). Oltás nincs."
          ],
          [
            "<b>Rózsahimlő</b> (Rubella)<br/><small><i>Rubella virus</i> (ssRNS, Matonaviridae)</small>",
            "14–21 nap.<br/>Enyhe prodromum: hőemelkedés, enyhe felsőlégúti hurut.",
            "Apró, halványrózsaszín maculopapulosus kiütés, <b>nem összefolyó</b>. Arcról gyorsan terjed lefelé, 3 nap alatt nyomtalanul elmúlik.",
            "<b>Nuchalis, occipitalis és retroauricularis lymphadenopathia</b> (fájdalmas nyirokcsomó-duzzanat a fül mögött/tarkón). <b>Forchheimer-foltok</b> (lágy szájpad petechiák).",
            "Cseppfertőzés. A kiütés előtt 7 nappal és utána 7 napig fertőz.",
            "Polyarthritis (főleg nőkben), thrombocytopenia, encephalitis.<br/><b>Congenitalis Rubella Szindróma (CRS)</b> terhességben (cataracta, süketség, szívfejlődési hiba).",
            "Szupportív.<br/><b>MMR védőoltás</b> (élő gyengített, kötelező). Terhességben kontrainidikált!"
          ],
          [
            "<b>Bárányhimlő</b> (Varicella)<br/><small><i>Varicella-Zoster Virus</i> (VZV / HHV-3, dsDNS)</small>",
            "10–21 (átlag 14–16) nap.<br/>Enyhe láz, rossz közérzet, étvágytalanság.",
            "Viszkető, sokalakú (<b>polymorph</b>) kiütések hullámokban: macula → papula → vesicula (\"harmatcsepp rózsaszirmon\") → pustula → pörke. Minden stádium egyszerre jelen van (\"csillagos égbolt\"). Törzsről indul, hajas fejbőrre és nyálkahártyára is kiterjed.",
            "Polymorph exanthema + intenzív viszketés + nyálkahártya és hajas fejbőr érintettség.",
            "Rendkívül fertőző (R0=10–12). Cseppfertőzés és hólyagbennék. Fertőz a kiütés előtt 1-2 nappal az összes hólyag pörkösödéséig (kb. 5–7 nap).",
            "Bakteriális felülfertőződés (S. aureus, GAS - cellulitis, necrotising fasciitis), kisagyi ataxia (cerebellitis), varicella pneumonia (felnőttekben súlyos), Reye-szindróma (aszpirin adása esetén!).",
            "Szupportív, viszketéscsillapítás, szövődmény/rizikó esetén Aciclovir.<br/><b>Varicella védőoltás</b> (élő gyengített, kötelező)."
          ],
          [
            "<b>Háromnapos láz</b> (Exanthema Subitum / Roseola Infantum)<br/><small><i>Human Herpesvirus 6</i> (HHV-6B)</small>",
            "9–15 nap.<br/><b>3–5 napig tartó hirtelen magas láz</b> (akár 40°C) egyéb szervi tünet nélkül, jó általános állapot mellett.",
            "A <b>láz hirtelen megszűnésekor (defervescentia)</b> jelennek meg a halványrózsaszín maculopapulosus kiütések, főként a törzsön és nyakon. 1–2 nap alatt nyomtalanul eltűnnek.",
            "Hirtelen kritikus lázesés után megjelenő exanthema; <b>Nagayama-foltok</b> (papulák a lágy szájpadon/uvulán).",
            "Nyállal, szoros kontaktussal terjed.",
            "<b>Lázgörcs</b> (febrile seizure - a hirtelen magas láz miatt csecsemőkorban a leggyakoribb ok!), encephalitis (ritka).",
            "Szupportív, lázcsillapítás. Oltás nincs."
          ],
          [
            "<b>Kéz-láb-száj betegség</b> (HFMD)<br/><small><i>Coxsackievirus A16</i>, <i>Enterovirus A71</i></small>",
            "3–6 nap.<br/>Alacsony láz, étvágytalanság, torokfájás, rossz közérzet.",
            "Fájdalmas hólyagok és aphthaszerű fekélyek a szájnyálkahártyán (nyelv, íny, pofa), valamint elliptikus szürke vesiculák vörös udvarral a <b>tenyereken, talpakon</b>, farpofákon és genitális tájékon.",
            "Fájdalmas oralis enanthema + tenyéri/talpi ovalis vesiculák.",
            "Fecal-oralis úton és légúti váladékkal, szoros kontaktussal. Hónapokig ürülhet széklettel.",
            "Dehidratáció (fájdalmas nyelés miatt), körömleválás (onychomadesis 1–2 hónappal később), EV-A71 esetén asepticus meningitis, encephalitis, neurogen tüdőödéma.",
            "Szupportív, fájdalomcsillapítás, hidratáció. Oltás nincs."
          ],
          [
            "<b>Lepkehimlő betegség</b> (Erythema Infectiosum / 5. betegség)<br/><small><i>Parvovirus B19</i> (ssDNS)</small>",
            "4–14 nap.<br/>Enyhe prodromum: hőemelkedés, fejfájás, myalgia.",
            "Háromfázisú exanthema: 1. Pillangó alakú pirult orca (\"pofonvágott arc\"). 2. Hálózatos/csipkézett (reticularis) maculopapulosus kiütés a törzsön és végtagokon. 3. Visszatérő kiütés napfény, meleg vagy stressz hatására.",
            "<b>\"Slapped cheek\"</b> (pofonvágott arc) pirult orca + csipkeszerű, hálózatos exanthema.",
            "Cseppfertőzés. A kiütés megjelenésekor a beteg már nem fertőz!",
            "Aplasticus krízis (krónikus haemolyticus anaemia esetén), arthritis (felnőttekben), <b>Hydrops fetalis / intrauterin elhalás</b> terhességben.",
            "Szupportív. Aplasticus krízisben IVIG / vértranszfúzió. Oltás nincs."
          ]
        ]
      }
    ]
  }
});
