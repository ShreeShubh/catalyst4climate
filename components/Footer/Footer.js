"use client"

import Image from "next/image"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Footer = () => {
  const pathname = usePathname()

  return (
    <>
      {/* Header Section */}
      <div className="bg-[#00152B] py-5 sm:py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-0">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/footerLogo.png"
                width={204}
                height={100}
                className="mr-3"
                alt="catalyst for climate"
              />
            </Link>

            {/* Navigation */}
            <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <li>
                <Link href="/">
                  <span
                    className={`${
                      pathname === "/" ? "text-[#FFCA0B]" : "text-white"
                    }  text-lg hover:text-[#FFCA0B] cursor-pointer`}
                  >
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about-us">
                  <span
                    className={`${
                      pathname === "/about-us" ? "text-[#FFCA0B]" : "text-white"
                    }  text-lg hover:text-[#FFCA0B] cursor-pointer`}
                  >
                    About Us
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/our-solutions">
                  <span
                    className={`${
                      pathname === "/our-solutions"
                        ? "text-[#FFCA0B]"
                        : "text-white"
                    }  text-lg hover:text-[#FFCA0B] cursor-pointer`}
                  >
                    Our Solutions
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us">
                  <span
                    className={`${
                      pathname === "/contact-us"
                        ? "text-[#FFCA0B]"
                        : "text-white"
                    }  text-lg hover:text-[#FFCA0B] cursor-pointer`}
                  >
                    Contact Us
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-[#003C66]">
        <div className="flex flex-col sm:flex-row items-center justify-between max-w-screen-xl mx-auto py-5 px-4 sm:px-0 gap-4 sm:gap-0">
          {/* Footer Text */}
          <p className="text-white text-[14px] text-center sm:text-left">
            Catalyst 2030 is incubated by the One Family Foundation in Amsterdam
            (NL)
          </p>
          <p className="text-white text-[14px] text-center sm:text-left">
            © Catalyst 2030 | Privacy Policy
          </p>

          {/* Social Media Icons */}
          <div className="flex gap-3 items-center justify-center">
            <Link href="https://www.facebook.com/Catalyst2030/" target="_blank">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/climate4catalyst/public/footer/vector01.png"
                width={24}
                height={24}
                alt="facebook"
                className="h-5 w-5 cursor-pointer"
              />
            </Link>
            <Link
              href="https://www.youtube.com/@Catalyst2030/videos"
              target="_blank"
            >
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/climate4catalyst/public/footer/vector02.png"
                width={24}
                height={24}
                alt="youtube"
                className="h-5 w-5 cursor-pointer"
              />
            </Link>
            <Link
              href="https://www.linkedin.com/company/catalyst-2030/"
              target="_blank"
            >
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/climate4catalyst/public/footer/vector03.png"
                width={24}
                height={24}
                alt="linkedin"
                className="h-5 w-5 cursor-pointer"
              />
            </Link>
            <Link href="https://x.com/catalyst_2030" target="_blank">
              <Image
                src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/climate4catalyst/public/footer/vector04.png"
                width={24}
                height={24}
                alt="twitter"
                className="h-5 w-5 cursor-pointer"
              />
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
