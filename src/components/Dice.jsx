import React, { useEffect, useState } from "react";

export default function Dice() {
  const diceCount = [1, 2, 3, 4, 5, 6];
  const [score, setScore] = useState(0);
  const [arrayNo, setArrayNo] = useState(0);
  const [diceNo, setDiceNo] = useState(1);
  const [rules, setRules] = useState(false);
  const [alert,setAlert]=useState(false);
  
  const handleDiceClick = (e) => {
    if(arrayNo===0){
        setAlert(true);
        setTimeout(() => {
          setAlert(false);
        },1000);
    }
    else{
        setDiceNo(Math.floor(Math.random() * 6 + 1));
        if (diceNo === arrayNo) {
            setScore(score + diceNo);
          }
          else{
              setScore(score-2);
          }
    }
    
  };
  return (
    <div className="p-5 h-screen">
      <div className="flex flex-col sm:flex-row justify-between">
        <div className="shadow-lg p-3 rounded-lg mt-5">
          <h1 className="font-bold text-6xl text-center">{score}</h1>
          <p className="text-lg font-semibold py-2 text-center">Total Score</p>
        </div>
        <div className="flex flex-col gap-3 items-end mt-5">
         {alert && <div className="text-red-600 text-lg font-semibold">
            You have not selected any number
          </div>}
          <div className="grid grid-cols-6 gap-5 place-items-center">
            {diceCount.map((item, index) => (
              <div
                key={item}
                id={item}
                className={`border border-black p-3 hover:bg-black hover:text-white ${arrayNo===item?"bg-black text-white":"bg-white"}`}
                onClick={()=>{setArrayNo(item);
                  
                  
                }}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="font-bold text-lg">Select Number</div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-16">
        <div className="">
          {diceNo === 1 && (
            <img src="./dice_1.png" alt="" onClick={handleDiceClick} />
          )}
          {diceNo === 2 && (
            <img src="./dice_2.png" alt="" onClick={handleDiceClick} />
          )}
          {diceNo === 3 && (
            <img src="./dice_3.png" alt="" onClick={handleDiceClick} />
          )}
          {diceNo === 4 && (
            <img src="./dice_4.png" alt="" onClick={handleDiceClick} />
          )}
          {diceNo === 5 && (
            <img src="./dice_5.png" alt="" onClick={handleDiceClick} />
          )}
          {diceNo === 6 && (
            <img src="./dice_6.png" alt="" onClick={handleDiceClick} />
          )}

          <div className="my-5 font-semibold text-xl text-center">
            Click on Dice to roll
          </div>
          <div className="border border-black p-1 w-full text-center mt-5 rounded-lg" onClick={()=>setScore(0)}>
            Reset Score
          </div>
          <div className="border border-black bg-black text-white p-1 w-full text-center my-5 rounded-lg" onClick={()=>setRules(!rules)}>
            {" "}
            Show Rules
          </div>
        </div>
      </div>
      {rules && (
        <div className="mt-5 flex justify-center items-center ">
          <div className="bg-rose-200 p-7 mb-5">
            <h1 className="text-xl font-bold">How to play dice game</h1>
            <div className="mt-3 font-semibold">
              <p>1. Select any number</p>
              <p>2. Click on dice </p>
              <p>
                3. After click on dice if selected number is equal to dice number
                you will get same point as dice{" "}
              </p>
              <p>4. If you get wrong guess then 2 point will be dedcuted </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
