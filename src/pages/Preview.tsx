import React, { useEffect } from "react";
import { useLocation } from "react-router";
import MainLayout from "../components/layouts/MainLayout";
import { getMovieDetails } from "../utils/apiFunctions";
const Preview: React.FC = () => {
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const location = useLocation()

  const mediaDetail = location.state
  return (
    <MainLayout>
      <div className="h-screen bg-black-nav-hover text-white">
        <div className="container mx-auto">
          <div className="pt-10 px-4 flex flex-col">
            <div className="flex">
              <div className="w-[520px]">
                <img src={`${baseUrl}/${mediaDetail.poster_path}`} alt="" className="h-[400px]"/>
              </div>
              {/* Main Preview */}
              <div className="flex flex-col gap-y-2 py-4 mx-8">
                <div>
                  <div className="text-5xl font-bold">{mediaDetail.title || mediaDetail.original_name}</div>
                  <div className="text-md">{mediaDetail.tagline}</div>
                </div>
                <div>
                  <div>{mediaDetail.vote_average}</div>
                  <div>({mediaDetail.vote_count}) votes</div>
                </div>
                {mediaDetail.runtime && <div>{mediaDetail.runtime} mins</div>}
                {mediaDetail.number_of_episodes && <div>No of Episodes: {mediaDetail.number_of_episodes}</div>}
                <div>Release Date: {mediaDetail.release_date || mediaDetail.first_air_date}</div>
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

              <div className="text-lg my-2 font-semibold flex justify-center">
                Production Companies
              </div>
              <div className="flex gap-x-2">
              {mediaDetail?.production_companies?.map((item: any) => (
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
