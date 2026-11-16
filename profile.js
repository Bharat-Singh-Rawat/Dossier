/* =====================================================================
   PROFILE DATA: the ONLY file you edit to update every CV theme.
   Used by: /CV/ (Terminal), /Comic_Theme_CV_Template/, /StrangerThings_CV_Template/,
            /Batman_Theme_CV_Template/, /DosGame_Theme_CV_Template/ and the Dossier portal.
   Rules:
   - Keep the quotes and commas exactly as they are; text goes between the quotes.
   - <b>...</b> makes text bold. Use plain Unicode for symbols (Ar⁺, °, µ, ³).
   - Newest item first in every list.
   - place: { name, lat, lon } (or a list of them) puts a pin on the v2 career globe;
     trips: [{ name, lat, lon, note }] adds conference/poster trips taken during that role.
   After editing: commit + push this repo (Dossier). All pages update within ~10 min (GitHub cache).
   ===================================================================== */
window.PROFILE = {
  name: "BHARAT SINGH RAWAT, Ph.D.",
  title: "ION SOURCE & BEAM DIAGNOSTICS EXPERT",
  location: "Vancouver, Canada",
  // Profile photo for the main CV sidebar: a full URL or a path like "/CV/assets/img/photo.jpg". Leave "" to show initials.
  photo: "",
  summary: "Expert in charged particle beams with over 7 years of experience in the design of ion sources, beam diagnostics, and transport systems.",

  // Visitor stats: your GoatCounter code (the "xyz" in xyz.goatcounter.com). Leave "" to turn tracking off.
  goatcounter: "bharatrawat",

  links: [
    { label: "bharat.bharat22@gmail.com", url: "mailto:bharat.bharat22@gmail.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/bharat-singh-rawat-ph-d-52b914315/" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=gQP3HLAAAAAJ&view_op=list_works&sortby=pubdate" },
    { label: "GitHub", url: "https://github.com/Bharat-Singh-Rawat" },
    { label: "AEgIS Digital Twin Outreach", url: "https://bharat-singh-rawat.github.io/AEgIS_Electromagnets_Outreach/" },
    { label: "PY-BEMCS",   url: "https://github.com/Bharat-Singh-Rawat/PY-BEMCS" },
    { label: "YouTube", url: "https://www.youtube.com/@bharatrawat5909" }
  ],

  experience: [
    {
      role: "Accelerator Physicist",
      org: "Basilisk Industries, Vancouver, Canada",
      place: { name: "Vancouver, Canada", lat: 49.28, lon: -123.12 },
      dates: "10/2026 — Present",
      bullets: [
        "Responsible for <b>electron injector design</b>, electron optics analysis and optimisation.",
        "Developing plasma and beam diagnostics such as <b>B-dot probes</b>, <b>Faraday cups</b>, <b>Langmuir probes</b> and current monitors."
      ]
    },
    {
      role: "Independent R&amp;D and Scientific Consulting",
      org: "PY-BEMCS · consulting for start-ups and labs",
      place: { name: "Ahmedabad, India", lat: 23.03, lon: 72.58 },
      dates: "03/2026 — 10/2026",
      bullets: [
        "Developed <b>PY-BEMCS</b>, a Python-based multiphysics suite for simulating ion-beam extraction and Monte Carlo Collision (MCC) physics in ion sources / thrusters and fusion Neutral Beam Injectors (NBI).",
        "Developed a self-consistent <b>Poisson solver</b> integrating Bohm-criterion-based extraction.",
        "Implemented dynamic <b>sputter erosion and structural failure</b> logic using probabilistic Charge-Exchange (CEX) scattering models and in-situ mesh erosion to predict grid <b>End-of-Life (EOL)</b>.",
        "Provided scientific consultancy to start-ups and labs in <b>electric propulsion</b>, <b>ion sources</b>, plasma-based systems and other cross-disciplinary areas, covering modelling, design and optimisation."
      ]
    },
    {
      role: "Research Associate",
      org: "University of Liverpool / Cockcroft Institute / CERN",
      place: [{ name: "Liverpool, UK", lat: 53.41, lon: -2.97, photos: ["/CV/v2/img/travel/ibic.webp", "/CV/v2/img/travel/daresbury.webp", "/CV/v2/img/travel/liverpool.webp"] }, { name: "CERN, Geneva", lat: 46.23, lon: 6.05, photos: ["/CV/v2/img/travel/cern.webp"] }],
      dates: "2023 — 2026",
      bullets: [
        "Led <b>ballistic antiproton transport</b> optimisation studies during the annual shutdown, using a 3D CST Penning Trap model to validate the new Positronium target design and determine operational settings for antiproton velocities <b>below 2000 m/s</b>.",
        "Developed <b>Reduced Order Models (ROMs)</b> for a Digital Twin of the Penning–Malmberg trap apparatus, integrating first-principles physics with Machine Learning to predict trap behaviour and optimise particle confinement.",
        "Executed on-shift responsibilities during beam time, including real-time data acquisition and management of cryogenic systems for superconducting magnets."
      ]
    },
    {
      role: "Radiation Protection Engineer",
      org: "Nuvia India Pvt Limited",
      place: { name: "Kakrapar, Gujarat, India", lat: 21.24, lon: 73.35 },
      dates: "2018",
      bullets: [
        "Managed occupational radiation exposure for plant personnel at Kakrapar Atomic Power Station, ensuring strict adherence to weekly, monthly and annual regulatory dose limits.",
        "Developed an automated dose-tracking spreadsheet to monitor exposure trends and identify personnel approaching threshold limits, enabling proactive safety interventions."
      ]
    },
    {
      role: "Research Intern",
      org: "Beam Plasma Systems Lab, Moscow Institute of Physics and Technology (MIPT), Russia",
      place: { name: "MIPT, Moscow", lat: 55.93, lon: 37.52 },
      dates: "09/2017 — 10/2017",
      bullets: [
        "Carried out studies on <b>visible spectroscopy diagnostics</b> of the <b>electron beam source</b> at the Beam Plasma Systems Laboratory."
      ]
    }
  ],

  education: [
    {
      role: "Ph.D.",
      org: "Homi Bhabha National Institute / Institute for Plasma Research",
      place: { name: "Gandhinagar, India", lat: 23.16, lon: 72.66 },
      trips: [{ name: "Gyeongju, South Korea", lat: 35.86, lon: 129.22, note: "ICPP 2020 poster" }],
      dates: "2018 — 2024",
      bullets: [
        "Designed, developed and characterised a <b><a href=\"https://www.researchgate.net/publication/380433338_Studies_on_Extraction_of_an_Ion_beam_and_its_Transport_from_a_Multi-Cusp_Gridded_Ion_Source\" target=\"_blank\" rel=\"noopener\">ring cusp ion source</a></b> for space propulsion and fusion research, producing Ar⁺ beams at <b>1–2 keV / up to 100 mA</b> with an average <b>0.23 mA per aperture</b>.",
        "Engineered a nine-channel <b>Parallel Wire Array (PWA)</b> and a <b>Faraday Cup Array (FCA)</b> for real-time, in-situ ion-beam profile monitoring.",
        "Investigated space-charge neutralisation using a hot-filament cathode, achieving up to <b>100% degree of neutralisation</b>.",
        "Used <b>CST Studio</b> for magnetic cusp optimisation and <b>OPERA-3D</b> for ion-optics design — achieved a low beam divergence of <b>6.5°</b>; transient thermo-structural ANSYS analysis limited grid thermal deformation to <b>&lt;0.1 mm</b>."
      ]
    },
    {
      role: "M.Tech. Nuclear Engineering",
      org: "Pandit Deendayal Petroleum University",
      place: { name: "Gandhinagar, India", lat: 23.16, lon: 72.67, photos: ["/CV/v2/img/travel/mtech.webp"] },
      dates: "2015 — 2017",
      bullets: [
        "Developed a <b><a href=\"https://www.researchgate.net/publication/356191414_Design_and_Development_of_10_kW_Faraday_Cup_for_Ion_beam_intensity_measurement\" target=\"_blank\" rel=\"noopener\">10 kW Faraday Cup</a></b> for 20–30 mA beam currents — a major upgrade over the legacy 1 kW / 500 µA system.",
        "Engineered a water-cooling system holding peak temperature to <b>350.6 °C</b>, well below copper's 1085 °C melting point.",
        "Determined optimal suppression voltage of <b>−450 to −500 V</b> via SIMION 8.0 and LORENTZ particle tracking.",
        "Optimised a 30° cone geometry, reducing total secondary electron yield by a factor of <b>1.15</b> compared to larger angles."
      ]
    },
    {
      role: "B.E. Mechanical Engineering",
      org: "Gujarat Technological University",
      place: { name: "Ahmedabad, India", lat: 23.03, lon: 72.58 },
      dates: "2009 — 2013",
      bullets: [
        "<b>Thesis — Long Chain Beamer braking system:</b> showed cast iron in place of hardened mild steel reduced per-stop temperature rise by 1.39 °C, improving safety for heat-sensitive cotton.",
        "<b>Project — Ice-cream cup packaging machine:</b> diagnosed mechanical misalignments and recovered output from <b>9,600 → 11,200 cups/hr</b>, restoring near-design capacity."
      ]
    }
  ],

  publications: [
    { venue: "Instruments (2026)", title: "Invasiveness study of supersonic gas-curtain-based ionization profile monitor for medical accelerators.",
      authors: "Butcher, W.; Kumar, N.; Patel, M.; Rawat, B.S.; Stringer, O.; Parambil, F.T.M.; Zhang, H.; Welsch, C.P.", doi: "10.3390/instruments10030035" },
    { venue: "Instruments (2026)", title: "Characterization of the extraction system of supersonic gas curtain-based ionization profile monitor for flash proton therapy.",
      authors: "Thesni, F.; Patel, M.; Kumar, N.; Rawat, B.S.; Butcher, W.; Price, T.; Welsch, C.P.", doi: "10.3390/instruments10010004" },
    { venue: "IBIC (2025)", title: "Design studies of a Retarding Potential Energy Analyser (RPEA) for low energy antimatter experiments." },
    { venue: "Instruments (2025)", title: "Faraday cups: principles, designs, and applications across scientific disciplines—a review.", badge: "Journal cover",
      authors: "Rawat, B.S.; Kumar, N.; Ghosal, D.; Aflyatunova, D.; Rienäcker, B.; Welsch, C.P.", doi: "10.3390/instruments9030020" },
    { venue: "EXA-LEAP (2025)", title: "3D simulation studies of mixed plasma confinement at AEgIS." },
    { venue: "Phys. Rev. Lett. (2024)", title: "Positronium Laser Cooling via the 1³S-2³P Transition with a Broadband Laser Pulse." },
    { venue: "HBNI Ph.D. Dissertation (2024)", title: "Studies on Extraction of an Ion beam and its Transport from a Multi-Cusp Gridded Ion Source.",
      authors: "Rawat, B.S.", doi: "10.13140/RG.2.2.14806.25929" },
    { venue: "IPAC (2024)", title: "Simulation studies for the confinement of antiprotons for the AEgIS experiment." },
    { venue: "IEEE TPS (2023)", title: "Experimental Studies on the Roles of Space Charge Neutralization in a Ring Cusp Ion Source.",
      authors: "Rawat, B.S.; Sharma, S.K.; Prahlad, V.; Choksi, B.; Baruah, U.K.", doi: "10.1109/TPS.2023.3302419" },
    { venue: "AIP Advances (2022)", title: "Measurement system for ion beam profiles using fixed parallel wires and Faraday cup array.",
      authors: "Rawat, B.S.; Sharma, S.K.; Choksi, B.; Prahlad, V.; Baruah, U.K.", doi: "10.1063/5.0117836" },
    { venue: "IEEE TPS (2021)", title: "Characterization of a Multicusp Ion Source with Two-Grid Extraction System for Studying Extraction and Transport of Ion Beam.",
      authors: "Rawat, B.S.; Sharma, S.K.; Choksi, B.; Bharathi, P.; Sridhar, B.; Gupta, L.N.; Thakkar, D.; Parmar, S.L.; Prahlad, V.; Baruah, U.K.", doi: "10.1109/TPS.2021.3121519" },
    { venue: "ICONE25 (2017)", title: "Design and simulation of 10kW Faraday cup for ion beam current.",
      authors: "Rawat, B.S.; Vala, S.; Abhangi, M.; Kumar, R.; Chauhan, S.", doi: "10.1115/ICONE25-67589" }
  ],

  talks: [
    { type: "Invited talk", text: "\"Design tutorial on FC design for low energy antimatter research using CST Studio\" CST User Day, October 2025, Nottingham, United Kingdom.", place: { name: "Nottingham, UK", lat: 52.95, lon: -1.15, photos: ["/CV/v2/img/travel/nottingham.webp"] } },
    { type: "Contributed talk", text: "\"Digital Twin-Enabled Modeling of Antimatter Beam Control: Insights from AEgIS to EuPRAXIA\" EuPRAXIA-DN Camp II: Science, July 2025, Lisbon, Portugal.", place: { name: "Lisbon, Portugal", lat: 38.72, lon: -9.14, photos: ["/CV/v2/img/travel/lisbon.webp"] } },
    { type: "Contributed talk", text: "\"Trapping Antiprotons: Modeling Penning-Malmberg Traps for AEgIS at CERN\" SIMULIA Euronorth Regional User Meeting, June 2025, Manchester, United Kingdom.", place: { name: "Manchester, UK", lat: 53.48, lon: -2.24, photos: ["/CV/v2/img/travel/manchester.webp"] } },
    { type: "Contributed talk", text: "\"Design and Simulation of 10 kW Faraday Cup for Ion Beam Current Measurement\" 25th International Conference on Nuclear Engineering (ICONE25), 2017, Shanghai, China.", place: { name: "Shanghai, China", lat: 31.23, lon: 121.47, note: "talk & poster", photos: ["/CV/v2/img/travel/shanghai.webp"] } }
  ],

  hobbies: [
    { icon: "♟",  name: "CHESS",       tag: "STRATEGY",    detail: "Chess player - Level ELO 1725, 1900 on chess.com",
      link: "https://www.chess.com/member/blunderapiece26/stats" },
    { icon: "🎵", name: "INSTRUMENTS", tag: "INSTRUMENTS", detail: "Keyboards, Harmonium, Melodica, Keytar and Guitar",
      media: { keyboard: { id: "9ILxCY6QcHY", title: "Sweet Child O' Mine · Guns N' Roses" }, guitar: { id: "38g42XT6fIc", title: "Boulevard of Broken Dreams · Green Day" } } },
    { icon: "✈️", name: "TRAVELING",   tag: "GEOGRAPHY",   detail: "Travelled over 12 countries and still counting..." }
  ],

  skills: [
    { label: "Languages", text: "English (fluent), Hindi &amp; Gujarati (native), Spanish (B2), Russian (A1)." },
    { label: "Coding", text: "Python, MATLAB, C++." },
    { label: "Machine Learning", text: "PyTorch, scikit-learn." },
    { label: "Dev &amp; Computing", text: "Git, Linux, HPC." },
    { label: "Particle &amp; Field Solvers", text: "CST Studio (Particle Tracking, ES/EM-PIC), OPERA-3D, SIMION, IBISIMU, COMSOL, RF Track, ASTRA, MAD-X, Geant4, G4Beamline, TRAK, BDSIM, <b>PY-BEMCS (developer)</b>." },
    { label: "CAD / Multiphysics", text: "SolidWorks, ANSYS (Thermal / Structural / CFD)." },
    { label: "Hands-on / Lab", text: "High-voltage (HV) systems, vacuum systems, DAQ hardware, control systems." },
    { label: "Outreach", text: "Designed interactive web games for antimatter physics outreach; ran live superconductivity / magnetic-levitation demonstrations." },
    { label: "Teaching &amp; Misc.", text: "Co-instructor — <i>Introduction to Beam Diagnostics</i>; HPC computing tutorials; doctoral-student supervision." }
  ],
  // Time zone for the "It's 9:14 am in Vancouver" line on the v2 site
  timezone: "America/Vancouver",

  // Skills network on the v2 site: which skills were used in which work. Edit freely.
  graph: {
    skills: [
      { id: "cst", label: "CST Studio" }, { id: "opera", label: "OPERA-3D" }, { id: "simion", label: "SIMION" },
      { id: "ansys", label: "ANSYS" }, { id: "sw", label: "SolidWorks" }, { id: "py", label: "Python" },
      { id: "ml", label: "Machine learning" }, { id: "mc", label: "Monte Carlo / PIC" }, { id: "g4", label: "Geant4 / G4Beamline" },
      { id: "madx", label: "MAD-X" }, { id: "hv", label: "HV & vacuum" }, { id: "daq", label: "DAQ" }
    ],
    work: [
      { id: "basilisk", label: "Basilisk · electron injector" }, { id: "pybemcs", label: "PY-BEMCS" },
      { id: "aegis", label: "AEgIS digital twin" }, { id: "ringcusp", label: "Ring-cusp ion source" }, { id: "fc", label: "10 kW Faraday cup" }
    ],
    links: {
      cst: ["aegis", "ringcusp"], opera: ["ringcusp"], simion: ["fc"], ansys: ["ringcusp", "fc"], sw: ["ringcusp", "fc"],
      py: ["pybemcs", "aegis"], ml: ["aegis"], mc: ["pybemcs"], g4: ["aegis"], madx: ["aegis"],
      hv: ["basilisk", "ringcusp", "aegis"], daq: ["basilisk", "ringcusp", "aegis"]
    }
  },

  // About blurb + photo for the v2 site
  about: {
    photo: "/CV/v2/img/profile.webp",
    photoAlt: "Portrait of Bharat Singh Rawat",
    text: "I work with electron and ion sources and the diagnostics that measure their beams. From Faraday cups and Langmuir probes to digital twins of antimatter traps, I build the tools that create, steer and measure charged-particle beams."
  },

  // Travel pins for the v2 career globe ("Travel" mode). note, photos and cities (small dots under one pin) are optional.
  // Any place (jobs, talks, travels) can carry photos: ["/CV/v2/img/travel/x.webp"]; they pop up on the globe.
  travels: [
    { name: "Vienna, Austria", lat: 48.21, lon: 16.37, note: "EXA / LEAP conference", photos: ["/CV/v2/img/travel/vienna-exa.webp", "/CV/v2/img/travel/vienna.webp"] },
    { name: "Rome, Italy", lat: 41.90, lon: 12.50, note: "EuPRAXIA talk", photos: ["/CV/v2/img/travel/rome.webp", "/CV/v2/img/travel/vatican.webp"] },
    { name: "Toledo, Spain", lat: 39.86, lon: -4.02, note: "2025", photos: ["/CV/v2/img/travel/toledo.webp"] },
    { name: "Tashkent, Uzbekistan", lat: 41.30, lon: 69.24, note: "Chorsu Bazaar", photos: ["/CV/v2/img/travel/tashkent.webp"] },
    { name: "Samarkand, Uzbekistan", lat: 39.65, lon: 66.96, note: "Bibi-Khanym Mosque", photos: ["/CV/v2/img/travel/samarkand.webp"] },
    { name: "Macau", lat: 22.20, lon: 113.54, note: "", photos: ["/CV/v2/img/travel/macau.webp"] },
    { name: "Bali, Indonesia", lat: -8.41, lon: 115.19, note: "Scuba diving", photos: ["/CV/v2/img/travel/bali.webp"] },
    { name: "Colombia", lat: 4.64, lon: -75.49, note: "", photos: ["/CV/v2/img/travel/colombia.webp"],
      cities: [
        { name: "Bogotá", lat: 4.71, lon: -74.07 }, { name: "Cartagena", lat: 10.39, lon: -75.48 },
        { name: "Medellín", lat: 6.24, lon: -75.58 }, { name: "Barranquilla", lat: 10.97, lon: -74.80 },
        { name: "Pereira", lat: 4.81, lon: -75.69 }, { name: "Cocora Valley", lat: 4.64, lon: -75.49 }
      ] }
  ],

  // "What I can offer" (v2 site)
  offer: [
    { title: "Consulting", text: "Ion-source and particle-trap design, beam diagnostics and simulation-based studies with CST Studio, MAD-X and more." },
    { title: "Mentoring", text: "Guidance for MS and Ph.D. applicants: application strategy, cover letters and CVs." },
    { title: "Talks & outreach", text: "Seminars, expert lectures and school talks on ion sources, electric propulsion and particle accelerators." },
    { title: "Recruitment support", text: "I can help companies and research groups find qualified talent in plasma physics, ion sources and applied physics through my professional network." }
  ],

  // YouTube videos for the v2 site (id = the part after watch?v=). kind: "Lecture" or "Simulation".
  videos: [
    { id: "MTmpGtE0Vac", kind: "Lecture", title: "Ion optics modelling and PY-BEMCS" },
    { id: "NVWWLCaklh0", kind: "Lecture", title: "Beam diagnostics lecture, University of Liverpool" },
    { id: "X6NGxnS5N4s", kind: "Simulation", title: "Interactive Monte Carlo Collision simulator for ion thrusters" },
    { id: "HBl5Q7DB5v8", kind: "Simulation", title: "Ion thruster grid erosion" },
    { id: "7ptHsSjHXnE", kind: "Simulation", title: "3D PIC simulation of an ion thruster" },
    { id: "mD-7pl7TlME", kind: "Simulation", title: "PIC simulation of a retarding potential energy analyser" },
    { id: "AJUG2oBRa5o", kind: "Simulation", title: "Real-time field analysis of superconducting magnets" },
    { id: "iHaCKoZ3tJ8", kind: "Simulation", title: "3D PIC of ions and electrons in a Penning trap" },
    { id: "NebVcoTGoxU", kind: "Simulation", title: "Ballistic transfer of antiprotons" },
    { id: "Jo3y6L7B4uM", kind: "Simulation", title: "Antiproton annihilations in G4beamline" }
  ],

  // Lab gallery for the v2 site: instruments I designed or built
  gallery: [
    { img: "/CV/v2/img/oris.webp", title: "Octagonal ring-cusp ion source", text: "The ORIS source from my Ph.D., with its multi-aperture extraction grids." },
    { img: "/CV/v2/img/beam-glow.webp", title: "Beam on", text: "Plasma glow inside the source chamber during operation." },
    { img: "/CV/v2/img/grids.webp", title: "Screen & acceleration grids", text: "Ion optics for the line-cusp source, isolated with ceramic balls." },
    { img: "/CV/v2/img/line-cusp.webp", title: "Line-cusp ion source", text: "Inside the discharge chamber of the line-cusp source with axial confinement." },
    { img: "/CV/v2/img/fc-array.webp", title: "Faraday cup array", text: "Real-time, in-situ ion-beam profile monitoring." },
    { img: "/CV/v2/img/hp-faraday-cup.webp", title: "High-power Faraday cup", text: "Water-cooled copper cup for 10 kW, 20–30 mA beams." },
    { img: "/CV/v2/img/wire-array.webp", title: "Parallel wire array", text: "Wire array for measuring ion-beam profiles." },
    { img: "/CV/v2/img/magnet-rpa.webp", title: "Magnetic RPA", text: "Retarding potential analyser with a magnetic filter for low-energy charge-exchange ions." },
    { img: "/CV/v2/img/langmuir-probe.webp", title: "Langmuir probe", text: "Plasma-density probe: 5.5 mm long, 0.5 mm diameter tip." },
    { img: "/CV/v2/img/cx-probe.webp", title: "Charge-exchange probe", text: "Probe for charge-exchange ions in the beam region." },
    { img: "/CV/v2/img/thrust-sensor.webp", title: "Thrust sensor", text: "Thrust measurement for electric-propulsion tests." }
  ],

  // Research highlights for the v2 site (/CV/v2/). "image" is optional.
  projects: [
    {
      name: "PY-BEMCS",
      tag: "Open-source software",
      text: "Ion-beam extraction and Monte Carlo Collision physics for ion sources, thrusters and fusion NBIs, with sputter erosion, grid end-of-life prediction and a real-time GUI.",
      url: "https://github.com/Bharat-Singh-Rawat/PY-BEMCS",
      image: "/CV/v2/img/pybemcs.webp",
      clip: "bemcs"
    },
    {
      name: "AEgIS Digital Twin",
      tag: "CERN · antimatter",
      text: "Reduced-order models combining first-principles physics with ML to predict Penning–Malmberg trap behaviour and optimise antiproton confinement.",
      url: "https://bharat-singh-rawat.github.io/AEgIS_Electromagnets_Outreach/",
      image: "/CV/v2/img/digital-twin.webp",
      clip: "penning,wall"
    },
    {
      name: "Ring-cusp ion source",
      tag: "Ph.D. · space propulsion & fusion",
      text: "Designed, built and characterised a multicusp source producing Ar⁺ beams at 1–2 keV / up to 100 mA, with up to 100% space-charge neutralisation.",
      image: "/CV/v2/img/oris.webp",
      clip: "ion"
    },
    {
      name: "10 kW Faraday cup",
      tag: "M.Tech · beam diagnostics",
      text: "A water-cooled Faraday cup for 20–30 mA beams, a 20× upgrade over the legacy 1 kW system, with suppression optimised via SIMION and LORENTZ.",
      image: "/CV/v2/img/hp-faraday-cup.webp",
      clip: "faraday"
    }
  ],

  expertise: "Ion source design, beam extraction &amp; transport optimisation, space-charge neutralisation, advanced beam diagnostics, digital twins for charged-particle traps."
};

/* Tiny helper shared by the themes: map a list to HTML. */
window.cvMap = function (list, fn) { return (list || []).map(fn).join(""); };

/* Visitor stats: loads GoatCounter on every page that includes this file (all themes). */
(function () {
  var code = String((window.PROFILE || {}).goatcounter || "").trim();
  if (!/^[a-z0-9-]+$/i.test(code) || !document.head) return;
  var s = document.createElement("script");
  s.async = true;
  s.src = "https://gc.zgo.at/count.js";
  s.setAttribute("data-goatcounter", "https://" + code + ".goatcounter.com/count");
  document.head.appendChild(s);
})();
