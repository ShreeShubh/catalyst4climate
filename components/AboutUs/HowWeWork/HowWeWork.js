import Image from "next/image"
import React from "react"
import WeWork from "../WeWork/WeWork"

const HowWeWork = () => {
  return (
    <>
      <div className="bg-[#003C66] py-10 mt-28">
        <div className="max-w-screen-xl mx-auto flex flex-col gap-10 px-4 sm:px-6">
          <h2 className="text-4xl font-semibold text-white text-center">
            How We Work
          </h2>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-10">
            <h2 className="text-2xl text-white text-center font-semibold">
              Building Successful Collaborations for{" "}
              <br className="hidden md:block" /> Climate Adaptation
            </h2>
            <Image
              src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/climate4catalyst/public/aboutUs/map.png"
              width={614}
              height={307}
              alt="map"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl"
            />
          </div>
          <p className="text-2xl text-center text-white ">
            Our commitment is not just about individual projects; it’s about
            creating a resilient, interwoven network of support, where those in
            agriculture, technology, education, and more can immediately find
            connections within our community. By leveraging the work of Catalyst
            2030, we are building a profile-rich network with shared stories and
            strategies. Catalysts for Climate is a platform where every member
            can connect with a partner, ensuring that, together, we make the
            climate movement a force for tangible, global change.
          </p>
        </div>
      </div>

      <WeWork />
    </>
  )
}

export default HowWeWork
