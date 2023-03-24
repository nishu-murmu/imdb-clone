import { PlayCircleSolidIcon, PlaySolidIcon, RightChevronIcon } from "./Icons"
import MovieCard from "./MovieCard"
import { getUpcomingMovies, getPlayingMovies } from "../utils/apiFunctions"
import { useEffect } from "react"

const HeroSection: React.FC = () => {

  useEffect(() => {
    const UpcomingMovies = async () => {
      const result = await getUpcomingMovies()

      const upcoming = await getPlayingMovies()
      console.log({ result, upcoming })
    }
    UpcomingMovies()
  }, [])

  return (
    <div
      id='hero-section'
      className='container mx-auto grid grid-cols-2 gap-2 text-white mt-2  items-center h-[563px] bg-black-overlay'
    >
      <div
        id='main-preview'
        className='relative col-end-2 flex flex-row py-1 h-full '
      >
        <div id='side-click' className='mt-44 w-full h-16'>
          <div className=''></div>
          <div className=''></div>
        </div>
        <div className='flex flex-row'>
          <div
            className='flex flex-row absolute bottom-0 left-5'
            id='movie-card-section'
          >
            <MovieCard />
          </div>

          <figcaption className='absolute bottom-8 flex gap-x-12 right-[12rem]'>
            <div
              id='playButton'
              className='h-20 w-20 border-[3px] border-white rounded-full group hover:border-yellow-hover hover:cursor-pointer'
            >
              <PlaySolidIcon className='w-5 h-5 m-[28px]  group-hover:text-yellow-hover group-hover:cursor-pointer' />
            </div>
            <div id='heading' className=''>
              <div>
                <span className='font-semibold leading-9 text-3xl'>
                  Mermaid
                </span>
              </div>
            </div>
          </figcaption>
        </div>
      </div>
      <div id='side-preview' className='h-full '>
        <div className='font-bold text-title my-4 text-yellow-default'>
          Up Next
        </div>
        <div id='side-preview-card' className='flex flex-row gap-x-4 my-2'>
          <div className='w-[88px] h-[130px] flex  bg-green-300'></div>
          <div>
            <PlayCircleSolidIcon
              height='32'
              width='32'
              className={"hover:cursor-pointer hover:text-yellow-default"}
            />
            <div className='flex flex-col gap-y-2 mt-2'>
              <div>Bob Odenkirk Receives the IMDb STARmeter Award</div>
              <div>Watch the Icon's Interview</div>
            </div>
          </div>
        </div>
        <div className='flex font-bold text-title hover:text-yellow-hover hover:cursor-pointer'>
          Browse Trailers{" "}
          <span className='mt-1 hover:cursor-hover hover:text-yellow-default'>
            <RightChevronIcon className='w-6 h-6' strokeWidth='3.5' />
          </span>
        </div>
      </div>
    </div>
  )
}
export default HeroSection
