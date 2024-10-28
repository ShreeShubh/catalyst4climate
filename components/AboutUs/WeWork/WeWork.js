import { howWeWorkData } from "@/utils/data"
import React from "react"

const WeWork = () => {
  return (
    <div className="bg-[#1AB274] pt-12 pb-16">
      <h2 className="text-4xl font-semibold text-white text-center">
        How We Work
      </h2>
      <div className="flex flex-col items-center justify-center mt-10 max-w-screen-xl mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 md:px-0">
          {howWeWorkData.map((item, index) => {
            return (
              <li
                key={index}
                className={`${
                  index === howWeWorkData.length - 1
                    ? "border-none"
                    : "md:border-r border-none md:border-dashed md:border-[#003C66]"
                }`}
              >
                <div className="flex flex-col items-center gap-4 pr-0 md:pr-10 text-white">
                  <h2 className="text-xl md:text-2xl text-shoonya-black text-center font-semibold">
                    {item.title}
                  </h2>
                  <p className="text-base text-center">{item.desc}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default WeWork
