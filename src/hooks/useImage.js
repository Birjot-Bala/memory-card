import { useEffect, useState } from "react";

const useImage = (source) => {
    const [hasLoaded, setHasLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [hasStarted, setHasStarted] = useState(false);

    useEffect(() => {
        setHasStarted(true);
        setHasLoaded(false);
        setHasError(false);

        const image = new Image();
        image.src = source;

        const handleError = () => {
            setHasError(true);
        };

        const handleLoad = () => {
            setHasLoaded(true);
            setHasError(false);
        };

        image.onerror = handleError;
        image.onload = handleLoad;

        return () => {
            image.removeEventListener("error", handleError);
            image.removeEventListener("load", handleLoad);
        };
    }, [source]);

    return {
        hasLoaded, hasError, hasStarted
    };
};

export default useImage;
