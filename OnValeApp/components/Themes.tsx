//REACT
import { useColorScheme } from 'react-native';

//THEMES
export const darkTheme = {
    background: '#1e1e1e',
    background2: '#2c2c2c',
    border: '#2e2e2eff',
    text: '#f6f6f6',
};

export const lightTheme = {
    background: '#fefefe',
    background2: '#f6f6f6',
    border: '#e0e0e0ff',
    text: '#1e1e1e',
};

//HOOK
export default function useTheme() {
    const scheme = useColorScheme();
    const isDark = scheme === 'dark';
    return {
        isDark,
        colors: isDark ? darkTheme : lightTheme,
    };
}
