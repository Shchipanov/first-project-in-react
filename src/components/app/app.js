import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import features from "/src/mocks/features";
import { GlobalStyle } from "./styles";
import products from "/src/mocks/products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppRoute } from "/src/const";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route
            path={AppRoute.MAIN}
            element={<PageWrapper features={features} products={products} />}
          />
          <Route
            path={AppRoute.ORDER}
            element={<PageWrapper features={features} products={products} />}
          />
        </Routes>
      </Router>
    </>
  );
}
