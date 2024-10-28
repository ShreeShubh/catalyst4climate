import Link from "next/link"
import React from "react"

const ClimateAction = () => {
  return (
    <div className="bg-[#D6EFFF] flex items-center justify-center mt-20">
      <div className="flex flex-col gap-5 items-center max-w-screen-xl mx-auto p-10">
        <h1 className="text-[#003C66] font-semibold text-2xl sm:text-4xl text-center">
          Climate Action for Sustainable Development
        </h1>

        <div className="w-full my-5">
          <video
            src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/climate4catalyst/Catalys4Climate+Video.mp4"
            controls
            className="w-full h-auto rounded-lg"
          />
        </div>

        <p className="text-xl text-center">
          Nigar Arpadarai, Member of Parliament of the Republic of Azerbaijan;
          UN Climate Change High-Level Champion for COP29
        </p>

        <p className="text-xl text-center">Find her LinkedIn profile here</p>

        <Link
          href="https://www.linkedin.com/in/arpadarainigar/?originalSubdomain=az"
          target="_blank"
        >
          <button className="flex items-center gap-2 px-9 py-3 bg-[#F16622] rounded-full text-white text-lg cursor-pointer hover:bg-[#FF7F3F] hover:shadow-lg transition duration-300 ease-in-out">
            <img
              src="/home/linkedin.svg"
              alt="LinkedIn icon"
              className="w-5 h-5"
            />
            Click here
          </button>
        </Link>
      </div>
    </div>
  )
}

export default ClimateAction
