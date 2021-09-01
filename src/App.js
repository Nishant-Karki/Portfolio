import Navbar from "./components/common/Navbar";
import { Layout } from "antd";
import Home from "./components/pages/Home/index";
import { useEffect } from "react";
import user from "./api/user.json";
import "./App.scss";
import Education from "./components/pages/Education";

function App() {
  useEffect(() => {
    document.title = `${user.firstName} Portfolio`;
  }, []);
  return (
    <>
      <Navbar />
      <Home />
      <Education />
    </>
  );
}

export default App;
