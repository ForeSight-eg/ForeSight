const SERVICES_DATA = {
  descriptive: {
    label: "Descriptive", question: "What happened?",
    short: "Turn raw data into a single source of truth and executive-ready dashboards.",
    steps: [
      { icon: "🗄️", title: "Data foundation", desc: "We assess your current data situation — sources, gaps, quality — and design the structure that everything else stands on.", deliverables: ["Data audit & maturity scoring", "Warehouse / lakehouse design", "ETL & integration from ERP, CRM, SaaS", "Governance & data quality"] },
      { icon: "🖥️", title: "Remote-control dashboard", desc: "A top-notch, interactive command center — personalized per role from C-level to junior — with automations tuned to how you actually run.", deliverables: ["Role-based views (C-suite → ops)", "KPI scorecards & drill-downs", "Workflow automations", "Mobile-first executive UX"] },
      { icon: "💡", title: "Curated insights", desc: "Not charts — decisions. We surface the gap between status quo and your plan, strategy, and vision so executives act on what matters.", deliverables: ["Plan vs. actual narratives", "Strategy & vision gap analysis", "Weekly executive briefings", "Anomaly alerts"] },
      { icon: "🤖", title: "AI executive agent", desc: "An agent that thinks alongside leadership — answers questions, prepares meetings, and facilitates the decision journey.", deliverables: ["Conversational data access", "Auto-generated board packs", "Recommendation prompts", "Meeting prep & follow-ups"] },
      { icon: "⚙️", title: "Customized solution", desc: "Everything above is shaped to your industry, structure, and ambition. No templates pretending to be strategy.", deliverables: ["Industry-specific KPI design", "Custom data models", "Bespoke automation rules", "White-glove rollout"] },
    ],
  },
  diagnostic: {
    label: "Diagnostic", question: "Why did it happen?",
    short: "Drill into root causes, cohorts, and variances behind every number.",
    steps: [
      { icon: "🗄️", title: "Data foundation", desc: "We extend the data structure to support cause-and-effect analysis across functions, time, and segments.", deliverables: ["Unified entity model", "Time-series & cohort schemas", "Cross-functional joins", "Data lineage"] },
      { icon: "🖥️", title: "Remote-control dashboard", desc: "Diagnostic views built into the executive dashboard — click any KPI, see the why instantly, across every layer of the company.", deliverables: ["Drill-through anywhere", "Variance & profitability views", "Funnel & conversion diagnostics", "Role-aware permissions"] },
      { icon: "💡", title: "Curated insights", desc: "Root-cause narratives that explain performance gaps against the strategic plan — not raw correlations.", deliverables: ["Root cause briefings", "Cohort & segmentation insights", "Profitability deep-dives", "Quarterly reviews"] },
      { icon: "🤖", title: "AI executive agent", desc: "Ask 'why did revenue drop in the north region?' — the agent investigates, cites the data, and proposes the next move.", deliverables: ["Natural-language Q&A", "Auto root-cause hypotheses", "Evidence-linked answers", "Follow-up reasoning"] },
      { icon: "⚙️", title: "Customized solution", desc: "Diagnostic frameworks tailored to your operating model and decision rhythms.", deliverables: ["Custom diagnostic playbooks", "Industry benchmarks", "Bespoke audit workflows", "Embedded training"] },
    ],
  },
  predictive: {
    label: "Predictive", question: "What will happen?",
    short: "Forecast demand, detect risk early, and see what's coming before it lands.",
    steps: [
      { icon: "🗄️", title: "Data foundation", desc: "Feature stores, historical depth, and signal pipelines engineered for reliable ML.", deliverables: ["Feature store design", "Historical backfills", "Real-time signal pipelines", "Model-ready datasets"] },
      { icon: "🖥️", title: "Remote-control dashboard", desc: "Forecasts and risk scores live inside the executive cockpit — with scenarios you can toggle in one click.", deliverables: ["Forecast visualizations", "Scenario sliders", "Risk heatmaps", "Confidence intervals"] },
      { icon: "💡", title: "Curated insights", desc: "Forward-looking narratives mapped to vision and big goals — not just numbers leadership has to interpret.", deliverables: ["Forecast vs. plan deltas", "Early-warning briefings", "Opportunity sizing", "Strategic scenario reviews"] },
      { icon: "🤖", title: "AI executive agent", desc: "The agent runs simulations, stress-tests strategy, and walks executives through what each path implies.", deliverables: ["Scenario simulation", "What-if Q&A", "Risk monitoring", "Pro-active alerts"] },
      { icon: "⚙️", title: "Customized solution", desc: "Predictive models built on your data, calibrated to your business — not off-the-shelf scoring.", deliverables: ["Custom forecasting models", "Churn / retention models", "Fraud & risk scoring", "Predictive maintenance"] },
    ],
  },
  prescriptive: {
    label: "Prescriptive", question: "What should we do?",
    short: "Translate forecasts into the next best action — pricing, allocation, routing.",
    steps: [
      { icon: "🗄️", title: "Data foundation", desc: "Decision data — constraints, costs, policies — modeled so optimization actually runs in production.", deliverables: ["Constraint modeling", "Decision data contracts", "Action logging", "Closed-loop pipelines"] },
      { icon: "🖥️", title: "Remote-control dashboard", desc: "Recommendations surface where decisions happen — with one-click approval and traceable automation.", deliverables: ["Recommendation queues", "Approval workflows", "Automation rules", "Action audit trail"] },
      { icon: "💡", title: "Curated insights", desc: "Executive briefings that connect each recommended action back to vision, strategy, and measurable goals.", deliverables: ["Action → outcome reporting", "Strategy alignment scoring", "ROI of decisions", "Continuous learning loops"] },
      { icon: "🤖", title: "AI executive agent", desc: "The agent proposes the next best move, explains the trade-offs, and executes once approved.", deliverables: ["Next-best-action prompts", "Trade-off explanations", "Approval-gated execution", "Outcome tracking"] },
      { icon: "⚙️", title: "Customized solution", desc: "Optimization engines designed around your levers — pricing, supply chain, allocation, routing.", deliverables: ["Pricing & promotion optimization", "Supply chain optimization", "Resource allocation", "Recommendation engines"] },
    ],
  },
};
