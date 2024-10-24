import { missionAndVisionData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const MissionAndVision = () => {
  return (
    <div className="mt-20 flex flex-col items-center max-w-screen-xl mx-auto">
      <h1 className="text-4xl font-semibold text-[#003C66]">
        Mission & Vision
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {missionAndVisionData.map((item, index) => {
          return (
            <li key={index} className="relative">
              <div
                className="flex flex-col gap-4 text-white p-7 w-[348px] h-[250px] rounded-3xl"
                style={{ backgroundColor: item.bgColor }}
              >
                <h2 className="text-3xl font-semibold">{item.title}</h2>
                <p className="text-base font-semibold">{item.desc}</p>
              </div>

              <div className="absolute right-0 transform -translate-x-1/2 -bottom-10">
                <div
                  className="rounded-full flex justify-center items-center border-4 border-white p-4"
                  style={{ backgroundColor: item.bgColor }}
                >
                  <Image
                    src={item.iconUrl}
                    width={50}
                    height={50}
                    alt={item.title}
                    className="rounded-full h-[50px] w-[50px]"
                  />
                </div>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default MissionAndVision
