import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import Blogs from "./pages/Blogs";
import NotFoundPage from "./components/NotFoundPage";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {

  return (
    <>
      <Navbar />

      <div className="mx-auto px-2 flex flex-col max-w-2xl">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/links" element={<Links />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
