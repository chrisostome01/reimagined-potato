import React, { useEffect, useState } from "react";
import ReactFlipCard from "reactjs-flip-card";
import FrontCard from "../components/FrontCard";
import BackCard from "../components/BackCard";

export default function ExercisesNine() {
  const [cardsData, setCardData] = useState([]);

  function getRandomData() {
    fetch("https://random-data-api.com/api/users/random_user?size=10")
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        setCardData(result);
      });
  }

  useEffect(() => {
    getRandomData();
  }, []);

  return (
    <div className="flex flex-wrap gap-9 items-center justify-center h-screen bg-green-300 py-12 max-w-full overflow-x-hidden">
      <div className="w-full flex items-center justify-center mt-16" >
        <button
          className="bg-red-500 border-b-4 hover:border-red-900 text-white font-bold px-7 py-3 rounded-lg text-3xl"
          onClick={() => getRandomData()}
        >
          Fetch Random
        </button>
      </div>
      {cardsData.map((value, index) => (
        <ReactFlipCard
          key={index}
          containerCss="bg-white w-[300px] h-[400px] rounded-lg p-5"
          frontComponent={
            <FrontCard
              src={value.avatar}
              name={`${value.first_name} ${value.last_name}`}
              title={value.employment.title}
            />
          }
          backComponent={<BackCard />}
        />
      ))}
    </div>
  );
}
