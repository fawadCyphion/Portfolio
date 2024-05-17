const { useState, useEffect } = require("react");

export const useIsSmallScreen = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        // Check if window is defined (i.e., we're in the browser)
        const handleResize = () => {
            if (typeof window !== 'undefined') {
                setIsSmallScreen(window.innerWidth < 768);
            }
        };
        handleResize(); // Call on mount
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isSmallScreen;
};
