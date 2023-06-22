import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Banner></Banner>
    </>
  );
}

export default App;
