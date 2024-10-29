import { ourMembersData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"
import React from "react"

const Members = () => {
  return (
    <div className="max-w-screen-xl mx-auto mt-20">
      <div className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-semibold text-[#003C66] text-center">
          Our Social Entrepreneurs
        </h1>
        <p className="text-lg text-[#003862] text-center px-10">
          Social entrepreneurs are more than advocates; they’re active agents of
          change who bring tangible, measurable impact to their communities.
          Social entrepreneurs are embedded in the daily lives of the
          communities they serve. They build solutions grounded in local
          knowledge, culture, and lived experience, ensuring that these
          solutions are both effective and culturally relevant.
        </p>
        <p className="text-lg text-[#003862] text-center px-10">
          This grassroots-driven approach is what sets Catalysts for Climate
          apart. These innovators are not just talking about climate action;
          they’re living it. They bring a sense of urgency and immediacy to the
          issues at hand, which makes their contributions invaluable to the
          fight against climate change.
        </p>

        <div className="block md:hidden px-3">
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 mt-5 gap-6">
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
        <div className="hidden md:block">
          <ul className="flex flex-wrap justify-center mt-5 gap-6 ">
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
    </div>
  )
}

export default Members
