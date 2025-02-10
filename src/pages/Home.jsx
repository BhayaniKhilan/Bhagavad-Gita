import React from "react";
import Navbar from "../layouts/Navbar";
import Banner from "../components/homePage/Banner";
import VerseOfTheDay from "../components/homePage/VerseOfTheDay";
import Chapters from "../components/homePage/Chapters";
import ShlokOfTheDay from "../components/homePage/shlokOfTheDay";

function Home() {
  return (
    <div>   
      <Banner />
      <VerseOfTheDay />
      <ShlokOfTheDay />
      <Chapters />
    </div>
  );
}

export default Home;
