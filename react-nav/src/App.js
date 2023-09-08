import Navbar from "./navbar";
import Home from "./pages/home";
import Pricing from "./pages/pricing"
import About from "./pages/about"
import { Route, Routes } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </>
  )
}

export default App;