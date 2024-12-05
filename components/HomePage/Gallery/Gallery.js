"use client"

import { galleryData } from "@/utils/data"
import Image from "next/image"
import React from "react"
import { useState } from "react"

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null)

  const openModal = (image) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden" // Disable scrolling
  }

  const closeModal = () => {
    setSelectedImage(null)
    document.body.style.overflow = "" // Re-enable scrolling
  }

  return (
    <div className="mt-20">
      <div className="flex flex-col gap-5 items-center max-w-screen-xl mx-auto">
        <h1 className="text-[#003C66] font-semibold text-2xl sm:text-4xl text-center">
          Gallery
        </h1>

        <div className="w-full my-5">
          <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-3">
            {galleryData.map((item, index) => (
              <li key={index} onClick={() => openModal(item.mainImage)}>
                <Image
                  src={item.imageUrl}
                  width={227}
                  height={176}
                  alt="gallery"
                  className="transition-transform duration-300 ease-in-out transform hover:scale-105 rounded-lg cursor-pointer"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div className="relative">
            <Image
              src={selectedImage}
              width={800}
              height={600}
              alt="Expanded gallery"
              className="rounded-lg max-h-[90vh]"
            />
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-black text-2xl"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
