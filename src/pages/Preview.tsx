import React, { useEffect } from "react";
import { useLocation } from "react-router";
import MainLayout from "../components/layouts/MainLayout";
import { getMovieDetails } from "../utils/apiFunctions";
const Preview: React.FC = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const location = useLocation()

  const movieDetail = location.state


  return (
    <MainLayout>
      <div className="h-screen bg-black-nav-hover text-white">
        <div className="container mx-auto">
          <div className="pt-10 px-4 flex flex-col">
            <div className="flex">
              <div className="w-[520px] h-[620px]">
                <img src={`${baseUrl}/${movieDetail.poster_path}`} alt="" />
              </div>
              {/* Main Preview */}
              <div className="flex flex-col gap-y-2 py-4 mx-8">
                <div>
                  <div className="text-5xl font-bold">{movieDetail.title}</div>
                  <div className="text-md">{movieDetail.tagline}</div>
                </div>
                <div>
                  <div>{movieDetail.vote_average}</div>
                  <div>({movieDetail.vote_count}) votes</div>
                </div>
                <div>{movieDetail.runtime} mins</div>
                <div>Release Date: {movieDetail.release_date}</div>
                <div className="flex gap-x-2">
                  {movieDetail?.genres?.map((genre: any) => (
                    <button className="border-1 border-blue-500 hover:border-blue-700 text-white font-bold py-2 px-4 rounded-3xl">
                      {genre.name}
                    </button>
                  ))}
                </div>
                <div>
                  <div className="text-3xl font-semibold">Synopsis</div>
                  <div>{movieDetail.overview}</div>
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

              <div className="text-lg my-2 font-semibold flex justify-center">
                Production Companies
              </div>
              <div className="flex gap-x-2">
              {movieDetail?.production_companies?.map((item: any) => (
                  item.logo_path ?(<div className="w-40 h-24 rounded-md bg-white relative">
                    <img
                      src={`${baseUrl}/${item.logo_path}`}
                      alt={item.name}
                      className="block w-full h-full object-contain"
                    />
                  </div>): <div></div>
              ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};
export default Preview;
