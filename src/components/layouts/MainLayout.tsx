import React from "react"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
import { LayoutProps } from "../../utils/types"

const MainLayout: React.FC<LayoutProps> = (props) => {
  return (
    <div className="bg-black-nav text-white">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
export default MainLayout
