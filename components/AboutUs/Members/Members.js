import { ourMembersData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Members = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex flex-col items-center gap-10 px-10">
        <h1 className="text-4xl font-semibold text-[#003C66]">Our Members</h1>
        <p className="text-lg text-[#003862] font-light text-center">
          We are a global movement of social entrepreneurs, innovators, and
          community leaders working together to solve the world's most pressing
          challenge - climate change. We collaborate across sectors to
          accelerate impactful climate solutions, uniting efforts for
          sustainable change.
        </p>
        <p className="text-lg text-[#003862] font-light text-center">
          Active in 139 countries, with a focus on developing nations, we are
          driving solutions that cover all 17 Sustainable Development Goals. By
          catalysing innovation and finance to tackle the climate crisis, we are
          impacting over a billion lives. Through our Climate Collaboration, we
          work on mitigation, adaptation, and climate finance to ensure a
          sustainable future for people and the planet.
        </p>

        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {ourMembersData.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link} target="_blank">
                  <Image
                    src={item.logoUrl}
                    width={227}
                    height={195}
                    alt="logo"
                    className="cursor-pointer"
                  />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Members
