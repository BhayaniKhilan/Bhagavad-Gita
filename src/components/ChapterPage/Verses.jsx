import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { languageContext } from "../../App";

function Verses() {
  const { language } = useContext(languageContext);

  //   const params = useParams();
  //   const { number } = params;
  //   OR
  const { number } = useParams();
  const [loading, setLoading] = useState(true);
  const [verses, setVerses] = useState(null);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function goToVerse(verseNumber) {
    navigate(`/chapter/${number}/verse/${verseNumber}`);
  }

  async function getAllVerses() {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${number}/verses/`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "ed55280488mshb497b6aa44d535dp1d9a74jsn3018c52791a2",
            "x-rapidapi-host": "bhagavad-gita3.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      setVerses(data);
    } catch (error) {
      setError("Something went wrong");
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllVerses();
  }, [number]);

  function getTranslatedVerse(verseObject) {
    const foundTranslation = verseObject.translations.find(
      (translationObject) => translationObject.language === language
    );

    return foundTranslation
      ? foundTranslation.description
      : "Translation not available";
  }

  if (loading) {
    return (
      <div className="p-8">
        <p className="text-center text-xl font-semibold animate-pulse">
          Loading...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8">
        <p className="text-center text-xl font-semibold text-red-700">
          {error}
        </p>
      </div>
    );
  }

  if (verses === null) {
    return (
      <div className="p-8" >
        <p className="text-center text-xl font-semibold text-red-700">
          Failed to Load verses.
        </p>
      </div>
    );
  }

  // console.log("verses", verses);

  return (
    <div className="pt-10">
      <ul>
        {verses.map((versesObject) => {
          return (
            <li
              key={versesObject.id}
              onClick={() => {
                goToVerse(versesObject.verse_number);
              }}
              className="grid grid-cols-[100px_1fr] p-4 hover:bg-orange-100 hover:border-orange-100 cursor-pointer leading-8 text-[18px]"
            >
              <p className="text-orange-500 font-semibold">
                {language === "english" ? "VERSES" : "पद्य"}{" "}
                {versesObject.verse_number}
              </p>
              <p className="text-[16px]">
                {getTranslatedVerse(versesObject, language)}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Verses;
