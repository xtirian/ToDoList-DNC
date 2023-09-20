import React, { useState } from "react";
import Header from "../components/header/Header";

import "./home.scss";
import Lista from "../components/lista/Lista";

const home = ({ data }) => {

  

  return (
    <div className="home-container">
      <Header />

      <main className="home_content-container">
        <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>

        <Lista data={data} />
      </main>
    </div>
  );
};

export default home;
