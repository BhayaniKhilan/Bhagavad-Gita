import React, { useContext } from "react";
import { languageContext } from "../App";

function Navbar() {
  const {language, setLanguage} = useContext(languageContext);

  function changeLanguage(e) {
    setLanguage(e.target.value);
    console.log(e.target.value);  // ahin je language change thay te language ni value male
  }
  return (
    <>
      <div className=" px-8 py-4 border-b border-b-gray-300 flex justify-between items-center select-none">
        <h1 className="text-4xl font-semibold cursor-pointer ">
          {language === "english" ? "Bhagavad Gita" : "भागवद गीता"}
        </h1>
        <select onChange={changeLanguage} name="language" id="language">
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <hr />
    </>
  );
}

export default Navbar;
