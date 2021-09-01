import { useEffect } from "react";

import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home/index";
import Education from "./components/pages/Education";
import Skill from "./components/pages/Skill";

import user from "./api/user.json";
import "./App.scss";

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
    </>
  );
}

export default App;
