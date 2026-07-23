import { Category } from '../types';

export const urinaryTractHu: Category = {
  name: 'Húgyúti fertőzések',
  icon: '🚽',
  color: '#3b82f6',
  didactics: {
    overview: 'Az EAU 2025/2026 irányelvek alapján a húgyúti fertőzések alapvető osztályozása: lokalizált nem komplikált alsó UTI (cystitis), lokalizált nem komplikált felső UTI (pyelonephritis), szisztémás / komplikált UTI (rizikófaktorokkal, fellelhető anatómiai/funkcionális eltéréssel vagy eszközzel rendelkező betegekben), bakteriális prostatitis (akut és krónikus), valamint az aszimptomatikus bakteriuria (ASB).',
    lower: 'Alsó UTI (Cystitis): Akut dysuria, pollakisuria, urgencia, suprapubicus fájdalom szisztémás tünetek (láz, deréktáji fájdalom) NÉLKÜL. Rutin vizelet tenyésztést az EAU 2025/2026 szerint NEM igényel.',
    upper: 'Felső UTI (Pyelonephritis): Láz (>38°C), hidegrázás, deréktáji/CVA fájdalom, Giordano-jel, hányinger/hányás. Vizelet tenyésztés kötelező; 48-72 órás terápiás perzisztencia esetén képalkotás (CT/UH) végzendő.',
    diagnostics: [
      '1) Klinikai tünetek és anamnézis értékelése (láz, deréktáji fájdalom megléte/hiánya)',
      '2) Vizelet tesztcsík és üledékvizsgálat (leukocyta esterase, nitrit, pyuria)',
      '3) Vizelet tenyésztés (pyelonephritis, komplikált cases, recidív fertőzés, terhesség esetén kötelező)',
      '4) Gyulladásos laborok (vérkép, CRP, procalcitonin) és vesefunkció szisztémás tüneteknél',
      '5) Has/kismedencei UH vagy CT képalkotás obstrukció, tályog vagy terápiarezisztencia gyanújakor'
    ],
    red_flags: [
      'Sepsis / Szeptikus sokk jelei (hypotonia, tachycardia, tachypnea, zavartság)',
      'Akut húgyúti obstrukció (vesekő, prostata hypertrophia) elzáródással',
      'Terhességben fellépő lázas pyelonephritis',
      'Gátolt orális tolerancia (súlyos hányás)',
      'Immunszupprimált állapot vagy nem reagáló láz >72 óra antibiotikum után'
    ],
    special_populations: 'Idősek: gyakran atipikus tünetek (delírium, zavartság, elesettség) - alacsony küszöb a vizsgálatra, de felesleges AB adandó aszimptomatikus bakteriuriában! Terhesek: ASB kötelezően szűrendő és kezelendő. Férfiak: a fertőzés mindig komplikáltnak vagy prostatitisnek tekintendő.',
    teaching_tip: 'Fluorokinolonok (Ciprofloxacin, Levofloxacin) empirikus adása nem komplikált cystitisben az EAU 2025/2026 ajánlás szerint SZIGORÚAN KERÜLENDŐ a súlyos kollaterális károsodások és rezisztencia miatt!'
  },
  diseases: [
    {
      id: 'cystitis',
      name: 'Akut nem komplikált cystitis (Hólyaghurut)',
      pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negatív', shape: 'pálca' },
      epidemiology: {
        incidence: 'Nők 50%-a élete során legalább egyszer, 20-30%-uknál recidív fertőzés',
        risk_groups: ['Szexuálisan aktív premenopauzális nők', 'Postmenopauzális nők (ösztrogénhiány)', 'Terhesség', 'Új szexuális partner vagy spermicidek használata'],
        seasonality: 'Nincs',
        transmission: 'Felszálló (ascendáló) fertőzés a perineális és periurethrális flórából'
      },
      pathomechanism: {
        steps: [
          'Kolonizáció: A bélflórából származó uropathogén baktériumok (UPEC) kolonizálják a periurethrális területet és a hüvelybemenetet.',
          'Feljutás: A baktériumok a női rövid urethrán keresztül feljutnak a húgyhólyagba.',
          'Adhézió és Invázió: A baktériumok I-es típusú és P-fimbriák segítségével kitapadnak a hólyag urothelium uroplakin molekuláihoz, megelőzve a kimosódást, majd intracelluláris bakteriális közösségeket (IBC) képeznek.',
          'Gyulladásos válasz: A baktériumok és endotoxinjaik heves nyálkahártya-gyulladást, hyperaemiát, ödémát és a hólyag receptorainak irritációját váltják ki.'
        ],
        virulence_factors: ['I-es típusú fimbria és P-fimbria (adherencia)', 'Hemolizin (hólyagfal károsítás)', 'Aerobactin (vasfelvétel)']
      },
      clinical: {
        incubation: '1-3 nap',
        onset: 'Akut, hirtelen kezdet',
        symptoms: [
          { name: 'Dysuria', description: 'Égő, csípő érzés vizelés közben és végén, az irritált urethra és hólyagnyak miatt.', severity: 'moderate' },
          { name: 'Pollakisuria', description: 'Gyakori, kis volumenű vizeletürítés a hólyagnyálkahártya fokozott ingerlékenysége és csökkent funkcencionális kapacitása miatt.', severity: 'moderate' },
          { name: 'Urgencia', description: 'Hirtelen fellépő, parancsoló vizelési inger, melyet nehéz visszatartani (késztetéses inkontinencia léphet fel).', severity: 'moderate' },
          { name: 'Suprapubicus fájdalom', description: 'Szeméremcsont feletti nyomás, tompa fájdalom vagy görcsös diszkomfort érzés.', severity: 'mild' },
          { name: 'Terminális haematuria', description: 'Makroszkóposan véres vizelet a vizelés legvégén (az esetek ~30%-ában), a vérbő hólyagnyálkahártya nyomási károsodása miatt.', severity: 'mild' },
          { name: 'Láz hiánya', description: 'Szisztémás tünetek (láz, hidegrázás, deréktáji fájdalom) HIÁNYOZNAK. Ha láz van jelen, az felső húgyúti érintettségre (pyelonephritis) utal!', severity: 'mild' }
        ],
        physical_exam: [
          'Suprapubicus nyomásérzékenység az alhas áttapintásakor',
          'Láz ÉS deréktáji/CVA ütögetési érzékenység HIÁNYZIK (Giordano-jel negatív)',
          'Hüvelyi folyás és irritáció hiánya (segít elkülöníteni a vaginistől/cervicitistől)',
          'Normál vitális paraméterek (nincs tachycardia, nincs hypotonia)'
        ],
        complications: ['Ascendáló akut pyelonephritis', 'Recidiváló cystitis (rUTI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet tesztcsík', finding: 'Leukocyta esterase+, Nitrit+ (Gram-negatív pálcák jelenlétében)', interpretation: 'Tipikus klinikai tünetekkel együtt magas pozitív prediktív érték (>90%)' },
          { test: 'Vizelet üledék', finding: 'Pyuria (>10 FVS/látótér), fvs-csoportok, fvs-cilinderek nélkül', interpretation: 'Alsó húgyúti gyulladást igazol' }
        ],
        imaging: [
          { test: 'Képalkotás nem indikált', finding: 'Rutin nem komplikált cystitisben nem végzendő', interpretation: 'Kizárólag szövődmény vagy atípusos lefolyás esetén' }
        ],
        microbiology: [
          { test: 'Vizelet tenyésztés (EAU 2025/2026)', finding: '≥10^3 CFU/ml uropathogén baktérium', significance: 'Rutin nem komplikált cystitisben NEM szükséges! Indikációi: gyanított pyelonephritis, 2-4 héten belüli recidíva, atípusos tünetek, terhesség.' }
        ]
      },
      differential: [
        { disease: 'Vaginitis / Vulvovaginitis', distinguishing: 'Hüvelyi folyás, viszketés, a dysuria inkább külső irritációs jellegű' },
        { disease: 'Urethritis (STD - Chlamydia, Gonorrhoea, Mycoplasma)', distinguishing: 'Lassúbb lefolyás, új szexuális partner, urethralis váladékozás, steril pyuria' },
        { disease: 'Interstitialis cystitis / Hólyagfájdalom szindróma', distinguishing: 'Krónikus (>6 hét) fájdalom teli hólyagnál, negatív vizelettenyésztés' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fosfomycin trometamol', dose: '3g PO', duration: '1x egyszeri dózis', note: 'EAU 2025/2026 első választandó szer (First-line)' },
            { drug: 'Nitrofurantoin', dose: '2x100mg PO (makrokristály)', duration: '5 nap', note: 'EAU 2025/2026 első választandó szer (First-line)' },
            { drug: 'Pivmecillinam', dose: '3x400mg PO', duration: '3-5 nap', note: 'EAU 2025/2026 első választandó szer (First-line)' },
            { drug: 'Nitroxolin', dose: '3x250mg PO', duration: '5 nap', note: 'EAU 2025/2026 elfogadott alternatíva' }
          ],
          inpatient: [
            { drug: 'Nem igényel kórházi felvételt', dose: '-', duration: '-', note: 'Kivételt képez a súlyos társbetegség vagy szövődmény' }
          ]
        },
        targeted: 'Tenyésztési eredmény alapján igazítandó. EAU 2025/2026 figyelmeztetés: Fluorokinolonok (Ciprofloxacin, Levofloxacin) és oralis 3. gen Cephalosporinok EMPIRIKUSAN KERÜLENDŐK nem komplikált cystitisben!',
        supportive: [
          'Nem gyógyszeres terápia: Bőséges napi folyadékfogyasztás (min. 2.0-2.5 liter vízfogyasztás a baktériumok mechanikus kimosására).',
          'Gyakori, rendszeres vizeletürítés, a vizelet halogatásának kerülése.',
          'Symptomaticus fájdalomcsillapítás: NSAID (pl. Ibuprofen 3x400mg PO 3-5 napig) enyhe/mérsékelt tüneteknél önmagában is mérlegelhető az antibiotikum-stewardship részeként.',
          'Alhas melegítése (melegvizes palack, meleg borogatás) a hólyagizomzat görcsének oldására.',
          'Fitoterápia: Medveszőlőlevél-kivonat (Uvae ursi folium) alkalmazása rövid távon enyhítheti a panaszokat.'
        ],
        prevention: [
          'Életmódi megelőzés: Bőséges napi folyadékbevitel (>2L/nap), postcoitalis (szexuális aktus utáni 15 percen belüli) vizeletürítés, spermicid krémet tartalmazó óvszerek és diaphragma kerülése, elölről hátrafelé törlés székelés után.',
          'EAU 2025/2026 Nem-antibiotikus profilaxis (Kiemelten ajánlott rUTI esetén):',
          '1) Helyi / Topikális ösztrogénpótlás (Estriol hüvelykúp/krém): Postmenopauzális nőknél bizonyítottan helyreállítja a hüvelyi Lactobacillus flórát (Erős EAU ajánlás!).',
          '2) Immunprofilaxis / Oralis immunostimuláció (OM-89 / Uro-Vaxom®): 1 kapszula/nap orálisan 3 hónapig (Erős EAU ajánlás rUTI megelőzésére!).',
          '3) D-mannóz: 2g/nap orálisan gátolja az E. coli fimbriák kötődését a hólyagfalhoz.',
          '4) Hólyag-instillációs terápia (GAG-réteg pótlás): Hialuronsav + kondroitin-szulfát (HA/CS) instilláció refrakter visszatérő cystitisben.',
          '5) Methenamine hippurate: 2x1g/nap orálisan (ép anatómiai húgyutak esetén).',
          '6) Probiotikumok: Vaginalis Lactobacillus crispatus pótlás.',
          'Antibiotikum profilaxis (Kizárólag utolsó lépésként, ha a nem-antibiotikus intézkedések sikertelenek): Postcoitalis (Nitrofurantoin 50mg vagy Fosfomycin 3g aktus után) vagy kis dózisú folyamatos profilaxis 3-6 hónapig (Nitrofurantoin 50-100mg este vagy Fosfomycin 3g 10 naponta).'
        ]
      },
      prognosis: {
        mortality: 'Nincs mortalitás',
        factors: 'Recidíva hajlam (20-30%-ban alakul ki visszatérő fertőzés)'
      }
    },
    {
      id: 'pyelonephritis',
      name: 'Akut nem komplikált pyelonephritis (Vesemedence-gyulladás)',
      pathogen: { type: 'Baktérium', name: '<i>Escherichia coli</i> (75-80%)', gram: 'Gram-negatív', shape: 'pálca' },
      epidemiology: {
        incidence: '10-12 eset / 10 000 nő / év; kezeletlen cystitis szövődménye is lehet',
        risk_groups: ['Fiatal szexuálisan aktív nők', 'Terhesség', 'Anatómiai/funkcionális urológiai rendellenesség', 'Diabetes mellitus'],
        seasonality: 'Nincs',
        transmission: 'Ascendáló fertőzés a hólyagból az uretereken át (95%), ritkán hematogén'
      },
      pathomechanism: {
        steps: [
          'Ascendálás: A kórokozók a hólyagból feljutnak az ureteren keresztül a vesemedencébe (vesico-ureteralis reflux elősegítheti).',
          'Vese parenchyma invázió: A baktériumok elárasztják a vese vesemedencéjét és parenchymáját (különösen a velőállományt).',
          'Akut gyulladásos válasz: Heves granulocytás infiltráció, interstitialis ödéma, mikrotályogok képződése és tubuláris necrosis alakul ki.',
          'Szisztémás transzlokáció: A gyulladásos mediátorok (IL-1, IL-6, TNF-alpha) és endotoxinok a keringésbe jutva magas lázat, hidegrázást és szisztémás gyulladást okoznak.'
        ],
        virulence_factors: ['P-fimbriae (pyelonephritis-associated pili, vesesejtekhez kötődés)', 'Lipopoliszacharid (LPS endotoxin)', 'Kapszula (K-antigén)']
      },
      clinical: {
        incubation: '1-3 nap cystitis után',
        onset: 'Hirtelen, heves kezdet',
        symptoms: [
          { name: 'Magas láz és hidegrázás', description: 'Hirtelen felszökő magas láz (>38.5°C), rázó hideg és profúz izzadás a vese parenchymális fertőzésének és bakterémiának a jele.', severity: 'severe' },
          { name: 'Deréktáji / CVA fájdalom', description: 'Unilateralis vagy bilateralis tompa, állandó deréktáji fájdalom a vese tokjának (capsula fibrosa) feszülése miatt.', severity: 'severe' },
          { name: 'Gastrointestinalis tünetek', description: 'Kifejezett hányinger, hányás, étvágytalanság, hasi diszkomfort a vese peritoneális és celiacus reflex-irritációja miatt.', severity: 'moderate' },
          { name: 'Alsó húgyúti tünetek', description: 'Dysuria, pollakisuria és urgencia jelen lehetnek, de az esetek 30-50%-ában hiányoznak!', severity: 'moderate' },
          { name: 'Atípusos megjelenés idősekben', description: 'Idős vagy immunszupprimált betegeknél a láz hiányozhat; helyette delírium, zavartság, elesettség és hypotonia lehet a vezető tünet.', severity: 'severe' }
        ],
        physical_exam: [
          'Giordano-jel pozitív: Costovertebralis szöglet (CVA) ütögetési érzékenysége az érintett oldalon',
          'Láz (>38.5°C), tachycardia, szisztémás rossz közérzet',
          'Hasi érzékenység lehet jelen az azonos oldali hypochondriumban, de izomvédekezés nélkül',
          'Dehidráció jelei (száraz nyálkahártyák, csökkent turgor)'
        ],
        complications: ['Vesetályog / Perinephriticus tályog', 'Urosepsis és szeptikus sokk', 'Emphysematosus pyelonephritis (cukorbetegekben)', 'Vesepapilla necrosis', 'Akut vesekárosodás (AKI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vérkép', finding: 'Kifejezett leukocytosis balra tolt fvs-képpel, granulocytosissal', interpretation: 'Szisztémás bakteriális fertőzés' },
          { test: 'CRP és Procalcitonin (PCT)', finding: 'Jelentősen emelkedett (CRP >100 mg/L, PCT >0.5 ng/mL)', interpretation: 'Parenchymális gyulladást és szepszis rizikót jelez' },
          { test: 'Vesefunkció és elektrolitok', finding: 'Kreatinin, karbamid emelkedése, eGFR csökkenése', interpretation: 'Akut vesekárosodás vagy dehidráció' },
          { test: 'Vizelet üledék', finding: 'Kifejezett pyuria, fvs-cilinderek (leukocyta fuzió - felső húgyúti specifikus!)', interpretation: 'Vese parenchymális gyulladást igazol' }
        ],
        imaging: [
          { modality: 'CT has/kismedence (EAU 2025/2026)', finding: 'Ék alakú hypodenzitás a parenchyma-fázisban, vese megnagyobbodás, perinephriticus zsíroddéma', significance: 'Gold standard képalkotás szövődmények (tályog, obstrukció) kizárására. Indikáció: 48-72 órás célszerű AB utáni lázas perzisztencia.' },
          { modality: 'Has/vese UH', finding: 'Obstrukció (üregrendszeri tágulat), vesekő, tályog', significance: 'Elsőként választandó sugármentes képalkotás' }
        ],
        microbiology: [
          { test: 'Vizelet tenyésztés (EAU 2025/2026)', finding: '≥10^4 CFU/ml uropathogén baktérium', significance: 'MINDIG KÖTELEZŐen levenendő az antibiotikum megkezdése előtt!' },
          { test: 'Hemokultúra', finding: 'Bakterémia jelenléte (~15-20%-ban pozitív)', significance: 'Kórházi felvételt igénylő vagy lázas, szeptikus betegeknél kötelező (2 szett)' }
        ]
      },
      differential: [
        { disease: 'Urolithiasis (Vesekő)', distinguishing: 'Görcsös, derékból gátba sugárzó fájdalom, láz hiánya (ha nincs lázas elzáródás), hematuria dominál' },
        { disease: 'Akut appendicitis / Cholecystitis', distinguishing: 'Hasi status, peritonealitás, UH vizsgálat, nincs pyuria' },
        { disease: 'Kismedencei gyulladás (PID) / Adnexitis', distinguishing: 'Nőgyógyászati vizsgálati érzékenység, hüvelyi váladékozás' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7 nap', note: 'EAU 2025/2026 elsővonalbeli oralis opció' },
            { drug: 'Cefpodoxim proxetil', dose: '2x200mg PO', duration: '10 nap', note: 'Oralis 3. gen cephalosporin alternatíva' },
            { drug: 'Ciprofloxacin', dose: '2x500mg PO', duration: '7 nap', note: 'CSAK AKKOR adható empirikusan, ha a helyi E. coli rezisztencia <10%! (EAU 2025/2026)' },
            { drug: 'Levofloxacin', dose: '1x750mg PO', duration: '5 nap', note: 'CSAK AKKOR adható empirikusan, ha a helyi E. coli rezisztencia <10%! (EAU 2025/2026)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x1-2g IV', duration: '10-14 nap', note: 'EAU 2025/2026 első választandó parenterális szer' },
            { drug: 'Cefotaxim', dose: '3x2g IV', duration: '10-14 nap', note: 'Parenterális alternatíva' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '10-14 nap', note: 'Pseudomonas vagy korábbi AB kezetes esetén' },
            { drug: 'Gentamicin / Amikacin', dose: 'Single daily dose IV', duration: '3-5 nap', note: 'Súlyos esetben kombinációs opció' }
          ]
        },
        targeted: 'Antibiogram alapján korrigálandó. Ha oralis béta-laktamot választunk járóbetegként, kezdő 1x IV Ceftriaxon (1g) vagy Aminoglikozid dózis adása javasolt a sürgősségi osztályon!',
        supportive: [
          'Nem gyógyszeres terápia: Rehidráció parenterális (IV kristályos infúzió) vagy orális bőséges folyadékkal a renalis perfúzió fenntartására.',
          'Szigorú ágynyugalom a lázas fázisban.',
          'Mérsékelt láz- és fájdalomcsillapítás: Paracetamol (3-4x500-1000mg PO/IV) vagy Metamizol (3-4x500-1000mg IV/PO). NSAID-ok óvatosan adhatók a vesefunkció szoros ellenőrzése mellett.',
          'Hányinger és hányás csillapítása (Metoclopramid 3x10mg IV/PO vagy Ondansetron 4-8mg IV) az orális folyadék- és gyógyszer-tolerancia biztosítására.',
          'Vitális paraméterek (vérnyomás, pulzus, diurézis, véroxigén) és vesefunkció szoros monitorozása.'
        ],
        prevention: [
          'Cystitis időben történő, szakszerű kezelése.',
          'EAU 2025/2026 nem-antibiotikus megelőző intézkedések alkalmazása (bőséges folyadékbevitel, OM-89 immunprofilaxis, lokalizált ösztrogén postmenopauzában).',
          'Esetlegesen meglévő urológiai rendellenességek (vesekő, vesico-ureteralis reflux) korrekciója.'
        ]
      },
      prognosis: {
        mortality: 'Megfelelő antibiotikum mellett <1%, de urosepsis vagy emphysematosus szövődmény esetén 10-20%',
        factors: 'Idős kor, cukorbetegség, urológiai obstrukció, multidrog-rezisztens (MDR/ESBL) kórokozó'
      }
    },
    {
      id: 'complicated_uti',
      name: 'Szisztémás / Komplikált húgyúti fertőzés',
      pathogen: { type: 'Baktérium', name: '<i>E. coli, Enterococcus faecalis, Pseudomonas aeruginosa, Klebsiella, Proteus, Enterobacter</i>', gram: 'Vegyes', shape: 'Vegyes' },
      epidemiology: {
        incidence: 'Gyakori nozokomiális környezetben, urológiai és katéterezett betegek körében',
        risk_groups: ['Katéterezett betegek (CAUTI)', 'Férfiak', 'Terhes nők', 'Anatómiai/funkcionális rendellenességek (neurogén hólyag, obstrukció)', 'Veseelégtelenség / Transplantáció', 'Immunszuppresszió / Diabetes'],
        seasonality: 'Nincs',
        transmission: 'Ascendáló, katéter-asszociált (biofilm), nozokomiális terjedés'
      },
      pathomechanism: {
        steps: [
          'Hajlamosító tényezők: Anatómiai (szűkület, kő, prostata hypertrophia) vagy funkcionális (neurogén hólyag) elzáródás, vagy idegentest (hólyagkatéter, stent) akadályozza a vizeletáramlást.',
          'Biofilmképződés: A baktériumok (főleg Proteus, Pseudomonas, Enterococcus) ellenálló biofilmet képeznek az eszközök felületén, gátolva az antibiotikumok és az immunsejtek bejutását.',
          'Parenchymális és szisztémás invázió: A vizeletstasis és a megnövekedett intraluminalis nyomás miatt a baktériumok könnyen a szövetekbe és a vénás keringésbe jutnak, urosepsist váltva ki.'
        ],
        virulence_factors: ['Biofilm képzés', 'Multidrog-rezisztencia (ESBL, AmpC, Carbapenemase)', 'Ureáz termelés (Proteus - infektív kövek)']
      },
      clinical: {
        incubation: 'Változó',
        onset: 'Változó (lehet tünetszegény vagy heves szisztémás)',
        symptoms: [
          { name: 'Szisztémás gyulladásos tünetek', description: 'Magas láz, hidegrázás, tachycardia, tachypnea, szisztémás intoxikáció jelei.', severity: 'severe' },
          { name: 'Urosepsis / Szeptikus sokk jelei', description: 'Hypotonia (RR <90 mmHg), oliguria (<0.5 ml/kg/óra), zavartság, emelkedett szérum laktát szint - AZONNALI beavatkozást igényel!', severity: 'severe' },
          { name: 'Flank / Suprapubicus fájdalom', description: 'Deréktáji vagy alhasi fájdalom jelen lehet, de katéteres vagy neurogén betegeknél gyakran hiányzik.', severity: 'moderate' },
          { name: 'Alsó húgyúti tünetek', description: 'Dysuria, pollakisuria, vagy katéteres betegeknél zavaros, bűzös vizelet, katéter-elzáródás.', severity: 'moderate' },
          { name: 'Oligosymptomatikus / Atípusos forma', description: 'Időseknél vagy immunszupprimáltaknál a láz hiányozhat, kizárólag a tudatállapot megváltozása (delírium) vagy vérnyomásesés jelzi a bajt.', severity: 'severe' }
        ],
        physical_exam: [
          'Szisztémás tünetek: Láz vagy hypothermia (<36°C), tachycardia, tachypnea',
          'Vesetáji érzékenység vagy suprapubicus nyomásérzékenység',
          'Indwelling hólyagkatéter, cystostoma vagy ureterstent jelenléte',
          'Sokk jelei: hűvös, mrványozott végtagok, megnyúlt kapilláris újratelődési idő'
        ],
        complications: ['Urosepsis és szeptikus sokk (mortalitás 20-40%)', 'Akut vesekárosodás (AKI)', 'Vesetályog, perinephriticus tályog', 'Ureter elzáródás és pyonephros']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet tenyésztés (EAU 2025/2026)', finding: 'Nők: ≥10^5 CFU/ml, Férfiak / Katéteresek: ≥10^4 CFU/ml szignifikáns csíraszám', interpretation: 'KÖTELEZŐen elvégzendő az antibiotikum megkezdése előtt!' },
          { test: 'Hemokultúra', finding: 'Pozitív baktérium izolálás (2 szett)', interpretation: 'Minden szisztémás/lázas esetben kötelező' },
          { test: 'Gyulladásos marker & Vesefunkció', finding: 'Procalcitonin (PCT), CRP, vérkép, kreatinin, laktát, vérgáz', interpretation: 'Sepsis és organikus diszfunkció monitorozása' }
        ],
        imaging: [
          { modality: 'CT Urográfia / Has-kismedence CT (EAU 2025/2026)', finding: 'Húgyúti obstrukció, psoas/vesetályog, infektív kő, emphysematosus elváltozás', significance: 'KÖTELEZŐ az anatómiai hajlamosító tényező és forrás tisztázására!' },
          { modality: 'Sürgősségi Vese UH', finding: 'Üregrendszeri tágulat (hydronephrosis), pyonephros', significance: 'AZONNAL elvégzendő elzáródás kizárására' }
        ],
        microbiology: [
          { test: 'Célzott tenyésztés + Antibiogram', finding: 'MDR kórokozók gyanúja', significance: 'Célzott terápia alapja' }
        ]
      },
      differential: [
        { disease: 'Nem komplikált pyelonephritis', distinguishing: 'Nincs anatómiai/funkcionális eltérés, nincsenek rizikófaktorok' },
        { disease: 'Akut prostatitis', distinguishing: 'RDV során kifejezetten érzékeny, duzzadt prosztata' },
        { disease: 'Egyéb szeptikus gócpontok (Intraabdominalis sepsis, Pneumonia)', distinguishing: 'Anamnézis, képalkotók, fizokális lelet' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroxim axetil', dose: '2x500mg PO', duration: '7-14 nap', note: 'Kizárólag enyhe, szisztémás tünetektől mentes esetben' },
            { drug: 'Ciprofloxacin / Levofloxacin', dose: 'PO', duration: '7-14 nap', note: 'Csak ha az elmúlt 6 hónapban nem kapott kinolont és a helyi rezisztencia <10% (EAU 2025/2026)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x2g IV', duration: '7-14 nap', note: 'Elsővonalbeli opció' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: '7-14 nap', note: 'Pseudomonas gyanú vagy nozokomiális fertőzés' },
            { drug: 'Cefepime', dose: '2x2g IV', duration: '7-14 nap', note: 'Pseudomonas és Enterobacteriaceae lefedés' },
            { drug: 'Meropenem', dose: '3x1g IV', duration: '7-14 nap', note: 'ESBL rizikó vagy szeptikus sokk' },
            { drug: 'Ceftazidim/avibactam vagy Cefiderocol', dose: 'IV', duration: '7-14 nap', note: 'Multidrog-rezisztens (MDR) Gram-negatív törzsek esetén (EAU 2025/2026)' }
          ]
        },
        targeted: 'FORRÁSKONTROLL (Source Control) AZONNAL: Az elzáródott húgyutak tehermentesítése (percutan nephrostomia vagy DJ stent behelyezése), az indwelling hólyagkatéter azonnali cseréje vagy eltávolítása elengedhetetlen!',
        supportive: [
          'Nem gyógyszeres terápia / Intenzív forráskontroll: Asepticus urológiai szervizelés, a záró katéter haladéktalan cseréje (az elrévült biofilm megelőzésére).',
          'Sepsis protokoll szerinti szupportív terápia: Agresszív IV folyadékpótlás (kristályos oldatok 30 ml/kg az első 3 órában) a keringés stabilizálására.',
          'Vasopressor terápia (Noradrenalin) ha a szisztolés vérnyomás és MAP <65 mmHg marad infúzió ellenére.',
          'Urológiai invazív intervenció (tályog percutan drainage, kő eltávolítása).',
          'Oszigénterápia, szoros intenzív osztályos monitorozás (diurézis, laktát, vérgáz).'
        ],
        prevention: [
          'Hólyagkatéterezés indikációjának szigorú korlátozása (amint lehet, el kell távolítani!).',
          'Zárt katéterrendszer fenntartása, aszeptikus katéterápolás.',
          'Aszimptomatikus bakteriuria felesleges antibiotikum-kezelésének KERÜLÉSE (megelőzi a rezisztens törzsek szelekcióját).',
          'Anatómiai obstrukciók korai urológiai megoldása.'
        ]
      },
      prognosis: {
        mortality: 'Urosepsis és szeptikus sokk esetén 20-40%',
        factors: 'Idős kor, nem megfelelő forráskontroll, multidrog-rezisztens (MDR) kórokozó, súlyos alapbetegség'
      }
    },
    {
      id: 'prostatitis',
      name: 'Akut és krónikus bakteriális prostatitis',
      pathogen: { type: 'Baktérium', name: '<i>E. coli</i> (80%), <i>Klebsiella, Proteus, Pseudomonas aeruginosa, Enterococcus faecalis</i>', gram: 'Vegyes', shape: 'Vegyes' },
      epidemiology: {
        incidence: 'Férfiak 10-15%-a tapasztal életében prosztatagyulladást; az urológiai vizitek 8%-a',
        risk_groups: ['Fiatal és középkorú férfiak', 'Prosztata biopszián átesettek', 'Hólyagkatéterezett betegek', 'BPH / kismedencei diszfunkció', 'HIV / Cukorbetegség'],
        seasonality: 'Nincs',
        transmission: 'Ascendáló fertőzés fertőzött vizeletből (intraprostaticus reflux), transrectalis biopszia utáni direkt inokuláció'
      },
      pathomechanism: {
        steps: [
          'Intraprostaticus reflux: A fertőzött vizelet a prosztatacsatornákba jut a vizelés alatti magas intraurethralis nyomás hatására.',
          'Akut gyulladás (NIH Type I - ABP): A mirigyállományban kifejezett stroma-ödéma, leukocytás infiltráció és mikroabscessusok keletkeznek, ami a prosztata fokozott feszüléséhez és duzzanatához vezet.',
          'Krónikussá válás (NIH Type II - CBP): A baktériumok áthatolhatatlan biofilmet képeznek a prosztatakövek (prostatolithiasis) vagy a mirigyek felületén, ami megakadályozza az antibiotikumok bejutását és relapszáló fertőzéseket okoz.'
        ],
        virulence_factors: ['Biofilm képzés', 'Szerkezeti barrier (a prosztata tok és a savas pH gátolja sok antibiotikum penetrációját)']
      },
      clinical: {
        incubation: '1-7 nap',
        onset: 'Akut (ABP) hirtelen; Krónikus (CBP) elhúzódó, perzisztáló (>3 hónap)',
        symptoms: [
          { name: 'Akut: Szisztémás lázas tünetek', description: 'Hirtelen felszökő magas láz, hidegrázás, izomfájdalmak, influenzaszerű rossz közérzet.', severity: 'severe' },
          { name: 'Pelvicus / Gáttáji fájdalom', description: 'Jellegzetes gáttáji (perinealis), rectalis, suprapubicus fájdalom, amely a péniszbe, herékbe vagy deréktájba sugárzik.', severity: 'severe' },
          { name: 'LUTS és vizelési nehézség', description: 'Kifejezett dysuria, pollakisuria, urgencia, gyenge vizeletsugár, szakaszos vizelés.', severity: 'moderate' },
          { name: 'Akut vizeletretenció', description: 'A duzzadt prosztata teljes elzáródást okozhat, mely heves alhasi fájdalommal és a hólyag túltágulásával jár.', severity: 'severe' },
          { name: 'Krónikus: Visszatérő panaszok', description: 'Elhúzódó kismedencei/gáttáji diszkomfort, fájdalmas ejakuláció, recidiváló hólyaghurutok ugyanazon kórokozóval.', severity: 'moderate' }
        ],
        physical_exam: [
          'Rectalis Digitális Vizsgálat (RDV):',
          'AKUT PROSTATITISNÉL: A prosztata duzzadt, forró, feszülő, EXTRÉMEN ÉRZÉKENY. A PROSZTATAMASSZÁZS AKUTBAN SZIGORÚAN TILOS (bakterémia és urosepsis kockázata!)',
          'KRÓNIKUS PROSTATITISNÉL: A prosztata lehet normál tapintatú, tömöttebb vagy enyhén érzékeny.',
          'Hólyag-distensio tapintható suprapubicus tompulattal vizeletretenció esetén.'
        ],
        complications: ['Prosztatatályog (főleg cukorbetegekben)', 'Urosepsis', 'Akut vizeletretenció', 'Epididymo-orchitis', 'Krónikus kismedencei fájdalom szindróma (CPPS) kialakulása']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet üledék és tesztcsík', finding: 'Kifejezett pyuria, bakteriuria', interpretation: 'Húgyúti fertőzést igazol' },
          { test: 'Gyulladásos panell', finding: 'Magas leukocytosis, jelentősen emelkedett CRP', interpretation: 'Akut szisztémás gyulladást jelez' },
          { test: 'Szérum PSA', finding: 'Kifejezetten emelkedett (akár >20-50 ng/mL)', interpretation: 'Akut gyulladás következménye! Akut fázisban daganatszűrésre NEM alkalmas, a gyulladás gyógyulása után 2-3 hónappal kontrollálandó.' }
        ],
        imaging: [
          { modality: 'Transrectalis UH (TRUS) vagy Kismedencei MRI', finding: 'Prosztatatályog (hipoechogén/folyadéknívót mutató terület)', significance: 'Indikált, ha 48-72 órás antibiotikum terápia ellenére a beteg lázas marad vagy kismedencei tályog gyanúja merül fel.' }
        ],
        microbiology: [
          { test: 'Akut: Középsugár vizelet tenyésztés (EAU 2025/2026)', finding: '≥10^4 CFU/ml uropathogén', significance: 'Prosztatamasszázs nélkül vétel!' },
          { test: 'Krónikus: Meares-Stamey 4-pohár próba vagy 2-pohár próba (EAU 2025/2026)', finding: 'Masszázs utáni vizeletben (VB3) vagy prosztataváladékban (EPS) 10-szeres baktériumszám a masszázs előtti vizelethez (VB2) képest', significance: 'Gold standard a krónikus bakteriális prostatitis diagnosztikájában!' }
        ]
      },
      differential: [
        { disease: 'BPH (Jóindulatú prosztata megnagyobbodás)', distinguishing: 'Lassú progresszió, nincsenek infekciós jelek, nincs láz' },
        { disease: 'Krónikus kismedencei fájdalom szindróma (CPPS / NIH Type III)', distinguishing: 'Hasonló fájdalmas tünetek, de a vizelet és prosztataváladék tenyésztése tartósan negatív' },
        { disease: 'Prosztata carcinoma', distinguishing: 'Tenyésztés negatív, kemény göb az RDV során, akut tünetek hiánya' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fluoroquinolones (Levofloxacin / Ciprofloxacin)', dose: 'Levofloxacin 1x500mg PO vagy Ciprofloxacin 2x500mg PO', duration: 'Akutban 2-4 hét, Krónikusban 4-6 hét!', note: 'EAU 2025/2026 első választandó szerek a kiváló prosztata-szöveti penetráció miatt' },
            { drug: 'Trimethoprim-sulfamethoxazole (Cotrimoxazol)', dose: '2x960mg PO', duration: '4-6 hét', note: 'Alternatív választás krónikus prostatitisben' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1x2g IV', duration: 'A láztalanságig, majd orális váltás', note: 'Súlyos akut prostatitis esetén' },
            { drug: 'Piperacillin/tazobactam', dose: '3x4.5g IV', duration: 'A láztalanságig', note: 'Szeptikus vagy nozokomiális esetben' }
          ]
        },
        targeted: 'Antibiogram alapján igazítandó. EAU 2025/2026: A gyógyszerelést a prosztatastroma jó lipid-oldékony penetrációja szerint kell kiválasztani (Fluorokinolonok, Cotrimoxazol, Doxycyclin).',
        supportive: [
          'Nem gyógyszeres terápia / Vizelet elvezetés: Akut vizeletretenció esetén SUPRAPUBICUS KATÉTER (Cystostoma) behelyezése kötelező! Transurethralis katéter behelyezése AKUT PROSTATITISBEN KERÜLENDŐ, mert súlyosbítja a gyulladást és bakterémiát okozhat.',
          'Alfa-1 adrenoreceptor blokkolók (pl. Tamsulosin 0.4mg PO qd vagy Silodosin 8mg PO qd) adása a prosztatanyak ellazítására, a vizeletáramlás megkönnyítésére és a fájdalom csökkentésére.',
          'Gyulladás- és fájdalomcsillapítás: NSAID (Ibuprofen 3x400mg PO vagy Celecoxib) 2-4 hétig.',
          'Meleg ülőfürdő (38-40°C), gáttáji terhelés csökkentése (speciális lyukas ülőpárna használata).',
          'Székrekedés megelőzése (székletlágyítók), bőséges folyadékbevitel.'
        ],
        prevention: [
          'Húgyúti fertőzések korai, teljes kezelése.',
          'EAU 2025/2026 ajánlás prosztata biopszia előtt: Célzott rectalis törlet alapú profilaxis, vagy Ceftriaxon / Fosfomycin profilaxis (Fluorokinolon monoterápia kerülendő a magas rezisztencia miatt!).'
        ]
      },
      prognosis: {
        mortality: 'Akut esetben alacsony megfelelő terápia mellett, de urosepsis alakulhat ki; Krónikus esetben a mortalitás nulla, de az életminőséget jelentősen rontja',
        factors: 'Prosztat Tályog kialakulása, biofilm képződés, CPPS-be való átmenet'
      }
    },
    {
      id: 'asymptomatic_bacteriuria',
      name: 'Aszimptomatikus bakteriuria (ASB)',
      pathogen: { type: 'Baktérium', name: '<i>Escherichia coli, Enterococcus faecalis, Klebsiella, Proteus, Streptococcus agalactiae (GBS)</i>', gram: 'Vegyes', shape: 'Vegyes' },
      epidemiology: {
        incidence: 'Egészséges nők: 3-5%, Cukorbetegek: 9-27%, Idős otthoni lakók: 25-50%, Tartós katéteresek: 100%',
        risk_groups: ['Idősek', 'Cukorbetegek', 'Hólyagkatétert viselők', 'Terhes nők', 'Gerincvelő-sérültek'],
        seasonality: 'Nincs',
        transmission: 'Endogén uropathogén kolonizáció'
      },
      pathomechanism: {
        steps: [
          'Kommensalis kolonizáció: Alacsony virulenciájú baktériumtörzsek (melyekből hiányoznak a P-fimbriák és hemolizinek) kolonizálják a hólyagot anélkül, hogy szöveti inváziót vagy gyulladásos kaszkádot indítanának el.',
          'Immun-tolerancia: A gazdaszervezet immunrendszere és a baktériumok között stabil egyensúlyi állapot alakul ki.',
          'Protektív protekció: A kolonizáló avirulens törzsek jelenléte megelőzheti a virulensebb, agresszív felülfertőző kórokozók megtelepedését!'
        ],
        virulence_factors: ['Hiányzó vagy csökkent virulenciafaktorok (fimbria-hiány)']
      },
      clinical: {
        incubation: '-',
        onset: 'Tünetmentes',
        symptoms: [
          { name: 'Klinikai tünetek teljes HIÁNYA', description: 'A betegnek SEMMILYEN alsó vagy felső húgyúti panaszai (nincs dysuria, nincs pollakisuria, nincs láz, nincs deréktáji fájdalom) nincsenek. A bakteriuria kizárólag szűrővizsgálat vagy egyéb okból végzett vizeletvizsgálat melléklelete.', severity: 'mild' }
        ],
        physical_exam: [
          'Teljesen negatív fizokális lelet',
          'A zavaros vagy bűzös vizelet ÖNMAGÁBAN NEM tünet és NEM képez diagnosztikai vagy kezelési indikációt! (EAU 2025/2026)',
          'Nincs suprapubicus vagy vesetáji nyomásérzékenység'
        ],
        complications: ['Indokolatlan antibiotikum használat -> Multidrog-rezisztencia és Clostridioides difficile colitis kialakulása!', 'Pyelonephritis és koraszülés kockázata TERHESSÉGBEN (ezért terhesekben kezelendő!)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Vizelet tenyésztés (EAU 2025/2026)', finding: 'Nőkben: ≥10^5 CFU/ml ugyanazon baktériumfajjal 2 EGYMÁST KÖVETŐ tiszta középsugár vizeletmintában; Férfiakban: ≥10^5 CFU/ml 1 tiszta középsugár mintában', interpretation: 'Szigorú diagnosztikus kritérium aszimptomatikus esetben' },
          { test: 'Katéteres vizeletminta', finding: '≥10^5 CFU/ml 1 mintában', interpretation: 'Bakteriuria jelenléte' },
          { test: 'Vizelet üledék', finding: 'Pyuria gyakran jelen van', interpretation: 'A pyuria jelenléte önmagában NEM INDOKOLJA az antibiotikum adását tünetmentes betegnél! (EAU 2025/2026)' }
        ],
        imaging: [
          { test: 'Képalkotás nem indikált', finding: 'Nincs javallat', interpretation: 'Kizárólag tünetmentes esetben nem végzendő' }
        ],
        microbiology: [
          { test: 'Vizelet tenyésztés szűrés', finding: 'Kizárólag indokolt betegcsoportban szűrendő', significance: 'KIZÁRÓLAG Terhességben és nyálkahártya-sérüléssel járó urológiai műtétek előtt szűrendő!' }
        ]
      },
      differential: [
        { disease: 'Symptomaticus cystitis / pyelonephritis', distinguishing: 'Subjektív panaszok (dysuria, urgencia) vagy szisztémás tünetek (láz) jelenléte' },
        { disease: 'Vizeletminta kontamináció', distinguishing: 'Alacsonyabb csíraszám (<10^5 CFU/ml), vegyes flóra' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'NINCS ANTIBIOTIKUM KEZELÉS (DO NOT TREAT)', dose: '-', duration: '-', note: 'EAU 2025/2026 szigorú ajánlás: NEM KEZELENDŐ! (Kivételt képez a terhesség és az urológiai műtét)' }
          ],
          inpatient: [
            { drug: 'NINCS ANTIBIOTIKUM KEZELÉS (DO NOT TREAT)', dose: '-', duration: '-', note: 'Nincs kezelési indikáció idős, cukorbeteg, katéteres vagy transzplantált betegeknél sem' }
          ]
        },
        targeted: 'KIZÁRÓLAGOS KEZELÉSI INDIKÁCIÓK (EAU 2025/2026):\n1) TERHES NŐK: Szűrendő a 12-16. héten. Kezelendő célzottan tenyésztés alapján (Fosfomycin 3g 1x, Nitrofurantoin 2x100mg 5 nap, Cefalexin vagy Amoxicillin-clavulanat 5-7 nap) a pyelonephritis és koraszülés megelőzésére.\n2) NYÁLKAHÁRTYA-SÉRÜLÉSSEL JÁRÓ UROLÓGIAI MŰTÉTEK ELŐTT (pl. TURP, ureteroscopia): A beavatkozás előtt célzott antibiotikum adandó.\nTILOS KEZELNI: Postmenopauzális nőkben, cukorbetegekben, tartós katéteresekben, időskorúakban, gerincvelő-sérültekben!',
        supportive: [
          'Nem gyógyszeres terápia / Edukáció: A beteg és a szakápolók tájékoztatása, hogy a vizelet szaga, színe vagy zavarossága önmagában nem fertőzés és nem igényel antibiotikumot.',
          'Bőséges folyadékfogyasztás, a hólyag rendszeres kiürítése.',
          'A felesleges vizelet-szűrőtesztek leállítása a nem indikált betegcsoportokban.'
        ],
        prevention: [
          'Az indokolatlan vizeletvizsgálatok és tenyésztések KERÜLÉSE.',
          'A hólyagkatéterek mielőbbi eltávolítása.',
          'Megfelelő higiéné és hidráció.'
        ]
      },
      prognosis: {
        mortality: 'Az aszimptomatikus bakteriuria nem növeli a mortalitást, kezelése kifejezetten káros a szövődmények és rezisztencia miatt',
        factors: 'Terhességben kezeletlenül pyelonephritishez és koraszüléshez vezethet'
      }
    }
  ]
};
