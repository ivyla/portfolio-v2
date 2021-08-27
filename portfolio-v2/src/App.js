import "./index.css"
import "tailwindcss/tailwind.css"
import Home from "./pages/Home"
// import "./pages/About"
// import "./pages/Contact"
// import "./pages/Experience"
// import "./pages/Projects"

function App() {
    return (
        <div className="flex flex-col">
            <Home />
            {/* <Home />
            <Home /> */}
        </div>
    )
}

export default App
