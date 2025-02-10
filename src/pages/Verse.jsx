import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Divider from "../components/versesPage/Divider";
import { languageContext } from "../App";

function Verse() {
  const { language } = useContext(languageContext);

  const { chapterNumber, verseNumber } = useParams();
  const [loading, setLoading] = useState(true);
  const [verse, setVerse] = useState(null);
  const [error, setError] = useState("");

  async function getVerse() {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapterNumber}/verses/${verseNumber}/`,
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
      setVerse(data);
    } catch (error) {
      setError("Failed to load Verse");
      console.log("verseError", error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getVerse();
  }, [chapterNumber, verseNumber]); // ane chapterNumber and verseNumber change thay tyre ui update karvanu and useEffect aa return no code chali jay tyar bad chale atle teni ander je function che te return ne bad chalse

  function getEnglishTranslation() {
    const foundTranslation = verse.translations.find((translationObject) => {
      return translationObject.language === "english";
    });

    if (foundTranslation) {
      return foundTranslation.description;
    }
    return "No translation found.";
  }

  function getHindiTranslation() {
    const foundHindiTranslation = verse.translations.find(
      (translationObject) => {
        return translationObject.language === "hindi";
      }
    );

    if (foundHindiTranslation) {
      return foundHindiTranslation.description;
    }
    return "No hindi translation found.";
  }

  function getEnglishCommentary() {
    const foundCommentary = verse.commentaries.find((commentryObject) => {
      return commentryObject.language === "english";
    });

    if (foundCommentary) {
      return foundCommentary.description;
    }

    return "No commentary found.";
  }

  function getHindiCommentary() {
    const foundHindiCommentary = verse.commentaries.find((commentryObject) => {
      return commentryObject.language === "hindi";
    });

    if (foundHindiCommentary) {
      return foundHindiCommentary.description;
    }
    return "No hindi commentary found.";
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

  if (verse === null) {
    return (
      <div className="p-8">
        <p className="text-center text-xl font-semibold text-red-700">
          Failed to load Verse.
        </p>
      </div>
    );
  }

  console.log("verse", verse);

  return (
    <div className="p-8 max-w-[1000px] m-auto">
      <div>
        <p className="text-4xl font-bold text-center mb-8">
          {language === "english"
            ? `BG ${chapterNumber}.${verseNumber}`
            : `||${chapterNumber}.${verseNumber}||`}
        </p>
        <h2 className="text-center m-auto text-orange-500 text-3xl mb-10 max-w-md leading-[1.5]">
          {verse.text}
        </h2>
        {language === "english" && verse.transliteration && (
          <p className="text-xl text-center m-auto mb-8 max-w-md">
            {verse.transliteration}
          </p>
        )}

        {language === "english" && verse.word_meanings && (
          <p className="text-xl text-center">{verse.word_meanings}</p>
        )}

        <Divider />
        <div>
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-center mb-8">Translation</h2>
            <p className="text-xl text-center">
              {language === "english"
                ? getEnglishTranslation()
                : getHindiTranslation()}
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-center mb-8">Commentary</h2>
            <p className="text-xl text-center">
              {language === "english"
                ? getEnglishCommentary()
                : getHindiCommentary()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Verse;
