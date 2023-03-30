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
import { getPopularMovies, getLatestMovies, getPopularShows } from "../../utils/apiFunctions";
import { ListActions } from "../../store/reducers/listSlice";

const Carousal: React.FC = () => {
    const dispatch = useDispatch()
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
      const moviesResult = await getPopularShows()
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
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="flex gap-x-4">
              {popularShows?.slice(0, 7).map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.original_name}
                  isCarousal={true}
                  ratings={movie.vote_average}
                  imgUrl={`${baseUrl}${movie.poster_path}`}
                />
              ))}
            </SwiperSlide>
            <SwiperSlide className="flex gap-x-4">
              {popularShows?.slice(0, 7).map((movie) => (
                <MovieCard
                  isCarousal={true}
                  title={movie.original_name}
                  key={movie.id}
                  ratings={movie.vote_average}
                  imgUrl={`${baseUrl}${movie.poster_path}`}
                />
              ))}
            </SwiperSlide>
            <SwiperSlide className="flex gap-x-4">
              {popularShows?.slice(0, 7).map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.original_name}
                  isCarousal={true}
                  ratings={movie.vote_average}
                  imgUrl={`${baseUrl}${movie.poster_path}`}
                />
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="text-2xl text-white font-bold">Fan Favourites</div>
        <div className="text-gray-500 pb-4">Movies for you</div>
        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            //   delay: 2500,
            //   disableOnInteraction: false,
            // }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide className="flex gap-x-4">
              {popularMovies?.slice(0, 7).map((movie) => (
                <MovieCard
                  key={movie.id}
                  isCarousal={true}
                  title={movie.title}
                  ratings={movie.vote_average}
                  imgUrl={`${baseUrl}${movie.poster_path}`}
                />
              ))}
            </SwiperSlide>
            <SwiperSlide className="flex gap-x-4">
              {popularMovies?.slice(0, 7).map((movie) => (
                <MovieCard
                  key={movie.id}
                  title={movie.title}
                  ratings={movie.vote_average}
                  isCarousal={true}
                  imgUrl={`${baseUrl}${movie.poster_path}`}
                />
              ))}
            </SwiperSlide>
            <SwiperSlide className="flex gap-x-4">
              {popularMovies?.slice(0, 7).map((movie) => (
                <MovieCard
                  key={movie.id}
                  isCarousal={true}
                  title={movie.title}
                  ratings={movie.vote_average}
                  imgUrl={`${baseUrl}${movie.poster_path}`}
                />
              ))}
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};
export default Carousal;