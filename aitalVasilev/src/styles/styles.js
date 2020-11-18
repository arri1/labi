import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    // Containers
    backgroundContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    checkboxContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 51,
        width: 51,
        padding: 10,
        marginRight: 20
    },
    colorItemsContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 10
    },
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    maskContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // Components
    button: {
        width: 180,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 20,
        borderRadius: 50
    },
    checkbox: {
        position: 'absolute',
        height: '100%',
        width: '100%',
        borderRadius: 50,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        zIndex: 0,
        elevation: 5
    },
    checkmark: {
        flex: 1,
        width: '100%',
        height: '100%',
        zIndex: 1,
        elevation: 6
    },
    colorCard: {
        justifyContent: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15
    },
    colorCircle: {
        width: 44,
        height: 44,
        borderRadius: 50,
        backgroundColor: 'black'
    },
    colorCircleMask: {
        height: 44,
        width: 44
    },
    scroll: {
        width: '100%'
    },
    todoItem: {
        flex: 1,
        padding: 4,
        margin: 6,
        borderRadius: 20,
        elevation: 0
    },
    wrappedHeader: {
        flex: 1,
        alignItems: 'center',
        margin: 16
    },
    // Navigation
    navHearder: {
        height: 78,
        elevation: 0
    },
    navTabBar: {
        height: 70,
        borderTopWidth: 0
    },
    // Texts
    navHeaderTitle: {
        fontFamily: 'Lora-Regular',
        fontWeight: '400',
        fontSize: 28
    },
    todoItemText: {
        fontFamily: 'Lora-Regular',
        fontSize: 18,
        fontWeight: '400'
    },
    navTabLabel: {
        fontFamily: 'Lora-Regular',
        fontWeight: '400',
        fontSize: 13,
        textAlignVertical: 'top',
        lineHeight: 24
    },
    settingsTitle: {
        fontFamily: 'Lora-Regular',
        fontWeight: '400',
        fontSize: 32,
        margin: 60
    },
    buttonText: {
        fontFamily: 'Lora-Regular',
        fontWeight: '400',
        fontSize: 14
    },
    smallTextButton: {
        fontFamily: 'Lora-Regular',
        fontWeight: '400',
        fontSize: 12,
        textDecorationLine: 'underline'
    }
})
