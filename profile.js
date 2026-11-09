/* =====================================================================
   PROFILE DATA: the ONLY file you edit to update every CV theme.
   Used by: /CV/ (Terminal), /Comic_Theme_CV_Template/, /StrangerThings_CV_Template/,
            /Batman_Theme_CV_Template/, /DosGame_Theme_CV_Template/ and the Dossier portal.
   Rules:
   - Keep the quotes and commas exactly as they are; text goes between the quotes.
   - <b>...</b> makes text bold. Use plain Unicode for symbols (Ar⁺, °, µ, ³).
   - Newest item first in every list.
   After editing: commit + push this repo (Dossier). All pages update within ~10 min (GitHub cache).
   ===================================================================== */
window.PROFILE = {
  name: "BHARAT SINGH RAWAT, Ph.D.",
  title: "ION SOURCE & BEAM DIAGNOSTICS EXPERT",
  summary: "Expert in manipulating charged particle beams with 7+ years of experience in the design of ion sources, beam extraction/transport systems, and digital twins.",

  links: [
    { label: "PROJECT_DT", url: "https://bharat-singh-rawat.github.io/AEgIS_Electromagnets_Outreach/" },
    { label: "PY-BEMCS",   url: "https://github.com/Bharat-Singh-Rawat/PY-BEMCS" }
  ],

  experience: [
    {
      role: "Accelerator Physicist",
      org: "Basilisk Industries, Vancouver, Canada",
      dates: "10/2026 — Present",
      bullets: [
        "Simulating the <b>electron injector</b>, including <b>beam extraction</b> and <b>beam transport</b>.",
        "Working on <b>accelerator design</b> and <b>beam diagnostics</b>."
      ]
    },
    {
      role: "Lead Developer / Independent Researcher",
      org: "PY-BEMCS",
      dates: "03/2026 — Present",
      bullets: [
        "Developing <b>PY-BEMCS</b>, a Python multiphysics suite for simulating ion-beam extraction and Monte Carlo Collision (MCC) physics in ion sources / thrusters and fusion Neutral Beam Injectors (NBI).",
        "Developed a self-consistent <b>Poisson solver</b> integrating Bohm-criterion-based extraction.",
        "Implemented dynamic <b>sputter erosion and structural failure</b> logic using probabilistic Charge-Exchange (CEX) scattering and in-situ mesh erosion to predict grid <b>End-of-Life (EOL)</b>.",
        "Integrated a modular backend coupling <b>thermal heat maps</b> with secondary electron emission (SEE) and RF-based co-extraction models.",
        "Built a <b>GUI + DAQ</b> system with real-time visualization of plasma meniscus, damage maps, electron backstreaming potential and beam divergence."
      ]
    },
    {
      role: "Research Associate",
      org: "University of Liverpool / Cockcroft Institute / CERN",
      dates: "2023 — 2026",
      bullets: [
        "Led <b>ballistic antiproton transport</b> optimization during the annual shutdown using a 3D CST Penning Trap model — validated the new Positronium target design and identified settings to achieve antiproton velocities <b>below 2000 m/s</b>.",
        "Carried out simulation studies on the <b>Rotating Wall trap</b> of the AEgIS apparatus to identify the optimal frequency for trapping antiprotons.",
        "Developed <b>Reduced Order Models (ROMs)</b> for a Digital Twin of the Penning–Malmberg trap, integrating first-principles physics with ML to predict trap behaviour and optimize particle confinement.",
        "Executed on-shift responsibilities during beam time, including real-time DAQ and management of cryogenic systems for superconducting magnets."
      ]
    },
    {
      role: "Radiation Protection Engineer",
      org: "Nuvia India Pvt Limited",
      dates: "2018 — 2018",
      bullets: [
        "Managed occupational radiation exposure at Kakrapar Atomic Power Station, ensuring strict adherence to weekly, monthly and annual regulatory dose limits.",
        "Developed an automated dose-tracking spreadsheet to monitor exposure trends and identify personnel approaching threshold limits, enabling proactive safety interventions."
      ]
    }
  ],

  education: [
    {
      role: "Ph.D.",
      org: "Homi Bhabha National Institute / Institute for Plasma Research",
      dates: "2018 — 2024",
      bullets: [
        "Designed, developed and characterised a <b>ring cusp ion source</b> for space propulsion and fusion research, producing Ar⁺ beams at <b>1–2 keV / up to 100 mA</b> with an average <b>0.23 mA per aperture</b>.",
        "Engineered a nine-channel <b>Parallel Wire Array (PWA)</b> and a <b>Faraday Cup Array (FCA)</b> for real-time, in-situ ion-beam profile monitoring.",
        "Investigated space-charge neutralisation using a hot-filament cathode, achieving up to <b>100% degree of neutralisation</b>.",
        "Used <b>CST Studio</b> for magnetic cusp optimisation and <b>OPERA-3D</b> for ion-optics design — achieved a low beam divergence of <b>6.5°</b>; transient thermo-structural ANSYS analysis limited grid thermal deformation to <b>&lt;0.1 mm</b>."
      ]
    },
    {
      role: "M.Tech. Nuclear Engineering",
      org: "Pandit Deendayal Petroleum University",
      dates: "2015 — 2017",
      bullets: [
        "Developed a <b>10 kW Faraday Cup</b> for 20–30 mA beam currents — a major upgrade over the legacy 1 kW / 500 µA system.",
        "Engineered a water-cooling system holding peak temperature to <b>350.6 °C</b>, well below copper's 1085 °C melting point.",
        "Determined optimal suppression voltage of <b>−450 to −500 V</b> via SIMION 8.0 and LORENTZ particle tracking.",
        "Optimised a 30° cone geometry, reducing total secondary electron yield by a factor of <b>1.15</b> compared to larger angles."
      ]
    },
    {
      role: "B.E. Mechanical Engineering",
      org: "Gujarat Technological University",
      dates: "2009 — 2013",
      bullets: [
        "<b>Thesis — Long Chain Beamer braking system:</b> showed cast iron in place of hardened mild steel reduced per-stop temperature rise by 1.39 °C, improving safety for heat-sensitive cotton.",
        "<b>Project — Ice-cream cup packaging machine:</b> diagnosed mechanical misalignments and recovered output from <b>9,600 → 11,200 cups/hr</b>, restoring near-design capacity."
      ]
    }
  ],

  publications: [
    { venue: "Instruments (2026)", title: "Characterization of the extraction system of supersonic gas curtain-based ionization profile monitor for flash proton therapy." },
    { venue: "IBIC (2025)", title: "Design studies of a Retarding Potential Energy Analyser (RPEA) for low energy antimatter experiments." },
    { venue: "Instruments (2025)", title: "Faraday cups: principles, designs, and applications across scientific disciplines—a review." },
    { venue: "EXA-LEAP (2025)", title: "3D simulation studies of mixed plasma confinement at AEgIS." },
    { venue: "Phys. Rev. Lett. (2024)", title: "Positronium Laser Cooling via the 1³S-2³P Transition with a Broadband Laser Pulse." },
    { venue: "HBNI Ph.D. Dissertation (2024)", title: "Studies on Extraction of an Ion beam and its Transport from a Multi-Cusp Gridded Ion Source." },
    { venue: "IPAC (2024)", title: "Simulation studies for the confinement of antiprotons for the AEgIS experiment." },
    { venue: "IEEE TPS (2023)", title: "Experimental Studies on the Roles of Space Charge Neutralization in a Ring Cusp Ion Source." },
    { venue: "AIP Advances (2022)", title: "Measurement system for ion beam profiles using fixed parallel wires and Faraday cup array." },
    { venue: "IEEE TPS (2021)", title: "Characterization of a Multicusp Ion Source with Two-Grid Extraction System for Studying Extraction and Transport of Ion Beam." },
    { venue: "ICONE25 (2017)", title: "Design and simulation of 10kW Faraday cup for ion beam current." }
  ],

  talks: [
    { type: "Invited talk", text: "\"Design tutorial on FC design for low energy antimatter research using CST studio\" CST User day, 2025, Nottingham, UK." },
    { type: "Contributed talk", text: "\"Digital Twin-Enabled Modeling of Antimatter Beam Control\" EuPRAXIA-DN, 2025, Lisbon, Portugal." },
    { type: "Contributed talk", text: "\"Trapping Antiprotons: Modeling Penning-Malmberg Traps for AEgIS\" SIMULIA RUM, 2025, Manchester, UK." },
    { type: "Contributed talk", text: "\"Design and Simulation of 10 kW Faraday Cup\" ICONE25, 2017, Shanghai, China." }
  ],

  hobbies: [
    { icon: "♟",  name: "CHESS",       tag: "STRATEGY",    detail: "Chess player - Level ELO 1725, 1900 on chess.com" },
    { icon: "🌍", name: "LANGUAGES",   tag: "POLYGLOT",    detail: "English, Hindi, Gujarati, Spanish (B2), Russian (A1)" },
    { icon: "🎵", name: "INSTRUMENTS", tag: "INSTRUMENTS", detail: "Keyboards, Harmonium, Melodica, Keytar and Guitar" },
    { icon: "✈️", name: "TRAVELING",   tag: "GEOGRAPHY",   detail: "Travelled over 12 countries and still counting..." }
  ],

  skills: [
    { label: "Languages", text: "English (fluent), Hindi &amp; Gujarati (native), Spanish (B2), Russian (A1)." },
    { label: "Coding", text: "Python, MATLAB, C++." },
    { label: "Particle &amp; Field Solvers", text: "CST Studio (Particle Tracking, ES/EM-PIC), OPERA-3D, SIMION, IBISIMU, COMSOL, RF Track, ASTRA, MAD-X, Geant4, G4Beamline, BDSIM, TAICHI, <b>PY-BEMCS (developer)</b>." },
    { label: "CAD / Multiphysics", text: "SolidWorks, ANSYS (Thermal / Structural / CFD)." },
    { label: "Outreach", text: "Designed interactive web games for antimatter physics outreach; ran live superconductivity / magnetic-levitation demonstrations." },
    { label: "Teaching &amp; Misc.", text: "Co-instructor — <i>Introduction to Beam Diagnostics</i>; HPC computing; doctoral-student supervision." }
  ],
  expertise: "Ion source design, beam extraction &amp; transport optimisation, space-charge neutralisation, advanced beam diagnostics, digital twins for charged-particle traps."
};

/* Tiny helper shared by the themes: map a list to HTML. */
window.cvMap = function (list, fn) { return (list || []).map(fn).join(""); };
