'use client';

import { useState, useEffect } from 'react';
import { runFintechAgents, AgentStep } from '@/lib/agents';
import { transactions, loanApp } from '@/lib/mockData';

export default function Home() {
  const [steps, setSteps] = useState<AgentStep[]>([]);
  const [running, setRunning] = useState(false);
  const [complete, setComplete] = useState(false);

  async function startDemo() {
    setRunning(true);
    setComplete(false);
    const agentSteps = runFintechAgents();
    setSteps(agentSteps);

    for (let i = 0; i < agentSteps.length; i++) {
      await new Promise((r) => setTimeout(r, agentSteps[i].delay));
      setSteps((prev) =>
        prev.map((s, idx) => (idx === i ? { ...s, status: 'done' } : s))
      );
    }
    setRunning(false);
    setComplete(true);
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-2">🏦 Fintech Agent Demo</h1>
        <p className="text-slate-400">Mock AI agents analyzing financial data</p>
      </header>

      {/* Mock Data Panel */}
      <section className="grid md:grid-cols-2 gap-4 mb-8">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Loan Application</h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-slate-500">Applicant</span><span>{loanApp.applicant}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Amount</span><span>${loanApp.amount.toLocaleString()}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">Credit Score</span><span className={loanApp.creditScore < 680 ? 'text-red-400' : ''}>{loanApp.creditScore}</span></div>
            <div className="flex justify-between"><span className="text-slate-500">DTI Ratio</span><span className={loanApp.debtToIncome > 0.36 ? 'text-red-400' : ''}>{(loanApp.debtToIncome * 100).toFixed(0)}%</span></div>
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wide mb-3">Recent Transactions</h2>
          <div className="space-y-2 text-sm">
            {transactions.map((t) => (
              <div key={t.id} className="flex justify-between items-center">
                <span className="truncate max-w-[120px]" title={t.merchant}>{t.merchant}</span>
                <span className={t.amount > 5000 ? 'text-red-400 font-medium' : ''}>${t.amount.toLocaleString()}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Run Button */}
      <div className="text-center mb-10">
        <button
          onClick={startDemo}
          disabled={running}
          className="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 rounded-lg font-semibold transition-colors"
        >
          {running ? 'Analyzing...' : complete ? '▶️ Run Analysis Again' : '▶️ Run Agent Analysis'}
        </button>
      </div>

      {/* Agent Steps */}
      {steps.length > 0 && (
        <div className="space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
              <div className="px-5 py-4 flex items-center gap-3 border-b border-slate-800">
                <span className="text-xl">{step.icon}</span>
                <span className="font-semibold">{step.agent}</span>
                {step.status === 'thinking' ? (
                  <span className="ml-auto text-xs bg-amber-500/20 text-amber-400 px-2 py-1 rounded-full animate-pulse">Analyzing...</span>
                ) : (
                  <span className="ml-auto text-xs bg-emerald-500/20 text-emerald-400 px-2 py-1 rounded-full">Complete</span>
                )}
              </div>

              <div className="px-5 py-4 space-y-3">
                <div>
                  <span className="text-xs text-slate-500 uppercase tracking-wide">Input</span>
                  <p className="text-sm text-slate-400 mt-1">{step.input}</p>
                </div>
                {step.status === 'done' && (
                  <div>
                    <span className="text-xs text-slate-500 uppercase tracking-wide">Output</span>
                    <pre className="mt-1 text-sm text-slate-300 whitespace-pre-wrap font-mono leading-relaxed bg-slate-950 p-3 rounded-lg border border-slate-800">
                      {step.output}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
