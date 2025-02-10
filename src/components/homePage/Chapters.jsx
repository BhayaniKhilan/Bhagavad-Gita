import React, { useContext, useEffect, useState } from "react";
import ChapterCard from "./ChapterCard";
import { languageContext } from "../../App";

function Chapters() {
  const { language } = useContext(languageContext);

  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState(null);
  const [error, setError] = useState("");

  async function getAllChapters() {
    try {
      const response = await fetch(
        "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/?skip=0&limit=18",
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
      setChapters(data);
    } catch (error) {
      setError(error.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getAllChapters();
  }, []);

  if (loading) {
    return (
      <div className="m-8 bg-gray-100">
        <h2 className="text-3xl fonnt-semiboald"> Chapters</h2>
        <p className="mt-8 text-xl animate-pulse">Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-gray-100">
        <h2 className="text-3xl font-semibold">Chapters</h2>
        <p className="mt-8 text-xl text-red-700">{error}</p>
      </div>
    );
  }

  return (
    <div className=" p-[100px] bg-gray-100">
      <h2 className="text-3xl font-semibold">
        {language === "english" ? "chapters" : "अध्याय"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 gap-4">
        {/* md:grid-cols-2 atle midium screen or midium thi moti screen mate grid-cols-2 lage nakar grid-cols-1 lage  */}
        {chapters.map((chaptersObject) => {
          // console.log("chatersObject", chaptersObject);
          return (
            <ChapterCard
              key={chaptersObject.chapter_number}
              no={chaptersObject.chapter_number}
              name={
                language === "english"
                  ? chaptersObject.name_translated
                  : chaptersObject.name
              }
              desc={
                language === "english"
                  ? chaptersObject.chapter_summary
                  : chaptersObject.chapter_summary_hindi
              }
              totalVerses={chaptersObject.verses_count}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Chapters;
