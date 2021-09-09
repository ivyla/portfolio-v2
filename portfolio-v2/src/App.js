import "./index.css"
import "tailwindcss/tailwind.css"
import PageSection from "./components/PageSection"
// import Nav from "./components/Nav"
import Home from "./pages/Home"
import About from "./pages/About"

function App() {
    return (
        <div>
            <div className="flex flex-col h-full">
                <PageSection content={<Home />} />
                <PageSection content={<About />} />
                {/* <PageSection content={<Home />} /> */}
            </div>
            <footer>
                <div className="h-24 bg-primary"></div>
            </footer>
        </div>
    )
}

export default App
