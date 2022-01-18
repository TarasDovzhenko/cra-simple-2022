import React from "react";

import Header from "../../components/Header/Header";
import Product from "../../components/Product/Product";
import Footer from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";

function Home(props) {
  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
}

export default Home;
