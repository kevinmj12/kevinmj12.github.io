import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Damyo from "./project-pages/Damyo";
import Main from "./Main";
import Foreignkookmin from "./project-pages/Foreignkookmin";
import Pofo from "./project-pages/Pofo";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/damyo" element={<Damyo />} />
        <Route path="/foreignkookmin" element={<Foreignkookmin />} />
        <Route path="/pofo" element={<Pofo />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
