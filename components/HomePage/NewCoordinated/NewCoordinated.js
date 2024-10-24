import React from "react"
import SocialInnovators from "./SocialInnovators/SocialInnovators"

const NewCoordinated = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex gap-10">
        <div className="flex flex-col gap-5 w-1/2">
          <h1 className="text-[#003C66] font-semibold text-4xl">
            A New Coordinated Approach Led by Social Innovators
          </h1>
          <p className="text-[#003862] text-lg font-light">
            <strong>Catalysts for Climate:</strong> A collective of key Climate
            Action players, led by social innovators from the Global South.
            Equipped with 70+ evidence-backed, community-centred solutions to
            climate change that are ready to scale globally, this collective is
            building the sector with solutions at its centre.
          </p>
        </div>
        <div>
          <SocialInnovators />
        </div>
      </div>
    </div>
  )
}

export default NewCoordinated
