import React from "react";

function ShlokOfTheDay() {
  return (
    <div className="bg-[url('./newsbg.webp')] bg-cover bg-center h-64 bg-orange-100 flex items-center justify-center flex-col gap-11" > 
      <h1 className="text-4xl font-bold text-centerl">Have the Shloka of the Day delivered to your</h1>
      <h1 className="text-4xl font-bold text-centerl mt-[-30px]">inbox each morning</h1>
      <div className="flex gap-6">
        <input
          type="text"
          placeholder="Enter Your Name"
          className="border p-2 bg-white px-12 border-none"
        />
        <input
          type="email"
          placeholder="Enter Your Email"
          className="border p-2 bg-white px-12 border-none"
        />
        <button className="bg-orange-500 text-white px-4 py-2 rounded cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default ShlokOfTheDay;
