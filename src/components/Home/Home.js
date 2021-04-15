import React from "react";
import Footer from "../SharedComponents/Footer/Footer";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeMain from "./HomeMain/HomeMain";

const Home = () => {
  return (
    <div>
      <HomeHeader />
      <HomeMain />
      <Footer />
    </div>
  );
};

export default Home;
