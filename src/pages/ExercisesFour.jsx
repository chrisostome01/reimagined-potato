import React, { useState } from 'react'

export default function ExercisesFour() {
  const [count , setCount] = useState(0);

  return (
    <div className="flex gap-9 items-center flex-col justify-center h-screen">
      <p>
        Button has been clicked: { count } times
      </p>
      <button className="bg-blue-500 text-white font-bold px-7 py-3 rounded-lg" onClick={() => setCount( newCount => newCount+1 )}>
        Click me
      </button>      
    </div>
  )
}
