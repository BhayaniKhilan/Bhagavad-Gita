import "./App.css";
import Layout from "./layouts/Layout";
import Chapter from "./pages/Chapter";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Verse from "./pages/Verse";
import { createContext, useState } from "react";

export const languageContext = createContext();

function App() {
  const [language, setLanguage] = useState("english");

  return (
    <languageContext.Provider value={{ language, setLanguage }}>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/chapter/:number" element={<Chapter />} />
            <Route
              path="/chapter/:chapterNumber/verse/:verseNumber"
              element={<Verse />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </languageContext.Provider>
  );
}

export default App;
