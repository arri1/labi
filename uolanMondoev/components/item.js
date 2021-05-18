import React from 'react'
import {
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native'
const styles = StyleSheet.create({

    button: {
        width: 200,
        height: 50,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    }

});
const Item = (props) => {
    const { value, setBackgroundColor } = props
    return (

        <TouchableOpacity
            style={styles.button}
            onPress={
                () => {
                    setBackgroundColor(value)
                }}
        >
            <Text>{value}</Text>
        </TouchableOpacity>
    )

}
export default Item