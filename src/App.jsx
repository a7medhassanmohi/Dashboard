import React, { lazy, Suspense, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "./App.scss";
const Home = lazy(() => import("./pages/home/Home"));
const Nav = lazy(() => import("./pages/nav/Nav"));

export const GlobalContext = React.createContext();

function App() {
  const [darkMode, setdarkMode] = useState(false);
  const { t, i18n } = useTranslation();
  useEffect(() => {
    document.body.style.direction = i18n.language == "ar" ? "rtl" : "ltr";
  }, [i18n.language]);
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <GlobalContext.Provider value={{ name: "ahmed" }}>
      <div className="App">
        <Suspense fallback="">
          <Nav darkMode={darkMode} setdarkMode={setdarkMode} />
        </Suspense>

        <Suspense fallback={"loding"}>
          <Home />
        </Suspense>
      </div>
    </GlobalContext.Provider>
  );
}

export default App;
