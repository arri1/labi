import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
    },
    itemLab2: {
        flex: 1,
        minHeight: 235,
        borderRadius: 30,
        margin: 25,
        marginBottom: 0,
        marginTop: 25,
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
    containerProfile: {
        flex: 1,
        margin: 15
    },
    textInput: {
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
    },
    borderStyle: {
        borderRadius: 10
    },
    backgroundImage: {
        flex: 1,
        width: '100%'
    },
    styleCard: {
        flex: 1,
        margin: -20,
        marginTop: -18,
        marginBottom: -10,
        borderRadius: 25,
        backgroundColor: 'transparent',
    },
    contentCard: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#ddebe7'
    }, 
    
    containerPosts: {
        flex: 1,
    },
    titleAddPost: {
        textAlign: 'center',
        fontSize: 24
    },
    inputAddPost: {
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: 'stretch',
        marginTop: 18,
        backgroundColor: '#FFFFFF'
    },
    containerAddPost: {
        alignItems: 'center',
        flex: 1,
        margin: 15
    },
    itemPostComponent: {
        flex: 1,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    }
})
