import { Category } from '../types';

export const zoonosisHu: Category = {
  name: 'Zoonózisok',
  icon: '🐾',
  color: '#059669',
  diseases: [
    {
      id: 'leptospirosis',
      name: 'Leptospirosis',
      pathogen: {
        type: 'Spirochaeta',
        name: '<i>Leptospira interrogans</i> (több mint 250 szerovár, pl. icterohaemorrhagiae, canicola, pomona)',
        gram: 'Gram-negatív (halvány, sötétlátótér/ezüstzés)',
        shape: 'vékony, spirális, horog alakú végekkel'
      },
      epidemiology: {
        incidence: 'Trópusi/szubtrópusi területeken 10-100/100,000; mérsékelt övben 0.1-1/100,000 fő/év. A legelterjedtebb zoonózis a világon!',
        risk_groups: [
          'Mezőgazdasági munkások, rizstermesztők',
          'Állatorvosok, állatgondozók, vágóhídi dolgozók',
          'Csatornakarbantartók, vízügyi dolgozók',
          'Vízisportolók, kempingezők, extrém sportolók (vadvízi evezés, triatlon)',
          'Rágcsálókkal érintkező lakosság, katonák'
        ],
        seasonality: 'Mérsékelt övben nyár végén-ősszel, trópusokon az esős évszakban/árvizek után',
        transmission: 'Fertőzött állatok (főleg rágcsálók, kutyák, sertések) vizeletével szennyezett édesvíz, nedves talaj vagy iszap áthatolása a sérült bőrön vagy nyálkahártyákon (kötőhártya, száj, orr).'
      },
      pathomechanism: {
        steps: [
          'Behatolás: A baktériumok a bőr apró hámhiányain vagy ép nyálkahártyákon keresztül hatolnak be a szervezetbe édesvízi expozíció során.',
          'Haematogen szóródás & Endothel károsodás: A kórokozó gyorsan a véráramba jut (leptospiremia fázis), eléri a szerveket és szisztémás vasculitist okoz a kiserek endotheljének károsításával.',
          'Kapilláris permeabilitás & Vérzések: Az endothel károsodása miatt fokozott kapilláris áteresztőképesség, szervödéma, diffúz petechia és szisztémás vérzékenység alakul ki.',
          'Weil-betegség: A súlyos forma (~5-10%) hepatorenalis szindrómával (kolesztatikus icterus transzamináz emelkedés nélkül, akut tubuláris nekrózis) és súlyos tüdővérzéses szindrómával (LPHS - Leptospirosis Pulmonary Hemorrhage Syndrome) jár.',
          'Immun fázis: A 2. héttől az IgM antitestek megjelenésével a baktériumok eltűnnek a vérből és a vesetubulusokban/csarnokvízben halmozódnak fel (asepticus meningitis, uveitis).'
        ],
        virulence_factors: ['LipL32 outer membrane protein', 'Endothel adhezinek', 'Szelektív kolesztázist indukáló faktorok', 'Haemolysinek', 'Flagellaris motilitás']
      },
      clinical: {
        incubation: '2-30 nap (átlagosan 7-12 nap)',
        onset: 'Klasszikusan bifázisos (szeptikus/leptospiremiás fázis -> immun fázis)',
        symptoms: [
          {
            name: 'Anictericus forma (90%) - Akut / Szeptikus fázis',
            description: 'Hirtelen kezdődő magas láz, hidegrázás, súlyos retrobulbaris fejfájás, kifejezett vádli- és deréktáji izomfájdalom (myalgia). Pathognomikus a Conjunctivalis suffusio (a kötőhártya belövelltsége gennyes váladékozás nélkül).',
            severity: 'moderate'
          },
          {
            name: 'Anictericus forma - Immun fázis',
            description: 'Néhány napos láztalanság után visszatérő láz, asepticus meningitis (fejfájás, tarkókötöttség, liquor pleocytosis), uveitis, maculopapulosus kiütések.',
            severity: 'moderate'
          },
          {
            name: 'Weil-betegség (Ictericus forma, 5-10%)',
            description: 'Súlyos, életveszélyes forma! Triász: 1. Narancssárga árnyalatú icterus kolesztázissal; 2. Akut veseelégtelenség (oliguria/anuria, kreatinin emelkedés); 3. Vérzéses diathesis (petechiae, ecchymosis, epistaxis, GI vérzés).',
            severity: 'severe'
          },
          {
            name: 'Leptospirosis Pulmonary Hemorrhage Syndrome (LPHS)',
            description: 'Masszív alveoláris tüdővérzés hirtelen kialakuló haemoptoéval, asphyxiával, fulmináns ARDS-sel. A halálozás meghaladhatja az 50%-ot!',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Conjunctivalis suffusio (kötőhártya belövelltség váladék nélkül - kifejezetten jellegzetes!)',
          'Kifejezett vádli izom tapintási érzékenység (myositis)',
          'Icterus (narancssárga tónusú)',
          'Hepatomegalia és lépérzékenység',
          'Meningealis izgalmi jelek (tarkókötöttség)',
          'Petechiae, purpura, szúrásnyomi vérzések',
          'Pneumonia / pulmonalis hemorrhagia feletti szörnyzörejek'
        ],
        complications: [
          'Weil-szindróma (akut veseelégtelenség + icterus)',
          'Masszív tüdővérzés (LPHS) és ARDS',
          'Asepticus meningitis és encephalitis',
          'Myocarditis, arrhythmia, szzeptikus shock',
          'Késői uveitis (hónapokkal a gyógyulás után)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Kifejezett leukocytosis balra tolt fvs-számmal, kifejezett thrombocytopenia (<100 G/L)', interpretation: 'Súlyos lefolyásra és DIC-re utal' },
          { test: 'Vese és Elektrolitok', finding: 'Kreatinin és BUN hirtelen↑, hypokalaemia (korai stádiumban a tubuláris károsodás miatt!), proteinuria, hematuria', interpretation: 'Akut tubuláris nekrózis jele' },
          { test: 'Májenzimek és Bilirubin', finding: 'Bilirubin↑↑ (főleg direkt, akár >200-300 µmol/L) aránytalanul ENYHE transzamináz emelkedés mellett (GOT/GPT < 200 U/L), ALP/GGT emelkedett', interpretation: 'Jellegzetes "kolesztatikus-disszociált" májfunkciós minta!' },
          { test: 'CK és CRP', finding: 'Kreatin-kináz (CK) kifejezetten emelkedett (>1000 U/L), CRP/We markánsan magas', interpretation: 'Vádli rhabdomyolysis / myositis igazolása' }
        ],
        imaging: [
          { modality: 'Mellkas röntgen / CT', finding: 'Hópehely-szerű (snowflake) vagy foltos bilaterális parenchymás infiltrátumok, alveoláris opacitások', significance: 'Pulmonalis hemorrhagia / tüdővérzés korai kimutatása' },
          { modality: 'Hasí ultrahang', finding: 'Normalis vagy enyhén megnagyobbodott hepatosplenomegalia, epehólyag fal ödéma, vesék echogenitás növekedése', significance: 'Egyéb sárgaság okok kizárása' }
        ],
        microbiology: [
          { test: 'RT-PCR (Vér és Liquor / Vizelet)', finding: 'Leptospira DNS kimutatás', significance: 'A LEGHATÉKONYABB KORAI DIAGNOSZTIKA! Az első 7 napban vérből/liquorból, a 2. héttől vizeletből származó mintából.' },
          { test: 'Mikroagglutinációs Teszt (MAT)', finding: 'Egyedi titer ≥1:400 vagy 4-szeres titeremelkedés páros savóból', significance: 'SZEROLÓGIAI GOLD STANDARD, de csak a 7-10. naptól válik pozitívvá!' },
          { test: 'ELISA IgM', finding: 'Pozitív Leptospira-specifikus IgM', significance: 'Gyors szűrővizsgálat az 1. hét végétől' }
        ]
      },
      differential: [
        { disease: 'Dengue láz', distinguishing: 'Trópusi anamnézis, kifejezett retroorbitalis fájdalom, tourniquet teszt pozitív, nincs vádli myositis' },
        { disease: 'Súlyos Falciparum Malária', distinguishing: 'Perifériás vérkenetből / gyorstesztből Plasmodium kimutatható, lázmenet periodicitása' },
        { disease: 'Hantavírus fertőzés (HFRS)', distinguishing: 'Rágcsáló urina inhaláció, arc kipirulása (facial flush), súlyos proteinuria, nincs kifejezett icterus' },
        { disease: 'Vírusos Hepatitis (HAV/HBV/HEV)', distinguishing: 'Kifejezetten magas transzamináz értékek (>1000 U/L), lassabb kezdet, szpecificus szerológia' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Doxycyclin', dose: '2x100 mg PO', duration: '7 nap', note: 'Enyhe anictericus esetekben első választás!' },
            { drug: 'Amoxicillin', dose: '3x500 mg PO', duration: '7 nap', note: 'Alternatíva terheseknek és gyermekeknek' },
            { drug: 'Azithromycin', dose: '1x500 mg PO', duration: '3 nap', note: 'Penicillin/doxycyclin allergia esetén' }
          ],
          inpatient: [
            { drug: 'Penicillin G', dose: '6x1.5-2 millió NE IV', duration: '7 nap', note: 'Súlyos / Weil-betegség első vonalbeli kezeése!' },
            { drug: 'Ceftriaxon', dose: '1x2 g IV', duration: '7 nap', note: 'Egyenértékű alternatíva a Penicillin G-vel' },
            { drug: 'Cefotaxim', dose: '3x2 g IV', duration: '7 nap', note: 'Alternatív IV cephalosporin' }
          ],
          icu: [
            { drug: 'Ceftriaxon IV + Szupportív Intenzív Terápia', dose: 'Ceftriaxon 1x2 g IV', duration: '7-10 nap', note: 'Azonnali hemodialízis / CRRT veseelégtelenségben; protective lélegeztetés tüdővérzésben!' }
          ]
        },
        targeted: 'Enyhe lefolyás: Doxycyclin 2x100 mg PO (vagy Amoxicillin). Súlyos / Weil-betegség: Penicillin G 6x1.5-2M NE IV vagy Ceftriaxon 1x2g IV 7 napig. Jarisch-Herxheimer reakció felléphet az első dózis után!',
        supportive: [
          'Veseelégtelenségben korai hemodialízis vagy folyamatos vénás-vénás hemofiltráció (CVVH / CRRT)',
          'Tüdővérzés esetén agresszív, alacsony tidal volumenű gépi lélegeztetés (ARDS protokoll), korai PEEP',
          'Thrombocytopenia és súlyos vérzés esetén trombocita- és friss fagyasztott plazma (FFP) transzfúzió',
          'Megfelelő folyadék- és elektrolit-egyensúly szoros monitorozása'
        ],
        prevention: [
          'Kockázati munkakörökben és árvíz idején védőfelszerelés (gumicsizma, kesztyű, védőszemüveg)',
          'Rágcsálóirtás és az édesvizek szennyeződésének megakadályozása',
          'Magas kockázatú rövid távú expozíció esetén (pl. extrém sportolók) Doxycyclin kemoprofilaxis (200 mg hetente 1x)'
        ]
      },
      guidelines: {
        diagnosis: [
          'A korai szeptikus fázisban (<7 nap) a vér és liquor RT-PCR a leghatékonyabb diagnosztikus eszköz.',
          'A szerológiai arany standard a MAT (Microscopic Agglutination Test), de ez csak a 2. héttől válik pozitívvá.',
          'Conjunctivalis suffusio + vádli fájdalom + sárgaság kolesztatikus mintával = Leptospirosis gyanúja!'
        ],
        treatment_indications: [
          'Minden gyanús esetet azonnal antibiotikummal kell kezelni, nem szabad megvárni a szerológiai igazolást!'
        ],
        first_line: [
          'Enyhe eset: Doxycyclin 2x100 mg PO 7 napig.',
          'Súlyos eset / Weil-betegség: Penicillin G 6x1.5-2M NE IV vagy Ceftriaxon 1x2 g IV 7 napig.'
        ]
      },
      prognosis: {
        mortality: 'Anictericus forma: <1%; Weil-betegség: 10-15%; Tüdővérzéses szindróma (LPHS): >50%',
        prognostic_scores: ['SOFA score', 'APACHE II'],
        factors: 'Idős kor, oliguria/anuria, kifejezett thrombocytopenia, tüdővérzés jelenléte'
      }
    },
    {
      id: 'hantavirus',
      name: 'Hantavírus fertőzés (HFRS és HPS)',
      pathogen: {
        type: 'Vírus',
        name: '<i>Hantaviridae</i> család (Óvilági: Puumala, Dobrava-Belgrade, Hantaan, Seoul -> HFRS; Újvilági: Sin Nombre, <b style="color: #ef4444">Andes</b>, Bayou -> HPS)',
        gram: 'Burkolt, tri-segmentált negatív-szálú RNS vírus',
        shape: 'gömbölyded / szferikus'
      },
      epidemiology: {
        incidence: 'Európában évente >10,000 HFRS eset (főleg Puumala vírus Észak- és Közép-Európában, Dobrava a Balkánon és hazánkban). Újvilágban HPS sporadikus.',
        risk_groups: ['Erdészek, mezőgazdasági dolgozók', 'Katonák, kempingezők, túrázók', 'Avar, szénapadlás, lakatlan hobbiházak takarítói', 'Rágcsálók közelében élők'],
        seasonality: 'Tavasztól őszig (rágcsáló populáció szaporodási csúcsa és szabadtéri aktivitás)',
        transmission: 'Fertőzött rágcsálók (erdei pocok, pirókegér, vándorpatkány) beszáradt vizeletével, ürülékével vagy nyálával szennyezett por belélegzése (aeroszol). Kivétel: az <b style="color: #ef4444">Andes vírus</b> emberről emberre is terjedhet!'
      },
      pathomechanism: {
        steps: [
          'Aeroszol inhaláció: A vírus a rágcsáló ürülékével szennyezett por belélegzésével jut a tüdőbe.',
          'Endothel tropizmus: A Hantavírusok szelektíven a vascularis endothel sejteket fertőzik meg béta-3 integrin receptorokon keresztül, anélkül, hogy közvetlen lyticus sejthalált okoznának.',
          'T-sejt mediált immunpathogenesis: A gazdaszervezet cytotoxicus T-sejtjei és a szintetizálódó gyulladásos citokinek (TNF-alfa, IL-6, VEGF) meglazítják az endothel sejtek közötti tight junction kapcsolatokat.',
          'Vascularis leak szindróma: A kapilláris szivárgás következtében folyadékvesztés, plazma extravasatio és hemokoncentráció alakul ki.',
          'Klinikai fenotípusok: HFRS esetén a kapilláris szivárgás és az immunáramlás a vesékben és a retroperitoneumban dominál (akut tubulointerstitialis nephritis és veseelégtelenség); HPS esetén a pulmonalis kapillárisok áteresztőképessége nő meg hirtelen, nem-kardiogén tüdőödémát okozva.'
        ],
        virulence_factors: ['Gn/Gc felületi glikoproteinek (béta-3 integrin kötés)', 'Nukleokapsid fehérje (immunpathogenesis)', 'Vascularis permeabilitás fokozás (VEGF indukció)']
      },
      clinical: {
        incubation: '1-8 hét (átlagosan 2-4 hét)',
        onset: 'Hirtelen kezdetű magas láz és szisztémás prodroma',
        symptoms: [
          {
            name: 'HFRS (Veseelégtelenséggel járó vérzéses láz) - Óvilági forma',
            description: 'Klasszikus 5 stádium: 1. Febrile stádium (magas láz, arcpír, conjunctivitis, súlyos derékfájdalom); 2. Hypotensive stádium (shock, petechiae); 3. Oliguric stádium (akut veseelégtelenség, proteinuria, uremia, vérzések); 4. Diuretic stádium (polyuria, elektrolit-zavar); 5. Convalescent stádium.',
            severity: 'severe'
          },
          {
            name: 'Nephropathia Epidemica (Puumala vírus)',
            description: 'A HFRS enyhébb, észak- és közép-európai formája. Hirtelen láz, kifejezett háti/deréki fájdalom (vesetáji ütögetési érzékenység), átmeneti myopia (látászavar a ciliaris test ödémája miatt), proteinuria és szérum kreatinin emelkedés.',
            severity: 'moderate'
          },
          {
            name: 'HPS (Hantavírus Pulmonalis Szindróma) - Újvilági forma',
            description: 'Prodromális láz és myalgia után hirtelen (órák alatt) kifejlődő súlyos légszomj, nem-kardiogén tüdőödéma, fulmináns hypoxia, hypotension és kardiogén shock. Halálozása 30-50%!',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Arc-, nyak- és mellkasi kipirulás (Facial flush)',
          'Conjunctivalis injekció és petechia a szájpadláson / axillában',
          'Vesetájéki kifejezett ütögetési érzékenység (Giordano-jel pozitív)',
          'Hypotension / szisztémás shock jelei',
          'Pulmonalis oedema feletti apróhólyagú szederjes szörnyzörejek (HPS)'
        ],
        complications: [
          'Akut veseelégtelenség (dialízis igény)',
          'Súlyos nem-kardiogén tüdőödéma és refracter hypoxaemia (HPS)',
          'Kardiogén / distributiv shock',
          'Hypophysishatár vérzés (késői panhypopituitarismus)',
          'DIC és szervvérzések'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Jellegzetes Triász: 1. Markáns thrombocytopenia (<50-100 G/L); 2. Kifejezett leukocytosis balra tolt fvs-számmal és atípusos lymphocytákkal; 3. Hemokoncentráció (Hematokrit↑)', interpretation: 'Hantavírus fertőzésre nagyfokban specifikus hematológiai minta!' },
          { test: 'Vesefunkció és Vizelet', finding: 'Kreatinin és BUN kifejezetten emelkedett; Masszív proteinuria (3-4+), mikroszkópos hematuria', interpretation: 'Akut tubulointerstitialis nephritis jelei' },
          { test: 'Koaguláció', finding: 'Nyújtott APTI, D-dimer↑, fibrinogén csökkenés', interpretation: 'Súlyos esetben DIC' }
        ],
        imaging: [
          { modality: 'Mellkas röntgen / CT', finding: 'HPS-ben: Kétoldali interstitialis, majd alveolaris infiltrátumok, pleura folyadék gyors progressziója szívmegnagyobbodás nélkül', significance: 'Hantavirus Pulmonary Syndrome diagnózisa' },
          { modality: 'Hasí Ultrahang', finding: 'Megnagyobbodott, ödémás, fokozott parenchyma-echogenitású vesék, néha pararenalis folyadékgyülem', significance: 'HFRS igazolása' }
        ],
        microbiology: [
          { test: 'Serologia (ELISA / Immunblot)', finding: 'Hantavírus specifikus IgM pozitív a tünetek kezdetekor', significance: 'DIAGNOSZTIKUS GOLD STANDARD! A lázas fázisban az IgM szinte mindig kimutatható.' },
          { test: 'RT-PCR', finding: 'Vírus RNS kimutatás vérből vagy szövetből', significance: 'Korai stádiumban és szerotipizálásra hasznos' }
        ]
      },
      differential: [
        { disease: 'Leptospirosis', distinguishing: 'Kolesztatikus icterus jelenléte, vádli fájdalom, vízi expozíció, Penicillinre reagál' },
        { disease: 'Akut Glomerulonephritis', distinguishing: 'Post-streptococcalis anamnézis, hypertonia, nincs súlyos thrombocytopenia' },
        { disease: 'Legionella pneumonia / Súlyos Influenza', distinguishing: 'Nincs akut veseelégtelenség proteinuria-triásszal, specifikus vizelet antigén / PCR' },
        { disease: 'Szeptikus shock', distinguishing: 'Magas Procalcitonin szintek, pozitív hemokultúra' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Szigorú megfigyelés / Kórházi utalás', dose: '-', duration: '-', note: 'Minden gyanús Hantavírus fertőzött kórházi/intenzív osztályos felvételt igényel!' }
          ],
          inpatient: [
            { drug: 'Szupportív terápia + Óvatos Folyadékkezelés', dose: 'Hemodinamikai monitorozás', duration: '', note: 'HFRS-ben folyadékpótlás a hypotensios fázisban, de vigyázat az oliguriás fázisban!' },
            { drug: 'IV Ribavirin (HFRS-ben)', dose: '33 mg/kg IV telítő, majd 16 mg/kg q6h 4 napig, majd 8 mg/kg q8h 3 napig', duration: '7 nap', note: 'Kizárólag HFRS-ben, a tünetek első 5 napján belül elkezdve csökkenti a veseelégtelenséget és a mortalitást! HPS-ben hatástalan!' }
          ],
          icu: [
            { drug: 'Inotrop támogatás + Vese- és Légzéstámogatás', dose: 'Dobutamin / Noradrenalin', duration: '', note: 'HPS-ben szigorúan RESTRIKTÍV folyadékterápia! Koraian Venarterialis ECMO és gépi lélegeztetés indokolt!' }
          ]
        },
        targeted: 'HFRS: Korai IV Ribavirin (<5 napon belül indítva). HPS: Célzott antivirális terápia jelenleg nem áll rendelkezésre, a kezelés tisztán szupportív.',
        supportive: [
          'HFRS-ben: Akut veseelégtelenségben korai hemodialízis / CRRT indítása az uremiás szövődmények és hypervolaemia elkerülésére.',
          'HPS-ben: Agresszív folyadékpótlás SZIGORÚAN TILOS, mert súlyosbítja a tüdőödémát! Korai inotrop támogatás (Dobutamin) és szoros hemodinamikai invazív mérés.',
          'HPS miatti hypoxaemiában korai Ven-Arterialis ECMO (Extracorporeal Membrane Oxygenation) életmentő lehet!'
        ],
        prevention: [
          'Zárt, használaton kívüli helyiségek (pincék, hobbiházak, padlások) alapos átszellőztetése takarítás előtt.',
          'Portalanítás nedves feltörléssel (NE sepréssel vagy porszívózással, mert az aeroszolt képez!).',
          'FFP3 maszk és gumikesztyű viselése rágcsálókkal szennyezett területek takarításakor.',
          'Rágcsálómentesítés az lakókörnyezetben.'
        ]
      },
      guidelines: {
        diagnosis: [
          'Thrombocytopenia + Leukocytosis + Proteinuria + Derékfájás = Hantavírus gyanú!',
          'A diagnózis alapja a Hantavírus specifikus IgM kimutatása szerológiával (ELISA).',
          'Újvilági utazási anamnézis + láz + hirtelen tüdőödéma = HPS gyanúja!'
        ],
        treatment_indications: [
          'A HPS szigorúan restriktív folyadékterápiát és korai ECMO/intenzív terápiát igényel.'
        ],
        first_line: [
          'HFRS: Korai IV Ribavirin (az első 5 napon belül) + szükség esetén hemodialízis.',
          'HPS: Szupportív intenzív ellátás, ECMO, inotrop szerek.'
        ]
      },
      prognosis: {
        mortality: 'Nephropathia epidemica (Puumala): <0.5%; HFRS (Dobrava/Hantaan): 5-15%; HPS (Sin Nombre/Andes): 30-50%',
        prognostic_scores: ['Thrombocytopenia mértéke', 'APACHE II'],
        factors: 'Vírus szerotípusa, HPS fenotípus, korai ECMO elérhetősége'
      }
    },
    {
      id: 'lyme',
      name: 'Lyme-kór (Borreliosis)',
      pathogen: {
        type: 'Spirochaeta',
        name: '<i>Borrelia burgdorferi sensu lato</i> fajaik (Európában főleg <i>B. afzelii</i> [bőrtünetek], <i>B. garinii</i> [idegrendszer], és <i>B. burgdorferi sensu stricto</i> [ízület])',
        gram: 'Gram-negatív (halvány, giemsa/ezüstzés)',
        shape: 'vékony, hullámos, mobilis spirál'
      },
      epidemiology: {
        incidence: 'Magyarországon és Közép-Európában magasan endemikus! Évente több ezer regisztrált eset.',
        risk_groups: ['Kirándulók, kempingezők, erdei sportolók', 'Erdészek, vadászok, fafeldolgozók', 'Kertészek, gyermekek'],
        seasonality: 'Tavasztól késő őszig (kullancsok aktivitási fázisa)',
        transmission: '<i>Ixodes ricinus</i> (fás kullancs) csípése útján. A kórokozó átviteléhez általában >24-36 órás folyamatos vérszívás szükséges!'
      },
      pathomechanism: {
        steps: [
          'Kullancscsípés & Inokuláció: A kullancs nyálában lévő immunmoduláns anyagok és a Borreliák a bőrbentartózkodás során behatolnak a dermisbe.',
          'Centrifugális terjedés & Erythema migrans: A spirochaeták a bőrben lassan, centrifugálisan terjednek, helyi gyulladásos választ (Erythema migrans) kiváltva.',
          'Haematogen disszemináció: A kórokozó a nyirok- és vérpályába jutva eljut a szervezet távoli pontjaira: idegrendszerbe, szívbe, ízületekbe, bőrbe.',
          'Antigén variáció & Szöveti perzisztencia: A Borreliák felületi lipoproteinjeik (OspA-C, VlsE) megváltoztatásával és a komplementrendszer gátlásával elrejtőznek az immunválasz elől.',
          'Krónikus immunmediált gyulladás: A tartós szöveti jelenlét autoimmun jellegű gyulladásos reakciókat (Lyme arthritis, Acrodermatitis chronica atrophicans, Neuroborreliosis) tart fenn.'
        ],
        virulence_factors: ['VlsE rekombinációs felületi antigén', 'OspC (korai fertőzés)', 'Decorin-binding protein (DbpA/B)', 'Salivary protein Salp15 (kullancs nyál védőhatás)']
      },
      clinical: {
        incubation: 'Erythema migrans: 1-30 nap (átlagosan 7-14 nap, de minimum 24 óra lappangási idő szükséges!).',
        onset: 'Klinikai stádiumok szerint (korai lokalizált -> korai disszeminált -> késői)',
        symptoms: [
          {
            name: '1. Korai lokalizált stádium - Erythema migrans (EM)',
            description: 'KRITÉRIUMOK a 2024-es hazai szakmai irányelv alapján: <u>Kullancscsípés észlelése esetén:</u> legalább 1 napos lappangás után a csípés helyén jelentkező, lassan, centrifugálisan növekvő, legalább 5 cm átmérőjű, ovális/kerek bőrpír, mely legalább 3 napig növekszik. <u>Kullancscsípés hiányában:</u> legalább 8 cm-es ovális erythema, amely legalább 5 napja ekkora és fokozatosan terjed. A szélén élénkebb, közepe tisztulhat (kokárda), fájdalmatlan és nem viszket. Céltáblaszerű, nem növekvő kis folt NEM EM!',
            severity: 'moderate'
          },
          {
            name: '2. Korai disszeminált stádium - Neuroborreliosis & Carditis & Bőrtünetek',
            description: 'Hetekkel-hónapokkal a csípés után: <b>Bannwarth-szindróma</b> (kínzó, éjszaka fokozódó gyöki/radicularis fájdalom, perifériás perifériás arcidegbénulás [facialis paresis, mely lehet KÉTOLDALI!], lymphocytás meningitis). <b>Lyme carditis:</b> fluktuáló AV-blokkok (I-III. fokú, bradycardia). <b>Borrelia lymphocytoma (BL):</b> fájdalmatlan, livid-vörös tömött csomó fülcimpán, emlőbimbón vagy scrotumon.',
            severity: 'severe'
          },
          {
            name: '3. Késői stádium - Lyme-arthritis & ACA',
            description: 'Hónapokkal-évekkel később: <b>Lyme-arthritis:</b> LÁZTALANUL zajló, csekély fájdalommal járó, kifejezett nagyízületi (főleg TÉRĐÍZÜLET ~85%) aszimmetrikus oligoarthritis/monoarthritis jelentős effusióval. Nincs szeronegatív Lyme-arthritis! <b>Acrodermatitis chronica atrophicans (ACA):</b> végtagok feszítőfelszínén livid-lila tésztás gyulladás, majd papírvékony (cigarettapapír) bőrsorvadás.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Erythema migrans: >5 cm (kullancscsípés tudott) vagy >8 cm (csípés nem tudott) terjedő bőrpír',
          'Facialis paresis (egy- vagy kétoldali perifériás arcidegbénulás)',
          'Enyhe tarkókötöttség, gyöki hypaesthesia/paresis (Bannwarth)',
          'Kifejezett térdízületi effusio és melegség LÁZ NÉLKÜL',
          'Borrelia lymphocytoma: tömött livid nodulus fülcimpán/emlőbimbón',
          'ACA: livid-erythematosus pergamenszerűen elvékonyodott bőr a kézháton/lábszáron'
        ],
        complications: [
          'Krónikus, destructiv Lyme-arthritis (főleg ha tévesen intraarticularis szteroidot adtak!)',
          'Maradandó axonyalis neuropathia és krónikus neuroborreliosis',
          'Súlyos AV-blokk miatti pacemaker igény (Lyme carditis)',
          'Post-Lyme szindróma (fáradtság, nem-specifikus panaszok - ANTIBIOTIKUMRA NEM REAGÁL, további antibiotikum adása TILOS!)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Erythema Migrans Diagnosztikája', finding: 'TÍPUSOS ERYTHEMA MIGRANS ESETÉN A SZEROLÓGIAI VIZSGÁLAT SZIGORÚAN TILOS ÉS ELLENJAVALLT!', interpretation: 'Az EM tisztán KLINIKAI DIAGNÓZIS! A korai szerológia gyakran még negatív, a pozitív eredmény pedig nem változtat a kezelési indikáción.' },
          { test: 'Kétlépcsős Szerológia (ELISA + Western Blot)', finding: 'IgM (2-4. héttől) és IgG (4-6. héttől) pozitív', interpretation: 'A kétlépcsős tesztelés KÖTELEZŐ szervi manifesztációkban (Carditis, Neuroborreliosis, Arthritis, ACA)! Pozitív ELISA után mindig Western blot megerősítés kell.' },
          { test: 'Liquor Vizsgálat (Neuroborreliosis gyanú)', finding: 'Lymphocytás pleocytosis (50-500 fvs/µL), emelkedett összfehérje, normál/enyhén csökkent cukor', interpretation: 'Infrathecalis Borrelia-specifikus antitest-szintézis (Antibody Index AI > 1.5) KÖTELEZŐ a neuroborreliosis igazolásához!' },
          { test: 'Kontroll Szerológia Gyógyulás Után', finding: 'NEM JAVASOLT ÉS SZAKMAILAG TIBOS!', interpretation: 'Az IgG és IgM antitestek sikeres, teljes gyógyulás után is évekig-évtizedekig perzisztálhatnak (szerológiai immunemlék), nem jelentenek aktív fertőzést!' }
        ],
        imaging: [
          { modality: 'EKG', finding: 'AV-blokk I., II. vagy III. fok (mobitz I/II, komplett AV-blokk)', significance: 'Carditis gyanú vagy bradycardia esetén kötelező!' },
          { modality: 'Ízületi Ultrahang', finding: 'Nagy mennyiségű intraarticularis folyadékgyülem, synovialis megvastagodás', significance: 'Lyme-arthritis igazolása' }
        ],
        microbiology: [
          { test: 'Kiszedett kullancs bevizsgálása', finding: 'SZIGORÚAN ELLENJAVALLT ÉS TILOS!', significance: 'Nincs klinikai relevanciája! A kullancs pozitívitása nem jelenti a beteg megfertőződését, profilaxist adni tilos.' },
          { test: 'PCR (Ízületi punktátumból vagy Bőrbiopsziából)', finding: 'Borrelia DNS pozitív', significance: 'Lyme-arthritisben és ACA-ban magas szenzitivitású kiegészítő vizsgálat.' },
          { test: 'Nem-validált tesztek (LTT, ELISPOT, CD57, Vizelet-antigén)', finding: 'TUDOMÁNYOSAN NEM ELFOGADOTT', significance: 'Diagnosztikára alkalmatlanok, használatuk szakmailag hibás!' }
        ]
      },
      differential: [
        { disease: 'Orbánc (Erysipelas) / Cellulitis', distinguishing: 'Magas láz, heves fájdalom, kifejezett gyulladásos laborjelölők (CRP/fvs), emelt széli terjedés' },
        { disease: 'Tinea corporis (Gombás fertőzés)', distinguishing: 'Pikkelyes, hámló szél, intenzív viszketés, mikroszkópos/tenyésztéses gomba pozitivitás' },
        { disease: 'Szeptikus Arthritis / Rheumatoid Arthritis', distinguishing: 'Szeptikusban magas láz, gennyes punktátum; RA-ban szimmetrikus kisízületi gyulladás, RF/anti-CCP pozitivitás. Lyme-arthritisben nincs láz!' },
        { disease: 'Sclerosis Multiplex', distinguishing: 'SMR felvételeken demyelinisatiós plakkok, liquor oligoklonális sávok' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Doxycyclin per os (Irányelv szerinti dózis)', dose: '2x100 mg PO (90 kg felett 1.5x [300 mg/nap], 120 kg felett 2x [400 mg/nap])', duration: '40 nap (EM, BL, ACA, Lyme-arthritis és isolált perifériás neuritis esetén stopszabály!)', note: 'ELSŐ VÁLASZTANDÓ GYÓGYSZER! 8 év alatti gyermeknek is adható rövid távon. Erős fényérzékenyítő hatású!' },
            { drug: 'Amoxicillin per os', dose: '3x1000 mg PO (90 kg felett 1.5x, 120 kg felett 2x)', duration: '20 nap (EM, BL, ACA)', note: 'Felnőtt adagja 3x1000 mg! Gyermeknek: 3x50 mg/kg. Terhességben és szoptatáskor elsőként választandó.' },
            { drug: 'Cefuroxim axetil per os', dose: '2x500 mg PO (90 kg felett 1.5x, 120 kg felett 2x)', duration: '20 nap (EM, BL)', note: 'Béta-laktám alternatíva. Gyermeknek: 2x10 mg/kg.' },
            { drug: 'Azithromycin per os', dose: '1x500 mg PO', duration: '12 nap (Kizárólag Erythema migransban!)', note: 'Kizárólag EM esetén, ha Doxycyclin ÉS Béta-laktám allergia egyaránt fennáll!' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon IV', dose: '1x2000 mg IV (vagy IM)', duration: '15 nap', note: 'Neuroborreliosis (Meningitis, Bannwarth), terhességi carditis, súlyos arthritis esetén első vonal! Gyermeknek: 1x50-100 mg/kg (max 2 g).' }
          ],
          icu: [
            { drug: 'Ceftriaxon IV + Pacemaker támogatás', dose: 'Ceftriaxon 1x2 g IV', duration: '15 nap', note: 'Súlyos Lyme carditis miatti III. fokú AV-blokk esetén' }
          ]
        },
        targeted: 'A 2024-es Infektológiai Szakmai Kollégiumi Irányelv alapján: Doxycyclin 40 napig, Amoxicillin / Cefuroxim 20 napig, Ceftriaxon IV 15 napig. A megadott kezelési időtartamok túllépése, tartós kombinált antibiotikum kúrák adása Poszt-Lyme szindrómára SZAKMAILAG HIBÁS ÉS TILOS!',
        supportive: [
          'SZIGORÚAN TILOS Helyi szteroid kenőcsöt kenni az Erythema migransra (lokális immunszuppressziót és generalizációt okoz)!',
          'SZIGORÚAN TILOS Intraarticularis szteroid injekciót adni Lyme-arthritisben (gyógyíthatatlan krónikus arthritist eredményez)!',
          'Tüneti fájdalomcsillapítás (NSAID), fizioterápia az ízületi funkció megőrzésére.'
        ],
        prevention: [
          'Kullancscsípés utáni KEMOPROFILAXIS SZIGORÚAN ELLENJAVALLT!',
          'A kullancsot vékony csipesszel, a gyomra összenyomása nélkül, a bőrfelszínhez közel megragadva AZONNAL ki kell húzni.',
          'A csípés helyének fertőtlenítése NE történjen irritáló szerrel (helyi bőrreakciót okozhat, ami imitálja az EM-et).'
        ]
      },
      guidelines: {
        diagnosis: [
          '2024-es Magyar Infektológiai Szakmai Irányelv:',
          'Típusos Erythema migrans (EM) esetén a szerológia szigorúan TILOS. Az EM klinikai diagnózis, azonnal kezelendő!',
          'Szervi manifesztációkban (Neuroborreliosis, Carditis, Arthritis, ACA) kétlépcsős szerológia (ELISA + Western blot) kötelező.',
          'Kullancs bevizsgálása és gyógyulás utáni kontroll szerológia szigorúan ellenjavallt.'
        ],
        treatment_indications: [
          'Igazolt EM vagy szerológiailag és klinikailag igazolt szervi Borreliosis kezelendő standard időtartamig.'
        ],
        first_line: [
          'Doxycyclin PO: 40 napig (testsúly-kiigazított adagolás!).',
          'Amoxicillin / Cefuroxim PO: 20 napig.',
          'Ceftriaxon IV: 15 napig (Neuroborreliosis, súlyos carditis).'
        ]
      },
      prognosis: {
        mortality: 'Rendkívül alacsony (Lyme carditis ritkán halálos)',
        prognostic_scores: ['Nincs'],
        factors: 'Korai, szakszerű antibiotikum kezelés; helyi/szisztémás szteroidok elkerülése'
      }
    },
    {
      id: 'tularemia',
      name: 'Tularémia (Nyúlpestis)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Francisella tularensis</i> (subsp. tularensis [A típus - Észak-Amerika, súlyosabb] és subsp. holarctica [B típus - Európa])',
        gram: 'Gram-negatív (kicsi, halvány)',
        shape: 'obligát aerob, fagoszómából kiszabaduló intracelluláris coccobacillus'
      },
      epidemiology: {
        incidence: 'Magyarországon és Európában sporadikus / kis járványok (évente 30-100 eset).',
        risk_groups: ['Vadászok, vadfeldolgozók, mészárosok', 'Erdészek, mezőgazdasági munkások', 'Laboratóriumi dolgozók (magas fertőzési kockázat!)', 'Kertészek, kempingezők'],
        seasonality: 'Nyáron (kullancs/bögöly csípés) és késő ősszel/télen (mezei nyúl vadászati szezon)',
        transmission: '1. Fertőzött állat (főleg mezei nyúl, rágcsálók) vérével/szövetével való kontaktus; 2. Ízeltlábúak (kullancs, bögöly) csípése; 3. Szennyezett por inhalációja; 4. Szennyezett hús/víz fogyasztása. Nincs emberről emberre terjedés!'
      },
      pathomechanism: {
        steps: [
          'Rendkívül alacsony fertőző dózis: Mindössze 10-50 baktérium elegendő a súlyos fertőzés kiváltásához!',
          'Behatolás & Makrofág invázió: A kórokozó bőrön, nyálkahártyán vagy tüdőn keresztül lép be, ahol a dermális makrofágok es polymorphonuclearis fvs-ek fagocitálják.',
          'Fagoszóma escape: A F. tularensis az IglA-D típusú VI szekréciós rendszerével áttöri a fagoszóma membránját, kiszabadul a citoplazmába és gátolja az apoptózist.',
          'Granulomatosis & Suppuratio: A fertőzött makrofágok a regionális nyirokcsomókba jutnak, ahol súlyos, nekrotizáló, sajtosodó granulomákat és suppuratív nyirokcsomó-gyulladást (bubo) hoznak létre.',
          'Disszemináció: Kezeletlen esetben a baktériumok a véráramba jutva (typhoidealis forma) miliarys granulomákat hoznak létre a májban, lépben, tüdőben és csontvelőben.'
        ],
        virulence_factors: ['Tularemia pathogenicity island (TPI)', 'Type VI secretion system (T6SS)', 'Kapszula', 'Biológiai fegyver potenciál (A kategóriás agens!)']
      },
      clinical: {
        incubation: '3-5 nap (szélsőértékek: 1-14 nap)',
        onset: 'Hirtelen kezdetű magas láz, hidegrázás, fejfájás, kifejezett prostratio',
        symptoms: [
          {
            name: 'Ulceroglandularis forma (75-85% - Leggyakoribb!)',
            description: 'A behatolási kapunál (csípés/karcolás helyén) fájdalmas papula alakul ki, ami gyorsan kifekélyesedik: mély, punched-out fekély fekete pörkkel (eschar). Ezt a lefolyó nyirokcsomók kifejezett, rendkívül fájdalmas duzzanata (bubo) kíséri, ami begennyedhet.',
            severity: 'moderate'
          },
          {
            name: 'Glandularis forma (5-10%)',
            description: 'A regionális nyirokcsomók fájdalmas, nekrotizáló megnagyobbodása lázzal, de pörk/primer bőrfekély hiányában.',
            severity: 'moderate'
          },
          {
            name: 'Oculoglandularis forma',
            description: 'Szembe fröccsenő fertőzött váladék vagy dörzsölés után: súlyos egyoldali conjunctivitis, sárgás nodulusok a palpebralis conjunctiván, és kifejezett preauricularis/submandibularis nyirokcsomó-duzzanat (Parinaud-szerű kép).',
            severity: 'moderate'
          },
          {
            name: 'Oropharyngealis forma',
            description: 'Fertőzött nyúl húsának vagy szennyezett víznek fogyasztása után: súlyos, pszeudomembránossá váló exudativ tonsillopharyngitis és nyaki nyirokcsomó bubók.',
            severity: 'severe'
          },
          {
            name: 'Pulmonalis & Typhoidealis forma',
            description: 'Inhaláció (szénapor) vagy szisztémás szóródás után: atípusos pneumonia, hiláris lymphadenopathia, keringési collapse, hepatosplenomegalia bőrtünetek nélkül. Halálozása kezeletlenül eléri a 30-60%-ot!',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Punched-out elhalásos bőrfekély fekete pörkkel (eschar)',
          'Kifejezetten érzékeny, fluktuáló nyirokcsomó-megnagyobbodások (bubo)',
          'Magas láz, bradycardia alacsony vérnyomással',
          'Hepatosplenomegalia (typhoidealis forma)',
          'Tüdő felett gyengült légzés, crepitans szörnyzörejek'
        ],
        complications: [
          'Bubo spontán áttörése és krónikus sipolyképződés',
          'Szeptikus shock és DIC',
          'Súlyos másodlagos pneumonia és ARDS',
          'Meningitis és pericarditis'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép és Gyulladásos Markerek', finding: 'Fvs-szám gyakran normális vagy enyhén emelkedett (relatív lymphocytosis), CRP és We kifejezetten magas', interpretation: 'Nem-specifikus gyulladásos válasz' },
          { test: 'Májenzimek', finding: 'Transzaminázok és LDH enyhe emelkedése', interpretation: 'Máj granulomatosis' }
        ],
        imaging: [
          { modality: 'Mellkas röntgen / CT', finding: 'Hiláris és mediastinalis lymphadenopathy, foltos lobaris vagy lobularis infiltrátumok, pleura effusio', significance: 'Pulmonalis tularémia igazolása' },
          { modality: 'Lágyrész Ultrahang', finding: 'Nekrotizáló, hypoechogén, fluktuáló nyirokcsomók', significance: 'Bubo tályogosodásának felmérése' }
        ],
        microbiology: [
          { test: 'Rutintenyésztés a táptalajokról', finding: 'BSL-3 LABORATÓRIUMI VESZÉLY!', significance: 'A tenyésztés RUTINSZERŰEN TILOS A LABORATÓRIUMI FERTŐZÉSKOCKÁZAT MIATT! A labort előre értesíteni kell Tularémia gyanú esetén!' },
          { test: 'Szerológia (Tube Agglutination / ELISA)', finding: 'Titer ≥1:160 vagy 4-szeres titer-emelkedés páros savóban', significance: 'A diagnózis fősodra (2-3. héttől pozitív)' },
          { test: 'PCR (Fekélyváladékból vagy Nyirokcsomó aspirátumból)', finding: 'Francisella tularensis DNS pozitív', significance: 'Gyors, specifikus és biztonságos korai diagnózis!' }
        ]
      },
      differential: [
        { disease: 'Cat-Scratch Disease (Bartonellosis)', distinguishing: 'Macska kontaktus, lassabb lefolyás, ritkán nekrotizál súlyos lázzal, Bartonella szerológia' },
        { disease: 'Pyogen Lymphadenitis (Staphylococcus / Streptococcus)', distinguishing: 'Hiányzik a fekete eschar, szisztémás antibiotikumra (Cefazolin/Augmentin) gyorsan gyógyul' },
        { disease: 'Lépfene (Cutan Anthrax)', distinguishing: 'A pörk körüli ödéma masszív és FÁJDALMATLAN, nincs gennyes nyirokcsomó-olvadás' },
        { disease: 'Pestis (Yersinia pestis)', distinguishing: 'A bubo még hevesebben fájdalmas, gyors fulmináns szeptikus lefolyás, endémiás földrajzi terület' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Doxycyclin', dose: '2x100 mg PO', duration: '14-21 nap', note: 'Enyhe/középsúlyos ulceroglandularis forma esetén orális választás' },
            { drug: 'Ciprofloxacin', dose: '2x500 mg PO', duration: '14-21 nap', note: 'Alternatív orális fluoroquinolon' }
          ],
          inpatient: [
            { drug: 'Streptomycin', dose: '2x7.5-10 mg/kg IM (max 2 g/nap)', duration: '10 nap', note: 'GOLD STANDARD súlyos / parenterális kezelésre!' },
            { drug: 'Gentamicin', dose: '1x5 mg/kg IV (vagy 3x1.7 mg/kg IV)', duration: '10 nap', note: 'Első vonalbeli alternatíva, ha a Streptomycin nem elérhető' }
          ],
          icu: [
            { drug: 'Gentamicin IV + Doxycyclin IV', dose: 'Gentamicin 5 mg/kg IV + Doxycyclin 2x100 mg IV', duration: '14-21 nap', note: 'Súlyos pulmonalis vagy typhoidealis tularémia és szepszis esetén' }
          ]
        },
        targeted: 'Aminoglikozidok (Streptomycin / Gentamicin) a leg hatékonyabb bactericid szerek! Orális alternatívák: Doxycyclin 2x100 mg vagy Ciprofloxacin 2x500 mg 14-21 napig (rövidebb kúra esetén relapszus léphet fel!). Béta-laktámok (penicillinek, cephalosporinok) INEFFEKTÍVEK!',
        supportive: [
          'Befluctuált nyirokcsomó (bubo) esetén TŰASPIRÁCIÓ javasolt. A nyílt incisio és debridement elhúzódó sipolyképződéshez vezethet!',
          'Megfelelő sebkezelés, láz- és fájdalomcsillapítás.',
          'Megfelelő egyéni védőfelszerelés a mintavételnél.'
        ],
        prevention: [
          'Vadászoknak és vadfeldolgozóknak gumikesztyű ÉS védőszemüveg használata mezei nyulak nyúzásakor.',
          'Vadhús alapos (min. 72°C-os) hőkezelése sütés/főzés során.',
          'Kullancs- és bögölyriasztók (DEET) használata.',
          'Magas kockázatú laboratóriumi expozíció után Doxycyclin post-exposure profilaxis (2x100 mg PO 14 napig).'
        ]
      },
      guidelines: {
        diagnosis: [
          'Nyúl kontaktus / kullancscsípés + Fekete eschar + Fájdalmas bubo = Tularémia!',
          'Rutinszerű tenyésztés BSL-3 veszély miatt TILOS! PCR és szerológia javasolt.',
          'Béta-laktám antibiotikumok adása szakmai hiba (hatástalanok).'
        ],
        treatment_indications: [
          'Minden igazolt vagy megalapozottan gyanított Tularémia azonnali antibiotikum kezelést igényel.'
        ],
        first_line: [
          'Súlyos / Inpatient: Gentamicin IV vagy Streptomycin IM 10 napig.',
          'Enyhe / Outpatient: Doxycyclin PO vagy Ciprofloxacin PO 14-21 napig.'
        ]
      },
      prognosis: {
        mortality: 'Kezelt ulceroglandularis forma: <1%; Kezeletlen pulmonalis/typhoidealis forma: 30-60%',
        prognostic_scores: ['APACHE II'],
        factors: 'A klinikai forma típusa (pulmonalis rosszabb), korai aminoglikozid kezelés megkezdése'
      }
    },
    {
      id: 'cat_scratch',
      name: 'Macskakarmolási betegség (Cat-Scratch Disease / Bartonellosis)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Bartonella henselae</i> (ritkábban <i>Bartonella clarridgeiae</i>)',
        gram: 'Gram-negatív (ezüstzéssel jól festődő)',
        shape: 'kicsi, ívelt, fagoszómában és endothelben élő intracelluláris pálca'
      },
      epidemiology: {
        incidence: 'Fiatalok és gyermekek körében a leggyakoribb bénult nyirokcsomó-megnagyobbodási ok.',
        risk_groups: ['Gyermekek és fiatal felnőttek (<21 év)', 'Macskatulajdonosok (különösen kismacskák gazdái!)', 'Immunszupprimáltak (HIV/AIDS, szervtranszplantáltak)', 'Állatorvosok'],
        seasonality: 'Ősszel és kora télen halmozódik (amikor a kismacskák és a macskabolhák populációja magas)',
        transmission: 'Fertőzött macska (főleg kölyökmacska) karmolása, harapása vagy a macskabolha (<i>Ctenocephalides felis</i>) ürülékének sebbe dörzsölése. Emberről emberre nem terjed!'
      },
      pathomechanism: {
        steps: [
          'Inokuláció: A macska karmaival vagy fogával a bőrbe juttatja a B. henselae-vel szennyezett bolhaürüléket.',
          'Primer bőrlézió: A behatolás helyén 3-10 nap múlva nem-viszkető papula, vesicula vagy pustula keletkezik.',
          'Nyirokterjedés: A baktériumok a nyirokutakon keresztül a regionális drenáló nyirokcsomókba jutnak.',
          'Stellata granuloma: A nyirokcsomóban kifejezett gyulladásos válasz alakul ki, típusos csillag alakú (stellata) nekrotizáló mikroabscessusokkal és granulomákkal.',
          'Angiogenesis (Immunszuppresszióban): HIV-pozitív vagy immunszupprimált betegekben a baktérium stimulatív hatást fejt ki az endothel sejt-proliferációra (VEGF indukció), ami Bacilláris Angiomatózist (érdaganat-szerű elváltozások a bőrön és belső szervekben) vagy Peliosis Hepatist okoz.'
        ],
        virulence_factors: ['BadA (Bartonella adhesin A)', 'Type IV secretion system (T4SS)', 'Endothel proliferációt indukáló faktorok', 'Erythrocyta inváziós képesség']
      },
      clinical: {
        incubation: 'Primer bőrlézió: 3-10 nap; Lymphadenitis: 1-3 hét (átlagosan 2 hét)',
        onset: 'Szubakut lefolyású, mérsékelt szisztémás tünetekkel',
        symptoms: [
          {
            name: 'Klasszikus CSD (Typikus forma - 90%)',
            description: 'Egyoldali, kifejezett regionális nyirokcsomó-megnagyobbodás (főleg axillaris, epitrochlearis, cervicalis vagy inguinalis régióban). A nyirokcsomó kifejezetten érzékeny, felette a bőr meleg, piros lehet. 10-20%-ban befluctuál és begennyed. Mérsékelt láz, rossz közérzet kíséri.',
            severity: 'moderate'
          },
          {
            name: 'Parinaud Oculoglandularis Szindróma (5%)',
            description: 'A fertőzés a kötőhártyán keresztül jut be (szemdörzsölés macska simogatás után): granulomatosisos conjunctivitis és kifejezett homológ preauricularis / submandibularis nyirokcsomó-duzzanat.',
            severity: 'moderate'
          },
          {
            name: 'Atípusos & Disszeminált Formák (<5%)',
            description: 'Immunkompetensekben is előfordulhat: <b>Neuroretinitis</b> (fájdalmatlan hirtelen látásromlás, látóidegfő-ödéma és macularits "csillag" alakú exsudatummal); <b>Encephalopathia</b> (görcsrohamok, zavartság); <b>Hepatosplenikus CSD</b> (láz, szervtályogok a májban és lépben).',
            severity: 'severe'
          },
          {
            name: 'Bacilláris Angiomatózis & Peliosis Hepatis (HIV / Immunszupprimált)',
            description: 'Vörös-livid, vérzékeny, érdaganatra (hemangioma) emlékeztető papulák és nodulusok a bőrön, nyálkahártyákon és belső szervekben. Peliosis hepatis esetén vérrel teli cysták a májban.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Karmolás nyoma / gyógyuló papula-pustula az érintett végtagon',
          'Kifejezetten megnagyobbodott (1-6 cm), tömött, érzékeny egyoldali nyirokcsomó',
          'Nyirokcsomó feletti erythema és fluctuatio (begennyedés jele)',
          'Granulomatous conjunctivitis preauricularis nyirokcsomóval (Parinaud)',
          'Hepatosplenomegalia (disszeminált esetben)'
        ],
        complications: [
          'Nyirokcsomó tályogosodás és spontán áttörés',
          'Neuroretinitis és tartós látásélesség-csökkenés',
          'Szeptikus Bartonella endocarditis (kultúra-negatív endocarditis!)',
          'Bacilláris angiomatózis és peliosis hepatis (immunszupprimáltakban)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép és Gyulladásos Markerek', finding: 'Normális fvs-szám vagy enyhe leukocytosis, enyhén emelkedett CRP és We', interpretation: 'Nem-specifikus' },
          { test: 'Májenzimek', finding: 'Enyhe transzamináz és ALP emelkedés', interpretation: 'Máj/lép granulomatosis jelenlétében' }
        ],
        imaging: [
          { modality: 'Lágyrész és Nyirokcsomó Ultrahang', finding: 'Hypervascularizált, hypoechogén, megnagyobbodott nyirokcsomók elhalásos (anekogén) központi területekkel', significance: 'Fluctuatio és tályogosodás kimutatása' },
          { modality: 'Hasí CT / Ultrahang', finding: 'Többszörös kicsi, hypodens kerekded léziók a májban és lépben (máj/lép granuloma)', significance: 'Atípusos, elhúzódó lázas esetekben' }
        ],
        microbiology: [
          { test: 'Szerológia (IFA / ELISA)', finding: 'Bartonella henselae IgG ≥1:256 (akut fertőzés) vagy pozitív IgM', significance: 'DIAGNOSZTIKUS GOLD STANDARD! Magas specificitás.' },
          { test: 'PCR (Nyirokcsomó aspirátumból vagy Bőrbiopsziából)', finding: 'Bartonella henselae DNS pozitív', significance: 'Nagyon magas specificitás és szenzitivitás' },
          { test: 'Warthin-Starry ezüstfestés (Hisztológia)', finding: 'Feketére festődő pleomorph baciullusok a granulomák szélén', significance: 'Biopszia vétel esetén' },
          { test: 'Vértenyésztés', finding: 'Általában negatív (lassan növekvő, obligát intracelluláris)', significance: 'Kivétel: Bartonella endocarditis (speciális lízis-centrifugálás kell)' }
        ]
      },
      differential: [
        { disease: 'Pyogen Lymphadenitis (Staph / Strep)', distinguishing: 'Gyorsabb kezdet, hevesebb helyi tünetek, béta-laktám antibiotikumra napok alatt gyógyul' },
        { disease: 'Tularémia', distinguishing: 'Vadállat contact, punched-out fekete pörk, sokkal súlyosabb szisztémás lázas lefolyás' },
        { disease: 'Mycobacteriosis (Tuberculosis / Atypos Mycobacteriosis)', distinguishing: 'Lassabb lefolyás, tuberculin/IGRA pozitivitás, Ziehl-Neelsen festés' },
        { disease: 'Malignus Lymphoma / Hodgkin-kór', distinguishing: 'Fájdalmatlan, kemény, progresszív nyirokcsomó-megnagyobbodás; biopszia tisztázza' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Azithromycin per os', dose: '1x500 mg D1, majd 1x250 mg PO D2-5 napig', duration: '5 nap', note: 'ELSŐ VÁLASZTANDÓ KEZELÉS! Gyorsítja a nyirokcsomó regresszióját.' },
            { drug: 'Doxycyclin', dose: '2x100 mg PO', duration: '14-21 nap', note: 'Alternatíva felnőttekben' },
            { drug: 'Megfigyelés (Szupportív)', dose: '-', duration: '2-4 hónap', note: 'Enyhe, nem-fájdalmas gyermekkori esetben antibiotikum nélkül is spontán gyógyul' }
          ],
          inpatient: [
            { drug: 'Doxycyclin + Rifampicin (Neuroretinitis / Súlyos szóródás)', dose: 'Doxycyclin 2x100 mg PO/IV + Rifampicin 2x300 mg PO', duration: '4-6 hét', note: 'Neuroretinitis és centralis idegrendszeri szövődmény esetén!' }
          ],
          icu: [
            { drug: 'Doxycyclin IV + Gentamicin IV', dose: 'Doxycyclin 2x100 mg IV + Gentamicin 3 mg/kg IV', duration: '2 hét Gentamicin, majd 6 hét Doxycyclin', note: 'Bartonella endocarditis esetén (szívbillentyű műtéti konzílium!)' }
          ]
        },
        targeted: 'Typikus CSD: Azithromycin 5 napos kúra. Neuroretinitis / CNS: Doxycyclin (2x100 mg) + Rifampicin (2x300 mg) 4-6 hétig. Endocarditis: Doxycyclin + Gentamicin. Bacilláris angiomatosis (HIV): Doxycyclin vagy Erythromycin 3 hónapig.',
        supportive: [
          'Fluctuáló, gennyes nyirokcsomó esetén TŰASPIRÁCIÓ javasolt a nyomás és fájdalom enyhítésére.',
          'NYÍLT SEBÉSZI INCISIO ÉS DRENÁZS TILOS, mert krónikusan váladékozó sipolyképződéshez és csúf hegesedéshez vezet!',
          'Meleg borogatás, NSAID fájdalomcsillapítás.'
        ],
        prevention: [
          'Macskák (különösen kismacskák) rendszeres bolhamentesítése rácseppentő (spot-on) szerekkel.',
          'Karmolás és harapás kerülése játék közben (kismacskákkal durva játék elkerülése).',
          'Macskakarmolás vagy harapás azonnali alapos szappanos vizes lemosása és fertőtlenítése.',
          'Súlyosan immunszupprimált betegek (HIV, szervtranszplantáltak) kerüljék a 1 évnél fiatalabb kismacskák tartását.'
        ]
      },
      guidelines: {
        diagnosis: [
          'Macska karmolás + Regionális nyirokcsomó-duzzanat = Macskakarmolási betegség!',
          'A diagnózis alapja a Bartonella henselae szerológia (IFA/ELISA) vagy PCR.',
          'A nyirokcsomó nyílt incisiója szigorúan kerülendő (tűaspiráció javasolt).'
        ],
        treatment_indications: [
          'Enyhe esetekben megfigyelés is elégséges; panaszos vagy elhúzódó esetben Azithromycin 5 napig.'
        ],
        first_line: [
          'Typikus CSD: Azithromycin 5 napos oralis kúra.',
          'Neuroretinitis: Doxycyclin + Rifampicin 4-6 hétig.'
        ]
      },
      prognosis: {
        mortality: 'Kiváló (<0.1%), spontán gyógyuló; Endocarditis esetén 5-10%',
        prognostic_scores: ['Nincs'],
        factors: 'Immunstátusz (HIV/immunszuppresszió esetén Bacilláris Angiomatosis), szövődmények jelenléte'
      }
    },
    {
      id: 'q_fever_zoo',
      name: 'Q-láz (Query Fever)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Coxiella burnetii</i>',
        gram: 'Gram-negatív (intracelluláris, Gimenez-festés)',
        shape: 'kicsi, obligát intracelluláris coccobacillus, spóraszerű kisméretű sejtformával (LCV/SCV)'
      },
      epidemiology: {
        incidence: 'Világszerte elterjedt zoonózis. Közép-Európában és hazánkban is rendszeresek a kisebb járványok.',
        risk_groups: ['Állattenyésztők, juhászok, gulyások', 'Állatorvosok, mészárosok, vágóhídi dolgozók', 'Laboratóriumi dolgozók', 'Vidékre költözők, állatállomány közelében élők'],
        seasonality: 'Tavasz és kora nyár (az állatok ellési és ellési termék képződési szezonja)',
        transmission: 'Aeroszol inhaláció! A fertőzött állatok (juh, kecske, szarvasmarha) magzatvizével, méhlepényével, vizeletével, ürülékével és pasztőrözetlen tejével ürül. A beszáradt porszemcsék milesre szállhatnak a széllel.'
      },
      pathomechanism: {
        steps: [
          'Kivételes ellenállóképesség & Aeroszol terjedés: A spóraszerű forma (SCV) hónapokig-évekig életképes a száraz talajban és porban. Egyetlen baktérium belélegzése is elegendő a fertőzéshez!',
          'Phagolysosoma invázió: Az alveolaris makrofágok bekebelezik a kórokozót. A C. burnetii nemcsak túléli a phagolysosoma savas közeget (pH ~4.5), hanem kifejezetten igényli azt a szaporodáshoz.',
          'Haematogen szóródás: A fertőzött monocyták útján a véráramba jut, és a reticuloendothelialis rendszerben (máj, lép, csontvelő) és a szívbillentyűkön telepszik meg.',
          'Akut granulomatosis: A szervezet válaszul jellegzetes "fánk" alakú (doughnut granuloma: fibrinoid gyűrűvel övezett központi vacuolum) granulomákat hoz létre a májban és csontvelőben.',
          'Krónikus Q-láz: Évekkel később, főleg előzetes billentyűhibával vagy éraneurysmával rendelkező betegekben alakul ki: tenyésztés-negatív endocarditis fázisvariációs antitest-eltolódással.'
        ],
        virulence_factors: ['Fázisvariáció (Phase I: virulens, védő LPS; Phase II: avirulens, hiányos LPS)', 'Savas pH-n aktív anyagcsere', 'Spóraszerű SCV forma']
      },
      clinical: {
        incubation: '2-3 hét (szélsőértékek: 14-30 nap)',
        onset: 'Hirtelen kezdetű magas láz és jellegzetes retrobulbaris fejfájás',
        symptoms: [
          {
            name: 'Akut Q-láz (60%-ban tünetmentes vagy enyhe)',
            description: 'Triász: 1. Magas láz hidegrázással, kifejezett, kínzó retrobulbaris fejfájás és kifejezett izomfájdalom; 2. Atípusos pneumonia (száraz köhögés, mellkasi fájdalom); 3. Granulomatous hepatitis (jobb bordaív alatti fájdalom, emelkedett májenzimek, hepatomegalia). Kiütés ÁLTALÁBAN HIÁNYZIK!',
            severity: 'moderate'
          },
          {
            name: 'Krónikus Q-láz (1-2%-ban alakul ki)',
            description: 'Acut fertőzés után hónapokkal-évekkel később: <b>Tenyésztés-negatív Infectiv Endocarditis</b> (főleg aorta- vagy mitralis billentyűn, szívelégtelenség, láz, embolizáció); <b>Erodiváló vascularis fertőzés</b> (aorta aneurysma vagy műér graft fertőzés); <b>Osteomyelitis / Spondylodiscitis</b>.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Relatív bradycardia (Faget-jel: magas láz ellenére alacsony pulzus)',
          'Hepatomegalia és splenomegalia',
          'Tüdő felett gyengült légzés, szörnyzörejek (pneumonia)',
          'Új szívzörej megjelenése (krónikus endocarditisben)'
        ],
        complications: [
          'Krónikus Q-láz endocarditis (szívelégtelenség, billentyűdestrukció)',
          'Aorta aneurysma ruptúra (vascularis krónikus forma)',
          'Krónikus fáradtság szindróma (Post-Q fever fatigue syndrome)',
          'Spontán abortusz és koraszülés terhes nőknél'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Májenzimek', finding: 'Transzaminázok (GOT, GPT) és ALP 2-5-szörös emelkedése', interpretation: 'Gyakori, granulomatous hepatitisre utal' },
          { test: 'Vérkép és Gyulladásos Markerek', finding: 'Enyhe thrombocytopenia, normális vagy enyhén emelkedett fvs-szám, CRP emelkedett', interpretation: 'Nem-specifikus' }
        ],
        imaging: [
          { modality: 'Mellkas röntgen / CT', finding: 'Kerekded opacitások, többes fehéres foltos infiltrátumok (atípusos pneumonia)', significance: 'Akut Q-láz tüdőérintettség' },
          { modality: 'Echocardiographia (TTE / TEE)', finding: 'Szívbillentyű vegetációk vagy billentyűdestrukció', significance: 'Krónikus Q-láz endocarditis gyanújában kötelező!' }
        ],
        microbiology: [
          { test: 'Szerológia (Indirekt Immunfluoreszcencia - IFA)', finding: 'Akut Q-láz: Phase II IgG/IgM magas titer (Phase II IgG ≥1:200). Krónikus Q-láz: Phase I IgG extrém magas (≥1:800)!', significance: 'DIAGNOSZTIKUS GOLD STANDARD! A fázisvariáció választja el az akut és krónikus formát.' },
          { test: 'PCR (Vérből vagy Szövetből)', finding: 'Coxiella burnetii DNS pozitív', significance: 'Az első 2 hétben a szerológia előtt pozitívvá válik!' }
        ]
      },
      differential: [
        { disease: 'Brucellosis', distinguishing: 'Hullámzó láz (unduláló), kifejezett profúz éjszakai izzadás, nyers tej fogyasztás' },
        { disease: 'Legionella pneumonia / Mycoplasma', distinguishing: 'Hiányzik a májenzim emelkedés és a retrobulbaris fejfájás, specifikus vizelet antigén / PCR' },
        { disease: 'Typhus abdominalis (Salmonella Typhi)', distinguishing: 'Roseolák a hasfalon, súlyosabb GI tünetek, széklet tenyésztés' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Doxycyclin', dose: '2x100 mg PO', duration: '14 nap', note: 'AKUT Q-LÁZ ELSŐ VÁLASZTANDÓ KEZELÉSE!' },
            { drug: 'Ciprofloxacin', dose: '2x750 mg PO', duration: '14 nap', note: 'Alternatíva Doxycyclin ellenjavallat esetén' }
          ],
          inpatient: [
            { drug: 'Doxycyclin', dose: '2x100 mg PO/IV', duration: '14 nap', note: 'Lázas, szövődményes akut esetben' }
          ],
          icu: [
            { drug: 'Doxycyclin + Hydroxychloroquin (Krónikus Q-láz)', dose: 'Doxycyclin 2x100 mg PO + Hydroxychloroquin 3x200 mg PO (szérum pH emelésére)', duration: 'Minimum 18-24 HÓNAP!', note: 'KRÓNIKUS ENDOCARDITIS KEZELÉSE! A Hydroxychloroquin emeli a phagolysosoma pH-ját, amivel bactericiddé teszi a Doxycyclint.' }
          ]
        },
        targeted: 'Akut Q-láz: Doxycyclin 2x100 mg PO 14 napig. Krónikus Q-láz (Endocarditis/Vascularis): Doxycyclin 2x100 mg + Hydroxychloroquin 3x200 mg PO legalább 18-24 hónapig (rendszeres szemészeti ellenőrzés mellett!).',
        supportive: [
          'Krónikus endocarditisben szívsebészeti billentyűpótlás mérlegelése.',
          'Láz- és fájdalomcsillapítás.',
          'Megfelelő hidratáció.'
        ],
        prevention: [
          'Tej pasztőrözése és forralása fogyasztás előtt.',
          'Állati ellési termékek (méhlepény, magzatvíz) higiénikus megsemmisítése, védőfelszerelés használata.',
          'Ausztráliában elérhető elölt vakcina (Q-Vax) magas kockázatú dolgozóknak.'
        ]
      },
      guidelines: {
        diagnosis: [
          'Állatkontaktus / ellési szezon + Retrobulbaris fejfájás + Atípusos pneumonia + Májenzim emelkedés = Q-láz!',
          'Akut forma: Phase II IgG/IgM emelkedés. Krónikus forma: Phase I IgG ≥1:800.',
          'Tenyésztés-negatív endocarditis esetén mindig gondolni kell Q-lázra!'
        ],
        treatment_indications: [
          'Minden akut gyanús/igazolt eset Doxycyclinnel kezelendő 14 napig.'
        ],
        first_line: [
          'Akut Q-láz: Doxycyclin 2x100 mg PO 14 napig.',
          'Krónikus Q-láz endocarditis: Doxycyclin + Hydroxychloroquin 18-24 hónapig.'
        ]
      },
      prognosis: {
        mortality: 'Akut Q-láz: <1%; Krónikus Q-láz endocarditis: 5-25% (kezeletlenül magas)',
        prognostic_scores: ['Nincs'],
        factors: 'Előzetes billentyűhiba vagy műér graft jelenléte (krónikussá válás kockázata), Doxycyclin+Hydroxychloroquin kombináció korai indítása'
      }
    },
    {
      id: 'rabies',
      name: 'Veszettség (Rabies)',
      pathogen: {
        type: 'Vírus',
        name: '<i>Rabies lyssavirus</i> (Rhabdoviridae család)',
        gram: 'Burkolt, egy-szálú negatív-szensz RNS vírus',
        shape: 'jellegzetes lövedék (bullet-shaped) alakú'
      },
      epidemiology: {
        incidence: 'Világszerte kb. 59,000 emberi haláleset/év (főleg Ázsiában és Afrikában, 99%-ban kutyaharapás miatt). Magyarországon a vadon élő rókák vakcinázása miatt a humán veszettség rendkívül ritka, de a denevér-lyssavírusok és importált esetek kockázatot jelentenek.',
        risk_groups: ['Endémiás fejlődő országokba utazók', 'Állatorvosok, gyepmesterek, vadászok, erdőjárók', 'Barlangászok (denevérek)', 'Gyermekek (gyakrabban szenvednek súlyos fej/nyak harapást)'],
        seasonality: 'Egész évben előfordulhat',
        transmission: 'Fertőzött állat (kutya, macska, róka, denevér, borz) harapása, karmolása vagy nyálának bejutása friss sebbe vagy nyálkahártyára. Levegő útján (denevérbarlangok) és szervtranszplantációval rendkívül ritkán.'
      },
      pathomechanism: {
        steps: [
          'Behatolás & Helyi replikáció: A vírus a fertőzött nyállal a harapott sebbe jut, és kezdetben a harapás helyén lévő harántcsíkolt izomsejtekben szaporodik.',
          'Neuromuscularis neuromuscularis belépés: A vírus a nicotinic acetylcholine receptorokhoz (nAChR) kötődve belép a motoros neuronok axonjaiba.',
          'Retrográd axonalis transzport: A vírus az idegrostok mentén retrográd irányban (kb. 12-24 mm/nap sebességgel) vándorol a perifériás idegeken át a gerincvelőbe és az agytörzsbe/agylétekbe.',
          'KIR Encephalitis & Negri-testek: Az agyba érve a vírus masszív, diffúz neurotropicus encephalitist okoz. Az elhalt idegsejtekben jellegzetes eosinophil citoplazmatikus zárványok (Negri-testek) képződnek.',
          'Centrifugális terjedés: Az agyból a vírus az autonóm idegek mentén eljut a nyálmirigyekbe, szaruhártyába, bőrbe és szívbe.'
        ],
        virulence_factors: ['Rabies virus G-glycoprotein (neurotropismus és nAChR kötődés)', 'Retrográd axonalis transzport képesség', 'Immun-elkerülés (apoptózis gátlása a neuronokban)']
      },
      clinical: {
        incubation: '1-3 hónap (szélsőértékek: 1 héttől 1 évig! Függ a harapás helyétől és az inokulum méretétől. Fej/nyak csípés esetén lényegesen rövidebb!).',
        onset: 'Prodroma után hirtelen kialakuló, elkerülhetetlenül fatális neurológiai kép',
        symptoms: [
          {
            name: '1. Prodromális stádium (2-10 nap)',
            description: 'Nem-specifikus láz, fejfájás, rossz közérzet. PATHOGNOMIKUS JEL: a már meggyógyult harapás helyén jelentkező viszketés, fájdalom, paraesthesia vagy égő érzés!',
            severity: 'moderate'
          },
          {
            name: '2A. Dühöngő Veszettség (Encephalitises forma - 80%)',
            description: 'Hullámzó fluktuációjú hiperexcitabilitás, szorongás, dührohamok, hallucinációk. PATHOGNOMIKUS TÜNETEK: <b>Hydrophobia</b> (víziszony: víz látványára vagy nyelési kísérletre fellépő gyötrelmes, görcsös garat- és gégegörcs); <b>Aerophobia</b> (légáramlat, fújás hatására fellépő görcs); nyálszorgalom (hypersalivatio).',
            severity: 'severe'
          },
          {
            name: '2B. Csendes Veszettség (Paralitikus forma - 20%)',
            description: 'A harapott végtagból kiinduló, progresszív, felszállító petyhüdt bénulás (Guillain-Barré-szindrómát imitálhat), hydrophobia nélkül.',
            severity: 'severe'
          },
          {
            name: '3. Kóma és Halál stádium',
            description: 'Súlyos autonóm instabilitás (hyperthermia, arrhythmia), görcsrohamok, majd kóma és légzési/keringési leállás miatti halál a tünetek megjelenésétől számított 7-10 napon belül.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Meggyógyult seb helyén paraesthesia, hyperaesthesia',
          'Hydrophobia (folyadék nyelési kísérletkor kényszeres gégegörcs és pánik)',
          'Aerophobia (arcra fújt levegő hatására fellépő görcs)',
          'Kifejezett hypersalivatio ("habzó száj"), mydriasis, piloerectio',
          'Autonóm instabilitás (fluktuáló vérnyomás és tachycardia)'
        ],
        complications: [
          'Elkerülhetetlen halál (közel 100%-os mortalitás a klinikai tünetek megjelenése után!)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Ante-mortem Diagnosztika (Betegből)', finding: 'Nyálból RT-PCR; Tarkóbőr-biopsziából (szőrtüsző körüli idegek) Direct Fluorescent Antibody (DFA) antigén kimutatás; Szaruhártya lenyomat', interpretation: 'Klinikai gyanú esetén azonnal elvégzendő referencia-laboratóriumban!' },
          { test: 'Post-mortem Diagnosztika (Agyvelőből)', finding: 'Agytörzs / Hippocampus hisztológián Negri-testek, DFA teszt', interpretation: 'Klasszikus megerősítés' }
        ],
        imaging: [
          { modality: 'KIR MRI', finding: 'Nem-specifikus hyperintens jelek a thalamusban, agytörzsben és basal ganglionokban', significance: 'Egyéb encephalitis kizárása' }
        ],
        microbiology: [
          { test: 'Gyanús állat megfigyelése / vizsgálata', finding: 'Az emberre támadó hazai kutyát/macskát 14 napos hatósági állatorvosi megfigyelés alá kell helyezni. Ha az állat 14 napig egészséges marad, a veszettség kizárható!', significance: 'KULCSFONTOSSÁGÚ DECISIVUM A PEP ILLETÉKESSÉGÉBEN!' }
        ]
      },
      differential: [
        { disease: 'Tetanus', distinguishing: 'Trismus (szájzár), risus sardonicus, izomspazmusok zajra/érintésre, HIÁNYZIK a hydrophobia és a pleocytosis' },
        { disease: 'Egyéb Akut Encephalitis (HSV, VZV, Rabies-like lyssaviruses)', distinguishing: 'Hiányzik a hydrophobia/aerophobia és a harapási anamnézis' },
        { disease: 'Guillain-Barré Szindróma', distinguishing: 'A paralitikus veszettség imitálhatja, de GBS-ben nincs láz, nincs rágcsáló/állat csípés, liquorban fehérje-sejt disszociáció van' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'POST-EXPOZÍCIÓS PROFILAXIS (PEP)', dose: 'AZONNALI SEBTISZTÍTÁS + VAKCINA + IMMUNGLOBULIN', duration: 'Azonnal az expozíció után!', note: 'A KLINIKAI TÜNETEK MEGJELENÉSE ELŐTTI PEP ÉLETMENTŐ ÉS 100%-BAN HATÉKONY!' }
          ],
          inpatient: [
            { drug: 'Palliatív szedáció & Fájdalomcsillapítás', dose: 'Midazolam / Ketamin / Opioidok', duration: '-', note: 'A klinikai tünetek megjelenése után a betegség gyógyíthatatlan. A cél a szenvedés maximális enyhítése.' }
          ],
          icu: [
            { drug: 'Milwaukee Protokoll (Kísérleti)', dose: 'Kóma indukció + Ketamin + Amantadin + Ribavirin', duration: '-', note: 'SZAKMAILAG NEM AJÁNLOTT ÉS ELVETETT! A vizsgálatok nem igazolták a hatékonyságát, a mortalitást nem csökkenti.' }
          ]
        },
        targeted: 'Klinikailag manifesztálódott veszettség esetén hatékony célzott antivirális terápia NEM ÁLL RENDELKEZÉSRE. A kezelés tisztán palliatív szedáció.',
        supportive: [
          '<b>1. AZONNALI SEBTISZTÍTÁS:</b> A sebet azonnal bőséges szappanos vízzel vagy povidon-jód oldattal legalább 15 PERCIG alaposan át kell mosni! Ez a legfontosabb első lépés, ami a vírusmennyiség zömét elpusztítja.',
          '<b>2. HRIG (Human Rabies Immunoglobulin):</b> 20 NE/kg dózisban. A teljes mennyiséget a SEB KÖRÜL ÉS A SEBBE kell beinfiltrálni! A maradékot IM adni távoli anatómiai régióba.',
          '<b>3. VESZETTSÉG ELLENI VAKCINA:</b> Essen-protokoll: 0., 3., 7., és 14. napon (immunszupprimáltaknak 28. napon is) 1-1 ml deltoid izomba IM adandó! Gluteusba adni TILOS!'
        ],
        prevention: [
          'Pre-expozíciós oltás (PrEP): Állatorvosoknak, vadászoknak, endémiás területekre utazóknak (0., 7., és 21/28. napon).',
          'Kutyák kötelező évenkénti veszettség elleni oltása.',
          'Rókák oralis vakcinázása (biztosítja hazánk mentességét).'
        ]
      },
      guidelines: {
        diagnosis: [
          'Állat csípés/harapás + Paresthesia a sebnél + Hydrophobia = Veszettség!',
          'Kutyatámadás esetén az állatot 14 napos hatósági megfigyelésre kell fogni.',
          'Gyanú esetén a Post-Expozíciós Profilaxist (PEP) PERCEKEN/ÓRÁKON BELÜL meg kell kezdeni!'
        ],
        treatment_indications: [
          'Minden gyanús (Kategória II és III) veszettség-expozíció esetén AZONNAL PEP indítandó!'
        ],
        first_line: [
          'Expozíció után: 15 perces szappanos sebmosás + HRIG (20 NE/kg a sebbe) + Oltási sorozat (0, 3, 7, 14. nap).'
        ]
      },
      prognosis: {
        mortality: 'Klinikai tünetek megjelenése után: ~100% (a legfatálisabb ismert fertőző betegség); Időben adott PEP esetén: 0% (100% védőhatás!)',
        prognostic_scores: ['Nincs'],
        factors: 'A PEP megkezdésének gyorsasága az expozíciót követően'
      }
    },
    {
      id: 'anthrax',
      name: 'Lépfene (Anthrax)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Bacillus anthracis</i>',
        gram: 'Gram-pozitív (nagy, szögletes pálcák láncokban, "bambusznád" megjelenés)',
        shape: 'obligát aerob, spóraképző pálca antifagocita polipeptid kapszulával'
      },
      epidemiology: {
        incidence: 'Ritka zoonózis. Mezőgazdasági régiókban fordul elő. KIEMELT BIOTERRORIZMUS VESZÉLY (A-kategóriás biológiai fegyver agens!).',
        risk_groups: ['Állattenyésztők, gulyások, mészárosok', 'Bőripari dolgozók, szőrmefeldolgozók, gyapjúválogatók ("woolsorter\'s disease")', 'Laboratóriumi dolgozók', 'Hadjadatszolgálat / Bioterrorizmus áldozatai'],
        seasonality: 'Nincs szezonalitása',
        transmission: '1. Cutan (bőr): spórák bejutása hámhiányon keresztül fertőzött állati tetemmel/bőrrel érintkezve (95%); 2. Inhalációs: spórák belélegzése porból/gyapjúból; 3. Gastrointestinalis: elégtelenül megfőzött fertőzött hús fogyasztása. Nincs emberről emberre terjedés!'
      },
      pathomechanism: {
        steps: [
          'Spóra csírázás: A rendkívül ellenálló spórák behatolnak a szervezetbe, ahol a macrophages felveszik őket és a regionális nyirokcsomókba szállítják, miközben vegetatív baktériumokká alakulnak.',
          'Antifagocita Kapszula: A B. anthracis poly-D-glutaminsav kapszulája megakadályozza a phagocytosist.',
          'Háromkomponensű Exotoxin szintézis: A baktérium termeli a Protective Antigen (PA), Edema Factor (EF) és Lethal Factor (LF) fehérjéket.',
          'Toxin mechanizmus: A PA kötődik a gazdasejt receptoraihoz és pórust képez. Az EF (kalmodulin-függő adenilát-cikláz) masszív intracellularis cAMP emelkedést és gélállagú, kifejezett ÖDÉMÁT okoz. Az LF (cink-metalloproteáz) hasítja a MAP-kinázokat, ami nekrózist, citokin vihart és sejthalált eredményez.',
          'Hemorrhagias Mediastinitis & Szepszis: Inhalációs formában masszív, vérzéses mediastinalis nyirokcsomó-nekrózis, leplezetlen szisztémás toxaemia és fatalis szzeptikus shock alakul ki.'
        ],
        virulence_factors: ['Poly-D-glutaminsav kapszula (pXO2 plazmid)', 'Protective Antigen - PA (pXO1 plazmid)', 'Edema Factor - EF', 'Lethal Factor - LF']
      },
      clinical: {
        incubation: 'Cutan: 1-7 nap; Inhalációs: 1-7 nap (de akár 60 nap is lehet a spórák perzisztenciája miatt!)',
        onset: 'Cutan formában lokalizált; Inhalációs formában hirtelen fulmináns kétszakaszos lefolyás',
        symptoms: [
          {
            name: '1. Cutan Anthrax (Bőrlépfene - 95%)',
            description: 'Fájdalmatlan viszkető papula, ami vesiculává, majd központi elhalásos, FÁJDALMATLAN FEKETE PÖRKKE (Malignus Pustula / Eschar) alakul. A pörk körül kifejezett, kocsonyás, NEM-GYULLADÁSOS ÖDÉMA udvar alakul ki. A fájdalom hiánya kulcsismérv!',
            severity: 'moderate'
          },
          {
            name: '2. Inhalációs Anthrax (Tüdőlépfene - Woolsorter\'s disease)',
            description: 'Kétfázisú lefolyás: 1. Prodromalis fázis (enyhe láz, köhögés, mellkasi diszkomfort); 2. Hirtelen fulmináns fázis (1-3 nap múlva): magas láz, súlyos légszomj, stridor, cianózis, masszív mellkasi fájdalom, szzeptikus shock. Kezelés nélkül halálozása >85%!',
            severity: 'severe'
          },
          {
            name: '3. Gastrointestinalis Anthrax',
            description: 'Fertőzött hús fogyasztása után: súlyos hányinger, hányás, véres hasmenés, kiterjedt hasi fájdalom, ascites és bélperforáció.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Fájdalmatlan fekete központi eschar (pörk) kiterjedt kocsonyás ödémával (Cutan)',
          'Súlyos dyspnoe, cianózis, stridor, hypotensio (Inhalációs)',
          'Mellkas felett tompulat (kifejezett pleurális folyadék)',
          'Meningealis izgalmi jelek (haemorrhagias anthrax meningitis kíséri az esetek 50%-át)'
        ],
        complications: [
          'Hemorrhagias anthrax meningitis (szinte 100% mortalitás)',
          'Szzeptikus shock és DIC',
          'Hemorrhagias mediastinitis és asphyxia',
          'Légzési elégtelenség'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Gram-festés (Pörköből / Vezikula folyadékból / Vérből)', finding: 'Nagy, szögletes Gram-pozitív pálcák láncokban ("bambusznád" megjelenés), centralis spórákkal', interpretation: 'Azonnali gyanú igazolás!' },
          { test: 'Hemokultúra', finding: 'Bacillus anthracis gyors növekedése aerob palackban', interpretation: 'Inhalációs / GI formában szinte mindig pozitív' }
        ],
        imaging: [
          { modality: 'Mellkas röntgen / CT', finding: 'Kifejezett MEDIASTINALIS KISZÉLESEDÉS (vérzéses mediastinitis) és bilaterális pleuralis effusio, tüdő-parenchymás infiltrátumok nélkül!', significance: 'Inhalációs anthrax PATHOGNOMIKUS képalkotó jele!' }
        ],
        microbiology: [
          { test: 'PCR', finding: 'Bacillus anthracis pXO1 és pXO2 plazmid DNS kimutatás', significance: 'Gyors és specifikus megerősítés' },
          { test: 'DFA (Direct Fluorescent Antibody)', finding: 'Kapszula és cell-wall polysaccharide antigén kimutatás', significance: 'Referencia laboratóriumi igazolás' }
        ]
      },
      differential: [
        { disease: 'Pókcsípés / Ecthyma gangrenosum (Pseudomonas)', distinguishing: 'Kifejezetten FÁJDALMAS léziók, hiányzik a kiterjedt kocsonyás ödéma' },
        { disease: 'Tularémia (Ulceroglandularis)', distinguishing: 'Nagyon FÁJDALMAS fekély ÉS rendkívül fájdalmas nekrotizáló nyirokcsomó bubó' },
        { disease: 'Atípusos Pneumonia / Histoplasmosis', distinguishing: 'Mediastinalis kiszélesedés és hemorrhagias pleuralis folyadék hiánya' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Ciprofloxacin per os', dose: '2x500 mg PO', duration: '60 nap (ha bioterrorizmus gyanúja áll fenn a spórák miatt!)', note: 'Cutan anthrax első vonalbeli kezelése' },
            { drug: 'Doxycyclin per os', dose: '2x100 mg PO', duration: '60 nap', note: 'Alternatív oralis szer' }
          ],
          inpatient: [
            { drug: 'Ciprofloxacin IV + Meropenem IV + Linezolid IV (Kombinációs Terápia)', dose: 'Ciprofloxacin 2x400 mg IV + Meropenem 3x1 g IV + Linezolid 2x600 mg IV', duration: '14 nap IV, majd oralis váltással összesen 60 NAPIG!', note: 'Inhalációs / Szisztémás Anthrax kötelező hármas kombinációs kezelése! Linezolid/Clindamycin a fehérjeszintézis gátlásával gátolja a Toxin termelést!' }
          ],
          icu: [
            { drug: 'Hármas Antibiotikum Kombináció + Raxibacumab / Obiltoxaximab IV', dose: 'Raxibacumab 40 mg/kg IV egyszeri infúzió', duration: 'Egyszeri', note: 'Monoklonális antitest a Protective Antigen (PA) toxin semlegesítésére szisztémás anthraxban!' }
          ]
        },
        targeted: 'Szisztémás/Inhalációs Anthrax: Ciprofloxacin IV + Fehérjeszintézis-gátló (Linezolid / Clindamycin) + Béta-laktám (Meropenem / Penicillin G ha érzékeny) + Raxibacumab antitoxin. Teljes időtartam: 60 NAP a spórák hosszas csírázása miatt!',
        supportive: [
          'Pleuralis effusio és ascites korai lecsapolása (mellkasi csövezés / thoracocentesis).',
          'Szeptikus shock intenzív terápiája, invazív lélegeztetés.',
          'Cutan anthrax esetén a seb sebészi kimetszése/debridementje SZIGORÚAN TILOS (fokozza a toxin szóródását)!'
        ],
        prevention: [
          'Post-expozíciós Profilaxis (PEP): igazolt spóra-expozíció (pl. bioterrorizmus) után Ciprofloxacin (2x500 mg PO) vagy Doxycyclin (2x100 mg PO) 60 NAPIG + 3 adagos Anthrax Vakcina!',
          'Elhullott fertőzött állati tetemek elégetése (máglyán) vagy mélyre elásása mészréteggel. Felboncolni TILOS (a levegővel érintkezve képez spórát!).'
        ]
      },
      guidelines: {
        diagnosis: [
          'Fájdalmatlan fekete pörk + Kocsonyás Ödéma = Cutan Anthrax!',
          'Mellkas röntgenen Mediastinalis Kiszélesedés = Inhalációs Anthrax!',
          'Cutan lézió sebészi kimetszése szigorúan TILOS.'
        ],
        treatment_indications: [
          'Minden szisztémás/inhalációs anthrax hármas kombinációs antibiotikumot ÉS antitoxint igényel.'
        ],
        first_line: [
          'Szisztémás: Ciprofloxacin IV + Linezolid IV + Meropenem IV + Raxibacumab antitoxin 60 napig.',
          'Cutan: Ciprofloxacin PO 60 napig.'
        ]
      },
      prognosis: {
        mortality: 'Cutan anthrax: <1% (kezelt), 20% (kezeletlen); Inhalációs anthrax: 45% (kezelt), >85% (kezeletlen); GI anthrax: 40%',
        prognostic_scores: ['APACHE II'],
        factors: 'Klinikai forma, antitoxin korai adása, hemorrhagias meningitis jelenléte'
      }
    },
    {
      id: 'brucellosis',
      name: 'Brucellosis (Máltai láz / Hullámzó láz)',
      pathogen: {
        type: 'Baktérium',
        name: '<i>Brucella</i> fajok (<i>B. melitensis</i> [juh/kecske - a legvirulensebb!], <i>B. abortus</i> [szarvasmarha], <i>B. suis</i> [sertés], <i>B. canis</i> [kutya])',
        gram: 'Gram-negatív (kicsi, halvány)',
        shape: 'obligát aerob, fagoszómában élő intracelluláris coccobacillus'
      },
      epidemiology: {
        incidence: 'A világ legelterjedtebb zoonózisa a szarvasmarha- és juhtenyésztő régiókban (Mediterráneum, Közel-Kelet, Közép-Ázsia, Dél-Amerika).',
        risk_groups: ['Pásztorok, állattenyésztők, gazdálkodók', 'Állatorvosok, vágóhídi munkások', 'Laboratóriumi dolgozók (magas aerosol fertőzési kockázat!)', 'Nyers, pasztőrözetlen kecske-/juhsajtot és tejet fogyasztók'],
        seasonality: 'Tavasz és nyár (ellési és tejtermelési időszak)',
        transmission: '1. Pasztőrözetlen tej, sajt, tejszín fogyasztása (leggyakoribb!); 2. Fertőzött állati szövetekkel/placenta-maradványokkal való direkt érintkezés (bőrsérülésen át); 3. Inhalációs aeroszol (istállókban, vágóhidakon, laboratóriumban).'
      },
      pathomechanism: {
        steps: [
          'Behatolás: A baktérium a tápcsatornán, bőrsérülésen vagy légúti nyálkahártyán keresztül jut be.',
          'Intracelluláris Túlélés: A PMN granulocyták és makrofágok bekebelezik. A Brucella gátolja a phagolysosoma fúziót és az myeloperoxidáz rendszert, majd az endoplazmatikus retikulumban szaporodik.',
          'Haematogen szóródás: A fertőzött makrofágok a nyirokcsomókba, majd a véráramba jutva (bakterémia) elérik a reticuloendothelialis rendszert (máj, lép, csontvelő, nyirokcsomók).',
          'Granuloma képződés: A szervezet válaszul nem-sajtosodó epitelioid granulomákat hoz létre a szervekben.',
          'Szervi fókuszok: A szóródás során gyakran megtelepszik az ízületekben és gerincben (Spondylodiscitis), a herékben (Epididymo-orchitis) vagy a szívbillentyűkön (Endocarditis).'
        ],
        virulence_factors: ['Sima LPS (O-antigén lánc - gátolja a komplement mediált lízist)', 'Type IV secretion system (VirB operon - phagolysosoma fúzió gátlása)', 'Intracelluláris perzisztencia']
      },
      clinical: {
        incubation: '2-4 hét (szélsőértékek: 1 héttől akár 2-3 hónapig)',
        onset: 'Lassan, fokozatosan vagy szubakutan kialakuló hullámzó lázmenet',
        symptoms: [
          {
            name: 'Klasszikus Akut Brucellosis (Unduláló láz)',
            description: '<b>Hullámzó lázmenet (Febris undulans):</b> A láz délután/este emelkedik, reggelre spontán profúz, penészszagú/savanyú izzadás kíséretében lecsökken. Kifejezett fáradékonyság, háti/deréki fájdalom, izom- és ízületi fájdalom, kifejezett hangulatváltozások (depresszió).',
            severity: 'moderate'
          },
          {
            name: 'Osteoarticularis Manifesztáció (30-50% - Leggyakoribb szövődmény!)',
            description: '<b>Spondylodiscitis / Vertebral Osteomyelitis:</b> főleg a lumbalis gerinc szegmensben heves derékfájdalom, mozgáskorlátozottság, psoas tályog. Gyakori még a <b>Sacroiliitis</b> és a nagyízületi (csípő, térd) monoarthritis.',
            severity: 'severe'
          },
          {
            name: 'Genitourinaris Manifesztáció (10-20%)',
            description: '<b>Epididymo-orchitis:</b> painful, hirtelen kialakuló egyoldali hereduzzanat és láz.',
            severity: 'moderate'
          },
          {
            name: 'Brucella Endocarditis (<2% - A halálozás fő oka!)',
            description: 'Tenyésztés-negatív billentyű-destrukció (főleg az aorta-billentyűn), gyorsan progresszív szívelégtelenség, billentyű tályogok és embolizáció.',
            severity: 'severe'
          }
        ],
        physical_exam: [
          'Febris undulans (hullámzó lázmenet) profúz izzadással',
          'Hepatosplenomegalia és nyaki/axillaris lymphadenopathia',
          'Tövisnyúlványok ütögetési érzékenysége, Lasegue-jel (Spondylodiscitis)',
          'Egyoldali erzékeny, duzzadt here/mellékhere (Orchitis)'
        ],
        complications: [
          'Gerinc spondylodiscitis, csigolya kollapszus és epiduralis tályog',
          'Infectiv endocarditis és billentyűperforáció',
          'Neurobrucellosis (meningitis, radiculitis, krónikus encephalitis)',
          'Krónikus Brucellosis (perzisztáló panaszok >1 évig)'
        ]
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Leukopenia relatív lymphocytosissal és monocytosissal, enyhe anaemia, thrombocytopenia', interpretation: 'Klasszikus csontvelői reticuloendothelialis depresszió' },
          { test: 'Májenzimek', finding: 'Transzaminázok (GOT, GPT) enyhe emelkedése', interpretation: 'Granulomatous hepatitis' }
        ],
        imaging: [
          { modality: 'Gerinc MRI (kontrasztos)', finding: 'Discus intervertebralis és szomszédos csigolyatest ödéma, kontraszthalmozás (Spondylodiscitis), paraspinalis / psoas tályog', significance: 'Spondylodiscitis és epiduralis kompresszió korai igazolása' },
          { modality: 'Echocardiographia (TTE / TEE)', finding: 'Aorta / mitralis billentyű vegetáció, ulceratio', significance: 'Endocarditis gyanú esetén kötelező' }
        ],
        microbiology: [
          { test: 'Hemokultúra (Lízis-centrifugálás / BACTEC)', finding: 'Brucella spp. izolálás', significance: 'LASSÚ NÖVEKEDÉS! A mikrobiológiai labornak jelezni kell a Brucella gyanút, a tenyésztést minimum 21-28 napig kell tartani!' },
          { test: 'Szerológia (Standard Csőagglutináció - SAT / Wright-reakció)', finding: 'Titer ≥1:160 (vagy 4-szeres titer-emelkedés)', significance: 'A DIAGNÓZIS ALAPJA! Krónikus esetben Coomb-teszt szükséges a blokkoló antitestek miatt.' },
          { test: 'PCR', finding: 'Brucella DNS kimutatás vérből vagy szövetből', significance: 'Gyors és specifikus megerősítés' }
        ]
      },
      differential: [
        { disease: 'Typhus Abdominalis (Salmonella Typhi)', distinguishing: 'Kontinuus láz, roseolák, bradycardia, széklet tenyésztés' },
        { disease: 'Tuberculosis (Pott-kór)', distinguishing: 'Pott-kórban a discus sokáig megkímélt lehet, lassan progresszív, tuberculin/IGRA positive' },
        { disease: 'Q-láz', distinguishing: 'Atípusos pneumonia és retrobulbaris fejfájás dominál, fázisvariációs szerológia' },
        { disease: 'Infectiv Endocarditis (Staphylococcus / Streptococcus)', distinguishing: 'Gyors lefolyás, hemokultúrából 24-48h alatt baktérium tenyészik' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Doxycyclin + Rifampicin (Standard Szisztémás Kezelés)', dose: 'Doxycyclin 2x100 mg PO + Rifampicin 1x600-900 mg PO', duration: 'Minimum 6 HÉT!', note: 'STANDARD ELSŐ VONALBELI ORALIS KOMBINÁCIÓ! Az egykomponensű terápia TILOS a magas relapszus-ráta miatt!' }
          ],
          inpatient: [
            { drug: 'Doxycyclin PO + Streptomycin IM / Gentamicin IV', dose: 'Doxycyclin 2x100 mg PO 6 hétig + Gentamicin 5 mg/kg IV az első 2 hétben (vagy Streptomycin 1g IM 14 napig)', duration: 'Doxy 6 hét + Aminoglikozid 2 hét', note: 'ALACSONYABB RELAPSZUS-RÁTÁJÚ ALTERNATÍVA! Különösen Spondylodiscitis esetén javasolt.' }
          ],
          icu: [
            { drug: 'Ceftriaxon IV + Doxycyclin PO + Rifampicin PO (Neurobrucellosis / Endocarditis)', dose: 'Ceftriaxon 2x2 g IV + Doxycyclin 2x100 mg PO + Rifampicin 1x900 mg PO', duration: 'Minimum 3-6 HÓNAP!', note: 'NEUROBRUCELLOSIS ÉS ENDOCARDITIS KÖTELEZŐ HÁRMAS KEZELÉSE! Endocarditisben szívsebészeti billentyűpótlás javasolt.' }
          ]
        },
        targeted: 'Nem-szövődményes Brucellosis: Doxycyclin (2x100 mg PO 6 hétig) + Rifampicin (1x600-900 mg PO 6 hétig) VAGY Doxycyclin (6 hét) + Gentamicin (2 hét). Spondylodiscitis: Doxycyclin + Rifampicin + Gentamicin minimum 8-12 hétig. Neurobrucellosis / Endocarditis: Ceftriaxon + Doxycyclin + Rifampicin 3-6 hónapig.',
        supportive: [
          'Spondylodiscitis esetén merev fűző (ortézis) viselése a gerinc instabilitás kivédésére.',
          'Endocarditis esetén korai szívsebészeti konzílium és billentyű csere.',
          'Megfelelő pihenés, fájdalomcsillapítás (NSAID).'
        ],
        prevention: [
          'Tej és tejtermékek pasztőrözése vagy forralása.',
          'Nyers kecske-/juhsajtok kerülése nem ellenőrzött forrásból.',
          'Állatellésnél és állatorvosi beavatkozásoknál védőkesztyű és védőszemüveg használata.',
          'Állatállományok vakcinázása és szűrése.'
        ]
      },
      guidelines: {
        diagnosis: [
          'Hullámzó láz + Derékfájás + Nyers tejtermék = Brucellosis!',
          'A tenyésztés lassú (minimum 21 napig kell tartani a hemokultúrát).',
          'Monoterápia szigorúan TILOS a relapszus kockázata miatt.'
        ],
        treatment_indications: [
          'Minden Brucellosis kombinált antibiotikum terápiát igényel minimum 6 hétig.'
        ],
        first_line: [
          'Standard: Doxycyclin PO + Rifampicin PO 6 hétig (vagy Doxycyclin 6 hét + Gentamicin 2 hét).',
          'Neurobrucellosis / Endocarditis: Ceftriaxon IV + Doxycyclin PO + Rifampicin PO 3-6 hónapig.'
        ]
      },
      prognosis: {
        mortality: '<1-2% (főleg akut endocarditis miatt); Relapszus ráta adekvát kombinált kezeléssel <5%, monoterápiával >30%',
        prognostic_scores: ['Nincs'],
        factors: 'Adekvát 6 hetes kombinációs terápia betartása, endocarditis korai műtéti ellátása'
      }
    }
  ]
};

if (typeof window !== 'undefined') {
  if (!(window as any).diseases) {
    (window as any).diseases = {};
  }
  (window as any).diseases.zoonotic = zoonosisHu;
}
