import Link from "next/link"
import React from "react"

const LocalSolutions = () => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="flex flex-col gap-8 items-center max-w-screen-xl mx-auto px-10">
        <h1 className="text-[#003C66] font-semibold text-2xl sm:text-4xl text-center">
          Local Solutions from the Global South:Changing the Narrative of{" "}
          <br className="hidden md:block" /> the Climate Debate
        </h1>
        <p className="text-xl text-center">
          Discover local innovations and practical solutions from organisations
          headed by Catalyst 2030 members
        </p>
        <Link
          href="https://catalyst2030.net/resources/local-solutions-from-the-global-south/"
          target="_blank"
        >
          <button className="px-9 py-3 bg-[#F16622] rounded-full text-white text-lg cursor-pointer hover:bg-[#FF7F3F] hover:shadow-lg transition duration-300 ease-in-out">
             Link to report
          </button>
        </Link>
      </div>
    </div>
  )
}

export default LocalSolutions
