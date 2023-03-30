import { getMovieDetails } from "../apiFunctions";
import { useDispatch, useSelector } from "react-redux";
import { MovieCardAction } from "../../store/reducers/movieCardSlice";
import { useNavigate } from "react-router";

const useOnClickPreview = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickPreviewHandler = async ({
    mediaType,
    cardId,
  }: {
    mediaType: string;
    cardId: number;
  }) => {
    const mediaDetail = await getMovieDetails(mediaType, cardId);
    dispatch(MovieCardAction.setMediaId(cardId));
    navigate(`/preview/${cardId}`, { state: mediaDetail });
  };

  return { onClickPreviewHandler };
};

export default useOnClickPreview;
