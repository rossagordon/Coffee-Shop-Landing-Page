import React from "react";
import About from "./components/About";
import Cards from "./components/Cards";
import Email from "./components/Email";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Email />
      <Cards />
    </div>
  );
}

export default App;
