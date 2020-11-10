import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    // Containers
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    colorItemsContainer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        padding: 10
    },
    maskContainer: {
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    // Components
    colorCircleMask: {
        height: 44,
        width: 44
    },
    colorCircle: {
        width: 44,
        height: 44,
        borderRadius: 50,
        backgroundColor: 'black'
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
    scroll: {
        width: '100%'
    },
    colorCard: {
        justifyContent: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15
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
    navTabLabel: {
        fontFamily: 'Lora-Regular',
        fontWeight: '400',
        fontSize: 13,
        textAlignVertical: 'top',
        lineHeight: 24
    },
    todoItemText: {
        fontFamily: 'Lora-Regular',
        fontSize: 18,
        fontWeight: '400'
    }
})
