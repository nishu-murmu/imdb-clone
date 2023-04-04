import { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../../utils/contexts/authContext";
import { RootState } from "../../utils/types";
import { Link, useNavigate } from "react-router-dom";
import { CheckMarkIcon, PlusIcon, StarIcon, WarningIcon } from "../media/Icons";
import { BookMarkCheckImage, BookMarkImage } from "../media/Images";
import { getMovieDetails } from "../../utils/apiFunctions";
import { MovieCardAction } from "../../store/reducers/movieCardSlice";
import useOnClickPreview from "../../utils/customHooks/useOnClickPreview";
import useSelectMedia from "../../utils/customHooks/useSelectMedia";
import useLocaleStorage from "../../utils/customHooks/useLocaleStorage";

const MovieCard = (props: any) => {
  const authContext = useContext(AuthContext);
  const { currentUser } = authContext;
  const { getLocaleStorage } = useLocaleStorage();
  const selectedList = getLocaleStorage("selectedItems") || useSelector((state: RootState) => state.hero.selectedItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { onClickPreviewHandler } = useOnClickPreview();
  const { selectHandler } = useSelectMedia();

  const selectItems = useSelector(
    (state: RootState) => state.hero.selectedItems
  );
  useEffect(() => {}, [selectItems]);

  return (
    <div
      className={` mb-1 group relative w-[165px] ${
        props.isCarousal ? "h-[470px]" : "h-[244px]"
      } `}
    >
      {!currentUser && !getLocaleStorage("currentUser") ? (
        <Link to={"/signin"}>
          <div>
            <div className="absolute top-0 left-0 group-hover:cursor-pointer">
              <BookMarkImage
                fillColor={props.bgfillColor}
                width={props.width}
                height={props.height}
              />
            </div>
            <div className="absolute top-1 left-[8px] mt-2 ml-.5 group-hover:cursor-pointer">
              <PlusIcon fillColor={props.iconFillColor} />
            </div>
          </div>
        </Link>
      ) : (
        <div onClick={() => selectHandler(props.cardId)} className="w-auto">
          <div className="absolute top-0 left-0 group-hover:cursor-pointer">
            {currentUser && selectedList?.includes(props.cardId) ? (
              <BookMarkImage
                fillColor={props.bgfillColor}
                width={props.width}
                height={props.height}
              />
            ) : (
              <BookMarkImage
                fillColor={props.bgfillColor}
                width={props.width}
                height={props.height}
              />
            )}
          </div>
          <div className="absolute top-1 left-[8px] mt-2 ml-.5 group-hover:cursor-pointer">
            {currentUser && selectedList?.includes(props.cardId) ? (
              <CheckMarkIcon
                height="25"
                width="25"
                fillColor={props.iconFillColor}
              />
            ) : (
              <PlusIcon fillColor={props.iconFillColor} />
            )}
          </div>
        </div>
      )}

      {props.poster_path !== undefined ? (
        <img
          src={props.imgUrl}
          alt=""
          onClick={() => {
            onClickPreviewHandler({
              mediaType: props.mediaType,
              cardId: props.cardId,
            });
          }}
        />
      ) : (
        <img
          src="/src/assets/svgs/placeholder.png"
          alt="no image found"
          className="object-fit h-full"
        />
      )}

      <div className="h-full text-white block">
        <div className="flex gap-x-4 my-2 px-2">
          <div>{props.ratings}</div>
          <button className="hover:bg-black-nav-hover p-1 rounded-sm">
            <StarIcon
              strokeWidth="1.5"
              strokeColor="yellow"
              className="h-6 w-6"
            />
          </button>
        </div>
        <div className="h-[90px] hover:underline hover:cursor-pointer">
          {props.title}
        </div>
        <div className="p-2 bg-black-nav-hover rounded-sm">
          <button className=" mx-auto flex gap-x-3">
            {currentUser &&
            selectedList &&
            selectedList?.includes(props.cardId) ? (
              <CheckMarkIcon height="20" width="20" fillColor="green" />
            ) : (
              <PlusIcon fillColor="#518DD8" />
            )}
            <div className="text-blue-150">WatchList</div>
          </button>
        </div>
        <div className="flex justify-between mt-2">
          <div className="rounded-sm group group-hover:bg-black-nav-hover p-2">
            <button className="group-hover:bg-black-nav-hover">Trailer</button>
          </div>
          <div className="p-1 mt-2 w-8 h-8 rounded-full hover:bg-black-nav-hover">
            <WarningIcon height="16px" width="16px" fillColor="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
