import { useEffect } from "react";

import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home/index";
import Education from "./components/pages/Education";
import Skill from "./components/pages/Skill";
import Experience from "./components/pages/Experience";

import user from "./api/user.json";
import "./App.scss";
import Footer from "./components/common/Footer";

function App() {
  useEffect(() => {
    document.title = `${user.firstName}'s Portfolio`;
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Education />
      <Skill />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
