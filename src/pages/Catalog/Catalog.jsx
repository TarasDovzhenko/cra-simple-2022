import React from "react";

import Header from "../../components/Header/Header";

import Footer from "../../components/Footer/Footer";
import Filters from "../../components/Filters/Filters";
import Product from "../../components/Product/Product";

function Catalog(props) {
  return (
    <>
      <Header />
      <Product />
      <Footer />
    </>
  );
}

export default Catalog;
