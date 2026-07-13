// Shared mock content for the Legal House website UI kit — sourced verbatim from
// legalhouselawfirm/LH: frontend/src/data/mock.js (contact info, team, nav, expertise
// areas, about copy). Practice-area detail content is a representative excerpt
// standing in for the full 24-area dataset in frontend/src/data/practiceAreas.js.

const contactInfo = {
  phones: ['+91 93431 38491', '+91 9893555578'],
  bookingPhone: '9893555578',
  office: '0731 4072188',
  email: 'legalhouselawfirm@gmail.com',
  addresses: [
    { id: 1, name: 'Corporate Office', address: '303, City Centre, M.G. Road, South Tukoganj', landmark: 'Opposite High Court', city: 'Indore [M.P.]', mapsUrl: 'https://share.google/xqclhGocPGYPE5Mxy' },
    { id: 2, name: 'Indore Office', address: '284, DKN, Scheme No. 74-C', landmark: 'Vijay Nagar', city: 'Indore [M.P.]', mapsUrl: 'https://maps.app.goo.gl/udobDCBbnDLohbxv6' },
    { id: 3, name: 'Delhi Office', address: 'R-535, 1st Floor', landmark: 'New Rajendra Nagar', city: 'New Delhi', mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Legal+House+Advocates+%26+Consultants+New+Rajendra+Nagar+New+Delhi' },
  ],
  social: {
    instagram: 'https://www.instagram.com/legalhouselawfirm/',
    linkedin: 'https://www.linkedin.com/company/legalhouselawfirm/?viewAsMember=true',
    facebook: 'https://www.facebook.com/profile.php?id=61575837667220',
  },
  handle: '@legalhouselawfirm',
};

// Content-creation showcase — the firm's legal-explainer reels on Instagram,
// shown in the "Law, explained." strip. `motif` picks a faint watermark icon
// for the branded cover (designed in-page; no external thumbnail needed).
const contentReels = [
  { id: 1, image: 'assets/reel-1.jpg', platform: 'Instagram', kind: 'Reel', url: 'https://www.instagram.com/reel/DXR7P69kr6O/' },
  { id: 2, image: 'assets/reel-2.jpg', platform: 'Instagram', kind: 'Reel', url: 'https://www.instagram.com/reel/DXcffUzEvOO/' },
  { id: 3, image: 'assets/reel-3.jpg', platform: 'Instagram', kind: 'Reel', url: 'https://www.instagram.com/reel/DVJpJ-djkx9/' },
];

// NOTE: the source site's team photos are hosted on an ephemeral asset URL that
// could not be fetched into this project. These are neutral stock placeholders —
// swap in the real headshots when available.
const teamMembers = [
  { id: 2, name: 'Anirudh Patwa', title: 'Advocate', subtitle: 'Supreme Court of India', image: 'assets/anirudh-sc-square.jpg', email: 'advanirudhpatwa@gmail.com', linkedin: 'https://www.linkedin.com/in/patwaanirudh/' },
  { id: 1, name: 'Sapna Patwa', title: 'Founding Manager, Legal House', subtitle: 'Ex-Judge', image: 'assets/sapna-patwa.jpg', email: 'advsapnapatwa@gmail.com', linkedin: 'https://www.linkedin.com/in/sapnapatwacj/' },
  { id: 3, name: 'Muskan Patwa', title: 'Advocate', subtitle: 'Tax Consultant', image: 'assets/muskan-patwa.jpg', linkedin: 'https://www.linkedin.com/in/patwamuskan9007/' },
];

const expertiseAreas = {
  industryWise: [
    { name: 'Banking & Finance', slug: 'banking-finance', icon: 'landmark' },
    { name: 'Capital Market', slug: 'capital-market', icon: 'trending-up' },
    { name: 'Software & Technology', slug: 'software-technology', icon: 'code-2' },
    { name: 'Real Estate Sector', slug: 'real-estate-sector', icon: 'building-2' },
    { name: 'Pharmaceuticals & Healthcare', slug: 'pharmaceuticals-healthcare', icon: 'stethoscope' },
    { name: 'Infrastructure & Energy', slug: 'infrastructure-energy', icon: 'zap' },
    { name: 'Manufacturing & Industry', slug: 'manufacturing-industry', icon: 'factory' },
    { name: 'Media & Entertainment', slug: 'media-entertainment', icon: 'film' },
  ],
  litigation: [
    { name: 'Real Estate / Property Disputes', slug: 'property-disputes', icon: 'home' },
    { name: 'Corporate & Commercial Disputes', slug: 'corporate-disputes', icon: 'briefcase' },
    { name: 'Criminal Litigation', slug: 'criminal-litigation', icon: 'shield-alert' },
    { name: 'Matrimonial & Family Disputes', slug: 'matrimonial-disputes', icon: 'users' },
    { name: 'Constitutional & Writ Matters', slug: 'constitutional-writ', icon: 'scale' },
    { name: 'Service & Employment Law', slug: 'service-employment', icon: 'user-check' },
    { name: 'Taxation Disputes', slug: 'taxation-disputes', icon: 'receipt' },
    { name: 'Consumer Disputes', slug: 'consumer-disputes', icon: 'shopping-cart' },
  ],
  nonLitigation: [
    { name: 'Legal Due Diligence', slug: 'legal-due-diligence', icon: 'search-check' },
    { name: 'Compliance & Licensing', slug: 'compliance-licensing', icon: 'clipboard-check' },
    { name: 'Startup Advisory', slug: 'startup-advisory', icon: 'rocket' },
    { name: 'Drafting of Agreements', slug: 'drafting-agreements', icon: 'file-text' },
    { name: 'Arbitration & Mediation', slug: 'arbitration-mediation', icon: 'handshake' },
    { name: 'Intellectual Property', slug: 'intellectual-property', icon: 'copyright' },
    { name: 'Real Estate Documentation', slug: 'real-estate-documentation', icon: 'file-signature' },
    { name: 'Corporate Structuring', slug: 'corporate-structuring', icon: 'network' },
  ],
};

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Area of Expertise', href: '#expertise' },
  { name: 'Our Team', href: '#team' },
  { name: 'Our Work', href: '#testimonials' },
  { name: 'Internship', href: '#internship' },
];

const aboutContent = {
  promise: "Where others take weeks, we move in days. From urgent bail applications to complex commercial disputes, we pursue the earliest possible resolution — without ever compromising on quality or ethics.",
  values: ['Commitment', 'Passion', 'Confidentiality', 'Integrity', 'Speedy Remedy'],
};

// Full practice-area detail set — one entry per area across all three
// Area of Expertise tabs (industry-wise, litigation, non-litigation).
const practiceAreaDetails = {
  'banking-finance': { category: 'industryWise', categoryName: 'Industry-wise', title: "Banking & Finance", intro: "Advising banks, NBFCs, and financial institutions on lending, security enforcement, and regulatory compliance across the credit lifecycle.", services: [{"title":"Loan Documentation & Security","desc":"Structuring and vetting facility agreements, mortgages, and hypothecation deeds."},{"title":"SARFAESI & DRT Proceedings","desc":"Enforcement of security interests and recovery before Debt Recovery Tribunals."},{"title":"RBI & Regulatory Compliance","desc":"Advisory on RBI circulars, NBFC licensing, and KYC/AML norms."}], benefits: ["Banks and NBFCs seeking recovery or enforcement support","Borrowers negotiating restructuring or settlement","Fintechs navigating RBI compliance"], faqs: [{"q":"Can a bank proceed under SARFAESI without court intervention?","a":"Yes — SARFAESI allows secured creditors to take possession and sell secured assets without prior court approval, subject to statutory notice periods."},{"q":"How long does a DRT recovery case typically take?","a":"Timelines vary, but DRTs are mandated to dispose of applications within six months, though contested matters often extend further."}], trends: [{"title":"Rise of digital lending","desc":"Increasing regulatory scrutiny on digital lending apps and NBFC-fintech partnerships."},{"title":"Pre-packaged insolvency","desc":"Growing use of pre-pack resolution for stressed MSME borrowers."}] },
  'capital-market': { category: 'industryWise', categoryName: 'Industry-wise', title: "Capital Market", intro: "Counsel on securities regulations, listing compliance, and capital-raising transactions for issuers and intermediaries.", services: [{"title":"IPO & Listing Compliance","desc":"Due diligence and regulatory filings for public issues under SEBI ICDR norms."},{"title":"SEBI Enforcement Matters","desc":"Representation in adjudication and appeals before SAT."},{"title":"Disclosure & Governance Advisory","desc":"Ongoing compliance with LODR and insider trading regulations."}], benefits: ["Companies planning a public issue or listing","Intermediaries facing SEBI show-cause proceedings","Investors disputing market conduct"], faqs: [{"q":"What triggers a SEBI adjudication proceeding?","a":"Typically a suspected violation of securities law flagged during surveillance, inspection, or a complaint, followed by a show-cause notice."},{"q":"Can SAT orders be appealed further?","a":"Yes, orders of the Securities Appellate Tribunal can be appealed to the Supreme Court on a question of law."}], trends: [{"title":"Increased algo-trading scrutiny","desc":"SEBI tightening surveillance on algorithmic and high-frequency trading."},{"title":"ESG disclosure norms","desc":"Expanding mandatory ESG reporting for listed entities."}] },
  'software-technology': { category: 'industryWise', categoryName: 'Industry-wise', title: "Software & Technology", intro: "Legal support for technology companies on contracts, data protection, and IP matters unique to software businesses.", services: [{"title":"SaaS & Licensing Agreements","desc":"Drafting master service agreements, EULAs, and SLAs."},{"title":"Data Protection Compliance","desc":"Advisory under the DPDP Act and contractual data-processing clauses."},{"title":"Technology IP Protection","desc":"Copyright and trade secret protection for source code and platforms."}], benefits: ["SaaS and product companies scaling client contracts","Startups navigating data protection obligations","Technology firms protecting proprietary code"], faqs: [{"q":"Is source code protected as a trade secret or copyright?","a":"Both — source code is protected as literary work under copyright law and can independently be safeguarded as a trade secret through confidentiality measures."},{"q":"What does the DPDP Act require of a SaaS company?","a":"It requires clear consent mechanisms, purpose limitation, and reasonable security safeguards for any personal data processed."}], trends: [{"title":"DPDP Act rollout","desc":"Companies are updating privacy policies and vendor contracts ahead of enforcement."},{"title":"AI-related contracting","desc":"New clauses addressing AI-generated output ownership are becoming standard."}] },
  'real-estate-sector': { category: 'industryWise', categoryName: 'Industry-wise', title: "Real Estate Sector", intro: "Representing developers, homebuyers, and investors in property transactions and RERA compliance.", services: [{"title":"RERA Registration & Compliance","desc":"Project registration, disclosures, and ongoing regulatory filings."},{"title":"Title Due Diligence","desc":"Verification of chain of title and encumbrance for acquisitions."},{"title":"Homebuyer Dispute Resolution","desc":"Representation before RERA authorities for possession and refund claims."}], benefits: ["Developers seeking project registration","Homebuyers facing delayed possession","Investors conducting acquisition due diligence"], faqs: [{"q":"What remedies does a homebuyer have for delayed possession?","a":"Homebuyers may seek delayed-possession interest, refund with interest, or compensation before the state RERA authority."},{"q":"Is RERA registration mandatory for all projects?","a":"Yes, for projects above the notified plot size/unit threshold, registration is mandatory before advertising or sale."}], trends: [{"title":"Digitisation of land records","desc":"States expanding online land record integration with RERA portals."},{"title":"Stricter escrow enforcement","desc":"Regulators tightening scrutiny of project escrow account utilisation."}] },
  'pharmaceuticals-healthcare': { category: 'industryWise', categoryName: 'Industry-wise', title: "Pharmaceuticals & Healthcare", intro: "Regulatory and commercial advisory for pharmaceutical, medical device, and healthcare businesses.", services: [{"title":"Drug Licensing & Regulatory Approvals","desc":"Support with CDSCO and state licensing authority filings."},{"title":"Clinical Trial Compliance","desc":"Advisory on trial agreements and regulatory disclosures."},{"title":"Healthcare Commercial Contracts","desc":"Distribution, supply, and manufacturing agreements."}], benefits: ["Pharma companies seeking manufacturing/marketing licenses","Healthcare providers structuring commercial arrangements","Device makers navigating regulatory classification"], faqs: [{"q":"What approvals are needed to launch a new drug in India?","a":"Manufacturers typically require CDSCO approval for new drugs and state licensing authority approval for manufacturing."},{"q":"Are clinical trial agreements regulated?","a":"Yes, they must comply with the New Drugs and Clinical Trials Rules and applicable ethics committee approvals."}], trends: [{"title":"Medical device rules tightening","desc":"Expanded classification and registration requirements for devices."},{"title":"Telemedicine growth","desc":"Increasing contractual and regulatory work around telehealth platforms."}] },
  'infrastructure-energy': { category: 'industryWise', categoryName: 'Industry-wise', title: "Infrastructure & Energy", intro: "Advisory on infrastructure contracts, concessions, and regulatory approvals for energy and infra projects.", services: [{"title":"Concession & PPP Agreements","desc":"Structuring and negotiating public-private partnership contracts."},{"title":"Regulatory Approvals","desc":"Environmental, land acquisition, and sector-specific clearances."},{"title":"Contract Dispute Resolution","desc":"Arbitration support for EPC and concession disputes."}], benefits: ["Developers bidding on infrastructure concessions","Energy companies seeking regulatory clearances","Contractors in EPC payment or delay disputes"], faqs: [{"q":"How are infrastructure disputes typically resolved?","a":"Most concession and EPC contracts provide for arbitration, often institutional, as the primary dispute resolution mechanism."},{"q":"What clearances are typically required before construction begins?","a":"Environmental clearance, land acquisition compliance, and relevant sector regulator approvals are usually prerequisites."}], trends: [{"title":"Renewable energy push","desc":"Rising contractual work tied to solar and green hydrogen projects."},{"title":"Faster arbitration timelines","desc":"Courts increasingly enforcing strict arbitration timelines under the amended Act."}] },
  'manufacturing-industry': { category: 'industryWise', categoryName: 'Industry-wise', title: "Manufacturing & Industry", intro: "Legal support for manufacturers on regulatory compliance, supply contracts, and labour matters.", services: [{"title":"Factory & Labour Compliance","desc":"Advisory on Factories Act, labour codes, and statutory registrations."},{"title":"Supply & Vendor Contracts","desc":"Drafting and negotiating manufacturing and supply agreements."},{"title":"Product Liability Defense","desc":"Representation in product liability and consumer claims."}], benefits: ["Manufacturers seeking labour law compliance","Businesses negotiating vendor and supply contracts","Companies facing product liability claims"], faqs: [{"q":"What labour compliances apply to a manufacturing unit?","a":"Registration under the Factories Act, adherence to the labour codes on wages and safety, and statutory welfare fund contributions typically apply."},{"q":"Can a manufacturer be held liable for a defective product sold by a distributor?","a":"Yes, product liability can extend to manufacturers where the defect originated in design or manufacture, regardless of the sales channel."}], trends: [{"title":"Labour codes implementation","desc":"Transition to the new labour codes is reshaping compliance obligations."},{"title":"Supply chain contract reviews","desc":"Increasing force-majeure and penalty clause renegotiation post-disruptions."}] },
  'media-entertainment': { category: 'industryWise', categoryName: 'Industry-wise', title: "Media & Entertainment", intro: "Advisory on content licensing, intellectual property, and contracts for media and entertainment businesses.", services: [{"title":"Content Licensing Agreements","desc":"Drafting distribution, broadcast, and OTT licensing contracts."},{"title":"Copyright & IP Protection","desc":"Registration and enforcement of copyright in creative works."},{"title":"Talent & Production Contracts","desc":"Artist, production, and endorsement agreement drafting."}], benefits: ["Production houses and OTT platforms","Artists and creators protecting content rights","Brands structuring endorsement deals"], faqs: [{"q":"Who owns copyright in a commissioned work?","a":"Ownership depends on the contract — absent a written assignment, the creator generally retains copyright even in commissioned works, subject to statutory exceptions."},{"q":"How enforceable are OTT content licensing terms?","a":"They are enforceable as standard commercial contracts, with disputes typically resolved through arbitration clauses common in such agreements."}], trends: [{"title":"OTT content disputes rising","desc":"Increasing licensing and royalty disputes tied to streaming platforms."},{"title":"AI-generated content","desc":"Emerging questions on copyright ownership of AI-assisted creative work."}] },
  'property-disputes': { category: 'litigation', categoryName: 'Litigation', title: "Real Estate / Property Disputes", intro: "Representing clients in ownership, possession, and title disputes over immovable property.", services: [{"title":"Title & Partition Suits","desc":"Litigating ownership and partition claims before civil courts."},{"title":"Possession & Eviction Matters","desc":"Representation in suits for possession and unlawful eviction."},{"title":"Injunction & Interim Relief","desc":"Securing urgent injunctions to protect property interests."}], benefits: ["Property owners facing title disputes","Families contesting partition or inheritance shares","Landlords and tenants in possession disputes"], faqs: [{"q":"How long does a partition suit usually take?","a":"Partition suits can take several years depending on complexity, contested shares, and appeals, though interim possession orders may be obtained earlier."},{"q":"Can I get an urgent injunction to stop construction on disputed land?","a":"Yes, courts can grant an ad-interim injunction where there is a prima facie case, balance of convenience, and risk of irreparable harm."}], trends: [{"title":"Faster disposal via mediation","desc":"Courts increasingly referring property disputes to mediation before trial."},{"title":"Digital land records","desc":"Improved record digitisation is easing title verification in litigation."}] },
  'corporate-disputes': { category: 'litigation', categoryName: 'Litigation', title: "Corporate & Commercial Disputes", intro: "Litigating shareholder, contractual, and business disputes before civil courts and tribunals.", services: [{"title":"Shareholder & Board Disputes","desc":"Representation before NCLT in oppression and mismanagement matters."},{"title":"Contract Enforcement","desc":"Suits for breach of contract, damages, and specific performance."},{"title":"Commercial Suit Litigation","desc":"Representation under the Commercial Courts Act for high-value disputes."}], benefits: ["Shareholders in oppression/mismanagement disputes","Businesses enforcing commercial contracts","Companies defending high-value commercial suits"], faqs: [{"q":"What qualifies as a commercial dispute under the Commercial Courts Act?","a":"Disputes arising from ordinary transactions of merchants, bankers, and traders above the specified pecuniary threshold typically qualify."},{"q":"Can shareholder disputes be resolved outside NCLT?","a":"Yes, many are resolved through negotiated settlement or arbitration where the articles provide for it, though statutory reliefs require NCLT."}], trends: [{"title":"Faster commercial court timelines","desc":"Stricter case management rules are compressing commercial litigation timelines."},{"title":"Rise in NCLT filings","desc":"Increasing oppression and mismanagement petitions amid founder disputes."}] },
  'criminal-litigation': { category: 'litigation', categoryName: 'Litigation', title: "Criminal Litigation", intro: "Representing individuals and businesses at every stage of criminal proceedings.", services: [{"title":"Bail Applications","desc":"Regular, anticipatory, and interim bail across all court levels."},{"title":"FIR Quashing","desc":"Petitions under Section 482 CrPC / BNSS to quash frivolous FIRs."},{"title":"Trial Defense","desc":"End-to-end representation through investigation, charge, and trial."}], benefits: ["Individuals facing criminal charges or FIRs","Businesses navigating white-collar investigations","Victims seeking representation in criminal proceedings"], faqs: [{"q":"How quickly can a bail application be filed?","a":"Urgent bail applications, including anticipatory bail, can typically be filed within 24–48 hours of engagement."},{"q":"Do you handle matters outside Madhya Pradesh?","a":"Yes — we provide services PAN India and regularly appear before courts outside our home jurisdiction."}], trends: [{"title":"BNSS transition","desc":"Ongoing shift from CrPC to the Bharatiya Nagarik Suraksha Sanhita is reshaping procedural timelines."},{"title":"Digital evidence","desc":"Increasing reliance on electronic evidence is changing how bail and trial strategy are built."}] },
  'matrimonial-disputes': { category: 'litigation', categoryName: 'Litigation', title: "Matrimonial & Family Disputes", intro: "Handling divorce, maintenance, custody, and other family law matters with sensitivity and discretion.", services: [{"title":"Divorce & Judicial Separation","desc":"Contested and mutual-consent divorce proceedings."},{"title":"Maintenance & Alimony","desc":"Claims and defense in maintenance proceedings under personal law and CrPC/BNSS."},{"title":"Child Custody Matters","desc":"Representation in custody and guardianship disputes."}], benefits: ["Spouses seeking divorce or separation","Parties claiming or defending maintenance","Parents contesting child custody"], faqs: [{"q":"How long does a mutual consent divorce take?","a":"A mutual consent divorce can be granted in as little as six to eighteen months, subject to the statutory cooling-off period and court discretion to waive it."},{"q":"Is maintenance available even without divorce?","a":"Yes, maintenance can be claimed by a spouse during subsistence of marriage under various personal law and criminal law provisions."}], trends: [{"title":"Waiver of cooling-off period","desc":"Courts increasingly waiving the statutory waiting period in genuine mutual-consent cases."},{"title":"Mediation-first approach","desc":"Family courts encouraging mediation before contested trial in custody matters."}] },
  'constitutional-writ': { category: 'litigation', categoryName: 'Litigation', title: "Constitutional & Writ Matters", intro: "Filing and defending writ petitions before High Courts and the Supreme Court on constitutional grounds.", services: [{"title":"Writ Petitions","desc":"Filing petitions under Articles 226/32 for enforcement of fundamental rights."},{"title":"Public Interest Litigation","desc":"Representation in PILs on matters of public importance."},{"title":"Service & Regulatory Writs","desc":"Challenging administrative and regulatory action before High Courts."}], benefits: ["Individuals whose fundamental rights are violated","Businesses challenging arbitrary regulatory action","Public-spirited litigants pursuing PILs"], faqs: [{"q":"What is the difference between Article 32 and Article 226?","a":"Article 32 allows direct access to the Supreme Court for enforcement of fundamental rights, while Article 226 empowers High Courts to issue writs for both fundamental and other legal rights."},{"q":"How long does a writ petition take to be heard?","a":"Urgent writs can be listed within days, while regular matters follow the High Court ordinary cause list depending on urgency shown."}], trends: [{"title":"E-filing expansion","desc":"Courts expanding e-filing for faster writ petition admission."},{"title":"Increased regulatory challenges","desc":"Rising writs challenging administrative and regulatory overreach."}] },
  'service-employment': { category: 'litigation', categoryName: 'Litigation', title: "Service & Employment Law", intro: "Advising employers and employees on service disputes, terminations, and labour tribunal matters.", services: [{"title":"Wrongful Termination Claims","desc":"Representation in unfair dismissal and reinstatement matters."},{"title":"Labour Tribunal Litigation","desc":"Proceedings before Labour Courts and Industrial Tribunals."},{"title":"Service Rule Disputes","desc":"Challenging disciplinary action and service condition violations."}], benefits: ["Employees facing wrongful termination","Employers defending disciplinary action","Government employees in service rule disputes"], faqs: [{"q":"Can a terminated employee claim reinstatement?","a":"Yes, Labour Courts can order reinstatement with back wages where termination is found to be illegal or in violation of procedure."},{"q":"What is the limitation period for raising an industrial dispute?","a":"There is no fixed limitation under the Industrial Disputes Act, though undue delay can affect the relief granted."}], trends: [{"title":"New labour codes","desc":"Transition to the labour codes is reshaping termination and disciplinary procedures."},{"title":"Rise of gig-worker disputes","desc":"Emerging litigation on employment status of platform and gig workers."}] },
  'taxation-disputes': { category: 'litigation', categoryName: 'Litigation', title: "Taxation Disputes", intro: "Representing clients in direct and indirect tax litigation before appellate authorities and courts.", services: [{"title":"Income Tax Appeals","desc":"Representation before CIT(A), ITAT, and High Courts."},{"title":"GST Litigation","desc":"Disputes on GST assessment, refund, and demand proceedings."},{"title":"Search & Seizure Defense","desc":"Representation in tax search, survey, and prosecution matters."}], benefits: ["Taxpayers contesting assessment orders","Businesses facing GST demand or refund disputes","Individuals facing tax search or prosecution"], faqs: [{"q":"What is the appeal process for an income tax order?","a":"An assessee can appeal first to the CIT(Appeals), then the ITAT, followed by the High Court and Supreme Court on substantial questions of law."},{"q":"Can GST registration cancellation be challenged?","a":"Yes, cancellation orders can be appealed before the appellate authority and, if needed, challenged through a writ petition."}], trends: [{"title":"Faceless assessment scrutiny","desc":"Increasing litigation around procedural lapses in faceless tax assessments."},{"title":"GST appellate tribunal rollout","desc":"Setting up of GSTAT benches is expected to streamline pending GST appeals."}] },
  'consumer-disputes': { category: 'litigation', categoryName: 'Litigation', title: "Consumer Disputes", intro: "Representing consumers and businesses before Consumer Commissions on deficiency of service and product claims.", services: [{"title":"Deficiency of Service Claims","desc":"Filing and defending complaints before District, State, and National Commissions."},{"title":"Product Liability Claims","desc":"Representation in defective product and unfair trade practice cases."},{"title":"E-commerce Consumer Disputes","desc":"Handling disputes arising from online marketplace transactions."}], benefits: ["Consumers facing deficient service or defective products","Businesses defending consumer complaints","E-commerce platforms navigating liability claims"], faqs: [{"q":"What is the time limit to file a consumer complaint?","a":"A consumer complaint must generally be filed within two years from the date the cause of action arose."},{"q":"Can a consumer claim compensation for mental agony?","a":"Yes, Consumer Commissions can award compensation for mental agony and harassment in addition to the primary relief sought."}], trends: [{"title":"E-commerce rules tightening","desc":"Increased liability exposure for marketplaces under the Consumer Protection (E-Commerce) Rules."},{"title":"Faster digital filing","desc":"Growing use of e-daakhil for online consumer complaint filing."}] },
  'legal-due-diligence': { category: 'nonLitigation', categoryName: 'Non-Litigation', title: "Legal Due Diligence", intro: "Comprehensive legal due diligence support for transactions, acquisitions, and investments.", services: [{"title":"Corporate & Title Due Diligence","desc":"Reviewing corporate records, contracts, and title documents."},{"title":"Regulatory Compliance Review","desc":"Assessing statutory and licensing compliance status."},{"title":"Red-Flag Reporting","desc":"Identifying and reporting material legal risks pre-transaction."}], benefits: ["Investors conducting pre-investment diligence","Acquirers evaluating target company risk","Lenders assessing borrower compliance"], faqs: [{"q":"How long does a legal due diligence typically take?","a":"Timelines depend on scope and data availability, ranging from a couple of weeks for focused reviews to a few months for complex acquisitions."},{"q":"What documents are typically required for due diligence?","a":"Corporate records, material contracts, litigation history, licenses, and title documents are typically requested."}], trends: [{"title":"Data-room driven diligence","desc":"Increasing use of virtual data rooms is speeding up diligence turnaround."},{"title":"ESG diligence","desc":"Growing inclusion of ESG and compliance risk review in standard diligence scope."}] },
  'compliance-licensing': { category: 'nonLitigation', categoryName: 'Non-Litigation', title: "Compliance & Licensing", intro: "Advisory on regulatory licensing and ongoing statutory compliance across sectors.", services: [{"title":"License Applications","desc":"Securing sector-specific licenses and registrations."},{"title":"Annual Compliance Management","desc":"Ongoing statutory filings and compliance calendars."},{"title":"Regulatory Advisory","desc":"Guidance on evolving regulatory requirements."}], benefits: ["Businesses applying for new licenses","Companies managing ongoing statutory compliance","Startups navigating multi-regulator approvals"], faqs: [{"q":"What happens if a company misses a statutory compliance deadline?","a":"Consequences range from monetary penalties to license suspension, depending on the regulator and nature of default."},{"q":"Can compliance management be outsourced?","a":"Yes, many businesses engage counsel to manage compliance calendars and filings on a retainer basis."}], trends: [{"title":"Compliance automation","desc":"Growing adoption of compliance-tracking tools alongside legal advisory."},{"title":"Stricter regulator enforcement","desc":"Regulators increasingly imposing penalties for delayed filings."}] },
  'startup-advisory': { category: 'nonLitigation', categoryName: 'Non-Litigation', title: "Startup Advisory", intro: "End-to-end legal support for startups from incorporation through funding rounds.", services: [{"title":"Incorporation & Structuring","desc":"Entity setup, founder agreements, and cap table structuring."},{"title":"Term Sheet & Funding Support","desc":"Negotiating and documenting investment rounds."},{"title":"ESOP & Governance Advisory","desc":"Structuring employee stock option plans and board governance."}], benefits: ["Founders incorporating a new venture","Startups raising seed or Series funding","Companies structuring ESOP pools"], faqs: [{"q":"What is the ideal entity structure for a startup seeking VC funding?","a":"A private limited company is typically preferred by investors for its structured governance and ease of equity issuance."},{"q":"Do founder agreements need to be registered?","a":"No, but they should be carefully drafted and signed to be legally enforceable, especially on vesting and exit terms."}], trends: [{"title":"Standardised SAFE-style instruments","desc":"Increasing use of convertible instruments for early-stage fundraising."},{"title":"Tightened diligence by investors","desc":"Investors conducting deeper legal diligence even at seed stage."}] },
  'drafting-agreements': { category: 'nonLitigation', categoryName: 'Non-Litigation', title: "Drafting of Agreements", intro: "Drafting and vetting commercial agreements tailored to client business needs.", services: [{"title":"Commercial Contracts","desc":"Vendor, service, and distribution agreement drafting."},{"title":"Employment Agreements","desc":"Offer letters, employment contracts, and policy documents."},{"title":"NDA & Confidentiality Agreements","desc":"Protecting sensitive business information in dealings."}], benefits: ["Businesses formalising vendor or client relationships","Employers structuring employment terms","Parties entering confidential business discussions"], faqs: [{"q":"Why is a well-drafted contract important even between trusted parties?","a":"A clear contract reduces ambiguity and provides an enforceable reference point if the relationship or circumstances change."},{"q":"Can a standard template agreement be used for all clients?","a":"Templates are a starting point, but agreements should be tailored to the specific transaction and risk allocation intended."}], trends: [{"title":"Rise of e-signature adoption","desc":"Increasing use of digital signatures for contract execution."},{"title":"AI-assisted contract review","desc":"Growing use of AI tools for first-pass contract review, with lawyer sign-off."}] },
  'arbitration-mediation': { category: 'nonLitigation', categoryName: 'Non-Litigation', title: "Arbitration & Mediation", intro: "Representing parties in domestic and institutional arbitration and mediation proceedings.", services: [{"title":"Arbitration Representation","desc":"Acting as counsel in ad-hoc and institutional arbitrations."},{"title":"Mediation & Conciliation","desc":"Facilitating negotiated settlement through mediation."},{"title":"Award Enforcement & Challenge","desc":"Enforcement and challenge of arbitral awards before courts."}], benefits: ["Businesses with arbitration clauses in commercial contracts","Parties seeking faster, confidential dispute resolution","Award-holders seeking enforcement"], faqs: [{"q":"Is an arbitral award final?","a":"An award is binding and can only be challenged on limited grounds under Section 34 of the Arbitration Act, not on merits."},{"q":"How long does arbitration typically take compared to litigation?","a":"Arbitration is generally faster, with the Act mandating an award within twelve months of pleadings completion, extendable by consent."}], trends: [{"title":"Institutional arbitration growth","desc":"Increasing preference for institutional over ad-hoc arbitration in commercial contracts."},{"title":"Emergency arbitrator provisions","desc":"Wider adoption of emergency arbitrator clauses for urgent interim relief."}] },
  'intellectual-property': { category: 'nonLitigation', categoryName: 'Non-Litigation', title: "Intellectual Property", intro: "Protecting and enforcing trademarks, copyrights, and other intellectual property rights.", services: [{"title":"Trademark Registration","desc":"Filing and prosecuting trademark applications."},{"title":"Copyright Protection","desc":"Registration and licensing of copyrighted works."},{"title":"IP Enforcement","desc":"Cease-and-desist action and infringement litigation."}], benefits: ["Businesses protecting brand names and logos","Creators registering original works","Rights holders enforcing against infringement"], faqs: [{"q":"How long does trademark registration take in India?","a":"Registration typically takes twelve to eighteen months if unopposed, though a right to use may arise upon filing."},{"q":"What should I do if I discover someone infringing my trademark?","a":"A cease-and-desist notice is usually the first step, followed by an infringement suit if the infringement continues."}], trends: [{"title":"Rising trademark squatting disputes","desc":"Increase in bad-faith registrations prompting opposition and cancellation filings."},{"title":"AI and copyright questions","desc":"Ongoing debate on authorship and protection of AI-assisted creative works."}] },
  'real-estate-documentation': { category: 'nonLitigation', categoryName: 'Non-Litigation', title: "Real Estate Documentation", intro: "Drafting and vetting sale deeds, lease agreements, and other property documentation.", services: [{"title":"Sale Deed & Conveyance Drafting","desc":"Preparing and vetting sale and conveyance deeds."},{"title":"Lease & Rental Agreements","desc":"Drafting commercial and residential lease documentation."},{"title":"Title Verification","desc":"Verifying chain of title before execution of documents."}], benefits: ["Buyers and sellers finalising property transactions","Landlords and tenants formalising lease terms","Investors verifying title before purchase"], faqs: [{"q":"Is registration mandatory for all property documents?","a":"Sale deeds and leases beyond a year generally require registration to be legally valid and admissible as evidence."},{"q":"What does title verification typically involve?","a":"It involves examining the chain of ownership, encumbrances, and relevant revenue records over a defined historical period."}], trends: [{"title":"Digitised registration records","desc":"Expanding online access to registered documents is easing verification."},{"title":"Stamp duty digitisation","desc":"States moving towards e-stamping for faster document execution."}] },
  'corporate-structuring': { category: 'nonLitigation', categoryName: 'Non-Litigation', title: "Corporate Structuring", intro: "Advisory on entity structuring, mergers, and corporate reorganisation.", services: [{"title":"Entity Structuring","desc":"Advising on holding structures and group reorganisation."},{"title":"Mergers & Amalgamations","desc":"Structuring and documenting mergers under the Companies Act."},{"title":"Corporate Governance Advisory","desc":"Board process and statutory compliance advisory."}], benefits: ["Groups planning corporate reorganisation","Companies pursuing mergers or amalgamations","Boards seeking governance advisory"], faqs: [{"q":"What approvals are needed for a merger under the Companies Act?","a":"Mergers typically require NCLT approval along with shareholder, creditor, and regulatory consents depending on the sector."},{"q":"Is a holding company structure beneficial for tax purposes?","a":"It can offer benefits depending on the group specific tax and operational objectives, and should be evaluated case by case."}], trends: [{"title":"Fast-track mergers uptake","desc":"Increasing use of the fast-track merger route for small companies and group restructuring."},{"title":"Cross-border structuring scrutiny","desc":"Greater regulatory scrutiny on cross-border corporate structures."}] },
};

// PLACEHOLDER testimonials — replace with real client words when provided.
const testimonials = [
  { quote: 'They explained every step in plain language and never once made us feel out of our depth. Our matter was handled with complete transparency. Their efforts and dedication for winning my case says it all.', name: 'Akshat Shivhare', context: 'Akshat Shivhare Versus Union of India, 2026' },
  { quote: 'Prompt, precise, and genuinely invested in the outcome. The team kept us informed at every stage of the proceedings.', name: 'Punjab & Sind Bank', context: 'Before the Supreme Court & High Court of Delhi & Madhya Pradesh' },
  { quote: 'Right from the first consultation, they have been so much well read and researched about our case that we never felt dilemma at any stage.\n#bestlawyerforeducation', name: 'Ritik Gupta', context: 'Ritik Gupta & 25 others v. State of MP & Ors., 2025' },
  { quote: 'It took them just a night to move the case to Supreme Court and I got all that was required. #Bestlawyers', name: 'ARUN KALMODIYA', context: 'X Versus Union of India, SLP Diary No. xxxx' },
];

// Additional services per area — expands each page's scope beyond the core 3.
const extraServices = {
  'banking-finance': [
    { title: 'Debt Restructuring & Settlement', desc: 'Negotiating one-time settlements and restructuring plans with lenders.' },
    { title: 'Insolvency & IBC Proceedings', desc: 'Representation of creditors and debtors before NCLT under the IBC.' },
    { title: 'Cheque Dishonour Matters', desc: 'Proceedings under Section 138 NI Act for dishonoured instruments.' },
  ],
  'capital-market': [
    { title: 'Buyback & Delisting Advisory', desc: 'Regulatory compliance for buybacks, delisting, and open offers.' },
    { title: 'Insider Trading Defense', desc: 'Representation in PIT Regulations investigations and proceedings.' },
    { title: 'AIF & Intermediary Registration', desc: 'SEBI registration and compliance for funds and market intermediaries.' },
  ],
  'software-technology': [
    { title: 'Technology Dispute Resolution', desc: 'Litigation and arbitration of software development and licensing disputes.' },
    { title: 'Cyber Law & IT Act Matters', desc: 'Advisory and proceedings under the Information Technology Act.' },
    { title: 'Open Source Compliance', desc: 'License audits and compliance frameworks for open-source usage.' },
  ],
  'real-estate-sector': [
    { title: 'Joint Development Agreements', desc: 'Structuring and negotiating JDAs between landowners and developers.' },
    { title: 'Land Acquisition Matters', desc: 'Compensation claims and challenges under the 2013 Act.' },
    { title: 'Township & Colony Approvals', desc: 'Regulatory approvals for township development and colonisation.' },
  ],
  'pharmaceuticals-healthcare': [
    { title: 'Medical Negligence Defense', desc: 'Defending practitioners and hospitals in negligence claims.' },
    { title: 'Pharma Advertising Compliance', desc: 'Advisory under the Drugs & Magic Remedies Act and ASCI codes.' },
    { title: 'Hospital & Clinic Licensing', desc: 'Establishment registrations under Clinical Establishments Act.' },
  ],
  'infrastructure-energy': [
    { title: 'Tariff & Regulatory Proceedings', desc: 'Representation before CERC/SERC in tariff and compliance matters.' },
    { title: 'Renewable Energy Contracts', desc: 'PPAs and EPC contracts for solar, wind, and hybrid projects.' },
    { title: 'Mining & Mineral Concessions', desc: 'Advisory on mineral concessions, leases, and MMDR compliance.' },
  ],
  'manufacturing-industry': [
    { title: 'Industrial Licensing & Incentives', desc: 'State industrial policy incentives and MSME registrations.' },
    { title: 'Environmental Compliance', desc: 'Consent-to-operate, waste management, and pollution board matters.' },
    { title: 'Trade Remedy Proceedings', desc: 'Anti-dumping and safeguard duty proceedings before DGTR.' },
  ],
  'media-entertainment': [
    { title: 'Defamation & Reputation Claims', desc: 'Civil and criminal defamation actions and pre-publication advice.' },
    { title: 'Censorship & Certification', desc: 'CBFC certification issues and content regulation challenges.' },
    { title: 'Music & Royalty Disputes', desc: 'Royalty claims and licensing disputes with collecting societies.' },
  ],
  'property-disputes': [
    { title: 'Specific Performance Suits', desc: 'Enforcing agreements to sell through specific performance actions.' },
    { title: 'Adverse Possession Claims', desc: 'Prosecution and defense of possession-based ownership claims.' },
    { title: 'Landlord-Tenant Disputes', desc: 'Rent control, eviction, and tenancy disputes across forums.' },
  ],
  'corporate-disputes': [
    { title: 'Insolvency & IBC Litigation', desc: 'CIRP applications and resolution disputes before NCLT/NCLAT.' },
    { title: 'Director Liability Defense', desc: 'Defending directors in statutory and fiduciary liability claims.' },
    { title: 'Partnership & LLP Disputes', desc: 'Dissolution, accounts, and inter-partner dispute resolution.' },
  ],
  'criminal-litigation': [
    { title: 'Appeals & Revisions', desc: 'Appellate representation before Sessions Courts, High Courts, and the Supreme Court.' },
    { title: 'White-Collar Crime Defense', desc: 'Defense in economic offences, EOW matters, and PMLA proceedings.' },
    { title: 'Cyber Crime Matters', desc: 'Complaints and defense in online fraud and IT Act offences.' },
  ],
  'matrimonial-disputes': [
    { title: 'Domestic Violence Proceedings', desc: 'Claims and defense under the Protection of Women from DV Act.' },
    { title: 'Mutual Consent Settlements', desc: 'Negotiated separation terms and one-time settlement structuring.' },
    { title: 'NRI Matrimonial Matters', desc: 'Cross-border divorce, custody, and enforcement issues.' },
  ],
  'constitutional-writ': [
    { title: 'Habeas Corpus Petitions', desc: 'Urgent petitions against illegal detention.' },
    { title: 'Quashing of State Action', desc: 'Challenging notifications, circulars, and executive orders.' },
    { title: 'Contempt Proceedings', desc: 'Enforcement of court orders through contempt petitions.' },
  ],
  'service-employment': [
    { title: 'Departmental Enquiry Defense', desc: 'Representation in disciplinary enquiries and appeals.' },
    { title: 'Pension & Retiral Benefits', desc: 'Claims for pension, gratuity, and terminal benefits.' },
    { title: 'Sexual Harassment (POSH) Matters', desc: 'ICC proceedings, compliance, and appellate challenges.' },
  ],
  'taxation-disputes': [
    { title: 'Tax Settlement & Amnesty Schemes', desc: 'Applications under dispute resolution and amnesty schemes.' },
    { title: 'TDS & Withholding Disputes', desc: 'Defaults, refunds, and prosecution under TDS provisions.' },
    { title: 'Customs & DGFT Matters', desc: 'Import-export duty disputes and foreign trade policy issues.' },
  ],
  'consumer-disputes': [
    { title: 'Insurance Claim Disputes', desc: 'Repudiated life, health, and general insurance claims.' },
    { title: 'Real Estate Consumer Claims', desc: 'Builder-buyer disputes before Consumer Commissions.' },
    { title: 'Medical Service Deficiency', desc: 'Claims for deficient medical services and overcharging.' },
  ],
  'legal-due-diligence': [
    { title: 'Litigation Risk Assessment', desc: 'Mapping pending and potential litigation exposure of targets.' },
    { title: 'Employment & HR Diligence', desc: 'Review of employment contracts, ESOPs, and labour compliance.' },
    { title: 'IP Portfolio Review', desc: 'Ownership verification of trademarks, copyrights, and licenses.' },
  ],
  'compliance-licensing': [
    { title: 'FSSAI & Trade Licensing', desc: 'Food business, shops & establishment, and trade licenses.' },
    { title: 'FEMA & RBI Compliance', desc: 'Foreign investment reporting and exchange control advisory.' },
    { title: 'POSH & Labour Compliance', desc: 'Policy drafting, ICC setup, and statutory registers.' },
  ],
  'startup-advisory': [
    { title: 'Shareholder & Founder Agreements', desc: 'SHA/SSA drafting with vesting, exit, and control terms.' },
    { title: 'Startup India Registrations', desc: 'DPIIT recognition and tax exemption applications.' },
    { title: 'Convertible Instruments', desc: 'Structuring SAFEs, CCDs, and CCPS for early rounds.' },
  ],
  'drafting-agreements': [
    { title: 'Franchise & Distribution Agreements', desc: 'Franchise models, territory rights, and exit terms.' },
    { title: 'Joint Venture Agreements', desc: 'JV structuring with governance and deadlock provisions.' },
    { title: 'Settlement & Release Deeds', desc: 'Documenting negotiated settlements with enforceable releases.' },
  ],
  'arbitration-mediation': [
    { title: 'Interim Relief Applications', desc: 'Section 9 petitions for urgent protective orders.' },
    { title: 'Arbitrator Appointment Petitions', desc: 'Section 11 applications before High Courts.' },
    { title: 'Foreign Award Enforcement', desc: 'Enforcement of foreign awards under the New York Convention.' },
  ],
  'intellectual-property': [
    { title: 'Trademark Opposition & Cancellation', desc: 'Contesting conflicting marks before the Registry.' },
    { title: 'IP Licensing & Assignment', desc: 'Structuring licenses, assignments, and royalty terms.' },
    { title: 'Design & GI Registration', desc: 'Industrial design and geographical indication protection.' },
  ],
  'real-estate-documentation': [
    { title: 'Gift & Relinquishment Deeds', desc: 'Intra-family transfers with stamp duty optimisation.' },
    { title: 'Power of Attorney Drafting', desc: 'Special and general POAs for property transactions.' },
    { title: 'Mortgage & Loan Documentation', desc: 'Mortgage deeds and security documentation for lenders.' },
  ],
  'corporate-structuring': [
    { title: 'LLP & Company Conversions', desc: 'Conversions between entity forms with tax efficiency.' },
    { title: 'Family Business Succession', desc: 'Succession planning, family settlements, and trusts.' },
    { title: 'Winding Up & Strike-Off', desc: 'Voluntary liquidation and company closure processes.' },
  ],
};
Object.entries(extraServices).forEach(([slug, arr]) => {
  if (practiceAreaDetails[slug]) practiceAreaDetails[slug].services.push(...arr);
});

// Associate partners (shown in the dark teaser section).
const associates = [
  { id: 1, name: 'Chetal Soni', image: 'assets/chetal-soni.jpg' },
  { id: 2, name: 'Aditya Trivedi', image: 'assets/aditya-trivedi.jpg' },
  { id: 3, name: 'Naman Chaurasia', image: 'assets/naman-chaurasia-v2.jpg' },
];

window.LHMockData = { contactInfo, teamMembers, associates, expertiseAreas, navLinks, aboutContent, practiceAreaDetails, testimonials, contentReels };
