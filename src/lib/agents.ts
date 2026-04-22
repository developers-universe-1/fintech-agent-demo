export interface AgentStep {
  agent: string;
  icon: string;
  status: 'thinking' | 'done';
  input: string;
  output: string;
  delay: number;
}

export function runFintechAgents(): AgentStep[] {
  return [
    {
      agent: 'Risk Analyst',
      icon: '📊',
      status: 'thinking',
      input: 'Analyzing loan application #loan-089 — Sarah Chen, $450K request, credit score 640, DTI 42%',
      output: `RISK ASSESSMENT — Loan #loan-089
• Credit Score: 640 (Below prime threshold of 680)
• Debt-to-Income: 42% (Exceeds 36% guideline)
• Loan-to-Income: 6.25x (High — typical max is 4x)
• Verdict: ELEVATED RISK — Recommend manual underwriting review`,
      delay: 1500,
    },
    {
      agent: 'Fraud Detector',
      icon: '🛡️',
      status: 'thinking',
      input: 'Scanning 5 transactions for anomalous patterns',
      output: `FRAUD ALERTS — 2 transactions flagged
🔴 tx-001: $12,450 wire transfer to Moscow at 3AM — unusual time + high-risk geography
🔴 tx-005: $25,000 transfer to Shell Corp in Cayman Islands — shell company pattern + offshore jurisdiction
🟢 tx-003: Crypto exchange flagged for monitoring (below auto-block threshold)`,
      delay: 2000,
    },
    {
      agent: 'Transaction Categorizer',
      icon: '🏷️',
      status: 'thinking',
      input: 'Categorizing uncategorized transactions for spend analysis',
      output: `SPEND BREAKDOWN
💰 Transfers:     $37,450 (97.1%) — 2 tx — FLAGGED
🍔 Food & Bev:    $42.50  (0.1%)  — 1 tx
₿ Crypto:         $8,999.99 (23.3% of non-transfer) — 1 tx
🛒 Grocery:       $125.00 (0.3%)  — 1 tx

⚠️  Transfer volume is 400x typical consumer baseline`,
      delay: 1200,
    },
    {
      agent: 'Report Generator',
      icon: '📄',
      status: 'thinking',
      input: 'Synthesizing all agent outputs into executive summary',
      output: `EXECUTIVE SUMMARY
Account Status: UNDER REVIEW

1. Loan Application: Decline recommended pending income verification and co-signer.
2. Transaction Activity: Freeze recommended on outbound transfers pending KYC re-verification.
3. Next Steps: Compliance review within 24hrs; notify customer of documentation request.

Generated: ${new Date().toLocaleString()}`,
      delay: 1800,
    },
  ];
}
