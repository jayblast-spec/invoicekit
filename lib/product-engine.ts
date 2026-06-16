export type IntelligenceInput = { input?: string };

const product = {
  "repo": "InvoiceKit",
  "suite": "Professional Utility",
  "category": "Invoice operations",
  "audience": "freelancers, agencies, trades, and small businesses",
  "promise": "create invoices that look premium, track risk, and get paid faster",
  "inputLabel": "Client, work, amount, and payment terms",
  "placeholder": "Client: Green Cafe. Website refresh. $2,400. Due in 7 days.",
  "primary": "Build invoice",
  "gradient": "from-green-300 via-emerald-200 to-teal-300",
  "modules": [
    "Invoice builder",
    "Late-payment risk",
    "Payment terms advisor",
    "Reminder schedule",
    "Client ledger"
  ],
  "outputs": [
    "Invoice summary",
    "Payment terms",
    "Follow-up email",
    "Risk warning"
  ],
  "next": [
    "PDF invoice export",
    "Stripe payment links",
    "late-payment prediction",
    "client ledger memory"
  ]
} as const;

function score(text: string) {
  const length = text.trim().length;
  const diversity = new Set(text.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(/\s+/).filter(Boolean)).size;
  return Math.min(97, 48 + Math.floor(length / 7) + Math.min(28, diversity));
}

export function generateIntelligence({ input = '' }: IntelligenceInput) {
  const subject = input.trim() || product.placeholder;
  const confidence = score(subject);
  const urgency = confidence > 82 ? 'high' : confidence > 66 ? 'medium' : 'starter';
  return {
    product: product.repo,
    category: product.category,
    subject,
    confidence,
    urgency,
    executive_summary: product.promise,
    immediate_outputs: product.outputs.map((output, index) => ({
      title: output,
      detail: output + ' for: ' + subject,
      priority: index === 0 ? 'primary' : index === 1 ? 'supporting' : 'next'
    })),
    automation_plan: product.modules.map((module, index) => ({
      stage: index + 1,
      module,
      value: 'Automate ' + module.toLowerCase() + ' so ' + product.audience + ' can move faster with less manual work.'
    })),
    future_addons: product.next.map((addon, index) => ({
      name: addon,
      horizon: index < 2 ? 'v2' : 'v3',
      contributor_lane: index % 2 === 0 ? 'integration' : 'product intelligence'
    })),
    contributor_brief: 'Improve ' + product.repo + ' by making ' + product.category.toLowerCase() + ' easier for ' + product.audience + '.',
    generated_at: new Date().toISOString()
  };
}
