export default function MATGAUSALandingPage() {
  return (
    <div className="min-h-screen bg-[#f6f2e8] text-[#183b2b]">
      <section className="relative overflow-hidden border-b border-[#d8d1c2] bg-[radial-gradient(circle_at_top,_rgba(34,92,64,0.08),_transparent_45%),linear-gradient(to_bottom,_#f7f3eb,_#f2ede2)]">
        <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(24,59,43,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(24,59,43,0.05)_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="relative mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-[#cfc6b5] bg-white/70 px-4 py-2 text-sm font-medium text-[#315844] shadow-sm backdrop-blur">
                MATGA USA · Rebuilding American Cotton Manufacturing
              </div>
              <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-[#173d2d] md:text-6xl md:leading-[1.05]">
                The American Cotton Value Chain, Rebuilt at Home.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#4e5f53] md:text-xl">
                From Arizona and California cotton farms to a Yuma spinning hub and Los Angeles apparel manufacturing,
                MATGA USA reconnects agriculture, industry, and jobs into one modern domestic supply chain.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#value-chain"
                  className="rounded-2xl bg-[#1d4d38] px-6 py-3 text-base font-semibold text-white shadow-lg shadow-[#1d4d38]/20 transition hover:-translate-y-0.5"
                >
                  Explore the Model
                </a>
                <a
                  href="#impact"
                  className="rounded-2xl border border-[#c6baa4] bg-white/80 px-6 py-3 text-base font-semibold text-[#173d2d] shadow-sm transition hover:bg-white"
                >
                  View Economic Impact
                </a>
              </div>
              <div className="mt-10 grid max-w-3xl gap-4 sm:grid-cols-3">
                {[
                  ['Arizona & California Farms', '$1.65/lb'],
                  ['Yuma Spinning Hub', '$3.00/lb'],
                  ['Los Angeles Apparel', '$4.50/lb'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-2xl border border-[#d9d0bf] bg-white/75 p-4 shadow-sm backdrop-blur">
                    <div className="text-sm font-medium uppercase tracking-[0.18em] text-[#6b756d]">{label}</div>
                    <div className="mt-2 text-3xl font-bold text-[#173d2d]">{value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-[#ddd3c2] bg-white/80 p-4 shadow-2xl shadow-[#173d2d]/10 backdrop-blur">
                <div className="overflow-hidden rounded-[1.5rem] bg-[#ece6d8]">
                  <div className="grid gap-2 md:grid-cols-3">
                    <div className="relative min-h-[360px] bg-[linear-gradient(to_top,rgba(23,61,45,0.5),rgba(23,61,45,0.05)),linear-gradient(135deg,#cba46b,#f5e6c8)] p-5 text-white">
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-[radial-gradient(circle_at_center,#fff_0_10%,transparent_10%),radial-gradient(circle_at_20%_70%,#fff_0_9%,transparent_9%),radial-gradient(circle_at_70%_65%,#fff_0_8%,transparent_8%),radial-gradient(circle_at_40%_40%,#fff_0_7%,transparent_7%)] opacity-70" />
                      <div className="relative flex h-full flex-col justify-between">
                        <div className="text-sm font-semibold uppercase tracking-[0.22em]">Origin</div>
                        <div>
                          <div className="text-2xl font-bold leading-tight">Arizona & California Cotton Farms</div>
                          <div className="mt-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">$1.65/lb</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative min-h-[360px] bg-[linear-gradient(to_top,rgba(23,61,45,0.55),rgba(23,61,45,0.15)),linear-gradient(135deg,#9aa7a1,#e9efee)] p-5 text-white">
                      <div className="absolute inset-0 opacity-30 [background-image:repeating-linear-gradient(90deg,transparent,transparent_22px,rgba(255,255,255,0.75)_22px,rgba(255,255,255,0.75)_25px)]" />
                      <div className="relative flex h-full flex-col justify-between">
                        <div className="text-sm font-semibold uppercase tracking-[0.22em]">Transformation</div>
                        <div>
                          <div className="text-2xl font-bold leading-tight">Yuma Spinning Hub</div>
                          <div className="mt-3 inline-flex rounded-full bg-[#d89624] px-3 py-1 text-sm font-semibold text-white">$3.00/lb</div>
                        </div>
                      </div>
                    </div>
                    <div className="relative min-h-[360px] bg-[linear-gradient(to_top,rgba(23,61,45,0.6),rgba(23,61,45,0.08)),linear-gradient(135deg,#d7dde4,#fafcfd)] p-5 text-white">
                      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,transparent_0_74%,rgba(255,255,255,0.9)_74%_75%,transparent_75%_100%)]" />
                      <div className="relative flex h-full flex-col justify-between">
                        <div className="text-sm font-semibold uppercase tracking-[0.22em]">Finished Goods</div>
                        <div>
                          <div className="text-2xl font-bold leading-tight">Los Angeles Apparel Manufacturing</div>
                          <div className="mt-3 inline-flex rounded-full bg-[#a13434] px-3 py-1 text-sm font-semibold text-white">$4.50/lb</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-center gap-3 text-sm font-semibold text-[#5a665d]">
                  <span>Farm</span>
                  <span>→</span>
                  <span>Spin</span>
                  <span>→</span>
                  <span>Manufacture</span>
                  <span>→</span>
                  <span>Made in USA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="value-chain" className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="text-sm font-bold uppercase tracking-[0.24em] text-[#52735f]">Master Graphic Narrative</div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">A domestic supply chain with visible value creation at each step.</h2>
          <p className="mt-5 text-lg leading-8 text-[#55655b]">
            The model is simple: keep more of the cotton value chain in the United States, anchor spinning capacity in Yuma,
            and connect that output directly to American textile and apparel production.
          </p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {[
            {
              step: '01',
              title: 'Cotton Farms',
              subtitle: 'Arizona & California',
              body: 'Premium cotton begins with American growers. The initiative starts by preserving farm value instead of exporting raw potential overseas.',
              badge: '$1.65/lb',
              tone: 'from-[#d3a76d] to-[#f5ead0]',
            },
            {
              step: '02',
              title: 'Yuma Spinning Hub',
              subtitle: 'Domestic yarn production',
              body: 'Yuma becomes the strategic middle layer—turning raw fiber into domestic yarn, creating industrial jobs and strengthening regional manufacturing capacity.',
              badge: '$3.00/lb',
              tone: 'from-[#9aa7a1] to-[#edf1ef]',
            },
            {
              step: '03',
              title: 'Apparel Manufacturing',
              subtitle: 'Los Angeles production network',
              body: 'Finished yarn flows into American textile and apparel manufacturing, increasing domestic value capture and enabling Made in USA finished goods.',
              badge: '$4.50/lb',
              tone: 'from-[#dfe5ea] to-[#fbfcfd]',
            },
          ].map((item) => (
            <div key={item.step} className="rounded-[2rem] border border-[#d9d0bf] bg-white p-6 shadow-lg shadow-[#173d2d]/5">
              <div className={`rounded-[1.5rem] bg-gradient-to-br ${item.tone} p-6`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#486252]">Step {item.step}</div>
                  <div className="rounded-full bg-[#173d2d] px-3 py-1 text-sm font-semibold text-white">{item.badge}</div>
                </div>
                <div className="mt-20 h-28 rounded-2xl border border-white/40 bg-white/20 backdrop-blur" />
              </div>
              <h3 className="mt-6 text-2xl font-bold text-[#173d2d]">{item.title}</h3>
              <div className="mt-1 text-base font-semibold text-[#56715f]">{item.subtitle}</div>
              <p className="mt-4 leading-7 text-[#59685f]">{item.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#d7cfbf] bg-white p-6 shadow-lg shadow-[#173d2d]/5 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h3 className="text-2xl font-bold md:text-3xl">Why Yuma is the pivot point</h3>
              <p className="mt-4 leading-8 text-[#58675e]">
                Yuma sits between cotton production and downstream apparel manufacturing. That makes it a natural domestic yarn hub—one that can convert agricultural output into industrial output, jobs, and regional resilience.
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[#d7cfbf] bg-[#f4efe4] p-6">
              <div className="text-sm font-bold uppercase tracking-[0.2em] text-[#5b7161]">Value Chain Flow</div>
              <div className="mt-4 space-y-4">
                {['Farm Output', 'Yarn Conversion', 'Apparel Manufacturing', 'Made in USA Products'].map((label, idx) => (
                  <div key={label} className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#173d2d] text-sm font-bold text-white">{idx + 1}</div>
                    <div className="flex-1 rounded-full bg-white px-4 py-3 font-semibold text-[#234735] shadow-sm">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="impact" className="border-y border-[#d8d1c2] bg-white/70">
        <div className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.24em] text-[#52735f]">Economic Impact</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">From crisis to cotton comeback.</h2>
              <p className="mt-5 text-lg leading-8 text-[#55655b]">
                This initiative is more than a factory proposal. It is a framework for restoring agricultural value,
                rebuilding domestic spinning capacity, and supplying American-made textile and apparel production with a strategic domestic yarn source.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ['Farm Value Retention', 'Keep more value in the U.S. from the first step of the chain.'],
                ['Industrial Job Creation', 'Anchor new manufacturing employment in Yuma.'],
                ['Supply Chain Resilience', 'Reduce dependence on offshore spinning and long lead times.'],
                ['Made in USA Growth', 'Support domestic apparel programs with traceable yarn.'],
              ].map(([title, body]) => (
                <div key={title} className="rounded-[1.5rem] border border-[#d9d0bf] bg-[#f8f4eb] p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-[#173d2d]">{title}</h3>
                  <p className="mt-2 leading-7 text-[#59685f]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
        <div className="rounded-[2rem] bg-[#173d2d] px-8 py-12 text-white md:px-12 md:py-16">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">MATGA USA</div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-5xl">Build the next chapter of American cotton manufacturing.</h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-white/80">
                Position Yuma as the domestic spinning bridge between American agriculture and Made in USA apparel.
                Use this landing page as the foundation for your investor pitch, public initiative page, or economic development presentation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 lg:justify-end">
              <a href="#" className="rounded-2xl bg-white px-6 py-3 text-base font-semibold text-[#173d2d] transition hover:-translate-y-0.5">
                Request Briefing
              </a>
              <a href="#value-chain" className="rounded-2xl border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10">
                Review Value Chain
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
