import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    containerLab2: {
        flex: 1,
        width: '100%',
        height: 600
    },
    itemLab2: {
        flex: 1,
        minHeight: 210,
        borderRadius: 20,
        margin: 30,
        marginTop: 20,
        marginBottom: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    // Containers
    containerLab3: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerProfile: {
        flex: 1,
        margin: 15
    },
    containerLogin: {
        alignItems: 'center',
        flex: 1,
        margin: 15
    },
    containerSignup: {
        alignItems: 'center',
        flex: 1,
        margin: 15,
    },
    // Components
    cardStyle: {
        flex: 1,
        margin: 23,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 20,
        backgroundColor: 'transparent',
        elevation: 0
    },
    cardContent: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#FFFFFF70'
    },
    scrollview: {
        width: '100%'
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%'
    },
    textInput: {
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
    },
    title: {
        textAlign: 'center',
        fontSize: 24
    }
});