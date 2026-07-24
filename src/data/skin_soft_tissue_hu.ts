import { Category } from '../types';

export const skinSoftTissueHu: Category = {
  name: 'Bőr és lágyrész fertőzések',
  icon: '🩹',
  color: '#e11d48',
 didactics: {
    overview: 'A bőr- és lágyrész-fertőzések (SSTI-k), valamint a mélyebb csont- és ízületi fertőzések széles klinikai spektrumot ölelnek fel, a felületes, lokalizált elváltozásoktól (impetigo, folliculitis) az életveszélyes nekrotizáló lágyrész-fertőzésekig (NSTI), a komplex diabéteszes lábfertőzésekig (DFI), valamint a csont-/ízületi destrukciókig (osteomyelitis, septicus arthritis, spondylodiscitis). A kezelést a legújabb, mérvadó irányelvek határozzák meg (IDSA 2024-es frissítések, WSES 2024, IWGDF 2023, NPIAP 2023 és az OVIVA-vizsgálat alapelvei). A terápia két fő pillérre épül: a gyors, agresszív sebészi forráskontrollra (debridement, drenázs vagy revaszkularizáció) és a célzott, bizonyítékalapú antimikrobiális kezelésre.',
    primary: 'A gennyes és nem gennyes SSTI-k osztályozása (IDSA 2024): 1) Gennyes SSTI-k (bőr alatti tályogok, furunculusok, carbunculusok): Az elsődleges kezelés az incízió és drenázs (I&D). Antibiotikum javasolt közepesen súlyos/súlyos esetekben, szisztémás tünetek (láz, SIRS), immunszuppresszió vagy arc-/kéz-lokalizáció esetén. 2) Nem gennyes SSTI-k (erysipelas, cellulitis, nekrotizáló fertőzések): Az empirikus terápia a Streptococcusokat és az MSSA/MRSA-t célozza. Szövődménymentes cellulitis esetén a rövid (5–7 napos) orális kezelés ugyanolyan hatékony, mint a 10–14 napos, amennyiben klinikai válasz alakul ki.',
    secondary: 'Nekrotizáló lágyrész-fertőzések (NSTI / necrotizáló fasciitis): Hiperakut sebészi sürgősségi állapotok. Fő diagnosztikus jel: a fizikális lelethez képest aránytalanul erős fájdalom. A LRINEC-score alátámaszthatja a gyanút, de a műtétet SOHA nem szabad képalkotásra vagy laboreredményre várva halasztani. A sebészi feltárás ("ujjpróba") és a radikális debridement 6–12 órán belül életmentő. Empirikus hármas terápia: (Pip/Tazo vagy Meropenem) + Vancomycin + Clindamycin (toxinszintézis-gátlás céljából) ± IVIG GAS toxikus sokk szindróma esetén.',
    biliary: 'Diabéteszes lábfertőzések (DFI – IWGDF 2023) és krónikus decubitus (nyomási) fekélyek (NPIAP 2023): A DFI kezelése fertőzés-stádiumbeosztást (enyhe, közepes, súlyos), csontig-tapintás tesztet (Probe-to-Bone, PTB), tehermentesítést és vaszkuláris státuszfelmérést (ABI) igényel. Szisztémás antibiotikum nem indokolt fertőzés nélküli, kolonizált krónikus fekélyeknél vagy nyomási sérüléseknél; kizárólag aktív klinikai fertőzés, cellulitis vagy osteomyelitis esetén javasolt.',
    diagnostics: [
      '1) Klinikai vizsgálat: A gennyes és nem gennyes forma elkülönítése, a mélység, crepitatio, bullák, érzéketlenség és a csontig-tapintás (PTB) státuszának felmérése.',
      '2) Sebészi feltárás ("ujjpróba"): Vérzés hiánya, "mosogatóvíz-szerű" folyadék és a fasciaellenállás elvesztése megerősíti a necrotizáló fasciitist.',
      '3) Diagnosztikus arthrocentesis: Kötelező septicus arthritis gyanúja esetén, MÉG az antibiotikum megkezdése ELŐTT (synovialis fehérvérsejtszám >50 000/µL, >90% PMN).',
      '4) Mikrobiológia: Mély szöveti biopszia vagy kürettázs DFI/osteomyelitis esetén (kerülendő a nem tisztított fekély felületi tamponja); vérkultúra (50%-ban pozitív spondylodiscitisben/septicus arthritisben).',
      '5) Képalkotás: Kontrasztos CT lágyrész-gáz/tályog kimutatására NSTI-ben; MRI (arany standard) spondylodiscitis, osteomyelitis és mély szöveti tályogok esetén.'
    ],
    red_flags: [
      'A fizikális lelethez képest aránytalanul erős, gyötrő fájdalom (korai NSTI-figyelmeztető jel)',
      'Bőr alatti crepitatio, bőrnekrózis, bullák vagy érzéskiesés (idegnekrózis okozta anesztézia)',
      'Reynolds/SIRS-kritériumok vagy septicus shock (hypotonia, emelkedett laktát >2 mmol/L, tudatállapot-változás)',
      'Pozitív csontig-tapintás (PTB) teszt, exponált csonttal, diabéteszes láb fekélyben',
      'Akut monoarthritis, az ízület aktív és passzív mozgatásának képtelenségével (septicus arthritis – sürgősségi állapot)',
      'Progresszív neurológiai deficit (motoros paresis, sphincter-diszfunkció) spondylodiscitis gyanúja esetén (epiduralis tályog)'
    ],
    special_populations: 'Diabéteszes betegek: A polyneuropathia tompítja a fájdalomérzést; a mikro-/makrovaszkuláris betegség rontja a gyógyulást – alacsony küszöbérték a PTB-teszt és a képalkotás elvégzésére. Idősek és immunszupprimált betegek: Gyakran láz és klasszikus leukocytosis nélkül jelentkeznek. Intravénás droghasználók: Magas a CA-MRSA, a septicus arthritis, a spondylodiscitis és az infektív endocarditis előfordulása.',
    teaching_tip: 'Gennyes SSTI-k esetén az incízió és drenázs az elsődleges! NSTI-ben a sebészi forráskontroll életmentő! Csont- és ízületi fertőzéseknél (osteomyelitis, septicus arthritis, spondylodiscitis) a korai orális antibiotikum-váltás 7–10 napos iv. indukció után (OVIVA-vizsgálat) nem alacsonyabb hatékonyságú, mint a 6 hetes iv. terápia.'
  },
  tables: [
    {
      title: 'Irányelvek összefoglalása és a főbb bőr-, lágyrész- és csont-/ízületi fertőzések differenciáldiagnosztikája',
      headers: ['Betegség', 'Kórokozó-spektrum', 'Diagnosztikus arany standard', 'Fő irányelvi kritériumok', 'Empirikus antimikrobiális terápia', 'Intervenciós / sebészi forráskontroll'],
      rows: [
        ['Necrotizáló fasciitis (NSTI)', 'I. típus: polimikrobiális; II. típus: GAS, S. aureus; III. típus: Vibrio/Clostridium', 'Sebészi feltárás ("ujjpróba") és szöveti biopszia', 'WSES 2024 / IDSA: sürgősségi debridement <6-12 órán belül; LRINEC-score ≥6/8', 'Pip/Tazo 4,5g 6 óránként + Vanco 15-20mg/kg + Clindamycin 900mg 8 óránként iv.', 'Azonnali sürgősségi radikális sebészi debridement + revízió <24 órán belül'],
        ['Erysipelas', 'Streptococcus pyogenes (GAS) >> B/C/G csoportú Streptococcus', 'Klinikai kép: éles szélű, kiemelkedő, lángnyelv-szerű, élénkvörös plakk', 'IDSA 2024 / AWMF: nem gennyes felületes fertőzés; 7-10 napos orális terápia', 'Penicillin V 500-1000mg PO 6 óránként vagy Penicillin G 2-4ME iv. 4-6 óránként', 'Nem szükséges (a belépési kapu, pl. tinea pedis kezelése; végtag felpolcolása)'],
        ['Cellulitis', 'Streptococcus pyogenes, MSSA, MRSA', 'Klinikai kép: diffúz, elmosódott szélű bőrpír, melegség, oedema', 'IDSA 2024: 5–7 napos időtartam nem alacsonyabb hatékonyságú klinikai válasz esetén', 'Cephalexin 500mg PO 6 óránként vagy Cefazolin 1-2g iv. 8 óránként (+ Vanco/TMP-SMX MRSA gyanú esetén)', 'Végtag felpolcolása; drenázs csak másodlagos tályog kialakulása esetén'],
        ['Impetigo contagiosa', 'S. aureus (bullosus és nem bullosus forma), S. pyogenes', 'Klinikai kép: méz-színű pörkök vagy petyhüdt bullák', 'IDSA: topikus kezelés enyhe esetben (<5 elváltozás); orális kiterjedt/bullosus formában', 'Topikus Mupirocin 2% naponta kétszer, 5 napig VAGY orális Cephalexin 500mg PO 6 óránként, 7 napig', 'Helyi sebkezelés és a pörkök eltávolítása'],
        ['Bőr alatti tályog / Furunculus', 'Staphylococcus aureus (MSSA és MRSA)', 'Klinikai vizsgálat és ágy melletti ultrahang (fluktuáció)', 'IDSA 2024: az elsődleges kezelés az incízió és drenázs; antibiotikum SIRS/arc esetén', 'Önmagában incízió és drenázs (SIRS/súlyos esetben TMP-SMX vagy Doxycyclin hozzáadása)', 'Elsődleges incízió és drenázs (I&D) + bőséges öblítés'],
        ['Diabéteszes lábfertőzés (DFI)', 'Enyhe: monomikrobiális. Közepes/súlyos: polimikrobiális + anaerobok', 'Klinikai fertőzési jelek + mély szöveti biopszia + PTB-teszt', 'IWGDF / IDSA 2023: enyhe/közepes/súlyos stádiumbeosztás; PTB-teszt osteomyelitisre', 'Amoxicillin/klavulánsav PO (enyhe) vagy Pip/Tazo 4,5g iv. 6 óránként + Vanco (közepes/súlyos)', 'Sebészi debridement, tehermentesítés (total contact cast), vaszkuláris revaszkularizáció'],
        ['Nyomási fekély (decubitus)', 'Másodlagos kolonizáció / polimikrobiális fertőzés', 'Klinikai stádiumbeosztás (NPIAP 1-4. stádium / DTPI)', 'NPIAP 2023: szisztémás antibiotikum KIZÁRÓLAG akut cellulitis, sepsis vagy osteomyelitis esetén', 'Nincs szisztémás antibiotikum nem fertőzött fekélynél! (Pip/Tazo csak cellulitis/sepsis esetén)', 'Nekrotikus lepedék/eschar debridementje + nyomástehermentesítés 2 óránként'],
       ]
    }
  ],
          diseases: [
          {
            id: 'necrotizing_fasciitis',
            name: 'Nekrotizáló fasciitis',
            pathogen: { type: 'Baktérium', name: 'Polimikrobiális (I. típus) vagy Monomikrobiális (II. típus)', gram: 'Vegyes', shape: 'Változó' },
            epidemiology: {
              incidence: 'Ritka (0.4-1/100,000), de magas mortalitású',
              risk_groups: ['I. típus: Diabetes, immunszuppresszió, elhízás, perifériás érbetegség', 'II. típus: Egészséges fiatalok, trauma, műtét, IV droghasználat', 'III. típus: Tengervíz expozíció, májbetegség (Vibrio)'],
              seasonality: 'Nincs',
              transmission: 'Endogén (bőrsérülés kapu) vagy direkt inokulálás'
            },
            pathomechanism: {
              steps: [
                'Behatolás: A fertőzés egy bőrsérülésen (akár minimálison) keresztül jut a subcutan szövetekbe. A baktériumok a felületes fascia mentén gyorsan terjednek, kihasználva a rossz vérellátású síkokat.',
                'Toxinhatás: A kórokozók (főleg a GAS és Clostridium) erős toxinokat termelnek, amelyek direkt szöveti nekrózist, a kiserek trombózisát és a helyi immunválasz gátlását okozzák.',
                'Szöveti nekrózis: A trombózis és a gyulladásos ödéma tovább rontja a vérellátást, ami kiterjedt szövetelhaláshoz vezet. A folyamat a bőr alatti idegeket is elpusztítja, ami a terület érzéketlenné válásához vezet (késői jel).',
                'Szisztémás toxicitás: A toxinok a keringésbe jutva szisztémás toxikus shock szindrómát és többszervi elégtelenséget okoznak.'
              ],
              virulence_factors: ['Strep: M protein, exotoxinok (SpeA/B/C)', 'Staph: PVL, TSST-1', 'Clostridium: alfa-toxin', 'Anaerobok: gázképzés']
            },
            clinical: {
              incubation: 'Órák-napok (trauma után)',
              onset: 'Hiperakut, fulmináns',
              symptoms: [
                { name: 'Korai jelek', description: 'A legfontosabb korai jel a klinikai képhez képest aránytalanul erős, kínzó fájdalom. A bőrön csak enyhe bőrpír vagy duzzanat látható, de a beteg elesett, lázas.', severity: 'severe' },
                { name: 'Késői jelek', description: 'A bőr sötétlila vagy fekete lesz, hólyagok (bullák) jelennek meg, és a bőr alatti szövetekben gáz (crepitatio) tapintható. A fájdalom megszűnhet az idegek elhalása miatt, ami rossz jel. Gyorsan szeptikus shock alakul ki.', severity: 'severe' }
              ],
              physical_exam: [
                'Fájdalom aránytalanul SÚLYOS a látottakhoz képest (korai jel!)',
                'Feszes, "fás" tapintatú ödéma, amely túlterjed a bőrpíron',
                'Bőr: erythema → livid/szürke → bullák → nekrózis',
                'Anaesthesia a területen (idegkárosodás)',
                'Crepitatio (főleg I. típusban és Clostridiumnál)',
                'Szisztémás jelek: láz, tachycardia, hypotonia, tudatzavar'
              ],
              complications: ['Szeptikus shock', 'Többszervi elégtelenség (MODS)', 'Végtag vesztés', 'Halál (20-40%, kezelés nélkül 100%)']
            },
            diagnostics: {
              laboratory: [
                { test: 'LRINEC score', finding: '≥6: gyanú, ≥8: magas valószínűség (de alacsony szenzitivitás!)', interpretation: 'CRP, fvs, Hb, Na, kreatinin, glükóz' },
                { test: 'Vérkép', finding: 'Leukocytosis (>15 G/L), balra tolt', interpretation: 'Súlyos fertőzés' },
                { test: 'Nátrium', finding: 'Hyponatraemia (<135 mmol/L)', interpretation: 'Gyakori jelző' },
                { test: 'Lactát', finding: 'Emelkedett (>2-4 mmol/L)', interpretation: 'Szöveti hipoperfúzió/nekrózis' },
                { test: 'CK', finding: 'Emelkedett', interpretation: 'Izomérintettség (myositis/nekrózis)' }
              ],
              imaging: [
                { modality: 'CT', finding: 'Fascia megvastagodás, folyadékgyülem, gáz a lágyrészekben (specifikus!)', significance: 'Legjobb képalkotó, de NE késleltesse a műtétet!' },
                { modality: 'MRI', finding: 'Magas szenzitivitás, alacsony specificitás', significance: 'Időigényes, instabil betegnél kerülendő' }
              ],
              microbiology: [
                { test: 'Szöveti minta (műtéti)', finding: 'Gram-festés és tenyésztés', significance: 'Gold standard (aerob + anaerob)' },
                { test: 'Hemokultúra', finding: 'Pozitív (főleg II. típusban)', significance: 'Szisztémás terjedés' },
                { test: 'Finger test', finding: 'Fascia könnyen elemelhető, nincs vérzés, "mosogatólé" szerű váladék', significance: 'Bedside diagnózis' }
              ]
            },
            calculators: [
              {
                name: 'LRINEC Score - Nekrotizáló fasciitis rizikó',
                items: [
                  { label: 'CRP ≥ 150 mg/L', points: 4 },
                  { label: 'Fehérvérsejt 15-25 G/L', points: 1 },
                  { label: 'Fehérvérsejt > 25 G/L', points: 2 },
                  { label: 'Hemoglobin < 13.5 g/dL', points: 1 },
                  { label: 'Hemoglobin < 11 g/dL', points: 2 },
                  { label: 'Nátrium < 135 mmol/L', points: 2 },
                  { label: 'Kreatinin > 141 µmol/L', points: 2 },
                  { label: 'Glükóz > 10 mmol/L', points: 1 }
                ],
                interpretation: [
                  { min: 0, max: 5, text: 'Alacsony kockázat (<50%). Monitorozás.' },
                  { min: 6, max: 7, text: 'Közepes kockázat (50-75%). Szoros megfigyelés, sebészi konzílium.' },
                  { min: 8, max: 13, text: 'Magas kockázat (>75%). Azonnali sebészi exploráció!' }
                ]
              }
            ],
            differential: [
              { disease: 'Cellulitis', distinguishing: 'Nincs aránytalan fájdalom, nincs szisztémás toxicitás, lassabb' },
              { disease: 'Pyomyositis', distinguishing: 'Izom tályog, lokalizáltabb, MRI segít' },
              { disease: 'Gázgangraena (Clostridium)', distinguishing: 'Izomnekrózis dominál, gyorsabb, krepitáció kifejezettebb' },
              { disease: 'Mélyvénás trombózis', distinguishing: 'Duzzanat, de nincs láz/toxicitás, Doppler negatív' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'NINCS ambuláns kezelés!', dose: 'AZONNALI KÓRHÁZ/MŰTÉT!', duration: '', note: 'Sebészeti vészhelyzet!' }
                ],
                inpatient: [
                  { drug: 'Piperacillin/tazobactam', dose: '4x4.5g IV', duration: 'Klinikai válaszig', note: 'Széles spektrum (G+, G-, anaerob)' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg IV', duration: '', note: 'MRSA fedezet' },
                  { drug: '+ Clindamycin', dose: '3x900mg IV', duration: '', note: 'Toxintermelés gátlás (GAS/Staph)' }
                ],
                icu: [
                  { drug: 'Meropenem', dose: '3x1g IV', duration: '', note: 'Alternatíva (I. típus)' },
                  { drug: '+ Vancomycin + Clindamycin', dose: '', duration: '', note: 'Standard hármas kombináció' },
                  { drug: 'IVIG', dose: '1g/kg 1. nap, majd 0.5g/kg', duration: '3 nap', note: 'Strep. toxikus shock szindrómában megfontolandó' }
                ]
              },
              targeted: 'Tenyésztés alapján. I. típus: széles spektrum. II. típus (GAS): Penicillin G + Clindamycin. III. típus (Vibrio): Doxycyclin + Ceftriaxon.',
              supportive: ['AZONNALI agresszív sebészi débridement (kulcsfontosságú!)', 'Folyadékreszuszcitáció', 'Vazopresszorok', 'Re-look műtét 24 órán belül', 'Hiperbár oxigén (vitatott, kiegészítő)'],
              prevention: ['Sebkezelés', 'Krónikus betegségek gondozása']
            },
            guidelines: {
              diagnosis: [
                'Klinikai gyanú (aránytalan fájdalom, gyors romlás) elegendő a műtéti feltáráshoz.',
                'LRINEC score segíthet, de alacsony pontszám nem zárja ki.',
                'Képalkotó csak stabil betegnél, ha a diagnózis kétséges. Gáz a szövetekben specifikus.'
              ],
              treatment_indications: [
                'Azonnali sebészi beavatkozás (necrotomia/fasciotomia) minden gyanús esetben.',
                'Empirikus széles spektrumú antibiotikum a műtét előtt/alatt.'
              ],
              first_line: [
                'Sebészi débridement + (Carbapenem vagy Pip/Tazo) + Vancomycin + Clindamycin.'
              ]
            },
            prognosis: {
              mortality: '20-40% (megfelelő kezeléssel is), kezeletlenül 100%',
              prognostic_scores: ['LRINEC', 'FGSI (Fournier\'s Gangrene Severity Index)'],
              factors: 'Késői műtét (>24h), idős kor, komorbiditások, törzs/fej-nyak lokalizáció'
            }
          },
          {
            id: 'erysipelas',
            name: 'Erysipelas',
            pathogen: { type: 'Baktérium', name: '<i>Streptococcus pyogenes</i> (A csoportú Streptococcus)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori bőrfertőzés, 10-100/100,000 fő/év',
              risk_groups: ['Idősek', 'Csecsemők', 'Diabetes mellitus', 'Krónikus vénás elégtelenség', 'Lymphoedema', 'Bőrsérülések'],
              seasonality: 'Többnyire tél-tavasz',
              transmission: 'Endogén (bőrsérülés kapu) vagy kontakt'
            },
            pathomechanism: {
              steps: [
                'Behatolás: A kórokozó (leggyakrabban Streptococcus pyogenes) egy apró bőrsérülésen keresztül jut be a dermis felső rétegébe és a felületes nyirokerekbe.',
                'Nyirokúti terjedés: A baktériumok a nyirokrendszerben gyorsan terjednek, ami a jellegzetes, éles szélű, lángnyelvszerű terjedést eredményezi.',
                'Gyulladás: A bakteriális toxinok heves lokális gyulladást és szisztémás tüneteket (láz, hidegrázás) okoznak.'
              ],
              virulence_factors: ['M protein', 'Streptolysinek (O, S)', 'Hyaluronidáz', 'Streptokináz']
            },
            clinical: {
              incubation: '2-5 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Bőrtünetek', description: 'Hirtelen kialakuló, éles szélű, lángnyelvszerűen terjedő, élénkvörös, duzzadt, meleg tapintatú, fájdalmas bőrelváltozás. Leggyakrabban az arcon vagy az alsó végtagon jelentkezik.', severity: 'severe' },
                { name: 'Szisztémás tünetek', description: 'A bőrtüneteket gyakran magas láz, hidegrázás és rossz közérzet előzi meg vagy kíséri.', severity: 'moderate' }
              ],
              physical_exam: [
                'Vörös, meleg, duzzadt terület',
                'Éles, emelkedett szélek (jellemző)',
                'Bullák vagy pustulák lehetnek',
                'Lymphadenitis (regionális nyirokcsomók duzzadtak)',
                'Szisztémás jelek: tachycardia, hypotonia'
              ],
              complications: ['Cellulitis progresszió', 'Szeptikus shock', 'Glomerulonephritis', 'Recidíva gyakori']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' },
                { test: 'CRP', finding: 'Emelkedett', interpretation: 'Akut fázis' },
                { test: 'Hemokultúra', finding: 'Ritkán pozitív', interpretation: 'Szisztémás fertőzésnél' }
              ],
              imaging: [
                { modality: 'Nincs szükség', finding: '-', significance: 'Klinikai diagnózis' }
              ],
              microbiology: [
                { test: 'Bőrkaparék tenyésztés', finding: 'Streptococcus pyogenes', significance: 'Megerősítés' },
                { test: 'ASO titer', finding: 'Emelkedett', significance: 'Retrospektív' }
              ]
            },
            differential: [
              { disease: 'Cellulitis', distinguishing: 'Mélyebb, kevésbé éles határok, nincs emelkedett plakk' },
              { disease: 'Herpes zoster', distinguishing: 'Vesiculák, dermatoma mentén' },
              { disease: 'Erythema migrans (Lyme)', distinguishing: 'Centrifugális terjedés, anamnézis' },
              { disease: 'Kontakt dermatitis', distinguishing: 'Nem lázas, pruritus' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Penicillin V', dose: '4x500mg PO', duration: '10-14 nap', note: 'Első választás' },
                  { drug: 'Amoxicillin', dose: '3x500mg PO', duration: '10-14 nap', note: 'Alternatíva' },
                  { drug: 'Clindamycin', dose: '3x300mg PO', duration: '10-14 nap', note: 'Penicillin allergia esetén, 30%-os rezisztencia előfordulás' }
                ],
                inpatient: [
                  { drug: 'Penicillin G', dose: '4x4-6 millió IU IV', duration: '7-10 nap', note: 'Súlyos esetben' },
                  { drug: 'Cefazolin', dose: '3x1g IV', duration: '7-10 nap', note: 'Alternatíva' },
                  { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '7-10 nap', note: 'Penicillin allergia esetén' }
                ],
                icu: [
                  { drug: 'Széles spektrum', dose: 'IV', duration: '', note: 'Komplikált esetben' }
                ]
              },
              targeted: 'Streptococcus pyogenes: Penicillin. Allergia: Erythromycin/Clindamycin',
              supportive: ['Nyugalom', 'Emelt végtag', 'Fájdalomcsillapítás', 'Antipiretikumok'],
              prevention: ['Bőrsérülések megelőzése', 'Hygiene', 'Recidíva esetén profilaxis (Penicillin havonta)']
            },
            guidelines: {
              diagnosis: [
                'Klinikai diagnózis: Éles szélű, lángnyelvszerű, emelkedett vörös plakk.',
                'Labor: Leukocytosis, magas CRP. Tenyésztés általában nem szükséges.'
              ],
              treatment_indications: [
                'Minden eset kezelendő. Kórházi felvétel: szisztémás tünetek, súlyos lokális lelet, komorbiditások.'
              ],
              first_line: [
                'Penicillin V (PO) vagy Penicillin G (IV). Allergia esetén Clindamycin.'
              ]
            },
            prognosis: {
              mortality: 'Alacsony (<1%)',
              prognostic_scores: ['Nincs'],
              factors: 'Idős kor, immunszuppresszió, késői kezelés'
            }
          },
          {
            id: 'cellulitis',
            name: 'Cellulitis',
            pathogen: { type: 'Baktérium', name: '<i>Streptococcus pyogenes</i> vagy <i>Staphylococcus aureus</i> (leggyakoribb)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori, 200/100,000 fő/év',
              risk_groups: ['Diabetes mellitus', 'Perifériás érbetegség', 'Obesitas', 'Immunszuppresszió', 'Bőrsérülések', 'Lymphoedema'],
              seasonality: 'Többnyire nyár',
              transmission: 'Endogén (bőrsérülés) vagy exogén inokuláció'
            },
            pathomechanism: {
              steps: [
                'Behatolás: A kórokozók (S. pyogenes, S. aureus) egy bőrsérülésen keresztül a mélyebb dermisbe és a subcutan zsírszövetbe jutnak.',
                'Diffúz terjedés: A fertőzés a szövetekben diffúzan terjed, nem korlátozódik a nyirokutakra, mint az orbánc esetén. Ez egy kevésbé élesen körülhatárolt, de mélyebbre terjedő gyulladást eredményez.'
              ],
              virulence_factors: ['Streptococcus: M protein, toxinok', 'Staphylococcus: PVL, coagulase']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Bőrtünetek', description: 'Az orbánchoz képest kevésbé élesen körülhatárolt, diffúz bőrpír, duzzanat és melegség. A bőr feszül, fájdalmas.', severity: 'moderate' },
                { name: 'Általános tünetek', description: 'Láz és hidegrázás kísérheti, de nem mindig olyan kifejezett, mint orbánc esetén.', severity: 'moderate' }
              ],
              physical_exam: [
                'Vörös, meleg, duzzadt bőr',
                'Diffúz, nem éles határok',
                'Nyomásérzékenység',
                'Lymphangitis (vörös csíkok)',
                'Szisztémás: tachycardia, láz'
              ],
              complications: ['Abscessus', 'Nekrotizáló fasciitis', 'Szeptikus shock', 'Osteomyelitis', 'Lymphoedema']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép', finding: 'Leukocytosis', interpretation: 'Gyulladás' },
                { test: 'CRP', finding: 'Emelkedett', interpretation: 'Akut fázis' },
                { test: 'Hemokultúra', finding: 'Ritka pozitív', interpretation: 'Súlyos esetben' }
              ],
              imaging: [
                { modality: 'UH', finding: 'Folyadékgyülem, abscessus', significance: 'Ha gyanú van' },
                { modality: 'CT/MRI', finding: 'Mélyebb terjedés', significance: 'Komplikált esetben' }
              ],
              microbiology: [
                { test: 'Bőr aspirátum/tenyésztés', finding: 'Kórokozó azonosítás', significance: 'Ha lehetséges' },
                { test: 'Seb váladék', finding: 'Gyakran kontaminált', significance: 'Nem megbízható' }
              ]
            },
            differential: [
              { disease: 'Erysipelas', distinguishing: 'Felszínes, éles határok, emelkedett plakk' },
              { disease: 'Abscessus', distinguishing: 'Fluktuáló duzzanat, punctio' },
              { disease: 'Mélyvénás thrombosis', distinguishing: 'Nem erythema, Doppler UH' },
              { disease: 'Köszvény', distinguishing: 'Monoarthritis, hyperuricemia' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x875/125mg PO', duration: '7-10 nap', note: 'Első választás' },
                  { drug: 'Cephalexin', dose: '4x500mg PO', duration: '7-10 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x500mg PO', duration: '7-10 nap', note: 'Alternatíva' },
                  { drug: 'Cefazolin', dose: '3x1g IV', duration: '7-10 nap', note: 'Alternatíva' },
                  { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '7-10 nap', note: 'Súlyos esetben' },
                  { drug: '+ Vancomycin', dose: '2x15-20mg/kg IV', duration: '', note: 'MRSA gyanú' }
                ],
                icu: [
                  { drug: 'Piperacillin/Tazobactam', dose: '3x4.5g IV', duration: '', note: 'Széles spektrum' }
                ]
              },
              targeted: 'Streptococcus: Penicillin; Staphylococcus: Flucloxacillin; MRSA: Vancomycin',
              supportive: ['Nyugalom', 'Emelt végtag', 'Fájdalomcsillapítás', 'Antibiotikum lokálisan nem hatékony'],
              prevention: ['Bőrsérülések megelőzése', 'Hygiene', 'Diabetes kontroll']
            },
            guidelines: {
              diagnosis: [
                'Klinikai diagnózis: Diffúz, nem éles szélű erythema, melegség, duzzanat.',
                'Képalkotó (UH): Abscessus vagy mélyebb terjedés gyanúja esetén.'
              ],
              treatment_indications: [
                'Minden eset kezelendő. Kórházi felvétel: szisztémás tünetek, gyors progresszió, komorbiditások.'
              ],
              first_line: [
                'Streptococcus és Staphylococcus fedezet szükséges: Amoxicillin/clavulanate vagy Cephalosporin. MRSA gyanú esetén Vancomycin/Linezolid.'
              ]
            },
            prognosis: {
              mortality: 'Alacsony (<1%), de emelkedik immunszuppresszióval',
              prognostic_scores: ['Nincs'],
              factors: 'Késői kezelés, komorbiditások'
            }
          },
          {
            id: 'impetigo',
            name: 'Impetigo',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus</i> és/vagy <i>Streptococcus pyogenes</i>', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori, főként gyermekeknél',
              risk_groups: ['Gyermekek', 'Közösségi környezet', 'Bőrsérülések', 'Közeli kontakt'],
              seasonality: 'Nincs',
              transmission: 'Kontakt, direkt vagy indirekt'
            },
            pathomechanism: {
              steps: [
                'A kórokozók a bőr sérülésén vagy a felszíni bőrön behatolnak.',
                'A baktériumok lokálisan szaporodnak, és felületesen terjednek.',
                'A gyulladás és a toxinok miatt tipikus hólyagok és aranysárga, „mézes” kéreg alakul ki.'
              ],
              virulence_factors: ['Exfoliatív toxinok', 'M protein', 'Koaguláz', 'Panton-Valentine leukocidin (S. aureus)']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Pépes, gyulladt plakk', description: 'Hólyagok, amelyek felpattannak, és aranysárga, „mézes” kéreggel fedettek', severity: 'moderate' },
                { name: 'Viszketés', description: 'Kis fájdalom vagy viszketés a környéken', severity: 'mild' }
              ],
              physical_exam: [
                'Piros, felületes, gyulladt bőrfolt',
                'Hólyagok és kéregképződés',
                'Ritkán nyirokcsomó-duzzanat'
              ],
              complications: ['Kiterjedt helyi fertőzés', 'Glomerulonephritis (streptococcus)', 'Recidíva']
            },
            diagnostics: {
              laboratory: [
                { test: 'Klinikai diagnózis', finding: 'Elégséges', interpretation: 'Tipikus megjelenés' }
              ],
              microbiology: [
                { test: 'Sebváladék/tenyésztés', finding: 'Kórokozó azonosítás', significance: 'Kétséges vagy súlyos esetben' }
              ]
            },
            differential: [
              { disease: 'Herpes simplex', distinguishing: 'Vesiculák, fájdalmasabb, nincs mézes kéreg' },
              { disease: 'Kontakt dermatitis', distinguishing: 'Viszketés, nincs hólyagképződés' },
              { disease: 'Erysipelas', distinguishing: 'Mélyebb, éles határok' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Topikus mupirocin', dose: '2x/nap', duration: '5-7 nap', note: 'Helyi, nem terjedt forma' },
                  { drug: 'Retapamulin', dose: '2x/nap', duration: '5 nap', note: 'Alternatíva' }
                ],
                inpatient: [
                  { drug: 'Cephalexin', dose: '4x500 mg PO', duration: '7-10 nap', note: 'Kiterjedt fertőzés' },
                  { drug: 'Amoxicillin/Clavulanate', dose: '3x875/125 mg PO', duration: '7-10 nap', note: 'Alternatíva' }
                ]
              },
              targeted: 'S. aureus/GAS szerinti célzott terápia; terjedt esetben szisztémás antibiotikum.',
              supportive: ['Bőrtisztítás', 'Higiéné és kontaktmegelőzés', 'Fertőzött személyek elkülönítése'],
              prevention: ['Higiénés szabályok', 'Sérülések kezelése', 'Közösségi kontakt csökkentése']
            },
            guidelines: {
              diagnosis: [
                'Klinikai diagnózis: a tipikus mézes kéreg és a felületes hólyagok jellemzőek.'
              ],
              treatment_indications: [
                'Helyi kezelés kisebb, nem terjedt esetekben; kiterjedt vagy ismétlődő fertőzés esetén szisztémás terápia.'
              ],
              first_line: [
                'Topikus mupirocin vagy retapamulin; kiterjedt esetben cephalexin vagy amoxicillin/clavulanate.'
              ]
            },
            prognosis: {
              mortality: 'Alacsony',
              prognostic_scores: ['Nincs'],
              factors: 'Kiterjedt betegség, immunszuppresszió, ismétlődés'
            }
          },
          {
            id: 'folliculitis',
            name: 'Folliculitis',
            pathogen: { type: 'Baktérium', name: '<i>Staphylococcus aureus</i> (leggyakoribb)', gram: 'Gram-pozitív', shape: 'coccus' },
            epidemiology: {
              incidence: 'Gyakori, különösen meleg, izzadó környezetben',
              risk_groups: ['Izzadással járó munka', 'Szorító ruházat', 'Bőrsérülések', 'Diabetes', 'Immunszuppresszió'],
              seasonality: 'Nincs',
              transmission: 'Közvetlen kontakt vagy auto-inokuláció'
            },
            pathomechanism: {
              steps: [
                'A hajtüsző környékén a kórokozó behatol és lokális gyulladást okoz.',
                'A gyulladás pápulákhoz és pustulákhoz vezet a hajtüsző körül.',
                'A súlyosabb formák mélyebb fertőzést eredményezhetnek (furunculus, carbunculus).'
              ],
              virulence_factors: ['Koaguláz', 'Exotoxinok', 'Biofilm']
            },
            clinical: {
              incubation: '1-3 nap',
              onset: 'Akut',
              symptoms: [
                { name: 'Pápulák/pustulák', description: 'Körülírt, fájdalmas vagy viszkető pápulák/pustulák a hajtüszőnél', severity: 'mild' },
                { name: 'Bőrpír és érzékenység', description: 'A bőr körül gyulladásos reakció', severity: 'mild' }
              ],
              physical_exam: [
                'Pápulák/pustulák a hajtüsző körül',
                'Fájdalom vagy viszketés',
                'Súlyos esetben abscesszus is kialakulhat'
              ],
              complications: ['Furunculus', 'Carbunculus', 'Folliculitis abscedens', 'Kiterjedt helyi fertőzés']
            },
            diagnostics: {
              laboratory: [
                { test: 'Klinikai diagnózis', finding: 'Elégséges', interpretation: 'Jellemző megjelenés' }
              ],
              microbiology: [
                { test: 'Pus vagy szövetmintavétel', finding: 'Kórokozó azonosítás', significance: 'Súlyos vagy refrakter esetekben' }
              ]
            },
            differential: [
              { disease: 'Impetigo', distinguishing: 'Sokkal több felszíni hólyag és kéreg' },
              { disease: 'Herpes simplex', distinguishing: 'Vesikula, erős fájdalom' },
              { disease: 'Erysipelas', distinguishing: 'Felszínes gyulladás, nincs hajtüsző lokalizáció' }
            ],
            therapy: {
              empirical: {
                outpatient: [
                  { drug: 'Topikus mupirocin', dose: '2x/nap', duration: '5-7 nap', note: 'Kisfokú fertőzés' },
                  { drug: 'Clindamycin', dose: '2x/nap', duration: '5-7 nap', note: 'Topikusan' }
                ],
                inpatient: [
                  { drug: 'Cephalexin', dose: '4x500 mg PO', duration: '7-10 nap', note: 'Súlyosabb vagy kiterjedt' }
                ]
              },
              targeted: 'S. aureus esetén célzott antistaphylococcal terápia; refrakter esetben kultúra.',
              supportive: ['Kerülni az irritáló anyagokat', 'Bőr tisztítása', 'Szoros ruházat kerülése'],
              prevention: ['Higiéné', 'Szennyezett tárgyak kerülése', 'Környezet és ruházat tisztítása']
            },
            guidelines: {
              diagnosis: [
                'Klinikai megjelenés alapján.'
              ],
              treatment_indications: [
                'Topikális terápia a kisebb formákban; szisztémás terápia kiterjedt vagy visszatérő esetekben.'
              ],
              first_line: [
                'Topikus mupirocin vagy clindamycin; szükség esetén cephalexin.'
              ]
            },
            prognosis: {
              mortality: 'Alacsony',
              prognostic_scores: ['Nincs'],
              factors: 'Súlyosabb formák, diabetes, immunszuppresszió'
            }
          },
          {
            id: 'diabetic_foot',
            name: 'Diabeteses láb (infekció/ulcus)',
            pathogen: { type: 'Polimikrobiális', name: 'Staphylococcus aureus, Streptococcus spp., Gram-negatívok, anaerobok', gram: 'Vegyes', shape: 'Változó' },
            epidemiology: {
              incidence: 'Gyakori ok a kórházi felvételeknek és az amputációknak a diabéteszes betegeknél',
              risk_groups: ['Diabetes mellitus', 'Neuropátia', 'Perifériás artériás betegség', 'Korábbi lábférgesség/ulcus', 'Lábdeformitás', 'Immunszuppresszió'],
              seasonality: 'Nincs',
              transmission: 'Nem fertőző, de a bőr sérülése, a lábdeformitás és a gyulladás útján alakul ki'
            },
            pathomechanism: {
              steps: [
                'A neuropátia miatt a védekező reflexek és az érzékelés csökken, így a kisebb sérülések észrevétlenek maradhatnak.',
                'A perifériás artériás betegség és a magas glükózszint a gyógyulást és az immunválaszt rontja.',
                'A bőr és a lágyrészek sérülése után baktériumok kolonizálják és megtelepednek a szövetekben, gyakran polimikrobiális fertőzésként.',
                'A folyamat előrehaladhat abscessushoz, osteomyelitishez és amputációhoz.'
              ],
              virulence_factors: ['Biofilm képzés', 'Adhezinek', 'Toxinok', 'Kórokozói polimikrobiális közösség']
            },
            clinical: {
              incubation: 'Változó',
              onset: 'Lassú vagy akut',
              symptoms: [
                { name: 'Lábfájdalom vagy érzészavar', description: 'Neuropátia miatt fájdalom hiánya vagy csökkent érzékelés', severity: 'severe' },
                { name: 'Lábduzzanat és bőrpír', description: 'Fertőzés jele, különösen ha a bőr sérült', severity: 'moderate' },
                { name: 'Váladékozás/odors', description: 'Gennyes szekréció vagy kellemetlen szag', severity: 'moderate' },
                { name: 'Láz', description: 'Súlyosabb fertőzésnél lehet', severity: 'moderate' }
              ],
              physical_exam: [
                'Sérülés/ulkus, sebváladék, duzzanat',
                'Lábszintű pulzusok, ABI vizsgálat',
                'Védőérzékelés és neuropátia értékelése',
                'Probe-to-bone teszt, ha osteomyelitis gyanúja van'
              ],
              complications: ['Osteomyelitis', 'Szeptikus shock', 'Amputáció', 'Krónikus sebek', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép, CRP, kreatinin', finding: 'Gyulladás, szervi érintettség', interpretation: 'Alapértékelés' },
                { test: 'Hemokultúra', finding: 'Súlyos esetben pozitív lehet', interpretation: 'Szepszis gyanú esetén' }
              ],
              imaging: [
                { modality: 'UH / CT / MRI', finding: 'Tályog, csontérintettség, érbetegség', significance: 'Mély fertőzés vagy osteomyelitis gyanúja' }
              ],
              microbiology: [
                { test: 'Sebváladék/biopszia', finding: 'Kórokozó azonosítás', significance: 'Célzott antibiotikum' }
              ],
              scores: ['IDSA/PEDIS súlyossági osztályozás']
            },
            differential: [
              { disease: 'Cellulitis', distinguishing: 'Nincs nyílt sebfelszín vagy mélyebb struktúra' },
              { disease: 'Osteomyelitis', distinguishing: 'Csontérintettség, képalkotó/biopszia' },
              { disease: 'Perifériás artériás betegség', distinguishing: 'Pulsus hiánya, ABI; nem fertőzés' }
            ],
            therapy: {
              guidelines: ['IWGDF 2023: off-loading, sebészi debridement, jó vérkeringés, glucose control és célzott antibiotikum.'],
              empirical: {
                outpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'PO', duration: '7-14 nap', note: 'Könnyű fertőzés' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'IV/PO', duration: '7-14 nap', note: 'Közepes fertőzés' },
                  { drug: 'Piperacillin/tazobactam', dose: 'IV', duration: '7-14 nap', note: 'Súlyos vagy ischaemiás fertőzés' },
                  { drug: '+ Vancomycin', dose: 'IV', duration: '', note: 'MRSA gyanú esetén' }
                ],
                icu: [
                  { drug: 'Meropenem/Vancomycin', dose: 'IV', duration: '', note: 'Súlyos sepsis, kritikus állapot' }
                ]
              },
              targeted: 'Tenyésztés alapján, abscessus/nekrotikus szövet esetén sebészi debridement és lehetőleg forráskontroll.',
              supportive: ['Terheléscsökkentés (off-loading)', 'Vérkeringés értékelése és revaszkularizáció', 'Glükózszabályozás', 'Sebkezelés, kötés', 'Fizioterápia'],
              prevention: ['Lábápolás', 'Megfelelő cipő, napi szemle', 'Diabetes kontroll', 'Korai sebek kezelése']
            },
            prognosis: {
              mortality: 'Magasabb, ha osteomyelitis vagy sepsis alakul ki',
              prognostic_scores: ['PEDIS/IDSA'],
              factors: 'Ischaemia, neuropátia, késői kezelés, amputáció előzménye'
            }
          },
          {
            id: 'chronic_ulcer',
            name: 'Krónikus ulcus (vénás/arteriális)',
            pathogen: { type: 'Közvetett', name: 'Kolonizáció, másodlagos infekció', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'A krónikus láb- és lábszárfekélyek gyakori okai a lokális vérellátási zavaroknak',
              risk_groups: ['Idősek', 'Vénás insufficiensia', 'Perifériás artériás betegség', 'Diabetes', 'Mozgáskorlátozott betegek', 'Elhízás'],
              seasonality: 'Nincs',
              transmission: 'Nem fertőző, de másodlagos infekciók kialakulhatnak'
            },
            pathomechanism: {
              steps: [
                'A krónikus ödéma, a vénás hipertónia vagy a szűkült artériák a szöveti oxigenizáció és a gyógyulás csökkenéséhez vezetnek.',
                'A keringési zavar, a chronikus gyulladás és a helyi trauma lassítja a sebfelület regenerációját.',
                'A sebfelszín kolonizációja és a másodlagos fertőzés megnehezíti a gyógyulást.',
                'A folyamat hosszan fennmarad, ha a kiváltó okot nem kezelik.'
              ],
              virulence_factors: ['Kolonizáló mikroorganizmusok', 'Biofilm', 'Kronikus gyulladás']
            },
            clinical: {
              incubation: 'Hónapokig fennálló',
              onset: 'Lassú',
              symptoms: [
                { name: 'Lábszárfekély', description: 'Nyitott, lassan gyógyuló, gyakran váladékos és fájdalmas sebe', severity: 'moderate' },
                { name: 'Fájdalom', description: 'Változó: vénás ulcusnál kevésbé, artériásnál súlyosabb', severity: 'moderate' },
                { name: 'Ödéma', description: 'Vénás eredetű fekélyeknél gyakori', severity: 'moderate' },
                { name: 'Szín- és szövetváltozás', description: 'Pigmentáció, bőratrófia, nekrózis', severity: 'moderate' }
              ],
              physical_exam: [
                'Fekély mérete, mélysége, szöveti státusza',
                'Vénás/arteriás jelek: ödéma, pigmentáció, pulzus, ABI',
                'Fertőzés jelei: erythema, purulencia, ízelt szag',
                'Láb és lábszár állapota'
              ],
              complications: ['Krónikus fertőzés', 'Bővülő sebfelszín', 'Osteomyelitis', 'Amputáció', 'Minőségromlás']
            },
            diagnostics: {
              laboratory: [
                { test: 'CRP, vérkép', finding: 'Infekció esetén emelkedett', interpretation: 'Gyulladás és fertőzés monitorozása' }
              ],
              imaging: [
                { modality: 'ABI, Doppler UH, CT angiográfia', finding: 'Véráramlási zavar', significance: 'Arteria/venák értékelése' }
              ],
              microbiology: [
                { test: 'Sebváladék', finding: 'Kolonizáció/fertőzés', significance: 'Antibiotikum döntés' }
              ]
            },
            differential: [
              { disease: 'Diabeteses láb infekció', distinguishing: 'Neuropátia és diabétesz jelenléte' },
              { disease: 'Decubitus', distinguishing: 'Nyomás és elmozdulási terhelés típusa' },
              { disease: 'Vaszkuláris fekély', distinguishing: 'Artériás/venás keringési eltérés' }
            ],
            therapy: {
              guidelines: ['EWMA/ICG irányelvek: kompresszió, terheléscsökkentés, sebkezelés, fertőzéskezelés, a kiváltó ok megszüntetése.'],
              empirical: {
                outpatient: [
                  { drug: 'Nincs rutin antibiotikum kolonizáció nélkül', dose: '-', duration: '-', note: 'Csak fertőzés esetén' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'PO/IV', duration: '7-14 nap', note: 'Lokalizált infekció' },
                  { drug: 'Piperacillin/tazobactam', dose: 'IV', duration: '', note: 'Súlyos fertőzés' }
                ]
              },
              targeted: 'Kiváltó ok alapján: kompresszió, perfúziójavítás, sebfelszín-kezelés, debridement, szükség esetén sebészi beavatkozás.',
              supportive: ['Kompressziós kezelés', 'Sebészeti vagy enzimes debridement', 'Nedvesség egyensúly, kötésanyag', 'Folyadék- és táplálkozási támogatás'],
              prevention: ['Mozgás, kompresszió, lábápolás', 'Vérkeringés javítása', 'Korai fertőzéskezelés']
            },
            prognosis: {
              mortality: 'Nem közvetlenül magas, de a krónikus természet és a társbetegségek miatt jelentős morbiditás',
              prognostic_scores: ['Nincs egységes score'],
              factors: 'Perfúzió, komorbiditások, fertőzés, terhelés és compliance'
            }
          },
          {
            id: 'decubitus',
            name: 'Decubitus (nyomásfekély)',
            pathogen: { type: 'Másodlagos', name: 'Kolonizáció, polymikrobiális fertőzés', gram: 'Változó', shape: '-' },
            epidemiology: {
              incidence: 'Gyakori immobilizált, súlyos betegeknél és hosszú kórházi tartózkodás esetén',
              risk_groups: ['Mobilitási korlátozottak', 'Idősek', 'Súlyos betegségben lévők', 'Inkontinencia', 'Alultápláltak', 'Neurológiai betegek'],
              seasonality: 'Nincs',
              transmission: 'Nem fertőző, de a fertőzés másodlagosan jelentkezhet'
            },
            pathomechanism: {
              steps: [
                'A nyomás és a nyíróerő csökkenti a kapilláris perfúziót a bőrnél és a lágyrészeknél.',
                'Az ismétlődő ischaemia és reperfúzió károsítja a szöveteket és lassítja a gyógyulást.',
                'A nedvesség, a bőr irritációja és a tápláltsági állapot tovább rontja a reparációt.',
                'A sebfelszín kolonizációja és a fertőzés előrehaladhat a mélyebb szövetek felé.'
              ],
              virulence_factors: ['Bakteriális kolonizáció', 'Biofilm', 'Súlyos lokalizált ischaemia']
            },
            clinical: {
              incubation: 'Idővel alakul ki',
              onset: 'Lassú',
              symptoms: [
                { name: 'Bőrpír és fájdalom', description: 'Nem elhalványuló bőrpír, a terület fájdalmas', severity: 'moderate' },
                { name: 'Fekély', description: 'A bőr vagy a lágyrészek sérülése, stádiumok szerint mélyülhet', severity: 'moderate' },
                { name: 'Sérülés mélysége', description: 'Bőrtől a csontig terjedhet', severity: 'severe' }
              ],
              physical_exam: [
                'Stádiumozás: I–IV, illetve deep tissue injury',
                'Terhelés és nyíróerő alapján lokalizáció',
                'Sebváladék, szöveti nekrózis, fertőzés jelei',
                'Általános állapot és tápláltság felmérése'
              ],
              complications: ['Szeptikus shock', 'Osteomyelitis', 'Nehéz gyógyulás', 'Amputáció', 'Halál']
            },
            diagnostics: {
              laboratory: [
                { test: 'Vérkép, CRP', finding: 'Infekció esetén emelkedett', interpretation: 'Súlyos fertőzés/gyulladás' }
              ],
              imaging: [
                { modality: 'UH/CT/MRI', finding: 'Mélyebb szöveti érintettség', significance: 'Mély fekély vagy osteomyelitis gyanúja' }
              ],
              microbiology: [
                { test: 'Sebváladék', finding: 'Kolonizáció/fertőzés', significance: 'Antibiotikum terapiás döntés' }
              ],
              scores: ['NPIAP/EPUAP stádiumozás']
            },
            differential: [
              { disease: 'Vénás/arteriás fekély', distinguishing: 'Nyomás és mobilitási faktorok dominálnak' },
              { disease: 'Diabeteses láb', distinguishing: 'Neuropátia és diabétesz jelenléte' },
              { disease: 'Fertőzéses bőrelváltozás', distinguishing: 'Nincs nyomási eredet' }
            ],
            therapy: {
              guidelines: ['NPIAP/EPUAP/PPPIA irányelvek: nyomáscsökkentés, rendszeres elfordítás, táplálkozás, nedvesség kontroll, debridement és fertőzéskezelés.'],
              empirical: {
                outpatient: [
                  { drug: 'Nincs rutin antibiotikum kolonizáció nélkül', dose: '-', duration: '-', note: 'Csak fertőzés esetén' }
                ],
                inpatient: [
                  { drug: 'Amoxicillin/clavulanate', dose: 'PO/IV', duration: '7-10 nap', note: 'Lokalizált, nem mély infekció' },
                  { drug: 'Piperacillin/tazobactam', dose: 'IV', duration: '', note: 'Mély vagy súlyos fertőzés' }
                ]
              },
              targeted: 'Stádium és fertőzés alapján: nyomáscsökkentés, debridement, kötés, táplálkozási támogatás, szükség esetén sebészi zárás.',
              supportive: ['Rendszeres elfordítás (2-4 óránként)', 'Nyomáscsökkentő felületek', 'Higiénia és bőrápolás', 'Tápláltsági állapot javítása', 'Sebészi vagy enzimes debridement'],
              prevention: ['Mobilizáció, pozicionálás, matracok és párnák', 'Inkontinencia kezelése', 'Nutritional support']
            },
            prognosis: {
              mortality: 'Magasabb, ha mélyen terjed és fertőzött',
              prognostic_scores: ['NPIAP stádium'],
              factors: 'Mobilitás, tápláltság, szisztémás betegség, fertőzés és sebészi kezelés'
            }
          }
        ]
    };

if (typeof window !== 'undefined') {
  if (!(window as any).diseases) {
    (window as any).diseases = {};
  }
  (window as any).diseases.skin_soft_tissue = skinSoftTissueHu;
}
