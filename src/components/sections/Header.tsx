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
  HamBurgerIcon,
  SearchIcon,
} from "../media/Icons";
import { LogoImage } from "../media/Images";
import {
  getSearchMovie,
  getUpcomingMovies,
  getTrendingMedia,
  getPopularMovies,
} from "../../utils/apiFunctions";
import { HeaderActions } from "../../store/reducers/headerSlice";
import { RootState } from "../../utils/types";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const searchText = useSelector((state: RootState) => state.header.searchText);
  const isMenu = useSelector((state: RootState) => state.header.isMenu);
  let isDropdown = useSelector((state: RootState) => state.header.isDropDown);
  const authContext = useContext(AuthContext);
  const { currentUser, signOut } = authContext;

  if(currentUser && currentUser.displayName)
  window.localStorage.setItem('currentUser', JSON.stringify(currentUser?.displayName))

  const searchedMovies = useSelector(
    (state: RootState) => state.header.searchedMovies
  );
    const selectedList = JSON.parse(window.localStorage.getItem("selectedItems") || "null") || useSelector(
      (state: RootState) => state.hero.selectedItems
    );
  const dropdownRef = useRef<HTMLDivElement>(null);

  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const getData = async () => {
      let result = await getSearchMovie(searchText);
      dispatch(HeaderActions.setSearchedMovies(result));
    };
    getData();
  }, [searchText]);

  const outSideClickHandler = (event: Event | null) => {
    if (
      isDropdown &&
      dropdownRef?.current &&
      dropdownRef?.current?.contains(event?.target as Node)
    )
      isDropdown = false;
    dispatch(HeaderActions.setIsDropDown(false));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target?.value;
    !inputValue && dispatch(HeaderActions.setIsDropDown(false));
    dispatch(HeaderActions.setSearchText(inputValue));
  };
  useEffect(() => {
    document.addEventListener("click", outSideClickHandler, true);
    return () =>
      document.removeEventListener("click", outSideClickHandler, true);
  }, [isDropdown]);
  useEffect(() => {
  }, [selectedList])

  return (
    <div className="bg-black-nav h-[56px] text-white w-full">
      <div className="pt-2 container h-12 flex text-white items-center gap-2 text-sm  font-bold mx-auto">
        <Link to={"/"}>
          <LogoImage width={"64"} height={"32"} />
        </Link>

        <button
          onClick={() => dispatch(HeaderActions.setIsMenu(true))}
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
        {!currentUser?.displayName?<Link to={"/signin"}>
          <button
            id="watch-list"
            className="flex  gap-x-1 px-4 py-1 rounded-md hover:bg-black-nav-hover"
          >
            <div>
              <BookMarkPlusIcon />
            </div>
            <span>WatchList</span>
            {selectedList!.length > 0 && (
              <span className="bg-yellow-default rounded-md px-2 text-black-default">
                {selectedList?.length}
              </span>
            )}
          </button>
        </Link>:<Link to={"/list"}>
          <button
            id="watch-list"
            className="flex  gap-x-1 px-4 py-1 rounded-md hover:bg-black-nav-hover"
          >
            <div>
              <BookMarkPlusIcon />
            </div>
            <span>WatchList</span>
            {selectedList!.length > 0 && (
              <span className="bg-yellow-default rounded-md px-2 text-black-default">
                {selectedList?.length}
              </span>
            )}
          </button>
        </Link>}
        {/* display profile when logged in */}
        <div className="flex flex-col relative">
          <div>
            {localStorage.getItem("currentUser") ? (
              <button
                className="rounded-md px-4 py-2 hover:bg-black-nav-hover"
                id="sign-in"
                onClick={() =>
                  dispatch(HeaderActions.setIsDropDown(!isDropdown))
                }
              >
                {JSON.parse(localStorage.getItem("currentUser") || "null") ||
                  currentUser?.displayName}
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
          {isDropdown && (
            <div className="mt-10 ml-[-75px] rounded-md absolute bg-black-default w-[136px]  flex flex-col hover:cursor-pointer">
              <div className="w-full text-center text-[16px] py-4 tex-lg hover:bg-black-nav-hover font-bold border-b flex">
                WatchList
              </div>
              <div
                className="w-full hover:bg-black-nav-hover text-center text-[16px] py-4 tex-lg font-bold"
                onClick={signOut}
              >
                LogOut
              </div>
            </div>
          )}
        </div>

        <button
          id="en"
          className="flex rounded-md px-4 py-2 hover:bg-black-nav-hover"
        >
          EN
          <div className="mt-0.5 pl-1">
            <ArrowDownFillIcon />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
