import React from "react";
import Banner from "../components/Banner";
// import FavoriteBooks from "./FavoriteBooks";
import BestSellerBooks from "./BestSellBook";
import FavBook from "./FavBook";
import PromoBanner from "./PromoBanner";
import OtherBooks from "./OtherBooks";
import Review from "./Review";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <BestSellerBooks />
      <FavBook/>
      <PromoBanner />
      <OtherBooks />
      <Review />
    </div>
  );
};

export default Home;
