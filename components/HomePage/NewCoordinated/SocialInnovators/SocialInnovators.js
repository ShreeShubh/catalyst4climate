"use client"

import { socialInnovatorsData } from "@/utils/data"
import Image from "next/image"
import React from "react"
import { useState } from "react"

const SocialInnovators = () => {
  // Set the first item (index 0) to be open by default
  const [openIndex, setOpenIndex] = useState(0)

  const toggleAccordion = (index) => {
    // Only one item should be open at a time
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="w-[542px]">
      <ul className="flex flex-col gap-4">
        {socialInnovatorsData.map((item, index) => {
          const isOpen = openIndex === index
          return (
            <li key={index} className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <Image
                  src={item.iconUrl}
                  width={40}
                  height={40}
                  alt={item.title}
                  className="w-10 h-10"
                />
                <h2 className="text-[#003C66] text-3xl font-semibold">
                  {item.title}
                </h2>
                <button
                  onClick={() => toggleAccordion(index)}
                  className="focus:outline-none"
                >
                  {isOpen ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-yellow-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M18 12H6"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="w-6 h-6 text-[#003C66]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v12m6-6H6"
                      />
                    </svg>
                  )}
                </button>
              </div>
              {/* Smooth transition for the description */}
              <div
                className={`transition-[max-height] duration-300 ease-in-out overflow-hidden ${
                  isOpen ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <p className="text-lg text-[#003862] font-light mt-2">
                  {item.desc}
                </p>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default SocialInnovators
