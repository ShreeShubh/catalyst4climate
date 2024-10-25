import React from "react"

const WhoWeAre = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="px-6 sm:px-10 py-5 sm:py-7 bg-[#D6EFFF] rounded-3xl flex flex-col gap-2 sm:gap-3 justify-center items-center -mt-16 sm:-mt-20 mx-3 md:mx-0">
        <h1 className="text-[#003C66] text-4xl font-semibold text-center">
          Who We Are
        </h1>
        <p className="text-xl md:text-2xl text-center text-[#003862] font-light">
          Catalyst 4 Climate is a movement of community-centred high-performing
          social <br className="hidden sm:block" /> entrepreneurs and innovators
          working with an aggregation of urban rural{" "}
          <br className="hidden sm:block" />
          indigenous communities in the global north and south.
        </p>
      </div>
    </div>
  )
}

export default WhoWeAre
