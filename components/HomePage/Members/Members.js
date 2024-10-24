"use client"

import { membersData } from "@/utils/data"
import Image from "next/image"
import React from "react"

import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

const Members = () => {
  return (
    <div className="my-20">
      <h1 className="text-4xl font-semibold text-[#003C66] text-center mb-10">
        Members
      </h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        arrows={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        itemClass="carousel-item-padding-40-px"
      >
        {membersData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-3 w-full h-full"
          >
            <Image
              src={item.logoUrl} // Make sure logoUrl is correct
              width={150}
              height={75}
              alt={item.title}
              layout="intrinsic" // Added layout to handle intrinsic sizing
            />
            {/* <p className="text-base font-light">{item.title}</p> */}
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default Members
