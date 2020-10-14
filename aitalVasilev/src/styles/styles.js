import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    // Containers
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    testView: {
        position: 'absolute',
        width: '100%',
        height: '100%'
    },
    // Components
    item: {
        flex: 1,
        padding: 6,
        margin: 6,
        backgroundColor: 'white',
        borderRadius: 48
    },
    wrappedHeader: {
        flex: 1,
        alignItems: 'center',
        margin: 16
    },
    scroll: {
        width: '95 %'
    },
    // Texts
    headerText: {
        fontSize: 32
    },
    regularText: {
        fontSize: 18
    }
})
