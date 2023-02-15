import React, { useState } from "react";

export default function ExercisesFive() {
  const [animal, _] = useState([
    "dog",
    "cat",
    "chicken",
    "cow",
    "sheep",
    "horse",
  ]);
  return (
    <div className="flex gap-9 items-center justify-center h-screen">
      <ul className="list-disc">
        {animal.map((value) => {
          return (
            <li>
              {value}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
