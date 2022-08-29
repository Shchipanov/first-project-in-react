import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import { GlobalStyle } from "./styles";
import products from "/src/mocks/products";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <PageWrapper features={features} products={products} />
    </>
  );
}
