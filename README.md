# Infectology Textbook (Infektológia Tankönyv)

An interactive, high-yield clinical infectology learning platform and decision support application designed for medical students, residents, and healthcare professionals. The application provides structured, detailed, and evidence-based information on infectious diseases, clinical scoring systems, and comprehensive infection control protocols.

---

## 🌟 Key Features

### 1. Comprehensive Medical Databases (16 Categories)
Structured disease categories covering key organ systems, pathogens, and syndromes:
* **Central Nervous System (CNS) Infections**: Meningitis, encephalitis, brain abscess, etc.
* **Thoracic & Respiratory Infections**: Pneumonia, pleuritis, lung abscess, bronchitis.
* **Abdominal Infections**: Peritonitis, cholangitis, liver abscesses.
* **Gastrointestinal Infections**: Bacterial, viral, and toxin-mediated enterocolitis.
* **Urinary Tract Infections**: Cystitis, pyelonephritis, catheter-associated UTIs (CAUTI).
* **Bone, Joint & Skin/Soft Tissue Infections**: Osteomyelitis, septic arthritis, cellulitis, necrotizing fasciitis.
* **Sexually Transmitted Diseases (STDs)**: Syphilis, gonorrhea, chlamydia, etc.
* **Childhood & Exanthematous Diseases**: Measles, rubella, varicella, mumps, scarlet fever.
* **Viral Hepatitis**: Hepatitis A, B, C, D, and E (virology, serology, and chronic management).
* **Systemic Infections & Sepsis**: Septic shock, infective endocarditis, catheter-related bloodstream infections (CRBSI).
* **Tropical & Travel Medicine**: Malaria, dengue, typhoid, cholera, yellow fever.
* **Zoonoses**: Lyme disease, rabies, brucellosis, tularemia, Q fever.
* **Parasitic Infections**: Toxoplasmosis, giardiasis, helminthic infections.
* **Emerging & Re-emerging Pathogens**: Covid-19, avian influenza, monkeypox, Ebola, Marburg.
* **Clinical Scoring Systems & Calculators**: High-yield calculators including CURB-65, qSOFA, Centor, Wells Score for PE/DVT, and Fine (PSI) score.
* **Infection Control & Prevention (Newly Expanded)**:
  - **Basics & Standard Precautions**: Hand hygiene, barrier nursing, PPE selection.
  - **Hand Hygiene**: 5 WHO moments, 6 rubbing steps, Alcohol-Based Hand Rub (ABHR) vs. soap and water guidelines.
  - **Isolation Measures**: Contact, droplet, airborne (negative pressure), and protective/reverse (positive pressure) isolation guidelines.
  - **MDRO Screening Protocols**: Active surveillance tests (when, where from, which swabs to take) for MRSA, VRE, ESBL, CRE/CPE, MRPA, and MRAB.
  - **Decolonization Protocols**: Clinical guidelines for nasal (mupirocin) and body (chlorhexidine) eradication, including important safety contraindications and clear clinical notes indicating that **no standard decolonization strategy exists for VRE or Gram-negative multidrug-resistant bacteria**.
  - **Sterilization & Disinfection**: Spaulding-classification of devices, physical (autoclave, dry heat), low-temperature chemical sterilization, and surface disinfectants (alcohols, chlorine compounds, QAVs).

### 2. Multi-Lingual Architecture
The entire platform, databases, search indexes, and interactive tools are fully translated and available in three languages, toggleable with a single click:
* 🇭🇺 **Hungarian (Magyar)**
* 🇬🇧 **English**
* 🇩🇪 **German (Deutsch)**

### 3. Study & Decision Support Enhancements
* **Interactive Study Notes**: Users can write, save, and manage localized notes linked directly to specific pathogen/disease cards, persisted securely.
* **Calculators with Live Interpretation**: Input patient vitals and laboratory markers to receive calculated risks and actionable clinical interpretations (e.g., inpatient vs. outpatient management recommendation).
* **Search and Filter Index**: Live fuzzy search over pathogen names, Gram stain characteristics, transmission vectors, and clinical symptoms.

---

## 🛠️ Technology Stack

* **Frontend Framework**: [React 19](https://react.dev/)
* **Build Tool**: [Vite 6](https://vite.dev/)
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
* **Animations**: [Motion](https://motion.dev/) (smooth transitions, expandable card physics, tab switching)
* **Icons**: [Lucide React](https://lucide.dev/)
* **Language/Type Safety**: [TypeScript](https://www.typescriptlang.org/)

---

## 📂 Folder Structure

```bash
├── src/
│   ├── assets/             # Statics, logos, images
│   ├── data/               # Disease database entries split by language
│   │   ├── *_hu.ts         # Hungarian database definitions
│   │   ├── *_en.ts         # English database definitions
│   │   ├── *_de.ts         # German database definitions
│   │   ├── calculators.ts  # Clinical score calculation logic
│   │   └── diseases.ts     # Main module grouping and indexers
│   ├── App.tsx             # Core single-page application and UI container
│   ├── index.css           # Global stylesheets and Tailwind CSS v4 imports
│   ├── main.tsx            # React application mount entry point
│   └── types.ts            # Common TypeScript typings for diseases, scores, and notes
├── package.json            # Scripts, build settings, and dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite bundler options
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine (v18 or higher recommended).

### 1. Clone & Setup
Clone your repository and navigate to the directory:
```bash
git clone <your-github-repository-url>
cd <repository-directory>
```

### 2. Install Dependencies
Install all package requirements using npm:
```bash
npm install
```

### 3. Launch Development Server
Start the local server with hot reloading enabled:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal output).

### 4. Build for Production
Create an optimized production bundle in the `dist` directory:
```bash
npm run build
```

### 5. Code Validation & Linting
Verify TypeScript type-safety and ensure no compilation errors:
```bash
npm run lint
```

---

## 🛡️ License

This project is configured for educational and clinical reference purposes. Please review institutional guidelines when applying infection control or decolonization practices in a physical hospital setting.
