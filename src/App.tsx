import {Route, Routes} from "react-router-dom";
import Home from "./pages";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import About from "./pages/About";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
