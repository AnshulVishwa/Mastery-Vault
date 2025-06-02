import React from 'react'

function App() {
  const slides = [ "Text1" , "Text2" , "Text3" ]
  return (
    <>
      <div className="container-video-carousel bg-amber-600 sm:w-full  w-11/12">
        {slides.map((slide, idx) => (
          <div key={idx}>{slide}</div>
        ))}
      </div>
    </>
  )
}

export default App
