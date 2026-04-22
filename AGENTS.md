# 🤖 Kimi Code AI Agent Team

This project was built and is maintained by a multi-agent AI team using **Kimi Code** (Moonshot AI). Each agent has a specialized role and collaborates through structured handoffs.

## Agent Team

| Agent | Role | Responsibility |
|-------|------|----------------|
| **🎯 Planner** | Product Manager | Breaks down fintech features into implementable tasks, defines mock data schemas, and specifies agent interaction flows |
| **💻 Coder** | Full-Stack Engineer | Implements React components, TypeScript types, agent orchestration logic, and UI state management |
| **🧪 Tester** | QA Engineer | Writes Playwright/Cypress tests, validates mock data accuracy against real fintech patterns, ensures responsive design |
| **🔍 Reviewer** | Tech Lead | Reviews code for TypeScript strictness, accessibility, performance, and fintech domain accuracy |

## How We Collaborate

```
User Request → Planner (task breakdown + mock data spec)
     ↓
Coder (implementation) ↔ Reviewer (PR feedback)
     ↓
Tester (E2E + visual regression)
     ↓
Ship 🚀
```

## Agent Prompts

### Planner Agent Prompt
```
You are a Fintech Product Manager. Break down this feature request into:
1. Mock data schema (realistic loan apps, transactions, risk scores)
2. Agent interaction flow (which agent runs when, what data passes between)
3. UI component hierarchy
4. Edge cases to handle
```

### Coder Agent Prompt
```
You are a Full-Stack Engineer specializing in Next.js 14 + TypeScript.
Implement the feature using:
- App Router with client components where needed
- Strict TypeScript (no any)
- Tailwind CSS for styling
- Mock data only — no external API calls
```

### Tester Agent Prompt
```
You are a QA Engineer. Write tests that verify:
- Agent steps render in correct order
- Mock data displays accurately
- UI is responsive on mobile/desktop
- No console errors during execution
```

### Reviewer Agent Prompt
```
You are a Tech Lead reviewing fintech demo code. Check for:
- Realistic mock data (plausible amounts, locations, company names)
- Accessible UI (ARIA labels, keyboard navigation)
- Performance (no unnecessary re-renders)
- Clean component separation
```

## Adding New Agents

To add a new fintech agent (e.g., "Compliance Checker"):

1. **Planner**: Define input/output schema and where it fits in the orchestration flow
2. **Coder**: Add agent to `src/lib/agents.ts` with system prompt and mock response
3. **Tester**: Add E2E test verifying new agent renders and produces output
4. **Reviewer**: Validate compliance terminology and regulatory accuracy

## Running the Agent Team

```bash
# Planner generates task list
kimi "Add a Credit Score Simulator agent to the fintech demo"

# Coder implements
kimi --task "implement-credit-score-agent"

# Tester validates
kimi --task "test-credit-score-agent"

# Reviewer approves
kimi --task "review-credit-score-agent"
```
