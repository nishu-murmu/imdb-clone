import { Pagination, Navigation, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import MovieCard from "../CommonComponents/MovieCard";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../utils/types";
import { useEffect } from "react";
import {
  getPopularMovies,
  getPopularShows,
} from "../../utils/apiFunctions";
import { ListActions } from "../../store/reducers/listSlice";
import { noOfCards } from "../../utils/constants";

const Carousal: React.FC = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(
    (state: RootState) => state.list.popularMovies
  );
  const popularShows = useSelector(
    (state: RootState) => state.list.popularShows
  );
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getPopularMovieList = async () => {
      const result = await getPopularMovies();
      const moviesResult = await getPopularShows();
      dispatch(ListActions.getPopularMovies(result));
      dispatch(ListActions.getPopularShows(moviesResult));
    };
    getPopularMovieList();
  }, []);

  return (
    <div className="bg-black-default text-white py-6" id="carousal-section">
      <div className="container mx-auto">
        <div className="text-3xl text-yellow-default font-bold">
          What to Watch
        </div>
        <div className="text-2xl text-white font-bold">Top Picks</div>
        <div className="text-gray-500 pb-4">Tv shows for you</div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {noOfCards.map((item: number) => (
              <SwiperSlide className="flex gap-x-4">
                {popularShows?.slice(item - 7, item).map((movie) => (
                  <MovieCard
                    key={movie.id}
                    title={movie.original_name}
                    cardId={movie.id}
                    bgfillColor={"#DCB116"}
                    iconFillColor={"#000000"}
                    mediaType={"tv"}
                    isCarousal={true}
                    ratings={movie.vote_average}
                    poster_path={movie.poster_path}
                    imgUrl={`${baseUrl}${movie.poster_path}`}
                  />
                ))}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="text-2xl text-white font-bold">Fan Favourites</div>
        <div className="text-gray-500 pb-4">Movies for you</div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            {noOfCards.map((n: number) => (
              <SwiperSlide className="flex gap-x-4">
                {popularMovies?.slice(n - 7, n).map((movie) => (
                  <MovieCard
                    key={movie.id}
                    cardId={movie.id}
                    bgfillColor={"#DCB116"}
                    iconFillColor={"#000000"}
                    mediaType={"movie"}
                    isCarousal={true}
                    title={movie.title}
                    ratings={movie.vote_average}
                    imgUrl={`${baseUrl}${movie.poster_path}`}
                    poster_path={movie.poster_path}
                  />
                ))}
              </SwiperSlide>
            ))}
            <div className="swiper-pagination swiper-pagination-bullets hidden"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Carousal;
