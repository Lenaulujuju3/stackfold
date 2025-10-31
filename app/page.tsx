export default function Home() {
  return (
    <main>
      <header className="section border-b">
        <div className="container">
          <nav className="flex items-center justify-between py-4">
            <div className="text-xl font-semibold">StackFold</div>
            <div className="hidden md:flex gap-6 text-sm text-gray-600">
              <a href="#products">Products</a>
              <a href="#indices">Indices</a>
              <a href="#pricing">Pricing</a>
            </div>
            <a href="#request" className="btn btn-primary">Request Sample Cohort</a>
          </nav>
          <div className="py-10 md:py-16 grid md:grid-cols-2 gap-8">
            <div>
              <h1 className="h1">Consumer Demand Cohorts for High‑Performance Insurance Acquisition</h1>
              <p className="mt-4 subtle">ZIP-level segmentation, channel reachability, and activation‑ready audience cohorts built for call centers and direct‑response teams.</p>
              <div className="mt-6 flex gap-3">
                <a href="#request" className="btn btn-primary">Request Sample Cohort</a>
                <a href="#indices" className="btn btn-secondary">View Demand Indices</a>
              </div>
            </div>
            <div className="grid gap-3">
              <div className="card">ZIP Demand Heatmap (static placeholder)</div>
              <div className="grid grid-cols-2 gap-3">
                <div className="card">Senior Policy Cohort</div>
                <div className="card">Multi‑Line Upsell Cohort</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section id="products" className="section">
        <div className="container grid md:grid-cols-3 gap-4">
          <div className="card">
            <h3 className="h2">Demand Indices</h3>
            <p className="subtle mt-2">Market‑level scoring to locate geographic pockets of premium appetite & policy switch likelihood.</p>
          </div>
          <div className="card">
            <h3 className="h2">Activation Cohorts</h3>
            <p className="subtle mt-2">Structured, pre‑segmented consumer groups with phone/email/SMS readiness signals.</p>
          </div>
          <div className="card">
            <h3 className="h2">Managed Activation Infrastructure</h3>
            <p className="subtle mt-2">Compliant sending lanes, domain rotation, frequency caps, and opt‑out routing. You handle messaging; we handle delivery.</p>
          </div>
        </div>
      </section>

      <section id="indices" className="section border-t">
        <div className="container">
          <h2 className="h2">Insurance‑Focused Demand Models</h2>
          <p className="subtle mt-2">Final Expense / Medicare cohorts, life policy upsell groups, and P&C multi‑line opportunities — scored at ZIP‑level.</p>
        </div>
      </section>

      <section id="pricing" className="section border-t">
        <div className="container grid md:grid-cols-3 gap-4">
          <div className="card">
            <div className="text-sm font-semibold">Indices</div>
            <div className="subtle">Market intelligence access</div>
          </div>
          <div className="card">
            <div className="text-sm font-semibold">Activation Cohorts</div>
            <div className="subtle">Audience exports (CSV)</div>
          </div>
          <div className="card">
            <div className="text-sm font-semibold">Activation Infrastructure</div>
            <div className="subtle">Managed sending lanes</div>
          </div>
        </div>
      </section>

      <footer id="request" className="section border-t">
        <div className="container grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="h2">Request Sample Cohorts</h2>
            <p className="subtle mt-2">Tell us your state, desired policy line, and channel mix. We deliver a sample audience for validation.</p>
          </div>
          <form className="card grid gap-3" action="https://formspree.io/f/your-id" method="POST">
            <input name="email" placeholder="Work email" className="border rounded px-3 py-2" required/>
            <input name="vertical" placeholder="Policy line (FE/Medicare/Life/P&C)" className="border rounded px-3 py-2"/>
            <input name="geo" placeholder="States / ZIPs" className="border rounded px-3 py-2"/>
            <button className="btn btn-primary" type="submit">Request Samples</button>
          </form>
        </div>
      </footer>
    </main>
  );
}
