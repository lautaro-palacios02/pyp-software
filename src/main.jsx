import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { ConsentProvider } from "./components/privacy/ConsentProvider"
createRoot(document.getElementById("root")).render(<StrictMode><ConsentProvider><App /></ConsentProvider></StrictMode>)
