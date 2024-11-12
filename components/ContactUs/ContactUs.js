import React from "react"
import { Header } from "../Header/Header"
import { contactUsData } from "@/utils/data"
import Image from "next/image"
import Link from "next/link"

const ContactUs = () => {
  return (
    <>
      <div className="bg-[url('https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/climate4catalyst/public/contactUs/banner01.png')] bg-cover bg-center h-[60vh] flex flex-col">
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
                    className="p-5 rounded-3xl mx-3 md:mx-0"
                    style={{ backgroundColor: item.bgColor }}
                  >
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-5">
                      {/* Image Section */}
                      <Image
                        src={item.imageUrl}
                        width={384}
                        height={256}
                        alt={item.title}
                        className={`w-full lg:w-[384px] h-auto rounded-3xl ${
                          index % 2 == 1 ? "lg:order-1" : ""
                        }`}
                      />

                      {/* Text Section */}
                      <div className="flex flex-col gap-3 items-center w-full lg:w-[495px] text-center">
                        <h2
                          className="text-3xl font-semibold"
                          style={{ color: item.fontColor }}
                        >
                          {item.title}
                        </h2>
                        <p
                          className="text-xl"
                          style={{ color: item.fontColor }}
                        >
                          {item.desc}
                        </p>

                        {/* Link Button */}
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
                          <button className="px-5 py-2 bg-[#003C66] rounded-full text-white transition duration-300 ease-in-out transform hover:bg-[#005A99] hover:scale-105">
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
