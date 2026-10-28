# Harihar Chemicals - Modern Industrial Chemical Redesign

Modern, high-precision industrial chemical manufacturing & dyestuffs web platform for **Harihar Chemicals**, specializing in **Naphthols (Harithols), Fast Colour Bases, and Azoic Dyes** manufactured in **G.I.D.C. Ankleshwar, Gujarat (INDIA)**.

---

## 🎨 Design System: "Industrial Crimson & Precision Grey"

- **Primary Colors:** Industrial Crimson (`#D32F2F`), Ruby Dark (`#9A0007`), Soft Rose Tint (`#FFEBEE`)
- **Secondary Slate:** Tech Slate (`#1E293B`, `#334155`), Cool Slate (`#64748B`, `#E2E8F0`)
- **Dark Surfaces:** Deep Slate Charcoal (`#0F172A`), Elevated Dark Slate (`#1E293B`)
- **Typography:**
  - Standard UI: `Plus Jakarta Sans`
  - CAS Registry & Chemical Formulas: `JetBrains Mono`

---

## 🔬 Core Features & Interactive Capabilities

1. **Sticky Glassmorphism Header (`Navbar.jsx`):**
   - Industrial verification strip (ISO 9001:2015, Toll-free line, Mobile dispatch)
   - Hexagonal HC brand emblem & typography
   - One-click PDF download dropdown (Official Shade Card PDF & Corporate Brochure PDF)
   - Direct RFQ trigger and responsive mobile navigation drawer.

2. **Interactive Scientific Molecular Canvas (`MolecularCanvas.jsx`):**
   - High-precision particle canvas simulating azo chromophores and covalent bonds reacting dynamically to mouse physics.

3. **Filterable Chemical Catalog (`ProductCatalog.jsx`):**
   - Category filtering across Naphthols (Harithols) and Fast Colour Bases.
   - Real-time search across Chemical Name, CAS Registry Number, C.I. Index, and HSN tariff codes.
   - 1-click clipboard copy for CAS numbers.
   - Comprehensive technical modal with chemical formula, molecular weight, substantivity, and dissolving recipes.

4. **Interactive Industrial Shade Card Matrix (`ShadeCardExplorer.jsx`):**
   - Directly calibrated from pages 7 to 15 of Harihar's physical shade cards.
   - Interactive coupling matrix: select any Naphthol (AS, AS-BO, AS-BS, AS-G, AS-OL, AS-SW, AS-D, AS-TR, AS-E) and couple with any Fast Base.
   - Live visual swatch rendering side-by-side at **1% Light Depth** and **4% Full Commercial Shade**.
   - Dye bath parameters (Liquor ratio 1:20, absorption per 100 kg cotton, Harithol & Base g/l).
   - ISO fastness ratings (Light 1–8, Soda boil 1–5, Chlorine bleach, Peroxide, Hot pressing).

5. **Dyeing & Diazotisation Technical Protocol Guide (`DyeingProcessGuide.jsx`):**
   - 4-Stage dyeing workflow (Impregnation, hydroextraction, diazo development, and aftertreatments).
   - Hot dissolving method (TRO 50% & boiling caustic) vs Cold dissolving method (methylated spirit).
   - Diazotisation Method 1 (soluble bases) vs Method 2 (insoluble hydrochloride pastes).

6. **State-of-the-Art Plant & Equipment Showcase (`EquipmentExplorer.jsx`):**
   - Stainless Steel 316 reaction suites, Glass-Lined reactors, neutralisation tanks.
   - 25 MT / 24 hr cryogenic ice flake plants for 0°C–10°C diazo control.
   - Hydraulic filter presses and micro-pulverizers (200–300 mesh control).
   - Authentic cropped plant imagery (Plot J-5248 entrance, synthesis suites, and testing lab).

7. **Quality Control & Authentic Certification Showcase (`QualityAssurance.jsx`):**
   - Automatic Infra-Red (IR) dyeing machines (Delta-E < 0.50 tolerance).
   - UV-VIS double-beam spectrophotometry and TLC reaction monitoring.
   - Interactive fullscreen lightbox inspection for authentic accreditations:
     - ISO 9001:2015 QRO Quality Management Certificate
     - Vibrant Gujarat 2017 Certificate of Investment Intention
     - Ankleshwar Industries Association (AIA) Life Membership

8. **Multi-Step Technical RFQ Modal (`RfqModal.jsx`):**
   - Step 1: Chemical selection, packaging format (1kg pouch, 25kg bags, 25kg drums, 100kg HDPE drums), batch volume, and fiber application.
   - Step 2: Commercial buyer details, destination country, and incoterms.
   - Step 3: Instant pre-formatted WhatsApp link directly to Mr. Prakash C Rawal (Director) and direct factory email link.

---

## 🚀 Development & Build Commands

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build optimized production bundle
npm run build

# Preview production build
npm run preview
```
