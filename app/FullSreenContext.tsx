import React from 'react';

interface FullScreenContext {
    setFullScreen: (value: boolean) => void;
    fullScreen: boolean;
}

export const FullScreenContext = React.createContext<FullScreenContext>({
    fullScreen: false,
    setFullScreen: () => {
    },
});