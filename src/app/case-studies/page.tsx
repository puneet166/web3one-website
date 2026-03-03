export default function CaseStudiesPage() {
  return (
    <section className="py-32 px-6 max-w-6xl mx-auto space-y-20">

      <h1 className="text-5xl font-bold font-[var(--font-heading)]">
        Case Studies
      </h1>

      <div className="grid md:grid-cols-2 gap-12">

        <div className="bg-gray-100 dark:bg-white/5 p-8 rounded-2xl border border-gray-200 dark:border-white/10">
          <h3 className="text-2xl font-semibold">DeFi Platform</h3>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Built secure yield farming protocol on Polygon.
          </p>
        </div>

      </div>

    </section>
  )
}