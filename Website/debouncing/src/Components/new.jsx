import React, { useEffect, useRef, useState } from "react";
import productDetails from "../Data/database";
import Container from "./Container";
import "./products.css";

function Products() {
    const [length, setLength] = useState(10);
    const [data, setData] = useState([]);
    const [cache, setCache] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const lastElementRef = useRef(null);

    // Load initial data
    useEffect(() => {
        setCache(productDetails.slice(0, length));
    }, []);

    // Update displayed data when cache or length changes
    useEffect(() => {
        setData(cache.slice(0, length));
    }, [cache, length]);

    // IntersectionObserver to detect visibility of last element
    useEffect(() => {
        if (!lastElementRef.current) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                }
            },
            { root: null, threshold: 1 } // Root is viewport
        );

        observer.observe(lastElementRef.current);

        return () => observer.disconnect();
    }, [data]); // Re-run when data updates

    // Load more data when last element is visible
    useEffect(() => {
        if (isVisible) {
            setLength((prev) => prev + 10);
            setCache(productDetails.slice(0, length + 10)); // Fetch more data
            setIsVisible(false); // Reset visibility to prevent multiple calls
        }
    }, [isVisible]);

    return (
        <main>
            {data.map((v, i) => {
                const isLast = i === data.length - 1;
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
