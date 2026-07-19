import { Category } from '../types';

export const urinaryTractHu: Category = {
  name: 'Húgyúti fertőzések',
  icon: '🚽',
  color: '#3b82f6',
  didactics: {
    overview: 'Egyszerű felosztás: alsó húgyúti infekciók (cystitis) jellemzően rendszerszintű tünetek nélkül; felső húgyúti infekciók (pyelonephritis) lázzal, hidegrázással és deréktáji fájdalommal járnak. Alsó UTI legtöbbször ambuláns ellátást igényel; felső UTI esetén szélesebb kivizsgálás és esetenként kórházi ellátás szükséges.',
    lower: 'Tünetek: dysuria (égő vizelés), gyakori vizelés (pollakisuria), sürgető vizelési inger (urgencia), suprapubicus fájdalom, alkalmi haematuria. Általában nincs láz vagy általános rossz közérzet.',
    upper: 'Szisztémás jelek: magas láz (>38°C), hidegrázás, általános rossz közérzet; lokálisan: deréktáji/CVA fájdalom, hányinger/hányás. Labor: leukocytosis, CRP emelkedés; mindig vizelet- és szükség szerint vérkultúra vegyenek.',
    diagnostics: ['1) Célzott anamnézis és vitális paraméterek', '2) Vizelet tesztcsík és mikroszkópia (pyuria, nitrit)', '3) Vizelet tenyésztés komplikált, recidiváló vagy szisztémás esetben', '4) Vérképek, CRP, kreatinin; hemokultúra lázas betegeknél', '5) Képalkotás (UH/CT) obstrukció, tályog vagy perzisztencia esetén'],
    red_flags: ['Szepszis jelei (hypotonia, zavartság)', 'Gyorsan emelkedő kreatinin vagy obstrukció jele', 'Terhességben fellépő láz', 'Per os terápia nem kivitelezhető (súlyos hányás miatt)', 'Immunszupprimált állapot'],
    special_populations: 'Idősek: gyakrot atipikus tünetek (zavartság, gyengeség) — alacsony küszöb a kivizsgálásra. Gyermekek: láz lehet az egyetlen jel. Terhesek: alacsony küszöb a kezelésre és követésre.',
    teaching_tip: 'Urinális tünetek láz nélkül → cystitis valószínű. Ha láz és deréktáji fájdalom is van → pyelonephritis és emelt kivizsgálási, kezelési szint.'
  },
  diseases: [
    {
      id: 'cystitis',
      name: 'Szisztémás tünetekkel nem járó cystitis (Hólyaghurut)',
      pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negatív', shape: 'pálca' },
      epidemiology: {
        incidence: 'Nők 50%-a élete során legalább egyszer',
        risk_groups: ['Szexuálisan aktív nők', 'Postmenopauza', 'Terhesség', 'Diabetes', 'Katéter viselés'],
        seasonality: 'Nincs',
        transmission: 'Felszálló fertőzés (perinealis flóra)'
      },
      pathomechanism: {
        steps: [
          'Kolonizáció: A bélbaktériumok (főleg E. coli) kolonizálják a periurethralis területet és a hüvelybemenetet.',
          'Feljutás: A baktériumok az urethrán keresztül feljutnak a húgyhólyagba (nőknél rövidebb urethra hajlamosít).',
          'Adhézió és Invázió: A baktériumok a P-fimbriák segítségével kitapadnak a hólyag urotheliumához, elkerülve a vizelettel való kimosódást, majd behatolnak a sejtekbe.',
          'Gyulladás: A baktériumok szaporodása és toxinjai (pl. hemolizin) gyulladásos választ váltanak ki, ami a nyálkahártya vérbőségét, ödémáját és a tüneteket okozza.'
        ],
        virulence_factors: ['P-fimbriae (adherencia)', 'Hemolizin', 'Aerobactin (vasfelvétel)']
      },
      clinical: {
        incubation: 'Változó',
        onset: 'Hirtelen',
        symptoms: [
          { name: 'Dysuria', description: 'Vizeléskor jelentkező égető, csípő érzés, amely a gyulladt urethra és hólyagnyak irritációja miatt alakul ki.', severity: 'moderate' },
          { name: 'Pollakisuria', description: 'Gyakori, kis mennyiségű vizeletürítés a hólyagfal irritációja és csökkent kapacitása miatt.', severity: 'moderate' },
          { name: 'Urgencia', description: 'Hirtelen jelentkező, parancsoló vizelési inger, amelyet nehéz visszatartani (késztetéses inkontinencia veszélye).', severity: 'moderate' },
          { name: 'Suprapubicus fájdalom', description: 'Az alhasban, a szeméremcsont felett érzett nyomás vagy fájdalom.', severity: 'mild' },
          { name: 'Haematuria', description: 'Makroszkóposan véres vizelet (kb. 30%-ban), gyakran a vizelés végén (terminális haematuria), a vérbő nyálkahártya vérzése miatt.', severity: 'mild' }
        ],
        physical_exam: [
          'Suprapubicus nyomásérzékenység',
          'Láz általában NINCS (ha van, pyelonephritis gyanú!)',
          'Vesetájék nem érzékeny',
          'Hüvelyi folyás hiánya növeli a cystitis valószínűségét',
          'A tünetek jellemzően az alsó húgyutakra korlátozódnak, nincs általános rossz közérzet'
        ],
        complications: ['Ascendáló pyelonephritis', 'Recidív cystitis']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet tesztcsík', finding: 'Leukocyta esterase+, Nitrit+', interpretation: 'Pozitív prediktív érték magas' },
          { test: 'Vizelet üledék', finding: 'Pyuria (>10 fvs/látótér)', interpretation: 'Gyakori, de nem specifikus' }
        ],
        imaging: [
          { test: 'Nem szükséges', finding: 'Kizárólag atípusos esetekben', interpretation: 'Általános diagnózisnál nem alkalmazandó' }
        ],
        microbiology: [
          { test: 'Vizelet tenyésztés', finding: '≥10^3 CFU/ml', significance: 'Csak komplikált, recidív vagy atípusos esetben javasolt (EAU 2025)' }
        ]
      },
      differential: [
        { disease: 'Vaginitis', distinguishing: 'Folyás, viszketés, dysuria külső jellegű' },
        { disease: 'Urethritis (STD)', distinguishing: 'Új partner, fokozatos kezdet, pyuria steril tenyésztéssel' },
        { disease: 'Interstitialis cystitis', distinguishing: 'Krónikus, tenyésztés negatív' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: 'Egyszeri dózis', note: 'Első választás (EAU 2025)' },
            { drug: 'Nitrofurantoin', dose: '2x100mg PO', duration: '5 nap', note: 'Első választás (EAU 2025)' },
            { drug: 'Pivmecillinam', dose: '3x400mg PO', duration: '3-5 nap', note: 'Első választás (EAU 2025)' }
          ],
          inpatient: [
            { drug: 'Nem igényel kórházi kezelést', dose: '-', duration: '-', note: 'Kivéve komplikáció' }
          ]
        },
        targeted: 'Tenyésztés alapján. Fluorokinolonok (Ciprofloxacin, Levofloxacin) NEM ajánlottak empirikusan nem komplikált cystitisben!',
        supportive: ['Bőséges folyadékfogyasztás', 'Gyakori vizeletürítés', 'NSAID fájdalomcsillapítás'],
        prevention: ['Viselkedési: Bőséges folyadékbevitel, postcoitalis vizeletürítés', 'Nem-antibiotikus (EAU 2025): Lokális ösztrogén (postmenopauza), OM-89 immunstimuláció, D-mannóz, Hólyag instilláció', 'Antibiotikum profilaxis (utolsó lépés): Nitrofurantoin 50-100mg este vagy Fosfomycin 3g 10 naponta']
      },
      prognosis: {
        mortality: 'Nulla',
        factors: 'Recidíva hajlam'
      }
    },
    {
      id: 'pyelonephritis',
      name: 'Szisztémás tünetekkel nem járó pyelonephritis',
      pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (80%)', gram: 'Gram-negatív', shape: 'pálca' },
      epidemiology: {
        incidence: 'Gyakori szövődménye a kezeletlen cystitisnek',
        risk_groups: ['Nők', 'Terhesség', 'Obstrukció (kő, prostata)', 'Vesefejlődési rendellenesség', 'Diabetes'],
        seasonality: 'Nincs',
        transmission: 'Felszálló fertőzés (95%), ritkán hematogén'
      },
      pathomechanism: {
        steps: [
          'Ascendáló fertőzés: A baktériumok a hólyagból az ureteren keresztül (gyakran vesico-ureteralis reflux segítségével) feljutnak a vesemedencébe.',
          'Parenchyma invázió: A kórokozók behatolnak a vese parenchymájába, elsősorban a velőállományba.',
          'Gyulladásos válasz: A baktériumok ellen heves akut gyulladásos reakció indul (neutrophil infiltráció), ami szöveti ödémát, mikrotályogokat és tubulus károsodást okoz.',
          'Szisztémás hatás: A gyulladásos mediátorok a keringésbe jutva lázat és szisztémás tüneteket váltanak ki.'
        ],
        virulence_factors: ['P-fimbriae', 'Endotoxin', 'Kapszula']
      },
      clinical: {
        incubation: 'Cystitis után napokkal',
        onset: 'Hirtelen',
        symptoms: [
          { name: 'Láz és hidegrázás', description: 'Magas láz (>38°C) és hidegrázás a felső húgyúti gyulladás jellemző jelei; a vese parenchyma érintettségét és a szisztémás gyulladást jelzik.', severity: 'severe' },
          { name: 'Deréktáji fájdalom', description: 'Tompa, folyamatos, egy- vagy kétoldali fájdalom a vesetájékon, a vese tokjának megfeszülése miatt; pontszerű érzékenység a costovertebralis szögletben.', severity: 'severe' },
          { name: 'Gastrointestinális tünetek', description: 'Hányinger, hányás, étvágytalanság gyakori kísérője, mivel a vese gyulladása reflexes hasi panaszokat is okozhat.', severity: 'moderate' },
          { name: 'Alsó húgyúti tünetek', description: 'Dysuria és pollakisuria gyakran jelen vannak, de a felső húgyúti fertőzés nem zárható ki a húgyúti tünetek hiánya esetén sem.', severity: 'moderate' },
          { name: 'Atypia', description: 'Idősekben, immunszupprimáltaknál vagy cukorbetegeknél a klasszikus tünetek enyhébbek lehetnek; helyettük zavartság, gyengeség vagy általános rossz közérzet dominálhat.', severity: 'moderate' }
        ],
        physical_exam: [
          'Costovertebralis szöglet érzékenysége (Giordano-jel)',
          'Láz és tachycardia',
          'Szubrapubikus nyomásérzékenység csak alkalomszerűen',
          'Hasi érzékenység jelen lehet, de a vizsgálat gyakran enyhe'
        ],
        complications: ['Vese tályog', 'Perinephricus tályog', 'Urosepsis', 'Papilla necrosis', 'Krónikus veseelégtelenség (recidív)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Leukocytosis, balra tolt', interpretation: 'Szisztémás gyulladás' },
          { test: 'CRP/PCT', finding: 'Jelentősen emelkedett', interpretation: 'Bakteriális infekció' },
          { test: 'Vizelet', finding: 'Leukocyturia, bakteriuria, fehérvérsejt cilinderek', interpretation: 'Felső húgyúti eredet' },
          { test: 'Vesefunkció', finding: 'Kreatinin emelkedhet', interpretation: 'Akut vesekárosodás' }
        ],
        imaging: [
          { modality: 'CT has/kismedence', finding: 'Vese megnagyobbodás, perinephricus folyadék, ék alakú hypodenzitás', significance: 'Gold standard a komplikációk kizárására (EAU 2025)' },
          { modality: 'Vese UH', finding: 'Obstrukció, tályog', significance: 'Sugárterhelés mentes alternatíva' }
        ],
        microbiology: [
          { test: 'Vizelet tenyésztés', finding: '≥10^4 CFU/ml', significance: 'Mindig levenni! (EAU 2025)' },
          { test: 'Hemokultúra', finding: 'Pozitív', significance: 'Kórházi felvételkor javasolt' }
        ]
      },
      differential: [
        { disease: 'Vesekő', distinguishing: 'Görcsös fájdalom, nincs láz (ha nincs fertőzés), hematuria dominál' },
        { disease: 'Akut hasi kórképek', distinguishing: 'Appendicitis, cholecystitis (hasi status, UH)' },
        { disease: 'Kismedencei gyulladás (PID)', distinguishing: 'Nőgyógyászati vizsgálat, folyás' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7 nap', note: 'nincs Enterococcus elleni hatása' },
            { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '5 nap', note: 'Csak alternatíva, ha E. coli rezisztencia <10% (EAU 2025)' },
            { drug: 'Ceftibuten/Cefixim', dose: 'PO', duration: '10 nap', note: 'Ha kinolon nem adható (kevésbé hatékony)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '10-14 nap', note: 'Első választás' },
            { drug: 'Ciprofloxacin', dose: '2x400mg IV', duration: '10-14 nap', note: 'Alternatíva, ha az E. coli rezisztencia <10% (EAU 2025)' }
          ]
        },
        targeted: 'Antibiogram alapján. ESBL gyakori!',
        supportive: ['Folyadékpótlás', 'Lázcsillapítás', 'Obstrukció megoldása (katéter, stent)'],
        prevention: ['Cystitis megfelelő kezelése', 'Anatómiai rendellenességek korrekciója']
      },
      prognosis: {
        mortality: 'Alacsony (<1%), de urosepsis esetén 10-20%',
        factors: 'Idős kor, obstrukció, rezisztens kórokozó'
      }
    },
    {
      id: 'complicated_uti',
      name: 'Szisztémás tünetekkel járó húgyúti fertőzés',
      pathogen: { type: 'Baktérium', name: '<i>E. coli, Enterococcus, Pseudomonas, Klebsiella, Proteus</i>', gram: 'Vegyes', shape: 'Vegyes' },
      epidemiology: {
        incidence: 'Gyakori kórházi környezetben és urológiai betegeknél',
        risk_groups: ['Katéter viselők', 'Férfiak', 'Terhesek', 'Anatómiai/funkcionális rendellenesség', 'Veseelégtelenség', 'Immunszuppresszió'],
        seasonality: 'Nincs',
        transmission: 'Felszálló, katéter-asszociált, hematogén'
      },
      pathomechanism: {
        steps: [
          'Hajlamosító tényező: Anatómiai (pl. szűkület, kő) vagy funkcionális (pl. neurogén hólyag) rendellenesség, vagy idegentest (katéter) jelenléte gátolja a vizeletáramlást és a baktériumok kimosódását.',
          'Biofilm képzés: A baktériumok (pl. Proteus, Pseudomonas) biofilm réteget képeznek a katéteren vagy kövön, ami védi őket az antibiotikumoktól és az immunrendszertől.',
          'Perzisztencia: A fertőzés nehezen eradikálható, gyakori a rezisztens törzsek szelekciója és a visszatérő fertőzés.'
        ],
        virulence_factors: ['Biofilm', 'Multidrog rezisztencia', 'Ureáz (Proteus)']
      },
      clinical: {
        incubation: 'Változó',
        onset: 'Változó (lehet tünetszegény is)',
        symptoms: [
          { name: 'Alsó húgyúti tünetek', description: 'Dysuria, gyakori vizelés és sürgető inger előfordulhatnak, de elmaradhatnak is; a fertőzés lokalizációja változó.', severity: 'moderate' },
          { name: 'Felső húgyúti/jelentős lokális fájdalom', description: 'Suprapubicus vagy deréktáji fájdalom előfordulhat, különösen obstrukció vagy vesét érintő gyulladás esetén.', severity: 'moderate' },
          { name: 'Szisztémás gyulladás', description: 'Láz, hidegrázás és tachycardia a nagyobb kórokozó-terhelésre és a szervezet általános válaszára utalnak.', severity: 'severe' },
          { name: 'Sepsis jelek', description: 'Hypotonia, tachypnea, zavartság vagy oliguria súlyos urosepsisben fordulhat elő, ezért azonnali forráskontroll szükséges.', severity: 'severe' },
          { name: 'Oligosymptomatikus', description: 'Katéteres, neurogén hólyaggal vagy immunszupprimált betegeknél a klasszikus tünetek gyakran hiányoznak, de a labor- és vitáljeleket figyelni kell.', severity: 'mild' }
        ],
        physical_exam: [
          'Gyakran szegényes lelet, különösen katéteres betegeknél',
          'Suprapubicus vagy vesetáji nyomásérzékenység',
          'Katéter vagy más húgyúti eszköz jelenléte',
          'Láz vagy hypothermia'
        ],
        complications: ['Urosepsis', 'Vese tályog', 'Veseelégtelenség', 'Recidíva', 'Katéter elzáródás']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet tenyésztés', finding: 'Nők: ≥10^5 CFU/ml, Férfiak: ≥10^4 CFU/ml', interpretation: 'Diagnosztikus küszöbértékek (EAU 2025)' },
          { test: 'Katéteres vizelet', finding: '≥10^4 CFU/ml', interpretation: 'Szignifikáns bakteriuria' },
          { test: 'Vesefunkció', finding: 'Kreatinin ellenőrzés', interpretation: 'Obstrukció/károsodás' }
        ],
        imaging: [
          { modality: 'CT urográfia', finding: 'Anatómiai/funkcionális rendellenesség', significance: 'KÖTELEZŐ a hajlamosító tényező tisztázására' }
        ],
        microbiology: [
          { test: 'Tenyésztés + Rezisztencia', finding: 'Esszenciális', significance: 'Célzott kezelés alapja' }
        ]
      },
      differential: [
        { disease: 'Nem komplikált UTI', distinguishing: 'Nincs rizikófaktor/anatómiai hiba' },
        { disease: 'Prostatitis', distinguishing: 'Rectalis vizsgálat' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7-14 nap', note: 'nincs Enterococcus elleni hatása' },
            { drug: 'Ciprofloxacin', dose: '2x500-750mg PO', duration: '7-14 nap', note: 'Csak ha nincs fluorokinolon kezelés az elmúlt 6 hónapban és az E. coli rezisztencia <10% (EAU 2025)' },
            { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '7-14 nap', note: 'Alternatíva, ha E. coli rezisztencia <10% (EAU 2025)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '10-14 nap', note: 'Súlyos esetben' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '10-14 nap', note: 'Pseudomonas gyanú/korábbi AB kezelés' },
            { drug: 'Carbapenem (Meropenem)', dose: '3x1g IV', duration: '10-14 nap', note: 'ESBL rizikó vagy szeptikus shock' }
          ]
        },
        targeted: 'Tenyésztés alapján korrekció. Obstrukció megoldása (katéter csere, stent, nefrosztóma) elengedhetetlen!',
        supportive: ['Folyadékpótlás', 'Lázcsillapítás'],
        prevention: ['Katéter care (zárt rendszer, mielőbbi eltávolítás)', 'Obstrukció megszüntetése', 'Aszimptomatikus bakteriuria kezelésének kerülése']
      },
      prognosis: {
        mortality: 'Urosepsis esetén 10-30%',
        factors: 'Alapbetegség, rezisztencia, forrás kontroll'
      }
    },
    {
      id: 'prostatitis',
      name: 'Bakteriális prostatitis',
      pathogen: { type: 'Baktérium', name: '<i>E. coli, Klebsiella, Proteus, Enterococcus, Pseudomonas</i>', gram: 'Vegyes', shape: 'Vegyes' },
      epidemiology: {
        incidence: 'Férfiak 50%-a tapasztal tüneteket élete során',
        risk_groups: ['Fiatal/középkorú férfiak', 'Katéterezés', 'Húgyúti beavatkozás (biopszia)', 'HIV', 'Diabetes'],
        seasonality: 'Nincs',
        transmission: 'Felszálló (reflux), hematogén, lymphogen, direkt (biopszia)'
      },
      pathomechanism: {
        steps: [
          'Fertőzés útja: Leggyakrabban a fertőzött vizelet intraprostaticus refluxa révén jutnak be a baktériumok a prosztata mirigyeibe.',
          'Gyulladás: Akut esetben a mirigyekben ödéma és mikroabscessusok alakulnak ki, ami a prosztata duzzanatát és feszülését okozza.',
          'Krónikussá válás: A baktériumok biofilmet képezhetnek a prosztataköveken vagy a mirigycsatornákban, ami fenntartja a visszatérő fertőzéseket.'
        ],
        virulence_factors: ['Biofilm', 'Anatómiai elhelyezkedés (rossz AB penetráció)']
      },
      clinical: {
        incubation: 'Változó',
        onset: 'Akut (ABP) or Krónikus (CBP)',
        symptoms: [
          { name: 'Akut: Szisztémás tünetek', description: 'Hirtelen kezdődő magas láz, hidegrázás, izomfájdalom, rossz közérzet (influenzaszerű kezdet).', severity: 'severe' },
          { name: 'Fájdalom', description: 'Jellegzetes gáttájéki (perinealis), végbél körüli, alhasi fájdalom, amely sugározhat a herékbe és a péniszbe.', severity: 'moderate' },
          { name: 'LUTS (Alsó húgyúti tünetek)', description: 'Kifejezett dysuria, pollakisuria, sürgető vizelési inger.', severity: 'moderate' },
          { name: 'Obstrukció', description: 'A duzzadt prosztata összenyomja a húgycsövet, ami nehezített vizelést, vékony sugarat vagy teljes vizeletretenciót okozhat.', severity: 'severe' },
          { name: 'Húgyúti retenció', description: 'Az elzáródás súlyos szakaszában a hólyag megtelhet, ami akut vizeletvisszatartáshoz és suprapubicus diszkomforthoz vezethet.', severity: 'severe' },
          { name: 'Krónikus tünetek', description: 'Enyhébb, visszatérő panaszok: kismedencei diszkomfort, visszatérő húgyúti fertőzések, fájdalmas ejakuláció.', severity: 'mild' }
        ],
        physical_exam: [
          'Rectalis digitális vizsgálat (RDV):',
          'Akut: Duzzadt, meleg, EXTRÉM érzékeny prosztata (Masszázs TILOS - bacteremia veszély!)',
          'Krónikus: Lehet normál vagy enyhén érzékeny, nem duzzadt',
          'Teltség a húgyhólyagban visszatartás esetén'
        ],
        complications: ['Prosztata tályog', 'Urosepsis', 'Krónikussá válás', 'Epididymitis', 'Vizeletretenció', 'Szexuális diszfunkció']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet', finding: 'Pyuria, bakteriuria', interpretation: 'Pozitív' },
          { test: 'Vérkép/CRP', finding: 'Emelkedett (Akut)', interpretation: 'Szisztémás gyulladás' },
          { test: 'PSA', finding: 'Emelkedett', interpretation: 'Gyulladás miatt (akut fázisban nem rák diagnosztika!)' }
        ],
        imaging: [
          { modality: 'Transrectalis UH (TRUS)', finding: 'Tályog (hipoechogén terület)', significance: 'Csak ha nem javul a kezelésre vagy tályog gyanú' }
        ],
        microbiology: [
          { test: 'Akut: Vizelet tenyésztés', finding: 'Középsugár vizelet', significance: 'Prosztata masszázs TILOS!' },
          { test: 'Krónikus: Meares-Stamey teszt', finding: '4 pohár próba vagy 2 pohár próba (masszázs előtt/után)', significance: 'Gold standard (EAU 2025)' }
        ]
      },
      differential: [
        { disease: 'Cystitis', distinguishing: 'Nincs láz, nincs prosztata érzékenység' },
        { disease: 'BPH', distinguishing: 'Nincs infekciós jel, lassú progresszió' },
        { disease: 'Krónikus kismedencei fájdalom szindróma (CPPS)', distinguishing: 'Negatív tenyésztés, krónikus fájdalom' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Levofloxacin', dose: '1x500-750mg PO', duration: '2-4 hét (Akut), 4-6 hét (Krónikus)', note: 'EAU 2025: Első választás (jó penetráció)' },
            { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '2-4 hét (Akut), 4-6 hét (Krónikus)', note: 'EAU 2025: Első választás' },
            { drug: 'Cotrimoxazol', dose: '2x960mg PO', duration: '4-6 hét', note: 'Alternatíva' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1-2g IV', duration: '14 nap', note: 'Súlyos akut esetben (majd PO váltás)' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '', note: 'Urosepsis/Pseudomonas gyanú' }
          ]
        },
        targeted: 'Fluorokinolonok (első választás krónikusban). Makrolidok (Chlamydia gyanú). Fosfomycin (MDR - vitatott penetráció).',
        supportive: ['NSAID fájdalomcsillapítás', 'Alfa-blokkoló (Tamsulosin) a tünetek enyhítésére', 'Suprapubicus katéter (retenció esetén, urethralis kerülendő akut gyulladásban!)'],
        prevention: ['Húgyúti fertőzések korai kezelése', 'Prosztata biopszia profilaxis: Célzottan (rectalis törlet alapján) vagy Fosfomycin/Ceftriaxon (Fluorokinolon kerülendő!)']
      },
      prognosis: {
        mortality: 'Akut: alacsony (de sepsis veszély); Krónikus: életminőséget rontja, nehezen gyógyul (recidíva gyakori)',
        factors: 'Biofilm, rezisztencia, anatómia, CPPS átmenet'
      }
    },
    {
      id: 'asymptomatic_bacteriuria',
      name: 'Aszimptomatikus bakteriuria',
      pathogen: { type: 'Baktérium', name: '<i>E. coli, Enterococcus, GBS</i>, stb.', gram: 'Változó', shape: 'Változó' },
      epidemiology: {
        incidence: 'Gyakori (nők 3-5%, idősek 10-50%, katéteresek 100%)',
        risk_groups: ['Idősek', 'Diabetes', 'Katéter viselés', 'Terhesség'],
        seasonality: 'Nincs',
        transmission: 'Endogén kolonizáció'
      },
      pathomechanism: {
        steps: [
          'Kolonizáció: A baktériumok megtelepednek a húgyutakban, de hiányoznak belőlük azok a virulenciafaktorok (pl. specifikus fimbriák), amelyek szöveti inváziót vagy gyulladást váltanának ki.',
          'Kommensalizmus: A baktériumok és a gazdaszervezet között egyfajta egyensúlyi állapot alakul ki, tünetek nélkül.',
          'Védő hatás: A kolonizáló törzsek versenghetnek a virulensebb kórokozókkal, így akár védő hatásuk is lehet.'
        ],
        virulence_factors: ['Csökkent virulencia']
      },
      clinical: {
        incubation: '-',
        onset: 'Tünetmentes',
        symptoms: [
          { name: 'Tünetmentes', description: 'A betegnek nincsenek húgyúti panaszai (nincs dysuria, nincs láz, nincs fájdalom). A bakteriuria véletlenszerű lelet.', severity: 'mild' }
        ],
        physical_exam: [
          'Negatív',
          'Zavaros/bűzös vizelet önmagában nem diagnosztikus és nem igényel kezelést!',
          'Nincs suprapubicus vagy vesetáji nyomásérzékenység'
        ],
        complications: ['Felesleges antibiotikum kezelés -> rezisztencia', 'Pyelonephritis (csak terhességben/beavatkozásnál rizikó)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet tenyésztés', finding: '≥10^5 CFU/ml (ugyanaz a törzs)', interpretation: 'Nők: 2 konzekutív minta, Férfiak: 1 minta (EAU 2025)' },
          { test: 'Katéteres minta', finding: '≥10^5 CFU/ml', interpretation: 'Egy minta elegendő' },
          { test: 'Vizelet üledék', finding: 'Pyuria gyakran jelen van', interpretation: 'NEM indikál kezelést tünetek nélkül!' }
        ],
        imaging: [
          { test: 'Nem szükséges', finding: 'Nincs javallat', interpretation: 'Kizárólag tünetmentes esetben nem végzendő' }
        ],
        microbiology: [
          { test: 'Tenyésztés', finding: 'Pozitív', significance: 'Csak szűrési indikáció esetén (pl. terhesség, urológiai beavatkozás)' }
        ]
      },
      differential: [
        { disease: 'Cystitis', distinguishing: 'Tünetek jelenléte (dysuria, urgencia)' },
        { disease: 'Kontamináció', distinguishing: 'Alacsony csíraszám, vegyes flóra' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'NINCS kezelés', dose: '-', duration: '-', note: 'Főszabály (idősek, cukorbetegek, katéteresek esetén sem!)' }
          ],
          inpatient: [
            { drug: 'NINCS kezelés', dose: '-', duration: '-', note: 'Kivéve indikációk' }
          ]
        },
        targeted: 'Csak indikáció esetén (Terhesség, Urológiai beavatkozás nyálkahártya sérüléssel). Terhességben: Fosfomycin, Nitrofurantoin, Cephalosporin.',
        supportive: ['Felvilágosítás (vizelet szaga/színe nem indokol AB-t)'],
        prevention: ['Felesleges szűrés és kezelés kerülése', 'Katéter care']
      },
      prognosis: {
        mortality: 'Nem növeli a mortalitást kezeletlenül sem',
        factors: '-'
      }
    }
  ]
};
