import React from "react";
import Header from "../components/header/Header";

import './home.scss'

const home = ({ data }) => {
  return (
    <div className="home-container">
      <Header />

      <main className="home_content-container"></main>
    </div>
  );
};

export default home;
