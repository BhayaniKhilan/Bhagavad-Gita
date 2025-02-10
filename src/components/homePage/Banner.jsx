import React, { useContext } from "react";
import { languageContext } from "../../App";

function Banner() {
  const {language} = useContext(languageContext);
  return (
    <div className="relative text-center">
      <img src="./home-banner.webp" alt="" style={{ width: "100%" }} />
      <p className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-6xl text-white font-bold">
        {language === "english"
          ? "Experience the Gita"
          : "भगवत गीता का अनुभव करें"}
        <br />
        <span className="text-yellow-200">
          {language === "english" ? "Anywhere, Anytime" : "कहीं भी कभी भी"}
        </span>
      </p>
    </div>
  );
}

export default Banner;
