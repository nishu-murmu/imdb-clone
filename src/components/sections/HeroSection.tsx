import {
  PlayCircleSolidIcon,
  PlaySolidIcon,
  RightChevronIcon,
  StarIcon,
} from "../media/Icons"
import { Swiper, SwiperSlide } from "swiper/react"
import MovieCard from "../CommonComponents/MovieCard"
import {
  getUpcomingMovies,
  getTrendingMedia,
} from "../../utils/apiFunctions"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../utils/types"
import { HeroActions } from "../../store/reducers/heroSlice"
import { Pagination, Navigation } from "swiper"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

const HeroSection: React.FC = () => {
  const dispatch = useDispatch()

  const baseUrl = import.meta.env.VITE_BASE_URL
  const upComingMovies = useSelector(
    (state: RootState) => state.hero.upcomingMovies
  )
  const trendingMedia = useSelector(
    (state: RootState) => state.hero.trendingMedia
  )
  const cardId  = useSelector((state: RootState) => state.hero.cardId)
  const selectedItems = useSelector((state: RootState) => state.hero.selectedItems)

  const selectHandler = (id: any) => {
    if (selectedItems?.includes(id)) {
      dispatch(HeroActions.setSelectedItems(selectedItems.filter((i: any) => i !== id)))
    } else {
      dispatch(HeroActions.setSelectedItems([...selectedItems as [], id]));
    }
  }

  useEffect(() => {
    const UpcomingMovies = async () => {
      const upComingResult = await getUpcomingMovies()
      const trendingResult = await getTrendingMedia()
      dispatch(HeroActions.setUpcomingMovies(upComingResult))
      dispatch(HeroActions.setTrendingMedia(trendingResult))
    }
    UpcomingMovies()
  }, [])

  return (
    <div className="bg-black-default" id="hero-section">
      <div className="container mx-auto grid grid-cols-2 gap-2 text-white items-center bg-black-nav h-[563px]">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper w-full relative col-end-2 flex flex-row py-1 h-full "
        >
          {trendingMedia?.slice(0, 9).map((item: any) => (
            <SwiperSlide>
              <div className="relative w-full h-full">
                <img
                  className="absolute inset-0 h-full w-full object-cover"
                  src={`${baseUrl}${item.backdrop_path}`}
                />

                <div className="swiper-container">
                  <div className="swiper-button-prev"></div>
                  <div className="swiper-button-next"></div>
                </div>
                <div
                  className="flex flex-row absolute bottom-0 left-5"
                  id="movie-card-section"
                >
                  <MovieCard
                    height="53px"
                    width="39px"
                    cardId={item.id}
                    onBookmarkHandler={() => selectHandler(item.id)}
                    bgfillColor={"#DCB116"}
                    iconFillColor={ "#000000"}
                    imgUrl={`${baseUrl}${item.poster_path}`}
                  />
                </div>

                <div
                  id="heading"
                  className="absolute w-26 left-48 pb-10 bottom-5 gap-y-2 flex flex-col"
                >
                  <span className="font-semibold leading-9 text-3xl">
                    {item.title || item.original_name}
                  </span>
                  <span className="font-medium leading-5 text-md">
                    {item.release_date
                      ? item?.release_date
                      : item?.first_air_date}
                  </span>
                  <div className="flex flex-row gap-x-2">
                    <StarIcon strokeWidth="2" className={"w-5 h-5"} />
                    <span className="mt-0.5">
                      {" "}
                      {item.vote_average.toPrecision(2)}
                    </span>
                  </div>
                  <span className="truncate line-clamp-2 whitespace-normal w-96  h-[51px]">
                    {item.overview}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div
          id="side-preview"
          className="px-4 h-full bg-gradient-to-b from-black-nav to-black-default"
        >
          <div className="font-bold text-title my-4 text-yellow-default">
            Up Next
          </div>
          {upComingMovies &&
            upComingMovies.slice(0, 3).map((item: any) => (
              <div
                id="side-preview-card"
                className="flex flex-row gap-x-4 my-2"
              >
                <div className="w-[88px] h-[130px] flex">
                  <img src={`${baseUrl + item.poster_path}`} alt="" />
                </div>
                <div className="group hover:cursor-pointer">
                  <div className="flex flex-row gap-x-2">
                    <PlayCircleSolidIcon
                      height="32"
                      width="32"
                      className={
                        "group-hover:cursor-pointer group-hover:text-yellow-default"
                      }
                    />

                    <h4 className="mt-1">{item.original_title}</h4>
                  </div>
                  <div className=" group-hover:cursor-pointer flex flex-col gap-y-2 mt-2">
                    <div className="w-96 shrink h-12 whitespace-normal truncate mb-2">
                      {item.overview}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <div className="pt-4 flex font-bold text-title hover:text-yellow-hover hover:cursor-pointer">
            Browse Trailers
            <span className="mt-1 hover:cursor-hover hover:text-yellow-default">
              <RightChevronIcon className="w-6 h-6" strokeWidth="3.5" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default HeroSection
