import Image from "next/image"
import React from "react"
import { Header } from "../Header/Header"

const Footer = () => {
  return (
    <>
      <div className="bg-[#00152B] py-10">
        <div className="max-w-screen-xl mx-auto">
          <Header />
        </div>
      </div>
      <div className="bg-[#003C66]">
        <div className="flex items-center justify-between max-w-screen-xl mx-auto py-5">
          <p className="text-white text-[14px] font-light">
            Catalyst 2030 is incubated by the One Family Foundation in Amsterdam
            (NL)
          </p>
          <p className="text-white text-[14px] font-light">
            © Catalyst 2030 | Privacy Policy
          </p>
          <div className="flex gap-2 items-center">
            <Image
              src="/footer/vector01.png"
              width={24}
              height={24}
              alt="facebook"
              className="h-5 w-5"
            />
            <Image
              src="/footer/vector02.png"
              width={24}
              height={24}
              alt="facebook"
              className="h-5 w-5"
            />
            <Image
              src="/footer/vector03.png"
              width={24}
              height={24}
              alt="facebook"
              className="h-5 w-5"
            />
            <Image
              src="/footer/vector04.png"
              width={24}
              height={24}
              alt="facebook"
              className="h-5 w-5"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
