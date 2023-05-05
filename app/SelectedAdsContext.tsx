import React from 'react';

interface SelectedAdsContext {
    setSelectedAds: (value: []) => void;
    selectedAds: [];
}

export const SelectedAdsContext = React.createContext<SelectedAdsContext>({
    selectedAds: [],
    setSelectedAds: () => {},
});