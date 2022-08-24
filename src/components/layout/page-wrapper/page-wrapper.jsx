import React from "react";
import Header from "/src/components/layout/header/header";
import Footer from "/src/components/layout/footer/footer";
import Order from "/src/components/pages/order/order";
import { Main } from "./styles";

// Обёртка для контента страниц
function PageWrapper({ ...prop }) {
  return (
    <>
      <Header />
      <Main>
        <Order />
      </Main>
      <Footer />
    </>
  );
}

export default PageWrapper;
