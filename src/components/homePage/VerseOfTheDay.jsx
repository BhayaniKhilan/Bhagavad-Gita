import React, { useContext } from "react";
import { languageContext } from "../../App";

function VerseOfTheDay() {

  const {language} = useContext(languageContext);

  return (
   <div className="bg-orange-200 p-8 m-[100px]">
  <div className="flex items-center gap-4">
    <p className="text-orange-500 font-bold">
      {language === "english" ? "Verse of the day - BG 1.28" : "आज का श्लोक - ।।1.32।।"}
    </p>
    <hr className="flex-1 border-orange-300 border-2" />
  </div>

  <p className="opacity-80 mt-[15px]">
    {language === "english" 
      ? "Arjuna said, O Krishna, seeing my kinsmen arrayed here, eager to fight," 
      : "।।1.32।। हे कृष्ण! मैं न तो विजय चाहता हूँ, न राज्य चाहता हूँ और न सुखों को ही चाहता हूँ। हे गोविन्द! हमलोगों को राज्य से क्या लाभ? भोगों से क्या लाभ? अथवा जीने से भी क्या लाभ?"}
  </p>

  <button className="mt-[15px] font-bold uppercase cursor-pointer hover:text-gray-800">
    {language === "english" ? "See more" : "और देखें"}
  </button>
</div>

  );
}

export default VerseOfTheDay;
