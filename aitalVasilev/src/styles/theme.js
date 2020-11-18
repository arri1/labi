import { DefaultTheme } from 'react-native-paper'

export const themePrimary = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        gradient1: '#D25AC6',
        gradient2: '#FD9330',
        textColor: '#F6F6F6',
        cardColor: '#00000088',
        barColor: '#181818'
    }
}

export const themeSecondary = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        gradient1: '#FF4A3F',
        gradient2: '#E99D44',
        textColor: '#2C2C2C',
        cardColor: '#FFFFFF88',
        barColor: '#FFFFFF'
    }
}
