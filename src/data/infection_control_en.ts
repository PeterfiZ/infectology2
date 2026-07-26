Object.assign(window.diseases, {
  infection_control: {
    name: 'Infection Control',
    icon: window.diseaseMetadata.infection_control.icon,
    color: window.diseaseMetadata.infection_control.color,
    diseases: [
      {
        id: 'ic_basics',
        name: 'Basics of Infection Control and Precautions',
        pathogen: { type: 'Syndrome', name: 'Nosocomial and Multidrug-Resistant Organisms (MDRO)', gram: 'Variable', shape: '-' },
        epidemiology: {
          incidence: 'Approx. 5-10% of hospitalized patients acquire a healthcare-associated infection (HAI)',
          risk_groups: ['Intensive care unit (ICU) patients', 'Patients with invasive devices', 'Elderly and immunocompromised patients'],
          seasonality: 'Year-round occurrence',
          transmission: 'Contact (direct/indirect), droplet, airborne (aerosol), blood and body fluids'
        },
        pathomechanism: {
          steps: [
            'Source: Infected patient, colonised carrier, or contaminated environmental surfaces/medical equipment.',
            'Transmission: Transfer of pathogens from the source to a susceptible host (most commonly via the hands of healthcare workers).',
            'Portal of Entry: Access path into the host (e.g., surgical wounds, vascular catheters, urinary catheters, endotracheal tubes).',
            'Colonisation or Infection: Adherence and proliferation of the pathogen, leading to tissue invasion and systemic symptoms.'
          ],
          virulence_factors: ['Biofilm formation on catheters', 'Multidrug resistance (e.g., MRSA, VRE, ESBL, CRE)', 'Toxin production']
        },
        clinical: {
          incubation: 'Variable (hours to months)',
          onset: 'Gradual or acute',
          symptoms: [
            { name: 'Standard Precautions', description: 'Applied to all patients in all healthcare settings: hand hygiene, personal protective equipment (PPE - gloves, gown, mask, eyewear as needed), safe injection practices, environmental cleaning, waste management, and respiratory hygiene/cough etiquette.', severity: 'mild' },
            { name: 'Contact Precautions', description: 'For pathogens spread by direct or indirect contact (e.g., MRSA, Clostridioides difficile, Norovirus). Requirements: private room or cohorting, dedicated equipment, gown and gloves worn when entering the room.', severity: 'moderate' },
            { name: 'Droplet Precautions', description: 'For pathogens transmitted by large respiratory droplets (>5 µm) (e.g., Influenza, Neisseria meningitidis). Requirements: surgical mask worn within 1-2 meters of the patient, patient wears a mask during transport.', severity: 'moderate' },
            { name: 'Airborne Precautions', description: 'For pathogens transmitted via small droplet nuclei (≤5 µm) that remain infectious over long distances (e.g., Tuberculosis, Measles, Varicella). Requirements: Airborne Infection Isolation Room (AIIR) with negative pressure, FFP2/FFP3/N95 respirator mandatory upon entry.', severity: 'severe' }
          ],
          physical_exam: [
            'Signs of device-associated infections (e.g., erythema, purulent drainage at central line site)',
            'Fever, hypotension, tachycardia (indicating potential sepsis)',
            'Surgical site infection signs (erythema, fluctuation, warmth, pain)',
            'Tenderness around urinary catheter'
          ],
          complications: ['Sepsis and septic shock', 'Device-associated systemic infections (e.g., catheter-related bloodstream infection)', 'Prolonged hospital stay', 'Increased mortality and healthcare costs']
        },
        diagnostics: {
          laboratory: [
            { test: 'Clinical Screening', finding: 'Detection of MDRO carriage via nasal, throat, or perianal swabs', interpretation: 'Identifies asymptomatic carriers for isolation' },
            { test: 'CBC & Inflammatory Markers', finding: 'Leukocytosis, elevated CRP and procalcitonin (PCT)', interpretation: 'Differentiates active infection from colonization' }
          ],
          microbiology: [
            { test: 'Culture & Susceptibility', finding: 'Pathogen isolation and antibiogram generation', significance: 'Key for targeted antibiotic therapy and infection control tracking' },
            { test: 'PCR (Molecular tests)', finding: 'Rapid detection of resistance genes (e.g., mecA, vanA, blaKPC)', significance: 'Enables rapid isolation decisions within hours' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Isolation & Cohorting', dose: 'Immediately', duration: 'Until clearance of colonization/infection', note: 'Single room or grouping patients with the same pathogen' },
              { drug: 'Barrier Nursing', dose: 'Upon entry', duration: 'Always', note: 'Proper donning and doffing of PPE in correct order' }
            ]
          },
          targeted: 'Always use the narrowest spectrum antibiotic based on the antibiogram to prevent resistance selection.',
          supportive: [
            'Environmental disinfection with virucidal and sporicidal agents',
            'Use of single-use or patient-dedicated medical devices',
            'Designation of cohort nursing staff during outbreaks'
          ],
          prevention: [
            'Antibiotic Stewardship (judicious use of antibiotics to reduce resistant strains)',
            'Daily assessment of invasive devices (prompt removal of unnecessary lines)',
            'Continuous staff training and hygiene auditing'
          ]
        },
        prognosis: { mortality: 'Variable; e.g., CRE sepsis mortality can exceed 40%', prognostic_scores: ['APACHE II', 'SOFA'], factors: 'Pathogen resistance pattern, patient age, and comorbidities' }
      },
      {
        id: 'hand_hygiene',
        name: 'Hand Hygiene (Hand Rubbing and Hand Washing)',
        pathogen: { type: 'Transmission Vector', name: 'Hands of healthcare workers (transient flora)', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Hand hygiene compliance globally is often below 50% without active audit programs',
          risk_groups: ['All hospitalized and outpatient clients, particularly immunocompromised and ICU patients'],
          seasonality: 'Critically important year-round',
          transmission: 'Direct contact (pathogens transferred via staff hands from one patient to another or from environment to patient)'
        },
        pathomechanism: {
          steps: [
            'Acquisition of Transient Flora: Staff hands become colonized with transient microbes upon contact with patients or contaminated surfaces.',
            'Pathogen Survival: Transient flora can survive on skin for hours if hand hygiene is omitted.',
            'Transmission to Patient: During subsequent contact, pathogens are transferred to susceptible portals of entry (e.g., wounds, catheters).',
            'Resident Flora: Resident flora (e.g., S. epidermidis) resides in deeper skin layers, rarely causing HAI except during invasive procedures without antisepsis.'
          ],
          virulence_factors: ['Relative resistance to alcohol (e.g., C. difficile spores, non-enveloped viruses)', 'Skin dryness/lesions (increase colonization susceptibility)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'WHO 5 Moments of Hand Hygiene', description: '1. BEFORE touching a patient, 2. BEFORE clean/aseptic procedures, 3. AFTER body fluid exposure risk, 4. AFTER touching a patient, 5. AFTER touching patient surroundings.', severity: 'severe' },
            { name: 'Alcohol-Based Hand Rub (ABHR)', description: 'The GOLD STANDARD of hand hygiene. Faster, more microbicide efficacy, and better skin tolerability. Duration: 20-30 seconds. Do not use when hands are visibly soiled or when dealing with spore-forming pathogens!', severity: 'mild' },
            { name: 'Hand Washing with Soap and Water', description: 'Mandatory when hands are visibly soiled with blood or body fluids, and after caring for patients with suspected spore-forming pathogens (e.g., C. difficile) or non-enveloped viruses (e.g., Norovirus) (alcohol does not kill spores; physical removal is required). Duration: 40-60 seconds.', severity: 'moderate' },
            { name: '6 Steps of Hand Hygiene', description: 'Ensure all areas are covered: 1. Rub palms together, 2. Right palm over left dorsum with interlaced fingers and vice versa, 3. Palm to palm with fingers interlaced, 4. Backs of fingers to opposing palms with fingers interlocked, 5. Rotational rubbing of thumbs, 6. Rotational rubbing of fingertips in opposite palm.', severity: 'moderate' }
          ],
          physical_exam: [
            'Check skin integrity (micro-abrasions or dermatitis increase colonization risk)',
            'Nail length (artificial nails, gel nails, and jewelry are strictly prohibited as they harbor pathogens and hinder proper hand hygiene)'
          ],
          complications: ['Cross-infections and healthcare-associated outbreaks', 'Occupational dermatitis among healthcare workers due to improper skin care or incomplete drying']
        },
        diagnostics: {
          laboratory: [
            { test: 'Hand Sampling (Swab/Fingerprint)', finding: 'Growth of pathogens on agar plates from fingertips', interpretation: 'Assesses efficacy and technique of hand hygiene' },
            { test: 'Fluorescent Gel Test (UV Audit)', finding: 'Missed areas show as dark patches under UV light', interpretation: 'Provides immediate visual feedback on hand rubbing coverage' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Alcohol-Based Hand Rub', dose: '3-5 ml', duration: '20-30 seconds rub', note: 'Hands must remain wet for the entire duration' },
              { drug: 'Hygienic Hand Washing', dose: 'Soap + running water', duration: '40-60 seconds wash', note: 'Dry thoroughly with single-use paper towel, turn off tap using the towel' }
            ]
          },
          targeted: 'Surgical hand antisepsis is required before aseptic surgical procedures (rubbing with alcohol for 1.5 - 3 minutes, including forearms).',
          supportive: [
            'Regular use of moisturizing hand creams to maintain skin barrier function',
            'Placement of hand sanitizer dispensers directly at the Point of Care'
          ],
          prevention: [
            'Bare Below the Elbows policy (no jewelry, rings, or long sleeves)',
            'Regular audits using Direct Observation methods',
            'Visible infection control campaign posters'
          ]
        },
        prognosis: { mortality: 'Indirectly: proper hand hygiene compliance reduces HAI-attributable mortality by up to 50%', prognostic_scores: [], factors: 'Staff compliance, availability of hygiene products' }
      },
      {
        id: 'isolation_measures',
        name: 'Isolation (Types, Methods, and Importance)',
        pathogen: { type: 'Preventive Procedure', name: 'Interruption of Transmission Pathways', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Isolation precautions can reduce the transmission of MDROs in healthcare settings by over 60-70%',
          risk_groups: ['Patients infected or colonized with MDROs', 'Patients with respiratory or enteric infections', 'Severely neutropenic or immunocompromised patients (protective isolation)'],
          seasonality: 'Year-round high priority',
          transmission: 'Contact (direct/indirect), droplet, and airborne (aerosol) pathways'
        },
        pathomechanism: {
          steps: [
            'Source Isolation (Source Control): Physical separation of the infectious patient from susceptible patient populations.',
            'Barrier Nursing: Using personal protective equipment (PPE like gloves, gowns, masks) and physical barriers to prevent pathogen egress.',
            'Negative Pressure (Airborne Isolation): Ensures air flows into the isolation room but not out into the corridor (exhaust air is HEPA filtered).',
            'Positive Pressure (Protective Isolation): Prevents outside hospital air (harboring fungal spores or bacteria) from entering the room of a highly susceptible, immunocompromised patient.'
          ],
          virulence_factors: ['Aerosolization and airborne survival (e.g., M. tuberculosis)', 'Environmental persistence (e.g., VRE and C. difficile spores surviving on surfaces for days/weeks)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Contact Isolation', description: 'Importance: Prevents direct or indirect contact transmission (MRSA, VRE, CRE, C. difficile). Method: Private room or cohorting. Gown and gloves mandatory upon entry. Dedicated patient care equipment (e.g., stethoscope, thermometer).', severity: 'moderate' },
            { name: 'Droplet Isolation', description: 'Importance: For large droplets (>5 µm) generated by coughing/sneezing (Influenza, Meningococcus, Pertussis). Method: Private room or >1.5-2m bed spacing. Surgical mask mandatory when within 2 meters of the patient.', severity: 'moderate' },
            { name: 'Airborne (Aerosol) Isolation', description: 'Importance: For small droplet nuclei (≤5 µm) that remain suspended in air (TB, Measles, Varicella). Method: Negative pressure room (6-12 air changes/hour), FFP2/FFP3/N95 respirator mandatory upon entry.', severity: 'severe' },
            { name: 'Protective (Reverse) Isolation', description: 'Importance: Protects severely immunocompromised patients (e.g., allogeneic bone marrow transplant recipients) from environmental pathogens. Method: Positive pressure room with HEPA filtration, sterile diet, restricted visitors, strict aseptic nursing.', severity: 'severe' }
          ],
          physical_exam: [
            'Mandatory highly visible isolation signs placed on the patient\'s door',
            'Verify complete stock of appropriate PPE in the anteroom or isolation cart',
            'Monitor patient\'s psychological status due to isolation (risk of depression, loneliness)'
          ],
          complications: ['Isolation distress and reduced direct contact time with staff (potential risk of adverse events)', 'Superinfection with other strains if cohorting is done incorrectly']
        },
        diagnostics: {
          laboratory: [
            { test: 'Clinical Clearance Verification', finding: 'Serial negative microbiological cultures (typically 2-3 consecutive negative samples taken 24 hours apart)', interpretation: 'Required condition for lifting isolation precautions' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Source Control and Spatial Isolation', dose: 'Immediately', duration: 'Until clearance is confirmed', note: 'Doors kept closed, patient leaves room only for essential diagnostic tests (wearing a mask)' },
              { drug: 'PPE Protocol Training', dose: 'For all entering individuals', duration: 'Continuous', note: 'Perform hand hygiene BEFORE donning and AFTER doffing protective gear!' }
            ]
          },
          supportive: [
            'Strict terminal cleaning of the isolation room upon patient discharge (using sporicidal/virucidal agents)',
            'Dedicated cleaning equipment and staff assigned to isolation rooms'
          ],
          prevention: [
            'Regular auditing and feedback of isolation compliance to healthcare workers',
            'Staff cohorting (nurses caring for isolated patients should not care for high-risk, susceptible patients)'
          ]
        },
        prognosis: { mortality: 'Indirectly saves lives by breaking transmission chains and preventing high-mortality MDRO outbreaks', prognostic_scores: [], factors: 'Staff compliance, isolation room infrastructure' }
      },
      {
        id: 'mdro_screening',
        name: 'Screening Tests (What samples, when, where from?)',
        pathogen: { type: 'Diagnostic Protocol', name: 'Active Surveillance for Multidrug-Resistant Organisms (MDRO)', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Detection of carriage in high-risk patient groups can reach 15-25% via active surveillance',
          risk_groups: ['Patients with known history of MDRO carriage', 'Patients admitted to intensive care units (ICU)', 'Patients transferred from other healthcare facilities or from abroad', 'Hemodialysis patients, long-term care facility residents'],
          seasonality: 'Mandatory year-round in high-risk departments',
          transmission: 'Asymptomatic carriers contaminate the environment and fellow patients silently'
        },
        pathomechanism: {
          steps: [
            'Asymptomatic Colonization: Pathogens (MRSA, VRE, CPE) colonize skin or mucous membranes (nasal cavity, gastrointestinal tract) without triggering an inflammatory response or symptoms.',
            'Environmental Contamination: The carrier sheds pathogens into the immediate environment (bed rails, tables) via skin cells, secretions, or stool.',
            'Transmission via Hands: Healthcare staff transfer pathogens from the contaminated environment to other patients.',
            'Selective Pressure: Antibiotic therapy wipes out sensitive flora, letting the resistant colonizing strain multiply and cause active infection.'
          ],
          virulence_factors: ['Excellent colonization properties', 'Horizontal gene transfer of resistance genes (e.g., via plasmids)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'MRSA Screening', description: 'When: Upon admission if at risk, or weekly in the ICU. Where from: Bilateral anterior nares (nostrils - most important!), throat swab, perineum/inguinal fold, and any active wounds, drain or catheter exit sites.', severity: 'moderate' },
            { name: 'VRE (Vancomycin-Resistant Enterococcus) Screening', description: 'When: Upon admission and weekly in ICU. Where from: Stool sample or rectal swab (swab must be visibly soiled with fecal material).', severity: 'moderate' },
            { name: 'ESBL and CRE/CPE (Carbapenem-Resistant Enterobacterales) Screening', description: 'When: In high-risk wards or during outbreaks. Where from: Rectal swab or stool sample. Crucial for rapid isolation decisions.', severity: 'severe' },
            { name: 'Multidrug-Resistant Pseudomonas (MRPA) and Acinetobacter (MRAB) Screening', description: 'When: In ICU settings or during contact tracing. Where from: Throat swab, perineal swab, and tracheal/bronchial aspirate for ventilated patients.', severity: 'moderate' }
          ],
          physical_exam: [
            'Thorough inspection of skin breaks, chronic ulcers, pressure injuries, and surgical wounds (always swab these sites for screening if at risk)',
            'Check insertion sites of invasive devices (CVCs, cannulas, urinary catheters)'
          ],
          complications: ['Undetected carriage leading to healthcare-associated outbreaks', 'Transition of asymptomatic colonization to invasive infection (endogenous infection)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Chromogenic Agar Culture', finding: 'Growth of characteristically colored colonies on selective media within 18-24 hours', interpretation: 'Rapid, cost-effective screening method for MRSA, VRE, and ESBL' },
            { test: 'Molecular PCR Screening', finding: 'Direct detection of resistance genes (e.g., mecA, vanA/vanB, blaOXA-48, blaKPC, blaNDM) from swabs', interpretation: 'Provides results in 1-2 hours, enabling immediate pre-emptive isolation decisions' }
          ]
        },
        therapy: {
          empirical: {
            outpatient: [
              { drug: 'Pre-emptive Isolation', dose: 'Pending screening results', duration: '1-2 days', note: 'Start isolation at the time of screening for high-risk transfers until results confirm status' }
            ]
          },
          targeted: 'Positive screening leads to active isolation. For MRSA, decolonization therapy should be considered.',
          supportive: [
            'Immediate electronic or telephone notification of positive results to the infection control team (rapid alert)',
            'Clear labeling of carrier status in electronic health records and bedside'
          ],
          prevention: [
            'Strict hand hygiene discipline (screening is ineffective without proper compliance)',
            'Regular surveillance audits in participating departments'
          ]
        },
        prognosis: { mortality: 'Indirectly reduces HAI mortality by facilitating timely isolation and preventing transmission', prognostic_scores: [], factors: 'Screening compliance, laboratory turnaround time (TAT)' }
      },
      {
        id: 'decolonization_protocols',
        name: 'Decolonization (When, with what, and how?)',
        pathogen: { type: 'Preventive Treatment', name: 'Eradication of Pathogens from Skin and Mucosa (primarily MRSA)', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Successful MRSA decolonization reduces the risk of post-operative surgical site infections by up to 50-60%',
          risk_groups: ['Proven MRSA carriers before major elective surgeries (e.g., cardiothoracic, orthopedic implants)', 'ICU patients (targeted or universal decolonization)'],
          seasonality: 'Applied year-round according to clinical protocols',
          transmission: 'Endogenous MRSA from patient\'s own flora is the leading source of surgical site infections and catheter-related sepsis'
        },
        pathomechanism: {
          steps: [
            'Carriage Detection: Positive screening from nares or skin confirms MRSA colonization.',
            'Local Antiseptic Treatment: Application of targeted antiseptics to colonized anatomical sites (nares, skin, mouth).',
            'Drastic Load Reduction: Active agents destroy transient and superficial resident pathogens.',
            'Environmental Clearance: Daily changing of linen and pajamas during treatment prevents re-colonization from the environment.'
          ],
          virulence_factors: ['Mupirocin resistance (especially with prolonged, unmonitored use)', 'Chlorhexidine tolerance (presence of qacA/B genes)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Nasal Decolonization', description: 'With what: 2% Mupirocin nasal ointment (or octenidine-based gel). How: Apply a pea-sized amount to both nostrils using a cotton swab, then massage nostrils together. When: 2-3 times daily for 5 consecutive days.', severity: 'mild' },
            { name: 'Skin Decolonization (Full Body Wash)', description: 'With what: 2% or 4% Chlorhexidine gluconate (CHG) liquid antiseptic soap (or Octenidine/Polihexanide products). How: Daily full body shower (including hair wash on days 1 and 5). Leave antiseptic on skin for 1-2 minutes before rinsing. Focus on axilla, groin, and perineum.', severity: 'moderate' },
            { name: 'Oral Decolonization', description: 'With what: 0.12% - 0.2% Chlorhexidine mouthwash. How: Rinse and gargle with 15 ml for 1 minute twice daily. When: For heavy carriers or ventilated ICU patients (VAP prevention).', severity: 'mild' },
            { name: 'Supportive Environmental Hygiene', description: 'How: Provide clean pajamas, towels, underwear, and bed sheets daily during the 5-day course. Disinfect personal items like combs, glasses, and phones.', severity: 'mild' }
          ],
          physical_exam: [
            'Check skin integrity: Intact skin is required for CHG wash (avoid or adapt in severe eczema, psoriasis, or large open wounds due to irritation risk)',
            'Verify patient/nursing compliance and correct application technique'
          ],
          complications: ['Contact dermatitis or severe dry skin due to antiseptic soap use', 'Emergence of mupirocin resistance (hence the strict limit of 5-7 days for the protocol)']
        },
        diagnostics: {
          laboratory: [
            { test: 'Decolonization Control Screening', finding: 'Negative nasal and skin swabs taken at least 48-72 hours after completing the protocol', interpretation: 'Samples taken too early can yield false-negative results due to residual antiseptic activity' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Mupirocin 2% Nasal Ointment', dose: 'Apply 2-3x daily to both nares', duration: '5 days', note: 'Apply with cotton swab and squeeze/massage nasal wings' },
              { drug: 'Chlorhexidine 4% Liquid Soap', dose: 'Daily full body wash', duration: '5 days', note: 'Ensure hair is washed on day 1 and day 5' }
            ]
          },
          targeted: 'IMPORTANT: Currently, a well-defined and clinically proven decolonization protocol is available only for MRSA. There is no proven, routinely recommended decolonization strategy for VRE (Vancomycin-resistant Enterococcus) or Gram-negative MDROs (multidrug-resistant organisms, e.g., ESBL, CRE, Pseudomonas, Acinetobacter)!',
          supportive: [
            'Apply compatible moisturizing lotions at least 2 hours after CHG wash (so as not to interfere with the persistent antibacterial effect of CHG on skin)',
            'Use single-use washcloths for body washing'
          ],
          prevention: [
            'Strict ban on unrestricted, prolonged, or prophylactic mupirocin use',
            'Consider universal decolonization (daily CHG bathing for all patients) in high-risk ICUs'
          ]
        },
        prognosis: { mortality: 'Successful decolonization significantly lowers the risk of invasive infection and associated mortality', prognostic_scores: [], factors: 'Compliance, mupirocin susceptibility, skin integrity' }
      },
      {
        id: 'sterilization_disinfection',
        name: 'Sterilization and Disinfection',
        pathogen: { type: 'Hygiene Procedure', name: 'Decontamination of Environmental Surfaces and Medical Devices', gram: '-', shape: '-' },
        epidemiology: {
          incidence: 'Improperly reprocessed medical devices (e.g., endoscopes) can lead to severe or fatal outbreaks and cross-infections',
          risk_groups: ['Patients undergoing invasive procedures', 'Surgical patients', 'Patients undergoing endoscopic examinations'],
          seasonality: 'Critically important year-round',
          transmission: 'Indirect contact via contaminated medical instruments, devices, or high-touch surfaces'
        },
        pathomechanism: {
          steps: [
            'Contamination: Medical instruments become soiled with blood, body fluids, and pathogens during clinical use.',
            'Biofilm Formation: If not cleaned immediately, microorganisms form a protective biofilm, blocking disinfectant penetration.',
            'Cleaning and Pre-disinfection: The first and most critical step of reprocessing. Physical removal of soils and biofilms.',
            'Disinfection or Sterilization: Based on the risk classification, reducing microbial load (disinfection) or destroying all viable microbes including bacterial spores (sterilization).'
          ],
          virulence_factors: ['Extreme resistance of bacterial spores (e.g., C. difficile, B. anthracis)', 'Waxy mycobacterial cell wall (requiring high-level disinfection)', 'Extreme resistance of prions (requiring special autoclaving parameters)']
        },
        clinical: {
          incubation: '-',
          onset: '-',
          symptoms: [
            { name: 'Spaulding Classification of Medical Devices', description: 'Determines the level of reprocessing needed: 1. Critical devices (entering sterile tissue/vascular system - e.g., surgical instruments, implants) -> STERILIZATION mandatory. 2. Semicritical devices (contacting mucous membranes/non-intact skin - e.g., endoscopes, respiratory tubes) -> HIGH-LEVEL DISINFECTION (HLD) mandatory. 3. Noncritical devices (contacting intact skin - e.g., stethoscopes, BP cuffs) -> LOW/INTERMEDIATE DISINFECTION sufficient.', severity: 'severe' },
            { name: 'Physical Sterilization Methods', description: '1. Autoclave (Steam under pressure): Gold standard for heat-tolerant items. Parameters: 121 °C (15-20 min, 1 bar overpressure) or 134 °C (3-5 min, 2 bar overpressure). 2. Dry Heat Sterilizer: Only for glass/metal. Parameters: 160 °C (120 min) or 180 °C (30 min).', severity: 'mild' },
            { name: 'Low-Temperature (Chemical) Sterilization', description: 'For heat-sensitive (e.g., plastic, optical) devices: 1. Ethylene Oxide (EO) Gas: Highly penetrative, but toxic and flammable; requires long aeration times (12-24 hours). 2. Hydrogen Peroxide Gas Plasma: Fast (45-60 min), non-toxic, eco-friendly, but expensive and limited by narrow lumens.', severity: 'moderate' },
            { name: 'Chemical Disinfectants for Surfaces', description: '1. Alcohols (Ethanol, Isopropanol): Fast-acting, intermediate-level. Not sporicid! 2. Chlorine Compounds (Sodium Hypochlorite): Broad-spectrum, cheap, sporicid. Mandatory for C. difficile outbreaks! Corrosive. 3. Quaternary Ammonium Compounds (QUATs): Low-level, good cleaning properties, non-corrosive. 4. Glutaraldehyde / Peracetic Acid: High-level disinfection and chemical sterilization (e.g., endoscope reprocessing).', severity: 'moderate' }
          ],
          physical_exam: [
            'Verify package integrity, dryness, and expiration date of sterile packs before use',
            'Check chemical indicator strip color change on sterile packaging (proves sterilant exposure)'
          ],
          complications: ['Post-operative surgical site infection due to compromised or wet sterile packaging', 'Tissue irritation or chemical burns due to inadequate degassing after EO sterilization']
        },
        diagnostics: {
          laboratory: [
            { test: 'Biological Indicator (BI) Test', finding: 'Assessing viability of Geobacillus stearothermophilus or Bacillus atrophaeus spores after incubation', interpretation: 'Biological gold standard for verifying sterilizer efficacy (weekly/monthly requirement)' },
            { test: 'Bowie-Dick Test', finding: 'Uniform color change of the test sheet in the autoclave chamber', interpretation: 'Checks steam penetration and air removal efficiency (daily before the first run)' }
          ]
        },
        therapy: {
          empirical: {
            inpatient: [
              { drug: 'Immediate post-use cleaning', dose: 'Manual + enzymatic cleaning', duration: 'Immediately after use', note: 'Prevents drying of organic matter and biofilm formation' },
              { drug: 'Closed Container Transport', dose: 'Strict separation of sterile and contaminated instruments', duration: 'During transit', note: 'Establish separate clean and dirty transport corridors' }
            ]
          },
          supportive: [
            'Document and track all reprocessing steps (barcode tracking system)',
            'Regular validation and preventive maintenance of autoclaves and automated endoscope reprocessors (AER)'
          ],
          prevention: [
            'Centralize instrument reprocessing in the Central Sterile Services Department (CSSD)',
            'Continuous education of cleaning and disinfection personnel; monitor disinfectant concentration (e.g., via test strips)'
          ]
        },
        prognosis: { mortality: 'Indirectly: strict sterile technique and instrument sterility reduce postoperative infection risk to near zero', prognostic_scores: [], factors: 'Protocol adherence, equipment validation, continuous quality control' }
      }
    ]
  }
});

