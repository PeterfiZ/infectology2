Object.assign(window.diseases, {
  infection_control: {
    name: 'Infekciókontroll',
    icon: window.diseaseMetadata.infection_control.icon,
    color: window.diseaseMetadata.infection_control.color,
    diseases: [
      {
        id: 'ic_basics',
        name: 'Infekciókontroll alapjai és óvintézkedések',
        pathogen: { type: 'Szindróma', name: 'Nosocomiális és multirezisztens kórokozók (MDRO)', gram: 'Változó', shape: '-' },
        epidemiology: {
          incidence: 'A kórházi betegek kb. 5-10%-a szerez egészségügyi ellátással összefüggő fertőzést (HAI)',
          risk_groups: ['Intenzív osztályos (ITO) betegek', 'Invazív eszközökkel rendelkező betegek', 'Idősek és immunszupprimáltak'],
          seasonality: 'Egész évben jelen lévő',
          transmission: 'Kontakt (direkt/indirekt), cseppfertőzés, légi úton (aeroszol), vér és testnedvek útján'
        },
        pathomechanism: {
          steps: [
            'Forrás (Source): Fertőzött beteg, hordozó vagy kontaminált környezeti felületek/orvosi eszközök.',
            'Átvitel (Transmission): Kórokozó átvitele a forrástól a fogékony gazdaszervezetig (leggyakrabban a dolgozók keze közvetítésével).',
            'Behatolás (Entry): Belépési kapu (pl. műtéti seb, érkatéter, húgyúti katéter, lélegeztető tubus).',
            'Kolonizáció vagy infekció: A kórokozó megtapadása, elszaporodása, majd szöveti invázió és szisztémás tünetek kialakulása.'
          ],
          virulence_factors: ['Biofilm képzés (katétereken)', 'Multirezisztencia (pl. MRSA, VRE, ESBL, CRE)', 'Toxintermelés']
        },
        clinical: {
          incubation: 'Változó (óráktól hónapokig)',
          onset: 'Fokozatos vagy hirtelen',
          symptoms: [
            { name: 'Standard óvintézkedések', description: 'Minden betegellátási tevékenység során alkalmazandó alapvető óvintézkedések: kézhigiéné, egyéni védőeszközök (kesztyű, maszk, köpeny, szemüveg szükség szerint), biztonságos injekciózás, környezeti fertőtlenítés, hulladékkezelés és köhögési etikett.', severity: 'mild' },
            { name: 'Kontakt óvintézkedések', description: 'Direkt vagy indirekt kontaktus útján terjedő kórokozóknál (pl. MRSA, Clostridioides difficile, Norovírus). Követelmények: egyágyas elhelyezés vagy kohorszolás, dedikált eszközök, kesztyű és védőköpeny viselése a kórterembe lépéskor.', severity: 'moderate' },
            { name: 'Cseppfertőzés elleni óvintézkedések', description: 'Nagy cseppekkel (>5 µm) terjedő kórokozóknál (pl. Influenza, Neisseria meningitidis). Követelmény: sebészi maszk viselése a beteg 1-2 méteres körzetében, betegnek maszk transzport során.', severity: 'moderate' },
            { name: 'Légi úton (aeroszol) terjedő óvintézkedések', description: 'Kis cseppmagvakkal (≤5 µm) terjedő kórokozóknál (pl. Tuberculosis, Kanyaró, Varicella). Követelmények: negatív nyomású izoláló kórterem (AIIR), FFP2/FFP3/N95 légzésvédő maszk kötelező viselése a belépéskor.', severity: 'severe' }
          ],
          physical_exam: [
            'Eszközhöz köthető fertőzések jelei (pl. centrális vénás katéter helyén erythema, gennyes váladékozás)',
            'Láz, hypotonia, tachycardia (szepszis gyanúja esetén)',
            'Műtéti sebgyulladás (erythema, fluktuáció, fájdalom)',
            'Húgyúti katéter melletti érzékenység'
          ],
          complications: ['Szepszis és szeptikus sokk', 'Eszközhöz kötött szisztémás infekciók (pl. katéter-szepszis)', 'Hosszabb kórházi tartózkodás', 'Megnövekedett mortalitás és költségek']
        },
        diagnostics: {
          laboratory: [
            { test: 'Klinikai szűrővizsgálatok (screening)', finding: 'MDRO hordozás kimutatása orr-, torok- vagy perianalis kenetből', interpretation: 'A tünetmentes hordozók azonosítása az izoláció érdekében' },
            { test: 'Vérkép és gyulladásos markerek', finding: 'Leukocytosis, CRP és prokalcitonin (PCT) emelkedés', interpretation: 'Aktív infekció igazolása kolonizációval szemben' }
          ],
          microbiology: [
            { test: 'Kultúra (Tenyésztés)', finding: 'Kórokozó izolálása és antibiogram (érzékenységi mintázat)', significance: 'A célzott antibiotikumos terápia és az infekciókontroll intézkedések alapja' },
            { test: 'PCR (Molekuláris tesztek)', finding: 'Rezisztenciagének gyors kimutatása (pl. mecA, vanA, blaKPC)', significance: 'Rendkívül gyors (órákon belüli) izolációs döntést tesz lehetővé' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Izoláció és Kohorszolás', dose: 'Azonnal', duration: 'A hordozás vagy infekció végéig', note: 'Single room (egyágyas elhelyezés) vagy azonos kórokozóval fertőzöttek közös elhelyezése' },
              { drug: 'Barrier ápolás', dose: 'Belépéskor', duration: 'Mindig', note: 'Zsilipelés, egyéni védőeszközök helyes sorrendben történő fel- és levétele' }
            ]
          },
          targeted: 'Mindig az izolált kórokozó antibiogramja szerinti legszűkebb spektrumú terápia a rezisztencia szelekció elkerülése érdekében.',
          supportive: [
            'Környezetfertőtlenítés virucid és sporicid szerekkel',
            'Egyszer használatos vagy betegspecifikus orvosi eszközök alkalmazása',
            'Kohorsz ápolószemélyzet kijelölése a járványok megfékezésére'
          ],
          prevention: [
            'Antibiotikum stewardship (megfontolt AB-alkalmazás a rezisztens törzsek visszaszorítására)',
            'Invazív eszközök napi szintű felülvizsgálata (indokolatlan katéterek mielőbbi eltávolítása)',
            'Személyzet folyamatos oktatása és auditálása'
          ]
        },
        prognosis: { mortality: 'Változó; pl. CRE-szepszis esetén >40% is lehet', prognostic_scores: ['APACHE II', 'SOFA'], factors: 'A kórokozó rezisztenciája, a beteg kora és komorbiditásai' }
      },
      {
        id: 'hand_hygiene',
        name: 'Kézhigiéné (Kézfertőtlenítés és Kézmosás)',
        pathogen: { type: 'Átviteli vektor', name: 'Egészségügyi dolgozó keze (transzportált flóra)', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'A kézhigiénés megfelelőség (compliance) globálisan gyakran 50% alatti szigorú auditok nélkül',
          risk_groups: ['Minden fekvő- és járóbeteg, különösen az immunszupprimáltak és intenzív ápoltak'],
          seasonality: 'Egész évben kritikus jelentőségű',
          transmission: 'Direkt kontaktus útján (a dolgozó keze közvetíti a kórokozót egyik betegtől a másikig vagy a környezettől a betegig)'
        },
        pathomechanism: {
          steps: [
            'Tranziens flóra megtelepedése: A dolgozó keze a beteggel vagy kontaminált felületekkel érintkezve átmeneti mikroorganizmusokkal kolonizálódik.',
            'Kórokozók túlélése: A tranziens flóra órákig képes túlélni a bőrön, ha nem történik kézfertőtlenítés.',
            'Átvitel betegre: A következő beteggel történő érintkezés során a kórokozók a fogékony behatolási kapukhoz (pl. seb, katéter) jutnak.',
            'Rezidens flóra: A bőr mélyebb rétegeiben élő rezidens flóra (pl. S. epidermidis) ritkábban okoz HAI-t, kivéve invazív beavatkozásoknál kézfertőtlenítés hiányában.'
          ],
          virulence_factors: ['Alkohollal szembeni relatív rezisztencia (pl. C. difficile spórák, burkolatlan vírusok)', 'Bőrszárazság/sérülések (növelik a kolonizáció hajlamát)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'WHO 5 Momentuma', description: 'A kézhigiéné 5 kulcsfontosságú időpontja: 1. Beteggel való érintkezés ELŐTT, 2. Aszeptikus beavatkozás ELŐTT, 3. Testnedvvel való expozíció kockázata UTÁN, 4. Beteggel való érintkezés UTÁN, 5. Beteg környezetével való érintkezés UTÁN.', severity: 'severe' },
            { name: 'Alkoholos dörzsölés (Hand Rub)', description: 'A kézhigiéné GOLD STANDARD eljárása. Gyorsabb, hatékonyabb a baktériumok ellen, és kíméli a bőrt. Időtartam: 20-30 másodperc. Nem alkalmazható látható szennyeződés vagy spórás fertőzés (C. difficile) esetén!', severity: 'mild' },
            { name: 'Szappanos kézmosás (Hand Wash)', description: 'Kötelező eljárás: ha a kéz láthatóan szennyezett (vér, testnedvek), ill. spórás kórokozók (C. difficile) vagy burok nélküli vírusok (Norovírus) esetén (mivel az alkohol nem pusztítja el a spórákat, a mechanikai lemosás elengedhetetlen). Időtartam: 40-60 másodperc.', severity: 'moderate' },
            { name: 'A kézhigiéné 6 lépése', description: 'A dörzsölés/mosás során minden felületet le kell fedni: 1. Tenyér tenyérhez, 2. Jobb tenyér a bal kézháton és fordítva, 3. Tenyér tenyérhez összefont ujjakkal, 4. Ujjak hátoldala a szemközti tenyérbe kulcsolva, 5. Hüvelykujjak körkörös dörzsölése, 6. Ujjbegyek körkörös dörzsölése a szemközti tenyéren.', severity: 'moderate' }
          ],
          physical_exam: [
            'Bőr integritásának ellenőrzése (mikrosérülések, dermatitis mint kolonizációs rizikó)',
            'Körömhosszúság (a műkörmök és ékszerek viselése szigorúan tilos, mivel akadályozzák a kézfertőtlenítést és fokozzák a baktériumok felhalmozódását)'
          ],
          complications: ['Keresztfertőzések és kórházi járványok (outbreak) kialakulása', 'Egészségügyi dolgozók foglalkozási dermatitise (helytelen bőrápolás vagy nem megfelelő szárítás miatt)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Kézminta-vétel (Hand hygiene audit / swab)', finding: 'Kórokozók kimutatása a kezekről ujjbegy-lenyomati vagy leoltásos módszerrel', interpretation: 'A kézhigiéné hatékonyságának és a technika megfelelőségének ellenőrzése' },
            { test: 'Fluoreszkáló gél teszt (UV audit)', finding: 'Nem lefedett területek sötét foltként való kirajzolódása UV fény alatt', interpretation: 'A dörzsölési technika pontatlanságainak azonnali vizuális visszajelzése tanulási célból' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Alkoholos kézfertőtlenítő (alkohol alapú dörzsölőszer)', dose: '3-5 ml', duration: '20-30 mp dörzsölés', note: 'A kezeknek a dörzsölés teljes ideje alatt nedvesnek kell maradniuk' },
              { drug: 'Higiénés kézmosás', dose: 'Szappan + folyóvíz', duration: '40-60 mp mosás', note: 'Papírtörölközővel történő alapos szárítás, majd a csap elzárása a papírtörölközővel' }
            ]
          },
          targeted: 'Aseptikus beavatkozások előtt és sebészi bemosakodásnál sebészi kézfertőtlenítés végzendő (alkohollal 1.5 - 3 percig dörzsölve az alkart is).',
          supportive: [
            'Rendszeres hidratáló kézkrém használata a bőr gát funkciójának megőrzésére',
            'Kézfertőtlenítő adagolók elhelyezése közvetlenül a betegellátási pontokon (Point of Care)'
          ],
          prevention: [
            'Ékszer- és körömgyűrű-tilalom (Bare Below the Elbows irányelv)',
            'Folyamatos direkt megfigyelésen alapuló auditok (Direct Observation)',
            'Infekciókontroll kampányok és plakátok kihelyezése'
          ]
        },
        prognosis: { mortality: 'Közvetve: a megfelelő kézhigiéné akár 50%-kal csökkenti a HAI-hoz köthető mortalitást', prognostic_scores: [], factors: 'Személyzeti compliance, kézfertőtlenítő szerek elérhetősége' }
      },
      {
        id: 'isolation_measures',
        name: 'Izolálás (Típusai, módjai és jelentősége)',
        pathogen: { type: 'Preventív eljárás', name: 'Transzmissziós útvonalak blokkolása', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Az izolációs intézkedések a multirezisztens kórokozók kórházi terjedését több mint 60-70%-kal mérsékelhetik',
          risk_groups: ['MDRO-val fertőzött vagy kolonizált betegek', 'Légúti és enterális fertőzöttek', 'Súlyos neutropeniás/immunszupprimált betegek (védő izoláció)'],
          seasonality: 'Egész évben kiemelt fontosságú',
          transmission: 'Kontakt (direkt/indirekt), cseppfertőzés, légi úton (aeroszol) terjedő kórokozók'
        },
        pathomechanism: {
          steps: [
            'Forrás izolálása (Forráskontroll): A fertőző forrás (beteg) fizikai elkülönítése a többi betegtől.',
            'Barrier képzés: Egyéni védőeszközök (kesztyű, köpeny, maszk) és fizikai határok (ajtók, zsilipkamrák) alkalmazása a kórokozó kijutásának meggátlására.',
            'Negatív nyomás (légi izolációnál): Biztosítja, hogy a levegő ne áramoljon ki a kórteremből a folyosóra (a levegő HEPA szűrőn keresztül távozik).',
            'Pozitív nyomás (védő/fordított izolációnál): Megakadályozza, hogy a környező kórházi levegő (pl. gombaspórák) bejusson a rendkívül fogékony, immunszupprimált beteghez.'
          ],
          virulence_factors: ['Kórokozók légúti aeroszol képző képessége (pl. M. tuberculosis)', 'Környezeti túlélő képesség (pl. VRE, C. difficile spórák napokig túlélnek felületeken)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Kontakt izoláció (Kontakt barrier)', description: 'Jelentősége: Direkt/indirekt kontaktus megelőzése (MRSA, VRE, CRE, C. difficile). Módja: Egyágyas kórterem vagy azonos kórokozójú betegek kohorszolása. Belépéskor kesztyű és védőköpeny kötelező. Dedikált betegellátó eszközök (pl. saját fonendoszkóp, lázmérő).', severity: 'moderate' },
            { name: 'Cseppfertőzés elleni izoláció', description: 'Jelentősége: Nagy cseppekkel (>5 µm) terjedő kórokozók (Influenza, Meningococcus, Pertussis). Módja: Egyágyas elhelyezés (vagy >1.5-2 méteres ágytávolság), sebészi maszk használata a beteg 2 méteres körzetében.', severity: 'moderate' },
            { name: 'Légi úton (aeroszol) terjedő izoláció', description: 'Jelentősége: Kis cseppmagvakkal (≤5 µm) terjedő kórokozók (TBC, kanyaró, varicella). Módja: Negatív nyomású izoláló kórterem (naponta legalább 6-12-szeres légcsere), FFP2 vagy FFP3 maszk kötelező viselése a belépéstől kezdve.', severity: 'severe' },
            { name: 'Védő (fordított) izoláció', description: 'Jelentősége: Súlyosan immunszupprimált (pl. allogén csontvelő-transzplantált) betegek védelme a környezeti gombáktól és baktériumoktól. Módja: Pozitív nyomású kórterem HEPA szűrővel, steril étkeztetés, látogatási tilalom, szigorú aszeptikus ápolás.', severity: 'severe' }
          ],
          physical_exam: [
            'Az izolációs jelölések (piktogramok) kötelező és jól látható elhelyezése a kórterem ajtaján',
            'Egyéni védőeszközök (PPE) helyes és hiánytalan megléte az ajtó melletti zsilipben/kocsiban',
            'A beteg izoláció miatti pszichés státuszának követése (depresszió, magányérzet kockázata)'
          ],
          complications: ['Izolációs distressz és csökkent nővéri kontaktidő (nem kívánt események kockázata növekedhet)', 'Kohorszolási hiba esetén felülfertőződés más törzsekkel']
        },
        diagnostics: {
          laboratory: [
            { test: 'Klinikai clearance igazolása', finding: 'Sorozatos negatív mikrobiológiai minták (általában 2 vagy 3 egymást követő, 24 óra különbséggel vett minta negatív)', interpretation: 'Az izoláció feloldásának kötelező feltétele' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Forráskontroll és térbeli elkülönítés', dose: 'Azonnal', duration: 'A clearance igazolásáig', note: 'Zárt ajtók, a beteg csak elkerülhetetlen vizsgálat miatt hagyhatja el a kórtermet (maszkban)' },
              { drug: 'Zsilipelési protokoll oktatása', dose: 'Minden belépőnek', duration: 'Folyamatosan', note: 'Kézfertőtlenítés a védőeszközök felvétele ELŐTT és levétele UTÁN is kötelező!' }
            ]
          },
          supportive: [
            'Szigorú zárófertőtlenítés a beteg távozása után (sporicid és virucid szerekkel)',
            'Dedikált takarítóeszközök és személyzet az izolált kórtermekhez'
          ],
          prevention: [
            'Az izolációs compliance rendszeres ellenőrzése és visszacsatolása a dolgozók felé',
            'Személyzet kohorszolása (az izolált betegeket ellátó ápoló ne lásson el fogékony, steril betegeket)'
          ]
        },
        prognosis: { mortality: 'A transzmissziós lánc megszakításával közvetve életeket ment; megelőzi a magas mortalitású MDRO járványokat', prognostic_scores: [], factors: 'Személyzeti fegyelem, kórtermi infrastruktúra' }
      },
      {
        id: 'mdro_screening',
        name: 'Szűrővizsgálatok (Milyen minta, mikor, honnan?)',
        pathogen: { type: 'Diagnosztikai protokoll', name: 'Multirezisztens kórokozók (MDRO) aktív surveillance vizsgálata', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Az aktív szűréssel felderített hordozók aránya a rizikócsoportokban elérheti a 15-25%-ot',
          risk_groups: ['Korábban bizonyítottan MDRO hordozó betegek', 'Intenzív osztályra felvett betegek', 'Más fekvőbeteg-intézményből vagy külföldről átvett betegek', 'Hemodializáltak, tartós ápolási intézményből érkezők'],
          seasonality: 'Egész évben kötelezően alkalmazandó bizonyos osztályokon',
          transmission: 'Aszimptomatikus hordozás során a beteg a környezetét és a betegtársait észrevétlenül kontaminálja'
        },
        pathomechanism: {
          steps: [
            'Kolonizáció tünetek nélkül: A kórokozó (pl. MRSA, VRE, CPE) megtelepedik a bőrön vagy a nyálkahártyákon (bélcsatorna, orrüreg) anélkül, hogy gyulladásos választ vagy klinikai tüneteket okozna.',
            'Környezeti kontamináció: A hordozó beteg bőrpikkelyei, váladékai és széklete révén a környezet (ágyrács, éjjeliszekrény) erősen kontaminálódik.',
            'Személyzet közvetítése: Az ápolószemélyzet keze közvetíti a kórokozót a többi beteghez.',
            'Szelekciós nyomás: Antibiotikum kezelés hatására a normál flóra kipusztul, és a hordozott rezisztens törzs elszaporodik, infekciót okozva.'
          ],
          virulence_factors: ['Kiváló kolonizációs képesség', 'Antibiotikum-rezisztencia gének transzferje (pl. plazmidok révén)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'MRSA szűrés', description: 'Mikor: Felvételkor kockázat esetén, vagy heti rendszerességgel az ITO-n. Honnan: Kétoldali orrnyílás (nares anterior kenet - legfontosabb!), torokkenet, lágyék/perineum, valamint aktív sebek, drain vagy katéter belépési helyek.', severity: 'moderate' },
            { name: 'VRE (Vancomycin-rezisztens Enterococcus) szűrés', description: 'Mikor: Felvételkor és ITO-n hetente. Honnan: Székletminta vagy rektális kenet (a mintavevő pálcának láthatóan széklettel szennyezettnek kell lennie).', severity: 'moderate' },
            { name: 'ESBL és CRE/CPE (Carbapenem-rezisztens Enterobacterales) szűrés', description: 'Mikor: Fokozott kockázatú osztályokon vagy járványos helyzetben. Honnan: Rektális kenet vagy székletminta. CRE esetén kiemelt fontosságú a gyors izoláció érdekében.', severity: 'severe' },
            { name: 'Multirezisztens Pseudomonas (MRPA) és Acinetobacter (MRAB) szűrés', description: 'Mikor: ITO-n vagy kontaktkutatás során. Honnan: Torokkenet, perineális kenet, és lélegeztetett betegeknél trachealis/bronchialis aspirátum.', severity: 'moderate' }
          ],
          physical_exam: [
            'Bőrsérülések, krónikus fekélyek, felfekvések és műtéti sebek alapos átvizsgálása (ezekből mindig kötelező szűrőmintát venni)',
            'Invazív eszközök (CVK, kanülök, húgyúti katéterek) bemeneti helyének ellenőrzése'
          ],
          complications: ['Szelektálatlan vagy elmaradt szűrés miatt kialakuló kórházi járványok (outbreaks)', 'A tünetmentes hordozó beteggé válása (endogén fertőzés)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Chromogén táptalajok', finding: 'Szelektív táptalajon jellegzetes színű telepek növekedése 18-24 óra alatt', interpretation: 'Gyors és költséghatékony szűrési módszer MRSA, VRE, ESBL kimutatására' },
            { test: 'Molekuláris PCR szűrés', finding: 'Rezisztenciagének (pl. mecA, vanA/vanB, blaOXA-48, blaKPC, blaNDM) direkt kimutatása mintából', interpretation: 'Rendkívül gyors (1-2 órán belüli) eredmény, ami azonnali izolációs döntést tesz lehetővé' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Pre-emptív izoláció', dose: 'A szűrési eredmény megérkezéséig', duration: '1-2 nap', note: 'Magas rizikójú betegeknél a szűrés levételével egy időben meg kell kezdeni az izolációt a megerősítésig' }
            ]
          },
          targeted: 'Pozitív szűrés esetén a beteg izolációs protokoll alá kerül. MRSA esetén megfontolandó a decolonizációs terápia.',
          supportive: [
            'Az eredmények azonnali elektronikus vagy telefonos jelentése az infekciókontroll csoportnak (gyorsriasztás)',
            'A beteg dokumentációjában és ágyneműjén a hordozás egyértelmű jelölése'
          ],
          prevention: [
            'Szigorú kézhigiénés fegyelem (a szűrés önmagában nem ér semmit, ha a kézhigiéné nem megfelelő)',
            'Rendszeres surveillance auditok az osztályokon'
          ]
        },
        prognosis: { mortality: 'Közvetve csökkenti a HAI mortalitását a korai izoláció és célzott kezelés elősegítésével', prognostic_scores: [], factors: 'Szűrési compliance, laboratóriumi átfutási idő (TAT)' }
      },
      {
        id: 'decolonization_protocols',
        name: 'Dekolonizáció (Mikor, mivel és hogyan?)',
        pathogen: { type: 'Preventív kezelés', name: 'Kórokozók eradikálása a bőrről és nyálkahártyákról (leginkább MRSA esetén)', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Sikeres MRSA decolonizációval a későbbi műtéti sebfertőzések kockázata akár 50-60%-kal csökkenthető',
          risk_groups: ['Bizonyított MRSA-hordozó betegek nagy elektív műtétek előtt (pl. szívműtét, ortopédiai implantátumok)', 'ITO betegek univerzális vagy célzott decolonizációja'],
          seasonality: 'Egész évben alkalmazandó klinikai protokoll',
          transmission: 'A saját (endogén) flórából származó MRSA a legfőbb forrása a műtéti sebfertőzéseknek és katéter-szepszisnek'
        },
        pathomechanism: {
          steps: [
            'Hordozás kimutatása: Pozitív orr- vagy bőr-szűrési eredmény igazolja az MRSA jelenlétét.',
            'Lokális antiszeptikus kezelés: Célzott hatóanyagok alkalmazása a kolonizált területeken (orr, bőr, szájüreg).',
            'Csíraszám drasztikus csökkentése: Az antiszeptikumok elpusztítják a tranziens és a felületes rezidens patogéneket.',
            'Környezet párhuzamos tisztítása: A kezelés alatt a beteg ágyneműjének, ruházatának napi cseréje megakadályozza a visszakolonizálódást.'
          ],
          virulence_factors: ['Mupirocin-rezisztencia (főként tartós, ellenőrizetlen használat esetén alakul ki)', 'Klórhexidin-tolerancia (qacA/B gének jelenléte)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Nazális decolonizáció (Orrkezelés)', description: 'Mivel: 2%-os Mupirocin orrkenőcs (vagy oktenidin-bázisú gél). Hogyan: fülpálcikával mogyorónyi mennyiséget kell felvinni mindkét orrnyílásba, majd az orrszárnyak összenyomásával eloszlatni. Mikor: Napi 2-3 alkalommal, 5 egymást követő napon át.', severity: 'mild' },
            { name: 'Bőr decolonizáció (Teljes testfürdetés)', description: 'Mivel: 2% vagy 4%-os Klórhexidin-glükonát (CHG) tartalmú folyékony fertőtlenítő szappan (vagy Oktenidin / Polihexanid tartalmú készítmények). Hogyan: Napi egyszeri teljes testfürdetés (hajmosással együtt a 1. és 5. napon). A szert legalább 1-2 percig a bőrön kell hagyni leöblítés előtt. Kiemelt figyelem a hónaljra, lágyékra, gátra.', severity: 'moderate' },
            { name: 'Szájüregi decolonizáció', description: 'Mivel: 0.12% - 0.2% Klórhexidin tartalmú szájvíz. Hogyan: Naponta kétszer szájöblögetés és toroköblögetés 1 percen át. Mikor: Súlyos hordozás vagy lélegeztetett betegek (VAP megelőzés) esetén.', severity: 'mild' },
            { name: 'Környezeti higiéné támogatása', description: 'Hogyan: A decolonizációs kúra alatt naponta tiszta törölközőt, fehérneműt, hálóruhát és ágyneműt kell biztosítani a betegnek. A korábbi személyes tárgyakat (pl. fésű, szemüveg) fertőtleníteni kell.', severity: 'mild' }
          ],
          physical_exam: [
            'A bőr állapotának ellenőrzése: Ép bőr szükséges a klórhexidines fürdetéshez (súlyos ekcéma, psoriasis vagy nyílt, nagy sebek esetén a CHG irritációt okozhat, ilyenkor egyéni mérlegelés szükséges)',
            'A kezelési compliance és a helyes technika ellenőrzése az ápoló részéről'
          ],
          complications: ['Kontakt dermatitis vagy bőrszárazság a fertőtlenítő szappanok miatt', 'Szelekciós mupirocin-rezisztencia kialakulása (ezért tilos a protokollt 5-7 napnál tovább folytatni)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Decolonizáció sikerességének ellenőrzése (Kontroll szűrés)', finding: 'Negatív orr- és bőrkenetek a kezelés befejezése után legalább 48-72 órával vett mintákból', interpretation: 'A túl korán vett kontroll minta álnegatív eredményt adhat az antiszeptikum maradványhatása miatt!' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Mupirocin 2% orrkenőcs', dose: 'Napi 2-3x mindkét orrnyílásba', duration: '5 nap', note: 'Ujjbeggyel vagy fülpálcikával kell bevinni és az orrszárnyakat masszírozni' },
              { drug: 'Klórhexidin 4% folyékony szappan', dose: 'Napi 1x teljes testre (fürdetés)', duration: '5 nap', note: 'Hajmosás is szükséges a kúra elején és végén' }
            ]
          },
          targeted: 'FONTOS: Jelenleg kizárólag MRSA esetén áll rendelkezésre jól definiált és klinikailag igazolt decolonizációs protokoll. VRE (Vancomycin-rezisztens Enterococcus) és Gram-negatív MRK (multirezisztens kórokozók, pl. ESBL, CRE, Pseudomonas, Acinetobacter) esetében nincs bizonyított, rutinszerűen alkalmazható decolonizációs stratégia!',
          supportive: [
            'Bőrhidratáló krémek alkalmazása a fürdetés után legalább 2 órával (hogy ne zavarják a CHG bőrön lévő tartós baktériumellenes hatását)',
            'Egyszer használatos mosdatókesztyűk alkalmazása'
          ],
          prevention: [
            'A mupirocin indokolatlan, profilaktikus és hosszas alkalmazásának szigorú tilalma',
            'Univerzális decolonizáció (CHG fürdetés minden betegnek) alkalmazása magas rizikójú intenzív osztályokon'
          ]
        },
        prognosis: { mortality: 'Sikeres eradikáció esetén jelentősen csökken a szisztémás infekció és a mortalitás kockázata', prognostic_scores: [], factors: 'Compliance, mupirocin-érzékenység, bőr integritása' }
      },
      {
        id: 'sterilization_disinfection',
        name: 'Sterilizálás és Fertőtlenítés',
        pathogen: { type: 'Higiénés eljárás', name: 'Élettelen felületek és orvosi eszközök csíramentesítése', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'A nem megfelelően reprocesszált orvosi eszközök (pl. endoszkópok) súlyos, akár halálos kimenetelű keresztfertőzéseket és járványokat okozhatnak',
          risk_groups: ['Invazív beavatkozáson áteső betegek', 'Műtéti betegek', 'Endoszkópos vizsgálatban részesülők'],
          seasonality: 'Egész évben kritikus fontosságú',
          transmission: 'Indirekt kontaktus kontaminált orvosi eszközök, műszerek vagy környezeti felületek útján'
        },
        pathomechanism: {
          steps: [
            'Kontamináció: Az orvosi eszközök használat során vérrel, testnedvekkel és kórokozókkal szennyeződnek.',
            'Biofilm képződés: Ha az eszközöket használat után nem tisztítják meg azonnal, a mikroorganizmusok biofilm réteget képeznek, amely védi őket a fertőtlenítőktől.',
            'Tisztítás és előfertőtlenítés: A reprocesszálás első, legfontosabb lépése. Biofilm és szerves szennyeződések fizikai eltávolítása.',
            'Fertőtlenítés vagy Sterilizálás: Az eszköz kockázati besorolása alapján a csíraszám csökkentése (fertőtlenítés) vagy az összes életképes mikroorganizmus és spóra teljes elpusztítása (sterilizálás).'
          ],
          virulence_factors: ['Baktériumspórák rendkívüli fizikai és kémiai ellenállóképessége (pl. B. anthracis, C. difficile)', 'Mikobaktériumok viaszos sejt fala (magas szintű fertőtlenítést igényelnek)', 'Prionok extrém ellenállóképessége']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Spaulding-féle osztályozás (Eszközök besorolása)', description: 'Meghatározza a reprocesszálás szükséges szintjét: 1. Kritikus eszközök (steril szövetekbe, keringésbe lépnek be - pl. sebészi műszerek, implantátumok) -> STERILIZÁLÁS kötelező. 2. Szemi-kritikus eszközök (nyálkahártyával vagy sérült bőrrel érintkeznek - pl. endoszkópok, lélegeztető tubusok) -> MAGAS SZINTŰ FERTŐTLENÍTÉS (HLD) szükséges. 3. Nem-kritikus eszközök (ép bőrrel érintkeznek - pl. sztetoszkóp, vérnyomásmérő mandzsetta) -> ALACSONY/KÖZEPES SZINTŰ FERTŐTLENÍTÉS elegendő.', severity: 'severe' },
            { name: 'Fizikai sterilizálási eljárások', description: '1. Autokláv (Túlnyomásos telített gőz): A legmegbízhatóbb, standard eljárás hőtűrő eszközökhöz. Paraméterek: 121 °C (15-20 perc, 1 bar túlnyomás) vagy 134 °C (3-5 perc, 2 bar túlnyomás). 2. Hőlégsterilizáló (Száraz meleg): Csak üveg és fém műszerekhez. Paraméterek: 160 °C (120 perc) vagy 180 °C (30 perc).', severity: 'mild' },
            { name: 'Alacsony hőmérsékletű (kémiai) sterilizálás', description: 'Hőérzékeny (pl. műanyag, optikai) eszközökhöz: 1. Gázsterilizálás (Etilén-oxid - EO): Rendkívül hatékony, de a gáz toxikus és gyúlékony, hosszú (akár 12-24 órás) kiszellőzési időt igényel. 2. Plazmasterilizálás (Hidrogén-peroxid gőz / H2O2 plazma): Gyors (45-60 perc), környezetbarát, nem toxikus, de drága és szűk lumenű csövekhez korlátozottan használható.', severity: 'moderate' },
            { name: 'Kémiai fertőtlenítőszerek felületekre', description: '1. Alkoholok (Etil-alkohol, Izopropanol): Gyors hatású, közepes szintű fertőtlenítők. Nem sporicid! 2. Klórvegyületek (Nátrium-hipoklorit): Széles spektrumú, olcsó, sporicid fertőtlenítők. C. difficile járvány esetén kötelező felületfertőtlenítésre! Korrozív hatású. 3. Kvaterner ammónium vegyületek (QUATs): Alacsony szintű fertőtlenítők, jó tisztító hatással, nem korrozívak. 4. Glutaraldehid / Peretetsav: Magas szintű fertőtlenítésre és kémiai sterilizálásra (pl. endoszkópoknál).', severity: 'moderate' }
          ],
          physical_exam: [
            'A sterilizáló csomagolások integritásának, szárazságának és a lejárati idő ellenőrzése használat előtt',
            'A kémiai indikátorcsíkok színváltozásának kötelező ellenőrzése a steril csomagoláson (igazolja a sterilizálási expozíciót)'
          ],
          complications: ['Sérült vagy nedves csomagolás miatti utólagos rekontamináció és ebből adódó sebfertőzés', 'Nem megfelelő gázsterilizálási kiszellőztetés miatt kialakuló szöveti irritáció/égés a betegen']
        },
        diagnostics: {
          laboratory: [
            { test: 'Biológiai indikátor (BI) teszt', finding: 'Geobacillus stearothermophilus vagy Bacillus atrophaeus spórák túlélésének vizsgálata inkubáció után', interpretation: 'A sterilizálás hatékonyságának biológiai arany standard ellenőrzése (havonta/hetente kötelező)' },
            { test: 'Bowie-Dick teszt', finding: 'A tesztlap egyenletes elszíneződése az autoklávban', interpretation: 'A kamrából történő levegőeltávolítás és a gőzbehatolás megfelelőségének ellenőrzése (naponta az első ciklus előtt)' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Azonnali tisztítás használat után', dose: 'Mechanikai + enzimatikus tisztítás', duration: 'Azonnal', note: 'Megakadályozza a szerves anyagok rászáradását és a biofilm kialakulását' },
              { drug: 'Zárt konténeres szállítás', dose: 'Szennyezett és steril eszközök éles elkülönítése', duration: 'Szállítás során', note: 'A tiszta és szennyezett utak szigorú szétválasztása az intézményben' }
            ]
          },
          supportive: [
            'A reprocesszálási folyamat minden lépésének dokumentálása és nyomon követhetősége (vonalkódos rendszer)',
            'Rendszeres validálás és karbantartás a sterilizáló berendezéseken'
          ],
          prevention: [
            'A Központi Sterilizáló (Central Sterile Services Department - CSSD) centralizált működtetése',
            'A takarító és fertőtlenítő személyzet folyamatos képzése és a koncentrációk ellenőrzése (pl. tesztcsíkokkal)'
          ]
        },
        prognosis: { mortality: 'Közvetve: a steril műtéti technika és a műszerek sterilitása a postoperatív szepszis kockázatát elhanyagolhatóra csökkenti', prognostic_scores: [], factors: 'Protokollok betartása, berendezések állapota, folyamatos minőségellenőrzés' }
      }
    ]
  }
});

