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

const dashboardItems = ["Handmade home", "AI prompt kits", "Brand strategy"];

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative isolate px-6 py-8 sm:px-10 lg:px-16">
        {/* Brand glows rendered as translucent emerald/amber over the themed
            background, so they read well in both light and dark modes. */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_34%),radial-gradient(circle_at_80%_15%,_rgba(245,158,11,0.12),_transparent_30%)]" />
        <div className="absolute left-1/2 top-10 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl gap-12 pb-20 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:pb-28 lg:pt-20">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-700 dark:text-emerald-200">
              The premium launchpad for modern commerce
            </div>
            <h1 className="max-w-4xl text-5xl font-semibold tracking-[-0.05em] sm:text-6xl lg:text-7xl">
              Discover, launch, and scale your next marketplace.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Meridian Marketplace brings independent sellers, digital creators,
              and local service providers into one elegant storefront built for
              trust, discovery, and fast checkout.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/chat"
                className="rounded-full bg-emerald-500 px-7 py-4 text-center text-base font-bold text-white shadow-[0_18px_60px_rgba(16,185,129,0.26)] transition hover:bg-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background dark:bg-emerald-400 dark:text-slate-950 dark:hover:bg-emerald-300"
              >
                Open AI chat
              </Link>
              <a
                href="#vendors"
                className="rounded-full border border-border px-7 py-4 text-center text-base font-semibold text-foreground transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Start selling
              </a>
              <a
                href="#categories"
                className="rounded-full border border-border px-7 py-4 text-center text-base font-semibold text-foreground transition hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                Explore categories
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-border bg-card/70 p-4 shadow-2xl shadow-black/10 backdrop-blur-xl dark:shadow-black/40">
              <div className="rounded-[1.5rem] border border-border bg-muted/40 p-5">
                <div className="flex items-center justify-between border-b border-border pb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Today&apos;s momentum
                    </p>
                    <p className="text-2xl font-semibold">Vendor dashboard</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-200">
                    Live
                  </span>
                </div>
                <div className="grid gap-3 py-5">
                  {dashboardItems.map((item, index) => (
                    <div
                      key={item}
                      className="flex items-center justify-between rounded-2xl border border-border bg-card p-4"
                    >
                      <div>
                        <p className="font-medium">{item}</p>
                        <p className="text-sm text-muted-foreground">
                          New order batch #{index + 41}
                        </p>
                      </div>
                      <p className="font-semibold text-emerald-600 dark:text-emerald-300">
                        +{(index + 2) * 8}%
                      </p>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl bg-gradient-to-br from-emerald-400 to-amber-300 p-5 text-slate-950">
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
        className="scroll-mt-20 border-y border-border bg-muted/40 px-6 py-14 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {featuredCategories.map((category) => (
            <div
              key={category}
              className="rounded-3xl border border-border bg-card p-6 transition hover:border-emerald-500/40"
            >
              <p className="text-lg font-semibold">{category}</p>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                Purpose-built merchandising, seller profiles, and discovery
                rails for high-intent shoppers.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="vendors"
        className="scroll-mt-20 px-6 py-20 sm:px-10 lg:px-16"
      >
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-emerald-600 dark:text-emerald-300">
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
                className="rounded-3xl border border-border bg-card p-6"
              >
                <p className="text-3xl font-black text-emerald-600 dark:text-emerald-300">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {metric.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
