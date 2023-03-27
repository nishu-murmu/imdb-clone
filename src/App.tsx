import HomePage from "./components/pages/Home"
import Register from "./components/pages/Register"
import SignIn from "./components/pages/SignIn"
import { Routes, Route } from "react-router"
import Preview from "./components/pages/Preview"
import List from "./components/pages/List"

function App() {
    return (
        <section className=' w-full h-full font-roboto'>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/register" element={<Register />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/preview" element={<Preview />} />
                <Route path="/list" element={<List />} />
            </Routes>
        </section>
    )
}

export default App
