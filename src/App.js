import axios from "axios";
import {useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./HomeComponets/HomeScreen";
import MenueScreen from "./MenueComponets/MenueScreen";
import AboutUsScreen from "./AboutUsComponets/AboutUsScreen";
import ContactUsScreen from "./ContactUsScreenComponets/ContactUsScreen";
import HeadderScreen from "./HeadderComponets/HeadderScreen";
import FooterScreen from "./FooterComponets/FooterScreen";
import UndefinedComponets from "./UndefinedComponets/UndefinedScreen";

function App() {
  return (
    <div className="App">
      <HeadderScreen />
      <main>
        <Routes>
          <Route index element={<HomeScreen />} />
          <Route path="menue" element={<MenueScreen />} />
          <Route path="aboutus" element={<AboutUsScreen />} />
          <Route path="contactus" element={<ContactUsScreen />} />
          <Route path="*" element={<UndefinedComponets />} />
        </Routes>
      </main>
      <FooterScreen />
    </div>
  );
}

export default App;
