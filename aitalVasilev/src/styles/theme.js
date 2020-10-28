import { DefaultTheme } from 'react-native-paper'

export const themePrimary = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        gradient1: '#F55C7A',
        gradient2: '#F6BC66',
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
        gradient1: '#8DBBFF',
        gradient2: '#FF75A7',
        complete1: '#33E4A5',
        complete2: '#67E7B9',
        grey: '#AEAEAE',
        dark: '#2C2C2C',
        light: '#F6F6F6'
    }
}
