import React from "react"
import { Header } from "../Header/Header"
import Pillar from "./Pillar/Pillar"
import Image from "next/image"

const ClimateCollaboration = () => {
  return (
    <>
      <div className="bg-[url('/climateCollaboration/banner.png')] bg-cover bg-center h-[60vh] flex flex-col">
        <div className="max-w-screen-xl mx-auto py-3 w-full">
          <Header />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto mt-10 md:mt-20 px-4">
        <div className="flex flex-col items-center gap-5 text-[#013C66]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-snug">
            Climate Collaboration in Action: Our Solutions Pipeline
          </h1>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-center leading-snug">
            Scalable Solutions, Proven Impact
          </h1>
          <p className="text-base sm:text-lg md:text-2xl text-center">
            Our platform doesn’t just connect social entrepreneurs; it’s a
            robust tool for showcasing and scaling their solutions. From urban
            heat adaptation products to community-led air and water quality
            monitoring systems, each solution on this platform is:
          </p>

          <ul className="list-disc marker:text-[#1AB274] flex flex-col gap-3">
            <li className="text-base sm:text-lg md:text-2xl">
              Proven and Effective – All solutions have been tried, tested, and
              proven effective in real-world conditions
            </li>
            <li className="text-base sm:text-lg md:text-2xl">
              Community-Centric – Each initiative is designed and led by people
              who understand the unique needs of their communities
            </li>
            <li className="text-base sm:text-lg md:text-2xl">
              Scalable – Through partnerships and targeted financial support,
              these solutions
            </li>
          </ul>
        </div>
      </div>

      <Pillar />
    </>
  )
}

export default ClimateCollaboration
