import React from "react"
import { Header } from "../Header/Header"
import { contactUsData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"

const ContactUs = () => {
  return (
    <>
      <div className="bg-[url('/contactUs/banner04.png')] bg-cover bg-center h-[60vh] flex flex-col">
        <div className="max-w-screen-xl mx-auto py-3 w-full">
          <Header />
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto my-20">
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-[#003C66] text-4xl font-semibold">
            How To Engage With Us
          </h1>
          <ul className="w-full flex flex-col gap-10">
            {contactUsData.map((item, index) => {
              return (
                <li key={index}>
                  <div
                    className="p-5 rounded-3xl"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <div className="flex justify-between items-center">
                      <Image
                        src={item.imageUrl}
                        width={384}
                        height={256}
                        alt={item.title}
                        className={`w-[384px] h-[256px] ${
                          index % 2 == 1 ? "order-1" : ""
                        }`}
                      />
                      <div className="flex flex-col gap-3 items-center w-[495px]">
                        <h2
                          className="text-3xl font-semibold text-center"
                          style={{ color: item.fontColor }}
                        >
                          {item.title}
                        </h2>
                        <p
                          className="text-xl font-light text-center"
                          style={{ color: item.fontColor }}
                        >
                          {item.desc}
                        </p>
                        {/* Use Next.js Link for both mailto and external links */}
                        <Link
                          href={
                            item.link.startsWith("mailto:")
                              ? item.link
                              : item.link
                          }
                          passHref
                          target={
                            item.link.startsWith("mailto:") ? "_self" : "_blank"
                          }
                        >
                          <button className="px-5 py-2 bg-[#003C66] rounded-full text-white">
                            {item.button}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ContactUs
