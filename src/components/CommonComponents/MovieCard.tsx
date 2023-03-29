import { useContext } from "react"
import { useSelector } from "react-redux"
import { AuthContext } from "../../contexts/authContext"
import { RootState } from "../../utils/types"
import { CheckMarkIcon, PlusIcon } from "../media/Icons"
import { BookMarkCheckImage, BookMarkImage } from "../media/Images"

const MovieCard = (props: any) => {

  const authContext = useContext(AuthContext)
  const {currentUser} = authContext
  const selectedList = useSelector((state:RootState) => state.hero.selectedItems)

  return (
    <div
      className="bg-emerald-300 mb-1 group relative w-[165px] h-[244px] "
      onClick={() => props.onBookmarkHandler()}
    >
      <div className="absolute top-0 left-0 group-hover:cursor-pointer">
        <BookMarkImage
          fillColor={props.bgfillColor}
          width={props.width}
          height={props.height}
        />
      </div>
      <div className="absolute top-1 left-[8px] mt-2 ml-.5 group-hover:cursor-pointer">
        {currentUser &&selectedList?.includes(props.cardId) ? (
          <CheckMarkIcon
            height="25"
            width="25"
            fillColor={props.iconFillColor}
          />
        ) : (
          <PlusIcon fillColor={props.iconFillColor} />
        )}
      </div>
      <img src={props.imgUrl} alt="" />
    </div>
  );
}
export default MovieCard
