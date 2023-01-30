import {useColorScheme} from 'react-native';

interface ColorsInterface {
    primary: string;
    StatusBar: string;
    foreground: string;
    background: string;
    textPrimary: string;
    borderPrimary: string;
    critical: string;
    textCardShare: string;
    backgroundIcon: string;
    iconPrimary: string;
    shadow: string;
}

const Colors = (): ColorsInterface => {
    const themeMode = useColorScheme();
    const isDark = themeMode === 'dark';

    const colorList: ColorsInterface = {
        primary: '#8B93D7',
        StatusBar: '#8B93D7',
        critical: '#DB5C5C',
        foreground: isDark ? '#ffffff' : '#000000',
        background: isDark ? '#000000' : '#ffffff',
        backgroundIcon: isDark ? '#000000' : '#ffffff',
        textPrimary: isDark ? '#ffffff' : '#000000',
        borderPrimary: isDark ? '#aaaaaa' : '#000000',
        textCardShare: isDark ? '#ffffff' : '#141418',

        //
        iconPrimary: isDark ? '#aaaaaa' : '#000000',
        //
        shadow: isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)',
    };

    return colorList;
};

export default Colors;
export type ColorsState = ReturnType<typeof Colors>;
