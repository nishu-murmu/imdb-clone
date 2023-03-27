import React from "react"
import Header from "../sections/Header"
import Footer from "../sections/Footer"
import { LayoutProps } from "../../utils/types"

const MainLayout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Header />
      {props.children}
      <Footer isSignInCover={props.isSignInCover} />
    </>
  )
}
export default MainLayout
