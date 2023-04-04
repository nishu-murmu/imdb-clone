import React, { useContext, useEffect } from "react";
import { useLocation } from "react-router";
import MainLayout from "../components/layouts/MainLayout";
import { getMovieDetails } from "../utils/apiFunctions";
import { BookMarkImage } from "../components/media/Images";
import { AuthContext } from "../utils/contexts/authContext";
import useLocaleStorage from "../utils/customHooks/useLocaleStorage";
import { useSelector } from "react-redux";
import { RootState } from "../utils/types";
import { CheckMarkIcon, PlusIcon } from "../components/media/Icons";
import useSelectMedia from "../utils/customHooks/useSelectMedia";
import { Link } from "react-router-dom";
const Preview: React.FC = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const location = useLocation();
  const { getLocaleStorage } = useLocaleStorage();
  const selectedList =
    getLocaleStorage("selectedItems") ||
    useSelector((state: RootState) => state.hero.selectedItems);
  const { selectHandler } = useSelectMedia();
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  const selectItems = useSelector(
    (state: RootState) => state.hero.selectedItems
  );
  useEffect(() => {}, [selectItems]);

  const mediaDetail = location.state;
  return (
    <MainLayout>
      <div className="h-screen bg-black-nav-hover text-white">
        <div className="container mx-auto">
          <div className="pt-10 px-4 flex flex-col">
            <div className="flex">
              <div className="w-[520px] relative">
                {mediaDetail.poster_path !== null ? (
                  <img
                    src={`${baseUrl}/${mediaDetail.poster_path}`}
                    alt=""
                    className="h-[400px]"
                  />
                ) : (
                  <img
                    src="/src/assets/svgs/placeholder.png"
                    alt="no image found"
                    className="object-fit h-full"
                  />
                )}

                {!currentUser && (
                  <Link to="/signin">
                    <div className="absolute top-0 left-2">
                      <BookMarkImage
                        height="65px"
                        width="65px"
                        fillColor="yellow"
                      />

                      <div className="absolute top-4 left-5">
                        <PlusIcon fillColor="black" className="top-6 left-8" />
                      </div>
                    </div>
                  </Link>
                )}
                {currentUser && mediaDetail.poster_path !== null && (
                  <div
                    className="absolute top-0 left-2"
                    onClick={() => selectHandler(mediaDetail.id)}
                  >
                    <BookMarkImage
                      height="65px"
                      width="65px"
                      fillColor="yellow"
                    />
                    {currentUser && selectedList?.includes(mediaDetail.id) ? (
                      <div className="absolute top-2 left-3">
                        <CheckMarkIcon
                          height="40px"
                          width="40px"
                          fillColor="green"
                        />
                      </div>
                    ) : (
                      <div className="absolute top-4 left-5">
                        <PlusIcon fillColor="black" className="top-6 left-8" />
                      </div>
                    )}
                  </div>
                )}
              </div>
              {/* Main Preview */}
              <div className="flex flex-col gap-y-2 py-4 mx-8">
                <div>
                  <div className="text-5xl font-bold">
                    {mediaDetail.title || mediaDetail.original_name}
                  </div>
                  <div className="text-md">{mediaDetail.tagline}</div>
                </div>
                <div>
                  <div>{mediaDetail.vote_average}</div>
                  <div>({mediaDetail.vote_count}) votes</div>
                </div>
                {mediaDetail.runtime && <div>{mediaDetail.runtime} mins</div>}
                {mediaDetail.number_of_episodes && (
                  <div>No of Episodes: {mediaDetail.number_of_episodes}</div>
                )}
                <div>
                  Release Date:{" "}
                  {mediaDetail.release_date || mediaDetail.first_air_date}
                </div>
                <div className="flex gap-x-2">
                  {mediaDetail?.genres?.map((genre: any) => (
                    <button className="border-1 border-blue-500 hover:border-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                      {genre.name}
                    </button>
                  ))}
                </div>
                <div>
                  <div className="text-3xl font-semibold">Synopsis</div>
                  <div>{mediaDetail.overview}</div>
                </div>
              </div>
            </div>
            {/* Important Links */}
            <div className="w-6/12 mx-auto">
              <div className="text-2xl font-semibold flex justify-center">
                Useful Links
              </div>
              <div>
                <button className="mt-2 flex mx-auto bg-yellow-default px-20 rounded-sm py-2 text-black-default">
                  <a target={"_blank"} href="https://www.imdb.com/">
                    IMDb
                  </a>
                </button>
              </div>

              {mediaDetail?.production_companies && (
                <div>
                  <div className="text-lg my-2 font-semibold flex justify-center">
                    Production Companies
                  </div>
                  <div className="flex gap-x-2">
                    {mediaDetail?.production_companies?.map((item: any) => (
                      <div
                        className={`w-40 h-24 rounded-md ${
                          item.logo_path === null &&
                          "text-black-nav-hover text-center pt-6"
                        } bg-white relative`}
                      >
                        {item.logo_path !== null ? (
                          <img
                            src={`${baseUrl}/${item.logo_path}`}
                            alt={item.name}
                            className="block w-full h-full object-contain"
                          />
                        ) : (
                          <div>{item.name}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Preview;
