import { React } from "react";

import HomePageBanner from "../components/HomePageBanner/HomePageBanner.js";
import Testimonials from "../components/Testimonials/Testimonials";
import KnownFor from "../components/KnownFor/KnownFor";
import ProductCarousel from "../components/ProductCarousel/ProductCarousel";

const HomePage = () => {
  return (
    <div>
      <div>
        <HomePageBanner />
        <ProductCarousel />

        <KnownFor />
        <Testimonials />
      </div>
    </div>
  );
};

export default HomePage;
