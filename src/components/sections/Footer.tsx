import { LayoutProps } from "../../utils/types"
import { Link } from "react-router-dom"
import {
  FacebookIcon,
  InstagramIcon,
  LinkIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../media/Icons"

const Footer: React.FC<LayoutProps> = (props) => {
  return (
    <div className='bg-black-nav text-white w-full pt-3'>
      <div
        id='footer-section'
        className={`mt-4 w-full ${props.isSignInCover && "py-8"}`}
      >
        <div className='container mx-auto'>
          {!props.isSignInCover || JSON.parse(window.localStorage.getItem("currentUser") || "null") && (
            <div className='justify-center flex'>
              <Link to='/signinCover'>
                <button className='bg-yellow-default text-black-default rounded-sm py-2 text-sm px-8 hover:bg-yellow-hover'>
                  Sign in for more access
                </button>
              </Link>
            </div>
          )}
          <div className='pb-6 mt-5 justify-center flex'>
            <ul className='flex gap-x-5 flex-row'>
              <li className='p-3 rounded-full hover:bg-black-nav-hover'>
                <a href='https://www.tiktok.com/@imdb'>
                  <TiktokIcon className='w-6 h-6' />
                </a>
              </li>
              <li className='p-3 rounded-full hover:bg-black-nav-hover'>
                <a href='https://www.instagram.com/imdb/'>
                  <InstagramIcon className='w-6 h-6' />
                </a>
              </li>
              <li className='p-3 rounded-full hover:bg-black-nav-hover'>
                <a href='https://twitter.com/imdb'>
                  <TwitterIcon className='w-6 h-6' />
                </a>
              </li>
              <li className='p-3 rounded-full hover:bg-black-nav-hover'>
                <a href='https://www.youtube.com/imdb'>
                  <YoutubeIcon className='w-6 h-6' />
                </a>
              </li>
              <li className='p-3 rounded-full hover:bg-black-nav-hover'>
                <a href='https://www.facebook.com/imdb'>
                  <FacebookIcon className='w-6 h-6' />
                </a>
              </li>
            </ul>
          </div>
          <div id='imdb-sites' className='justify-center flex'>
            <ul className='flex flex-row gap-x-2'>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Get IMDb App</a>
                <LinkIcon />
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Help</a>
                <LinkIcon />
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Site Index</a>
                <LinkIcon />
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>IMDb Pro</a>
                <LinkIcon />
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Box Office Mojo</a>
                <LinkIcon />
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>IMDb Developers</a>
                <LinkIcon />
              </li>
            </ul>
          </div>
          <div id='imdb-sites' className='justify-center flex'>
            <ul className='flex flex-row gap-x-6'>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Press Room</a>
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Advertising</a>
                <LinkIcon />
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Jobs</a>
                <LinkIcon />
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Conditions of Use</a>
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Privacy Policy</a>
                <LinkIcon />
              </li>
              <li className='p-2 hover:underline flex gap-x-1'>
                <a href=''>Your Add Privacy Choice</a>
              </li>
            </ul>
          </div>
          <div id='imdb-sites' className='justify-center flex mt-4'>
            An Amazon Company
          </div>
          <div
            id='imdb-sites'
            className='justify-center flex pb-14 text-sm text-gray-300'
          >
            © 1990-{new Date().getFullYear()} by IMDb.com, Inc.
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
