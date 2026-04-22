# 🏦 Fintech Agent Demo

A production-quality demo of multi-agent AI orchestration for financial analysis. Built with **Next.js 14**, **TypeScript**, and **Tailwind CSS** — zero external API dependencies, works entirely offline with realistic mock data.

> **For Interviewers:** This demonstrates how I think about system architecture, agent orchestration patterns, and building UIs that make complex backend processes visible and understandable.

---

## 🎬 Live Demo

<!-- Replace with your Vercel URL after deploying -->
<!-- 🌐 [View Live Demo](https://your-vercel-url.vercel.app) -->

**Run locally in 30 seconds:**
```bash
npm install
npm run dev
# open http://localhost:3000
```

---

## 🏗️ Architecture

### Multi-Agent Orchestration Flow

```
User Clicks "Run Analysis"
         │
         ▼
┌─────────────────────┐
│   📋 Data Panel     │  ← Mock loan app + transaction data
│   (React State)     │
└─────────┬───────────┘
          │
          ▼
┌─────────────────────┐
│   🎯 Planner        │  ← Orchestrates agent execution sequence
│   (useState loop)   │
└─────────┬───────────┘
          │
    ┌─────┴─────┐
    ▼           ▼
┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐
│📊 Risk │→ │🛡️ Fraud│→ │🏷️ Categ│→ │📄 Report│
│Analyst │  │Detector│  │orizer  │  │Generator│
└────────┘  └────────┘  └────────┘  └────────┘
    │           │           │           │
    └───────────┴───────────┴───────────┘
                    │
                    ▼
          ┌─────────────────┐
          │  Results Panel  │  ← Stacked cards with agent outputs
          └─────────────────┘
```

### Why This Architecture?

- **Sequential execution** — Agents run in order because each builds on the previous (fraud detection needs raw data, report needs all findings)
- **State machine** — Each agent has `thinking` → `done` states, making async progress visible to users
- **Separation of concerns** — Agent logic lives in `src/lib/agents.ts`, UI lives in `src/app/page.tsx`, data lives in `src/lib/mockData.ts`
- **Zero dependencies** — No LLM API calls means the demo works offline, consistently, every time

---

## 📁 Project Structure

```
src/
├── lib/
│   ├── agents.ts         # Agent definitions, orchestration flow, simulated delays
│   └── mockData.ts       # Realistic fintech data (loans, transactions, risk profiles)
├── app/
│   ├── page.tsx          # Main UI: data panel, run button, agent result cards
│   ├── layout.tsx        # Root layout with metadata
│   └── globals.css       # Tailwind + dark theme (slate-950)
```

---

## ✨ What It Demonstrates

| Feature | Implementation | Why It Matters |
|---------|---------------|----------------|
| **Risk Analysis Agent** | Evaluates credit score, DTI, loan-to-income against underwriting thresholds | Shows domain knowledge of fintech risk models |
| **Fraud Detection Agent** | Flags wires by amount, geography, timing patterns | Demonstrates understanding of AML/fraud patterns |
| **Transaction Categorizer** | Breaks down spend by category, surfaces outliers | Shows data analysis and visualization thinking |
| **Report Generator** | Synthesizes all findings into executive summary | Proves I can build "last mile" UX that executives actually use |
| **Simulated Thinking** | Each agent has realistic delay (1-2s) with loading state | Makes AI feel real — critical for AI product demos |
| **Responsive Design** | Mobile-first grid layout | Recruiters check on phones; this passes |

---

## 🧠 Design Decisions

### Why Mock Data Instead of Real APIs?

1. **Consistency** — Every recruiter sees the same output, no variance from LLM hallucinations
2. **Reliability** — Works offline, no API key setup, no rate limits
3. **Speed** — Demo loads instantly, no latency from external calls
4. **Focus** — The code shows *architecture* and *UI patterns*, not API integration boilerplate

### Why Next.js 14 App Router?

- Server Components for static data rendering (the mock data panel)
- Client Components for interactive state (agent execution, animations)
- This is the exact pattern used in production AI dashboards

### Why Tailwind Dark Theme?

- Fintech tools universally use dark themes (traders stare at screens all day)
- Shows I understand domain-appropriate UX

---

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS
- **State:** React useState/useEffect
- **Data:** In-memory mock objects
- **Icons:** Emoji (zero dependency)

---

## 🚀 Future Enhancements

- [ ] Add a **Compliance Checker** agent for GDPR/SOC2 analysis
- [ ] Add **real-time websocket simulation** for live transaction streaming
- [ ] Add **export to PDF** for the executive summary
- [ ] Add **dark/light mode toggle**
- [ ] Connect to a real LLM API with RAG over financial documents

---

## 📝 For Interviewers

**What to ask me about this project:**

- *"How would you connect these mock agents to a real LLM?"* → I'd add an API route that streams responses via Server-Sent Events, maintaining the same agent orchestration flow but calling OpenAI/Claude/Kimi with retrieval-augmented generation over internal documents.
- *"How would you handle agent failures in production?"* → Retry with exponential backoff, fallback to cached responses, and surface degradation gracefully in the UI (partial results with retry button).
- *"Why separate agents instead of one big prompt?"* → Specialization. A fraud detector needs different reasoning than a report generator. Separate agents = better accuracy, easier debugging, and parallelization opportunities.

**What this proves I can do on day 1:**
- Build agent orchestration UIs that make AI outputs trustworthy and inspectable
- Design domain-appropriate mock data that passes the "smell test" with fintech engineers
- Ship clean, typed, tested React code
