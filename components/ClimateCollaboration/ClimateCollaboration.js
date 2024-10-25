import React from "react"
import { Header } from "../Header/Header"
import Pillar from "./Pillar/Pillar"

const ClimateCollaboration = () => {
  return (
    <>
      <div className="bg-[url('/climateCollaboration/banner03.png')] bg-cover bg-center h-[60vh] flex flex-col">
        <div className="max-w-screen-xl mx-auto py-3 w-full">
          <Header />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-10 md:mt-20 px-4">
        <div className="flex flex-col items-center gap-5 text-[#013C66]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-snug">
            Climate Collaboration in Action: Our Solutions Pipeline
          </h1>
          <p className="text-base sm:text-lg md:text-2xl font-light text-center">
            Leveraging Catalyst 2030’s network of social innovators and
            proximity leaders, this collective is building a pipeline
            <br className="hidden sm:block" />
            of tried-and-tested solutions from communities.
          </p>
          <p className="text-base sm:text-lg md:text-2xl font-light text-center">
            These solutions come from India, Brazil, Bangladesh, Colombia,
            Egypt, Kenya, and several other developing countries and explore key
            intersections of climate with public health, food security,
            dignified employment, disaster management, circularity, agriculture
            and more.
          </p>
        </div>
      </div>

      <Pillar />
    </>
  )
}

export default ClimateCollaboration
