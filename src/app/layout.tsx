import './globals.css';
export const metadata = { title: 'Fintech Agent Demo', description: 'AI agents for financial analysis' };
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}
