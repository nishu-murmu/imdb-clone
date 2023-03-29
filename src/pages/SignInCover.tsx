import React from "react"
import { Link } from "react-router-dom"
import { LayoutProps } from "../utils/types"
import { LogoImage } from "../components/media/Images"
import MainLayout from "../components/layouts/MainLayout"

const SignInCover: React.FC<LayoutProps> = () => {
  const isSignInCover = true
  return (
    <MainLayout isSignInCover={isSignInCover}>
      <div className="w-full bg-gradient-to-b from-light-100 to-light-50">
        <div
          id="sign-in-cover"
          className=" w-[1008px]  bg-white text-black-default  mx-auto"
        >
          <div className="grid grid-cols-2  mb-6">
            <div id="sign-in-section" className=" h-[431px] w-[240px] mx-auto ">
              <h1 className="pt-4 text-2xl font-bold">
                <strong>Sign In</strong>
              </h1>
              <div className="flex flex-col text-md gap-y-3">
                <Link to={'/signin'}>
                  <button className="border-1 border-gray-200 rounded py-2 px-4 flex gap-x-4 text-center w-full">
                    <LogoImage width="25px" height="25px" /> Sign in with IMDb
                  </button>
                </Link>
                <button className="border-1 border-gray-200 rounded py-2 px-4  gap-x-4 justify-center flex w-full">
                  Sign in with Amazon
                </button>
                <button className="border-1 border-gray-200 rounded py-2 px-4  gap-x-4 justify-center flex w-full">
                  Sign in with Google
                </button>
                <button className="border-1 border-gray-200 rounded py-2 px-4  gap-x-4 justify-center flex w-full">
                  Sign in with Amazon
                </button>
                <button className="border-1 border-gray-200 rounded py-2 px-4  gap-x-4 justify-center flex w-full">
                  Sign in with Facebook
                </button>
              </div>
              <p id="word-striker" className="flex justify-center relative">
                <span className="before:absolute before:mr-8 before:top-1/2 before:border-t-1 before:w-3/12  after:absolute after:top-1/2 after:border-t-1 after:w-3/12 ">
                  or
                </span>
              </p>
              <Link to={"/register"}>
                <button
                  id="create-account"
                  className="border-1 bg-yellow-default text-black-default font-semibold  rounded py-2 px-4  gap-x-4 justify-center flex w-full"
                >
                  Create a New Account
                </button>
              </Link>
              <div className=" px-2 flex justify-center mt-3 text-xs">
                <p className="text-center text-sm leading-4">
                  By signing in, you agree to IMDb's
                  <a className="text-blue-800" href="">
                    Conditions of Use
                  </a>{" "}
                  and
                  <a className="text-blue-800" href="">
                    Privacy Policy
                  </a>
                  .
                </p>
              </div>
            </div>

            <div id="info-section" className="mt-4 pr-10">
              <h1 className="text-2xl font-extrabold">
                Benefits of your free IMDb Account
              </h1>
              <div>
                <h3 className="font-bold text-lg">
                  Personlized Recommendations
                </h3>
                <p>Discover shows you'll love.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Your WatchList</h3>
                <p>
                  Track everything you want to watch and receive e-mail when
                  movies open in theatres.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Your Ratings</h3>
                <p>Rate and remember everything you've seen.</p>
              </div>
              <div>
                <h3 className="font-bold text-lg">Contribute to IMDb</h3>
                <p>
                  Add data that will be seen by millions of people and get cool
                  badges.
                </p>
              </div>
            </div>
          </div>
          <div
            id="recently-viewed"
            className="h-[166px] w-full px-4 py-2 border-t-2 border-gray-400"
          >
            <div className="flex justify-between">
              <h2 className="font-bold text-2xl">Recently Viewed</h2>
              <p className="text-blue-800">Clear your history</p>
            </div>

            <div id="viewed-list"></div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
export default SignInCover
