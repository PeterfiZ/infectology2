Object.assign(window.diseases, {
  sepsis_systemic: {
    name: 'Szepszis és szisztémás fertőzések',
    icon: window.diseaseMetadata.sepsis_systemic.icon,
    color: window.diseaseMetadata.sepsis_systemic.color,
    diseases: [
      {
        id: "sepsis",
    name: "Szepszis és Szeptikus Sokk",
    pathogen: {
        "type": "Szindróma",
        "name": "Bakteriális (Gram-pozitív/negatív), gombás, virális vagy parazitás kórokozók által kiváltott dysregulált gazdaszervezeti válasz",
        "gram": "Változó",
        "shape": "Változó"
    },
    epidemiology: {
        "incidence": "Világszerte mintegy 49 millió eset és 11 millió haláleset évente (az összes halálozás kb. 20%-a).",
        "risk_groups": [
            "65 év felettiek",
            "1 év alatti csecsemők",
            "Immunszupprimált betegek (pl. kemoterápia, HIV)",
            "Krónikus betegségben szenvedők (diabetes, veseelégtelenség, COPD, májcirrhosis)",
            "Aszpléniás betegek",
            "Invazív eszközökkel (katéter, lélegeztetőgép) kezeltek"
        ],
        "seasonality": "Nincs közvetlen szezonalitása, de a téli időszakban a légúti fertőzések (influenza, COVID-19) szövődményeként gyakoribb.",
        "transmission": "Maga a szepszis szindróma nem fertőző, de a kiváltó infekció (pl. meningococcus, pneumococcus) terjedhet."
    },
    pathomechanism: {
        "steps": [
            "Kórokozók vagy azok részei (PAMPs - pl. endotoxinok, peptidoglikánok) kötődnek a gazdaszervezet immunsejtjeinek mintázatfelismerő receptoraihoz (PRRs, pl. TLRs).",
            "A gazdaszervezet dysregulált gyulladásos választ indít el: proinflammatorikus (TNF-alfa, IL-1, IL-6) és antiinflammatorikus citokinek masszív felszabadulása (citokinvihar).",
            "Szisztémás endothel-aktiváció és -károsodás következik be, ami fokozott kapilláris permeabilitáshoz (folyadék kiáramlása az interstitiumba) és hypovolemiához vezet.",
            "A koagulációs rendszer aktiválódik (szöveti faktor expresszió által) a természetes antikoaguláns utak (protein C, antitrombin) gátlása és a fibrinolízis károsodása mellett, ami mikrotrombusok képződéséhez (DIC) vezet.",
            "A mikrocirkulációs zavarok, a vazodilatáció, a szöveti hypoperfúzió és a mitokondriális diszfunkció (cellularis dysoxia) progresszív szervkárosodást (MODS) idéznek elő."
        ],
        "virulence_factors": [
            "Lipopoliszacharid (LPS / Endotoxin) - Gram-negatívoknál",
            "Lipoteicholsav és peptidoglikán - Gram-pozitívoknál",
            "Szuperantigének (pl. TSST-1 Staphylococcus aureus esetén)",
            "Bakteriális tok (gátolja a phagocytosist)",
            "Exotoxinok (pl. alfa-toxin, pneumolizin)",
            "Sziderofórok (vasfelvétel elősegítése)"
        ]
    },
    clinical: {
        "incubation": "Az alapfertőzéstől függ (óráktól napokig).",
        "onset": "Hirtelen, rendkívül gyors progresszió (akár órák alatt kialakulhat a szeptikus sokk).",
        "symptoms": [
            {
                "name": "Láz vagy Hypothermia",
                "description": ">38.3°C vagy <36.0°C (idős vagy immunszupprimált betegeknél gyakran csak hypothermia vagy normotermia észlelhető)",
                "severity": "severe"
            },
            {
                "name": "Akut mentális változás / Encephalopathia",
                "description": "GCS < 15, újonnan fellépő zavartság, delírium, agitáció vagy letargia",
                "severity": "severe"
            },
            {
                "name": "Hypotensio",
                "description": "Szisztolés vérnyomás < 100 Hgmm vagy Középnyomás (MAP) < 65 Hgmm",
                "severity": "severe"
            },
            {
                "name": "Tachypnoe",
                "description": "Légzésszám > 22/perc (a kompenzatorikus respirációs alkalózis és a szöveti hypoxia korai jele)",
                "severity": "moderate"
            },
            {
                "name": "Oliguria",
                "description": "Vizeletmennyiség < 0.5 ml/kg/óra legalább 2 órán át az adekvát folyadékpótlás ellenére",
                "severity": "severe"
            },
            {
                "name": "Perifériás perfúziós zavar",
                "description": "Márványozott bőr (főként a térdeken), hideg, nyirkos végtagok a keringési redistributio miatt",
                "severity": "severe"
            }
        ],
        "physical_exam": [
            "Láz (>38.3 °C) vagy hypothermia (<36.0 °C; rosszabb prognózisú)",
            "Tachycardia (>90/perc)",
            "Tachypnoe (>20/perc vagy PaCO2 <32 Hgmm)",
            "Megnyúlt kapilláris újratelődési idő (>3 másodperc) mint a mikrocirkulációs hipoperfúzió dinamikus klinikai mutatója",
            "Márványozott bőr (Mottling score a térdeken a vazomotor tónusvesztés következtében)",
            "Akut tudatzavar, dezorientáltság (szeptikus encephalopathia)"
        ],
        "complications": [
            "Szeptikus sokk (Sepsis-3 konszenzus: adekvát folyadékreszuszcitáció ellenére perzisztáló hypotensio, ami vazopresszor terápiát igényel a MAP >= 65 Hgmm fenntartásához, ÉS szérum laktát > 2.0 mmol/L / >18 mg/dL)",
            "ARDS (akut respirációs distressz szindróma) diffúz alveoláris kapilláris permeabilitás-fokozódással",
            "Akut vesekárosodás (AKI) oliguriával és vesepótló kezelés (CRRT) indikációval",
            "DIC (disszeminált intravaszkuláris koaguláció) microthrombosissal és vérzéses hajlammal",
            "Sepsis-indukálta miokardiális diszfunkció (szeptikus kardiomiopátia csökkent ejekciós frakcióval)",
            "Többszervi elégtelenség szindróma (MODS)",
            "Halál (szeptikus sokkban a mortalitás eléri a 35-50%-ot)"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Mellkas röntgen / CT",
                "finding": "Infiltrátumok, lobáris pneumonia, ARDS-re utaló kétoldali diffúz homályok.",
                "significance": "A pulmonális fókusz igazolása és az ARDS diagnosztikája."
            },
            {
                "modality": "Hasi ultrahang / CT",
                "finding": "Szabad hasi folyadék, epehólyag tágulat, tályogok, gyulladásos bélfal-megvastagodás.",
                "significance": "Az intraabdominalis fókusz azonosítása és a sürgősségi forráskontroll (pl. drainálás, laparotomia) megtervezése."
            }
        ],
        "laboratory": [
            {
                "test": "Szérum laktát",
                "finding": "> 2.0 mmol/L (súlyos hipoperfúzió: >= 4.0 mmol/L)",
                "interpretation": "Szöveti hypoperfúzió és anaerob sejtmetabolizmus jelzője; az SSC 2026 alapján sorozatos mérése 2-4 óránként kötelező a reszuszcitáció és laktát-clearance követésére."
            },
            {
                "test": "Prokalcitonin (PCT) / CRP",
                "finding": "Kifejezetten emelkedett értékek bakteriális infekcióban",
                "interpretation": "Támogatja a szisztémás bakteriális szepszis felismerését; a PCT kinetikája segíti az empirikus antibiotikum-terápia biztonságos lerövidítését és korai de-eszkalációját."
            },
            {
                "test": "Vérkép és koagulációs panel",
                "finding": "Leukocytosis (>12G/L) balra tolt vérképpel vagy leukopenia (<4G/L), thrombocytopenia (<100G/L), megnyúlt INR/APTI, csökkent fibrinogén, emelkedett D-dimer",
                "interpretation": "Szisztémás gyulladásos válasz, szervkárosodás és szepszis-indukálta koagulopátia / DIC jelei."
            }
        ],
        "microbiology": [
            {
                "test": "Hemokultúra (legalább 2 szett: külön perifériás punkciókból vett aerob és anaerob palackok)",
                "finding": "Kórokozó azonosítása és kvantitatív antibiotikum-érzékenységi vizsgálata (MIC)",
                "significance": "Azonnal le kell venni az antimikrobiális kezelés megkezdése előtt! A mintavétel azonban nem késleltetheti az antibiotikum beadását (>45 perc késedelem nem engedhető meg)."
            },
            {
                "test": "Gócspecifikus tenyésztések és gyors molekuláris multiplex PCR panelek (vizelet, alsó légúti váladék, liquor, sebváladék)",
                "finding": "Bakteriális vagy gombás kórokozók és rezisztenciagének (pl. mecA, vanA, KPC, NDM, OXA-48) kimutatása",
                "significance": "A primer góc forráskontrolljának és a korai célzott de-eszkalációnak az alapja."
            }
        ]
    },
    therapy: {
        "targeted": "A Surviving Sepsis Campaign (SSC 2026) Hour-1 Bundle alapján: Szeptikus sokk vagy egyértelmű szepszis esetén empirikus széles spektrumú IV antibiotikum HALADÉKTALANUL, 1 ÓRÁN BELÜL indítandó. Bizonytalan szepszis-gyanú esetén sokk hiányában legfeljebb 3 órás gyors célzott kivizsgálás engedélyezett az infekció igazolására. A mikrobiológiai eredmények birtokában szűkítés (de-eszkaláció). Sürgősségi forráskontroll (Source Control): a fertőzés fókuszának (tályogdrenázs, kolonizált kanül eltávolítása, perforáció zárása) azonnali sebészi/intervenciós eliminációja a diagnózistól számított 6-12 órán belül elengedhetetlen.",
        "supportive": [
            "Dinamikus volumenreszponzivitás monitorozása (passzív lábemelési teszt - PLR, lökettérfogat-variáció - SVV, pulzusnyomás-variáció - PPV, VCI echo-collapsibilitas) a folyadéktúlterhelés szigorú kivédésére",
            "Perifériás perfúzió (kapilláris újratelődési idő / CRT <= 3 sec) és szérum laktát-clearance követése a keringésrendezés vezérlésére",
            "Restriktív transzfúziós stratégia: vörösvértest-transzfúzió csak akkor indokolt, ha a hemoglobin koncentráció < 70 g/L (<7.0 g/dL), kivéve súlyos myocardiális ischaemia, akut vérzés vagy cyanoticus hypoxaemia esetén",
            "Protektív gépi lélegeztetés ARDS-ben (alacsony tidal volumen: 6 ml/kg ideális testsúlyra / PBW számítva, platónyomás < 30 vízcm, PEEP titrálás; súlyos ARDS-ben prone positioning napi >= 16 órán át)",
            "Vércukorkontroll inzulin infúzióval, ha a vércukorszint tartósan > 10.0 mmol/L (180 mg/dL), célérték: 7.8-10.0 mmol/L (140-180 mg/dL)",
            "Korai enterális táplálás 72 órán belül (parenterális táplálás kerülése a kezdeti fázisban)",
            "Mélyvénás thrombosis profilaxis LMWH-val (vesefunkcióhoz illesztve; preferált az UFH-val szemben)",
            "Stresszfekély profilaxis (PPI vagy H2RA) mechanikusan lélegeztetett vagy koagulopátiás, magas rizikójú betegeknél",
            "Vesepótló kezelés (CRRT) hemodinamikailag instabil akut veseelégtelenségben"
        ],
        "prevention": [
            "Kórházi infekciókontroll és higiénés protokollok szigorú betartása (kézhigiéné, aszeptikus technika, izoláció)",
            "Védőoltások (Streptococcus pneumoniae, Neisseria meningitidis, Influenza, SARS-CoV-2, Haemophilus influenzae)",
            "Invazív eszközök (húgyúti katéterek, centrális vénás katéterek) indokolt alkalmazása, napi felülvizsgálata és mielőbbi eltávolítása",
            "Korai sebészi debridement és aszeptikus sebkezelés"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Folyadékreszuszcitáció (Kiegyensúlyozott krisztalloidok: pl. Plasmalyte vagy Ringer-laktát)",
                    "dose": "30 ml/kg",
                    "duration": "Az első 3 órán belül",
                    "note": "Szeptikus hypotensio vagy laktát >= 4.0 mmol/L esetén azonnal kötelező. A normál sóoldat (0.9% NaCl) rutinszerű adása kerülendő a hiperklorémiás acidózis és akut vesekárosodás veszélye miatt. Nagy volumenű krisztalloid igény esetén 20%-os Albumin adása javasolt. Szintetikus kolloidok (HES, zselatin) alkalmazása tilos."
                },
                {
                    "drug": "Empirikus intravénás baktericid antibiotikum (pl. Piperacillin/Tazobactam 4x4.5g elnyújtott infúzióban, Meropenem 3x1-2g, vagy Ceftriaxon / Cefepime; MRSA rizikóban Vancomycin vagy Linezolid hozzáadásával)",
                    "dose": "Maximális megengedett dózis PK/PD optimalizálással (elnyújtott béta-laktám infúzió)",
                    "duration": "Az első órán belül indítva; a kezelés időtartama klinikai javulás és forráskontroll esetén általában 7-8 nap vagy kevesebb",
                    "note": "Góc- és helyi mikrobiológiai rezisztencia-profil szerinti empíria. Napi felülvizsgálat és korai de-eszkaláció a tenyésztési lelet és PCT dinamika alapján."
                },
                {
                    "drug": "Noradrenalin (Norepinephrine)",
                    "dose": "Titrálandó a MAP >= 65 Hgmm célérték eléréséhez és fenntartásához",
                    "duration": "A sokkfázis alatt folyamatos infúzióban",
                    "note": "Abszolút elsőként választandó vazopresszor. Perifériás vénán keresztül is elindítható haladéktalanul a centrális vénás hozzáférés biztosításáig a perzisztáló szöveti hypoperfúzió kivédésére."
                },
                {
                    "drug": "Vazopresszin (Vasopressin)",
                    "dose": "0.03 U/perc fix dózis folyamatos infúzióban",
                    "duration": "Folyamatosan a noradrenalin mellé titrálva",
                    "note": "Korai második vonalbeli vazopresszorként adandó a Noradrenalin dózisának emelkedésekor (>=0.25 mcg/kg/perc) a noradrenalin-igény mérséklésére és a MAP stabilizálására."
                },
                {
                    "drug": "Adrenalin (Epinephrin) vagy Dobutamin",
                    "dose": "Adrenalin: 0.05-0.5 mcg/kg/perc; Dobutamin: 2.5-20 mcg/kg/perc",
                    "duration": "Sokkban szükség szerint",
                    "note": "Adrenalin adható refrakter sokkban harmadik vonalbeli szerként. Dobutamin adása indokolt miokardiális diszfunkció (alacsony perctérfogat) vagy tartós szöveti hipoperfúzió esetén, adekvát volumenpótlás és MAP mellett."
                },
                {
                    "drug": "Hidrokortizon (Hydrocortisone)",
                    "dose": "200 mg/nap (folyamatos infúzióban vagy 4x50 mg IV)",
                    "duration": "Refrakter szeptikus sokk alatt",
                    "note": "Kizárólag akkor javasolt az SSC 2026 szerint, ha a reszuszcitáció és a magas dózisú vazopresszor-terápia ellenére sem áll helyre a hemodinamikai stabilitás."
                }
            ],
            "outpatient": []
        }
    },
    prognosis: {
        "mortality": "Sepsis esetén kb. 15-25%, szeptikus sokk kialakulásakor a kórházi mortalitás elérheti a 35-50%-ot is.",
        "factors": "Életkor, premissziós társbetegségek, az 1 órás ellátási csomag és forráskontroll gyorsasága, kezdeti laktát és laktát-clearance dinamikája, akut szervi elégtelenségek száma.",
        "prognostic_scores": [
            "SOFA score (Sequential Organ Failure Assessment): >=2 pont akut emelkedés szervdiszfunkciót és szepszist igazol (Sepsis-3 konszenzus)",
            "NEWS2 (National Early Warning Score 2) / MEWS / SIRS kritériumok: magas szenzitivitású korai szűrőrendszerek (az SSC 2026 nem javasolja a qSOFA-t egyedüli szűrőtesztként annak alacsonyabb szenzitivitása miatt)",
            "APACHE II / SAPS II score: intenzív osztályos kockázatbecslésre és mortalitás előrejelzésére"
        ]
    },
    language: "hu",
    group: "systemic_hu"
  },
  {
    id: "fever-of-unknown-origin",
    name: "Ismeretlen eredetű láz (FUO)",
    pathogen: {
        "type": "Szindróma",
        "name": "Multifaktoriális (infektív, szisztémás autoimmun/gyulladásos, malignus és egyéb okok)",
        "gram": "Nem releváns",
        "shape": "Nem releváns"
    },
    epidemiology: {
        "incidence": "A kórházi lázas esetek kb. 2-5%-a, a diagnosztizálatlan lázas állapotok hátterében leggyakrabban fertőzések (25-35%), daganatok (15-20%) és nem-infektív gyulladásos betegségek (GCA, Still-betegség stb., 15-20%) állnak.",
        "risk_groups": [
            "Idősek (gyakoribb az óriássejtes arteritis és a malignitás)",
            "Neutropéniás vagy egyéb módon immunszupprimált betegek",
            "Nozokomiális (kórházi) ápolásban részesülők",
            "HIV-fertőzöttek"
        ],
        "seasonality": "Nincs szezonalitása",
        "transmission": "Nem fertőző szindróma (bár a háttérben álló egyes kórokozók fertőzőek lehetnek)"
    },
    pathomechanism: {
        "steps": [
            "A perifériás gyulladásos sejtek (monocyták, macrophagok) exogén pirogének (kórokozók, toxinok) vagy immunstimuláció hatására endogén pirogéneket (IL-1, IL-6, TNF-alfa, IFN) termelnek.",
            "Az endogén pirogének a keringés útján elérik a hypothalamus preoptikus területét (organum vasculosum laminae terminalis - OVLT).",
            "Az OVLT sejtjeiben a ciklooxigenáz-2 (COX-2) enzim aktiválódik, ami prosztaglandin E2 (PGE2) szintézishez vezet.",
            "A megnövekedett PGE2 szint eltolja a hypothalamus hőszabályozó központjának beállítási pontját (set-point) felfelé.",
            "A szervezet hómegőrző és hőtermelő mechanizmusokat indít be (vasoconstrictio, borzongás/hidegrázás), ami lázhoz vezet.",
            "FUO esetén a fenti körfolyamat folyamatosan fennmarad az occult gyulladásos fészek, daganat vagy autoimmun folyamat perzisztálása miatt."
        ],
        "virulence_factors": [
            "Nem releváns (egyedi kórokozótól függ)"
        ]
    },
    clinical: {
        "incubation": "Nem releváns",
        "onset": "Fokozatos vagy hullámzó, legalább 3 hete fennálló lázas állapot",
        "symptoms": [
            {
                "name": "Láz",
                "description": "Több alkalommal mért >38,3°C-os testhőmérséklet, amely legalább 3 hete fennáll, és a kezdeti vizsgálatok ellenére is diagnosztizálatlan marad.",
                "severity": "severe"
            },
            {
                "name": "Szisztémás tünetek",
                "description": "Éjszakai izzadás, nem szándékos testsúlycsökkenés, levertség, étvágytalanság.",
                "severity": "moderate"
            },
            {
                "name": "Szervspecifikus kísérőtünetek",
                "description": "Ízületi fájdalmak, fejfájás (GCA gyanúja), bőrkiütések, lymphadenopathia vagy hasi fájdalom a háttéroktól függően.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Részletes és ismételt fizikális vizsgálat naponta (új kiütések, szívzörejek, nyirokcsomók, temporális artériák érzékenysége)",
            "Lázgörbe elemzése",
            "Szemfenék vizsgálata (endocarditis, tuberculosis vagy granulomatosus betegségek jelei)"
        ],
        "complications": [
            "A háttérben álló malignus vagy szisztémás gyulladásos betegség progressziója a késedelmes diagnózis miatt",
            "Sepsis vagy szervi elégtelenség nem kezelt fertőzések esetén",
            "Iatrogén ártalmak a felesleges empirikus terápiák miatt (pl. gyógyszerláz, rezisztencia)"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Mellkas és has/kismedence CT",
                "finding": "Táptalajok, tályogok, lymphadenopathia, szervi megnagyobbodások (hepatosplenomegalia) vagy okkult daganatok azonosítása.",
                "significance": "Elsővonalbeli anatómiai képalkotás."
            },
            {
                "modality": "18F-FDG PET/CT",
                "finding": "Fokozott glükózmetabolizmust mutató területek (vasculitis, daganat, osteomyelitis vagy occult tályog).",
                "significance": "A legfontosabb korai másodvonalbeli funkcionális képalkotó vizsgálat, magas negatív prediktív értékkel."
            }
        ],
        "laboratory": [
            {
                "test": "Kvalitatív vérkép, CRP, PCT, We, Ferritin",
                "finding": "Leukocytosis/leukopenia, emelkedett gyulladásos markerek, extrém magas ferritin (Still-betegség vagy HLH gyanúja).",
                "interpretation": "A szisztémás gyulladás igazolása és az irányultság meghatározása."
            },
            {
                "test": "Szérum és vizelet immunfixáció / fehérje elektroforézis",
                "finding": "Monoklonális gammopátia vagy emelkedett poliklonális immunglobulinok.",
                "interpretation": "Myeloma multiplex vagy szisztémás autoimmun kórképek gyanúja."
            },
            {
                "test": "Autoantitestek (ANA, ANCA, RF, anti-CCP)",
                "finding": "Pozitivitás a specifikus antitestekre.",
                "interpretation": "Kötőszöveti betegségek (autoimmun kórképek) és vasculitisek diagnosztikájához."
            }
        ],
        "microbiology": [
            {
                "test": "Ismételt hemokultúrák (legalább 3 pár, különböző vénás helyekről, antibiotikum előtt)",
                "finding": "Bakteriémia vagy fungémia igazolása (pl. lassú növekedésű HACEK kórokozók, Mycobacteriumok).",
                "significance": "Arany standard az infektív endocarditis és más intravascularis fertőzések diagnosztikájában."
            },
            {
                "test": "Vírus és egyéb specifikus PCR-ek / Szerológia",
                "finding": "CMV, EBV, HIV, Bartonella, Coxiella burnetii, Brucella pozitivitás.",
                "significance": "Atípusos és krónikus fertőzések kizárására."
            },
            {
                "test": "IGRA (Quantiferon-TB) vagy Mantoux teszt",
                "finding": "Pozitív eredmény látens vagy aktív tuberculosis esetén.",
                "significance": "Az extrapulmonalis/miliaris tuberculosis kizárására."
            }
        ]
    },
    therapy: {
        "targeted": "A diagnosztizált alapbetegségnek megfelelő célzott kezelés (antimikrobiális szerek fertőzések esetén, immunszuppresszió/kortikoszteroidok autoimmun kórképeknél, onkológiai kezelés daganatoknál).",
        "supportive": [
            "Folyadék- és elektrolit-háztartás egyensúlyban tartása",
            "Fizikális hűtés és szükség esetén NSAID vagy paracetamol (kizárólag akkor, ha a diagnosztikus vizsgálatokat nem zavarja és a beteg klinikai állapota megkívánja)",
            "Nutritív támogatás"
        ],
        "prevention": [
            "Kórházi fertőzések megelőzése (nozokomiális FUO esetén)",
            "Megfelelő aszeptikus technika invazív eszközök használatakor"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Empirikus széles spektrumú antibiotikum (pl. Piperacillin/tazobactam vagy Meropenem)",
                    "dose": "Klinikai állapot és vesefunkció szerint egyénre szabva",
                    "duration": "A tenyésztések eredményéig vagy a klinikai kép tisztázódásáig",
                    "note": "Kizárólag instabil, szepszis jegyeit mutató, vagy súlyos neutropéniás (ANC < 500/ul) beteg esetén indokolt elindítani."
                },
                {
                    "drug": "Kortikoszteroid (pl. Prednisolon)",
                    "dose": "Nem javasolt rutinszerűen",
                    "duration": "Egyedi döntés alapján",
                    "note": "Csak erős óriássejtes arteritis (GCA) gyanú és fenyegető látásvesztés esetén indítható el empirikusan a biopszia előtt."
                }
            ],
            "outpatient": [
                {
                    "drug": "Empirikus antimikrobiális vagy szteroid kezelés kerülendő",
                    "dose": "Nem alkalmazandó",
                    "duration": "Nem alkalmazandó",
                    "note": "Stabil járóbetegnél az empirikus kezelés rontja a diagnosztikus pontosságot és elfedheti a tüneteket."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Fiatalabb korban, infekció vagy gyulladásos ok esetén a mortalitás alacsony (<5-10%), míg idősebb korban és malignus háttér esetén elérheti a 30-50%-ot is.",
        "factors": "A háttérben álló alapbetegség jellege, a beteg életkora, az immunszuppresszió mértéke és a diagnózis felállításának gyorsasága.",
        "prognostic_scores": [
            "Nincs specifikus FUO prognosztikai pontrendszer; a szepszis kockázatának becslésére a qSOFA/SOFA, daganatoknál specifikus onkológiai stádiumbeosztások alkalmazandók."
        ]
    },
    language: "hu",
    group: "systemic_hu"
  },
  {
    id: "pyomyositis",
    name: "Pyomyositis (gennyes izomgyulladás)",
    pathogen: {
        "type": "Baktérium",
        "name": "Staphylococcus aureus (beleértve a MRSA-t), Streptococcus pyogenes (A-csoportú Streptococcus), Gram-negatív pálcák (pl. Escherichia coli, Klebsiella pneumoniae)",
        "gram": "Gram-pozitív és Gram-negatív",
        "shape": "kokkus és pálca"
    },
    epidemiology: {
        "incidence": "Trópusi területeken gyakori (primer forma), mérsékelt égövön ritkább és többnyire másodlagos, immunszuppresszióhoz vagy traumához társul.",
        "risk_groups": [
            "HIV/AIDS fertőzöttek",
            "Diabetes mellitusban szenvedők",
            "Neutropénia vagy immunszuppresszív terápia",
            "Intravénás droghasználók",
            "Nemrégiben lezajlott tompa trauma vagy extrém fizikai megterhelés",
            "Májcirrhosis, veseelégtelenség"
        ],
        "seasonality": "Nincs",
        "transmission": "Nem terjed emberről emberre; leggyakrabban átmeneti bakteriémia során történő hematogén kolonizáció révén alakul ki az elhalt vagy sérült izomszövetben."
    },
    pathomechanism: {
        "steps": [
            "Az egészséges harántcsíkolt izomzat ellenálló a bakteriális fertőzésekkel szemben.",
            "Tompa trauma, mikrosérülés, ischaemia vagy intenzív fizikai megterhelés helyi izomkárosodást (hematoma, ödéma) okoz.",
            "Egy átmeneti bakteriémia során a véráramban keringő baktériumok megtapadnak a sérült, sérülékeny izomszövetben.",
            "Invazív fázis: A baktériumok elszaporodnak, lokális gyulladást és ödémát váltanak ki valódi gennygyülem nélkül.",
            "Szuppuratív fázis: Mikroabscessusok alakulnak ki, amelyek fuzionálva feszülő, körülírt intramuscularis tályoggá alakulnak.",
            "Késői fázis: Megfelelő kezelés hiányában a tályog áttöri a fasciát, szeptikus embolizációt, bakterémiát és szeptikus sokkot okozva."
        ],
        "virulence_factors": [
            "S. aureus fibronectin-kötő fehérjék (FnBPA, FnBPB) a sérült izomszövethez való tapadáshoz",
            "Panton-Valentine leukocidin (PVL) toxin (gyakori a necrotizáló formákban)",
            "Alfa-hemolizin és egyéb sejtlizáló citotoxinok",
            "Szuperantigének (TSST-1, enterotoxinok), amelyek masszív gyulladásos választ váltanak ki"
        ]
    },
    clinical: {
        "incubation": "Változó, általában napoktól hetekig tart a predisponáló trauma vagy bakteriémia után.",
        "onset": "Fokozatosan induló, de progresszív lefolyású (három klinikai fázis: invazív, szuppuratív, késői szeptikus).",
        "symptoms": [
            {
                "name": "Mély izomfájdalom",
                "description": "Lokalizált, görcsös, kezdetben tompa, majd elviselhetetlenné váló izomfájdalom.",
                "severity": "severe"
            },
            {
                "name": "Láz és hidegrázás",
                "description": "Különösen a szuppurációs fázistól kezdve jelentkező, gyakran magas, szeptikus lázmenet.",
                "severity": "severe"
            },
            {
                "name": "Feszülő duzzanat",
                "description": "Az érintett izom merev, fás tapintatú, duzzadt és rendkívül érzékeny.",
                "severity": "moderate"
            },
            {
                "name": "Funkciókiesés",
                "description": "Az érintett izomcsoport mozgásának súlyos beszűkülése a fájdalom miatt.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Az érintett izom duzzanata, kifejezett nyomásérzékenysége és fás, feszülő keménysége.",
            "Fluktuáció többnyire nem tapintható a mély elhelyezkedés és a feszülő fascia miatt.",
            "Szisztémás gyulladásos válasz jelei (láz, tachycardia, tachypnoe).",
            "A felette lévő bőr kezdetben normális lehet, bőrpír csak későn jelentkezik."
        ],
        "complications": [
            "Intramuscularis abscessus képződés",
            "Kompartment szindróma",
            "Szepszis és szeptikus sokk",
            "Metasztatikus tályogok (pl. tüdő, agy, vese)",
            "Közeli csontok és ízületek fertőződése (osteomyelitis, szeptikus arthritis)"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "MRI",
                "finding": "Izomödéma a T2-súlyozott képeken, kontrasztanyag-halmozás a tályogfalban.",
                "significance": "A legérzékenyebb és legspecifikusabb képalkotó, különösen a korai, invazív fázis kimutatására."
            },
            {
                "modality": "Ultrahang",
                "finding": "Izomrostok szerkezetének felbomlása, hypoechogén folyadékgyülem (tályog).",
                "significance": "Gyors, olcsó módszer a tályog kimutatására és az aspiráció/drenázs vezérlésére."
            },
            {
                "modality": "CT",
                "finding": "Izomduzzanat, csökkent denzitású területek (tályogok) gázbuborékokkal vagy anélkül.",
                "significance": "Hasznos alternatíva, különösen a retroperitonealis vagy kismedencei (psoas) izmok vizsgálatára."
            }
        ],
        "laboratory": [
            {
                "test": "Vérkép, CRP, Procalcitonin",
                "finding": "Kifejezett leukocytosis balra tolt vérképpel, jelentősen emelkedett CRP és procalcitonin szintek.",
                "interpretation": "Akut szisztémás bakteriális fertőzés jelei."
            },
            {
                "test": "Kreatin-kináz (CK)",
                "finding": "Normális vagy csak minimálisan emelkedett.",
                "interpretation": "Fontos diagnosztikai pont: a myositisszel és a rhabdomyolysisszel ellentétben a CK szint pyomyositisben többnyire normális, mivel a sejtkárosodás lokalizált."
            },
            {
                "test": "Hemokultúra",
                "finding": "Pozitív az esetek 10-30%-ában (leggyakrabban S. aureus).",
                "interpretation": "Hematogén eredet bizonyítása és a célzott terápia alapja."
            }
        ],
        "microbiology": [
            {
                "test": "Tályog aspirátum tenyésztés és Gram-festés",
                "finding": "Gram-pozitív kokkusok vagy Gram-negatív pálcák azonosítása és rezisztencia-profil meghatározása.",
                "significance": "A diagnózis és a célzott terápia gold standardja."
            },
            {
                "test": "PCR vizsgálat",
                "finding": "Bakteriális DNS azonosítása tenyésztés-negatív esetekben.",
                "significance": "Kiegészítő diagnosztikai teszt előzetes antibiotikum-kezelés esetén."
            }
        ]
    },
    therapy: {
        "targeted": "A tályogos fázisban kötelező az incízió és drenázs, vagy ultrahang/CT-vezérelt perkután aspiráció, kiegészítve a tenyésztési eredmény alapján célzott antibiotikumos terápiával.",
        "supportive": [
            "Sebészi debridement az elhalt szövetek eltávolítására",
            "Hatékony fájdalomcsillapítás (NSAID-ok, szükség esetén opioidok)",
            "Aggresszív intravénás folyadékterápia szepszis esetén",
            "Az érintett végtag átmeneti nyugalomba helyezése"
        ],
        "prevention": [
            "Diabetes mellitus és egyéb társbetegségek szoros kontrollja",
            "Bőrsérülések azonnali fertőtlenítése és megfelelő ellátása",
            "Szigorú aszeptikus technika alkalmazása invazív beavatkozások során"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin IV PLUSZ Piperacillin/Tazobactam IV (vagy Ceftriaxone + Metronidazole)",
                    "dose": "Vancomycin: 15-20 mg/kg q8-12h; Piperacillin/Tazobactam: 4.5 g q6h",
                    "duration": "3-4 hét (ebből legalább 1-2 hét IV terápia, majd orális átmenet)",
                    "note": "Széles spektrumú empirikus lefedés szükséges, különösen immunszuppresszált betegeknél vagy kismedencei (psoas) érintettség esetén. MRSA ellen a Vancomycin, míg a Gram-negatívok és anaerobok ellen a Piperacillin/Tazobactam nyújt védelmet."
                }
            ],
            "outpatient": [
                {
                    "drug": "Clindamycin oral vagy TMP-SMX oral vagy Amoxicillin-Clavulanate oral",
                    "dose": "Clindamycin: 300-450 mg q6-8h; TMP-SMX: 160/800 mg q12h; Amoxicillin-Clavulanate: 875/125 mg q12h",
                    "duration": "A teljes 3-4 hetes kúra befejezéséig",
                    "note": "Orális terápiára való átváltás csak sikeres drenázst, klinikai javulást, legalább 48-72 órás láztalanságot követően, a tenyésztési eredmények alapján javasolt."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Megfelelő időben elkezdett sebészi drenázs és hatékony antibiotikumos kezelés mellett <1-2%, de késői diagnózis vagy szepszis esetén elérheti a 10-15%-ot.",
        "factors": "Késői diagnózis, nem megfelelő vagy elkésett sebészi drenázs, immunszuppresszált állapot, MRSA vagy Gram-negatív kórokozó jelenléte.",
        "prognostic_scores": [
            "SOFA / qSOFA score (a szisztémás szepszis súlyosságának értékelésére)"
        ]
    },
    language: "hu",
    group: "systemic_hu"
  },
  {
    id: "toxic-shock-syndrome",
    name: "Toxikus shock szindróma (TSS)",
    pathogen: {
        "type": "Baktérium",
        "name": "Staphylococcus aureus, Streptococcus pyogenes (Group A Streptococcus - GAS)",
        "gram": "Gram-pozitív",
        "shape": "kokkusz (csoportokban vagy láncokban)"
    },
    epidemiology: {
        "incidence": "Ritka (Staph TSS: ~0.5-1/100 000, Strep TSS: ~2-4/100 000 lakos/év)",
        "risk_groups": [
            "Szuperabszorbens tampont használó menstruáló nők",
            "Sebészeti vagy postoperatív sebekkel rendelkező betegek",
            "Égési sérültek és kiterjedt bőrsérüléssel rendelkezők",
            "Bárányhimlős gyermekek (Strep TSS fokozott kockázata)",
            "Nemrégiben szült nők (posztpartum endometritis)"
        ],
        "seasonality": "Nincs",
        "transmission": "Nem közvetlenül emberről emberre terjedő betegség; a fertőzött gócból származó baktériumok által termelt toxinok szisztémás keringésbe jutása okozza."
    },
    pathomechanism: {
        "steps": [
            "A Staphylococcus aureus vagy Streptococcus pyogenes kolonizálja vagy megfertőzi a nyálkahártyát vagy lágyrészt, ahol exotoxinokat (Staph: TSST-1, enterotoxinok; Strep: SpeA, SpeC, SpeF) termel.",
            "Ezek a toxinok szuperantigénként viselkednek: a normál antigén-prezentációt megkerülve, közvetlenül kapcsolják össze az antigén-prezentáló sejtek MHC-II molekuláit a T-sejtek TCR (T-sejt receptor) béta-láncával.",
            "Ez a nem-specifikus kapcsolódás a szervezet T-sejtjeinek akár 20-30%-át is egyszerre aktiválja (szemben a normál antigének által kiváltott 0.01%-kal).",
            "A masszív T-sejt aktiváció következtében ellenőrizhetetlen citokinvihar alakul ki (óriási mennyiségű TNF-alfa, IL-1, IL-2, IL-6 és IFN-gamma szabadul fel).",
            "A citokinek generalizált vasodilatációt, a kapilláris permeabilitás drasztikus növekedését (kapilláris szivárgás szindróma) és súlyos hypotoniát okoznak, ami többszervi elégtelenséghez és refrakter sokkhoz vezet."
        ],
        "virulence_factors": [
            "TSST-1 (Toxic Shock Syndrome Toxin-1 - S. aureus)",
            "Staphylococcális enterotoxinok (SEA, SEB, SEC)",
            "Streptococcális pirogén exotoxinok (SpeA, SpeB, SpeC, SpeF)",
            "M-protein (gátolja a fagocitózist, elősegíti az adhéziót - S. pyogenes)"
        ]
    },
    clinical: {
        "incubation": "Rendkívül gyors (akár 12-48 óra a fertőzés/sérülés után)",
        "onset": "Hirtelen",
        "symptoms": [
            {
                "name": "Magas láz",
                "description": "Hirtelen fellépő, >38.9°C láz, gyakran hidegrázással kisérve.",
                "severity": "severe"
            },
            {
                "name": "Hypotonia és shock",
                "description": "Szisztolés vérnyomás <90 Hgmm felnőtteknél, ami folyadékpótlásra nem vagy alig reagál.",
                "severity": "severe"
            },
            {
                "name": "Diffúz erythroderma",
                "description": "Napégés-szerű, diffúz lapos vörös kiütés, amely a tenyereket és talpakat is érinti.",
                "severity": "moderate"
            },
            {
                "name": "Multiszisztémás szervérintettség",
                "description": "Legalább három szervrendszer érintettsége (GI: hányás/hasmenés; Musculoskeletalis: súlyos myalgia és CK emelkedés; Vese/Máj elégtelenség; Thrombocytopenia).",
                "severity": "severe"
            },
            {
                "name": "Desquamation (hámlás)",
                "description": "A betegség kezdete után 1-2 héttel jelentkező lemezes hámlás, különösen a tenyereken és talpakon.",
                "severity": "mild"
            }
        ],
        "physical_exam": [
            "Diffúz makulopapulózus kiütések (erythroderma)",
            "Súlyos hypotonia, tachycardia, perifériás perfúziós zavar",
            "Nyálkahártya-hyperaemia (conjunctiva, szájüreg, vagina pirossága)",
            "Epernyelv (különösen streptococcus infekció esetén)",
            "Tudatállapot-változás, zavartság vagy somnolentia a hypoperfúzió miatt",
            "Lokális lágyrészfertőzés jelei (Strep TSS-nél: erythema, duzzanat, crepitacio, nekrotizáló fasciitisre utaló bullák)"
        ],
        "complications": [
            "Refrakter septikus shock",
            "ARDS (akut légzési distressz szindróma)",
            "DIC (diszeminált intravaszkuláris koaguláció)",
            "Akut veseelégtelenség (pótlókezelést igényelhet)",
            "Végtag-amputációt igénylő nekrózis",
            "Többszervi elégtelenség és halál"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "CT / MRI (kontrasztanyagos)",
                "finding": "Lágyrész gázbuborékok, a mély fascia megvastagodása, kontraszthalmozás hiánya a nekrotikus területeken.",
                "significance": "Azonnali műtéti indikációt jelentő nekrotizáló fasciitis (főleg Strep TSS-nél) gyors kizárása vagy igazolása."
            },
            {
                "modality": "Ultrahang (ágy melletti - POCUS)",
                "finding": "Szabad folyadék a lágyrészek és a fascia mentén ('cobblestone' mintázat, 'fluid wave' jel).",
                "significance": "Gyors tájékozódás az intenzív osztályon a sebészi feltárás előtt."
            }
        ],
        "laboratory": [
            {
                "test": "Teljes vérkép",
                "finding": "Kifejezett leukocytosis balra tolttsággal, súlyos thrombocytopenia (<100 000/ul).",
                "interpretation": "Szisztémás gyulladásos válasz és fogyásos coagulopathia."
            },
            {
                "test": "Vese- és májfunkció",
                "finding": "Kreatinin >177 umol/l (vagy a kiindulási érték kétszerese), összbilirubin emelkedés.",
                "interpretation": "Többszervi elégtelenség diagnosztikus kritériuma."
            },
            {
                "test": "Kreatin-kináz (CK)",
                "finding": "Kifejezetten emelkedett (>2x a normál felső határnak).",
                "interpretation": "Súlyos myositis, rhabdomyolysis igazolása."
            },
            {
                "test": "Alvadási panel (INR, APTI, Fibrinogén)",
                "finding": "Megnyúlt alvadási idők, csökkent fibrinogén szint, emelkedett D-dimer.",
                "interpretation": "Kialakuló szisztémás DIC igazolása."
            }
        ],
        "microbiology": [
            {
                "test": "Hemokultúra (vértenyésztés)",
                "finding": "Staph TSS-nél gyakran negatív (<5-15% pozitív); Strep TSS-nél gyakran pozitív (>50-60%-ban bakterémiás).",
                "significance": "Kulcsfontosságú az etiológia igazolásában; Strep TSS esetén a pozitív hemokultúra megerősíti a diagnózist."
            },
            {
                "test": "Seb-, hüvely- és torokváladék tenyésztés",
                "finding": "S. aureus vagy S. pyogenes növekedése.",
                "significance": "A primer infekciós vagy kolonizációs góc azonosítása."
            },
            {
                "test": "Molekuláris és toxinvizsgálatok (PCR, ELISA)",
                "finding": "Szuperantigén toxin gén (pl. tst, speA, speC) kimutatása.",
                "significance": "Referencia laboratóriumok által végzett megerősítő vizsgálat."
            }
        ]
    },
    therapy: {
        "targeted": "Staph TSS esetén: MSSA-nál Cefazolin (vagy Flucloxacillin) + Clindamycin; MRSA-nál Vancomycin + Clindamycin. Strep TSS esetén: Penicillin G (magas dózisú) + Clindamycin (toxinszintézis gátlása). Clindamycin-rezisztens izolátumok vagy intolerancia esetén Linezolid alkalmazható toxinszintézis-gátlóként. Súlyos, terápiarezisztens Strep TSS és nekrotizáló fasciitis esetén IVIG (intravénás immunglobulin, 1-2 g/kg) adása javasolt a toxinok semlegesítésére. Azonnali sebészi debridement és forráskontroll (tampontok, idegentestek eltávolítása) kötelező!",
        "supportive": [
            "Agresszív intravénás folyadékterápia (krisztalloidok) a hypovolaemiás és disztributív shock rendezésére.",
            "Korai vazopresszor adás (elsőként választandó: Noradrenalin) a MAP >65 Hgmm fenntartására.",
            "Légzéstámogatás (ARDS esetén protektív gépi lélegeztetés).",
            "Folyamatos vesepótló kezelés (CRRT) akut veseelégtelenség és anuria esetén.",
            "Súlyos coagulopathia és vérzés esetén transzfúziós támogatás (vörösvértest, thrombocyta, friss fagyasztott plazma)."
        ],
        "prevention": [
            "Szuperabszorbens tamponok használatának kerülése, gyakori váltása (4-6 óránként).",
            "Posztoperatív sebek steril és szakszerű kezelése.",
            "Bőrsérülések, horzsolások azonnali fertőtlenítése."
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Vancomycin",
                    "dose": "15-20 mg/kg IV 12 óránként (szérumszint-követés mellett vagy AUC-alapon)",
                    "duration": "10-14 nap (klinikai kép és góc szanálása alapján)",
                    "note": "MRSA és rezisztens Gram-pozitív törzsek empirikus lefedésére."
                },
                {
                    "drug": "Clindamycin",
                    "dose": "900 mg IV 8 óránként",
                    "duration": "A klinikai stabilitás és a toxikus tünetek rendeződéséig (általában 3-5 napig, majd célzott kezelés)",
                    "note": "A fehérjeszintézis gátlásán keresztül leállítja a baktériumok szuperantigén toxintermelését (Eagle-effektus ellensúlyozása)."
                },
                {
                    "drug": "Piperacillin/Tazobactam",
                    "dose": "4.5 g IV 6 óránként (elhúzódó infúzióban javasolt)",
                    "duration": "A mikrobiológiai eredmények megérkezéséig",
                    "note": "Széles spektrumú Gram-negatív és anaerob fedezet, ha kevert sebfertőzés gyanúja áll fenn."
                }
            ],
            "outpatient": [
                {
                    "drug": "Nincs",
                    "dose": "Nem alkalmazható",
                    "duration": "Nem alkalmazható",
                    "note": "A toxikus shock szindróma gyanúja azonnali intenzív osztályos felvételt és monitorozást igényel!"
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Menstruációs Staph TSS: <1-3%; Nem-menstruációs Staph TSS: 5-15%; Streptococcális TSS (Strep TSS): 30-45% (megfelelő intenzív terápia mellett is).",
        "factors": "A beteg életkora, a sokk kezdetétől az adekvát antibiotikum és forráskontroll elindításáig eltelt idő, a primer fertőzési góc jellege (pl. nekrotizáló fasciitis), a kórokozó típusa és az esetleges bakterémia jelenléte.",
        "prognostic_scores": [
            "SOFA (Sequential Organ Failure Assessment) score",
            "APACHE II score"
        ]
    },
    language: "hu",
    group: "systemic_hu"
  },
  {
    id: "invasive-candidiasis",
    name: "Invazív Candidiasis",
    pathogen: {
        "type": "Gomba",
        "name": "Candida albicans, Candida glabrata, Candida parapsilosis, Candida tropicalis, Candida krusei, és Candida auris",
        "gram": "Sarjadzó gomba",
        "shape": "Ovális sarjadzósejtek, pseudohyphae és valódi hyphae képzés (kivéve C. glabrata)"
    },
    epidemiology: {
        "incidence": "Nozokomiális véráramfertőzések 4. leggyakoribb oka az intenzív osztályokon.",
        "risk_groups": [
            "Intenzív osztályos (ICU) kezelés",
            "Centrális vénás katéter (CVC)",
            "Széles spektrumú antibiotikum-kezelés",
            "Totális parenterális táplálás (TPN)",
            "Hasi nagyműtétek, gastrointestinalis perforáció",
            "Neutropenia, immunszuppresszió"
        ],
        "seasonality": "Nincs",
        "transmission": "Endogén transzlokáció a gastrointestinalis traktusból, vagy exogén transzmisszió (egészségügyi dolgozók keze, kontaminált eszközök - különösen Candida auris esetén)"
    },
    pathomechanism: {
        "steps": [
            "Mucosa-barrier vagy bőr-barrier sérülése (széles spektrumú antibiotikumok miatti dysbiosis, kemoterápia, műtét)",
            "Transzlokáció a véráramba a gastrointestinalis traktuson keresztül vagy direkt bejutás intravascularis eszközökön",
            "Adhézió és biofilmképzés idegen testeken (pl. CVC)",
            "Hematogén disszemináció és mélyszöveti szervek kolonizációja, mikrotályogok képződése (szem, szív, máj, lép, csontok)"
        ],
        "virulence_factors": [
            "Biofilm képző képesség (különösen C. albicans, C. auris)",
            "Adhezinek (ALS géncsalád)",
            "Morfológiai transzíció (sarjadzósejt-fonalas alak váltás)",
            "Extracelluláris hidrolitikus enzimek (szekretált aszpartil-proteázok, foszfolipázok)"
        ]
    },
    clinical: {
        "incubation": "Változó",
        "onset": "Akut vagy fokozatosan súlyosbodó szepszis",
        "symptoms": [
            {
                "name": "Perzisztáló láz",
                "description": "Széles spektrumú antibiotikum-kezelésre nem reagáló láz.",
                "severity": "severe"
            },
            {
                "name": "Szepszis / Szeptikus shock",
                "description": "Hypotonia, tachycardia, tachypnoe, szervdiszfunkciók.",
                "severity": "severe"
            },
            {
                "name": "Endophthalmitis",
                "description": "Homályos látás, scotomák, szemfájdalom. Kezeletlen esetben vakságot okoz.",
                "severity": "severe"
            },
            {
                "name": "Bőrtünetek",
                "description": "Fájdalmatlan, erythemás, nodularis vagy papulopustulosus bőrelváltozások.",
                "severity": "moderate"
            },
            {
                "name": "Hepatosplenikus candidiasis",
                "description": "Neutropenia rendeződését követően jelentkező jobb bordaív alatti fájdalom, láz, emelkedett alkalikus foszfatáz.",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Láz, tachycardia, hypotonia (szepszis/szeptikus shock jelei)",
            "Tágított szemfenéki vizsgálat (chorioretinitis, vitritis, fehér vattaszerű gócok)",
            "Makulopapulózus vagy noduláris bőrelváltozások",
            "Új szívzörej (endocarditis gyanúja)",
            "Hasi érzékenység vagy hepatomegalia"
        ],
        "complications": [
            "Szeptikus shock és többszervi elégtelenség",
            "Endophthalmitis (maradandó látásvesztés)",
            "Infectiv endocarditis",
            "Osteomyelitis és discitis",
            "Máj- és léptályogok"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Echocardiographia (TTE/TEE)",
                "finding": "Vegetáció a szívbillentyűkön candidemia esetén az endocarditis kizárására.",
                "significance": "Minden candidemiás betegnél javasolt az endocarditis kizárására."
            },
            {
                "modality": "Hasi CT / MRI",
                "finding": "Kicsi, kerek, alacsony denzitású, céltáblaszerű gócok a májban és/vagy lépben.",
                "significance": "Krónikus disszeminált (hepatosplenicus) candidiasis diagnosztikája."
            },
            {
                "modality": "Szemfenéki vizsgálat",
                "finding": "Chorioretinalis fehér gócok, üvegtesti homályok.",
                "significance": "Candidás endophthalmitis igazolása (javasolt a diagnózist követő 72 órán belül)."
            }
        ],
        "laboratory": [
            {
                "test": "Hemokultúra",
                "finding": "Pozitív (érzékenysége csak 50-60%)",
                "interpretation": "Gold standard, de a negatív eredmény nem zárja ki az invazív candidiasist."
            },
            {
                "test": "1,3-béta-D-glükán (BDG)",
                "finding": "Pozitív (>80 pg/mL)",
                "interpretation": "Fungális sejtfal-összetevő. Magas negatív prediktív értékkel bír szisztémás fertőzés gyanúja esetén."
            }
        ],
        "microbiology": [
            {
                "test": "Tenyésztés és MALDI-TOF",
                "finding": "Candida faj pontos meghatározása",
                "significance": "Azonosítja a fajt, ami kritikus az empirikus terápia módosításában és a célzott kezelésben."
            },
            {
                "test": "Antifungális érzékenységi vizsgálat (MIC)",
                "finding": "Érzékenységi profil meghatározása (azolok, echinocandinok, amphotericin B)",
                "significance": "Vezérfonal az oralis de-eszkalációhoz és a rezisztens törzsek (pl. C. auris) kezeléséhez."
            },
            {
                "test": "T2Candida panel",
                "finding": "Mágneses rezonancián alapuló közvetlen DNS kimutatás teljes vérből",
                "significance": "Gyors (3-5 óra), rendkívül érzékeny módszer a leggyakoribb Candida fajok kimutatására hemokultúra-negatív esetekben is."
            }
        ]
    },
    therapy: {
        "targeted": "Echinocandin-érzékeny fajok esetén az elsővonalbeli echinocandint klinikailag stabil betegnél, negatív kontroll hemokultúra és fluconazol-érzékenység esetén szájon át adható Fluconazolra kell de-eszkalálni. C. auris esetén magas dózisú echinocandin vagy Liposomal Amphotericin B szükséges.",
        "supportive": [
            "Minden centrális vénás katéter (CVC) mielőbbi eltávolítása (erősen ajánlott)",
            "Szemészeti konzílium tágított szemfenék-vizsgálattal (diagnózist követő 72 órán belül non-neutropéniás betegnél)",
            "Ismételt hemokultúrák levétele 24-48 óránként a candidemia clearance igazolására"
        ],
        "prevention": [
            "Szigorú infekciókontroll és kontakt izoláció (különösen Candida auris esetén)",
            "Katéter-asszociált fertőzések megelőzése (katétergondozási bundle-ök alkalmazása)",
            "Célzott antifungális profilaxis magas rizikójú betegeknél (pl. májtranszplantáltak, ismételt gastrointestinalis perforáció)"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Caspofungin",
                    "dose": "70 mg loading dose az 1. napon, majd napi 50 mg iv.",
                    "duration": "A candidemia megszűnését (első negatív hemokultúra) és a tünetek javulását követő minimum 14 napig.",
                    "note": "Elsővonalbeli empirikus választás. Alternatívaként Anidulafungin (200 mg loading, majd 100 mg/nap iv.) vagy Micafungin (100 mg/nap iv.) is adható."
                },
                {
                    "drug": "Fluconazol",
                    "dose": "800 mg (12 mg/kg) loading dose, majd napi 400 mg (6 mg/kg) iv. vagy po.",
                    "duration": "A candidemia megszűnését követő minimum 14 napig.",
                    "note": "Csak akkor választható empirikusan, ha a beteg klinikailag stabil, nincs korábbi azol-expozíciója, és az osztályon elhanyagolható a rezisztens törzsek (C. glabrata, C. krusei) előfordulása."
                }
            ],
            "outpatient": [
                {
                    "drug": "Fluconazol",
                    "dose": "Napi 400 mg po.",
                    "duration": "A teljes (negatív hemokultúrától számított) 14 napos ciklus befejezéséig.",
                    "note": "Kizárólag step-down / de-eszkalációs terápiaként, stabil állapotú, negatív kontroll hemokultúrával bíró, bizonyítottan fluconazol-érzékeny törzzsel fertőzött betegnél."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "Kb. 30-40% (szeptikus shock esetén meghaladhatja a 60%-ot)",
        "factors": "A CVC időben történő eltávolítása (forráskontroll), az adekvát empirikus terápia megkezdésének gyorsasága, a beteg kora és kísérőbetegségei.",
        "prognostic_scores": [
            "Candida score (az empirikus kezelés indításának mérlegelésére)",
            "SOFA / APACHE II score (szepszis súlyosságának megítélésére)"
        ]
    },
    language: "hu",
    group: "systemic_hu"
  },
  {
    id: "invasive-aspergillosis",
    name: "Invasive Aspergillosis",
    pathogen: {
        "type": "Gomba",
        "name": "Aspergillus fumigatus",
        "gram": "Penészgomba",
        "shape": "hifák (45° elágazás, szeptált)"
    },
    epidemiology: {
        "incidence": "Neutropéniás betegek 5-10%-a, hematológiai daganatos betegek, transzplantáltak és kritikus állapotú ICU betegek körében kiemelkedő",
        "risk_groups": [
            "Prolongált neutropenia (<500/ul >10 napig)",
            "Allogén őssejt-transzplantáció (HSCT)",
            "Szolid szervtranszplantáció (SOT, különösen tüdő)",
            "Tartós, nagydózisú kortikoszteroid kezelés",
            "Súlyos víruspneumonia (influenza-asszociált IAPA, COVID-19-asszociált CAPA)"
        ],
        "seasonality": "Nincs (építkezés pora, felújítások fokozott rizikót jelentenek)",
        "transmission": "Konídiumok inhalációja a környezeti levegőből"
    },
    pathomechanism: {
        "steps": [
            "Inhalált Aspergillus konídiumok elérik a tüdő alveolusait",
            "Csökkent immunválasz (neutropenás vagy szteroidot kapó betegeknél az alveoláris makrofágok nem képesek eliminálni a konídiumokat)",
            "A konídiumok kicsíráznak és szövetkárosító hifákká alakulnak",
            "Angioinvázió: a hifák áttörik a tüdő ereinek falát",
            "Eredmény: thrombosis, infarctus, lokális szöveti nekrózis és haematogen szóródás",
            "Metasztatikus gócok alakulnak ki más szervekben (központi idegrendszer, bőr, vese)"
        ],
        "virulence_factors": [
            "Angioinvázió képessége",
            "Gliotoxin és egyéb mikotoxinok (gátolják a fagocitózist)",
            "Konidiális melanin (véd az oxidatív stressztől)",
            "Elasztázok, proteázok és metalloproteinázok (szöveti destrukció)"
        ]
    },
    clinical: {
        "incubation": "Napok-hetek (erősen függ az immunszuppresszió mértékétől)",
        "onset": "Akut vagy szubakut progresszió",
        "symptoms": [
            {
                "name": "Láz",
                "description": "Széles spektrumú antibiotikum-kezelésre nem reagáló láz neutropéniás betegben",
                "severity": "severe"
            },
            {
                "name": "Köhögés",
                "description": "Száraz vagy minimálisan produktív köhögés",
                "severity": "moderate"
            },
            {
                "name": "Pleurális mellkasi fájdalom",
                "description": "Éles, légzéssel összefüggő fájdalom, amely az angioinvazív növekedés és infarktus jele",
                "severity": "moderate"
            },
            {
                "name": "Haemoptysis",
                "description": "Vérköpés, amely erek eróziója miatt alakul ki (életveszélyes lehet)",
                "severity": "severe"
            },
            {
                "name": "Sinusitis tünetek",
                "description": "Arcfájdalom, orrdugulás, véres vagy fekete orrváladék az orr-melléküreg érintettség esetén",
                "severity": "moderate"
            }
        ],
        "physical_exam": [
            "Láz, tachypnoe, hypoxia",
            "Tüdők felett csökkent légzési hang vagy pleurális dörzsölés",
            "Orrüregi vizsgálat során látható fekete, nekrotikus pörkök (rhinocerebralis forma)",
            "Bőrelváltozások: fájdalmatlan, nekrotikus közepű papulák vagy nodulusok disszemináció esetén",
            "Fokális neurológiai deficit vagy tudatzavar (agyi disszemináció és tályog esetén)"
        ],
        "complications": [
            "Masszív, letális tüdővérzés",
            "Hematogén disszemináció (agy, bőr, szívbillentyűk)",
            "Agyi tályog és stroke-szerű neurológiai tünetek",
            "Multiorgán elégtelenség és halál"
        ]
    },
    diagnostics: {
        "imaging": [
            {
                "modality": "Mellkas HRCT (Nagy felbontású CT)",
                "finding": "Halo-jel (nodulus körüli tejüveghomály az ödéma/vérzés miatt), levegő-sarló jel (air-crescent sign, a gyógyulás/szekvesztráció fázisában), üregképződés, konszolidáció.",
                "significance": "A legfontosabb korai diagnosztikus módszer neutropéniásokban, az EORTC/MSGERC kritériumok alapja."
            }
        ],
        "laboratory": [
            {
                "test": "Galaktomannán (GM) antigén teszt",
                "finding": "Szérum index >0.5, vagy BAL (bronchoalveolaris lavage) folyadék index >1.0",
                "interpretation": "Specifikus Aspergillus sejtfal-antigén detekció. Piperacillin/tazobactam álpozitív eredményt adhatott régebben, de a modern készítményeknél ez már ritka."
            },
            {
                "test": "Beta-D-glükán (BDG) teszt",
                "finding": "Pozitív (>80 pg/ml)",
                "interpretation": "Pángombás marker, nem specifikus Aspergillusra, de segít a gombás fertőzés gyanújának megerősítésében."
            }
        ],
        "microbiology": [
            {
                "test": "Aspergillus PCR (szérum vagy BAL)",
                "finding": "Aspergillus DNS detektálható",
                "significance": "Magas szenzitivitás és specificitás, az EORTC/MSGERC konszenzus kritériumok hivatalosan elfogadott diagnosztikai eleme."
            },
            {
                "test": "BAL vagy biopsziás minta tenyésztés",
                "finding": "Aspergillus fajok növekedése (pl. A. fumigatus, A. flavus)",
                "significance": "Megerősíti a diagnózist és lehetővé teszi az azol-rezisztencia vizsgálatát (szenzibilitási teszt)."
            },
            {
                "test": "Közvetlen mikroszkópos vizsgálat (kalkofluor-fehér festés)",
                "finding": "Szabályos szeptált hifák, amelyek 45 fokos szögben ágaznak el",
                "significance": "Gyors, azonnali diagnosztikus érték szöveti mintából vagy BAL-ból."
            }
        ]
    },
    therapy: {
        "targeted": "Első vonalbeli kezelés: Voriconazol vagy Isavuconazol. Alternatív/salvage kezelés: Liposzómás Amphotericin B (L-AmB). Kombinációs terápia (pl. voriconazol + anidulafungin) megfontolandó refrakter esetekben.",
        "supportive": [
            "Immunszuppresszió mérséklése vagy átmeneti felfüggesztése (ha klinikailag lehetséges)",
            "G-CSF adása a neutropenia időtartamának lerövidítésére",
            "Sürgős sebészi reszekció masszív haemoptoe vagy nagyerekhez közeli léziók esetén"
        ],
        "prevention": [
            "Posaconazol profilaxis (kiemelt rizikójú akut leukémiás vagy GVHD-s betegeknél)",
            "HEPA-szűrt, pozitív nyomású izolációs kórtermek használata építkezések közelében",
            "Maszkviselés (FFP2/FFP3) magas rizikójú betegeknek veszélyeztetett környezetben"
        ],
        "empirical": {
            "inpatient": [
                {
                    "drug": "Voriconazol",
                    "dose": "Telítő dózis: 6 mg/kg IV 12 óránként (első 2 adag), majd fenntartó: 4 mg/kg IV 12 óránként",
                    "duration": "6-12 hét (klinikai és radiológiai válasz alapján)",
                    "note": "Terápiás gyógyszerszint-monitorozás (TDM) szükséges (cél völgykoncentráció: 1-5.5 ug/ml). Erős CYP3A4 inhibitor."
                },
                {
                    "drug": "Isavuconazol",
                    "dose": "Telítő dózis: 200 mg IV 8 óránként (első 48 órában, összesen 6 adag), majd fenntartó: 200 mg IV naponta egyszer",
                    "duration": "6-12 hét",
                    "note": "Hasonló hatékonyságú, mint a vorikonazol, de kedvezőbb mellékhatás-profillal rendelkezik (kevesebb hepatotoxicitás és vizuális zavar)."
                }
            ],
            "outpatient": [
                {
                    "drug": "Voriconazol (szájon át)",
                    "dose": "2 x 200 mg naponta szájon át (étkezés előtt legalább 1 órával)",
                    "duration": "A teljes 6-12 hetes kúra befejezéséig (járóbetegként folytatva)",
                    "note": "Rendszeres májfunkció és vizuális/neurológiai mellékhatások monitorozása, valamint ambuláns TDM szükséges."
                },
                {
                    "drug": "Isavuconazol (szájon át)",
                    "dose": "1 x 200 mg naponta szájon át (a telítő fázis után)",
                    "duration": "A teljes 6-12 hetes kúra befejezéséig",
                    "note": "Kiváló biohasznosulás, étkezéstől függetlenül bevehető, stabilabb farmakokinetika miatt TDM rutinszerűen nem feltétlenül szükséges."
                }
            ]
        }
    },
    prognosis: {
        "mortality": "30-50% korai adekvát kezelés mellett, kezeletlenül vagy késői diagnózis esetén >80% (különösen agyi disszeminációban)",
        "factors": "A neutropenia megszűnése/tartama, a diagnózis és az adekvát antifungális kezelés megkezdése közötti idő, graft-versus-host betegség (GVHD) jelenléte",
        "prognostic_scores": []
    },
          }
        ]
      },
});
