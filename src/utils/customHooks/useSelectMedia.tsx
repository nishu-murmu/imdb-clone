import { useSelector, useDispatch } from "react-redux";
import { HeroActions } from "../../store/reducers/heroSlice";
import { RootState } from "../types";
import useLocaleStorage from "./useLocaleStorage";

const useSelectMedia = () => {
  const dispatch = useDispatch();
  const { getLocaleStorage } = useLocaleStorage();
  const selectedItems = getLocaleStorage("selectedItems") ||useSelector(
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
