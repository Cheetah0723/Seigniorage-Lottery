import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Home } from "./components/home";
import { PegLottery } from "./components/peglottery";
import { EMPMoney } from "./components/empmoney";
import { Faq } from "./components/faq";

import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Home data={landingPageData.Home} />
      <PegLottery data={landingPageData.PegLottery} />
      <EMPMoney data={landingPageData.EMPMoney} />
      <Faq data={landingPageData.Faq} />
      {/* <img src="./img/discord.png" className="social" /> */}
    </div>
  );
};

export default App;
