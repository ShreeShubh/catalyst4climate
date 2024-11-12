"use client"

import Link from "next/link"
import { Navbar } from "flowbite-react"
import Image from "next/image"

import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  return (
    <Navbar fluid rounded className="bg-transparent">
      <Navbar.Brand as={Link} href="/">
        <Image
          src="https://s3.ap-south-1.amazonaws.com/com.cg.ivista.mediafiles/climate4catalyst/public/logo01.png"
          width={204}
          height={100}
          className="mr-3"
          alt="catalyst for climate"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="bg-white md:bg-transparent rounded-lg p-4">
        <Link href="/" passHref>
          <span
            className={`${
              pathname === "/" ? "text-[#1AB274]" : "text-[#003C66]"
            }  text-lg hover:text-[#1AB274] cursor-pointer`}
          >
            Home
          </span>
        </Link>
        <Link href="/about-us" passHref>
          <span
            className={`${
              pathname === "/about-us" ? "text-[#1AB274]" : "text-[#003C66]"
            }  text-lg hover:text-[#1AB274] cursor-pointer`}
          >
            About Us
          </span>
        </Link>
        <Link href="/our-solutions" passHref>
          <span
            className={`${
              pathname === "/our-solutions"
                ? "text-[#1AB274]"
                : "text-[#003C66]"
            }  text-lg hover:text-[#1AB274] cursor-pointer`}
          >
            Our Solutions
          </span>
        </Link>
        <Link href="/contact-us" passHref>
          <span
            className={`${
              pathname === "/contact-us" ? "text-[#1AB274]" : "text-[#003C66]"
            }  text-lg hover:text-[#1AB274] cursor-pointer`}
          >
            Contact Us
          </span>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
