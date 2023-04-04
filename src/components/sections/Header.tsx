import {
  ChangeEvent,
  ChangeEventHandler,
  useContext,
  useEffect,
  useRef,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ArrowDownFillIcon,
  BookMarkPlusIcon,
  CollectionPlayIcon,
  CrossIcon,
  FilmIcon,
  HamBurgerIcon,
  SearchIcon,
  TelevisionIcon,
} from "../media/Icons";
import { LogoImage } from "../media/Images";
import { getSearchMovie } from "../../utils/apiFunctions";
import { HeaderActions } from "../../store/reducers/headerSlice";
import { RootState } from "../../utils/types";
import { Link } from "react-router-dom";
import { AuthContext } from "../../utils/contexts/authContext";
import useOnClickPreview from "../../utils/customHooks/useOnClickPreview";
import useLocaleStorage from "../../utils/customHooks/useLocaleStorage";
import { debounce } from "../../utils/commonFunctions";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const { onClickPreviewHandler } = useOnClickPreview();
  const searchText = useSelector((state: RootState) => state.header.searchText);
  const isMenu = useSelector((state: RootState) => state.header.isMenu);
  let isDropdown = useSelector((state: RootState) => state.header.isDropDown);
  const authContext = useContext(AuthContext);
  const { setLocaleStorage, getLocaleStorage } = useLocaleStorage();
  const { currentUser, signOut } = authContext;

  if (currentUser && currentUser.displayName)
    setLocaleStorage("currentUser", JSON.stringify(currentUser?.displayName));
  const searchedMovies = useSelector(
    (state: RootState) => state.header.searchedMovies
  );
  const selectedList =
    getLocaleStorage("selectedItems") ||
    useSelector((state: RootState) => state.hero.selectedItems);
  const selectItems = useSelector(
    (state: RootState) => state.hero.selectedItems
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const outSideClickHandler = (event: Event | null) => {
    if (
      isDropdown &&
      dropdownRef?.current &&
      dropdownRef?.current?.contains(event?.target as Node)
    )
      isDropdown = false;
    dispatch(HeaderActions.setIsDropDown(false));
  };

  const toggleMenuHandler = (isMenu: boolean) => {
    dispatch(HeaderActions.setIsMenu(isMenu));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target?.value;
    !inputValue && dispatch(HeaderActions.setIsDropDown(false));
    dispatch(HeaderActions.setSearchText(inputValue));
  };

  useEffect(() => {
    const getData = async () => {
      let result = await getSearchMovie(searchText);
      dispatch(HeaderActions.setSearchedMovies(result));
    };
    const debouncedGetData = debounce(getData, 300);
    debouncedGetData()
  }, [searchText]);

  useEffect(() => {
    document.addEventListener("click", outSideClickHandler, true);
    return () =>
      document.removeEventListener("click", outSideClickHandler, true);
  }, [isDropdown]);

  useEffect(() => {}, [selectItems]);

  return (
    <div className="bg-black-nav h-[56px] text-white w-full">
      {/* overlay start */}
      {isMenu && (
        <div
          ref={menuRef}
          className="transition duration-500 ease-in-out h-screen overflow-hidden z-10 block fixed p-28 w-full  bg-black-overlay"
        >
          <div className="container mx-auto flex flex-col gap-x-6 justify-around">
            <div id="overlay-heading" className="flex justify-between">
              <div className="hover:cursor-pointer">
                <LogoImage height="56px" width="98px" />
              </div>
              <div
                className="h-14 w-14 bg-yellow-default relative rounded-full hover:cursor-pointer"
                onClick={() => toggleMenuHandler(false)}
              >
                <CrossIcon
                  height="30px"
                  width="30px"
                  className="absolute left-[13px] top-[13px]"
                />
              </div>
            </div>
            <div
              id="overlay-content"
              className="flex justify-between gap-x-4 px-10 my-10"
            >
              <div>
                <div className="font-extrabold flex flex-col ">
                  <div className="flex gap-x-2">
                    <FilmIcon fillColor="yellow" className="h-10 w-10" />
                    <div className="text-2xl">Movies</div>
                  </div>
                  <div className="mt-4 pl-12">
                    <ul className="leading-9">
                      <Link
                        to={"/list"}
                        onClick={() => dispatch(HeaderActions.setIsMenu(false))}
                      >
                        <li className="hover:cursor-pointer hover:underline">
                          Popular Movies
                        </li>
                      </Link>
                      <li className="hover:cursor-pointer hover:underline">
                        Top Rated Movies
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        Upcoming Movies
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className=" font-extrabold flex flex-col">
                  <div className="flex gap-x-2">
                    <CollectionPlayIcon
                      height="35"
                      width="35"
                      fillColor="yellow"
                    />
                    <div className="text-2xl">TV Shows</div>
                  </div>
                  <div className="mt-4 pl-12">
                    <ul className="leading-9">
                      <li className="hover:cursor-pointer hover:underline">
                        Top 250 TV Shows
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        Most Popular TV Shows
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        TV Shows by Genres
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <div className="font-extrabold flex flex-col">
                  <div className="flex gap-x-2">
                    <TelevisionIcon fillColor="yellow" className="h-10 w-10" />
                    <div className="text-2xl">Watch</div>
                  </div>
                  <div className="mt-4 pl-12">
                    <ul className="leading-9">
                      <li className="hover:cursor-pointer hover:underline">
                        IMDb Originals
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        IMDb Picks
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        IMDb Podcasts
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* overlay end */}
      <div className="pt-2 container h-12 flex text-white items-center gap-2 text-sm  font-bold mx-auto">
        <Link to={"/"}>
          <LogoImage width={"64"} height={"32"} />
        </Link>

        <button
          onClick={() => toggleMenuHandler(true)}
          className="flex gap-x-0.5 hover:bg-black-nav-hover rounded-md px-4 py-2"
        >
          <div>
            <HamBurgerIcon />
          </div>
          <p className="mt-0.5">Menu</p>
        </button>

        <div className=" block relative">
          <button
            id="search-bar"
            className="flex bg-white relative text-black-nav rounded-sm flex-row"
          >
            <div className="flex p-1 mt-1">
              <p className="px-1">All</p>
              <div className="mt-0.5">
                <ArrowDownFillIcon />
              </div>
            </div>
            <div className="p-1.5 border-l border-black-nav-hover">
              <input
                onChange={(e: ChangeEvent<HTMLInputElement>): void => {
                  dispatch(HeaderActions.setIsDropDown(true));
                  handleInputChange(e);
                }}
                type="text"
                id="search-text"
                placeholder="Search IMDb"
                className=" font-thin outline-none w-[580px]"
              />
            </div>
            <div className="p-1">
              <SearchIcon />
            </div>
          </button>

          {/* Search Results */}
          <div
            ref={dropdownRef}
            className={`w-[677.783px] ${
              isDropdown ? "block" : "hidden"
            } text-sm z-10 font-extralight divide-y divide-slate-700 border border-black-nav absolute`}
          >
            {searchedMovies &&
              searchText &&
              searchedMovies.slice(0, 7).map((item: any) => (
                <div
                  key={item.id}
                  onClick={() =>
                    onClickPreviewHandler({
                      mediaType: "movie",
                      cardId: item.id,
                    })
                  }
                  className="p-2 h-24 flex group bg-black-nav w-full gap-2 hover:bg-black-nav-hover hover:cursor-pointer"
                >
                  <div className="h-16 w-14 group-hover:bg-black-nav-hover group-hover:cursor-pointer">
                    <img src={`${baseUrl + item.poster_path}`} alt="" />
                  </div>
                  <div className="mt-1 group-hover:bg-black-nav-hover group-hover:cursor-pointer">
                    <h4 className="group-hover:bg-black-nav-hover group-hover:cursor-pointer">
                      {item.original_title}
                    </h4>
                    <p className="group-hover:bg-black-nav-hover group-hover:cursor-pointer">
                      {item.release_date.split("-")[0]}
                    </p>
                  </div>
                </div>
              ))}
            {searchText && searchedMovies?.length === 0 && (
              <div className="p-2 h-12 flex group bg-black-nav w-full gap-2 hover:bg-black-nav-hover hover:cursor-pointer">
                <p className="left-12 relative mt-1 font-medium text-search">
                  See all result for "{searchText}"
                </p>
              </div>
            )}
          </div>
        </div>

        <button id="imdb-pro" className="hover:bg-black-nav-hover rounded-md">
          <div className="px-3 py-2">
            <img src="./src/assets/svgs/imdb-pro.png" alt="imdb-pro" />
          </div>
        </button>
        <div className="w-[1px] h-8 my-0 mx-2 border border-[#383838]"></div>
        {!currentUser?.displayName ? (
          <Link to={"/signin"}>
            <button
              id="watch-list"
              className="flex  gap-x-1 px-4 py-1 rounded-md hover:bg-black-nav-hover"
            >
              <div>
                <BookMarkPlusIcon
                  height="20px"
                  width="20px"
                  fillColor="white"
                />
              </div>
              <span>WatchList</span>
              {selectedList!.length > 0 && (
                <span className="bg-yellow-default rounded-md px-2 text-black-default">
                  {selectedList?.length}
                </span>
              )}
            </button>
          </Link>
        ) : (
          <Link to={"/watchlist"}>
            <button
              id="watch-list"
              className="flex  gap-x-1 px-4 py-1 rounded-md hover:bg-black-nav-hover"
            >
              <span>WatchList</span>
              {selectedList!.length > 0 && (
                <span className="bg-yellow-default rounded-md px-2 text-black-default">
                  {getLocaleStorage("selectedItems").length ||
                    selectedList?.length}
                </span>
              )}
            </button>
          </Link>
        )}
        {/* display profile when logged in */}
        <div className="flex flex-col relative">
          <div>
            {getLocaleStorage("currentUser") && currentUser?.displayName ? (
              <button
                className="rounded-md px-4 py-2 hover:bg-black-nav-hover"
                id="sign-in"
                onClick={() =>
                  dispatch(HeaderActions.setIsDropDown(!isDropdown))
                }
              >
                {getLocaleStorage("currentUser") ||
                  currentUser?.displayName ||
                  "test"}
              </button>
            ) : (
              <Link to={"/signinCover"}>
                <button
                  className="rounded-md px-4 py-2 hover:bg-black-nav-hover"
                  id="sign-in"
                >
                  Sign In
                </button>
              </Link>
            )}
          </div>
        </div>

        {currentUser?.displayName ? (
          <button
            id="en"
            onClick={signOut}
            className="flex rounded-md px-4 py-2 hover:bg-black-nav-hover"
          >
            Sign Out
          </button>
        ) : (
          <button
            id="en"
            className="flex rounded-md px-4 py-2 hover:bg-black-nav-hover"
          >
            EN
            <div className="mt-0.5 pl-1">
              <ArrowDownFillIcon />
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
