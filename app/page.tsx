import Navbar from "./components/Navbar";

const stats = [
  { value: "10+", label: "Years in Kenya" },
  { value: "200+", label: "Machines Traded" },
  { value: "6+", label: "Countries Served" },
  { value: "AMC", label: "Official Certified" },
];

const services = [
  {
    abbr: "CR",
    title: "Construction Equipment Rental",
    description:
      "Short and long-term rental of excavators, backhoe loaders, hydraulic breakers, and crushing equipment for all project scales.",
  },
  {
    abbr: "UM",
    title: "Used Machine Trading",
    description:
      "Buying, selling, and brokering quality-inspected used excavators, backhoe loaders, breakers, and crushers — sourced globally, serviced locally.",
  },
  {
    abbr: "CS",
    title: "Crusher Supply & Dealership",
    description:
      "Supply and distribution of jaw, cone, and impact crushers for aggregate production, quarrying, road construction, and mineral processing.",
  },
  {
    abbr: "AMC",
    title: "Annual Maintenance Contracts",
    description:
      "Officially certified AMC provider for weighbridges, heavy equipment, and crushing plants. End-to-end after-sales support.",
  },
  {
    abbr: "MS",
    title: "Metal & Steel Distribution",
    description:
      "Supply of structural steel, rolled metals, and tolling services for construction and industrial projects across East Africa.",
  },
  {
    abbr: "EL",
    title: "East Africa Logistics",
    description:
      "Equipment mobilization, cross-border documentation, customs clearance, and transport coordination across East Africa.",
  },
];

const equipment = [
  {
    category: "Crushing Equipment",
    items: [
      "Jaw Crushers — Primary crushing for aggregate and quarry applications",
      "Cone Crushers — Secondary and tertiary crushing for high-quality aggregate",
      "Impact Crushers — Roadstone and recycling applications",
      "Mobile Crushing Plants — Flexible on-site crushing for infrastructure projects",
      "Crushing Screens & Feeders — Complete circuit accessories",
    ],
  },
  {
    category: "Earthmoving Equipment",
    items: [
      "Excavators — Mini to large class: Caterpillar, Komatsu, Hitachi, Volvo, Doosan",
      "Backhoe Loaders — JCB, Case, Caterpillar; high demand across Kenya",
      "Hydraulic Breakers — Rock and concrete demolition attachments",
      "Wheel Loaders — Material handling and stockpile management",
      "Dump Trucks — Rigid and articulated haulage for quarry projects",
    ],
  },
  {
    category: "Weighing & Other Equipment",
    items: [
      "Weighbridges — Static and portable; supply, installation, and AMC services",
      "Generators & Compressors — Site power and pneumatic solutions",
      "Structural Steel & Metal — Distribution for construction and industrial use",
    ],
  },
];

const whyUs = [
  {
    title: "Established Market Presence",
    description:
      "10+ years of active equipment trading and rental in Kenya with a trusted network of quarry operators, road contractors, mining companies, and government infrastructure developers.",
  },
  {
    title: "Technical Service Capability",
    description:
      "In-house technical team with hands-on experience servicing heavy equipment including excavators, breakers, and crushing plants — PDI, warranty repairs, and emergency breakdown response.",
  },
  {
    title: "Operational Workshop & Parts",
    description:
      "Workshop and parts storage facility in Nairobi equipped to service and maintain heavy equipment, scalable to hold a dedicated spare parts inventory for dealer product lines.",
  },
  {
    title: "Official AMC Certification",
    description:
      "Officially certified Annual Maintenance Contract provider covering weighbridge systems and heavy equipment — demonstrating structured, long-term after-sales commitment.",
  },
  {
    title: "Rental Fleet as Demo Platform",
    description:
      "Active equipment rental fleet enables live product demonstrations. Customers trial equipment on real projects before purchase — shortening sales cycles and building buyer confidence.",
  },
  {
    title: "Regional Distribution Network",
    description:
      "Logistics capabilities, cross-border relationships, and agent networks spanning Kenya, Tanzania, Uganda, Ethiopia, Rwanda, and South Sudan — immediate regional reach from day one.",
  },
];

const coverage = [
  {
    country: "Kenya",
    status: "HQ — Primary Market",
    notes:
      "10+ years of operations. Full infrastructure, workshop, and customer base in Nairobi.",
    hq: true,
  },
  {
    country: "Tanzania",
    status: "Active — Trading & Rental",
    notes:
      "Established agent relationships and cross-border equipment supply network.",
    hq: false,
  },
  {
    country: "Uganda",
    status: "Active — Equipment Supply",
    notes: "Regular equipment deliveries and project-based sales and rental.",
    hq: false,
  },
  {
    country: "Ethiopia",
    status: "Active — Infrastructure Projects",
    notes:
      "Growing market with active equipment supply for road and dam construction.",
    hq: false,
  },
  {
    country: "Rwanda",
    status: "Active — Construction Market",
    notes: "Equipment supply to construction and development projects.",
    hq: false,
  },
  {
    country: "South Sudan",
    status: "Coverage — Project Basis",
    notes: "Cross-border project coverage as required by clients.",
    hq: false,
  },
];

const amcServices = [
  {
    title: "Crusher & Plant AMC",
    items: [
      "Scheduled preventive maintenance per manufacturer intervals",
      "Jaw plate, cone liner, and wear part replacement",
      "Hydraulic system pressure testing and fluid analysis",
      "Drive system, belt, and bearing inspection",
      "Emergency breakdown response",
      "OEM-specified spare parts procurement",
    ],
  },
  {
    title: "Weighbridge AMC (Certified)",
    items: [
      "Periodic statutory calibration and certification",
      "Load cell inspection, testing, and replacement",
      "Indicator and software updates and upgrades",
      "Regulatory compliance documentation and renewal",
      "24/7 emergency breakdown response line",
      "Annual performance and compliance reporting",
    ],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-[var(--font-geist-sans)]">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen bg-slate-900 flex items-center pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#1e293b_0%,_#0f172a_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-orange-600/10 border border-orange-600/20 text-orange-400 text-xs font-semibold tracking-widest uppercase px-3 py-1.5 rounded-full mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Nairobi, Kenya &nbsp;·&nbsp; Est. 10+ Years &nbsp;·&nbsp; East Africa
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[0.95] tracking-tight mb-6">
              OMEGA
              <span className="block text-orange-500">TECHNICAL</span>
              <span className="block text-slate-400">SOLUTIONS</span>
            </h1>

            <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-xl">
              East Africa&apos;s trusted partner for construction equipment
              rental, used machine trading, AMC services, and metal &amp; steel
              distribution — serving 6+ countries from Nairobi, Kenya.
            </p>

            <div className="flex flex-wrap gap-4 mb-14">
              <a
                href="#services"
                className="bg-orange-600 hover:bg-orange-500 text-white px-7 py-3 rounded font-semibold transition-colors text-sm"
              >
                Our Services
              </a>
              <a
                href="#contact"
                className="border border-slate-700 hover:border-orange-500/50 text-slate-300 hover:text-white px-7 py-3 rounded font-semibold transition-colors text-sm"
              >
                Get in Touch
              </a>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((s) => (
                <div
                  key={s.value}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-3xl font-black text-orange-500 leading-none">
                    {s.value}
                  </div>
                  <div className="text-slate-500 text-xs mt-1.5 leading-snug">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
                About Us
              </span>
              <h2 className="text-4xl font-black text-slate-900 mt-3 mb-6 leading-tight">
                A Decade of Heavy Equipment Excellence in East Africa
              </h2>
              <p className="text-slate-600 leading-relaxed mb-5">
                Omega Technical Solutions Ltd is a fully registered and
                operational heavy equipment company headquartered in Nairobi,
                Kenya. With more than 10 years of active trading, rental, and
                maintenance operations, we have built a respected reputation as
                a reliable partner to construction companies, quarry operators,
                infrastructure developers, and government contractors.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Founded on the principle of delivering high-quality equipment
                solutions with genuine after-sales commitment — a philosophy
                that has driven our growth from a local equipment trader to a
                multi-country distributor with official AMC certification and
                an established customer base spanning Kenya, Tanzania, Uganda,
                Ethiopia, Rwanda, and South Sudan.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {[
                { label: "Company Type", value: "Private Limited Company" },
                { label: "Headquarters", value: "Nairobi, Kenya" },
                { label: "Registration", value: "Registered in Kenya" },
                { label: "AMC Certification", value: "Official Provider" },
                { label: "Tax Status", value: "KRA Registered — Compliant" },
                { label: "Regional Coverage", value: "6+ East African Countries" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-slate-50 border border-slate-100 rounded-xl p-4"
                >
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold mb-1">
                    {item.label}
                  </div>
                  <div className="text-sm font-semibold text-slate-800">
                    {item.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
              What We Do
            </span>
            <h2 className="text-4xl font-black text-slate-900 mt-3 mb-4">
              Core Business Divisions
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Six primary divisions contributing to a full-service equipment
              ecosystem — supporting customers from procurement through to
              long-term maintenance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-50 transition-all group"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors">
                  <span className="text-orange-600 font-black text-xs tracking-wider">
                    {s.abbr}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3 group-hover:text-orange-600 transition-colors">
                  {s.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section id="equipment" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
              Fleet & Capabilities
            </span>
            <h2 className="text-4xl font-black text-white mt-3 mb-4">
              Equipment We Handle
            </h2>
            <p className="text-slate-500 max-w-2xl mx-auto">
              Active fleet and trading stock demonstrating deep technical
              knowledge across all major earthmoving and crushing segments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {equipment.map((cat) => (
              <div
                key={cat.category}
                className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-7"
              >
                <div className="w-8 h-0.5 bg-orange-500 rounded mb-5" />
                <h3 className="text-lg font-bold text-white mb-6">
                  {cat.category}
                </h3>
                <ul className="space-y-3.5">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <span className="text-orange-500 mt-0.5 shrink-0 text-xs">
                        ▸
                      </span>
                      <span className="text-slate-400 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
              Dealership Readiness
            </span>
            <h2 className="text-4xl font-black text-slate-900 mt-3 mb-4">
              Why Choose Omega
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Not a startup — an established operating business with over a
              decade of proven commercial activity in East Africa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map((item, i) => (
              <div
                key={item.title}
                className="relative p-6 rounded-2xl border border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all overflow-hidden group"
              >
                <div className="absolute top-4 right-4 text-6xl font-black text-slate-100 leading-none select-none group-hover:text-orange-50 transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="relative text-sm font-bold text-slate-900 mb-3">
                  {item.title}
                </h3>
                <p className="relative text-slate-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage */}
      <section id="coverage" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
              Geographic Reach
            </span>
            <h2 className="text-4xl font-black text-slate-900 mt-3 mb-4">
              East Africa Coverage
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Operational reach spanning 6 key East African markets — immediate
              regional distribution from day one of partnership.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coverage.map((c) => (
              <div
                key={c.country}
                className={`rounded-2xl p-6 border flex gap-4 items-start ${
                  c.hq
                    ? "bg-slate-900 border-slate-700"
                    : "bg-white border-slate-200"
                }`}
              >
                <div
                  className={`w-2.5 h-2.5 rounded-full mt-1.5 shrink-0 ${
                    c.hq ? "bg-orange-500" : "bg-green-500"
                  }`}
                />
                <div>
                  <div
                    className={`font-bold text-base ${c.hq ? "text-white" : "text-slate-900"}`}
                  >
                    {c.country}
                    {c.hq && (
                      <span className="ml-2 text-[10px] bg-orange-600 text-white px-1.5 py-0.5 rounded font-semibold tracking-wide">
                        HQ
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-xs font-semibold mt-0.5 mb-2 ${c.hq ? "text-orange-400" : "text-orange-600"}`}
                  >
                    {c.status}
                  </div>
                  <div
                    className={`text-sm leading-relaxed ${c.hq ? "text-slate-400" : "text-slate-500"}`}
                  >
                    {c.notes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AMC */}
      <section id="amc" className="py-24 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div className="lg:sticky lg:top-24">
              <span className="text-orange-500 text-xs font-bold tracking-widest uppercase">
                After-Sales Excellence
              </span>
              <h2 className="text-4xl font-black text-white mt-3 mb-6 leading-tight">
                Annual Maintenance Contracts
              </h2>
              <p className="text-slate-400 leading-relaxed mb-8">
                Our officially certified AMC division ensures equipment is
                professionally maintained throughout its operational life —
                protecting the manufacturer&apos;s brand and the
                customer&apos;s investment. End-to-end support from scheduled
                maintenance to emergency breakdown response.
              </p>

              <div className="space-y-3">
                {[
                  "Dedicated 24/7 customer helpline",
                  "Trained PDI & warranty repair technicians",
                  "Spare parts warehouse in Nairobi",
                  "Cross-East Africa service agent network",
                  "Regular performance reporting to manufacturer",
                  "Customer satisfaction monitoring",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-orange-600/20 border border-orange-600/40 flex items-center justify-center shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                    </div>
                    <span className="text-slate-400 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              {amcServices.map((section) => (
                <div
                  key={section.title}
                  className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-6"
                >
                  <h3 className="text-white font-bold mb-5">{section.title}</h3>
                  <ul className="space-y-3">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                        <span className="text-slate-400">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              <div className="bg-orange-600 rounded-2xl p-6">
                <h3 className="text-white font-bold mb-2">
                  Official AMC Certification
                </h3>
                <p className="text-orange-100 text-sm leading-relaxed">
                  Omega Technical Solutions Ltd holds official AMC provider
                  certification covering weighbridge systems and heavy
                  equipment — a critical differentiator for dealership
                  partnerships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <span className="text-orange-600 text-xs font-bold tracking-widest uppercase">
                Get in Touch
              </span>
              <h2 className="text-4xl font-black text-slate-900 mt-3 mb-6 leading-tight">
                Ready to Partner With Us?
              </h2>
              <p className="text-slate-600 leading-relaxed mb-10">
                We welcome the opportunity to meet with your team, conduct a
                facility visit, and present our complete dealership application
                package. Committed to representing your brand with
                professionalism and commercial drive across East Africa.
              </p>

              <div className="space-y-5">
                {[
                  {
                    label: "Location",
                    value: "Nairobi, Kenya — East Africa",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Phone / WhatsApp",
                    value: "+254 700 000 000",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Email",
                    value: "sales@omegatech.co.ke",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    ),
                  },
                  {
                    label: "Website",
                    value: "www.omegatech.co.ke",
                    icon: (
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                      </svg>
                    ),
                  },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-orange-50 border border-orange-100 rounded-xl flex items-center justify-center text-orange-600 shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 uppercase tracking-wider font-semibold mb-0.5">
                        {item.label}
                      </div>
                      <div className="text-slate-800 font-medium text-sm">
                        {item.value}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Send Us a Message
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1.5 uppercase tracking-wide">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-slate-600 block mb-1.5 uppercase tracking-wide">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1.5 uppercase tracking-wide">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1.5 uppercase tracking-wide">
                    Company
                  </label>
                  <input
                    type="text"
                    className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition"
                    placeholder="Your Company Name"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1.5 uppercase tracking-wide">
                    Interest
                  </label>
                  <select className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition">
                    <option value="">Select a service...</option>
                    <option>Construction Equipment Rental</option>
                    <option>Used Machine Trading</option>
                    <option>Crusher Supply & Dealership</option>
                    <option>Annual Maintenance Contract</option>
                    <option>Metal & Steel Distribution</option>
                    <option>East Africa Logistics</option>
                    <option>General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1.5 uppercase tracking-wide">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-white border border-slate-200 rounded-lg px-3.5 py-2.5 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition resize-none"
                    placeholder="How can we help you?"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-600 hover:bg-orange-500 text-white font-semibold py-3 rounded-lg transition-colors text-sm"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-8 h-8 bg-orange-600 rounded flex items-center justify-center shrink-0">
                  <span className="text-white font-black text-base">Ω</span>
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    OMEGA TECHNICAL SOLUTIONS
                  </div>
                  <div className="text-slate-500 text-xs">
                    Nairobi, Kenya · East Africa
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-sm leading-relaxed max-w-xs">
                Construction Equipment Rental · Used Machine Trading · AMC
                Provider · Metal & Steel Distribution
              </p>
            </div>

            <div>
              <div className="text-slate-400 text-xs font-bold mb-4 uppercase tracking-widest">
                Services
              </div>
              <ul className="space-y-2.5">
                {[
                  "Equipment Rental",
                  "Used Machine Trading",
                  "Crusher Supply",
                  "AMC Services",
                  "Steel Distribution",
                  "Logistics",
                ].map((s) => (
                  <li key={s}>
                    <a
                      href="#services"
                      className="text-slate-500 hover:text-orange-400 text-sm transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="text-slate-400 text-xs font-bold mb-4 uppercase tracking-widest">
                Contact
              </div>
              <ul className="space-y-2.5 text-sm text-slate-500">
                <li>Nairobi, Kenya</li>
                <li>+254 700 000 000</li>
                <li>
                  <a
                    href="mailto:sales@omegatech.co.ke"
                    className="hover:text-orange-400 transition-colors"
                  >
                    sales@omegatech.co.ke
                  </a>
                </li>
                <li>www.omegatech.co.ke</li>
              </ul>

              <div className="mt-6 text-slate-400 text-xs font-bold mb-3 uppercase tracking-widest">
                Coverage
              </div>
              <p className="text-slate-500 text-sm">
                Kenya · Tanzania · Uganda
                <br />
                Ethiopia · Rwanda · South Sudan
              </p>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-3">
            <div className="text-slate-600 text-sm">
              © 2025 Omega Technical Solutions Ltd. All rights reserved.
            </div>
            <div className="text-slate-700 text-sm">
              Nairobi, Kenya · East Africa
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
