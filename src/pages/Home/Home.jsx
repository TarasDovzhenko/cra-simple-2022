import React from "react";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import Hero from "../../components/Hero/Hero";

function Home(props) {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}

export default Home;
