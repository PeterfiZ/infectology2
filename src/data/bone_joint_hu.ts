import { Category } from '../types';

export const boneJointHu: Category = {
  name: 'Csont- és ízületi fertőzések',
  icon: '🦴',
  color: '#57534e',
  didactics: {
    overview: 'A csont- és ízületi fertőzések magukban foglalják a mély szervi/térbeli osteomyelitist, a septicus arthritist, a spondylodiscitist és a protézis-ízületi fertőzéseket (PJI). A kezelés gyors diagnosztikai kivizsgálást igényel (hemokultúra, synovialis folyadék arthrocentesis, képalkotással vezérelt biopszia és MRI), sebészi forrás-kontrollt (ízületi drenázs, sequestrectomia, implantátum-kezelés) és célzott antimikrobiális terápiát.',
    primary: 'Akut osteomyelitis: Gyermekeknél jellemzően haematogen, felnőtteknél contiguus (diabéteszes láb, nyílt törés) eredetű. Az S. aureus (MSSA/MRSA) a fő kórokozó. Az arany standard diagnózis a csontbiopszia tenyésztésre és szövettanra, az antibiotikum megkezdése előtt (kivéve septicus esetben). Az OVIVA vizsgálat elvei szerint a korai áttérés jól felszívódó orális antibiotikumra (7–10 napos IV kezelés után) non-inferior a 6 hetes IV terápiával szemben.',
    secondary: 'Septicus arthritis: Belgyógyászati és ortopédiai sürgősségi állapot. Az antibiotikum megkezdése előtt sürgősségi arthrocentesis szükséges (synovialis fehérvérsejtszám >50 000/µL, >90% PMN). A kezelés azonnali ízületi dekompressziót/drenázst igényel (ismételt tűaspiráció, arthroscopia vagy nyitott lavage) és 3–4 hetes célzott antibiotikum-kezelést.',
    biliary: 'Fertőzéses spondylodiscitis: Csigolya-osteomyelitis és discitis. A vezető tünet a lokalizált mély hátfájdalom (>90%), de láz csak az esetek kb. 50%-ában van jelen. A kontrasztanyagos gerinc-MRI az arany standard képalkotó vizsgálat. Az antimikrobiális terápia teljes időtartama 6 hét. Sürgősségi műtét indokolt progresszív neurológiai deficit, gerincinstabilitás vagy epiduralis tályog esetén.',
    diagnostics: [
      '1) Diagnosztikus arthrocentesis (ízületi punkció): Septicus arthritis gyanúja esetén kötelező az antibiotikum megkezdése ELŐTT (synovialis fehérvérsejtszám >50 000/µL, >90% PMN).',
      '2) Csontbiopszia és tenyésztés: Az osteomyelitis diagnózisának arany standardja (CT-vezérelt vagy intraoperatív biopszia) az antibiotikum megkezdése előtt.',
      '3) Kontrasztanyagos MRI: Az arany standard képalkotás spondylodiscitis, osteomyelitis, valamint epiduralis/paravertebralis tályogok esetén.',
      '4) Hemokultúra (2-3 pár): Spondylodiscitis és septicus arthritis eseteinek 50–70%-ában pozitív.',
      '5) Szepszis-markerek: We (süllyedés) és CRP a kiindulási súlyosság és a terápiás válasz monitorozásához.'
    ],
    red_flags: [
      'Akut monarthritis, amelynél az ízület aktívan és passzívan sem mozgatható (septicus arthritis, sürgősségi állapot)',
      'Progresszív neurológiai deficit (motoros paresis, érzészavar, sphincter-diszfunkció) spondylodiscitis gyanúja esetén (epiduralis tályog)',
      'Csigolya-kopogtatási érzékenység enyhülést nem mutató éjszakai hátfájdalommal',
      'Pozitív "probe-to-bone" (PTB) teszt szabadon fekvő csonttal lábfekély esetén',
      'SIRS kritériumok / septicus shock csont- vagy ízületi fertőzésben'
    ],
    special_populations: 'Diabéteszes betegek: Magas kockázat contiguus osteomyelitisre lábfekély esetén; PTB-teszt és MRI elvégzése szükséges. Intravénás droghasználók: Fokozott CA-MRSA előfordulás, septicus arthritis (sternoclavicularis/sacroiliacalis ízület) és spondylodiscitis. Idősek: Atípusos lefolyás, láz nélkül; magasabb mortalitás septicus arthritisben.',
    teaching_tip: 'Septicus arthritisben az ízületi drenázs sürgősségi beavatkozás! Osteomyelitis és spondylodiscitis esetén a korai orális antibiotikum-váltás 7–10 napos IV indukció után (OVIVA vizsgálat) non-inferior a 6 hetes IV terápiával szemben.'
  },
  tables: [
    {
      title: 'A főbb csont- és ízületi fertőzések irányelv-összefoglalása és differenciáldiagnosztikája',
      headers: ['Betegség', 'Kórokozó spektrum', 'Diagnosztikus arany standard', 'Fő irányelvi kritériumok', 'Empirikus antimikrobiális terápia', 'Intervenciós / sebészi forrás-kontroll'],
      rows: [
        ['Osteomyelitis', 'Staphylococcus aureus (MSSA/MRSA), S. epidermidis, Gram-negatívok', 'Csontbiopszia tenyésztéssel és szövettannal + MRI', 'IDSA / OVIVA vizsgálat: 4-6 hetes összesített terápia; korai orális váltás non-inferior', 'Vancomycin 15-20mg/kg IV + Ceftriaxon 2g IV 24 óránként (korai orális váltás)', 'Necroticus csont sebészi debridementje (sequestrectomia)'],
        ['Septicus arthritis', 'Staphylococcus aureus, S. pyogenes, N. gonorrhoeae, Gram-negatívok', 'Ágymelletti arthrocentesis (synovialis fehérvérsejtszám >50 000/µL)', 'IDSA / BSH: Azonnali sürgősségi ízületi drenázs + IV antibiotikum', 'Vancomycin 15-20mg/kg IV + Ceftriaxon 2g IV 24 óránként, 3-4 hétig', 'Sürgősségi ízületi drenázs (arthroscopos átöblítés vagy tűaspiráció)'],
        ['Spondylodiscitis', 'Staphylococcus aureus, E. coli, Streptococcusok, M. tuberculosis', 'Kontrasztanyagos gerinc-MRI + hemokultúra / CT-vezérelt biopszia', 'IDSA irányelvek: 6 hetes célzott antimikrobiális terápia + MRI-monitorozás', 'Vancomycin + Ceftriaxon 2g IV 24 óránként (6 hét összesen; korai orális váltás)', 'Műtét neurológiai deficit, gerincinstabilitás vagy epiduralis tályog esetén']
      ]
    }
  ],
  diseases: [
    {
      id: "osteomyelitis",
    name: "Osteomyelitis (Akut és krónikus csontvelőgyulladás)",
    pathogen: {
        "type": "Baktérium",
        "name": "Staphylococcus aureus (leggyakoribb: 50-70%, beleértve MRSA), Staphylococcus epidermidis (CoNS - implantátum/műtét után), Streptococcus spp., Pseudomonas aeruginosa (IV droghasználók, szúrt sebek), Enterobacterales (E. coli, Klebsiella - diabéteszes láb), Salmonella spp. (sarlósejtes anaemia), Mycobacterium tuberculosis",
        "gram": "Vegyes (főleg Gram-pozitív)",
        "shape": "coccus/bacillus"
    },
    epidemiology: {
        "incidence": "Gyermekeknél dominánsan hematogén (metaphysis), felnőtteknél posttraumás/postoperatív vagy contiguous (diabéteszes láb ulcusból).",
        "risk_groups": [
            "Diabetes mellitus",
            "Perifériás artériás érbetegség",
            "Műtét/trauma/orthopaediai implantátum",
            "Intravénás droghasználók (IVDU)",
            "Krónikus hemodialízis",
            "Sarlósejtes anaemia (Salmonella kockázat)"
        ],
        "seasonality": "Nincs",
        "transmission": "Hematogén szórás, per continuitatem terjedés (fekélyből/lágyrészből), vagy direkt inokuláció (nyílt törés, műtét)"
    },
    pathomechanism: {
        "steps": [
            "Behatolás: Hematogén szórás útján (gyermekek jól vaszkularizált metaphysisében vagy felnőtt csigolyákban), környező lágyrészfertőzésből/diabéteszes fekélyből (per continuitatem), vagy direkt inokulációval (trauma/műtét).",
            "Gyulladás és Ischaemia: A baktériumok elszaporodása intramedullaris ödémát és emelkedett csontvelői nyomást okoz. A microvascularis occlusio miatt csontnecrosis és elhalt csontsziget (sequester) alakul ki.",
            "Reaktív csontképződés & Sipoly: A periosteum alatt új csont (involucrum) képződik, amely körülveszi a sequestert. Gennyes sípok (sinus tract) törhetnek át a bőrre.",
            "Biofilm képződés: A Staphylococcusok MSCRAMM fehérjékkel a csontmátrixhoz és fémimplantátumokhoz tapadnak, védő extracellularis mátrixot (biofilm) képezve, amely védi őket a neutrofilektől és antibiotikumoktól."
        ],
        "virulence_factors": [
            "Biofilm képzés",
            "Adhezinek (MSCRAMM)",
            "Alfa/Panton-Valentine leukocidin (PVL) toxinok",
            "Intracelluláris perzisztencia (osteoblastokban)"
        ]
    },
    clinical: {
        "incubation": "Napok (akut) vagy hetek-hónapok-évek (krónikus)",
        "onset": "Akut (hematogén/traumás) vagy lassan progresszív, indolens (krónikus)",
        "symptoms": [
            {
                "name": "Akut osteomyelitis",
                "description": "Kifejezett, mély csontfájdalom, lokális duzzanat, melegség, bőrpír, láz és az érintett végtag terhelési képtelensége.",
                "severity": "severe"
            },
            {
                "name": "Krónikus osteomyelitis",
                "description": "Indolens, tompa fájdalom, perzisztáló vagy ciklikusan kiürülő gennyes sipoly (sinus tract), pörkösödés, láz általában hiányzik.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Kifejezett lokális nyomásérzékenység a csont felett",
            "Melegség, duzzanat, erythema a felette lévő lágyrészekben",
            "Váladékozó sipolyjárat (sinus tract) jelenléte (krónikus formában)",
            "Probe-to-Bone (PTB) teszt: Diabéteszes lábfej ulcus alapjában steril fémszondával kemény, érdes csontfelület tapintható (magas specifikusság és szenzitivitás!)"
        ],
        "complications": [
            "Krónikus osteomyelitis és csontdestrukció",
            "Patholgiás törés",
            "Szeptikus arthritis (ha a metaphysis az ízületi tokon belül van, pl. csípő, váll)",
            "Squamous cell carcinoma (Marjolin-ulcus) a krónikusan váladékozó sipolyjárat szélén",
            "Szeptikus shock és szisztémás szepszis"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "MRI (Mágneses rezonancia vizsgálat)",
                "finding": "Csontvelő ödéma, lágyrész infiltráció, tályogok korai ábrázolása.",
                "significance": "A legérzékenyebb (>90%) és legspecifikusabb képalkotó módszer, különösen korai stádiumban."
            },
            {
                "modality": "Röntgen (Plain radiograph)",
                "finding": "Periostealis reakció, corticalis destrukció, osteolysis, de csak 10-14 nap után látható.",
                "significance": "Elsőként választandó, de korai szakaszban (akut forma) negatív lehet, mert 30-50% csontvesztés szükséges a láthatósághoz."
            },
            {
                "modality": "CT (Számítógépes tomográfia)",
                "finding": "Corticalis erózió, sequester és gáz jelenléte pontosabban ábrázolódik.",
                "significance": "MRI kontraindikáció esetén vagy krónikus formában a sequester (elhalt csont) kimutatására a legjobb."
            }
        ],
        "laboratory": [
            {
                "test": "CRP és We",
                "finding": "Jelentősen emelkedett (CRP > 50-100 mg/L)",
                "interpretation": "Alapvető a terápia monitorozására és a klinikai válasz megítélésére"
            },
            {
                "test": "Vérkép",
                "finding": "Leukocytosis balra tolt fvs-számmal",
                "interpretation": "Akut formában emelkedett, krónikus osteomyelitisben normális is lehet"
            },
            {
                "test": "Hemokultúra (2 pár)",
                "finding": "Pozitív (50-60%-ban akut hematogén formában)",
                "interpretation": "Kötelező levenni az antibiotikum indítása előtt"
            }
        ],
        "microbiology": [
            {
                "test": "Csontbiopszia (perkután CT-vezérelt vagy nyílt sebészi)",
                "finding": "Kórokozó azonosítás + hisztopatológia (neutrofil granulocyták, osteonecrosis)",
                "significance": "GOLD STANDARD diagnózis! Két mintát kell venni (mikrobiológia + hisztológia). Antibiotikum előtt kötelező!"
            },
            {
                "test": "Sipolyváladék tenyésztés",
                "finding": "Bőrelemek és kolonizáció",
                "significance": "NEM MEGBÍZHATÓ a mély csontfertőzés meghatározására (kivéve ha izolált S. aureus)!"
            }
        ]
    },
    therapy: {
        "targeted": "A csontbiopszia tenyésztése alapján! MSSA: Cefazolin 3x2g IV vagy Flucloxacillin 4x2g IV; MRSA: Vancomycin / Daptomycin / Linezolid; Pseudomonas: Ciprofloxacin 2x750mg PO / Cefepime. Biofilm / Staphylococcus esetén kiegészítő Rifampicin (2x300-450mg PO) adható, de KIZÁRÓLAG debridement után és orális kombinációban! Az OVIVA vizsgálat alapján a korai orális váltás (early oral switch) magas biohasznosulású szerekkel (pl. fluorokinolonok, clindamycin, linezolid) klinikailag egyenértékű a tartós IV terápiával.",
        "supportive": [
            "Radikális sebészi debridement (minden elhalt csont/sequester eltávolítása) - ALAPVETŐ!",
            "Holttér kitöltése (antibiotikumos cement/beads, kalcium-szulfát szivacs)",
            "Limb immobilization és terheléscsökkentés",
            "Vascularis rekonstrukció / revaszkularizáció ha ischaemia áll fenn"
        ],
        "prevention": [
            "Nyílt törések azonnali debridementje és profilaktikus antibiotikuma",
            "Diabéteszes lábfej ulcusok korai és szakszerű ellátása",
            "Műtéti asepsis szigorú betartása"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin",
                    "dose": "15-20 mg/kg IV q8-12h (AUC/MIC cél 400-600)",
                    "duration": "Mintavétel után",
                    "note": "MRSA és Gram-pozitív fedezet"
                },
                {
                    "drug": "+ Cefepime",
                    "dose": "2g IV q8h",
                    "duration": "Klinikai választól függően",
                    "note": "Gram-negatív (Pseudomonas) fedezet"
                },
                {
                    "drug": "vagy Piperacillin/Tazobactam",
                    "dose": "4.5g IV q6h",
                    "duration": "Klinikai választól függően",
                    "note": "Széles spektrum (Gram-negatív + anaerob)"
                }
            ],
            "outpatient": [
                {
                    "drug": "Nincs ambuláns empirikus terápia",
                    "dose": "-",
                    "duration": "-",
                    "note": "Kórházi kivizsgálás és biopszia szükséges az antibiotikum előtt!"
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Alacsony (<1-2%), de a morbiditás és a krónikussá válási ráta magas (10-30%)",
        "factors": "Megfelelő sebészi debridement, végtagi vascularisatio, korai orális/IV célzott terápia, resecálhatatlan sequester",
        "prognostic_scores": [
            "Cierny-Mader staging system"
        ]
    },
    language: "hu",
    group: "bone_joint"
  },
  {
    id: "septic-arthritis",
    name: "Szeptikus arthritis (Akut gennyes ízületi gyulladás)",
    pathogen: {
        "type": "Baktérium",
        "name": "Staphylococcus aureus (>50%, beleértve az MRSA-t), Streptococcus spp. (A, B, C, G csoport, S. pneumoniae), Neisseria gonorrhoeae (fiatal, szexuálisan aktív felnőtteknél), Gram-negatív bélbaktériumok (E. coli, Pseudomonas aeruginosa - főleg idősek, IVDU, immunszuppresszió esetén), Kingella kingae (<4 év alatti kisgyermekeknél)",
        "gram": "Gram-pozitív és Gram-negatív",
        "shape": "Coccus és bacillus"
    },
    epidemiology: {
        "incidence": "2-10/100,000 fő/év. Sürgősségi reumatológiai/ortopédiai vészhelyzet.",
        "risk_groups": [
            "Időskor (>80 év)",
            "Rheumatoid arthritis és egyéb gyulladásos ízületi betegségek",
            "Ízületi protézis (PJI) vagy korábbi ízületi műtét/injekció",
            "Diabetes mellitus",
            "Immunszuppresszív vagy biológiai terápia",
            "Intravénás droghasználat (IVDU - sterno-clavicularis, sacroiliacalis érintettség)",
            "Szexuálisan aktív fiatalok (Gonococcus fertőzés kockázata)"
        ],
        "seasonality": "Nincs",
        "transmission": "Leggyakrabban hematogén szórás, direkt inokuláció (szúrás, intraarticularis injekció, műtét), vagy per continuitatem terjedés (osteomyelitisből vagy lágyrész tályogból)"
    },
    pathomechanism: {
        "steps": [
            "Behatolás: A baktériumok hematogén úton elérik a gazdagon vaszkularizált synovialis membránt (melyből hiányzik a limitáló basalis membrán), vagy direkt inokulációval/szomszédos fertőzésből jutnak az ízületbe.",
            "Gyulladásos kaszkád: A baktériumok szaporodása heves gyulladásos választ vált ki, nagy mennyiségű polymorphonuclearis (PMN) granulocyta vándorol be az ízületi folyadékba (gennyes effusio).",
            "Porcdestrukció: A PMN granulocytákból és synovialis sejtekből felszabaduló proteolítikus enzimek, metalloproteinázok és gyulladásos citokinek (TNF-alfa, IL-1beta) 36-48 órán belül megkezdik a hyalinporc kollagén és proteoglikán mátrixának irreverzibilis lebontását.",
            "Ischaemiás necrosis: Az emelkedett intraarticularis nyomás és a gyulladásos thrombosis kompromittálja az ízület mikrocirkulációját, ami szubchondralis csontelhaláshoz és végül fibrosus/ossea ankylosishoz vezet."
        ],
        "virulence_factors": [
            "Adhezinek (collagen-binding protein, fibronectin-binding protein)",
            "Bakteriális enzimek (hyaluronidáz, proteázok)",
            "Exotoxinok (pl. S. aureus alfa-toxin, PVL)",
            "Biofilm képző képesség (különösen implantátumok jelenlétében)"
        ]
    },
    clinical: {
        "incubation": "1-3 nap (akut bakteriális formában, néha órák)",
        "onset": "Hiperakut vagy akut",
        "symptoms": [
            {
                "name": "Akut Monoarthritis",
                "description": "Egyetlen nagy ízület (térd ~50%, csípő ~20%, váll, boka, csukló) hirtelen fellépő, rendkívül heves, lüktető fájdalma, duzzanata, melegsége és bőrpírja.",
                "severity": "severe"
            },
            {
                "name": "Kifejezett funkciókiesés",
                "description": "Az ízület aktív és passzív mozgatása is kivitelezhetetlen a gyötrő fájdalom miatt (antalgikus tartás). Magas láz, hidegrázás gyakori.",
                "severity": "severe"
            },
            {
                "name": "Disszeminált Gonococcus Fertőzés (DGI)",
                "description": "Migráló polyarthralgia/arthritis, tenosynovitis (csukló/boka feszítő felszínén), és kisméretű, fájdalmas vesiculopustulosus bőrléziók a végtagokon.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Duzzadt, meleg, erythematosus ízület fluktuációval (effusio)",
            "Rendkívül kifejezett fájdalom minimális passvív mozdításra is",
            "Végtag kényszertartásban (flexióban a fájdalom csökkentésére)",
            "Szisztémás szepszis jelei (magas láz, tachycardia, hypotonia)"
        ],
        "complications": [
            "Gyors, irreverzibilis porcdestrukció (akár 48 órán belül)",
            "Osteomyelitis vagy lágyrész-tályog",
            "Ízületi ankylosis (fibrosus vagy ossea)",
            "Szepszis, szeptikus shock és szervelégtelenség"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Ultrahang (Ízületi)",
                "finding": "Ízületi folyadékgyülem (effusio) kimutatása, synovialis megvastagodás.",
                "significance": "Nagyon szenzitív, segít az ultrahang-vezérelt diagnosztikus/terápiás aspiráció elvégzésében."
            },
            {
                "modality": "Konvencionális röntgen (2 irányú)",
                "finding": "Lágyrész-duzzanat korai fázisban. Később ízületi rés beszűkülése, subchondralis erosio, osteomyelitis jelei.",
                "significance": "Kezdetben negatív lehet, de kötelező az egyéb okok (törés) és a társuló osteomyelitis kizárására."
            },
            {
                "modality": "MRI",
                "finding": "Korai synovitis, csontvelő-ödéma, szomszédos osteomyelitis vagy lágyrész tályogok.",
                "significance": "Legszenzitívebb módszer, különösen mély ízületek (csípő, sacroiliacalis) esetén, ha az UH nem elégséges."
            }
        ],
        "laboratory": [
            {
                "test": "Synovialis folyadék analízis (Arthrocentesis)",
                "finding": "Zavaros/gennyes; fvs-szám > 50,000/µL (gyakran > 100,000/µL), >90% PMN granulocyta; Gram-festés 50-75%-ban pozitív.",
                "interpretation": "Sürgősségi alapvizsgálat! Azonnal elvégzendő az empirikus antibiotikum beadása előtt."
            },
            {
                "test": "Synovialis laktát és glükóz",
                "finding": "Laktát > 10 mmol/L, glükóz a szérumérték <50%-a.",
                "interpretation": "Bakteriális infekció mellett szól, de nem helyettesíti a tenyésztést."
            },
            {
                "test": "Polarizációs mikroszkópia",
                "finding": "Negatív kristályokra (MSU, CPPD).",
                "interpretation": "Kristályarthropathia kizárására, bár a kettő (köszvény + szeptikus arthritis) együttesen is fennállhat."
            },
            {
                "test": "Gyulladásos paraméterek (Vérkép, CRP, Procalcitonin)",
                "finding": "Kifejezett leukocytosis balra tolt fvs-számmal, emelkedett CRP (>100 mg/L) és procalcitonin.",
                "interpretation": "Szisztémás gyulladás és szepszis monitorozására."
            },
            {
                "test": "Hemokultúra",
                "finding": "Pozitív (30-50%-ban, főleg S. aureus esetén).",
                "interpretation": "Kötelező, legalább 2 pár levétele javasolt."
            }
        ],
        "microbiology": [
            {
                "test": "Synovialis folyadék tenyésztés (aerob és anaerob)",
                "finding": "Kórokozó azonosítása és rezisztencia-profil (antibiogram).",
                "significance": "A célzott antibiotikum-terápia aranystandard alapja."
            },
            {
                "test": "Molekuláris diagnosztika (multiplex PCR / 16S rRNS)",
                "finding": "Bakteriális DNS jelenléte.",
                "significance": "Hasznos, ha a beteg már antibiotikumot kapott, és a tenyésztés negatív maradt."
            }
        ]
    },
    therapy: {
        "targeted": "S. aureus (MSSA): Cefazolin 3x2g IV vagy Flucloxacillin 4x2g IV; MRSA: Vancomycin (célkoncentráció követéssel) vagy Daptomycin 6-8 mg/kg IV; N. gonorrhoeae: Ceftriaxone 1-2g IV; Gram-negatív pálcák: Ceftriaxone 2g IV, Pseudomonas gyanú esetén Cefepime 3x2g IV vagy Piperacillin/Tazobactam 4x4.5g IV.",
        "supportive": [
            "ÍZÜLETI DECOMPRESSZIO ÉS DRENÁZS (KULCSFONTOSSÁGÚ): Sürgős arthroscopos öblítés (lavage) és debridement, vagy ismételt zárt tűaspirációk. Csípőízületi szeptikus arthritis esetén azonnali sebészi nyitott feltárás/arthroscopia szükséges!",
            "Adekvát fájdalomcsillapítás (NSAID-ok, sz.e. opioidok)",
            "Rövid ideig tartó sínbe tétel az akut fázisban, majd KORAI PASSZÍV és AKTÍV mozgásterápia (gyógytorna) a porctáplálás fenntartására és az ankylosis megelőzésére"
        ],
        "prevention": [
            "Szigorú aszeptikus technika ízületi punkciók, injekciók és műtétek során",
            "Gonorrhoea prevenció, óvszerhasználat, szexuális partnerek szűrése és kezelése",
            "Bőr- és lágyrészfertőzések (pl. cellulitis) korai erélyes kezelése"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin",
                    "dose": "15-20 mg/kg IV q8-12h",
                    "duration": "2 hét (majd klinikai javulás és forráskontroll után per os váltás mérlegelhető, összesen 4-6 hét)",
                    "note": "MRSA és Gram-pozitív lefedettség biztosítására."
                },
                {
                    "drug": "+ Ceftriaxone",
                    "dose": "1-2 g IV q24h",
                    "duration": "2 hét",
                    "note": "Gram-negatív kórokozók és Gonococcus elleni védelem."
                },
                {
                    "drug": "Cefepime (szükség esetén)",
                    "dose": "2 g IV q8h",
                    "duration": "2 hét",
                    "note": "Pseudomonas aeruginosa kockázat (IVDU, immunszupprimált) esetén Ceftriaxone helyett."
                }
            ],
            "outpatient": [
                {
                    "drug": "Szájon át történő váltás (szekvenciális terápia) pl. Levofloxacin + Rifampicin vagy Amoxicillin/Klavulánsav vagy Clindamycin",
                    "dose": "Kórokozó szenzitivitása alapján",
                    "duration": "További 2-4 hét (összesen minimum 4-6 hét kezelés)",
                    "note": "Kizárólag sikeres sebészi/arthroscopos forráskontroll, láztalanság, csökkenő gyulladásos markerek és biztos gyógyszer-tolerálhatóság/compliance esetén, szoros ambuláns kontroll mellett!"
                }
            ]
        }
    },
    prognosis: {
        "mortality": "10-15% (idős, polimorbid vagy polyarticularis érintettségű betegeknél elérheti a 20-30%-ot is).",
        "factors": "A diagnózis és az ízületi decompressio/drenázs késlekedése (>24-48 óra), az érintett ízületek száma, a beteg életkora és társbetegségei (pl. veseelégtelenség, májcirrhosis).",
        "prognostic_scores": [
            "Nincs specifikus validált pontrendszer, a klinikai progresszió és a gyulladásos markerek (CRP, PCT) dinamikája irányadó."
        ]
    },
    language: "hu",
    group: "bone_joint"
  },
  {
    id: "spondylodiscitis",
    name: "Spondylodiscitis (Vertebral Osteomyelitis és Discitis)",
    pathogen: {
        "type": "Baktérium",
        "name": "Staphylococcus aureus (30-50%, beleértve MRSA), Staphylococcus epidermidis (CoNS - spinalis műtét/instrumentáció után), Streptococcus spp., Enterobacterales (E. coli, Klebsiella - urogenitalis fókuszból), Pseudomonas aeruginosa (IVDU), Mycobacterium tuberculosis (Pott-kór), Brucella spp.",
        "gram": "Vegyes (főleg Gram-pozitív)",
        "shape": "coccus/bacillus"
    },
    epidemiology: {
        "incidence": "2-7/100,000 fő/év. Gyakoribb 50 év feletti férfiaknál.",
        "risk_groups": [
            "Idős kor (>50-60 év)",
            "Diabetes mellitus",
            "Intravénás droghasználók (IVDU)",
            "Krónikus vesebetegség / hemodialízis",
            "Infectiv endocarditis (akár 30%-ban társul!)",
            "Gerincműtét, epiduralis katéter, felületi gerinc inokuláció",
            "Urogenitalis fertőzés vagy beavatkozás (Batson-plexus útján)"
        ],
        "seasonality": "Nincs",
        "transmission": "Hematogén szóródás (főleg a. spinalis vagy Batson-féle vénás plexus útján), direkt inokuláció (műtét, epiduralis), per continuitatem"
    },
    pathomechanism: {
        "steps": [
            "Hematogén szóródás: A baktériumok a véráram útján érik el a csigolyatest subchondralis, gazdagon vaszkularizált csontvelőjét.",
            "Terjedés a discusra: A fertőzés áttör a hyalin porclemezen az avascularis discus intervertebralisba. Mivel a felnőtt discus nem rendelkezik saját erekkel, a gyulladás az egész discust elpusztítja, majd ráterjed a szomszédos csigolyára (spondylodiscitis).",
            "Tályogképződés & Kompresszió: A gyulladásos folyamat áttörhet a környező lágyrészekbe, epiduralis tályogot, paravertebralis tályogot vagy psoas tályogot képezve.",
            "Neurológiai szövődmény: Az epiduralis tályog vagy a csigolya kollapszusa gerincvelői vagy cauda equina kompressziót okoz."
        ],
        "virulence_factors": [
            "Biofilm képződés",
            "Adhezinek",
            "Porcrobolsító enzimek"
        ]
    },
    clinical: {
        "incubation": "Hetek-hónapok (alattomos lefolyás)",
        "onset": "Subakut vagy krónikus (ritkábban akut fulmináns)",
        "symptoms": [
            {
                "name": "Lokalizált Hát- és Derékfájás",
                "description": "A LEGFONTOSABB VEZETŐ TÜNET (>90%): Fokozatosan erősödő, nyugalomban és éjszaka is fennálló, tompa, mély hát- vagy derékfájás, ami nem csökken fekvésre.",
                "severity": "severe"
            },
            {
                "name": "Láz (bizonytalan)",
                "description": "Láz csak az esetek mintegy 50%-ában van jelen! Hiánya nem zárja ki a spondylodiscitist!",
                "severity": "moderate"
            },
            {
                "name": "Neurológiai Deficit (Vészhelyzet!)",
                "description": "Gyököki kisugárzó fájdalom, alsó végtagi paresis/paraesthesia, sensory level, széklet- vagy vizeletinkontinencia/retentio (Epiduralis tályog / gerincvelő kompresszió!).",
                "severity": "severe"
            }
        ],
        "physical_exam": [
            "Kifejezett lokális nyomás- és kopogtatási érzékenység az érintett csigolya tövisnyúlványa felett",
            "Feltűnő paravertebralis izomspazmus és gerinc-mozgáskorlátozottság",
            "Neurológiai status: izomerő csökkenés, reflexeltérések, Lasegue-jel, sphincter funkciók vizsgálata"
        ],
        "complications": [
            "Epiduralis tályog (spinális kompresszió)",
            "Psoas tályog és paravertebralis phlegmone",
            "Gerinc instabilitás, csigolya kollapszus és kyphotikus deformitás",
            "Maradandó paraplegia / cauda equina szindróma"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "MRI (kontrasztanyagos gerinc-MRI)",
                "finding": "Csigolyatest T1 hipointenzitás, T2 hyperintenzitás, a discus érintettsége (magas T2 jel), paraspinalis/epiduralis kontraszthalmozás.",
                "significance": "A diagnosztika gold standardja (érzékenység és specificitás >97%). Segít az epiduralis terjedés ábrázolásában."
            },
            {
                "modality": "CT vizsgálat (gerinc-CT)",
                "finding": "Csontos destrukció, gázképződés (anaerob fertőzésnél), lágyrészduzzanat.",
                "significance": "Hasznos, ha az MRI kontraindikált, illetve a csontos instabilitás felmérésére és a CT-vezérelt biopszia megtervezésére."
            },
            {
                "modality": "18F-FDG PET-CT",
                "finding": "Fokozott metabolikus aktivitás (FDG dúsulás) az érintett csigolyákban és discusban.",
                "significance": "Kiváló szenzitivitású, különösen fém gerinc-implantátumok esetén, ahol az MRI műtermékes."
            }
        ],
        "laboratory": [
            {
                "test": "CRP és We",
                "finding": "Szinte mindig jelentősen emelkedett (CRP > 50-100 mg/L, We > 50 mm/h)",
                "interpretation": "A legérzékenyebb laboratóriumi jelek és a terápia követésének alapjai"
            },
            {
                "test": "Vérkép",
                "finding": "Normális vagy enyhe leukocytosis",
                "interpretation": "A fvs-szám gyakran normális subakut esetben"
            },
            {
                "test": "Hemokultúra (2-3 pár)",
                "finding": "Pozitív 50-70%-ban!",
                "interpretation": "KÖTELEZŐ LEVENNI! Ha pozitív, feleslegessé teheti az invazív gerincbiopsziát!"
            },
            {
                "test": "Echocardiographia (TTE/TEE)",
                "finding": "Billentyű vegetáció",
                "interpretation": "KÖTELEZŐ minden S. aureus, Enterococcus vagy Streptococcus spondylodiscitisben az infectiv endocarditis kizárására!"
            }
        ],
        "microbiology": [
            {
                "test": "CT-vezérelt perkután tűbiopszia",
                "finding": "Tenyésztés (aerob, anaerob, gomba, TBC) + hisztopatológia",
                "significance": "KÖTELEZŐ, ha a hemokultúrák negatívak és nincs indikációja az azonnali műtétnek!"
            }
        ]
    },
    therapy: {
        "targeted": "Biopszia vagy hemokultúra alapján! S. aureus (MSSA): Cefazolin 3x2g IV vagy Flucloxacillin 4x2g IV; MRSA: Vancomycin / Daptomycin; Gram-negatív: Ceftriaxone / Cefepime / Ciprofloxacin. Orális váltás (pl. Fluorokinolon + Rifampicin vagy Clindamycin) mérlegelhető klinikai javulás esetén.",
        "supportive": [
            "KRITIKUS SZABÁLY: Klinikailag stabil, neurológiai tünetmentes betegnél az ANTIBIOTIKUMOT EL KELL HALASZTANI a mikrobiológiai mintavételig (hemokultúra / CT-biopszia)!",
            "Sebészi decompressio (laminectomia) és debridement AZONNAL indokolt: 1. Neurológiai deficit / gerincvelő kompresszió esetén; 2. Progresszív gerinc instabilitásnál; 3. Percutan nem drénálható nagy epiduralis/psoas tályognál.",
            "Merev gerincortézis (fűző) viselése a fájdalomcsillapításra és az instabilitás kivédésére"
        ],
        "prevention": [
            "Infectiv endocarditis és urogenitalis fertőzések korai felismerése",
            "Spinalis beavatkozásoknál szigorú műtéti asepsis"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin",
                    "dose": "15-20 mg/kg IV q8-12h",
                    "duration": "6-8 hét (ebből az első 1-2 hét kötelezően IV)",
                    "note": "MRSA és Gram-pozitív fedezet"
                },
                {
                    "drug": "+ Cefepime",
                    "dose": "2g IV q8h",
                    "duration": "6-8 hét",
                    "note": "Gram-negatív (Pseudomonas) fedezet"
                },
                {
                    "drug": "vagy Ceftriaxone",
                    "dose": "2g IV q24h",
                    "duration": "6-8 hét",
                    "note": "Ha Pseudomonas kockázat alacsony"
                }
            ],
            "outpatient": [
                {
                    "drug": "Ciprofloxacin + Clindamycin (orális váltás)",
                    "dose": "Ciprofloxacin 2x500-750 mg PO + Clindamycin 3x600 mg PO",
                    "duration": "A teljes 6 hetes kezelés fennmaradó részére",
                    "note": "Az OVIVA klinikai vizsgálat alapján orális step-down terápia javasolt stabil, javuló gyulladásos leletű betegeknél, vagy OPAT keretében folytatott IV kezelés."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "2-10% (idős, komorbid betegeknél magasabb)",
        "factors": "Késői diagnózis, kezdeti neurológiai deficit jelenléte, nem kezelt infectiv endocarditis",
        "prognostic_scores": [
            "Nincs specifikus"
        ]
    },
    language: "hu",
    group: "bone_joint"
  },
  {
    id: "prosthetic-joint-infection",
    name: "Protézis ízületi fertőzés (PJI / Periprosthetic Joint Infection)",
    pathogen: {
        "type": "Baktérium",
        "name": "Staphylococcus epidermidis és egyéb CoNS (30-40%), Staphylococcus aureus (20-30%, beleértve MRSA), Cutibacterium acnes (főleg vállprotézisben), Streptococcus spp., Enterococcus spp., Enterobacterales (E. coli, Klebsiella), Pseudomonas aeruginosa, Polimikrobiális (10-15%)",
        "gram": "Vegyes (főleg Gram-pozitív CoNS és Staph)",
        "shape": "coccus/bacillus"
    },
    epidemiology: {
        "incidence": "Térd- és csípőprotézis beültetések 1-2%-ában fordul elő. Az orthopédiai sebészet egyik legsúlyosabb szövődménye.",
        "risk_groups": [
            "Korábbi ízületi műtét vagy PJI előzmény",
            "Diabetes mellitus és elhízás (BMI > 35)",
            "Rheumatoid arthritis és szteroid/biológiai terápia",
            "Műtéti sebgyógyulási zavar, haematoma, elhúzódó sebszivárgás (>72 óra)",
            "Dohányzás"
        ],
        "seasonality": "Nincs",
        "transmission": "Műtéti inokuláció (leggyakoribb intraoperatív), korai postoperatív sebszétválásból, vagy késői hematogén szóródás távoli fókuszból (pl. fogászati, urogenitalis, bőr)"
    },
    pathomechanism: {
        "steps": [
            "Adhézió: A baktériumok a műtét alatt vagy hematogén úton megtapadnak az idegen test (fém, polietilén) felszínén.",
            "Biofilm képződés: Extracellularis polimer mátrixot hoznak létre, amelyen belül a baktériumok lassan osztódó 'persister' sejtekké alakulnak.",
            "Rezisztencia: A biofilm megvédi őket a gazdaszervezet immunválaszától és az antibiotikumoktól (akár 1000-szeres koncentráció kellene a kiirtáshoz).",
            "Osteolysis és lazulás: A krónikus lokális gyulladás csontfelszívódást (osteolysist) okoz a csont-implantátum interfészen, ami a protézis meglazulásához vezet."
        ],
        "virulence_factors": [
            "Biofilm exopoliszacharid mátrix",
            "MSCRAMM adhezinek",
            "Persister cell fenotípus",
            "Intracelluláris túlélési képesség osteoblastokban"
        ]
    },
    clinical: {
        "incubation": "Műtét utáni napoktól (korai) évekig (krónikus)",
        "onset": "Akut (korai / hematogén) vagy indolens, krónikusan progresszív",
        "symptoms": [
            {
                "name": "Korai PJI (<4 hét műtét után)",
                "description": "Akut ízületi fájdalom, erythema, duzzanat, melegség, sebszétválás, perzisztáló gennyes sebszivárgás, láz.",
                "severity": "severe"
            },
            {
                "name": "Késői Krónikus PJI (>3-4 hét/hónap műtét után)",
                "description": "Tompa, terhelésre és nyugalomban is fennálló ízületi fájdalom, a protézis korai meglazulása, funkcióromlás, láz általában hiányzik.",
                "severity": "moderate"
            },
            {
                "name": "Sinus Tract (Sipoly)",
                "description": "A bőrfelszínről közvetlenül az implantátumig/ízületi résig vezető váladékozó sipoly jelenléte - önmagában PATHOGNOMONIKUS PJI-re!",
                "severity": "severe"
            }
        ],
        "physical_exam": [
            "Műtéti hegesedés körüli erythema, duzzanat, fokozott melegség",
            "Sebszivárgás vagy nyitott, váladékozó sipoly (sinus tract)",
            "Ízületi mozgásterjedelem beszűkülése, terhelési fájdalom",
            "Protézis instabilitás, meglazulás jelei"
        ],
        "complications": [
            "Protézis meglazulása és súlyos csontvesztés (osteolysis)",
            "Többszöri revíziós műtétek, végtagrövidülés",
            "Girdlestone-állapot (rezekciós arthroplastica csípőnél)",
            "Amputáció szükségessége"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Hagyományos röntgenfelvétel",
                "finding": "Osteolysis a protézis-csont interfészen, periostealis csontreakció, a protézis vándorlása/meglazulása.",
                "significance": "Kezdeti alapvizsgálat, de korai fertőzésekben gyakran negatív."
            },
            {
                "modality": "Háromfázisú csontszcintigráfia",
                "finding": "Fokozott radionuklid felvétel mindhárom fázisban a protézis körül.",
                "significance": "Magas negatív prediktív értékkel bír (ha negatív, a PJI valószínűtlen)."
            },
            {
                "modality": "18F-FDG PET/CT",
                "finding": "Fokozott metabolikus aktivitás a protézis és a környező lágyrészek mentén.",
                "significance": "Kiemelkedő pontosságú képalkotás, különösen fém műtermékek esetén."
            }
        ],
        "laboratory": [
            {
                "test": "CRP és süllyedés (We)",
                "finding": "CRP > 10 mg/L (krónikusban), > 100 mg/L (akutban); We > 30 mm/h",
                "interpretation": "Alapvető szűrőtesztek. Ha mindkettő negatív, a PJI valószínűsége nagyon alacsony."
            },
            {
                "test": "Synovialis folyadék punkció (Arthrocentesis)",
                "finding": "Akut PJI: Fvs > 10,000 /µL (>90% PMN); Krónikus PJI: Fvs > 3,000 /µL (>70% PMN)",
                "interpretation": "Az EBJIS / ICM kritériumrendszer szerinti kulcsfontosságú diagnosztikai lépés."
            },
            {
                "test": "Alfa-defenzin / Leukocyta észteráz csík teszt",
                "finding": "Pozitív eredmény",
                "interpretation": "Magas specificitású synovialis biomarkerek."
            }
        ],
        "microbiology": [
            {
                "test": "Műtéti szövetminták (Periprosthetic tissue)",
                "finding": "Kórokozó azonosítás és rezisztencia vizsgálat.",
                "significance": "Legalább 3-5 különálló mintát kell venni külön szikével. Legalább 2 azonos pozitív minta megerősíti a diagnózist."
            },
            {
                "test": "Eltávolított protézis SONIKÁLÁSA (Sonication)",
                "finding": "A biofilmből feltárt baktériumok tenyésztése (>50 CFU/ml)",
                "significance": "Magasabb szenzitivitás, mint az egyszerű szövettenyésztésnél, különösen korábbi antibiotikumos kezelés esetén."
            },
            {
                "test": "Hisztopatológia (Krenn-féle osztályozás)",
                "finding": ">5 neutrofil granulocyta / HPF (high-power field)",
                "significance": "Intraoperatív gyors fagyasztott metszetnél azonnali diagnózist adhat."
            }
        ]
    },
    therapy: {
        "targeted": "Tenyésztés alapján! Staphylococcus PJI esetén biofilm-aktív RIFAMPICIN adása (2x300-450 mg PO) orális kombinációban (pl. fluoroquinolonnal) javasolt, de KIZÁRÓLAG a seb teljes gyógyulása (száraz seb, drain eltávolítás) után a rezisztencia megelőzésére! Kezelési időtartam: 6-12 hét.",
        "supportive": [
            "SEBÉSZI STRATÉGIÁK (EBJIS 2021):",
            "1. DAIR (Debridement, Antibiotics, and Implant Retention): Csak KORAI (<4 hét) vagy akut hematogén esetekben, stabil implantátum mellett! Liner/insert csere kötelező!",
            "2. Egyfázisú csere: Ismert, érzékeny kórokozó és jó lágyrészviszonyok esetén egy műtéttel.",
            "3. Kétfázisú csere: Gold standard krónikus, rezisztens kórokozók vagy rossz lágyrészek esetén. Spacer behelyezése, majd 6 hét után új protézis.",
            "4. Szuppresszív terápia: Nem operálható betegeknél élethosszig tartó orális antibiotikum."
        ],
        "prevention": [
            "Műtét előtti MRSA/MSSA orr-szűrés és dekolonizáció (Mupirocin kenőcs és klórhexidines fürdés)",
            "Perioperatív szisztémás antibiotikum profilaxis (Cefazolin vagy Vancomycin rezisztencia esetén)",
            "Szigorú műtéti sterilitás és lamináris légáramlás biztosítása"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin",
                    "dose": "15-20 mg/kg IV q8-12h",
                    "duration": "Célzott kezelés megkezdéséig",
                    "note": "MRSA és rezisztens CoNS lefedésére."
                },
                {
                    "drug": "+ Cefepime / Meropenem",
                    "dose": "2g IV q8h / 1g IV q8h",
                    "duration": "Célzott kezelés megkezdéséig",
                    "note": "Gram-negatív pálcák (pl. Pseudomonas) ellen."
                }
            ],
            "outpatient": [
                {
                    "drug": "Levofloxacin + Rifampicin",
                    "dose": "Levofloxacin 1x500-750 mg PO + Rifampicin 2x300-450 mg PO",
                    "duration": "6-12 hétig kiegészítve",
                    "note": "Staphylococcusok esetén biofilm-aktív orális szekvenciális terápia, szigorúan zárt seb és eltávolított drainek mellett!"
                },
                {
                    "drug": "Ciprofloxacin",
                    "dose": "2x500-750 mg PO",
                    "duration": "6-12 hétig kiegészítve",
                    "note": "Gram-negatív kórokozók esetén orális szekvenciális kezelésként."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "1-3% egy éven belül, de idős, komorbid betegeknél elérheti a 10-15%-ot is.",
        "factors": "A biofilm-aktív terápia (Rifampicin) alkalmazhatósága, megfelelő sebészi debridement, a kórokozók rezisztencia-profilja és a beteg általános állapota.",
        "prognostic_scores": [
            "EBJIS / MSIS PJI criteria"
        ]
    },
    language: "hu",
    group: "bone_joint"
  },
  {
    id: "septic-bursitis",
    name: "Szeptikus bursitis (Fertőzéses nyálkatömlő-gyulladás)",
    pathogen: {
        "type": "Baktérium",
        "name": "Staphylococcus aureus (>80%, beleértve az MRSA törzseket is), Streptococcus pyogenes (GAS) és egyéb Streptococcus fajok, Koaguláz-negatív Staphylococci",
        "gram": "Gram-pozitív",
        "shape": "kokkusz"
    },
    epidemiology: {
        "incidence": "Gyakori sürgősségi, ortopédiai és infektológiai kórkép, leggyakrabban az olecranon és a prepatellaris bursát érinti.",
        "risk_groups": [
            "Fizikai munkát végzők (térdelő vagy könyöklő munkát végzők, pl. burkolók, vízvezeték-szerelők)",
            "Sportolók (kontakt sportok, gyakori horzsolások és sérülések)",
            "Diabetes mellitusban szenvedők",
            "Kristály-arthropathiás (köszvény) vagy rheumatoid arthritisben szenvedő betegek",
            "Krónikus vesebetegek és alkoholbetegek",
            "Immunszupprimált betegek"
        ],
        "seasonality": "Nincs szezonalitása",
        "transmission": "Direkt inokuláció mikrotrauma, bőrhorzsolás, szúrt sérülés útján, vagy per continuitatem terjedés a felette lévő cellulitisből"
    },
    pathomechanism: {
        "steps": [
            "Lokalizáció: A felületes elhelyezkedésű nyálkatömlők (olecranon és prepatellaris bursa) folyamatos mechanikai igénybevételnek, dörzsölésnek és mikrotraumának vannak kitéve.",
            "Bakteriális invázió: A bőr integritásának sérülésein vagy mikrorepedésein keresztül a kórokozók (leggyakrabban S. aureus) közvetlenül bejutnak a bursa zárt terébe.",
            "Exsudatio és gyulladás: A bursa belső synovialis bélése heves gyulladásos válasszal reagál, aminek következtében gennyes exsudatum halmozódik fel.",
            "Lokális terjedés: Megfelelő kezelés hiányában a fertőzés áttörheti a bursa falát, cellulitist, lágyrész phlegmonét, fistulát vagy csont-eroziót okozva."
        ],
        "virulence_factors": [
            "Koaguláz és egyéb sejtfelszíni adhezinek (S. aureus)",
            "Alfa-toxin és Panton-Valentine leukocidin (PVL)",
            "Proteolitikus enzimek, amelyek elősegítik a szöveti destrukciót"
        ]
    },
    clinical: {
        "incubation": "1-5 nap (a trauma után)",
        "onset": "Akut",
        "symptoms": [
            {
                "name": "Fluktuáló bursa duzzanat",
                "description": "Körülírt, kifejezetten fluktuáló, vörös, meleg és fájdalmas duzzanat a könyök (olecranon) vagy a térdkalács (prepatellaris) felett.",
                "severity": "severe"
            },
            {
                "name": "Megőrzött ízületi mozgástartomány",
                "description": "A szomszédos ízület passzív mozgásterjedelme megőrzött és nagyrészt fájdalmatlan (csak a bőr feszülése okozhat diszkomfortot flexióban), ami kulcsfontosságú különbség a szeptikus arthritishez képest.",
                "severity": "moderate"
            },
            {
                "name": "Szisztémás tünetek és cellulitis",
                "description": "Láz és hidegrázás az esetek körülbelül 40-50%-ában fordul elő. A bursa feletti bőr gyakran cellulitises, meleg és erythemás.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Körülírt, meleg, vörös, fluktuáló és nyomásérzékeny terime a bursa felett",
            "Bőrsérülés, horzsolás, szúrásnyom vagy pörk a bursa felett",
            "Az ízület passzív mozgatása szabad és nem fájdalmas",
            "Regionális lymphangitis és lymphadenopathia fordulhat elő"
        ],
        "complications": [
            "A bursa spontán perforációja krónikusan váladékozó fistulával",
            "Kiterjedt cellulitis és lágyrész phlegmone",
            "Felszíni csonterosio vagy osteomyelitis (olecranon vagy patella csúcs)",
            "Recidiváló szeptikus bursitis"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Ultrahangvizsgálat",
                "finding": "Folyadékgyülem a bursa üregében, megvastagodott, hyperaemiás bursa fallal és környező lágyrész-ödémával.",
                "significance": "Megerősíti a bursitis diagnózisát, kizárja a mélyebb intraarticularis folyadékgyülemet, és segíti a tűaspiráció vezérlését."
            },
            {
                "modality": "Röntgen (kétirányú)",
                "finding": "Lágyrész-duzzanat, idegentest vagy osteomyelitis jelei (csonterosio, periostealis reakció krónikus esetben).",
                "significance": "Alapvető a csont-érintettség (osteomyelitis) és a radiopaque idegentestek kizárására."
            }
        ],
        "laboratory": [
            {
                "test": "Bursapunkció és aspirátum elemzés",
                "finding": "Zavaros vagy gennyes bursa folyadék; Fvs > 20,000-50,000 /mikroliter (>80% PMN); Gram-festés 60-70%-ban pozitív",
                "interpretation": "Azonnali diagnosztikus és terápiás beavatkozás."
            },
            {
                "test": "Polarizációs mikroszkópia",
                "finding": "Nátrium-urát vagy kalcium-pirofoszfát kristályok jelenléte vagy hiánya",
                "interpretation": "A köszvényes vagy pszeudoköszvényes bursitis elkülönítésére vagy társfertőzés igazolására."
            },
            {
                "test": "Vérkép és gyulladásos markerek",
                "finding": "Leukocytosis balra tolt fvs-számmal, emelkedett CRP",
                "interpretation": "Szisztémás gyulladásos válasz és terápiás hatékonyság monitorozására szolgál."
            }
        ],
        "microbiology": [
            {
                "test": "Bursa aspirátum aerob és anaerob tenyésztése",
                "finding": "Staphylococcus aureus, béta-hemolizáló Streptococcusok vagy egyéb kórokozók izolálása rezisztencia-profillal",
                "significance": "A célzott antibiotikum-terápia megválasztásának aranystandardja."
            }
        ]
    },
    therapy: {
        "targeted": "Tenyésztési eredmény alapján! MSSA esetén: Cefalexin PO vagy Cefazolin IV; MRSA esetén: Trimethoprim/Sulfamethoxazole PO, Doxycycline PO, vagy Vancomycin IV; GAS esetén: Penicillin V PO vagy Amoxicillin PO.",
        "supportive": [
            "Steril bursa aspiráció és teljes leürítés (szükség esetén ismételten, naponta a folyadék újratermelődéséig)",
            "A végtag nyugalomba helyezése, felpolcolása (elevation)",
            "Sebészi bursectomia vagy debridement indokolt refrakter esetekben, fluktuáló tályogképződéskor vagy konzervatív terápia kudarca esetén"
        ],
        "prevention": [
            "Könyök- és térdvédő alkalmazása fokozott fizikai terhelés vagy mechanikai mikrotrauma esetén",
            "Bőrsérülések azonnali és szakszerű fertőtlenítése"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Cefazolin",
                    "dose": "1-2 g IV q8h",
                    "duration": "7-14 nap",
                    "note": "Szisztémás tünetekkel járó vagy kiterjedt cellulitissel kísért esetekben."
                },
                {
                    "drug": "Vancomycin",
                    "dose": "15-20 mg/kg IV q8-12h",
                    "duration": "7-14 nap",
                    "note": "MRSA kockázat vagy béta-laktám allergia esetén, terápiás gyógyszerszint-monitorozás (TDM) mellett."
                }
            ],
            "outpatient": [
                {
                    "drug": "Cefalexin",
                    "dose": "500 mg - 1 g PO q6h",
                    "duration": "7-10 nap",
                    "note": "Enyhe, szisztémás tünetektől mentes, MSSA gyanús esetben adandó elsővonalbeli szer."
                },
                {
                    "drug": "Trimethoprim/Sulfamethoxazole",
                    "dose": "160/800 mg PO q12h",
                    "duration": "7-10 nap",
                    "note": "MRSA gyanú vagy igazolt MRSA fertőzés esetén alkalmazható elsővonalbeli járóbeteg alternatíva."
                },
                {
                    "drug": "Amoxicillin/Clavulanate",
                    "dose": "875/125 mg PO q12h",
                    "duration": "7-10 nap",
                    "note": "Vegyes baktériumflóra, sérülések vagy harapások okozta fertőzések gyanújakor."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Kiváló (<1% megfelelő időben megkezdett terápia mellett)",
        "factors": "A korai adekvát bursa kiürítés, célzott antibiotikumos terápia és a kísérő betegségek (különösen a diabetes) kontrollja.",
        "prognostic_scores": [
            "Nincs specifikus validált klinikai pontrendszer"
        ]
    }
  }
  ]
};
