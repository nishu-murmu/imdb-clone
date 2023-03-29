import React from "react"
import MainLayout from "../components/layouts/MainLayout"
import HeroSection from "../components/sections/HeroSection"

const HomePage: React.FC = () => {
  return (
    <>
      <MainLayout>
        <HeroSection />
      </MainLayout>
    </>
  )
}
export default HomePage
