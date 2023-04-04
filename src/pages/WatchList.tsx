import Select from "react-select";
import MainLayout from "../components/layouts/MainLayout";
import { BookMarkPlusIcon, ShareIcon } from "../components/media/Icons";
import { useDispatch, useSelector } from "react-redux";
import {
  RootState,
  fetchedDataProps,
  filterOption,
  listfilterOptions,
} from "../utils/types";
import useOnClickPreview from "../utils/customHooks/useOnClickPreview";
import { useEffect } from "react";
import { getMovieDetails } from "../utils/apiFunctions";
import { ListActions } from "../store/reducers/listSlice";
import moment from "moment";
import useLocaleStorage from "../utils/customHooks/useLocaleStorage";

const WatchList = () => {
  const dispatch = useDispatch();
  const { onClickPreviewHandler } = useOnClickPreview();
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const { getLocaleStorage } = useLocaleStorage();
  const filterSelectValue = useSelector(
    (state: RootState) => state.list?.selectValue
  );
  let movieDetailsArray = useSelector(
    (state: RootState) => state.list.watchlistMovies
  );

  const selectedItems =
    getLocaleStorage("selectedItems") || useSelector((state: RootState) => state.hero.selectedItems);

  useEffect(() => {
    const getWatchListArray = () => {
      selectedItems.forEach(async (item: number) => {
        let value: any = await getMovieDetails("movie", item);
        if(value.status_code === 34) dispatch(ListActions.setWatchlistMovies({}));
        else dispatch(ListActions.setWatchlistMovies(value));
      });
    };
    getWatchListArray();
  }, []);
  movieDetailsArray = Object.values(movieDetailsArray).filter(
    (value, index, self) => {
      return (
        index ===
        self.findIndex((obj) => JSON.stringify(obj) === JSON.stringify(value))
      );
    }
  );
  const filteredMovieDetails = (
    data: any[],
    filterParam: string | undefined
  ) => {
    data = data.map((item: fetchedDataProps) => {
      return {
        ...item,
        release_date: new Date(item?.release_date),
      };
    });
    let result = [...data].sort((a: any, b: any): any => {
      if (filterParam == "runtime") {
        return b?.runtime - a?.runtime;
      }
      if (filterParam == "vote_average")
        return b?.vote_average - a?.vote_average;

      if (filterParam == "popularity") return b?.popularity - a?.popularity;

      if (filterParam == "vote_count") return b?.vote_count - a?.vote_count;
      if (filterParam == "release_date")
        return b?.release_date - a?.release_date;
    });
    if(filterParam === "alphabetical") {
      return [...data].sort((a, b) => a?.title.localeCompare(b?.title));
    }
    result = result.map((item: fetchedDataProps) => {
      return {
        ...item,
        release_date: moment(item?.release_date).format("YYYY-MM-DD"),
      };
    });
    return result;
  };
  const onSelectChangeHandler = (option: filterOption | null) => {
    dispatch(ListActions.setSelectValue(option?.value));

    const filterArray = filteredMovieDetails(movieDetailsArray, option?.value);
    dispatch(ListActions.setWatchlistMovies(filterArray));
  };

  return (
    <MainLayout>
      <div className="w-full  bg-gradient-to-b from-light-100 to-light-50">
        <div className="grid grid-cols-6 h-auto container mx-auto  bg-light-200 w-[1008px]">
          <div
            id="top-chart"
            className={`col-span-4 px-6 py-4 border-r-2 border-gray-500 h-auto`}
          >
            <div className="flex justify-between">
              <div>
                <div id="heading" className="text-3xl">
                  Your Watchlist
                </div>
                <div>PRIVATE</div>
              </div>
              <div id="share" className="">
                <div className="h-10 rounded-full hover:cursor-pointer hover:bg-dark-200 p-1">
                  <ShareIcon />
                </div>
                <div>Share</div>
              </div>
            </div>
            <div className="flex mt-4 border-y-2 border-gray-300 py-2 justify-between">
              <div className="mt-1">{selectedItems?.length} Titles</div>
              <div className="flex gap-x-2">
                <div className="mt-1">Sort by:</div>
                <div className="w-[190px]">
                  <Select
                    onChange={onSelectChangeHandler}
                    name="Filters"
                    defaultValue={filterSelectValue}
                    options={listfilterOptions}
                  />
                </div>
                <div></div>
              </div>
            </div>

            <div className="mt-2 h-auto" id="top-table">
              {/* only when the list is empty */}

              {movieDetailsArray.length === 0 && (
                <div id="no-list" className="py-8">
                  <div className="flex justify-center">
                    <BookMarkPlusIcon
                      fillColor="#B6B6B6"
                      height="130px"
                      width="130px"
                    />
                  </div>
                  <div className=" w-3/4 mx-auto text-center leading-8">
                    <div>Your WatchList is empty</div>
                    <div>
                      Add movies and shows to your Watchlist to keep track of
                      what you want to watch.
                    </div>
                    <div>
                      <a href="#">Browse Popular TV Shows</a>
                    </div>
                    <div>
                      <a href="#">Browse Popular Movies</a>
                    </div>
                  </div>
                </div>
              )}

              {/* only when there is something in the list */}
              {movieDetailsArray.map((item: any) => (
                <div
                  id="list"
                  className="grid gap-4 my-6 grid-flow-col h-44 w-ful"
                >
                  <div className="h-40 w-32 bg-black-nav">
                    {item.poster_path !== undefined ? (
                      <img
                        src={`${baseUrl}${item.poster_path}`}
                        alt="movie Image"
                      />
                    ) : (
                      <img
                        src="/src/assets/svgs/placeholder.png"
                        alt="no image found"
                        className="object-fit h-full"
                      />
                    )}
                  </div>
                 {Object.keys(item).length > 0 && <div>
                    <div
                      onClick={() =>
                        onClickPreviewHandler({
                          mediaType: "movie",
                          cardId: item.id,
                        })
                      }
                      className="text-2xl hover:underline text-blue-800 font-semibold hover:cursor-pointer"
                    >
                      {item.title}
                    </div>
                    <div className={"text-sm"}>
                      {item.genres &&
                        item?.genres.map((item: any) => (
                          <span className="px-0.5">{`${item.name} |`}</span>
                        ))}
                    </div>
                    <div className="text-lg font-semibold">
                      {item.vote_average}
                    </div>
                    <div></div>
                    <div className="text-md">
                      <p>{item.overview}</p>
                    </div>
                  </div>}
                </div>
              ))}
            </div>
          </div>
          <div
            id="genres"
            className="col-span-2 border-l-2 border-gray-500"
          ></div>
        </div>
      </div>
    </MainLayout>
  );
};

export default WatchList;
