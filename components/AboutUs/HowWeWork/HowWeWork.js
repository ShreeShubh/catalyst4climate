import Image from "next/image"
import React from "react"
import WeWork from "../WeWork/WeWork"

const HowWeWork = () => {
  return (
    <>
      <div className="bg-[#003C66] py-10 mt-28">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10">
          <h2 className="text-4xl font-semibold text-white text-center">
            How We Work
          </h2>
          <div className="flex justify-between items-center">
            <p className="text-2xl text-white text-center">
              Building Successful Collaborations for <br /> Climate Adaptation.
            </p>
            <Image src="/aboutUs/map.png" width={614} height={307} alt="map" />
          </div>
          <p className="text-2xl text-center text-white font-light">
            A successful collaboration of this nature hinges on a collective
            tapestry of qualifications and success factors. Beyond our
            geographic reach with existing solutions, we have demonstrated
            leadership and expertise in working and engaging within the region.
            In addition to this, our work has already generated significant
            impact, and our vast experience makes us adaptable and responsive to
            the changing landscape of climate adaptation and mitigation.
          </p>
        </div>
      </div>
      <WeWork />
    </>
  )
}

export default HowWeWork
