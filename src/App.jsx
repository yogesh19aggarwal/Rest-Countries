import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Homepage from "./Pages/Homepage";
import NotFound from "./Pages/NotFound";
import CountryCard from "./components/CountryCard";

const App = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="bg-lightBg dark:bg-darkBg text-lightText dark:text-textColor min-h-screen transition-colors duration-0 font-sans p-0">
      <Navbar dark={dark} setDark={setDark} />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/country/:cca3" element={<CountryCard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
