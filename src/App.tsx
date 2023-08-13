import React, { useState } from "react";
import LocationPage from "./LocationPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/HomePage";
import "./App.css";

export const TempType = React.createContext("C");

const App = () => {
  const [temp, setTemp] = useState("C");
  return (
    <TempType.Provider value={temp}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/location/:placeName" element={<LocationPage />}></Route>
        </Routes>
      </BrowserRouter>
    </TempType.Provider>
  );
};

export default App;
