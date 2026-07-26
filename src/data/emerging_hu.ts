Object.assign(window.diseases, {
  emerging: {
    name: 'Újonnan felbukkanó kórokozók',
    icon: window.diseaseMetadata.emerging.icon,
    color: window.diseaseMetadata.emerging.color,
    diseases: [
      {
        id: 'mpox',
        name: 'Mpox (Majomhimlő)',
        pathogen: { type: 'Vírus', name: '<i>Mpox virus</i> (MPXV)', gram: 'dsDNS, Poxviridae', shape: 'tégla alakú' },
        epidemiology: {
          incidence: 'Globális járvány (2022-), endémiás Afrikában',
          risk_groups: ['MSM populáció', 'Eü. dolgozók', 'Háztartási kontaktok'],
          seasonality: 'Nincs',
          transmission: 'Szoros bőr-bőr kontaktus, cseppfertőzés, fomitok, zoonózis (rágcsálók)'
        },
        pathomechanism: {
          steps: [
            'Behatolás: A vírus sérült bőrön, nyálkahártyán vagy a légutakon keresztül jut a szervezetbe.',
            'Replikáció: A behatolási kapuban és a regionális nyirokcsomókban szaporodik (inkubációs idő).',
            'Viremia: A vírus a véráramba jut (elsődleges, majd másodlagos viremia), és eljut a bőrhöz és a belső szervekhez.',
            'Léziók: A bőrben a vírusreplikáció gyulladást, sejtnekrózist és a jellegzetes himlőszerű kiütéseket (macula-papula-vezikula-pusztula-pörk) okozza.'
          ],
          virulence_factors: ['Immunmodulációs fehérjék']
        },
        clinical: {
          incubation: '5-21 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Prodromális tünetek', description: 'Láz, intenzív fejfájás, izomfájdalom, hátfájás és kifejezett gyengeség.', severity: 'mild' },
            { name: 'Lymphadenopathia', description: 'Jellegzetes tünet (nyaki, inguinalis), amely megkülönbözteti a fekete himlőtől és a bárányhimlőtől.', severity: 'moderate' },
            { name: 'Kiütés', description: '1-3 nappal a láz után jelenik meg. Arcon kezdődik, centrifugálisan terjed (tenyér/talp érintett!). Stádiumai: Macula → Papula → Vezikula → Pusztula (köldökszerű behúzódással) → Pörk. A kiütések gyakran fájdalmasak, gyógyuláskor viszketnek.', severity: 'moderate' },
            { name: 'Nyálkahártya tünetek', description: 'Szájüregi, genitális és perianalis léziók. Proctitis (végbélgyulladás) gyakori szexuális terjedés esetén, ami súlyos fájdalommal jár.', severity: 'severe' }
          ],
          physical_exam: [
            'Centrifugális eloszlású kiütések (tenyér/talp is)',
            'Duzzadt, fájdalmas nyirokcsomók',
            'Genitalis/perianalis léziók',
            'Láz'
          ],
          complications: ['Bakteriális felülfertőződés', 'Pneumonia', 'Sepszis', 'Encephalitis', 'Szaruhártya hegesedés (vakság)']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Nem specifikus', interpretation: '-' }],
          microbiology: [
            { test: 'PCR', finding: 'MPXV DNS', significance: 'Gold standard (lézió alapjáról/tetejéről vett minta)' },
            { test: 'Elektronmikroszkópia', finding: 'Poxvírus morfológia', significance: 'Ritkán elérhető' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Szupportív', dose: '-', duration: '-', note: 'Fájdalomcsillapítás, sebkezelés, izoláció' }]
          },
          targeted: 'Súlyos esetben: Tecovirimat (antivirális).',
          supportive: ['Fájdalomcsillapítás', 'Folyadékpótlás'],
          prevention: ['Vakcináció (JYNNEOS - 3. generációs himlőoltás)', 'Izoláció', 'Kontaktkutatás']
        },
        prognosis: { mortality: 'Clade II (globális): <0.1%; Clade I (Afrika): akár 10%', prognostic_scores: [], factors: 'Klád típus, kezelés ideje' }
      },
      {
        id: 'nipah',
        name: 'Nipah vírus',
        pathogen: { type: 'Vírus', name: '<i>Nipah vírus</i> (NiV)', gram: 'RNS, Paramyxoviridae (Henipavirus)', shape: 'pleomorf' },
        epidemiology: {
          incidence: 'Sporadikus járványok (Dél-Ázsia, Délkelet-Ázsia)',
          risk_groups: ['Sertésgondozók', 'Pálmanedv gyűjtők/fogyasztók'],
          seasonality: 'Tél-tavasz (Banglades)',
          transmission: 'Denevér (repülőkutya) vizelet/nyál (pálmanedv), sertés, emberről emberre'
        },
        pathomechanism: {
          steps: [
            'Bejutás: Szennyezett élelmiszer (pl. pálmanedv) fogyasztásával vagy fertőzött állattal (sertés, denevér) való közvetlen kontaktussal.',
            'Szisztémás terjedés: A vírus a véráramba jut (viremia), szabadon vagy fehérvérsejtekhez kötődve.',
            'Vasculitis: Az erek endothel sejtjeit fertőzi meg (Ephrin-B2 receptor), ami szisztémás vasculitist, trombózist és szöveti ischemiát okoz.',
            'Tropizmus: Különös affinitása van a központi idegrendszerhez (átlép a vér-agy gáton) és a tüdőhöz, ahol súlyos gyulladást és nekrózist idéz elő.'
          ],
          virulence_factors: ['Fúziós fehérjék', 'Immunantagonisták']
        },
        clinical: {
          incubation: '4-14 nap',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Prodroma', description: 'Láz, fejfájás, izomfájdalom, torokfájás és hányás.', severity: 'moderate' },
            { name: 'Légúti tünetek', description: 'Köhögés, nehézlégzés, amely atípusos pneumoniává és súlyos esetben akut légzési distressz szindrómává (ARDS) progrediálhat.', severity: 'severe' },
            { name: 'Encephalitis', description: 'Szédülés, tarkókötöttség, tudatzavar, amely gyorsan (24-48 órán belül) kómába torkollhat. Agytörzsi tünetek (areflexia, hypotonia) gyakoriak.', severity: 'severe' }
          ],
          physical_exam: ['Láz', 'Tarkókötöttség', 'Tudatzavar', 'Myoclonus', 'Areflexia/Hyporeflexia'],
          complications: ['Súlyos encephalitis', 'ARDS', 'Relapszus (hónapokkal/évekkel később)', 'Halál']
        },
        diagnostics: {
          laboratory: [{ test: 'Vérkép', finding: 'Thrombocytopenia, leukopenia', interpretation: '-' }],
          imaging: [{ modality: 'MRI agy', finding: 'Multiplex kis infarktusok, hyperintenzitás', significance: 'Encephalitis' }],
          microbiology: [
            { test: 'RT-PCR', finding: 'RNS (torok, vizelet, liquor)', significance: 'Akut fázis' },
            { test: 'ELISA (IgM/IgG)', finding: 'Pozitív', significance: 'Később' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Nincs', dose: '-', duration: '-', note: 'Azonnali kórházi/ICU felvétel' }]
          },
          targeted: 'Nincs bizonyított antivirális. Monoklonális antitest (m102.4) kísérleti fázisban.',
          supportive: ['Intenzív terápia', 'Lélegeztetés', 'Görcsgátlás'],
          prevention: ['Denevérekkel való kontaktus kerülése', 'Nyers pálmanedv kerülése', 'Beteg sertések izolálása/leölése', 'Kórházi infekciókontroll']
        },
        prognosis: { mortality: 'Magas (40-75%)', prognostic_scores: [], factors: 'Encephalitis kialakulása, kezelés elérhetősége' }
      },
      {
        id: 'oropouche',
        name: 'Oropouche-vírus fertőzés (Oropouche-láz)',
        pathogen: { type: 'Vírus', name: '<i>Oropouche-vírus</i> (OROV)', gram: 'szegmentált ssRNS (-), Peribunyaviridae', shape: 'gömb alakú, burkos' },
        epidemiology: {
          incidence: 'Endémiás Közép- és Dél-Amerikában (főleg az Amazonas-medencében, de újabban városi területeken is).',
          risk_groups: ['Trópusi/erdős területeken élők vagy oda utazók, várandósok (transzplacentáris fertőzés veszélye miatt).'],
          seasonality: 'Esős évszakban gyakoribb (a vektorok szaporodása miatt).',
          transmission: 'Vektorok útján: elsősorban törpeszúnyog (<i>Culicoides paraensis</i> csípése), másodsorban dalos szúnyog (<i>Culex quinquefasciatus</i>). Nem terjed közvetlenül emberről emberre (kivéve vertikális átvitel).'
        },
        pathomechanism: {
          steps: [
            'Bejutás: A vírus a fertőzött törpeszúnyog vagy szúnyog csípésével jut a bőrbe és a hajszálerekbe.',
            'Szisztémás terjedés: A helyi replikációt követően a vírus a véráramba jut (viremia), ami a hirtelen fellépő, influenzaszerű szisztémás tüneteket okozza.',
            'Tropizmus és relapszus: A vírus fertőzi a vázizomzatot és az idegrendszert. A betegek mintegy 60%-ánál a tünetek átmeneti javulás után napokkal vagy hetekkel később visszatérnek (viremiás relapszus).',
            'Idegrendszeri érintettség: Átlépheti a vér-agy gátat, aszeptikus meningitist vagy encephalitist okozva. Várandósoknál átjuthat a méhlepényen, magzati halálozást vagy mikrokefáliát idézve elő.'
          ],
          virulence_factors: ['NsSM és NsSS nem-strukturális fehérjék (immunszuppresszió és interferon-gátlás)']
        },
        clinical: {
          incubation: '3-12 nap (leggyakrabban 4-8 nap)',
          onset: 'Hirtelen',
          symptoms: [
            { name: 'Lázas fázis', description: 'Hirtelen fellépő magas láz, hidegrázás, erős fejfájás, retroorbitalis (szem mögötti) fájdalom, fényérzékenység, kifejezett myalgia (izomfájdalom) és arthralgia (ízületi fájdalom).', severity: 'moderate' },
            { name: 'Bőrtünetek és GI panaszok', description: 'Makulopapuláris kiütések a törzsön és végtagokon, hányinger, hányás, esetenként enyhe vérzéses tünetek (orrvérzés, petechiák).', severity: 'moderate' },
            { name: 'Relapszus (Visszatérő fázis)', description: 'A betegek kb. 60%-ánál a tünetek az első javulás után 2-10 nappal azonos vagy enyhébb formában visszatérnek. Ez akár többször is megismétlődhet.', severity: 'moderate' },
            { name: 'Neurológiai és kongenitális szövődmények', description: 'Aszeptikus meningitis (tarkókötöttség, meningeális jelek) vagy encephalitis. Várandósoknál spontán vetélés, koraszülés vagy congenitalis mikrokefália alakulhat ki.', severity: 'severe' }
          ],
          physical_exam: [
            'Magas láz és conjunctivalis injectio (szemvörösség)',
            'Makulopapuláris kiütések',
            'Meningeális izgalmi jelek (tarkókötöttség aszeptikus meningitis esetén)',
            'Myalgia és ízületi nyomásérzékenység'
          ],
          complications: ['Aszeptikus meningitis', 'Encephalitis', 'Várandósoknál: spontán vetélés, magzati elhalás, congenitalis malformációk (pl. mikrokefália)', 'Hosszan tartó asthenia (gyengeség)']
        },
        diagnostics: {
          laboratory: [{ test: 'Laborvizsgálatok', finding: 'Leukopenia, lymphopenia, enyhe thrombocytopenia, emelkedett CRP és transzaminázok', interpretation: 'Nem specifikus vírusinfekciós kép' }],
          imaging: [{ modality: 'Koponya MRI/CT', finding: 'Meningealis halmozás aszeptikus meningitis esetén', significance: 'Neurológiai szövődmény gyanújakor' }],
          microbiology: [
            { test: 'RT-PCR (vér, szérum, liquor)', finding: 'OROV RNS pozitív', significance: 'A tünetek kezdetétől számított első 5-7 napban (akut fázis)' },
            { test: 'Szerológia (ELISA - szérum, liquor)', finding: 'Specifikus IgM és IgG antitestek', significance: 'A betegség 5-6. napjától mutatható ki. A liquorban lévő IgM aszeptikus meningitist igazol.' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [{ drug: 'Szupportív terápia', dose: '-', duration: '-', note: 'Ágynyugalom, bőséges folyadékpótlás és tüneti kezelés' }]
          },
          targeted: 'Nincs specifikus antivirális szer (kísérleti fázisban sincs jelenleg jóváhagyott gyógyszer).',
          supportive: ['Láz- és fájdalomcsillapítás (paracetamol javasolt)', 'NSAID-ok (pl. ibuprofen) és aspirin kerülendő a dengue-fertőzés kizárásáig (a vérzéses kockázat miatt)', 'Folyadék- és elektrolitpótlás'],
          prevention: ['Védekezés a törpeszúnyogok és szúnyogok ellen (szúnyogháló, rovarriasztók, hosszú ruházat)', 'A Culicoides midge-ek ellen a hagyományos szúnyoghálók kevésbé védenek kis méretük miatt (speciális sűrű háló szükséges)', 'Várandósoknak utazási korlátozás az érintett területekre', 'Nincs védőoltás']
        },
        prognosis: { mortality: 'Nagyon alacsony (<0.1%), de újabban ritka halálos eseteket is jelentettek. A magzati mortalitás vertikális átvitel esetén magas.', prognostic_scores: [], factors: 'Életkor, várandósság, immunstátusz, neurológiai érintettség' }
      }
    ]
  }
});
