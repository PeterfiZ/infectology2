Object.assign(window.diseases, {
  infection_control: {
    name: 'Infection Control',
    icon: window.diseaseMetadata.infection_control.icon,
    color: window.diseaseMetadata.infection_control.color,
    diseases: [
      {
        id: 'ic_basics',
        name: 'Fundamentals of Infection Control and Chain of Infection',
        didactics: {
          overview: 'The primary goal of infection prevention and control (IPC) is to prevent healthcare-associated infections (HAIs) and the dissemination of multidrug-resistant organisms (MDROs) by systematically disrupting the chain of infection (reservoir, portal of exit, mode of transmission, portal of entry, and susceptible host).',
          sections: [
            {
              title: 'Links in the Chain of Infection & Intervention Targets',
              icon: '🔗',
              badge: 'Hospital Epidemiology',
              content: 'Effective infection prevention relies on targeted and continuous blockade of the weakest links in the transmission chain:',
              items: [
                {
                  label: '1. Infectious Reservoir',
                  text: 'Infected or asymptomatically colonised patients, healthcare worker carriage, and contaminated inanimate clinical environments (bed rails, medical devices, water outlets).'
                },
                {
                  label: '2. Portal of Exit',
                  text: 'Respiratory secretions (coughing, sneezing), faeces, urine, wound exudate, blood, and other body fluids.'
                },
                {
                  label: '3. Mode of Transmission',
                  text: 'Most commonly transient carriage on healthcare worker hands (contact transmission), respiratory droplets (short-range), airborne droplet nuclei (aerosols), or contaminated medical equipment.'
                },
                {
                  label: '4. Portal of Entry',
                  text: 'Disrupted skin or mucosal integrity, surgical wounds, and invasive devices (central venous catheters, peripheral cannulas, urinary catheters, endotracheal tubes).'
                },
                {
                  label: '5. Susceptible Host',
                  text: 'Immunocompromised individuals, elderly patients, polytrauma cases, malnourished individuals, and patients with severe comorbidities (diabetes, renal failure) or intensive care requirements.'
                }
              ]
            },
            {
              title: 'The 4 Major Healthcare-Associated Infections (HAIs)',
              icon: '🏥',
              badge: 'Prevention Bundles',
              content: 'Over 80% of endemic healthcare-associated infections are attributable to four device- and procedure-related syndromes:',
              items: [
                {
                  label: 'CLABSI (Central Line-Associated Bloodstream Infection)',
                  text: 'Prevention bundle: Strict aseptic insertion bundle (subclavian preference, full-body sterile drape, 2% chlorhexidine in 70% alcohol skin prep, daily assessment of line necessity and prompt removal).'
                },
                {
                  label: 'CAUTI (Catheter-Associated Urinary Tract Infection)',
                  text: 'Prevention bundle: Maintain closed drainage system, ensure collection bag remains below bladder level without floor contact, daily review of catheter indication, and early removal.'
                },
                {
                  label: 'VAP (Ventilator-Associated Pneumonia)',
                  text: 'Prevention bundle: 30–45° head-of-bed elevation, subglottic secretion drainage, daily sedation vacation and spontaneous breathing trials, regular oral chlorhexidine decolonisation.'
                },
                {
                  label: 'SSI (Surgical Site Infection)',
                  text: 'Prevention bundle: Timely antimicrobial prophylaxis within 30–60 min before incision, hair removal strictly with electric clippers (razor blades contraindicated), intraoperative normothermia and glycemic control.'
                }
              ]
            }
          ],
          diagnostics: [
            'Regular active institutional surveillance and point-prevalence surveys (monitoring HAI benchmarks)',
            'Automated laboratory alert systems for new MDRO isolates (MRSA, VRE, CPE, MRPA, C. difficile)',
            'Environmental microbiological sampling during outbreak investigations'
          ],
          red_flags: [
            'Maintaining unnecessary invasive devices (indwelling catheters represent the primary portal of entry for fatal sepsis)',
            'Breakdown in aseptic technique during insertion or dressing changes',
            'Absence of continuous departmental surveillance and audit feedback'
          ],
          teaching_tip: 'The single most effective intervention for device-associated infections is daily review of line necessity: if the clinical indication no longer exists, remove the device immediately!'
        }
      },
      {
        id: 'hand_hygiene',
        name: 'Hand Hygiene (Hand Rubbing and Hand Washing)',
        didactics: {
          overview: 'Hand hygiene is universally recognized as the single most important, effective, and cost-efficient measure to prevent healthcare-associated infections (HAIs) and interrupt the transmission of multidrug-resistant organisms (MDROs). High compliance reduces nosocomial infection rates by 30–50%.',
          sections: [
            {
              title: 'Indications: The WHO "5 Moments for Hand Hygiene"',
              icon: '🖐️',
              badge: 'Global Gold Standard',
              content: 'Hand hygiene must be performed at precise points in the workflow to ensure patient safety and worker protection:',
              items: [
                {
                  label: '1. BEFORE touching a patient',
                  text: 'Protects the patient from colonisation with pathogens carried on the healthcare worker’s hands (e.g., prior to shaking hands, checking vital signs, physical examination).'
                },
                {
                  label: '2. BEFORE clean / aseptic procedures',
                  text: 'Protects the patient from harmful pathogens entering sterile body sites (e.g., before wound dressing, venous access insertion, catheterisation, instilling eye drops).'
                },
                {
                  label: '3. AFTER body fluid exposure risk',
                  text: 'Protects the healthcare worker and clinical environment from microbial dissemination (e.g., after drawing blood, emptying urine, dressing changes, immediately after glove removal).'
                },
                {
                  label: '4. AFTER touching a patient',
                  text: 'Protects the worker and subsequent patients from colonization with the patient’s flora (e.g., upon leaving the bedside after direct clinical contact).'
                },
                {
                  label: '5. AFTER touching patient surroundings',
                  text: 'Protects the environment even when the patient was not directly touched (e.g., after touching bed rails, monitors, infusion pumps, bedside furniture).'
                }
              ]
            },
            {
              title: 'Methodology: Alcohol-Based Hand Rub vs. Hand Washing',
              icon: '🧴',
              badge: 'Clinical Decision Algorithm',
              content: 'Selection of the appropriate hand hygiene modality depends on visible contamination and pathogen characteristics:',
              items: [
                {
                  label: 'Alcohol-Based Hand Rub (ABHR) — GOLD STANDARD',
                  text: 'Application: All routine patient care situations when hands are NOT visibly soiled. Mechanism: Rapid broad-spectrum bactericidal, virucidal, and fungicidal action via protein denaturation. Duration: 20–30 seconds (3–5 mL volume, ensuring all surfaces remain wet until completely dry). Advantages: Faster and more effective than washing, readily accessible at the Point of Care, and superior skin tolerability due to added emollients.'
                },
                {
                  label: 'Soap and Water Hand Washing — MANDATORY INDICATIONS',
                  text: 'Application: 1) Whenever hands are visibly dirty or contaminated with blood/body fluids; 2) After caring for patients with spore-forming organisms (Clostridioides difficile, Bacillus anthracis); 3) During non-enveloped viral outbreaks (Norovirus, Rotavirus); 4) After using the restroom. Duration: 40–60 seconds with warm water and soap, thorough drying with single-use disposable paper towels, and turning off the tap using the paper towel.'
                }
              ]
            },
            {
              title: 'The 6-Step Technique for Complete Hand Coverage',
              icon: '🔄',
              badge: 'EN 1500 Standard',
              content: 'To avoid missing anatomical areas, the rub or soap must be distributed systematically through 6 rotational steps:',
              items: [
                '1. Rub palm to palm with circular motions.',
                '2. Right palm over left dorsum with interlaced fingers, then switch sides.',
                '3. Palm to palm with fingers interlaced to clean interdigital spaces.',
                '4. Backs of fingers to opposing palms with fingers interlocked.',
                '5. Rotational rubbing of left thumb clasped in right palm, and vice versa.',
                '6. Rotational rubbing of fingertips and nails backwards and forwards in palm.'
              ]
            },
            {
              title: 'Surgical Hand Antisepsis',
              icon: '🧤',
              badge: 'Operative Asepsis',
              content: 'Required prior to all surgical and invasive operating room procedures to eliminate transient flora and reduce resident microbial counts:',
              items: [
                'Initial step: At the start of the operative day, wash hands and forearms with non-medicated soap, clean subungual spaces with a nail pick under running water (brushes discouraged due to skin microtrauma).',
                'Alcoholic surgical rub: Apply alcohol-based surgical rub to hands and forearms (1.5–3 minutes total duration), keeping skin continuously wet per manufacturer guidelines, allowing complete air drying.',
                'Donning sterile gown and gloves is permitted only after skin is fully dry.'
              ]
            },
            {
              title: 'Prerequisites: The "Bare Below the Elbows" Policy',
              icon: '👔',
              badge: 'Professional Uniform Standards',
              items: [
                'Strict prohibition of all wrist and finger jewelry (including wedding bands, wristwatches, and bracelets) during patient contact.',
                'Prohibition of artificial nails, gel polish, nail extensions, and nail piercings (established reservoirs for Gram-negative bacilli and Candida).',
                'Natural nails must be kept clean, healthy, and trimmed short (<0.5 cm).',
                'Short-sleeved clinical attire to allow unrestricted hand and forearm disinfection.'
              ]
            },
            {
              title: 'Quality Assurance & Compliance Monitoring',
              icon: '📊',
              badge: 'Audit & Feedback',
              items: [
                'Direct Observation Audits: Real-time compliance monitoring by trained auditors using standardized WHO 5 Moments observation tools.',
                'Product Consumption Tracking: Measuring monthly liters of alcohol rub consumed per 1,000 patient days.',
                'Fluorescent Gel UV Training: Immediate visual feedback under UV light highlighting frequently missed anatomical areas during training.'
              ]
            }
          ],
          diagnostics: [
            'Microbiological hand imprint cultures (agar contact plates) during epidemiologic outbreak investigations',
            'Regular UV fluorescent audits to train and validate correct rubbing technique',
            'Dermatological screening for early detection and management of occupational contact dermatitis'
          ],
          red_flags: [
            'Gloves DO NOT replace hand hygiene! Hand hygiene is mandatory immediately before donning and after removing gloves.',
            'In Clostridioides difficile infection, alcohol rubs do NOT kill bacterial spores — mechanical hand washing with soap and water is mandatory!',
            'Donning gloves on damp hands leads to rapid skin maceration and severe occupational dermatitis.',
            'Wearing rings or wristwatches creates persistent high-density bacterial reservoirs.'
          ],
          teaching_tip: 'Clean Care is Safer Care: The most frequently missed anatomical areas during hand rubbing are the thumbs, fingertips, and web spaces. Always ensure hands remain wet for the full duration and dry completely!'
        }
      },
      {
        id: 'isolation_measures',
        name: 'Isolation Measures (Types, Protocols, and Discontinuation)',
        didactics: {
          overview: 'Isolation precautions are designed to contain infectious sources and interrupt transmission pathways, preventing the spread of pathogens to other patients, healthcare personnel, and hospital visitors.',
          sections: [
            {
              title: '1. Standard Precautions',
              icon: '🛡️',
              badge: 'Universal Baseline for All Patients',
              content: 'Mandatory for every patient encounter across all healthcare settings, regardless of suspected or confirmed infection status:',
              items: [
                'Strict hand hygiene following the WHO 5 Moments.',
                'Risk-assessed use of Personal Protective Equipment (PPE: gloves, gown, mask, eye protection) when anticipating body fluid contact.',
                'Safe injection and sharps management (no recapping needles; immediate disposal in puncture-resistant containers).',
                'Environmental cleaning and disinfection of high-touch surfaces.',
                'Safe handling of contaminated textiles, clinical waste management, and respiratory hygiene/cough etiquette.'
              ]
            },
            {
              title: '2. Contact Precautions',
              icon: '🤝',
              badge: 'Direct & Indirect Contact Transmission',
              content: 'Indications: Multidrug-resistant organisms (MRSA, VRE, CRE/CPE, ESBL carriage/infection), Clostridioides difficile, Norovirus, Rotavirus, Scabies, and extensively draining wounds.',
              items: [
                {
                  label: 'Patient Placement',
                  text: 'Single-patient room (with dedicated en-suite bathroom) or cohorting of patients colonised/infected with the exact same organism.'
                },
                {
                  label: 'PPE Requirements',
                  text: 'Clean non-sterile protective gown and gloves must be donned upon room entry for any patient contact or interaction with the patient environment.'
                },
                {
                  label: 'Dedicated Equipment',
                  text: 'Dedicated, patient-specific equipment (stethoscope, blood pressure cuff, thermometer) that remains inside the room until terminal disinfection.'
                },
                {
                  label: 'Patient Transport',
                  text: 'Restricted to essential diagnostic or therapeutic procedures, ensuring the patient is covered with clean linens and wounds are dressed.'
                }
              ]
            },
            {
              title: '3. Droplet Precautions',
              icon: '🗣️',
              badge: 'Large Respiratory Droplets (>5 µm)',
              content: 'Indications: Influenza, SARS-CoV-2 (baseline), Neisseria meningitidis invasive disease, Bordetella pertussis, Mycoplasma pneumoniae, Mumps, Rubella, Parvovirus B19.',
              items: [
                {
                  label: 'Patient Placement',
                  text: 'Single room or spatial separation of at least 1.5–2 meters between patient beds if cohorted.'
                },
                {
                  label: 'PPE Requirements',
                  text: 'Surgical/medical mask upon entering within 2 meters of the patient (eye protection/face shield recommended if coughing).'
                },
                {
                  label: 'Patient Transport',
                  text: 'The patient must wear a surgical mask during transport outside the room.'
                }
              ]
            },
            {
              title: '4. Airborne / Aerosol Precautions',
              icon: '💨',
              badge: 'Small Droplet Nuclei (≤5 µm)',
              content: 'Indications: Mycobacterium tuberculosis (active pulmonary TB), Measles (Morbilli), Varicella zoster (chickenpox and disseminated herpes zoster), and aerosol-generating procedures (AGPs: intubation, bronchoscopy, suctioning).',
              items: [
                {
                  label: 'Patient Placement',
                  text: 'Airborne Infection Isolation Room (AIIR) with negative pressure, at least 6–12 air changes per hour (ACH), and HEPA filtration or direct exhaust. Door must remain strictly CLOSED at all times.'
                },
                {
                  label: 'PPE Requirements',
                  text: 'Particulate respirator (FFP2 / FFP3 / N95) donned in the anteroom BEFORE entering, with mandatory seal/fit check.'
                },
                {
                  label: 'Entry Restrictions',
                  text: 'Non-immune personnel must not enter rooms of patients with measles or chickenpox.'
                }
              ]
            },
            {
              title: '5. Protective (Reverse) Isolation',
              icon: '🧬',
              badge: 'Severely Immunocompromised Patients',
              content: 'Indications: Severe neutropenia (Absolute Neutrophil Count ANC < 500/µL), allogeneic hematopoietic stem cell transplantation, severe extensive burns.',
              items: [
                'Positive-pressure isolation room with HEPA-filtered laminar airflow to prevent environmental fungal spores (Aspergillus) and bacterial ingress.',
                'Strict ban on potted plants, dried flowers, fresh unpeeled fruits/raw vegetables, and unpasteurized cheese.',
                'Visitor screening for respiratory symptoms; surgical mask and clean protective gown required upon entry.'
              ]
            },
            {
              title: 'Criteria for Discontinuing Isolation Precautions',
              icon: '🔓',
              badge: 'De-isolation Protocol',
              items: [
                {
                  label: 'MRSA Clearance',
                  text: 'At least 3 consecutive negative screening swab sets (nose, throat, wound) collected on separate days at least 48–72 hours after completing decolonization.'
                },
                {
                  label: 'VRE & CRE Clearance',
                  text: 'Typically 3 consecutive negative rectal swabs collected at least 1 week apart while off antimicrobial therapy; per local IPC policy, may require ongoing contact precautions throughout admission.'
                },
                {
                  label: 'Clostridioides difficile Clearance',
                  text: 'At least 48 hours after complete resolution of diarrhea (formed stool). Repeat stool PCR/toxin testing is NOT recommended to prove clearance!'
                },
                {
                  label: 'Tuberculosis Clearance',
                  text: 'At least 2 weeks of effective anti-TB therapy + demonstrable clinical improvement + 3 consecutive negative acid-fast bacilli (AFB) sputum smears.'
                }
              ]
            }
          ],
          diagnostics: [
            'Microbiological clearance screening swabs to document eradication of colonization prior to de-isolation',
            'Daily monitoring of room differential pressure (ball/manometer gauge for AIIR negative pressure rooms)',
            'Continuous PPE donning/doffing compliance audits'
          ],
          red_flags: [
            'Leaving the door open in an airborne isolation room (instantly destroys negative pressure gradient).',
            'Wearing contaminated PPE out into public hallways (major environmental contamination breach).',
            'Incorrect PPE removal sequence: gloves and gown fronts are heavily contaminated — perform immediate hand hygiene after removal before touching face/mask!'
          ],
          teaching_tip: 'PPE Sequence: Donning = Gown ➔ Mask ➔ Eye Protection ➔ Gloves. Doffing = Gloves ➔ Eye Protection ➔ Gown ➔ HAND HYGIENE ➔ Mask (in anteroom) ➔ HAND HYGIENE!'
        }
      },
      {
        id: 'mdro_screening',
        name: 'Screening Tests (Active Surveillance)',
        didactics: {
          overview: 'Active microbiological surveillance screening aims to rapidly detect asymptomatic carriers of multidrug-resistant organisms (MDROs) on admission or during hospital stay, triggering immediate isolation and disrupting hidden hospital transmission chains.',
          sections: [
            {
              title: 'Screening Indications & High-Risk Patient Groups',
              icon: '🎯',
              badge: 'Target Populations',
              content: 'Admission screening is mandatory for the following patient populations:',
              items: [
                'Documented prior MDRO colonization or infection in medical history.',
                'Direct transfers from other inpatient healthcare facilities or foreign hospitals.',
                'All patients admitted to Intensive Care Units (ICU / PICU).',
                'Chronic hemodialysis patients and long-term care / nursing home residents.',
                'Patients scheduled for major elective surgeries (orthopedic arthroplasty, cardiac surgery, neurosurgery - MRSA screening).',
                'Patients presenting with chronic open wounds, ulcers, decubitus, or major burns.'
              ]
            },
            {
              title: 'Screening Anatomical Sites by Pathogen',
              icon: '🧪',
              badge: 'Sampling Protocols',
              content: 'Sampling anatomical sites are dictated by the pathogen’s specific ecological colonization niches:',
              items: [
                {
                  label: 'MRSA (Methicillin-Resistant S. aureus)',
                  text: 'Sites: Bilateral anterior nares (swabbing both nostrils with rotational pressure), throat swab, groin/perineum, and all open wounds, drains, or catheter exit sites.'
                },
                {
                  label: 'VRE (Vancomycin-Resistant Enterococcus)',
                  text: 'Sites: Rectal swab (dacron swab must show visible faecal staining, inserted 1–2 cm past anal sphincter) or native stool sample.'
                },
                {
                  label: 'ESBL-producing Enterobacterales & CRE / CPE (Carbapenem-Resistant strains)',
                  text: 'Sites: Rectal swab or native stool sample; in outbreak settings, throat swabs, catheter urine (if catheterized), and wound swabs.'
                },
                {
                  label: 'Multidrug-Resistant Pseudomonas (MRPA) & Acinetobacter (MRAB)',
                  text: 'Sites: Oropharyngeal/throat swab, perineal area, endotracheal aspirate (in ventilated patients), and open wounds.'
                }
              ]
            },
            {
              title: 'Diagnostic Methodologies & Turnaround Times',
              icon: '⏱️',
              badge: 'Laboratory Modalities',
              items: [
                {
                  label: 'Selective / Chromogenic Culture Media',
                  text: 'Turnaround: 18–48 hours. Cost-effective, yields distinct colony colors for resistant strains (e.g., chromID MRSA, chromID VRE, chromID CARBA), enabling full phenotypic antimicrobial susceptibility testing.'
                },
                {
                  label: 'Rapid Molecular PCR / NAAT Assays',
                  text: 'Turnaround: 1–2 hours. Direct detection of key resistance genes (mecA/mecC for MRSA; vanA/vanB for VRE; blaKPC, blaNDM, blaOXA-48, blaVIM, blaIMP for carbapenemases). Vital for urgent pre-operative screening and rapid outbreak containment.'
                }
              ]
            },
            {
              title: 'Pre-emptive Isolation & Clinical Workflow',
              icon: '🚦',
              badge: 'Action Protocol',
              content: 'When admitting a high-risk patient, pre-emptive contact isolation must be initiated AT THE SAME TIME screening swabs are obtained. Pre-emptive isolation must remain in place until negative screening results are confirmed.',
              items: [
                'Immediate sample dispatch to microbiology in appropriate transport media.',
                'Electronic flagging in Hospital Information Systems (HIS) for automatic alerting upon re-admission of known MDRO carriers.',
                'Critical value alerting protocols between microbiology and the clinical IPC team.'
              ]
            }
          ],
          diagnostics: [
            'Admission Screening (within 24 hours of hospital admission for at-risk patients)',
            'Weekly surveillance screening in ICUs to detect ward-acquired transmission',
            'Contact Tracing of room contacts following unexpected index case identification'
          ],
          red_flags: [
            'Collecting screening swabs DURING active topical antiseptic or systemic antibiotic therapy (causes false-negative results).',
            'Submitting unstained rectal swabs without faecal material (inadequate sample).',
            'Failing to initiate pre-emptive isolation while awaiting laboratory results (leads to days of silent ward dissemination).'
          ],
          teaching_tip: 'Screening is actionable: a negative test frees up valuable single-room isolation capacity, while a positive test immediately activates contact precautions and MRSA decolonization!'
        }
      },
      {
        id: 'decolonization_protocols',
        name: 'Decolonization Protocols (Indications, Regimens, and Execution)',
        didactics: {
          overview: 'Decolonization refers to the temporary or sustained eradication of carriage organisms (predominantly Methicillin-resistant Staphylococcus aureus – MRSA) from skin and mucosal surfaces using topical antiseptics and antimicrobials, preventing endogenous invasive infections and surgical site complications.',
          sections: [
            {
              title: 'Indications & Scope of Decolonization',
              icon: '🎯',
              badge: 'Evidence-Based Practice',
              content: 'Decolonization is indicated in clearly defined high-risk clinical scenarios:',
              items: [
                'Confirmed MRSA carriers prior to major elective surgeries (cardiac surgery, orthopedic arthroplasty, vascular graft insertion, neurosurgery).',
                'ICU targeted or universal decolonization to reduce ventilator-associated pneumonia (VAP) and catheter-related bloodstream infections (CRBSI).',
                'Recurrent staphylococcal skin and soft tissue infections (furunculosis, abscesses) in the patient or close household contacts.',
                'CRITICAL RULE: Currently, robust evidence-based decolonization protocols exist ONLY for MRSA. Decolonization of VRE, ESBL, and Carbapenem-resistant Gram-negatives (CRE/CPE) is NOT recommended due to lack of efficacy and high risk of selecting resistance!'
              ]
            },
            {
              title: 'The Standard 5-Day MRSA Decolonization Regimen',
              icon: '📋',
              badge: 'Step-by-Step Protocol',
              content: 'The regimen consists of simultaneous topical therapy across all primary anatomical reservoirs for 5 consecutive days:',
              items: [
                {
                  label: '1. Nasal Eradication (Nasal Therapy)',
                  text: 'Agent: 2% Mupirocin nasal ointment (or Octenidine-based nasal gel). Administration: Apply a matchhead-sized amount into both anterior nares 2–3 times daily using a cotton swab, followed by squeezing and massaging the nasal alae for 1 minute to distribute ointment.'
                },
                {
                  label: '2. Full-Body Antiseptic Cleansing (Skin Therapy)',
                  text: 'Agent: 4% Chlorhexidine gluconate (CHG) liquid skin cleanser or Octenidine washing emulsion. Administration: Once daily full-body wash/shower for 5 days. Allow lather to remain in contact with skin for 1–2 minutes before rinsing, paying special attention to scalp, axillae, groin, and perineum. Shampoo hair on Day 1 and Day 5.'
                },
                {
                  label: '3. Oral Antiseptic Gargle',
                  text: 'Agent: 0.12%–0.2% Chlorhexidine or Octenidine oral mouthwash. Administration: Rinse and gargle for 1 minute twice daily (in intubated patients, apply using soaked gauze wipes to gums and teeth).'
                }
              ]
            },
            {
              title: 'Environmental Measures to Prevent Re-colonization',
              icon: '🛏️',
              badge: 'Hygiene Bundle',
              items: [
                'Daily change of bed linens, nightwear, and towels throughout the 5-day regimen immediately after bathing.',
                'Disinfection of personal items (glasses, mobile phone, combs, prostheses) during the decolonization period.',
                'Skin moisturizing: Apply skin lotions only >2 hours after CHG bathing, as many cosmetic lotions contain anionic surfactants that neutralize chlorhexidine’s residual activity.'
              ]
            },
            {
              title: 'Verification of Success (Post-Decolonization Screening)',
              icon: '🔍',
              badge: 'Clearance Documentation',
              content: 'Eradication must be microbiologically verified following completion of therapy:',
              items: [
                'Timing: Wait at least 48–72 hours (optimally 5–7 days) after the last dose before collecting clearance swabs to avoid false-negative results from residual antiseptic action.',
                'Swab Sites: Bilateral nares, throat, and previous wound sites on 3 consecutive days.',
                'Outcome: If all 3 sets are negative, decolonization is successful and isolation precautions can be discontinued.'
              ]
            }
          ],
          diagnostics: [
            'Pre-operative MRSA screening 2–4 weeks before elective surgery to allow timely decolonization',
            'Clearance verification swabs 48–72 hours post-treatment',
            'Mupirocin susceptibility testing (MIC determination) in patients failing repeated decolonization courses'
          ],
          red_flags: [
            'Prolonged or continuous prophylactic use of Mupirocin (>7 days) is strictly forbidden (rapidly selects for high-level mupirocin resistance).',
            'Using 4% CHG on severely excoriated, burned, or eczematous skin causes severe irritation and chemical absorption — switch to Octenidine-based products.',
            'Omitting oral or nasal treatment leads to rapid re-colonization from persistent internal reservoirs.'
          ],
          teaching_tip: 'Pre-operative MRSA decolonization reduces surgical site infection rates by >50% in elective arthroplasty and cardiac surgery when completed in the days leading up to surgery!'
        }
      },
      {
        id: 'sterilization_disinfection',
        name: 'Sterilization and Disinfection',
        didactics: {
          overview: 'Reprocessing of medical devices and clinical surfaces is a cornerstone of patient safety. Disinfection reduces the microbial load to safe levels (non-sporicidal), while sterilization achieves the complete destruction of all viable microorganisms, including bacterial spores.',
          sections: [
            {
              title: 'The Spaulding Classification of Medical Devices',
              icon: '⚖️',
              badge: 'Risk Stratification System',
              content: 'Earle H. Spaulding categorised medical devices based on patient tissue contact and infection risk into three levels:',
              items: [
                {
                  label: '1. Critical Items ➔ STERILIZATION MANDATORY',
                  text: 'Devices that enter sterile body cavities, sterile tissues, or the vascular system (e.g., surgical instruments, implants, arthroscopes, laparoscopes, biopsy forceps, vascular catheters). Requirement: Complete sterility (Sterility Assurance Level SAL 10⁻⁶).'
                },
                {
                  label: '2. Semicritical Items ➔ HIGH-LEVEL DISINFECTION (HLD) OR STERILIZATION',
                  text: 'Devices that contact intact mucous membranes or non-intact skin without penetrating sterile spaces (e.g., flexible endoscopes, laryngoscope blades, endotracheal tubes, TEE probes). Requirement: High-Level Disinfection (HLD) eliminating vegetative bacteria, mycobacteria, fungi, and viruses (spores may survive in small numbers).'
                },
                {
                  label: '3. Noncritical Items ➔ INTERMEDIATE / LOW-LEVEL DISINFECTION',
                  text: 'Items and environmental surfaces that contact only intact skin (e.g., stethoscopes, blood pressure cuffs, bed rails, furniture, infusion pumps). Requirement: Cleaning and low- to intermediate-level surface disinfection.'
                }
              ]
            },
            {
              title: 'Sterilization Modalities and Parameters',
              icon: '🌡️',
              badge: 'Physical & Chemical Processes',
              items: [
                {
                  label: 'Moist Heat Steam Sterilization (Autoclaving) — GOLD STANDARD',
                  text: 'Most reliable, rapid, and economical method for heat-stable materials. Standard cycles: 121 °C (15–20 min at 1.1 bar overpressure) or 134 °C (3.5–5 min at 2.1 bar overpressure). Prion cycle (suspected Creutzfeldt-Jakob disease): 134 °C for at least 18 minutes.'
                },
                {
                  label: 'Dry Heat Sterilization',
                  text: 'Exclusively for water-intolerant, heat-stable metal and glassware items. Parameters: 160 °C (120 min), 170 °C (60 min), or 180 °C (30 min).'
                },
                {
                  label: 'Low-Temperature H₂O₂ Gas Plasma Sterilization (Sterrad)',
                  text: 'For heat- and moisture-sensitive delicate instruments (optics, cameras, electronics). Parameters: 45–55 °C, 45–75 min cycle. Advantages: Rapid, non-toxic (decomposes into water vapor and oxygen), devices ready for immediate use.'
                },
                {
                  label: 'Ethylene Oxide Gas Sterilization (EtO)',
                  text: 'Superb penetration for complex plastics and long narrow lumens at low temperatures (37–55 °C). Disadvantages: Highly toxic, mutagenic, and carcinogenic gas requiring extensive aeration times (12–24 hours).'
                }
              ]
            },
            {
              title: 'Chemical Disinfectants & Antimicrobial Spectrum',
              icon: '🧪',
              badge: 'Agent Selection',
              items: [
                {
                  label: 'Alcohols (70% Ethanol, Isopropanol)',
                  text: 'Intermediate-level disinfectant. Rapid bactericidal, tuberculocidal, fungicidal, and enveloped virus activity. Ineffective against bacterial spores and non-enveloped viruses. Use: Skin antisepsis, stethoscopes, small hard surfaces.'
                },
                {
                  label: 'Chlorine Compounds (Sodium Hypochlorite / Bleach)',
                  text: 'High-level / sporicidal disinfectant. Broad spectrum, active against C. difficile spores and all viruses. Mandatory for environmental disinfection during C. difficile and Norovirus outbreaks. Corrosive to metals.'
                },
                {
                  label: 'Quaternary Ammonium Compounds (QUATs)',
                  text: 'Low-level disinfectant and detergent. Good cleaning power, non-corrosive. Not tuberculocidal or sporicidal. Use: Floors, walls, non-critical furniture.'
                },
                {
                  label: 'Peracetic Acid, Glutaraldehyde, Ortho-phthalaldehyde (OPA)',
                  text: 'High-level disinfectants and chemical sterilants used in automated washer-disinfectors (AERs) for flexible endoscopes with strict exposure times.'
                }
              ]
            },
            {
              title: 'Quality Assurance & Sterilization Monitoring',
              icon: '📋',
              badge: 'CSSD Validation',
              items: [
                {
                  label: 'Bowie-Dick Test',
                  text: 'Mandatory daily test performed before the first autoclave cycle to verify vacuum efficiency and complete steam penetration.'
                },
                {
                  label: 'Chemical Indicators (Class 1–6)',
                  text: 'External tape and internal multiparameter strips that change color when critical sterilization parameters (heat, steam, time) are achieved.'
                },
                {
                  label: 'Biological Indicators (Spore Tests)',
                  text: 'Gold standard verification utilizing heat-resistant spores: Geobacillus stearothermophilus (for steam and gas plasma) or Bacillus atrophaeus (for dry heat and EtO). Mandatory periodically and for all implant loads.'
                }
              ]
            }
          ],
          diagnostics: [
            'Daily Bowie-Dick tests for autoclave pre-vacuum and steam penetration validation',
            'Biological indicator spore incubation testing for periodic sterilizer qualification',
            'Adenosine Triphosphate (ATP) bioluminescence surface swabbing to audit environmental cleaning'
          ],
          red_flags: [
            '„If it’s not clean, it cannot be sterilized!” — Inadequate preliminary enzymatic cleaning leaves organic bioburden and biofilms that shield microbes from sterilants.',
            'Wet packs exiting the autoclave: moisture provides a capillary pathway for microbial ingress from the environment; wet packs must be rejected as unsterile!',
            'Using expired, torn, or damp sterile packaging is strictly contraindicated.'
          ],
          teaching_tip: 'Pre-cleaning instruments immediately after procedure completion is the single most crucial step in reprocessing to prevent dried blood coagulation and irreversible biofilm formation inside device lumens!'
        }
      },
      {
        id: 'antibiotic_stewardship',
        name: 'Antibiotic Stewardship Programs (Prudent Use of Antibacterials)',
        didactics: {
          overview: 'An Antimicrobial Stewardship Program (ASP) is an institutional, multidisciplinary system that promotes the optimal selection, dosing, duration, and route of antimicrobial therapy to maximize clinical cure rates while minimizing resistance selection, adverse drug events, and healthcare costs.',
          sections: [
            {
              title: 'The 5 Core Pillars: The 5 "D"s of Stewardship',
              icon: '🏛️',
              badge: 'Guiding Principles',
              content: 'Every antimicrobial prescription should address the five core questions:',
              items: [
                {
                  label: '1. Diagnosis (Accurate Infection Diagnosis)',
                  text: 'Verify true bacterial infection vs. colonization, viral illness, or non-infectious inflammatory states (e.g., avoid treating asymptomatic bacteriuria or viral bronchitis).'
                },
                {
                  label: '2. Drug (Appropriate Agent Selection)',
                  text: 'Select the narrowest-spectrum agent tailored to the suspected pathogen, local resistance ecology (hospital antibiogram), and tissue penetration.'
                },
                {
                  label: '3. Dose (PK/PD Optimization)',
                  text: 'Apply pharmacokinetic and pharmacodynamic principles based on infection site (CNS, lung, bone), renal/hepatic clearance, and body weight (e.g., extended beta-lactam infusions to maximize %T>MIC).'
                },
                {
                  label: '4. Duration (Shortest Effective Course)',
                  text: 'Adopt evidence-based shortest effective durations („shorter is just as good”: CAP 5 days, HAP/VAP 7 days, pyelonephritis 7 days, uncomplicated intra-abdominal infection after source control 4 days).'
                },
                {
                  label: '5. De-escalation (Targeted Narrowing)',
                  text: 'Streamline empirical broad-spectrum therapy to targeted narrow-spectrum agents as soon as microbiology culture and sensitivity reports are available (within 48–72 hours).'
                }
              ]
            },
            {
              title: 'Core Stewardship Interventions & Clinical Tools',
              icon: '🛠️',
              badge: 'Operational Tools',
              items: [
                {
                  label: '48–72 Hour "Antibiotic Time-Out"',
                  text: 'Mandatory structured re-evaluation of all empirical antibiotic orders at day 2–3 based on clinical response, microbiologic culture results, and inflammatory markers to stop, de-escalate, or convert to oral.'
                },
                {
                  label: 'Early IV-to-Oral (PO) Switch',
                  text: 'Transition to oral therapy once the patient is afebrile for ≥24 hours, hemodynamically stable, improving clinically, and able to absorb enteral medications (especially for high-bioavailability agents: fluoroquinolones, co-trimoxazole, linezolid, metronidazole, doxycycline).'
                },
                {
                  label: 'Surgical Prophylaxis Rationalization',
                  text: 'Administer a single prophylactic dose within 30–60 minutes before surgical incision (e.g., Cefazolin). Prophylaxis must be discontinued within 24 hours (optimally at conclusion of surgery).'
                }
              ]
            },
            {
              title: 'The WHO AWaRe Classification System',
              icon: '🌍',
              badge: 'Global Prescription Strategy',
              items: [
                {
                  label: 'ACCESS Group (First-Line Broad Access)',
                  text: 'First-line narrow-spectrum agents with favorable safety profiles and low resistance potential for common clinical syndromes (e.g., Amoxicillin, Ampicillin, Cefazolin, Doxycycline, Nitrofurantoin, Metronidazole).'
                },
                {
                  label: 'WATCH Group (Monitored & Restricted)',
                  text: 'Broader spectrum agents with higher resistance selection potential, reserved for specific indications (e.g., Fluoroquinolones, 3rd gen Cephalosporins, Macrolides, Carbapenems, Piperacillin-tazobactam).'
                },
                {
                  label: 'RESERVE Group ("Last-Resort" Protected)',
                  text: 'High-value last-resort agents strictly reserved for confirmed or life-threatening multidrug-resistant infections, requiring infectious disease specialist approval (e.g., Ceftazidime-avibactam, Ceftolozane-tazobactam, Cefiderocol, Colistin, Linezolid, Meropenem-vaborbactam).'
                }
              ]
            },
            {
              title: 'Biomarkers & Therapeutic Drug Monitoring (TDM)',
              icon: '📈',
              badge: 'Precision Dosing',
              items: [
                {
                  label: 'Procalcitonin (PCT) Guided Protocols',
                  text: 'PCT provides rapid kinetics in systemic bacterial infection. A drop in PCT to <0.25 µg/L or by >80% from peak supports safe early discontinuation of antibiotics.'
                },
                {
                  label: 'Therapeutic Drug Monitoring (TDM)',
                  text: 'Mandatory serum concentration monitoring for narrow-therapeutic-index drugs (Vancomycin, Aminoglycosides: Gentamicin, Amikacin) to prevent nephrotoxicity and ototoxicity while achieving target AUC/MIC and peak concentrations.'
                }
              ]
            }
          ],
          diagnostics: [
            'Blood cultures (at least 2 sets) and site-specific cultures obtained PRIOR to initiating antimicrobial therapy',
            'Rapid molecular PCR diagnostics from positive blood culture bottles to detect resistance genes and enable same-day de-escalation',
            'Annual cumulative institutional antibiograms to update empirical treatment guidelines'
          ],
          red_flags: [
            'Treating asymptomatic bacteriuria (ASB) with antibiotics (indicated ONLY in pregnancy and before invasive urological procedures breaching mucosa!).',
            'Extending surgical antibiotic prophylaxis for days post-operatively.',
            'Unjustified use of fluoroquinolones for mild, self-limiting infections (carries FDA/EMA black box warnings for tendonitis, aortic aneurysm, QT prolongation, and C. difficile).',
            'Failing to collect diagnostic cultures before starting broad-spectrum antibiotics.'
          ],
          teaching_tip: '„Think Before You Prescribe!”: Always document the clinical indication and planned duration/stop date in the chart, and perform an Antibiotic Time-Out at 48 hours when culture results return!'
        }
      }
    ]
  }
});
