import React from 'react'

export default function FrontCard({src,name,title}) {
  return (
    <div className=''>
      <img src={src} alt=""/>
      <p className='font-bold'>
        {name}
      </p>
      <p>
        {title}
      </p>
    </div>
  )
}
