import React from 'react';

interface DarkModeActionsContext {
    setDarkMode: (value: boolean) => void;
    darkMode: boolean;
}

export const DarkModeActionsContext = React.createContext<DarkModeActionsContext>({
    darkMode: false,
    setDarkMode: () => {},
});