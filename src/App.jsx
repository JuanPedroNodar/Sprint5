import { useState } from "react";
import "./App.css";
import Navbar from "./assets/navbar/Navbar";
import Footer from "./assets/footer/Footer";
import Maincontent from "./assets/Maincontent/Maincontent";

function App() {
  return (
    <>
      <Navbar />
      <Maincontent />
      <Footer />
    </>
  );
}

export default App;
