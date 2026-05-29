import Link from "next/link";

const featuredCategories = [
  "Local makers",
  "Digital goods",
  "Curated services",
  "Verified vendors",
];

const metrics = [
  { label: "Launch-ready vendors", value: "120+" },
  { label: "Marketplace categories", value: "18" },
  { label: "Average setup time", value: "24h" },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071114] text-white">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(64,226,168,0.24),_transparent_32%),radial-gradient(circle_at_80%_20%,_rgba(255,184,107,0.18),_transparent_28%),linear-gradient(135deg,_#071114_0%,_#0b1d22_50%,_#122421_100%)]" />
        <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="grid size-11 place-items-center rounded-2xl bg-emerald-300 text-xl font-black text-slate-950 shadow-[0_0_32px_rgba(110,231,183,0.35)]">
              M
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200">
                Meridian
              </p>
              <p className="text-xs text-white/55">Marketplace</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/chat"
              className="hidden rounded-full border border-emerald-200/30 bg-emerald-200/10 px-5 py-2 text-sm font-medium text-emerald-100 transition hover:border-emerald-200/70 hover:bg-emerald-200/15 sm:inline-flex"
            >
              AI chat
            </Link>
            <a
              href="#vendors"
              className="rounded-full border border-white/15 px-5 py-2 text-sm font-medium text-white/85 transition hover:border-emerald-200/60 hover:text-emerald-100"
            >
              Join waitlist
            </a>
          </div>
        </nav>

        <div className="mx-auto grid max-w-7xl gap-12 pb-20 pt-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-28 lg:pt-28">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-200/20 bg-white/5 px-4 py-2 text-sm text-emerald-100 shadow-2xl shadow-emerald-950/20 backdrop-blur">
              The premium launchpad for modern commerce
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] text-white sm:text-6xl lg:text-7xl">
              Discover, launch, and scale your next marketplace.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
              Meridian Marketplace brings independent sellers, digital creators,
              and local service providers into one elegant storefront built for
              trust, discovery, and fast checkout.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/chat"
                className="rounded-full bg-emerald-300 px-7 py-4 text-center text-base font-bold text-slate-950 shadow-[0_18px_60px_rgba(110,231,183,0.26)] transition hover:bg-emerald-200"
              >
                Open AI chat
              </Link>
              <a
                href="#vendors"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-base font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
              >
                Start selling
              </a>
              <a
                href="#categories"
                className="rounded-full border border-white/15 px-7 py-4 text-center text-base font-semibold text-white transition hover:border-white/35 hover:bg-white/5"
              >
                Explore categories
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.07] p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="rounded-[1.5rem] bg-slate-950/80 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div>
                    <p className="text-sm text-white/50">Today&apos;s momentum</p>
                    <p className="text-2xl font-semibold">Vendor dashboard</p>
                  </div>
                  <span className="rounded-full bg-emerald-300/15 px-3 py-1 text-sm text-emerald-200">
                    Live
                  </span>
                </div>
                <div className="grid gap-3 py-5">
                  {["Handmade home", "AI prompt kits", "Brand strategy"].map(
                    (item, index) => (
                      <div
                        key={item}
                        className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.04] p-4"
                      >
                        <div>
                          <p className="font-medium">{item}</p>
                          <p className="text-sm text-white/45">
                            New order batch #{index + 41}
                          </p>
                        </div>
                        <p className="text-emerald-200">+{(index + 2) * 8}%</p>
                      </div>
                    ),
                  )}
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-emerald-300 to-amber-200 p-5 text-slate-950">
                  <p className="text-sm font-semibold uppercase tracking-[0.24em] opacity-70">
                    Gross volume
                  </p>
                  <p className="mt-2 text-4xl font-black">$84.2k</p>
                  <p className="mt-2 text-sm font-medium opacity-75">
                    Projected for launch cohort one
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="categories"
        className="border-y border-white/10 bg-white/[0.03] px-6 py-14 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {featuredCategories.map((category) => (
            <div
              key={category}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <p className="text-lg font-semibold">{category}</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Purpose-built merchandising, seller profiles, and discovery
                rails for high-intent shoppers.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="vendors" className="px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-200">
              Built for operators
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
              Everything you need before the first transaction.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-6"
              >
                <p className="text-3xl font-black text-emerald-200">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-slate-400">{metric.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
