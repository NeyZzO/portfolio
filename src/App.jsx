import { useState } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";
import DownloadCvModal from "./components/DownloadCvModal";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div
        className="min-h-screen transition-opacity duration-700 bg-black text-gray-100"
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <DownloadCvModal />
        <Contact />
      </div>
    </>
  );
}

export default App;
