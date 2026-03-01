"use client"

import CountUp from "react-countup"

export default function Stats() {
  return (
    <section className="py-20 bg-[#111827] text-center">
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        <div>
          <h3 className="text-4xl font-bold text-blue-400">
            <CountUp end={50} duration={3} />+
          </h3>
          <p className="text-gray-400">Blockchain Modules Built</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-400">
            <CountUp end={20} duration={3} />+
          </h3>
          <p className="text-gray-400">Projects Delivered</p>
        </div>

        <div>
          <h3 className="text-4xl font-bold text-blue-400">
            <CountUp end={5} duration={3} />+
          </h3>
          <p className="text-gray-400">Supported Networks</p>
        </div>
      </div>
    </section>
  )
}