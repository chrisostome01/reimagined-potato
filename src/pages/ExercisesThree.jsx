import React from 'react'

export default function ExercisesThree() {
  return (
    <div className="flex gap-9 items-center justify-center h-screen">
      <button className="bg-blue-500 text-white font-bold px-7 py-3  rounded-lg" onClick={() => alert("You clicked on Button 1")}>
        Button 1
      </button>
      <button className="bg-blue-500 text-white font-bold px-7 py-3  rounded-lg" onClick={() => alert("You clicked on Button 2")}>
        Button 2
      </button>
      <button className="bg-blue-500 text-white font-bold px-7 py-3  rounded-lg" onClick={() => alert("You clicked on Button 3")}>
        Button 3
      </button>
    </div>
  )
}
