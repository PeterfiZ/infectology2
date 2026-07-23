import { Category } from '../types';

export const parazitaHu: Category = {
  name: 'Parazita fertőzések',
  icon: '🪱',
  color: '#84cc16',
  diseases: [
    {
      id: 'malaria',
      name: 'Malária',
      pathogen: {
        type: 'Protozoon',
        name: '<i>Plasmodium falciparum, vivax, ovale, malariae, knowlesi</i>',
        gram: '-',
        shape: 'gyűrű / trophozoita / schizonta / gametocyta'
      },
      epidemiology: {
        incidence: 'Világszerte ~249 millió eset/év, >608,000 halálos kimenetel (WHO 2023)',
        risk_groups: ['Endémiás (trópusi/szubtrópusi) területre utazók', 'Csecsemők és kisgyermekek (<5 év)', 'Terhesek (placenta szekvesztráció!)', 'Immunszupprimáltak és aspleniás betegek'],
        seasonality: 'Esős évszakban fokozott (Anopheles szúnyogpopuláció növekedése)',
        transmission: 'Nőstény Anopheles szúnyog csípése; ritkán transzfúzió, tűszúrás, kongenitális (transzplacentáris)'
      },
      pathomechanism: {
        steps: [
          'A fertőzött Anopheles szúnyog csípése során a sporozoiták a véráramba jutnak, majd perceken belül a májsejtekbe (hepatocytákba) vándorolnak.',
          'Máj fázis (exoerythrocytás): A hepatocytákban a paraziták ivartalanul szaporodnak, schizontákat képezve (tünetmentes szak). A P. vivax és P. ovale hipnozoitákat (alvó májalakokat) hoz létre, amelyek hónapokkal/évekkel később relapszust okozhatnak.',
          'Vér fázis (erythrocytás): A májból kiszabaduló merozoiták a vörösvértesteket (VVT) fertőzik meg. A VVT-n belül gyűrű alakú trophozoitákká, majd schizontákká fejlődnek, végül a VVT ruptúrájával új merozoiták és gyulladási mediátorok szabadulnak fel.',
          'A VVT-k ciklikus szétesése (48-72 óránként fajtól függően) felelős a jellegzetes, szakaszos lázrohamokért a pirogén citokinek (TNF-alfa, IL-1, IL-6) hirtelen kiáramlása miatt.',
          'PfEMP1 és Cytoadherencia: A P. falciparum által fertőzött VVT-k felületén PfEMP1 (P. falciparum erythrocyte membrane protein 1) fejeződik ki, amely az endothel receptorokhoz (CD36, ICAM-1, EPCR) kötődik. Ez mikrovaskuláris elzáródást, szöveti anoxiát és szervi károsodást (cerebrális malária, ARDS, veseelégtelenség, metabolikus acidózis) vált ki.'
        ],
        virulence_factors: ['PfEMP1 fehérje (cytoadherencia és rosetting)', 'Antigén variáció (var gének)', 'Hemozoin pigment (fagocita gátlás)', 'Knob struktúrák a VVT felszínén']
      },
      clinical: {
        incubation: '7-30 nap (P. falciparum: 7-14 nap; P. vivax/ovale: 12-18 nap; P. malariae: 18-40 nap)',
        onset: 'Hirtelen, magas lázzal és hidegrázással',
        symptoms: [
          {
            name: 'Nem-komplikált malária (Prodroma és lázrohamok)',
            description: 'Kezdetben influenza-szerű prodroma (fejfájás, myalgia, arthralgia, hányinger, fáradékonyság). Ezt követik a klasszikus lázrohamok 3 fázisban: 1. Hideg fázis (kínzó hidegrázás, didergés, 15-60 perc). 2. Meleg fázis (magas láz 40-41°C, száraz meleg bőr, intense fejfájás, 2-6 óra). 3. Izzadási fázis (kifejezett izzadás, láz hirtelen esése, kimerültség, 2-4 óra). Ciklus: 48 óra (P. falciparum, vivax, ovale) vagy 72 óra (P. malariae).',
            severity: 'moderate'
          },
          {
            name: 'Súlyos malária (WHO kritériumok - főként P. falciparum vagy P. knowlesi)',
            description: 'Életveszélyes, több-szervi károsodással járó szövődmény: 1. Cerebrális malária (tudatzavar, GCS <11, kóma, görcsrohamok). 2. Súlyos anémia (Hb <7 g/dL vagy Htc <20%). 3. Akut veseelégtelenség (se kreatinin >265 µmol/L vagy oliguria/fekete-víz láz hemoglobinuriával). 4. ARDS / Tüdőödéma (tachypnoe, P/F hányados <300). 5. Metabolikus acidózis (bázisdeficit >8 mmol/L vagy laktát >5 mmol/L). 6. Hypoglykaemia (<2.2 mmol/L). 7. Shock / Hypotensio (systoles RR <90 Hgmm). 8. DIC / Spontán vérzések. 9. Hyperparasitaemia (>10% vagy >2% nem-immunkompetensnél).',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Magas láz, tachycardia, tachypnoe',
          'Splenomegalia (nagyon gyakori, puha/érzékeny akut fázisban)',
          'Hepatomegalia és enyhe icterus (hemolízis + májérintettség)',
          'Bőrsápadság (szekunder anémia)',
          'Neurológiai tünetek cerebrális maláriában: zavartság, nystagmus, fokozott reflexek, kóma'
        ],
        complications: ['Cerebrális malária', 'ARDS / Tüdőödéma', 'Akut tubularis necrosis / Veseelégtelenség', 'Fekete-víz láz (kifejezett intravasicularis hemolízis hemoglobinuriával)', 'Hypoglykaemia (kinin/artemisinin és parazita konszumpció miatt)', 'Súlyos anémia és DIC', 'Léprepedés (P. vivax-nál különösen)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Thrombocytopenia (<100 G/L az esetek >80%-ában), normocyter normochrom anémia, normál vagy alacsony fvs-szám', interpretation: 'Perifériás szekvesztráció és hemolízis' },
          { test: 'Bilirubin és LDH', finding: 'Indirekt hyperbilirubinaemia, jelentősen emelkedett LDH', interpretation: 'Intravascularis és extravascularis hemolízis' },
          { test: 'Vércukor', finding: 'Hypoglykaemia (<2.2 mmol/L)', interpretation: 'Súlyos malária jelzője; parazita glükóz-fogyasztása és inzulinfelszabadulás' },
          { test: 'Vesefunkció és Laktát', finding: 'Emelkedett kreatinin, karbamid, emelkedett serum laktát (>5 mmol/L)', interpretation: 'Szöveti hypoperfusio és vesekárosodás' }
        ],
        imaging: [
          { modality: 'Mellkas röntgen / CT', finding: 'Kétoldali diffúz interstitialis/alveolaris infiltrátumok', significance: 'ARDS / Tüdőödéma igazolása' },
          { modality: 'Koponya CT / MRI', finding: 'Diffúz agyödéma, stippled petechialis vérzések a fehérállományban', significance: 'Cerebrális malária, egyéb KIR kórképek kizárása' }
        ],
        microbiology: [
          { test: 'Vastagcsepp és Vékonykenet mikroszkópia (Giemsa-festés)', finding: 'Gyűrű/trophozoita/schizonta/gametocyta alakok VVT-ben; parazitaemia-százalék meghatározása', significance: 'GOLD STANDARD! Vastagcsepp: érzékenység (parazitakeresés); Vékonykenet: fajazonosítás és parazitaemia %.' },
          { test: 'Gyorsteszt (RDT - Rapid Diagnostic Test)', finding: 'HRP-2 (P. falciparum) vagy pLDH / Aldolase (Pan-species) antigén pozitivitás', significance: 'Gyors (15 perc), de HRP2/3 gygén-deléció esetén P. falciparum álnegatív lehet!' },
          { test: 'PCR', finding: 'Plasmodium faji RNS/DNS kimutatás', significance: 'Legmagasabb érzékenység alacsony parazitaemiánál és kevert fertőzéseknél' }
        ]
      },
      differential: [
        { disease: 'Dengue-láz / Chikungunya / Zika', distinguishing: 'Retrobulbaris fájdalom, kiütés, hiányzik a ciklusonkénti láz, szerológia/PCR' },
        { disease: 'Tífusz (Salmonella Typhi)', distinguishing: 'Relatív bradycardia, roseolák, széklet/vértenyésztés' },
        { disease: 'Leptospirosis', distinguishing: 'Conjunctivalis suffusio, kifejezett calf myalgia, vese/máj elégtelenség, szerológia' },
        { disease: 'Sepsis / Meningitis', distinguishing: 'Liquor lelet (pleocytosis), prokálcitonin emelkedés, vértenyésztés' }
      ],
      therapy: {
        guidelines: ['WHO Guidelines for malaria (2023/2024 update)', 'CDC Malaria Treatment Guidelines'],
        empirical: {
          outpatient: [
            { drug: 'Artemether + Lumefantrine (Coartem)', dose: 'PO 20/120mg tabletta súlyalapon (felnőtt: 4 tab 0h, 8h, 24h, 36h, 48h, 60h - összesen 6 dózis)', duration: '3 nap', note: 'Első vonalbeli ACT nem-komplikált P. falciparum esetén. Zsíros étellel kell bevenni!' },
            { drug: 'Dihydroartemisinin + Piperaquine (DHA-PPQ)', dose: 'PO naponta 1x súlyalapú dózis', duration: '3 nap', note: 'Alternatív első vonalbeli ACT.' },
            { drug: 'Atovaquone + Proguanil (Malarone)', dose: 'PO 4 felnőtt tabletta (250/100mg) naponta 1x', duration: '3 nap', note: 'Alternatíva, ha ACT nem áll rendelkezésre.' },
            { drug: 'Chloroquin', dose: 'PO 600mg bázis, majd 300mg 6h, 24h, 48h múlva', duration: '3 nap', note: 'KIZÁRÓLAG klorokvin-érzékeny P. vivax, P. ovale, P. malariae esetén!' }
          ],
          inpatient: [
            { drug: 'Artesunate IV', dose: '2.4 mg/kg IV az alábbi időpontokban: 0h, 12h, 24h, majd 24 óránként naponta 1x', duration: 'Minimálisan 24 óra (legalább 3 dózis), amíg a beteg nem tud per os gyógyszert nyelni', note: 'SÚLYOS MALÁRIA ELSŐ VÁLASZTÁSÁUL SZOLGÁLÓ SZER (bármely faj, gyermek, felnőtt, terhesség BÁRMELY trimesztere!). Ezt követően TELJES 3 NAPOS PER OS ACT KÚRA KÖTELEZŐ!' },
            { drug: 'Kinin-dihydrochlorid IV', dose: 'Telítő dózis: 20 mg/kg IV 4 óra alatt, majd 10 mg/kg IV 8 óránként (infúzióban)', duration: 'Artesunate hiányában', note: 'Másodvonalbeli szer. KÖTELEZŐ a folyamatos EKG és vércukor monitorozás (arrhythmia és hypoglykaemia veszély!)' }
          ]
        },
        targeted: 'Radikális kúra (Hypnozoitocidium) P. vivax és P. ovale esetén a májalakok kiirtására: Primaquin 0.25-0.5 mg/kg/nap PO 14 napig OR Tafenoquin 300 mg PO egyszeri dózis (≥16 év felett). KÖTELEZŐ Kezelés előtti G6PD enzimaktivitás mérés! (G6PD hiányban súlyos hemolízist vált ki).',
        supportive: [
          'Óvatos folyadékpótlás (Agyi és tüdőödéma veszélye miatt túltöltés kerülendő!)',
          'Szoros vércukor-monitorozás (Hypoglykaemia korai felismerése és 20% Dextrose IV)',
          'Vörösvértest transzfúzió súlyos anémiában (Hb <7 g/dL)',
          'Folyamatos vesepótló kezelés (CVVH / Hemodialízis) anuriás veseelégtelenségben',
          'Poszt-Artesunate késleltetett hemolízis (PADH) szűrése a 1-4. héten'
        ],
        prevention: [
          'Kemoprofilaxis utazóknak: Atovaquon-Proguanil (naponta 1x), Doxycyclin (naponta 100mg), Mefloquin (hetente 1x), Tafenoquin',
          'Vektor elleni védelem: Tartós rovarirtóval kezelt szúnyogháló (LLIN), DEET rovarriasztó (30-50%), hosszú ruházat',
          'Malária elleni védőoltás: RTS,S/AS01 (Mosquirix) és R21/Matrix-M vakcina gyermekeknek magas endémiájú afrikai régiókban'
        ]
      },
      guidelines: {
        diagnosis: [
          'Minden lázas betegnél, aki az elmúlt 12 hónapban endémiás trópusi/szubtrópusi területen járt, a maláriát SÜRGŐSSÉGGEL ki kell zárni!',
          'Mikroszkópos vastagcsepp és vékonykenet Giemsa-festéssel a diagnózis alapköve. Negatív lelet esetén 12-24 órán belül ismétlés szükséges.'
        ],
        treatment_indications: [
          'Nem-komplikált P. falciparum: 3 napos Artemisinin-alapú Kombinációs Terápia (ACT) + 1. napon egyetlen alacsony dózisú Primaquin (0.25 mg/kg) a gametocyták elpusztítására.',
          'Súlyos malária: Azonnali IV Artesunate (legalább 24 órán át, 3 dózis), majd teljes oralis ACT kúra.'
        ],
        special_populations: [
          'Terhesség 1. trimeszter: Artemether-Lumefantrine biztonságos és ajánlott a WHO 2023-as legújabb irányelve szerint (vagy Kinin + Clindamycin).',
          'Terhesség 2-3. trimeszter: Standard per os ACT terápia.',
          'Súlyos malária terhességben: IV Artesunate az elsőként választandó szer mindhárom trimeszterben (ignorálni kell a korábbi ellenjavallatokat, az anya élete az első!).'
        ]
      },
      prognosis: {
        mortality: 'Nem-komplikált, korán kezelt malária: <0.1%; Súlyos malária megfelelő IV Artesunate kezelés mellett is 10-20%; kezeletlenül közel 100%',
        prognostic_scores: ['WHO Severe Malaria Criteria', 'Glasgow Coma Scale (GCS)'],
        factors: 'Súlyos malária jelenléte, kezelés megkezdésének ideje, P. falciparum parazitaemia %, terhesség, idős kor'
      },
      gallery: [
        {
          url: 'https://www.cdc.gov/dpdx/malaria/modules/malaria_LifeCycle.gif?_=05237',
          caption: 'Plasmodium fajok komplex életciklusa (CDC/DPDx)',
          type: 'Életciklus ábra'
        },
        {
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plasmodium_falciparum_01.jpg',
          caption: 'Plasmodium falciparum finanszív gyűrű alakjai vékonykenetben.',
          type: 'Mikroszkópia'
        },
        {
          url: 'https://commons.wikimedia.org/wiki/Special:FilePath/Plasmodium_falciparum_02.jpg',
          caption: 'Plasmodium falciparum kifli/félhold alakú gametocytája vékonykenetben.',
          type: 'Mikroszkópia'
        }
      ]
    },
    {
      id: 'toxoplasmosis',
      name: 'Toxoplasmosis',
      pathogen: {
        type: 'Protozoon',
        name: '<i>Toxoplasma gondii</i>',
        gram: '-',
        shape: 'intracelluláris (tachyzoita / bradyzoita ciszta / oocysta)'
      },
      epidemiology: {
        incidence: 'A világnépesség 30-50%-a szeropozitív (latens szöveti cisztahordozó)',
        risk_groups: ['Immunszupprimáltak (HIV CD4 <100/µL, transzplantáltak)', 'Seronegativ terhesek (magzati transzmisszió veszélye)', 'Macskatartók, nyers húst fogyasztók'],
        seasonality: 'Nincs',
        transmission: '1. Nyers/félig nyers húsban lévő szöveti ciszták (bradyzoiták). 2. Macskaürülékkel kontaminált talaj/zöldség/víz (oocysták). 3. Vertikális (transzplacentáris). 4. Transzplantáció/Transzfúzió'
      },
      pathomechanism: {
        steps: [
          'Fertőző alakok (oocysták vagy szöveti ciszták) lenyelése a tápcsatornába.',
          'A bélben kiszabaduló paraziták tachyzoitákká (gyorsan osztódó alak) alakulnak, átfúrják a bélhámot, majd a vér- és nyirokkeringéssel szóródnak az egész szervezetben.',
          'Ép immunrendszer esetén a sejtközvetített immunitás (Th1, IFN-gamma, CD8+ T-sejtek) hatására a tachyzoiták lassan osztódó bradyzoitákká alakulnak, amelyek élethosszig tartó szöveti cisztákat képeznek az agyban, izomzatban, szívben és retinában (latens fertőzés).',
          'Súlyos immunszuppresszió esetén (pl. AIDS CD4 <100, szteroid, biológiai terápia) a ciszták megrepednek, a bradyzoiták visszaalakulnak tachyzoitákká, ami nekrotizáló szöveti pusztuláshoz (Toxoplasma encephalitis, myocarditis, pneumonitis) vezet.',
          'Primer terhességi fertőzésben a tachyzoiták átjutnak a placentán, fokozódó magzati károsodást okozva a terhességi kor előrehaladtával.'
        ],
        virulence_factors: ['Intracelluláris túlélés parasitophor vacuolában', 'Gátolt fago-lizoszóma fúzió', 'Ciszta képzési képesség']
      },
      clinical: {
        incubation: '5-23 nap',
        onset: 'Lassú, tünetszegény vagy fokozatosan súlyosbodó',
        symptoms: [
          {
            name: 'Immunkompetens forma (Lymphadenopathia)',
            description: '80-90%-ban teljesen tünetmentes. Tünetek esetén mononucleosis-szerű kép: fájdalmatlan, mérsékelten tömött nyaki és occipitalis nyirokcsomó-duzzanat, subfebrilitas, fáradékonyság, myalgia.',
            severity: 'mild'
          },
          {
            name: 'Cerebrális toxoplasmosis (Toxoplasma Encephalitis - TE)',
            description: 'Advanced HIV (CD4 <100/µL) vagy transzplantáció utáni leggyakoribb opportunista KIR fertőzés. Tünetek: fokalizált fejfájás, láz, zavartság, görcsrohamok, fokális neurológiai kiesési tünetek (hemiparesis, aphasia, cranialis paresis).',
            severity: 'severe'
          },
          {
            name: 'Okuláris toxoplasmosis (Chorioretinitis)',
            description: 'A nekrotizáló retinitis leggyakoribb oka. Homályos látás, scotoma, úszkáló homályok, szemfájdalom. Szemfenéken "fényszóró a ködben" (headlight in fog) jellegű exudatív retinitis góc látható üvegtesti homállyal.',
            severity: 'moderate'
          },
          {
            name: 'Veleszületett (Congenitalis) toxoplasmosis',
            description: 'A terhesség alatti primer anyai fertőzés következménye. Klasszikus Sabin-tetrád: 1. Hydrocephalus / Microcephalia. 2. Intracranialis meszesedések. 3. Chorioretinitis (kétoldali). 4. Görcsrohamok / Encephalopathia. Súlyos maradandó szellemi és látáskárosodást okoz.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Fájdalmatlan cervicalis és occipitalis lymphadenopathia',
          'Fokális neurológiai jelek agyi formában (paresis, ataxia)',
          'Szemfenéki vizsgálat: éles szélű sárgásfehér retinitis góc szomszédos pigmentált heggel'
        ],
        complications: ['Toxoplasma encephalitis', 'Permanent vakság', 'Pneumonitis', 'Myocarditis / Heart failure', 'Hydrocephalus és magzati elhalás']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Atypusos lymphocytosis', interpretation: 'Nem-specifikus immunválasz' },
          { test: 'CD4 szám (HIV)', finding: '<100/µL', interpretation: 'Agyi reaktiváció magas kockázata' }
        ],
        imaging: [
          { modality: 'Koponya MRI (kontrasztos)', finding: 'Többszörös, gyűrűszerűen kontrasztanyagot halmozó gócok (ring-enhancing lesions) kifejezett perilesionalis agyödémával a törzsdúcokban és kéreg-velő határon', significance: 'Cerebrális toxoplasmosis patognomikus képe' },
          { modality: 'Koponya CT (Újszülött)', finding: 'Diffúz periventricularis intracranialis meszesedések, hydrocephalus', significance: 'Congenitalis toxoplasmosis' }
        ],
        microbiology: [
          { test: 'Szerológia (IgM, IgG, IgG Aviditás)', finding: 'IgM (+) és alacsony IgG aviditás = friss (akut) fertőzés; Magas IgG aviditás = >4 hónapnál régebbi átvészelt fertőzés', significance: 'Terhességi szűrésnél elengedhetetlen az fertőzés idejének tisztázására!' },
          { test: 'PCR (Liquor, Magzatvíz, Vér, BAL)', finding: 'Toxoplasma gondii DNS kimutatása', significance: 'Amnionfolyadék PCR (>18. terhességi héten) a magzati fertőzés igazolására; Liquor PCR agyi formában.' }
        ]
      },
      differential: [
        { disease: 'KIR Lymphoma (AIDS-ben)', distinguishing: 'Gyakran szoliter, periventricularis góc, EBV PCR pozitív a liquorban, Thallium-201 SPECT / PET halmozás' },
        { disease: 'EBV / CMV Mononucleosis', distinguishing: 'Szerológia, kifejezett pharyngitis és splenomegalia' },
        { disease: 'Macskakarmolási betegség (Bartonella)', distinguishing: 'Egyoldali suppurativ lymphadenopathy inokulációs primér dermatitisszel' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Nincs', dose: '-', duration: '-', note: 'Immunkompetens, nem-terhes, panaszmentes beteg kezelést nem igényel!' }
          ],
          inpatient: [
            { drug: 'Pyrimethamin + Sulfadiazine + Leucovorin', dose: 'Pyrimethamin: 100mg telítő, majd 50-75mg/nap PO; Sulfadiazine: 4x1-1.5g/nap PO; Leucovorin (Folinsav): 10-25mg/nap PO', duration: '6 hét (akut szakaszt követően szekunder profilaxis!)', note: 'Standard első vonalbeli terápia. Leucovorin KÖTELEZŐ a csontvelő-depresszió védelmére!' },
            { drug: 'Trimethoprim + Sulfamethoxazol (TMP-SMX)', dose: '5 mg/kg TMP IV/PO 12 óránként', duration: '6 hét', note: 'Egyenértékű, könnyen hozzáférhető alternatíva.' }
          ]
        },
        targeted: 'Terhesség: Spiramycin 3x1g/nap PO (ha a magzat NEM fertőzött a magzatvíz PCR alapján, <18. hét). Pyrimethamin + Sulfadiazine + Leucovorin (ha a magzatvíz PCR Pozitív vagy fertőzés a ≥18. héten történt).',
        supportive: ['Dexamethason IV mass-effect és agyödéma esetén', 'Anticonvulsiv szerek görcsrohamoknál', 'Folsav/Leucovorin pótlás'],
        prevention: ['Húsok alapos átsütése (>67°C)', 'Macskaalom napi ürítése (más által) és kézmosás', 'Terheseknek nyers hús és macskaalom kerülése', 'Elsődleges profilaxis HIV-ben (CD4 <100/µL és IgG+): TMP-SMX 1 DS tab naponta']
      },
      prognosis: {
        mortality: 'Immunkompetens: kiváló; AIDS/TE: kezelés nélkül halálos, kezelt esetben is 10-15% mortalitás',
        prognostic_scores: ['Nincs'],
        factors: 'Immunstátusz (CD4 szám), kezdeti neurológiai károsodás, korai terápia'
      }
    },
    {
      id: 'giardiasis',
      name: 'Giardiasis',
      pathogen: {
        type: 'Protozoon',
        name: '<i>Giardia duodenalis (lamblia / intestinalis)</i>',
        gram: '-',
        shape: 'ostoros trophozoita (flakon/mókusarc) és 4-magvú ellipszoid ciszta'
      },
      epidemiology: {
        incidence: 'Leggyakoribb intestinalis protozoon fertőzés világszerte és Magyarországon is',
        risk_groups: ['Kisgyermekek és bölcsődések/óvodások', 'Túrázók/Kempingezők (kezeletlen felszíni vízfogyasztás)', 'Nemzetközi utazók', 'IgA hiányos betegek'],
        seasonality: 'Nyár végén és ősz elején gyakoribb',
        transmission: 'Feko-orális: 1. Cisztával szennyezett ivóvíz/felszíni víz. 2. Étel. 3. Emberről emberre (gyermekközösségek, MSM)'
      },
      pathomechanism: {
        steps: [
          'A fertőzés a környezetben ellenálló ciszták lenyelésével történik (alacsony fertőző dózis: 10-25 ciszta elegendő!).',
          'A gyomorsav hatására a duodenumban excystatio zajlik, kiszabadulnak a trophozoiták.',
          'A trophozoiták a duodenum és jejunum nyálkahártyájához tapadnak a ventralis tapadókorongjukkal.',
          'Nem hatolnak be a szövetekbe (nem-invazív!), de a kefeszegély kefefermentjeit (laktáz, szacharóz) és a boholy-struktúrát károsítják (boholy-atrophia, nyálkahártya-gyulladás).',
          'Ennek következtében tápanyag- és zsírfelszívódási zavar (malabsorptio, steatorrhea) és ozmotikus/szekréciós hasmenés alakul ki.'
        ],
        virulence_factors: ['Ventralis tapadókorong (adhezió)', 'VSP (Variant Surface Proteins - antigén variáció)', 'IgA proteázok']
      },
      clinical: {
        incubation: '1-3 hét (átlag 7-14 nap)',
        onset: 'Fokozatos vagy akut',
        symptoms: [
          {
            name: 'Akut Giardiasis',
            description: 'Bőséges, vizes, bűzös, gázos hasmenés, kísérő kifejezett haspuffadással, görcsös felhasi fájdalommal, kénes böfögéssel (záptojás szagú), hányingerrel és étvágytalansággal. Láz ritka.',
            severity: 'moderate'
          },
          {
            name: 'Krónikus Giardiasis és Malabsorptio',
            description: 'Hetekig-hónapokig elhúzódó emésztési zavar, visszatérő zsíros, lágy, úszó széklet (steatorrhea), jelentős súlyvesztés, folsav- és B12-vitamin hiány, gyermekeknél fejlődésbeli elmaradás (failure to thrive). Utóhatásként poszt-infekciós Irritábilis Bél Szindróma (IBS) és laktóz-intolerancia maradhat fenn.',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Diffúz felhasi érzékenység',
          'Kifejezett meteorizmus (haspuffadás) és élénk bélhangok',
          'Súlyvesztés és kiszáradás jelei'
        ],
        complications: ['Súlyos malabsorptio és súlyvesztés', 'Szekunder laktóz-intolerancia', 'Poszt-infectiosus IBS', 'Cholecystitis / Cholangitis (ritka)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Eosinophilia HIÁNYZIK (nem invazív parazita!)', interpretation: 'Segít elkülöníteni az invazív helminth fertőzésektől' }
        ],
        microbiology: [
          { test: 'Széklet antigén kimutatás (ELISA / ICT gyorsteszt)', finding: 'Giardia duodenalis antigén pozitivitás', significance: 'MAGAS ÉRZÉKENYSÉG (>95%)! Első vonalbeli teszt.' },
          { test: 'Széklet mikroszkópia (3 külön napon vett minta)', finding: 'Ciszták (formált székletben) vagy mozgó trophozoiták (híg székletben)', significance: 'Klasszikus módszer, de a szakaszos ürülés miatt 3 minta szükséges.' },
          { test: 'Multiplex GI PCR', finding: 'Giardia DNS pozitivitás', significance: 'Kiváló érzékenység és specifikusság' }
        ]
      },
      differential: [
        { disease: 'Cryptosporidiosis', distinguishing: 'Vizesebb hasmenés, acid-fast festés/PCR' },
        { disease: 'Celiakia (Liszterzékenység)', distinguishing: 'Szerológia (anti-tTG IgA), vékonybél biopszia' },
        { disease: 'Laktóz-intolerancia', distinguishing: 'Anamnézis, H2 kilégzési teszt, széklet antigén negatív' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Metronidazol', dose: 'PO 3x250mg vagy 3x500mg', duration: '5-7 nap', note: 'Standard terápia. Alkohol fogyasztása szigorúan TILOS (disulfiram-szerű reakció!)' },
            { drug: 'Tinidazol', dose: 'PO 2g egyszeri dózis', duration: '1 nap', note: 'Nagy hatékonyságú, kényelmes egyetlen adag.' },
            { drug: 'Nitazoxanid', dose: 'PO 2x500mg', duration: '3 nap', note: 'Kiváló alternatíva (gyermekeknek szirup formájában is).' },
            { drug: 'Albendazol', dose: 'PO 400mg naponta 1x', duration: '5 nap', note: 'Alternatíva májkárosodás vagy metronidazol intolernacia esetén.' }
          ]
        },
        targeted: 'Metronidazol-rezisztens esetekben: Metronidazol + Quinacrin vagy Metronidazol + Albendazol kombináció. Terhességben (1. trimeszter): Paromomycin PO (nem szívódik fel a bélből!).',
        supportive: ['Folyadék- és elektrolitpótlás', 'Laktózmentes diéta a gyógyulást követő 2-4 hétben'],
        prevention: ['Ivóvíz forralása (legalább 1 percig) túrázáskor', 'Alapos kézmosás szappannal', 'Uszodavíz lenyelésének kerülése']
      },
      prognosis: {
        mortality: 'Kiváló (0%); megfelelő kezeléssel teljes gyógyulás érhető el',
        prognostic_scores: ['Nincs'],
        factors: 'Súlyos immundefektus (IgA hiány), kezelési compliance'
      }
    },
    {
      id: 'amoebiasis',
      name: 'Amőbiázis (Amőbás Dysenteria és Májtályog)',
      pathogen: {
        type: 'Protozoon',
        name: '<i>Entamoeba histolytica</i>',
        gram: '-',
        shape: 'invazív trophozoita (bekebelezett VVT-kel) és 4-magvú gömbölyű ciszta'
      },
      epidemiology: {
        incidence: 'Világszerte ~50 millió invazív eset/év, 40,000-100,000 halálozás (főleg trópusokon)',
        risk_groups: ['Endémiás trópusi/szubtrópusi területekre utazók', 'Bevándorlók endémiás zónákból', 'MSM (férfiakkal szexuáló férfiak)', 'Zárt intézeti gondozottak'],
        seasonality: 'Meleg, párás évszakban fokozott',
        transmission: 'Feko-orális: Cisztával szennyezett ivóvíz vagy étel fogyasztása; orális-anális szexuális érintkezés'
      },
      pathomechanism: {
        steps: [
          'Ciszták lenyelése -> kiszabadulás a vékonybélben -> trophozoiták elszaporodása a vastagbélben.',
          'Adhézió és Invázió: A trophozoiták Gal/GalNAc lectin segítségével a colonoctyákhoz kötődnek, majd amoebaporin és cisztein-proteázok termelésével elpusztítják a hámsejteket és behatolnak a submucosába.',
          'Fekélyképződés: A submucosában laterálisan terjedve jellegzetes, keskeny nyakú, széles alapú "lombik alakú fekélyeket" (flask-shaped ulcers) hoznak létre.',
          'Hematogén szóródás (Amőbás Májtályog - ALA): A trophozoiták a vena portae keringéssel a májba jutnak, ahol lokális avascularis liquefakciós nekrózist okoznak. A tályogcsarnok sűrű, barna, szagtalan, "ajókapaszta-szerű" (anchovy paste) elfolyósodott májszövetet és elhalt sejteket tartalmaz (NEM valódi genny!).'
        ],
        virulence_factors: ['Gal/GalNAc lectin (adhezió)', 'Cisztein proteázok (szöveti destrukció)', 'Amoebaporinok (pore-forming toxinok)']
      },
      clinical: {
        incubation: '1-4 hét (májtályognál hónapok-évek is lehetnek)',
        onset: 'Fokozatosan súlyosbodó',
        symptoms: [
          {
            name: 'Amőbás Dysenteria (Intestinaliss amőbiázis)',
            description: 'Görcsös hasi fájdalom, tenesmus, kis volumenű, kifejezetten véres-nyákos székletürítés (akár 10-20x/nap). Ellentétben a bakteriális dysenteriával, a LÁZ RITKA vagy csak mérsékelt!',
            severity: 'severe'
          },
          {
            name: 'Amőbás Májtályog (Amoebic Liver Abscess - ALA)',
            description: 'Hirtelen vagy fokozatosan fellépő magas láz, didergés, kifejezett jobb bordaív alatti/felhasi fájdalom, amely a jobb vállba sugározhat. Éjszakai izzadás, anorexia, súlyvesztés. Bélrendszeri tünetek az esetek >50%-ában hiányoznak!',
            severity: 'severe'
          },
          {
            name: 'Amoeboma és Peritonitis',
            description: 'Amoeboma: A cecumban vagy colon ascendensben kialakuló csonkszerű, gyulladásos szövettömög, amely colon carcinomát utánozhat. Belső fekély perforációja acut diffúz peritonitist okoz.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Vastagbél lefutása mentén kifejezett hasi érzékenység',
          'Májtályognál: Jobb bordaív alatti nyomásérzékenység, hepatomegalia, bordaerőltetési fájdalom',
          'Icterus ritka (csak masszív tályognál vagy epeúti kompressziónál)'
        ],
        complications: ['Májtályog áttörése a pleura-/pericardium-üregbe vagy peritoneumba', 'Fulmináns nekrotizáló colitis és toxicus megacolon', 'Amoeboma (bélobstrukció)', 'Agytályog (hematogén szóródás)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Kifejezett fvs-szám emelkedés (leukocytosis) balra tolt vérképpel májtályog esetén. Eosinophilia NINCS!', interpretation: 'Szöveti nekrózis és gyulladás' },
          { test: 'Májfunkció', finding: 'Emelkedett ALP és GGT, enyhe transzamináz emelkedés', interpretation: 'Májparenchymathal károsodás' }
        ],
        imaging: [
          { modality: 'Hasi Ultrahang / CT / MRI', finding: 'Májtályog: Leggyakrabban szoliter, kerek, jól határolt, hypoechogén/hypodens góc a jobb májlebeny posterior-superior szegmensében', significance: 'Diagnosztikus máj-érintettségben' },
          { modality: 'Colonoscopia', finding: 'Jellegzetes "lombik alakú" fekélyek normál nyálkahártya-szigetekkel elválasztva', significance: 'Bélformában (Biopszia a fekély széléről!)' }
        ],
        microbiology: [
          { test: 'Széklet Antigén ELISA / PCR', finding: 'Entamoeba histolytica specifikus antigén/DNS pozitivity', significance: 'ELENGEDHETETLEN a nem-patogén Entamoeba dispar-tól való elkülönítésre!' },
          { test: 'Szerológia (ELISA / IHA)', finding: 'Pozitív anti-amoeba ellenanyagok', significance: 'A májtályogos betegek >95%-ában POZITÍV! Szöveti inváziót igazol.' }
        ]
      },
      differential: [
        { disease: 'Bakteriális Dysenteria (Shigella, EIEC, Campylobacter)', distinguishing: 'Kifejezett magas láz, fvs a székletben, pozitív széklettenyésztés' },
        { disease: 'Pyogén (Bakteriális) Májtályog', distinguishing: 'Idősebb kor, epeúti/hasi anamnézis, többszörös tályogok, szerológia negatív' },
        { disease: 'Colitis Ulcerosa', distinguishing: 'Folyamatos érintettség, fekély széli biopszia és széklet PCR negatív' }
      ],
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Metronidazol IV/PO', dose: '3x750mg PO vagy 3x500mg IV', duration: '7-10 nap', note: 'KÉTLÉPCSŐS KEZELÉS 1. LÉPÉSE (Szöveti amőbocid szer a vastagbélfalban és májban lévő parazitákra).' },
            { drug: 'Tinidazol PO', dose: '2g naponta 1x', duration: '3-5 nap', note: 'Alternatív szöveti amőbocid szer.' }
          ]
        },
        targeted: 'KÉTLÉPCSŐS KEZELÉS 2. LÉPÉSE (KÖTELEZŐ!): A szöveti kezelést követően LUMINÁLIS AMŐBOCID SZER ADÁSA KÖTELEZŐ a bélüregben maradt ciszták kiirtására és a relapszus megelőzésére: Paromomycin 3x500mg PO 7 napig OR Diloxanid-furoat 3x500mg PO 10 napig (még tünetmentes hordozóknál is!).',
        supportive: ['Elektrolit- és folyadékpótlás', 'Tályog aspiráció/drenázs KIZÁRÓLAG akkut ruptúra veszélye, >5cm méret, bal májlebeny lokalizáció vagy 72 órás Metronidazol sikertelenség esetén szükséges!'],
        prevention: ['Biztonságos ivóvíz és forralt/palackozott italok fogyasztása trópusokon', 'Nyers zöldségek/gyümölcsök kerülése', 'Megfelelő higiénia szexuális érintkezés során']
      },
      prognosis: {
        mortality: 'Komplikációmentes intestinalis: <1%; Szövődményes májtályog/peritonitis: 5-15%',
        prognostic_scores: ['Nincs'],
        factors: 'Tályog megrepedése, szervperforáció, kezelés késlekedése'
      }
    },
    {
      id: 'cryptosporidiosis',
      name: 'Cryptosporidiosis',
      pathogen: {
        type: 'Protozoon',
        name: '<i>Cryptosporidium hominis, Cryptosporidium parvum</i>',
        gram: '-',
        shape: 'kicsi (4-6 µm) gömbölyű oocysta'
      },
      epidemiology: {
        incidence: 'Világszerte elterjedt; a vízközvetített járványok egyik vezető oka',
        risk_groups: ['HIV/AIDS betegek (kiváltképp CD4 <100/µL)', 'Kisgyermekek és gondozóik', 'Uszodalátogatók / Vízisportolók', 'Állatgondozók (borjú kontaktus - C. parvum)'],
        seasonality: 'Nyáron és kora ősszel halmozódik',
        transmission: 'Feko-orális: 1. KLÓRREZISZTENS oocisztákkal szennyezett uszodavíz/ivóvíz. 2. Zoonotikus (szarvasmarha). 3. Emberről emberre'
      },
      pathomechanism: {
        steps: [
          'Sporulált oociszták lenyelése -> kiszabadulás a bélben.',
          'A sporozoiták az enterocyták mikrovillus szegélyéhez kötődnek.',
          'Intracelluláris, de EXTRA-CYTOPLASMATICUS lokalizáció: A parazita a gazdasejt sejthártyája alatt, de a cytoplazmán kívül helyezkedik el egy védő vakuólában.',
          'Bolyhatrophia, sejtelhalás és a nátrium-felszívódás gátlása alakul ki.',
          'Eredmény: Bőséges, profúz vizes ozmotikus és szekréciós hasmenés.'
        ],
        virulence_factors: ['Klór-rezisztens oocysta fal', 'Intracelluláris-extracitoplazmatikus fészek', 'Autoinfekciós ciklus vékony falú oocisztákkal']
      },
      clinical: {
        incubation: '2-10 nap (átlag 7 nap)',
        onset: 'Hirtelen',
        symptoms: [
          {
            name: 'Immunkompetens forma',
            description: 'Bőséges vizes hasmenés, görcsös hasi fájdalom, hányinger, alacsony láz. Önkorlátozó lefolyású, általában 1-2 hét alatt magától gyógyul.',
            severity: 'moderate'
          },
          {
            name: 'Immunszupprimált forma (Advanced HIV / CD4 <100/µL)',
            description: 'Kínzó, krónikus, csillapíthatatlan, profúz vizes hasmenés (akár 10-20 liter/nap!), amely súlyos dehidrációhoz, elektrolit-zavarokhoz, Wasting-szindrómához és malabsorptióhoz vezet. Extraintestinalisan acalculous cholecystitist és sclerosáló cholangitist okozhat.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Kifejezett kiszáradási jelek (bőrturgor csökkenés, száraz nyálkahártyák)',
          'Diffúz hasi érzékenység'
        ],
        complications: ['Súlyos dehidráció és hypovolaemiás shock', 'Sclerotisáló cholangitis és acalculous cholecystitis HIV-ben', 'Wasting szindróma']
      },
      diagnostics: {
        laboratory: [
          { test: 'Elektrolitok', finding: 'Hypokalaemia, hyponatraemia, metabolikus acidózis', interpretation: 'Bőséges székletvesztés' }
        ],
        microbiology: [
          { test: 'Módosított Ziehl-Neelsen (Acid-fast) festés székletből', finding: 'Rózsaszín/piros kerek oociszták világos háttér előtt', significance: 'Klasszikus diagnosztikus módszer' },
          { test: 'Széklet Antigén (ELISA / ICT gyorsteszt)', finding: 'Cryptosporidium antigén pozitivity', significance: 'Gyors és érzékeny' },
          { test: 'Multiplex GI PCR', finding: 'Cryptosporidium DNS pozitivity', significance: 'Legmagasabb érzékenység' }
        ]
      },
      differential: [
        { disease: 'Cystoisosporiasis / Cyclosporiasis', distinguishing: 'Acid-fast festéssel nagyobb oociszták, TMP-SMX-re reagálnak!' },
        { disease: 'Microsporidiosis', distinguishing: 'Kisebb spórák (1-2 µm), különleges festést (ChromaTrop) igényel' },
        { disease: 'Norovírus / Rotavírus', distinguishing: 'Rövidebb lefolyás, PCR' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Nitazoxanid PO', dose: '2x500mg PO', duration: '3 nap (immunkompetensnél)', note: 'Első választandó szer immunkompetens egyéneknél.' }
          ]
        },
        targeted: 'HIV/AIDS betegeknél: AZ ANTIRETROVIRÁLIS TERÁPIA (ART) AZONNALI ELKEZDÉSE VAGY OPTIMALIZÁLÁSA A LEGFONTOSABB TERÁPIÁS LÉPÉS! A CD4 szám >100/µL fölé emelése az egyetlen végleges gyógyulást hozó tényező. Mellette Nitazoxanid 2x500-1000mg PO hosszabb ideig adható.',
        supportive: ['Agresszív orális vagy IV rehidráció (WHO ORS / Ringer-laktát)', 'Elektrolitok pótlása', 'Antidiarrhoeás szerek (Loperamid) óvatosan adhatók'],
        prevention: ['Uszodavíz nyelésének kerülése', 'Klórozás NEM elég! Vízforralás vagy 1 µm-es szűrő használata szükséges fertőzött víz esetén']
      },
      prognosis: {
        mortality: 'Immunkompetens: 0%; Advanced HIV-ben ART nélkül magas mortalitás',
        prognostic_scores: ['Nincs'],
        factors: 'CD4 sejtszám, ART elindításának ideje'
      }
    },
    {
      id: 'leishmaniasis',
      name: 'Leishmaniasis (Visceralis [Kala-azar] és Cutan)',
      pathogen: {
        type: 'Protozoon',
        name: '<i>Leishmania donovani, L. infantum</i> (Visceralis); <i>L. tropica, L. major, L. braziliensis</i> (Cutan)',
        gram: '-',
        shape: 'promastigota (ostoros, vektorból) és amastigota (intracelluláris phagocytákban)'
      },
      epidemiology: {
        incidence: 'Visceralis: ~50,000-90,000 új eset/év; Cutan: >1 millió eset/év (Mediterráneum, K-Európa, Közel-Kelet, D-Amerika)',
        risk_groups: ['Endémiás területeken élők/utazók', 'Kutyatartók endémiás zónában (L. infantum rezervoár)', 'HIV fertőzöttek'],
        seasonality: 'Lepkeszúnyogok aktivitási időszakában (meleg hónapok)',
        transmission: 'Nőstény lepkeszúnyogok (Phlebotomus / Lutzomyia) csípése'
      },
      pathomechanism: {
        steps: [
          'A fertőzött lepkeszúnyog csípése során promastigoták jutnak a bőrbe.',
          'A promastigotákat a makrofágok bekebelezik, ahol amastigotákká (ostor nélküli forma, Leishman-Donovan testek) alakulnak át.',
          'Cutan Leishmaniasis: A parazita elszaporodása a bőr makrofágjaiban marad, lokális granulomatózus gyulladást és elhalást okozva.',
          'Visceralis Leishmaniasis (Kala-azar): Az amastigoták a reticuloendothelialis rendszer szerveibe (lépszövet, máj, csontvelő, nyirokcsomók) szóródnak.',
          'Masszív lépmegnagyobbodás (splenomegalia), májmegnagyobbodás, csontvelő-elnyomás (pancytopenia) és szisztémás hypergammaglobulinaemia alakul ki.'
        ],
        virulence_factors: ['LPG (Lipophosphoglycan - fagocita túlélés)', 'GP63 metalloproteáz', 'Intracelluláris szaporodás fago-lizoszómákban']
      },
      clinical: {
        incubation: 'Cutan: 2-8 hét; Visceralis: 2-6 hónap (akár évek is)',
        onset: 'Fokozatosan súlyosbodó',
        symptoms: [
          {
            name: 'Visceralis Leishmaniasis (Kala-azar / Fekete láz)',
            description: 'Klasszikus pentád: 1. Szakaszos, hullámzó, dupla csúcsú láz. 2. Kifejezett, masszív splenomegalia (akár a köldökig/kismedencéig érő lép) és hepatomegalia. 3. Progresszív cachexia és súlyvesztés. 4. Pancytopenia (anémia, leukopenia, thrombocytopenia). 5. Bőrhypoperfusio és sötét szürkés-barna hiperpigmentáció ("kala-azar" = fekete láz). Kezelés nélkül HALÁLOS!',
            severity: 'severe'
          },
          {
            name: 'Cutan és Mucocutaneous Leishmaniasis',
            description: 'Cutan: A csípés helyén fájdalmatlan papula, amely lassan kitáguló, fekélyesedő, pörkkel fedett, emelt szélű "vulkánráter-szerű" fekéllyé alakul. Mucocutaneous (L. braziliensis): Évekkel később az orr- és szájüregi nyálkahártya destrukciója (orrsovény perforáció).',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Kifejezett masszív splenomegalia és hepatomegalia',
          'Súlyos cachexia, sápadtság',
          'Bőr hiperpigmentáció',
          'Fájdalmatlan, emelt szélű bőrfekélyek hegesedéssel'
        ],
        complications: ['Súlyos szekunder bakteriális fertőzések és sepsis (leukopenia miatt)', 'Súlyos vérzések (thrombocytopenia miatt)', 'Máj- és veseelégtelenség', 'Halál (kezeletlen Visceralis formában >90%)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Kifejezett Pancytopenia (Anémia, Leukopenia/Neutropenia, Thrombocytopenia)', interpretation: 'Csontvelő-infiltráció és hypersplenia' },
          { test: 'Serum Fehérje', finding: 'Hypergammaglobulinaemia (polyclonalis IgG emelkedés) hypoalbuminaemiával', interpretation: 'Polyclonalis B-sejt stimuláció' }
        ],
        microbiology: [
          { test: 'Csontvelő / Lép / Nyirokcsomó aspirátum mikroszkópia (Giemsa)', finding: 'Intracelluláris amastigoták (Leishman-Donovan testek) kinetoplasttal a makrofágokban', significance: 'GOLD STANDARD diagnosztikus módszer!' },
          { test: 'rK39 Antigén Gyorsteszt / ELISA', finding: 'rK39 ellenanyag pozitivity', significance: 'Kiváló szűrőteszt Visceralis Leishmaniasisban' },
          { test: 'PCR', finding: 'Leishmania DNS kimutatása', significance: 'Legmagasabb érzékenység és faji tipizálás' }
        ]
      },
      differential: [
        { disease: 'Malária', distinguishing: 'Vastagcsepp/vékonykenet, hiányzik a tartós pancytopenia' },
        { disease: 'Typhus / Sepsis', distinguishing: 'Vértenyésztés, lefolyás' },
        { disease: 'Leukaemic / Lymphoma', distinguishing: 'Csontvelő biopszia/aspiráció' }
      ],
      therapy: {
        empirical: {
          inpatient: [
            { drug: 'Liposzómás Amphotericin B (AmBisome)', dose: '3-5 mg/kg/nap IV az 1-5., 10., 14., 21. napokon (összdózis 21-30 mg/kg)', duration: 'Protokoll szerint', note: 'GOLD STANDARD ELSŐ VONALBELI KEZELÉS Visceralis Leishmaniasisban! A legmagasabb gyógyulási arány és legkevesebb mellékhatás.' },
            { drug: 'Miltefosin PO', dose: '2x50mg PO', duration: '28 nap', note: 'Egyetlen orális hatóanyag. Terhességben TERATOGÉN (Szigorúan ellenjavallt!)' },
            { drug: 'N-methylglucamin-antimonat (Glucantime) / Pentostam', dose: '20 mg/kg/nap IM/IV', duration: '28 nap', note: 'Klasszikus pentavalens antimon szer. Cardiotoxikus, pancreatoxikus (EKG és amiláz monitorozás!).' }
          ]
        },
        targeted: 'Cutan forma esetén: Helyi cryotherápia, intralesionalis Pentostam injekció vagy topicalis Paromomycin krém; szóródó/mucocutan esetben szisztémás AmBisome vagy Miltefosin.',
        supportive: ['Transzfúzió súlyos anémiában/vérzésben', 'Antibiotikumok szekunder bakteriális fertőzésekre', 'Nutritív támogatás'],
        prevention: ['Lepkeszúnyogok elleni védelem (finom szövésű szúnyogháló, rovarriasztók)', 'Kutyák nyakörves rovarirtó védelme endémiás övezetben']
      },
      prognosis: {
        mortality: 'Kezelt Visceralis: <5%; Kezeletlen Visceralis: >90% (2 éven belül halálos)',
        prognostic_scores: ['Nincs'],
        factors: 'Kezelés megkezdésének ideje, HIV társfertőzés'
      }
    },
    {
      id: 'strongyloidiasis',
      name: 'Strongyloidiasis (Törpe Fonalféreg Fertőzés)',
      pathogen: {
        type: 'Helminth',
        name: '<i>Strongyloides stercoralis</i>',
        gram: '-',
        shape: 'filariform lárva (fertőző) és rhabditiform lárva (ürülő)'
      },
      epidemiology: {
        incidence: 'Mérsékelt és trópusi övben elterjedt (~600 millió fertőzött világszerte); K-Európában is jelen van!',
        risk_groups: ['Szteroid kezelés alatt állók (KIVÁLTKÉPPEN!)', 'HTLV-1 fertőzöttek', 'Transzplantáltak', 'Mezőgazdasági dolgozók (mezítláb járók)'],
        seasonality: 'Nincs',
        transmission: 'Filariform lárvák penetrációja a meztelen bőrön keresztül (talajjal érintkezve); AUTOINFEKCIÓ!'
      },
      pathomechanism: {
        steps: [
          'Mezítláb járás során a fertőző filariform lárvák átfúrják a bőrt.',
          'Vénás keringés -> tüdő capillarisok -> áttörés az alveolusokba -> felköhögés és lenyelés -> duodenum/jejunum nyálkahártyája.',
          'A nőstény féreg befurakodik a duodenum nyálkahártyájába, és parthenogenezissel petéket rak, melyekből rhabditiform lárvák kelnek ki.',
          'AUTOINFEKCIÓS CIKLUS: A rhabditiform lárvák a bélüregben filariform lárvákká alakulhatnak, amelyek átfúrják a colon falát vagy a perianalis bőrt. Ez teszi lehetővé az ÉLETHOSSZIG TARTÓ (akár 40-50 éves) fertőzést!',
          'HYPERINFECTION SZINDRÓMA ÉS DISSZEMINÁCIÓ: Szisztémás immunszuppresszió (különösen GLUKOKORTIKOIDOK!) hatására az autoinfekciós ciklus kontrollálatlanná válik. Lárvák milliárdjai árasztják el a bélfalat, tüdőt, agyat, kísérve a bélflóra Gram-negatív baktériumaival -> Polymicrobialis Gram-negatív sepsis és meningitis!'
        ],
        virulence_factors: ['Endogén autoinfekciós képesség', 'Bőrhátfúró metalloproteázok', 'Szteroid-receptor stimulálhatóság']
      },
      clinical: {
        incubation: '2-4 hét (krónikus autoinfekciónál évtizedekig fennállhat)',
        onset: 'Súlyos szindrómánál hirtelen fulmináns',
        symptoms: [
          {
            name: 'Krónikus / Szövődménymentes Forma',
            description: 'Gyakran tünetszegény. Jellegzetes bőrtünet a Larva Currens (gyorsan vándorló, rendkívül viszkető, linearis urticarialis csík a farpofákon/combon, amely 5-15 cm/óra sebességgel halad!). Enyhe hasi fájdalom, váltakozó hasmenés és száraz köhögés.',
            severity: 'moderate'
          },
          {
            name: 'Hyperinfection Szindróma és Disszeminált Strongyloidiasis',
            description: 'Klasszikusan szteroidterápia elindítását követően fellépő fulmináns állapot. Súlyos hasi fájdalom, paralyticus ileus, masszív GI vérzés, tüdővérzés, diffúz alveolaris infiltrátum, ARDS. A lárvák által behordott bélbaktériumok miatt széteső Gram-negatív sepsis, E. coli / Klebsiella meningitis és septic shock alakul ki. MORTALITÁS >80%!',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Larva Currens urticarialis vándorló csík a perianalis/glutealis régióban',
          'Diffúz hasi érzékenység, meteorizmus, ileus jelei',
          'Tüdő felett szörcszörejek, sepsis és meningitis jelei'
        ],
        complications: ['Hyperinfection szindróma', 'Polymicrobialis Gram-negatív sepsis és E. coli meningitis', 'ARDS és alveolaris haemorrhagia', 'Paralyticus ileus']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Kifejezett Eosinophilia (krónikus formában); A HYPERINFECTION SZINDRÓMÁBAN AZ EOSINOPHILIA GYAKRAN HIÁNYZIK!', interpretation: 'Immunológiai prognosztikai jel' },
          { test: 'Vértenyésztés', finding: 'Polymicrobialis Gram-negatív pálcák (E. coli, Klebsiella, Enterococcus)', interpretation: 'Bélbaktériumok behordása a lárvák által' }
        ],
        microbiology: [
          { test: 'Szerológia (IgG ELISA)', finding: 'Pozitív anti-Strongyloides IgG', significance: 'Nagyon érzékeny szűrőteszt! Immunszuppresszió ELŐTT KÖTELEZŐ elvégezni high-risk betegeknél.' },
          { test: 'Széklet / Köpet / Liquor mikroszkópia (Baermann / Agar lemez tenyésztés)', finding: 'Mozgó rhabditiform és filariform lárvák', significance: 'Rutin széklet vizsgálat kevésbé érzékeny; Baermann koncentrálás vagy agar lemez tenyésztés szükséges.' }
        ]
      },
      differential: [
        { disease: 'Egyéb helminthiasis (Ascariasis, Ancylostomiasis)', distinguishing: 'Hiányzik az autoinfekció és a Larva Currens' },
        { disease: 'Sepsis egyéb oka', distinguishing: 'Szerológia, rhabditiform lárva kimutatása köpetből/liquorból' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Ivermectin PO', dose: '200 µg/kg PO naponta 1x', duration: '2 nap (szövődménymentes esetben)', note: 'ELSŐ VONALBELI GYÓGYSZER! Jelentősen hatékonyabb, mint az Albendazol.' },
            { drug: 'Albendazol PO', dose: '2x400mg PO', duration: '7 nap', note: 'Másodvonalbeli alternatíva, ha Ivermectin nem elérhető.' }
          ],
          icu: [
            { drug: 'Ivermectin PO / Subcutan (off-label) + Széles spektrumú antibiotikumok', dose: '200 µg/kg naponta 1x a széklet/köpet 2 hétig tartó negatívvá válásáig', duration: 'Egyéni', note: 'Hyperinfection szindrómában azonnali Ivermectin + Ceftriaxon/Meropenem a Gram-negatív sepsis lefedésére!' }
          ]
        },
        targeted: 'SZŰRÉS ÉS PREVENCIÓ: Szisztémás Glukokortikoid terápia, immunszuppresszió vagy szervtranszplantáció előtt a Strongyloides IgG szűrés KÖTELEZŐ endémiás anamnézis esetén! Pozitív esetben Ivermectin előkezelés szükséges.',
        supportive: ['Intenzív terápiás támogatás sepsisben', 'Ileus konzervatív/sebészeti ellátása'],
        prevention: ['Mezítláb járás kerülése endémiás területeken', 'Immunszuppresszió előtti kötelező szűrés és preemptív kezelés']
      },
      prognosis: {
        mortality: 'Krónikus forma: jó; Hyperinfection szindróma / Disszemináció: 70-90% mortalitás!',
        prognostic_scores: ['Nincs'],
        factors: 'Szteroid terápia jelenléte, eosinophil szám hiánya, Gram-negatív sepsis'
      }
    },
    {
      id: 'ascariasis',
      name: 'Ascariasis (Orsóférgesség)',
      pathogen: {
        type: 'Helminth',
        name: '<i>Ascaris lumbricoides</i>',
        gram: '-',
        shape: 'nagy hengeres féreg (15-35 cm)'
      },
      epidemiology: {
        incidence: 'Világszerte a leggyakoribb féregfertőzés (>800 millió fertőzött)',
        risk_groups: ['Gyermekek (2-10 év)', 'Rossz higiénés és szanitációs körülmények között élők'],
        seasonality: 'Nincs',
        transmission: 'Feko-orális: Embryonált petékkel szennyezett talaj, zöldség vagy víz lenyelése'
      },
      pathomechanism: {
        steps: [
          'Peték lenyelése -> a vékonybélben kikelnek a lárvák.',
          'A lárvák átfúrják a bélfalat, a portális keringéssel a májba, majd a szív jobb felén át a tüdőbe vándorolnak.',
          'A tüdő capillariesokból áttörnek az alveolusokba (Löffler-szindróma: eosinophil pneumonitis), felmásznak a légutakon, majd felköhögés után újból lenyelésre kerülnek.',
          'A vékonybélben (jejunum) kifejlett 15-35 cm-es férgekké érnek, tápanyagot vonnak el.',
          'Súlyos fertőzésben a férgek összegubancolódott tömege (féreg-gombolyag) mechanikus bélelzáródást (ileus) okozhat, vagy átvándorolva az epeutaiba biliaris colikát, cholangitist, pancreatitisit válthat ki.'
        ],
        virulence_factors: ['Szöveti migrációs képesség', 'Proteáz inhibitorok (emésztés elleni védelem)', 'Nagy méret és fizikai obstrukció']
      },
      clinical: {
        incubation: 'Tüdőfázis: 1-2 hét; Bélfázis: 6-8 hét',
        onset: 'Fokozatos',
        symptoms: [
          {
            name: 'Tüdő Fázis (Löffler-szindróma)',
            description: 'Lárvavándorlás alatt jelentkező átmeneti tünetegyüttes: száraz köhögés, dyspnoe, wheezing (sípolás), febrilitas és kifejezett perifériás eosinophilia.',
            severity: 'moderate'
          },
          {
            name: 'Bél Fázis és Malnutríció',
            description: 'Enenyhe fertőzés tünetmentes. Súlyosabb esetben homályos hasi fájdalom, puffadás, étvágytalanság, gyermekeknél A-vitamin és fehérje hiány, növekedésbeli elmaradás.',
            severity: 'mild'
          },
          {
            name: 'Obstrukciós Szövődmények',
            description: 'Kifejezett fertőzésnél a féreg-gombolyag mechanikus ileust okoz (főleg az ileocecalis billentyűnél). A féreg az epeutakba/ductus pancreaticusba vándorolva akut biliaris colikát, icterust, cholangitist vagy necrotizáló pancreatitisit idéz elő.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Enyhe hasi érzékenység',
          'Lélegzésnél sípolás/szörcszörejek tüdőfázisban',
          'Féreg ürülése a széklettel, szájból vagy orrból (lázas állapotban elvándorolnak!)'
        ],
        complications: ['Mechanikus ileus', 'Biliaris ascariasis és acut cholangitis', 'Acut pancreatitis', 'Acut appendicitis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Kifejezett Eosinophilia a tüdőfázisban', interpretation: 'Lárvális szöveti migráció' }
        ],
        imaging: [
          { modality: 'Mellkas Röntgen', finding: 'Átmeneti, vándorló infiltrátumok (Löffler pneumonitis)', significance: 'Tüdőfázis igazolása' },
          { modality: 'Hasi Ultrahang', finding: 'Férgek az epeutakban vagy bélben: "vasúti sín" (railroad track) vagy "spagetti" jel', significance: 'Biliaris és intestinalis szövődmény patognomikus képe' }
        ],
        microbiology: [
          { test: 'Széklet pete-vizsgálat', finding: 'Jellegzetes, rücskös, vastag héjú Ascaris peték', significance: 'Diagnosztikus a bélfázisban' }
        ]
      },
      differential: [
        { disease: 'Asthma / Bronchitis', distinguishing: 'Eosinophilia, vándorló infiltrátum a RTG-en, széklet lelet' },
        { disease: 'Cholelithiasis', distinguishing: 'Ultrahang kép (féreg mozgás az epeútban)' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Albendazol PO', dose: '400mg PO egyszeri dózis', duration: '1 nap', note: 'Első vonalbeli terápia.' },
            { drug: 'Mebendazol PO', dose: '2x100mg PO (vagy 500mg egyszeri)', duration: '3 nap', note: 'Kiváló alternatíva.' },
            { drug: 'Pyrantel pamoat PO', dose: '11 mg/kg PO egyszeri dózis (max 1g)', duration: '1 nap', note: 'Terhesség 1. trimeszterében ELSŐ VONALBELI szer!' }
          ]
        },
        targeted: 'Biliaris vagy bél-obstrukció esetén: Konzervatív kezelés (spasmolyticumok, NPO, IV infúzió) + Piperazin / Albendazol, szükség esetén endoszkópos (ERCP) féregeltávolítás vagy sebészi enterotomia.',
        prevention: ['Zöldségek és gyümölcsök alapos mosása', 'Alapos kézmosás evés előtt', 'Szennyvízkezelés és talajhigiénia']
      },
      prognosis: {
        mortality: 'Kiváló (<0.1%); szövődményes ileus/cholangitis esetén sebészi beavatkozást igényel',
        prognostic_scores: ['Nincs'],
        factors: 'Féregterhelés, biliaris elzáródás megléte'
      }
    },
    {
      id: 'taeniasis',
      name: 'Taeniasis és Neurocysticercosis',
      pathogen: {
        type: 'Helminth',
        name: '<i>Taenia saginata</i> (marha) és <i>Taenia solium</i> (sertés)',
        gram: '-',
        shape: 'szalagféreg (proglottisok) és lárva (cysticercus cellulosae)'
      },
      epidemiology: {
        incidence: 'Világszerte elterjedt; Neurocysticercosis az szerzett epilepsziák vezető oka a fejlődő világban',
        risk_groups: ['Nyers/félig nyers marha- vagy sertéshúst fogyasztók', 'Sertéstartók, endemikus területekre utazók'],
        seasonality: 'Nincs',
        transmission: '1. Intestinalis Taeniasis: Nyers marhahús (T. saginata) vagy sertéshús (T. solium) fogyasztása cysticercesszel. 2. Neurocysticercosis: KIZÁRÓLAG T. solium PETÉK feko-orális lenyelése (emberről emberre vagy autoinfekció!).'
      },
      pathomechanism: {
        steps: [
          'Intestinalis Taeniasis: Fertőzött hús fogyasztása -> a bélben a lárvából kifejlett szalagféreg fejlődik (akár 4-10 méter), amely proglottisokat ürít.',
          'Neurocysticercosis (NCC): A T. solium PETÉK lenyelése után az onkoszférák kikelnek a bélben, átfúrják a bélfalat, majd a keringéssel a KÖZPONTI IDEGRENDSZERBE, izomzatba és szembe jutnak.',
          'A szövetekben betokozódva hólyagférgeket (cysticercus) képeznek.',
          'Stádiumok az agyban: 1. Vesicularis (élő lárva, minimális gyulladás). 2. Colloidalis (degenerálódó lárva, kifejezett perilesionalis agyödéma és immunválasz!). 3. Granularis. 4. Calcifikált (heges meszesedés, ami krónikus epilepsziás fókusszá válik).'
        ],
        virulence_factors: ['Scolex horgok és szívókák', 'Immuneváziós fehérjék az élő cisztában']
      },
      clinical: {
        incubation: 'Bélférgesség: 8-12 hét; Neurocysticercosis: 1-5 év (vagy évtizedek)',
        onset: 'Fokozatos',
        symptoms: [
          {
            name: 'Intestinalis Taeniasis (Bélférgesség)',
            description: 'Gyakran teljesen tünetmentes. Enyhe hasi diszkomfort, étvágyváltozás. A beteg általában a fehér, mozgó féregízek (proglottisok) széklettel vagy fehérneműben való ürülését észleli.',
            severity: 'mild'
          },
          {
            name: 'Neurocysticercosis (NCC)',
            description: 'A legsúlyosabb forma. Vezető tünetek: 1. Epilepsziás rohamok (az esetek 70-80%-ában; fókuszos vagy generalizált). 2. Fokozott koponyaűri nyomás tünetei (fejfájás, hányás, papillaödéma). 3. Hydrocephalus (ha a ciszta a kamrarendszerben van). 4. Focalis neurológiai kiesések, stroke szindróma és dementia.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Neurológiai vizsgálat NCC-ben: papillaödéma, fokalizált neurológiai jelek',
          'Subcutan csomók (izom cysticercosis)'
        ],
        complications: ['Neurocysticercosis miatti status epilepticus', 'Obstruktív Hydrocephalus', 'Permanent neurológiai kiesés']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Eosinophilia hiányozhat vagy csak mérsékelt colloidalis fázisban', interpretation: 'Kifejezett eosinophilia nem jellemző' }
        ],
        imaging: [
          { modality: 'Koponya CT / MRI (kontrasztos)', finding: '1. Vesicularis: ciszta benne scolex-el ("dot-in-ring" sign). 2. Colloidalis: gyűrűs kontrasztanyag-halmozás perilesionalis agyödémával. 3. Calcifikált: apró, meszes pontszerű gócok.', significance: 'Neurocysticercosis diagnózisának alapköve!' }
        ],
        microbiology: [
          { test: 'Széklet mikroszkópia / Proglottis morfológia', finding: 'Taenia peték vagy proglottisok azonosítása (T. saginata >12 uterin ág; T. solium 7-13 uterin ág)', significance: 'Bélférgesség igazolása' },
          { test: 'NCC Szerológia (EITB - Western blot)', finding: 'Pozitív anti-cysticercus ellenanyagok', significance: 'NCC megerősítésére' }
        ]
      },
      differential: [
        { disease: 'Agytályog / Toxoplasmosis / Tuberculoma', distinguishing: 'Agy MRI morfológia (scolex megléte), szerológia' },
        { disease: 'Primer agydaganat', distinguishing: 'Szerológia, CT meszesedések' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Praziquantel PO', dose: '5-10 mg/kg PO egyszeri dózis', duration: '1 nap', note: 'Bélférgesség (Intestinalis Taeniasis) első vonalbeli kezelése.' },
            { drug: 'Niclosamid PO', dose: '2g PO egyszeri dózis', duration: '1 nap', note: 'Alternatíva bélférgességre (nem szívódik fel).' }
          ]
        },
        targeted: 'NEUROCYSTICERCOSIS KEZELÉSE: 1. KOMBINÁLT ANTIPARAZITÁS TERÁPIA: Albendazol 15 mg/kg/nap (max 800mg) 10-14 napig PLUSZ Praziquantel 50 mg/kg/nap 10-14 napig (kombinációban hatékonyabb aktív parenchymás cisztáknál!). 2. GLUKOKORTIKOIDOK (KÖTELEZŐ!): Dexamethason 0.1 mg/kg/nap a féregirtó kezelés ELŐTT 1-2 nappal indítva a széteső ciszták okozta agyödéma megelőzésére! 3. Antiepileptikumok rohamok ellen.',
        supportive: ['Sebészi kamrai sönt (VP-shunt) hydrocephalus esetén', 'Anticonvulsiv szerek hosszas adása'],
        prevention: ['Húsok alapos átsütése (>63°C)', 'Húsvizsgálat szigorítása', 'Kézmosás (szertés-szalagféreg peték lenyelésének elkerülésére!)']
      },
      prognosis: {
        mortality: 'Intestinalis: 0%; Neurocysticercosis: megfelelő kezeléssel és antiepileptikummal jó, de heges meszesedésnél rohamok megmaradhatnak',
        prognostic_scores: ['Del Brutto Neurocysticercosis Diagnostic Criteria'],
        factors: 'Ciszták száma és elhelyezkedése (parenchymás vs. intraventricularis)'
      }
    },
    {
      id: 'echinococcosis',
      name: 'Echinococcosis (Hydatid Kór)',
      pathogen: {
        type: 'Helminth',
        name: '<i>Echinococcus granulosus</i> (cystic) és <i>Echinococcus multilocularis</i> (alveolaris)',
        gram: '-',
        shape: 'kisméretű szalagféreg és hydatid ciszta'
      },
      epidemiology: {
        incidence: 'Endémiás a Mediterráneumban, Kelet-Európában (Magyarországon is!), Közép-Ázsiában',
        risk_groups: ['Juhászok, kutyatartók (E. granulosus)', 'Vadászok, erdei gyümölcsöt fogyasztók (róka ürülék - E. multilocularis)'],
        seasonality: 'Nincs',
        transmission: 'Feko-orális: Kutya (E. granulosus) vagy Róka (E. multilocularis) ürülékével szennyezett peték lenyelése (az ember köztigazda!)'
      },
      pathomechanism: {
        steps: [
          'Peték lenyelése -> a bélben kikelő onkoszférák átfúrják a bélfalat, a portális keringéssel a MÁJBA (70%), tüdőbe (20%) vagy egyéb szervekbe jutnak.',
          'E. granulosus (Cystic Echinococcosis): Lassan (évek alatt) növekvő, vastag falu, folyadékkal telt unilocularis hydatid ciszta alakul ki (pericystum, ectocystum, endocystum), benne leányhólyagokkal és "hydatid homok" (protoscolexek) tömegével.',
          'E. multilocularis (Alveolaris Echinococcosis): A lárva infiltratív, tumor-szerűen terjedő, tok nélküli mikrovesicularis szöveti pusztulást okoz, elpusztítva a májszövetet és áttéteket adva (májrákhoz hasonlít!).',
          'Ciszta ruptúra: A ciszta megrepedése a benne lévő idegen antigének kiáramlása miatt súlyos ANAFILAXIÁS SHOCKOT és másodlagos szétszóródást (disszeminációt) eredményez.'
        ],
        virulence_factors: ['Laminált réteg (immunvédelem)', 'Protoscolexek tömege', 'E. multilocularis infiltratív növekedése']
      },
      clinical: {
        incubation: 'Évek vagy évtizedek (lassú, panaszmentes növekedés)',
        onset: 'Lassú, tünetszegény',
        symptoms: [
          {
            name: 'Cystic Echinococcosis (E. granulosus)',
            description: 'Tünetek a ciszta méretétől és nyomási hatásától függenek: jobb bordaív alatti tompa fájdalom, hepatomegalia, epeúti kompresszió esetén icterus. Tüdőciszta esetén mellkasi fájdalom, köhögés, hemoptoe.',
            severity: 'moderate'
          },
          {
            name: 'Ciszta Ruptúra és Anafilaxia',
            description: 'Hirtelen fellépő heves hasi/mellkasi fájdalom, láz, urticaria, hypotension és fulmináns ANAFILAXIÁS SHOCK. A kiömlő tartalomból újabb számtalan ciszta fejlődik ki.',
            severity: 'severe'
          },
          {
            name: 'Alveolaris Echinococcosis (E. multilocularis)',
            description: 'A májrákot utánozza: progresszív sárgaság, felhasi fájdalom, cachexia, májelégtelenség. Kezelés nélkül kifejezetten rossz prognózisú!',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Hepatomegalia, tapintható sima felszínű terime a felhasban',
          'Icterus epeúti elzáródásnál',
          'Urticaria és shock jelei ruptúránál'
        ],
        complications: ['Ciszta ruptúra és Anafilaxiás shock', 'Acut cholangitis és biliaris fistula', 'Szekunder bakteriális felülfertőződés (májtályog)', 'Alveolaris forma miatti májelégtelenség']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Mérsékelt Eosinophilia (az esetek ~25-50%-ában)', interpretation: 'Antigén szivárgás esetén' }
        ],
        imaging: [
          { modality: 'Hasi Ultrahang / CT / MRI', finding: 'WHO-IWGE Klasszifikáció: CE1 (unilocularis), CE2 (leányhólyagok, "rosetta" vagy "lépesméz" minta), CE3a/b (levált membrán, "tavirózsa" jel), CE4/CE5 (meszesedett, inaktív)', significance: 'Klasszikus diagnosztikus vizsgálat!' }
        ],
        microbiology: [
          { test: 'Szerológia (ELISA, Western Blot)', finding: 'Pozitív anti-Echinococcus ellenanyagok (Echinococcus granulosus / multilocularis specifikus)', significance: 'Képalkotót megerősítő vizsgálat' }
        ]
      },
      differential: [
        { disease: 'Egyszerű Májciszta / Polycystás máj', distinguishing: 'Hiányzik a leányhólyag és a meszesedés, szerológia negatív' },
        { disease: 'Hepatocellularis Carcinoma (HCC)', distinguishing: 'Alveolaris formánál biopszia / szerológia / MRI' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Albendazol PO', dose: '2x400mg PO (vagy 15 mg/kg/nap)', duration: 'Hónapokig (műtét/PAIR előtt és után is!)', note: 'Első vonalbeli terápia. Zsíros étellel kell bevenni a felszívódás fokozására!' }
          ]
        },
        targeted: 'KEZELÉSI STRATÉGIÁK: 1. PAIR Technika (Puncture, Aspiration, Injection of scolicidal agent [hypertonic saline / ethanol], Re-aspiration): Unilocularis CE1 és CE3a cisztáknál Albendazol védőernyőben! 2. Sebészi Eltávolítás (Pericystectomia): Nagy (>10cm), szövődményes vagy leányhólyaggal teli (CE2, CE3b) cisztáknál. 3. Alveolaris forma (E. multilocularis): Radikális sebészi resectio PLUSZ ÉLETHOSSZIG TARTÓ ALBENDAZOL terápia!',
        supportive: ['Anaphylaxia esetén azonnali Adrenalin IM, szteroid és antihisztamin'],
        prevention: ['Kutyák rendszeres féregtelenítése Praziquantellel', 'Alapos kézmosás kutyákkal való érintkezés után', 'Erdei gyümölcsök és zöldségek alapos mosása']
      },
      prognosis: {
        mortality: 'E. granulosus: megfelelő kezeléssel jó (<2%); E. multilocularis: kezelt esetben is magas mortalitás',
        prognostic_scores: ['WHO-IWGE Ultrasound Classification'],
        factors: 'Ciszta stádiuma, lokalizációja, E. multilocularis jelenléte'
      }
    },
    {
      id: 'enterobiasis',
      name: 'Enterobiasis (Cérnagiliszta Fertőzés)',
      pathogen: {
        type: 'Helminth',
        name: '<i>Enterobius vermicularis</i>',
        gram: '-',
        shape: 'kisméretű fehér fonalféreg (0.5-1 cm)'
      },
      epidemiology: {
        incidence: 'Leggyakoribb féregfertőzés a mérsékelt övben (fejlett országokban és gyermekápolókban is)',
        risk_groups: ['Kisgyermekek (3-7 év)', 'Óvodai/iskolai közösségek', 'Családtagok'],
        seasonality: 'Nincs',
        transmission: 'Feko-orális: 1. Autoinfekció (vakarózás -> körmök alatti peték szájba vétele). 2. Ágyneművel, porral, játékkal terjedő peték lenyelése/belégzése'
      },
      pathomechanism: {
        steps: [
          'Ragadós peték lenyelése -> kikelés a vékonybélben.',
          'A lárvák a coecum és appendix területére vándorolnak, ivaréretté válnak.',
          'A megtermékenyített nőstény féreg éjszaka kikúszik a perianalis redőkbe, lerakja több ezer petéjét, majd elpusztul.',
          'A peték lerakása és a féreg mozgása kínzó, kifejezett perianalis viszketést vált ki.',
          'A vakarózás során a peték a körmök alá tapadnak, fenntartva az autoinfekciós kört.'
        ],
        virulence_factors: ['Ragadós peteburok', 'Éjszakai vándorlási képesség']
      },
      clinical: {
        incubation: '2-6 hét',
        onset: 'Fokozatos',
        symptoms: [
          {
            name: 'Perianalis Viszketés (Pruritus Ani)',
            description: 'Vezető tünet: kifejezetten ÉJSZAKA jelentkező, kínzó perianalis viszketés, ami alvászavart, ingerlékenységet, ágybavizelést okoz. A vakarózás szekunder bakteriális bőrfertőzéshez vezet.',
            severity: 'moderate'
          },
          {
            name: 'Ectopicus Fertőzés (Kislányoknál)',
            description: 'A férgek átvándorolhatnak a vulvába és hüvelybe, vulvovaginitist, enyhe folyást okozva.',
            severity: 'mild'
          }
        ],
        physical_exam: [
          'Perianalis excoriatio (vakarási nyomok), erythema',
          'Apró, mozgó fehér férgek láthatók szabad szemmel a perianalis bőrfelszínen éjszaka vagy reggel'
        ],
        complications: ['Perianalis pyoderma / Szekunder bakteriális felülfertőződés', 'Vulvovaginitis', 'Appendicitis (nagyon ritka)']
      },
      diagnostics: {
        microbiology: [
          { test: 'Celofánszalag (Scotch-tape) Teszt', finding: 'Jellegzetes, egyik oldalán lapos Enterobius peték a reggeli celofánszalagon', significance: 'GOLD STANDARD DIAGNOSZTIKUS MÓDSZER! Kora reggel, tisztálkodás előtt kell a perianalis redőkhöz nyomni. A RUTIN SZÉKLETVIZSGÁLAT GYAKRAN NEGATÍV!' }
        ]
      },
      differential: [
        { disease: 'Perianalis Streptococcus Dermatitis', distinguishing: 'Élénkpiros perianalis erythema, kenet/tenyésztés pozitív' },
        { disease: 'Aranyér / Analis Fissura', distinguishing: 'Fájdalom, vérzés, celofánszalag teszt negatív' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Mebendazol PO', dose: '100mg PO egyszeri dózis', duration: '1 nap, majd KÖTELEZŐEN ISMÉTELNI 2 HÉT MÚLVA!', note: 'ELSŐ VONALBELI KEZELÉS! A 2 hét múlva esedékes ismétlés KÖTELEZŐ az újonnan kikelt lárvák elpusztítására!' },
            { drug: 'Albendazol PO', dose: '400mg PO egyszeri dózis', duration: '1 nap, majd KÖTELEZŐEN ISMÉTELNI 2 HÉT MÚLVA!', note: 'Egyenértékű alternatíva.' },
            { drug: 'Pyrantel pamoat PO', dose: '11 mg/kg PO (max 1g)', duration: '1 nap, majd 2 hét múlva ismételni', note: 'Terhességben választandó.' }
          ]
        },
        targeted: 'KÖTELEZŐ STRATÉGIA: AZ EGÉSZ CSALÁDOT ÉS EGY HÁZTARTÁSBAN ÉLŐKET EGYIDEJŰLEG KEZELNI KELL! Enélkül a reinfekció szinte garantált.',
        prevention: ['Körmök rövidre vágása', 'Kora reggeli fürdés', 'Ágynemű és pizsama forró vizes mosása (60°C)']
      },
      prognosis: {
        mortality: 'Kiváló (0%)',
        prognostic_scores: ['Nincs'],
        factors: 'Családi egyidejű kezelés betartása'
      }
    },
    {
      id: 'trichinellosis',
      name: 'Trichinellosis',
      pathogen: {
        type: 'Helminth',
        name: '<i>Trichinella spiralis, T. britovi, T. pseudospiralis</i>',
        gram: '-',
        shape: 'mész-tokba zárt spirális izom-lárva'
      },
      epidemiology: {
        incidence: 'Sporadikus járványok hazilag vágott sertés vagy vaddisznó fogyasztása után (Magyarországon is előfordul!)',
        risk_groups: ['Házi disznóvágáson nyers/füstölt kolbászt, vaddisznóhúst fogyasztók', 'Vadászok'],
        seasonality: 'Téli/kora tavaszi hónapokban (disznóvágások ideje)',
        transmission: 'Agyon nem sütött, lárvákat tartalmazó nyers vagy füstölt sertéshús / vaddisznóhús fogyasztása'
      },
      pathomechanism: {
        steps: [
          'Betokozódott lárvákat tartalmazó nyers hús fogyasztása.',
          'Enteralis fázis (1. hét): A gyomorban a lárvák kiszabadulnak, a vékonybélben ivaréretté válnak, fúródnak a nyálkahártyába -> hasmenést, hányingert okoznak.',
          'Parenteralis fázis (2-4. hét): Az újszülött lárvák a keringésbe jutnak, szóródnak, és célzottan a nagy oxigénellátású harántcsíkolt izomsejtekbe (rágóizmok, rekeszizom, nyelv, extraocularis izmok) vándorolnak.',
          'Dajkasejt (Nurse Cell) képzés: Az izomsejtben a lárva átalakítja a sejtet egy védekező "dajkasejtté" és betokozódik, kifejezett immun- és gyulladásos reakciót váltva ki.'
        ],
        virulence_factors: ['Izomsejt genomi átprogramozása (Nurse cell)', 'Szöveti penetráció']
      },
      clinical: {
        incubation: 'Enteralis fázis: 1-2 nap; Parenteralis izomfázis: 1-4 hét',
        onset: 'Hirtelen, lázzal és izomfájdalommal',
        symptoms: [
          {
            name: 'Enteralis Fázis (Első hét)',
            description: 'Enenyhe vagy kifejezett gastroenteritis: hányinger, hányás, görcsös hasi fájdalom, hasmenés.',
            severity: 'moderate'
          },
          {
            name: 'Parenteralis Fázis (Klasszikus Triád - 2. héttől)',
            description: 'Lárvavándorlás alatti klasszikus tünetegyüttes: 1. Magas láz (39-40°C). 2. Súlyos, kínozó izomfájdalom (myalgia), kifejezetten a rágóizmokban, nyelvben, rekeszizomban és lábikrában. 3. Jellegzetes KÉTOLDALI PERIORBITALIS ÖDÉMA (szem körüli tésztatintájú duzzanat) és conjunctivitis. Gyakori a köröm alatti szálka-vérzés (splinter hemorrhage).',
            severity: 'severe'
          },
          {
            name: 'Myocarditis és KIR szövődmények',
            description: 'A lárvák a szívizmon is átvándorolnak (bár ott nem tokosodnak be): ARRHITHMIÁK, acute szívelégtelenség (A LEGGYAKORIBB HALÁLOK!). Encephalitis és paresis is előfordulhat.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Kétoldali periorbitalis ödéma és chemosis',
          'Nyomásérzékenység a harántcsíkolt izmok felett',
          'Splinter hemorrhagies (köröm alatti lécverések)'
        ],
        complications: ['Trichinella Myocarditis (Vezető halálok!)', 'Encephalitis / Meningitis', 'ARDS / Pneumonitis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'EXTRÉM MAGAS EOSINOPHILIA (akár 30-60%!) leukocytosissal', interpretation: 'Patognomikus klinikai gyanújel!' },
          { test: 'Izomenzimek (CK, LDH, Aldolase)', finding: 'Kifejezetten emelkedett Kreatin-kináz (CK) és LDH', interpretation: 'Intenzív izomsejtkárosodás' }
        ],
        microbiology: [
          { test: 'Szerológia (ELISA)', finding: 'Pozitív anti-Trichinella IgG ellenanyagok', significance: 'Diagnosztikus (a fertőzés 2-3. hetétől válik pozitívvá)' },
          { test: 'Izombiopszia (m. deltoideus / gastrocnemius)', finding: 'Betokozódott spirális lárvák az izomrostokban', significance: 'Ritkán szükséges, szövettani igazolás' }
        ]
      },
      differential: [
        { disease: 'Dermatomyositis / Polymyositis', distinguishing: 'Eosinophilia hiánya, autoantitestek (anti-Jo-1), lefolyás' },
        { disease: 'Leptospirosis', distinguishing: 'Vese- és májelégtelenség, szerológia' },
        { disease: 'Influenza', distinguishing: 'Eosinophilia hiánya, periorbitalis ödéma hiánya' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Albendazol PO', dose: '2x400mg PO', duration: '10-14 nap', note: 'Első vonalbeli féregirtó szer.' },
            { drug: 'Mebendazol PO', dose: '3x200-400mg PO', duration: '10-14 nap', note: 'Kiváló alternatíva.' }
          ],
          inpatient: [
            { drug: 'Albendazol + GLUKOKORTIKOIDOK (Prednisolon)', dose: 'Prednisolon: 40-60 mg/nap PO', duration: '10-14 nap (fokozatos leállítással)', note: 'KÖTELEZŐ közepes/súlyos esetben, periorbitalis ödémánál vagy Myocarditis gyanújánál a széteső lárvák elleni súlyos immungyulladás kivédésére!' }
          ]
        },
        supportive: ['Szoros EKG monitorozás myocarditis kizárására', 'Fájdalomcsillapítás (NSAID-ok)'],
        prevention: ['Házi disznóvágásból származó hús kötelező mészáros/állatorvosi vizsgálata (Trichinelloscopia)', 'Húsok alapos sütése-főzése (>71°C belső hőmérséklet)', 'Fagyasztás (-15°C legalább 3 hétig - vaddisznónál nem mindig megbízható!)']
      },
      prognosis: {
        mortality: 'Megfelelő kezeléssel <1%; súlyos myocarditis vagy encephalitis esetén 5-10%',
        prognostic_scores: ['Nincs'],
        factors: 'Kezelés megkezdésének ideje, Myocarditis jelenléte'
      }
    },
    {
      id: 'toxocariasis',
      name: 'Toxocariasis (Larva Migrans Visceralis és Ocularis)',
      pathogen: {
        type: 'Helminth',
        name: '<i>Toxocara canis</i> (kutya) és <i>Toxocara cati</i> (macska)',
        gram: '-',
        shape: 'kutya/macska orsóféreg lárvája'
      },
      epidemiology: {
        incidence: 'Gyakori zoonosis világszerte és Magyarországon is',
        risk_groups: ['Kisgyermekek (1-5 év - homokozó, geophagia/földevés)', 'Kutyatartók, kertészek'],
        seasonality: 'Nincs',
        transmission: 'Feko-orális: Kutya/macska ürülékkel kontaminált homokozó porának vagy földnek a lenyelése (az ember paratenikus nem-természetes gazda!)'
      },
      pathomechanism: {
        steps: [
          'Peték lenyelése -> kikelés a bélben.',
          'A lárvák átfúrják a bélfalat, a keringéssel a májba, tüdőbe, agyba, szívbe és szembe vándorolnak.',
          'Mivel az ember nem természetes gazda, A LÁRVÁK EMBERBEN NEM TUDNAK KIFEJLETT FÉREGGÉ ÉRNI ÉS NEM ÜRÍTENEK PETÉKET!',
          'Ehelyett hónapokig-évekig vándorolnak a szövetekben (Larva Migrans), maguk körül kifejezett eosinophil granulomatózus gyulladást váltva ki.'
        ],
        virulence_factors: ['Hosszú szöveti túlélés', 'TES (Toxocara Excretory-Secretory) antigének']
      },
      clinical: {
        incubation: 'Hetek vagy hónapok',
        onset: 'Lassú',
        symptoms: [
          {
            name: 'Visceralis Larva Migrans (VLM)',
            description: 'Főként kisgyermekeknél (1-5 év): tartós hullámzó láz, kifejezett hepatomegalia, köhögés, wheezing (sípolás), tüdőinfiltrátumok, urticaria. Laborban EXTRÉM MAGAS EOSINOPHILIA.',
            severity: 'moderate'
          },
          {
            name: 'Ocularis Larva Migrans (OLM)',
            description: 'Főként iskolásoknál/fiataloknál: a szembe vándorló egyetlen lárva egyoldali látásromlást, kancsalságot (strabismus), retinalis granulomát és leukocoriát (fehér pupillareflex) okoz. Rendszerint szisztémás tünetek és EOSINOPHILIA NÉLKÜL jelentkezik! Retinoblastomát utánozhat!',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Hepatomegalia, tüdő felett sípolás (VLM)',
          'Szemfenék: granuloma a macula vagy papilla környékén, üvegtesti gyulladás (OLM)'
        ],
        complications: ['Maradandó féloldali vakság (OLM)', 'Myocarditis és Neurotoxocariasis (agyi granuloma)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Extrém magas Eosinophilia (VLM-ben akár 30-70%! OLM-BEN GYAKRAN NORMÁLIS!)', interpretation: 'Eosinophil granulomatosis' },
          { test: 'Total IgE', finding: 'Jelentősen emelkedett', interpretation: 'Atopiás/parazitás válasz' }
        ],
        microbiology: [
          { test: 'Szerológia (ELISA - TES antigén)', finding: 'Pozitív anti-Toxocara IgG ellenanyagok', significance: 'DIAGNOSZTIKUS ALAPKŐ! Western blot megerősítés célszerű.' },
          { test: 'Székletvizsgálat', finding: 'MINDIG NEGATÍV!', significance: 'Emberben nincs kifejlett féreg, petét NEM ürít!' }
        ]
      },
      differential: [
        { disease: 'Retinoblastoma (Gyermekkori szemtumor)', distinguishing: 'OLM esetén a legfontosabb kizárandó kórkép! Szemészeti UH, MRI, Toxocara szerológia.' },
        { disease: 'Asthma bronchiale / Löffler-szindróma', distinguishing: 'Szerológia, hepatomegalia megléte' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Albendazol PO', dose: '2x400mg PO', duration: '5-14 nap (VLM-ben); 2-4 hét (OLM-ben)', note: 'Első vonalbeli szer. Zsíros étellel kell bevenni!' },
            { drug: 'Mebendazol PO', dose: '2x100-200mg PO', duration: '5-14 nap', note: 'Alternatíva (kevésbé szívódik fel).' }
          ]
        },
        targeted: 'OCULARIS FORMÁBAN ÉS SÚLYOS VLM-BEN: Albendazol terápia mellé GLUKOKORTIKOIDOK (Prednisolon / topicalis szemcsepp) adása KÖTELEZŐ a szemlencse/retina elhomályosodásának és a vakságnak a megelőzésére!',
        supportive: ['Szemészeti vitrectomia retina letapadás veszélyénél'],
        prevention: ['Kutyák és macskák rendszeres féregtelenítése', 'Homokozók lefedése az állati ürülék ellen', 'Gyermekek kézmosása homokozás után']
      },
      prognosis: {
        mortality: 'Kiváló (<0.1%); OLM-ben nem megfelelő kezelésnél maradandó látásvesztés alakulhat ki',
        prognostic_scores: ['Nincs'],
        factors: 'Szemészeti érintettség és korai szteroid kezelés'
      }
    },
    {
      id: 'schistosomiasis',
      name: 'Schistosomiasis (Vérmételyezés / Bilharziasis)',
      pathogen: {
        type: 'Helminth',
        name: '<i>Schistosoma haematobium, Schistosoma mansoni, Schistosoma japonicum</i>',
        gram: '-',
        shape: 'metely (párban élő hímnős érmétely)'
      },
      epidemiology: {
        incidence: '>230 millió fertőzött világszerte (főleg Afrika, Közel-Kelet, D-Amerika, Ázsia)',
        risk_groups: ['Trópusi édesvízben fürdőzők, túrázók, horgászok', 'Endémiás területek lakói'],
        seasonality: 'Nincs',
        transmission: 'A fertőző cercariák aktív penetrációja az ép bőrön keresztül trópusi édesvízben (édesvízi csigák a köztigazdák!)'
      },
      pathomechanism: {
        steps: [
          'Édesvízben való fürdőzés során a cercariák átfúrják a bőrt (úszók viszketése / swimmer\'s itch).',
          'Schistosomulává alakulva a keringéssel a máj kapuér-rendszerébe vándorolnak, ahol ivaréretté válnak.',
          'Párosodás után a vénás fonatokba vándorolnak:',
          'S. haematobium -> a húgyhólyag és kismedence vénás fonataiba (plexus vesicalis).',
          'S. mansoni és S. japonicum -> a mesenterialis vénákba.',
          'A lerakott peték átfúrják a hólyag- vagy bélfalat, hogy a vizelettel/széklettel ürüljenek.',
          'A szövetekben rekedt peték körül granulomatózus gyulladás és fibrosis alakul ki:',
          'Hólyag granuloma -> haematuria, hólyagfal meszesedés, laphámcarcinoma!',
          'Máj granuloma -> periportalis fibrosis (Symmers-pipaszár fibrosis), portalise hypertonia, oesophagus varix vérzés!'
        ],
        virulence_factors: ['Peték tüskés szerkezete és lyticus enzimei', 'Gazdafehérjék bevonása (immunevazio)']
      },
      clinical: {
        incubation: 'Akut Katayama láz: 2-8 hét; Krónikus forma: hónapok-évek',
        onset: 'Akut vagy lassú krónikus',
        symptoms: [
          {
            name: 'Cercaria Dermatitis és Akut Schistosomiasis (Katayama-láz)',
            description: 'Behatolási dermatits (viszkető maculopapulosus kiütés). 2-8 héttel később Katayama-láz: hirtelen magas láz, chills, köhögés, hepatosplenomegalia, urticaria és kifejezett eosinophilia.',
            severity: 'moderate'
          },
          {
            name: 'Urogenitalis Schistosomiasis (S. haematobium)',
            description: 'Vezető tünet: terminális fájdalmatlan haematuria (a vizelés végén megjelenő friss vér), dysuria, pollakisuria. Krónikus esetben hólyagfal meszesedés, hydronephrosis, veseelégtelenség és HÓLYAG LAPHÁMCARCINOMA (Squamous cell carcinoma).',
            severity: 'severe'
          },
          {
            name: 'Intestinalis és Hepatosplenicus Schistosomiasis (S. mansoni / japonicum)',
            description: 'Krónikus véres hasmenés, hasi fájdalom. Máj-érintettség esetén Symmers pipaszár fibrosis, kifejezett splenomegalia, ascites, portalis hypertonia és életveszélyes OESOPHAGUS VARIX VÉRZÉS.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Terminalis haematuria (vizelet megtekintése)',
          'Kifejezett hepatosplenomegalia és ascites portalis formában',
          'Pókvénák (spider nevi) portalis hypertoniánál'
        ],
        complications: ['Hólyag Laphámcarcinoma (S. haematobium)', 'Oesophagus varix vérzés és Portalis Hypertonia', 'Hydronephrosis és idült veseelégtelenség', 'Pulmonalis hypertonia és Cor pulmonale']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet üledék', finding: 'Vörösvértestek és jellegzetes terminalis tüskés Schistosoma haematobium peték', interpretation: 'Diagnosztikus Urogenitalis formában (12:00-14:00 közötti vizeletgyűjtés!)' },
          { test: 'Vérkép', finding: 'Kifejezett Eosinophilia (különösen Katayama-lázban)', interpretation: 'Parazitás allergia' }
        ],
        imaging: [
          { modality: 'Hólyag és Hasi Ultrahang', finding: 'Hólyagfal megvastagodás, meszesedés, hydronephrosis; Májban periportalis hyperechogén szalagok (Symmers-fibrosis), splenomegalia', significance: 'Klasszikus szövődmények kimutatása' }
        ],
        microbiology: [
          { test: 'Széklet pete-vizsgálat', finding: 'S. mansoni (oldalsó tüskés pete) vagy S. japonicum (kerek, apró tüskés pete)', significance: 'Diagnosztikus bélformában' },
          { test: 'Szerológia (ELISA) / PCR', finding: 'Pozitív anti-Schistosoma IgG / DNS', significance: 'Utazók korai szűrésére' }
        ]
      },
      differential: [
        { disease: 'Hólyag TCC (Urothelialis carcinoma)', distinguishing: 'Cisztoszkópia, biopszia, pete jelenléte' },
        { disease: 'Cirrhosis hepatis (Alkoholos/Viralis)', distinguishing: 'Virus szerológia, periportalis pipaszár fibrosis UH képe' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Praziquantel PO', dose: '40 mg/kg (S. haematobium/mansoni) vagy 60 mg/kg (S. japonicum) PO 2-3 részre osztva', duration: '1 nap', note: 'GOLD STANDARD ELSŐ VONALBELI KEZELÉS! Akut Katayama-láz esetén 2-4 hét múlva ismétlés szükséges az éretté vált férgek elpusztítására!' }
          ]
        },
        targeted: 'Akut Katayama-lázban Praziquantel kombinálása Glukokortikoidokkal (Prednisolon 40mg/nap) a kifejezett szisztémás allergiás gyulladásos válasz csökkentésére.',
        supportive: ['Oesophagus varix vérzés endoszkópos ligatúrája', 'Sebészi urológiai rekonstrukció stricturáknál'],
        prevention: ['Trópusi édesvizekben (tavak, folyók) való fürdőzés, úszás, gázolás SZIGORÚ KERÜLÉSE!', 'Biztonságos ivóvíz']
      },
      prognosis: {
        mortality: 'Korai Praziquantel kezeléssel kiváló (<0.5%); előrehaladott varix vérzés vagy hólyagcarcinoma esetén rossz',
        prognostic_scores: ['Nincs'],
        factors: 'Szervek fibrotikus károsodásának mértéke, kezelés időpontja'
      }
    }
  ]
};

// Auto-register to window.diseases if window exists
if (typeof window !== 'undefined') {
  (window as any).diseases = (window as any).diseases || {};
  (window as any).diseases.parasitic = parazitaHu;
}
