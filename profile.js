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

  // Where I live now: the yellow "home" pin on the GitHub visitor map (tracks curl in to it).
  // Change this when I move; remove it to use the first job's place instead.
  home: { name: "Ahmedabad, India", lat: 23.03, lon: 72.58 },

  links: [
    { label: "bharat.bharat22@gmail.com", url: "mailto:bharat.bharat22@gmail.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/bharat-singh-rawat-ph-d-52b914315/" },
    { label: "Google Scholar", url: "https://scholar.google.com/citations?hl=en&user=gQP3HLAAAAAJ&view_op=list_works&sortby=pubdate" },
    { label: "GitHub", url: "https://github.com/Bharat-Singh-Rawat" },
    { label: "AEgIS Digital Twin Outreach", url: "https://bharat-singh-rawat.github.io/AEgIS_Electromagnets_Outreach/" },
    { label: "AEgIS Gravity Game", url: "https://bharat-singh-rawat.github.io/AEgIS_Gravity_game/" },
    { label: "PY-BEMCS",   url: "https://github.com/Bharat-Singh-Rawat/PY-BEMCS" },
    { label: "YouTube", url: "https://www.youtube.com/@bharatrawat5909" }
  ],

  experience: [
    {
      role: "Accelerator Physicist",
      org: "Basilisk Industries, Vancouver, Canada (Remote)",
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
        "Engineered a water-cooling system holding peak temperature to <b>350.6 °C</b>, well below copper’s 1085 °C melting point.",
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
    { venue: "IBIC (2025)", title: "Design studies of a Retarding Potential Energy Analyser (RPEA) for low energy antimatter experiments.", doi: "10.18429/JACoW-IBIC2025-MOPMO02" },
    { venue: "Instruments (2025)", title: "Faraday cups: principles, designs, and applications across scientific disciplines—a review.", badge: "Journal cover", cover: "/CV/v2/img/fc-cover.webp",
      authors: "Rawat, B.S.; Kumar, N.; Ghosal, D.; Aflyatunova, D.; Rienäcker, B.; Welsch, C.P.", doi: "10.3390/instruments9030020" },
    { venue: "EXA-LEAP (2025)", title: "3D simulation studies of mixed plasma confinement at AEgIS.", doi: "10.22323/1.480.0076" },
    { venue: "Phys. Rev. Lett. (2024)", title: "Positronium Laser Cooling via the 1³S-2³P Transition with a Broadband Laser Pulse.", badge: "Top 10 Breakthrough 2024",
      doi: "10.1103/PhysRevLett.132.083402", award: "Physics World",
      awardLink: "https://physicsworld.com/a/top-10-breakthroughs-of-the-year-in-physics-for-2024-revealed/" },
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

  // Every other paper, poster and proceeding (from ORCID / ResearchGate), newest first. Shown on the CV v2
  // as a compact, collapsed "All publications" list under the selected ones above.
  // Articles about my work (CV v2 → /CV/news/). Newest first. named: true = the article names me.
  news: [
    { date: "2026-05-27", source: "University of Liverpool · QUASAR", mark: "UoL", named: true,
      title: "New paper on spectrometry of highly charged ions from antiproton annihilations",
      url: "https://www.liverpool.ac.uk/quasar/news/stories/title,1557662,en.php",
      about: "Our AEgIS paper in Physical Review Research on the highly charged ions left after antiproton annihilations." },
    { date: "2026-04-01", source: "University of Liverpool · QUASAR", mark: "UoL", named: true, kind: "Outreach",
      title: "From Pixels to Particles: young scientists tackle AEgIS challenges at British Science Week 2026",
      url: "https://www.liverpool.ac.uk/quasar/news/stories/title,1551347,en.php",
      about: "The antimatter outreach event I ran at Liverpool’s Victoria Gallery & Museum, with interactive AEgIS games for young visitors." },
    { date: "2026-01-21", source: "University of Liverpool · QUASAR", mark: "UoL", named: true,
      title: "AEgIS collaboration meeting at CERN reviews breakthroughs and sets strategy for 2026",
      url: "https://www.liverpool.ac.uk/quasar/news/stories/title,1542606,en.php",
      about: "Our modelling of antiproton transport, presented with Sruthy Chandran at the AEgIS collaboration meeting." },
    { date: "2025-09-19", source: "University of Liverpool · QUASAR", mark: "UoL", named: true,
      title: "A comprehensive review on the versatility of Faraday Cups as a beam diagnostic instrument",
      url: "https://www.liverpool.ac.uk/quasar/news/stories/title,1530012,en.php",
      about: "Feature on my Faraday cup review, published as the cover story of Instruments." },
    { date: "2025-10-16", source: "University of Liverpool · QUASAR", mark: "UoL", named: true, kind: "Talk",
      title: "Showcasing antimatter research at the CST User Day",
      url: "https://www.liverpool.ac.uk/quasar/news/stories/title,1531831,en.php",
      about: "My talk on simulating antimatter experiments for AEgIS with CST Studio." },
    { date: "2025-06-12", source: "University of Liverpool · QUASAR", mark: "UoL", named: true, kind: "Talk",
      title: "QUASAR Group’s antimatter simulation work gains spotlight at SIMULIA EURO North 2025",
      url: "https://www.liverpool.ac.uk/quasar/news/stories/title,1519558,en.php",
      about: "My invited talk on modelling Penning–Malmberg traps for AEgIS at CERN." },
    { date: "2025-04-03", source: "Technical University of Munich", mark: "TUM",
      title: "Photo sensor from smartphones helps with antimatter research at CERN",
      url: "https://www.tum.de/en/news-and-events/all-news/press-releases/details/photo-sensor-from-smartphones-helps-with-antimatter-research-at-cern",
      about: "The AEgIS antimatter camera built from smartphone sensors, published in Science Advances." },
    { date: "2025-04-02", source: "CERN", mark: "CERN",
      title: "AEgIS transforms smartphone sensors into an antimatter camera of unprecedented resolution",
      url: "https://home.cern/news/news/experiments/aegis-transforms-smartphone-sensors-antimatter-camera-unprecedented",
      about: "CERN’s story on the AEgIS detector that pinpoints antiproton annihilations in real time." },
    { date: "2025-01-15", source: "The Cockcroft Institute", mark: "CI",
      title: "Cockcroft research recognised in Physics World’s Top 10 Breakthroughs of 2024",
      url: "https://www.cockcroft.ac.uk/2025/01/15/cockcroft-research-recognized-in-physics-worlds-top-10-breakthroughs-of-2024",
      about: "Our positronium laser cooling result at AEgIS among the year’s top ten." },
    { date: "2024-12-12", source: "Physics World", mark: "PW",
      title: "Top 10 Breakthroughs of the Year in physics for 2024 revealed",
      url: "https://physicsworld.com/a/top-10-breakthroughs-of-the-year-in-physics-for-2024-revealed/",
      about: "Laser cooling of positronium by AEgIS named one of the ten biggest breakthroughs of 2024." },
    { date: "2024-08-30", source: "The Interview Portal", mark: "TIP", named: true, kind: "Interview",
      title: "Engineering physicist interview",
      url: "https://theinterviewportal.com/2024/08/30/engineering-physicist-interview/",
      about: "Interview about my path from mechanical engineering to accelerator physics, and building digital twins for AEgIS at CERN." },
    { date: "2024-03-27", source: "CERN Courier", mark: "CC",
      title: "The promise of laser-cooled positronium",
      url: "https://cerncourier.com/a/the-promise-of-laser-cooled-positronium/",
      about: "What laser-cooled positronium could mean for antimatter physics." },
    { date: "2024-03-08", source: "UniTrento Magazine", mark: "UT",
      title: "Laser cooling of positronium",
      url: "https://webmagazine.unitn.it/node/119813",
      about: "University of Trento on the AEgIS positronium laser cooling result." },
    { date: "2024-03-01", source: "Physics World", mark: "PW",
      title: "Matter–antimatter gas of positronium is laser cooled",
      url: "https://physicsworld.com/a/matter-antimatter-gas-of-positronium-is-laser-cooled/",
      about: "News on the first laser cooling of positronium, at AEgIS." },
    { date: "2024-02-27", source: "EurekAlert! · Politecnico di Milano", mark: "EA",
      title: "Positronium laser cooling",
      url: "https://www.eurekalert.org/news-releases/1035750",
      about: "Press release on the AEgIS positronium laser cooling result in Physical Review Letters." }
  ],

  morePublications: [
    { venue: "Radiat. Phys. Chem. (2026)", title: "Production of negatively charged atomic ions inside a linear Paul trap for the formation of antiprotonic atoms.", doi: "10.1016/j.radphyschem.2026.113884" },
    { venue: "Phys. Rev. Research (2026)", title: "Spectrometry of captured highly charged ions produced following antiproton annihilations.", doi: "10.1103/gg1j-vtvy" },
    { venue: "IBIC (2025)", title: "Simulation and feasibility analysis of a non-invasive cavity bunch charge monitor for low-energy antiproton beams.", doi: "10.18429/JACoW-IBIC2025-MOPCO13" },
    { venue: "IBIC (2025)", title: "Experimental investigation into supersonic gas jet induced beam perturbation.", doi: "10.18429/JACoW-IBIC2025-TUPCO18" },
    { venue: "IBIC (2025)", title: "Gas-jet based ionization profile monitor for proton FLASH therapy.", doi: "10.18429/JACoW-IBIC2025-TUPMO05" },
    { venue: "Science Advances (2025)", title: "Real-time antiproton annihilation vertexing with submicrometer resolution.", doi: "10.1126/sciadv.ads1176" },
    { venue: "J. Phys.: Conf. Ser. (2025)", title: "Laser cooling positronium with broadband laser pulses.", doi: "10.1088/1742-6596/3029/1/012002" },
    { venue: "EXA-LEAP (2025)", title: "Positronium Doppler laser cooling: results and perspectives.", doi: "10.22323/1.480.0047" },
    { venue: "EXA-LEAP (2025)", title: "The AEgIS experiment: progress and future outlook.", doi: "10.22323/1.480.0024" },
    { venue: "EXA-LEAP (2025)", title: "Prospects for forward emitted positronium from nanoporous membranes at AEgIS.", doi: "10.22323/1.480.0082" },
    { venue: "Rev. Sci. Instrum. (2024)", title: "TALOS (Total Automation of LabVIEW Operations for Science): a framework for autonomous control systems for complex experiments.", doi: "10.1063/5.0196806" },
    { venue: "EPJ Quantum Technology (2024)", title: "CIRCUS: an autonomous control system for antimatter, atomic and quantum physics experiments.", doi: "10.1140/epjqt/s40507-024-00220-6" },
    { venue: "J. Phys.: Conf. Ser. (2022)", title: "Effects of axial magnetic field in a magnetic multipole line cusp ion source.", doi: "10.1088/1742-6596/2244/1/012082" },
    { venue: "InPAC poster (2022)", title: "Development of a low energy ring cusp ion source for thruster applications.", doi: "10.13140/RG.2.2.28350.97606" },
    { venue: "ICPP (2022)", title: "Magnetic confinement of primary electrons in a ring cusp ion source.", doi: "10.13140/RG.2.2.33289.31845" },
    { venue: "IEEE ICOPS (2020)", title: "Characteristic performance of a multi-aperture ion source for application in ion thruster and material processing.", doi: "10.1109/ICOPS37625.2020.9717863" },
    { venue: "InPAC poster (2019)", title: "A Faraday cup array for the measurement of ion current density profiles for a gridded ion thruster.", doi: "10.13140/RG.2.2.32993.04961" },
    { venue: "ICECDS (2017)", title: "Nuclear fission energy, a viable, carbon-free option for high base-load electricity, hydrogen production and desalination, while containing global temperature rise below 2°C.", doi: "10.1109/ICECDS.2017.8390061" }
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
    photo: "/CV/v2/img/profile-cutout.webp",
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
    { title: "Consulting", text: "Ion-source, particle-trap and beam-diagnostics design, backed by multiphysics software and computational workflows I build (CST Studio, MAD-X, Python). For deep-tech start-ups, government labs and specialist firms." },
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
    { img: "/CV/v2/img/oris.webp", title: "Octagonal ring-cusp ion source", text: "The ORIS source from my Ph.D., with its multi-aperture extraction grids.", cad: "oris" },
    { img: "/CV/v2/img/beam-glow.webp", title: "Beam on", text: "Plasma glow inside the source chamber during operation." },
    { img: "/CV/v2/img/grids.webp", title: "Screen & acceleration grids", text: "Ion optics for the line-cusp source, isolated with ceramic balls." },
    { img: "/CV/v2/img/line-cusp.webp", title: "Line-cusp ion source", text: "Inside the discharge chamber of the line-cusp source with axial confinement." },
    { img: "/CV/v2/img/fc-array.webp", title: "Faraday cup array", text: "Real-time, in-situ ion-beam profile monitoring.", cad: "fc-array" },
    { img: "/CV/v2/img/hp-faraday-cup.webp", title: "High-power Faraday cup", text: "Water-cooled copper cup for 10 kW, 20–30 mA beams.", cad: "hp-cup" },
    { img: "/CV/v2/img/wire-array.webp", title: "Parallel wire array", text: "Wire array for measuring ion-beam profiles." },
    { img: "/CV/v2/img/magnet-rpa.webp", title: "Magnetic RPA", text: "Retarding potential analyser with a magnetic filter for low-energy charge-exchange ions.", cad: "magnetic-rpa" },
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
      url: "https://bharat-singh-rawat.github.io/AEgIS_Digital_Twin/",
      image: "/CV/v2/img/digital-twin.webp",
      clip: "twin"
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
    },
    {
      name: "Faraday Cup Atlas",
      tag: "Open data · beam diagnostics",
      text: "Published Faraday cups from labs around the world on one interactive globe, with the beam, energy, cup material and design each paper reports, filterable and linked to every paper.",
      url: "/CV/fc-atlas/",
      image: "/CV/v2/img/fc-atlas.webp?v=2"
    },
    {
      name: "Gas-curtain IPM, re-simulated",
      tag: "Simulation · Elmer FEM + Geant4",
      text: "An independent open-source re-simulation of a supersonic gas-curtain beam-profile monitor: Elmer extraction field and a full Geant4 Monte Carlo with ions, delta electrons, background gas and gas light, compared with the published CST design.",
      url: "/CV/ipm/",
      image: "/CV/v2/img/gas-curtain-ipm.webp"
    },
    {
      name: "Induction cathode heater",
      tag: "Simulation · Elmer FEM",
      text: "Coupled 3D electromagnetic and thermal model of an induction-heated LaB₆ cathode warming up from room temperature, built in the open-source Elmer FEM solver and checked against a 2D model.",
      image: "/CV/v2/img/induction-heater.webp",
      wide: true
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
