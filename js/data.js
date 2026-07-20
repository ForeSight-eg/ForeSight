// Client & article data, ported from the original Lovable project (English content).

function domainOf(url) {
  return new URL(url).hostname.replace(/^www\./, "");
}

const CLIENTS = [
  { name: "Monsha'at — SME General Authority", url: "https://www.monshaat.gov.sa", category: "Government", featured: true },
  { name: "Social Development Bank", url: "https://www.sdb.gov.sa", category: "Banking" },
  { name: "Ministry of Human Resources & Social Development", url: "https://www.hrsd.gov.sa", category: "Government" },
  { name: "General Authority for Awqaf", url: "https://awqaf.gov.sa", category: "Government" },
  { name: "The Saudi National Bank (SNB)", url: "https://www.alahli.com", category: "Banking", featured: true },
  { name: "King Khalid Foundation", url: "https://kkf.org.sa", category: "Foundation", featured: true },
  { name: "Ministry of Health", url: "https://www.moh.gov.sa", category: "Government", featured: true },
  { name: "Ministry of Commerce", url: "https://mc.gov.sa", category: "Government" },
  { name: "Ministry of Municipal, Rural Affairs & Housing", url: "https://www.momrah.gov.sa", category: "Government" },
  { name: "Saudi Electricity & Cogeneration Regulatory Authority", url: "https://www.ecra.gov.sa", category: "Regulator" },
  { name: "Ministry of Energy", url: "https://www.moenergy.gov.sa", category: "Government", featured: true },
  { name: "Charitable Society for Orphans Care (Ekhaa)", url: "https://ekhaa.org.sa", category: "Foundation" },
  { name: "Ministry of Industry", url: "https://www.mim.gov.sa", category: "Government" },
  { name: "Turquoise Mountain Company", url: "https://www.turquoisemountain.org", category: "Enterprise" },
  { name: "King Fahd University of Petroleum & Minerals", url: "https://www.kfupm.edu.sa", category: "Academic", featured: true },
];

const ARTICLES = [
  {
    slug: "what-is-business-analytics", category: "Foundations",
    title: "What is Business Analytics?",
    excerpt: "Business Analytics turns data into decisions. A clear primer on the four layers — Descriptive, Diagnostic, Predictive and Prescriptive — and where modern leaders should invest.",
    body: [
      { paragraphs: [
        "Business Analytics (BA) uses data, models and modern tools to understand performance, support decisions, predict outcomes and improve execution. It sits between data engineering, analysis and business strategy.",
        "Done right, analytics is not a reporting job — it is a decision capability. It turns scattered data from ERPs, CRMs and spreadsheets into one trustworthy view that leaders and operators can act on every day.",
      ]},
      { heading: "The four layers of analytics", paragraphs: [
        "Descriptive — What happened? KPIs and dashboards built on historical data.",
        "Diagnostic — Why did it happen? Drill-downs and root-cause analysis.",
        "Predictive — What will happen? Forecasts, churn and demand models.",
        "Prescriptive — What should we do? Optimization and decision automation.",
      ]},
      { heading: "Where to start", paragraphs: [
        "Most organizations underestimate the descriptive layer and overreach on predictive readiness. The fastest return comes from cleaning the foundation: KPIs tied to strategy, one source of truth, and a dashboard that works in front of the people making daily decisions.",
      ]},
    ],
  },
  {
    slug: "executive-control-layer", category: "Executive",
    title: "The Executive Control Layer: from vision to action in one platform",
    excerpt: "Executives don't need more reports — they need alignment. How a Power BI–based control layer connects vision, strategy, execution and KPIs into one decision platform.",
    body: [
      { paragraphs: [
        "In fast-moving organizations, the real challenge isn't lack of data — it's lack of control, clarity and foresight. Reports are everywhere, and alignment is rare.",
        "An Executive Control Layer redefines business intelligence from a reporting tool into a remote control for the organization — one platform where leaders turn vision into strategy, strategy into plans, and plans into measurable outcomes.",
      ]},
      { heading: "From vision to action — one continuous line", paragraphs: [
        "Vision, strategy, execution plans and KPIs — all linked, traceable and visible in real time. No fragmentation, no interpretation gaps, no blind spots.",
      ]},
      { heading: "Insight, not just information", paragraphs: [
        "The real power isn't in the charts — it's in generating insight. Leaders spot deviations instantly, understand why they happened, drill from board KPIs down to the operational root cause, and catch early signals before they become crises.",
      ]},
    ],
  },
  {
    slug: "beyond-dashboards-management-system", category: "Strategy",
    title: "Beyond dashboards: a management system for strategy and execution",
    excerpt: "Dashboards are the surface. The real value is a personalized management system that connects strategy, planning, execution and follow-up — with role-based access for every level.",
    body: [
      { paragraphs: [
        "Most BI projects stop at charts. Winning teams build something different: a management system where strategy, planning, execution and follow-up live in one platform — personalized to the partner, role-based by design.",
      ]},
      { heading: "One platform, every level", paragraphs: [
        "C-Level: vision and strategic KPIs. Directors: portfolio health and risk. Managers: team objectives and quality. Operators: daily tasks and real-time signals. Each role sees what they need — only what they need.",
      ]},
    ],
  },
  {
    slug: "data-in-the-age-of-ai", category: "AI",
    title: "Data in the age of AI: why your foundation matters more than your model",
    excerpt: "Every leader is being sold an AI model. Almost none of them are being sold what actually makes AI work: clean, governed, contextual data. Here is what to prioritize before any model.",
    body: [
      { paragraphs: [
        "AI is only as smart as the data it stands on. A frontier model fed messy, duplicated, unlabelled enterprise data will produce confident-sounding nonsense. The opposite is also true: a modest model with clean, contextual data will quietly outperform.",
        "The race today is not for the smartest model. It is for the cleanest decision-grade data — and the governance to keep it that way as the organization moves.",
      ]},
      { heading: "What 'AI-ready data' actually means", paragraphs: [
        "One source of truth across systems. Clear ownership for every important field. Definitions that mean the same thing in finance, operations and sales. Historical depth long enough to learn from. And privacy and access controls that let you use the data without breaking trust.",
      ]},
      { heading: "Where to start this quarter", paragraphs: [
        "Pick one decision that matters — pricing, churn, demand, hiring. Map the data behind it end-to-end. Fix it once. Put a small AI use case on top. Then scale the pattern. Skip the platform-first conversation; start with the decision.",
      ]},
    ],
  },
  {
    slug: "ai-for-executives", category: "AI",
    title: "How AI helps executives lead — without drowning in dashboards",
    excerpt: "AI's biggest gift to leadership is not prediction. It is attention. The model surfaces what matters, when it matters, in plain language — so executives spend their time deciding, not searching.",
    body: [
      { paragraphs: [
        "Most executives don't suffer from a lack of data. They suffer from a flood of it. Twelve dashboards, six reports, four chat threads — and the one number that should have moved their week is buried in tab nine.",
        "Used well, AI inverts that. Instead of asking the executive to find the signal, the system pushes the signal to the executive — in one line, in their language, with a recommended next step.",
      ]},
      { heading: "Three high-leverage AI moves for leadership", paragraphs: [
        "1) Briefings on demand: ask the system 'what changed this week and why' and get an honest, sourced answer in 60 seconds.",
        "2) Anomaly alerts: stop watching dashboards. The system watches them, and only talks to you when something matters.",
        "3) Decision drafts: for routine calls (pricing tweaks, staffing, inventory), the system proposes the decision and you approve, edit or reject.",
      ]},
      { heading: "What executives should NOT delegate to AI", paragraphs: [
        "Strategic intent, ethical calls, and the human conversations that build trust. AI is a force multiplier on judgment — not a replacement for it.",
      ]},
    ],
  },
  {
    slug: "automation-and-workflows", category: "Operations",
    title: "Automation and workflows: removing friction from how work actually moves",
    excerpt: "Automation is not about replacing people. It is about removing the silent tax of handoffs, copy-paste and waiting — so your best people can spend their time on judgment, not plumbing.",
    body: [
      { paragraphs: [
        "In most organizations, 30–40% of skilled time is spent moving data between systems, chasing approvals and rebuilding the same report. None of it creates value. All of it burns morale.",
        "Workflow automation closes those gaps quietly. An approval that took three days now takes three minutes. A monthly report that took a week is ready on the first. A handoff that used to go missing now leaves an audit trail.",
      ]},
      { heading: "Where to look for the quick wins", paragraphs: [
        "Anywhere you see: a spreadsheet emailed between teams, an Excel file that everyone has 'their own version' of, a status meeting that exists just to share numbers, or an approval that bottlenecks on one person's inbox. Those are the candidates.",
      ]},
      { heading: "Automation done badly", paragraphs: [
        "Automating a broken process gives you a broken process — faster. Always simplify first, then automate. And measure: time saved per cycle, errors removed, decisions accelerated.",
      ]},
    ],
  },
  {
    slug: "kpi-trees-that-work", category: "Strategy",
    title: "KPI trees that actually work: from boardroom number to daily action",
    excerpt: "A KPI is only useful if someone, somewhere, can act on it tomorrow morning. Here is how to build a KPI tree where every executive number connects down to a real operational lever.",
    body: [
      { paragraphs: [
        "Most KPI lists fail in the same way: they look impressive on a slide and nobody knows what to do with them on Monday. The fix is structural, not cosmetic.",
      ]},
      { heading: "Build the tree top-down, validate bottom-up", paragraphs: [
        "Start with the 3–5 outcomes the board actually cares about. Break each into its drivers. Break drivers into operational metrics owned by a real team. Then walk it backwards: if I move the bottom number, will the top number move? If not, the link is wrong.",
      ]},
      { heading: "One owner per KPI, always", paragraphs: [
        "If two people own a number, nobody owns it. Every KPI gets one name, one cadence, one place where it is reviewed. That single rule prevents most KPI debt.",
      ]},
    ],
  },
  {
    slug: "from-reports-to-decisions", category: "Executive",
    title: "From reports to decisions: changing the operating rhythm of leadership",
    excerpt: "The bottleneck in most leadership teams is not data — it is the meeting cadence around it. A few small changes turn a reporting culture into a decision culture.",
    body: [
      { paragraphs: [
        "If the weekly leadership meeting is mostly 'people reading numbers to each other', the system is broken. Numbers should be read before the meeting. The meeting is for decisions.",
      ]},
      { heading: "Three rhythm shifts that change everything", paragraphs: [
        "Pre-read by default: numbers and a short narrative shared 24 hours before. Decision-only agendas: every item ends with a named owner and a date. Anomaly-driven escalation: routine items skip the meeting entirely; only outliers get airtime.",
      ]},
    ],
  },
  {
    slug: "governance-data-trust", category: "Governance",
    title: "Data governance without the bureaucracy: how to build trust quickly",
    excerpt: "Heavy governance frameworks die in PowerPoint. Lightweight governance — ownership, definitions, change logs — earns trust in weeks. Here is the minimum that actually works.",
    body: [
      { paragraphs: [
        "Governance fails when it tries to control everything before it has earned the right to control anything. Start with three things, do them well, expand.",
      ]},
      { heading: "The minimum viable governance", paragraphs: [
        "One business glossary that everyone agrees with. One named owner per critical dataset. One visible change log so people know when a number's definition moved. That is enough to remove 80% of the 'whose number is right' arguments.",
      ]},
    ],
  },
  {
    slug: "ai-pilot-to-production", category: "AI",
    title: "From AI pilot to production: why most pilots never make it (and how to fix it)",
    excerpt: "Most enterprise AI pilots impress in the demo and quietly disappear six months later. The reasons are predictable and fixable — if you plan for production from day one.",
    body: [
      { paragraphs: [
        "The gap between 'pilot worked' and 'in production' is bigger than most teams expect. Pilots optimize for novelty; production optimizes for reliability, integration, and someone owning it at 2am.",
      ]},
      { heading: "Build the pilot like a small product", paragraphs: [
        "Define the business decision it will support, the person who will use it, the data pipeline behind it, and the success metric — before writing a line of code. If any of the four is missing, you have a science project, not a pilot.",
      ]},
      { heading: "Plan for the boring parts", paragraphs: [
        "Monitoring, drift detection, retraining cadence, access control, cost ceiling. None of these are exciting. All of them decide whether the pilot survives its first quarter.",
      ]},
    ],
  },
  {
    slug: "self-service-analytics", category: "Adoption",
    title: "Self-service analytics: empowerment, not anarchy",
    excerpt: "Self-service analytics works when business users can explore safely on top of a governed foundation. It fails when 'self-service' means 'everyone builds their own truth'.",
    body: [
      { paragraphs: [
        "True self-service is layered: a governed semantic layer at the bottom (one definition of revenue, one definition of customer), curated datasets in the middle, and free exploration on top. Skip the bottom and you get chaos disguised as agility.",
      ]},
      { heading: "Enable the analyst-power-user, not everyone", paragraphs: [
        "Every team has 1–2 'analyst-minded' people. Invest deeply in them. They become the multipliers for the rest of the team — much higher leverage than trying to turn every manager into a data analyst.",
      ]},
    ],
  },
  {
    slug: "mena-data-leadership", category: "Regional",
    title: "MENA's quiet data leadership moment",
    excerpt: "Saudi Arabia and the wider region are building decision infrastructure at a pace most global markets have stopped attempting. What that means for executives operating here.",
    body: [
      { paragraphs: [
        "Vision 2030 and parallel national programs have done something rare: they have turned data and AI from an IT line item into a board-level mandate. Ministries, regulators and large enterprises are now graded — explicitly — on data maturity.",
      ]},
      { heading: "What this means for executives in the region", paragraphs: [
        "Capability now beats brand. A leader who can show a working executive control layer, audited KPIs and AI use cases tied to outcomes is in a stronger position than one waiting for a global firm to land. The market is rewarding speed and local fit.",
      ]},
    ],
  },
];
