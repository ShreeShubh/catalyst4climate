import React from "react"
import { Header } from "../Header/Header"
import WhoWeAre from "./WhoWeAre/WhoWeAre"
import MissionAndVision from "./MissionAndVision/MissionAndVision"
import HowWeWork from "./HowWeWork/HowWeWork"
import Footer from "../Footer/Footer"

const AboutUs = () => {
  return (
    <>
      <div className="bg-[url('/aboutUs/banner02.png')] bg-cover bg-center h-[60vh] flex flex-col">
        <div className="max-w-screen-xl mx-auto py-3 w-full">
          <Header />
        </div>
      </div>
      <WhoWeAre />
      <MissionAndVision />
      <HowWeWork />
      <Footer />
    </>
  )
}

export default AboutUs
