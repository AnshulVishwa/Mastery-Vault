import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(10);
  const [data, setdata] = useState([]);
  const lastElementRef = useRef(null)
  const [ isVisible , setIsVisible ] = useState(false)

  useEffect(() => {
    setdata((prev) => {
      const newData = [];
      for (let i = prev.length; i < length; i++) {
        newData.push(i + 1);
      }
      return [...prev, ...newData];
    });
  }, [length]);
  
  useEffect( () => {
    if( !lastElementRef.current ) return;
    const observer = new IntersectionObserver(( entries ) => {
      if( entries[0].isIntersecting ){
        setIsVisible(true)
      }
    },
    {
      root : null,
      threshold : 0
    } )
    observer.observe(lastElementRef.current)
    return () => observer.disconnect();
  } , [data] )

  useEffect( () => {
    setLength((prev) => prev+10)
    setIsVisible(false)
  } , [isVisible] )

  return (
    <>
      {data.map((v) => 
        (
          <div className={"center"} ref={(v == length) ? lastElementRef : null} key={v}>{v}</div>
        )
      )}
    </>
  );
}

export default App;
