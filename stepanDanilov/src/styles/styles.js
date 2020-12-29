import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerLab2:{
        flex: 1,
        width: '100%'
    },
    cardStyle:{
        flex: 1,
        margin: 30,
        marginTop: 20,
        marginBottom: 10,
        borderRadius: 20,
        backgroundColor: 'transparent',
        elevation: 0,
    },
    cardContent: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'transparent'
    },
    scrollview: {
        width: '100%'
    },
    lab3Container:{
        flex: 1,
        width: '100%',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        width: '100%',
        alignItems: 'center'
    },
    lab3BackgroundImage:{
        position:'absolute',
        width: '100%',
        height: '100%'
    },
    itemLab2: {
        flex: 1,
        minHeight: 210,
        borderRadius: 20,
        margin: 30,
        marginTop: 20,
        marginBottom: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    navHeaderTitle: {
        fontFamily: 'Lato',
        fontWeight: '300',
        fontSize: 28
    },
    navTabLabel: {
        fontFamily: 'Lato',
        fontWeight: '300',
        fontSize: 28
    },
    backgroundContainer: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});