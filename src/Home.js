import React, { useState } from "react";
import Card from "./Card";
import data from "./data.json";

function Home(props) {
  const [selectlocation, setSelectLocation] = useState("New York");
  return (
    <div className="w-full h-full">
      <div className="h-[8vh] w-full flex justify-between items-center">
        <div className="h-[70%] w-[40%] border-2 flex justify-between items-center">
          <div
            className={
              selectlocation == "New York"
                ? "px-6 py-3 text-white rounded-3xl bg-blue-500 hover:cursor-pointer"
                : "px-6 py-3 text-gray-500 rounded-3xl bg-gray-300 hover:cursor-pointer"
            }
            onClick={() => {
              setSelectLocation("New York");
            }}
          >
            <p className="font-bold">New York</p>
          </div>
          <div
            className={
              selectlocation == "Mumbai"
                ? "px-6 py-3 text-white rounded-3xl bg-blue-500 hover:cursor-pointer"
                : "px-6 py-3 text-gray-500 rounded-3xl bg-gray-300 hover:cursor-pointer"
            }
            onClick={() => {
              setSelectLocation("Mumbai");
            }}
          >
            <p className="font-bold">Mumbai</p>
          </div>
          <div
            className={
              selectlocation == "Paris"
                ? "px-6 py-3 text-white rounded-3xl bg-blue-500 hover:cursor-pointer"
                : "px-6 py-3 text-gray-500 rounded-3xl bg-gray-300 hover:cursor-pointer"
            }
            onClick={() => {
              setSelectLocation("Paris");
            }}
          >
            <p className="font-bold">Paris</p>
          </div>
          <div
            className={
              selectlocation == "London"
                ? "px-6 py-3 text-white rounded-3xl bg-blue-500 hover:cursor-pointer"
                : "px-6 py-3 text-gray-500 rounded-3xl bg-gray-300 hover:cursor-pointer"
            }
            onClick={() => {
              setSelectLocation("London");
            }}
          >
            <p className="font-bold">London</p>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-wrap justify-between items-between">
        {data
          .filter((x) => x.location == selectlocation)
          .slice(0, props.endIndex)
          .map((e) => {
            return (
              <Card
                id={e.id}
                image={e.image}
                title={e.title}
                location={e.location}
                purpose={e.Purpose}
                address={e.address}
                room={e.room}
                bed={e.bed}
                bath={e.bath}
                sft={e.sft}
                price={e.price}
              />
            );
          })}
      </div>
    </div>
  );
}

export default Home;
