const categories = [
  {
    id: "channel-design",
    title: "Irrigation Channel Design",
    items: ["Irrigation Channel Design"]
  },
  {
    id: "irrigation",
    title: "Irrigation Laws and Manuals",
    items: [
      "Manual of Irrigation Practice Volume-I",
      "Manual of Irrigation Practice Volume-II",
      "Old Manual of Irrigation Practice",
      "PIDRA 2023 Irrigation Acts",
      "Old Canal and Drainage Act",
      "Punjab Soil Reclamation Act",
      "Flood Plain NOC Criteria",
      "Punjab Flood Plain Regulation Act",
      "Thal Development Validating Ordinance"
    ]
  },
  {
    id: "flood-watch",
    title: "Flood Watch",
    items: [
      "National Flood Protection Plan IV",
      "FFC Annual Flood Report 2010",
      "Judicial Flood Enquiry Tribunal Report 2010",
      "Pakistan Floods 2010 Damage and Needs Assessment",
      "Pakistan Floods 2022 Post-Disaster Needs Assessment",
      "Punjab Flood Plain Regulation Act",
      "Flood Plain NOC Criteria"
    ]
  },
  {
    id: "administration",
    title: "Administration & Establishment",
    items: [
      "Punjab Civil Servants Act",
      "Leave Rules",
      "Conduct Rules",
      "Efficiency & Discipline Rules",
      "Recruitment Rules",
      "Promotion Policy",
      "Seniority Rules",
      "Transfer Policy",
      "PER/ACR Guidelines",
      "Retirement & Pension Rules",
      "GP Fund Rules",
      "Medical Reimbursement",
      "TA/DA Rules",
      "Service Books",
      "Office Procedures"
    ]
  },
  {
    id: "finance",
    title: "Finance & Accounts",
    items: [
      "Punjab Financial Rules (PFR)",
      "Treasury Rules",
      "Budget Manual",
      "Chart of Accounts",
      "SAP/FM Guidelines",
      "Expenditure Control",
      "Re-appropriation Rules",
      "Contingent Expenditure",
      "Advances & Recoveries",
      "Audit Paras",
      "DAC/PAC Guidelines",
      "Internal Audit",
      "Accountant General Instructions"
    ]
  },
  {
    id: "procurement",
    title: "Procurement & Contracts",
    items: [
      "PPRA Rules",
      "e-PADS User Manuals",
      "Standard Bidding Documents",
      "Procurement Planning",
      "Tender Evaluation",
      "Bid Opening Procedures",
      "Contract Management",
      "Performance Securities",
      "Bid Securities",
      "Mobilization Advance",
      "Price Adjustment",
      "Variation Orders",
      "Extension of Time (EOT)",
      "Liquidated Damages",
      "Dispute Resolution",
      "Arbitration",
      "Blacklisting Procedures",
      "Framework Contracts",
      "Consultant Procurement",
      "Goods Procurement",
      "Works Procurement",
      "Procurement Case Studies",
      "Procurement FAQs"
    ]
  },
  {
    id: "engineering",
    title: "Engineering Design Manuals",
    items: [
      "Design of Canals",
      "Design of Small Dams",
      "Small Dam Design Manual",
      "Earth Dam Design",
      "Concrete Dam Design",
      "Spillway Design",
      "Outlet Works",
      "Canal Design",
      "Hydraulic Structures",
      "Retaining Walls",
      "Gabion Structures",
      "Slope Protection",
      "Energy Dissipation",
      "Seepage Analysis",
      "Stability Analysis",
      "Geotechnical Investigation",
      "Foundation Engineering",
      "Sedimentation Studies",
      "Flood Routing",
      "Hydrologic Design",
      "PMF Estimation",
      "Earthquake Design",
      "Dam Break Analysis",
      "Reservoir Operation",
      "Instrumentation & Monitoring"
    ]
  },
  {
    id: "construction",
    title: "Construction Manuals",
    items: [
      "Construction Specifications",
      "Quality Assurance",
      "Quality Control",
      "Inspection Checklists",
      "Testing Standards",
      "Laboratory Procedures",
      "Site Supervision",
      "Safety Manual",
      "Environmental Management",
      "Material Specifications",
      "Concrete Mix Design",
      "Asphalt Works",
      "Earthwork",
      "Compaction Standards",
      "Construction Method Statements"
    ]
  },
  {
    id: "operation",
    title: "Operation & Maintenance",
    items: [
      "Reservoir Operation Manuals",
      "Gate Operation",
      "Emergency Action Plans",
      "Dam Safety Inspection",
      "Instrument Monitoring",
      "Preventive Maintenance",
      "Rehabilitation Guidelines",
      "Flood Operation",
      "Monsoon Preparedness",
      "Disaster Response"
    ]
  },
  {
    id: "survey",
    title: "Survey & GIS",
    items: [
      "Survey Manual",
      "GPS Guidelines",
      "DGPS",
      "Total Station",
      "Drone Survey",
      "LiDAR",
      "GIS Standards",
      "Coordinate Systems",
      "Datum Transformations",
      "DEM Processing",
      "Remote Sensing",
      "Satellite Imagery",
      "Mapping Standards"
    ]
  },
  {
    id: "hydrology",
    title: "Hydrology & Water Resources",
    items: [
      "Rainfall Analysis",
      "Flood Frequency Analysis",
      "Watershed Delineation",
      "Runoff Estimation",
      "Water Balance",
      "Climate Change",
      "Reservoir Simulation",
      "River Morphology",
      "Sediment Transport",
      "Water Availability",
      "Water Allocation"
    ]
  },
  {
    id: "planning",
    title: "Planning & Development",
    items: [
      "PC-I",
      "PC-II",
      "PC-III",
      "PC-IV",
      "PC-V",
      "Project Appraisal",
      "Feasibility Studies",
      "Cost Benefit Analysis",
      "ADP Guidelines",
      "PSDP Guidelines",
      "Punjab Planning Manual",
      "Planning Commission PC Forms",
      "BOQ Templates",
      "Estimate Templates",
      "TS Formats",
      "AS Formats",
      "Tender Documents",
      "NIT Templates",
      "Economic Analysis",
      "Monitoring & Evaluation"
    ]
  },
  {
    id: "legal",
    title: "Legal Repository",
    items: [
      "Punjab Soil Reclamation Act",
      "Punjab Flood Plain Regulation Act",
      "Flood Plain NOC Criteria",
      "Thal Development Validating Ordinance",
      "Punjab PPP Act",
      "Environmental Impact Assessment Regulations"
    ]
  },
  {
    id: "standard-documents",
    title: "Standard Documents",
    items: [
      "SBD for Civil Works",
      "SBD Consultancy Services",
      "SBD Non-Consultancy Services",
      "SBD Procurement of Goods",
      "Feasibility Studies Framework"
    ]
  },
  {
    id: "software",
    title: "Software & Digital Tools",
    items: [
      "QGIS",
      "HEC-RAS",
      "HEC-HMS",
      "HEC-ResSim",
      "EPA SWMM",
      "EPANET",
      "SWAT+",
      "MODFLOW 6",
      "GRASS GIS",
      "SAGA GIS",
      "WhiteboxTools",
      "TauDEM",
      "OpenFOAM",
      "FreeCAD",
      "LibreCAD",
      "Bonsai BIM",
      "Python",
      "JupyterLab",
      "Google Colab",
      "Google Earth Engine",
      "HydroShare",
      "Python Scripts",
      "Excel Templates"
    ]
  },
];

const examples = [
  "Hi",
  "Can I grant 15 days earned leave?",
  "How much is short consultancy under PPRA rules?",
  "Which PPRA rule covers bid security?",
  "Give me the spillway design criteria for an earth-fill dam.",
  "Draft an EOT approval letter.",
  "What documents are required before technical sanction?",
  "How do I calculate mobilization advance?",
  "Open the Punjab Flood Plain Regulation Act."
];

let assistantExchangeCount = 0;

const knowledgeAnswers = [
  {
    terms: ["short", "consultancy", "consultant", "ppra"],
    categoryId: "procurement",
    itemLabel: "PPRA Rules",
    text:
      "<strong>Short consultancy under Punjab PPRA Rules</strong><br>" +
      "Under <strong>Rule 2(ab)</strong>, short consultancy means consultancy where the cost does not exceed <strong>Rs. 2 million</strong> for an individual consultant and <strong>Rs. 10 million</strong> for consulting firms. For an individual consultant, the duration of short consultancy shall not exceed <strong>six months</strong>.<br><br>" +
      "For individual consultants, <strong>Rule 46</strong> says selection in short consultancy is based on qualifications and experience; at least three consultants should be compared where available, and single-source selection needs due justification in exceptional cases.<br><br>" +
      "For firms, <strong>Rule 46A</strong> says the procuring agency should consider at least three quotations from renowned, registered, and reputed firms, based on qualification and experience.",
    note:
      "Reference: Punjab Procurement Rules 2014 amended up to date, Rules 2(ab), 46, and 46A. PPRA FAQ also advises that extending the same individual consultant beyond the short-consultancy financial/time limits changes the nature of procurement."
  },
  {
    terms: ["floodplain", "flood", "plain", "define", "definition"],
    minHits: 2,
    categoryId: "irrigation",
    itemLabel: "Punjab Flood Plain Regulation Act",
    text:
      "<strong>Definition of flood plain</strong><br>" +
      "Under <strong>Section 2(f)</strong> of the <strong>Punjab Flood Plain Regulation Act 2016</strong>, a <strong>flood plain</strong> means <strong>the land notified in the official Gazette as flood plain under Section 3 of the Act</strong>.<br><br>" +
      "In practical terms, it is not just any low-lying or flood-prone land; for this Act, it is the area formally designated/notified by Government under the Act.<br><br>" +
      "<a href=\"assets/docs/12-legal-repository/the-punjab-flood-plain-regulation-act-2016-updated-pdf.pdf\" target=\"_blank\" rel=\"noopener\">Open source PDF: Punjab Flood Plain Regulation Act 2016</a>",
    note:
      "Reference: Punjab Flood Plain Regulation Act 2016, Section 2(f), read with Section 3 on authority to designate flood plain."
  }
];

const documentLinks = {
  administration: [
    ["Punjab Civil Servants Act 1974", "assets/docs/01-administration-establishment/the_punjab_civil_servants_act-_1974-pdf1.pdf"],
    ["Appointment and Conditions of Service Rules 1974", "assets/docs/01-administration-establishment/Punjab Appointment and Conditions of Service Rules 1974.pdf"],
    ["Punjab Revised Leave Rules 1981 Updated", "assets/docs/01-administration-establishment/Punjab Revised Leave Rules 1981 Updated.pdf"],
    ["Punjab Employees Efficiency, Discipline and Accountability Act 2006", "assets/docs/01-administration-establishment/PUNJAB_EMPLOYEES_EFFICIENCY,_DISCIPLINE_AND_ACCOUNTABILITY_ACT,_2006.doc.pdf"],
    ["PER Rules 2025", "assets/docs/01-administration-establishment/Punjab Civil Servants Performance Evaluation Reports Rules 2025.pdf"],
    ["Recruitment Policy 2022", "assets/docs/01-administration-establishment/Recruitment Policy 2022.pdf"],
    ["Punjab Travelling Allowance Rules", "assets/docs/01-administration-establishment/Punjab Travelling Allowance Rules.pdf"],
    ["Civil Services Application for Posts Rules", "assets/docs/01-administration-establishment/Punjab Civil Services Application for Posts Rules.pdf"],
    ["Irrigation Department IT Establishment Service Rules 2021", "assets/docs/01-administration-establishment/01-PID_ITEstab_SR_2021_20220613.pdf"],
    ["Revenue Establishment Posts Recruitment Rules 2019", "assets/docs/01-administration-establishment/PID_Revenue_Estab_Post_RR_2019_20191018.pdf"],
    ["Water Resources Zone Service Rules 2024", "assets/docs/01-administration-establishment/Ghazete Notification No. SOR-III(S&GAD)1-3-2022 dated 13 September 2024 the Punjab Irrigation Department (Water Resources Zone) Service Rules 2024.pdf"],
    ["Civil Servants Amendment Act 2012", "assets/docs/01-administration-establishment/(45_of_2012)_The_Punjab_Civil_Servants_(Amendment)_Act_2012.doc.pdf"],
    ["Civil Servants Amendment Act 2021", "assets/docs/01-administration-establishment/the-punjab-civil-servants-amendment-act-2021-pdf.pdf"]
  ],
  finance: [
    ["Punjab Financial Rules Vol-I", "assets/docs/02-finance-accounts/Punjab Financial Rules Vol-I.pdf"],
    ["Punjab Financial Rules Vol-II", "assets/docs/02-finance-accounts/Punjab Financial Rules Vol-II.pdf"],
    ["Treasury and Subsidiary Treasury Rules Punjab", "assets/docs/02-finance-accounts/Treasury and Subsidiary Treasury Rules Punjab.pdf"],
    ["Revised Punjab Budget Manual 2008", "assets/docs/02-finance-accounts/Revised Punjab Budget Manual 2008.pdf"],
    ["Punjab Delegation of Financial Powers 2016", "assets/docs/02-finance-accounts/Punjab Delegation of Financial Powers 2016.pdf"],
    ["GPF Rules 1978", "assets/docs/02-finance-accounts/GPF Rules 1978.pdf"],
    ["Punjab Government Pension Rules", "assets/docs/02-finance-accounts/Punjab Government Pension Rules.pdf"],
    ["Taunsa Barrage Betterment Tax Ordinance 1971", "assets/docs/02-finance-accounts/THE_PUNJAB_TAUNSA_BARRAGE_BETTERMENT_TAX_ORDINANCE,_1971.pdf"]
  ],
  procurement: [
    ["Punjab Procurement Rules 2014 amended up to 24-09-2025", "assets/docs/03-procurement-contracts/Punjab Procurement Rules 2014 amended upto 24-09-2025.pdf"],
    ["Procurement Cycle", "assets/docs/03-procurement-contracts/Procurement Cycle.pdf"],
    ["Procurement Process Sequence", "assets/docs/03-procurement-contracts/Procurement Process Sequence.pdf"],
    ["Approval Mechanism Under Rule 12", "assets/docs/03-procurement-contracts/Approval Mechanism Under Rule 12.pdf"],
    ["Guidelines for Price Variation (ADP)", "assets/docs/03-procurement-contracts/Guidelines for price variation (ADP).pdf"],
    ["Mobilization Advance Rules", "assets/docs/03-procurement-contracts/Mobilization Advance rules.pdf"]
  ],
  engineering: [
    ["Design of Canals", "assets/docs/09-irrigation-manuals/USBR SmallCanals.pdf"],
    ["Design of Small Dams", "assets/docs/04-engineering-design-manuals/USBR SmallDams.pdf"],
    ["USBR Small Dams", "assets/docs/04-engineering-design-manuals/USBR SmallDams.pdf"]
  ],
  irrigation: [
    ["Manual of Irrigation Practice Volume-I", "assets/docs/09-irrigation-manuals/Manual Of Irrigation Practice (mip) - Volume-i.pdf"],
    ["Manual of Irrigation Practice Volume-II", "assets/docs/09-irrigation-manuals/Manual Of Irrigation Practice (mip) - Volume-ii.pdf"],
    ["Old Manual of Irrigation Practice", "assets/docs/09-irrigation-manuals/Old MIP (Manual of Irrigation Practice).pdf"],
    ["USBR Small Canals", "assets/docs/09-irrigation-manuals/USBR SmallCanals.pdf"],
    ["Old Canal and Drainage Act", "assets/docs/09-irrigation-manuals/CANAL_AND_DRAINAGE_ACT,_18731.pdf"],
    ["Punjab Irrigation, Drainage and Rivers Act 2023", "assets/docs/09-irrigation-manuals/punjab-irrigation-drainage-and-rivers-act-2023-pdf.pdf"],
    ["Punjab Minor Canals Act 1905", "assets/docs/09-irrigation-manuals/punjab-minor-canals-act-1905-pdf.pdf"],
    ["Punjab Water Act 2019", "assets/docs/09-irrigation-manuals/the-punjab-water-act-2019-doc-1-pdf.pdf"],
    ["Water Users Associations Ordinance 1981", "assets/docs/09-irrigation-manuals/THE_ON-FARM_WATER_MANAGEMENT_AND_WATER_USERS_ASSOCIATIONS_ORDINANCE,_1981.doc.pdf"],
    ["Punjab Soil Reclamation Act 1952", "assets/docs/12-legal-repository/10-punjab-soil-reclamation-act-1952-xxi-of-1952-pdf.pdf"],
    ["Criteria for NOC for Construction in Flood Plain", "assets/docs/12-legal-repository/Criteria for NOC for Construction in Flood Plain.pdf"],
    ["Punjab Flood Plain Regulation Act 2016", "assets/docs/12-legal-repository/the-punjab-flood-plain-regulation-act-2016-updated-pdf.pdf"],
    ["Thal Development Validating Ordinance 1971", "assets/docs/12-legal-repository/THE_THAL_DEVELOPMENT_(VALIDATING)_ORDINANCE,_1971.pdf"]
  ],
  "flood-watch": [
    ["National Flood Protection Plan IV", "assets/docs/21-flood-watch/National Flood Protection Plan IV NFPP-IV.pdf"],
    ["National Flood Protection Plan IV - Compressed Copy", "assets/docs/21-flood-watch/National Flood Protection Plan IV NFPP-IV compressed.pdf"],
    ["FFC Annual Flood Report 2010", "assets/docs/21-flood-watch/FFC Annual Flood Report 2010.pdf"],
    ["Pakistan Floods 2010 Preliminary Damage and Needs Assessment", "assets/docs/21-flood-watch/Pakistan Floods 2010 Preliminary Damage and Needs Assessment.pdf"],
    ["Pakistan Floods 2022 Post-Disaster Needs Assessment", "assets/docs/21-flood-watch/Pakistan Floods 2022 Post-Disaster Needs Assessment.pdf"],
    ["Judicial Flood Enquiry Tribunal Report 2010 - Source Page", "https://www.dawn.com/news/amp/637390"],
    ["Supreme Court Flood Inquiry Commission Report 2010 - News Reference", "https://www.geo.tv/latest/24091-sc-orders-to-implement-flood-commission-report"]
  ],
  planning: [
    ["The Planning Manual 2015", "assets/docs/10-planning-development/The Planning Manual 2015.pdf"],
    ["Planning Manual 2024-25 Draft", "assets/docs/10-planning-development/Planning Manual 2024-25 Draft.pdf"],
    ["Compendium 2024-2025 Draft", "assets/docs/10-planning-development/Compendium 2024-2025 Draft.pdf"],
    ["PC-I Form Infrastructure Sector", "assets/docs/10-planning-development/PC-I Form Infrastructure Sector.pdf"],
    ["PC-I Form Production Sector", "assets/docs/10-planning-development/PC-I Form Production Sector.pdf"],
    ["PC-I Form Social Sector", "assets/docs/10-planning-development/PC-I Form Social Sector.pdf"],
    ["PC-II Form Survey and Feasibility Study", "assets/docs/10-planning-development/PC-II Form Survey and Feasibility Study.pdf"],
    ["PC-III Form Monthly Progress Report", "assets/docs/10-planning-development/PC-III Form Monthly Progress Report.pdf"],
    ["PC-IV Form", "assets/docs/10-planning-development/PC-IV Form.pdf"],
    ["PC-V Form", "assets/docs/10-planning-development/PC-V Form.pdf"],
    ["Planning Commission PC Forms 2024", "https://www.pc.gov.pk/web/downloads/pcforms"],
    ["Approval Mechanism", "assets/docs/10-planning-development/Approval Mechanism.pdf"],
    ["Foreign Aid Guidelines 2018", "assets/docs/10-planning-development/Foreign Aid Guidelines 2018.pdf"],
    ["SBD for Civil Works", "assets/docs/13-standard-documents/SBD for Civil Works.docx"],
    ["SBD Consultancy Services", "assets/docs/13-standard-documents/SBD Consultancy Services.docx"],
    ["SBD Non-Consultancy Services", "assets/docs/13-standard-documents/SBD Non-Consultancy Services.docx"],
    ["SBD Procurement of Goods", "assets/docs/13-standard-documents/SBD Procurement of Goods.docx"],
    ["Framework for Feasibility Studies and TPV", "assets/docs/13-standard-documents/Framework for Feasibility Studies Design Review Resident Supervision TPV and Owners Engineer.pdf"]
  ],
  legal: [
    ["Punjab Soil Reclamation Act 1952", "assets/docs/12-legal-repository/10-punjab-soil-reclamation-act-1952-xxi-of-1952-pdf.pdf"],
    ["Punjab Flood Plain Regulation Act 2016", "assets/docs/12-legal-repository/the-punjab-flood-plain-regulation-act-2016-updated-pdf.pdf"],
    ["Criteria for NOC for Construction in Flood Plain", "assets/docs/12-legal-repository/Criteria for NOC for Construction in Flood Plain.pdf"],
    ["Thal Development Validating Ordinance 1971", "assets/docs/12-legal-repository/THE_THAL_DEVELOPMENT_(VALIDATING)_ORDINANCE,_1971.pdf"],
    ["Punjab PPP Act 2014", "assets/docs/12-legal-repository/Punjab PPP Act 2014.pdf"],
    ["Environmental Impact Assessment Regulations", "assets/docs/12-legal-repository/Environmental Impact Assessment Regulations.pdf"]
  ],
  "standard-documents": [
    ["SBD for Civil Works", "assets/docs/13-standard-documents/SBD for Civil Works.docx"],
    ["SBD Consultancy Services", "assets/docs/13-standard-documents/SBD Consultancy Services.docx"],
    ["SBD Non-Consultancy Services", "assets/docs/13-standard-documents/SBD Non-Consultancy Services.docx"],
    ["SBD Procurement of Goods", "assets/docs/13-standard-documents/SBD Procurement of Goods.docx"],
    ["Framework for Feasibility Studies and TPV", "assets/docs/13-standard-documents/Framework for Feasibility Studies Design Review Resident Supervision TPV and Owners Engineer.pdf"]
  ],
  software: [
    ["QGIS Official Site", "https://qgis.org/"],
    ["HEC-RAS Downloads", "https://www.hec.usace.army.mil/software/hec-ras/download.aspx"],
    ["HEC-HMS", "https://www.hec.usace.army.mil/software/hec-hms/"],
    ["HEC-ResSim", "https://www.hec.usace.army.mil/software/hec-ressim/"],
    ["EPA SWMM", "https://www.epa.gov/water-research/storm-water-management-model-swmm"],
    ["EPANET", "https://www.epa.gov/water-research/epanet"],
    ["SWAT+ Installation and Help", "https://swatplus.gitbook.io/docs/installation"],
    ["MODFLOW 6", "https://www.usgs.gov/software/modflow-version-670"],
    ["GRASS GIS", "https://grass.osgeo.org/"],
    ["SAGA GIS Downloads", "https://sourceforge.net/projects/saga-gis/files/"],
    ["WhiteboxTools", "https://www.whiteboxgeo.com/geospatial-software/"],
    ["TauDEM", "https://hydrology.usu.edu/taudem/taudem5/"],
    ["OpenFOAM", "https://www.openfoam.com/"],
    ["FreeCAD", "https://www.freecad.org/"],
    ["LibreCAD", "https://librecad.org/"],
    ["Bonsai BIM", "https://bonsaibim.org/"],
    ["Python", "https://www.python.org/"],
    ["JupyterLab", "https://jupyter.org/"],
    ["Google Colab", "https://colab.research.google.com/"],
    ["Google Earth Engine", "https://earthengine.google.com/"],
    ["HydroShare", "https://www.hydroshare.org/"],
    ["QGIS Gentle GIS Introduction 3.28", "assets/docs/15-software-digital-tools/QGIS Gentle GIS Introduction 3.28.pdf"],
    ["QGIS Documentation Guidelines 3.28", "assets/docs/15-software-digital-tools/QGIS Documentation Guidelines 3.28.pdf"],
    ["PyQGIS Developer Cookbook 3.28", "assets/docs/15-software-digital-tools/PyQGIS Developer Cookbook 3.28.pdf"]
  ]
};

const ruleItemLinks = {
  administration: {
    "Punjab Civil Servants Act": "assets/docs/01-administration-establishment/the_punjab_civil_servants_act-_1974-pdf1.pdf",
    "Leave Rules": "assets/docs/01-administration-establishment/Punjab Revised Leave Rules 1981 Updated.pdf",
    "Efficiency & Discipline Rules": "assets/docs/01-administration-establishment/PUNJAB_EMPLOYEES_EFFICIENCY,_DISCIPLINE_AND_ACCOUNTABILITY_ACT,_2006.doc.pdf",
    "Recruitment Rules": "assets/docs/01-administration-establishment/Recruitment Policy 2022.pdf",
    "Service Books": "assets/docs/01-administration-establishment/Punjab Appointment and Conditions of Service Rules 1974.pdf",
    "Retirement & Pension Rules": "assets/docs/02-finance-accounts/Punjab Government Pension Rules.pdf",
    "GP Fund Rules": "assets/docs/02-finance-accounts/GPF Rules 1978.pdf",
    "TA/DA Rules": "assets/docs/01-administration-establishment/Punjab Travelling Allowance Rules.pdf",
    "PER/ACR Guidelines": "assets/docs/01-administration-establishment/Punjab Civil Servants Performance Evaluation Reports Rules 2025.pdf"
  },
  finance: {
    "Punjab Financial Rules (PFR)": "assets/docs/02-finance-accounts/Punjab Financial Rules Vol-I.pdf",
    "Treasury Rules": "assets/docs/02-finance-accounts/Treasury and Subsidiary Treasury Rules Punjab.pdf",
    "Budget Manual": "assets/docs/02-finance-accounts/Revised Punjab Budget Manual 2008.pdf",
    "Expenditure Control": "assets/docs/02-finance-accounts/Punjab Delegation of Financial Powers 2016.pdf",
    "Advances & Recoveries": "assets/docs/02-finance-accounts/Punjab Financial Rules Vol-II.pdf",
    "Accountant General Instructions": "assets/docs/02-finance-accounts/Punjab Financial Rules Vol-I.pdf"
  },
  procurement: {
    "PPRA Rules": "assets/docs/03-procurement-contracts/Punjab Procurement Rules 2014 amended upto 24-09-2025.pdf",
    "Standard Bidding Documents": "assets/docs/13-standard-documents/SBD for Civil Works.docx",
    "Procurement Planning": "assets/docs/03-procurement-contracts/Procurement Cycle.pdf",
    "Bid Opening Procedures": "assets/docs/03-procurement-contracts/Procurement Process Sequence.pdf",
    "Contract Management": "assets/docs/03-procurement-contracts/Procurement Process Sequence.pdf",
    "Performance Securities": "assets/docs/03-procurement-contracts/Punjab Procurement Rules 2014 amended upto 24-09-2025.pdf",
    "Bid Securities": "assets/docs/03-procurement-contracts/Punjab Procurement Rules 2014 amended upto 24-09-2025.pdf",
    "Mobilization Advance": "assets/docs/03-procurement-contracts/Mobilization Advance rules.pdf",
    "Price Adjustment": "assets/docs/03-procurement-contracts/Guidelines for price variation (ADP).pdf",
    "Extension of Time (EOT)": "assets/docs/03-procurement-contracts/Punjab Procurement Rules 2014 amended upto 24-09-2025.pdf",
    "Blacklisting Procedures": "assets/docs/03-procurement-contracts/Punjab Procurement Rules 2014 amended upto 24-09-2025.pdf"
  },
  engineering: {
    "Design of Canals": "assets/docs/09-irrigation-manuals/USBR SmallCanals.pdf",
    "Design of Small Dams": "assets/docs/04-engineering-design-manuals/USBR SmallDams.pdf"
  },
  irrigation: {
    "Manual of Irrigation Practice Volume-I": "assets/docs/09-irrigation-manuals/Manual Of Irrigation Practice (mip) - Volume-i.pdf",
    "Manual of Irrigation Practice Volume-II": "assets/docs/09-irrigation-manuals/Manual Of Irrigation Practice (mip) - Volume-ii.pdf",
    "Old Manual of Irrigation Practice": "assets/docs/09-irrigation-manuals/Old MIP (Manual of Irrigation Practice).pdf",
    "PIDRA 2023 Irrigation Acts": "assets/docs/09-irrigation-manuals/punjab-irrigation-drainage-and-rivers-act-2023-pdf.pdf",
    "Old Canal and Drainage Act": "assets/docs/09-irrigation-manuals/CANAL_AND_DRAINAGE_ACT,_18731.pdf",
    "Punjab Soil Reclamation Act": "assets/docs/12-legal-repository/10-punjab-soil-reclamation-act-1952-xxi-of-1952-pdf.pdf",
    "Flood Plain NOC Criteria": "assets/docs/12-legal-repository/Criteria for NOC for Construction in Flood Plain.pdf",
    "Punjab Flood Plain Regulation Act": "assets/docs/12-legal-repository/the-punjab-flood-plain-regulation-act-2016-updated-pdf.pdf",
    "Thal Development Validating Ordinance": "assets/docs/12-legal-repository/THE_THAL_DEVELOPMENT_(VALIDATING)_ORDINANCE,_1971.pdf"
  },
  "flood-watch": {
    "National Flood Protection Plan IV": "assets/docs/21-flood-watch/National Flood Protection Plan IV NFPP-IV.pdf",
    "FFC Annual Flood Report 2010": "assets/docs/21-flood-watch/FFC Annual Flood Report 2010.pdf",
    "Judicial Flood Enquiry Tribunal Report 2010": "https://www.dawn.com/news/amp/637390",
    "Pakistan Floods 2010 Damage and Needs Assessment": "assets/docs/21-flood-watch/Pakistan Floods 2010 Preliminary Damage and Needs Assessment.pdf",
    "Pakistan Floods 2022 Post-Disaster Needs Assessment": "assets/docs/21-flood-watch/Pakistan Floods 2022 Post-Disaster Needs Assessment.pdf",
    "Punjab Flood Plain Regulation Act": "assets/docs/12-legal-repository/the-punjab-flood-plain-regulation-act-2016-updated-pdf.pdf",
    "Flood Plain NOC Criteria": "assets/docs/12-legal-repository/Criteria for NOC for Construction in Flood Plain.pdf"
  },
  planning: {
    "PC-I": "assets/docs/10-planning-development/PC-I Form Infrastructure Sector.pdf",
    "PC-II": "assets/docs/10-planning-development/PC-II Form Survey and Feasibility Study.pdf",
    "PC-III": "assets/docs/10-planning-development/PC-III Form Monthly Progress Report.pdf",
    "PC-IV": "assets/docs/10-planning-development/PC-IV Form.pdf",
    "PC-V": "assets/docs/10-planning-development/PC-V Form.pdf",
    "Project Appraisal": "assets/docs/10-planning-development/The Planning Manual 2015.pdf",
    "Feasibility Studies": "assets/docs/13-standard-documents/Framework for Feasibility Studies Design Review Resident Supervision TPV and Owners Engineer.pdf",
    "ADP Guidelines": "assets/docs/10-planning-development/The Planning Manual 2015.pdf",
    "Punjab Planning Manual": "assets/docs/10-planning-development/Planning Manual 2024-25 Draft.pdf",
    "Monitoring & Evaluation": "assets/docs/10-planning-development/Compendium 2024-2025 Draft.pdf",
    "Planning Commission PC Forms": "https://www.pc.gov.pk/web/downloads/pcforms",
    "BOQ Templates": "assets/docs/13-standard-documents/SBD for Civil Works.docx",
    "Tender Documents": "assets/docs/13-standard-documents/SBD for Civil Works.docx",
    "NIT Templates": "assets/docs/13-standard-documents/SBD Procurement of Goods.docx",
    "Estimate Templates": "assets/docs/10-planning-development/PC-I Form Infrastructure Sector.pdf",
    "TS Formats": "assets/docs/10-planning-development/Approval Mechanism.pdf",
    "AS Formats": "assets/docs/10-planning-development/Approval Mechanism.pdf"
  },
  legal: {
    "Punjab Soil Reclamation Act": "assets/docs/12-legal-repository/10-punjab-soil-reclamation-act-1952-xxi-of-1952-pdf.pdf",
    "Punjab Flood Plain Regulation Act": "assets/docs/12-legal-repository/the-punjab-flood-plain-regulation-act-2016-updated-pdf.pdf",
    "Flood Plain NOC Criteria": "assets/docs/12-legal-repository/Criteria for NOC for Construction in Flood Plain.pdf",
    "Thal Development Validating Ordinance": "assets/docs/12-legal-repository/THE_THAL_DEVELOPMENT_(VALIDATING)_ORDINANCE,_1971.pdf",
    "Punjab PPP Act": "assets/docs/12-legal-repository/Punjab PPP Act 2014.pdf",
    "Environmental Impact Assessment Regulations": "assets/docs/12-legal-repository/Environmental Impact Assessment Regulations.pdf"
  },
  "standard-documents": {
    "SBD for Civil Works": "assets/docs/13-standard-documents/SBD for Civil Works.docx",
    "SBD Consultancy Services": "assets/docs/13-standard-documents/SBD Consultancy Services.docx",
    "SBD Non-Consultancy Services": "assets/docs/13-standard-documents/SBD Non-Consultancy Services.docx",
    "SBD Procurement of Goods": "assets/docs/13-standard-documents/SBD Procurement of Goods.docx",
    "Feasibility Studies Framework": "assets/docs/13-standard-documents/Framework for Feasibility Studies Design Review Resident Supervision TPV and Owners Engineer.pdf"
  },
  software: {
    "QGIS": "https://qgis.org/",
    "HEC-RAS": "https://www.hec.usace.army.mil/software/hec-ras/download.aspx",
    "HEC-HMS": "https://www.hec.usace.army.mil/software/hec-hms/",
    "HEC-ResSim": "https://www.hec.usace.army.mil/software/hec-ressim/",
    "EPA SWMM": "https://www.epa.gov/water-research/storm-water-management-model-swmm",
    "EPANET": "https://www.epa.gov/water-research/epanet",
    "SWAT+": "https://swatplus.gitbook.io/docs/installation",
    "MODFLOW 6": "https://www.usgs.gov/software/modflow-version-670",
    "GRASS GIS": "https://grass.osgeo.org/",
    "SAGA GIS": "https://sourceforge.net/projects/saga-gis/files/",
    "WhiteboxTools": "https://www.whiteboxgeo.com/geospatial-software/",
    "TauDEM": "https://hydrology.usu.edu/taudem/taudem5/",
    "OpenFOAM": "https://www.openfoam.com/",
    "FreeCAD": "https://www.freecad.org/",
    "LibreCAD": "https://librecad.org/",
    "Bonsai BIM": "https://bonsaibim.org/",
    "Python": "https://www.python.org/",
    "JupyterLab": "https://jupyter.org/",
    "Google Colab": "https://colab.research.google.com/",
    "Google Earth Engine": "https://earthengine.google.com/",
    "HydroShare": "https://www.hydroshare.org/",
    "Python Scripts": "assets/docs/15-software-digital-tools/PyQGIS Developer Cookbook 3.28.pdf"
  },
  "channel-design": {
    "Irrigation Channel Design": "tool:channel-design"
  },
};

const categoryList = document.querySelector("#categoryList");
const librarySearch = document.querySelector("#librarySearch");
const windowGrid = document.querySelector("#windowGrid");
const brandHomeButton = document.querySelector("#brandHomeButton");
const headerPortfolioButton = document.querySelector("#headerPortfolioButton");
const headerContactButton = document.querySelector("#headerContactButton");
const assistantWidget = document.querySelector("#assistantWidget");
const assistantToggle = document.querySelector("#assistantToggle");
const assistantHeaderToggle = document.querySelector("#assistantHeaderToggle");
const chatMessages = document.querySelector("#chatMessages");
const chatForm = document.querySelector("#chatForm");
const chatInput = document.querySelector("#chatInput");
const clearChat = document.querySelector("#clearChat");
const promptChips = document.querySelector("#promptChips");

let selectedCategoryId = document.body?.dataset.defaultCategory || "";
let pendingFocusLabel = "";

function syncHeaderTabs() {
  headerPortfolioButton?.classList.toggle("active", selectedCategoryId === "portfolio");
  headerContactButton?.classList.toggle("active", selectedCategoryId === "contact");
}

function goHome() {
  selectedCategoryId = "";
  pendingFocusLabel = "";
  syncHeaderTabs();
  renderCategories();
  renderWindows();
}

function normalize(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

const categoryVisuals = {
  "channel-design": { icon: "CD", color: "#007a63" },
  irrigation: { icon: "LW", color: "#0f7c90" },
  "flood-watch": { icon: "FW", color: "#1c74b8" },
  administration: { icon: "AD", color: "#6b5bd2" },
  finance: { icon: "FA", color: "#b7791f" },
  procurement: { icon: "PC", color: "#8b5e34" },
  engineering: { icon: "ED", color: "#536878" },
  planning: { icon: "PD", color: "#2f855a" },
  legal: { icon: "LR", color: "#8b2f3c" },
  "standard-documents": { icon: "SD", color: "#5b6c8f" },
  software: { icon: "SW", color: "#2563a8" }
};

function categoryVisual(categoryId) {
  return categoryVisuals[categoryId] || { icon: "IH", color: "#007a63" };
}

function linkedItems(category) {
  return category.items.filter((item) => ruleItemLinks[category.id]?.[item]);
}

function availableCategories() {
  return categories.filter((category) => linkedItems(category).length > 0 || documentLinks[category.id]?.length > 0);
}

function fileTypeLabel(href) {
  if (href.startsWith("tool:")) return "APP";
  if (/^https?:\/\//i.test(href)) return "WEB";
  return href.split(".").pop().toUpperCase();
}

function renderLibraryRow(label, href) {
  const safeLabel = escapeHtml(label);
  const extension = fileTypeLabel(href);

  if (href.startsWith("tool:")) {
    return `
      <button class="library-row tool-row" type="button" data-tool="${href}" data-entry-key="${normalize(label)}">
        <span>${safeLabel}</span>
        <strong>${extension}</strong>
      </button>
    `;
  }

  return `
    <a class="library-row" href="${href}" target="_blank" rel="noopener" data-entry-key="${normalize(label)}">
      <span>${safeLabel}</span>
      <strong>${extension}</strong>
    </a>
  `;
}

function circularChannelGeometry(depth, diameter) {
  if (depth <= 0 || diameter <= 0 || depth > diameter) return null;

  const y = depth;
  const radius = diameter / 2;
  const theta = y >= diameter ? Math.PI * 2 : 2 * Math.acos((radius - y) / radius);
  const area = (radius * radius * (theta - Math.sin(theta))) / 2;
  const wettedPerimeter = radius * theta;
  const hydraulicRadius = wettedPerimeter > 0 ? area / wettedPerimeter : 0;
  const topWidth = y >= diameter ? diameter : 2 * Math.sqrt(Math.max(y * (diameter - y), 0));

  return { area, wettedPerimeter, hydraulicRadius, topWidth };
}

function channelGeometry(channelType, depth, values) {
  const bottomWidth = values.bottomWidth;
  const leftSlope = values.leftSlope;
  const rightSlope = values.rightSlope;

  if (channelType === "Circular") {
    return circularChannelGeometry(depth, values.diameter);
  }

  if (channelType === "Rectangular") {
    if (depth <= 0 || bottomWidth <= 0) return null;
    const area = bottomWidth * depth;
    const wettedPerimeter = bottomWidth + 2 * depth;
    return {
      area,
      wettedPerimeter,
      hydraulicRadius: area / wettedPerimeter,
      topWidth: bottomWidth
    };
  }

  if (channelType === "Trapezoidal") {
    if (depth <= 0 || bottomWidth <= 0 || leftSlope < 0 || rightSlope < 0) return null;
    const sideSum = leftSlope + rightSlope;
    const area = bottomWidth * depth + (sideSum * depth * depth) / 2;
    const wettedPerimeter =
      bottomWidth + depth * Math.sqrt(1 + leftSlope * leftSlope) + depth * Math.sqrt(1 + rightSlope * rightSlope);
    return {
      area,
      wettedPerimeter,
      hydraulicRadius: area / wettedPerimeter,
      topWidth: bottomWidth + sideSum * depth
    };
  }

  return null;
}

function manningFlow(channelType, depth, values, slope, roughness, units) {
  const geometry = channelGeometry(channelType, depth, values);
  if (!geometry || slope <= 0 || roughness <= 0) return null;

  const coefficient = units === "english" ? 1.486 : 1;
  const flow = (coefficient / roughness) * geometry.area * Math.pow(geometry.hydraulicRadius, 2 / 3) * Math.sqrt(slope);
  return { flow, ...geometry };
}

function solveNormalDepth(channelType, flow, values, slope, roughness, units) {
  if (flow <= 0 || slope <= 0 || roughness <= 0) return null;

  let low = 0.000001;
  let high = channelType === "Circular" ? values.diameter : Math.max(1, values.bottomWidth || values.diameter || 1);

  if (channelType === "Circular") {
    let previousDepth = low;
    let previousFlow = 0;
    let maxFlow = 0;
    let bracketFound = false;

    for (let index = 1; index <= 500; index += 1) {
      const sampleDepth = (values.diameter * index) / 500;
      const sample = manningFlow(channelType, sampleDepth, values, slope, roughness, units);
      if (!sample) return null;
      maxFlow = Math.max(maxFlow, sample.flow);
      if (sample.flow >= flow && previousFlow <= flow) {
        low = previousDepth;
        high = sampleDepth;
        bracketFound = true;
        break;
      }
      previousDepth = sampleDepth;
      previousFlow = sample.flow;
    }

    if (flow > maxFlow || !bracketFound) return null;
  }

  for (let index = 0; index < 40; index += 1) {
    const result = manningFlow(channelType, high, values, slope, roughness, units);
    if (!result) return null;
    if (result.flow >= flow || (channelType === "Circular" && high >= values.diameter)) break;
    high *= 2;
  }

  for (let index = 0; index < 90; index += 1) {
    const mid = (low + high) / 2;
    const result = manningFlow(channelType, mid, values, slope, roughness, units);
    if (!result) return null;
    if (result.flow < flow) low = mid;
    else high = mid;
  }

  return (low + high) / 2;
}

function solveCriticalDepth(channelType, flow, values, units) {
  if (flow <= 0) return null;

  const gravity = units === "english" ? 32.174 : 9.80665;
  const maxDepth = channelType === "Circular" ? values.diameter : Math.max(10, (values.bottomWidth || 1) * 10);
  let low = 0.000001;
  let high = maxDepth;

  function criticalResidual(depth) {
    const geometry = channelGeometry(channelType, depth, values);
    if (!geometry || geometry.area <= 0 || geometry.topWidth <= 0) return null;
    return (flow * flow * geometry.topWidth) / (gravity * Math.pow(geometry.area, 3)) - 1;
  }

  const lowResidual = criticalResidual(low);
  let highResidual = criticalResidual(high);

  if (lowResidual === null || highResidual === null) return null;
  if (highResidual > 0) {
    if (channelType === "Circular") return null;
    for (let index = 0; index < 30 && highResidual > 0; index += 1) {
      high *= 2;
      highResidual = criticalResidual(high);
      if (highResidual === null) return null;
    }
    if (highResidual > 0) return null;
  }

  for (let index = 0; index < 70; index += 1) {
    const mid = (low + high) / 2;
    const residual = criticalResidual(mid);
    if (residual === null) return null;
    if (Math.abs(residual) < 0.000001) return mid;
    if (residual > 0) low = mid;
    else high = mid;
  }

  return (low + high) / 2;
}

function formatNumber(value, digits) {
  if (!Number.isFinite(value)) return "";
  return Number(value).toLocaleString("en-US", {
    maximumFractionDigits: digits,
    minimumFractionDigits: 0
  });
}

function formatInputNumber(value, digits) {
  if (!Number.isFinite(value)) return "";
  return Number(value.toFixed(digits)).toString();
}

function renderIrrigationChannelDesign() {
  windowGrid.innerHTML = `
    <article class="channel-design-app">
      <div class="manning-body">
        <label class="project-field">Project Name <input type="text" id="manningProjectName" value="Channel Design Based on Manning - Can be updated"></label>
        <div class="solver-controls">
          <label>Channel Type
            <select id="channelType">
              <option value="Circular">Circular</option>
              <option value="Rectangular">Rectangular</option>
              <option value="Trapezoidal">Trapezoidal</option>
            </select>
          </label>
          <label>Units
            <select id="manningUnits">
              <option value="english">English</option>
              <option value="metric">Metric</option>
            </select>
          </label>
          <label>Solve For
            <select id="manningMode">
              <option value="flow">Flow</option>
              <option value="depth">Depth</option>
            </select>
          </label>
        </div>
        <h3>Circular Channel</h3>
        <div class="manning-grid">
          <fieldset>
            <legend>Manning's Equation</legend>
            <label><span>Flow</span><input id="manningFlow" type="number" step="any" placeholder="Required when solving depth"><em data-unit="flow">cfs</em></label>
            <label><span>Depth</span><input id="manningDepth" type="number" step="any" placeholder="Required when solving flow"><em data-unit="length">ft</em></label>
            <label><span>Slope</span><input id="manningSlope" type="number" step="any" value="0.001"><em data-unit="slope">ft/ft</em></label>
            <label><span>Manning's n</span><input id="manningN" type="number" step="any" value="0.015"><em></em></label>
            <label data-field="diameter"><span>Diameter</span><input id="manningDiameter" type="number" step="any" placeholder="Pipe diameter"><em data-unit="diameter">in</em></label>
            <label data-field="bottomWidth"><span>Base Width</span><input id="manningBottomWidth" type="number" step="any" placeholder="Channel base"><em data-unit="length">ft</em></label>
            <label data-field="rightSlope"><span>Side Slope Rt. (H:1)</span><input id="manningRightSlope" type="number" step="any" value="1"><em>H:V</em></label>
            <label data-field="leftSlope"><span>Side Slope Lt. (H:1)</span><input id="manningLeftSlope" type="number" step="any" value="1"><em>H:V</em></label>
            <button id="calculateChannel" class="calculate-button" type="button">Calculate</button>
            <p id="manningStatus" class="solver-status" role="status"></p>
          </fieldset>
          <fieldset>
            <legend>Details</legend>
            <label><span>Velocity</span><output id="manningVelocity"></output><em data-unit="velocity">fps</em></label>
            <label><span>Velocity Head</span><output id="manningVelocityHead"></output><em data-unit="length">ft</em></label>
            <label><span>Flow Area</span><output id="manningArea"></output><em data-unit="area">sf</em></label>
            <label><span>Wetted Perimeter</span><output id="manningPerimeter"></output><em data-unit="length">ft</em></label>
            <label><span>Hydraulic Radius</span><output id="manningRadius"></output><em data-unit="length">ft</em></label>
            <label><span>Top Width</span><output id="manningTopWidth"></output><em data-unit="length">ft</em></label>
            <label><span>Froude No.</span><output id="manningFroude"></output><em></em></label>
            <label><span>Critical Depth</span><output id="manningCriticalDepth"></output><em data-unit="length">ft</em></label>
            <label><span>Critical Slope</span><output id="manningCriticalSlope"></output><em data-unit="slope">ft/ft</em></label>
          </fieldset>
        </div>
        <div class="solver-actions">
          <button id="printChannelReport" class="print-button" type="button">Print / Save PDF</button>
        </div>
        <p class="solver-note">Built by I.N. Based on Manning formula. Double-check all calculations and engineering assumptions before implementation.</p>
        <section id="printReport" class="print-report" aria-hidden="true"></section>
      </div>
    </article>
  `;

  setupIrrigationChannelDesign();
}

function renderLandingPage() {
  const featuredCategories = availableCategories()
    .slice(0, 6)
    .map((category) => {
      const visual = categoryVisual(category.id);
      return `
      <button class="landing-category" type="button" data-category-id="${category.id}" style="--tab-color: ${visual.color}">
        <span class="category-icon" aria-hidden="true">${visual.icon}</span>
        <span class="category-copy">
          <strong>${category.title}</strong>
          <span>${linkedItems(category).length} linked entries</span>
        </span>
      </button>
    `;
    })
    .join("");

  windowGrid.innerHTML = `
    <article class="landing-page">
      <section class="landing-intro">
        <div class="landing-copy">
          <div class="landing-logo-row">
            <img src="assets/img/punjab-irrigation-logo.jpg" alt="Punjab Irrigation Department logo">
            <span>Punjab Irrigation Department</span>
          </div>
          <span class="eyebrow">Rules, solutions and design support</span>
          <h2>Irrigation Hub</h2>
          <p>Your practical desk for irrigation laws, engineering manuals, planning forms, procurement references, and water-sector calculation tools.</p>
          <div class="landing-actions">
            <button type="button" data-category-id="channel-design">Start Channel Design</button>
            <button type="button" data-category-id="irrigation">Browse Laws and Manuals</button>
          </div>
        </div>
        <div class="canal-graphic" aria-hidden="true">
          <div class="sun"></div>
          <div class="hills"></div>
          <div class="canal">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div class="field-lines"></div>
        </div>
      </section>
      <section class="hub-highlights" aria-label="Irrigation Hub highlights">
        <div>
          <strong>Design</strong>
          <span>Manning-based channel sizing for common irrigation sections.</span>
        </div>
        <div>
          <strong>Reference</strong>
          <span>Linked manuals, laws, rules, and official planning documents.</span>
        </div>
        <div>
          <strong>Advice</strong>
          <span>Ask the assistant to locate the right section quickly.</span>
        </div>
      </section>
      <section class="landing-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Browse by category</span>
            <h3>Choose What You Need</h3>
          </div>
          <button type="button" data-category-id="contact">Contact Us</button>
        </div>
        <div class="landing-category-grid">${featuredCategories}</div>
      </section>
      <section class="advice-strip">
        <div>
          <span class="eyebrow">Need direction?</span>
          <h3>Ask, search, or open a tab.</h3>
        </div>
        <p>Use the left panel for direct access, the assistant for guided lookup, or the contact form to request corrections and new resources.</p>
      </section>
    </article>
  `;

  setupLandingPageLinks();
}

function setupLandingPageLinks() {
  document.querySelectorAll("[data-category-id]").forEach((button) => {
    button.addEventListener("click", () => openRuleWindow(button.dataset.categoryId));
  });
}

function setupIrrigationChannelDesign() {
  const channelTitle = document.querySelector(".manning-body h3");
  const channelTypeSelect = document.querySelector("#channelType");
  const unitsSelect = document.querySelector("#manningUnits");
  const modeSelect = document.querySelector("#manningMode");
  const calculateButton = document.querySelector("#calculateChannel");
  const printButton = document.querySelector("#printChannelReport");
  const printReport = document.querySelector("#printReport");
  const status = document.querySelector("#manningStatus");
  const inputs = {
    flow: document.querySelector("#manningFlow"),
    depth: document.querySelector("#manningDepth"),
    slope: document.querySelector("#manningSlope"),
    roughness: document.querySelector("#manningN"),
    diameter: document.querySelector("#manningDiameter"),
    bottomWidth: document.querySelector("#manningBottomWidth"),
    rightSlope: document.querySelector("#manningRightSlope"),
    leftSlope: document.querySelector("#manningLeftSlope")
  };
  const outputs = {
    velocity: document.querySelector("#manningVelocity"),
    velocityHead: document.querySelector("#manningVelocityHead"),
    area: document.querySelector("#manningArea"),
    perimeter: document.querySelector("#manningPerimeter"),
    radius: document.querySelector("#manningRadius"),
    topWidth: document.querySelector("#manningTopWidth"),
    froude: document.querySelector("#manningFroude"),
    criticalDepth: document.querySelector("#manningCriticalDepth"),
    criticalSlope: document.querySelector("#manningCriticalSlope")
  };

  function currentMode() {
    return modeSelect.value;
  }

  function currentUnits() {
    return unitsSelect.value;
  }

  function currentValues(units) {
    return {
      diameter: units === "english" ? Number(inputs.diameter.value) / 12 : Number(inputs.diameter.value),
      bottomWidth: Number(inputs.bottomWidth.value),
      rightSlope: Number(inputs.rightSlope.value),
      leftSlope: Number(inputs.leftSlope.value)
    };
  }

  function setUnits() {
    const units = currentUnits();
    const labels = {
      flow: units === "english" ? "cfs" : "m3/s",
      length: units === "english" ? "ft" : "m",
      diameter: units === "english" ? "in" : "m",
      slope: units === "english" ? "ft/ft" : "m/m",
      velocity: units === "english" ? "fps" : "m/s",
      area: units === "english" ? "sf" : "m2"
    };

    document.querySelectorAll("[data-unit]").forEach((element) => {
      element.textContent = labels[element.dataset.unit];
    });
  }

  function clearOutputs() {
    Object.values(outputs).forEach((output) => {
      output.value = "";
      output.textContent = "";
    });
    status.textContent = "";
  }

  function setStatus(message) {
    status.textContent = message;
    clearCalculatedCell();
  }

  function clearCalculatedCell() {
    if (currentMode() === "flow") inputs.flow.value = "";
    else inputs.depth.value = "";
  }

  function activeRequiredInputs() {
    const common = currentMode() === "flow" ? ["depth", "slope", "roughness"] : ["flow", "slope", "roughness"];
    const byShape = {
      Circular: ["diameter"],
      Rectangular: ["bottomWidth"],
      Trapezoidal: ["bottomWidth", "rightSlope", "leftSlope"]
    };
    return [...common, ...byShape[channelTypeSelect.value]];
  }

  function missingInputNames() {
    const names = {
      flow: "Flow",
      depth: "Depth",
      slope: "Slope",
      roughness: "Manning's n",
      diameter: "Diameter",
      bottomWidth: "Base Width",
      rightSlope: "Side Slope Rt.",
      leftSlope: "Side Slope Lt."
    };

    return activeRequiredInputs().filter((key) => {
      const value = Number(inputs[key].value);
      if (!Number.isFinite(value)) return true;
      if (key === "leftSlope" || key === "rightSlope") return value < 0;
      return value <= 0;
    }).map((key) => names[key]);
  }

  function syncChannelFields() {
    const visibleFields = {
      Circular: ["diameter"],
      Rectangular: ["bottomWidth"],
      Trapezoidal: ["bottomWidth", "rightSlope", "leftSlope"]
    };
    const activeChannelType = channelTypeSelect.value;

    document.querySelectorAll("[data-field]").forEach((row) => {
      const isVisible = visibleFields[activeChannelType].includes(row.dataset.field);
      row.hidden = !isVisible;
      row.querySelectorAll("input").forEach((input) => {
        input.disabled = !isVisible;
      });
    });

    channelTitle.textContent = `${activeChannelType} Channel`;
    clearOutputs();
  }

  function calculate() {
    const units = currentUnits();
    const mode = currentMode();
    const activeChannelType = channelTypeSelect.value;
    const values = currentValues(units);
    const flowInput = Number(inputs.flow.value);
    const depthInput = Number(inputs.depth.value);
    const slope = Number(inputs.slope.value);
    const roughness = Number(inputs.roughness.value);
    const gravity = units === "english" ? 32.174 : 9.80665;
    let depth = depthInput;
    let result = null;
    let flow = flowInput;
    const missing = missingInputNames();

    clearOutputs();

    if (missing.length > 0) {
      setStatus(`Enter valid values for: ${missing.join(", ")}.`);
      return;
    }

    if (activeChannelType === "Circular" && depthInput > values.diameter && mode === "flow") {
      setStatus("For a circular channel, depth cannot be greater than diameter.");
      return;
    }

    if (mode === "depth") {
      depth = solveNormalDepth(activeChannelType, flowInput, values, slope, roughness, units);
      if (depth) {
        inputs.depth.value = formatInputNumber(depth, 4);
      } else {
        setStatus("No valid normal depth found for the selected channel data.");
        return;
      }
    }

    if (mode === "flow") {
      result = manningFlow(activeChannelType, depthInput, values, slope, roughness, units);
      if (result) {
        flow = result.flow;
        inputs.flow.value = formatInputNumber(flow, 4);
      } else {
        setStatus("No valid flow found for the selected channel data.");
        return;
      }
    } else if (depth) {
      result = manningFlow(activeChannelType, depth, values, slope, roughness, units);
    }

    if (!result || result.area <= 0) {
      setStatus("Check the selected channel parameters and try again.");
      return;
    }

    const velocity = flow / result.area;
    const velocityHead = (velocity * velocity) / (2 * gravity);
    const froude = result.topWidth > 0 ? velocity / Math.sqrt(gravity * result.area / result.topWidth) : 0;
    const criticalDepth = solveCriticalDepth(activeChannelType, flow, values, units);
    const criticalFlow = criticalDepth ? manningFlow(activeChannelType, criticalDepth, values, 1, roughness, units) : null;
    const criticalSlope = criticalFlow ? Math.pow(flow / criticalFlow.flow, 2) : 0;

    outputs.velocity.value = outputs.velocity.textContent = formatNumber(velocity, 4);
    outputs.velocityHead.value = outputs.velocityHead.textContent = formatNumber(velocityHead, 4);
    outputs.area.value = outputs.area.textContent = formatNumber(result.area, 4);
    outputs.perimeter.value = outputs.perimeter.textContent = formatNumber(result.wettedPerimeter, 4);
    outputs.radius.value = outputs.radius.textContent = formatNumber(result.hydraulicRadius, 4);
    outputs.topWidth.value = outputs.topWidth.textContent = formatNumber(result.topWidth, 4);
    outputs.froude.value = outputs.froude.textContent = formatNumber(froude, 4);
    outputs.criticalDepth.value = outputs.criticalDepth.textContent = criticalDepth ? formatNumber(criticalDepth, 4) : "";
    outputs.criticalSlope.value = outputs.criticalSlope.textContent = criticalSlope ? formatNumber(criticalSlope, 6) : "";
    status.textContent = `Calculated ${mode === "flow" ? "flow" : "depth"} for ${activeChannelType.toLowerCase()} channel.`;
  }

  function syncMode() {
    const solvingFlow = currentMode() === "flow";
    inputs.flow.disabled = solvingFlow;
    inputs.depth.disabled = !solvingFlow;
    inputs.flow.classList.toggle("solver-target", solvingFlow);
    inputs.depth.classList.toggle("solver-target", !solvingFlow);
    inputs.flow.placeholder = solvingFlow ? "Calculated" : "Enter flow";
    inputs.depth.placeholder = solvingFlow ? "Enter depth" : "Calculated";
    clearCalculatedCell();
    clearOutputs();
  }

  function syncSolverState() {
    syncChannelFields();
    syncMode();
  }

  function unitText(kind) {
    const units = currentUnits();
    const labels = {
      flow: units === "english" ? "cfs" : "m3/s",
      length: units === "english" ? "ft" : "m",
      diameter: units === "english" ? "in" : "m",
      slope: units === "english" ? "ft/ft" : "m/m",
      velocity: units === "english" ? "fps" : "m/s",
      area: units === "english" ? "sf" : "m2"
    };
    return labels[kind] || "";
  }

  function fieldValue(input) {
    return input.value ? input.value : "-";
  }

  function visibleInputRows() {
    const rows = [
      ["Flow", fieldValue(inputs.flow), unitText("flow")],
      ["Depth", fieldValue(inputs.depth), unitText("length")],
      ["Slope", fieldValue(inputs.slope), unitText("slope")],
      ["Manning's n", fieldValue(inputs.roughness), ""]
    ];
    const activeChannelType = channelTypeSelect.value;

    if (activeChannelType === "Circular") rows.push(["Diameter", fieldValue(inputs.diameter), unitText("diameter")]);
    if (activeChannelType === "Rectangular") rows.push(["Base Width", fieldValue(inputs.bottomWidth), unitText("length")]);
    if (activeChannelType === "Trapezoidal") {
      rows.push(["Base Width", fieldValue(inputs.bottomWidth), unitText("length")]);
      rows.push(["Side Slope Rt. (H:1)", fieldValue(inputs.rightSlope), "H:V"]);
      rows.push(["Side Slope Lt. (H:1)", fieldValue(inputs.leftSlope), "H:V"]);
    }

    return rows;
  }

  function outputRows() {
    return [
      ["Velocity", outputs.velocity.textContent || "-", unitText("velocity")],
      ["Velocity Head", outputs.velocityHead.textContent || "-", unitText("length")],
      ["Flow Area", outputs.area.textContent || "-", unitText("area")],
      ["Wetted Perimeter", outputs.perimeter.textContent || "-", unitText("length")],
      ["Hydraulic Radius", outputs.radius.textContent || "-", unitText("length")],
      ["Top Width", outputs.topWidth.textContent || "-", unitText("length")],
      ["Froude No.", outputs.froude.textContent || "-", ""],
      ["Critical Depth", outputs.criticalDepth.textContent || "-", unitText("length")],
      ["Critical Slope", outputs.criticalSlope.textContent || "-", unitText("slope")]
    ];
  }

  function tableRows(rows) {
    return rows
      .map(
        ([label, value, unit]) => `
          <tr>
            <th>${escapeHtml(label)}</th>
            <td>${escapeHtml(value)}</td>
            <td>${escapeHtml(unit)}</td>
          </tr>
        `
      )
      .join("");
  }

  function preparePrintReport() {
  const projectName = document.querySelector("#manningProjectName").value.trim() || "Channel Design Based on Manning - Can be updated";
    const today = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric"
    });

    printReport.innerHTML = `
      <header>
        <h1>Irrigation Channel Design Report</h1>
        <p>Built by I.N.</p>
      </header>
      <section class="print-summary">
        <div><strong>Project Name</strong><span>${escapeHtml(projectName)}</span></div>
        <div><strong>Date</strong><span>${escapeHtml(today)}</span></div>
        <div><strong>Channel Type</strong><span>${escapeHtml(channelTypeSelect.value)}</span></div>
        <div><strong>Units</strong><span>${escapeHtml(unitsSelect.options[unitsSelect.selectedIndex].text)}</span></div>
        <div><strong>Solve For</strong><span>${escapeHtml(modeSelect.options[modeSelect.selectedIndex].text)}</span></div>
      </section>
      <section>
        <h2>Input Data</h2>
        <table>
          <thead><tr><th>Parameter</th><th>Value</th><th>Unit</th></tr></thead>
          <tbody>${tableRows(visibleInputRows())}</tbody>
        </table>
      </section>
      <section>
        <h2>Design Results</h2>
        <table>
          <thead><tr><th>Parameter</th><th>Value</th><th>Unit</th></tr></thead>
          <tbody>${tableRows(outputRows())}</tbody>
        </table>
      </section>
      <footer>
        <p>This design aid is based on Manning formula. Users are encouraged to double-check calculations, units, assumptions, and site conditions before implementation.</p>
      </footer>
    `;
  }

  modeSelect.addEventListener("change", syncMode);
  unitsSelect.addEventListener("change", () => {
    setUnits();
    clearCalculatedCell();
    clearOutputs();
  });
  channelTypeSelect.addEventListener("change", () => {
    syncSolverState();
  });
  calculateButton.addEventListener("click", calculate);
  printButton.addEventListener("click", () => {
    if (!outputs.velocity.textContent) calculate();
    if (!outputs.velocity.textContent) return;
    preparePrintReport();
    window.print();
  });

  setUnits();
  syncSolverState();
}

function renderContactForm() {
  windowGrid.innerHTML = `
    <article class="contact-page">
      <header>
        <div>
          <h3>Contact Us</h3>
          <p>Send a query, correction, document request, or suggestion for Irrigation Hub.</p>
        </div>
      </header>
      <form class="contact-form">
        <label>Name
          <input type="text" name="name" placeholder="Your name" required>
        </label>
        <label>Email
          <input type="email" name="email" placeholder="name@example.com" required>
        </label>
        <label>Department / Office
          <input type="text" name="office" placeholder="Optional">
        </label>
        <label>Query Type
          <select name="queryType">
            <option>Document request</option>
            <option>Correction or update</option>
            <option>Technical query</option>
            <option>General feedback</option>
          </select>
        </label>
        <label class="full-span">Query / Remarks
          <textarea name="remarks" rows="7" placeholder="Write your query or remarks..." required></textarea>
        </label>
        <div class="contact-actions full-span">
          <button type="submit">Submit Query</button>
          <span id="contactStatus" role="status"></span>
        </div>
      </form>
    </article>
  `;

  const form = document.querySelector(".contact-form");
  const status = document.querySelector("#contactStatus");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    status.textContent = "Query captured locally. Email/service integration can be connected later.";
    form.reset();
  });
}

function queryTerms(query) {
  const stopWords = new Set([
    "a",
    "about",
    "all",
    "an",
    "and",
    "are",
    "as",
    "can",
    "covers",
    "do",
    "does",
    "for",
    "give",
    "how",
    "i",
    "is",
    "me",
    "of",
    "on",
    "rule",
    "rules",
    "show",
    "the",
    "to",
    "what",
    "which"
  ]);

  return normalize(query)
    .split(" ")
    .filter((term) => term.length > 1 && !stopWords.has(term));
}

function findMatches(query) {
  const terms = queryTerms(query);
  if (terms.length === 0) return [];

  return availableCategories()
    .map((category) => {
      const items = linkedItems(category);
      const categoryText = normalize(`${category.title} ${items.join(" ")}`);
      const matchingItems = items.filter((item) =>
        terms.some((term) => normalize(`${category.title} ${item}`).includes(term))
      );
      const score = terms.reduce((total, term) => {
        if (categoryText.includes(term)) return total + 1;
        return total;
      }, 0);

      if (score === 0 && matchingItems.length === 0) return null;

      return {
        category,
        score: score + matchingItems.length,
        items: matchingItems.length > 0 ? matchingItems : items.slice(0, 6)
      };
    })
    .filter(Boolean);
}

function findKnowledgeAnswer(query) {
  const normalizedQuestion = normalize(query);
  const terms = queryTerms(query);

  return knowledgeAnswers.find((answer) => {
    const keywordHits = answer.terms.filter((term) => normalizedQuestion.includes(term));
    const minimumHits = answer.minHits || Math.min(3, answer.terms.length);
    return keywordHits.length >= minimumHits || answer.terms.every((term) => terms.includes(term));
  });
}

function isGreeting(question) {
  return /^(hi|hello|hey|salam|assalam|assalamu alaikum|aoa|good morning|good afternoon|good evening)\b/i.test(
    question.trim()
  );
}

function isThanks(question) {
  return /^(thanks|thank you|jazakallah|ok thanks|great thanks)\b/i.test(question.trim());
}

function isAssistantCapabilityQuestion(question) {
  const normalizedQuestion = normalize(question);
  return (
    normalizedQuestion.includes("what can you do") ||
    normalizedQuestion.includes("help me") ||
    normalizedQuestion.includes("how can you help")
  );
}

function isNonHubTask(question) {
  const normalizedQuestion = normalize(question);
  const blockedTasks = [
    "send email",
    "make call",
    "whatsapp",
    "delete file",
    "pay bill",
    "book ticket",
    "login",
    "password",
    "bank",
    "download youtube"
  ];
  return blockedTasks.some((task) => normalizedQuestion.includes(task));
}

function buildGreetingAnswer() {
  const greeting =
    assistantExchangeCount === 0
      ? "Hi, I am Ask AI Assistant for Irrigation Hub."
      : "Hi again.";
  return {
    text:
      `${greeting} You can ask me about Punjab irrigation laws, PPRA rules, finance rules, planning documents, flood plain matters, manuals, or engineering design references.<br><br>` +
      "For a good answer, ask like: <strong>Which rule covers bid security?</strong> or <strong>What is flood plain under the Punjab Flood Plain Regulation Act?</strong>",
    note: "I will search local hub documents first and use internet-backed AI only when the configured assistant service is available."
  };
}

function buildCapabilityAnswer() {
  return {
    text:
      "I can work like a chatbot for Irrigation Hub: I can greet users, ask follow-up questions, search the embedded library, open the related hub tab, and cite the matched local PDF or document. When the backend AI service has an API key, it can also draft answers using local excerpts and internet search where needed.<br><br>" +
      "Ask me a rule question, a manual question, or a document lookup question.",
    note: "Best results come from naming the topic, such as PPRA, leave, pension, flood plain, PC-I, canal design, or small dams."
  };
}

function buildClarifyingAnswer(question) {
  const terms = queryTerms(question);
  if (terms.length >= 2) return null;
  const directTopics = new Set([
    "leave",
    "pension",
    "ppra",
    "procurement",
    "finance",
    "planning",
    "pc",
    "flood",
    "floodplain",
    "canal",
    "drainage",
    "irrigation",
    "manual",
    "manuals",
    "manul",
    "engineering",
    "qgis",
    "gis",
    "survey"
  ]);
  if (terms.some((term) => directTopics.has(term))) return null;

  return {
    text:
      "I can help, but I need one more detail. Which hub area should I search: <strong>PPRA/procurement</strong>, <strong>leave or service rules</strong>, <strong>finance</strong>, <strong>planning/PC-I</strong>, <strong>flood plain</strong>, <strong>irrigation manuals</strong>, or <strong>engineering design</strong>?",
    note: "Please add the rule name, document name, or a few keywords so I can give a referenced answer."
  };
}

function formatAssistantSources(sources = []) {
  const localSources = sources
    .filter((source) => source && source.title && source.path)
    .slice(0, 4);

  if (!localSources.length) return "";

  return (
    "<br><br><strong>Sources checked</strong><br>" +
    localSources
      .map((source) => {
        const title = escapeHtml(source.title);
        const path = escapeHtml(source.path);
        return `<a href="${path}" target="_blank" rel="noopener">${title}</a>`;
      })
      .join("<br>")
  );
}

async function askAssistantBackend(question) {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), 45000);
  const endpoints = [
    `${window.location.origin}/api/assistant`,
    "http://127.0.0.1:8013/api/assistant",
    "http://127.0.0.1:8012/api/assistant",
    "http://127.0.0.1:8011/api/assistant",
    "http://127.0.0.1:8010/api/assistant",
    "http://127.0.0.1:8009/api/assistant",
    "http://127.0.0.1:8008/api/assistant",
    "http://127.0.0.1:8007/api/assistant",
    "http://127.0.0.1:8006/api/assistant",
    "http://127.0.0.1:8005/api/assistant",
    "http://127.0.0.1:8004/api/assistant",
    "http://127.0.0.1:8003/api/assistant",
    "http://127.0.0.1:8002/api/assistant",
    "http://127.0.0.1:8001/api/assistant",
  ];

  try {
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ question }),
          signal: controller.signal
        });

        if (!response.ok) continue;

        const data = await response.json();
        if (!data || data.error || !data.text) continue;

        return {
          text: data.text,
          note: data.note || "Answered by the assistant service.",
          categoryId: data.categoryId,
          itemLabel: data.itemLabel,
          sources: data.sources || []
        };
      } catch (error) {
        // Try the next local assistant endpoint.
      }
    }

    return null;
  } catch (error) {
    return null;
  } finally {
    window.clearTimeout(timer);
  }
}

function renderCategories() {
  const query = librarySearch.value;
  const cleanQuery = normalize(query);
  categoryList.innerHTML = "";

  availableCategories()
    .filter((category) => {
      if (!cleanQuery) return true;
      return normalize(`${category.title} ${linkedItems(category).join(" ")}`).includes(cleanQuery);
    })
    .forEach((category) => {
      const visual = categoryVisual(category.id);
      const button = document.createElement("button");
      button.type = "button";
      button.className = `category-button${selectedCategoryId === category.id ? " active" : ""}`;
      button.style.setProperty("--tab-color", visual.color);
      button.innerHTML = `
        <span class="category-icon" aria-hidden="true">${visual.icon}</span>
        <span class="category-copy">
          <strong>${category.title}</strong>
          <span>${linkedItems(category).length} linked entries</span>
        </span>
      `;
      button.addEventListener("click", () => openRuleWindow(category.id));
      categoryList.appendChild(button);
    });
}

function renderWindows() {
  windowGrid.innerHTML = "";

  if (!selectedCategoryId) {
    renderLandingPage();
    return;
  }

  if (selectedCategoryId === "channel-design") {
    renderIrrigationChannelDesign();
    return;
  }

  if (selectedCategoryId === "portfolio") {
    renderPortfolioPage();
    return;
  }

  if (selectedCategoryId === "contact") {
    renderContactForm();
    return;
  }

  const category = categories.find((entry) => entry.id === selectedCategoryId);
  if (!category) return;

  const items = linkedItems(category);
  const docs = documentLinks[selectedCategoryId] || [];
  const itemList = items
    .map((item) => {
      const href = ruleItemLinks[selectedCategoryId][item];
      return renderLibraryRow(item, href);
    })
    .join("");
  const docList = docs
    .map(([label, href]) => renderLibraryRow(label, href))
    .join("");

  const section = document.createElement("article");
  section.className = "library-page";
  section.innerHTML = `
    <header>
      <div>
        <h3>${category.title}</h3>
        <p>${items.length} linked subcategories${docs.length ? ` and ${docs.length} reference documents` : ""}</p>
      </div>
    </header>
    <div class="library-section">
      <h4>Linked Subcategories</h4>
      <div class="library-list">${itemList}</div>
    </div>
    ${
      docList
        ? `<div class="library-section">
            <h4>Reference Documents</h4>
            <div class="library-list">${docList}</div>
          </div>`
        : ""
    }
  `;

  windowGrid.appendChild(section);
  section.querySelectorAll("[data-tool='tool:channel-design']").forEach((button) => {
    button.addEventListener("click", renderIrrigationChannelDesign);
  });
  section.querySelectorAll("[data-tool='tool:portfolio']").forEach((button) => {
    button.addEventListener("click", renderPortfolioPage);
  });
  focusLibraryEntry();
}

function renderPortfolioPage() {
  selectedCategoryId = "portfolio";
  renderCategories();
  syncHeaderTabs();
  windowGrid.innerHTML = `
    <article class="portfolio-page native-portfolio" aria-label="Irfan Nazar portfolio">
      <section class="portfolio-hero">
        <div class="portfolio-copy">
          <span class="eyebrow">Professional Portfolio</span>
          <h3>Irfan Nazar</h3>
          <p class="portfolio-role">MSc · P.E. Pak · Executive Engineer · Hydroinformatics · Water Resources</p>
          <p>
            Civil engineer with 11 years, 1 month, and 1 day of practical experience since 07 July 2015,
            focused on hydraulic design, hydrological and hydraulic modelling, small dam projects,
            flood management, GIS, and decision-support systems.
          </p>
          <p>
            Research interests center on the intersection of hydroinformatics and Nature-Based Solutions
            in water-resource management and environmental conservation, with work across flood dynamics,
            rainfall-runoff modelling, climate-change adaptation, and groundwater modelling.
          </p>
          <div class="portfolio-actions">
            <a class="header-action primary" href="https://www.linkedin.com/in/irfannazar/" target="_blank" rel="noopener">LinkedIn</a>
          </div>
        </div>
        <figure class="portfolio-photo-card">
          <img src="assets/img/irfan-ihe.jpg?v=1" alt="Irfan Nazar at IHE Delft">
          <figcaption>IHE Delft Institute for Water Education · Hydroinformatics</figcaption>
        </figure>
      </section>

      <section class="portfolio-summary-grid">
        <div>
          <strong>Current Focus</strong>
          <span>Small Dams Division, Jhelum · Punjab Irrigation Department</span>
        </div>
        <div>
          <strong>Experience</strong>
          <span>11 years, 1 month, and 1 day since 07 July 2015 in water management, small dams, flood management, feasibility, construction supervision, and modelling</span>
        </div>
        <div>
          <strong>Contact</strong>
          <span>+92 301 7941604 · irfannazar35@gmail.com</span>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Expertise</span>
            <h3>Engineering, Research, and Digital Water Tools</h3>
          </div>
        </div>
        <div class="portfolio-card-grid">
          <div class="portfolio-card">
            <strong>Dam & Water Engineering</strong>
            <p>Small dams, feasibility studies, hydraulic design, construction supervision, reservoir operations, and flood-risk reduction.</p>
          </div>
          <div class="portfolio-card">
            <strong>Hydrological Modelling</strong>
            <p>MIKE SHE, HEC-HMS, rainfall-runoff modelling, groundwater modelling, climate adaptation, and catchment analysis.</p>
          </div>
          <div class="portfolio-card">
            <strong>Hydraulic Modelling</strong>
            <p>MIKE 11, HEC-RAS, Sobek, river hydraulics, flood dynamics, inundation studies, and drainage behaviour.</p>
          </div>
          <div class="portfolio-card">
            <strong>Digital Water Tools</strong>
            <p>GIS, Python, data visualization, web applications, decision-support systems, machine learning, and surveying workflows.</p>
          </div>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Professional Experience</span>
            <h3>Water Management and Engineering Practice</h3>
          </div>
        </div>
        <div class="portfolio-timeline">
          <div>
            <strong>Executive Engineer · Punjab Irrigation Department, Govt. of Punjab</strong>
            <span>2021-Present · Current role in water management, small dam projects, feasibility studies, construction supervision, flood management, project planning, implementation, and flood risk reduction.</span>
          </div>
          <div>
            <strong>Assistant Executive Engineer · Punjab Irrigation Department, Govt. of Punjab</strong>
            <span>07 July 2015-2021 · Field engineering, irrigation infrastructure assignments, hydraulic works, project execution support, and water-sector operations.</span>
          </div>
          <div>
            <strong>Junior Engineer · Associated Consulting Engineers - ACE (Pvt) Ltd.</strong>
            <span>2014-2015 · Consulting engineering support for civil and water-sector assignments.</span>
          </div>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Selected Work</span>
            <h3>Representative Projects</h3>
          </div>
        </div>
        <div class="portfolio-list">
          <div><strong>Small Dams Decision Support System</strong><span>Monitoring dashboard for 16 small dams with GIS and automated reporting workflows.</span></div>
          <div><strong>Small Dam Feasibility Studies</strong><span>Contributed to feasibility studies for new dam sites and planning of small dam projects in Punjab.</span></div>
          <div><strong>Small Dam Construction Supervision</strong><span>Supervisory role in construction of small dam projects, supporting implementation quality and field coordination.</span></div>
          <div><strong>Chenab Basin Riverine Flood Management</strong><span>Participated in riverine flood management in the Chenab Basin, applying flood-risk reduction and operational response experience.</span></div>
          <div><strong>Sulaiman Range Hill Torrent Floods</strong><span>Worked on flash flood management context in the Sulaiman range hill torrents.</span></div>
          <div><strong>Chenab Flood Monitoring</strong><span>Flood early-warning bulletins and discharge trend interpretation for monsoon response.</span></div>
          <div><strong>Chenab River Inundation Mapping</strong><span>Sentinel-1 SAR, Google Earth Engine, and QGIS mapping for the Qadirabad to Talibwala reach, including affected villages and crop-risk interpretation.</span></div>
          <div><strong>Post Flood Conference 2025 Analysis</strong><span>Contributed flood-management insight around early-warning systems, hydrometeorological data integration, advanced models, and community-level alerts.</span></div>
          <div><strong>Lehri Dam EPAP Review</strong><span>Technical QA of emergency preparedness, breach modeling assumptions, and inundation outputs.</span></div>
          <div><strong>Consultancy TOR for 13 Schemes</strong><span>PMO-style scope, procurement, M&E, and supervision framework for small-dam schemes.</span></div>
          <div><strong>Flood Frequency Analysis Toolkit</strong><span>Python-based hydrology workflow using Gumbel EV1, Log-Pearson III, Log-Normal, Normal distributions, plotting positions, and KS testing.</span></div>
          <div><strong>GFS Rainfall Accumulation Pipeline</strong><span>Python, rasterio, GeoPandas, and Open-Meteo/GFS forecast processing for Bunhan and Kahan catchments.</span></div>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Education</span>
            <h3>Academic Foundation</h3>
          </div>
        </div>
        <div class="portfolio-timeline">
          <div>
            <strong>MSc, Water Science and Engineering</strong>
            <span>Specialization in Hydroinformatics · IHE Delft Institute for Water Education · 2023</span>
          </div>
          <div>
            <strong>MSc Thesis</strong>
            <span>Investigating the effectiveness of Nature-Based Solutions for climate-change adaptation: Aa of Weerijs catchment, The Netherlands · Supervisor: Dr. Schalk Jan van Andel</span>
          </div>
          <div>
            <strong>BSc Civil Engineering</strong>
            <span>University of Engineering & Technology, Taxila, Pakistan · 2014</span>
          </div>
          <div>
            <strong>BSc Thesis</strong>
            <span>Study of traffic behavior of multimodal at-grade intersection at Tarnol using field survey methods and proposed mobility improvement solutions · Supervisor: Dr. Mumtaz Ahmed Kamal</span>
          </div>
          <div>
            <strong>Intermediate / Pre-Engineering</strong>
            <span>Pakistan · 2008-2010</span>
          </div>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Awards</span>
            <h3>Awards and Accomplishments</h3>
          </div>
        </div>
        <div class="portfolio-list">
          <div><strong>IHE Fellowship Award</strong><span>Received prestigious IHE fellowship award for advanced class for producing a peer-reviewed journal article · 2023.</span></div>
          <div><strong>EIFFEL H2020 Project Support</strong><span>Secured funding from the EIFFEL H2020 Project for EGU conference support · 2023.</span></div>
          <div><strong>ADB Competitive Scholarship</strong><span>Awarded ADB-funded competitive scholarship for pursuing Master study at IHE Delft · 2021.</span></div>
          <div><strong>Open House Research Project Exhibition</strong><span>Secured 1st position in Open House Research Project Exhibition · 2014.</span></div>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Research & Publications</span>
            <h3>Climate Adaptation, Dams, and Water Systems</h3>
          </div>
        </div>
        <div class="portfolio-list">
          <div><strong>Nature-Based Solutions Journal Article</strong><span>Nazar, I. et al.: Evaluating the Effectiveness of Nature-Based Solutions for Climate Change Adaptation: Insights from the MIKE-SHE/MIKE11 Coupled Model. Nature-Based Solutions, 4, under review.</span></div>
          <div><strong>EGU General Assembly 2023</strong><span>Investigating the effectiveness of Nature-Based Solutions for climate-change adaptation: Aa of Weerijs catchment, The Netherlands · EGU23-2894 · DOI 10.5194/egusphere-egu23-2894.</span></div>
          <div><strong>NCR Days 2023</strong><span>Investigating the effectiveness of Nature-Based Solutions using coupled MIKE SHE-MIKE11 model · Nijmegen, Netherlands.</span></div>
          <div><strong>Design of Small Dams and Conveyance Structures</strong><span>Punjab Irrigation Department work focused on the Pothohar region.</span></div>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Conferences and Workshops</span>
            <h3>Technical Forums Attended and Presented</h3>
          </div>
        </div>
        <div class="portfolio-list">
          <div><strong>EGU General Assembly 2023</strong><span>Poster presentation on NBS climate-change adaptation case study, Vienna.</span></div>
          <div><strong>NCR Days 2023</strong><span>Poster presentation on coupled MIKE SHE-MIKE11 modelling, Nijmegen, Netherlands.</span></div>
          <div><strong>Asia Water Forum 2022</strong><span>Virtually attended regional water-sector forum.</span></div>
          <div><strong>EGU General Assembly 2022</strong><span>Attended EGU General Assembly in Vienna, Austria.</span></div>
          <div><strong>AI Webinar</strong><span>Artificial Intelligence: Implications for Technologies and Business Strategy · Pakistan Engineering Council HQ, Islamabad.</span></div>
          <div><strong>Water Security Webinar</strong><span>Water Security and Sustainable Development in Pakistan · Embassy of Pakistan in the Netherlands with IHE Delft.</span></div>
          <div><strong>WMO HydroHub Youth Symposium 2022</strong><span>Participated in WMO HydroHub youth event.</span></div>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Certifications & Courses</span>
            <h3>Professional Development</h3>
          </div>
        </div>
        <div class="portfolio-card-grid portfolio-card-grid-compact">
          <div class="portfolio-card"><strong>Professional Engineer</strong><p>Pakistan Engineering Council · Civil/36445 · 2014</p></div>
          <div class="portfolio-card"><strong>QGIS for Hydrological Applications</strong><p>IHE Delft · Credential QGIS-2713 · 2021</p></div>
          <div class="portfolio-card"><strong>Advanced Academic Writing</strong><p>IHE Delft · 2022</p></div>
          <div class="portfolio-card"><strong>Artificial Intelligence</strong><p>Implications for Technologies and Business Strategy · Pakistan Engineering Council HQ, Islamabad · 2023</p></div>
          <div class="portfolio-card"><strong>Construction Safety and Challenges</strong><p>Pakistan Engineering Council · 2012</p></div>
          <div class="portfolio-card"><strong>AutoCAD Civil 3D 2012 / RoadCalc</strong><p>Pakistan Engineering Congress / PEC Pakistan · 2015</p></div>
          <div class="portfolio-card"><strong>Junior Engineers Pre-Service Training</strong><p>9th Pre-service training at Punjab Engineering Academy · 2014</p></div>
          <div class="portfolio-card"><strong>Primavera P6</strong><p>Professional practical training at ICCT Pakistan · 2014</p></div>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Tools & Methods</span>
            <h3>Technical Stack</h3>
          </div>
        </div>
        <div class="portfolio-skill-cloud">
          <span>HEC-RAS</span><span>MIKE SHE</span><span>MIKE11</span><span>QGIS</span><span>ArcGIS</span>
          <span>Google Earth Engine</span><span>Sentinel-1 SAR</span><span>Python</span><span>GeoPandas</span>
          <span>rasterio</span><span>HEC-HMS</span><span>Sobek</span><span>MODFLOW</span><span>RIBASIM</span>
          <span>AutoCAD</span><span>Civil 3D RoadCalc</span><span>PHP</span><span>JavaScript</span><span>HTML/CSS</span>
          <span>Machine Learning</span><span>DGPS</span><span>TBC 3.0</span><span>Decision Support Systems</span>
          <span>MS Project</span><span>Primavera P6</span><span>PTV VISSIM</span><span>Hydrological Modelling</span>
          <span>Flood Frequency Analysis</span><span>Flood Risk Reduction</span><span>Nature-Based Solutions</span>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-heading">
          <div>
            <span class="eyebrow">Recognition</span>
            <h3>Recommendations & Professional Bodies</h3>
          </div>
        </div>
        <div class="portfolio-list">
          <div><strong>Problematic Dams Project</strong><span>Recommended for technical expertise in hydrology, water-resources planning, construction management, timeline control, and rehabilitation of problematic dams including Taja Bara, Domeli, Sadrial, Mohra Shera, and Cherah Dams.</span></div>
          <div><strong>IHE Delft Collaboration</strong><span>Recommended for research strength in hydroinformatics, hydrology, nature-based solutions, big-data handling, teamwork, presentation, and communication.</span></div>
          <div><strong>Organizations</strong><span>Pakistan Engineering Council · Punjab Irrigation Department · IHE Delft alumni network.</span></div>
          <div><strong>Languages</strong><span>English · Urdu</span></div>
        </div>
      </section>
    </article>
  `;

  setupLandingPageLinks();
}

function focusLibraryEntry() {
  if (!pendingFocusLabel) return;

  const targetKey = normalize(pendingFocusLabel);
  const target = Array.from(windowGrid.querySelectorAll("[data-entry-key]")).find(
    (entry) => entry.dataset.entryKey === targetKey
  );
  pendingFocusLabel = "";

  if (!target) return;

  target.classList.add("focused-row");
  target.scrollIntoView({ behavior: "smooth", block: "center" });
  window.setTimeout(() => target.classList.remove("focused-row"), 2600);
}

function openRuleWindow(id, focusLabel = "") {
  if (id !== "contact" && !availableCategories().some((category) => category.id === id)) return;
  selectedCategoryId = id;
  pendingFocusLabel = focusLabel;
  syncHeaderTabs();
  renderCategories();
  renderWindows();
}

async function answerQuestion(question) {
  if (isGreeting(question)) return buildGreetingAnswer();
  if (isThanks(question)) {
    return {
      text: "You are welcome. Ask me any Irrigation Hub question when you are ready.",
      note: "I can search rules, manuals, planning documents, finance references, flood documents, and design manuals."
    };
  }
  if (isAssistantCapabilityQuestion(question)) return buildCapabilityAnswer();
  if (isNonHubTask(question)) {
    return {
      text: "I am sorry, I am improving my capabilities. I cannot perform that action yet, but I can help with Irrigation Hub rules, manuals, documents, calculations, and referenced answers.",
      note: "Try asking about PPRA, leave, pension, PC-I, flood plain, canal design, small dams, finance, or planning documents."
    };
  }

  const clarification = buildClarifyingAnswer(question);
  if (clarification) return clarification;

  const backendAnswer = await askAssistantBackend(question);
  if (backendAnswer) {
    return {
      ...backendAnswer,
      text: `${backendAnswer.text}${formatAssistantSources(backendAnswer.sources)}`
    };
  }

  const knowledgeAnswer = findKnowledgeAnswer(question);
  if (knowledgeAnswer) {
    return {
      text: knowledgeAnswer.text,
      note: knowledgeAnswer.note,
      categoryId: knowledgeAnswer.categoryId,
      itemLabel: knowledgeAnswer.itemLabel
    };
  }

  const matches = findMatches(question).sort((a, b) => b.score - a.score);
  const words = queryTerms(question);

  if (matches.length === 0) {
    return {
      text: "I am sorry, I am improving my capabilities. I could not find a reliable answer for that yet. Please ask with a rule name, document name, or hub topic such as leave, PPRA, pension, canal act, flood plain, PC-I, technical sanction, spillway, dam, survey, or finance.",
      note: "The assistant backend did not return a referenced answer, so I used the built-in local library matcher."
    };
  }

  const best = matches[0];
  const targetItem =
    best.items.find((item) => words.some((word) => normalize(item).includes(word))) || best.items[0];

  const highlighted = best.items
    .slice(0, 8)
    .map((item) => {
      const hit = words.some((word) => normalize(item).includes(word));
      return hit ? `<mark>${item}</mark>` : item;
    })
    .join(", ");

  return {
    text: `Best match: <strong>${best.category.title}</strong><br>${highlighted}`,
    note: "I opened the related document page on the right. Start `assistant_server.py` for deeper PDF/web answers.",
    categoryId: best.category.id,
    itemLabel: targetItem
  };
}

function addMessage(role, text, note = "") {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  if (role === "user") {
    message.textContent = text;
  } else {
    message.innerHTML = `${text}${note ? `<small>${escapeHtml(note)}</small>` : ""}`;
  }
  chatMessages.appendChild(message);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  return message;
}

function setupAssistantWidget() {
  examples.forEach((example) => {
    const chip = document.createElement("button");
    chip.type = "button";
    chip.className = "prompt-chip";
    chip.textContent = example;
    chip.title = example;
    chip.addEventListener("click", () => {
      assistantWidget.classList.remove("collapsed");
      assistantToggle.setAttribute("aria-expanded", "true");
      chatInput.value = example;
      chatForm.requestSubmit();
    });
    promptChips.appendChild(chip);
  });

  function toggleAssistant() {
    const collapsed = assistantWidget.classList.toggle("collapsed");
    assistantToggle.setAttribute("aria-expanded", String(!collapsed));
  }

  assistantToggle.addEventListener("click", toggleAssistant);
  assistantHeaderToggle.addEventListener("click", toggleAssistant);

  chatForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const question = chatInput.value.trim();
    if (!question) return;

    addMessage("user", question);
    assistantExchangeCount += 1;
    const searchingMessage = addMessage("assistant", "Let me check the hub library and available sources...");
    const answer = await answerQuestion(question);
    searchingMessage.remove();
    addMessage("assistant", answer.text, answer.note);
    chatInput.value = "";
    if (answer.categoryId) {
      window.setTimeout(() => openRuleWindow(answer.categoryId, answer.itemLabel), 350);
    }
  });

  clearChat.addEventListener("click", () => {
    chatMessages.innerHTML = "";
    assistantExchangeCount = 0;
    addMessage("assistant", "Hi, I am Ask AI Assistant. Ask me about a rule, manual, document, or tool and I will search the hub library, cite sources, and open the related page where possible.");
  });

  addMessage("assistant", "Hi, I am Ask AI Assistant. Ask me about a rule, manual, document, or tool and I will search the hub library, cite sources, and open the related page where possible.");
}

librarySearch.addEventListener("input", renderCategories);
brandHomeButton?.addEventListener("click", goHome);
headerPortfolioButton?.addEventListener("click", renderPortfolioPage);
headerContactButton?.addEventListener("click", () => openRuleWindow("contact"));

setupAssistantWidget();
renderCategories();
renderWindows();
