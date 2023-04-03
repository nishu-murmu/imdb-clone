import { useSelector, useDispatch } from "react-redux";
import { HeroActions } from "../../store/reducers/heroSlice";
import { RootState } from "../types";

const useSelectMedia = () => {
  const dispatch = useDispatch();
  const selectedItems = JSON.parse(window.localStorage.getItem("selectedItems") || "null") ||useSelector(
    (state: RootState) => state.hero.selectedItems
  );
  const selectHandler = (id: number) => {
    if (selectedItems?.includes(id)) {
      dispatch(HeroActions.setSelectedItems(id));
    } else {
      dispatch(HeroActions.setSelectedItems(id));
    }
  };
  return { selectHandler };
};

export default useSelectMedia;
