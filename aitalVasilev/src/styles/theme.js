import { DefaultTheme } from 'react-native-paper'

export const themePrimary = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        gradient1: '#D25AC6',
        gradient2: '#FD9330',
        textColor: '#F6F6F6',
        cardColor: '#000000CC',

        solidLeft: '#F57C73',
        solidRight: '#F6AC69',
        complete1: '#33E4A5',
        complete2: '#67E7B9',
        grey: '#AEAEAE',
        dark: '#2C2C2C',
        light: '#F6F6F6'
    }
}

export const themeSecondary = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        gradient1: '#FF4A3F',
        gradient2: '#E99D44',
        textColor: '#2C2C2C',
        cardColor: '#FFFFFFCC',

        solidLeft: '#9EBFFF',
        solidRight: '#FF869C',
        complete1: '#33E4A5',
        complete2: '#67E7B9',
        grey: '#AEAEAE',
        dark: '#2C2C2C',
        light: '#F6F6F6'
    }
}
