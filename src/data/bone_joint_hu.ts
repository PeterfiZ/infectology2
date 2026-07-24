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
      id: 'osteomyelitis',
      name: 'Osteomyelitis (Akut és krónikus csontvelőgyulladás)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Staphylococcus aureus</i> (leggyakoribb: 50-70%,beleértve MRSA), <i>Staphylococcus epidermidis</i> (CoNS - implantátum/műtét után), <i>Streptococcus</i> spp., <i>Pseudomonas aeruginosa</i> (IV droghasználók, szúrt sebek), <i>Enterobacterales</i> (<i>E. coli</i>, <i>Klebsiella</i> - diabéteszes láb), <i>Salmonella</i> spp. (sarlósejtes anaemia), <i>Mycobacterium tuberculosis</i>',
        gram: 'Vegyes (főleg Gram-pozitív)',
        shape: 'coccus/bacillus'
      },
      epidemiology: {
        incidence: 'Gyermekeknél dominánsan hematogén (metaphysis), felnőtteknél posttraumás/postoperatív vagy contiguous (diabéteszes láb ulcusból).',
        risk_groups: [
          'Diabetes mellitus',
          'Perifériás artériás érbetegség',
          'Műtét/trauma/orthopeniás implantátum',
          'Intravénás droghasználók (IVDU)',
          'Krónikus hemodialízis',
          'Sarlósejtes anaemia (Salmonella kockázat)'
        ],
        seasonality: 'Nincs',
        transmission: 'Hematogén szórás, per continuitatem terjedés (fekélyből/lágyrészből), vagy direkt inokuláció (nyílt törés, műtét)'
      },
      pathomechanism: {
        steps: [
          'Behatolás: Hematogén szórás útján (gyermekek jól vaszkularizált metaphysisében vagy felnőtt csigolyákban), környező lágyrészfertőzésből/diabéteszes fekélyből (per continuitatem), vagy direkt inokulációval (trauma/műtét).',
          'Gyulladás és Ischaemia: A baktériumok elszaporodása intramedullaris ödémát és emelkedett csontvelői nyomást okoz. A microvascularis occlusio miatt csontnecrosis és elhalt csontsziget (sequester) alakul ki.',
          'Reaktív csontképződés & Sipoly: A periosteum alatt új csont (involucrum) képződik, amely körülveszi a sequestert. Gennyes sípok (sinus tract) törhetnek át a bőrre.',
          'Biofilm képződés: A Staphylococcusok MSCRAMM fehérjékkel a csontmátrixhoz és fémimplantátumokhoz tapadnak, védő extracellularis mátrixot (biofilm) képezve, amely védi őket a neutrofilektől és antibiotikumoktól.'
        ],
        virulence_factors: ['Biofilm képzés', 'Adhezinek (MSCRAMM)', 'Alfa/Panton-Valentine leukocidin (PVL) toxinok', 'Intracelluláris perzisztencia (osteoblastokban)']
      },
      clinical: {
        incubation: 'Napok (akut) vagy hetek-hónapok-évek (krónikus)',
        onset: 'Akut (hematogén/traumás) vagy lassan progresszív, indolens (krónikus)',
        symptoms: [
          {
            name: 'Akut osteomyelitis',
            description: 'Kifejezett, mély csontfájdalom, lokális duzzanat, melegség, bőrpír, láz és az érintett végtag terhelési képtelensége.',
            severity: 'severe'
          },
          {
            name: 'Krónikus osteomyelitis',
            description: 'Indolens, tompa fájdalom, perzisztáló vagy ciklikusan kiürülő gennyes sipoly (sinus tract), pörkösödés, láz általában hiányzik.',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Kifejezett lokális nyomásérzékenység a csont felett',
          'Melegség, duzzanat, erythema a felette lévő lágyrészekben',
          'Váladékozó sipolyjárat (sinus tract) jelenléte (krónikus formában)',
          'Probe-to-Bone (PTB) teszt: Diabéteszes lábfej ulcus alapjában steril fémszondával kemény, érdes csontfelület tapintható (magas specifikusság és szenzitivitás!)'
        ],
        complications: [
          'Krónikus osteomyelitis és csontdestrukció',
          'Pathológiás törés',
          'Szeptikus arthritis (ha a metaphysis az ízületi tokon belül van, pl. csípő, váll)',
          'Squamous cell carcinoma (Marjolin-ulcus) a krónikusan váladékozó sipolyjárat szélén',
          'Szeptikus shock és szisztémás szepszis'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP és We', finding: 'Jelentősen emelkedett (CRP > 50-100 mg/L)', interpretation: 'Alapvető a terápia monitorozására és a klinikai válasz megítélésére' },
          { test: 'Vérkép', finding: 'Leukocytosis balra tolt fvs-számmal', interpretation: 'Akut formában emelkedett, krónikus osteomyelitisben normális is lehet' },
          { test: 'Hemokultúra (2 pár)', finding: 'Pozitív (50-60%-ban akut hematogén formában)', interpretation: 'Kötelező levenni az antibiotikum indítása előtt' }
        ],
        imaging: [
          { modality: 'Röntgen', finding: 'Kezdetben (10-14 napig) negatív! Később periostalis reakció, lyticus léziók, corticalis erosio, sequester/involucrum', significance: 'Alapvizsgálat, de a korai diagnózist nem zárja ki' },
          { modality: 'MRI (kontrasztos)', finding: 'Csontvelő ödéma (T1 hypo-, T2/STIR hyperintenzitás), tályogképződés, lágyrész terjedés', significance: 'GOLD STANDARD imaging (szenzitivitás >90%, specificitás >85%)' },
          { modality: 'CT', finding: 'Sequestrum, corticalis destrukció, gázképződés kimutatása', significance: 'Kiváló fémimplantátumok jelenlétében vagy műtéti tervezéshez' },
          { modality: 'FDG-PET/CT', finding: 'Fokozott glükóz metabolizmus a csontban', significance: 'Hasznos krónikus formában vagy fém műtermékek esetén' }
        ],
        microbiology: [
          { test: 'Csontbiopszia (perkután CT-vezérelt vagy nyílt sebészi)', finding: 'Kórokozó azonosítás + hisztopatológia (neutrofil granulocyták, osteonecrosis)', significance: 'GOLD STANDARD diagnózis! Két mintát kell venni (mikrobiológia + hisztológia). Antibiotikum előtt kötelező!' },
          { test: 'Sipolyváladék tenyésztés', finding: 'Bőrelemek és kolonizáció', significance: 'NEM MEGBÍZHATÓ a mély csontfertőzés meghatározására (kivéve ha izolált S. aureus)!' }
        ],
        calculators: [
          {
            name: 'Cierny-Mader Osztályozás',
            items: [
              { label: 'Anatómiai: I. Medullaris (főleg hematogén)', points: 1 },
              { label: 'Anatómiai: II. Superficialis (felszíni csont erosio)', points: 2 },
              { label: 'Anatómiai: III. Localizált (körülírt, stabil csont)', points: 3 },
              { label: 'Anatómiai: IV. Diffúz (átmenő, instabil csont)', points: 4 }
            ],
            interpretation: [
              { min: 1, max: 4, text: 'A sebészi debridement és rekonstrukció terjedelmét határozza meg.' }
            ]
          }
        ]
      },
      differential: [
        { disease: 'Charcot osteoarthropathia', distinguishing: 'Diabéteszes neuropátia, kifejezett deformitás láz és emelkedett CRP nélkül; MRI/biopszia különíti el' },
        { disease: 'Ewing sarcoma / Osteosarcoma', distinguishing: 'Fiatal beteg, röntgenen "hagymahéj" periostalis reakció, hisztopatológia igazolja' },
        { disease: 'Cellulitis / Lágyrész tályog', distinguishing: 'A folyamat a lágyrészekre korlátozódik, az MRI-n a csontvelő jelitenzitása normális' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Nincs ambuláns empirikus terápia', dose: '-', duration: '-', note: 'Kórházi kivizsgálás és biopszia szükséges az antibiotikum előtt!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg IV q8-12h (AUC/MIC cél 400-600)', duration: 'Mintavétel után', note: 'MRSA és Gram-pozitív fedezet' },
            { drug: '+ Cefepime', dose: '2g IV q8h', duration: '', note: 'Gram-negatív (Pseudomonas) fedezet' },
            { drug: 'vagy Piperacillin/Tazobactam', dose: '4.5g IV q6h', duration: '', note: 'Széles spektrum (Gram-negatív + anaerob)' }
          ],
          icu: [
            { drug: 'Meropenem + Vancomycin', dose: 'Meropenem 1g IV q8h + Vancomycin 15-20mg/kg IV', duration: '', note: 'Szeptikus shock vagy súlyos immunszuppresszió esetén' }
          ]
        },
        targeted: 'A csontbiopszia tenyésztése alapján! MSSA: Cefazolin 3x2g IV vagy Flucloxacillin 4x2g IV; MRSA: Vancomycin / Daptomycin / Linezolid; Pseudomonas: Ciprofloxacin 2x750mg PO / Cefepime. Biofilm / Staphylococcus esetén kiegészítő Rifampicin (2x300-450mg PO) adható, de KIZÁRÓLAG debridement után és orális kombinációban!',
        supportive: [
          'Radikális sebészi debridement (minden elhalt csont/sequester eltávolítása) - ALAPVETŐ!',
          'Holttér kitöltése (antibiotikumos cement/beads, kalcium-szulfát szivacs)',
          'Limb immobilization és terheléscsökkentés',
          'Vascularis rekonstrukció / revaszkularizáció ha ischaemia áll fenn'
        ],
        prevention: [
          'Nyílt törések azonnali debridementje és profilaktikus antibiotikuma',
          'Diabéteszes lábfej ulcusok korai és szakszerű ellátása',
          'Műtéti asepsis szigorú betartása'
        ]
      },
      guidelines: {
        diagnosis: [
          'Képalkotás: MRI a legérzékenyebb és legspecifikusabb képalkotó. A sima röntgen az első 10-14 napban negatív lehet.',
          'Mikrobiológia: Csontbiopszia (perkután CT-vezérelt vagy nyílt) hisztológiával és tenyésztéssel kötelező az antibiotikum megkezdése előtt (kivéve ha a beteg hemodinamikailag instabil vagy szeptikus).',
          'Sipolyváladék tenyésztést ne használjunk a diagnózishoz, mert csak a bőrkolonizációt tükrözi.'
        ],
        treatment_indications: [
          'Minden igazolt osteomyelitis kezelendő: Radikális sebészi debridement + célzott antibiotikum terápia.'
        ],
        first_line: [
          'Empirikus: Vancomycin + Cefepime / Piperacillin-tazobactam.',
          'Célzott: Biopszia alapján. Az OVIVA trial (NEJM 2019) igazolta, hogy 1-2 hét IV kezelés után a jó biohasznosulású orális antibiotikumra (pl. fluoroquinolonok, clindamycin, linezolid, amoxicillin/clavulanate) való korai váltás NEM INFERIOR a 6 hetes végig IV terápiához képest, amennyiben sikeres sebészi debridement történt!'
        ]
      },
      prognosis: {
        mortality: 'Alacsony (<1-2%), de a morbiditás és a krónikussá válási ráta magas (10-30%)',
        prognostic_scores: ['Cierny-Mader staging system'],
        factors: 'Megfelelő sebészi debridement, végtagi vascularisatio, korai orális/IV célzott terápia, resecálhatatlan sequester'
      }
    },
    {
      id: 'septic_arthritis',
      name: 'Szeptikus arthritis (Akut gennyes ízületi gyulladás)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Staphylococcus aureus</i> (>50%, beleértve MRSA), <i>Streptococcus</i> spp. (A, B, C, G csoport, <i>S. pneumoniae</i>), <i>Neisseria gonorrhoeae</i> (fiatal, szexuálisan aktív felnőtteknél), Gram-negatív bélbaktériumok (<i>E. coli</i>, <i>Pseudomonas aeruginosa</i> - idősek, IVDU, immunszuppresszió), <i>Kingella kingae</i> (<4 év kisgyermekeknél)',
        gram: 'Vegyes (főleg Gram-pozitív)',
        shape: 'coccus/bacillus'
      },
      epidemiology: {
        incidence: '2-10/100,000 fő/év. Sürgősségi reumatológiai/orthopédiai vészhelyzet!',
        risk_groups: [
          'Idősek (>80 év)',
          'Rheumatoid arthritis és egyéb gyulladásos ízületi betegségek',
          'Ízületi protézis (PJI) vagy korábbi ízületi műtét/injekció',
          'Diabetes mellitus',
          'Immunszuppresszív / biológiai terápia',
          'Intravénás droghasználók (sterno-clavicularis, sacroiliacalis ízületek!)',
          'Szexuálisan aktív fiatalok (Gonococcus)'
        ],
        seasonality: 'Nincs',
        transmission: 'Hematogén szórás (leggyakoribb), direkt inokuláció (szúrás, műtét, artrocentézis), per continuitatem (lágyrész tályogból/osteomyelitisből)'
      },
      pathomechanism: {
        steps: [
          'Behatolás: A baktériumok a véráram útján jutnak a synovialis membránba (melynek nincs basalis membranája), vagy direkt inokulációval/szomszédos fertőzésből lépnek be az ízületi résbe.',
          'Gyulladásos kaszkád: A szaporodó baktériumok heves neutrofil granulocyta inváziót indítanak be, ami sűrű, gennyes ízületi folyadékgyülemet (effusio) eredményez.',
          'Irreverzibilis Porckárosodás: A PMN granulocytákból felszabaduló proteolítikus enzimek, lysosomalis enzimek és gyulladásos citokinek (TNF-a, IL-1) 24-48 órán belül elpusztítják a chondrocytákat és lebontják a proteoglycan/kollagén mátrixot!',
          'Nyomási ischaemia: Az emelkedett intraarticularis nyomás csökkenti a synovia vérkeringését, ami csont- és porcnecrosishoz, majd ankylozihoz vezet.'
        ],
        virulence_factors: ['Adhezinek (collagen-binding protein)', 'Proteázok és hyaluronidáz', 'Staphylococcal exotoxinok', 'Chondrocyta-apoptózist indukáló faktorok']
      },
      clinical: {
        incubation: '1-3 nap (akut bakteriális) vagy órák-napok',
        onset: 'Hiperakut vagy akut',
        symptoms: [
          {
            name: 'Akut Monoarthritis',
            description: 'Egyetlen nagy ízület (térd ~50%, csípő ~20%, váll, boka, csukló) hirtelen kialakuló, rendkívül heves, lüktető fájdalma, duzzanata, melegsége és bőrpírja.',
            severity: 'severe'
          },
          {
            name: 'Kifejezett Funkciókiesés',
            description: 'A beteg az ízületet a gyötrelmes fájdalom miatt sem AKTÍVAN, sem PASSZÍVAN nem képes mozgatni (antalgikus tartás). Magas láz, hidegrázás kíséri.',
            severity: 'severe'
          },
          {
            name: 'Disseminated Gonococcal Infection (DGI)',
            description: 'Migrációs polyarthralgia/arthritis, tenosynovitis (csukló/boka dorsumán), és pici, fájdalmas vesiculopustulosus bőrtünetek a végtagokon.',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Kifejezetten duzzadt, meleg, vörös ízület fluktuáló effusióval',
          'Rendkívül súlyos fájdalom még a legkisebb PASSZÍV mozgatási kísérletre is',
          'Izomvédekezés, a végtag antalgikus flexiós pozícióban rögzített',
          'Szisztémás jelek: magas láz, tachycardia, hypotonia (szepszis)'
        ],
        complications: [
          'Irreverzibilis porcdestrukció és korai osteoarthrosis',
          'Fibrosus vagy ossea ankylosis (ízületi elmerevedés)',
          'Szomszédos osteomyelitis és lágyrész tályogok',
          'Szeptikus shock és halál'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Synovialis folyadék analízis (Arthrocentesis)', finding: 'Zavaros/gennyes; Fvs > 50,000 /µL (gyakran > 100,000 /µL, >90% PMN); Gram-festés 50-75% pozitív', interpretation: 'SÜRGŐSSÉGI ALAPVIZSGÁLAT! Azonnal elvégzendő az antibiotikum előtt!' },
          { test: 'Synovialis laktát és glükóz', finding: 'Laktát > 10 mmol/L, glükóz a szérumérték <50%-a', interpretation: 'Bakteriális fertőzést igazol' },
          { test: 'Polarizációs mikroszkópia', finding: 'Negatív kristályokra (MSU/CPPD)', interpretation: 'Köszvény és pseudoköszvény kizárása (de a fertőzés és kristály együtt is előfordulhat!)' },
          { test: 'Vérkép, CRP, We', finding: 'Kifejezett leukocytosis balra tolt fvs-számmal, CRP > 100 mg/L', interpretation: 'Kifejezett szisztémás gyulladás' },
          { test: 'Hemokultúra (2 pár)', finding: 'Pozitív (30-50%-ban)', interpretation: 'Kötelező levétel' }
        ],
        imaging: [
          { modality: 'Ultrahang', finding: 'Ízületi folyadékgyülem, synovialis megvastagzkodás', significance: 'Első vonalbeli képalkotó, az ízületi punkció vezérléséhez kötelező!' },
          { modality: 'Röntgen', finding: 'Kezdetben csak lágyrész duzzanat; később ízületi rés beszűkülés, subchondralis erosio', significance: 'Baseline vizsgálat kizárni a törést vagy korábbi ízületi betegséget' },
          { modality: 'MRI', finding: 'Ízületi folyadék, synovialis kontraszthalmozás, csontvelő ödéma, lágyrész tályog', significance: 'Csípőízületi fertőzés vagy társult osteomyelitis/tályog gyanújában' }
        ],
        microbiology: [
          { test: 'Synovialis folyadék tenyésztés (aerob + anaerob + hemokultúrás palackba oltva)', finding: 'Kórokozó identifikálás + rezisztencia', significance: 'Célzott terápia alapja. Szenzitivitás 80-90%.' },
          { test: '16S rRNS PCR', finding: 'Bakteriális DNS', significance: 'Ha a beteg már antibiotikumot kapott és a tenyésztés negatív' }
        ]
      },
      differential: [
        { disease: 'Köszvényes roham (Gout)', distinguishing: 'Igen magas fvs lehet a synoviában, de polarizációs mikroszkóppal tű alakú, negatív kettőstörésű MSU kristályok láthatók' },
        { disease: 'Pseudoköszvény (CPPD)', distinguishing: 'Romboid alakú, pozitív kettőstörésű kalcium-pyrophosphat kristályok láthatók' },
        { disease: 'Reaktív arthritis', distinguishing: 'Steril ízületi gyulladás GI (Salmonella, Shigella) vagy GU (Chlamydia) fertőzés után; a punktátum steril' },
        { disease: 'Lyme arthritis', distinguishing: 'Általában kevesebb fájdalommal járó nagy ízületi effusio; Borrelia szerológia / PCR pozitív' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'NINCS AMBULÁNS KEZELÉS!', dose: '-', duration: '-', note: 'AZONNALI SÜRGŐSSÉGI KÓRHÁZI FELVÉTEL ÉS ÍZÜLETI PUNKCIÓ/DRENÁZS!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg IV q8-12h', duration: '2-4 hét', note: 'MRSA és Gram-pozitív fedezet' },
            { drug: '+ Ceftriaxone', dose: '1-2g IV q24h', duration: '', note: 'Gram-negatív és Gonococcus fedezet' },
            { drug: 'vagy Cefepime / Pip-Tazo', dose: '2g IV q8h / 4.5g IV q6h', duration: '', note: 'Pseudomonas kockázat esetén (IVDU, idős)' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'Vancomycin 15-20mg/kg IV + Meropenem 1g IV q8h', duration: '', note: 'Szeptikus shock vagy súlyos immunszuppresszió esetén' }
          ]
        },
        targeted: 'S. aureus (MSSA): Cefazolin 3x2g IV vagy Flucloxacillin 4x2g IV; MRSA: Vancomycin / Daptomycin 6-8mg/kg IV; N. gonorrhoeae: Ceftriaxone 1x1-2g IV (majd PO cefixime/azithromycin); Gram-negatív pálcák: Ceftriaxone / Cefepime / Ciprofloxacin.',
        supportive: [
          'ÍZÜLETI DECOMPRESSZIO ÉS DRENÁZS (KULCSFONTOSSÁGÚ!): Ismételt napi tűaspirációk, ARTHROSCOPIA és öblítés, vagy nyílt arthrotomia (csípőízületnél kötelező!)',
          'Adekvát analgézia (NSAID, opioidok)',
          'Átmeneti sínbe rögzítés az akut fájdalmas fázisban, majd KORAI PASSZÍV/AKTÍV FIZIOTERÁPIA az elmerevedés megelőzésére!'
        ],
        prevention: [
          'Asepticus technika szigorú betartása ízületi injekcióknál / arthroscopiánál',
          'Gonorrhoea megelőzése és partnerkezelés',
          'Bőr- és lágyrészfertőzések korai kezelése'
        ]
      },
      guidelines: {
        diagnosis: [
          'Arthrocentesis: Azonnali ízületi punkció és synovia elemzés (sejtszám, Gram, kristály, tenyésztés) kötelező az antibiotikum megkezdése előtt!',
          'Hemokultúra (2 pár) vétel minden esetben kötelező.',
          'Ultrahangos képalkotás javasolt a folyadékgyülem igazolására és a punkció vezérlésére.'
        ],
        treatment_indications: [
          'Minden szeptikus arthritis AZONNALI ízületi decompressziót (punkció/arthroscopia/műtét) és empirikus parenterális antibiotikumot igényel a porckárosodás megelőzésére!'
        ],
        first_line: [
          'Empirikus: Vancomycin + Ceftriaxone.',
          'Drenázs: Arthroscopia és mosás vagy ismételt tűaspirációk.',
          'Időtartam: Általában 2-4 hét. Klinikailag stabil, tünetmentes, normálozódó CRP-jű betegnél 1-2 hét IV után oralis váltás (OVIVA koncepció) alkalmazható.'
        ]
      },
      prognosis: {
        mortality: '10-15% (polyarticularis formában vagy idős, komorbid betegeknél akár 20-30%)',
        prognostic_scores: ['Nincs specifikus'],
        factors: 'A decompresszió/drenázs késése (>24-48 óra) irreverzibilis porckárosodáshoz és maradandó rokkantsághoz vezet!'
      }
    },
    {
      id: 'spondylodiscitis',
      name: 'Spondylodiscitis (Vertebral Osteomyelitis és Discitis)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Staphylococcus aureus</i> (30-50%, beleértve MRSA), <i>Staphylococcus epidermidis</i> (CoNS - spinalis műtét/instrumentáció után), <i>Streptococcus</i> spp., <i>Enterobacterales</i> (<i>E. coli</i>, <i>Klebsiella</i> - urogenitalis fókuszból), <i>Pseudomonas aeruginosa</i> (IVDU), <i>Mycobacterium tuberculosis</i> (Pott-kór), <i>Brucella</i> spp.',
        gram: 'Vegyes (főleg Gram-pozitív)',
        shape: 'coccus/bacillus'
      },
      epidemiology: {
        incidence: '2-7/100,000 fő/év. Gyakoribb 50 év feletti férfiaknál.',
        risk_groups: [
          'Idős kor (>50-60 év)',
          'Diabetes mellitus',
          'Intravénás droghasználók (IVDU)',
          'Krónikus vesebetegség / hemodialízis',
          'Infectiv endocarditis (akár 30%-ban társul!)',
          'Gerincműtét, epiduralis katéter, felületi gerinc inokuláció',
          'Urogenitalis fertőzés vagy beavatkozás (Batson-plexus útján)'
        ],
        seasonality: 'Nincs',
        transmission: 'Hematogén szóródás (főleg a. spinalis vagy Batson-féle vénás plexus útján), direkt inokuláció (műtét, epiduralis), per continuitatem'
      },
      pathomechanism: {
        steps: [
          'Hematogén szóródás: A baktériumok a véráram útján érik el a csigolyatest subchondralis, gazdagon vaszkularizált csontvelőjét.',
          'Terjedés a discusra: A fertőzés áttör a hyalin porclemezen az avascularis discus intervertebralisba. Mivel a felnőtt discus nem rendelkezik saját erekkel, a gyulladás az egész discust elpusztítja, majd ráterjed a szomszédos csigolyára (spondylodiscitis).',
          'Tályogképződés & Kompresszió: A gyulladásos folyamat áttörhet a környező lágyrészekbe, epiduralis tályogot, paravertebralis tályogot vagy psoas tályogot képezve.',
          'Neurológiai szövődmény: Az epiduralis tályog vagy a csigolya kollapszusa gerincvelői vagy cauda equina kompressziót okoz.'
        ],
        virulence_factors: ['Biofilm képződés', 'Adhezinek', 'Porcrobolsító enzimek']
      },
      clinical: {
        incubation: 'Hetek-hónapok (alattomos lefolyás)',
        onset: 'Subakut vagy krónikus (ritkábban akut fulmináns)',
        symptoms: [
          {
            name: 'Lokalizált Hát- és Derékfájás',
            description: 'A LEGFONTOSABB VEZETŐ TÜNET (>90%): Fokozatosan erősödő, nyugalomban és éjszaka is fennálló, tompa, mély hát- vagy derékfájás, ami nem csökken fekvésre.',
            severity: 'severe'
          },
          {
            name: 'Láz (bizonytalan)',
            description: 'Láz csak az esetek mintegy 50%-ában van jelen! Hiánya nem zárja ki a spondylodiscitist!',
            severity: 'moderate'
          },
          {
            name: 'Neurológiai Deficit (Vészhelyzet!)',
            description: 'Gyököki kisugárzó fájdalom, alsó végtagi paresis/paraesthesia, sensory level, széklet- vagy vizeletinkontinencia/retentio (Epiduralis tályog / gerincvelő kompresszió!).',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Kifejezett lokális nyomás- és kopogtatási érzékenység az érintett csigolya tövisnyúlványa felett',
          'Feltűnő paravertebralis izomspazmus és gerinc-mozgáskorlátozottság',
          'Neurológiai status: izomerő csökkenés, reflexeltérések, Lasegue-jel, sphiucter funkciók vizsgálata'
        ],
        complications: [
          'Epiduralis tályog (spinális kompresszió)',
          'Psoas tályog és paravertebralis phlegmone',
          'Gerinc instabilitás, csigolya kollapszus és kyphotikus deformitás',
          'Maradandó paraplegia / cauda equina szindróma'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP és We', finding: 'Szinte mindig jelentősen emelkedett (CRP > 50-100 mg/L, We > 50 mm/h)', interpretation: 'A legérzékenyebb laboratóriumi jelek és a terápia kövesének alapjai' },
          { test: 'Vérkép', finding: 'Normális vagy enyhe leukocytosis', interpretation: 'A fvs-szám gyakran normális subakut esetben' },
          { test: 'Hemokultúra (2-3 pár)', finding: 'Pozitív 50-70%-ban!', interpretation: 'KÖTELEZŐ LEVENNI! Ha pozitív, feleslegessé teheti az invazív gerincbiopsziát!' },
          { test: 'Echocardiographia (TTE/TEE)', finding: 'Billentyű vegetáció', interpretation: 'KÖTELEZŐ minden S. aureus, Enterococcus vagy Streptococcus spondylodiscitisben az infectiv endocarditis kizárására!' }
        ],
        imaging: [
          { modality: 'MRI (kontrasztos)', finding: 'Csigolyatest és discus ödéma (T1 hypo-, T2/STIR hyperintenzitás), kontraszthalmozás, epiduralis/psoas tályog', significance: 'GOLD STANDARD imaging (szenzitivitás és specificitás >90%)!' },
          { modality: 'CT', finding: 'Csontdestrukció, sequestration, gázképződés', significance: 'CT-vezérelt biopsziához vagy MRI kontraindikáció esetén' },
          { modality: '18F-FDG PET/CT', finding: 'Fokozott fókális FDG dúsítás', significance: 'Korai stádiumban vagy fém implantátumok műtermékei esetén' }
        ],
        microbiology: [
          { test: 'CT-vezérelt perkután tűbiopszia', finding: 'Tenyésztés (aerob, anaerob, gomba, TBC) + hisztopatológia', significance: 'KÖTELEZŐ, ha a hemokultúrák negatívak és nincs indikációja az azonnali műtétnek!' }
        ]
      },
      differential: [
        { disease: 'Degeneratív gerincbetegség (Modic I jel)', distinguishing: 'Nem jár lázzal, a CRP/We normális, az MRI-n a discus magasság csökkent, de nem halmozza a kontrasztanyagot úgy, mint a fertőzés' },
        { disease: 'Gerinc metasztázis / Myeloma multiplex', distinguishing: 'A daganat megkíméli a discust (csak a csigolyatest érintett!), míg a spondylodiscitis elpusztítja a discust!' },
        { disease: 'Tuberkulózis spondylodiscitis (Pott-kór)', distinguishing: 'Lassú, hónapokig tartó lefolyás, több csigolya érintett, hiányzik a láz, hidegtályog képződik' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Nincs ambuláns terápia', dose: '-', duration: '-', note: 'Sürgősségi kórházi felvétel és MRI kivizsgálás!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg IV q8-12h', duration: '6-8 hét', note: 'MRSA és Gram-pozitív fedezet' },
            { drug: '+ Cefepime', dose: '2g IV q8h', duration: '', note: 'Gram-negatív (Pseudomonas) fedezet' },
            { drug: 'vagy Ceftriaxone', dose: '2g IV q24h', duration: '', note: 'Ha Pseudomonas kockázat alacsony' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'Vancomycin 15-20mg/kg IV + Meropenem 1g IV q8h', duration: '', note: 'Szeptikus shock vagy súlyos neurológiai deficit esetén' }
          ]
        },
        targeted: 'Biopszia vagy hemokultúra alapján! S. aureus (MSSA): Cefazolin 3x2g IV vagy Flucloxacillin 4x2g IV; MRSA: Vancomycin / Daptomycin; Gram-negatív: Ceftriaxone / Cefepime / Ciprofloxacin.',
        supportive: [
          'KRITIKUS SZABÁLY: Klinikailag stabil, neurológiai tünetmentes betegnél az ANTIBIOTIKUMOT EL KELL HALASZTANI a mikrobiológiai mintavételig (hemokultúra / CT-biopszia)!',
          'Sebészi decompressio (laminectomia) és debridement AZONNAL indokolt: 1. Neurológiai deficit / gerincvelő kompresszió esetén; 2. Progresszív gerinc instabilitásnál; 3. Percutan nem drénálható nagy epiduralis/psoas tályognál.',
          'Merev gerincortézis (fűző) viselése a fájdalomcsillapításra és az instabilitás kivédésére'
        ],
        prevention: [
          'Infectiv endocarditis és urogenitalis fertőzések korai felismerése',
          'Spinalis beavatkozásoknál szigorú műtéti asepsis'
        ]
      },
      guidelines: {
        diagnosis: [
          'Klinikai gyanú: Perzisztáló hát/derékfájás + emelkedett CRP/We.',
          'MRI kontrasztanyaggal a gold standard diagnosztikus eszköz.',
          'Hemokultúra 2-3 pár levétele kötelező.',
          'CT-vezérelt biopszia végzendő, ha a hemokultúra negatív és stabil a beteg.'
        ],
        treatment_indications: [
          'Azonnali sebészi decompressio indokolt, ha neurológiai deficit vagy gerincvelő kompresszió áll fenn!'
        ],
        first_line: [
          'Kezdeti parenterális antibiotikum (2-3 hét), majd klinikailag stabil, lecsökkent CRP-jű betegnél orális váltás jó biohasznosulású szerekre.',
          'Teljes kezelési időtartam: 6-8 hét (IDSA Native Vertebral Osteomyelitis Guidelines).'
        ]
      },
      prognosis: {
        mortality: '2-10% (idős, komorbid betegeknél magasabb)',
        prognostic_scores: ['Nincs specifikus'],
        factors: 'Késői diagnózis, kezdeti neurológiai deficit jelenléte, nem kezelt infectiv endocarditis'
      }
    },
    {
      id: 'prosthetic_joint_infection',
      name: 'Protézis ízületi fertőzés (PJI / Periprosthetic Joint Infection)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Staphylococcus epidermidis</i> és egyéb CoNS (30-40%), <i>Staphylococcus aureus</i> (20-30%, beleértve MRSA), <i>Cutibacterium acnes</i> (főleg vállprotézisben), <i>Streptococcus</i> spp., <i>Enterococcus</i> spp., <i>Enterobacterales</i> (<i>E. coli</i>, <i>Klebsiella</i>), <i>Pseudomonas aeruginosa</i>, Polimikrobiális (10-15%)',
        gram: 'Vegyes (főleg Gram-pozitív CoNS és Staph)',
        shape: 'coccus/bacillus'
      },
      epidemiology: {
        incidence: 'Térd- és csípőprotézis beültetések 1-2%-ában fordul elő. Az orthopédiai sebészet egyik legsúlyosabb szövődménye!',
        risk_groups: [
          'Korábbi ízületi műtét vagy PJI előzmény',
          'Diabetes mellitus és elhízás (BMI > 35)',
          'Rheumatoid arthritis és szteroid/biológiai terápia',
          'Műtéti sebgyógyulási zavar, haematoma, elhúzódó sebszivárgás (>72 óra)',
          'Dohányzás'
        ],
        seasonality: 'Nincs',
        transmission: 'Műtéti inokuláció (leggyakoribb intraoperatív), korai postoperatív sebszétválásból, vagy késői hematogén szóródás távoli fókuszból (pl. fogászati, urogenitalis, bőr)'
      },
      pathomechanism: {
        steps: [
          'Adhézió: A baktériumok a műtét alatt vagy hematogén úton tapadnak a fém, kerámia vagy polietilén (implantátum) felszínére.',
          'Biofilm képződés: A baktériumok perceken/órákon belül extracellularis polimer mátrixot (biofilm) választanak ki. A biofilmben lévő baktériumok fenotípusosan megváltoznak, lassan osztódó "persister" sejtekké alakulnak.',
          'Rezisztencia: A biofilm védelmet nyújt a gazdaszervezet neutrofiljeivel, antitestjeivel és a standard antibiotikum-koncentrációkkal szemben (akár 1000x magasabb antibiotikum-szint kellene a kiirtásukhoz!).',
          'Aseptikus vs Szeptikus meglazulás: A biofilm körüli krónikus gyulladás osteolysist, csont-implantátum interfész pusztulást és a protézis meglazulását eredményezi.'
        ],
        virulence_factors: ['Biofilm exopoliszacharid mátrix', 'MSCRAMM adhezinek', 'Persister cell fenotípus', 'Intracelluláris túlélés']
      },
      clinical: {
        incubation: 'Műtét utáni napoktól (korai) évekig (krónikus)',
        onset: 'Akut (korai / hematogén) vagy indolens, krónikusan progresszív',
        symptoms: [
          {
            name: 'Korai PJI (<4 hét műtét után)',
            description: 'Akut ízületi fájdalom, erythema, duzzanat, melegség, sebszétválás, perzisztáló gennyes sebszivárgás, láz.',
            severity: 'severe'
          },
          {
            name: 'Késői Krónikus PJI (>3-4 hét/hónap műtét után)',
            description: 'Tompa, terhelésre és nyugalomban is fennálló ízületi fájdalom, a protézis korai meglazulása, funkcióromlás, láz általában hiányzik.',
            severity: 'moderate'
          },
          {
            name: 'Sinus Tract (Sipoly)',
            description: 'A bőrfelszínről közvetlenül az implantátumig/ízületi résig vezető váladékozó sipoly jelenléte - önmagában PATHOGNOMONIKUS PJI-re!',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Műtéti hegesedés körüli erythema, duzzanat, fokozott melegség',
          'Sebszivárgás vagy nyitott, váladékozó sipoly (sinus tract)',
          'Ízületi mozgásterjedelem beszűkülése, terhelési fájdalom',
          'Protézis instabilitás, meglazulás jelei'
        ],
        complications: [
          'Protézis meglazulása és súlyos csontvesztés (osteolysis)',
          'Többszöri revíziós műtétek, végtagrövidülés',
          'Girdlestone-állapot (rezekciós arthroplastica csípőnél)',
          'Amputáció szükségessége'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'CRP és We', finding: 'CRP > 10 mg/L (krónikusban), > 100 mg/L (akutban); We > 30 mm/h', interpretation: 'Alapvető szűrőteszt. Ha mindkettő negatív, a PJI valószínűsége alacsony.' },
          { test: 'Synovialis folyadék punkció (Arthrocentesis)', finding: 'Akut PJI: Fvs > 10,000 /µL (>90% PMN); Krónikus PJI: Fvs > 2,000-3,000 /µL (>70% PMN)', interpretation: 'EBJIS 2021 definíció szerinti kulcsdiagnosztika!' },
          { test: 'Alfa-defenzin / Leukocyta észteráz csík teszt', finding: 'Pozitív', interpretation: 'Magas specificitású synovialis biomarkerek' }
        ],
        imaging: [
          { modality: 'Röntgen', finding: 'Protézis körüli osteolysis, radiolucens vonal (>2 mm), korai meglazulás, periostalis reakció', significance: 'Baseline képalkotás meglazulás kimutatására' },
          { modality: 'Ultrahang', finding: 'Ízületi folyadékgyülem, subperiostalis tályog', significance: 'Arthrocentesis vezérlésére' },
          { modality: 'Leukocyta szcintigráfia / FDG-PET/CT', finding: 'Fokozott dúsítás az implantátum-csont interfészen', significance: 'Kétséges krónikus esetekben' }
        ],
        microbiology: [
          { test: 'Műtéti szövetminták (Periprosthetic tissue)', finding: 'Kórokozó azonosítás', significance: 'Legalább 3-5 KÜLÖNÁLLÓ mintát kell venni külön szikével mikrobiológiára!' },
          { test: 'Eltávolított protézis SONIKÁLÁSA (Sonication)', finding: 'A biofilmből feltárt baktériumok tenyésztése (>50 CFU/ml)', significance: 'Kiemelkedő mikrobiológiai szenzitivitás!' },
          { test: 'Hisztopatológia (Krenn-féle synovia osztályozás)', finding: '>5 neutrofil granulocyta / HPF (high-power field)', significance: 'Azonnali intraoperatív fagyasztott metszet diagnózis' }
        ]
      },
      differential: [
        { disease: 'Aseptikus protézis meglazulás', distinguishing: 'A CRP/We normális, a synovia Fvs < 1,500/µL, a tenyésztés és hisztológia negatív' },
        { disease: 'Arthrofibrosis', distinguishing: 'Ízületi merevség fertőzéses jelek és emelkedett gyulladásos markerek nélkül' },
        { disease: 'Kristály-arthropathia protézis mellett', distinguishing: 'Polarizációs mikroszkópia kristályokat mutat' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Nincs ambuláns terápia', dose: '-', duration: '-', note: 'Orthopédiai / infektológiai centrum kivizsgálás szükséges!' }
          ],
          inpatient: [
            { drug: 'Vancomycin', dose: '15-20 mg/kg IV q8-12h', duration: 'Sebészi mintavétel után', note: 'MRSA és CoNS fedezet' },
            { drug: '+ Cefepime / Meropenem', dose: '2g IV q8h / 1g IV q8h', duration: '', note: 'Gram-negatív pálcák ellen' }
          ],
          icu: [
            { drug: 'Vancomycin + Meropenem', dose: 'IV', duration: '', note: 'Szeptikus shock esetén' }
          ]
        },
        targeted: 'Tenyésztés alapján! Staphylococcus PJI esetén KÖTELEZŐ Biofilm-aktív RIFAMPICIN adása (2x300-450 mg PO) orális kombinációban (pl. fluoroquinolonnal, cotrimoxazollal vagy clindamycinnel) a sebészi debridement után! Kezelési időtartam: 12 hét (csípő és térd).',
        supportive: [
          'SEBÉSZI STRATÉGIÁK (EBJIS 2021 consensus):',
          '1. DAIR (Debridement, Antibiotics, and Implant Retention): Csak KORAI (<3-4 hét) vagy AKUT HEMATOGÉN fertőzésnél, stabil protézisnél! Mobilis elemek (liner/insert) cseréje kötelező!',
          '2. Egyfázisú csere (One-stage revision): Ismert, érzékeny kórokozó és jó lágyrészviszonyok esetén egy műtétben protézis csere antibiotikumos cementtel.',
          '3. Kétfázisú csere (Two-stage revision): GOLD STANDARD krónikus, nehezen kezelhető/rezisztens kórokozóknál. 1. műtét: Protézis kivétel + antibiotikumos cement spacer; 6 hét targetált antibiotikum; 2. műtét: Új protézis beültetés.',
          '4. Suppresszív antibiotikum terápia: Műtétileg nem operálható betegnél életfogytiglan orális antibiotikum.'
        ],
        prevention: [
          'Műtét előtti MRSA/MSSA orr-szűrés és dekolonizáció (Mupirocin)',
          'Perioperatív antibiotikum profilaxis (Cefazolin / Vancomycin) időben történő adása',
          'Szigorú lamináris légáramlásos műtéti higiéné'
        ]
      },
      guidelines: {
        diagnosis: [
          'EBJIS 2021 Consensus Definíció:',
          'Azonnali igazolt PJI: Sinus tract (sipoly) jelenléte, VAGY purulens synovia, VAGY azonos kórokozó tenyészik ≥2 különálló műtéti mintából/sonikációból, VAGY hisztológián >5 PMN/HPF.',
          'Punkció kötelező a műtét előtt (Fvs, sejtdifferenciálás, tenyésztés).'
        ],
        treatment_indications: [
          'Minden PJI összehangolt sebészi (DAIR, egy- vagy kétfázisú csere) és biofilm-aktív targetált antibiotikum terápiát igényel.'
        ],
        first_line: [
          'Staphylococcus PJI esetén Rifampicin-alapú kombinációs terápia kötelező!',
          'Teljes antibiotikum időtartam: 12 hét.'
        ]
      },
      prognosis: {
        mortality: '1-3% 1 éven belül, de idős betegeknél akár 10-15%',
        prognostic_scores: ['EBJIS / MSIS PJI criteria'],
        factors: 'Biofilm-aktív terápia (Rifampicin) alkalmazása, megfelelő sebészi stratégia kiválasztása, kórokozó rezisztencia'
      }
    },
    {
      id: 'septic_bursitis',
      name: 'Szeptikus bursitis (Fertőzéses nyálkatömlő-gyulladás)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Staphylococcus aureus</i> (>80%, beleértve MRSA), <i>Streptococcus pyogenes</i> (GAS) és egyéb <i>Streptococcus</i> spp., Coagulase-negatív Staphylococci',
        gram: 'Gram-pozitív',
        shape: 'coccus'
      },
      epidemiology: {
        incidence: 'Gyakori fekvő- és járóbeteg orthopédiai/infektológiai kórkép.',
        risk_groups: [
          'Fizikai munkát végzők (térdelő/könyöklő munka: vízvezeték-szerelők, burkolók)',
          'Sportolók (horzsolások, kontakt sportok)',
          'Diabetes mellitus',
          'Köszvény / Rheumatoid arthritis',
          'Alkoholizmus / Krónikus vesebetegség',
          'Immunszupprimált betegek'
        ],
        seasonality: 'Nincs',
        transmission: 'Direkt inokuláció mikrotrauma, bőrhorzsolás, szúrás útján, vagy per continuitatem terjedés a felette lévő cellulitisből'
      },
      pathomechanism: {
        steps: [
          'Lokalizáció: A felületes elhelyezkedésű bursák (leggyakrabban Olecranon bursa a könyöknél ~50%, és Prepatellaris bursa a térdnél ~45%) mikrotraumának és dörzsölésnek vannak kitéve.',
          'Behatolás: A bőr mikrofiluráján vagy horzsolásán keresztül a Staphylococcusok bejutnak a bursa zárt tömlőjébe.',
          'Exsudatio & Gennygyülem: A bursa synovia-szerű bélése heves gyulladással válaszol, gennyes exsudatum halmozódik fel a tömlőben.',
          'Lágyrész terjedés: Kezeletlen esetben a bursa áttörhet, kiterjedt cellulitist, lágyrész tályogot vagy ritkán osteomyelitis/szeptikus arthritist okozva.'
        ],
        virulence_factors: ['Koaguláz', 'Alfa-toxin', 'PVL toxin', 'Adhezinek']
      },
      clinical: {
        incubation: '1-5 nap (mikrotrauma után)',
        onset: 'Akut',
        symptoms: [
          {
            name: 'Fluktuáló Bursa Duzzanat',
            description: 'Kifejezett, körülírt, fluktuáló, vörös, meleg és fájdalmas duzzanat a könyök (olecranon) vagy a térdkalács (prepatellaris) felett.',
            severity: 'severe'
          },
          {
            name: 'Ízületi Mozgás MEGŐRZÖTT!',
            description: 'A szomszédos ízület PASSZÍV MOZGÁSTERJEDELME MEGŐRZÖTT ÉS FÁJDALMATLAN (főleg flexióban feszülhet a bőr), ami az ALAPVETŐ különbség a szeptikus arthritistől!',
            severity: 'moderate'
          },
          {
            name: 'Láz és Cellulitis',
            description: 'Láz az esetek ~40-50%-ában van jelen. A bursa feletti bőr gyakran cellulitises, meleg, hyperaemiás.',
            severity: 'moderate'
          }
        ],
        physical_exam: [
          'Körülírt, meleg, vörös, nyomásérzékeny fluktuáló terime a bursa felett',
          'Bőrsérülés, horzsolás vagy pörk a bursa csúcsán',
          'Az ÍZÜLET PASSZÍV MOZGATÁSA NEM FÁJDALMAS (szemben a szeptikus arthritissel!)',
          'Regionális lymphangitis és lymphadenopathy'
        ],
        complications: [
          'Bursa spontán áttörése és krónikusan váladékozó sipoly',
          'Kiterjedt lágyrész phlegmone / cellulitis',
          'Felszíni csonterosio / osteomyelitis (olecranon / patella csúcs)',
          'Recidiváló szeptikus bursitis'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Bursapunkció és aspirátum elemzés', finding: 'Gennyes/zavaros; Fvs > 20,000-50,000 /µL (>80% PMN); Gram-festés 60-70% pozitív', interpretation: 'SÜRGŐSSÉGI DIAGNOSZTIKUS ÉS TERÁPIÁS BEAVATKOZÁS!' },
          { test: 'Polarizációs mikroszkópia', finding: 'Kristályok jelenléte/hiánya', interpretation: 'Köszvényes bursitis kizárására/igazolására' },
          { test: 'Vérkép, CRP', finding: 'Leukocytosis, emelkedett CRP', interpretation: 'Szisztémás gyulladásos válasz megítélésére' }
        ],
        imaging: [
          { modality: 'Ultrahang', finding: 'Folyadékkal teli, megvastagodott falú bursa, hyperechoic tartalom, felette lévő lágyrész hyperechoicitás', significance: 'Alapvető képalkotó a bursa aspiráció vezérlésére és a mély ízületi érintettség kizárására!' },
          { modality: 'Röntgen', finding: 'Soft tissue duzzanat; korábbi bursitis meszesedése; csont erosio hiánya', significance: 'Kizárni az olecranon/patella törést vagy osteomyelitist' }
        ],
        microbiology: [
          { test: 'Bursa aspirátum tenyésztés (aerob + anaerob)', finding: 'S. aureus vagy Streptococcus azonosítás', significance: 'Célzott antibiotikum terápia alapja' }
        ]
      },
      differential: [
        { disease: 'Aseptikus / Traumatás bursitis', distinguishing: 'Nincs láz, a bőrpír és melegség minimális, a bursa aspirátum szalmasárga/haemorrhagiás, fvs < 2,000/µL, Gram-festés és tenyésztés negatív' },
        { disease: 'Köszvényes bursitis (Gout)', distinguishing: 'Kifejezett gyulladás lehet, de az aspirátumban MSU kristályok láthatók' },
        { disease: 'Szeptikus arthritis', distinguishing: 'A szeptikus arthritisnél az ízület PASSZÍV mozgatása is képtelenség a gyötrelmes fájdalom miatt, míg bursitisnél az ízületi passzív mozgás megőrzött!' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefalexin', dose: '500 mg - 1g PO q6h', duration: '7-14 nap', note: 'Enyhe, szisztémás tünetmentes esetben bursapunkció után' },
            { drug: 'vagy Amoxicillin/Clavulanate', dose: '875/125 mg PO q12h', duration: '7-14 nap', note: 'Szélesebb spektrum' },
            { drug: 'vagy Clindamycin', dose: '300-450 mg PO q8h', duration: '7-14 nap', note: 'Penicillin allergia vagy MRSA gyanú esetén' }
          ],
          inpatient: [
            { drug: 'Cefazolin', dose: '1-2g IV q8h', duration: '7-14 nap', note: 'Szisztémás tünetek vagy terjedő cellulitis esetén' },
            { drug: 'vagy Vancomycin', dose: '15-20 mg/kg IV q8-12h', duration: '7-14 nap', note: 'Súlyos eset vagy MRSA kockázat esetén' }
          ],
          icu: [
            { drug: 'Vancomycin + Piperacillin/Tazobactam', dose: 'IV', duration: '', note: 'Szeptikus shock vagy szövődményes phlegmone esetén' }
          ]
        },
        targeted: 'Tenyésztés alapján! MSSA: Cefalexin PO / Cefazolin IV / Flucloxacillin; MRSA: Trimethoprim/Sulfamethoxazole PO / Doxycycline PO / Vancomycin IV; GAS: Penicillin V / Amoxicillin.',
        supportive: [
          'BURSA ASPIRÁCIÓ ÉS LEÜRÍTÉS: Tűaspiráció (akár naponta ismételve a folyadék újratermelődéséig)',
          'Bursectomia (sebészi bursa eltávolítás): Indokolt refrakter, perzisztáló fertőzés, tályogképződés vagy orális/IV antibiotikum melletti terápiahiány esetén!',
          'Végtag felpolcolása (elevation) és nyugalomban tartása'
        ],
        prevention: [
          'Könyök- és térdvédő használata fizikai munkánál és sportnál',
          'Felszíni bőrsérülések, horzsolások azonnali fertőtlenítése'
        ]
      },
      guidelines: {
        diagnosis: [
          'Bursa aspiráció (bursapunkció) kötelező a fertőzéses és aseptikus/köszvényes eredet elkülönítésére!',
          'Kulcs klinikai jel: Az ízület PASSZÍV mozgása megőrzött (elkülönítés szeptikus arthritistől).'
        ],
        treatment_indications: [
          'Minden szeptikus bursitis percutan bursa aspirációt és szisztémás (orális vagy IV) antistaphylococcalis antibiotikumot igényel.'
        ],
        first_line: [
          'Enyhe eset: Bursa aspiráció + orális Cefalexin / Amoxicillin-clavulanate / Clindamycin 7-14 napig.',
          'Súlyos / lázas eset: IV Cefazolin vagy Vancomycin. Sikertelenség esetén sebészi bursectomia.'
        ]
      },
      prognosis: {
        mortality: 'Kiváló (<1%), de a gyógyulási idő elhúzódó lehet',
        prognostic_scores: ['Nincs specifikus'],
        factors: 'Adekvát bursa kiürítés, korai antibiotikum indítás, komorbiditások (diabetes)'
      }
    }
  ]
};

if (typeof window !== 'undefined') {
  if (!(window as any).diseases) {
    (window as any).diseases = {};
  }
  (window as any).diseases.bone_joint = boneJointHu;
}
