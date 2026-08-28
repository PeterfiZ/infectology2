import { Category } from '../types';

export const urinaryTractDe: Category = {
  name: 'Harnwegsinfektionen',
  icon: '🚽',
  color: '#3b82f6',
  didactics: {
    overview: 'Der Goldstandard für die klinische Klassifikation von Harnwegsinfektionen (HWI) basiert auf den EAU-Leitlinien 2026 (European Association of Urology Guidelines on Urological Infections), ergänzt durch die nordamerikanische IDSA-Klassifikation (mit Anmerkung: nach IDSA-Klassifikation). Die EAU 2026 unterteilt Harnwegsinfektionen nach anatomischer Lokalisation, klinischer Schwere und dem ORENUC-Wirtsrisikofaktorensystem (unkomplizierte Zystitis, unkomplizierte Pyelonephritis, komplizierte HWI / cUTI, Urosepsis, Urethritis, Infektionen des männlichen Genitaltrakts und asymptomatische Bakteriurie). Gemäß IDSA-Klassifikation wird die cUTI durch systemische Symptome, Beteiligung des oberen Harntrakts, Obstruktion oder Wirtsfaktoren definiert, welche das Risiko für Therapieversagen und Multiresistenz erhöhen.',
    lower: 'Untere HWI (Zystitis): Akute Dysurie, Pollakisurie, imperativer Harndrang, suprapubischer Druckschmerz OHNE systemische Zeichen (Fieber, Flankenschmerz). Eine Urinkultur ist laut EAU 2026 und IDSA bei sporadischer unkomplizierter Zystitis nicht routinemäßig erforderlich.',
    upper: 'Obere HWI (Pyelonephritis): Fieber (>38°C), Schüttelfrost, Flankenschmerz/Klopfschmerz im Nierenlager (Giordano-Zeichen), Übelkeit/Erbrechen. Urinkultur ist obligat; bei Symptompersistenz über 48–72h unter adäquater Antibiose ist eine dringende Bildgebung (Sonographie/CT) zum Ausschluss von Obstruktion oder Abszess indiziert.',
    diagnostics: [
      '1) Klinische Anamnese und Risikostratifizierung (EAU ORENUC-System; Erfassung von Fieber, Flankenschmerz und Sepsiszeichen)',
      '2) Urinstreifentest und Urinsediment (Leukozytenesterase, Nitrit, Nachweis von Pyurie)',
      '3) Urinkultur und Antibiogramm (obligat bei Pyelonephritis, cUTI, Schwangerschaft, Männern und Rezidiven innerhalb von 2-4 Wochen)',
      '4) Entzündungsparameter (Blutbild, CRP, Procalcitonin) und Nierenretentionswerte bei systemischen Symptomen',
      '5) Nieren-/Becken-Sonographie oder Kontrastmittel-CT bei Verdacht auf Obstruktion, Konkremente, Abszesse oder Therapieversagen'
    ],
    red_flags: [
      'Zeichen einer Sepsis / septischer Schock (Hypotonie, Tachykardie, Tachypnoe, Oligurie, Laktatanstieg)',
      'Akute Obstruktion des Harntrakts (Harnstein, Prostatahyperplasie) mit Fieber – ERFORDERT SOFORTIGE notfallmäßige Entlastung (Source Control)!',
      'Febrile Pyelonephritis oder asymptomatische Bakteriurie in der Schwangerschaft',
      'Fehlende orale Verträglichkeit (schweres Erbrechen, Dehydratation)',
      'Persistierendes Fieber oder klinische Verschlechterung >48–72h unter gezielter Antibiotikatherapie'
    ],
    special_populations: 'Ältere Patienten: präsentieren sich oft mit atypischer Symptomatik (Delir, Verwirrtheit, Stürze) – gründliche Diagnostik erforderlich, aber KEINE Antibiose bei asymptomatischer Bakteriurie (ASB)! Schwangere: ASB und HWI müssen zwingend gescreent und behandelt werden. Männer: HWI gelten gemäß EAU und IDSA grundsätzlich als potenziell kompliziert mit Prostata-Beteiligung.',
    teaching_tip: 'Antibiotic-Stewardship-Grundsatz: Fluorchinolone (Ciprofloxacin, Levofloxacin) und orale Cephalosporine der 3. Generation sollten bei unkomplizierter Zystitis gemäß EAU 2026 und IDSA STRENG VERMIEDEN werden (Gefahr schwerer Kollateralschäden und Resistenzselektion)!'
  },
  tables: [
    {
      title: 'HWI-Leitlinienklassifikation: EAU 2026 vs. IDSA-Leitlinien',
      headers: ['Klinische Kategorie', 'EAU 2026 Klassifikation & Kriterien (Primärstandard)', 'IDSA Klassifikation & Definitionen (Mit Anmerkung: nach IDSA)', 'Erstlinien-Therapiestrategie'],
      rows: [
        [
          '<strong>Unkomplizierte Zystitis<br/>(Uncomplicated Cystitis)</strong>',
          'Akute, sporadische oder rezidivierende Zystitis bei nicht-schwangeren, prämenopausalen Frauen ohne urologische Anomalien oder Komorbiditäten (ORENUC: O/R-Kategorie).',
          'Akute Harnblasenentzündung bei gesunden Frauen; Entzündung auf Blasenschleimhaut begrenzt ohne systemische Zeichen.',
          'Fosfomycin-Trometamol (1x3g PO), Nitrofurantoin (2x100mg PO für 5 Tage) oder Pivmecillinam (3x400mg PO für 3-5 Tage). Chinolone meiden!'
        ],
        [
          '<strong>Unkomplizierte Pyelonephritis<br/>(Uncomplicated Pyelonephritis)</strong>',
          'Nierenparenchym-Infektion bei nicht-schwangeren Frauen mit unauffälligem Harntrakt. Leitsymptome: Fieber (>38°C), Schüttelfrost, Flankenschmerz.',
          'Nierenparenchym-Infektion mit systemischen Symptomen ohne anatomische Obstruktion oder schwere Begleiterkrankungen.',
          'Ambulant: Cefuroximaxetil oder Cefpodoxim (Cipro/Levofloxacin nur bei lokaler E.-coli-Resistenz <10%). Stationär: Ceftriaxon 1x1-2g IV oder Cefotaxim.'
        ],
        [
          '<strong>Komplizierte HWI (cUTI)<br/>(Complicated UTI)</strong>',
          'Jede HWI mit ORENUC-Wirtsrisikofaktoren: männliches Geschlecht, Schwangerschaft, urologische Anomalie (U), Katheter/Fremdkörper (C), nephrologische (N) oder extra-urogenitale (E) Faktoren.',
          '<em>Mit Anmerkung: nach IDSA-Klassifikation:</em> Infektion über die Blase hinaus mit systemischen Symptomen (Fieber, Schüttelfrost, Delir, Instabilität), oberer HWI oder Urosepsis, UND/ODER strukturellen/funktionellen Anomalien, Fremdkörpern oder Immunsuppression.',
          'Sofortige Herdsanierung (Katheterwechsel, Obstruktionsbeseitigung) + Breitband-/gezielte IV-Therapie (Ceftriaxon, Piperacillin/Tazobactam, Cefepim, Meropenem).'
        ],
        [
          '<strong>Katheter-assoziierte HWI<br/>(CAUTI)</strong>',
          'Symptomatische Infektion bei Patienten mit Dauerkatheter, Zystostomie oder Nephrostomie (EAU Catheter-Kategorie). Biofilmbildung.',
          '<em>Mit Anmerkung: nach IDSA-Klassifikation:</em> Symptomatische HWI bei liegendem Blasenkatheter oder innerhalb von 48h nach Entfernung mit signifikanter Bakteriurie (≥10³ KBE/ml).',
          'Unverzügliche Entfernung oder aseptischer Wechsel des Dauerkatheters vor Beginn der gezielten antibiotischen Therapie.'
        ],
        [
          '<strong>Asymptomatische Bakteriurie<br/>(ASB)</strong>',
          'Signifikante Bakterienzahl (≥10⁵ KBE/ml) ohne Symptome. Antibiotikatherapie ist streng kontraindiziert (Ausnahme: Schwangerschaft und urologische Schleimhaut-Eingriffe).',
          '<em>Mit Anmerkung: nach IDSA-Klassifikation:</em> Nachweis von ≥10⁵ KBE/ml bei asymptomatischen Personen (2 aufeinanderfolgende Proben bei Frauen, 1 bei Männern). Screening/Therapie schädlich und zu unterlassen.',
          'NICHT BEHANDELN! Ausnahmen: 1) Schwangerschaft (Screening in SSW 12-16 und Therapie), 2) Vor invasiven urologischen Eingriffen mit Schleimhautblutung.'
        ],
        [
          '<strong>Männliche Genitalinfektionen<br/>(Prostatitis, Epididymitis)</strong>',
          'EAU-Kategorien: NIH Typ I (Akut bakteriell), NIH Typ II (Chronisch bakteriell), NIH Typ III (CPPS), NIH Typ IV (Asymptomatisch). Epididymitis.',
          '<em>Mit Anmerkung: nach IDSA-Klassifikation:</em> Alle Harnwegsinfektionen bei Männern gelten per se als kompliziert mit potenzieller Prostata-Beteiligung.',
          'Prostatagängige Antibiotika: Fluorchinolone (Ciprofloxacin, Levofloxacin) oder Cotrimoxazol für 2-4 Wochen (akut) bzw. 4-6 Wochen (chronisch).'
        ]
      ]
    }
  ],
  diseases: [
    {
      id: 'uti_classification',
      name: 'Klassifikation der Harnwegsinfektionen & Leitlinien (EAU 2026 & IDSA)',
      didactics: {
        overview: 'Die moderne Klassifikation von Harnwegsinfektionen (HWI) basiert auf internationalen evidenzbasierten Leitlinien: Den primären klinischen Standard bildet die EAU 2026 (European Association of Urology Guidelines on Urological Infections), ergänzt durch die nordamerikanische IDSA (Infectious Diseases Society of America) Praxisleitlinie. Die präzise Klassifikation ist entscheidend für Antibiotic Stewardship, gezielte Diagnostik und die Verhinderung lebensbedrohlicher Komplikationen (Urosepsis, Pyonephrose, Nierenabszess).',
        sections: [
          {
            title: '1. Primäre Klassifikation gemäß EAU 2026 Leitlinie',
            icon: '🇪🇺',
            badge: 'EAU 2026 Primärstandard',
            content: 'Die EAU 2026 gliedert Harnwegsinfektionen nach anatomischer Lokalisation, klinischer Schwere und prädisponierenden Wirtsfaktoren in 7 Hauptentitäten:',
            items: [
              {
                label: '1) Unkomplizierte Zystitis (Uncomplicated Cystitis)',
                text: 'Akute Infektion der unteren Harnwege bei nicht-schwangeren, prämenopausalen Frauen ohne bekannte urologische Anomalien oder Begleiterkrankungen. Leitsymptome: Dysurie, Pollakisurie, Harndrang, suprapubischer Schmerz OHNE Fieber. Urinkultur routinemäßig nicht erforderlich.'
              },
              {
                label: '2) Unkomplizierte Pyelonephritis (Uncomplicated Pyelonephritis)',
                text: 'Akute Infektion des Nierenparenchyms bei nicht-schwangeren Frauen mit anatomisch normalem Harntrakt. Leitsymptome: Fieber (>38°C), Schüttelfrost, Flankenschmerz, positives Giordano-Zeichen. Urinkultur stets obligat!'
              },
              {
                label: '3) Komplizierte Harnwegsinfektion (Complicated UTI - cUTI)',
                text: 'Alle Infektionen mit erhöhtem Risiko für Komplikationen, Therapieversagen oder resistente Erreger: Infektionen bei Männern, Schwangeren, anatomischen/funktionellen Veränderungen (Obstruktion, Stein, Striktur, VUR), Fremdkörpern oder schweren Grunderkrankungen (Diabetes, Immunsuppression, CKD).'
              },
              {
                label: '4) Urosepsis',
                text: 'Lebensbedrohliche Organdysfunktion infolge einer dysregulierten Wirtsantwort auf eine HWI (SOFA-Score-Anstieg ≥2 Punkte, qSOFA, Hypotonie, Laktatanstieg). Erfordert sofortige Herdsanierung und intensivmedizinische Notfalltherapie.'
              },
              {
                label: '5) Urethritis (Harnröhrenentzündung)',
                text: 'Entzündung der Urethraschleimhaut, meist durch sexuell übertragbare Erreger (N. gonorrhoeae, C. trachomatis, Mycoplasma genitalium, Trichomonas vaginalis).'
              },
              {
                label: '6) Infektionen des männlichen Genitaltrakts',
                text: 'Bakterielle Prostatitis: NIH Typ I (Akut bakteriell), NIH Typ II (Chronisch bakteriell), NIH Typ III (Chronisches Beckenschmerzsyndrom - CPPS), NIH Typ IV (Asymptomatisch entzündlich). Zudem akute Epididymitis, Orchitis und Epididymoorchitis.'
              },
              {
                label: '7) Asymptomatische Bakteriurie (ASB)',
                text: 'Signifikante Bakterienzahl (≥10⁵ KBE/ml) ohne klinische Symptome. Therapie streng KONTRAINDIZIERT, außer in der Schwangerschaft und vor Schleimhaut-traumatisierenden urologischen Eingriffen.'
              }
            ]
          },
          {
            title: '2. EAU ORENUC Wirtsrisikofaktoren-Klassifikationssystem',
            icon: '📊',
            badge: 'EAU Risikostratifizierung',
            content: 'Das EAU ORENUC-System strukturiert Patienten nach prädisponierenden Faktoren und klinischer Gefährdung:',
            items: [
              {
                label: 'O (No known risk factors)',
                text: 'Keine bekannten Risikofaktoren – prämenopausale, nicht-schwangere gesunde Frauen (unkomplizierte Infektionen).'
              },
              {
                label: 'R (Recurrent UTI risk factors)',
                text: 'Risikofaktoren für rezidivierende Zystitis: sexuelle Aktivität, Spermizidgebrauch, postmenopausaler Östrogenmangel, Z.n. rezidivierenden HWI.'
              },
              {
                label: 'E (Extra-urogenital risk factors)',
                text: 'Systemische extra-urogenitale Risiken: schlecht eingestellter Diabetes mellitus, Immunsuppression, systemische Autoimmunerkrankungen, Schwangerschaft.'
              },
              {
                label: 'N (Nephrological risk factors)',
                text: 'Nephrologisches Risiko: chronische Niereninsuffizienz (CKD), polyzystische Nierenerkrankung, Nierentransplantation.'
              },
              {
                label: 'U (Urological risk factors)',
                text: 'Urologische anatomische oder funktionelle Anomalien: Harntraktobstruktion, Urolithiasis, neurogene Blasenstörung, vesikoureteraler Reflux (VUR), Harnröhrenstriktur.'
              },
              {
                label: 'C (Catheter & Foreign body)',
                text: 'Dauerkatheter und Devices: transurethraler Dauerkatheter (CAUTI), Doppel-J-Ureterstent, Nephrostomie, Zystostomie.'
              }
            ]
          },
          {
            title: '3. IDSA-Klassifikation & Definitionen (Mit Anmerkung: nach IDSA-Klassifikation)',
            icon: '🇺🇸',
            badge: 'Mit Anmerkung: nach IDSA',
            content: 'Die Praxisleitlinien der IDSA (Infectious Diseases Society of America) definieren und differenzieren Harnwegsinfektionen nach folgenden Kriterien:',
            items: [
              {
                label: 'IDSA cUTI Definition',
                text: '<em>(Mit Anmerkung: nach IDSA-Klassifikation)</em> Eine komplizierte HWI (cUTI) ist definiert als eine Infektion, die über die Harnblase hinausgeht und mit systemischen Manifestationen (Fieber, Schüttelfrost, Tachykardie, Delir, Hypotonie), oberer Harntraktbeteiligung (Pyelonephritis) oder Urosepsis einhergeht, UND/ODER bei der strukturelle/funktionelle Veränderungen oder Wirtsfaktoren (Obstruktion, Fremdkörper, männliches Geschlecht, Immunsuppression) vorliegen, die das Risiko für Therapieversagen oder resistente Erreger erhöhen.'
              },
              {
                label: 'IDSA cUTI mit systemischen Zeichen ohne Obstruktion',
                text: '<em>(Mit Anmerkung: nach IDSA-Klassifikation)</em> Febrile Infektionen mit systemischen Zeichen bei unauffälliger Anatomie oder internistischen Grunderkrankungen (z.B. diabetische Pyelonephritis).'
              },
              {
                label: 'IDSA cUTI mit Obstruktion oder Fremdkörper',
                text: '<em>(Mit Anmerkung: nach IDSA-Klassifikation)</em> Infektionen bei Urolithiasis, Tumor, Striktur oder Stent, bei denen eine dringliche urologische Dekompression (Source Control) obligat ist.'
              },
              {
                label: 'IDSA CAUTI Leitlinie',
                text: '<em>(Mit Anmerkung: nach IDSA-Klassifikation)</em> Katheter-assoziierte HWI: symptomatische Infektion bei Patienten mit liegendem Blasenkatheter oder innerhalb von 48h nach Katheterentfernung mit signifikanter Bakteriurie (≥10³ KBE/ml).'
              },
              {
                label: 'IDSA ASB Leitlinie',
                text: '<em>(Mit Anmerkung: nach IDSA-Klassifikation)</em> Asymptomatische Bakteriurie: Nachweis von ≥10⁵ KBE/ml in 2 aufeinanderfolgenden Mittelstrahlurinen bei Frauen bzw. 1 Probe bei Männern/Katheterisierten. IDSA empfiehlt nachdrücklich: kein Screening und keine Therapie, außer in der Schwangerschaft und vor Eingriffen mit Schleimhautblutung.'
              },
              {
                label: 'HWI bei Männern laut IDSA',
                text: '<em>(Mit Anmerkung: nach IDSA-Klassifikation)</em> Alle Harnwegsinfektionen bei erwachsenen Männern werden von der IDSA grundsätzlich als kompliziert eingestuft.'
              }
            ]
          },
          {
            title: '4. Diagnostische und mikrobiologische Grenzwerte',
            icon: '🔬',
            badge: 'Klinische Mikrobiologie',
            content: 'Grenzwerte für signifikante Bakteriurie nach EAU 2026 und IDSA:',
            items: [
              {
                label: 'Akute unkomplizierte Zystitis bei Frauen',
                text: '≥10³ KBE/ml Uropathogen im Mittelstrahlurin.'
              },
              {
                label: 'Akute unkomplizierte Pyelonephritis bei Frauen',
                text: '≥10⁴ KBE/ml Uropathogen im Mittelstrahlurin.'
              },
              {
                label: 'Komplizierte HWI (cUTI) / Männer',
                text: '≥10⁵ KBE/ml bei Frauen; ≥10⁴ KBE/ml bei Männern oder katheterisierten Proben.'
              },
              {
                label: 'Einmalkatheterurin',
                text: '≥10² KBE/ml gilt als klinisch signifikant.'
              },
              {
                label: 'Asymptomatische Bakteriurie (ASB)',
                text: '≥10⁵ KBE/ml (2 konsekutive Proben bei Frauen, 1 Probe bei Männern).'
              }
            ]
          }
        ],
        teaching_tip: [
          '<strong>EAU 2026 & IDSA Kernaussage:</strong> Trüber oder übelriechender Urin sowie eine isolierte Pyurie ohne klinische Symptome stellen KEINE Infektion dar und rechtfertigen KEINE Antibiotikatherapie!',
          '<strong>Fluorchinolon-Einschränkung:</strong> Bei unkomplizierter Zystitis ist der Einsatz von Fluorchinolonen (Ciprofloxacin, Levofloxacin) nach EAU 2026 und IDSA streng kontraindiziert.'
        ]
      },
      pathogen: {
        type: 'Leitliniensynthese',
        name: 'EAU 2026 Guidelines on Urological Infections & IDSA cUTI/ASB Guidelines',
        gram: 'Standard',
        shape: 'Klinischer Algorithmus'
      }
    },
    {
      id: 'cystitis',
      name: 'Akute unkomplizierte Zystitis (Blasenentzündung)',
      pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (75-95%)', gram: 'Gram-negativ', shape: 'Stäbchen' },
      epidemiology: {
        incidence: '50% aller Frauen mindestens einmal im Leben, 20-30% Rezidivrisiko',
        risk_groups: ['Sexuell aktive prämenopausale Frauen (EAU ORENUC: O/R)', 'Postmenopausale Frauen (Östrogenmangel)', 'Schwangerschaft', 'Neuer Sexualpartner oder Spermizide-Nutzung'],
        seasonality: 'Keine',
        transmission: 'Aufsteigende (aszendierende) Infektion aus der Perineal- und Periurethralflora'
      },
      pathomechanism: {
        steps: [
          'Kolonisation: Uropathogene Darmbakterien (UPEC) besiedeln den periurethralen Bereich und den Vaginaleingang.',
          'Aufstieg: Bakterien steigen über die kurze weibliche Urethra in die Harnblase auf.',
          'Adhärenz und Invasion: Bakterien haften mittels Typ-1- und P-Fimbrien an Uroplakin-Molekülen des Blasenurothels und bilden intrazelluläre bakterielle Gemeinschaften (IBC).',
          'Entzündungsreaktion: Die Bakterien und Toxine lösen eine heftige Schleimhautentzündung, Hyperämie, Ödematisierung und Reizung der Blasennerven aus.'
        ],
        virulence_factors: ['Typ-1- und P-Fimbrien (Adhärenz)', 'Hämolysin (Urothel-Schädigung)', 'Aerobactin (Eisengewinnung)']
      },
      clinical: {
        incubation: '1-3 Tage',
        onset: 'Akut, plötzlicher Beginn',
        symptoms: [
          { name: 'Dysurie', description: 'Brennendes, stechendes Gefühl während und am Ende des Wasserlassens.', severity: 'moderate' },
          { name: 'Pollakisurie', description: 'Häufiges Entleeren kleiner Urinmengen aufgrund gesteigerter Reizbarkeit der Blasenwand.', severity: 'moderate' },
          { name: 'Harndrang (Urgency)', description: 'Plötzlicher, zwingender Harndrang, der schwer zu unterdrücken ist.', severity: 'moderate' },
          { name: 'Suprapubischer Schmerz', description: 'Druck, dumpfer Schmerz oder krampfartige Beschwerden über dem Schambein.', severity: 'mild' },
          { name: 'Terminale Hämaturie', description: 'Makroskopisch blutiger Urin am Ende der Miktion (~30% der Fälle).', severity: 'mild' },
          { name: 'Fehlen von Fieber', description: 'Systemische Zeichen (Fieber, Schüttelfrost, Flankenschmerz) FEHLEN. Wenn Fieber auftritt, liegt eine Pyelonephritis nahe!', severity: 'mild' }
        ],
        physical_exam: [
          'Suprapubische Druckempfindlichkeit bei Unterbauchpalpation',
          'Fieber UND Flankenschmerz/Nierenlagerklopfschmerz FEHLEN (Giordano-Zeichen negativ)',
          'Kein vaginaler Fluor oder Irritation (Ausschluss von Vaginitis)',
          'Normale Vitalparameter (keine Tachykardie, keine Hypotonie)'
        ],
        complications: ['Aszendierende akute Pyelonephritis', 'Rezidivierende Zystitis (rUTI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinstreifentest', finding: 'Leukozytenesterase+, Nitrit+ (bei Gram-negativen Stäbchen)', interpretation: 'Hoher positiver Vorhersagewert (>90%) bei typischer Klinik' },
          { test: 'Urinsediment', finding: 'Pyurie (>10 Leukozyten/GF), Leukozytenhaufen, keine Leukozytenzylinder', interpretation: 'Beweist Entzündung der unteren Harnwege' }
        ],
        imaging: [
          { test: 'Bildgebung nicht indiziert', finding: 'Bei unkomplizierter Zystitis nicht indiziert', interpretation: 'Nur bei atypischem Verlauf oder Komplikationen' }
        ],
        microbiology: [
          { test: 'Urinkultur (EAU 2026 / IDSA)', finding: '≥10^3 KBE/ml Uropathogene', significance: 'Bei unkomplizierter Zystitis routinemäßig NICHT erforderlich! Indikationen: V.a. Pyelonephritis, Rezidiv <2-4 Wochen, Schwangerschaft.' }
        ]
      },
      differential: [
        { disease: 'Vaginitis / Vulvovaginitis', distinguishing: 'Vaginaler Fluor, Juckreiz, Dysurie eher als äußeres Brennen empfunden' },
        { disease: 'Urethritis (STD - Chlamydien, Gonorrhoe, Mykoplasmen)', distinguishing: 'Schleichender Beginn, neuer Sexualpartner, urethraler Ausfluss, sterile Pyurie' },
        { disease: 'Interstitielle Zystitis / Blasenschmerzsyndrom', distinguishing: 'Chronische Schmerzen (>6 Wochen) bei voller Blase, sterile Urinkulturen' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fosfomycin-Trometamol', dose: '3g PO', duration: 'Einmaldosis', note: 'EAU 2026 und IDSA First-Line-Präparat' },
            { drug: 'Nitrofurantoin', dose: '100mg PO 2x tgl. (Makrokristalle)', duration: '5 Tage', note: 'EAU 2026 und IDSA First-Line-Präparat' },
            { drug: 'Pivmecillinam', dose: '400mg PO 3x tgl.', duration: '3-5 Tage', note: 'EAU 2026 First-Line-Präparat' },
            { drug: 'Nitroxolin', dose: '250mg PO 3x tgl.', duration: '5 Tage', note: 'EAU 2026 akzeptierte Alternative' }
          ],
          inpatient: [
            { drug: 'Stationäre Aufnahme nicht indiziert', dose: '-', duration: '-', note: 'Außer bei schweren Komorbiditäten oder Komplikationen' }
          ]
        },
        targeted: 'Anpassung nach Urinkultur. EAU 2026 & IDSA Warnung: Fluorchinolone (Ciprofloxacin, Levofloxacin) und orale 3. Gen. Cephalosporine sind EMPIRISCH BEI UNKOMPLIZIERTER ZYSTITIS STRENG ZU MEIDEN (Kollateralschäden und Resistenzselektion)!',
        supportive: [
          'Nicht-medikamentöse Therapie: Reichliche Flüssigkeitszufuhr (mind. 2.0-2.5 Liter Wasser/Tag zur mechanischen Erregerausschwemmung).',
          'Regelmäßige, vollständige Blasenentleerung; kein Hinauszögern der Miktion.',
          'Symptomatische Schmerzlinderung: NSAR (z.B. Ibuprofen 3x400mg PO für 3-5 Tage) kann bei leichten/moderaten Beschwerden im Sinne des Antibiotic Stewardship erwogen werden.',
          'Wärmeanwendung im Unterbauchbereich (Wärmflasche) zur Linderung von Blasenspasmen.',
          'Phytotherapie: Bärentraubenblätterextrakt (Uvae ursi folium) kann kurzfristig Symptome lindern.'
        ],
        prevention: [
          'Verhaltensmaßnahmen: Ausreichende Trinkmenge (>2L/Tag), Miktion post coitum (innerhalb von 15 Minuten nach dem Geschlechtsverkehr), Meiden von Spermiziden, Wischrichtung von vorne nach hinten.',
          'EAU 2026 Nicht-antibiotische Prophylaxe (Dringend empfohlen bei rUTI):',
          '1) Lokale/vaginale Östrogensubstitution (Estriol-Creme/Zäpfchen): Baut bei postmenopausalen Frauen die schützende Laktobazillenflora wieder auf (Starke EAU-Empfehlung!).',
          '2) Immunprophylaxe / Orale Immunstimulation (OM-89 / Uro-Vaxom®): 1 Kapsel tgl. oral über 3 Monate (Starke EAU-Empfehlung zur rUTI-Prävention!).',
          '3) D-Mannose: 2g/Tag oral verhindert das Anheften von E. coli-Fimbrien an das Urothel.',
          '4) Endovesikale GAG-Schicht-Instillation: Hyaluronsäure + Chondroitinsulfat bei refraktärer rezidivierender Zystitis.',
          '5) Methenaminhippurat: 2x1g/Tag oral bei unauffälliger Anatomie.',
          '6) Probiotika: Vaginales Lactobacillus crispatus.',
          'Antibiotische Prophylaxe (Nur als Ultima Ratio nach Versagen nicht-antibiotischer Maßnahmen): Postkoitale Prophylaxe (Nitrofurantoin 50mg oder Fosfomycin 3g nach Koitus) oder niedrig dosierte Dauerprophylaxe über 3-6 Monate (Nitrofurantoin 50-100mg abends oder Fosfomycin 3g alle 10 Tage).'
        ]
      },
      prognosis: {
        mortality: 'Keine Mortalität',
        factors: 'Rezidivneigung (20-30% entwickeln rezidivierende Infektionen)'
      }
    },
    {
      id: 'pyelonephritis',
      name: 'Akute unkomplizierte Pyelonephritis (Nierenbeckenentzündung)',
      pathogen: { type: 'Bakterium', name: '<i>Escherichia coli</i> (75-80%)', gram: 'Gram-negativ', shape: 'Stäbchen' },
      epidemiology: {
        incidence: '10-12 Fälle / 10.000 Frauen / Jahr; oft Komplikation einer Zystitis',
        risk_groups: ['Junge sexuell aktive Frauen', 'EAU ORENUC: O/R-Gruppe', 'Z.n. früherer Pyelonephritis'],
        seasonality: 'Keine',
        transmission: 'Aszendierende Infektion aus der Blase über die Ureteren (95%), selten hämatogen'
      },
      pathomechanism: {
        steps: [
          'Aszension: Erreger steigen aus der Blase über den Ureter ins Nierenbecken auf (durch vesikoureteralen Reflux begünstigt).',
          'Parenchym-Invasion: Bakterien invadieren Nierenbecken und Parenchym (v.a. Markbereich).',
          'Akute Entzündung: Granulozytäre Infiltration, interstitielles Ödem, Mikroabszesse und Tubulusnekrosen.',
          'Systemische Ausschwemmung: Zytokine (IL-1, IL-6, TNF-alpha) und Endotoxine gelangen ins Blut und verursachen hohes Fieber, Schüttelfrost und Sepsiszeichen.'
        ],
        virulence_factors: ['P-Fimbrien (Pyelonephritis-associated pili, Nierenbindung)', 'LPS-Endotoxin', 'Kapsel (K-Antigen)']
      },
      clinical: {
        incubation: '1-3 Tage nach Zystitis',
        onset: 'Plötzlich, schwerer Beginn',
        symptoms: [
          { name: 'Hohes Fieber und Schüttelfrost', description: 'Plötzlicher Temperaturanstieg (>38.5°C), Schüttelfrost und Schweißausbrüche als Zeichen der Parenchyminfektion.', severity: 'severe' },
          { name: 'Flankenschmerz / Klopfschmerz', description: 'Ein- oder beidseitiger dumpfer Flankenschmerz durch Kapseldehnung der Niere.', severity: 'severe' },
          { name: 'Gastrointestinale Symptome', description: 'Übelkeit, Erbrechen, Inappetenz durch Reizung des Plexus coeliacus und Peritoneums.', severity: 'moderate' },
          { name: 'Symptome der unteren HWI', description: 'Dysurie und Pollakisurie können vorhanden sein, fehlen jedoch in 30-50% der Fälle!', severity: 'moderate' },
          { name: 'Atypische Präsentation im Alter', description: 'Ältere Patienten haben oft kein Fieber; Delir, Verwirrtheit und Hypotonie können führend sein.', severity: 'severe' }
        ],
        physical_exam: [
          'Giordano-Zeichen positiv: Klopfschmerz über dem ipsilateralen Nierenlager/kostovertebralen Winkel',
          'Fieber (>38.5°C), Tachykardie, reduzierter Allgemeinzustand',
          'Mäßiger Druckschmerz im ipsilateralen Oberbauch ohne Abwehrspannung',
          'Dehydratationszeichen (trockene Schleimhäute, stehende Hautfalten)'
        ],
        complications: ['Nierenabszess / perinephritischer Abszess', 'Urosepsis und septischer Schock', 'Emphysematöse Pyelonephritis (Diabetiker)', 'Papillennekrose', 'Akutes Nierenversagen (AKI)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Blutbild', finding: 'Ausgeprägte Leukozytose mit Linksverschiebung', interpretation: 'Systemische bakterielle Infektion' },
          { test: 'CRP und Procalcitonin (PCT)', finding: 'Deutlich erhöht (CRP >100 mg/l, PCT >0.5 ng/ml)', interpretation: 'Zeigt Parenchyminvolvierung und Sepsisrisiko an' },
          { test: 'Nierenretentionswerte & Elektrolyte', finding: 'Kreatinin/Harnstoff-Anstieg, eGFR-Abfall', interpretation: 'Nierenversagen oder Dehydratation' },
          { test: 'Urinsediment', finding: 'Pyurie, Leukozytenzylinder (pathognomonisch für obere HWI!)', interpretation: 'Beweist Nierenparenchymbeteiligung' }
        ],
        imaging: [
          { modality: 'KM-CT Abdomen/Becken (EAU 2026 / IDSA)', finding: 'Keilförmige Minderanreicherung im Parenchym, Nierenvergrößerung, perinephritische Exsudation', significance: 'Goldstandard zum Ausschluss von Komplikationen (Abszess, Obstruktion). Indiziert bei Fieberpersistenz >48-72h.' },
          { modality: 'Nierenultraschall', finding: 'Harnstau, Nierenstein, Abszess', significance: 'Primäre strahlenfreie Bildgebung' }
        ],
        microbiology: [
          { test: 'Urinkultur (EAU 2026 / IDSA)', finding: '≥10^4 KBE/ml Uropathogene', significance: 'IMMER OBLIGAT vor Beginn der Antibiotikagabe!' },
          { test: 'Blutkulturen', finding: 'Bakteriämie (~15-20% positiv)', significance: 'Obligat bei hospitalisierten oder septischen Patienten (2 Sets)' }
        ]
      },
      differential: [
        { disease: 'Urolithiasis (Nierenkolik)', distinguishing: 'Krampfartige Schmerzen, kein Fieber (außer bei infizierter Stase), Hämaturie dominiert' },
        { disease: 'Akute Appendizitis / Cholezystitis', distinguishing: 'Klinischer Befund, keine Leukozytenzylinder im Urin, Ultraschall/CT' },
        { disease: 'Adnexitis / Pelvic Inflammatory Disease (PID)', distinguishing: 'Gynäkologischer Untersuchungsbefund, Fluor' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroximaxetil', dose: '500mg PO 2x tgl.', duration: '7 Tage', note: 'EAU 2026 First-Line orale Cephalosporin-Option' },
            { drug: 'Cefpodoximproxetil', dose: '200mg PO 2x tgl.', duration: '10 Tage', note: 'Oral 3. Gen. Cephalosporin Alternative' },
            { drug: 'Ciprofloxacin', dose: '500mg PO 2x tgl.', duration: '7 Tage', note: 'NUR wenn lokale E.-coli-Resistenz <10%! (EAU 2026 / IDSA)' },
            { drug: 'Levofloxacin', dose: '750mg PO 1x tgl.', duration: '5 Tage', note: 'NUR wenn lokale E.-coli-Resistenz <10%! (EAU 2026 / IDSA)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '1-2g IV 1x tgl.', duration: '10-14 Tage', note: 'EAU 2026 / IDSA First-Line parenteral' },
            { drug: 'Cefotaxim', dose: '2g IV 3x tgl.', duration: '10-14 Tage', note: 'Parenterale Alternative' },
            { drug: 'Piperacillin/Tazobactam', dose: '4.5g IV 3x tgl.', duration: '10-14 Tage', note: 'Bei Pseudomonas-Risiko oder Vortherapie' },
            { drug: 'Gentamicin / Amikacin', dose: 'Single Daily Dose IV', duration: '3-5 Tage', note: 'Kombinationsoption bei schwerer Sepsis' }
          ]
        },
        targeted: 'Anpassung nach Antibiogramm. Bei oraler Betalaktam-Therapie im ambulanten Bereich wird eine initiale parenterale Initialdosis (Ceftriaxon 1g IV) in der Notaufnahme empfohlen!',
        supportive: [
          'Nicht-medikamentöse Therapie: Ausreichende parenterale (Kristalloide) oder orale Rehydratation zur Aufrechterhaltung der Nierenperfusion.',
          'Bettruhe in der akuten fieberhaften Phase.',
          'Analgesie und Antipyrese: Paracetamol (500-1000mg PO/IV) oder Metamizol. NSAR nur vorsichtig unter Nierenfunktionskontrolle.',
          'Antiemetika (Metoclopramid 10mg IV/PO oder Ondansetron 4-8mg IV) zur Ermöglichung oraler Medikation.',
          'Engmaschiges Vitalparameter- und Nierenfunktionsmonitoring.'
        ],
        prevention: [
          'Konsequente, rechtzeitige Behandlung von Zystitiden.',
          'EAU 2026 nicht-antibiotische Präventionsmaßnahmen (Hydratation, OM-89, lokales Östrogen postmenopausal).',
          'Sanierung anatomischer urologischer Anomalien (Steine, Reflux).'
        ]
      },
      prognosis: {
        mortality: '<1% unter adäquater Antibiose, aber 10-20% bei Urosepsis oder emphysematösem Verlauf',
        factors: 'Hohes Alter, Diabetes, Urolithiasis/Harnstau, multiresistente Erreger (MDR/ESBL)'
      }
    },
    {
      id: 'complicated_uti',
      name: 'Komplizierte Harnwegsinfektion (cUTI)',
      pathogen: { type: 'Bakterium', name: '<i>E. coli, Enterococcus faecalis, Pseudomonas aeruginosa, Klebsiella, Proteus, Enterobacter</i>', gram: 'Gemischt', shape: 'Gemischt' },
      epidemiology: {
        incidence: 'Häufig nosokomial, bei urologischen Patienten und Katheterträgern',
        risk_groups: ['EAU ORENUC: E, N, U, C Kategorien', 'Katheterpatienten (CAUTI)', 'Männer (nach IDSA per se kompliziert)', 'Schwangere', 'Anatomische/funktionelle Obstruktion (neurogene Blase, Strikturen)', 'Niereninsuffizienz / Nierentransplantation', 'Immunsuppression / Diabetes'],
        seasonality: 'Keine',
        transmission: 'Aszendierend, Katheter-assoziiert (Biofilm), nosokomial'
      },
      pathomechanism: {
        steps: [
          'Prädisposition: Anatomische (Striktur, Stein, BPH) oder funktionelle (neurogene Blase) Abflusshindernisse oder Fremdkörper (Katheter, Stent) behindern den Urinfluss.',
          'Biofilmbildung: Erreger (v.a. Proteus, Pseudomonas, Enterokokken) bilden dichte Biofilme auf Oberflächen, die sie vor Antibiotika und Immunsystem abschirmen.',
          'Parenchym- und Gefäßinvasion: Durch Stase und Druckanstieg dringen Bakterien rasch ins Gewebe und in die Blutbahn vor (Urosepsis).'
        ],
        virulence_factors: ['Biofilmbildung', 'Multiresistenz (ESBL, AmpC, Carbapenemasen)', 'Ureaseproduktion (Proteus – Infektsteine)']
      },
      clinical: {
        incubation: 'Variabel',
        onset: 'Variabel (von oligosymptomatisch bis fulminant septisch)',
        symptoms: [
          { name: 'Systemische Entzündungszeichen', description: 'Hohes Fieber, Schüttelfrost, Tachykardie, Tachypnoe, schwere Beeinträchtigung des Allgemeinzustands.', severity: 'severe' },
          { name: 'Urosepsis / Septischer Schock', description: 'Hypotonie (RR <90 mmHg), Oligurie (<0.5 ml/kg/h), Delir, Laktatanstieg – NOTFALLMASSNAHMEN erforderlich!', severity: 'severe' },
          { name: 'Flanken- / Suprapubischer Schmerz', description: 'Kann vorhanden sein, fehlt jedoch oft bei Katheterträgern oder Querschnittsgelähmten.', severity: 'moderate' },
          { name: 'Symptome der unteren Harnwege', description: 'Dysurie, Pollakisurie oder bei Katheterträgern trüber, fauliger Urin, Katheterobstruktion.', severity: 'moderate' },
          { name: 'Atypische Formen bei Älteren', description: 'Bei geriatrischen Patienten oft nur plötzliche Verwirrtheit (Delir) oder Hypothermie.', severity: 'severe' }
        ],
        physical_exam: [
          'Systemische Zeichen: Fieber oder Hypothermie (<36°C), Tachykardie, Tachypnoe',
          'Klopfschmerz im Nierenlager oder suprapubischer Druckschmerz',
          'Vorhandensein von Blasenkatheter, Zystostomie oder Ureterstent',
          'Schockzeichen: kalte, marmorierte Akren, verlängerte Rekapillarisierungszeit'
        ],
        complications: ['Urosepsis und septischer Schock (Mortalität 20-40%)', 'Akutes Nierenversagen (AKI)', 'Nieren- und Perinephritischer Abszess', 'Pyonephrose bei infizierter Harnstauung']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinkultur (EAU 2026 / IDSA)', finding: 'Frauen: ≥10^5 KBE/ml; Männer/Katheterisierte: ≥10^4 KBE/ml', interpretation: 'MANDATORISCH vor Beginn der Antibiose!' },
          { test: 'Blutkulturen', finding: 'Bakteriämie-Nachweis (2 Sets)', interpretation: 'Obligat bei allen septischen/febrilen Fällen' },
          { test: 'Entzündungs- und Organmarker', finding: 'Procalcitonin (PCT), CRP, Blutbild, Kreatinin, Laktat, BGA', interpretation: 'Sepsis-Monitoring und Organfunktionskontrolle' }
        ],
        imaging: [
          { modality: 'CT-Urographie / KM-CT Abdomen-Becken (EAU 2026 / IDSA)', finding: 'Harntraktobstruktion, Abszess, Stein, emphysematöse Veränderungen', significance: 'OBLIGATORISCH zur Klärung der Ursache und Notwendigkeit einer Dekompression!' },
          { modality: 'Notfall-Ultraschall', finding: 'Harnstau, Pyonephrose, Stein', significance: 'Sofortige Notfalldiagnostik am Krankenbett' }
        ],
        microbiology: [
          { test: 'Resistenztestung', finding: 'Fokus auf MDR-Erreger (ESBL, Pseudomonas)', significance: 'Grundlage der Deeskalation' }
        ]
      },
      differential: [
        { disease: 'Unkomplizierte Pyelonephritis', distinguishing: 'Keine Wirtsrisikofaktoren, normale Anatomie' },
        { disease: 'Akute bakterielle Prostatitis', distinguishing: 'Extrem schmerzhafte Prostata bei DRU' },
        { disease: 'Andere Sepsisherde (Pneumonie, Intraabdominell)', distinguishing: 'Klinik, Bildgebung, Labor' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Cefuroximaxetil', dose: '500mg PO 2x tgl.', duration: '7-14 Tage', note: 'Nur in leichten Fällen ohne systemische Beeinträchtigung' },
            { drug: 'Ciprofloxacin / Levofloxacin', dose: 'PO', duration: '7-14 Tage', note: 'Nur wenn keine Chinolongabe in den letzten 6 Monaten und lokale Resistenz <10% (EAU 2026 / IDSA)' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '2g IV 1x tgl.', duration: '7-14 Tage', note: 'First-Line parenteral' },
            { drug: 'Piperacillin/Tazobactam', dose: '4.5g IV 3x tgl.', duration: '7-14 Tage', note: 'Bei Pseudomonas-Verdacht oder nosokomialer cUTI' },
            { drug: 'Cefepim', dose: '2g IV 2x tgl.', duration: '7-14 Tage', note: 'Pseudomonas- und Enterobakterien-Abdeckung' },
            { drug: 'Meropenem', dose: '1g IV 3x tgl.', duration: '7-14 Tage', note: 'Bei ESBL-Risiko oder septischem Schock' },
            { drug: 'Ceftazidim/Avibactam oder Cefiderocol', dose: 'IV', duration: '7-14 Tage', note: 'Bei multiresistenten (MDR) Gram-negativen Erregern (EAU 2026 / IDSA cUTI)' }
          ]
        },
        targeted: 'SOFORTIGE HERDSANIERUNG (Source Control): Die Entlastung gestauter Harnwege (perkutane Nephrostomie oder DJ-Stenteinlage) und der unverzügliche Katheterwechsel sind gemäß EAU 2026 und IDSA cUTI-Leitlinien unverzichtbare Voraussetzungen für den Therapieerfolg!',
        supportive: [
          'Nicht-medikamentöse Herdsanierung: Katheterwechsel unter aseptischen Kautelen vor Antibiosebeginn (beseitigt Biofilmreservoir).',
          'Sepsis-Protokoll: Rasche IV-Volumentherapie (Kristalloide 30 ml/kg in den ersten 3 Stunden) zur Kreislaufstabilisierung.',
          'Vasopressoren (Noradrenalin), wenn der mittlere arterielle Druck (MAP) trotz Volumengabe <65 mmHg bleibt.',
          'Urologische Intervention (Abszessdrainage, Steinentfernung).',
          'Sauerstoffgabe, engmaschiges intensivmedizinisches Monitoring.'
        ],
        prevention: [
          'Strikte Indikationsstellung für Blasenkatheter (sofort entfernen, sobald nicht mehr zwingend nötig!).',
          'Geschlossene Katheterableitungssysteme.',
          'KEINE antibiotische Therapie asymptomatischer Bakteriurien (verhindert Selektion multiresistenter Stämme).',
          'Frühzeitige urologische Korrektur von Obstruktionen.'
        ]
      },
      prognosis: {
        mortality: '20-40% bei Urosepsis und septischem Schock',
        factors: 'Hohes Alter, verzögerte Herdsanierung, multiresistente Erreger, schwere Vorerkrankungen'
      }
    },
    {
      id: 'prostatitis',
      name: 'Akute und chronische bakterielle Prostatitis',
      pathogen: { type: 'Bakterium', name: '<i>E. coli</i> (80%), <i>Klebsiella, Proteus, Pseudomonas aeruginosa, Enterococcus faecalis</i>', gram: 'Gemischt', shape: 'Gemischt' },
      epidemiology: {
        incidence: '10-15% Lebenszeitprävalenz bei Männern; 8% aller urologischen Konsultationen',
        risk_groups: ['Junge und mittelalte Männer', 'Z.n. transrektaler Prostatabiopsie', 'Dauerkatheterträger', 'BPH / Beckenbodendysfunktion', 'HIV / Diabetes mellitus'],
        seasonality: 'Keine',
        transmission: 'Aszendierend über infizierten Urin (intraprostatischer Reflux), direkte Inokulation nach Biopsie'
      },
      pathomechanism: {
        steps: [
          'Intraprostatischer Reflux: Infizierter Urin wird bei erhöhtem Miktionsdruck in die Prostatagänge gepresst.',
          'Akute Entzündung (NIH Typ I - ABP): Ausgeprägtes Stromaödem, diffuse Leukozyteninfiltration und Mikroabszesse führen zu Kapselspannung.',
          'Chronische Kolonisation (NIH Typ II - CBP): Bakterien bilden resistente Biofilme auf Prostatasteinen oder in den Azini, was das Eindringen von Antibiotika behindert.'
        ],
        virulence_factors: ['Biofilmbildung', 'Lipidbarriere (die Blut-Prostata-Schranke und das saure Milieu erschweren die Penetration vieler Antibiotika)']
      },
      clinical: {
        incubation: '1-7 Tage',
        onset: 'Akut (ABP) plötzlich; Chronisch (CBP) schleichend, rezidivierend (>3 Monate)',
        symptoms: [
          { name: 'Akut: Systemisches Krankheitsgefühl', description: 'Hohes Fieber, Schüttelfrost, Myalgien, Arthralgien, schweres grippeähnliches Krankheitsgefühl.', severity: 'severe' },
          { name: 'Schmerzen im Becken-/Dammbereich', description: 'Dumpfer, bohrender Schmerz in Perineum, Rektum, Schambeinregion mit Ausstrahlung in Penis, Hoden oder Kreuzbein.', severity: 'severe' },
          { name: 'Miktionsbeschwerden (LUTS)', description: 'Starke Dysurie, Pollakisurie, imperativer Harndrang, abgeschwächter Harnstrahl.', severity: 'moderate' },
          { name: 'Akuter Harnverhalt', description: 'Die geschwollene Prostata kann die Urethra komplett komprimieren.', severity: 'severe' },
          { name: 'Chronisch: Rezidivierende Beschwerden', description: 'Persistierendes Beckenunbehagen, schmerzhafte Ejakulation, rezidivierende Zystitiden durch denselben Erreger.', severity: 'moderate' }
        ],
        physical_exam: [
          'Digital-rektale Untersuchung (DRU):',
          'BEI AKUTER PROSTATITIS: Prostata vergrößert, prall-elastisch, überwärmt und EXTREM DRUCK- UND SCHMERZEMPFINDLICH. EINE PROSTATAMASSAGE IST BEI AKUTER PROSTATITIS STRENG KONTRAINDIZIERT (Sepsisgefahr!)',
          'BEI CHRONISCHER PROSTATITIS: Prostata tastet sich oft normal, teigig oder mäßig druckdolent.',
          'Palpable, überdehnte Blase bei akutem Harnverhalt.'
        ],
        complications: ['Prostataabszess (v.a. bei Diabetikern)', 'Urosepsis', 'Akuter Harnverhalt', 'Epididymoorchitis', 'Übergang in chronisches Beckenschmerzsyndrom (CPPS)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinsediment & Teststreifen', finding: 'Ausgeprägte Pyurie und Bakteriurie', interpretation: 'HWI-Nachweis' },
          { test: 'Entzündungslabor', finding: 'Hohe Leukozytose, stark erhöhtes CRP', interpretation: 'Akute systemische Entzündung' },
          { test: 'Serum-PSA', finding: 'Massiv erhöht (oft >20-50 ng/ml)', interpretation: 'Entzündungsbedingt! In der Akutphase NICHT zur Tumordiagnostik verwertbar; Verlaufskontrolle 2-3 Monate nach Abheilung.' }
        ],
        imaging: [
          { modality: 'Transrektaler Ultraschall (TRUS) oder Becken-MRT', finding: 'Prostataabszess (hypoechogene Flüssigkeitskollektion)', significance: 'Indiziert bei Fieberpersistenz >48-72h unter Antibiotika.' }
        ],
        microbiology: [
          { test: 'Akut: Mittelstrahlurinkultur (EAU 2026)', finding: '≥10^4 KBE/ml Uropathogene', significance: 'Gewinnung OHNE Prostatamassage!' },
          { test: 'Chronisch: Meares-Stamey-4-Gläser-Probe oder 2-Gläser-Probe (EAU 2026)', finding: '10-fach höhere Keimzahl im Exprimaturin (VB3) oder Ejakulat (EPS) im Vergleich zum Erststrahlurin (VB2)', significance: 'Goldstandard zur Diagnose der chronischen bakteriellen Prostatitis' }
        ]
      },
      differential: [
        { disease: 'Benigne Prostatahyperplasie (BPH)', distinguishing: 'Langsame Progression, keine Infektzeichen, kein Fieber' },
        { disease: 'Chronisches Beckenschmerzsyndrom (CPPS / NIH Typ III)', distinguishing: 'Ähnliche Schmerzen, aber Urin und Ejakulat mikrobiologisch steril' },
        { disease: 'Prostatakarzinom', distinguishing: 'Negative Kulturen, derber Knoten bei DRU, keine akute Entzündung' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'Fluorchinolone (Levofloxacin / Ciprofloxacin)', dose: 'Levofloxacin 500mg PO 1x tgl. oder Ciprofloxacin 500mg PO 2x tgl.', duration: '2-4 Wochen bei Akut, 4-6 Wochen bei Chronisch!', note: 'EAU 2026 und IDSA First-Line wegen hervorragender Prostatapenetration' },
            { drug: 'Trimethoprim-Sulfamethoxazol (Cotrimoxazol)', dose: '960mg PO 2x tgl.', duration: '4-6 Wochen', note: 'Alternative bei chronischer Prostatitis' }
          ],
          inpatient: [
            { drug: 'Ceftriaxon', dose: '2g IV 1x tgl.', duration: 'Bis zur Entfieberung, dann oral', note: 'Bei schwerer akuter Prostatitis' },
            { drug: 'Piperacillin/Tazobactam', dose: '4.5g IV 3x tgl.', duration: 'Bis zur Entfieberung', note: 'Bei septischen oder nosokomialen Fällen' }
          ]
        },
        targeted: 'Gezielt nach Antibiogramm. EAU 2026: Substanzen mit hoher Lipidlöslichkeit und niedrigem Eiweißbindungsgrad bevorzugen (Fluorchinolone, Cotrimoxazol, Doxycyclin).',
        supportive: [
          'Nicht-medikamentöse Harnableitung: Bei akutem Harnverhalt ist ein SUPRAPUBISCHER KATHETER (Zystostomie) zwingend indiziert! Ein transurethraler Katheter ist bei akuter Prostatitis KONTRAINDIZIERT (Gefahr der Traumatisierung und Sepsisausschwemmung).',
          'Alpha-1-Blocker (z.B. Tamsulosin 0.4mg PO 1x tgl. oder Silodosin 8mg PO 1x tgl.) zur Entlastung des Blasenblasenhalses und Schmerzlinderung.',
          'Entzündungshemmende Analgesie: NSAR (Ibuprofen 400mg PO 3x tgl. oder Celecoxib) über 2-4 Wochen.',
          'Warme Sitzbäder (38-40°C), Druckentlastung des Dammes (Sitzring).',
          'Stuhlregulierung zur Vermeidung von Pressen beim Stuhlgang; ausreichende Hydratation.'
        ],
        prevention: [
          'Konsequente Sanierung von HWI.',
          'EAU 2026 Empfehlung vor Prostatabiopsie: Gezielte Rektalabstrich-basierte Prophylaxe oder Ceftriaxon/Fosfomycin-Prophylaxe (Fluorchinolon-Monotherapie meiden!).'
        ]
      },
      prognosis: {
        mortality: 'Niedrig bei adäquater Therapie, jedoch Sepsisrisiko; chronische Verläufe beeinträchtigen die Lebensqualität erheblich',
        factors: 'Abszessbildung, Biofilmpersistenz, Übergang in CPPS'
      }
    },
    {
      id: 'asymptomatic_bacteriuria',
      name: 'Asymptomatische Bakteriurie (ASB)',
      pathogen: { type: 'Bakterium', name: '<i>Escherichia coli, Enterococcus faecalis, Klebsiella, Proteus, Streptococcus agalactiae (GBS)</i>', gram: 'Gemischt', shape: 'Gemischt' },
      epidemiology: {
        incidence: 'Gesunde Frauen: 3-5%, Diabetiker: 9-27%, Heimbewohner: 25-50%, Dauerkatheterträger: 100%',
        risk_groups: ['Ältere Menschen', 'Diabetiker', 'Dauerkatheterträger', 'Schwangere', 'Querschnittsgelähmte'],
        seasonality: 'Keine',
        transmission: 'Endogene Uropathogen-Kolonisation'
      },
      pathomechanism: {
        steps: [
          'Kommensale Kolonisation: Avirulente Bakterienstämme (ohne P-Fimbrien und Hämolysine) besiedeln die Blase ohne Gewebeinvasion oder Entzündungsreaktion.',
          'Immuntoleranz: Es entsteht ein stabiles Gleichgewicht zwischen Wirt und Bakterien.',
          'Schutzeffekt: Die Besiedlung mit apathogenen Stämmen schützt vor der Superinfektion durch hochvirulente Erreger!'
        ],
        virulence_factors: ['Fehlen von Virulenzfaktoren (Fimbrien-Verlust)']
      },
      clinical: {
        incubation: '-',
        onset: 'Asymptomatisch',
        symptoms: [
          { name: 'Vollständiges FEHLEN klinischer Symptome', description: 'Der Patient hat KEINE Beschwerden der unteren oder oberen Harnwege (keine Dysurie, keine Pollakisurie, kein Fieber, kein Flankenschmerz). Die Bakteriurie ist ein reiner Zufallsbefund.', severity: 'mild' }
        ],
        physical_exam: [
          'Vollkommen unauffälliger körperlicher Untersuchungsbefund',
          'Trüber oder übelriechender Urin ALLEINE ist KEIN Symptom und begründet KEINE Therapie! (EAU 2026 / IDSA)',
          'Kein Druckschmerz über Blase oder Nierenlager'
        ],
        complications: ['Unnötige Antibiotikagabe führt zu Clostridioides-difficile-Kolitis und Resistenzselektion!', 'Pyelonephritis und Frühgeburtsrisiko in der SCHWANGERSCHAFT (daher zwingende Therapieindikation!)']
      },
      diagnostics: {
        laboratory: [
          { test: 'Urinkultur (EAU 2026 / IDSA)', finding: 'Frauen: ≥10^5 KBE/ml mit demselben Erreger in 2 AUFEINANDERFOLGENDEN Mittelstrahlurinen; Männer: ≥10^5 KBE/ml in 1 Probe', interpretation: 'Strikte Diagnosekriterien der ASB' },
          { test: 'Katheterurin', finding: '≥10^5 KBE/ml in 1 Probe', interpretation: 'Bakteriurienachweis' },
          { test: 'Urinsediment', finding: 'Pyurie häufig vorhanden', interpretation: 'Pyurie alleine RECHTFERTIGT KEINE Antibiotikagabe bei asymptomatischen Patienten! (EAU 2026 / IDSA)' }
        ],
        imaging: [
          { test: 'Bildgebung nicht indiziert', finding: 'Keine Indikation', interpretation: 'Bei asymptomatischen Patienten nicht indiziert' }
        ],
        microbiology: [
          { test: 'Screening-Urinkultur', finding: 'Nur in indizierten Populationen', significance: 'NUR indiziert in der Schwangerschaft und vor urologischen Eingriffen mit Schleimhautblutung!' }
        ]
      },
      differential: [
        { disease: 'Symptomatische Zystitis / Pyelonephritis', distinguishing: 'Vorhandensein subjektiver Beschwerden (Dysurie) oder systemischer Zeichen (Fieber)' },
        { disease: 'Probenkontamination', distinguishing: 'Niedrige Keimzahl (<10^5 KBE/ml), Mischflora' }
      ],
      therapy: {
        empirical: {
          outpatient: [
            { drug: 'KEINE ANTIBIOTIKATHERAPIE (DO NOT TREAT)', dose: '-', duration: '-', note: 'EAU 2026 & IDSA Empfehlung: NICHT BEHANDELN! (Ausnahme: Schwangerschaft und Urologie-OP)' }
          ],
          inpatient: [
            { drug: 'KEINE ANTIBIOTIKATHERAPIE (DO NOT TREAT)', dose: '-', duration: '-', note: 'Keine Indikation bei Älteren, Diabetikern, Katheterträgern oder Nierentransplantierten' }
          ]
        },
        targeted: 'AUSSCHLIESSLICHE THERAPIEINDIKATIONEN (EAU 2026 / IDSA ASB Leitlinien):\n1) SCHWANGERE FRAUEN: Screening in SSW 12-16. Gezielte orale Therapie nach Kultur (Fosfomycin 3g 1x, Nitrofurantoin 2x100mg für 5 Tage, Cephalexin oder Amoxicillin-Clavulansäure für 5-7 Tage) zur Vermeidung von Pyelonephritis und Frühgeburt.\n2) VOR UROLOGISCHEN EINGRIFFEN MIT SCHLEIMHAUTVERLETZUNG (z.B. TURP, Ureteroskopie): Gezielte Prophylaxe unmittelbar vor dem Eingriff.\nNICHT BEHANDELN: Postmenopausale Frauen, Diabetiker, Heimbewohner, Dauerkatheterträger, Querschnittsgelähmte!',
        supportive: [
          'Aufklärung: Patient und Pflegepersonal instruieren, dass Uringeruch oder Trübung allein keine Infektion darstellen und keine Antibiotika erfordern.',
          'Reichliche Flüssigkeitszufuhr, regelmäßige Miktion.',
          'Beendigung unnötiger Urintests bei nicht-indizierten Personengruppen.'
        ],
        prevention: [
          'VERMEIDUNG unnötiger Urinstreifentests und Urinkulturen.',
          'Frühzeitige Entfernung von Blasenkathetern.',
          'Gute Hygiene und Hydratation.'
        ]
      },
      prognosis: {
        mortality: 'ASB erhöht die Mortalität nicht; eine Therapie schadet durch Nebenwirkungen und Resistenzen',
        factors: 'Unbehandelt in der Schwangerschaft erhöhtes Risiko für Pyelonephritis und Frühgeburt'
      }
    }
  ]
};
