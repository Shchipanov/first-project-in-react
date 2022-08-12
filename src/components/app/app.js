import React from "react";
import PageWrapper from "/src/components/layout/page-wrapper/page-wrapper";
import "./style.css";
import starList from "/src/mocks/starList";

export default function App() {
  return <PageWrapper stars={starList} />;
}
