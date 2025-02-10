import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Verses from "../components/ChapterPage/Verses";
import { languageContext } from "../App";

function chapter() {

 const {language} = useContext(languageContext);


  // const params =  useParams();
  // const number= params.number.

  const { number } = useParams();

  const [loading, setLoading] = useState(true);
  const [chapter, setChapter] = useState(null);
  const [error, setError] = useState("");

  async function getChapter() {
    try {
      const response = await fetch(
        `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${number}/`,
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

      setChapter(data);
    } catch (error) {
      setError("Error 404, Something went wrong");
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    getChapter();
  }, [number]);

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

  if (chapter === null) {
    return (
      <div className="p-8">
        <p className="text-center text-xl font-semibold text-red-700">
          Failed to load chapter.
        </p>
      </div>
    );
  }

  // console.log("params", number);
  // console.log(chapter);

  return (
    <div className="relativep-8 pt-18 max-w-[1000px] m-auto">
      <div className="mb-20">
        <p className="text-center uppercase mb-8 text-[20px] font-semibold text-orange-500 ">
          {language === "english" ? "Chapter" : "अध्याय "} {number}
        </p>
        <h1 className="text-4xl mb-8 font-bold text-center">
          {language === "english"? chapter.name_translated : chapter.name}
        </h1>
        <p className="text-lg m-auto leading-[1.75]">
          {language === "english" ? chapter.chapter_summary : chapter.chapter_summary_hindi}
        </p>
      </div>
      <hr className="border border-gray-300" />
      <p className="my-4 font-bold text-[20px]">
        {chapter.verses_count} {language === "english" ? "Verses" : "पद्य"}
      </p>
      <hr className="border border-gray-300" />
      <Verses />
    </div>
  );
}

export default chapter;
