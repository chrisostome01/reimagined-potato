import React, { useState } from "react";

export default function ExercisesSeven() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");

  return (
    <div className="flex gap-9 items-center justify-center h-screen flex-col">
      <input
        type="text"
        className="block border py-4 px-4 rounded-md w-[300px]"
        placeholder="Firtname"
        value={firstname}
        onChange={(e) => setFirstname(e.target.value)}
      />
      <input
        type="text"
        className="block border py-4 px-4 rounded-md w-[300px]"
        placeholder="Lastname"
        value={lastname}
        onChange={(e) => setLastname(e.target.value)}
      />
      <button
        className="bg-red-500 border-b-4 hover:border-red-900 text-white font-bold px-7 py-3 rounded-lg uppercase text-3xl"
        onClick={() => alert(`Hello ${firstname} ${lastname}`)}
      >
        greet me
      </button>
    </div>
  );
}
