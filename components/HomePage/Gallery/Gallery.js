import { galleryData } from "@/utils/data"
import Image from "next/image"
import React from "react"

const Gallery = () => {
  return (
    <div className="mt-20">
      <div className="flex flex-col gap-5 items-center max-w-screen-xl mx-auto">
        <h1 className="text-[#003C66] font-semibold text-2xl sm:text-4xl text-center">
          Gallery
        </h1>

        <div className="w-full my-5">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-3">
            {galleryData.map((item, index) => {
              return (
                <li key={index}>
                  <Image
                    src={item.imageUrl}
                    width={227}
                    height={176}
                    alt="gallery"
                    className="transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg"
                  />
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Gallery
