export interface Transaction {
  id: string;
  amount: number;
  merchant: string;
  category: string;
  timestamp: string;
  location: string;
  flagged?: boolean;
  riskScore?: number;
}

export interface LoanApp {
  id: string;
  applicant: string;
  income: number;
  amount: number;
  creditScore: number;
  debtToIncome: number;
}

export const transactions: Transaction[] = [
  { id: 'tx-001', amount: 12450.00, merchant: 'Wire Transfer Intl', category: 'transfer', timestamp: '2026-04-20T03:00:00Z', location: 'Moscow, RU' },
  { id: 'tx-002', amount: 42.50, merchant: 'Starbucks', category: 'food', timestamp: '2026-04-21T14:30:00Z', location: 'Austin, TX' },
  { id: 'tx-003', amount: 8999.99, merchant: 'CryptoExchange Pro', category: 'crypto', timestamp: '2026-04-21T02:15:00Z', location: 'Nicosia, CY' },
  { id: 'tx-004', amount: 125.00, merchant: 'Whole Foods', category: 'grocery', timestamp: '2026-04-21T18:00:00Z', location: 'Austin, TX' },
  { id: 'tx-005', amount: 25000.00, merchant: 'Shell Corp LLC', category: 'transfer', timestamp: '2026-04-21T04:00:00Z', location: 'Cayman Islands' },
];

export const loanApp: LoanApp = {
  id: 'loan-089',
  applicant: 'Sarah Chen',
  income: 72000,
  amount: 450000,
  creditScore: 640,
  debtToIncome: 0.42,
};
