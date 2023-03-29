import HomePage from "./pages/Home"
import Register from "./pages/Register"
import SignIn from "./pages/SignIn"
import { Routes, Route } from "react-router"
import Preview from "./pages/Preview"
import List from "./pages/List"
import SignInCover from "./pages/SignInCover"
import Protected from "./routes/privateRoute"

function App() {

  return (
    <section className=" w-full h-full font-roboto">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/preview" element={<Preview />} />
        <Route
          path="/list"
          element={
            <Protected>
              <List />
            </Protected>
          }
        />
        <Route path="/signinCover" element={<SignInCover />} />
      </Routes>
    </section>
  );
}

export default App
