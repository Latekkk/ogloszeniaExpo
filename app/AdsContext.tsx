import React from 'react';

interface AdsContext {
    setAds: (value: []) => void;
    ads: [];
}

export const AdsContext = React.createContext<AdsContext>({
    ads: [],
    setAds: () => {},
});