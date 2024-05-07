import { Navigate, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Links from "./pages/Links";
import Blogs from "./pages/Blogs";
import Container from "./components/Container";
import NotFoundPage from "./components/NotFoundPage";
import Terminal from "./terminal/Terminal";
import { useState } from "react";
import Footer from "./components/Footer";

function App() {
  const [dev, setDev] = useState(false);

  return (
    <>
      {!dev && (
        <div className="mx-4 mb-10 ">
          <Container>
            <Navbar dev={dev} setDev={setDev} />
            <Routes>
              <Route path="/" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/blogs" element={<Blogs />} />
              <Route path="/links" element={<Links />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
            <Footer/>
          </Container>
        </div>
      )}

      {dev && <Terminal dev={dev} setDev={setDev} />}
    </>
  );
}

export default App;
