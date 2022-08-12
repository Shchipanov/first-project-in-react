import React from "react";
import About from "/src/components/blocks/about/about";
import AdvantagesList from "/src/components/blocks/advantage-list/advantage-list";

function MainPage({ stars }) {
  return (
    <>
      <About />
      <AdvantagesList stars={stars} />
    </>
  );
}

export default MainPage;
