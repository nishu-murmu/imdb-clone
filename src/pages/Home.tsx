import React from "react"
import MainLayout from "../components/layouts/MainLayout"
import Carousal from "../components/sections/Carousal"
import HeroSection from "../components/sections/HeroSection"

const HomePage: React.FC = () => {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <Carousal/>
      </MainLayout>
    </>
  )
}
export default HomePage
