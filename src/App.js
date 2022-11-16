import ConnectWalletModal from "./utils/ConnectWalletModal";
import {
  Footer,
  Hero,
  Inspiration,
  MetaNFTs,
  Nav,
  PlaceToStay,
} from "./components";
import "./scss/style.scss";
import house1 from "./assets/metabnbs/house1.jpg";
import house2 from "./assets/metabnbs/house2.jpg";
import house3 from "./assets/metabnbs/house3.jpg";
import house4 from "./assets/metabnbs/house4.jpg";
import house5 from "./assets/metabnbs/house5.jpg";
import house6 from "./assets/metabnbs/house6.jpg";
import house7 from "./assets/metabnbs/house7.jpg";
import house8 from "./assets/metabnbs/house8.jpg";
import house9 from "./assets/metabnbs/house9.jpg";
import house10 from "./assets/metabnbs/house10.jpg";
import house11 from "./assets/metabnbs/house11.jpg";
import house12 from "./assets/metabnbs/house12.jpg";
import house13 from "./assets/metabnbs/house13.jpg";
import house14 from "./assets/metabnbs/house14.jpg";
import house15 from "./assets/metabnbs/house15.jpg";
import house16 from "./assets/metabnbs/house16.jpg";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const Home = () => {
  const inspiration = [
    house5,
    house6,
    house7,
    house8,
    house1,
    house2,
    house3,
    house4,
  ];
  return (
    <>
      <Hero />
      <Inspiration inspiration={inspiration} />
      <MetaNFTs />
    </>
  );
};

const App = () => {
  const [isHamMenuOpen, setIsHamMenuOpen] = useState(false);
  const placesToStay = [
    house1,
    house2,
    house3,
    house4,
    house5,
    house6,
    house7,
    house8,
    house9,
    house10,
    house11,
    house12,
    house13,
    house14,
    house15,
    house16,
  ];
  useEffect(() => {
    if (window.innerWidth > 1229) {
      setIsHamMenuOpen(true);
    }
  }, []);
  return (
    <div className="App">
      <Nav isHamMenuOpen={isHamMenuOpen} setIsHamMenuOpen={setIsHamMenuOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/places-to-stay"
          element={<PlaceToStay placesToStay={placesToStay} />}
        />
      </Routes>
      <Footer />
      <ConnectWalletModal />
    </div>
  );
};

export default App;
