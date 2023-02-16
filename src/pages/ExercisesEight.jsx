import React, { useState } from 'react'
import data from "../mocks/data"
import Nav from "../components/Nav"

export default function ExercisesEight() {
  const [cardsData, _] = useState(data)
  

  return (
    <>
    <Nav />
    <div className="flex gap-9 items-center justify-center h-screen bg-green-300">
      {
        cardsData.map((value) => (
          <div className='bg-white rounded-lg p-6 text-center w-[560px]'>
            <h1 className='font-bold text-4xl'>
              {value.setup}
            </h1>
            <p className='mt-7 text-lg'>
              {value.punchline}
            </p>
          </div>
        ))
      }
    </div>
    </>  
  )
}
