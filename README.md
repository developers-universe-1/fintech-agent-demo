# 🏦 Fintech Agent Demo

A mock AI agent demo for fintech interviews. No external APIs — all data is simulated. Shows how multi-agent systems could analyze loans, detect fraud, and categorize transactions.

## What It Demonstrates

- **Risk Analysis Agent** — Evaluates loan applications against underwriting rules
- **Fraud Detection Agent** — Flags anomalous transactions based on amount, geography, and timing
- **Transaction Categorizer** — Breaks down spending patterns and surfaces outliers
- **Report Generator** — Synthesizes all findings into an executive summary

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Mock data only — zero API dependencies

## Run Locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

## For Interviewers

This is a frontend demo showing agent orchestration UI patterns. In production, each agent would connect to an LLM API (OpenAI, Claude, etc.) with retrieval-augmented generation over internal documents.

The mock responses simulate realistic fintech outputs you'd expect from AI agents in production.
