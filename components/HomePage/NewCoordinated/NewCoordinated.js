import React from "react"
import SocialInnovators from "./SocialInnovators/SocialInnovators"

const NewCoordinated = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-10 sm:mt-20 px-4 sm:px-0">
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
        <div className="flex flex-col gap-4 sm:gap-5 sm:w-1/2">
          <h1 className="text-[#003C66] font-semibold text-2xl sm:text-4xl">
            A New Coordinated Approach Led by Social Innovators
          </h1>
          <p className="text-[#003862] text-base sm:text-lg font-light">
            <strong>Catalysts for Climate:</strong> A collective of key Climate
            Action players, led by social innovators from the Global South.
            Equipped with 70+ evidence-backed, community-centred solutions to
            climate change that are ready to scale globally, this collective is
            building the sector with solutions at its centre.
          </p>
        </div>
        <div className="w-full sm:w-auto">
          <SocialInnovators />
        </div>
      </div>
    </div>
  )
}

export default NewCoordinated
