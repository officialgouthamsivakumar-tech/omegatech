import Image from "next/image";
import Navbar from "./components/Navbar";

const certifications = [
  {
    name: "OIML R76",
    subtitle: "Legal Metrology",
    imgSrc: "https://upload.wikimedia.org/wikipedia/en/7/7d/OIML_logo.png",
    bg: "#f0f4ff",
  },
  {
    name: "CE Marking",
    subtitle: "European Conformity",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Conformit%C3%A9_Europ%C3%A9enne_%28logo%29.svg/250px-Conformit%C3%A9_Europ%C3%A9enne_%28logo%29.svg.png",
    bg: "#f0f4ff",
  },
  {
    name: "IP68",
    subtitle: "Ingress Protection",
    imgSrc: null,
    bg: "#f0f8ff",
  },
  {
    name: "KEBS",
    subtitle: "Kenya Bureau of Standards",
    imgSrc: "https://www.kebs.org/wp-content/uploads/2023/05/kebs_logo.png",
    bg: "#f0fff4",
  },
  {
    name: "ISO 9001",
    subtitle: "Quality Management",
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ISO_9001-2015.svg/250px-ISO_9001-2015.svg.png",
    bg: "#fff8f0",
  },
];

const domains = [
  {
    num: "01",
    badge: "Primary Focus",
    title: "Industrial Weighing & Infrastructure Automation",
    description:
      "Omega acts as the definitive East African gateway for Baykon weighing solutions — designing, installing, and commissioning high-capacity systems built for sub-Saharan Africa's harshest operational environments.",
    items: [
      "Baykon Authorized Distribution — European-standard high-precision weighing terminals, indicators, and load-cell systems",
      "Turnkey Weighbridge Solutions — Pit and surface-mounted multi-axle weighbridges for mining haulage and transport corridors",
      "Industrial Data Systems — Integrated legal-for-trade data management and compliance infrastructure",
    ],
  },
  {
    num: "02",
    badge: "Lifecycle Partner",
    title: "Comprehensive Lifecycle Engineering & AMCs",
    description:
      "We do not just supply — we guarantee uptime. An elite team of field calibration and mechanical engineers deployed across East Africa, providing certified, round-the-clock maintenance coverage.",
    items: [
      "Annual Maintenance Contracts — Scheduled calibration, legal-for-trade verification, structural checks, and preventive maintenance",
      "Emergency Engineering Support — Round-the-clock technical intervention, sensor retrofitting, and structural repairs",
      "Regulatory Compliance — Legal-for-trade certification and weights & measures documentation across all jurisdictions",
    ],
  },
  {
    num: "03",
    badge: "Asset Trading",
    title: "Heavy Construction Equipment Trading",
    description:
      "Leveraging deep regional networks across mining and civil construction, Omega's asset-trading division connects equipment owners with premium machinery across the East African corridor.",
    items: [
      "New Equipment Procurement — Sourcing specialized earthmoving and material handling solutions for regional specifications",
      "Certified Pre-Owned Fleet — Evaluating, reconditioning, and supplying excavators, wheel loaders, and dump trucks",
      "Regional Logistics — Port clearance, cross-border transport compliance, and regulatory certifications",
    ],
  },
];

const weighbridgeProducts = [
  {
    name: "Multi-Axle Truck Weighbridge",
    capacity: "Up to 150 t",
    length: "18 – 24 m",
    ip: "IP68",
    description: "Heavy-duty static platform for articulated lorries and multi-axle trucks. Standard for quarry, cement, and aggregate sites.",
    image: "https://www.endeavourkenya.co.ke/wp-content/uploads/2025/01/maxresdefault-1.jpg",
  },
  {
    name: "Modular Weighbridge",
    capacity: "Up to 150 t",
    length: "Custom",
    ip: "IP67",
    description: "Factory-built steel sections assembled on-site. Faster installation and scalable platform for evolving capacity needs.",
    image: "https://www.endeavourkenya.co.ke/wp-content/uploads/2025/01/modular.jpg",
  },
  {
    name: "Pit-Mounted Weighbridge",
    capacity: "Up to 150 t",
    length: "12 – 24 m",
    ip: "IP68",
    description: "Flush-to-ground platform in a reinforced concrete pit. Preferred for permanent mining and cement plant installations.",
    image: "https://cdn.baykon.com/prod/picture/1101202413434768553.webp",
  },
  {
    name: "Surface-Mounted Weighbridge",
    capacity: "Up to 100 t",
    length: "12 – 18 m",
    ip: "IP65",
    description: "Above-ground installation with approach ramps. Faster to deploy, ideal for transport corridors and industrial yards.",
    image: "https://cdn.baykon.com/prod/picture/2901202410020756159.webp",
  },
  {
    name: "Unmanned / Automated Weighbridge",
    capacity: "Up to 150 t",
    length: "18 – 24 m",
    ip: "IP67",
    description: "ANPR camera-integrated weighstation with automated ticketing and remote data management. 24/7, no operator required.",
    image: "https://www.endeavourkenya.co.ke/wp-content/uploads/2025/01/unmanned-weighbridge-solution.jpg",
  },
  {
    name: "Portable Axle Weighing Pads",
    capacity: "Up to 30 t / axle",
    length: "Portable",
    ip: "IP67",
    description: "Lightweight pads for rapid on-site axle load verification. Used by enforcement agencies and quarry project sites.",
    image: "https://www.endeavourkenya.co.ke/wp-content/uploads/2025/01/weighind-pad.png",
  },
];

const baykonProducts = [
  {
    code: "WT",
    title: "Weight Terminals & Indicators",
    description: "High-precision digital weight displays and processing units for weighbridge control rooms and industrial environments.",
  },
  {
    code: "LC",
    title: "Load Cell Systems",
    description: "Industrial-grade load cells engineered for multi-axle truck weighing under extreme temperature, vibration, and dust conditions.",
  },
  {
    code: "WC",
    title: "Weighbridge Controllers",
    description: "Integrated control systems for vehicle identification, data logging, ticket printing, and remote monitoring.",
  },
  {
    code: "LT",
    title: "Legal-for-Trade Certification",
    description: "OIML-certified systems meeting national weights & measures compliance requirements across East African jurisdictions.",
  },
];

const amcModules = [
  {
    title: "Weighbridge AMC",
    label: "Certified",
    items: [
      "Periodic statutory calibration and legal-for-trade certification",
      "Load cell inspection, testing, and replacement",
      "Indicator and software updates",
      "Regulatory compliance documentation and renewal",
      "24/7 emergency breakdown response",
      "Annual performance and compliance reporting",
    ],
  },
  {
    title: "Heavy Equipment & Plant AMC",
    label: "Full Coverage",
    items: [
      "Scheduled preventive maintenance per manufacturer intervals",
      "Wear part monitoring and replacement",
      "Hydraulic system pressure testing and fluid analysis",
      "Drive system, belt, and bearing inspection",
      "Emergency breakdown response",
      "OEM-specified spare parts procurement",
    ],
  },
];

const coverage = [
  { country: "Kenya", flag: "🇰🇪", status: "HQ — Primary Market", notes: "10+ years of operations. Full infrastructure, engineering workshop, and established customer base in Nairobi.", hq: true },
  { country: "Tanzania", flag: "🇹🇿", status: "Active — Weighing & Equipment", notes: "Established agent network and active cross-border weighing and equipment supply.", hq: false },
  { country: "Uganda", flag: "🇺🇬", status: "Active — Industrial Supply", notes: "Regular weighing system and equipment deliveries to industrial and infrastructure projects.", hq: false },
  { country: "Ethiopia", flag: "🇪🇹", status: "Active — Infrastructure Projects", notes: "Growing market with active weighbridge and equipment supply for road and dam construction.", hq: false },
  { country: "Rwanda", flag: "🇷🇼", status: "Active — Construction Market", notes: "Weighing and equipment supply to construction and mining development projects.", hq: false },
  { country: "South Sudan", flag: "🇸🇸", status: "Coverage — Project Basis", notes: "Cross-border project coverage with full regulatory and logistics support.", hq: false },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="relative h-screen min-h-[680px] flex flex-col justify-end overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1800&q=85&auto=format&fit=crop"
          alt="Large open-cast quarry operations"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06090f] via-[#06090f]/65 to-[#06090f]/10" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-20 w-full">
          <div className="max-w-3xl">
            <p className="text-white/75 text-xs tracking-[0.3em] uppercase mb-6 font-medium">
              Baykon Authorized Distributor · Nairobi, Kenya
            </p>
            <h1 className="text-6xl sm:text-7xl lg:text-[88px] font-black text-white leading-[0.88] tracking-tight mb-8">
              Precision<br />
              <span className="text-blue-400">at Scale.</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-lg leading-relaxed mb-10">
              East Africa&apos;s primary authority on industrial weighing infrastructure, lifecycle engineering, and heavy equipment — mining, quarrying, cement, and civil construction.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#weighing"
                className="bg-blue-700 hover:bg-blue-600 text-white font-semibold px-8 py-3.5 text-sm transition-colors"
              >
                Our Capabilities
              </a>
              <a
                href="#contact"
                className="text-white font-medium text-sm flex items-center gap-2 hover:text-blue-400 transition-colors group"
              >
                Get in Touch
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-white/10">
              {[
                { value: "Baykon", label: "Authorized Distributor" },
                { value: "AMC", label: "Certified Provider" },
                { value: "6+", label: "Countries Served" },
                { value: "10+", label: "Years Operating" },
              ].map((s) => (
                <div key={s.label} className="px-6 lg:px-10 py-5 first:pl-0">
                  <div className="text-white font-black text-xl leading-none">{s.value}</div>
                  <div className="text-gray-400 text-xs mt-1.5 tracking-wide">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────────────── */}
      <section id="about" className="grid lg:grid-cols-2 min-h-[620px] scroll-mt-16">
        <div className="relative min-h-[420px] lg:min-h-0 bg-gray-200 order-2 lg:order-1">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=85&auto=format&fit=crop"
            alt="Omega engineering team in the field"
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-8 lg:px-16 py-20 bg-white order-1 lg:order-2">
          <p className="text-xs text-gray-400 uppercase tracking-[0.25em] font-medium mb-8">
            Who We Are
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-[1.05] mb-8">
            East Africa&apos;s Premier Industrial Solutions Provider
          </h2>
          <p className="text-gray-500 leading-relaxed mb-5">
            As the Authorized Regional Distributor for Baykon — a global pioneer in industrial weighing technology — Omega delivers mission-critical heavy infrastructure solutions to the mining, quarrying, cement, and civil construction sectors.
          </p>
          <p className="text-gray-500 leading-relaxed mb-10">
            Beyond instrumentation, we are a comprehensive lifecycle partner: heavy machinery trading, calibration engineering, and structured Annual Maintenance Contracts across 6 East African markets.
          </p>

          <div className="grid grid-cols-2 gap-x-10 gap-y-5 pt-8 border-t border-gray-100">
            {[
              ["Baykon Status", "Authorized Distributor"],
              ["Headquarters", "Nairobi, Kenya"],
              ["AMC Certification", "Official Provider"],
              ["Regional Reach", "6+ East African Countries"],
            ].map(([label, value]) => (
              <div key={label}>
                <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">{label}</div>
                <div className="text-sm font-semibold text-gray-800">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT WE DO ───────────────────────────────────── */}
      <section id="services" className="bg-[#06090f] py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            <div className="lg:w-64 shrink-0">
              <p className="text-xs text-gray-500 uppercase tracking-[0.25em] font-medium mb-4">
                What We Do
              </p>
              <h2 className="text-3xl font-black text-white leading-tight">
                Core Operational Domains
              </h2>
            </div>

            <div className="flex-1 divide-y divide-white/8">
              {domains.map((d) => (
                <div key={d.num} className="py-10 group cursor-default">
                  <div className="flex gap-8 items-start">
                    <span className="text-6xl font-black text-white/8 leading-none shrink-0 group-hover:text-blue-900/40 transition-colors select-none">
                      {d.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                          {d.title}
                        </h3>
                        <span className="text-[10px] text-blue-400 border border-blue-900 px-2 py-0.5 uppercase tracking-widest">
                          {d.badge}
                        </span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed mb-6">
                        {d.description}
                      </p>
                      <div className="grid sm:grid-cols-3 gap-4">
                        {d.items.map((item, j) => (
                          <div key={j} className="border-l-2 border-blue-900 pl-3">
                            <p className="text-gray-300 text-xs font-semibold leading-snug">
                              {item.split(" — ")[0]}
                            </p>
                            <p className="text-gray-600 text-xs mt-1 leading-snug">
                              {item.split(" — ")[1]}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WEIGHING ─────────────────────────────────────── */}
      <section id="weighing" className="scroll-mt-16">
        {/* Hero photo */}
        <div className="relative h-[55vh] min-h-[420px]">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1800&q=85&auto=format&fit=crop"
            alt="Heavy tipper trucks on industrial weighbridge"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#06090f]/55" />
          <div className="absolute inset-0 flex items-end">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-12 w-full">
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-[0.25em] mb-3">
                    Industrial Weighing
                  </p>
                  <h2 className="text-5xl lg:text-6xl font-black text-white leading-tight">
                    Weighbridge<br />Solutions
                  </h2>
                </div>
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-300 pb-1">
                  <span>Up to <strong className="text-white font-bold">300 T</strong> capacity</span>
                  <span className="hidden sm:inline w-px h-4 bg-white/20 self-center" />
                  <span><strong className="text-white font-bold">IP54–IP68</strong> protection</span>
                  <span className="hidden sm:inline w-px h-4 bg-white/20 self-center" />
                  <span><strong className="text-white font-bold">OIML R76</strong> certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product catalog table */}
        <div className="bg-gray-50 py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between mb-10">
              <h3 className="text-2xl font-bold text-gray-900">Product Range</h3>
              <a
                href="#contact"
                className="text-sm text-blue-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all group"
              >
                Request Quotation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Product grid — alternating image/description layout */}
            <div className="space-y-6">
              {weighbridgeProducts.map((wb, i) => (
                <div
                  key={wb.name}
                  className={`group bg-white border border-gray-200 overflow-hidden grid md:grid-cols-2 min-h-[280px]`}
                >
                  {/* Image — left on even, right on odd */}
                  <div className={`relative min-h-[220px] md:min-h-0 ${i % 2 !== 0 ? "md:order-2" : ""}`}>
                    <Image
                      src={wb.image}
                      alt={wb.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Details — right on even, left on odd */}
                  <div className={`flex flex-col justify-center px-8 lg:px-12 py-10 ${i % 2 !== 0 ? "md:order-1" : ""}`}>
                    <h4 className="text-xl font-black text-gray-900 mb-4 group-hover:text-blue-700 transition-colors leading-tight">
                      {wb.name}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">{wb.description}</p>
                    <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100">
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Capacity</div>
                        <div className="font-black text-blue-700 text-sm">{wb.capacity}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Platform</div>
                        <div className="font-semibold text-gray-700 text-sm">{wb.length}</div>
                      </div>
                      <div>
                        <div className="text-[10px] text-gray-400 uppercase tracking-widest mb-1">Protection</div>
                        <div className="text-xs font-semibold text-gray-600 border border-gray-200 px-2 py-1 inline-block">{wb.ip}</div>
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className="mt-6 text-blue-700 text-xs font-semibold flex items-center gap-1.5 hover:gap-3 transition-all group/link w-fit"
                    >
                      Enquire
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white border-t border-b border-gray-100 py-10">
          <p className="text-[10px] text-gray-400 uppercase tracking-[0.2em] font-medium text-center mb-8">
            Certifications &amp; Standards
          </p>
          <div className="max-w-5xl mx-auto px-6 flex flex-nowrap justify-center gap-8">
            {certifications.map((c) => (
              <div key={c.name} className="flex flex-col items-center gap-4 w-44 group cursor-default">
                <div
                  className="w-36 h-36 flex items-center justify-center rounded-2xl shadow-md border border-gray-100 group-hover:scale-105 transition-transform duration-200 overflow-hidden p-4"
                  style={{ backgroundColor: c.bg }}
                >
                  {c.imgSrc ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.imgSrc} alt={c.name} className="w-full h-full object-contain" />
                  ) : (
                    <div className="flex flex-col items-center justify-center w-full h-full border-2 border-sky-600 rounded-lg">
                      <div className="text-xs font-bold text-sky-600 tracking-widest uppercase leading-none">IP</div>
                      <div className="text-4xl font-black text-sky-700 leading-none">68</div>
                      <div className="text-[9px] text-sky-500 tracking-wide mt-1">IEC 60529</div>
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <div className="text-sm font-black text-gray-800">{c.name}</div>
                  <div className="text-[10px] text-gray-400 mt-0.5 leading-snug">{c.subtitle}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Baykon instrumentation */}
        <div className="bg-[#06090f] py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
              <div className="lg:w-64 shrink-0">
                <p className="text-xs text-gray-500 uppercase tracking-[0.25em] font-medium mb-4">
                  Baykon Portfolio
                </p>
                <h3 className="text-3xl font-black text-white leading-tight">
                  Instrumentation Lines
                </h3>
                <p className="text-gray-500 text-sm mt-5 leading-relaxed">
                  European-standard weighing technology exclusively supplied and serviced by Omega for East Africa.
                </p>
              </div>

              <div className="flex-1 grid sm:grid-cols-2 gap-px bg-white/5">
                {baykonProducts.map((p) => (
                  <div
                    key={p.code}
                    className="bg-[#06090f] p-8 hover:bg-blue-950/20 transition-colors group"
                  >
                    <div className="text-blue-500 text-xs font-black tracking-[0.2em] uppercase mb-5">
                      {p.code}
                    </div>
                    <h4 className="font-bold text-white text-base mb-3 group-hover:text-blue-400 transition-colors">
                      {p.title}
                    </h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMC ──────────────────────────────────────────── */}
      <section id="amc" className="bg-[#06090f] py-24 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">

          {/* Header row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-[0.25em] font-medium mb-4">
                After-Sales Excellence
              </p>
              <h2 className="text-4xl font-black text-white leading-tight">
                Annual Maintenance Contracts
              </h2>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              We do not just supply — we guarantee uptime. Field calibration and mechanical engineers deployed across East Africa, round-the-clock.
            </p>
          </div>

          {/* Two modules side by side */}
          <div className="grid lg:grid-cols-2 gap-px bg-white/5">
            {amcModules.map((mod) => (
              <div key={mod.title} className="bg-[#06090f] p-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-0.5 h-5 bg-blue-600 shrink-0" />
                  <h3 className="text-white font-bold text-sm uppercase tracking-wider">
                    {mod.title}
                  </h3>
                  <span className="text-[10px] text-blue-400 border border-blue-900 px-2 py-0.5 tracking-widest uppercase">
                    {mod.label}
                  </span>
                </div>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {mod.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-xs text-gray-400">
                      <span className="w-1 h-1 rounded-full bg-blue-700 mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── EQUIPMENT ────────────────────────────────────── */}
      <section id="equipment" className="py-24 bg-white border-t border-gray-100 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-[0.25em] font-medium mb-6">
                Asset Trading Division
              </p>
              <h2 className="text-4xl font-black text-gray-900 leading-tight mb-8">
                Heavy Construction Equipment Trading
              </h2>
              <p className="text-gray-500 leading-relaxed mb-10">
                Deep regional networks across mining and civil construction — connecting equipment owners with premium machinery. New procurement to certified pre-owned, backed by full East African logistics.
              </p>

              <div className="space-y-px mb-10">
                {[
                  ["New Equipment Procurement", "Sourcing earthmoving and material handling solutions tailored to regional project specifications"],
                  ["Certified Pre-Owned Fleet", "Evaluated, reconditioned, and warranted heavy machinery delivered across East Africa"],
                  ["Cross-Border Logistics", "Port clearance, transport compliance, and local regulatory certifications handled end-to-end"],
                ].map(([title, desc]) => (
                  <div key={title} className="flex gap-5 py-5 border-b border-gray-100 last:border-0 group">
                    <div className="w-0.5 bg-blue-700 shrink-0 self-stretch opacity-60 group-hover:opacity-100 transition-opacity" />
                    <div>
                      <div className="font-bold text-gray-900 text-sm mb-1">{title}</div>
                      <div className="text-gray-500 text-sm leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {["Jaw Crushers", "Cone Crushers", "Excavators", "Wheel Loaders", "Impact Crushers", "Dump Trucks", "Backhoe Loaders", "Mobile Plants"].map((item) => (
                  <div key={item} className="text-xs text-gray-500 py-2 border-b border-dashed border-gray-150 flex items-center gap-2">
                    <span className="w-1 h-1 bg-blue-700 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative aspect-[3/4] bg-gray-200">
              <Image
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=85&auto=format&fit=crop"
                alt="Heavy construction excavator at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE ─────────────────────────────────────── */}
      <section id="coverage" className="bg-gray-50 py-24 border-t border-gray-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16 items-start">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-[0.25em] font-medium mb-6">
                Geographic Reach
              </p>
              <div className="text-9xl font-black text-[#06090f] leading-none mb-6">6</div>
              <p className="text-gray-500 leading-relaxed">
                East African countries served, with full logistics infrastructure, agent networks, and regulatory expertise from day one of any partnership.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="divide-y divide-gray-200">
                {coverage.map((c) => (
                  <div
                    key={c.country}
                    className={`flex gap-4 py-4 items-start transition-colors ${c.hq ? "bg-blue-50 -mx-4 px-4" : ""}`}
                  >
                    <span className="text-2xl leading-none shrink-0 mt-0.5">{c.flag}</span>
                    <div className="flex-1 grid sm:grid-cols-3 gap-2">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 text-sm">{c.country}</span>
                        {c.hq && (
                          <span className="text-[9px] bg-blue-700 text-white px-1.5 py-0.5 font-bold tracking-wide">
                            HQ
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-blue-700 font-semibold">{c.status}</div>
                      <div className="text-xs text-gray-500">{c.notes}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────── */}
      <section id="contact" className="py-24 bg-white border-t border-gray-200 scroll-mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-[0.25em] font-medium mb-6">
                Get in Touch
              </p>
              <h2 className="text-4xl font-black text-gray-900 leading-tight mb-8">
                Ready to Partner With Omega?
              </h2>
              <p className="text-gray-500 leading-relaxed mb-12">
                We welcome the opportunity to meet your team, conduct a facility visit, and present our complete partner profile — committed to representing your brand with professionalism across East Africa.
              </p>

              <div className="divide-y divide-gray-100">
                {[
                  ["Location", "Nairobi, Kenya — East Africa"],
                  ["Phone / WhatsApp", "+254 700 000 000"],
                  ["Email", "sales@omegatech.co.ke"],
                  ["Website", "www.omegatech.co.ke"],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-6 py-5">
                    <div className="text-[10px] text-gray-400 uppercase tracking-widest w-28 shrink-0 mt-0.5 font-medium">
                      {label}
                    </div>
                    <div className="text-gray-800 font-medium text-sm">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <form className="space-y-5">
                <div className="grid grid-cols-2 gap-4">
                  {[["First Name", "John"], ["Last Name", "Doe"]].map(([label, ph]) => (
                    <div key={label}>
                      <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-2 font-medium">
                        {label}
                      </label>
                      <input
                        type="text"
                        placeholder={ph}
                        className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-700 transition"
                      />
                    </div>
                  ))}
                </div>
                {(
                  [["Email", "email", "john@company.com"], ["Company", "text", "Your Company Name"]] as [string, string, string][]
                ).map(([label, type, ph]) => (
                  <div key={label}>
                    <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-2 font-medium">
                      {label}
                    </label>
                    <input
                      type={type}
                      placeholder={ph}
                      className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-700 transition"
                    />
                  </div>
                ))}
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-2 font-medium">
                    Enquiry Type
                  </label>
                  <select className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-blue-700 transition bg-white">
                    <option value="">Select...</option>
                    <option>Industrial Weighing & Baykon Products</option>
                    <option>Weighbridge Supply & Installation</option>
                    <option>Annual Maintenance Contract</option>
                    <option>Heavy Equipment Trading</option>
                    <option>OEM / Distributor Partnership</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] text-gray-400 uppercase tracking-widest block mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="How can we help?"
                    className="w-full border border-gray-200 px-4 py-3 text-sm text-gray-800 placeholder-gray-300 focus:outline-none focus:border-blue-700 transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white font-semibold py-4 text-sm transition-colors tracking-wide"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────── */}
      <footer className="bg-[#1a2f7a] border-t border-white/10 py-14">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <div className="bg-white inline-block px-3 py-1.5 mb-5">
                <Image
                  src="/omega-logo.jpeg"
                  width={130}
                  height={35}
                  alt="Omega Technical Solutions Limited"
                  className="object-contain"
                />
              </div>
              <p className="text-blue-200/70 text-sm leading-relaxed max-w-xs">
                Industrial Weighing · Baykon Authorized Distributor · AMC Provider · Heavy Equipment Trading
              </p>
            </div>

            <div>
              <div className="text-blue-300/60 text-[10px] font-bold mb-5 uppercase tracking-[0.2em]">
                Services
              </div>
              <ul className="space-y-3">
                {["Industrial Weighing", "Baykon Products", "Weighbridge Solutions", "AMC Services", "Equipment Trading"].map((s) => (
                  <li key={s}>
                    <a href="#services" className="text-blue-100/70 hover:text-white text-sm transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-blue-300/60 text-[10px] font-bold mb-5 uppercase tracking-[0.2em]">
                Contact
              </div>
              <ul className="space-y-3 text-sm text-blue-100/70">
                <li>Nairobi, Kenya</li>
                <li>+254 700 000 000</li>
                <li>
                  <a href="mailto:sales@omegatech.co.ke" className="hover:text-white transition-colors">
                    sales@omegatech.co.ke
                  </a>
                </li>
              </ul>
              <div className="mt-6 text-blue-300/60 text-[10px] font-bold mb-3 uppercase tracking-[0.2em]">
                Coverage
              </div>
              <p className="text-blue-100/70 text-sm leading-relaxed">
                Kenya · Tanzania · Uganda<br />
                Ethiopia · Rwanda · South Sudan
              </p>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-blue-200/50 text-xs">
              © 2025 Omega Technical Solutions Ltd. All rights reserved.
            </div>
            <div className="text-blue-200/50 text-xs">
              Baykon Authorized Regional Distributor · East Africa
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
