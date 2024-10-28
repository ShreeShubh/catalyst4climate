import Link from "next/link"
import React from "react"

const SolutionsPipeline = () => {
  return (
    <div className="bg-[#003C66] flex items-center justify-center mt-20">
      <div className="flex flex-col gap-8 items-center max-w-screen-xl mx-auto p-10">
        <p className="text-lg text-white text-center">
          Explore the Solutions Pipeline developed by social innovators across
          multiple countries. Our solutions cover a wide range of themes,
          including Social Well-being and Equity, Economic Development, Policy
          Advocacy and Governance, Environmental Sustainability, Disaster
          Resilience and Climate Adaptation, and other challenging areas.
        </p>
        <Link href="/our-solutions">
          <button className="px-9 py-3 bg-[#F16622] rounded-full text-white text-lg cursor-pointer hover:bg-[#FF7F3F] hover:shadow-lg transition duration-300 ease-in-out">
            Know more
          </button>
        </Link>
      </div>
    </div>
  )
}

export default SolutionsPipeline
