import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";
import { languageContext } from "../../App";

function ChapterCard({ no, name, desc, totalVerses }) {
  const { language } = React.useContext(languageContext);

  // console.log("language", language);

  const navigate = useNavigate();

  function goToChapter() {
    navigate(`/chapter/${no}`);
  }
  return (
    <div
      onClick={goToChapter}
      className="bg-white border border-gray-300 rounded-lg p-6 cursor-pointer hover:bg-orange-100 hover:border-orange-300"
    >
      <p className="text-orange-500 font-bold">
        {language === "english" ? "Chapter" : "अध्याय"} {no}
      </p>
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="mt-2 line-clamp-4">{desc}</p>
      <div className="mt-4 flex items-center gap-4">
        <FontAwesomeIcon icon={faList} />
        <p>
          {totalVerses} {language === "english" ? "Verses" : "पद्य"}
        </p>
      </div>
    </div>
  );
}

export default ChapterCard;
