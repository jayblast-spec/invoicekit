export type IntelligenceInput = { input?: string };
const product = {
  "repo": "InvoiceKit",
  "suite": "Professional Utility",
  "domain": "Payment operations",
  "accent": "from-green-300 via-emerald-200 to-teal-300",
  "hero": "Create invoices that look premium and push payment forward.",
  "sub": "InvoiceKit helps freelancers, agencies, trades, and small businesses create polished invoices, detect payment risk, plan reminders, and maintain a client ledger.",
  "input": "Client Green Cafe, website refresh, $2,400, 50% deposit paid, balance due in 7 days",
  "cta": "Build payment plan",
  "score": "Payment readiness",
  "modules": [
    [
      "Invoice builder",
      "Create clear line items, terms, tax notes, and payment instructions."
    ],
    [
      "Payment risk",
      "Flag late-payment patterns and vague terms."
    ],
    [
      "Reminder schedule",
      "Plan professional follow-ups before the invoice becomes overdue."
    ],
    [
      "Client ledger",
      "Remember work, payments, promises, and disputes."
    ]
  ],
  "rows": [
    [
      "Deposit invoice",
      "Cash flow",
      "High",
      "Clarify what is due now and what unlocks the next phase."
    ],
    [
      "Final invoice",
      "Delivery",
      "Medium",
      "Tie payment to accepted deliverables."
    ],
    [
      "Late reminder",
      "Recovery",
      "High",
      "Follow up without damaging the relationship."
    ],
    [
      "Client ledger",
      "Memory",
      "Medium",
      "Track trust, terms, and future pricing."
    ]
  ],
  "missions": [
    [
      "PDF invoice export",
      "Generate polished downloadable invoices."
    ],
    [
      "Stripe payment links",
      "Let clients pay immediately."
    ],
    [
      "Late-payment predictor",
      "Score risk before work begins."
    ],
    [
      "Client memory",
      "Remember terms, disputes, and payment behavior."
    ]
  ]
} as const;
function scoreFor(subject: string) { let score = 57 + Math.min(30, Math.floor(subject.length / 6)); if (/risk|urgent|investor|client|payment|contract|meeting|decision|launch|proof|delay/i.test(subject)) score += 7; return Math.min(98, score); }
function band(score: number) { return score >= 86 ? 'strong' : score >= 72 ? 'ready' : score >= 60 ? 'needs review' : 'starter'; }
export function generateIntelligence({ input = '' }: IntelligenceInput) {
  const subject = input.trim() || product.input;
  const score = scoreFor(subject);
  return {
    product: product.repo,
    brand: 'ArkNet Digital',
    suite: product.suite,
    domain: product.domain,
    subject,
    score,
    status: band(score),
    executive_summary: product.sub,
    intelligence_map: product.modules.map(([label, value]) => ({ label, value, status: score >= 72 ? 'priority' : 'review' })),
    action_queue: product.rows.slice(0, 3).map(([item, owner, priority, note]) => ({ action: item + ' - ' + owner, priority, impact: note })),
    contributor_lanes: product.missions.map(([lane, mission]) => ({ lane, mission })),
    generated_at: new Date().toISOString()
  };
}
