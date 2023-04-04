import HomePage from "./pages/Home";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { Routes, Route } from "react-router";
import Preview from "./pages/Preview";
import List from "./pages/List";
import WatchList from "./pages/WatchList";
import SignInCover from "./pages/SignInCover";
import Protected from "./routes/privateRoute";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./utils/types";
import ErrorBoundary from "./pages/404";

function App() {
  const dispatch = useDispatch();
  const mediaId = useSelector((state: RootState) => state.movieCard.mediaId);

  return (
    <section className=" w-full h-full font-roboto">
      <Routes>
        <Route path="*" element={<ErrorBoundary/>}/>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path={`/preview/${mediaId}`} element={<Preview />} />
        <Route path="/list" element={<List />} />
        <Route
          path="/watchlist"
          element={
            <Protected>
              <WatchList />
            </Protected>
          }
        />
        <Route path="/signinCover" element={<SignInCover />} />
      </Routes>
    </section>
  );
}

export default App;
