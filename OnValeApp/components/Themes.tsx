import { useColorScheme } from 'react-native';

export const darkTheme = {
    background: '#1e1e1e',
    background2: '#2c2c2c',
    border: '#7c7c7cff',
    text: '#f6f6f6',
};

export const lightTheme = {
    background: '#fefefe',
    background2: '#f6f6f6',
    border: '#7c7c7cff',
    text: '#1e1e1e',
};

export default function useTheme() {
    const scheme = useColorScheme();
    const isDark = scheme === 'dark';
    return {
        isDark,
        colors: isDark ? darkTheme : lightTheme,
    };
}
