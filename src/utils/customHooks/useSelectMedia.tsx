import { useSelector, useDispatch } from "react-redux";
import { HeroActions } from "../../store/reducers/heroSlice";
import { RootState } from "../types";

const useSelectMedia = () => {
  const dispatch = useDispatch();
  const selectedItems = useSelector((state: RootState) => state.hero.selectedItems);
  const selectHandler = (id: number) => {
    if (selectedItems?.includes(id)) {
      dispatch(
        HeroActions.setSelectedItems(
          selectedItems.filter((i: number) => i !== id)
        )
      );
    } else {
      dispatch(HeroActions.setSelectedItems([...(selectedItems as []), id]));
    }
  };
  window.localStorage.setItem('selectedItems', JSON.stringify(selectedItems))
  return { selectHandler };
};

export default useSelectMedia;
