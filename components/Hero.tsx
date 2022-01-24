import React from "react";

function Hero() {
  return (
    <div className="w-full bg-[#ffc016] border-b-2 border-black">
      <div className="flex justify-between p-5 max-w-7xl mx-auto">
        <div className="space-y-5 tracking-tight my-5">
          <h1 className="text-7xl max-w-xl font-serif tracking-tight">
            Medium is a place to write, read and connect
          </h1>
          <h2 className="max-w-sm text-lg">
            It's easy and free to post your thinking on any topic and connect
            with millions of readers.
          </h2>
          <button className="border-2 border-black hover:bg-gray-100 px-5 py-2 rounded-full bg-white">
            Start Writing
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
