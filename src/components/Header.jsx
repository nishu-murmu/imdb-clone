import { useEffect, useState } from "react"
import {
  ArrowDownFillIcon,
  BookMarkPlusIcon,
  HamBurgerIcon,
  SearchIcon,
} from "../components/Icons"
import { LogoImage } from "../components/Images"
import SearchMovie from "../utils/apiFunctions"

const Header = () => {
  const [searchText, setSearchText] = useState("")
  const [searchedMovies, setSearchedMovies] = useState([])
  const baseUrl = import.meta.env.VITE_BASE_URL

  useEffect(() => {
    const getData = async () => {
      let result = await SearchMovie(searchText)
      setSearchedMovies(result)
    }

    console.log(searchedMovies, "list")

    getData()
  }, [searchText])

  return (
    <div className='pt-1.5 container h-12 flex text-white items-center gap-2 text-sm  font-bold mx-auto'>
      <LogoImage />

      <button className='flex hover:bg-black-nav-hover rounded-md px-4 py-2'>
        <div className=''>
          <HamBurgerIcon />
        </div>
        <p>Menu</p>
      </button>
      <div className=' block relative'>
        <button
          id='search-bar'
          className='flex bg-white relative text-black-nav rounded-sm flex-row'
        >
          <div className='flex p-1 mt-1'>
            <p className='px-1'>All</p>
            <div className='mt-0.5'>
              <ArrowDownFillIcon />
            </div>
          </div>
          <div className='p-1.5 border-l border-black-nav-hover'>
            <input
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
              type='text'
              id='search-text'
              placeholder='Search IMDb'
              className=' font-thin outline-none w-[580px]'
            />
          </div>
          <button className='p-1.5'>
            <SearchIcon />
          </button>
        </button>

        {/* Search Results */}
        <div className='w-[677.783px] absolute'>
          {searchedMovies !== [] &&
            searchedMovies.slice(0, 8).map((item) => (
              <div className='h-24 flex bg-black-nav w-full'>
                <div className="h-16 w-14">
                  <img src={`${baseUrl + item.poster_path}`} alt='' />
                </div>
                <div>{item.original_title}</div>
              </div>
            ))}
        </div>
      </div>

      <button id='imdb-pro' className='hover:bg-black-nav-hover rounded-md'>
        <div className='px-3 py-2'>
          <img src='../public/Screenshot from 2023-03-22 15-41-33.png' />
        </div>
      </button>
      <div className='w-[1px] h-8 my-0 mx-2 border border-[#383838]'></div>
      <button
        id='watch-list'
        className='flex px-4 py-1 rounded-md hover:bg-black-nav-hover'
      >
        <div>
          <BookMarkPlusIcon />
        </div>
        WatchList
      </button>
      <button
        className='rounded-md px-4 py-2 hover:bg-black-nav-hover'
        id='sign-in'
      >
        Sign In
      </button>
      <button
        id='en'
        className='flex rounded-md px-4 py-2 hover:bg-black-nav-hover'
      >
        EN
        <div className='mt-0.5 pl-1'>
          <ArrowDownFillIcon />
        </div>
      </button>
    </div>
  )
}

export default Header
