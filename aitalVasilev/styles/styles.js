import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    // CONTAINERS
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
    // COMPONENTS
    item: {
        padding: 24,
        marginBottom: 24,
        marginLeft: 24,
        marginRight: 24,
        borderColor: 'black',
        borderWidth: StyleSheet.hairlineWidth
    }
})
