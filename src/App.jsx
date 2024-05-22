import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Programs from "./components/programs/program";
import TopHeader from "./components/TopHeader/topheader";

const App = () => {
  return (
    <>
      <div>
        <TopHeader />
        <Navbar />
      </div>
      <div>
        <Hero />
      </div>
      <div className="container">
        <Programs />
      </div>
    </>
  );
};

export default App;
