import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate=useNavigate();
  return (
    
<div className="p-5 h-screen flex flex-col sm:flex-row gap-5 justify-center items-center">
      <div className="">
        <img src="./dice.png" alt="" className="" />
      </div>
      <div className="flex flex-col gap-5 justify-center items-end">
        <h1 className="text-7xl font-extrabold p-5 text-center">DICE GAME</h1>
       
          <button className="bg-black text-white font-semibold p-3 rounded w-full text-center text-xl" onClick={()=>
            navigate("/dice")
          }>
            Play Now
          </button>
      
      </div>
    </div>
    
    
  );
}
