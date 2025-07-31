import { useState, useEffect } from "react";

function getWindowWidth() {
    if (typeof window !== "undefined") {
        return window.innerWidth;
    }
    return 1200; // valore di default se server side o undefined
}

export default function useWidthScreen() {
    const [width, setWidth] = useState(getWindowWidth);

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);

        // Imposta larghezza subito al mount (utile se dimensione iniziale sbagliata)
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return width;
}
