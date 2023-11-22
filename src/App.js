import { useState } from "react";
import "./App.css";
import Home from "./Home";
import { GiSandsOfTime } from "react-icons/gi";

function App() {
  const [endIndex, setEndIndex] = useState(6);
  return (
    <div className="w-full h-full bg-slate-200 flex justify-center items-center">
      <div className="w-[90%] h-[98%] flex flex-col justify-between items-center">
        <div className="w-full h-[25vh] flex flex-col justify-center items-center">
          <h2 className="text-4xl py-2 font-bold text-blue-950">
            Featured Listed Property
          </h2>
          <p className="text-sm py-1">
            Real Estate can be bought, sold, leased, or rented, and can be a{" "}
          </p>
          <p className="text-sm">
            valuable investment opportunity. The value of real estate can be...
          </p>
        </div>
        <div className="w-full h-[88%]">
          <Home endIndex={endIndex} />
          <div className="h-[8%] w-full flex justify-between items-center">
            <div
              onClick={() => {
                setEndIndex(endIndex + 3);
              }}
              className="px-6 py-3 hover:cursor-pointer rounded-3xl m-auto text-white bg-blue-600 font-semibold flex items-center"
            >
              <GiSandsOfTime className="mr-1" />
              Show More
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
