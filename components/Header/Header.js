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
          <Navbar.Link
            className={`${
              pathname === "/" ? "text-[#FFCA0B]" : "text-white"
            } font-light text-lg hover:text-[#FFCA0B]`}
          >
            Home
          </Navbar.Link>
        </Link>
        <Link href="/about-us" passHref>
          <Navbar.Link
            className={`${
              pathname === "/about-us" ? "text-[#FFCA0B]" : "text-white"
            } font-light text-lg hover:text-[#FFCA0B]`}
          >
            About Us
          </Navbar.Link>
        </Link>
        <Link href="/climate-collaboration-in-action" passHref>
          <Navbar.Link
            className={`${
              pathname === "/climate-collaboration-in-action"
                ? "text-[#FFCA0B]"
                : "text-white"
            } font-light text-lg hover:text-[#FFCA0B]`}
          >
            Climate Collaboration in Action
          </Navbar.Link>
        </Link>
        <Link href="/contact-us" passHref>
          <Navbar.Link
            className={`${
              pathname === "/contact-us" ? "text-[#FFCA0B]" : "text-white"
            } font-light text-lg hover:text-[#FFCA0B]`}
          >
            Contact Us
          </Navbar.Link>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  )
}
