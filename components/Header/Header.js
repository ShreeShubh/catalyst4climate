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
          src="/logo.png"
          width={204}
          height={100}
          className="mr-3"
          alt="catalyst for climate"
        />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Link href="/" passHref>
          <span
            className={`${
              pathname === "/" ? "text-[#FFCA0B]" : "text-white"
            } font-light text-lg hover:text-[#FFCA0B] cursor-pointer`}
          >
            Home
          </span>
        </Link>
        <Link href="/about-us" passHref>
          <span
            className={`${
              pathname === "/about-us" ? "text-[#FFCA0B]" : "text-white"
            } font-light text-lg hover:text-[#FFCA0B] cursor-pointer`}
          >
            About Us
          </span>
        </Link>
        <Link href="/climate-collaboration-in-action" passHref>
          <span
            className={`${
              pathname === "/climate-collaboration-in-action"
                ? "text-[#FFCA0B]"
                : "text-white"
            } font-light text-lg hover:text-[#FFCA0B] cursor-pointer`}
          >
            Climate Collaboration in Action
          </span>
        </Link>
        <Link href="/contact-us" passHref>
          <span
            className={`${
              pathname === "/contact-us" ? "text-[#FFCA0B]" : "text-white"
            } font-light text-lg hover:text-[#FFCA0B] cursor-pointer`}
          >
            Contact Us
          </span>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
