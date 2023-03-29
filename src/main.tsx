import { Provider } from "react-redux"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { store } from "./store"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./contexts/authContext"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <BrowserRouter>
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </Provider>
);
