import React from "react"
import { Header } from "../Header/Header"
import ClimateChange from "./ClimateChange/ClimateChange"
import NewCoordinated from "./NewCoordinated/NewCoordinated"
import SolutionsPipeline from "./SolutionsPipeline/SolutionsPipeline"
import Members from "./Members/Members"
import { Footer } from "flowbite-react"

const HomePage = () => {
  return (
    <>
      {/* header section */}
      <div className="bg-[url('/home/banner.png')] bg-cover h-screen flex flex-col">
        <div className="max-w-screen-xl mx-auto py-3 w-full">
          <Header />
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div className="px-6 sm:px-10 py-5 sm:py-7 bg-[#D6EFFF] rounded-3xl flex flex-col gap-2 sm:gap-3 justify-center items-center text-center mx-3 md:mx-0">
            <h1 className="font-semibold text-2xl sm:text-4xl text-[#003C66]">
              Transformative Collaborations for Climate Resilience
            </h1>
            <p className="text-lg sm:text-2xl text-[#003C66] font-light">
              Uniting Changemakers to Build a Sustainable Future
            </p>
          </div>
        </div>
      </div>

      {/* climate change */}
      <ClimateChange />
      <NewCoordinated />
      <SolutionsPipeline />
      <Members />
    </>
  )
}

export default HomePage
