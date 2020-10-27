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
    item: {
        flex: 1,
        padding: 6,
        margin: 6,
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
    colorCard: {
        justifyContent: 'center',
        padding: 20,
        width: '100%',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15
    },
    // Texts
    headerText: {
        fontSize: 32
    },
    regularText: {
        fontSize: 18
    }
})
