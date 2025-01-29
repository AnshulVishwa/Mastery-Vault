import React, { useEffect, useRef, useState } from "react";
import productDetails from "../Data/database";
import Container from "./Container";
import "./products.css";

function Products() {
    const [length, setLength] = useState(10);
    const [data, setData] = useState([]);
    const [cache, setCache] = useState([]);
    const [isVisible , setIsVisible] = useState(false);
    const lastElementRef = useRef(null); 

    useEffect(() => {
        const defaultData = productDetails.slice(0, length+10);
        setCache(defaultData);
    }, []);

    useEffect(() => {
        setData(cache.slice(0, length));
    }, [cache, length]);

    useEffect( () => {
        if (isVisible) {
            setLength((prev) => prev + 10);
            setCache(productDetails.slice(0, length + 10));
            setIsVisible(false);
        }
    } , [isVisible] )

    useEffect(() => {
        if (!lastElementRef.current) return;
        const options = {
            root : null,
            threshold : 1
        } 
        const observer = new IntersectionObserver( 
            ( entries ) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
        } , 
        options)

        observer.observe(lastElementRef.current)

        return () => observer.disconnect()
    }, [data]);  

    return (
        <main>
            {data.map((v, i) => {
                const isLast = ( i === data.length - 1 );
                return (
                    <Container
                        key={i}
                        id={isLast ? "last" : `${i + 1}`}
                        product={v}
                        ref={isLast ? lastElementRef : null} 
                    />
                );
            })}
        </main>
    );
}

export default Products;