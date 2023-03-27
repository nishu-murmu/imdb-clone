import React from "react"
import { Link } from "react-router-dom"
import { LogoImage } from "../Images"
const SignIn: React.FC = () => {
  return (
    <>
      <div
        className='mx-auto container  justify-center flex my-3'
        id='register-heading'
      >
        <div className='flex items-center flex-row mx-auto'>
          <LogoImage width='107px' height='57px' />
        </div>
      </div>
      <div
        id='register-form'
        className='mx-auto  w-[348px] h-[381px] border-1 border-solid border-gray-200 rounded-md container flex justify-center'
      >
        <form action='' className='px-4 py-3 text-sm mt-2 w-full'>
          <h1 className='font-normal leading-3 text-3xl'>Sign In</h1>
          <div className='flex flex-col my-5 gap-y-2'>
            <label htmlFor='email' className='font-bold'>
              Email
            </label>
            <input
              id='email'
              type='email'
              className='border-2 h-8 w-full rounded-sm hover:shadow-input  hover:shadow-yellow-hover'
            />
          </div>

          <div className='flex flex-col my-5 gap-y-2'>
            <label htmlFor='password' className='font-bold'>
              Password
            </label>
            <input
              id='password'
              type='password'
              className=' h-8 w-full rounded-sm border-1  hover:shadow-input hover:shadow-yellow-hover'
            />
          </div>

          <button
            id='submit'
            type='submit'
            className='bg-yellow-default text-black-default py-2 border-1 border-black-default rounded-sm w-full'
          >
            Sign In
          </button>
          <div className='hover:cursor-pointer my-4 flex flex-row gap-x-2  relative '>
            <input type='checkbox' className='' id='signedin' />
            <label htmlFor='signedin'>Keep me signed in.</label>
            <p className='text-blue-800'>Details</p>
          </div>
          <Link to={"/register"}>
            <button
              id='submit'
              type='submit'
              className='bg-gradient-to-b from-light-50 to-light-100 border-1 border-black-default text-black-default py-2 rounded-sm w-full'
            >
              Create your IMDb Account
            </button>
          </Link>
        </form>
      </div>
      <div
        id='register-footer'
        className='text-sm mx-auto container flex flex-col mt-2 gap-y-2 place-items-center  justify-center '
      >
        <div className='flex gap-x-2'>
          <a href='#' className='text-blue-800'>
            Help
          </a>
          <a href='#' className='text-blue-800'>
            Conditions of Use
          </a>
          <a href='#' className='text-blue-800'>
            Privacy Policy
          </a>
        </div>
        <div id='foot-notes'>
          © 1996-{new Date().getFullYear()}, Amazon.com, Inc. or its affiliates
        </div>
      </div>
    </>
  )
}
export default SignIn
