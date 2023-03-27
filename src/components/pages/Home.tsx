import React from "react"
import MainLayout from "../layouts/MainLayout"
import HeroSection from "../sections/HeroSection"

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
