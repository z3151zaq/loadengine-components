import { Button } from "@xxnnyy/ui";
import "./App.css";

const storybookUrl =
  import.meta.env.VITE_STORYBOOK_URL ??
  (import.meta.env.DEV ? "http://localhost:6006" : "/storybook/");

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M4.5 10h11m-4.5-4.5 4.5 4.5-4.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="m5.5 10.2 3 3 6-6.4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function App() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <a className="brand-lockup" href="https://www.loanengine.co/" aria-label="Loan Engine home">
          <span className="brand-mark" aria-hidden="true"><span>LE</span></span>
          <span className="brand-name">Loan Engine <span>Components</span></span>
        </a>

        <nav className="main-nav" aria-label="Main navigation">
          <a href="#library">Library</a>
          <a href="#principles">Principles</a>
          <a href="https://www.loanengine.co/" target="_blank" rel="noreferrer">Loan Engine <span aria-hidden="true">↗</span></a>
        </nav>

        <Button asChild size="sm" className="header-cta">
          <a href={storybookUrl} target="_blank" rel="noreferrer">Open Storybook <ArrowIcon /></a>
        </Button>
      </header>

      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> THE LOAN ENGINE UI LIBRARY</div>
          <h1>One connected system.<br /><span>Thoughtful building blocks.</span></h1>
          <p className="hero-description">
            An accessible React component library for the teams, deals, and workflows behind private lending — from enquiry to maturity.
          </p>
          <div className="hero-actions">
            <Button asChild size="lg">
              <a href={storybookUrl} target="_blank" rel="noreferrer">Explore all components <ArrowIcon /></a>
            </Button>
            <a className="text-link" href="https://www.loanengine.co/" target="_blank" rel="noreferrer">Discover Loan Engine <span aria-hidden="true">↗</span></a>
          </div>
          <div className="hero-meta">
            <span><CheckIcon /> React</span>
            <span><CheckIcon /> Radix UI</span>
            <span><CheckIcon /> Tailwind CSS</span>
          </div>
        </div>

        <div className="preview-wrap" aria-label="Example lending workspace interface">
          <div className="preview-glow" />
          <div className="workspace-card">
            <div className="workspace-topbar">
              <div className="workspace-brand"><span className="mini-mark">LE</span> Loan Engine <span className="workspace-divider">/</span> Workspace</div>
              <div className="avatar-stack"><span>AM</span><span>JS</span><i /></div>
            </div>
            <div className="workspace-body">
              <div className="workspace-heading">
                <div><span className="workspace-kicker">PRIVATE CREDIT OPERATIONS</span><h2>Good morning, Alex</h2><p>Here’s what’s moving across your lending book.</p></div>
                <Button size="sm"><span className="plus-mark">+</span> New deal</Button>
              </div>
              <div className="metric-row">
                <div className="metric-card"><span>Active deals</span><strong>24</strong><small><b>↑ 12%</b> this month</small></div>
                <div className="metric-card"><span>Loan book</span><strong>$48.2m</strong><small><b>↑ 8.4%</b> this quarter</small></div>
                <div className="metric-card"><span>Needs attention</span><strong>07</strong><small>3 due today</small></div>
              </div>
              <div className="deal-table">
                <div className="table-heading"><strong>Recent deals</strong><a href={storybookUrl} target="_blank" rel="noreferrer">View all <ArrowIcon /></a></div>
                <div className="deal-row table-labels"><span>DEAL</span><span>FACILITY</span><span>STAGE</span></div>
                <div className="deal-row"><span><i className="deal-icon deal-icon-purple">M</i><b>Marbury Construction</b></span><span>$3,750,000</span><em className="status status-review">Credit review</em></div>
                <div className="deal-row"><span><i className="deal-icon deal-icon-green">P</i><b>Portland Bridge</b></span><span>$1,280,000</span><em className="status status-ready">Documents ready</em></div>
              </div>
            </div>
          </div>
          <div className="floating-note"><span><CheckIcon /></span><div><b>Designed for real workflows</b><small>Clear, consistent, considered.</small></div></div>
        </div>
      </section>

      <section className="library-section" id="library">
        <div className="section-heading">
          <div><span className="section-kicker">BUILT FOR THE LENDING LIFECYCLE</span><h2>Made for the work behind every deal.</h2></div>
          <p>Purposeful interface foundations for borrower records, deal origination, document conditions, and active loan management.</p>
        </div>
        <div className="capability-grid">
          <article className="capability-card"><span className="cap-number">01</span><div className="cap-icon cap-icon-purple"><span className="people-icon">◎</span></div><h3>Connected records</h3><p>Keep borrowers, brokers, funders, and professionals connected to the deal.</p></article>
          <article className="capability-card"><span className="cap-number">02</span><div className="cap-icon cap-icon-lilac"><span className="deal-icon-symbol">↗</span></div><h3>Clear deal progress</h3><p>Make stages, conditions, approvals, and next actions easier to understand.</p></article>
          <article className="capability-card"><span className="cap-number">03</span><div className="cap-icon cap-icon-sand"><span className="document-icon">▤</span></div><h3>Confident operations</h3><p>Build consistent interfaces that reduce manual work and operational risk.</p></article>
        </div>
      </section>

      <section className="principles-section" id="principles">
        <div className="principles-copy">
          <span className="section-kicker">ONE SOURCE OF TRUTH</span>
          <h2>Consistent by design.<br />Flexible in your hands.</h2>
          <p>Built with accessible primitives and shared design tokens. Install the package for a maintained API, or use the shadcn registry to bring component source into your project.</p>
          <a className="text-link purple-link" href={storybookUrl} target="_blank" rel="noreferrer">Read the component stories <ArrowIcon /></a>
        </div>
        <div className="principle-list">
          <div><span>01</span><p><b>Accessible foundations</b><small>Keyboard-friendly interactions with Radix UI primitives.</small></p><CheckIcon /></div>
          <div><span>02</span><p><b>Shared visual language</b><small>Consistent components and theme tokens across products.</small></p><CheckIcon /></div>
          <div><span>03</span><p><b>Built for extension</b><small>Use the public API or adapt the source to your needs.</small></p><CheckIcon /></div>
        </div>
      </section>

      <footer className="site-footer">
        <a className="brand-lockup" href="https://www.loanengine.co/">
          <span className="brand-mark" aria-hidden="true"><span>LE</span></span>
          <span className="brand-name">Loan Engine <span>Components</span></span>
        </a>
        <p>A considered UI foundation for private lending.</p>
        <a href="https://www.loanengine.co/" target="_blank" rel="noreferrer">loanengine.co <span aria-hidden="true">↗</span></a>
      </footer>
    </main>
  );
}

export default App;
