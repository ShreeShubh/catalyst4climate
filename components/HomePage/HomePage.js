import React from "react"
import { Header } from "../Header/Header"
import ClimateChange from "./ClimateChange/ClimateChange"
import NewCoordinated from "./NewCoordinated/NewCoordinated"
import SolutionsPipeline from "./SolutionsPipeline/SolutionsPipeline"
import Members from "./Members/Members"
import { Footer } from "flowbite-react"
import LocalSolutions from "./LocalSolutions/LocalSolutions"
import ClimateAction from "./ClimateAction/ClimateAction"
import Gallery from "./Gallery/Gallery"

const HomePage = () => {
  return (
    <>
      {/* header section */}
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/climate4catalyst/public/home/banner.png')] bg-cover h-screen flex flex-col">
        <div className="max-w-screen-xl mx-auto py-3 w-full">
          <Header />
        </div>
        <div className="flex-grow flex justify-center items-center">
          <div className="px-6 sm:px-10 py-5 sm:py-7 bg-[#D6EFFF] rounded-3xl flex flex-col gap-2 sm:gap-3 justify-center items-center text-center mx-3 md:mx-0">
            <h1 className="font-semibold text-2xl sm:text-4xl text-[#003C66]">
              Catalysts for Climate
            </h1>
            <p className="text-lg sm:text-2xl text-[#003C66]">
              Social Entrepreneurs Pioneering Immediate Climate Solutions
            </p>
          </div>
        </div>
      </div>

      {/* climate change */}
      <ClimateChange />
      <NewCoordinated />
      <SolutionsPipeline />
      <LocalSolutions />
      <ClimateAction />
      <Gallery />
      <Members />
    </>
  )
}

export default HomePage
