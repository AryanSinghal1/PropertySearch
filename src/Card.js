import React from "react";
import { BiBed } from "react-icons/bi";
import { LiaBathSolid } from "react-icons/lia";
import { BsArrowsMove } from "react-icons/bs";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { GoLocation, GoDotFill } from "react-icons/go";
import { AiOutlineHeart } from "react-icons/ai";

function Card(props) {
  const link = `/property/${props.id}`;
  return (
    <a href={link}>
      <div className="w-[28vw] h-[80vh] my-5 shadow-lg bg-slate-100 rounded-2xl flex justify-center items-center">
        <div className="w-[95%] h-[95%]">
          <div className="w-full relative h-1/2 rounded-xl overflow-hidden">
            <img className="w-full h-full" src={props.image}></img>
            <div className="px-4 py-2 bg-white absolute top-3 left-3 rounded-3xl flex justify-center items-center">
              <p className="font-semibold text-blue-500">
                {props.purpose ? "For Sale" : "For Rent"}
              </p>
            </div>
            <div className="px-2 py-2 bg-white absolute top-3 right-3 rounded-full flex justify-center items-center">
              <AiOutlineHeart className="w-5 h-5" color="blue" />
            </div>
            <div className="w-full h-[15%] absolute bottom-0 flex justify-center items-center">
              <GoDotFill color="white" className="w-5 h-5" />
              <GoDotFill color="white" className="w-5 h-5" />
              <GoDotFill color="white" className="w-5 h-5" />
              <GoDotFill color="white" className="w-5 h-5" />
            </div>
          </div>
          <div className="w-[95%] m-auto h-1/2">
            <div className="w-full h-3/4 flex justify-center items-center">
              <div className="w-full h-[90%] ">
                <div className="w-full h-1/2">
                  <h2 className="text-md font-medium my-2 flex items-center">
                    <GoLocation className="mr-2" />
                    {props.address}
                  </h2>
                  <h2 className="text-xl font-bold">{props.title}</h2>
                </div>
                <div className="w-[90%] ml-[5%] h-1/2 flex flex-wrap">
                  <div className="w-1/4 h-full flex flex-col justify-center">
                    <HiOutlineBuildingOffice2 />
                    <p>{props.room} Room</p>
                  </div>
                  <div className="w-1/4 h-full flex flex-col justify-center">
                    <BiBed />
                    <p>{props.bed} Bed</p>
                  </div>
                  <div className="w-1/4 h-full flex flex-col justify-center">
                    <LiaBathSolid />
                    <p>{props.bath} Bath</p>
                  </div>
                  <div className="w-1/4 h-full flex flex-col justify-center">
                    <BsArrowsMove />
                    <p>{props.sft} sft</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-1/4 border-t border-dashed border-slate-400 flex justify-between items-center">
              <p className="text-xl text-blue-700 font-bold">
                ${props.price}{" "}
                <span className="text-lg text-black font-semibold">/month</span>
              </p>
              <button className="w-1/3 h-[80%] rounded-3xl border-2 border-blue-500 text-blue-500 bg-white font-bold">
                Read More
              </button>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default Card;
